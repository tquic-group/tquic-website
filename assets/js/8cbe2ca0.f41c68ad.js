"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[2279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Example tools",sidebar_position:2},i="Example tools",l={unversionedId:"getting_started/demo",id:"getting_started/demo",title:"Example tools",description:"The example tools are built by adding an option --all to the cargo build command. They are generated and saved in the directory ./target/release/.",source:"@site/docs/getting_started/demo.md",sourceDirName:"getting_started",slug:"/getting_started/demo",permalink:"/docs/getting_started/demo",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/getting_started/demo.md",tags:[],version:"current",lastUpdatedBy:"xiaofei0800",lastUpdatedAt:1702529372,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:2,frontMatter:{title:"Example tools",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting_started/installation"},next:{title:"Next step",permalink:"/docs/getting_started/next"}},s={},d=[{value:"Server",id:"server",level:2},{value:"Run the quic server",id:"run-the-quic-server",level:3},{value:"More options",id:"more-options",level:3},{value:"Client",id:"client",level:2},{value:"Run the quic client",id:"run-the-quic-client",level:3},{value:"More options",id:"more-options-1",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-tools"},"Example tools"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The example tools are built by adding an option ",(0,a.kt)("inlineCode",{parentName:"p"},"--all")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build")," command. They are generated and saved in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"./target/release/"),".")),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("h3",{id:"run-the-quic-server"},"Run the quic server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_server -c cert.crt -k cert.key -l 127.0.0.1:8443\n")),(0,a.kt)("p",null,"The server is configured to listen on the address ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8443")," and act as an HTTP/3 file server."),(0,a.kt)("p",null,"The test certificate ",(0,a.kt)("inlineCode",{parentName:"p"},"cert.crt")," and private key ",(0,a.kt)("inlineCode",{parentName:"p"},"cert.key")," can be found in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/tls/testdata/"),". They can also be generated using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'openssl genpkey -algorithm RSA -out cert.key -pkeyopt rsa_keygen_bits:2048\nopenssl req -new -key cert.key -out cert.csr -subj "/C=CN/ST=beijing/L=beijing/O=tquic/CN=example.org"\nopenssl x509 -req -in cert.csr -signkey cert.key -out cert.crt\n')),(0,a.kt)("h3",{id:"more-options"},"More options"),(0,a.kt)("p",null,"You can explore different options by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," option for help information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_server -h\n")),(0,a.kt)("p",null,"The output is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: tquic_server [OPTIONS]\n\nOptions:\n  -c, --cert <FILE>\n          TLS certificate in PEM format [default: ./cert.crt]\n  -k, --key <FILE>\n          TLS private key in PEM format [default: ./cert.key]\n      --log-level <LOG_LEVEL>\n          Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]\n  -l, --listen <ADDR>\n          Address to listen [default: 0.0.0.0:4433]\n      --root <DIR>\n          Document root directory [default: ./]\n      --ticket-key <STR>\n          Session ticket key [default: "tquic key"]\n      --address-token-key <STR>\n          Key for generating address token\n      --enable-retry\n          Enable stateless retry\n      --disable-stateless-reset\n          Disable stateless reset\n      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>\n          Congestion control algorithm [default: CUBIC]\n      --enable-multipath\n          Enable multipath transport\n      --multipath-algor <MULTIPATH_ALGOR>\n          Multipath scheduling algorithm [default: MINRTT]\n      --recv-udp-payload-size <NUM>\n          Set max_udp_payload_size transport parameter [default: 65527]\n      --send-udp-payload-size <NUM>\n          Set the maximum outgoing UDP payload size [default: 1200]\n      --handshake-timeout <TIME>\n          Handshake timeout in microseconds [default: 10000]\n      --idle-timeout <TIME>\n          Connection idle timeout in microseconds [default: 30000]\n      --initial-rtt <TIME>\n          Initial RTT in milliseconds [default: 333]\n      --keylog-file <FILE>\n          Save TLS key log into the given file\n      --qlog-file <FILE>\n          Save QUIC qlog into the given file\n      --send-batch-size <NUM>\n          Batch size for sending packets [default: 16]\n  -h, --help\n          Print help\n')),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("h3",{id:"run-the-quic-client"},"Run the quic client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_client --connect-to 127.0.0.1:8443 https://example.org\n")),(0,a.kt)("h3",{id:"more-options-1"},"More options"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," option for help information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./tquic_client -h\n")),(0,a.kt)("p",null,"The output is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: tquic_client [OPTIONS] [URLS]...\n\nArguments:\n  [URLS]...  Request URLs. The host of the first one is used as SNI in Client Hello\n\nOptions:\n  -t, --threads <NUM>\n          Number of threads [default: 1]\n      --max-concurrent-conns <NUM>\n          Number of concurrent connections per thread [default: 1]\n      --max-requests-per-thread <NUM>\n          Number of requests per thread. "0" means infinity mode [default: 1]\n      --max-requests-per-conn <NUM>\n          Number of max requests per connection. "0" means infinity mode [default: 1]\n      --max-concurrent-requests <NUM>\n          Number of max concurrent requests per connection [default: 1]\n  -d, --duration <TIME>\n          Benchmarking duration in seconds. "0" means infinity mode. Client will exit if either the max_requests or duration is reached [default: 0]\n      --max-sample <NUM>\n          Number of max samples per thread used for request time statistics [default: 100000]\n  -p, --print-res\n          Print response header and body to stdout\n      --log-level <STR>\n          Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]\n  -c, --connect-to <ADDR>\n          Override server\'s address\n  -a, --alpn <STR>\n          ALPN, support "http/0.9", "hq-interop" and "h3", separated by "," [default: h3,http/0.9,hq-interop]\n      --dump-path <DIR>\n          Dump response body into the given directory. If the specified directory does not exist, a new directory will be created\n  -s, --session-file <FILE>\n          File used for session resumption\n  -e, --enable-early-data\n          Enable early data\n      --disable-stateless-reset\n          Disable stateless reset\n      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>\n          Congestion control algorithm [default: CUBIC]\n      --enable-multipath\n          Enable multipath transport\n      --multipath-algor <MULTIPATH_ALGOR>\n          Multipath scheduling algorithm [default: MINRTT]\n      --local-addresses <ADDR>\n          Extra local addresses for client\n      --recv-udp-payload-size <NUM>\n          Set max_udp_payload_size transport parameter [default: 65527]\n      --send-udp-payload-size <NUM>\n          Set the maximum outgoing UDP payload size [default: 1200]\n      --handshake-timeout <TIME>\n          Handshake timeout in microseconds [default: 10000]\n      --idle-timeout <TIME>\n          Connection idle timeout in microseconds [default: 30000]\n      --initial-rtt <TIME>\n          Initial RTT in milliseconds [default: 333]\n  -k, --keylog-file <FILE>\n          Save TLS key log into the given file\n      --qlog-file <FILE>\n          Save QUIC qlog into the given file\n      --send-batch-size <NUM>\n          Batch size for sending packets [default: 1]\n  -h, --help\n          Print help\n')))}u.isMDXComponent=!0}}]);