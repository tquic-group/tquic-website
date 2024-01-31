"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"Using the C API",sidebar_position:3},o=void 0,c={unversionedId:"tutorial/c",id:"tutorial/c",title:"Using the C API",description:"This tutorial describes how to use the TQUIC C API.",source:"@site/docs/tutorial/c.md",sourceDirName:"tutorial",slug:"/tutorial/c",permalink:"/docs/tutorial/c",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/c.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1705055881,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:3,frontMatter:{title:"Using the C API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using the Rust API",permalink:"/docs/tutorial/rust"},next:{title:"API Reference",permalink:"/docs/category/api-reference"}},l={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial describes how to use the TQUIC C API."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The complete example code for this article can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tquic-group/tquic-example-c"},"TQUIC C example")," repository on GitHub:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tquic-group/tquic-example-c/blob/main/simple_client.c"},"simple_client.c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tquic-group/tquic-example-c/blob/main/simple_server.c"},"simple_server.c")))),(0,i.kt)("p",null,"The TQUIC C API is functionally equivalent to the TQUIC RUST API, except programming language details."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'To begin working with the TQUIC C API, we recommend referring to the "',(0,i.kt)("a",{parentName:"li",href:"./core_concepts/"},"Core Concepts"),'" section, which covers important concepts related to its usage.'),(0,i.kt)("li",{parentName:"ul"},"Additionally, detailed guidance on using the API can be found in the ",(0,i.kt)("a",{parentName:"li",href:"./rust/"},'"Using the Rust API"')," section.")))}m.isMDXComponent=!0}}]);