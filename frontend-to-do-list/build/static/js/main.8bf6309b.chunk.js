(this["webpackJsonpfrontend-to-do-list"]=this["webpackJsonpfrontend-to-do-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(18),s=a.n(r),o=(a(25),a(26),a(2)),i=(a(27),a(4)),d=a.n(i),l=a(9),j=a(10),u=(a(29),a(30),a(5)),b=a(0),h=function(e){var t=e.tarefa;return Object(b.jsx)(u.b,{to:"/view/".concat(t._id),className:"card",children:Object(b.jsxs)("div",{className:"card-container",children:[Object(b.jsx)("h2",{className:"card-container-h2",children:t.titulo}),Object(b.jsx)("span",{className:"card-container-descricao",children:t.descricao}),Object(b.jsx)("p",{className:"card-container-prioridade",children:t.prioridade}),Object(b.jsx)("p",{className:"card-container-p",children:t.estado}),Object(b.jsx)("p",{className:"card-container-p",children:t.prazo}),Object(b.jsx)("p",{className:"card-container-p",children:t.criacao})]})})},m={url:"https://back-end-to-do-list-node.herokuapp.com/tarefas",buildGetRequest:function(){return fetch(m.url)},buildGetRequestId:function(e){return fetch(m.url+"/"+e)},fetchPost:function(e){return fetch(m.url+"/add",{method:"POST",headers:new Headers({"Content-type":"application/json"}),body:JSON.stringify(e)})},fetchPut:function(e,t){return fetch(m.url+"/edit/"+t,{method:"PUT",headers:new Headers({"Content-type":"application/json"}),body:JSON.stringify(e)})},fetchDelete:function(e){return fetch(m.url+"/delete/"+e,{method:"DELETE"})}},p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.buildGetRequest();case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"list",children:a.map((function(e){return Object(b.jsx)(h,{tarefa:e},e._id)}))})},f=function(){return Object(b.jsxs)("section",{className:"Home",children:[Object(b.jsx)("h1",{children:"To do List"}),Object(b.jsx)(p,{})]})},x=(a(37),function(e){var t=e.match.params.id,a=Object(c.useState)({}),n=Object(j.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(l.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.buildGetRequestId(t);case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var a=Object(l.a)(d.a.mark((function a(c){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.fetchDelete(t);case 2:n=a.sent,n,e.history.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(b.jsxs)("section",{className:"view",children:[Object(b.jsx)("div",{className:"view-title",children:Object(b.jsx)("h2",{className:"view-title-h2",children:r.titulo})}),Object(b.jsx)("div",{className:"view-title-span",children:Object(b.jsxs)("span",{children:["Descri\xe7\xe3o: ",r.descricao]})}),Object(b.jsxs)("div",{className:"view-info",children:[Object(b.jsxs)("p",{className:"view-info-text",children:["Prioridade: ",r.prioridade]}),Object(b.jsxs)("p",{className:"view-info-text",children:["Status: ",r.estado]}),Object(b.jsxs)("p",{className:"view-info-text",children:["Prazo: ",r.prazo]}),Object(b.jsxs)("p",{className:"view-info-text",children:["Criado em ",r.criacao]}),Object(b.jsx)(u.b,{to:"/edit/".concat(r._id),className:"bttn-editar",children:Object(b.jsx)("button",{children:"Editar"})}),Object(b.jsx)("button",{onClick:i,className:"bttn-excluir",children:"Excluir"})]})]})}),O=a(13),v=(a(38),function(e){var t=Object(c.useState)({}),a=Object(j.a)(t,2),n=a[0],r=a[1],s=function(e){var t=Object(O.a)({},n);t[e.target.name]=e.target.value,r(t)},o=function(){var t=Object(l.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,m.fetchPost(n);case 4:return c=t.sent,t.next=7,c;case 7:t.sent,e.history.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{className:"add-h1",children:"Cadastre um filme"}),Object(b.jsxs)("form",{className:"add-form",onSubmit:o,children:[Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"titulo",className:"add-form-group-label",children:"Titulo"}),Object(b.jsx)("input",{onChange:s,type:"text",name:"titulo",className:"add-form-group-input"})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"descricao",className:"add-form-group-label",children:"Descri\xe7\xe3o"}),Object(b.jsx)("input",{onChange:s,className:"add-form",name:"descricao"})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"prioridade",className:"add-form-group-label",children:"Prioridade"}),Object(b.jsxs)("select",{onChange:s,className:"add-form-group-select",name:"prioridade",children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"alta",children:"Alta"}),Object(b.jsx)("option",{value:"media",children:"M\xe9dia"}),Object(b.jsx)("option",{value:"baixa",children:"Baixa"})]})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"estado",className:"add-form-group-label",children:"Status"}),Object(b.jsxs)("select",{onChange:s,className:"add-form-group-select",name:"estado",children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"fazer",children:"Fazer"}),Object(b.jsx)("option",{value:"fazendo",children:"Fazendo"}),Object(b.jsx)("option",{value:"feito",children:"Feito"})]})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"prazo",className:"add-form-group-label",children:"Prazo"}),Object(b.jsx)("input",{onChange:s,className:"add-form-group-input",name:"prazo"})]}),Object(b.jsxs)("div",{className:"add-form-buttons",children:[Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{className:"add-form-buttons-cancelar",children:"Cancelar"})}),Object(b.jsx)("button",{type:"submit",className:"add-form-buttons-salvar",children:"Salvar"})]})]})]})}),N=(a(39),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"P\xe1gina de dele\xe7\xe3o da Task"})})}),g=(a(40),function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("ul",{className:"header-list",children:[Object(b.jsx)(u.b,{to:"/",className:"header-list-item",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(u.b,{to:"/add",className:"header-list-item",children:Object(b.jsx)("li",{children:"Adicionar tarefa"})})]})})})}),w=(a(41),function(){return Object(b.jsx)("footer",{className:"footer",children:"Todos os direitos reservados a Lucas Victor."})}),y=(a(42),function(e){var t=e.match.params.id,a=Object(c.useState)({}),n=Object(j.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(l.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.buildGetRequestId(t);case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){var t=Object(O.a)({},r);console.log(t),t[e.target.name]=e.target.value,s(t)},h=function(){var a=Object(l.a)(d.a.mark((function a(c){var n,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),n=Object(O.a)({},r),a.next=4,m.fetchPut(n,t);case 4:return s=a.sent,a.next=7,s;case 7:a.sent,e.history.push("/");case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(b.jsxs)("section",{className:"add",children:[Object(b.jsx)("h1",{className:"add-h1",children:"Cadastre um filme"}),Object(b.jsxs)("form",{className:"add-form",onSubmit:h,children:[Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"titulo",className:"add-form-group-label",children:"Titulo"}),Object(b.jsx)("input",{onChange:i,value:r.titulo,type:"text",name:"titulo",className:"add-form-group-input"})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"descricao",className:"add-form-group-label",children:"Descri\xe7\xe3o"}),Object(b.jsx)("input",{onChange:i,value:r.descricao,className:"add-form",name:"descricao"})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"prioridade",className:"add-form-group-label",children:"Prioridade"}),Object(b.jsxs)("select",{onChange:i,className:"add-form-group-select",name:"prioridade",children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"alta",children:"Alta"}),Object(b.jsx)("option",{value:"media",children:"M\xe9dia"}),Object(b.jsx)("option",{value:"baixa",children:"Baixa"})]})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"estado",className:"add-form-group-label",children:"Status"}),Object(b.jsxs)("select",{onChange:i,className:"add-form-group-select",name:"estado",children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"fazer",children:"Fazer"}),Object(b.jsx)("option",{value:"fazendo",children:"Fazendo"}),Object(b.jsx)("option",{value:"feito",children:"Feito"})]})]}),Object(b.jsxs)("div",{className:"add-form-group",children:[Object(b.jsx)("label",{htmlFor:"prazo",className:"add-form-group-label",children:"Prazo"}),Object(b.jsx)("input",{onChange:i,value:r.prazo,className:"add-form-group-input",name:"prazo"})]}),Object(b.jsxs)("div",{className:"add-form-buttons",children:[Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{className:"add-form-buttons-cancelar",children:"Cancelar"})}),Object(b.jsx)("button",{type:"submit",className:"add-form-buttons-salvar",children:"Salvar"})]})]})]})});var z=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(o.a,{path:"/view/:id",component:x}),Object(b.jsx)(o.a,{path:"/add",component:v}),Object(b.jsx)(o.a,{path:"/edit/:id",component:y}),Object(b.jsx)(o.a,{path:"/delete/:id",component:N})]}),Object(b.jsx)(w,{})]})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8bf6309b.chunk.js.map