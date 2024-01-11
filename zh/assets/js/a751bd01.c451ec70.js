"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"\u53d1\u5e03\u6d41\u7a0b",sidebar_position:3},p="\u53d1\u5e03\u6d41\u7a0b",l={unversionedId:"how_to_contribute/releasing_process",id:"how_to_contribute/releasing_process",title:"\u53d1\u5e03\u6d41\u7a0b",description:"TQUIC\u7684\u5f00\u53d1\u9075\u5faagit-flow\u5206\u652f\u6a21\u578b\uff0c\u5e76\u9075\u5faa\u8bed\u4e49\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how_to_contribute/releasing_process.md",sourceDirName:"how_to_contribute",slug:"/how_to_contribute/releasing_process",permalink:"/zh/docs/how_to_contribute/releasing_process",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/how_to_contribute/releasing_process.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704956763,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:3,frontMatter:{title:"\u53d1\u5e03\u6d41\u7a0b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/zh/docs/how_to_contribute/development_guides"},next:{title:"Frequently Asked Questions",permalink:"/zh/docs/category/frequently-asked-questions"}},o={},m=[{value:"\u5206\u652f\u89c4\u8303",id:"\u5206\u652f\u89c4\u8303",level:2},{value:"\u53d1\u5e03\u6d41\u7a0b",id:"\u53d1\u5e03\u6d41\u7a0b-1",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u5e03\u6d41\u7a0b"},"\u53d1\u5e03\u6d41\u7a0b"),(0,r.kt)("p",null,"TQUIC\u7684\u5f00\u53d1\u9075\u5faagit-flow\u5206\u652f\u6a21\u578b\uff0c\u5e76\u9075\u5faa",(0,r.kt)("a",{parentName:"p",href:"http://semver.org/"},"\u8bed\u4e49\u7248\u672c"),"\u3002"),(0,r.kt)("h2",{id:"\u5206\u652f\u89c4\u8303"},"\u5206\u652f\u89c4\u8303"),(0,r.kt)("p",null,"TQUIC\u5f00\u53d1\u9075\u5faa",(0,r.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"git-flow"),"\u5206\u652f\u6a21\u578b, \u4f46\u9488\u5bf9github\u8fdb\u884c\u4e86\u5fae\u5c0f\u7684\u8c03\u6574\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5b98\u65b9\u4ee3\u7801\u5e93\uff0c\u5f00\u53d1\u8005\u5e94\u9075\u5faa",(0,r.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"git-flow"),"\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u662f\u7a33\u5b9a\u5206\u652f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u901a\u8fc7\u4e86\u5355\u5143\u6d4b\u8bd5\u548c\u56de\u5f52\u6d4b\u8bd5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u662f\u5f00\u53d1\u5206\u652f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u7684\u6bcf\u4e2a\u63d0\u4ea4\u901a\u8fc7\u4e86\u5355\u5143\u6d4b\u8bd5\uff0c\u4f46\u6ca1\u6709\u8fdb\u884c\u56de\u5f52\u6d4b\u8bd5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u662f\u4e3a\u53d1\u5e03\u800c\u521b\u5efa\u7684\u4e34\u65f6\u5206\u652f\u3002\u8fd9\u4e2a\u5206\u652f\u4e0a\u7684\u4ee3\u7801\u6b63\u5728\u8fdb\u884c\u56de\u5f52\u6d4b\u8bd5\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u590d\u5236\uff08forked\uff09\u7684\u4ee3\u7801\u5e93, \u5f00\u53d1\u8005\u4e0d\u9700\u8981\u4e25\u683c\u9075\u5b88",(0,r.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"git-flow"),"\u3002\u590d\u5236\u7684\u4ee3\u7801\u5e93\u4e2d\u7684\u6bcf\u4e2a\u5206\u652f\u7b49\u540c\u4e8efeature\u5206\u652f\u3002\u5177\u4f53\u5efa\u8bae\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u53d1\u8005\u5c06\u590d\u5236\u4ee3\u7801\u5e93\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u4e0e\u5b98\u65b9\u4ee3\u7801\u5e93\u4fdd\u6301\u540c\u6b65\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u53d1\u8005\u4ece\u590d\u5236\u4ee3\u7801\u5e93\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u521b\u5efa\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),"\u5206\u652f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),"\u5206\u652f\u7684\u5f00\u53d1\u540e, \u5f00\u53d1\u8005\u5411\u5b98\u65b9\u4ee3\u7801\u5e93\u53d1\u8d77 ",(0,r.kt)("strong",{parentName:"p"},"Pull Request")," \u4ee5\u4fbf\u8fdb\u884c\u4ee3\u7801\u8bc4\u5ba1\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4ee3\u7801\u8bc4\u5ba1\u8fc7\u7a0b\u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u80fd\u7ee7\u7eed\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),"\u5206\u652f\u4e0a\u4fee\u6539\u548c\u63d0\u4ea4\u4ee3\u7801\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u5916\uff0c\u5728\u590d\u5236\u7684\u4ee3\u7801\u5e93\u4e2d\u4e5f\u53ef\u4ee5\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"bugfix")," \u5206\u652f\u3002\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),"\u5206\u652f\u4e0d\u540c\u7684\u662f\uff0c\u5f00\u53d1\u8005\u5e94\u8be5\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"bugfix"),"\u5206\u652f\u5411\u5b98\u65b9\u4ee3\u7801\u5e93\u7684\u591a\u4e2a\u5206\u652f\u5206\u522b\u53d1\u8d77 ",(0,r.kt)("strong",{parentName:"p"},"Pull Request")," \uff0c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f, ",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\uff0c\u4ee5\u53ca\u53ef\u80fd\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u3002"))))),(0,r.kt)("h2",{id:"\u53d1\u5e03\u6d41\u7a0b-1"},"\u53d1\u5e03\u6d41\u7a0b"),(0,r.kt)("p",null,"\u53d1\u5e03\u65b0\u7248\u672c\u7684\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\uff0c\u5206\u652f\u540d\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u3002\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"release/v0.10.0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7ed9\u65b0\u7684\u5206\u652f\u6dfb\u52a0\u6807\u7b7e",(0,r.kt)("inlineCode",{parentName:"p"},"X.Y.Z-rcN"),"(",(0,r.kt)("strong",{parentName:"p"},"N"),"\u662f\u8865\u4e01\u53f7)\u3002\u7b2c\u4e00\u4e2a\u6807\u7b7e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.0-rc1"),", \u7b2c\u4e8c\u4e2a\u6807\u7b7e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.0-rc2"),", \u4f9d\u6b64\u7c7b\u63a8\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6309\u5982\u4e0b\u6b65\u9aa4\u63d0\u4ea4\u65b0\u7684\u7248\u672c\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("strong",{parentName:"p"},"cargo.toml")," \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u4fe1\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u7248\u672c\u529f\u80fd\u7684\u6b63\u786e\u6027\u3002\u5982\u679c\u5931\u8d25\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u4e2d\u4fee\u590d\u6240\u6709\u95ee\u9898\uff0c\u5e76\u8fd4\u56de\u7b2c\u4e8c\u6b65\uff0c\u5c06\u8865\u4e01\u53f7\u52a01\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic/blob/develop/CHANGELOG.md"},"Release Note"),"\u7684\u7f16\u5199\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\uff0c\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u3002\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u6dfb\u52a0\u6807\u7b7e",(0,r.kt)("inlineCode",{parentName:"p"},"vX.Y.Z"),"\u3002"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u53d1\u5e03\u5206\u652f\u4e00\u65e6\u521b\u5efa\u540e\uff0c\u4e00\u822c\u4e0d\u5141\u8bb8\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"\u5408\u5165\u4fee\u6539\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u4e2d\u3002\u8fd9\u786e\u4fdd\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u662f\u51bb\u7ed3\u7684\uff0c\u8ba9QA\u66f4\u5bb9\u6613\u6d4b\u8bd5\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u5b58\u5728\u65f6\uff0c\u5982\u679c\u6709\u95ee\u9898\u4fee\u590d\uff0c\u8bf7\u540c\u65f6\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"bugfix"),"\u5206\u652f\u5408\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),"and",(0,r.kt)("inlineCode",{parentName:"p"},"release/vX.Y.Z"),"\u5206\u652f\u3002")))}c.isMDXComponent=!0}}]);