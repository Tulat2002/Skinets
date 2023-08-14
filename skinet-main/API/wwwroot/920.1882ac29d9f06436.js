"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[920],{8920:(me,A,a)=>{a.r(A),a.d(A,{CheckoutModule:()=>v});var u=a(6895),h=a(9838),e=a(1571);function P(n,t){if(1&n&&(e.TgZ(0,"button",5),e._uU(1," View your order "),e.qZA()),2&n){const r=e.oxw();e.MGl("routerLink","/orders/",r.order.id,"")}}function Q(n,t){1&n&&(e.TgZ(0,"button",6),e._uU(1," View your orders "),e.qZA())}class b{constructor(t){this.router=t;const r=this.router.getCurrentNavigation();this.order=r?.extras?.state}}b.\u0275fac=function(t){return new(t||b)(e.Y36(h.F0))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you. Your order is confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"Your order has not shipped yet, but this is to be expected as we are not a real store!"),e.qZA(),e.YNc(7,P,2,1,"button",3),e.YNc(8,Q,2,0,"button",4),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",r.order),e.xp6(1),e.Q6J("ngIf",!r.order))},dependencies:[u.O5,h.rH]});var c=a(433),U=a(9479),F=a(5866),G=a(5053),d=a(6875);function O(n,t){if(1&n){const r=e.EpF();e.TgZ(0,"li",4)(1,"div",5)(2,"button",6),e.NdJ("click",function(){const s=e.CHM(r).index,l=e.oxw();return e.KtG(l.onClick(s))}),e._uU(3),e.qZA()()()}if(2&n){const r=t.$implicit,o=t.index,i=e.oxw();e.xp6(2),e.ekj("active",i.selectedIndex===o),e.Q6J("disabled",!0),e.xp6(1),e.hij(" ",r.label," ")}}function Y(n,t){if(1&n&&(e.TgZ(0,"div"),e.GkF(1,7),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",r.selected.content)}}class p extends d.B8{constructor(){super(...arguments),this.linearModeSelected=!0}ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}p.\u0275fac=function(){let n;return function(r){return(n||(n=e.n5z(p)))(r||p)}}(),p.\u0275cmp=e.Xpm({type:p,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:d.B8,useExisting:p}]),e.qOj],decls:4,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"nav-item"],[1,"d-grid"],[1,"nav-link","py-3","text-uppercase","fw-bold",3,"disabled","click"],[3,"ngTemplateOutlet"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,O,4,4,"li",2),e.qZA(),e.YNc(3,Y,2,1,"div",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",r.steps),e.xp6(1),e.Q6J("ngIf",r.selected))},dependencies:[u.sg,u.O5,u.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none;color:#333}button.nav-link[_ngcontent-%COMP%]:disabled:not(.active){color:#333;background:#e9ecef}"]});var T=a(7185),E=a(4015);function B(n,t){if(1&n){const r=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"h4"),e._uU(3,"Shipping address"),e.qZA(),e.TgZ(4,"button",8),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.saveUserAddress())}),e._uU(5," Save as default address "),e.qZA()(),e.TgZ(6,"div",9)(7,"div",10),e._UZ(8,"app-text-input",11),e.qZA(),e.TgZ(9,"div",10),e._UZ(10,"app-text-input",12),e.qZA(),e.TgZ(11,"div",10),e._UZ(12,"app-text-input",13),e.qZA(),e.TgZ(13,"div",10),e._UZ(14,"app-text-input",14),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-text-input",15),e.qZA(),e.TgZ(17,"div",10),e._UZ(18,"app-text-input",16),e.qZA()()()}if(2&n){const r=e.oxw();let o;e.Q6J("formGroup",r.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=(o=r.checkoutForm.get("addressForm"))&&o.valid&&null!=(o=r.checkoutForm.get("addressForm"))&&o.dirty)),e.xp6(4),e.Q6J("label","First name"),e.xp6(2),e.Q6J("label","Last name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zip code")}}class k{constructor(t,r){this.accountService=t,this.toastr=r}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm?.get("addressForm")?.value).subscribe({next:()=>{this.toastr.success("Address saved"),this.checkoutForm?.get("addressForm")?.reset(this.checkoutForm?.get("addressForm")?.value)}})}}k.\u0275fac=function(t){return new(t||k)(e.Y36(U.B),e.Y36(T._W))},k.\u0275cmp=e.Xpm({type:k,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:2,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipcode",3,"label"]],template:function(t,r){if(1&t&&(e.YNc(0,B,19,8,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to basket "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Delivery "),e._UZ(7,"i",5),e.qZA()()),2&t){let o;e.Q6J("ngIf",r.checkoutForm),e.xp6(5),e.Q6J("disabled",null==r.checkoutForm||null==(o=r.checkoutForm.get("addressForm"))?null:o.invalid)}},dependencies:[u.O5,h.rH,c.JJ,c.JL,c.sg,c.u,c.x0,E.t,d.st]});var j=a(4004),L=a(2340),R=a(529);class m{constructor(t){this.http=t,this.baseUrl=L.N.apiUrl}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,j.U)(t=>t.sort((r,o)=>o.price-r.price)))}}function D(n,t){if(1&n){const r=e.EpF();e.TgZ(0,"div",9)(1,"input",10),e.NdJ("click",function(){const s=e.CHM(r).$implicit,l=e.oxw(2);return e.KtG(l.setShippingPrice(s))}),e.qZA(),e.TgZ(2,"label",11)(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA()()()}if(2&n){const r=t.$implicit;e.xp6(1),e.s9C("id",r.id),e.s9C("value",r.id),e.xp6(1),e.s9C("for",r.id),e.xp6(2),e.AsE("",r.shortName," - ",e.lcZ(5,6,r.price),""),e.xp6(4),e.Oqu(r.description)}}function V(n,t){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,D,9,8,"div",8),e.qZA()()),2&n){const r=e.oxw();e.Q6J("formGroup",r.checkoutForm),e.xp6(2),e.Q6J("ngForOf",r.deliveryMethods)}}m.\u0275fac=function(t){return new(t||m)(e.LFG(R.eN))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class C{constructor(t,r){this.checkoutService=t,this.basketService=r,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:t=>this.deliveryMethods=t})}setShippingPrice(t){this.basketService.setShippingPrice(t)}}C.\u0275fac=function(t){return new(t||C)(e.Y36(m),e.Y36(F.v))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:2,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],["formGroupName","deliveryForm",1,"row"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"form-check-input",3,"id","value","click"],[1,"form-check-label","ms-2","mb-3",3,"for"],[1,"label-description"]],template:function(t,r){if(1&t&&(e.YNc(0,V,3,2,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to address "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Review "),e._UZ(7,"i",5),e.qZA()()),2&t){let o;e.Q6J("ngIf",r.checkoutForm),e.xp6(5),e.Q6J("disabled",null==r.checkoutForm||null==(o=r.checkoutForm.get("deliveryForm"))?null:o.invalid)}},dependencies:[u.sg,u.O5,c.Fj,c._,c.JJ,c.JL,c.sg,c.u,c.x0,d.st,d.po,u.H9]});var H=a(8795);class y{constructor(t,r){this.basketService=t,this.toastr=r}createPaymentIntent(){this.basketService.createPaymentIntent().subscribe({next:()=>{this.appStepper?.next()},error:t=>this.toastr.error(t.message)})}}function J(n,t,r,o,i,s,l){try{var _=n[s](l),g=_.value}catch(pe){return void r(pe)}_.done?t(g):Promise.resolve(g).then(o,i)}function w(n){return function(){var t=this,r=arguments;return new Promise(function(o,i){var s=n.apply(t,r);function l(g){J(s,o,i,l,_,"next",g)}function _(g){J(s,o,i,l,_,"throw",g)}l(void 0)})}}y.\u0275fac=function(t){return new(t||y)(e.Y36(F.v),e.Y36(T._W))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.qZA(),e.TgZ(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e._uU(5," Back to delivery "),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return r.createPaymentIntent()}),e._uU(7," Go to Payment "),e._UZ(8,"i",6),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("isBasket",!1))},dependencies:[d.po,H.b]});var N="https://js.stripe.com/v3",W=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,I="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",S=null,ee=function(t,r,o){if(null===t)return null;var i=t.apply(void 0,r);return function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:r})}(i,o),i},q=Promise.resolve().then(function(){return t=null,null!==S||(S=new Promise(function(r,o){if(typeof window>"u")r(null);else if(window.Stripe&&t&&console.warn(I),window.Stripe)r(window.Stripe);else try{var i=function(){for(var t=document.querySelectorAll('script[src^="'.concat(N,'"]')),r=0;r<t.length;r++){var o=t[r];if(W.test(o.src))return o}return null}();i&&t?console.warn(I):i||(i=function(t){var r=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",o=document.createElement("script");o.src="".concat(N).concat(r);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(o),o}(t)),i.addEventListener("load",function(){window.Stripe?r(window.Stripe):o(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){o(new Error("Failed to load Stripe.js"))})}catch(s){return void o(s)}})),S;var t}),M=!1;q.catch(function(n){M||console.warn(n)});var re=a(6805),oe=a(930);const ie=["cardNumber"],ce=["cardExpiry"],se=["cardCvc"];function ae(n,t){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e._UZ(3,"app-text-input",10),e.qZA()(),e.TgZ(4,"div",11)(5,"div",12)(6,"div",13),e._UZ(7,"div",14,15),e.TgZ(9,"label"),e._uU(10,"Card Number"),e.qZA(),e.TgZ(11,"span",16),e._uU(12),e.qZA()()(),e.TgZ(13,"div",17)(14,"div",13),e._UZ(15,"div",14,18),e.TgZ(17,"label"),e._uU(18,"Card Expiry"),e.qZA()()(),e.TgZ(19,"div",17)(20,"div",13),e._UZ(21,"div",14,19),e.TgZ(23,"label"),e._uU(24,"Card Cvc"),e.qZA()()()()()),2&n){const r=e.oxw();e.Q6J("formGroup",r.checkoutForm),e.xp6(3),e.Q6J("label","Name on card"),e.xp6(9),e.Oqu(r.cardErrors)}}function le(n,t){1&n&&e._UZ(0,"i",20)}class Z{constructor(t,r,o,i){this.basketService=t,this.checkoutService=r,this.toastr=o,this.router=i,this.stripe=null,this.cardNumberComplete=!1,this.cardExpiryComplete=!1,this.cardCvcComplete=!1,this.loading=!1}ngOnInit(){(function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];M=!0;var i=Date.now();return q.then(function(s){return ee(s,r,i)})})("pk_test_2PZ84pFKu2MddUgGDG521v9m00SlLWySIR").then(t=>{this.stripe=t;const r=t?.elements();r&&(this.cardNumber=r.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement?.nativeElement),this.cardNumber.on("change",o=>{this.cardNumberComplete=o.complete,this.cardErrors=o.error?o.error.message:null}),this.cardExpiry=r.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement?.nativeElement),this.cardExpiry.on("change",o=>{this.cardExpiryComplete=o.complete,this.cardErrors=o.error?o.error.message:null}),this.cardCvc=r.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement?.nativeElement),this.cardCvc.on("change",o=>{this.cardCvcComplete=o.complete,this.cardErrors=o.error?o.error.message:null}))})}get paymentFormComplete(){return this.checkoutForm?.get("paymentForm")?.valid&&this.cardNumberComplete&&this.cardExpiryComplete&&this.cardCvcComplete}submitOrder(){var t=this;return w(function*(){t.loading=!0;const r=t.basketService.getCurrentBasketValue();if(!r)throw new Error("cannot get basket");try{const o=yield t.createOrder(r),i=yield t.confirmPaymentWithStripe(r);i.paymentIntent?(t.basketService.deleteBasket(r),t.router.navigate(["checkout/success"],{state:o})):t.toastr.error(i.error.message)}catch(o){console.log(o),t.toastr.error(o.message)}finally{t.loading=!1}})()}confirmPaymentWithStripe(t){var r=this;return w(function*(){if(!t)throw new Error("Basket is null");const o=r.stripe?.confirmCardPayment(t.clientSecret,{payment_method:{card:r.cardNumber,billing_details:{name:r.checkoutForm?.get("paymentForm")?.get("nameOnCard")?.value}}});if(!o)throw new Error("Problem attempting payment with stripe");return o})()}createOrder(t){var r=this;return w(function*(){if(!t)throw new Error("Basket is null");const o=r.getOrderToCreate(t);return function ne(n,t){const r="object"==typeof t;return new Promise((o,i)=>{const s=new oe.Hp({next:l=>{o(l),s.unsubscribe()},error:i,complete:()=>{r?o(t.defaultValue):i(new re.K)}});n.subscribe(s)})}(r.checkoutService.createOrder(o))})()}getOrderToCreate(t){const r=this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,o=this.checkoutForm?.get("addressForm")?.value;if(!r||!o)throw new Error("Problem with basket");return{basketId:t.id,deliveryMethodId:r,shipToAddress:o}}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(F.v),e.Y36(m),e.Y36(T._W),e.Y36(h.F0))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-checkout-payment"]],viewQuery:function(t,r){if(1&t&&(e.Gf(ie,5),e.Gf(ce,5),e.Gf(se,5)),2&t){let o;e.iGM(o=e.CRH())&&(r.cardNumberElement=o.first),e.iGM(o=e.CRH())&&(r.cardExpiryElement=o.first),e.iGM(o=e.CRH())&&(r.cardCvcElement=o.first)}},inputs:{checkoutForm:"checkoutForm"},decls:9,vars:3,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"row","mb-3"],[1,"col-6"],[1,"form-floating"],[1,"form-control"],["cardNumber",""],[1,"text-danger"],[1,"col-3"],["cardExpiry",""],["cardCvc",""],[1,"fa","fa-spinner","fa-spin"]],template:function(t,r){1&t&&(e.YNc(0,ae,25,3,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to review "),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.submitOrder()}),e._uU(6," Submit order "),e._UZ(7,"i",5),e.YNc(8,le,1,0,"i",6),e.qZA()()),2&t&&(e.Q6J("ngIf",r.checkoutForm),e.xp6(5),e.Q6J("disabled",r.loading||!r.paymentFormComplete),e.xp6(3),e.Q6J("ngIf",r.loading))},dependencies:[u.O5,c.JJ,c.JL,c.sg,c.u,c.x0,E.t,d.po]});class x{constructor(t,r,o){this.fb=t,this.accountService=r,this.basketService=o,this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:["",c.kI.required],lastName:["",c.kI.required],street:["",c.kI.required],city:["",c.kI.required],state:["",c.kI.required],zipcode:["",c.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:["",c.kI.required]}),paymentForm:this.fb.group({nameOnCard:["",c.kI.required]})})}ngOnInit(){this.getAddressFormValues(),this.getDeliveryMethodValue()}getAddressFormValues(){this.accountService.getUserAddress().subscribe({next:t=>{t&&this.checkoutForm.get("addressForm")?.patchValue(t)}})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();t&&t.deliveryMethodId&&this.checkoutForm.get("deliveryForm")?.get("deliveryMethod")?.patchValue(t.deliveryMethodId.toString())}}x.\u0275fac=function(t){return new(t||x)(e.Y36(c.qu),e.Y36(U.B),e.Y36(F.v))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",null,3)(5,"cdk-step",4),e._UZ(6,"app-checkout-address",5),e.qZA(),e.TgZ(7,"cdk-step",4),e._UZ(8,"app-checkout-delivery",5),e.qZA(),e.TgZ(9,"cdk-step",6),e._UZ(10,"app-checkout-review",7),e.qZA(),e.TgZ(11,"cdk-step",4),e._UZ(12,"app-checkout-payment",5),e.qZA()()(),e.TgZ(13,"div",8),e._UZ(14,"app-order-totals"),e.qZA()()()),2&t){const o=e.MAs(4);let i,s,l;e.xp6(5),e.Q6J("label","Address")("completed",null==(i=r.checkoutForm.get("addressForm"))?null:i.valid),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm),e.xp6(1),e.Q6J("label","Delivery")("completed",null==(s=r.checkoutForm.get("deliveryForm"))?null:s.valid),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",o),e.xp6(1),e.Q6J("label","Payment")("completed",null==(l=r.checkoutForm.get("paymentForm"))?null:l.valid),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm)}},dependencies:[G.S,p,d.be,k,C,y,Z]});const ue=[{path:"",component:x},{path:"success",component:b}];class f{}f.\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[h.Bz.forChild(ue),h.Bz]});var de=a(4466);class v{}v.\u0275fac=function(t){return new(t||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[u.ez,f,de.m]})}}]);