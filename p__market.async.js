"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[374],{22233:function(Se,R,r){r.d(R,{J4:function(){return h},M$:function(){return G},XI:function(){return i},gp:function(){return n},jC:function(){return se},kE:function(){return m},mA:function(){return me},zl:function(){return S}});var se="AVAX",m="",G=40,S=43114,me="https://api.avaxmarket.xyz/scan_block_api",h="https://api.avaxmarket.xyz/market_list_api",i="https://snowtrace.io/address/",n="https://snowtrace.io/tx/"},90664:function(Se,R,r){r.d(R,{n:function(){return se},x:function(){return m}});var se=function(S){return S.substring(0,4)+"..."+S.substring(S.length-4,S.length)};function m(G){return!(typeof G!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(G))}},37555:function(Se,R,r){r.d(R,{P:function(){return Ae}});var se=r(15009),m=r.n(se),G=r(99289),S=r.n(G),me=r(13769),h=r.n(me),i=r(5574),n=r.n(i),d=r(67294),H=r(37918),pe=r.n(H),ee=Ce;function Ce(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=w.mustBeMetaMask,p=a===void 0?!1:a,s=w.silent,b=s===void 0?!1:s,g=w.timeout,E=g===void 0?3e3:g;oe();var k=!1;return new Promise(function(F){window.ethereum?te():(window.addEventListener("ethereum#initialized",te,{once:!0}),setTimeout(function(){te()},E));function te(){if(!k){k=!0,window.removeEventListener("ethereum#initialized",te);var L=window,P=L.ethereum;if(P&&(!p||P.isMetaMask))F(P);else{var B=p&&P?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!b&&console.error("@metamask/detect-provider:",B),F(null)}}}});function oe(){if(typeof p!="boolean")throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if(typeof b!="boolean")throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if(typeof E!="number")throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}var we=r(22233),Te=function(a){return a===1?"https://mainnet.infura.io/v3/":"https://rinkeby.infura.io/v3/"},u={NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_BASE_ENV==="test"?4:1,$=we.zl,x=function(){var w=S()(m()().mark(function a(){return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(window.ethereum.networkVersion===$){s.next=11;break}return s.prev=1,s.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e.utils.toHex($)}]});case 4:s.next=11;break;case 6:if(s.prev=6,s.t0=s.catch(1),s.t0.code!==4902){s.next=11;break}return s.next=11,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainName:"AVAX Mainnet",chainId:e.utils.toHex($),nativeCurrency:{name:"AVAX",decimals:18,symbol:"AVAX"},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"]}]});case 11:case"end":return s.stop()}},a,null,[[1,6]])}));return function(){return w.apply(this,arguments)}}(),e,ge,Oe=function(){var a,p=(a=window)===null||a===void 0?void 0:a.ethereum;return{isConnect:function(){var b,g;return(b=p==null||(g=p.isConnected)===null||g===void 0?void 0:g.call(p))!==null&&b!==void 0?b:!1},connect:function(){return S()(m()().mark(function b(){return m()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:p==null||p.enable(),setTimeout(S()(m()().mark(function k(){return m()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:x();case 1:case"end":return F.stop()}},k)})),300);case 2:case"end":return E.stop()}},b)}))()},switch:x,notAccountWeb3:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u,g=new(pe());return g.setProvider(new(pe()).providers.HttpProvider(Te(b))),g},web3:function(){return S()(m()().mark(function b(){var g;return m()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,ee();case 2:if(g=k.sent,!g){k.next=7;break}return ge=g,e=new(pe())(ge),k.abrupt("return",e);case 7:case"end":return k.stop()}},b)}))()},getProvider:function(){return ge}}},ie=["notAccountWeb3"],Ne=[we.zl],Ae=function(){var a=(0,d.useState)(),p=n()(a,2),s=p[0],b=p[1],g=(0,d.useState)(),E=n()(g,2),k=E[0],oe=E[1],F=Oe(),te=F.notAccountWeb3,L=h()(F,ie),P=(0,d.useState)(),B=n()(P,2),T=B[0],D=B[1],W=(0,d.useState)(),I=n()(W,2),Z=I[0],_e=I[1],ce=(0,d.useState)(!1),U=n()(ce,2),de=U[0],X=U[1],J=function(){(s!=null?s:e)&&((s!=null?s:e).eth.getAccounts().then(function(re){D(re[0])}),V())},V=function(){var ne=S()(m()().mark(function re(){var K;return m()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e==null?void 0:e.eth.getChainId();case 2:K=N.sent,_e(K);case 4:case"end":return N.stop()}},re)}));return function(){return ne.apply(this,arguments)}}();return(0,d.useEffect)(function(){X(!!T&&Ne.includes(Z!=null?Z:-1))},[T,Z]),(0,d.useEffect)(function(){oe(te(Z))},[Z]),(0,d.useEffect)(function(){L.web3().then(function(ne){b(ne),L.getProvider().on("connect",function(){console.log("connect"),J()}),L.getProvider().on("chainChanged",function(){console.log("chainChanged"),V()}),L.getProvider().on("disconnect",function(){console.log("disconnect"),J()}),L.getProvider().on("accountsChanged",function(){console.log("accountsChanged"),J()})})},[]),(0,d.useEffect)(function(){J()},[s]),{walletAddress:T,eth:L,address:T,chain:Z,connect:L.connect,switch_chian:L.switch,web3:s,isConnect:de,rpcWeb3:k}}},98237:function(Se,R,r){r.r(R),r.d(R,{default:function(){return L}});var se=r(15009),m=r.n(se),G=r(99289),S=r.n(G),me=r(5574),h=r.n(me),i=r(67294),n=r(62094),d=r(70794),H=r(5121),pe=r(97857),ee=r.n(pe),Ce=r(37555),we=r(37918),Te=r.n(we),u=r(5616),$=r(99839),x=r(22233),e=r(85893),ge=function(B){var T,D=B.onClose,W=(0,Ce.P)(),I=W.isConnect,Z=W.address,_e=W.web3,ce=W.connect,U=(0,i.useState)([]),de=h()(U,2),X=de[0],J=de[1];(0,i.useEffect)(function(){Z&&H.Z.get("/api/avax/asc/utxo?address=".concat(Z.toLocaleLowerCase(),"&pageNum=1&pageSize=500")).then(function(v){if(v.data.data){var j=v.data.data.records;J(j.map(function(M){return ee()(ee()({},M),{},{select:!1})}))}})},[Z]);var V=X.filter(function(v){return v.select}).map(function(v){return v.value}).reduce(function(v,j){return(0,d.Z)(v).plus(j)},(0,d.Z)(0)),ne=!V.isGreaterThan(0),re=(0,i.useState)(!1),K=h()(re,2),_=K[0],N=K[1],Re=(0,i.useState)(""),Ee=h()(Re,2),z=Ee[0],je=Ee[1],Le=(0,i.useState)(""),He=h()(Le,2),Y=He[0],Pe=He[1],Be=(0,i.useState)(!1),Q=h()(Be,2),$e=Q[0],be=Q[1],ae=Number((T=localStorage)===null||T===void 0?void 0:T.coinprice);return(0,e.jsxs)("div",{className:n.Z.transfer,children:[(0,e.jsxs)("div",{className:n.Z.transferInner,style:{marginTop:0},children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{type:"text",value:"aval",disabled:!0})}),(0,e.jsx)("div",{className:n.Z.title,children:"Select UTXO"}),(0,e.jsxs)("div",{className:n.Z.utxos,children:[Z&&(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{marginBottom:"5px",color:"rgba(0,0,0,0.5)"},children:"Top 500utxo"}),(0,e.jsxs)("div",{style:{marginBottom:"20px",color:"rgba(0,0,0,0.5)"},children:["Select value: ",V.toFormat(4)]})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:n.Z.all,onClick:function(){J(function(j){return j.map(function(M){return ee()(ee()({},M),{},{select:!0})})})},children:"All"})})]}),X.map(function(v,j){return(0,e.jsxs)("div",{className:[n.Z.utxo_item,v.select?n.Z.utxo_select:""].join(" "),onClick:function(){J(function(le){return le.map(function(q,ue){return ee()(ee()({},q),{},{select:ue===j?!q.select:q.select})})})},children:["$",v.tick,": ",v.value]},v.txid+v.index)}),X.length===0&&(0,e.jsx)(e.Fragment,{children:Z?(0,e.jsx)("div",{style:{fontSize:20,textAlign:"center",padding:"10px 0px",color:"rgba(0,0,0,0.5)"},children:"NO UTXO"}):(0,e.jsx)("div",{onClick:ce,className:n.Z.connect,children:"Connect"})})]}),(0,e.jsx)("div",{className:n.Z.title,children:"Total Price"}),(0,e.jsx)("input",{value:Y,placeholder:"1",onInput:function(j){Pe(j.target.value)}}),(0,e.jsxs)("div",{className:n.Z.title,children:["Amount ",(0,e.jsx)("span",{style:{opacity:.6},children:"(transfer token number)"})]}),(0,e.jsx)("input",{value:z,onInput:function(j){je(j.target.value)},placeholder:"0",type:"number"}),(0,e.jsx)("button",{style:{marginTop:"10px"},onClick:function(){je(function(j){return(Number(j)*1e8).toString()})},children:"Quick settings: mint amt(*1e8)"}),(0,e.jsx)(u.Z,{sx:{marginTop:"40px"},children:ae&&Y&&z&&(0,e.jsxs)(u.Z,{sx:{color:"rgba(0,0,0,0.6)",div:{lineHeight:"2em"}},children:[(0,e.jsxs)("div",{children:["Total price: $",(0,d.Z)(ae).multipliedBy(Y).toFormat(2)]}),(0,e.jsxs)("div",{children:["Unit price: $",(0,d.Z)(ae).multipliedBy(Y).dividedBy(z).toFormat(10)]}),(0,e.jsxs)("div",{children:["One price: $",(0,d.Z)(ae).multipliedBy(Y).dividedBy(z).multipliedBy(1e8).toFormat(2)]})]})}),(0,e.jsx)("div",{style:{marginTop:10},children:I?(0,e.jsx)("button",{disabled:_||ne,onClick:S()(m()().mark(function v(){var j,M,le,q,ue,he,ve,Ze,ye,ke,Ie,We;return m()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("amt::",z),!(!z||(0,d.Z)(z).isLessThanOrEqualTo(0))){c.next=4;break}return alert("amt error"),c.abrupt("return");case 4:if(!(!Y||(0,d.Z)(Y).isLessThanOrEqualTo(0))){c.next=7;break}return alert("total value error"),c.abrupt("return");case 7:if(Z){c.next=10;break}return alert("address error"),c.abrupt("return");case 10:return c.next=12,H.Z.postForm(x.J4+"/wallet/get_aval_wallet_by_seller_address",{seller_address:Z.toLocaleLowerCase()});case 12:if(j=c.sent,M=j.data.data,console.log(M),le=M,Oe(le||"")){c.next=19;break}return alert("receiver error"),c.abrupt("return");case 19:if(q=X.filter(function(O){return O.select}).map(function(O){return{txid:O.txid,vout:O.index.toString()}}),ue=X.filter(function(O){return O.select}).map(function(O){return Number(O.value)}).reduce(function(O,Fe){return O+Fe},0),!(Number(z)>ue)){c.next=24;break}return alert("amt error"),c.abrupt("return");case 24:return he="data:,"+JSON.stringify({p:"asc-20",op:"transfer",tick:"aval",vin:q,vout:[{amt:z,scriptPubKey:{addr:le.toLocaleLowerCase()}}],sell_value:Y}),N(!0),console.log(he),c.prev=27,ve=new(Te())(window.ethereum),c.next=31,window.ethereum.enable();case 31:return c.next=33,ve.eth.getAccounts();case 33:return Ze=c.sent,ye=Ze[0],console.log("sender",ye),ke=ve.utils.toWei("0","ether"),Ie=ve.utils.asciiToHex(he),console.log(Ie),c.next=41,ve.eth.sendTransaction({from:ye,to:"0x0000000000000000000000000000000000000000",value:ke,data:Ie});case 41:We=c.sent,be(!0),c.next=48;break;case 45:c.prev=45,c.t0=c.catch(27),console.log(c.t0);case 48:N(!1);case 49:case"end":return c.stop()}},v,null,[[27,45]])})),children:"List"}):(0,e.jsx)("button",{onClick:ce,children:"Connect"})})]}),(0,e.jsx)($.Z,{open:$e,children:(0,e.jsxs)(u.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(u.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"List successful"}),(0,e.jsx)(u.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(u.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){be(!1),D()},children:"OK"})]})}),(0,e.jsx)("div",{style:{height:"50px"}})]})};function Oe(P){return!(typeof P!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(P))}var ie=r(90664),Ne=r(7906),Ae=r(53184),w=r(53816),a=r(53252),p=r(295),s=r(15054),b=r(21737),g=r(93946),E=r(40620),k=r(50594),oe=function(B){var T=B.error_text,D=B.show_error_alert,W=B.set_show_error_alert;return(0,e.jsx)($.Z,{open:D,children:(0,e.jsxs)(u.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{clipPath:"url(#clip0_15_10091)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#E84142",fillOpacity:"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#E84142",fillOpacity:"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M23.2267 30.7734L30.7734 23.2267",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M30.7734 30.7734L23.2267 23.2267",stroke:"#E84142",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10091",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(u.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:T}),(0,e.jsx)(u.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){return W(!1)},children:"OK"})]})})},F=[{sell_num:"200",seller:"0x000..000",hash:"1",sellValue:"1",dexAddress:"0x00",sellTxHash:"0x00"}],te=function(){var B=(0,i.useState)(1),T=h()(B,2),D=T[0],W=T[1],I=30,Z=(0,i.useState)(0),_e=h()(Z,2),ce=_e[0],U=_e[1],de=(0,i.useState)(0),X=h()(de,2),J=X[0],V=X[1],ne=function(f,l){W(l),U(0),V(0),A==="my_list"&&_&&rt(l),A==="orders"&&at(l),A==="listed"&&st(l)},re=function(){W(1),U(0),V(0)},K=(0,Ce.P)(),_=K.address,N=K.web3,Re=K.connect,Ee=K.isConnect,z=(0,i.useState)(""),je=h()(z,2),Le=je[0],He=je[1],Y=(0,i.useState)(""),Pe=h()(Y,2),Be=Pe[0],Q=Pe[1],$e=(0,i.useState)(0),be=h()($e,2),ae=be[0],v=be[1],j=(0,i.useState)(!1),M=h()(j,2),le=M[0],q=M[1],ue=(0,i.useState)(!1),he=h()(ue,2),ve=he[0],Ze=he[1],ye=(0,i.useState)(-1),ke=h()(ye,2),Ie=ke[0],We=ke[1],fe=function(){We(-1),Ze(!1)},c=function(){var t=S()(m()().mark(function f(l,C){var y,Ve,ze,dt,Xe,ut,Je,Me,ht,Ke,Ye,Tt;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return We(C),Ze(!0),o.next=4,new Promise(function(Nt){return setTimeout(Nt,500)});case 4:if(_){o.next=9;break}return Q("not fund address"),setTimeout(function(){Q("")},3e3),fe(),o.abrupt("return");case 9:if(N){o.next=14;break}return Q("not fund web3"),setTimeout(function(){Q("")},3e3),fe(),o.abrupt("return");case 14:return o.next=16,N.eth.getGasPrice();case 16:return y=o.sent,Ve=Number(y)*2,ze=(Number(y)*3*28e3*2/1e18).toString(),console.log(ze),o.next=22,N.eth.getBalance(_);case 22:if(dt=o.sent,Xe=N.utils.toWei((0,d.Z)(l.sellValue).multipliedBy(1.02).plus(ze).toString(),"ether"),!new d.Z(dt).isLessThan(Xe)){o.next=28;break}return ct(!0),fe(),o.abrupt("return");case 28:return o.next=30,H.Z.get(x.J4+"/order/inscription_lock",{params:{buyer_address:_==null?void 0:_.toLocaleLowerCase(),sell_tx_hash:l.sellTxHash}});case 30:if(ut=o.sent,ut.data.data){o.next=36;break}return Q("ERROR: inscription lock"),setTimeout(function(){Q("")},3e3),fe(),o.abrupt("return");case 36:return o.prev=36,Je="data:,"+JSON.stringify({p:"asc-20",op:"buy",tx_hash:l.sellTxHash,gasprice:Ve.toString(),tick:"aval"}),console.log("dataString::",Je),Me=new(Te())(window.ethereum),o.next=42,window.ethereum.enable();case 42:return o.next=44,Me.eth.getAccounts();case 44:return ht=o.sent,Ke=ht[0],console.log("sender",Ke),Ye=Me.utils.asciiToHex(Je),console.log(Ye),o.next=51,Me.eth.sendTransaction({from:Ke,to:l.dexAddress,value:Xe,data:Ye});case 51:Tt=o.sent,q(!0),fe(),o.next=59;break;case 56:o.prev=56,o.t0=o.catch(36),console.log(o.t0);case 59:case"end":return o.stop()}},f,null,[[36,56]])}));return function(l,C){return t.apply(this,arguments)}}(),O=function(){},Fe=(0,i.useState)("listed"),Ge=h()(Fe,2),A=Ge[0],De=Ge[1],vt=(0,i.useState)([]),Qe=h()(vt,2),qe=Qe[0],ft=Qe[1],xt=(0,i.useState)([]),et=h()(xt,2),mt=et[0],pt=et[1],gt=(0,i.useState)([]),tt=h()(gt,2),_t=tt[0],jt=tt[1],bt=(0,i.useState)({holders:0,hourVol:"-",totalVol:"-",blockNumber:"0"}),nt=h()(bt,2),xe=nt[0],Zt=nt[1];(0,i.useEffect)(function(){H.Z.get(x.J4+"/market/indicator_information",{}).then(function(t){var f,l=(f=t.data)===null||f===void 0?void 0:f.data;l&&Zt({holders:l.holders,hourVol:new d.Z(l.hourVol).dividedBy(1e18).toFormat(2),totalVol:new d.Z(l.totalVol).dividedBy(1e18).toFormat(2),blockNumber:l.blockNumber})})},[]);var rt=function(f){H.Z.get(x.J4+"/market/my_list?current=".concat(f||D,"&size=").concat(I),{params:{address:_==null?void 0:_.toLocaleLowerCase()}}).then(function(l){var C=l.data.data.records,y=l.data.data.total;V(y),U(Math.ceil(y/I)),console.log("my_list::",C),C&&pt(C)})},at=function(f){H.Z.get(x.J4+"/market/order_list?current=".concat(f||D,"&size=").concat(I),{}).then(function(l){var C=l.data.data.records,y=l.data.data.total;V(y),U(Math.ceil(y/I)),console.log("orders_list::",C),C&&jt(C)})},st=function(f){H.Z.get(x.J4+"/market/market_list",{params:{current:f||D,size:I}}).then(function(l){var C=l.data.data.total;V(C),U(Math.ceil(C/I)),ft(l.data.data.records.map(function(y){var Ve="0";try{Ve=JSON.parse(y.inputData.substr(6)).sell_value}catch(ze){}return{sell_num:y.sellNum,seller:y.fromAddress,hash:y.sellTxHash,sellValue:y.sellValue,dexAddress:y.dexAddress,sellTxHash:y.sellTxHash}}))})};(0,i.useEffect)(function(){re(),A==="my_list"&&_&&rt(),A==="orders"&&at(),A==="listed"&&st()},[A,_]);var yt=(0,i.useState)(!1),it=h()(yt,2),kt=it[0],lt=it[1],St=function(){lt(!0)},Ue=function(){lt(!1)};(0,i.useEffect)(function(){H.Z.get("https://api.diadata.org/v1/assetQuotation/Avalanche/0x0000000000000000000000000000000000000000").then(function(t){if(t.data.Price){var f;v(t.data.Price),localStorage.coinprice=t==null||(f=t.data)===null||f===void 0?void 0:f.Price}else v(x.M$)}).catch(function(){v(x.M$)})},[]);var Ct=(0,i.useState)(!1),ot=h()(Ct,2),wt=ot[0],ct=ot[1];return(0,e.jsxs)("div",{className:n.Z.market,children:[(0,e.jsxs)("div",{className:n.Z.header,children:[(0,e.jsxs)("div",{className:n.Z.tick_type,children:[(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,e.jsxs)("span",{style:{marginLeft:8,fontSize:24,fontWeight:700},children:["Aval",x.kE]})}),(0,e.jsx)("div",{style:{borderRadius:39,border:"1px solid rgba(0, 0, 0, 0.10)",background:"#FFF",padding:"9px 16px"},children:"ASC-20"})]}),(0,e.jsxs)("div",{className:n.Z.tick_info,children:[(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"Total Vol"}),(0,e.jsxs)("div",{className:n.Z.item_value,children:[xe.totalVol," ",x.jC]})]}),(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"24H Vol"}),(0,e.jsxs)("div",{className:n.Z.item_value,children:[xe.hourVol," ",x.jC]})]}),!1,(0,e.jsxs)("div",{className:n.Z.item,children:[(0,e.jsx)("div",{className:n.Z.item_title,children:"Total Supply"}),(0,e.jsx)("div",{className:n.Z.item_value,children:"2.1P"})]})]})]}),(0,e.jsxs)("div",{className:n.Z.tabs_wrap,children:[(0,e.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,e.jsxs)("div",{className:n.Z.tabs,children:[(0,e.jsx)("div",{className:[n.Z.tab_item,A==="listed"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("listed")},children:"Listed"}),(0,e.jsx)("div",{className:[n.Z.tab_item,A==="orders"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("orders")},children:"Orders"}),(0,e.jsx)("div",{className:[n.Z.tab_item,A==="my_list"?n.Z.tab_item_active:""].join(" "),onClick:function(){return De("my_list")},children:"My List"})]}),(0,e.jsxs)(u.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(u.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(xe.blockNumber,"?chainId=43114"),children:xe.blockNumber})]})]}),(0,e.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)(u.Z,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(u.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(xe.blockNumber,"?chainId=43114"),children:xe.blockNumber})]}),(0,e.jsx)("div",{className:n.Z.quick_list_wrap,children:(0,e.jsx)("button",{disabled:!0,onClick:St,className:n.Z.quick_list,children:"List Token"})})]})]}),A==="listed"&&(0,e.jsxs)("div",{className:n.Z.market_list,children:[qe.map(function(t,f){var l;return(0,e.jsxs)("div",{className:n.Z.market_list_item,children:[(0,e.jsx)("div",{className:n.Z.list_tick,children:"aval"}),(0,e.jsx)("div",{className:n.Z.list_num,children:new d.Z(t.sell_num).toFormat(0,d.Z.ROUND_FLOOR)}),(0,e.jsxs)("div",{className:n.Z.sell_usd,children:["$",(0,d.Z)(t.sellValue).dividedBy(t.sell_num).multipliedBy(ae).multipliedBy(1e8).toFormat(2)," / one price"]}),(0,e.jsx)("div",{className:n.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"},children:[(0,e.jsx)("div",{children:t.sellValue}),(0,e.jsxs)("div",{children:["$",(0,d.Z)(t.sellValue).multipliedBy(ae).toFormat(2)]})]}),(0,e.jsx)("div",{className:n.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8},children:[(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.6)"},children:"Seller"}),((l=t.seller)===null||l===void 0?void 0:l.toLocaleLowerCase())!==(_==null?void 0:_.toLocaleLowerCase())?(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.9)"},children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.seller,style:{color:"rgba(0,0,0,0.9)",textDecoration:"none"},children:(0,ie.n)(t.seller)})}):(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.9)"},children:"Your"})]}),_&&Ee?(0,e.jsx)("button",{disabled:!0,onClick:function(){return c(t,f)},className:n.Z.buy,children:"Buy"}):(0,e.jsx)("button",{onClick:Re,className:n.Z.buy,children:"Connect"})]},t.hash)}),qe.length===0&&(0,e.jsx)(u.Z,{children:(0,e.jsx)(u.Z,{children:"Not List"})})]}),A==="orders"&&(0,e.jsx)(u.Z,{className:n.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ne.Z,{children:[(0,e.jsx)(Ae.Z,{children:(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(a.Z,{children:"Tick"}),(0,e.jsx)(a.Z,{children:"Time"}),(0,e.jsx)(a.Z,{children:"Total Value"}),(0,e.jsx)(a.Z,{children:"Amount"}),(0,e.jsx)(a.Z,{children:"One Price"}),(0,e.jsx)(a.Z,{children:"Buyer"}),(0,e.jsx)(a.Z,{children:"Seller"}),(0,e.jsx)(a.Z,{children:"Hash"})]})}),(0,e.jsx)(p.Z,{children:_t.map(function(t,f){return(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(a.Z,{children:"aval"}),(0,e.jsx)(a.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(a.Z,{children:new d.Z(t.payValue).dividedBy(1e18).toFormat(4)}),(0,e.jsx)(a.Z,{children:t.sellNum}),(0,e.jsxs)(a.Z,{children:["$",(0,d.Z)(t.payValue).dividedBy(1e18).dividedBy(t.sellNum).multipliedBy(ae).multipliedBy(x.zl===43114?1e8:1).toFormat(2)]}),(0,e.jsx)(a.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.buyerAddress,children:(0,ie.n)(t.buyerAddress)})}),(0,e.jsx)(a.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.XI+t.sellerAddress,children:(0,ie.n)(t.sellerAddress)})}),(0,e.jsx)(a.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.gp+t.txHash,children:(0,ie.n)(t.txHash)})})]},t.buyerAddress+f)})})]})}),A==="my_list"&&(0,e.jsx)(u.Z,{className:n.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ne.Z,{children:[(0,e.jsx)(Ae.Z,{children:(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(a.Z,{children:"Tick"}),(0,e.jsx)(a.Z,{children:"Time"}),(0,e.jsx)(a.Z,{children:"Hash"}),(0,e.jsx)(a.Z,{children:"Amount"}),(0,e.jsx)(a.Z,{children:"Value"}),(0,e.jsx)(a.Z,{children:"State"})]})}),(0,e.jsx)(p.Z,{children:mt.map(function(t){return(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(a.Z,{children:"aval"}),(0,e.jsx)(a.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(a.Z,{children:(0,e.jsx)("a",{target:"_blank",href:x.gp+(t==null?void 0:t.txHash),children:t!=null&&t.txHash?(0,ie.n)(t==null?void 0:t.txHash):""})}),(0,e.jsx)(a.Z,{children:t.sellNum}),(0,e.jsx)(a.Z,{children:t.sellValue}),(0,e.jsx)(a.Z,{children:t.state==-1?"Cancel pending order":t.state==0?"List":t.state==1?"Ordinary order lock":t.state==2?"Block onfirmed":t.state==3?"Pending":t.state==4?"Purchased order completed":t.state==5?"Duplicate transaction order locked":t.state==6?"The transaction failed and was locked":"-"})]},t.txHash)})})]})}),J>0?(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:n.Z.total,children:(0,e.jsx)(s.Z,{count:ce,page:D,onChange:ne,color:"primary"})})}):"",(0,e.jsx)($.Z,{open:kt,onClose:Ue,className:n.Z.dialogWrapOutBox,children:(0,e.jsxs)(u.Z,{className:n.Z.dialogWrap,children:[(0,e.jsxs)(u.Z,{children:[(0,e.jsx)(E.Z,{children:"List"}),(0,e.jsx)(g.Z,{"aria-label":"close",onClick:Ue,sx:{position:"absolute",right:8,top:8,color:function(f){return f.palette.grey[500]}},children:(0,e.jsx)(k.Z,{})})]}),(0,e.jsx)(ge,{onClose:Ue})]})}),(0,e.jsx)($.Z,{open:le,children:(0,e.jsxs)(u.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(u.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"Payment successful"}),(0,e.jsx)(u.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(u.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){return q(!1)},children:"OK"})]})}),(0,e.jsx)(oe,{error_text:"Insufficient balance",show_error_alert:wt,set_show_error_alert:ct}),(0,e.jsx)("div",{style:{height:"70px"}}),(0,e.jsx)($.Z,{open:!!Le,children:(0,e.jsx)(b.Z,{severity:"success",color:"info",children:Le})}),(0,e.jsx)($.Z,{open:!!Be,children:(0,e.jsx)(b.Z,{variant:"filled",severity:"error",children:Be})})]})},L=te},62094:function(Se,R){R.Z={indexer:"indexer___KRUim",cards:"cards___RReFY",tokenname:"tokenname___AIJQN",balance:"balance___p_phs",inner:"inner____mGY3",token:"token___YZ2O8",loadingbox:"loadingbox___pkeSy",loading:"loading___v87br",rectangle:"rectangle___iYf9s",transfer:"transfer___ZMOqy",transferInner:"transferInner___Vz9kk",utxos:"utxos___uKhYw",title:"title___nwRif",tokenbox:"tokenbox___OXMSy",utxo_item:"utxo_item___ILjVk",utxo_select:"utxo_select___dfaYU",all:"all___tVF5b",connect:"connect___it59e",market:"market___hh364",header:"header___Peyd6",tick_type:"tick_type___MCcRa",tick_info:"tick_info___hDvTL",item:"item___sWkVl",item_title:"item_title___w7ctb",item_value:"item_value___IARMT",tabs:"tabs___LxTFv",tab_item:"tab_item___Ez6Id",tab_item_active:"tab_item_active___BKQKU",quick_list:"quick_list___hUzUa",market_list:"market_list___ZKG4J",market_list_item:"market_list_item___h_BE9",buy:"buy___kP3pZ",list_tick:"list_tick____w_on",list_num:"list_num___O8RTc",sell_usd:"sell_usd___ClX7o",line:"line___SuZOP",avalLogo:"avalLogo___a10An",tabs_wrap:"tabs_wrap___d9GIz",quick_list_wrap:"quick_list_wrap___sWN69",pageWrap:"pageWrap___vLCzz",total:"total___IQw8K",emptySize:"emptySize___ZKxVQ",dialogWrap:"dialogWrap___q6lr3",dialogWrapOutBox:"dialogWrapOutBox___QYl4T",orderTableWrap:"orderTableWrap___z1Wto"}}}]);
