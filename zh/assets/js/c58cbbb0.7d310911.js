"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[1271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u4f7f\u7528\u76f8\u5173",sidebar_position:2},i="\u4f7f\u7528\u76f8\u5173",c={unversionedId:"faq/usage",id:"faq/usage",title:"\u4f7f\u7528\u76f8\u5173",description:"TQUIC\u662f\u5426\u652f\u6301\u79fb\u52a8\u7aef\u5e73\u53f0?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/usage.md",sourceDirName:"faq",slug:"/faq/usage",permalink:"/zh/docs/faq/usage",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/usage.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1698315019,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528\u76f8\u5173",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u76f8\u5173",permalink:"/zh/docs/faq/installation"},next:{title:"\u6027\u80fd\u76f8\u5173",permalink:"/zh/docs/faq/performance"}},u={},s=[{value:"TQUIC\u662f\u5426\u652f\u6301\u79fb\u52a8\u7aef\u5e73\u53f0?",id:"tquic\u662f\u5426\u652f\u6301\u79fb\u52a8\u7aef\u5e73\u53f0",level:2},{value:"\u652f\u6301\u54ea\u4e9b\u7248\u672c\u7684QUIC\u534f\u8bae?",id:"\u652f\u6301\u54ea\u4e9b\u7248\u672c\u7684quic\u534f\u8bae",level:2}],l={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528\u76f8\u5173"},"\u4f7f\u7528\u76f8\u5173"),(0,a.kt)("h2",{id:"tquic\u662f\u5426\u652f\u6301\u79fb\u52a8\u7aef\u5e73\u53f0"},"TQUIC\u662f\u5426\u652f\u6301\u79fb\u52a8\u7aef\u5e73\u53f0?"),(0,a.kt)("p",null,"TQUIC\u662f\u57fa\u4e8eRust\u8bed\u8a00\u4e2d\u5b9e\u73b0\u7684\uff0c\u5b83\u5177\u5907\u5728Rust\u652f\u6301\u7684\u4efb\u4f55\u5e73\u53f0\u4e0a\u8fd0\u884c\u7684\u80fd\u529b\u3002\u76ee\u524dTQUIC\u652f\u6301Linux\u3001iOS\u3001Android\u5e73\u53f0\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u54ea\u4e9b\u7248\u672c\u7684quic\u534f\u8bae"},"\u652f\u6301\u54ea\u4e9b\u7248\u672c\u7684QUIC\u534f\u8bae?"),(0,a.kt)("p",null,"TQUIC\u76ee\u524d\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9000"},"QUIC v1"),"\u3002"))}f.isMDXComponent=!0}}]);