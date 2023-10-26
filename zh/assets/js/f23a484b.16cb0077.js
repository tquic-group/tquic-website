"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[2432],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return t?o.createElement(k,i(i({ref:n},u),{},{components:t})):o.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=t(7462),r=(t(7294),t(4137));const l={title:"\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3",sidebar_position:2},i="\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3",a={unversionedId:"tutorial/rust",id:"tutorial/rust",title:"\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3",description:"\u672c\u6587\u4ecb\u7ecd\u5e94\u7528\u7a0b\u5e8f\u5982\u4f55\u4f7f\u7528RUST\u8bed\u8a00\u7684TQUIC\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/rust.md",sourceDirName:"tutorial",slug:"/tutorial/rust",permalink:"/zh/docs/tutorial/rust",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/rust.md",tags:[],version:"current",lastUpdatedBy:"xiaofei0800",lastUpdatedAt:1698329259,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh/docs/tutorial/core_concepts"},next:{title:"\u4f7f\u7528C\u8bed\u8a00\u63a5\u53e3",permalink:"/zh/docs/tutorial/c"}},p={},s=[{value:"\u521b\u5efa\u7aef\u70b9",id:"\u521b\u5efa\u7aef\u70b9",level:2},{value:"\u7aef\u70b9\u7684\u914d\u7f6e",id:"\u7aef\u70b9\u7684\u914d\u7f6e",level:3},{value:"\u7aef\u70b9\u5de5\u4f5c\u6a21\u5f0f",id:"\u7aef\u70b9\u5de5\u4f5c\u6a21\u5f0f",level:3},{value:"\u4f20\u8f93\u56de\u8c03\u51fd\u6570",id:"\u4f20\u8f93\u56de\u8c03\u51fd\u6570",level:3},{value:"\u62a5\u6587\u53d1\u9001\u56de\u8c03\u51fd\u6570",id:"\u62a5\u6587\u53d1\u9001\u56de\u8c03\u51fd\u6570",level:3},{value:"\u63a5\u6536\u62a5\u6587",id:"\u63a5\u6536\u62a5\u6587",level:2},{value:"\u53d1\u9001\u62a5\u6587",id:"\u53d1\u9001\u62a5\u6587",level:2},{value:"\u5904\u7406\u8fde\u63a5",id:"\u5904\u7406\u8fde\u63a5",level:2},{value:"\u53d1\u8d77\u5ba2\u6237\u7aef\u8fde\u63a5",id:"\u53d1\u8d77\u5ba2\u6237\u7aef\u8fde\u63a5",level:2},{value:"\u6d41\u7684\u4f7f\u7528",id:"\u6d41\u7684\u4f7f\u7528",level:2},{value:"\u6d41\u521b\u5efa",id:"\u6d41\u521b\u5efa",level:3},{value:"\u6d41\u6570\u636e\u5199\u5165",id:"\u6d41\u6570\u636e\u5199\u5165",level:3},{value:"\u6d41\u6570\u636e\u8bfb\u53d6",id:"\u6d41\u6570\u636e\u8bfb\u53d6",level:3},{value:"0RTT\u5efa\u7acb\u8fde\u63a5",id:"0rtt\u5efa\u7acb\u8fde\u63a5",level:2},{value:"\u591a\u8bc1\u4e66\u652f\u6301",id:"\u591a\u8bc1\u4e66\u652f\u6301",level:2},{value:"\u62a5\u6587\u89e3\u5bc6\u5206\u6790",id:"\u62a5\u6587\u89e3\u5bc6\u5206\u6790",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528rust\u8bed\u8a00\u63a5\u53e3"},"\u4f7f\u7528Rust\u8bed\u8a00\u63a5\u53e3"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5e94\u7528\u7a0b\u5e8f\u5982\u4f55\u4f7f\u7528RUST\u8bed\u8a00\u7684TQUIC\u63a5\u53e3\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u7684\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\u53ef\u5728GitHub TQUIC\u4ee3\u7801\u5e93",(0,r.kt)("inlineCode",{parentName:"p"},"apps/src/bin/"),"\u76ee\u5f55\u627e\u5230\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.woa.com/tquic/tquic/blob/master/apps/src/bin/simple_client.rs"},"simple_client.rs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.woa.com/tquic/tquic/blob/master/apps/src/bin/simple_server.rs"},"simple_server.rs")))),(0,r.kt)("h2",{id:"\u521b\u5efa\u7aef\u70b9"},"\u521b\u5efa\u7aef\u70b9"),(0,r.kt)("p",null,"Endpoint\u7528\u4e8e\u7ba1\u7406QUIC\u8fde\u63a5\u3001\u5904\u7406\u5165\u62a5\u6587\u548c\u8c03\u5ea6\u53d1\u9001\u51fa\u62a5\u6587\u3002\u4f7f\u7528Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"\u65b9\u6cd5\u6765\u521b\u5efaEndpoint\u5b9e\u4f8b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"\u65b9\u6cd5\u7684\u5404\u4e2a\u53c2\u6570\u8be6\u89c1\u4e0b\u6587\u8bf4\u660e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new(\n    config: Box<crate::Config>,\n    is_server: bool,\n    handler: Box<dyn TransportHandler>,\n    sender: Rc<dyn PacketSendHandler>,\n) -> Self\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cTQUIC\u91c7\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u6765\u63a5\u6536\u548c\u53d1\u9001\u62a5\u6587\uff0c\u5b83\u5e76\u4e0d\u4f9d\u8d56\u4e8e\u5957\u63a5\u5b57\u3002\u76f8\u53cd\uff0cTQUIC\u901a\u8fc7\u7528\u6237\u63d0\u4f9b\u7684\u56de\u8c03\u6765\u5b9e\u73b0\u3002\u6b64\u5916\uff0cTQUIC\u6ca1\u6709\u5f3a\u52a0\u4efb\u4f55\u7279\u5b9a\u7684\u4e8b\u4ef6\u5faa\u73af\u8981\u6c42\u3002\u5b83\u63d0\u4f9b\u4e86\u5e2e\u52a9\u7528\u6237\u8c03\u5ea6\u4e8b\u4ef6\u7684\u51fd\u6570\u3002TQUIC\u7684\u7075\u6d3b\u6027\u4f7f\u5f97\u6613\u4e8e\u5728\u5404\u79cd\u7cfb\u7edf\u4e2d\u7684\u5b9a\u5236\u548c\u96c6\u6210\u3002")),(0,r.kt)("h3",{id:"\u7aef\u70b9\u7684\u914d\u7f6e"},"\u7aef\u70b9\u7684\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Config"),"\u7ef4\u62a4\u4e86\u5404\u79cd\u8fde\u63a5\u53c2\u6570\u7684\u914d\u7f6e\u3002\u4f7f\u7528Config\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"\u65b9\u6cd5\u521b\u5efa\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u5404\u7c7b\u8bbe\u7f6e\u65b9\u6cd5\u6765\u8fdb\u4e00\u6b65\u5b9a\u5236\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u521b\u5efa\u9ed8\u8ba4\u914d\u7f6e\nlet mut config = Config::new()?;\n\n// \u8bbe\u7f6e\u8fde\u63a5\u95f2\u7f6e\u8d85\u65f6\nconfig.set_max_idle_timeout(30000);\n\n// \u8bbe\u7f6e\u5e94\u7528\u534f\u8bae\nlet mut tls_config = TlsConfig::new()?;\ntls_config.set_application_protos(vec![b"h3".to_vec()]);\nconfig.set_tls_config(tls_config);\n')),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u9879\u8bf4\u660e\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/tquic/latest/tquic/struct.Config.html"},"Config\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u7aef\u70b9\u5de5\u4f5c\u6a21\u5f0f"},"\u7aef\u70b9\u5de5\u4f5c\u6a21\u5f0f"),(0,r.kt)("p",null,"Endpoint\u533a\u5206\u5ba2\u6237\u7aef/\u670d\u52a1\u7aef\u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"is_server"),"\u53c2\u6570\u6765\u6307\u5b9a\u89d2\u8272\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u540c\u65f6\u9700\u8981QUIC\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u529f\u80fd\uff0c\u5efa\u8bae\u5b9e\u4f8b\u5316\u4e24\u4e2a\u5355\u72ec\u7684\u7aef\u70b9\u3002"),(0,r.kt)("h3",{id:"\u4f20\u8f93\u56de\u8c03\u51fd\u6570"},"\u4f20\u8f93\u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"Endpoint\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"TransportHandler"),"\u4e2d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u901a\u77e5\u5e94\u7528\u5c42\u5904\u7406\u76f8\u5173\u7684QUIC\u8fde\u63a5/\u6d41\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub trait TransportHandler {\n    // \u5728\u65b0\u8fde\u63a5\u521b\u5efa\u65f6\u8c03\u7528\u3002\u8be5\u56de\u8c03\u51fd\u6570\u5728\u7aef\u70b9\u4e2d\u8fde\u63a5\u5bf9\u8c61\u521b\u5efa\u540e\u3001\u63e1\u624b\u5b8c\u6210\u4e4b\u524d\u8c03\u7528\u3002\n    // \u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u8fde\u63a5\u4e0a\u53d1\u90010RTT\u6570\u636e\u3002\n    fn on_conn_created(&mut self, conn: &mut Connection);\n\n    // \u5728\u8fde\u63a5\u63e1\u624b\u5b8c\u6210\u65f6\u8c03\u7528\n    fn on_conn_established(&mut self, conn: &mut Connection);\n\n    // \u5728\u8fde\u63a5\u5173\u95ed\u65f6\u8c03\u7528\u3002\u6b64\u56de\u8c03\u51fd\u6570\u8fd4\u56de\u540e\uff0c\u8fde\u63a5\u5c06\u4e0d\u518d\u53ef\u8bbf\u95ee\u3002\u6b64\u65f6\u53ef\u4ee5\u6e05\u7406\u8fde\u63a5\u4e0a\u4e0b\u6587\u3002\n    fn on_conn_closed(&mut self, conn: &mut Connection);\n\n    // \u5728\u6d41\u521b\u5efa\u65f6\u8c03\u7528\n    fn on_stream_created(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // \u5728\u6d41\u53ef\u8bfb\u65f6\u8c03\u7528\u3002\u5f53\u6d41\u4e0a\u6709\u6570\u636e\u9700\u8981\u8bfb\u53d6\u6216\u6709\u9519\u8bef\u53d1\u9001\u65f6\uff0c\u4f1a\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\n    fn on_stream_readable(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // \u5728\u6d41\u53ef\u5199\u65f6\u8c03\u7528\n    fn on_stream_writable(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // \u5f53\u6d41\u5173\u95ed\u65f6\u8c03\u7528\u3002\u6d41\u5728\u6b64\u56de\u8c03\u51fd\u6570\u8fd4\u56de\u540e\u5c06\u4e0d\u518d\u53ef\u8bbf\u95ee\u3002\u5728\u6b64\u51fd\u6570\u4e2d\u53ef\u4ee5\u6e05\u7406\u6d41\u7684\u4e0a\u4e0b\u6587\u3002\n    fn on_stream_closed(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // \u5f53\u5ba2\u6237\u7aef\u63a5\u6536\u5230NEW_TOKEN\u5e27\u65f6\u8c03\u7528\n    fn on_new_token(&mut self, conn: &mut Connection, token: Vec<u8>);\n}\n")),(0,r.kt)("h3",{id:"\u62a5\u6587\u53d1\u9001\u56de\u8c03\u51fd\u6570"},"\u62a5\u6587\u53d1\u9001\u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"Endpoint\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"PacketSendHandler"),"\u6765\u5b8c\u6210\u62a5\u6587\u7684\u53d1\u9001\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PacketSendHandler"),"\u4e2d\u5305\u542b\u4e86\u56de\u8c03\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"on_packets_send"),"\uff0c\u7528\u4e8e\u53d1\u9001\u6307\u5b9a\u7684\u591a\u4e2aUDP\u62a5\u6587\u5230\u7f51\u7edc\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub trait PacketSendHandler {\n    // \u6279\u91cf\u53d1\u9001\u62a5\u6587\n    fn on_packets_send(&self, pkts: &[(Vec<u8>, PacketInfo)]) -> Result<usize>;\n}\n")),(0,r.kt)("p",null,"\u4f60\u5728\u7a0d\u540e\u53ef\u4ee5\u770b\u5230\u793a\u4f8b\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u63a5\u6536\u62a5\u6587"},"\u63a5\u6536\u62a5\u6587"),(0,r.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u63a5\u6536\u7684UDP\u62a5\u6587\uff0c\u901a\u8fc7Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"recv"),"\u65b9\u6cd5\u9012\u4ea4\u7ed9Endpoint\u8fdb\u884c\u5904\u7406\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// \u8bfb\u53d6UDP\u6570\u636e\u62a5\nlet (len, remote) = match socket.recv_from(&mut recv_buf) {\n    Ok(v) => v,\n    Err(e) => {\n        if e.kind() == std::io::ErrorKind::WouldBlock {\n            break;\n        }\n        // \u5904\u7406\u9519\u8bef\n    }\n};\n\n// \u6784\u9020\u62a5\u6587\u53ca\u5176\u5143\u4fe1\u606f\nlet pkt_buf = &mut recv_buf[..len];\nlet pkt_info = PacketInfo {\n    src: remote, // \u62a5\u6587\u6765\u6e90\u5730\u5740\n    dst: socket.local_addr()?, // \u62a5\u6587\u76ee\u7684\u5730\u5740\n    time: Instant::now(), // \u62a5\u6587\u63a5\u6536\u65f6\u95f4\n};\n\n// \u9012\u4ea4\u81f3Endpoint\u5904\u7406\nmatch self.endpoint.recv(pkt_buf, &pkt_info) {\n    Ok(_) => {}\n    Err(e) => {\n        // \u9519\u8bef\u5904\u7406\n    }\n};\n")),(0,r.kt)("h2",{id:"\u53d1\u9001\u62a5\u6587"},"\u53d1\u9001\u62a5\u6587"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_packets_send"),"\u8d1f\u8d23\u5c06\u62a5\u6587\u6279\u91cf\u53d1\u9001\u5230\u7f51\u7edc\u4e2d\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"on_packet_send"),"\u5e94\u8fd4\u56de\u6210\u529f\u53d1\u9001\u7684\u62a5\u6587\u6570\u3002\u5982\u679c\u5b58\u5728\u9519\u8bef\u672a\u6210\u529f\u53d1\u9001\u7684\u62a5\u6587\uff0cEndpoint\u540e\u7eed\u4f1a\u91cd\u8bd5\u53d1\u9001\u5931\u8d25\u7684\u62a5\u6587\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_packets_send(&self, pkts: &[(Vec<u8>, PacketInfo)]) -> tquic::Result<usize> {\n    let mut count = 0;\n\n    for (pkt, info) in pkts {\n        if let Err(e) = self.socket.send_to(pkt, info.dst) {\n            if e.kind() == std::io::ErrorKind::WouldBlock {\n                return Ok(count);\n            }\n            // \u9519\u8bef\u5904\u7406\n        }\n        count += 1;\n    }\n    Ok(count)\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u91c7\u7528\u4e86recv_from/send_to\u6765\u9010\u4e00\u63a5\u6536/\u53d1\u9001\u62a5\u6587\u3002\u5efa\u8bae\u5e94\u7528\u7a0b\u5e8f\u91c7\u7528\u66f4\u9ad8\u6548\u7684\u673a\u5236\u6765\u6279\u91cf\u63a5\u6536/\u53d1\u9001\u62a5\u6587\u3002")),(0,r.kt)("h2",{id:"\u5904\u7406\u8fde\u63a5"},"\u5904\u7406\u8fde\u63a5"),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0b\u60c5\u51b5\uff0c\u7aef\u70b9\u9700\u8981\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"process_connections"),"\u6279\u91cf\u5bf9\u8fde\u63a5\u8fdb\u884c\u540e\u7f6e\u5904\u7406\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5904\u7406\u63a5\u6536\u7684\u62a5\u6587"),"\uff1a\u901a\u8fc7Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"recv"),"\u65b9\u6cd5\u5904\u7406\u4e86\u5165\u62a5\u6587"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5904\u7406\u8d85\u65f6\u4e8b\u4ef6"),"\uff1a\u901a\u8fc7Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"on_timeout"),"\u65b9\u6cd5\u5904\u7406\u4e86\u8d85\u65f6\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53d1\u8d77\u5ba2\u6237\u7aef\u8fde\u63a5"),"\uff1a\u5ba2\u6237\u7aef\u901a\u8fc7Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"connect"),"\u65b9\u6cd5\u53d1\u8d77\u8fde\u63a5")),(0,r.kt)("p",null,"\u5982\u4e0b\u793a\u4f8b\u4ee3\u7801\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/mio/latest/mio/struct.Poll.html"},"mio Poll"),"\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u6846\u67b6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// \u5ba2\u6237\u7aef\u5411\u53d1\u9001\u7aef\u53d1\u8d77\u8fde\u63a5\uff08\u4ec5\u9650\u5ba2\u6237\u7aef\uff09\nendpoint.connect(local, remote, server_name, session, token)?;\n\n// \u6267\u884c\u4e8b\u4ef6\u5faa\u73af\nlet mut events = mio::Events::with_capacity(1024);\nloop {\n    endpoint.process_connections()?;\n\n    // \u83b7\u53d6\u6700\u65e9\u8d85\u65f6\u65f6\u95f4\n    let timeout = endpoint.timeout();\n\n    // \u7b49\u5f85\u8d85\u65f6\u6216IO\u4e8b\u4ef6\u53d1\u751f\n    poll.poll(&mut events, timeout)?;\n\n    // \u5904\u7406\u8d85\u65f6\u4e8b\u4ef6\n    if events.is_empty() {\n        endpoint.on_timeout(Instant::now());\n        continue;\n    }\n\n    // \u5904\u7406IO\u4e8b\u4ef6\n    for event in events.iter() {\n        if event.is_readable() {\n            process_read_event()?;\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"\u53d1\u8d77\u5ba2\u6237\u7aef\u8fde\u63a5"},"\u53d1\u8d77\u5ba2\u6237\u7aef\u8fde\u63a5"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528Endpoint\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"\u65b9\u6cd5\u521b\u5efa\u5230\u670d\u52a1\u5668\u7684\u8fde\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub fn connect(\n    &mut self,\n    local: SocketAddr,\n    remote: SocketAddr,\n    server_name: Option<&str>,\n    session: Option<&[u8]>,\n    token: Option<&[u8]>\n) -> Result<u64>\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u6700\u5c0f\u5316\u5efa\u7acb\u65b0\u8fde\u63a5\u6240\u9700\u7684\u65f6\u95f4\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"session"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"\u53c2\u6570\u6765\u521b\u5efa0RTT\u8fde\u63a5\u3002\u5173\u4e8e\u5982\u4f55\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"session"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"#0rtt%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5"},"\u201c0RTT Connection\u201d\u7ae0\u8282"),"\u3002 "),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668\u7aef\uff0c\u5f53\u8fde\u63a5\u521b\u5efa\u65f6\uff0cEndpoint\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"on_conn_created"),"\u65b9\u6cd5\u6765\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u6d41\u7684\u4f7f\u7528"},"\u6d41\u7684\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u6d41\u521b\u5efa"},"\u6d41\u521b\u5efa"),(0,r.kt)("p",null,"QUIC\u534f\u8bae\u5141\u8bb8\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u521b\u5efa\u6d41\u3002\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528Connection\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"stream_new"),"\u65b9\u6cd5\u521b\u5efa\u6d41\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub fn stream_new(\n    &mut self,\n    stream_id: u64,\n    urgency: u8,\n    incremental: bool\n) -> Result<()>\n")),(0,r.kt)("p",null,"\u5176\u5bf9\u7aef\u5728\u6d41\u521b\u5efa\u65f6\uff0cEndpoint\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"on_stream_created"),"\u56de\u8c03\u51fd\u6570\u901a\u77e5\u5176\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("h3",{id:"\u6d41\u6570\u636e\u5199\u5165"},"\u6d41\u6570\u636e\u5199\u5165"),(0,r.kt)("p",null,"\u5f53\u6d41\u53ef\u5199\u65f6\uff0cEndpoint\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"on_stream_writable"),"\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5904\u7406\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7Connection\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"stream_write"),"\u65b9\u6cd5\u53d1\u9001\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub fn stream_write(\n    &mut self,\n    stream_id: u64,\n    buf: Bytes,\n    fin: bool\n) -> Result<usize>\n\n")),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"stream_write"),"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"Error::Done"),"\u9519\u8bef\uff0c\u8bf4\u660e\u7531\u4e8e\u6d41\u91cf\u63a7\u5236\u9650\u5236\u65e0\u6cd5\u5199\u5165\u66f4\u591a\u7684\u6570\u636e\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5728\u4e0b\u6b21\u6d41\u53ef\u5199\u65f6, \u7ee7\u7eed\u53d1\u9001\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u6d41\u6570\u636e\u8bfb\u53d6"},"\u6d41\u6570\u636e\u8bfb\u53d6"),(0,r.kt)("p",null,"\u5f53\u6d41\u53ef\u8bfb\u6216\u53d1\u9001\u9519\u8bef\u65f6\uff0cEndpoint\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"on_stream_readable"),"\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5904\u7406\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7Connection\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"stream_read"),"\u65b9\u6cd5\u8bfb\u53d6\u6570\u636e\u6216\u83b7\u53d6\u9519\u8bef\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub fn stream_read(\n    &mut self,\n    stream_id: u64,\n    out: &mut [u8]\n) -> Result<(usize, bool)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stream_read"),"\u8fd4\u56de\u5df2\u8bfb\u53d6\u5b57\u8282\u6570\u53ca\u6d41\u662f\u5426\u7ed3\u675f\u6807\u5fd7\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"stream_read"),"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"Error::Done"),"\u9519\u8bef\uff0c\u8bf4\u660e\u5f53\u524d\u5df2\u65e0\u53ef\u8bfb\u53d6\u6570\u636e\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5728\u4e0b\u6b21\u6d41\u53ef\u8bfb\u65f6, \u7ee7\u7eed\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u6d41\u76f8\u5173\u7684\u64cd\u4f5c\u63a5\u53e3\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/tquic/latest/tquic/struct.Connection.html"},"TQUIC\u63a5\u53e3\u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"0rtt\u5efa\u7acb\u8fde\u63a5"},"0RTT\u5efa\u7acb\u8fde\u63a5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5efa\u7acb\u65b0\u8fde\u63a5\u6240\u9700\u7684\u65f6\u95f4\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u7f13\u5b58\u6b64\u524d\u5230\u670d\u52a1\u7aef\u7684\u8fde\u63a5\u7684\u67d0\u4e9b\u53c2\u6570\uff0c\u5e76\u7528\u4e8e\u540e\u7eed\u4e0e\u670d\u52a1\u5668\u5efa\u7acb0-RTT\u8fde\u63a5\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u7acb\u5373\u53d1\u9001\u6570\u636e\uff0c\u800c\u65e0\u9700\u7b49\u5f85\u63e1\u624b\u5b8c\u6210\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u4fdd\u6301\u6b64\u524d\u8bbf\u95ee\u8fde\u63a5\u7684\u4f1a\u8bdd\u72b6\u6001\u4fe1\u606f\u53ca\u5730\u5740\u4ee4\u724c\u4fe1\u606f\u3002\u5e76\u5728\u65b0\u5efa\u8fde\u63a5\u65f6\u63d0\u4f9b\u8fd9\u4e9b\u4fe1\u606f\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_conn_closed(&mut self, conn: &mut Connection) {\n    if let Some(session_file) = &self.session_file {\n        // \u83b7\u53d6\u4f1a\u8bdd\u4fe1\u606f\u5e76\u4fdd\u5b58\uff0c\u5305\u542b\u4e86TLS\u4f1a\u8bdd\u4fe1\u606f\u53caQUIC\u4f20\u8f93\u53c2\u6570\u4fe1\u606f\n        if let Some(session) = conn.session() {\n            std::fs::write(session_file, session).ok();\n        }\n    }\n}\n\n\nfn on_new_token(&mut self, conn: &mut Connection, token: Vec<u8>);\n    if let Some(token_file) = &self.token_file {\n        // \u4fdd\u5b58\u5730\u5740\u4ee4\u724c\u4fe1\u606f\n        std::fs::write(token_file, &token).ok()\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Client try to create a 0RTT connection.\nlet c = endpoint.connect(self, local, remote, server_name, session, token)?;\n")),(0,r.kt)("h2",{id:"\u591a\u8bc1\u4e66\u652f\u6301"},"\u591a\u8bc1\u4e66\u652f\u6301"),(0,r.kt)("p",null,"TQUIC\u652f\u6301\u6839\u636eSNI\u9009\u62e9\u4e0d\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TLSConfig"),"\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"TlsConfigSelector"),"\u7279\u5f81\u6765\u9009\u62e9\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait TlsConfigSelector: Send + Sync {\n    // \u83b7\u53d6\u9ed8\u8ba4TLS\u914d\u7f6e\n    fn get_default(&self) -> Option<&TlsConfig>;\n\n    // \u6839\u636eSNI\u9009\u62e9TLS\u914d\u7f6e\n    fn select(&self, server_name: &str) -> Option<&TlsConfig>;\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u901a\u8fc7Config\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"set_tls_config_selector"),"\u65b9\u6cd5\u6765\u8bbe\u7f6e\u81ea\u5b9a\u4e49TLSConfig\u9009\u62e9\u5668\u3002"),(0,r.kt)("h2",{id:"\u62a5\u6587\u89e3\u5bc6\u5206\u6790"},"\u62a5\u6587\u89e3\u5bc6\u5206\u6790"),(0,r.kt)("p",null,"TQUIC\u652f\u6301\u4ee5",(0,r.kt)("a",{parentName:"p",href:"https://udn.realityripple.com/docs/Mozilla/Projects/NSS/Key_Log_Format"},"NSS key log"),"\u683c\u5f0f\u5bfc\u51faTLS\u5bc6\u94a5\uff0c\u4ee5\u4fbf",(0,r.kt)("a",{parentName:"p",href:"https://www.wireshark.org/"},"Wireshark"),"\u7b49\u5de5\u5177\u5bf9QUIC\u62a5\u6587\u89e3\u5bc6\u53ca\u5206\u6790\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7Connection\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"set_keylog"),"\u65b9\u6cd5\u6765\u6307\u5b9a\u5bc6\u94a5\u65e5\u5fd7\u6587\u4ef6\u7684\u8f93\u51fa\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_conn_created(&mut self, conn: &mut Connection) {\n    // \u8bbe\u7f6e\u5bc6\u94a5\u65e5\u5fd7\n    if let Some(keylog_file) = &self.keylog_file {\n        if let Ok(file) = std::fs::OpenOptions::new()\n            .create(true)\n            .append(true)\n            .open(keylog_file)\n        {\n            conn.set_keylog(Box::new(file));\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);