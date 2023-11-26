"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{2277:function(_,l,s){s.r(l),s.d(l,{default:function(){return O}});var A=s(8152),u=s.n(A),i=s(3236),d={search:"search___vs5qm",searchbutton:"searchbutton___J_oXF",searchButtonMobile:"searchButtonMobile___KgyZ1",searchButtonPc:"searchButtonPc___CTNCZ"},z=Object.defineProperty,y=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,I=(n,a,t)=>a in n?z(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,f=(n,a)=>{for(var t in a||(a={}))T.call(a,t)&&I(n,t,a[t]);if(y)for(var t of y(a))p.call(a,t)&&I(n,t,a[t]);return n};const S=n=>i.createElement("svg",f({className:"search_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200},n),i.createElement("path",{d:"M797.525 752.267c62.07-72.736 97.28-165.003 97.28-262.187.011-223.552-181.184-404.747-404.725-404.747-223.541 0-404.747 181.206-404.747 404.736 0 223.542 181.206 404.758 404.736 404.758a404.693 404.693 0 0 0 118.208-17.547 32 32 0 0 0-18.666-61.216 340.693 340.693 0 0 1-99.542 14.763c-188.181-.011-340.736-152.566-340.736-340.758 0-188.181 152.555-340.736 340.736-340.736 188.192 0 340.758 152.555 340.758 340.736 0 89.28-35.382 173.696-97.142 237.323a36.992 36.992 0 0 0 .384 51.925l149.974 149.974a32 32 0 0 0 45.258-45.248L797.525 752.267z"}));var k="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc5Ny41MjUgNzUyLjI2N2M2Mi4wNy03Mi43MzYgOTcuMjgtMTY1LjAwMyA5Ny4yOC0yNjIuMTg3LjAxMS0yMjMuNTUyLTE4MS4xODQtNDA0Ljc0Ny00MDQuNzI1LTQwNC43NDctMjIzLjU0MSAwLTQwNC43NDcgMTgxLjIwNi00MDQuNzQ3IDQwNC43MzYgMCAyMjMuNTQyIDE4MS4yMDYgNDA0Ljc1OCA0MDQuNzM2IDQwNC43NThhNDA0LjY5MyA0MDQuNjkzIDAgMCAwIDExOC4yMDgtMTcuNTQ3IDMyIDMyIDAgMCAwLTE4LjY2Ni02MS4yMTYgMzQwLjY5MyAzNDAuNjkzIDAgMCAxLTk5LjU0MiAxNC43NjNjLTE4OC4xODEtLjAxMS0zNDAuNzM2LTE1Mi41NjYtMzQwLjczNi0zNDAuNzU4IDAtMTg4LjE4MSAxNTIuNTU1LTM0MC43MzYgMzQwLjczNi0zNDAuNzM2IDE4OC4xOTIgMCAzNDAuNzU4IDE1Mi41NTUgMzQwLjc1OCAzNDAuNzM2IDAgODkuMjgtMzUuMzgyIDE3My42OTYtOTcuMTQyIDIzNy4zMjNhMzYuOTkyIDM2Ljk5MiAwIDAgMCAuMzg0IDUxLjkyNWwxNDkuOTc0IDE0OS45NzRhMzIgMzIgMCAwIDAgNDUuMjU4LTQ1LjI0OEw3OTcuNTI1IDc1Mi4yNjd6Ii8+PC9zdmc+",e=s(2086),w=function(a){var t=a.onSearch,j=(0,i.useState)("none"),M=u()(j,2),N=M[0],h=M[1],g=(0,i.useState)(""),v=u()(g,2),o=v[0],m=v[1],c=new RegExp("^0x[0-9a-fA-F]{40}$").test(o);return(0,e.jsxs)("div",{className:d.search,children:[(0,e.jsx)("input",{placeholder:"input your Avax address",onInput:function(b){var D=b.target.value;m(D),h(D?"flex":"none")}}),(0,e.jsxs)("div",{className:d.searchbutton,style:{display:N},children:[(0,e.jsx)("button",{className:d.searchButtonPc,disabled:!c,onClick:function(){return t(o)},children:"Search"}),(0,e.jsx)(S,{className:d.searchButtonMobile,onClick:function(){return t(o)}})]})]})},r=s(285),L=s(4641),C=s(1562);function O(){var n=(0,i.useState)("0"),a=u()(n,2),t=a[0],j=a[1],M=(0,i.useState)(!1),N=u()(M,2),h=N[0],g=N[1];return(0,e.jsxs)("div",{className:r.Z.indexer,children:[(0,e.jsxs)("div",{className:r.Z.inner,children:[(0,e.jsx)("div",{}),(0,e.jsxs)("div",{style:{marginTop:"70px"},children:[(0,e.jsxs)("h2",{style:{marginBottom:"25px",textAlign:"center"},children:["Check out asc-20 Balance ",(0,e.jsx)("span",{children:"of the address"})," "]}),(0,e.jsx)(w,{onSearch:function(o){g(!0),L.Z.get("/api/get_avax_balance?tick=aval&addr=".concat(o.toLocaleLowerCase())).then(function(m){var c,x=((c=m.data)===null||c===void 0?void 0:c.data)||"0";j(x)}).finally(function(){setTimeout(function(){g(!1)},1e3)})}})]}),(0,e.jsx)("div",{})]}),(0,e.jsxs)("div",{className:r.Z.tokenbox,style:{marginTop:"60px",maxWidth:"1000px",margin:"auto",boxSizing:"border-box",padding:"0px 60px"},children:[(0,e.jsx)("div",{className:r.Z.token,style:{marginBottom:30,marginTop:40},children:(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:500},children:"Tokens"})}),(0,e.jsx)("div",{className:r.Z.cards,children:h?(0,e.jsx)("div",{className:[r.Z.loadingbox,r.Z.loading].join(" ")}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:r.Z.tokenname,children:"aval"}),(0,e.jsx)("div",{className:r.Z.balance,children:new C.Z(t).toFormat(4)})]})})]}),(0,e.jsx)("div",{style:{marginTop:100}})]})}},285:function(_,l){l.Z={indexer:"indexer___KRUim",cards:"cards___RReFY",tokenname:"tokenname___AIJQN",balance:"balance___p_phs",inner:"inner____mGY3",token:"token___YZ2O8",loadingbox:"loadingbox___pkeSy",loading:"loading___v87br",rectangle:"rectangle___iYf9s",transfer:"transfer___ZMOqy",transferInner:"transferInner___Vz9kk",utxos:"utxos___uKhYw",title:"title___nwRif",tokenbox:"tokenbox___OXMSy"}}}]);
