"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[374],{22233:function(Se,M,n){n.d(M,{J4:function(){return u},M$:function(){return D},XI:function(){return c},gp:function(){return a},jC:function(){return q},kE:function(){return x},mA:function(){return he},zl:function(){return C}});var q="AVAX",x="",D=40,C=43114,he="https://api.avaxmarket.xyz/scan_block_api",u="https://api.avaxmarket.xyz/market_list_api",c="https://snowtrace.io/address/",a="https://snowtrace.io/tx/"},90664:function(Se,M,n){n.d(M,{n:function(){return q},x:function(){return x}});var q=function(C){return C.substring(0,4)+"..."+C.substring(C.length-4,C.length)};function x(D){return!(typeof D!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(D))}},37555:function(Se,M,n){n.d(M,{P:function(){return re}});var q=n(15009),x=n.n(q),D=n(99289),C=n.n(D),he=n(13769),u=n.n(he),c=n(5574),a=n.n(c),v=n(67294),z=n(37918),fe=n.n(z),J=Ce;function Ce(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Z=s.mustBeMetaMask,_=Z===void 0?!1:Z,r=s.silent,y=r===void 0?!1:r,g=s.timeout,E=g===void 0?3e3:g;me();var i=!1;return new Promise(function(B){window.ethereum?K():(window.addEventListener("ethereum#initialized",K,{once:!0}),setTimeout(function(){K()},E));function K(){if(!i){i=!0,window.removeEventListener("ethereum#initialized",K);var w=window,R=w.ethereum;if(R&&(!_||R.isMetaMask))B(R);else{var F=_&&R?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!y&&console.error("@metamask/detect-provider:",F),B(null)}}}});function me(){if(typeof _!="boolean")throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if(typeof y!="boolean")throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if(typeof E!="number")throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}var we=n(22233),Te=function(Z){return Z===1?"https://mainnet.infura.io/v3/":"https://rinkeby.infura.io/v3/"},ee={NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_BASE_ENV==="test"?4:1,h=we.zl,e=function(){var s=C()(x()().mark(function Z(){return x()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(window.ethereum.networkVersion===h){r.next=11;break}return r.prev=1,r.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:W.utils.toHex(h)}]});case 4:r.next=11;break;case 6:if(r.prev=6,r.t0=r.catch(1),r.t0.code!==4902){r.next=11;break}return r.next=11,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainName:"AVAX Mainnet",chainId:W.utils.toHex(h),nativeCurrency:{name:"AVAX",decimals:18,symbol:"AVAX"},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"]}]});case 11:case"end":return r.stop()}},Z,null,[[1,6]])}));return function(){return s.apply(this,arguments)}}(),W,ve,te=function(){var Z,_=(Z=window)===null||Z===void 0?void 0:Z.ethereum;return{isConnect:function(){var y,g;return(y=_==null||(g=_.isConnected)===null||g===void 0?void 0:g.call(_))!==null&&y!==void 0?y:!1},connect:function(){return C()(x()().mark(function y(){return x()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:_==null||_.enable(),setTimeout(C()(x()().mark(function i(){return x()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:e();case 1:case"end":return B.stop()}},i)})),300);case 2:case"end":return E.stop()}},y)}))()},switch:e,notAccountWeb3:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ee,g=new(fe());return g.setProvider(new(fe()).providers.HttpProvider(Te(y))),g},web3:function(){return C()(x()().mark(function y(){var g;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,J();case 2:if(g=i.sent,!g){i.next=7;break}return ve=g,W=new(fe())(ve),i.abrupt("return",W);case 7:case"end":return i.stop()}},y)}))()},getProvider:function(){return ve}}},Ne=["notAccountWeb3"],Ae=[we.zl],re=function(){var Z=(0,v.useState)(),_=a()(Z,2),r=_[0],y=_[1],g=(0,v.useState)(),E=a()(g,2),i=E[0],me=E[1],B=te(),K=B.notAccountWeb3,w=u()(B,Ne),R=(0,v.useState)(),F=a()(R,2),T=F[0],ie=F[1],k=(0,v.useState)(),xe=a()(k,2),N=xe[0],pe=xe[1],O=(0,v.useState)(!1),H=a()(O,2),G=H[0],le=H[1],L=function(){(r!=null?r:W)&&((r!=null?r:W).eth.getAccounts().then(function(V){ie(V[0])}),oe())},oe=function(){var U=C()(x()().mark(function V(){var j;return x()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,W==null?void 0:W.eth.getChainId();case 2:j=$.sent,pe(j);case 4:case"end":return $.stop()}},V)}));return function(){return U.apply(this,arguments)}}();return(0,v.useEffect)(function(){le(!!T&&Ae.includes(N!=null?N:-1))},[T,N]),(0,v.useEffect)(function(){me(K(N))},[N]),(0,v.useEffect)(function(){w.web3().then(function(U){y(U),w.getProvider().on("connect",function(){console.log("connect"),L()}),w.getProvider().on("chainChanged",function(){console.log("chainChanged"),oe()}),w.getProvider().on("disconnect",function(){console.log("disconnect"),L()}),w.getProvider().on("accountsChanged",function(){console.log("accountsChanged"),L()})})},[]),(0,v.useEffect)(function(){L()},[r]),{walletAddress:T,eth:w,address:T,chain:N,connect:w.connect,switch_chian:w.switch,web3:r,isConnect:G,rpcWeb3:i}}},2642:function(Se,M,n){n.r(M),n.d(M,{default:function(){return K}});var q=n(15009),x=n.n(q),D=n(99289),C=n.n(D),he=n(5574),u=n.n(he),c=n(67294),a=n(62094),v=n(70794),z=n(5121),fe=n(97857),J=n.n(fe),Ce=n(37555),we=n(37918),Te=n.n(we),ee=n(99839),h=n(5616),e=n(85893),W=function(R){var F=R.onClose,T=(0,Ce.P)(),ie=T.isConnect,k=T.address,xe=T.web3,N=T.connect,pe=(0,c.useState)([]),O=u()(pe,2),H=O[0],G=O[1];(0,c.useEffect)(function(){k&&z.Z.get("/api/avax/asc/utxo?address=".concat(k.toLocaleLowerCase(),"&pageNum=1&pageSize=500")).then(function(f){if(f.data.data){var p=f.data.data.records;G(p.map(function(I){return J()(J()({},I),{},{select:!1})}))}})},[k]);var le=H.filter(function(f){return f.select}).map(function(f){return f.value}).reduce(function(f,p){return(0,v.Z)(f).plus(p)},(0,v.Z)(0)),L=!le.isGreaterThan(0),oe=(0,c.useState)(!1),U=u()(oe,2),V=U[0],j=U[1],ae=(0,c.useState)(""),$=u()(ae,2),Y=$[0],Pe=$[1],Ee=(0,c.useState)(""),ge=u()(Ee,2),je=ge[0],ze=ge[1],Le=(0,c.useState)(!1),_e=u()(Le,2),Q=_e[0],Ie=_e[1];return(0,e.jsxs)("div",{className:a.Z.transfer,children:[(0,e.jsxs)("div",{className:a.Z.transferInner,style:{marginTop:0},children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{type:"text",value:"aval",disabled:!0})}),(0,e.jsx)("div",{className:a.Z.title,children:"Select UTXO"}),(0,e.jsxs)("div",{className:a.Z.utxos,children:[k&&(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{marginBottom:"5px",color:"rgba(0,0,0,0.5)"},children:"Top 500utxo"}),(0,e.jsxs)("div",{style:{marginBottom:"20px",color:"rgba(0,0,0,0.5)"},children:["Select value: ",le.toFormat(4)]})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:a.Z.all,onClick:function(){G(function(p){return p.map(function(I){return J()(J()({},I),{},{select:!0})})})},children:"All"})})]}),H.map(function(f,p){return(0,e.jsxs)("div",{className:[a.Z.utxo_item,f.select?a.Z.utxo_select:""].join(" "),onClick:function(){G(function(ne){return ne.map(function(X,ce){return J()(J()({},X),{},{select:ce===p?!X.select:X.select})})})},children:["$",f.tick,": ",f.value]},f.txid+f.index)}),H.length===0&&(0,e.jsx)(e.Fragment,{children:k?(0,e.jsx)("div",{style:{fontSize:20,textAlign:"center",padding:"10px 0px",color:"rgba(0,0,0,0.5)"},children:"NO UTXO"}):(0,e.jsx)("div",{onClick:N,className:a.Z.connect,children:"Connect"})})]}),(0,e.jsx)("div",{className:a.Z.title,children:"Total Price"}),(0,e.jsx)("input",{value:je,placeholder:"1",onInput:function(p){ze(p.target.value)}}),(0,e.jsxs)("div",{className:a.Z.title,children:["Amount ",(0,e.jsx)("span",{style:{opacity:.6},children:"(transfer token number)"})]}),(0,e.jsx)("input",{value:Y,onInput:function(p){Pe(p.target.value)},placeholder:"0",type:"number"}),(0,e.jsx)("button",{style:{marginTop:"10px"},onClick:function(){Pe(function(p){return(Number(p)*1e8).toString()})},children:"Quick settings: mint amt(*1e8)"}),(0,e.jsx)("div",{style:{marginTop:50},children:ie?(0,e.jsx)("button",{disabled:V||L,onClick:C()(x()().mark(function f(){var p,I,ne,X,ce,de,se,be,Ze,ye,ke,We;return x()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(console.log("amt::",Y),!(!Y||(0,v.Z)(Y).isLessThanOrEqualTo(0))){l.next=4;break}return alert("amt error"),l.abrupt("return");case 4:if(!(!je||(0,v.Z)(je).isLessThanOrEqualTo(0))){l.next=7;break}return alert("total value error"),l.abrupt("return");case 7:if(k){l.next=10;break}return alert("address error"),l.abrupt("return");case 10:return l.next=12,z.Z.postForm("http://156.245.25.50:8020/wallet/get_aval_wallet_by_seller_address",{seller_address:k.toLocaleLowerCase()});case 12:if(p=l.sent,I=p.data.data,console.log(I),ne=I,ve(ne||"")){l.next=19;break}return alert("receiver error"),l.abrupt("return");case 19:if(X=H.filter(function(S){return S.select}).map(function(S){return{txid:S.txid,vout:S.index.toString()}}),ce=H.filter(function(S){return S.select}).map(function(S){return Number(S.value)}).reduce(function(S,Re){return S+Re},0),!(Number(Y)>ce)){l.next=24;break}return alert("amt error"),l.abrupt("return");case 24:return de="data:,"+JSON.stringify({p:"asc-20",op:"transfer",tick:"aval",vin:X,vout:[{amt:Y,scriptPubKey:{addr:ne.toLocaleLowerCase()}}],sell_value:je}),j(!0),console.log(de),l.prev=27,se=new(Te())(window.ethereum),l.next=31,window.ethereum.enable();case 31:return l.next=33,se.eth.getAccounts();case 33:return be=l.sent,Ze=be[0],console.log("sender",Ze),ye=se.utils.toWei("0","ether"),ke=se.utils.asciiToHex(de),console.log(ke),l.next=41,se.eth.sendTransaction({from:Ze,to:"0x0000000000000000000000000000000000000000",value:ye,data:ke});case 41:We=l.sent,Ie(!0),l.next=48;break;case 45:l.prev=45,l.t0=l.catch(27),console.log(l.t0);case 48:j(!1);case 49:case"end":return l.stop()}},f,null,[[27,45]])})),children:"List"}):(0,e.jsx)("button",{onClick:N,children:"Connect"})})]}),(0,e.jsx)(ee.Z,{open:Q,children:(0,e.jsxs)(h.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(h.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"List successful"}),(0,e.jsx)(h.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(h.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){Ie(!1),F()},children:"OK"})]})}),(0,e.jsx)("div",{style:{height:"50px"}})]})};function ve(w){return!(typeof w!="string"||!/^0x[0-9A-Fa-f]{40}$/.test(w))}var te=n(90664),Ne=n(7906),Ae=n(53184),re=n(53816),s=n(53252),Z=n(295),_=n(15054),r=n(21737),y=n(93946),g=n(40620),E=n(50594),i=n(22233),me=[{sell_num:"200",seller:"0x000..000",hash:"1",sellValue:"1",dexAddress:"0x00",sellTxHash:"0x00"}],B=function(){var R=(0,c.useState)(1),F=u()(R,2),T=F[0],ie=F[1],k=30,xe=(0,c.useState)(0),N=u()(xe,2),pe=N[0],O=N[1],H=(0,c.useState)(0),G=u()(H,2),le=G[0],L=G[1],oe=function(m,d){ie(d),O(0),L(0),A==="my_list"&&j&&et(d),A==="orders"&&tt(d),A==="listed"&&at(d)},U=function(){ie(1),O(0),L(0)},V=(0,Ce.P)(),j=V.address,ae=V.web3,$=V.connect,Y=V.isConnect,Pe=(0,c.useState)(""),Ee=u()(Pe,2),ge=Ee[0],je=Ee[1],ze=(0,c.useState)(""),Le=u()(ze,2),_e=Le[0],Q=Le[1],Ie=(0,c.useState)(0),f=u()(Ie,2),p=f[0],I=f[1],ne=(0,c.useState)(!1),X=u()(ne,2),ce=X[0],de=X[1],se=(0,c.useState)(!1),be=u()(se,2),Ze=be[0],ye=be[1],ke=(0,c.useState)(-1),We=u()(ke,2),Xe=We[0],l=We[1],S=function(){l(-1),ye(!1)},Re=function(){var t=C()(x()().mark(function m(d,P){var b,Be,Ve,rt,$e,it,De,Me,lt,Fe,Ue,Zt;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l(P),ye(!0),o.next=4,new Promise(function(yt){return setTimeout(yt,500)});case 4:if(j){o.next=9;break}return Q("not fund address"),setTimeout(function(){Q("")},3e3),S(),o.abrupt("return");case 9:if(ae){o.next=14;break}return Q("not fund web3"),setTimeout(function(){Q("")},3e3),S(),o.abrupt("return");case 14:return o.next=16,ae.eth.getGasPrice();case 16:return b=o.sent,Be=Number(b)*2,Ve=(Number(b)*3*28e3*2/1e18).toString(),console.log(Ve),o.next=22,ae.eth.getBalance(j);case 22:if(rt=o.sent,$e=ae.utils.toWei((0,v.Z)(d.sellValue).multipliedBy(1.02).plus(Ve).toString(),"ether"),!new v.Z(rt).isLessThan($e)){o.next=28;break}return alert("balance error"),S(),o.abrupt("return");case 28:return o.next=30,z.Z.get(i.J4+"/order/inscription_lock",{params:{buyer_address:j==null?void 0:j.toLocaleLowerCase(),sell_tx_hash:d.sellTxHash}});case 30:if(it=o.sent,it.data.data){o.next=36;break}return Q("ERROR: inscription lock"),setTimeout(function(){Q("")},3e3),S(),o.abrupt("return");case 36:return o.prev=36,De="data:,"+JSON.stringify({p:"asc-20",op:"buy",tx_hash:d.sellTxHash,gasprice:Be.toString(),tick:"aval"}),console.log("dataString::",De),Me=new(Te())(window.ethereum),o.next=42,window.ethereum.enable();case 42:return o.next=44,Me.eth.getAccounts();case 44:return lt=o.sent,Fe=lt[0],console.log("sender",Fe),Ue=Me.utils.asciiToHex(De),console.log(Ue),o.next=51,Me.eth.sendTransaction({from:Fe,to:d.dexAddress,value:$e,data:Ue});case 51:Zt=o.sent,de(!0),S(),o.next=59;break;case 56:o.prev=56,o.t0=o.catch(36),console.log(o.t0);case 59:case"end":return o.stop()}},m,null,[[36,56]])}));return function(d,P){return t.apply(this,arguments)}}(),kt=function(){},ot=(0,c.useState)("listed"),Je=u()(ot,2),A=Je[0],Oe=Je[1],ct=(0,c.useState)([]),Ke=u()(ct,2),Ge=Ke[0],dt=Ke[1],ut=(0,c.useState)([]),Ye=u()(ut,2),ht=Ye[0],ft=Ye[1],vt=(0,c.useState)([]),Qe=u()(vt,2),mt=Qe[0],xt=Qe[1],pt=(0,c.useState)({holders:0,hourVol:"-",totalVol:"-",blockNumber:"0"}),qe=u()(pt,2),ue=qe[0],gt=qe[1];(0,c.useEffect)(function(){z.Z.get(i.J4+"/market/indicator_information",{}).then(function(t){var m,d=(m=t.data)===null||m===void 0?void 0:m.data;d&&gt({holders:d.holders,hourVol:new v.Z(d.hourVol).dividedBy(1e18).toFormat(4),totalVol:new v.Z(d.totalVol).dividedBy(1e18).toFormat(4),blockNumber:d.blockNumber})})},[]);var et=function(m){z.Z.get(i.J4+"/market/my_list?current=".concat(m||T,"&size=").concat(k),{params:{address:j==null?void 0:j.toLocaleLowerCase()}}).then(function(d){var P=d.data.data.records,b=d.data.data.total;L(b),O(Math.ceil(b/k)),console.log("my_list::",P),P&&ft(P)})},tt=function(m){z.Z.get(i.J4+"/market/order_list?current=".concat(m||T,"&size=").concat(k),{}).then(function(d){var P=d.data.data.records,b=d.data.data.total;L(b),O(Math.ceil(b/k)),console.log("orders_list::",P),P&&xt(P)})},at=function(m){z.Z.get(i.J4+"/market/market_list",{params:{current:m||T,size:k}}).then(function(d){var P=d.data.data.total;L(P),O(Math.ceil(P/k)),dt(d.data.data.records.map(function(b){var Be="0";try{Be=JSON.parse(b.inputData.substr(6)).sell_value}catch(Ve){}return{sell_num:b.sellNum,seller:b.fromAddress,hash:b.sellTxHash,sellValue:b.sellValue,dexAddress:b.dexAddress,sellTxHash:b.sellTxHash}}))})};(0,c.useEffect)(function(){U(),A==="my_list"&&j&&et(),A==="orders"&&tt(),A==="listed"&&at()},[A,j]);var jt=(0,c.useState)(!1),nt=u()(jt,2),_t=nt[0],st=nt[1],bt=function(){st(!0)},He=function(){st(!1)};return(0,c.useEffect)(function(){z.Z.get("https://api.diadata.org/v1/assetQuotation/Avalanche/0x0000000000000000000000000000000000000000").then(function(t){t.data.Price?I(t.data.Price):I(i.M$)}).catch(function(){I(i.M$)})},[]),(0,e.jsxs)("div",{className:a.Z.market,children:[(0,e.jsxs)("div",{className:a.Z.header,children:[(0,e.jsxs)("div",{className:a.Z.tick_type,children:[(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,e.jsxs)("span",{style:{marginLeft:8,fontSize:24,fontWeight:700},children:["Aval",i.kE]})}),(0,e.jsx)("div",{style:{borderRadius:39,border:"1px solid rgba(0, 0, 0, 0.10)",background:"#FFF",padding:"9px 16px"},children:"ASC-20"})]}),(0,e.jsxs)("div",{className:a.Z.tick_info,children:[(0,e.jsxs)("div",{className:a.Z.item,children:[(0,e.jsx)("div",{className:a.Z.item_title,children:"Total Vol"}),(0,e.jsxs)("div",{className:a.Z.item_value,children:[ue.totalVol," ",i.jC]})]}),(0,e.jsxs)("div",{className:a.Z.item,children:[(0,e.jsx)("div",{className:a.Z.item_title,children:"24H Vol"}),(0,e.jsxs)("div",{className:a.Z.item_value,children:[ue.hourVol," ",i.jC]})]}),!1,(0,e.jsxs)("div",{className:a.Z.item,children:[(0,e.jsx)("div",{className:a.Z.item_title,children:"Total Supply"}),(0,e.jsx)("div",{className:a.Z.item_value,children:"2.1P"})]})]})]}),(0,e.jsxs)("div",{className:a.Z.tabs_wrap,children:[(0,e.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,e.jsxs)("div",{className:a.Z.tabs,children:[(0,e.jsx)("div",{className:[a.Z.tab_item,A==="listed"?a.Z.tab_item_active:""].join(" "),onClick:function(){return Oe("listed")},children:"Listed"}),(0,e.jsx)("div",{className:[a.Z.tab_item,A==="orders"?a.Z.tab_item_active:""].join(" "),onClick:function(){return Oe("orders")},children:"Orders"}),(0,e.jsx)("div",{className:[a.Z.tab_item,A==="my_list"?a.Z.tab_item_active:""].join(" "),onClick:function(){return Oe("my_list")},children:"My List"})]}),(0,e.jsxs)(h.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(h.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(ue.blockNumber,"?chainId=43114"),children:ue.blockNumber})]})]}),(0,e.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)(h.Z,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",ml:"20px",a:{color:"#000"}},children:[(0,e.jsx)(h.Z,{sx:{height:10,width:10,background:"#000",borderRadius:"50px",mr:"10px"}}),(0,e.jsx)("a",{target:"_blank",href:"https://snowtrace.io/block/".concat(ue.blockNumber,"?chainId=43114"),children:ue.blockNumber})]}),(0,e.jsx)("div",{className:a.Z.quick_list_wrap,children:(0,e.jsx)("button",{disabled:!0,style:{opacity:.5},onClick:bt,className:a.Z.quick_list,children:"List Token"})})]})]}),A==="listed"&&(0,e.jsxs)("div",{className:a.Z.market_list,children:[Ge.map(function(t,m){return(0,e.jsxs)("div",{className:a.Z.market_list_item,children:[(0,e.jsx)("div",{className:a.Z.list_tick,children:"aval"}),(0,e.jsx)("div",{className:a.Z.list_num,children:t.sell_num}),(0,e.jsxs)("div",{className:a.Z.sell_usd,children:["$",(0,v.Z)(t.sellValue).dividedBy(t.sell_num).multipliedBy(p).toFormat(2)]}),(0,e.jsx)("div",{className:a.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"},children:[(0,e.jsx)("div",{children:t.sellValue}),(0,e.jsxs)("div",{children:["$",(0,v.Z)(t.sellValue).multipliedBy(p).toFormat(2)]})]}),(0,e.jsx)("div",{className:a.Z.line}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8},children:[(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.6)"},children:"Seller"}),(0,e.jsx)("div",{style:{fontSize:"12px",color:"rgba(0,0,0,0.9)"},children:(0,te.n)(t.seller)})]}),j&&Y?(0,e.jsx)("button",{disabled:Xe===m&&Ze,onClick:function(){return Re(t,m)},className:a.Z.buy,children:"Buy"}):(0,e.jsx)("button",{onClick:$,className:a.Z.buy,children:"Connect"})]},t.hash)}),Ge.length===0&&(0,e.jsx)(h.Z,{children:(0,e.jsx)(h.Z,{children:"Not List"})})]}),A==="orders"&&(0,e.jsx)(h.Z,{className:a.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ne.Z,{children:[(0,e.jsx)(Ae.Z,{children:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(s.Z,{children:"Tick"}),(0,e.jsx)(s.Z,{children:"Time"}),(0,e.jsx)(s.Z,{children:"Total Value"}),(0,e.jsx)(s.Z,{children:"Amount"}),(0,e.jsx)(s.Z,{children:"Buyer"}),(0,e.jsx)(s.Z,{children:"Seller"}),(0,e.jsx)(s.Z,{children:"Hash"})]})}),(0,e.jsx)(Z.Z,{children:mt.map(function(t,m){return(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(s.Z,{children:"aval"}),(0,e.jsx)(s.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(s.Z,{children:new v.Z(t.payValue).dividedBy(1e18).toFormat(4)}),(0,e.jsx)(s.Z,{children:t.sellNum}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:i.XI+t.buyerAddress,children:(0,te.n)(t.buyerAddress)})}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:i.XI+t.sellerAddress,children:(0,te.n)(t.sellerAddress)})}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:i.gp+t.txHash,children:(0,te.n)(t.txHash)})})]},t.buyerAddress+m)})})]})}),A==="my_list"&&(0,e.jsx)(h.Z,{className:a.Z.orderTableWrap,sx:{marginTop:"20px"},children:(0,e.jsxs)(Ne.Z,{children:[(0,e.jsx)(Ae.Z,{children:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(s.Z,{children:"Tick"}),(0,e.jsx)(s.Z,{children:"Time"}),(0,e.jsx)(s.Z,{children:"Hash"}),(0,e.jsx)(s.Z,{children:"Amount"}),(0,e.jsx)(s.Z,{children:"Value"}),(0,e.jsx)(s.Z,{children:"State"})]})}),(0,e.jsx)(Z.Z,{children:ht.map(function(t){return(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(s.Z,{children:"aval"}),(0,e.jsx)(s.Z,{children:new Date(t==null?void 0:t.payTime).toLocaleString()}),(0,e.jsx)(s.Z,{children:(0,e.jsx)("a",{target:"_blank",href:i.gp+(t==null?void 0:t.txHash),children:t!=null&&t.txHash?(0,te.n)(t==null?void 0:t.txHash):""})}),(0,e.jsx)(s.Z,{children:t.sellNum}),(0,e.jsx)(s.Z,{children:t.sellValue}),(0,e.jsx)(s.Z,{children:t.state==-1?"Cancel pending order":t.state==0?"List":t.state==1?"Ordinary order lock":t.state==2?"Block onfirmed":t.state==3?"Pending":t.state==4?"Purchased order completed":t.state==5?"Duplicate transaction order locked":t.state==6?"The transaction failed and was locked":"-"})]},t.txHash)})})]})}),le>0?(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:a.Z.total,children:(0,e.jsx)(_.Z,{count:pe,page:T,onChange:oe,color:"primary"})})}):"",(0,e.jsx)(ee.Z,{open:_t,onClose:He,className:a.Z.dialogWrapOutBox,children:(0,e.jsxs)(h.Z,{className:a.Z.dialogWrap,children:[(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(g.Z,{children:"List"}),(0,e.jsx)(y.Z,{"aria-label":"close",onClick:He,sx:{position:"absolute",right:8,top:8,color:function(m){return m.palette.grey[500]}},children:(0,e.jsx)(E.Z,{})})]}),(0,e.jsx)(W,{onClose:He})]})}),(0,e.jsx)(ee.Z,{open:ce,children:(0,e.jsxs)(h.Z,{sx:{width:"330px",p:"24px",textAlign:"center",boxSizing:"border-box"},children:[(0,e.jsxs)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{"clip-path":"url(#clip0_15_10080)",children:[(0,e.jsx)("circle",{cx:"27",cy:"27",r:"27",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("circle",{cx:"27",cy:"27",r:"22",fill:"#7BE6A0","fill-opacity":"0.17"}),(0,e.jsx)("path",{d:"M40.3333 27C40.3333 19.6667 34.3333 13.6667 27 13.6667C19.6666 13.6667 13.6666 19.6667 13.6666 27C13.6666 34.3333 19.6666 40.3333 27 40.3333C34.3333 40.3333 40.3333 34.3333 40.3333 27Z",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,e.jsx)("path",{d:"M21.3334 27L25.1067 30.7734L32.6667 23.2267",stroke:"#3DD671","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_15_10080",children:(0,e.jsx)("rect",{width:"54",height:"54",fill:"white"})})})]}),(0,e.jsx)(h.Z,{sx:{mt:"16px",fontSize:"20px",fontWeight:500},children:"Payment successful"}),(0,e.jsx)(h.Z,{sx:{mt:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},children:"Please wait for blockchain confirmation"}),(0,e.jsx)(h.Z,{sx:{borderRadius:"40px",background:"#E84142",display:"flex",padding:"9px 24px",justifyContent:"center",alignItems:"center",alignSelf:"stretch",marginTop:"26px",color:"#fff",cursor:"pointer"},onClick:function(){return de(!1)},children:"OK"})]})}),(0,e.jsx)("div",{style:{height:"70px"}}),(0,e.jsx)(ee.Z,{open:!!ge,children:(0,e.jsx)(r.Z,{severity:"success",color:"info",children:ge})}),(0,e.jsx)(ee.Z,{open:!!_e,children:(0,e.jsx)(r.Z,{variant:"filled",severity:"error",children:_e})})]})},K=B},62094:function(Se,M){M.Z={indexer:"indexer___KRUim",cards:"cards___RReFY",tokenname:"tokenname___AIJQN",balance:"balance___p_phs",inner:"inner____mGY3",token:"token___YZ2O8",loadingbox:"loadingbox___pkeSy",loading:"loading___v87br",rectangle:"rectangle___iYf9s",transfer:"transfer___ZMOqy",transferInner:"transferInner___Vz9kk",utxos:"utxos___uKhYw",title:"title___nwRif",tokenbox:"tokenbox___OXMSy",utxo_item:"utxo_item___ILjVk",utxo_select:"utxo_select___dfaYU",all:"all___tVF5b",connect:"connect___it59e",market:"market___hh364",header:"header___Peyd6",tick_type:"tick_type___MCcRa",tick_info:"tick_info___hDvTL",item:"item___sWkVl",item_title:"item_title___w7ctb",item_value:"item_value___IARMT",tabs:"tabs___LxTFv",tab_item:"tab_item___Ez6Id",tab_item_active:"tab_item_active___BKQKU",quick_list:"quick_list___hUzUa",market_list:"market_list___ZKG4J",market_list_item:"market_list_item___h_BE9",buy:"buy___kP3pZ",list_tick:"list_tick____w_on",list_num:"list_num___O8RTc",sell_usd:"sell_usd___ClX7o",line:"line___SuZOP",avalLogo:"avalLogo___a10An",tabs_wrap:"tabs_wrap___d9GIz",quick_list_wrap:"quick_list_wrap___sWN69",pageWrap:"pageWrap___vLCzz",total:"total___IQw8K",emptySize:"emptySize___ZKxVQ",dialogWrap:"dialogWrap___q6lr3",dialogWrapOutBox:"dialogWrapOutBox___QYl4T",orderTableWrap:"orderTableWrap___z1Wto"}}}]);
