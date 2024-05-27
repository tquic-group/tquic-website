"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[71],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return r?a.createElement(f,p(p({ref:e},u),{},{components:r})):a.createElement(f,p({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[m]="string"==typeof t?t:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6565:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"\u4ecb\u7ecd",sidebar_position:1},p="\u4ecb\u7ecd",o={unversionedId:"intro",id:"intro",title:"\u4ecb\u7ecd",description:"\u4ec0\u4e48\u662fQUIC",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/zh/docs/intro",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1716796015,formattedLastUpdatedAt:"2024\u5e745\u670827\u65e5",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/zh/docs/category/getting-started"}},l={},c=[{value:"\u4ec0\u4e48\u662fQUIC",id:"\u4ec0\u4e48\u662fquic",level:2},{value:"\u4ec0\u4e48\u662fTQUIC",id:"\u4ec0\u4e48\u662ftquic",level:2},{value:"\u7279\u6027\u548c\u4f18\u52bf",id:"\u7279\u6027\u548c\u4f18\u52bf",level:2}],u={toc:c},m="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662fquic"},"\u4ec0\u4e48\u662fQUIC"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Historical_origin"},"TCP"),"\u6700\u65e9\u8bbe\u8ba1\u4e8e20\u4e16\u7eaa70\u5e74\u4ee3\uff0c\u51e0\u4e4e\u6ca1\u6709\u4eba\u80fd\u60f3\u8c61\u523050\u5e74\u540e\u6211\u4eec\u4ecd\u7136\u8fd8\u5728\u4f9d\u8d56\u8fd9\u4e2a\u534f\u8bae\u3002\u867d\u7136TCP\u591a\u5e74\u6765\u7ecf\u5386\u4e86\u65e0\u6570\u6539\u8fdb\uff0c\u4f46\u8bb8\u591a\u4e13\u5bb6\u8ba4\u4e3aTCP\u53ef\u80fd\u5373\u5c06\u8d70\u5230\u5c3d\u5934\u3002\u968f\u7740\u793e\u4f1a\u5bf9\u4e92\u8054\u7f51\u7684\u4f9d\u8d56\u7a0b\u5ea6\u8d8a\u6765\u8d8a\u9ad8\uff0cTCP\u5df2\u7ecf",(0,n.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/3098822.3098842"},"\u4e0d\u80fd\u6ee1\u8db3\u65e5\u76ca\u589e\u957f\u7684\u9700\u6c42"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9000"},"QUIC"),"\u662f\u4e00\u79cd\u65b0\u7684\u901a\u7528\u3001\u5b89\u5168\u3001\u591a\u8def\u590d\u7528\u7684\u4f20\u8f93\u5c42\u534f\u8bae\u3002\u5b83\u63d0\u4f9b\u4e86\u5927\u91cf\u589e\u5f3a\u529f\u80fd\uff0c\u65e8\u5728\u6700\u7ec8\u53d6\u4ee3TCP\uff0c\u4ece\u800c\u63a8\u52a8\u4e92\u8054\u7f51\u4f20\u8f93\u7ee7\u7eed\u53d1\u5c55\u5e76\u89e3\u51b3\u56f0\u6270\u4e92\u8054\u7f51\u7684\u8bb8\u591a\u95ee\u9898\u3002\u968f\u7740QUIC\u88ab\u9009\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9114"},"HTTP/3"),"\u7684\u5e95\u5c42\u4f20\u8f93\u534f\u8bae\uff0c\u6211\u4eec\u6709\u7406\u7531\u671f\u5f85QUIC\u534f\u8bae\u5c06\u5360\u636e\u66f4\u5927\u7684\u4e92\u8054\u7f51\u6d41\u91cf\u4efd\u989d\u3002"),(0,n.kt)("p",null,"QUIC\u7684\u4e00\u4e9b\u5173\u952e\u7279\u6027\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96f6RTT\u8fde\u63a5\u5efa\u7acb "),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u961f\u9996\u963b\u585e\u7684\u591a\u8def\u590d\u7528 "),(0,n.kt)("li",{parentName:"ul"},"\u6539\u8fdb\u7684",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc9002#name-relevant-differences-betwee"},"\u4f20\u8f93\u7b56\u7565")),(0,n.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u8fc1\u79fb "),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u9009\u7684\u4e0d\u53ef\u9760\u6216\u534a\u53ef\u9760\u7684\u4f20\u8f93"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u8def\u5f84\uff0c\u5229\u7528\u591a\u6761\u5197\u4f59\u8def\u5f84\u63d0\u9ad8\u6027\u80fd\u53ca\u53ef\u9760\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u6001\u5b9e\u73b0\uff0c\u4f7f\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u8fed\u4ee3\u5468\u671f\u66f4\u9ad8\u6548\u66f4\u7b80\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u6548\u907f\u514d\u534f\u8bae\u50f5\u5316")),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662ftquic"},"\u4ec0\u4e48\u662fTQUIC"),(0,n.kt)("p",null,"TQUIC\u662fIETF QUIC\u534f\u8bae\u7684\u5b9e\u73b0\u3002\u5b83\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u8f7b\u91cf\u7ea7\u3001\u8de8\u5e73\u53f0\u7684QUIC\u5e93\u3002"),(0,n.kt)("h2",{id:"\u7279\u6027\u548c\u4f18\u52bf"},"\u7279\u6027\u548c\u4f18\u52bf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4e30\u5bcc\u7684\u529f\u80fd"),"\uff1aTQUIC \u652f\u6301\u6240\u6709",(0,n.kt)("a",{parentName:"p",href:"https://quicwg.org/"},"QUIC\u3001HTTP/3\u89c4\u8303"),"\u4e2d\u7684\u91cd\u5927\u529f\u80fd\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u9ad8\u6027\u80fd"),"\uff1aTQUIC\u662f\u4e3a\u9ad8\u6027\u80fd\u548c\u4f4e\u5ef6\u8fdf\u800c\u8bbe\u8ba1\u7684\u3002\u76f8\u5173\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"further_readings/benchmark/"},"\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u53ef\u63d2\u62d4\u62e5\u585e\u63a7\u5236"),"\uff1aTQUIC\u652f\u6301\u591a\u79cd\u62e5\u585e\u63a7\u5236\u7b97\u6cd5\uff0c\u5305\u62ec",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8312"},"CUBIC"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3009824"},"BBR"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/meeting/117/materials/slides-117-ccwg-bbrv3-algorithm-bug-fixes-and-public-internet-deployment-00"},"BBRv3"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://www.usenix.org/conference/nsdi18/presentation/arun"},"COPA"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u591a\u8def\u5f84"),"\uff1aTQUIC\u652f\u6301",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-quic-multipath"},"\u591a\u8def\u5f84"),"\uff0c\u4e00\u4e2a\u8fde\u63a5\u53ef\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u8def\u5f84\u63d0\u9ad8\u6027\u80fd\u53ca\u53ef\u9760\u6027\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6613\u7528\u6027"),"\uff1aTQUIC\u63d0\u4f9b\u6613\u7528\u7684\u63a5\u53e3\uff0c\u652f\u6301\u7075\u6d3b\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u63d0\u4f9b\u4e30\u5bcc\u7684\u53ef\u89c2\u6d4b\u6027\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8de8\u5e73\u53f0"),"\uff1aTQUIC\u53ef\u8fd0\u884c\u5728Rust\u8bed\u8a00\u652f\u6301\u7684\u5404\u79cd\u5e73\u53f0\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86",(0,n.kt)("a",{parentName:"p",href:"category/api-reference/"},"Rust/C/C++\u8bed\u8a00\u63a5\u53e3"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u57fa\u4e8eRust"),"\uff1aTQUIC\u57fa\u4e8e\u5185\u5b58\u5b89\u5168\u8bed\u8a00\u7f16\u5199\uff0c\u53ef\u907f\u514d\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e\u548c\u5176\u4ed6\u5185\u5b58\u76f8\u5173\u9519\u8bef\u7684\u5f71\u54cd\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u9ad8\u8d28\u91cf"),"\uff1aTQUIC\u5305\u62ec\u5145\u5206\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u3001\u6a21\u7cca\u6d4b\u8bd5\u3001\u96c6\u6210\u6d4b\u8bd5\u3001\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u3001\u4e92\u64cd\u4f5c\u6027\u6d4b\u8bd5\u7b49\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u534f\u8bae\u4e00\u81f4\u6027"),"\uff1aTQUIC\u5df2\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"further_readings/conformance/"},"\u57fa\u4e8eIvy\u7684\u5f62\u5f0f\u5316\u89c4\u8303\u9a8c\u8bc1"),"\u3002\u540c\u65f6\u4e0e\u4e3b\u6d41\u5b9e\u73b0\u4e4b\u95f4\u901a\u8fc7\u4e86IETF\u4e92\u64cd\u4f5c\u6027\u6d4b\u8bd5\u3002"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u9ad8\u7ea7\u7279\u6027\u5c06\u5728\u968f\u540e\u7248\u672c\u4e2d\u9010\u6b65\u5f00\u6e90\uff0c\u8be6\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic/releases"},"\u7248\u672c\u8bb0\u5f55"),"\u3002")))}s.isMDXComponent=!0}}]);