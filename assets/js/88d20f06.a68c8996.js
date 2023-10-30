"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[4005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||g[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"TQUIC is open source",title:"Announcing TQUIC open source project",authors:["iyangsj"],tags:["tquic","quic","rust","open source"]},i="Introduction",s={permalink:"/blog/TQUIC is open source",editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-26-open-source/index.md",source:"@site/blog/2023-10-26-open-source/index.md",title:"Announcing TQUIC open source project",description:"TQUIC is a QUIC protocol implementation written in the Rust language, aiming to create a high-performance, high-throughput, and high-quality transport protocol library with continuous technological influence.",date:"2023-10-26T00:00:00.000Z",formattedDate:"October 26, 2023",tags:[{label:"tquic",permalink:"/blog/tags/tquic"},{label:"quic",permalink:"/blog/tags/quic"},{label:"rust",permalink:"/blog/tags/rust"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:2.22,hasTruncateMarker:!0,authors:[{name:"Sijie Yang",url:"https://github.com/iyangsj",imageURL:"https://github.com/iyangsj.png",key:"iyangsj"}],frontMatter:{slug:"TQUIC is open source",title:"Announcing TQUIC open source project",authors:["iyangsj"],tags:["tquic","quic","rust","open source"]}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TQUIC is a QUIC protocol implementation written in the Rust language, aiming to create a high-performance, high-throughput, and high-quality transport protocol library with continuous technological influence."),(0,o.kt)("h1",{id:"why-open-source"},"Why Open source?"),(0,o.kt)("p",null,"QUIC is a new general-purpose, secured, multiplexed transport-layer protocol. It offers several enhancements, aiming to eventually replace TCP, which could enable Internet transport to continue evolving and solve many of the problems plaguing the Internet. "),(0,o.kt)("p",null,"With QUIC being chosen as the foundation for HTTP/3, it is reasonable to expect that the protocol will carry a significantly larger share of Internet traffic."),(0,o.kt)("p",null,"Due to QUIC's extensibility, longevity, and innovativeness, we have decided to make our TQUIC protocol library open-source. We aim to leverage this opportunity of  open source for technology exchange with colleagues and the promotion of transport layer development."),(0,o.kt)("h1",{id:"features-and-advantages"},"Features and Advantages"),(0,o.kt)("p",null,"The advantages of TQUIC are as follows.\t"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"High Throughput"),": The TQUIC library offers the industry's most comprehensive collection of congestion control algorithms, consistently meeting RFC standards and outperforming similar open source projects by 2%-30% on weak networks and in specific scenarios."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"High performance"),"\uff1a The performance of TQUIC surpasses that of similar open-source projects by 5% in most test scenarios, and by 20% in some scenarios."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"High Quality"),": The QUIC protocol stack comprises over 10 core RFC standards or drafts, covering the transport layer, security layer, and application layer. It is considerably more complex compared to TCP. The TQUIC protocol has achieved an impressive unit test coverage of over 95% and has successfully passed interoperability tests with four leading QUIC implementations in the industry. Additionally, a rigorous test method based on formal specifications (SIGCOMM2019 paper) is employed to ensure strict protocol conformance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Easy to Use"),": TQUIC is easy to use, supporting flexible configuration and detailed observability. It offers APIs for Rust/C/C++, with plans to  expand its support to Kotlin/Swift, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Powered by Rust"),"\uff1a TQUIC is written in a memory-safe language, making it immune to Buffer Overflow vulnerability and other memory-related bugs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rich Features"),"\uff1a TQUIC supports all big features conforming with QUIC, HTTP/3 RFCs."),(0,o.kt)("p",null,"The TQUIC project website, available at ",(0,o.kt)("a",{parentName:"p",href:"https://tquic.net/zh/docs/intro"},"https://tquic.net/zh/docs/intro"),", offers a comprehensive introduction to TQUIC."),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrating open source technology ecosystem, expanding TQUIC application scenarios, and further enhancing user experience with TQUIC"),(0,o.kt)("li",{parentName:"ul"},"Publishing relevant papers and gradually releasing more advanced TQUIC features and algorithms as open-source"),(0,o.kt)("li",{parentName:"ul"},"Tracking the evolution and innovation of the QUIC protocol, while continuously enhancing the core capabilities of TQUIC")),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The open source of TQUIC is just the beginning. We look forward to receiving everyone's feedback and encourage participation in the development of transport technology ecology. Interested parties are welcome to reach out and engage with us."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TQUIC Website"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://tquic.net"},"https://tquic.net")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TQUIC Repository"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic"},"https://github.com/tencent/tquic")))}g.isMDXComponent=!0}}]);