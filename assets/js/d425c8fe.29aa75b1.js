"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[1595],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(a),g=r,c=m["".concat(p,".").concat(g)]||m[g]||d[g]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1757:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"Comparison",sidebar_position:1},i="Comparison to alternatives",o={unversionedId:"further_readings/comparison",id:"further_readings/comparison",title:"Comparison",description:"The industry currently offers numerous available QUIC implementations. However, we have selected only a few for comparative analysis. The main reasons behind our choice are as follows:",source:"@site/docs/further_readings/comparison.md",sourceDirName:"further_readings",slug:"/further_readings/comparison",permalink:"/docs/further_readings/comparison",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/further_readings/comparison.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1727151180,formattedLastUpdatedAt:"Sep 24, 2024",sidebarPosition:1,frontMatter:{title:"Comparison",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Further Readings",permalink:"/docs/category/further-readings"},next:{title:"Benchmark",permalink:"/docs/further_readings/benchmark"}},p={},u=[{value:"Basic information",id:"basic-information",level:2},{value:"Performance and throughput",id:"performance-and-throughput",level:2},{value:"Quality and stability",id:"quality-and-stability",level:2},{value:"Usability and observability",id:"usability-and-observability",level:2}],s={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comparison-to-alternatives"},"Comparison to alternatives"),(0,r.kt)("p",null,"The industry currently offers numerous available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/quicwg/base-drafts/wiki/Implementations"},"QUIC implementations"),". However, we have selected only a few for comparative analysis. The main reasons behind our choice are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open source project"),": This facilitates the establishment of a test environment and also enables further code analysis. For instance, we didn't choose AppleQUIC or F5 QUIC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Written in a system programming language"),": Some implementations may not be aimed at high performance and therefore cannot be fairly compared to those based on system programming languages. We didn't choose implementations based on Python/Haskell/Java etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Widely used"),": It is used by well-known open-source projects or large-scale network service providers.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following analysis may not be accurate as each project is currently under active development. The document may be updated or supplemented with new implementations at a later time.")),(0,r.kt)("h2",{id:"basic-information"},"Basic information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-G"),(0,r.kt)("th",{parentName:"tr",align:null},"NGINX-QUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-CF"),(0,r.kt)("th",{parentName:"tr",align:null},"LSQUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"TQUIC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary maintainers"),(0,r.kt)("td",{parentName:"tr",align:null},"Google"),(0,r.kt)("td",{parentName:"tr",align:null},"NGINX Community"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare"),(0,r.kt)("td",{parentName:"tr",align:null},"LiteSpeed"),(0,r.kt)("td",{parentName:"tr",align:null},"TQUIC Community")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code repository"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/google/quiche"},"google/quiche")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nginx/nginx/tree/master/src/event/quic"},"quic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/cloudflare/quiche"},"cloudflare/quiche")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/litespeedtech/lsquic"},"lsquic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tencent/tquic"},"tquic"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Programming language"),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"RUST"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"RUST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lines of code"),(0,r.kt)("td",{parentName:"tr",align:null},"About 150,000"),(0,r.kt)("td",{parentName:"tr",align:null},"About 20,000"),(0,r.kt)("td",{parentName:"tr",align:null},"About 40,000"),(0,r.kt)("td",{parentName:"tr",align:null},"About 100,000"),(0,r.kt)("td",{parentName:"tr",align:null},"About 50,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Typical Use Cases"),(0,r.kt)("td",{parentName:"tr",align:null},"Chromium, Envoy"),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare edge network"),(0,r.kt)("td",{parentName:"tr",align:null},"LiteSpeed WebServer, Web ADC"),(0,r.kt)("td",{parentName:"tr",align:null},"Tencent Cloud EdgeOne")))),(0,r.kt)("p",null,"The implementations selected for the comparison with TQUIC are shown in the table above. Two of them are used by well-known open source projects(",(0,r.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy"),"/",(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/"},"Nginx"),") and two are used by popular CDN vendors(",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"Cloudflare"),"/",(0,r.kt)("a",{parentName:"p",href:"https://www.litespeedtech.com/"},"LiteSpeed"),"). They are all written in high-performance systems programming languages."),(0,r.kt)("p",null,"The NGINX-QUIC codebase, despite having the fewest lines of code, currently lacks comments, unit tests, and certain important features. In contrast, the TQUIC codebase has extensive unit tests and detailed comments that make up approximately half of its total lines of code. This makes it easier for contributors to participate."),(0,r.kt)("h2",{id:"performance-and-throughput"},"Performance and throughput"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-G"),(0,r.kt)("th",{parentName:"tr",align:null},"NGINX-QUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-CF"),(0,r.kt)("th",{parentName:"tr",align:null},"LSQUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"TQUIC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},"Good"),(0,r.kt)("td",{parentName:"tr",align:null},"Good"),(0,r.kt)("td",{parentName:"tr",align:null},"Better"),(0,r.kt)("td",{parentName:"tr",align:null},"Best")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Congestion control"),(0,r.kt)("td",{parentName:"tr",align:null},"CUBIC, BBR, BBRv2, Reno"),(0,r.kt)("td",{parentName:"tr",align:null},"Reno"),(0,r.kt)("td",{parentName:"tr",align:null},"CUBIC, BBR"),(0,r.kt)("td",{parentName:"tr",align:null},"CUBIC, BBR"),(0,r.kt)("td",{parentName:"tr",align:null},"CUBIC, BBR, BBRv3, COPA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multipath"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Support Multipath QUIC")))),(0,r.kt)("p",null,"The performance of TQUIC surpasses that of the other implementations significantly. For further details on the benchmark methodology and results, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./benchmark/"},"benchmark report"),"."),(0,r.kt)("p",null,"Popular congestion control algorithms are supported by all these implementations, except for NGINX-QUIC."),(0,r.kt)("p",null,"TQUIC is the only one of these implementations that supports multipath QUIC, thereby enhancing both throughput and reliability. Some other libraries, including QUICHE-CF, are currently in development to provide support for multipath QUIC."),(0,r.kt)("h2",{id:"quality-and-stability"},"Quality and stability"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-G"),(0,r.kt)("th",{parentName:"tr",align:null},"NGINX-QUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-CF"),(0,r.kt)("th",{parentName:"tr",align:null},"LSQUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"TQUIC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Extensive unit tests"),(0,r.kt)("td",{parentName:"tr",align:null},"No unit tests; Few integration tests"),(0,r.kt)("td",{parentName:"tr",align:null},"Extensive unit tests"),(0,r.kt)("td",{parentName:"tr",align:null},"Many unit tests, but limited for high-level components"),(0,r.kt)("td",{parentName:"tr",align:null},"Extensive unit tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memory safety"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,r.kt)("p",null,"Most implementations have extensive unit tests, whereas NGINX-QUIC, as mentioned earlier, lacks them and only a limited number of integration tests for QUIC can be found in a ",(0,r.kt)("a",{parentName:"p",href:"https://hg.nginx.org/nginx-tests/file/tip"},"separate repository"),"."),(0,r.kt)("p",null,"TQUIC and QUICHE-CF are written in a memory-safe language, making them immune to Buffer Overflow vulnerability and other memory-related bugs. In contrast, LSQUIC, a C-based library that was open-sourced in 2017, has been consistently ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/litespeedtech/lsquic/blob/master/CHANGELOG"},"identifying and resolving memory-related bugs")," throughout the years. Similarly, the NGINX QUIC stack has encountered several ",(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/en/security_advisories.html"},"memory-related security vulnerabilities"),". This is very common for implementations written in C or C++."),(0,r.kt)("h2",{id:"usability-and-observability"},"Usability and observability"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-G"),(0,r.kt)("th",{parentName:"tr",align:null},"NGINX-QUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"QUICHE-CF"),(0,r.kt)("th",{parentName:"tr",align:null},"LSQUIC"),(0,r.kt)("th",{parentName:"tr",align:null},"TQUIC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Library APIs"),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust/C/C++"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust/C/C++")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"No documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"No documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed for RUST; Limited for C/C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Very detailed"),(0,r.kt)("td",{parentName:"tr",align:null},"Very detailed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL Keylog"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QLOG"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,r.kt)("p",null,"The APIs for both TQUIC and QUICHE-CF are available in multiple languages, along with detailed API documentation. The absence of comprehensive API documentation for QUICHE-G poses challenges for average users. Currently, NGINX-QUIC is not a standalone QUIC library and only works with Nginx."),(0,r.kt)("p",null,"The absence of an SSL Keylog or QLOG can make certain implementations (QUICHE-G/NGINX-QUIC/LSQUIC) less convenient for troubleshooting purposes."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The document is open-source. Please help improve it by filing issues or pull requests.")))}d.isMDXComponent=!0}}]);