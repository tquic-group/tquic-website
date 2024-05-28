"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[2144],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},5760:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={title:"Installation",sidebar_position:1},a="Installation",l={unversionedId:"faq/installation",id:"faq/installation",title:"Installation",description:"Failed to run custom build command for TQUIC?",source:"@site/docs/faq/installation.md",sourceDirName:"faq",slug:"/faq/installation",permalink:"/docs/faq/installation",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/faq/installation.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1716893915,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/category/frequently-asked-questions"},next:{title:"Usage",permalink:"/docs/faq/usage"}},u={},s=[{value:"Failed to run custom build command for TQUIC?",id:"failed-to-run-custom-build-command-for-tquic",level:2},{value:"Failed to build the sources released on github?",id:"failed-to-build-the-sources-released-on-github",level:2},{value:"Not found example tools of TQUIC?",id:"not-found-example-tools-of-tquic",level:2},{value:"Not found C library of TQUIC?",id:"not-found-c-library-of-tquic",level:2},{value:"How to specify the MacOS deployment target for TQUIC library?",id:"how-to-specify-the-macos-deployment-target-for-tquic-library",level:2},{value:"How to optimize Library File Size for TQUIC on Mobile Platforms",id:"how-to-optimize-library-file-size-for-tquic-on-mobile-platforms",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"failed-to-run-custom-build-command-for-tquic"},"Failed to run custom build command for TQUIC?"),(0,r.kt)("p",null,"If you get a ",(0,r.kt)("inlineCode",{parentName:"p"},"not found CMakeLists.txt")," error, it is likely because the submodules of tquic were not downloaded properly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"error: failed to run custom build command for `tquic`\n\n...\n  CMake Error: The source directory \"third_party/boringssl\" does not appear to contain CMakeLists.txt.\n  Specify --help for usage, or press the help button on the CMake GUI.\n  thread 'main' panicked at '\n  command did not execute successfully, got: exit status: 1\n\n  build script failed, must exit now', index.crates.io/cmake-0.1.50/src/lib.rs:1098:5\n  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n")),(0,r.kt)("p",null,"The source code of tquic should be cloned using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/tencent/tquic --recursive\n")),(0,r.kt)("p",null,"If the source code has already been cloned, but you forgot to use the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive"),", you can manually download the submodules like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git submodule init && git submodule update\n")),(0,r.kt)("h2",{id:"failed-to-build-the-sources-released-on-github"},"Failed to build the sources released on github?"),(0,r.kt)("p",null,"The released code (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tencent/tquic/releases"},"https://github.com/Tencent/tquic/releases"),") does not include the tquic dependent submodule due to GitHub restrictions."),(0,r.kt)("p",null,"The recommended command to obtain the specified version of tquic source codes is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Please replace the 'vx.y.z' with the version you need\ngit clone -b vx.y.z --recursive https://github.com/Tencent/tquic.git\n")),(0,r.kt)("h2",{id:"not-found-example-tools-of-tquic"},"Not found example tools of TQUIC?"),(0,r.kt)("p",null,"If you cannot locate the example tools in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release"),", it is likely because you forgot to include the build option ",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--release"),"."),(0,r.kt)("h2",{id:"not-found-c-library-of-tquic"},"Not found C library of TQUIC?"),(0,r.kt)("p",null,"If you cannot locate the static or dynamic c library of tquic in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release"),", it is likely because you forgot to include the build option ",(0,r.kt)("inlineCode",{parentName:"p"},"-F ffi")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--release"),"."),(0,r.kt)("h2",{id:"how-to-specify-the-macos-deployment-target-for-tquic-library"},"How to specify the MacOS deployment target for TQUIC library?"),(0,r.kt)("p",null,"You can use the environment varialbe ",(0,r.kt)("inlineCode",{parentName:"p"},"MACOSX_DEPLOYMENT_TARGET")," to signal targeting older versions of macOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace `10.12` with your desired deployment target\nexport MACOSX_DEPLOYMENT_TARGET=10.12\ncargo build --release -F ffi\n")),(0,r.kt)("h2",{id:"how-to-optimize-library-file-size-for-tquic-on-mobile-platforms"},"How to optimize Library File Size for TQUIC on Mobile Platforms"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../further_readings/minimizing_size/"},"Library Size Optimization")))}p.isMDXComponent=!0}}]);