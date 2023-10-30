"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[1990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Conformance",sidebar_position:3},i="Protocol conformance test",s={unversionedId:"further_readings/conformance",id:"further_readings/conformance",title:"Conformance",description:'We perform protocol conformance tests based on the methodology introduced in a paper titled "Formal specification and testing of QUIC" published at SIGCOMM 2019. We have upgraded the initial formal specification to incorporate support for QUIC v1 and resolved some issues in the ivy toolchain.',source:"@site/docs/further_readings/conformance.md",sourceDirName:"further_readings",slug:"/further_readings/conformance",permalink:"/docs/further_readings/conformance",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/further_readings/conformance.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1698653762,formattedLastUpdatedAt:"Oct 30, 2023",sidebarPosition:3,frontMatter:{title:"Conformance",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Benchmark",permalink:"/docs/further_readings/benchmark"},next:{title:"Resources",permalink:"/docs/further_readings/resources"}},c={},l=[{value:"Formal specification of QUIC",id:"formal-specification-of-quic",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Usage",id:"usage",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protocol-conformance-test"},"Protocol conformance test"),(0,o.kt)("p",null,"We perform protocol conformance tests based on the methodology introduced in a paper titled ",(0,o.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/3341302.3342087"},'"Formal specification and testing of QUIC"')," published at SIGCOMM 2019. We have upgraded the initial formal specification to incorporate support for QUIC v1 and resolved some issues in the ivy toolchain."),(0,o.kt)("h2",{id:"formal-specification-of-quic"},"Formal specification of QUIC"),(0,o.kt)("p",null,"The formal specification of the QUIC protocol is written in the ",(0,o.kt)("a",{parentName:"p",href:"http://microsoft.github.io/ivy/"},"Ivy")," language. It can be used to test implementations of QUIC using compositional specification-based testing methods."),(0,o.kt)("p",null,"The currently targeted version is IETF QUIC v1."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The specification is written in a way that allows monitoring of packets on the wire, as well as modular testing of implementations."),(0,o.kt)("p",null,"That is, from the specification we can produce an automated tester that takes one role in the protocol. The tester uses symbolic execution and an SMT solver to randomly generate protocol traffic that complies with the specification. For example, if the tester is taking the client role, it generates packets that are legal for the client to send, and these are transmitted to the server being tested. The responses sent by the server are then checked for compliance with the specification."),(0,o.kt)("h2",{id:"advantages"},"Advantages"),(0,o.kt)("p",null,"This approach has certain advantages when compared to interoperability testing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The specification-based tester can generate stimulus that can't be produced by any current implementation and perhaps would only be produced by attackers. Because it is randomized, it tends to generate unusual cases that specifiers may not have considered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It checks for actual specification compliance and not just for correct interopation. Compliance with the specification is important for future protocol developers who need to ensure compatibility with legacy implementations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The formal specification can be seen as documentation, since it gives an unambiguous interpretation of statements made in natural language in the IETF specification documents."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The formal specification of QUIC v1 will soon be made available as open source, along with detailed instructions on how to use it in its project documentation."))}d.isMDXComponent=!0}}]);