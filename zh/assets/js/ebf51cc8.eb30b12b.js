"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[5327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"\u4e00\u81f4\u6027\u6d4b\u8bd5",sidebar_position:3},o="\u534f\u8bae\u4e00\u81f4\u6027\u6d4b\u8bd5",l={unversionedId:"further_readings/conformance",id:"further_readings/conformance",title:"\u4e00\u81f4\u6027\u6d4b\u8bd5",description:"\u6211\u4eec\u57fa\u4e8eSIGCOMM 2019\u8bba\u6587\u300aQUIC\u7684\u5f62\u5f0f\u5316\u89c4\u8303\u548c\u6d4b\u8bd5\u300b\u4e2d\u65b9\u6cd5\u8fdb\u884c\u534f\u8bae\u4e00\u81f4\u6027\u6d4b\u8bd5\u3002\u6211\u4eec\u5bf9\u5176\u5f62\u5f0f\u5316\u89c4\u8303\u8fdb\u884c\u4e86\u5347\u7ea7\u4ee5\u652f\u6301QUIC v1\uff0c\u540c\u65f6\u89e3\u51b3\u4e86ivy\u5de5\u5177\u94fe\u5b58\u5728\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/further_readings/conformance.md",sourceDirName:"further_readings",slug:"/further_readings/conformance",permalink:"/zh/docs/further_readings/conformance",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/further_readings/conformance.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704956763,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:3,frontMatter:{title:"\u4e00\u81f4\u6027\u6d4b\u8bd5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/zh/docs/further_readings/benchmark"},next:{title:"\u79fb\u52a8\u7aef\u5e93\u5927\u5c0f\u4f18\u5316",permalink:"/zh/docs/further_readings/minimizing_size"}},c={},u=[{value:"QUIC\u5f62\u5f0f\u5316\u89c4\u8303",id:"quic\u5f62\u5f0f\u5316\u89c4\u8303",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u534f\u8bae\u4e00\u81f4\u6027\u6d4b\u8bd5"},"\u534f\u8bae\u4e00\u81f4\u6027\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6211\u4eec\u57fa\u4e8eSIGCOMM 2019\u8bba\u6587",(0,a.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/3341302.3342087"},"\u300aQUIC\u7684\u5f62\u5f0f\u5316\u89c4\u8303\u548c\u6d4b\u8bd5\u300b"),"\u4e2d\u65b9\u6cd5\u8fdb\u884c\u534f\u8bae\u4e00\u81f4\u6027\u6d4b\u8bd5\u3002\u6211\u4eec\u5bf9\u5176\u5f62\u5f0f\u5316\u89c4\u8303\u8fdb\u884c\u4e86\u5347\u7ea7\u4ee5\u652f\u6301QUIC v1\uff0c\u540c\u65f6\u89e3\u51b3\u4e86ivy\u5de5\u5177\u94fe\u5b58\u5728\u7684\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"quic\u5f62\u5f0f\u5316\u89c4\u8303"},"QUIC\u5f62\u5f0f\u5316\u89c4\u8303"),(0,a.kt)("p",null,"QUIC\u534f\u8bae\u7684\u5f62\u5f0f\u5316\u89c4\u8303\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"http://microsoft.github.io/ivy/"},"Ivy"),"\u8bed\u8a00\u7f16\u5199\u3002\u8be5\u5f62\u5f0f\u5316\u89c4\u8303\u53ef\u7528\u4e8e\u7ec4\u5408\u5f0f\u57fa\u4e8e\u89c4\u8303\u7684\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u6765\u6d4b\u8bd5QUIC\u5b9e\u73b0\u3002 "),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u7248\u672c\u662fIETF QUIC v1\u3002"),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"QUIC\u7684\u5f62\u5f0f\u5316\u89c4\u8303\u91c7\u7528\u4e86\u4e13\u95e8\u7684\u7f16\u5199\u65b9\u5f0f\uff0c\u5141\u8bb8\u5728\u7f51\u7edc\u4e0a\u76d1\u89c6\u6570\u636e\u5305\uff0c\u4ee5\u53ca\u5bf9QUIC\u5b9e\u73b0\u8fdb\u884c\u6a21\u5757\u5316\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u89c4\u8303\uff0c\u751f\u6210\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u4f5c\u4e3a\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u89d2\u8272\u3002\u6d4b\u8bd5\u7a0b\u5e8f\u4f7f\u7528\u7b26\u53f7\u6267\u884c\u548cSMT\u6c42\u89e3\u5668\u968f\u673a\u751f\u6210\u7b26\u5408\u89c4\u8303\u7684\u534f\u8bae\u6d41\u91cf\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6d4b\u8bd5\u7a0b\u5e8f\u626e\u6f14\u5ba2\u6237\u7aef\u89d2\u8272\uff0c\u90a3\u4e48\u5b83\u5c06\u751f\u6210\u5ba2\u6237\u7aef\u53ef\u4ee5\u53d1\u9001\u7684\u5408\u6cd5\u6570\u636e\u5305\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6570\u636e\u5305\u53d1\u9001\u5230\u88ab\u6d4b\u8bd5\u7684\u670d\u52a1\u5668\u3002\u7136\u540e\u68c0\u67e5\u670d\u52a1\u5668\u56de\u590d\u7684\u54cd\u5e94\u662f\u5426\u7b26\u5408\u89c4\u8303\u3002"),(0,a.kt)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,a.kt)("p",null,"\u4e0e\u4e92\u64cd\u4f5c\u6027\u6d4b\u8bd5\u76f8\u6bd4\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u4e00\u5b9a\u7684\u4f18\u52bf\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u89c4\u8303\u7684\u6d4b\u8bd5\u7a0b\u5e8f\u53ef\u4ee5\u751f\u6210\u4efb\u4f55\u5f53\u524d\u5b9e\u73b0\u65e0\u6cd5\u4ea7\u751f\u7684\u62a5\u6587\u5e8f\u5217\uff0c\u53ef\u80fd\u53ea\u4f1a\u7531\u653b\u51fb\u8005\u4ea7\u751f\u3002\u56e0\u4e3a\u5b83\u662f\u968f\u673a\u7684\uff0c\u5b83\u503e\u5411\u4e8e\u751f\u6210\u89c4\u8303\u5236\u5b9a\u8005\u53ef\u80fd\u6ca1\u6709\u8003\u8651\u5230\u7684\u4e0d\u5bfb\u5e38\u60c5\u51b5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b83\u53ef\u4ee5\u68c0\u67e5\u5b9e\u9645\u7684\u89c4\u8303\u7b26\u5408\u6027\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u6b63\u786e\u7684\u4e92\u64cd\u4f5c\u3002 \u5bf9\u4e8e\u672a\u6765\u9700\u8981\u786e\u4fdd\u4e0e\u9057\u7559\u5b9e\u73b0\u517c\u5bb9\u7684\u534f\u8bae\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u9075\u5b88\u89c4\u8303\u975e\u5e38\u91cd\u8981\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f62\u5f0f\u5316\u89c4\u8303\u53ef\u4ee5\u770b\u4f5c\u662f\u6587\u6863\uff0c\u56e0\u4e3a\u5b83\u5bf9\u4f7f\u7528\u81ea\u7136\u8bed\u8a00\u7f16\u5199\u7684IETF\u89c4\u8303\u6587\u6863\u7ed9\u51fa\u4e86\u660e\u786e\u7684\u89e3\u91ca\u3002"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6211\u4eec\u8ba1\u5212\u5f00\u6e90QUIC v1\u7684\u5f62\u5f0f\u5316\u89c4\u8303\uff0c\u5728\u5176\u9879\u76ee\u6587\u6863\u4e2d\u5c06\u8be6\u7ec6\u8bf4\u660e\u4f7f\u7528\u65b9\u6cd5\u3002"))}d.isMDXComponent=!0}}]);