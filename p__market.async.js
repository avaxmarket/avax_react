"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[374],{22233:function(Ce,R,a){a.d(R,{J4:function(){return h},M$:function(){return G},XI:function(){return i},gp:function(){return n},jC:function(){return re},kE:function(){return m},mA:function(){return xe},zl:function(){return S}});var re="AVAX",m="",G=40,S=43114,xe="https://api.avaxmarket.xyz/scan_block_api",h="https://api.avaxmarket.xyz/market_list_api",i="https://snowtrace.io/address/",n="https://snowtrace.io/tx/"},90664:function(Ce,R,a){a.d(R,{n:function(){return re},x:function(){return m}});var re=function(S){return S.substring(0,4)+"..."+S.substring(S.length-4,S.length)};function m(G){return!(typeof G!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(G))}},37555:function(Ce,R,a){a.d(R,{P:function(){return Ee}});var re=a(15009),m=a.n(re),G=a(99289),S=a.n(G),xe=a(13769),h=a.n(xe),i=a(5574),n=a.n(i),u=a(67294),H=a(37918),me=a.n(H),ee=we;function we(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=w.mustBeMetaMask,p=s===void 0?!1:s,r=w.silent,b=r===void 0?!1:r,g=w.timeout,E=g===void 0?3e3:g;ce();var k=!1;return new Promise(function(F){window.ethereum?te():(window.addEventListener("ethereum#initialized",te,{once:!0}),setTimeout(function(){te()},E));function te(){if(!k){k=!0,window.removeEventListener("ethereum#initialized",te);var P=window,L=P.ethereum;if(L&&(!p||L.isMetaMask))F(L);else{var B=p&&L?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!b&&console.error("@metamask/detect-provider:",B),F(null)}}}});function ce(){if(typeof p!="boolean")throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if(typeof b!="boolean")throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if(typeof E!="number")throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}var Te=a(22233),Ne=function(s){return s===1?"https://mainnet.infura.io/v3/":"https://rinkeby.infura.io/v3/"},c={NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_BASE_ENV==="test"?4:1,$=Te.zl,x=function(){var w=S()(m()().mark(function s(){return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(window.ethereum.networkVersion===$){r.next=11;break}return r.prev=1,r.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e.utils.toHex($)}]});case 4:r.next=11;break;case 6:if(r.prev=6,r.t0=r.catch(1),r.t0.code!==4902){r.next=11;break}return r.next=11,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainName:"AVAX Mainnet",chainId:e.utils.toHex($),nativeCurrency:{name:"AVAX",decimals:18,symbol:"AVAX"},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"]}]});case 11:case"end":return r.stop()}},s,null,[[1,6]])}));return function(){return w.apply(this,arguments)}}(),e,pe,Oe=function(){var s,p=(s=window)===null||s===void 0?void 0:s.ethereum;return{isConnect:function(){var b,g;return(b=p==null||(g=p.isConnected)===null||g===void 0?void 0:g.call(p))!==null&&b!==void 0?b:!1},connect:function(){return S()(m()().mark(function b(){return m()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:p==null||p.enable(),setTimeout(S()(m()().mark(function k(){return m()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:x();case 1:case"end":return F.stop()}},k)})),300);case 2:case"end":return E.stop()}},b)}))()},switch:x,notAccountWeb3:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,g=new(me());return g.setProvider(new(me()).providers.HttpProvider(Ne(b))),g},web3:function(){return S()(m()().mark(function b(){var g;return m()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,ee();case 2:if(g=k.sent,!g){k.next=7;break}return pe=g,e=new(me())(pe),k.abrupt("return",e);case 7:case"end":return k.stop()}},b)}))()},getProvider:function(){return pe}}},ie=["notAccountWeb3"],Ae=[Te.zl],Ee=function(){var s=(0,u.useState)(),p=n()(s,2),r=p[0],b=p[1],g=(0,u.useState)(),E=n()(g,2),k=E[0],ce=E[1],F=Oe(),te=F.notAccountWeb3,P=h()(F,ie),L=(0,u.useState)(),B=n()(L,2),T=B[0],D=B[1],W=(0,u.useState)(),I=n()(W,2),Z=I[0],ge=I[1],de=(0,u.useState)(!1),U=n()(de,2),ue=U[0],X=U[1],J=function(){(r!=null?r:e)&&((r!=null?r:e).eth.getAccounts().then(function(ae){D(ae[0])}),V())},V=function(){var ne=S()(m()().mark(function ae(){var K;return m()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e==null?void 0:e.eth.getChainId();case 2:K=N.sent,ge(K);case 4:case"end":return N.stop()}},ae)}));return function(){return ne.apply(this,arguments)}}();return(0,u.useEffect)(function(){X(!!T&&Ae.includes(Z!=null?Z:-1))},[T,Z]),(0,u.useEffect)(function(){ce(te(Z))},[Z]),(0,u.useEffect)(function(){P.web3().then(function(ne){b(ne),P.getProvider().on("connect",function(){console.log("connect"),J()}),P.getProvider().on("chainChanged",function(){console.log("chainChanged"),V()}),P.getProvider().on("disconnect",function(){console.log("disconnect"),J()}),P.getProvider().on("accountsChanged",function(){console.log("accountsChanged"),J()})})},[]),(0,u.useEffect)(function(){J()},[r]),{walletAddress:T,eth:P,address:T,chain:Z,connect:P.connect,switch_chian:P.switch,web3:r,isConnect:ue,rpcWeb3:k}}},98237:function(Ce,R,a){a.r(R),a.d(R,{default:function(){return P}});var re=a(15009),m=a.n(re),G=a(99289),S=a.n(G),xe=a(5574),h=a.n(xe),i=a(67294),n=a(62094),u=a(70794),H=a(5121),me=a(97857),ee=a.n(me),we=a(37555),Te=a(37918),Ne=a.n(Te),c=a(5616),$=a(99839),x=a(22233),e=a(85893),pe=function(B){var T,D=B.onClose,W=(0,we.P)(),I=W.isConnect,Z=W.address,ge=W.web3,de=W.connect,U=(0,i.useState)([]),ue=h()(U,2),X=ue[0],J=ue[1];(0,i.useEffect)(function(){Z&&H.Z.get("/api/avax/asc/utxo?address=".concat(Z.toLocaleLowerCase(),"&pageNum=1&pageSize=500")).then(function(v){if(v.data.data){var j=v.data.data.records;J(j.map(function(M){return ee()(ee()({},M),{},{select:!1})}))}})},[Z]);var V=X.filter(function(v){return v.select}).map(function(v){return v.value}).reduce(function(v,j){return(0,u.Z)(v).plus(j)},(0,u.Z)(0)),ne=!V.isGreaterThan(0),ae=(0,i.useState)(!1),K=h()(ae,2),_=K[0],N=K[1],Re=(0,i.useState)(""),Pe=h()(Re,2),z=Pe[0],_e=Pe[1],Le=(0,i.useState)(""),He=h()(Le,2),Y=He[0],Be=He[1],Ie=(0,i.useState)(!1),Q=h()(Ie,2),$e=Q[0],je=Q[1],se=Number((T=localStorage)===null||T===void 0?void 0:T.coinprice);return(0,e.jsxs)("div",{className:n.Z.transfer,children:[(0,e.jsxs)("div",{className:n.Z.transferInner,style:{marginTop:0},children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{type:"text",value:"aval",disabled:!0})}),(0,e.jsx)("div",{className:n.Z.title,children:"Select UTXO"}),(0,e.jsxs)("div",{className:n.Z.utxos,children:[Z&&(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{marginBottom:"5px",color:"rgba(0,0,0,0.5)"},children:"Top 500utxo"}),(0,e.jsxs)("div",{style:{marginBottom:"20px",color:"rgba(0,0,0,0.5)"},children:["Select value: ",V.toFormat(4)]})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:n.Z.all,onClick:function(){J(function(j){return j.map(function(M){return ee()(ee()({},M),{},{select:!0})})})},children:"All"})})]}),X.map(function(v,j){return(0,e.jsxs)("div",{className:[n.Z.utxo_item,v.select?n.Z.utxo_select:""].join(" "),onClick:function(){J(function(le){return le.map(function(q,he){return ee()(ee()({},q),{},{select:he===j?!q.select:q.select})})})},children:["$",v.tick,": ",v.value]},v.txid+v.index)}),X.length===0&&(0,e.jsx)(e.Fragment,{children:Z?(0,e.jsx)("div",{style:{fontSize:20,textAlign:"center",padding:"10px 0px",color:"rgba(0,0,0,0.5)"},children:"NO UTXO"}):(0,e.jsx)("div",{onClick:de,className:n.Z.connect,children:"Connect"})})]}),(0,e.jsx)("div",{className:n.Z.title,children:"Total Price"}),(0,e.jsx)("input",{value:Y,placeholder:"1",onInput:function(j){Be(j.target.value)}}),(0,e.jsxs)("div",{className:n.Z.title,children:["Amount ",(0,e.jsx)("span",{style:{opacity:.6},children:"(transfer token number)"})]}),(0,e.jsx)("input",{value:z,onInput:function(j){_e(j.target.value)},placeholder:"0",type:"number"}),(0,e.jsx)("button",{style:{marginTop:"10px"},onClick:function(){_e(function(j){return(Number(j)*1e8).toString()})},children:"Quick settings: mint amt(*1e8)"}),(0,e.jsx)(c.Z,{sx:{marginTop:"40px"},children:se&&Y&&z&&(0,e.jsxs)(c.Z,{sx:{color:"rgba(0,0,0,0.6)",div:{lineHeight:"2em"}},children:[(0,e.jsxs)("div",{children:["Total price: $",(0,u.Z)(se).multipliedBy(Y).toFormat(2)]}),(0,e.jsxs)("div",{children:["Unit price: $",(0,u.Z)(se).multipliedBy(Y).dividedBy(z).toFormat(10)]}),(0,e.jsxs)("div",{children:["One price: $",(0,u.Z)(se).multipliedBy(Y).dividedBy(z).multipliedBy(1e8).toFormat(2)]})]})}),(0,e.jsx)("div",{style:{marginTop:10},children:I?(0,e.jsx)("button",{disabled:_||ne,onClick:S()(m()().mark(function v(){var j,M,le,q,he,ve,oe,be,Ze,ye,ke,We;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("amt::",z),!(!z||(0,u.Z)(z).isLessThanOrEqualTo(0))){o.next=4;break}return alert("amt error"),o.abrupt("return");case 4:if(!(!Y||(0,u.Z)(Y).isLessThanOrEqualTo(0))){o.next=7;break}return alert("total value error"),o.abrupt("return");case 7:if(Z){o.next=10;break}return alert("address error"),o.abrupt("return");case 10:return o.next=12,H.Z.postForm(x.J4+"/wallet/get_aval_wallet_by_seller_address",{seller_address:Z.toLocaleLowerCase()});case 12:if(j=o.sent,M=j.data.data,console.log(M),le=M,Oe(le||"")){o.next=19;break}return alert("receiver error"),o.abrupt("return");case 19:if(q=X.filter(function(O){return O.select}).map(function(O){return{txid:O.txid,vout:O.index.toString()}}),he=X.filter(function(O){return O.select}).map(function(O){return Number(O.value)}).reduce(function(O,Fe){return O+Fe},0),!(Number(z)>he)){o.next=24;break}return alert("amt error"),o.abrupt("return");case 24:return ve="data:,"+JSON.stringify({p:"asc-20",op:"transfer",tick:"aval",vin:q,vout:[{amt:z,scriptPubKey:{addr:le.toLocaleLowerCase()}}],sell_value:Y}),N(!0),console.log(ve),o.prev=27,oe=new(Ne())(window.ethereum),o.next=31,window.ethereum.enable();case 31:return o.next=33,oe.eth.getAccounts();case 33:return be=o.sent,Ze=be[0],console.log("sender",Ze),ye=oe.utils.toWei("0","ether"),ke=oe.utils.asciiToHex(ve),console.log(ke),o.next=41,oe.eth.sendTransaction({from:Ze,to:"0x0000000000000000000000000000000000000000",value:ye,data:ke});case 41:We=o.sent,je(!0),o.next=48;break;case 45:o.prev=45,o.t0=o.catch(27),console.log(o.t0);case 48:N(!1);case 49:case"end":return o.stop()}},v,null,[[27,45]])})),children:"List"}):(0,e.jsx)("button",{onClick:de,children:"Connect"})})]}),(0,e.jsx)($.Z,{open:$e,children:(0,e.jsxs)(c.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(c.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"List successful"}),(0,e.jsx)(c.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(c.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){je(!1),D()},children:"OK"})]})}),(0,e.jsx)("div",{style:{height:"50px"}})]})};function Oe(L){return!(typeof L!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(L))}var ie=a(90664),Ae=a(7906),Ee=a(53184),w=a(53816),s=a(53252),p=a(295),r=a(15054),b=a(21737),g=a(93946),E=a(40620),k=a(50594),ce=function(B){var T=B.error_text,D=B.show_error_alert,W=B.set_show_error_alert;return(0,e.jsx)($.Z,{open:D,children:(0,e.jsxs)(c.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{clipPath:"url(#clip0_15_10091)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#E84142",fillOpacity:"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#E84142",fillOpacity:"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M23.2267 30.7734L30.7734 23.2267",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M30.7734 30.7734L23.2267 23.2267",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10091",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(c.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:T}),(0,e.jsx)(c.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){return W(!1)},children:"OK"})]})})},F=[{sell_num:"200",seller:"0x000..000",hash:"1",sellValue:"1",dexAddress:"0x00",sellTxHash:"0x00"}],te=function(){var B=(0,i.useState)(1),T=h()(B,2),D=T[0],W=T[1],I=30,Z=(0,i.useState)(0),ge=h()(Z,2),de=ge[0],U=ge[1],ue=(0,i.useState)(0),X=h()(ue,2),J=X[0],V=X[1],ne=function(f,l){W(l),U(0),V(0),A==="my_list"&&_&&nt(l),A==="orders"&&at(l),A==="listed"&&st(l)},ae=function(){W(1),U(0),V(0)},K=(0,we.P)(),_=K.address,N=K.web3,Re=K.connect,Pe=K.isConnect,z=(0,i.useState)(""),_e=h()(z,2),Le=_e[0],He=_e[1],Y=(0,i.useState)(""),Be=h()(Y,2),Ie=Be[0],Q=Be[1],$e=(0,i.useState)(0),je=h()($e,2),se=je[0],v=je[1],j=(0,i.useState)(!1),M=h()(j,2),le=M[0],q=M[1],he=(0,i.useState)(!1),ve=h()(he,2),oe=ve[0],be=ve[1],Ze=(0,i.useState)(-1),ye=h()(Ze,2),ke=ye[0],We=ye[1],Se=function(){We(-1),be(!1)},o=function(){var t=S()(m()().mark(function f(l,C){var y,Ve,ze,wt,ot,ct,Xe,Me,dt,Je,Ke,Tt;return m()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return We(C),be(!0),d.next=4,new Promise(function(Nt){return setTimeout(Nt,500)});case 4:if(_){d.next=9;break}return Q("not fund address"),setTimeout(function(){Q("")},3e3),Se(),d.abrupt("return");case 9:if(N){d.next=14;break}return Q("not fund web3"),setTimeout(function(){Q("")},3e3),Se(),d.abrupt("return");case 14:return d.next=16,N.eth.getGasPrice();case 16:return y=d.sent,Ve=Number(y)*2,ze=(Number(y)*3*28e3*2/1e18).toString(),console.log(ze),d.next=22,N.eth.getBalance(_);case 22:return wt=d.sent,ot=N.utils.toWei((0,u.Z)(l.sellValue).multipliedBy(1.02).plus(ze).toString(),"ether"),d.next=26,H.Z.get(x.J4+"/order/inscription_lock",{params:{buyer_address:_==null?void 0:_.toLocaleLowerCase(),sell_tx_hash:l.sellTxHash}});case 26:if(ct=d.sent,ct.data.data){d.next=32;break}return Q("ERROR: inscription lock"),setTimeout(function(){Q("")},3e3),Se(),d.abrupt("return");case 32:return d.prev=32,Xe="data:,"+JSON.stringify({p:"asc-20",op:"buy",tx_hash:l.sellTxHash,gasprice:Ve.toString(),tick:"aval"}),console.log("dataString::",Xe),Me=new(Ne())(window.ethereum),d.next=38,window.ethereum.enable();case 38:return d.next=40,Me.eth.getAccounts();case 40:return dt=d.sent,Je=dt[0],console.log("sender",Je),Ke=Me.utils.asciiToHex(Xe),console.log(Ke),d.next=47,Me.eth.sendTransaction({from:Je,to:l.dexAddress,value:ot,data:Ke});case 47:Tt=d.sent,q(!0),Se(),d.next=55;break;case 52:d.prev=52,d.t0=d.catch(32),console.log(d.t0);case 55:case"end":return d.stop()}},f,null,[[32,52]])}));return function(l,C){return t.apply(this,arguments)}}(),O=function(){},Fe=(0,i.useState)("listed"),Ye=h()(Fe,2),A=Ye[0],De=Ye[1],ut=(0,i.useState)([]),Ge=h()(ut,2),Qe=Ge[0],ht=Ge[1],vt=(0,i.useState)([]),qe=h()(vt,2),ft=qe[0],xt=qe[1],mt=(0,i.useState)([]),et=h()(mt,2),pt=et[0],gt=et[1],_t=(0,i.useState)({holders:0,hourVol:"-",totalVol:"-",blockNumber:"0"}),tt=h()(_t,2),fe=tt[0],jt=tt[1];(0,i.useEffect)(function(){H.Z.get(x.J4+"/market/indicator_information",{}).then(function(t){var f,l=(f=t.data)===null||f===void 0?void 0:f.data;l&&jt({holders:l.holders,hourVol:new u.Z(l.hourVol).dividedBy(1e18).toFormat(2),totalVol:new u.Z(l.totalVol).dividedBy(1e18).toFormat(2),blockNumber:l.blockNumber})})},[]);var nt=function(f){H.Z.get(x.J4+"/market/my_list?current=".concat(f||D,"&size=").concat(I),{params:{address:_==null?void 0:_.toLocaleLowerCase()}}).then(function(l){var C=l.data.data.records,y=l.data.data.total;V(y),U(Math.ceil(y/I)),console.log("my_list::",C),C&&xt(C)})},at=function(f){H.Z.get(x.J4+"/market/order_list?current=".concat(f||D,"&size=").concat(I),{}).then(function(l){var C=l.data.data.records,y=l.data.data.total;V(y),U(Math.ceil(y/I)),console.log("orders_list::",C),C&&gt(C)})},st=function(f){H.Z.get(x.J4+"/market/market_list",{params:{current:f||D,size:I}}).then(function(l){var C=l.data.data.total;V(C),U(Math.ceil(C/I)),ht(l.data.data.records.map(function(y){var Ve="0";try{Ve=JSON.parse(y.inputData.substr(6)).sell_value}catch(ze){}return{sell_num:y.sellNum,seller:y.fromAddress,hash:y.sellTxHash,sellValue:y.sellValue,dexAddress:y.dexAddress,sellTxHash:y.sellTxHash}}))})};(0,i.useEffect)(function(){ae(),A==="my_list"&&_&&nt(),A==="orders"&&at(),A==="listed"&&st()},[A,_]);var bt=(0,i.useState)(!1),rt=h()(bt,2),Zt=rt[0],it=rt[1],yt=function(){it(!0)},Ue=function(){it(!1)};(0,i.useEffect)(function(){H.Z.get("https://api.diadata.org/v1/assetQuotation/Avalanche/0x0000000000000000000000000000000000000000").then(function(t){if(t.data.Price){var f;v(t.data.Price),localStorage.coinprice=t==null||(f=t.data)===null||f===void 0?void 0:f.Price}else v(x.M$)}).catch(function(){v(x.M$)})},[]);var kt=(0,i.useState)(!1),lt=h()(kt,2),St=lt[0],Ct=lt[1];return(0,e.jsxs)("div",{className:n.Z.market,children:[(0,e.jsxs)("div",{className:n.Z.header,children:[(0,e.jsxs)("div",{className:n.Z.tick_type,children:[(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,e.jsxs)("span",{style:{marginLeft:8,fontSize:24,fontWeight:700},children:["Aval",x.kE]})}),(0,e.jsx)("div",{style:{borderRadius:39,border:"1px solid rgba(0, 0, 0, 0.10)",background:"#FFF",padding:"9px 16px"},children:"ASC-20"})]}),(0,e.jsxs)("div",{className:n.Z.tick_info,children:[(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"Total Vol"}),(0,e.jsxs)("div",{className:n.Z.item_value,children:[fe.totalVol," ",x.jC]})]}),(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"24H Vol"}),(0,e.jsxs)("div",{className:n.Z.item_value,children:[fe.hourVol," ",x.jC]})]}),!1,(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"Total Supply"}),(0,e.jsx)("div",{className:n.Z.item_value,children:"2.1P"})]})]})]}),(0,e.jsxs)("div",{className:n.Z.tabs_wrap,children:[(0,e.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,e.jsxs)("div",{className:n.Z.tabs,children:[(0,e.jsx)("div",{className:[n.Z.tab_item,A==="listed"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("listed")},children:"Listed"}),(0,e.jsx)("div",{className:[n.Z.tab_item,A==="orders"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("orders")},children:"Orders"}),(0,e.jsx)("div",{className:[n.Z.tab_item,A==="my_list"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("my_list")},children:"My List"})]}),(0,e.jsxs)(c.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(c.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(fe.blockNumber,"?chainId=43114"),children:fe.blockNumber})]})]}),(0,e.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)(c.Z,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(c.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(fe.blockNumber,"?chainId=43114"),children:fe.blockNumber})]}),(0,e.jsx)("div",{className:n.Z.quick_list_wrap,children:(0,e.jsx)("button",{onClick:yt,className:n.Z.quick_list,children:"List Token"})})]})]}),A==="listed"&&(0,e.jsxs)("div",{className:n.Z.market_list,children:[Qe.map(function(t,f){var l;return(0,e.jsxs)("div",{className:n.Z.market_list_item,children:[(0,e.jsx)("div",{className:n.Z.list_tick,children:"aval"}),(0,e.jsx)("div",{className:n.Z.list_num,children:new u.Z(t.sell_num).toFormat(0,u.Z.ROUND_FLOOR)}),(0,e.jsxs)("div",{className:n.Z.sell_usd,children:["$",(0,u.Z)(t.sellValue).dividedBy(t.sell_num).multipliedBy(se).multipliedBy(1e8).toFormat(2)," / one price"]}),(0,e.jsx)("div",{className:n.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"},children:[(0,e.jsx)("div",{children:t.sellValue}),(0,e.jsxs)("div",{children:["$",(0,u.Z)(t.sellValue).multipliedBy(se).toFormat(2)]})]}),(0,e.jsx)("div",{className:n.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8},children:[(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.6)"},children:"Seller"}),((l=t.seller)===null||l===void 0?void 0:l.toLocaleLowerCase())!==(_==null?void 0:_.toLocaleLowerCase())?(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.9)"},children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.seller,style:{color:"rgba(0,0,0,0.9)",textDecoration:"none"},children:(0,ie.n)(t.seller)})}):(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.9)"},children:"Your"})]}),_&&Pe?(0,e.jsx)("button",{disabled:ke===f&&oe,onClick:function(){return o(t,f)},className:n.Z.buy,children:"Buy"}):(0,e.jsx)("button",{onClick:Re,className:n.Z.buy,children:"Connect"})]},t.hash)}),Qe.length===0&&(0,e.jsx)(c.Z,{children:(0,e.jsx)(c.Z,{children:"Not List"})})]}),A==="orders"&&(0,e.jsx)(c.Z,{className:n.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(Ee.Z,{children:(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(s.Z,{children:"Tick"}),(0,e.jsx)(s.Z,{children:"Time"}),(0,e.jsx)(s.Z,{children:"Total Value"}),(0,e.jsx)(s.Z,{children:"Amount"}),(0,e.jsx)(s.Z,{children:"One Price"}),(0,e.jsx)(s.Z,{children:"Buyer"}),(0,e.jsx)(s.Z,{children:"Seller"}),(0,e.jsx)(s.Z,{children:"Hash"})]})}),(0,e.jsx)(p.Z,{children:pt.map(function(t,f){return(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(s.Z,{children:"aval"}),(0,e.jsx)(s.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(s.Z,{children:new u.Z(t.payValue).dividedBy(1e18).toFormat(4)}),(0,e.jsx)(s.Z,{children:t.sellNum}),(0,e.jsxs)(s.Z,{children:["$",(0,u.Z)(t.payValue).dividedBy(1e18).dividedBy(t.sellNum).multipliedBy(se).multipliedBy(x.zl===43114?1e8:1).toFormat(2)]}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.buyerAddress,children:(0,ie.n)(t.buyerAddress)})}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.sellerAddress,children:(0,ie.n)(t.sellerAddress)})}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.gp+t.txHash,children:(0,ie.n)(t.txHash)})})]},t.buyerAddress+f)})})]})}),A==="my_list"&&(0,e.jsx)(c.Z,{className:n.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(Ee.Z,{children:(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(s.Z,{children:"Tick"}),(0,e.jsx)(s.Z,{children:"Time"}),(0,e.jsx)(s.Z,{children:"Hash"}),(0,e.jsx)(s.Z,{children:"Amount"}),(0,e.jsx)(s.Z,{children:"Value"}),(0,e.jsx)(s.Z,{children:"State"})]})}),(0,e.jsx)(p.Z,{children:ft.map(function(t){return(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(s.Z,{children:"aval"}),(0,e.jsx)(s.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.gp+(t==null?void 0:t.txHash),children:t!=null&&t.txHash?(0,ie.n)(t==null?void 0:t.txHash):""})}),(0,e.jsx)(s.Z,{children:t.sellNum}),(0,e.jsx)(s.Z,{children:t.sellValue}),(0,e.jsx)(s.Z,{children:t.state==-1?"Cancel pending order":t.state==0?"List":t.state==1?"Ordinary order lock":t.state==2?"Block onfirmed":t.state==3?"Pending":t.state==4?"Purchased order completed":t.state==5?"Duplicate transaction order locked":t.state==6?"The transaction failed and was locked":"-"})]},t.txHash)})})]})}),J>0?(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:n.Z.total,children:(0,e.jsx)(r.Z,{count:de,page:D,onChange:ne,color:"primary"})})}):"",(0,e.jsx)($.Z,{open:Zt,onClose:Ue,className:n.Z.dialogWrapOutBox,children:(0,e.jsxs)(c.Z,{className:n.Z.dialogWrap,children:[(0,e.jsxs)(c.Z,{children:[(0,e.jsx)(E.Z,{children:"List"}),(0,e.jsx)(g.Z,{"aria-label":"close",onClick:Ue,sx:{position:"absolute",right:8,top:8,color:function(f){return f.palette.grey[500]}},children:(0,e.jsx)(k.Z,{})})]}),(0,e.jsx)(pe,{onClose:Ue})]})}),(0,e.jsx)($.Z,{open:le,children:(0,e.jsxs)(c.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(c.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"Payment successful"}),(0,e.jsx)(c.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(c.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){return q(!1)},children:"OK"})]})}),(0,e.jsx)(ce,{error_text:"Insufficient balance",show_error_alert:St,set_show_error_alert:Ct}),(0,e.jsx)("div",{style:{height:"70px"}}),(0,e.jsx)($.Z,{open:!!Le,children:(0,e.jsx)(b.Z,{severity:"success",color:"info",children:Le})}),(0,e.jsx)($.Z,{open:!!Ie,children:(0,e.jsx)(b.Z,{variant:"filled",severity:"error",children:Ie})})]})},P=te},62094:function(Ce,R){R.Z={indexer:"indexer___KRUim",cards:"cards___RReFY",tokenname:"tokenname___AIJQN",balance:"balance___p_phs",inner:"inner____mGY3",token:"token___YZ2O8",loadingbox:"loadingbox___pkeSy",loading:"loading___v87br",rectangle:"rectangle___iYf9s",transfer:"transfer___ZMOqy",transferInner:"transferInner___Vz9kk",utxos:"utxos___uKhYw",title:"title___nwRif",tokenbox:"tokenbox___OXMSy",utxo_item:"utxo_item___ILjVk",utxo_select:"utxo_select___dfaYU",all:"all___tVF5b",connect:"connect___it59e",market:"market___hh364",header:"header___Peyd6",tick_type:"tick_type___MCcRa",tick_info:"tick_info___hDvTL",item:"item___sWkVl",item_title:"item_title___w7ctb",item_value:"item_value___IARMT",tabs:"tabs___LxTFv",tab_item:"tab_item___Ez6Id",tab_item_active:"tab_item_active___BKQKU",quick_list:"quick_list___hUzUa",market_list:"market_list___ZKG4J",market_list_item:"market_list_item___h_BE9",buy:"buy___kP3pZ",list_tick:"list_tick____w_on",list_num:"list_num___O8RTc",sell_usd:"sell_usd___ClX7o",line:"line___SuZOP",avalLogo:"avalLogo___a10An",tabs_wrap:"tabs_wrap___d9GIz",quick_list_wrap:"quick_list_wrap___sWN69",pageWrap:"pageWrap___vLCzz",total:"total___IQw8K",emptySize:"emptySize___ZKxVQ",dialogWrap:"dialogWrap___q6lr3",dialogWrapOutBox:"dialogWrapOutBox___QYl4T",orderTableWrap:"orderTableWrap___z1Wto"}}}]);
