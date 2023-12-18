"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[5068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={title:"\u793a\u4f8b\u5de5\u5177",sidebar_position:2},o="\u793a\u4f8b\u5de5\u5177",l={unversionedId:"getting_started/demo",id:"getting_started/demo",title:"\u793a\u4f8b\u5de5\u5177",description:"\u8bf7\u5728cargo build\u547d\u4ee4\u540e\u6dfb\u52a0--all\u53c2\u6570\u6765\u7f16\u8bd1\u793a\u4f8b\u5de5\u5177\uff0c\u7f16\u8bd1\u7684\u793a\u4f8b\u5de5\u5177\u4f4d\u4e8e\u76ee\u5f55./target/release/\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting_started/demo.md",sourceDirName:"getting_started",slug:"/getting_started/demo",permalink:"/zh/docs/getting_started/demo",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/getting_started/demo.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1702640369,formattedLastUpdatedAt:"2023\u5e7412\u670815\u65e5",sidebarPosition:2,frontMatter:{title:"\u793a\u4f8b\u5de5\u5177",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/docs/getting_started/installation"},next:{title:"\u4e0b\u4e00\u6b65",permalink:"/zh/docs/getting_started/next"}},s={},d=[{value:"Server",id:"server",level:2},{value:"\u8fd0\u884cquic server",id:"\u8fd0\u884cquic-server",level:3},{value:"\u66f4\u591a\u9009\u9879",id:"\u66f4\u591a\u9009\u9879",level:3},{value:"Client",id:"client",level:2},{value:"\u8fd0\u884cquic client",id:"\u8fd0\u884cquic-client",level:3},{value:"\u66f4\u591a\u9009\u9879",id:"\u66f4\u591a\u9009\u9879-1",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u793a\u4f8b\u5de5\u5177"},"\u793a\u4f8b\u5de5\u5177"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf7\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"cargo build"),"\u547d\u4ee4\u540e\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"--all"),"\u53c2\u6570\u6765\u7f16\u8bd1\u793a\u4f8b\u5de5\u5177\uff0c\u7f16\u8bd1\u7684\u793a\u4f8b\u5de5\u5177\u4f4d\u4e8e\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"./target/release/"),"\u3002")),(0,i.kt)("h2",{id:"server"},"Server"),(0,i.kt)("h3",{id:"\u8fd0\u884cquic-server"},"\u8fd0\u884cquic server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_server -c cert.crt -k cert.key -l 127.0.0.1:8443\n")),(0,i.kt)("p",null,"\u670d\u52a1\u7aef\u76d1\u542c\u5730\u5740\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8443"),"\uff0c\u4f5c\u4e3aHTTP/3\u6587\u4ef6\u670d\u52a1\u5668\u3002"),(0,i.kt)("p",null,"\u6d4b\u8bd5\u8bc1\u4e66",(0,i.kt)("inlineCode",{parentName:"p"},"cert.crt"),"\u548c\u79c1\u94a5",(0,i.kt)("inlineCode",{parentName:"p"},"cert.key"),"\u53ef\u4ee5\u5728\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"./src/tls/testdata/"),"\u4e2d\u627e\u5230\u3002\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u751f\u6210:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'openssl genpkey -algorithm RSA -out cert.key -pkeyopt rsa_keygen_bits:2048\nopenssl req -new -key cert.key -out cert.csr -subj "/C=CN/ST=beijing/L=beijing/O=tquic/CN=example.org"\nopenssl x509 -req -in cert.csr -signkey cert.key -out cert.crt\n')),(0,i.kt)("h3",{id:"\u66f4\u591a\u9009\u9879"},"\u66f4\u591a\u9009\u9879"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4e0d\u540c\u7684\u9009\u9879\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u53c2\u6570\u67e5\u770b\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_server -h\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u4fe1\u606f\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Usage: tquic_server [OPTIONS]\n\nOptions:\n  -c, --cert <FILE>\n          TLS certificate in PEM format [default: ./cert.crt]\n  -k, --key <FILE>\n          TLS private key in PEM format [default: ./cert.key]\n      --log-level <LOG_LEVEL>\n          Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]\n  -l, --listen <ADDR>\n          Address to listen [default: 0.0.0.0:4433]\n      --root <DIR>\n          Document root directory [default: ./]\n      --ticket-key <STR>\n          Session ticket key [default: "tquic key"]\n      --address-token-key <STR>\n          Key for generating address token\n      --enable-retry\n          Enable stateless retry\n      --disable-stateless-reset\n          Disable stateless reset\n      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>\n          Congestion control algorithm [default: CUBIC]\n      --initial-congestion-window <NUM>\n          Initial congestion window in packets [default: 32]\n      --min-congestion-window <NUM>\n          Minimum congestion window in packets [default: 4]\n      --enable-multipath\n          Enable multipath transport\n      --multipath-algor <MULTIPATH_ALGOR>\n          Multipath scheduling algorithm [default: MINRTT]\n      --recv-udp-payload-size <NUM>\n          Set max_udp_payload_size transport parameter [default: 65527]\n      --send-udp-payload-size <NUM>\n          Set the maximum outgoing UDP payload size [default: 1200]\n      --handshake-timeout <TIME>\n          Handshake timeout in microseconds [default: 10000]\n      --idle-timeout <TIME>\n          Connection idle timeout in microseconds [default: 30000]\n      --initial-rtt <TIME>\n          Initial RTT in milliseconds [default: 333]\n      --keylog-file <FILE>\n          Save TLS key log into the given file\n      --qlog-file <FILE>\n          Save QUIC qlog into the given file\n      --send-batch-size <NUM>\n          Batch size for sending packets [default: 16]\n  -h, --help\n          Print help\n')),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("h3",{id:"\u8fd0\u884cquic-client"},"\u8fd0\u884cquic client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_client --connect-to 127.0.0.1:8443 https://example.org\n")),(0,i.kt)("h3",{id:"\u66f4\u591a\u9009\u9879-1"},"\u66f4\u591a\u9009\u9879"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u9009\u9879\u67e5\u770b\u5e2e\u52a9\u4fe1\u606f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_client -h\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u4fe1\u606f\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Usage: tquic_client [OPTIONS] [URLS]...\n\nArguments:\n  [URLS]...  Request URLs. The host of the first one is used as SNI in Client Hello\n\nOptions:\n  -t, --threads <NUM>\n          Number of threads [default: 1]\n      --max-concurrent-conns <NUM>\n          Number of concurrent connections per thread [default: 1]\n      --max-requests-per-thread <NUM>\n          Number of requests per thread. "0" means infinity mode [default: 1]\n      --max-requests-per-conn <NUM>\n          Number of max requests per connection. "0" means infinity mode [default: 1]\n      --max-concurrent-requests <NUM>\n          Number of max concurrent requests per connection [default: 1]\n  -d, --duration <TIME>\n          Benchmarking duration in seconds. "0" means infinity mode. Client will exit if either the max_requests or duration is reached [default: 0]\n      --max-sample <NUM>\n          Number of max samples per thread used for request time statistics [default: 100000]\n  -p, --print-res\n          Print response header and body to stdout\n      --log-level <STR>\n          Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]\n  -c, --connect-to <ADDR>\n          Override server\'s address\n  -a, --alpn <STR>\n          ALPN, support "http/0.9", "hq-interop" and "h3", separated by "," [default: h3,http/0.9,hq-interop]\n      --dump-path <DIR>\n          Dump response body into the given directory. If the specified directory does not exist, a new directory will be created\n  -s, --session-file <FILE>\n          File used for session resumption\n  -e, --enable-early-data\n          Enable early data\n      --disable-stateless-reset\n          Disable stateless reset\n      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>\n          Congestion control algorithm [default: CUBIC]\n      --initial-congestion-window <NUM>\n          Initial congestion window in packets [default: 32]\n      --min-congestion-window <NUM>\n          Minimum congestion window in packets [default: 4]\n      --enable-multipath\n          Enable multipath transport\n      --multipath-algor <MULTIPATH_ALGOR>\n          Multipath scheduling algorithm [default: MINRTT]\n      --local-addresses <ADDR>\n          Extra local addresses for client\n      --recv-udp-payload-size <NUM>\n          Set max_udp_payload_size transport parameter [default: 65527]\n      --send-udp-payload-size <NUM>\n          Set the maximum outgoing UDP payload size [default: 1200]\n      --handshake-timeout <TIME>\n          Handshake timeout in microseconds [default: 10000]\n      --idle-timeout <TIME>\n          Connection idle timeout in microseconds [default: 30000]\n      --initial-rtt <TIME>\n          Initial RTT in milliseconds [default: 333]\n  -k, --keylog-file <FILE>\n          Save TLS key log into the given file\n      --qlog-file <FILE>\n          Save QUIC qlog into the given file\n      --send-batch-size <NUM>\n          Batch size for sending packets [default: 1]\n  -h, --help\n          Print help\n')))}p.isMDXComponent=!0}}]);