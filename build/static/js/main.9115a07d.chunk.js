(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),s=a.n(c),l=(a(17),a(11)),r=a(2),o=a(3),m=a(5),d=a(4),u=a(9),h=a.n(u),p=(a(18),a(19),a(1)),f=a(10),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={task:""},e.changeTask=function(t){e.setState({task:t.target.value})},e.addNewTask=function(){e.props.addItem({id:Object(f.generate)(),title:e.state.task,done:!1}),e.setState({task:""})},e.onPressEnter=function(t){"Enter"===t.key&&e.addNewTask()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.task,t=this.props,a=t.view,n=t.setView,c=t.change,s=t.saveState;return i.a.createElement("div",{className:"new-task"},i.a.createElement("div",null,i.a.createElement("input",{className:"input-task",type:"text",value:e,onChange:this.changeTask,onKeyPress:this.onPressEnter}),i.a.createElement("button",{className:"add-task",onClick:this.addNewTask},i.a.createElement(p.b,{className:"plus"}))),i.a.createElement("div",{className:"icons"},i.a.createElement(p.f,{className:"icon"+("all"===a?" active-icon":""),onClick:function(){n("all")}}),i.a.createElement(p.c,{className:"icon"+("active"===a?" active-icon":""),onClick:function(){n("active")}}),i.a.createElement(p.a,{className:"icon"+("completed"===a?" active-icon":""),onClick:function(){n("completed")}}),i.a.createElement(p.e,{className:"icon",fill:c?"blue":"grey",onClick:s})))}}]),a}(n.Component),E=(a(28),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={editable:!1,editTitle:e.props.title},e.setEdit=function(){e.state.editable||e.setState({editable:!0})},e.changeTitle=function(t){e.setState({editTitle:t.target.value})},e.onPressEnter=function(t){"Enter"===t.key&&(e.props.updateItem(e.props.id,e.state.editTitle),e.setState({editable:!1})),"Escape"===t.key&&e.setState({editable:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,c=e.index,s=e.done,l=e.checkedItem,r=e.deleteItem,o=this.state,m=o.editable,d=o.editTitle,u=s?"item-el item-done":"item-el";return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"item-el"},c+1),i.a.createElement("div",{className:u,onDoubleClick:this.setEdit},m?i.a.createElement("input",{value:d,onChange:this.changeTitle,onKeyDown:this.onPressEnter}):i.a.createElement("span",null,a)),i.a.createElement("div",{className:"item-el"},i.a.createElement(p.d,{className:"icon-operation",fill:"green",onClick:function(){return l(t)}}),i.a.createElement(p.g,{className:"icon-operation",fill:"red",onClick:function(){return r(t)}})))}}]),a}(n.Component));a(29);var k=function(e){var t=e.items,a=e.deleteItem,n=e.checkedItem,c=e.updateItem;return i.a.createElement("ul",{className:"todo-list"},i.a.createElement("li",{className:"header item-todo",key:0},i.a.createElement("div",{className:"item-el"},"Id"),i.a.createElement("div",{className:"item-el"},"Title"),i.a.createElement("div",{className:"item-el"},"Operations")),t.map((function(e,t){return i.a.createElement("li",{className:"item-todo",key:e.id},i.a.createElement(E,{title:e.title,id:e.id,index:t,done:e.done,deleteItem:a,checkedItem:n,updateItem:c}))})))},g=localStorage.getItem("items"),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={items:g?JSON.parse(g):[],view:"all",change:!1},e.addItem=function(t){t.title&&t.title.trim()&&e.setState({items:[t].concat(Object(l.a)(e.state.items)),change:!0})},e.updateItem=function(t,a){var n=e.state.items.map((function(e){return e.id===t&&(e.title=a),e}));e.setState({items:n,change:!0})},e.deleteItem=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t})),change:!0})},e.checkedItem=function(t){var a=e.state.items.map((function(e){return e.id===t&&(e.done=!e.done),e}));e.setState({items:a,change:!0})},e.setView=function(t){e.setState({view:t})},e.saveState=function(){localStorage.setItem("items",JSON.stringify(e.state.items)),e.setState({change:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this.state,a=t.items,n=t.view,c=t.change;switch(n){case"all":e=a;break;case"active":e=a.filter((function(e){return!e.done}));break;case"completed":e=a.filter((function(e){return e.done}));break;default:e=a}return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"TODO APP")),i.a.createElement("div",{className:"container"},i.a.createElement(v,{addItem:this.addItem,setView:this.setView,view:n,change:c,saveState:this.saveState}),i.a.createElement(k,{items:e,deleteItem:this.deleteItem,checkedItem:this.checkedItem,updateItem:this.updateItem})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.9115a07d.chunk.js.map