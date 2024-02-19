"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[8534],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1115:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Development Guides",sidebar_position:3},l="Development guides",i={unversionedId:"how_to_contribute/development_guides",id:"how_to_contribute/development_guides",title:"Development Guides",description:"Layout of the top level directories",source:"@site/docs/how_to_contribute/development_guides.md",sourceDirName:"how_to_contribute",slug:"/how_to_contribute/development_guides",permalink:"/docs/how_to_contribute/development_guides",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/how_to_contribute/development_guides.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1700727873,formattedLastUpdatedAt:"Nov 23, 2023",sidebarPosition:3,frontMatter:{title:"Development Guides",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to contribute documents",permalink:"/docs/how_to_contribute/contribute_docs"},next:{title:"Releasing Process",permalink:"/docs/how_to_contribute/releasing_process"}},u={},p=[{value:"Layout of the top level directories",id:"layout-of-the-top-level-directories",level:2},{value:"Layout of the TQUIC implementation",id:"layout-of-the-tquic-implementation",level:2},{value:"Unit testing",id:"unit-testing",level:2},{value:"Fuzz testing",id:"fuzz-testing",level:2},{value:"Conformance testing",id:"conformance-testing",level:2},{value:"Interoperability testing",id:"interoperability-testing",level:2},{value:"Rust package documentation",id:"rust-package-documentation",level:2}],s={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-guides"},"Development guides"),(0,a.kt)("h2",{id:"layout-of-the-top-level-directories"},"Layout of the top level directories"),(0,a.kt)("p",null,"The top directories are as followings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/"),(0,a.kt)("td",{parentName:"tr",align:null},"TQUIC implementation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apps/"),(0,a.kt)("td",{parentName:"tr",align:null},"TQUIC Example tools")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"benches/"),(0,a.kt)("td",{parentName:"tr",align:null},"Benchmark tests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fuzz/"),(0,a.kt)("td",{parentName:"tr",align:null},"Fuzzing tests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interop/"),(0,a.kt)("td",{parentName:"tr",align:null},"Interoperability testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"include/"),(0,a.kt)("td",{parentName:"tr",align:null},"Generated header files for C/C++")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"website/"),(0,a.kt)("td",{parentName:"tr",align:null},"TQUIC website for documents")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The header file ",(0,a.kt)("inlineCode",{parentName:"p"},"include/tquic.h")," should be updated if any changes are made to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/ffi.rs"),".\nThe header file can be automatically generated using the following command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"cbindgen -o include/tquic.h\n"))),(0,a.kt)("h2",{id:"layout-of-the-tquic-implementation"},"Layout of the TQUIC implementation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directory/File"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/connection/"),(0,a.kt)("td",{parentName:"tr",align:null},"Core implementation of the QUIC protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/congestion_control/"),(0,a.kt)("td",{parentName:"tr",align:null},"Various congestion control algorithms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/multipath_scheduler/"),(0,a.kt)("td",{parentName:"tr",align:null},"Various multipath scheduling algorithms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/tls/"),(0,a.kt)("td",{parentName:"tr",align:null},"An wrapper of boringssl/rustls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/h3/"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP/3 protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/qlog/"),(0,a.kt)("td",{parentName:"tr",align:null},"Qlog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/ffi.rs"),(0,a.kt)("td",{parentName:"tr",align:null},"Foreign Function Interface for C/C++")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/build.rs"),(0,a.kt)("td",{parentName:"tr",align:null},"Build tools for boringssl")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src/","*",".rs"),(0,a.kt)("td",{parentName:"tr",align:null},"Fundamental building blocks for the TQUIC library")))),(0,a.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to output test case logs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# You should replace the `test_name` with the actual test case name\nRUST_LOG=trace cargo test test_name -- --nocapture\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to check the unit test coverage")),(0,a.kt)("p",null,"It is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"tarpaulin")," to produce a unit test coverage report:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# install tarpaulin\ncargo install cargo-tarpaulin\n\n# change to the base directory of the project\ncargo tarpaulin --exclude-files "deps/*" -o html\n')),(0,a.kt)("h2",{id:"fuzz-testing"},"Fuzz testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to install the tool ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rust-fuzz/cargo-fuzz"},"cargo-fuzz")," for for fuzzing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rustup install nightly\nrustup default nightly\ncargo install cargo-fuzz\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to list all the existing fuzz targets")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo fuzz list\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to run a fuzzing target")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo fuzz run <target_name> -- -max_total_time=30\n")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-fuzz.github.io/book/cargo-fuzz.html"},"cargo-fuzz documentation")," for more information."),(0,a.kt)("h2",{id:"conformance-testing"},"Conformance testing"),(0,a.kt)("p",null,"We maintaine a formal specification of the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9000"},"QUIC v1")," protocol using the ",(0,a.kt)("a",{parentName:"p",href:"http://microsoft.github.io/ivy/"},"Ivy language"),". This specification can be used to test implementations of QUIC using ",(0,a.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/3341302.3342087"},"compositional specification-based testing methods"),"."),(0,a.kt)("p",null,"For further information, kindly consult ",(0,a.kt)("a",{parentName:"p",href:"../further_readings/conformance"},"this document"),"."),(0,a.kt)("h2",{id:"interoperability-testing"},"Interoperability testing"),(0,a.kt)("p",null,"Automated, continuous interop testing is performed using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marten-seemann/quic-interop-runner/tree/master"},"quic-interop-runner"),". The results of this continuous testing are posted on ",(0,a.kt)("a",{parentName:"p",href:"https://interop.seemann.io/"},"this webpage"),"."),(0,a.kt)("h2",{id:"rust-package-documentation"},"Rust package documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to build the documentation for ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/tquic"},"tquic"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo doc --no-deps\n")))}d.isMDXComponent=!0}}]);