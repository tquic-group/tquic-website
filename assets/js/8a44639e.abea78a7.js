"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[7157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Usage",sidebar_position:2},i="Usage",s={unversionedId:"faq/usage",id:"faq/usage",title:"Usage",description:"Whether TQUIC supports mobile platforms?",source:"@site/docs/faq/usage.md",sourceDirName:"faq",slug:"/faq/usage",permalink:"/docs/faq/usage",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/usage.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1706702377,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:2,frontMatter:{title:"Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/faq/installation"},next:{title:"Performance",permalink:"/docs/faq/performance"}},p={},c=[{value:"Whether TQUIC supports mobile platforms?",id:"whether-tquic-supports-mobile-platforms",level:2},{value:"Which versions of the QUIC protocol are supported?",id:"which-versions-of-the-quic-protocol-are-supported",level:2}],l={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h2",{id:"whether-tquic-supports-mobile-platforms"},"Whether TQUIC supports mobile platforms?"),(0,o.kt)("p",null,"TQUIC is implemented in the Rust language, enabling it to be run on any platform supported by Rust. TQUIC currently supports Linux, MacOS, FreeBSD, iOS, and Android."),(0,o.kt)("h2",{id:"which-versions-of-the-quic-protocol-are-supported"},"Which versions of the QUIC protocol are supported?"),(0,o.kt)("p",null,"TQUIC currently supports ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9000"},"QUIC v1"),"."))}f.isMDXComponent=!0}}]);