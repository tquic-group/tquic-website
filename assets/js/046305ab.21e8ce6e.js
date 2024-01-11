"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[9091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Development",sidebar_position:5},i="Development",c={unversionedId:"faq/development",id:"faq/development",title:"Development",description:"What are the regulations for code review?",source:"@site/docs/faq/development.md",sourceDirName:"faq",slug:"/faq/development",permalink:"/docs/faq/development",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/development.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704956763,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:5,frontMatter:{title:"Development",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Trouble shooting",permalink:"/docs/faq/trouble_shooting"},next:{title:"Further Readings",permalink:"/docs/category/further-readings"}},l={},s=[{value:"What are the regulations for code review?",id:"what-are-the-regulations-for-code-review",level:2},{value:"How to test the TQUIC library?",id:"how-to-test-the-tquic-library",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h2",{id:"what-are-the-regulations-for-code-review"},"What are the regulations for code review?"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../how_to_contribute/contribute_codes#certain-regulations-about-code-review"},"this document"),"."),(0,o.kt)("h2",{id:"how-to-test-the-tquic-library"},"How to test the TQUIC library?"),(0,o.kt)("p",null,"TQUIC currently includes extensive testing, including unit testing, fuzzing testing, integration testing,\nperformance benchmarking, interoperability testing, and protocol conformance testing. "),(0,o.kt)("p",null,"If you have any questions, please contact ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic/blob/develop/MAINTAINERS.md"},"the project maintainers"),"\nfurther for guidance."))}d.isMDXComponent=!0}}]);