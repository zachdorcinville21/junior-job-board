(this["webpackJsonpjunior-jobs"]=this["webpackJsonpjunior-jobs"]||[]).push([[0],{41:function(e,t,n){},50:function(e,t,n){e.exports=n.p+"static/media/coffee.7ab8c59e.svg"},59:function(e,t,n){e.exports=n(90)},64:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),c=(n(64),n(36)),o=n.n(c),s=n(13),u=n(43),d=(n(41),n(54)),m=n(119),f=n(117),p=Object(f.a)({text:{fontFamily:"Encode Sans"}});function b(e){var t=e.job,n=e.onSelect,a=t.title.length>60,i=p();return r.a.createElement(m.a,{className:"job",onClick:function(){return n(t)}},r.a.createElement("div",{className:"job-content"},r.a.createElement(d.a,{className:i.text,variant:"h5"},a?"".concat(t.title.slice(0,60),"...."):t.title),r.a.createElement(d.a,{className:i.text,variant:"h6"},t.company),r.a.createElement(d.a,{className:i.text},t.location)),r.a.createElement("div",null,r.a.createElement(d.a,{className:i.text},"Posted on ",t.created_at.split(" ").slice(0,3).join(" "))))}var E=n(126),h=n(52),x=n.n(h),g=n(51),j=n.n(g),v=n(127),y=n(125),w=n(124),S=n(122),O=n(123),k=n(121),C=n(128),N=r.a.forwardRef((function(e,t){return r.a.createElement(C.a,Object.assign({direction:"left",ref:t},e))})),F=Object(f.a)({modalButton:{fontSize:"10px",fontWeight:"bold",fontFamily:"Encode Sans"}});function L(e){var t=e.job,n=e.open,a=e.handleClose;if(!t.title)return r.a.createElement("div",null);var i=F();return r.a.createElement("div",null,r.a.createElement(y.a,{open:n,TransitionComponent:N,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",keepMounted:!0},r.a.createElement(k.a,{id:"alert-dialog-slide-title"},r.a.createElement("span",{style:{fontSize:"18px",fontFamily:"Encode Sans"}},t.title," - ",t.company)," ",r.a.createElement("img",{id:"company-logo",src:t.company_logo})),r.a.createElement(S.a,null,r.a.createElement(O.a,{style:{fontSize:"14px",fontFamily:"Encode Sans"},id:"alert-dialog-slide-description",dangerouslySetInnerHTML:{__html:t.description}})),r.a.createElement(w.a,null,r.a.createElement(E.a,{className:i.modalButton,onClick:a,color:"primary"},"Close"),r.a.createElement("a",{id:"apply-btn",href:t.url,target:"_blank"},r.a.createElement(E.a,{className:i.modalButton,variant:"contained",color:"primary"},"Apply")))))}var z=n(31),B=n(32);function M(){var e=Object(z.a)(["\n    padding: 10px 10px;\n    width: 45%;\n    transition: ease 0.2s;\n    border-radius: 6px;\n    border: 1px solid black;\n    font-family: ",";\n\n    &:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px black;\n    }\n"]);return M=function(){return e},e}function _(){var e=Object(z.a)(["\n    width: 30%;\n    padding: 16px 10px;\n    background-color: #ffffff;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n\n    @media (max-width: 990px) {\n        width: 40%;\n    }\n\n    @media (max-width: 785px) {\n        width: 65%;\n        margin-bottom: 20px;\n    }\n\n    @media (max-width: 480px) {\n        width: 80%;\n    }\n"]);return _=function(){return e},e}function A(){var e=Object(z.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding-left: 2rem;\n    padding-bottom: 4rem;\n\n    @media (max-width: 1076px) {\n        justify-content: center;\n        align-items: center;\n        padding-left: 0;\n    }\n"]);return A=function(){return e},e}var J=B.a.div(A()),P=B.a.div(_()),T=B.a.input(M(),"Encode Sans"),I=n(50),W=n.n(I);function D(e){var t=e.jobs,n=Object(a.useState)(!1),i=Object(s.a)(n,2),l=i[0],c=i[1],o=Object(a.useState)({}),u=Object(s.a)(o,2),m=u[0],f=u[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),g=h[0],y=h[1],w=Object(a.useState)(0),S=Object(s.a)(w,2),O=S[0],k=S[1],C=t.length,N=Math.ceil(C/10),F=Object(a.useState)(N),z=Object(s.a)(F,2),B=z[0],M=z[1],_=10*O,A=Object(a.useState)(t),I=Object(s.a)(A,2),D=I[0],H=I[1],R=Object(a.useState)([]),q=Object(s.a)(R,2),G=q[0],K=q[1];Object(a.useEffect)((function(){K(D.slice(_,_+10))}),[O,D,_]);var Q=function(e){f(e),c(!0)},U=function(e){switch(e.target.id){case"keyword":var n=function(e,t){var n={};if(t in n)return n[t];var a=e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return a?(n[t]=a,a):null}(t,e.target.value);null!==n?(H(n),K(n.slice(_,_+10)),M(Math.ceil(n.length/10))):y(!0);break;case"city":var a=function(e,t){var n={};if(t in n)return n[t];var a=e.filter((function(e){return e.location.toLowerCase().includes(t.toLowerCase())}));return a?(n[t]=a,a):null}(t,e.target.value);a?(H(a),K(a.slice(_,_+10)),M(Math.ceil(a.length/10))):y(!0)}};return r.a.createElement("div",{className:"jobs"},r.a.createElement(L,{open:l,job:m,handleClose:function(){c(!1)}}),r.a.createElement("div",{id:"heading",style:{padding:"15px",textAlign:"left"}},r.a.createElement(d.a,{variant:"h4",style:{color:"white",fontFamily:"Encode Sans",fontSize:"27px",marginLeft:"0.5rem"}},"Junior Level Software Jobs"),r.a.createElement(d.a,{variant:"h6",style:{color:"white",fontFamily:"Encode Sans",fontSize:"16px",marginLeft:"0.5rem"}},C," jobs found.")),r.a.createElement(J,null,r.a.createElement(P,null,r.a.createElement(T,{id:"keyword",placeholder:"filter by keyword",onChange:U}),r.a.createElement(T,{id:"city",placeholder:"filter by city",onChange:U})),G.map((function(e,t){return r.a.createElement(b,{job:e,key:t,onSelect:Q})}))),!0===g?r.a.createElement(d.a,{variant:"h1"},"No results."):null,r.a.createElement("div",{id:"page-num",style:{color:"white",textAlign:"center",fontFamily:"Encode Sans"}},"Page ",O+1," of ",B),r.a.createElement(v.a,{variant:"progress",steps:Math.ceil(C/10),position:"bottom",activeStep:O,nextButton:r.a.createElement(E.a,{size:"small",onClick:function(){return k((function(e){return e+1}))},disabled:O+1===B},"Next",r.a.createElement(j.a,null)),backButton:r.a.createElement(E.a,{size:"small",onClick:function(){return k((function(e){return e-1}))},disabled:0===O},r.a.createElement(x.a,null),"Back")}),window.innerWidth>=1076?r.a.createElement("img",{src:W.a,style:{width:"35%",height:"35%",position:"fixed",top:"50%",right:"2%"}}):null)}var H=n(53),R=n.n(H);n(89);function q(){return(q=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/jobs");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t(r),n(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(!1),c=Object(s.a)(l,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){!function(e,t){q.apply(this,arguments)}(i,u)}),[]),r.a.createElement("div",{className:"App",style:{marginTop:"40px"}},o?r.a.createElement(D,{jobs:n}):r.a.createElement("div",{id:"loader"},r.a.createElement(R.a,{type:"Puff",color:"#CD853F",height:90,width:90,visible:!o})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.046d5d78.chunk.js.map