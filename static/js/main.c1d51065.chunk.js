(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=(a(15),a(6)),l=a.n(o),i=a(7),u=a(2),m=a(3),f=a(5),p=a(4),h=a(1);a(19);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}var v=function(e){Object(f.a)(a,e);var t=d(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.source_url,c=e.publisher,s=(e.recipe_id,this.props.handleDetails);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,className:"img-card-top",alt:"",style:{height:"14rem"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",null,a),r.a.createElement("h6",{className:"text-warning text-slanted"},"provided by ",c)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:s},"Details"),r.a.createElement("a",{href:n,className:"btn btn-success mx-2",target:"_blank",rel:"noopener noreferrer"}," ","Recipe URL")))))}}]),a}(n.Component);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}var y=function(e){Object(f.a)(a,e);var t=b(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.handleChange,n=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-4 text-center"},r.a.createElement("h1",{className:"text-slanted"},"Search for recipe with"," ",r.a.createElement("strong",{className:"text-danger"},"Food2Fork")),r.a.createElement("form",{className:"mt-4",onSubmit:n},r.a.createElement("label",{htmlFor:"search"},"Search recipes separated by comma"),r.a.createElement("div",{className:"input-group mt-3"},r.a.createElement("input",{type:"text",name:"search",placeholder:"pizza,meat,fish",className:"form-control",vaule:t,onChange:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fas fa-search"})))))))))}}]),a}(n.Component);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}var E=function(e){Object(f.a)(a,e);var t=g(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.value,c=e.handleChange,s=e.handleSubmit,o=e.error;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{value:n,handleChange:c,handleSubmit:s}),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 mx-auto col-md-6 text-center mb-3"},r.a.createElement("h1",{className:"text-slanted"},"Recipe list"))),r.a.createElement("div",{className:"row"},o?r.a.createElement("h1",{className:"text-center text-danger"},o):t.map(function(e){return r.a.createElement(v,{key:e.recipe_id,recipe:e,handleDetails:function(){return a(0,e.recipe_id)}})})))))}}]),a}(n.Component);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}var w=function(e){Object(f.a)(a,e);var t=x(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipe:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.id,a="https://www.food2fork.com/api/get?key=cf349d087c773f3d4992d99460a8b848&rId=".concat(t),e.prev=2,e.next=5,fetch(a,{mode:"no-cors"});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,this.setState({recipe:r.recipe}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.publisher_url,c=e.source_url,s=e.title,o=e.ingredients,l=this.props.handleIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-5",onClick:function(){return l(1)}},"Back to List"),r.a.createElement("img",{src:t,className:"d-block w-100",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("h6",null,s),r.a.createElement("h6",{className:"text-warning text-slanted"},"provided by ",a),r.a.createElement("a",{href:n,target:"_blank",className:"btn btn-primary"},"Publisher web"),r.a.createElement("a",{href:c,target:"_blank",className:"btn btn-success mx-2"},"Recipe URL"),r.a.createElement("ul",{className:"list-gorup mt-4"},r.a.createElement("h2",{className:"mt-3 mb-4"},"Ingredients"),o.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)}))))))}}]),a}(n.Component);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}var j=function(e){Object(f.a)(a,e);var t=N(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={recipes:[],url:"https://www.food2fork.com/api/search?key=cf349d087c773f3d4992d99460a8b848",baseUrl:"https://www.food2fork.com/api/search?key=cf349d087c773f3d4992d99460a8b848",details_id:35384,pageIndex:1,search:"",query:"&q=",error:""},e.displayPage=function(t){switch(t){default:case 1:return r.a.createElement(E,{recipes:e.state.recipes,handleDetails:e.handleDetails,value:e.state.search,handleChange:e.handleChange,handleSubmit:e.handleSubmit,error:e.state.error});case 0:return r.a.createElement(w,{id:e.state.details_id,handleIndex:e.handleIndex})}},e.handleIndex=function(t){e.setState({pageIndex:t})},e.handleDetails=function(t,a){e.setState({pageIndex:t,details_id:a})},e.handleChange=function(t){e.setState({search:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.baseUrl,r=a.query,c=a.search;e.setState(function(){return{url:"".concat(n).concat(r).concat(c),search:""}},function(){e.getRecipes()})},e}return Object(m.a)(a,[{key:"getRecipes",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url,{mode:"no-cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:0===(a=e.sent).recipes.length?this.setState({error:"No recipes to show"}):this.setState({recipes:a.recipes}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.displayPage(this.state.pageIndex))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c1d51065.chunk.js.map