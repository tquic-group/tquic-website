"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[4168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const a={title:"Using the Rust API",sidebar_position:1},r="Using the RUST API",s={unversionedId:"tutorial/rust",id:"tutorial/rust",title:"Using the Rust API",description:"This tutorial describes how to use the TQUIC RUST API.",source:"@site/docs/tutorial/rust.md",sourceDirName:"tutorial",slug:"/tutorial/rust",permalink:"/docs/tutorial/rust",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/rust.md",tags:[],version:"current",lastUpdatedBy:"xiaofei0800",lastUpdatedAt:1701774590,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:1,frontMatter:{title:"Using the Rust API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core concepts",permalink:"/docs/tutorial/core_concepts"},next:{title:"Using the C API",permalink:"/docs/tutorial/c"}},l={},c=[{value:"Endpoint Instantiation",id:"endpoint-instantiation",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Work mode",id:"work-mode",level:3},{value:"TransportHandler",id:"transporthandler",level:3},{value:"PacketSendHandler",id:"packetsendhandler",level:3},{value:"Receiving packets",id:"receiving-packets",level:2},{value:"Sending packets",id:"sending-packets",level:2},{value:"Process connections",id:"process-connections",level:2},{value:"Client connection initiation",id:"client-connection-initiation",level:2},{value:"Using Stream",id:"using-stream",level:2},{value:"Creating streams",id:"creating-streams",level:3},{value:"Writing to streams",id:"writing-to-streams",level:3},{value:"Reading from streams",id:"reading-from-streams",level:3},{value:"0RTT Connection",id:"0rtt-connection",level:2},{value:"Using multiply cerificates",id:"using-multiply-cerificates",level:2},{value:"Packets decryption",id:"packets-decryption",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-rust-api"},"Using the RUST API"),(0,i.kt)("p",null,"This tutorial describes how to use the TQUIC RUST API."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The complete example code for this article can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tquic-group/tquic-example-rust"},"TQUIC RUST example")," repository on GitHub:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tquic-group/tquic-example-rust/blob/main/src/bin/simple_client.rs"},"simple_client.rs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tquic-group/tquic-example-rust/blob/main/src/bin/simple_server.rs"},"simple_server.rs")))),(0,i.kt)("h2",{id:"endpoint-instantiation"},"Endpoint Instantiation"),(0,i.kt)("p",null,"The Endpoint is responsible for managing connections, processing incoming packets, and scheduling outgoing packets.\nTo create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," instance, simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," method provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," struct. Further explanation of the parameters for this method can be found below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new(\n    config: Box<crate::Config>,\n    is_server: bool,\n    handler: Box<dyn TransportHandler>,\n    sender: Rc<dyn PacketSendHandler>,\n) -> Self\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is important to notice that the TQUIC library takes a different approach in receiving and sending packets - it doesn't rely on sockets for this purpose. Instead, it delegates these responsibilities to the callbacks provided by the user. Moreover, the library doesn't impose any specific event loop requirement but rather offers functions that assist users in scheduling events. This flexibility enables enhanced customization and seamless integration across various systems.")),(0,i.kt)("h3",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")," maintains various connection parameters. You can use the Config's ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," method to create an Config instance, and use various setter methods to further customize the configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Create default configurations.\nlet mut config = Config::new()?;\n\n// Set connection idle timeout\nconfig.set_max_idle_timeout(30000);\n\n// Set application level protocol \nlet mut tls_config = TlsConfig::new()?;\ntls_config.set_application_protos(vec![b"h3".to_vec()]);\nconfig.set_tls_config(tls_config);\n')),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/tquic/latest/tquic/struct.Config.html"},"Config documentation")," for more configuration options."),(0,i.kt)("h3",{id:"work-mode"},"Work mode"),(0,i.kt)("p",null,"The Endpoint can works in either server or client mode, which can be specified using the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_server")," parameter."),(0,i.kt)("p",null,"If your program requires both QUIC client and server functionality, it is recommended to instantiate two separate endpoints."),(0,i.kt)("h3",{id:"transporthandler"},"TransportHandler"),(0,i.kt)("p",null,"The Endpoint notifies the application layer to handle relevant QUIC connection/stream events by invoking the callback functions listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"TransportHandler"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub trait TransportHandler {\n    // Called when a new connection has been created. This callback is called\n    // as soon as connection object is created inside the endpoint, but\n    // before the handshake is done. The connection has progressed enough to\n    // send early data if possible.\n    fn on_conn_created(&mut self, conn: &mut Connection);\n\n    // Called when the handshake is completed.\n    fn on_conn_established(&mut self, conn: &mut Connection);\n\n    // Called when the connection is closed. The connection is no longer\n    // accessible after this callback returns. It is a good time to clean up\n    // the connection context.\n    fn on_conn_closed(&mut self, conn: &mut Connection);\n\n    // Called when the stream is created.\n    fn on_stream_created(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // Called when the stream is readable. This callback is called when either\n    // there are bytes to be read or an error is ready to be collected.\n    fn on_stream_readable(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // Called when the stream is writable.\n    fn on_stream_writable(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // Called when the stream is closed. The stream is no longer accessible\n    // after this callback returns. It is a good time to clean up the stream\n    // context.\n    fn on_stream_closed(&mut self, conn: &mut Connection, stream_id: u64);\n\n    // Called when client receives a token in NEW_TOKEN frame.\n    fn on_new_token(&mut self, conn: &mut Connection, token: Vec<u8>);\n}\n")),(0,i.kt)("h3",{id:"packetsendhandler"},"PacketSendHandler"),(0,i.kt)("p",null,"The Endpoint utilizes the ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketSendHandler")," to send packets. Within the PacketSendHandler, there is a callback function called ",(0,i.kt)("inlineCode",{parentName:"p"},"on_packets_send"),", which is responsible for sending a batch of UDP packets to the network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub trait PacketSendHandler {\n    fn on_packets_send(&self, pkts: &[(Vec<u8>, PacketInfo)]) -> Result<usize>;\n}\n")),(0,i.kt)("p",null,"The example implementation of PacketSendHandler can be found further down in this article."),(0,i.kt)("h2",{id:"receiving-packets"},"Receiving packets"),(0,i.kt)("p",null,"The application receives UDP packets and delivers them to TQUIC by invoking the Endpoint's ",(0,i.kt)("inlineCode",{parentName:"p"},"recv")," method, as demonstrated in the following example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Receive an incoming UDP datagram\nlet (len, remote) = match socket.recv_from(&mut recv_buf) {\n    Ok(v) => v,\n    Err(e) => {\n        if e.kind() == std::io::ErrorKind::WouldBlock {\n            break;\n        }\n        // Error handling\n    }\n};\n\n// Build a PacketInfo\nlet pkt_buf = &mut recv_buf[..len];\nlet pkt_info = PacketInfo {\n    src: remote, // Source address of the packet \n    dst: socket.local_addr()?, // Destination address of the packet\n    time: Instant::now(), // Arriaval time of the packet\n};\n\n// Delivery the incoming packet to the endpoint\nmatch self.endpoint.recv(pkt_buf, &pkt_info) {\n    Ok(_) => {}\n    Err(e) => {\n        // Error handling\n    }\n};\n")),(0,i.kt)("h2",{id:"sending-packets"},"Sending packets"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"on_packets_send")," function is responsible for sending a batch of UDP packets to the network. It should return the number of packets that were successfully sent. In case there are any packets that fail to be sent, the Endpoint will handle their retry at a later time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_packets_send(&self, pkts: &[(Vec<u8>, PacketInfo)]) -> tquic::Result<usize> {\n    let mut count = 0;\n    for (pkt, info) in pkts {\n        if let Err(e) = self.socket.send_to(pkt, info.dst) {\n            if e.kind() == std::io::ErrorKind::WouldBlock {\n                return Ok(count);\n            }\n            // Error handling\n        }\n        count += 1;\n    }\n    Ok(count)\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The simple example demonstrated the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"recv_from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"send_to")," to read and send packets one by one. However, it is recommended that applications use more efficient methods available to read and send packets in batches.")),(0,i.kt)("h2",{id:"process-connections"},"Process connections"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"process_connections()")," function must be called to postprocess connections in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When some incoming packets have been processed by using the ",(0,i.kt)("inlineCode",{parentName:"li"},"recv")," method of Endpoint. "),(0,i.kt)("li",{parentName:"ul"},"When timeout events have been handled by calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"on_timeout")," method of Endpoint. "),(0,i.kt)("li",{parentName:"ul"},"When new connections have been initiated by the client through calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," method of Endpoint.")),(0,i.kt)("p",null,"The code example below utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/mio/latest/mio/struct.Poll.html"},"Mio Poll")," as the event framework:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Connect to a server (client)\nendpoint.connect(local, remote, server_name, session, token)?;\n\n// Do event loop\nlet mut events = mio::Events::with_capacity(1024);\nloop {\n    endpoint.process_connections()?;\n\n    // Get the the earliest timeout on the endpoint\n    let timeout = endpoint.timeout();\n\n    // Wait for timeout or IO events\n    poll.poll(&mut events, timeout)?;\n\n    // Process timeout events\n    if events.is_empty() {\n        endpoint.on_timeout(Instant::now());\n        continue;\n    }\n\n    // Process IO events\n    for event in events.iter() {\n        if event.is_readable() {\n            process_read_event()?;\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"client-connection-initiation"},"Client connection initiation"),(0,i.kt)("p",null,"The client utilizes the connect method of the Endpoint to establish a connection with a server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub fn connect(\n    &mut self,\n    local: SocketAddr,\n    remote: SocketAddr,\n    server_name: Option<&str>,\n    session: Option<&[u8]>,\n    token: Option<&[u8]>\n) -> Result<u64>\n")),(0,i.kt)("p",null,"The client can provide ",(0,i.kt)("inlineCode",{parentName:"p"},"session"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"token")," parameters to create a 0RTT connection, which helps reduce the time needed for establishing a new connection. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#0rtt-connection"},'"0RTT Connection"')," section for instructions on obtaining the ",(0,i.kt)("inlineCode",{parentName:"p"},"session"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"."),(0,i.kt)("p",null,"On the server-side, when a connection is created, the Endpoint invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_conn_created")," callback function to notify the application."),(0,i.kt)("h2",{id:"using-stream"},"Using Stream"),(0,i.kt)("h3",{id:"creating-streams"},"Creating streams"),(0,i.kt)("p",null,"QUIC allows either endpoint to create streams. The application invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_new()")," function on a connection to create a new stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub fn stream_new(\n    &mut self,\n    stream_id: u64,\n    urgency: u8,\n    incremental: bool\n) -> Result<()>\n")),(0,i.kt)("p",null,"On the peer side, when a stream is created, the Endpoint invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_stream_created")," callback function to notify the application."),(0,i.kt)("h3",{id:"writing-to-streams"},"Writing to streams"),(0,i.kt)("p",null,"When the stream is writable, the Endpoint invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_stream_writable")," callback function to notify the application. The application can send data via the Connection's ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_write")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub fn stream_write(\n    &mut self,\n    stream_id: u64,\n    buf: Bytes,\n    fin: bool\n) -> Result<usize>\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_write")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error::Done")," error, no more data could be written due to flow control restrictions. The application can continue sending data the next time when the stream becomes writable."),(0,i.kt)("h3",{id:"reading-from-streams"},"Reading from streams"),(0,i.kt)("p",null,"When the stream is readable or encounters an error, the Endpoint invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"on_stream_readable")," callback function to notify the application. The application can use the Connection's ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_read")," method to read data or collect error information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pub fn stream_read(\n    &mut self,\n    stream_id: u64,\n    out: &mut [u8]\n) -> Result<(usize, bool)>\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_read")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error::Done")," error, no more data could be read. The application can continue reading data the next time when the stream becomes readable."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/tquic/latest/tquic/struct.Connection.html"},"TQUIC API documentation")," for more stream related operations."),(0,i.kt)("h2",{id:"0rtt-connection"},"0RTT Connection"),(0,i.kt)("p",null,"In order to minimize the time required to establish a new connection, a client that has previously connected to a server may cache certain parameters from that connection and subsequently initiate a 0-RTT connection with the server. This allows the client to send data immediately, without waiting for a handshake to complete."),(0,i.kt)("p",null,"To be specific, the client needs to maintain session state and address token for previously connections, and utilize those parameters to establish a new connection. An example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_conn_closed(&mut self, conn: &mut Connection) {\n    if let Some(session_file) = &self.session_file {\n        // Save the session data (including TLS session data\n        // and QUIC transport parameters)\n        if let Some(session) = conn.session() {\n            std::fs::write(session_file, session).ok();\n        }\n    }\n}\n\nfn on_new_token(&mut self, conn: &mut Connection, token: Vec<u8>);\n    if let Some(token_file) = &self.token_file {\n        // Save the address token\n        std::fs::write(token_file, &token).ok()\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Client try to create a 0RTT connection.\nlet c = endpoint.connect(self, local, remote, server_name, session, token)?;\n")),(0,i.kt)("h2",{id:"using-multiply-cerificates"},"Using multiply cerificates"),(0,i.kt)("p",null,"TQUIC supports selecting different ",(0,i.kt)("inlineCode",{parentName:"p"},"TLSConfig"),"s based on SNI. An applications can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"TlsConfigSelector")," trait for selecting custom certificates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait TlsConfigSelector: Send + Sync {\n    // Get default TLSConfig\n    fn get_default(&self) -> Option<&TlsConfig>;\n\n    // Get the TLSConfig based on SNI\n    fn select(&self, server_name: &str) -> Option<&TlsConfig>;\n}\n")),(0,i.kt)("p",null,"Then, it calls Config's ",(0,i.kt)("inlineCode",{parentName:"p"},"set_tls_config_selector")," method to activate the custom TLSConfig selector."),(0,i.kt)("h2",{id:"packets-decryption"},"Packets decryption"),(0,i.kt)("p",null,"TQUIC supports exporting TLS keys in ",(0,i.kt)("a",{parentName:"p",href:"https://udn.realityripple.com/docs/Mozilla/Projects/NSS/Key_Log_Format"},"NSS key log")," format, which allows ",(0,i.kt)("a",{parentName:"p",href:"https://www.wireshark.org/"},"Wireshark")," and other tools to decrypt and analyze QUIC packets."),(0,i.kt)("p",null,"You can specify the output of the keylog file using the Connection's ",(0,i.kt)("inlineCode",{parentName:"p"},"set_keylog")," method, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_conn_created(&mut self, conn: &mut Connection) {\n    // Set key log for the connection.\n    if let Some(keylog_file) = &self.keylog_file {\n        if let Ok(file) = std::fs::OpenOptions::new()\n            .create(true)\n            .append(true)\n            .open(keylog_file)\n        {\n            conn.set_keylog(Box::new(file));\n        } else {\n            error!("{} set key log failed", conn.trace_id());\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);