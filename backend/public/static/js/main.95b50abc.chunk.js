(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},280:function(e,t,a){},283:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(14),n=a.n(s),i=(a(163),a(27)),o=a(19),l=a(23),u=a(10),d=(a(164),a(22)),j=a(42),p=a(143),b=a(2),m=Object(r.createContext)(),h=Object(r.createContext)({userId:null,firstname:null,lastname:null,username:null,token:null,login:function(){},logout:function(){}}),O=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(b.jsx)(m.Provider,{value:Object(r.useReducer)(t,a),children:c})},x=function(){return Object(r.useContext)(m)},E=a(64),g=a.n(E),f=function(e){var t=e.priceId,a=e.displayPrice,r=e.title,c=e.price,s=e.image,n=e.text,i=e.disableText,o=e.disableButton,l=x(),m=Object(u.a)(l,2)[1];return Object(b.jsx)("div",{className:"product",children:Object(b.jsx)(p.a,{className:"product__cardDeck",children:Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(d.a.Body,{className:"product__cardContainer",children:[Object(b.jsx)("div",{className:"product__cardTitle",children:Object(b.jsx)(d.a.Title,{className:"product__title",children:r})}),!i&&Object(b.jsx)(d.a.Text,{className:"product__description",children:n}),a&&Object(b.jsx)(d.a.Text,{children:Object(b.jsx)(g.a,{renderText:function(e){return Object(b.jsxs)("p",{children:[" Price: ",Object(b.jsx)("strong",{children:"".concat(e)})]})},decimalState:2,value:c,displayType:"text",thousandSeparator:!0,prefix:"$"})})]}),Object(b.jsx)("div",{className:"product__cardImage__container",children:Object(b.jsx)(d.a.Img,{className:"product__cardImage",variant:"bottom",src:s})}),Object(b.jsxs)(d.a.Footer,{className:"product__footer",children:[!o&&Object(b.jsx)(j.a,{onClick:function(){m({type:"ADD_TO_BASKET",item:{priceId:t,title:r,price:c,text:n,image:s}})},variant:"outline-danger",children:"Lo Quiero!"}),o&&Object(b.jsx)(j.a,{onClick:function(){m({type:"REMOVE_ITEM",priceId:t})},variant:"outline-danger",children:"Retirar"})]})]})})})},A=a(54),v=(a(169),function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsxs)(A.a,{activeIndex:a,onSelect:function(e,t){c(e)},children:[Object(b.jsxs)(A.a.Item,{children:[Object(b.jsx)("img",{className:"d-block w-100 ",src:"https://www.importadoracrisma.com/wp-content/uploads/2021/01/PALETA-HUDABEAUTY-NEON.jpg",alt:"First slide"}),Object(b.jsx)(A.a.Caption,{className:"home__carouselCaptionTitle",children:Object(b.jsx)("h3",{children:"Naughty Nude Pallete"})})]}),Object(b.jsxs)(A.a.Item,{className:"home__carouselItem",children:[Object(b.jsx)("img",{className:"d-block w-100",src:"https://www.yoquieromayorista.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-12-at-16.48.38-1.jpeg",alt:"Second slide"}),Object(b.jsx)(A.a.Caption,{id:"home__carouselCaptionTitle2",children:Object(b.jsx)("h3",{children:"Over Highlighting Powder"})})]}),Object(b.jsxs)(A.a.Item,{children:[Object(b.jsx)("img",{className:"d-block w-100 ",src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-scara-huda-beauty-1590049277.jpg",alt:"Third slide"}),Object(b.jsx)(A.a.Caption,{className:"home__carouselCaptionTitle",children:Object(b.jsx)("h3",{children:"Legit Lashes"})})]})]}),Object(b.jsx)("div",{className:"home__products",children:[{title:"Set de Labiales Huda Beauty",priceId:"price_1IcYTkFsyfu7OQPBhBJaritZ",price:22,image:"https://janireviguri.com/wp-content/uploads/2019/03/labialesHuda.png",text:"hermoso set de labiales de Huda Beauty colores pastel"},{title:"Sombra de Ojos. Paleta de Maquillaje",price:30,priceId:"price_1Icdj1Fsyfu7OQPBPmiBxaL5",text:"Perfecto conjunto de sombra para cada ocasion",image:"https://images-na.ssl-images-amazon.com/images/I/71l76Jc7efL._SL1500_.jpg"},{title:"Base de Maquillaje",price:6,priceId:"price_1IcdlHFsyfu7OQPBZz79hpYm",image:"https://basesdemaquillaje.com/wp-content/uploads/base-faux-filter.jpg",text:"Preciosa base perfecta para salidas nocturnas"},{title:"Kit Labiales Nude",price:30,priceId:"price_1IcdnlFsyfu7OQPBHKkYTmC2",image:"https://sakuraimakeup.com/1395-large_default/kit-12-labiales-nude-huda-beauty.jpg",text:"Set completo de labiales con colores seductores de la linea Nude"},{title:"Corrector Huda Beauty",price:4,priceId:"price_1IcdomFsyfu7OQPBDZz7qhaR",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-scara-huda-beauty-1590049277.jpg",text:"Gran corrector para el mejor delineado"}].map((function(e){return Object(b.jsx)(f,Object(l.a)({},e),e.id)}))})]})}),y=(a(170),function(){return Object(b.jsx)("div",{className:"products",children:[{title:"Set de Labiales Huda Beauty",priceId:"price_1IcYTkFsyfu7OQPBhBJaritZ",price:22,image:"https://janireviguri.com/wp-content/uploads/2019/03/labialesHuda.png",text:"hermoso set de labiales de Huda Beauty colores pastel"},{title:"Sombra de Ojos. Paleta de Maquillaje",price:30,priceId:"price_1Icdj1Fsyfu7OQPBPmiBxaL5",text:"Perfecto conjunto de sombra para cada ocasion",image:"https://images-na.ssl-images-amazon.com/images/I/71l76Jc7efL._SL1500_.jpg"},{title:"Base de Maquillaje",price:6,priceId:"price_1IcdlHFsyfu7OQPBZz79hpYm",image:"https://basesdemaquillaje.com/wp-content/uploads/base-faux-filter.jpg",text:"Preciosa base perfecta para salidas nocturnas"},{title:"Kit Labiales Nude",price:30,priceId:"price_1IcdnlFsyfu7OQPBHKkYTmC2",image:"https://sakuraimakeup.com/1395-large_default/kit-12-labiales-nude-huda-beauty.jpg",text:"Set completo de labiales con colores seductores de la linea Nude"},{title:"Corrector Huda Beauty",price:4,priceId:"price_1IcdomFsyfu7OQPBDZz7qhaR",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-scara-huda-beauty-1590049277.jpg",text:"Gran corrector para el mejor delineado"},{title:"Set de Labiales Huda Beauty",priceId:"price_1IcYTkFsyfu7OQPBhBJaritZ",price:22,image:"https://janireviguri.com/wp-content/uploads/2019/03/labialesHuda.png",text:"hermoso set de labiales de Huda Beauty colores pastel"},{title:"Sombra de Ojos. Paleta de Maquillaje",price:30,priceId:"price_1Icdj1Fsyfu7OQPBPmiBxaL5",text:"Perfecto conjunto de sombra para cada ocasion",image:"https://images-na.ssl-images-amazon.com/images/I/71l76Jc7efL._SL1500_.jpg"},{title:"Base de Maquillaje",price:6,priceId:"price_1IcdlHFsyfu7OQPBZz79hpYm",image:"https://basesdemaquillaje.com/wp-content/uploads/base-faux-filter.jpg",text:"Preciosa base perfecta para salidas nocturnas"},{title:"Kit Labiales Nude",price:30,priceId:"price_1IcdnlFsyfu7OQPBHKkYTmC2",image:"https://sakuraimakeup.com/1395-large_default/kit-12-labiales-nude-huda-beauty.jpg",text:"Set completo de labiales con colores seductores de la linea Nude"},{title:"Corrector Huda Beauty",price:4,priceId:"price_1IcdomFsyfu7OQPBDZz7qhaR",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-scara-huda-beauty-1590049277.jpg",text:"Gran corrector para el mejor delineado"}].map((function(e){return Object(b.jsx)(f,Object(l.a)({displayPrice:!0,className:"products__item"},e),e.id)}))})}),B=a(152),R=a(28),k=a.n(R),w=a(43),N=(a(172),function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(),n=Object(u.a)(s,2),i=n[0],o=n[1],l=Object(r.useRef)([]),d=Object(r.useCallback)(function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r,s,n,i,u,d=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>1&&void 0!==d[1]?d[1]:"GET",r=d.length>2&&void 0!==d[2]?d[2]:null,s=d.length>3&&void 0!==d[3]?d[3]:{},console.log(r),c(!0),n=new AbortController,l.current.push(n),e.prev=7,e.next=10,fetch(t,{method:a,body:r,headers:s,signal:n.signal});case 10:return i=e.sent,e.next=13,i.json();case 13:if(u=e.sent,l.current=l.current.filter((function(e){return e!==n})),i.ok){e.next=18;break}throw console.log(i),new Error(i.message);case 18:return c(!1),e.abrupt("return",u);case 22:throw e.prev=22,e.t0=e.catch(7),c(!1),console.log(e.t0.message),o(e.t0.message),e.t0;case 28:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){return function(){l.current.forEach((function(e){return e.abort()}))}}),[]),{errorBa:i,isLoading:a,sendRequest:d,clearError:function(){o(null)}}}),P=a(18),I={basket:[]},Q=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},H=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(l.a)(Object(l.a)({},e),{},{basket:[].concat(Object(P.a)(e.basket),[t.item])});case"CLEAN_BASKET":return Object(l.a)(Object(l.a)({},e),{},{basket:[]});case"REMOVE_ITEM":var a=Object(P.a)(e.basket),r=e.basket.findIndex((function(e){return e.id===t.id}));return r>=0?a.splice(r,1):console.log("sorry could not find the ".concat(t.id," in the state array")),Object(l.a)(Object(l.a)({},e),{},{basket:a});default:return e}},T=(a(173),function(e){var t=e.payment,a=x(),r=Object(u.a)(a,1)[0].basket;return Object(b.jsx)("div",{className:"subtotal",children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(d.a.Body,{children:[Object(b.jsx)(d.a.Title,{children:"Your Shopping Basket"}),Object(b.jsxs)(d.a.Subtitle,{className:"mb-2 text-muted",children:["You have ",null===r||void 0===r?void 0:r.length," picked products"]}),Object(b.jsx)(d.a.Text,{children:Object(b.jsx)(g.a,{renderText:function(e){return Object(b.jsxs)("p",{children:[" SubTotal: ",Object(b.jsx)("strong",{children:"".concat(e)})]})},decimalState:2,value:Q(r),displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(b.jsx)(d.a.Link,{children:Object(b.jsx)(j.a,{onClick:t,children:"Redirect to Payment Page"})})]})})})}),S=a(144),C=Object(S.a)("pk_test_51IQkB1Fsyfu7OQPBzMqFTLhg5WFNws1E1aM9MRxhdC2V1OpjysYbfbxi54JDKVmIYSx7GRviosUw9ckkQ7jKJOdE00YdYKTob7"),D=function(){var e=Object(r.useContext)(h),t=x(),a=Object(u.a)(t,2),c=a[0].basket,s=a[1],n=N().sendRequest,i=[];null===c||void 0===c||c.forEach((function(e){for(var t in e)"priceId"===t&&i.push({price:e[t],quantity:1})}));var o=function(){var t=Object(w.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat("https://fancytrandy.herokuapp.com/","payments/orders"),"POST",JSON.stringify({amount:Q(c),basket:c,user:e.userId}),{"Content-Type":"application/json"});case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:console.log(a),s({type:"CLEAN_BASKET"});case 11:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C;case 2:return a=e.sent,e.prev=3,e.next=6,n("".concat("https://fancytrandy.herokuapp.com/","create-checkout-session"),"POST",JSON.stringify({arrayProp:i}),{"Content-Type":"application/json"});case 6:r=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:return console.log(r),e.prev=13,o(),e.next=17,a.redirectToCheckout({sessionId:r.sessionId});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(13),console.log(e.t1);case 22:case"end":return e.stop()}}),e,null,[[3,9],[13,19]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(b.jsx)("h1",{className:"pricing__defaultMessage",children:"Sorry, you not have products selected."});return Object(b.jsxs)("div",{className:"pricing",children:[Object(b.jsx)("section",{className:"pricing__productsContainer",children:0===(null===c||void 0===c?void 0:c.length)?j:Object(b.jsxs)("div",{className:"pricing__resume",children:[Object(b.jsx)("h2",{className:"pricing__productsTitle",children:!1===e.token?"SignUp to continue before payment ":"welcome ".concat(e.firstname," ").concat(e.lastname)}),Object(b.jsx)("div",{className:"pricing__products",children:null===c||void 0===c?void 0:c.map((function(e){return Object(b.jsx)(f,Object(l.a)(Object(l.a)({},e),{},{displayPrice:!0,disableText:!0,disableButton:!0}),e.id)}))})]})}),Object(b.jsx)("aside",{className:"pricing__subtotal",children:Object(b.jsx)(T,{payment:d})})]})},M=a(101);a(174);var L=function(e){return Object(b.jsx)("div",{className:"orderitem__card",children:e.basket.map((function(t){return Object(b.jsx)("li",{children:Object(b.jsxs)(d.a,{style:{width:"15rem"},children:[Object(b.jsx)(d.a.Img,{variant:"top",src:t.image,className:"orderitem__image"}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)(d.a.Title,{className:"orderitem__cardTitle",children:t.title})}),Object(b.jsxs)(M.a,{className:"list-group-flush",children:[Object(b.jsx)(M.a.Item,{children:Object(b.jsx)(g.a,{renderText:function(e){return Object(b.jsxs)("p",{children:[" Product Price: ",Object(b.jsx)("strong",{children:"".concat(e)})]})},decimalState:2,value:t.price,displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(b.jsx)(M.a.Item,{children:"Purchased: ".concat(e.date.slice(0,10)," at ").concat(e.date.slice(11,19))})]})]})},t.id)}))})};a(175);var Y=function(e){var t=e.loadedOrders;return 0===t.length?Object(b.jsx)("h1",{children:"The users hasnt orders"}):Object(b.jsx)("ul",{className:"orderlist__list",children:t.map((function(e){return Object(b.jsx)(L,Object(l.a)({},e),e.id)}))})},_=(a(176),function(){var e=N(),t=e.isLoading,a=e.sendRequest,c=Object(r.useContext)(h),s=Object(o.g)().userId,n=Object(r.useState)(),i=Object(u.a)(n,2),l=i[0],d=i[1];return Object(r.useEffect)((function(){var e;(function(){var t=Object(w.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("".concat("https://fancytrandy.herokuapp.com/","payments/orders/").concat(s));case 3:e=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:d(e.orders);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}})()()}),[a,c,s]),Object(b.jsxs)("div",{className:"orders",children:[Object(b.jsx)("h1",{className:"order__title",children:"Your Previous orders"}),!t&&l&&Object(b.jsx)(Y,{loadedOrders:l})]})});var q=function(){return Object(b.jsx)("div",{className:"success",children:Object(b.jsxs)("div",{className:"sr-payment-summary completed-view",children:[Object(b.jsx)("h1",{children:"Your payment succeeded"}),Object(b.jsx)(i.b,{to:"/",children:"Restart demo"})]})})};var z=function(){return Object(b.jsxs)("div",{className:"canceled",children:[Object(b.jsx)("h1",{children:"Your payment was canceled"}),Object(b.jsx)(i.b,{to:"/",children:"Restart demo"})]})},Z=a(153),G=a(325),X=a(324),W=a(47),F=a(71);function J(e){return Object(b.jsxs)(F.a,Object(l.a)(Object(l.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(F.a.Header,{closeButton:!0,children:Object(b.jsx)(F.a.Title,{id:"contained-modal-title-vcenter",children:"An error just happened"})}),Object(b.jsx)(F.a.Body,{children:Object(b.jsx)("p",{children:e.authMessage})}),Object(b.jsx)(F.a.Footer,{children:Object(b.jsx)(j.a,{onClick:e.onHide,children:"Close"})})]}))}var V,K=function(e){var t=e.showModal,a=e.authMessage,s=e.clearError,n=c.a.useState(!1),i=Object(u.a)(n,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){!function(e){if(e)l(!0)}(t),function(e){if(e)l(!0)}(a)}),[t,a]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(J,{show:o,authMessage:a,text:t,onHide:function(){s(),l(!1)}})})},U=(a(280),function(){var e,t=Object(r.useState)(!1),a=Object(u.a)(t,2),c=a[0],s=a[1],n=Object(o.f)(),i=N().sendRequest,l=Object(r.useState)(null),d=Object(u.a)(l,2),j=d[0],p=d[1],m=Object(r.useContext)(h);e=c?W.a({username:W.b("Enter your email").email("Enter a valid email").required("Required"),password:W.b("Enter your password").min(8,"Must be at lest 8 characters").required("Required")}):W.a({username:W.b("Enter your email").email("Enter a valid email").required("Required"),firstName:W.b("Enter your email").min(6,"Must be at least 6 characters").required("Required"),lastName:W.b("Enter your email").min(6,"Must be at least 6 characters").required("Required"),password:W.b("Enter your password").min(8,"Must be at lest 8 characters").required("Required")});var O=!0===c?{username:"",password:""}:{firstName:"",lastName:"",username:"",password:""},x=Object(Z.a)({initialValues:O,validationSchema:e,onSubmit:function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r,s,o,l,u,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=17;break}return r=t.username,s=t.lastName,o=t.firstName,l=t.password,e.prev=2,e.next=5,i("".concat("https://fancytrandy.herokuapp.com/","login/registrate"),"POST",JSON.stringify({username:r,password:l,firstName:o,lastName:s}),{"Content-Type":"application/json"});case 5:a=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p("Sign In Failed. Try again");case 11:n.push("/home"),m.login(a.user._id,a.token,a.user.username,a.user.firstName,a.user.lastName),console.log(a),e.next=31;break;case 17:return u=t.username,d=t.password,e.prev=18,e.next=21,i("".concat("https://fancytrandy.herokuapp.com/","login/inicio"),"POST",JSON.stringify({username:u,password:d}),{"Content-Type":"application/json"});case 21:a=e.sent,e.next=27;break;case 24:e.prev=24,e.t1=e.catch(18),p("Login Failed. Try again");case 27:m.login(a.user._id,a.token,a.user.username,a.user.firstName,a.user.lastName),console.log(a),n.push("/home");case 31:case"end":return e.stop()}}),e,null,[[2,8],[18,24]])})));return function(t){return e.apply(this,arguments)}}()});return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:x.handleSubmit,children:[c&&Object(b.jsx)("p",{children:"loginpage"}),Object(b.jsx)(K,{showModal:j,clearError:function(){p(null)},authMessage:j}),Object(b.jsx)(X.a,{variant:"outlined",margin:"normal",id:"email",name:"username",label:"email",value:x.values.email,onChange:x.handleChange,error:x.touched.email&&Boolean(x.errors.email),helperText:x.touched.email&&x.errors.email}),!c&&Object(b.jsx)(X.a,{variant:"outlined",margin:"normal",id:"firstName",name:"firstName",label:"firstName",value:x.values.firstName,onChange:x.handleChange,error:x.touched.firstName&&Boolean(x.errors.firstName),helperText:x.touched.firstName&&x.errors.firstName}),!c&&Object(b.jsx)(X.a,{variant:"outlined",margin:"normal",id:"lastName",name:"lastName",label:"lastName",value:x.values.lastName,onChange:x.handleChange,error:x.touched.lastName&&Boolean(x.errors.lastName),helperText:x.touched.lastName&&x.errors.lastName}),Object(b.jsx)(X.a,{variant:"outlined",margin:"normal",id:"password",name:"password",label:"password",value:x.values.password,onChange:x.handleChange,type:"password",error:x.touched.password&&Boolean(x.errors.password),helperText:x.touched.password&&x.errors.password}),Object(b.jsx)(G.a,{type:"submit",variant:"contained",fullwidth:"true",color:"primary",children:"Submit"})]}),Object(b.jsx)("div",{className:"signup__button",children:Object(b.jsx)(G.a,{onClick:function(){s((function(e){return!e}))},variant:"outline-info",children:!0===c?"I don't have an account":"I've already an account"})})]})}),$=a(78),ee=a(60),te=(a(282),a(283),a(151)),ae=a(150),re=a.n(ae),ce=function(){var e=x(),t=Object(u.a)(e,1)[0].basket,a=Object(r.useContext)(h);return Object(b.jsxs)($.a,{className:"header__navbar",collapseOnSelect:!0,expand:"md",variant:"light",children:[Object(b.jsx)($.a.Brand,{href:"#home",children:Object(b.jsx)("img",{className:"header__image",alt:"",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADGAMYDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAwUIBAIJ/8QANRAAAQQCAQMDAwMDAwMFAAAAAQACAwQFBhEHEiEIEzEUIkEVUWEjMnEWM3IXUqFCYoGR0f/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMFBAb/xAArEQEAAgIBAwMCBQUAAAAAAAAAARECAyEEEjEFQWEiURMUQqHwcYGRsfH/2gAMAwEAAhEDEQA/AP04REXyPTEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARE5H7oCIiAiIgIiICInIQEREBERAREQEREBERAREQEREBERBzbv8A1b3rOap1C6h651Eq6JqPTy7kcO90eGiyGSyd2meyQtdO72omum/oxx+29zjw7uHcGjNoPTL1jug1/K7p6pcbJHYgrWMxjG6NSE0Ly1rpYIbDHtaeD3NEjo/57T8KuvUllequ3dYNR9OerdNdMoY/Ytg/1fZfYzMkb8vVxjmSuddbDWd7DJpWQtDuZXu9sNIb+Okst1Mn6b6RLtvWiHD4aVtiOrDVwtyfIm1NIQ2KCEPgikkle89rWBn888c8b9nKOZ5T8eB5PKKt9V6t5jLbxT0Taum+W1m7lcRPm8e6azDZHsQyxxyR2DCS2GYGaMhoc9pBdw/lpC8+x+proXqusZHcMv1FxzcXistYwVmSBsk7xfgAM0DY42l73MBBd2ggDzzws1LfdC0EUMi6xdNZulo60s2ymNLOPOU/Vndwj+n/AO7gju7uft7eO7u+3jnwonqnqRwOcydmtsurZbUKTddm2ytazMsDC/ExPax9iaJj3Prg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cRZjir03MfdBY090Zb3yFzj/AGta0sA445c/+FAdQzeexssd21i4Ynw99f664XugpuLv6hexgLmyPPlznkc/wFttq03MY7JndZrlfOVbjWvvM9lzYDwB2lzGOJMfAHn7uCOSD+J3TMXD68PSOm6PqZ1bZjnGYxv6onP49o48RMxN/wCUYvb1k8HtuyT4q7EyTKXAyO+f6jY4GPdwWgAh3I7RzweAD/8AHQeKv18pja2QqWGzw2ImyMkaOA4EfPB+P8LSa9Z1rd9fr2v0ipLBGTCa8sLHthe3wWt8ccfHBH44UihhirxMggiZHHG0NYxjQGtaPgAD4CuETHu8z1rrdPVduuNP4ezDieYm6iIj2v2/p9vL7REW3giIiAiIgIiICIiAiIgwPo05LUd6SrC6zE0tjmLAXsB+QD8gLW7HrFfYvpHvvWak1KUywywFvLSWlp8OBHwfB45H4W5RPLpr3Z6sozwnmGswmuYvARPZQhcZZj3TzyuL5Znfu958k/8AgfhRXOajm9k2578i2P8AR2BjGPMgJ9ngF8bW/LXPf4c7x9gAHyVPUUqPDvp67do2Zbom8pirnmY+Y+UW3bUrmy1cfVxuQjpCpMS4lhPEbo3MPbx8OAceFI6dWGjUhpV29sVeNsTG/s1o4A/+gsyK1Hlyz6jZs1Y6cp+nG6/v/sWl23X5NixJqV7IgtQyssV5XDkNkb8cj9iCWn+CVukTyzq25ac42YeY5RuvqMb9LrapkbAkfBWZEJ2AgskZ/a9v/EgEf4Xl0HD7DhG36WXhhirF7XwNikDmd559wsA/sY49rg38Eu/ClyKVHl3nrtuWvPVlUxnNz8Td3H2toMzpmMy1h1+Gaxj7r29kliq4NMrOOO2RpBa8f8gVscNiK2DxVbEVHPdDVjEbDIeXEfyV7kVpyz6nbs1xqyyvGP5/xgqUqdCIwUasNeMuLyyJgYO4/J4H5WdERymZym5EREQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="})}),Object(b.jsx)($.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)($.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(ee.a,{className:"header__navlink",children:[Object(b.jsx)(ee.a.Link,{children:Object(b.jsx)(i.b,{className:"header__navlinks",to:"/home",children:Object(b.jsx)("span",{children:"Home"})})}),Object(b.jsx)(ee.a.Link,{children:Object(b.jsx)(i.b,{className:"header__navlinks",to:"/products",children:Object(b.jsx)("span",{children:"Products"})})}),a.token?Object(b.jsx)(ee.a.Link,{children:Object(b.jsx)(i.b,{className:"header__navlinks",to:"/home",children:Object(b.jsx)("span",{onClick:function(){a.logout()},children:"Logout"})})}):Object(b.jsx)(ee.a.Link,{children:Object(b.jsx)(i.b,{className:"header__navlinks",to:"/signup",children:Object(b.jsx)("span",{children:"SignUp"})})}),a.token&&Object(b.jsx)(ee.a.Link,{children:Object(b.jsx)(i.b,{className:"header__navlinks",to:"/orders/".concat(a.userId),children:Object(b.jsx)("span",{children:"Orders"})})}),Object(b.jsx)(i.b,{to:"/pricing2",children:Object(b.jsxs)(j.a,{variant:"light",children:[Object(b.jsx)(re.a,{}),Object(b.jsx)(te.a,{variant:"light",children:null===t||void 0===t?void 0:t.length})]})})]})})]})};a(290);var se=function(){var e=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!1),n=Object(u.a)(s,2),i=n[0],o=n[1],l=Object(r.useState)(!1),d=Object(u.a)(l,2),j=d[0],p=d[1],b=Object(r.useState)(!1),m=Object(u.a)(b,2),h=m[0],O=m[1],x=Object(r.useState)(!1),E=Object(u.a)(x,2),g=E[0],f=E[1],A=Object(r.useState)(),v=Object(u.a)(A,2),y=v[0],B=v[1],R=Object(r.useCallback)((function(e,t,a,r,s,n){if(e){o(e),c(t),p(a),O(r),f(s);var i=n||new Date((new Date).getTime()+36e5);B(i),localStorage.setItem("userData",JSON.stringify({userId:e,username:a,firstname:r,lastname:s,token:t,expiration:i.toISOString()}))}}),[]),k=Object(r.useCallback)((function(){c(null),B(null),o(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(a&&y){var e=y.getTime()-(new Date).getTime();V=setTimeout(k,e)}else clearTimeout(V)}),[a,k,y]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&R(e.userId,e.token,e.username,e.firstname,e.lastname,new Date(e.expiration))}),[R]),{login:R,logout:k,token:a,userId:i,username:j,firstname:h,lastname:g}}(),t=e.login,a=e.logout,c=e.token,s=e.userId,n=e.firstname,l=e.lastname,d=e.username;return Object(b.jsx)(h.Provider,{value:{userId:s,firstname:n,lastname:l,username:d,token:c,login:t,logout:a},children:Object(b.jsx)(O,{reducer:H,initialState:I,children:Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/home",children:Object(b.jsxs)(B.a,{fluid:!0,children:[Object(b.jsx)(ce,{}),Object(b.jsx)(v,{})]})}),Object(b.jsxs)(o.a,{path:"/success",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(q,{})]}),Object(b.jsxs)(o.a,{path:"/canceled",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(z,{})]}),Object(b.jsxs)(o.a,{path:"/pricing2",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(D,{})]}),Object(b.jsxs)(o.a,{path:"/orders/:userId",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(_,{})]}),Object(b.jsxs)(o.a,{path:"/signup",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(U,{})]}),Object(b.jsxs)(o.a,{path:"/products",children:[Object(b.jsx)(ce,{}),Object(b.jsx)(y,{})]}),Object(b.jsxs)(o.a,{path:"/",children:[Object(b.jsx)(ce,{}),Object(b.jsx)("h1",{children:"home"})]})]})})})})})};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(se,{})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.95b50abc.chunk.js.map