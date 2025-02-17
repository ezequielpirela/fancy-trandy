import React, { useContext } from 'react';
import './Pricing.css';
import { useHttpClient } from '../hooks/http-request';
import Product from '../components/Product';
import { useStateValue, UserContext } from '../context/ContextProvider';
import { getBasketTotalPrice } from '../hooks/reducer';
import SubTotal from '../components/SubTotal';
import Modal from '../components/shared/Modal';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import '../sass/pricing.scss'
const stripePromise = loadStripe('pk_test_51IQkB1Fsyfu7OQPBzMqFTLhg5WFNws1E1aM9MRxhdC2V1OpjysYbfbxi54JDKVmIYSx7GRviosUw9ckkQ7jKJOdE00YdYKTob7'
);
const Pricing2 = () => {
    const authUser = useContext(UserContext);
    const [{ basket }, dispatch] = useStateValue();
    const {sendRequest, error, clearError} = useHttpClient();
    let arrayPriceId= [];
    basket?.forEach(item => {for(const property in item){
        if(property === 'priceId'){
            arrayPriceId.push({price: item[property], quantity: 1})
        }
    }});
    const createOrder = async () => {
        try{
         await sendRequest(`${process.env.REACT_APP_BACKEND_URL}payments/orders`, 'POST',
            JSON.stringify({amount: getBasketTotalPrice(basket), basket: basket, user: authUser.userId}),
             {'Content-Type': 'application/json', "Authorization": 'Bearer ' + authUser.token})  
        }catch(e){
            console.log(e)
        }
        dispatch({type: 'CLEAN_BASKET'})
    }
    const handleClick = async (e) => {
        const stripe = await stripePromise;
        let response;
        try{
            response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}create-checkout-session`, 'POST',
            JSON.stringify({arrayPriceId}), {'Content-Type': 'application/json', "Authorization": 'Bearer ' + authUser.token})
        }catch(e){
            
        }
        try {
            createOrder();
            await stripe.redirectToCheckout({sessionId: response.sessionId})
        }catch(e){
           
        }
    }
    const defaultMessage = (<div className='pricing__defaultMessage'>
          <h1 className='canceled__title'>Disculpa, aún no tienes productos seleccionados.<br /> Dirigete a la  página de productos y selecciona algunos.</h1>
          <Link to='/products'>Productos</Link>
          <img alt='canceled' className='canceled__image' src='https://res.cloudinary.com/ezepirela/image/upload/v1624829178/fancytrandy/Denied_npvicr.png' />
        </div>)
    return (
        <div className='pricing'>
                    <p className='stripe-textPricing'></p>
            <Modal showModal={error} message={error} clearError={clearError}/>
                {basket?.length === 0 ? defaultMessage : (  
                    <div className='pricing__resume'>
                    <SubTotal className='pricing__subtotal' payment={handleClick}/>
                            <ul className='pricing__listProducts'>
                                <li className='pricing__products'>
                                    {basket?.map(product => (
                                        <Product key={product.id} {...product} 
                                            displayPrice={true} disableText={true} disableButton={true}/>
                                     ))}
                                </li>
                            </ul>
                    </div>  
                )}   
        </div>
        
    )
}
export default Pricing2;