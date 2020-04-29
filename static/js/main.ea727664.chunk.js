(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),l=(a(16),a(6)),i=a.n(l),o=a(7),m=a(1),u=a(2),d=a(4),h=a(3),p=a(5),b=(a(20),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.source_url,c=e.publisher,s=(e.recipe_id,this.props.handleDetails);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,className:"img-card-top",alt:"",style:{height:"14rem"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",null,a),r.a.createElement("h6",{className:"text-warning text-slanted"},"provided by ",c)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:s},"Details"),r.a.createElement("a",{href:n,className:"btn btn-success mx-2",target:"_blank",rel:"noopener noreferrer"}," ","Recipe URL")))))}}]),t}(n.Component)),f=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.handleChange,n=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-4 text-center"},r.a.createElement("h1",{className:"text-slanted"},"Search for recipe with"," ",r.a.createElement("strong",{className:"text-danger"},"Food2Fork")),r.a.createElement("form",{className:"mt-4",onSubmit:n},r.a.createElement("label",{htmlFor:"search"},"Search recipes separated by comma"),r.a.createElement("div",{className:"input-group mt-3"},r.a.createElement("input",{type:"text",name:"search",placeholder:"pizza,meat,fish",className:"form-control",vaule:t,onChange:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fas fa-search"})))))))))}}]),t}(n.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.value,c=e.handleChange,s=e.handleSubmit,l=e.error;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{value:n,handleChange:c,handleSubmit:s}),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 mx-auto col-md-6 text-center mb-3"},r.a.createElement("h1",{className:"text-slanted"},"Recipe list"))),r.a.createElement("div",{className:"row"},l?r.a.createElement("h1",{className:"text-center text-danger"},l):t.map(function(e){return r.a.createElement(b,{key:e.recipe_id,recipe:e,handleDetails:function(){return a(0,e.recipe_id)}})})))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:{}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.id,a="https://www.food2fork.com/api/get?key=cf349d087c773f3d4992d99460a8b848&rId=".concat(t),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,this.setState({recipe:r.recipe}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.publisher_url,c=e.source_url,s=e.title,l=e.ingredients,i=this.props.handleIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-5",onClick:function(){return i(1)}},"Back to List"),r.a.createElement("img",{src:t,className:"d-block w-100",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("h6",null,s),r.a.createElement("h6",{className:"text-warning text-slanted"},"provided by ",a),r.a.createElement("a",{href:n,target:"_blank",className:"btn btn-primary"},"Publisher web"),r.a.createElement("a",{href:c,target:"_blank",className:"btn btn-success mx-2"},"Recipe URL"),r.a.createElement("ul",{className:"list-gorup mt-4"},r.a.createElement("h2",{className:"mt-3 mb-4"},"Ingredients"),l.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)}))))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[],url:"https://www.food2fork.com/api/search?key=cf349d087c773f3d4992d99460a8b848",baseUrl:"https://www.food2fork.com/api/search?key=cf349d087c773f3d4992d99460a8b848",details_id:35384,pageIndex:1,search:"",query:"&q=",error:""},a.displayPage=function(e){switch(e){default:case 1:return r.a.createElement(v,{recipes:a.state.recipes,handleDetails:a.handleDetails,value:a.state.search,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error});case 0:return r.a.createElement(g,{id:a.state.details_id,handleIndex:a.handleIndex})}},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({pageIndex:e,details_id:t})},a.handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.baseUrl,r=t.query,c=t.search;a.setState(function(){return{url:"".concat(n).concat(r).concat(c),search:""}},function(){a.getRecipes()})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getRecipes",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:0===(a=e.sent).recipes.length?this.setState({error:"No recipes to show"}):this.setState({recipes:a.recipes}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.displayPage(this.state.pageIndex))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.ea727664.chunk.js.map