"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[9597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u6838\u5fc3\u6982\u5ff5",sidebar_position:1},i="\u6838\u5fc3\u6982\u5ff5",l={unversionedId:"tutorial/core_concepts",id:"tutorial/core_concepts",title:"\u6838\u5fc3\u6982\u5ff5",description:"TQUIC\u63a5\u53e3\u6d89\u53ca\u7684\u5e38\u7528\u6982\u5ff5\u672f\u8bed\u63cf\u8ff0\u5982\u4e0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/core_concepts.md",sourceDirName:"tutorial",slug:"/tutorial/core_concepts",permalink:"/zh/docs/tutorial/core_concepts",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/core_concepts.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1698315019,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",sidebarPosition:1,frontMatter:{title:"\u6838\u5fc3\u6982\u5ff5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/zh/docs/category/tutorial"},next:{title:"\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3",permalink:"/zh/docs/tutorial/rust"}},c={},u=[{value:"\u7aef\u70b9",id:"\u7aef\u70b9",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:2},{value:"\u6d41",id:"\u6d41",level:2},{value:"\u8def\u5f84",id:"\u8def\u5f84",level:2},{value:"QUIC\u62a5\u6587",id:"quic\u62a5\u6587",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,o.kt)("p",null,"TQUIC\u63a5\u53e3\u6d89\u53ca\u7684\u5e38\u7528\u6982\u5ff5\u672f\u8bed\u63cf\u8ff0\u5982\u4e0b\u3002"),(0,o.kt)("h2",{id:"\u7aef\u70b9"},"\u7aef\u70b9"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7aef\u70b9"),"\uff08Endpoint\uff09\u8d1f\u8d23\u7ba1\u7406\u8fde\u63a5\u3001\u5904\u7406\u5165\u62a5\u6587\u548c\u8c03\u5ea6\u53d1\u9001\u51fa\u62a5\u6587\u3002"),(0,o.kt)("p",null,"QUIC\u534f\u8bae\u4e2d\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u7aef\u70b9\uff1a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002\u7aef\u70b9\u53ef\u4ee5\u5de5\u4f5c\u5728\u670d\u52a1\u7aef\u6a21\u5f0f\u6216\u5ba2\u6237\u7aef\u6a21\u5f0f\u4e0b\u3002"),(0,o.kt)("h2",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,o.kt)("p",null,"QUIC",(0,o.kt)("strong",{parentName:"p"},"\u8fde\u63a5"),"\uff08Connection\uff09\u53ef\u4ee5\u540c\u65f6\u4f20\u8f93\u591a\u4e2a\u6d41\uff0c\u6d41\u662f\u6709\u5e8f\u7684\u5b57\u8282\u5e8f\u5217\u3002 "),(0,o.kt)("p",null,"QUIC\u8fde\u63a5\u5e76\u6ca1\u6709\u4e25\u683c\u9650\u5236\u4ec5\u4f7f\u7528\u5355\u4e00\u7684\u7f51\u7edc\u8def\u5f84\u3002QUIC\u8fde\u63a5\u4f7f\u7528\u8fde\u63a5\u6807\u8bc6\u7b26\u6765\u652f\u6301\u8fc1\u79fb\u5230\u65b0\u7684\u8def\u5f84\u6216\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u7684\u8def\u5f84\u3002\u53ea\u5141\u8bb8\u5ba2\u6237\u7aef\u5728\u8fde\u63a5\u4e0a\u53d1\u8d77\u5efa\u7acb\u65b0\u7684\u8def\u5f84\u3002"),(0,o.kt)("h2",{id:"\u6d41"},"\u6d41"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6d41"),"\uff08Stream\uff09\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u3001\u6709\u5e8f\u7684\u5b57\u8282\u6d41\u62bd\u8c61\u3002 "),(0,o.kt)("p",null,"\u6d41\u53ef\u4ee5\u662f\u5355\u5411\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u53cc\u5411\u7684\uff1a\u5355\u5411\u6d41\u53ea\u80fd\u5728\u5355\u4e2a\u65b9\u5411\u4e0a\uff08\u4ece\u6d41\u7684\u53d1\u8d77\u65b9\u5230\u5bf9\u7aef\uff09\u4f20\u8f93\u6570\u636e\uff1b\u53cc\u5411\u6d41\u53ef\u4ee5\u53cc\u5411\u4f20\u8f93\u6570\u636e\u3002 "),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u5668\u90fd\u53ef\u4ee5\u521b\u5efa\u6d41\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u6d41\u53ef\u4ee5\u5e76\u53d1\u5730\u53d1\u9001\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u53d6\u6d88\u6d41\u3002"),(0,o.kt)("h2",{id:"\u8def\u5f84"},"\u8def\u5f84"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8def\u5f84"),"\uff08Path\uff09\u7531\u6e90IP\u5730\u5740\u3001\u76ee\u7684IP\u5730\u5740\u3001\u6e90\u7aef\u53e3\u548c\u76ee\u7684\u7aef\u53e3\u7ec4\u6210\u7684\u56db\u5143\u7ec4\u786e\u5b9a\u3002"),(0,o.kt)("h2",{id:"quic\u62a5\u6587"},"QUIC\u62a5\u6587"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"QUIC\u62a5\u6587"),"\uff08QUIC Packet\uff09\u662f\u53ef\u4ee5\u5c01\u88c5\u5728UDP\u6570\u636e\u62a5\u4e2d\u7684\u5b8c\u6574\u7684QUIC\u534f\u8bae\u5904\u7406\u5355\u5143\u3002\u4e00\u4e2aUDP\u6570\u636e\u62a5\u4e2d\u53ef\u4ee5\u5c01\u88c5\u4e00\u4e2a\u6216\u591a\u4e2aQUIC\u62a5\u6587\u3002"))}d.isMDXComponent=!0}}]);