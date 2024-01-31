"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[5510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>q,frontMatter:()=>T,metadata:()=>x,toc:()=>S});var n=a(7462),r=a(7294),l=a(3905),i=a(6010),o=a(2466),u=a(6550),s=a(1980),c=a(7392),p=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=k({queryString:a,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}const O={tabItem:"tabItem_Ymn6"};function w(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(O.tabItem,n),hidden:a},t)}const T={title:"\u5b89\u88c5",sidebar_position:1},I="\u5b89\u88c5",x={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"\u5b89\u88c5",description:"\u652f\u6301\u5e73\u53f0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/zh/docs/getting_started/installation",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/getting_started/installation.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1706702377,formattedLastUpdatedAt:"2024\u5e741\u670831\u65e5",sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/zh/docs/category/getting-started"},next:{title:"\u793a\u4f8b\u5de5\u5177",permalink:"/zh/docs/getting_started/demo"}},E={},S=[{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",id:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",level:2},{value:"\u8fdb\u4e00\u6b65\u4e86\u89e3",id:"\u8fdb\u4e00\u6b65\u4e86\u89e3",level:2},{value:"\u9047\u5230\u95ee\u9898?",id:"\u9047\u5230\u95ee\u9898",level:2}],D={toc:S},_="wrapper";function q(e){let{components:t,...a}=e;return(0,l.kt)(_,(0,n.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h2",{id:"\u652f\u6301\u5e73\u53f0"},"\u652f\u6301\u5e73\u53f0"),(0,l.kt)("p",null,"TQUIC\u57fa\u4e8eRust\u8bed\u8a00\u5f00\u53d1\uff0c\u76ee\u524d\u652f\u6301Linux\u3001MacOS\u3001FreeBSD\u3001iOS\u3001Android\u5e73\u53f0\uff0c\u540e\u7eed\u7248\u672c\u5c06\u652f\u6301\u5176\u4ed6\u5e73\u53f0\u3002"),(0,l.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rust 1.70+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git 2.0+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/releases.html"},"gcc 9.3+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"cmake 3.22+"))),(0,l.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.kt)(C,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u6307\u5b9acargo\u7f16\u8bd1\u4f18\u5316\u7248\u672c\uff0c\u7f16\u8bd1\u7ed3\u679c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/")," \u76ee\u5f55\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"\u76ee\u5f55\u3002\n\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--all"),"\u6307\u5b9acargo\u7f16\u8bd1TQUIC\u534f\u8bae\u5e93\u53ca\u793a\u4f8b\u5de5\u5177")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u542f\u7528C\u8bed\u8a00\u63a5\u53e3\uff0c\u8bf7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build"),"\u547d\u4ee4\u540e\u6dfb\u52a0\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(w,{value:"MacOS",label:"MacOS",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u6307\u5b9acargo\u7f16\u8bd1\u4f18\u5316\u7248\u672c\uff0c\u7f16\u8bd1\u7ed3\u679c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/")," \u76ee\u5f55\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"\u76ee\u5f55\u3002\n\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--all"),"\u6307\u5b9acargo\u7f16\u8bd1TQUIC\u534f\u8bae\u5e93\u53ca\u793a\u4f8b\u5de5\u5177")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u542f\u7528C\u8bed\u8a00\u63a5\u53e3\uff0c\u8bf7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build"),"\u547d\u4ee4\u540e\u6dfb\u52a0\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(w,{value:"FreeBSD",label:"FreeBSD",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u7f16\u8bd1FreeBSD\u5e73\u53f0\u7684TQUIC\u5e93\uff0c\u4f60\u9700\u8981\u989d\u5916\u5b89\u88c5\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pkg install -y gmake\n")),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo build --release --all\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u6307\u5b9acargo\u7f16\u8bd1\u4f18\u5316\u7248\u672c\uff0c\u7f16\u8bd1\u7ed3\u679c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/")," \u76ee\u5f55\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"\u76ee\u5f55\u3002\n\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--all"),"\u6307\u5b9acargo\u7f16\u8bd1TQUIC\u534f\u8bae\u5e93\u53ca\u793a\u4f8b\u5de5\u5177")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u542f\u7528C\u8bed\u8a00\u63a5\u53e3\uff0c\u8bf7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build"),"\u547d\u4ee4\u540e\u6dfb\u52a0\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"-F ffi"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -F ffi\n"))),(0,l.kt)(w,{value:"Android",label:"Android",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u7f16\u8bd1Android\u5e73\u53f0\u7684TQUIC\u5e93\uff0c\u4f60\u9700\u8981\u989d\u5916\u5b89\u88c5\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/projects/install-ndk?hl=zh-cn"},"\u5b89\u88c5Android NDK"),"\u5e76\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u73af\u5883\u53d8\u91cfANDROID_NDK_HOME\u8bbe\u7f6e\u4e3aNDK\u5b89\u88c5\u8def\u5f84\nexport ANDROID_NDK_HOME=/path/to/android-ndk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5Rust Android\u5de5\u5177\u94fe\u548ccargo-ndk")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5Rust Android\u5de5\u5177\u94fe\nrustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android\n\n# \u5b89\u88c5cargo-ndk\u4ee5\u4fbf\u7b80\u5355\u7f16\u8bd1Android\u5e93\ncargo install cargo-ndk\n")),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\n# \u5fc5\u987b\u6307\u5b9a\u9009\u9879-t <architecture> \u548c-p <NDK version>\ncargo ndk -t arm64-v8a -p 21 -- build --features ffi --release\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u6307\u5b9acargo\u7f16\u8bd1\u4f18\u5316\u7248\u672c\uff0c\u7f16\u8bd1\u7ed3\u679c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/")," \u76ee\u5f55\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"\u76ee\u5f55\u3002\n\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--features ffi"),"\u6307\u5b9acargo\u7f16\u8bd1C\u63a5\u53e3\u5e93"))),(0,l.kt)(w,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u7f16\u8bd1iOS\u5e73\u53f0\u7684TQUIC\u5e93\uff0c\u4f60\u9700\u8981\u989d\u5916\u5b89\u88c5\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"\u5b89\u88c5Xcode"),"\u548cXcode\u547d\u4ee4\u884c\u5de5\u5177")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5Xcode\u547d\u4ee4\u884c\u5de5\u5177 \nxcode-select --install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5Rust iOS\u5de5\u5177\u94fe\u548ccargo-lipo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5Rust iOS\u5de5\u5177\u94fe\nrustup target add aarch64-apple-ios x86_64-apple-ios\n \n# \u5b89\u88c5cargo-lipo\u4ee5\u4fbf\u81ea\u52a8\u521b\u5efaiOS\u901a\u7528\u5e93\ncargo install cargo-lipo\n")),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tencent/tquic --recursive\ncd tquic\n\ncargo lipo --features ffi --release\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u6307\u5b9acargo\u7f16\u8bd1\u4f18\u5316\u7248\u672c\uff0c\u7f16\u8bd1\u7ed3\u679c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release/")," \u76ee\u5f55\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./target/debug/"),"\u76ee\u5f55\u3002\n\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--features ffi"),"\u6307\u5b9acargo\u7f16\u8bd1C\u63a5\u53e3\u5e93")))),(0,l.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b"},"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,l.kt)("h2",{id:"\u8fdb\u4e00\u6b65\u4e86\u89e3"},"\u8fdb\u4e00\u6b65\u4e86\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./demo/"},"\u5982\u4f55\u4f7f\u7528\u793a\u4f8b\u5ba2\u6237\u7aef/\u670d\u52a1\u7aef\u5de5\u5177")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../category/tutorial/"},"\u5982\u4f55\u4f7f\u7528TQUIC API"))),(0,l.kt)("h2",{id:"\u9047\u5230\u95ee\u9898"},"\u9047\u5230\u95ee\u9898?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"../faq/installation/"},"\u5e38\u89c1\u5b89\u88c5\u95ee\u9898")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tencent/tquic/issues"},"GitHub issues"),"\u63d0\u95ee\u5bfb\u6c42\u5e2e\u52a9\u3002")))}q.isMDXComponent=!0}}]);