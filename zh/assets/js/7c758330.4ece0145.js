"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[1005],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={title:"\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173",sidebar_position:4},i="\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173",c={unversionedId:"faq/trouble_shooting",id:"faq/trouble_shooting",title:"\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173",description:"\u5982\u4f55\u5206\u6790\u52a0\u5bc6\u7684QUIC\u6d41\u91cf?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/trouble_shooting.md",sourceDirName:"faq",slug:"/faq/trouble_shooting",permalink:"/zh/docs/faq/trouble_shooting",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/trouble_shooting.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1698315019,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",sidebarPosition:4,frontMatter:{title:"\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u76f8\u5173",permalink:"/zh/docs/faq/performance"},next:{title:"\u5f00\u53d1\u76f8\u5173",permalink:"/zh/docs/faq/development"}},l={},p=[{value:"\u5982\u4f55\u5206\u6790\u52a0\u5bc6\u7684QUIC\u6d41\u91cf?",id:"\u5982\u4f55\u5206\u6790\u52a0\u5bc6\u7684quic\u6d41\u91cf",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173"},"\u95ee\u9898\u5b9a\u4f4d\u76f8\u5173"),(0,o.kt)("h2",{id:"\u5982\u4f55\u5206\u6790\u52a0\u5bc6\u7684quic\u6d41\u91cf"},"\u5982\u4f55\u5206\u6790\u52a0\u5bc6\u7684QUIC\u6d41\u91cf?"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u793a\u4f8b\u5de5\u5177\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"--keylog-file"),"\u9009\u9879\u4fdd\u5b58TLS\u5bc6\u94a5\u65e5\u5fd7\uff0c\u6216\u8005\u5728\u4f60\u81ea\u5df1\u7684\u7a0b\u5e8f\u4e2d\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"../api_reference/c_quic#connection-logging-and-tracing"},"keylog API"),"\u6765\u4fdd\u5b58TLS\u5bc6\u94a5\u65e5\u5fd7\u3002\n\u8be5\u5bc6\u94a5\u65e5\u5fd7\u6587\u4ef6\u53ef\u4ee5\u7528\u6765\u5728Wireshark\u4e2d\u89e3\u5bc6QUIC\u6d41\u91cf\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5728wireshake\u4e2d\uff0c\u4f9d\u6b21\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"p"},"Edit-> Preferences-> Protocols-> TLS"),"\uff0c\u7136\u540e\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"(Pre)-Master-Secret log filename preference"),"\u8bbe\u7f6e\u4e3aTLS\u5bc6\u94a5\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84")))}f.isMDXComponent=!0}}]);