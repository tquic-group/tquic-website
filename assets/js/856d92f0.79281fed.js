"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[4717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Trouble shooting",sidebar_position:4},i="Trouble shooting",c={unversionedId:"faq/trouble_shooting",id:"faq/trouble_shooting",title:"Trouble shooting",description:"How to analyze encrypted QUIC traffic?",source:"@site/docs/faq/trouble_shooting.md",sourceDirName:"faq",slug:"/faq/trouble_shooting",permalink:"/docs/faq/trouble_shooting",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/trouble_shooting.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704970787,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:4,frontMatter:{title:"Trouble shooting",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/docs/faq/performance"},next:{title:"Development",permalink:"/docs/faq/development"}},l={},p=[{value:"How to analyze encrypted QUIC traffic?",id:"how-to-analyze-encrypted-quic-traffic",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trouble-shooting"},"Trouble shooting"),(0,o.kt)("h2",{id:"how-to-analyze-encrypted-quic-traffic"},"How to analyze encrypted QUIC traffic?"),(0,o.kt)("p",null,"The TLS key log can be saved by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--keylog-file")," option in example tools or by utilizing the ",(0,o.kt)("a",{parentName:"p",href:"../api_reference/c_quic/#connection-logging-and-tracing"},"keylog API")," for your own programs. "),(0,o.kt)("p",null,"This saved key log file can then be used to decrypt QUIC traffic in Wireshark."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In Wireshark, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit-> Preferences-> Protocols-> TLS"),", and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"(Pre)-Master-Secret log filename preference")," with the path of the TLS key log.")))}f.isMDXComponent=!0}}]);