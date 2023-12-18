"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[1573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Benchmark",sidebar_position:2},i="Performance benchmarking",s={unversionedId:"further_readings/benchmark",id:"further_readings/benchmark",title:"Benchmark",description:"Methods for testing",source:"@site/docs/further_readings/benchmark.md",sourceDirName:"further_readings",slug:"/further_readings/benchmark",permalink:"/docs/further_readings/benchmark",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/further_readings/benchmark.md",tags:[],version:"current",lastUpdatedBy:"xiaofei0800",lastUpdatedAt:1702611744,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:2,frontMatter:{title:"Benchmark",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/docs/further_readings/comparison"},next:{title:"Conformance",permalink:"/docs/further_readings/conformance"}},l={},c=[{value:"Methods for testing",id:"methods-for-testing",level:2},{value:"Testbed",id:"testbed",level:3},{value:"Scenarios tested",id:"scenarios-tested",level:3},{value:"Results",id:"results",level:2},{value:"Long connection scenario",id:"long-connection-scenario",level:3},{value:"Short connection scenario",id:"short-connection-scenario",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Server configurations",id:"server-configurations",level:3},{value:"Client configurations",id:"client-configurations",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance-benchmarking"},"Performance benchmarking"),(0,a.kt)("h2",{id:"methods-for-testing"},"Methods for testing"),(0,a.kt)("p",null,"The purpose of this document is to evaluate the performance of the TQUIC library and compare it with that of several widely used ",(0,a.kt)("a",{parentName:"p",href:"/docs/further_readings/comparison"},"QUIC implementations"),".\nIt is important to note that there are numerous QUIC implementations currently available in the industry. However, we only selected some of them for comparison. The primary reasons for our choices are detailed in ",(0,a.kt)("a",{parentName:"p",href:"/docs/further_readings/comparison"},"this article"),"."),(0,a.kt)("h3",{id:"testbed"},"Testbed"),(0,a.kt)("p",null,"The detailed parameters of the test machine are as follows. Both the client and server programs are deployed on the same machine, but assigned to different CPU cores in order to prevent interference. The deployment allows for easy automation of benchmarking."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"AMD EPYC 7K62 48-Core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory"),(0,a.kt)("td",{parentName:"tr",align:null},"512G")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disk"),(0,a.kt)("td",{parentName:"tr",align:null},"SSSTC ER2-GD480")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux 4.14")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Server-side Setup"),": The server example programs from each QUIC implementation are chosen for testing, using the most recent stable version, as described below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core Maintainers"),(0,a.kt)("th",{parentName:"tr",align:null},"QUIC Implementations"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google"),(0,a.kt)("td",{parentName:"tr",align:null},"QUICHE-G ",(0,a.kt)("a",{parentName:"td",href:"https://chromium.googlesource.com/chromium/src.git/+/refs/tags/118.0.5983.1"},"v118.0.5983.1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},"NGINX-QUIC ",(0,a.kt)("a",{parentName:"td",href:"http://nginx.org/en/download.html"},"v1.25.2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloudflare"),(0,a.kt)("td",{parentName:"tr",align:null},"QUICHE-CF ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/cloudflare/quiche/releases/tag/0.18.0"},"v0.18.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LiteSpeed"),(0,a.kt)("td",{parentName:"tr",align:null},"LSQUIC ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/litespeedtech/lsquic/releases/tag/v4.0.1"},"v4.0.1"))))),(0,a.kt)("p",null,"The application logic of each server program is simplified to reflect the actual processing overhead of the QUIC stack as closely as possible. For example, the server program from LSQUIC uses regular expressions to extract the file path from the request, which introduces certain performance overhead. Therefore, we have opted to replace the regular expression matching with simple string matching."),(0,a.kt)("p",null,"Each server program is compiled in release mode and configured to run in single-thread mode. For detailed configuration parameters, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/further_readings/benchmark#appendix"},"Appendix"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client-side Setup"),": The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic/tools/src/bin/tquic_client.rs"},"TQUIC client")," is used as a stress testing tool due to its highly flexible parameters, and support for multiple threads, which helps increase the pressure to a test server."),(0,a.kt)("h3",{id:"scenarios-tested"},"Scenarios tested"),(0,a.kt)("p",null,"The application layer protocol used for testing was HTTP/3, while various typical scenarios were tested, including web browsing, image loading, and video playback. We conducted tests in both long connection and short connection scenarios. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Long connection scenario"),": The purpose of the scenario is to test the protocol stack's capacity for handling requests by constantly sending multiple requests per connection. The selected sizes of page, image, and video files were 5KB, 15KB, and 2MB respectively according to the median statistics from the ",(0,a.kt)("a",{parentName:"p",href:"https://httparchive.org/reports/page-weight#bytesHtml"},"HTTP Archive"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Short connection scenario"),": The purpose of the scenario is to test the protocol stack's capacity for handshake by sending only one request per connection. Additionally, we intentionally selected a relatively small response size of 1KB."))),(0,a.kt)("p",null,"The RPS (number of successful requests per second) of each implementation is compared under extreme pressure, while all implementations achieve a maximum CPU utilization rate of 100% (unless otherwise noted)."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The future work may involve the addition of more complex test scenarios.")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("h3",{id:"long-connection-scenario"},"Long connection scenario"),(0,a.kt)("p",null,"As shown below, TQUIC outperforms the other implementations under various conditions. For example, TQUIC is four to five times faster than the most widely used QUICHE-G;\nThe performance of TQUIC consistently surpasses that of LSQUIC under various conditions, by up to 20%, despite the fact that LSQUIC is written in C and considered the best performing among these alternative implementations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"15K",src:r(5056).Z,width:"540",height:"360"}),"\n",(0,a.kt)("img",{alt:"50K",src:r(4370).Z,width:"540",height:"360"}),"\n",(0,a.kt)("img",{alt:"2M",src:r(418).Z,width:"540",height:"360"})),(0,a.kt)("h3",{id:"short-connection-scenario"},"Short connection scenario"),(0,a.kt)("p",null,"TQUIC outperforms the other implementations by at least 20% in the short connection scenario, as shown in the figure below.\nNote that the CPU consumption of QUICHE-G and LSQUIC is 30% and 60%, respectively, and the CPU consumption of the other implementations is 100%."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1K",src:r(2790).Z,width:"540",height:"360"})),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("h3",{id:"server-configurations"},"Server configurations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"QUICHE-G")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./quic_server --port=${port} --quic_response_cache_dir=${file_dir} \\\n     --certificate_file=server.crt --key_file=server.pkcs8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NGINX-QUIC")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"events {\n    worker_connections 100000;\n}\n\nhttp {\n    access_log off;\n    server {\n        listen ${port} quic reuseport;\n        keepalive_requests 1000000;\n        ssl_certificate server.crt;\n        ssl_certificate_key server.key;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\n        root ${file_dir};\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"QUICHE-CF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./quiche-server --listen [::]:${port} --root ${file_dir} \\\n    --cert server.crt --key server.key --disable-gso --no-retry\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LSQUIC")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./http_server -c example.org,server.crt,server.key -s 0.0.0.0:${port} -r ${file_dir}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TQUIC")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./server  -l 0.0.0.0:${port} --log-level OFF --root ${file_dir} -c server.crt -k server.key\n")),(0,a.kt)("h3",{id:"client-configurations"},"Client configurations"),(0,a.kt)("p",null,"The command for stress tests is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./client -p --max-requests-per-thread 0 --log-level OFF --disable-stateless-reset \\\n    --threads ${threads} \\\n    --max-concurrent-conns ${max_concurrent_conns} \\\n    --max-requests-per-conn ${max_requests_per_conn} \\\n    --max-concurrent-requests ${max_concurrent_requests} \\\n    --send-udp-payload-size ${send_udp_payload_size} \\\n    --duration ${duration} \\\n    --handshake-timeout ${handshake_timeout} \\\n    --idle-timeout ${idle_timeout} \\\n    https://${host}:${port}/${file}\n")),(0,a.kt)("p",null,"The parameters' meanings are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"threads"),": The number of threads to use."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max_concurrent_conns"),": The number of concurrent connections maintained per thread."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max_requests_per_conn"),": The maximum number of requests per connection. 0 means no limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max_concurrent_requests"),": The number of concurrent streams per connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"recv_udp_payload_size"),": Specify the ",(0,a.kt)("inlineCode",{parentName:"li"},"max_udp_payload_size")," transport parameter. The value for the tests is 1350."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration"),"\uff1aThe duration for testing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"handshake_timeout"),": The handshake timeout. The value for the tests is 5 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"idle_timeout"),"\uff1aThe connection idle timeout. The value for the tests is 5 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"host"),"\uff1aThe listening address for the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port"),"\uff1aThe listening port for the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"file"),"\uff1aThe requested resource by the client.")))}d.isMDXComponent=!0},5056:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/benchmark_long_15k-98da5bce63503f580dc9062904c02449.png"},418:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/benchmark_long_2m-7b86a9004fefa8b5ffcfee57c76f549a.png"},4370:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/benchmark_long_50k-c35679ad3c272a4e614a43acf93dcd18.png"},2790:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/benchmark_short-00af76da7acc46fe38b59de75c08aa9f.png"}}]);