"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[5521],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>S,contentTitle:()=>O,default:()=>P,frontMatter:()=>C,metadata:()=>x,toc:()=>q});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2466),u=a(6550),s=a(1980),p=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:a,groupId:n}),[p,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??p;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),c(e)}),[s,c,l]),tabValues:l}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==l&&(d(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function I(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,n),hidden:a},t)}const C={title:"Installation",sidebar_position:1},O="Installation",x={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:"Supported Platforms",source:"@site/docs/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/docs/getting_started/installation",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/getting_started/installation.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1722503739,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Example tools",permalink:"/docs/getting_started/demo"}},S={},q=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building",id:"building",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Further readings",id:"further-readings",level:2},{value:"Problems?",id:"problems",level:2}],E={toc:q},D="wrapper";function P(e){let{components:t,...a}=e;return(0,l.kt)(D,(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("p",null,"TQUIC is written in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust language"),". Currently, it runs on Linux, MacOS, FreeBSD, Windows, iOS, and Android."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rust 1.70+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git 2.0+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/releases.html"},"gcc 9.3+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"cmake 3.22+"))),(0,l.kt)("h2",{id:"building"},"Building"),(0,l.kt)(w,{mdxType:"Tabs"},(0,l.kt)(I,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for Linux, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--all")," option enables cargo to build both the tquic library and example tools.")),(0,l.kt)("p",null,"If you want to enable the C API, just add ",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi")," option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(I,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for MacOS, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--all")," option enables cargo to build both the tquic library and example tools.")),(0,l.kt)("p",null,"If you want to enable the C API, just add ",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi")," option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(I,{value:"FreeBSD",label:"FreeBSD",mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for FreeBSD, you need the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pkg install -y gmake\n")),(0,l.kt)("p",null,"To build TQUIC for FreeBSD, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--all")," option enables cargo to build both the tquic library and example tools.")),(0,l.kt)("p",null,"If you want to enable the C API, just add ",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi")," option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(I,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for Windows, you need the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/zh-hans/"},"Install Visual Studio"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.nasm.us/"},"Install NASM")))),(0,l.kt)("p",null,"To build TQUIC for Windows, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},".\\target\\release\\"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},".\\target\\debug\\"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--all")," option enables cargo to build both the tquic library and example tools.")),(0,l.kt)("p",null,"If you want to enable the C API, just add ",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi")," option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(I,{value:"Android",label:"Android",mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for Android, you need the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/projects/install-ndk?hl=zh-cn"},"Install Android NDK")," and set the ",(0,l.kt)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME")," environment variable")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Set the ANDROID_NDK_HOME environment variable to the NDK installation path \nexport ANDROID_NDK_HOME=/path/to/android-ndk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Rust toolchain for Android and cargo-ndk")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Rust toolchain for Android\nrustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android\n\n# Install cargo-ndk for building libraries for Android without hassle\ncargo install cargo-ndk\n")),(0,l.kt)("p",null,"To build the TQUIC library, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\n# The -t <architecture> and -p <NDK version> options are mandatory.\ncargo ndk -t arm64-v8a -p 21 -- build --features ffi --release\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--features ffi")," option enables cargo to build the C API."))),(0,l.kt)(I,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,l.kt)("p",null,"To build TQUIC for iOS, you need the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Install Xcode")," and Xcode command-line tools")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Xcode command-line tools.\xa0\nxcode-select --install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Rust toolchain for iOS and cargo-lipo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the Rust toolchain for iOS\nrustup target add aarch64-apple-ios x86_64-apple-ios\n\xa0 \n# Install cargo-lipo for automatically creating universal libraries for iOS \ncargo install cargo-lipo\n")),(0,l.kt)("p",null,"To build the TQUIC library, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo lipo --features ffi --release\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--release")," option enables cargo to build optimized artifacts and put them in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/"),", instead of the default location ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"."),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--features ffi")," option enables cargo to build the C API.")))),(0,l.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,l.kt)("p",null,"The command below runs unit tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,l.kt)("h2",{id:"further-readings"},"Further readings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./demo/"},"How to use the demo client and demo server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../category/tutorial/"},"How to use the API of TQUIC"))),(0,l.kt)("h2",{id:"problems"},"Problems?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please refer to the ",(0,l.kt)("a",{parentName:"li",href:"../faq/installation/"},"documentation for common installation issues")," first."),(0,l.kt)("li",{parentName:"ul"},"Ask for help on our ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tencent/tquic/issues"},"GitHub issues"),".")))}P.isMDXComponent=!0}}]);