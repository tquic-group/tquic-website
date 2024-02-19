"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[4147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Core concepts",sidebar_position:1},i="Core Concepts",c={unversionedId:"tutorial/core_concepts",id:"tutorial/core_concepts",title:"Core concepts",description:"Commonly used terms in the TQUIC APIs are described below.",source:"@site/docs/tutorial/core_concepts.md",sourceDirName:"tutorial",slug:"/tutorial/core_concepts",permalink:"/docs/tutorial/core_concepts",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/core_concepts.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704956763,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:1,frontMatter:{title:"Core concepts",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/docs/category/tutorial"},next:{title:"Using the Rust API",permalink:"/docs/tutorial/rust"}},s={},l=[{value:"Endpoint",id:"endpoint",level:2},{value:"Connection",id:"connection",level:2},{value:"Stream",id:"stream",level:2},{value:"Path",id:"path",level:2},{value:"QUIC packet",id:"quic-packet",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,o.kt)("p",null,"Commonly used terms in the TQUIC APIs are described below."),(0,o.kt)("h2",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Endpoint")," is responsible for managing connections, processing incoming packets, and scheduling outgoing packets. "),(0,o.kt)("p",null,"There are only two types of endpoints in QUIC: client and server. The Endpoint can operate in either server or client mode."),(0,o.kt)("h2",{id:"connection"},"Connection"),(0,o.kt)("p",null,"The QUIC ",(0,o.kt)("strong",{parentName:"p"},"Connection")," can carry multiple simultaneous streams, which are ordered sequences of bytes."),(0,o.kt)("p",null,"The QUIC connection is not strictly bound to a single network path. It uses connection identifiers to allow it to transfer to a new network path or simultaneous use of different paths. Only clients are allowed to initiate a new path on the QUIC connection."),(0,o.kt)("h2",{id:"stream"},"Stream"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Stream")," provides a lightweight, ordered byte-stream abstraction to an application. "),(0,o.kt)("p",null,"Streams can be unidirectional or bidirectional: ",(0,o.kt)("strong",{parentName:"p"},"unidirectional")," streams carry data from the initiator to its peer; ",(0,o.kt)("strong",{parentName:"p"},"bidirectional")," streams allow for data to be sent in both directions."),(0,o.kt)("p",null,"The Stream can be created by either client or server, can concurrently send data interleaved with other streams, and can be canceled. "),(0,o.kt)("h2",{id:"path"},"Path"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"path")," is determined by the 4-tuple consisting of the source and destination IP addresses, as well as the source and destination ports."),(0,o.kt)("h2",{id:"quic-packet"},"QUIC packet"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"QUIC packet")," is a complete and processable unit of QUIC that can be encapsulated in a UDP datagram. Multiple QUIC packets can be encapsulated in a single UDP datagram."))}d.isMDXComponent=!0}}]);