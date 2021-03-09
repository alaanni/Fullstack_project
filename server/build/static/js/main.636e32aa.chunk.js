(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=n(3),l=n.n(o),i=n(6),s=n(7),m=n(114),d=n(10),p=n(8),f=n(20),v=n(9),b=n.n(v),E="/api/orders",h=null,O={getAll:function(){return b.a.get(E).then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,b.a.post(E,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){h="bearer ".concat(e)},update:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(E,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,b.a.delete("".concat(E,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"INIT_ORDERS":return t.data;case"NEW_ORDER":return[].concat(Object(f.a)(e),[t.data]);case"REMOVE_ORDER":return e.filter((function(e){return e.id!==t.data}));default:return e}},j=function(e,t){return function(){var n=Object(i.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=setTimeout((function(){a(y())}),1e3*t),a({type:"NEW_NOTIFICATION",data:{content:e,timer:r}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){return{type:"CLEAR_NOTIFICATION"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{content:"",timer:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return null!==e.timer&&clearTimeout(e.timer),{content:t.data.content,timer:t.data.timer};case"CLEAR_NOTIFICATION":return{content:"",timer:null};default:return e}},C=n(27),x=null,k={getAll:function(){return b.a.get("/api/products").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,b.a.post("/api/products",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){x="bearer ".concat(e)},update:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("/api/products","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,b.a.delete("".concat("/api/products","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_PRODUCTS":return t.data;case"NEW_PRODUCT":return[].concat(Object(f.a)(e),[t.data]);case"REMOVE_PRODUCT":return e.filter((function(e){return e.id!==t.data}));default:return e}},I=null,N={getAll:function(){return b.a.get("/api/orderLines").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:I}},e.next=3,b.a.post("/api/orderLines",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){I="bearer ".concat(e)},update:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("/api/orderLines","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:I}},e.next=3,b.a.delete("".concat("/api/orderLines","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ORDERLINES":return t.data;case"NEW_ORDERLINE":return[].concat(Object(f.a)(e),[t.data]);case"REMOVE_ORDERLINE":return e.filter((function(e){return e.id!==t.data}));default:return e}},R=function(e){var t=e.show,n=e.order,c=Object(p.c)(),u=Object(a.useState)(""),o=Object(s.a)(u,2),d=o[0],f=o[1],v=Object(p.d)((function(e){return e.products}));if(Object(a.useEffect)((function(){c(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT_PRODUCTS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),!t)return null;var b=v.map((function(e){return{value:e.product,label:e.product}})),E=function(e){var t;c((t=e,function(){var e=Object(i.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.create(t);case 2:a=e.sent,n({type:"NEW_ORDERLINE",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E({product:d,order:n}),f("")}},r.a.createElement("div",null,"Product",r.a.createElement(C.a,{value:d,onChange:function(e){return f(e)},options:b})),r.a.createElement(m.a,{variant:"primary",className:"create-button",type:"submit"},"Add")))},A=n(115),T=function(e){e.order;var t=Object(p.d)((function(e){return e.orderLines})),n=Object(p.c)();return Object(a.useEffect)((function(){n(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAll();case 2:n=e.sent,t({type:"INIT_ORDERLINES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n]),t?r.a.createElement("div",null,r.a.createElement("h2",null,"Orderlines"),r.a.createElement(A.a,null,r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.product),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"price"),r.a.createElement("td",null,r.a.createElement("button",null,"remove line")))}))))):null},D=n(11),_=function(e){var t=e.order,n=Object(p.d)((function(e){return e.orders})),c=Object(d.g)(),u=Object(p.c)(),o=Object(a.useState)(!1),f=Object(s.a)(o,2)[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),E=b[0],h=b[1],g=function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Removing order from ".concat(t.customer.name))&&(u(function(e){return function(){var t=Object(i.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.remove(e);case 2:n({type:"REMOVE_ORDER",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)).catch((function(){f(!0),u(j("Order ".concat(t.id," from ").concat(t.customer.name," was already deleted from server"),5))})),f(!1)),c.push("/orders")};return t?r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order information"),r.a.createElement("div",null,r.a.createElement("p",null,"Customer: ",r.a.createElement(D.b,{to:"/customers/".concat(t.customer.id)},t.customer.name)),r.a.createElement("p",null,"Building: ",r.a.createElement(D.b,{to:"/buildings/".concat(t.building.id)},t.building.type)),r.a.createElement("p",null,"Additional details: ",t.comment)),r.a.createElement(T,{order:t}),r.a.createElement("br",null),r.a.createElement(R,{show:"new orderline"===E,order:t}),r.a.createElement("br",null),""===E?r.a.createElement(m.a,{variant:"primary",onClick:function(){return h("new orderline")}},"Add new orderline"):r.a.createElement(m.a,{variant:"secondary",onClick:function(){return h("")}},"cancel")," ",r.a.createElement(m.a,{variant:"danger",onClick:function(e){e.preventDefault(),g(t.id)}},"remove")):null},U={getAll:function(){return b.a.get("/api/buildings").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/buildings",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("/api/buildings","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("/api/buildings","/").concat(t.id));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BUILDINGS":return t.data;case"NEW_BUILDING":return[].concat(Object(f.a)(e),[t.data]);default:return e}},P=function(e){var t=e.createOrder,n=e.user,c=e.show,u=Object(p.c)(),o=Object(a.useState)(""),d=Object(s.a)(o,2),f=d[0],v=d[1],b=Object(a.useState)(""),E=Object(s.a)(b,2),h=E[0],O=E[1],g=Object(a.useState)(""),j=Object(s.a)(g,2),y=j[0],w=j[1],x=Object(p.d)((function(e){return e.customers})),k=Object(p.d)((function(e){return e.buildings}));if(Object(a.useEffect)((function(){u(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getAll();case 2:n=e.sent,t({type:"INIT_BUILDINGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[u]),!c)return null;var S=x.map((function(e){return{value:e.id,label:e.name}})),I=k.map((function(e){return{value:e,label:e.type}}));return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"New order"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({customer:f.value,building:y.value.id,user:n,comment:h}),v(""),w(""),O("")}},r.a.createElement("div",null,"Select customer",r.a.createElement(C.a,{value:f,onChange:function(e){return v(e)},options:S})),r.a.createElement("div",null,"Select building",r.a.createElement(C.a,{value:y,onChange:function(e){return w(e)},options:I.filter((function(e){return e.value.customer===f.value}))})),r.a.createElement("div",null,"Comment"),r.a.createElement("div",null,r.a.createElement("input",{style:{width:"690px",height:"100px"},value:h,onChange:function(e){var t=e.target;return O(t.value)}})),r.a.createElement(m.a,{variant:"primary",className:"create-button",type:"submit"},"add new order")))},M=function(e){var t=e.user,n=Object(a.useState)(""),c=Object(s.a)(n,2),u=c[0],o=c[1],f=Object(p.d)((function(e){return e.orders})),v=Object(p.c)(),b=Object(d.g)();return r.a.createElement("div",null,""===u?r.a.createElement(m.a,{variant:"primary",onClick:function(){return o("new order")}},"Add new order"):r.a.createElement(m.a,{variant:"secondary",onClick:function(){return o("")}},"cancel"),r.a.createElement(P,{show:"new order"===u,createOrder:function(e){var t;v((t=e,function(){var e=Object(i.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.create(t);case 2:a=e.sent,n({type:"NEW_ORDER",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),o(""),b.push("/orders")},user:t}),r.a.createElement("h2",null,"Orders"),r.a.createElement(A.a,{striped:!0},r.a.createElement("tbody",null,f.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.id)),r.a.createElement("td",null,r.a.createElement(D.b,{to:"/customers/".concat(e.customer.id)},e.customer.name)),r.a.createElement("td",null,e.status))})))))},B=n(117),z=function(e){var t=e.show,n=e.createBuilding,c=e.customer,u=Object(a.useState)(""),o=Object(s.a)(u,2),l=o[0],i=o[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),f=p[0],v=p[1],b=Object(a.useState)(""),E=Object(s.a)(b,2),h=E[0],O=E[1],g=Object(a.useState)(""),j=Object(s.a)(g,2),y=j[0],w=j[1],C=Object(a.useState)(""),x=Object(s.a)(C,2),k=x[0],S=x[1];if(!t)return null;return r.a.createElement("div",null,r.a.createElement("h2",null,"New building"),r.a.createElement(B.a,{onSubmit:function(e){e.preventDefault(),n({customer:c,type:l,street:f,city:h,postalCode:y,comment:k})}},r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Label,null,"Type"),r.a.createElement(B.a.Control,{type:"text",name:"type",onChange:function(e){var t=e.target;return i(t.value)}}),r.a.createElement(B.a.Label,null,"Street"),r.a.createElement(B.a.Control,{type:"text",name:"street",onChange:function(e){var t=e.target;return v(t.value)}}),r.a.createElement(B.a.Label,null,"City"),r.a.createElement(B.a.Control,{type:"text",name:"city",onChange:function(e){var t=e.target;return O(t.value)}}),r.a.createElement(B.a.Label,null,"Postal code"),r.a.createElement(B.a.Control,{type:"postalCode",onChange:function(e){var t=e.target;return w(parseInt(t.value))}}),r.a.createElement(B.a.Label,null,"Add comment"),r.a.createElement(B.a.Control,{type:"text",name:"comment",onChange:function(e){var t=e.target;return S(t.value)}}),r.a.createElement(m.a,{variant:"primary",type:"submit"},"Add building"))))},G=function(e){var t=e.customer,n=Object(a.useState)(""),c=Object(s.a)(n,2),u=c[0],o=c[1],d=Object(p.c)();return t?r.a.createElement("div",null,r.a.createElement("h3",null,t.name),r.a.createElement("div",null,t.phone),r.a.createElement("div",null,t.email),r.a.createElement("div",null,t.street,", "),r.a.createElement("div",null,t.postalCode,", ",t.city),r.a.createElement("h4",null,"Buildings:"),""===u?r.a.createElement(m.a,{variant:"primary",onClick:function(){return o("new building")}},"Add new building to ",t.name):r.a.createElement(m.a,{variant:"secondary",onClick:function(){return o("")}},"cancel"),r.a.createElement(z,{show:"new building"===u,createBuilding:function(e){var t;d((t=e,function(){var e=Object(i.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.create(t);case 2:a=e.sent,n({type:"NEW_BUILDING",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),o("")},customer:t.id}),r.a.createElement("div",null,t.buildings.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(D.b,{to:"/buildings/".concat(e.id)},e.type))}))),r.a.createElement("h4",null,"Orders:"),r.a.createElement("div",null,t.orders.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.id))})))):null},F=function(e){var t=e.createCustomer,n=e.show,c=Object(a.useState)(""),u=Object(s.a)(c,2),o=u[0],l=u[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),p=d[0],f=d[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),E=b[0],h=b[1],O=Object(a.useState)(""),g=Object(s.a)(O,2),j=g[0],y=g[1],w=Object(a.useState)(""),C=Object(s.a)(w,2),x=C[0],k=C[1],S=Object(a.useState)(""),I=Object(s.a)(S,2),N=I[0],L=I[1],R=Object(a.useState)(""),A=Object(s.a)(R,2),T=A[0],D=A[1];if(!n)return null;return r.a.createElement("div",null,r.a.createElement("h2",null,"New customer"),r.a.createElement(B.a,{onSubmit:function(e){e.preventDefault(),t({name:o,phone:p,email:E,street:j,city:x,postalCode:N,comment:T})}},r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Label,null,"Name"),r.a.createElement(B.a.Control,{type:"text",name:"name",onChange:function(e){var t=e.target;return l(t.value)}}),r.a.createElement(B.a.Label,null,"Phone"),r.a.createElement(B.a.Control,{type:"phone",onChange:function(e){var t=e.target;return f(parseInt(t.value))}}),r.a.createElement(B.a.Label,null,"Email"),r.a.createElement(B.a.Control,{type:"email",onChange:function(e){var t=e.target;return h(t.value)}}),r.a.createElement(B.a.Label,null,"Street"),r.a.createElement(B.a.Control,{type:"text",name:"street",onChange:function(e){var t=e.target;return y(t.value)}}),r.a.createElement(B.a.Label,null,"City"),r.a.createElement(B.a.Control,{type:"text",name:"city",onChange:function(e){var t=e.target;return k(t.value)}}),r.a.createElement(B.a.Label,null,"Postal code"),r.a.createElement(B.a.Control,{type:"postalCode",onChange:function(e){var t=e.target;return L(parseInt(t.value))}}),r.a.createElement(B.a.Label,null,"Add comment"),r.a.createElement(B.a.Control,{type:"text",name:"comment",onChange:function(e){var t=e.target;return D(t.value)}}),r.a.createElement(m.a,{variant:"primary",type:"submit"},"Add new customer"))))},J={getAll:function(){return b.a.get("/api/customers").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/customers",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("/api/customers","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("/api/customers","/").concat(t.id));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"INIT_CUSTOMERS":return t.data;case"NEW_CUSTOMER":return[].concat(Object(f.a)(e),[t.data]);default:return e}},q=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(p.d)((function(e){return e.customers})),o=Object(p.c)();return r.a.createElement("div",null,""===n?r.a.createElement(m.a,{variant:"primary",onClick:function(){return c("new customer")}},"Add new customer"):r.a.createElement(m.a,{variant:"secondary",onClick:function(){return c("")}},"cancel"),r.a.createElement(F,{show:"new customer"===n,createCustomer:function(e){var t;o((t=e,function(){var e=Object(i.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.create(t);case 2:a=e.sent,n({type:"NEW_CUSTOMER",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),o(j("Added new customer ".concat(e.name),5)),c("")}}),r.a.createElement("h2",null,"Customers"),r.a.createElement(A.a,{striped:!0},r.a.createElement("tbody",null,u.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(D.b,{to:"/customers/".concat(e.id)},e.name)),r.a.createElement("td",null,e.postalCode))})))))},H={login:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(e){var t=e.handleLogin,n=e.setUsername,a=e.setPassword;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(B.a,{onSubmit:t},r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Label,null,"Username"),r.a.createElement(B.a.Control,{type:"text",name:"username",onChange:function(e){var t=e.target;return n(t.value)}}),r.a.createElement(B.a.Label,null,"Password"),r.a.createElement(B.a.Control,{type:"password",onChange:function(e){var t=e.target;return a(t.value)}}),r.a.createElement(m.a,{variant:"primary",type:"submit"},"Login"))))},Y=function(){return r.a.createElement("div",null,"kalenteri")},Q=n(57),X=n(58),Z=n(64),$=n(63),ee=n(43),te="AIzaSyCO2J7KlY3Y5D4tDp0DASxDs99nUnqybAU",ne={width:"400px",height:"400px"},ae={lat:62.79446,lng:22.82822},re=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return r.a.createElement(ee.b,{googleMapsApiKey:te},r.a.createElement(ee.a,{mapContainerStyle:ne,center:ae,zoom:10},r.a.createElement(r.a.Fragment,null)))}}]),n}(a.Component),ce=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Homepage"),r.a.createElement(Y,null),r.a.createElement(re,null))},ue=Object(p.b)((function(e){return null===e.notification.content?null:{message:e.notification.content}}))((function(e){var t=e.message,n=e.error;return""===t?null:r.a.createElement("div",{className:n?"error":"notification"},t)})),oe=n(116),le=n(118),ie=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),f=o[0],v=o[1],b=Object(a.useState)(null),E=Object(s.a)(b,2),h=E[0],g=E[1],y=Object(a.useState)(!1),w=Object(s.a)(y,2),C=w[0],x=w[1],k=Object(p.c)(),S=Object(d.g)(),I=Object(p.d)((function(e){return e.message})),N=Object(p.d)((function(e){return e.orders})),L=Object(p.d)((function(e){return e.customers}));Object(a.useEffect)((function(){k(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getAll();case 2:n=e.sent,t({type:"INIT_CUSTOMERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:n=e.sent,t({type:"INIT_ORDERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[k]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);g(t),O.setToken(t.token)}}),[]);var R=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H.login({username:n,password:f});case 4:a=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),O.setToken(a.token),g(a),c(""),v(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),x(!0),k(j("wrong credentials",5));case 16:S.push("/home");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),A=Object(d.h)("/orders/:id"),T=A?N.find((function(e){return e.id===A.params.id})):null,U=Object(d.h)("/customers/:id"),W=U?L.find((function(e){return e.id===U.params.id})):null;return r.a.createElement("div",{className:"container"},r.a.createElement(ue,{message:I,error:C}),r.a.createElement(oe.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(oe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(oe.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(le.a,{className:"mr-auto"},r.a.createElement(le.a.Link,{href:"#",as:"span"},h?r.a.createElement(D.b,{to:"/"},"Home"):null),r.a.createElement(le.a.Link,{href:"#",as:"span"},h?r.a.createElement(D.b,{to:"/orders"},"Orders"):null),r.a.createElement(le.a.Link,{href:"#",as:"span"},h?r.a.createElement(D.b,{to:"/customers"},"Customers"):null),r.a.createElement(le.a.Link,{href:"#",as:"span"},h?r.a.createElement("em",null,h.name," logged in "," ",r.a.createElement(m.a,{variant:"outline-secondary",onClick:function(){window.localStorage.removeItem("loggedUser"),g(null)}},r.a.createElement("em",null,"logout"))):r.a.createElement(D.b,{to:"/login"}))))),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/orders/:id"},r.a.createElement(_,{order:T})),r.a.createElement(d.b,{path:"/orders"},h?r.a.createElement(M,{user:h}):r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/customers/:id"},r.a.createElement(G,{customer:W})),r.a.createElement(d.b,{path:"/customers"},h?r.a.createElement(q,null):r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/login"},h?r.a.createElement(d.a,{to:"/home"}):r.a.createElement(K,{username:n,password:f,setUsername:c,setPassword:v,handleLogin:R})),r.a.createElement(d.b,{path:"/"},h?r.a.createElement(ce,null):r.a.createElement(d.a,{to:"/login"}))))},se=(n(111),n(24)),me=n(61),de=n(62),pe=Object(se.combineReducers)({customers:V,orders:g,orderLines:L,notification:w,buildings:W,products:S}),fe=Object(se.createStore)(pe,Object(de.composeWithDevTools)(Object(se.applyMiddleware)(me.a)));u.a.render(r.a.createElement(p.a,{store:fe},r.a.createElement(D.a,null,r.a.createElement(ie,null))),document.getElementById("root"))},65:function(e,t,n){e.exports=n(112)}},[[65,1,2]]]);
//# sourceMappingURL=main.636e32aa.chunk.js.map