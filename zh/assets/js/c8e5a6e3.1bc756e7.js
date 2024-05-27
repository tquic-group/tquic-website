"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[2082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,b=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u8d21\u732e\u6587\u6863",sidebar_position:2},o="\u8d21\u732e\u6587\u6863",i={unversionedId:"how_to_contribute/contribute_docs",id:"how_to_contribute/contribute_docs",title:"\u8d21\u732e\u6587\u6863",description:"TQUIC\u6587\u6863\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\u522b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how_to_contribute/contribute_docs.md",sourceDirName:"how_to_contribute",slug:"/how_to_contribute/contribute_docs",permalink:"/zh/docs/how_to_contribute/contribute_docs",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/how_to_contribute/contribute_docs.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1716779735,formattedLastUpdatedAt:"2024\u5e745\u670827\u65e5",sidebarPosition:2,frontMatter:{title:"\u8d21\u732e\u6587\u6863",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u8d21\u732e\u4ee3\u7801",permalink:"/zh/docs/how_to_contribute/contribute_codes"},next:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/zh/docs/how_to_contribute/development_guides"}},u={},c=[{value:"\u9884\u89c8\u5de5\u5177\u7684\u4f7f\u7528",id:"\u9884\u89c8\u5de5\u5177\u7684\u4f7f\u7528",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56\u9879",id:"\u5b89\u88c5\u4f9d\u8d56\u9879",level:3},{value:"\u4e0b\u8f7d\u6e90\u4ee3\u7801",id:"\u4e0b\u8f7d\u6e90\u4ee3\u7801",level:3},{value:"\u672c\u5730\u8fd0\u884c\u6587\u6863\u7ad9\u70b9",id:"\u672c\u5730\u8fd0\u884c\u6587\u6863\u7ad9\u70b9",level:3},{value:"\u8d21\u732e\u6587\u6863",id:"\u8d21\u732e\u6587\u6863-1",level:2},{value:"\u8d21\u732e\u65b0\u7684\u6587\u6863",id:"\u8d21\u732e\u65b0\u7684\u6587\u6863",level:3},{value:"\u8fd0\u884c\u9884\u89c8\u5de5\u5177",id:"\u8fd0\u884c\u9884\u89c8\u5de5\u5177",level:3},{value:"\u9884\u89c8\u4fee\u6539\u7684\u6587\u6863",id:"\u9884\u89c8\u4fee\u6539\u7684\u6587\u6863",level:3},{value:"\u53d1\u8d77\u5408\u5165\u7533\u8bf7",id:"\u53d1\u8d77\u5408\u5165\u7533\u8bf7",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8d21\u732e\u6587\u6863"},"\u8d21\u732e\u6587\u6863"),(0,a.kt)("p",null,"TQUIC\u6587\u6863\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u6307\u5357\uff1a\u5e2e\u52a9\u7528\u6237\u5165\u95e8\u53ca\u4f7f\u7528TQUIC\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u6307\u5357\uff1a\u5e2e\u52a9\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e")),(0,a.kt)("p",null,"\u6587\u6863\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/installation"},"docusaurus"),"\u6784\u5efa\u3002\u4f60\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u5185\u5bb9\uff0c\u4ec5\u9700\u7f16\u5199",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/features/Mastering-markdown/"},"Markdown"),"\u6587\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6587\u6863\u7f16\u5199\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9884\u89c8\u5de5\u5177\u67e5\u770b\u6587\u6863\uff0c\u9a8c\u8bc1\u6587\u6863\u5728\u5b98\u65b9\u7f51\u7ad9\u4e0a\u80fd\u5426\u6b63\u786e\u663e\u793a\u3002"),(0,a.kt)("h2",{id:"\u9884\u89c8\u5de5\u5177\u7684\u4f7f\u7528"},"\u9884\u89c8\u5de5\u5177\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56\u9879"},"\u5b89\u88c5\u4f9d\u8d56\u9879"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm 16.14+"),"\u3002"),(0,a.kt)("p",null,"\u4ee5Ubuntu\u7cfb\u7edf\u4e3a\u4f8b\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update && apt-get install -y npm\n")),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u6e90\u4ee3\u7801"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801"),(0,a.kt)("p",null,"\u9996\u5148\u4e0b\u8f7d\u5b8c\u6574\u7684\u4ee3\u7801\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/tquic-group/tquic-website.git\n$ cd tquic-website\n$ npm install\n")),(0,a.kt)("h3",{id:"\u672c\u5730\u8fd0\u884c\u6587\u6863\u7ad9\u70b9"},"\u672c\u5730\u8fd0\u884c\u6587\u6863\u7ad9\u70b9"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684\u57fa\u76ee\u5f55\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run start -p 8000\n...\n[SUCCESS] Docusaurus website is running at: http://localhost:8000/\n...\n")),(0,a.kt)("p",null,"\u7136\u540e\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee http://localhost:8000."),(0,a.kt)("h2",{id:"\u8d21\u732e\u6587\u6863-1"},"\u8d21\u732e\u6587\u6863"),(0,a.kt)("p",null,"\u6240\u6709\u7684\u6587\u6863\u5e94\u8be5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"Markdown")," \u683c\u5f0f\u7f16\u5199\u3002"),(0,a.kt)("h3",{id:"\u8d21\u732e\u65b0\u7684\u6587\u6863"},"\u8d21\u732e\u65b0\u7684\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82f1\u6587\u7248\u672c\u7684\u6587\u6863\u4f4d\u4e8e\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/"),", \u4e2d\u6587\u7248\u672c\u7684\u6587\u6863\u4f4d\u4e8e\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n/zh/docusaurus-plugin-content-docs/current")),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".md")," \u6587\u4ef6\uff0c\u6216\u8005\u4fee\u6539\u5df2\u6709\u7684\u6587\u6863")),(0,a.kt)("h3",{id:"\u8fd0\u884c\u9884\u89c8\u5de5\u5177"},"\u8fd0\u884c\u9884\u89c8\u5de5\u5177"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u7684\u57fa\u76ee\u5f55\uff0c\u8fd0\u884c\u9884\u89c8\u5de5\u5177\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u82f1\u6587\u7248\u672c\n$ npm run start -p 8000\n\n# \u67e5\u770b\u4e2d\u6587\u7248\u672c\n$ npm run start -p 8000 --locale zh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u6574\u4e2a\u7ad9\u70b9\u7f16\u8bd1\u4e3a\u9759\u6001\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528HTTP\u670d\u52a1\u5668\u63d0\u4f9b\u8bbf\u95ee\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9759\u6001\u6587\u4ef6\u5c06\u751f\u6210\u5728build\u76ee\u5f55\u4e2d\n$ npm run build\n\n$ cd build\n$ python3 -m http.server 8000\n")),(0,a.kt)("h3",{id:"\u9884\u89c8\u4fee\u6539\u7684\u6587\u6863"},"\u9884\u89c8\u4fee\u6539\u7684\u6587\u6863"),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u5e76\u8bbf\u95ee http://localhost:8000 \u3002"),(0,a.kt)("p",null,"\u5728\u66f4\u65b0\u7684\u9875\u9762\u4e0a\uff0c\u5355\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u5237\u65b0\u201d\u6309\u94ae\u3002"),(0,a.kt)("h2",{id:"\u53d1\u8d77\u5408\u5165\u7533\u8bf7"},"\u53d1\u8d77\u5408\u5165\u7533\u8bf7"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4fee\u6539\u53ca\u53d1\u8d77Pull Request\u7684\u6d41\u7a0b\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"./contribute_codes/#guide-of-submitting-pr-to-github"},"\u8d21\u732e\u4ee3\u7801")))}d.isMDXComponent=!0}}]);