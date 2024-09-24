---
title: C/C++语言QUIC接口说明
sidebar_position: 3
---

# C/C++语言QUIC接口说明

## 准备工作

所有声明包含在`tquic.h`文件中，因此你只需在每个源文件中包含:

```c
#include <tquic.h>
```

## 常见类型

TQUIC库定义了公共函数使用的几种常见类型：

| 类型 | 说明 |
|-------|-------------|
| `quic_config_t` | 可以通过`quic_config_t`中各类参数来定制TQUIC库的行为。|
| `quic_endpoint_t` | 端点是参与QUIC连接的实体，生成/接收/处理QUIC报文。端点可能维护了多个QUIC连接。 |
| `quic_connection_t` | QUIC连接。|
| `quic_transport_methods_t` | 该结构列出了端点用于与用户代码交互的回调函数。|
| `quic_transport_context_t` | 用户提供的上下文。|
| `quic_packet_out_spec` | 出报文的数据及元信息。|


## 配置


### QUIC配置初始化

#### quic_config_new

```c
struct quic_config_t *quic_config_new(void);
```
* 创建一个`quic_config_t`实例并初始化为默认配置。调用方负责管理该内存, 通过调用`quic_config_free`来释放内存。


#### quic_config_free

```c
void quic_config_free(struct quic_config_t *config);
```
* 释放QUIC配置。


### QUIC配置定制

#### quic_config_set_max_idle_timeout
```c
void quic_config_set_max_idle_timeout(struct quic_config_t *config,
                                      uint64_t v);
```
* 设置`max_idle_timeout`传输参数，单位是毫秒。
* 默认值是`0`，代表默认禁用连接闲置超时。


#### quic_config_set_max_udp_payload_size
```c
void quic_config_set_max_udp_payload_size(struct quic_config_t *config,
                                          uint16_t v);
```
* 设置`max_udp_payload_size`传输参数，单元是字节。它限制了端点愿意接收的UDP有效载荷的大小。
* 默认值是`65527`。


#### quic_config_set_initial_max_data
```c
void quic_config_set_initial_max_data(struct quic_config_t *config,
                                      uint64_t v);
```
* 设置`initial_max_data`传输参数，单元是字节。它代表了在连接上可以发送的最大数据量的初始值。
* 配置值不超过由配置项`max_connection_window`指定的上限。
* 默认值是`10485760` (10 MB)。


#### quic_config_set_initial_max_stream_data_bidi_local
```c
void quic_config_set_initial_max_stream_data_bidi_local(struct quic_config_t *config,
                                                        uint64_t v);
```
* 设置`initial_max_stream_data_bidi_local`传输参数，单元是字节。
* 配置值不超过由配置项`max_stream_window`指定的上限。
* 默认值是`5242880` (5 MB)。


#### quic_config_set_initial_max_stream_data_bidi_remote
```c
void quic_config_set_initial_max_stream_data_bidi_remote(struct quic_config_t *config,
                                                         uint64_t v);
```
* 设置`initial_max_stream_data_bidi_remote`传输参数，单元是字节。
* 配置值不超过由配置项`max_stream_window`指定的上限。
* 默认值是`2097152` (2 MB)。


#### quic_config_set_initial_max_stream_data_uni
```c
void quic_config_set_initial_max_stream_data_uni(struct quic_config_t *config,
                                                 uint64_t v);
```
* 设置`initial_max_stream_data_uni`传输参数，单元是字节。
* 配置值不超过由配置项`max_stream_window`指定的上限。
* 默认值是`1048576` (1 MB)。


#### quic_config_set_initial_max_streams_bidi
```c
void quic_config_set_initial_max_streams_bidi(struct quic_config_t *config,
                                              uint64_t v);
```
* 设置`initial_max_streams_bidi`传输参数。
* 默认值是`200`。


#### quic_config_set_initial_max_streams_uni
```c
void quic_config_set_initial_max_streams_uni(struct quic_config_t *config,
                                             uint64_t v);
```
* 设置`initial_max_streams_uni`传输参数。
* 默认值是`100`。


#### quic_config_set_ack_delay_exponent
```c
void quic_config_set_ack_delay_exponent(struct quic_config_t *config,
                                        uint64_t v);
```
* 设置`ack_delay_exponent`传输参数。
* 默认值是`3`。


#### quic_config_set_max_ack_delay
```c
void quic_config_set_max_ack_delay(struct quic_config_t *config,
                                   uint64_t v);
```
* 设置`max_ack_delay`传输参数，单位是毫秒。
* 默认值是`25`。


#### quic_config_set_congestion_control_algorithm
```c
void quic_config_set_congestion_control_algorithm(struct quic_config_t *config,
                                                  enum quic_congestion_control_algorithm v);
```
* 设置连接使用的拥塞控制算法类型。
* 默认值是`QUIC_CONGESTION_CONTROL_ALGORITHM_CUBIC`。


#### quic_config_set_initial_congestion_window
```c
void quic_config_set_initial_congestion_window(struct quic_config_t *config, uint64_t v);
```
* 设置初始拥塞窗口大小，单位是报文数。
* 默认值是`10`。


#### quic_config_set_min_congestion_window
```c
void quic_config_set_min_congestion_window(struct quic_config_t *config, uint64_t v);
```
* 设置最小拥塞窗口大小，单位是报文数。
* 默认值是`2`。


#### quic_config_set_slow_start_thresh
```c
void quic_config_set_slow_start_thresh(struct quic_config_t *config, uint64_t v);
```
* 设置慢启动阈值，单位是报文。
* 默认是u64最大值。


#### quic_config_set_bbr_probe_rtt_duration
```c
void quic_config_set_bbr_probe_rtt_duration(struct quic_config_t *config, uint64_t v);
```
* 设置BBR ProbePTT状态最小持续时间，单位是毫秒。
* 默认值是`200`毫秒。


#### quic_config_enable_bbr_probe_rtt_based_on_bdp
```c
void quic_config_enable_bbr_probe_rtt_based_on_bdp(struct quic_config_t *config, bool v);
```
* 在BBR ProbeRTT状态下使用的拥塞窗口是否基于BDP计算。
* 默认值是false。


#### quic_config_set_bbr_probe_bw_cwnd_gain
```c
void quic_config_set_bbr_probe_rtt_cwnd_gain(struct quic_config_t *config, double v);
```
* 设置BBR ProbeRTT状态下的cwnd gain。
* 默认值是`0.75`。


#### quic_config_set_bbr_rtprop_filter_len
```c
void quic_config_set_bbr_rtprop_filter_len(struct quic_config_t *config, uint64_t v);
```
* 设置BBR RTProp最小过滤器窗口大小，单位是毫秒。
* 默认值是`10000`毫秒。


#### quic_config_set_bbr_probe_bw_cwnd_gain
```c
void quic_config_set_bbr_probe_bw_cwnd_gain(struct quic_config_t *config, double v);
```
* 设置BBR ProbeBW状态下的cwnd gain。
* 默认值是`2.0`。


#### quic_config_set_copa_slow_start_delta
```c
void quic_config_set_copa_slow_start_delta(struct quic_config_t *config, double v);
```
* 设置COPA算法慢启动状态的delta参数


#### quic_config_set_copa_steady_delta
```c
void quic_config_set_copa_steady_delta(struct quic_config_t *config, double v);
```
* 设置COPA算法在steady状态的delta参数


#### quic_config_enable_copa_use_standing_rtt
```c
void quic_config_enable_copa_use_standing_rtt(struct quic_config_t *config, bool v);
```
* 使用`RTT Standing`而不是最新的`RTT`来计算排队延迟
 

#### quic_config_set_initial_rtt
```c
void quic_config_set_initial_rtt(struct quic_config_t *config, uint64_t v);
```
* 设置初始RTT，单位是毫秒。
* 默认值是`333`毫秒。

:::note
请谨慎更改该配置。如果设置的值小于默认值，将导致握手数据包的重传更激进。
:::


#### quic_config_set_pto_linear_factor
```c
void quic_config_set_pto_linear_factor(struct quic_config_t *config, uint64_t v);
```
* 设置PTO线性系数。PTO在前`v`个连续探测超时保持不变，之后才开始指数回退。
* 默认值是`0`。


#### quic_config_set_max_pto
```
void quic_config_set_max_pto(struct quic_config_t *config, uint64_t v);
```
* 设置探测超时的最大值，单位是毫秒。探测超(PTO)会触发发送一个或两个探测数据报，使得连接可以恢复丢失的尾包或确认。参见RFC 9000第6.2节。
* 默认没有限制。


#### quic_config_set_active_connection_id_limit
```c
void quic_config_set_active_connection_id_limit(struct quic_config_t *config,
                                                uint64_t v);
```
* 设置`active_connection_id_limit`传输参数。
* 默认值是`2`。如果参数值小于2，会被忽略。


#### quic_config_enable_multipath
```c
void quic_config_enable_multipath(struct quic_config_t *config, bool enabled);
```
* 设置`enable_multipath`传输参数。
* 默认不启用。(Experimental)


#### quic_config_set_multipath_algorithm
```c
void quic_config_set_multipath_algorithm(struct quic_config_t *config, enum MultipathAlgorithm v);
```
* 设置多路径调度算法。
* 默认值是MinRTT。


#### quic_config_set_max_connection_window
```c
void quic_config_set_max_connection_window(struct quic_config_t *config,
                                           uint64_t v);
```
* 设置连接级别流量控制窗口的最大大小，单元是字节。
* 默认值是`25165824` (24 MB)。


#### quic_config_set_max_stream_window
```c
void quic_config_set_max_stream_window(struct quic_config_t *config,
                                       uint64_t v);
```
* 设置流级别流量控制窗口的最大大小，单元是字节。
* 该值不应大于`max_connection_window`配置。
* 默认值是`16777216` (16MB)。

#### quic_config_set_max_concurrent_conns
```c
void quic_config_set_max_concurrent_conns(struct quic_config_t *config,
                                          uint32_t v);
```
* 设置最大并发流数量大小。
* 默认值是`1000000`。


#### quic_config_set_reset_token_key
```c
int quic_config_set_reset_token_key(struct quic_config_t *config,
                                    const uint8_t *token_key,
                                    size_t token_key_len);
```
* 设置生成 Reset 令牌的密钥。参数`token_key_len`应该不小于64。
* 默认值是随机数


#### quic_config_set_address_token_lifetime
```c
void quic_config_set_address_token_lifetime(struct quic_config_t *config,
                                            uint64_t seconds);
```
* 设置地址令牌的有效性，单位是秒。
* 默认值是`86400` (1 Day)


#### quic_config_set_address_token_key
```c
int quic_config_set_address_token_key(struct quic_config_t *config,
                                      const uint8_t *token_keys,
                                      size_t token_keys_len);
```
* 设置生成地址令牌的密钥。参数`token_key_len`应该是16的倍数。
* 默认值是随机数


#### quic_config_enable_retry
```c
void quic_config_enable_retry(struct quic_config_t *config,
                              bool enabled);
```
* 设置是否启用Retry机制。
* 默认禁用。


#### quic_config_set_cid_len
```c
void quic_config_set_cid_len(struct quic_config_t *config,
                             uint8_t v);
```
* 设置源CID的长度，单位是字节。长度不应该超过20。
* 默认值是`8`。


#### quic_config_set_send_batch_size
```c
void quic_config_set_send_batch_size(struct quic_config_t *config,
                                     uint16_t v);
```
* 设置批量发送报文的数量。
* 默认值是`64`。


#### quic_config_set_tls_config
```c
void quic_config_set_tls_config(struct quic_config_t *config, struct quic_tls_config_t *tls_config);
```
* 设置TLS配置。


#### quic_config_set_tls_selector
```c
void quic_config_set_tls_selector(struct quic_config_t *config,
                                  const struct quic_tls_config_select_methods_t *methods,
                                  quic_tls_config_select_context_t context);
```
* 设置TLS配置选择器。


### TLS配置初始化

#### quic_tls_config_new
```c
struct quic_tls_config_t *quic_tls_config_new(void);
```
* 创建一个`TlsConfig`实例。
* 调用方负责管理该内存, 通过调用`quic_tls_config_free`来释放`TlsConfig`实例内存。


#### quic_tls_config_new_with_ssl_ctx
```c
struct quic_tls_config_t *quic_tls_config_new_with_ssl_ctx(SSL_CTX *ssl_ctx);
```
* 通过SSL_CTX来创建一个`TlsConfig`实例。
* 调用方负责管理该内存, 通过调用`quic_tls_config_free`来释放`TlsConfig`实例内存。

:::tip
建议使用`quic_tls_config_new`创建TLS配置`TlsConfig`。
:::

:::note
当使用该接口创建TLS配置`TlsConfig`时, `quic_conn_session()` 和 `quic_conn_set_keylog()` 接口将无效。
相应的，可使用BoringSSL库提供的[`SSL_CTX_sess_set_new_cb()`](https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_CTX_sess_set_new_cb
) and [`SSL_CTX_set_keylog_callback()`](https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_CTX_set_keylog_callback)接口。
:::


#### quic_tls_config_free
```c
void quic_tls_config_free(struct quic_tls_config_t *tls_config);
```
* 释放`TlsConfig`实例。


### TLS配置定制

#### quic_tls_config_set_certificate_file
```c
int quic_tls_config_set_certificate_file(struct quic_tls_config_t *tls_config,
                                         const char *cert_file);
```
* 设置PEM格式证书文件路径。


#### quic_tls_config_set_private_key_file
```c
int quic_tls_config_set_private_key_file(struct quic_tls_config_t *tls_config,
                                         const char *key_file);
```
* 设置PEM格式私钥文件路径。


#### quic_tls_config_set_ca_certs
```c
int quic_tls_config_set_ca_certs(struct quic_tls_config_t *tls_config, const char *ca_path);
```
* 设置CA证书文件路径。


#### quic_tls_config_set_verify
```c
void quic_tls_config_set_verify(struct quic_tls_config_t *tls_config, bool verify);
```
* 设置启用或禁用证书检查。


#### quic_tls_config_set_early_data_enabled
```
void quic_tls_config_set_early_data_enabled(struct quic_tls_config_t *tls_config, bool enable);
```
* 设置启用或禁用0-RTT。


#### quic_tls_config_set_application_protos
```c
int quic_tls_config_set_application_protos(struct quic_tls_config_t *tls_config,
                                           const char *const *protos,
                                           intptr_t proto_num);
```
* 设置支持的应用层协议列表。


#### quic_tls_config_set_ticket_key
```c
int quic_tls_config_set_ticket_key(struct quic_tls_config_t *tls_config,
                                   const uint8_t *ticket_key,
                                   size_t ticket_key_len);
```
* 设置会话ticket密钥（仅服务端）。


## 端点

### 创建和释放

#### quic_endpoint_new
```c
struct quic_endpoint_t *quic_endpoint_new(struct quic_config_t *config,
                                          bool is_server,
                                          const struct quic_transport_methods_t *handler_methods,
                                          quic_transport_context_t handler_ctx,
                                          const struct quic_packet_send_methods_t *sender_methods,
                                          quic_packet_send_context_t sender_ctx);
```
* 创建一个QUIC端点。调用方负责管理端点的内存, 并调用`quic_endpoint_free`进行释放。

:::note
端点并不拥有由C调用方传入的这些资源。调用者需确保这些资源的生命周期比端点更长，并正确地释放它们。
:::


#### quic_endpoint_free
```c
void quic_endpoint_free(struct quic_endpoint_t *endpoint);
```
* 释放一个QUIC端点。


### 接收报文

#### quic_endpoint_recv
```c
int quic_endpoint_recv(struct quic_endpoint_t *endpoint,
                       uint8_t *buf,
                       size_t buf_len,
                       const struct quic_packet_info_t *info);
```
* 使用`quic_endpoint_recv()`将入报文递交给端点。
* 端点可能为入报文查找到一个已有的连接并将报文递交给该连接，或者创建一个新连接，或者返回版本协商报文或者无状态重置报文。


### 发送报文

#### on_packets_send

```c
typedef struct quic_packet_send_methods_t {
  int (*on_packets_send)(void *psctx, 
                         struct quic_packet_out_spec_t *pkts,
                         unsigned int count);
} quic_packet_send_methods_t;
```

* 用户必须在`quic_packet_send_methods_t`中指定回调函数`on_packets_send`，端点使用该函数发送报文。

* 当发送连接的报文时，会调用该函数。

* 如果发送成功，返回实际发送的报文数量。如果小于`count`，连接将通过进一步的`on_packets_send()`调用重试发送剩余报文。


### 超时事件

#### quic_endpoint_timeout
```c
uint64_t quic_endpoint_timeout(const struct quic_endpoint_t *endpoint);
```
* 返回距离下次超时的时间，单位毫秒。


#### quic_endpoint_on_timeout
```c
void quic_endpoint_on_timeout(struct quic_endpoint_t *endpoint);
```
* 处理端点上的超时事件。


### 内部事件

#### quic_endpoint_process_connections
```c
int quic_endpoint_process_connections(struct quic_endpoint_t *endpoint);
```
* 处理连接上的内部事件。


### 传输层回调函数

`quic_transport_methods_t`包括供端点使用，用于与用户代码通信的一组回调函数。


#### on_conn_created
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_created)(void *tctx, 
                          struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
 * `on_conn_created`在连接被创建时被调用。该回调函数在连接刚被创建时但握手尚未完成时调用。该回调函数是可选的。


#### on_conn_established
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_established)(void *tctx,
                              struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
 * `on_conn_established`在握手完成后被调用。该回调函数是可选的。


#### on_conn_closed
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_closed)(void *tctx,
                         struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
 * `on_conn_closed`在连接关闭时调用。该回调函数返回后，连接将不可访问。该回调函数中适合清理连接的上下文。该回调函数是可选的。


#### on_stream_created
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_created)(void *tctx,
                            struct quic_conn_t *conn,
                            uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
 * `on_stream_created`在流被创建时调用。该回调函数是可选的。


#### on_stream_readable
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_readable)(void *tctx,
                             struct quic_conn_t *conn,
                             uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
 * `on_stream_readable`在流可读时被调用。当流上存在数据可读或者出现错误，会调用该函数。该回调函数是可选的。


#### on_stream_writable
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_writable)(void *tctx,
                             struct quic_conn_t *conn,
                             uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
 * `on_stream_writable`在流可写时被调用。该回调函数是可选的。


#### on_stream_closed
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_closed)(void *tctx,
                         struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
 * `on_stream_closed` 在流关闭时被调用。回调函数返回后流将不可访问。在该回调函数中适合清理流的上下文。该回调函数是可选的。


#### on_new_token
```c
typedef struct quic_transport_methods_t {
  void (*on_new_token)(void *tctx,
                       struct quic_conn_t *conn,
                       const uint8_t *token,
                       size_t token_len);
  /* ... */
} quic_transport_methods_t;
```
 * `on_new_token`在客户端收到NEW_TOKEN帧时被调用。该回调函数是可选的。


### 其他函数

#### quic_endpoint_set_cid_generator
```c
void quic_endpoint_set_cid_generator(struct quic_endpoint_t *endpoint,
                                     const struct ConnectionIdGeneratorMethods *cid_gen_methods,
                                     ConnectionIdGeneratorContext cid_gen_ctx);
```
* 设置自定义CID生成器
* 默认会使用随机CID生成器


#### quic_endpoint_exist_connection
```c
bool quic_endpoint_exist_connection(struct quic_endpoint_t *endpoint,
                                    const uint8_t *cid,
                                    size_t cid_len);
```
* 检查连接指定连接是否存在。

#### quic_endpoint_get_connection
```c
struct quic_conn_t *quic_endpoint_get_connection(struct quic_endpoint_t *endpoint, uint64_t index);
```
* 获取连接的索引号。

#### quic_endpoint_close
```c
void quic_endpoint_close(struct quic_endpoint_t *endpoint, bool force);
```
* 优雅关闭端点或强制关闭端点。
* 如果`force`为假，则停止创建新的连接并等待所有活跃连接关闭。否则，强制关闭所有活跃连接。


## 连接

### 创建连接

#### quic_endpoint_connect
```c
int quic_endpoint_connect(struct quic_endpoint_t *endpoint,
                          const struct sockaddr *local,
                          socklen_t local_len,
                          const struct sockaddr *remote,
                          socklen_t remote_len,
                          const char *server_name,
                          const uint8_t *session,
                          size_t session_len,
                          const uint8_t *token,
                          size_t token_len,
                          uint64_t *index);
```
* 创建客户端连接. 如果成功, 出参数`index`保存了连接的索引号。


### 关闭连接

#### quic_conn_close
```c
int quic_conn_close(struct quic_conn_t *conn,
                    bool app,
                    uint64_t err,
                    const uint8_t *reason,
                    size_t reason_len);
```
* 关闭连接。



### 连接的上下文

#### quic_conn_set_context
```c
void quic_conn_set_context(struct quic_conn_t *conn,
                           void *data);
```
* 设置连接的用户上下文。


#### quic_conn_context
```c
void *quic_conn_context(struct quic_conn_t *conn);
```
* 获取连接的用户上下文


### 日志和跟踪

#### quic_set_logger
```c
int quic_set_logger(void (*cb)(const uint8_t *line, void *argp),
                    void *argp,
                    const char *level);
```
* 设置协议栈日志回调，并用level指定日志输出级别。


#### quic_conn_set_keylog
```c
void quic_conn_set_keylog(struct quic_conn_t *conn, void (*cb)(const uint8_t *data,
                                                               size_t data_len,
                                                               void *argp), void *argp);
```
* 设置keylog日志回调
* `cb` 是回调函数，针对每条keylog日志会调用该函数
* `data` 是一条keylog日志， `argp` 是用户自定义数据，作为参数传给给回调函数`cb`


#### quic_conn_set_keylog_fd
```c
void quic_conn_set_keylog_fd(struct quic_conn_t *conn,
                             int fd);
```
* 设置keylog文件。


#### quic_conn_set_qlog
```c
void quic_conn_set_qlog(struct quic_conn_t *conn,
                        void (*cb)(const uint8_t *data, size_t data_len, void *argp),
                        void *argp,
                        const char *title,
                        const char *desc);
```
* 设置qlog日志回调
* `cb` 是回调函数，针对每条qlog日志会调用该函数
* `data` 是一条qlog日志，`argp` 是用户自定义数据，作为参数传给给回调函数`cb`
* `title` 和 `desc` 代表qlog日志中的 "title" 和 "description" 字段值


#### quic_conn_set_qlog_fd
```c
void quic_conn_set_qlog_fd(struct quic_conn_t *conn,
                           int fd,
                           const char *title,
                           const char *desc);
```
* 设置Qlog文件。


#### quic_conn_trace_id
```c
void quic_conn_trace_id(struct quic_conn_t *conn,
                        const uint8_t **out,
                        size_t *out_len);
```
* 返回连接的跟踪标识(trace id)。



### 其他函数

#### quic_conn_index
```c
uint64_t quic_conn_index(struct quic_conn_t *conn);
```
* 获取连接的索引号。


#### quic_conn_is_server
```c
bool quic_conn_is_server(struct quic_conn_t *conn);
```
* 检查连接是否是服务端连接。


#### quic_conn_is_established
```c
bool quic_conn_is_established(struct quic_conn_t *conn);
```
* 检查连接是否已完成握手。


#### quic_conn_is_resumed
```c
bool quic_conn_is_resumed(struct quic_conn_t *conn);
```
* 检查连接是通过会话复用方式创建。


#### quic_conn_is_in_early_data
```c
bool quic_conn_is_in_early_data(struct quic_conn_t *conn);
```
* 检查连接是否可发送或接收0RTT数据。


#### quic_conn_is_multipath
```c
bool quic_conn_is_multipath(struct quic_conn_t *conn);
```
* 检查已建立的连接是否启用多路径模式。


#### quic_conn_application_proto
```c
void quic_conn_application_proto(struct quic_conn_t *conn,
                                 const uint8_t **out,
                                 size_t *out_len);
```
* 返回协商的应用层协议。


#### quic_conn_server_name
```c
void quic_conn_server_name(struct quic_conn_t *conn,
                           const uint8_t **out,
                           size_t *out_len);
```
* 返回TLS SNI 扩展中的服务端名称(server name)。


#### quic_conn_session
```c
void quic_conn_session(struct quic_conn_t *conn,
                       const uint8_t **out,
                       size_t *out_len);
```
* 返回用于会话复用的会话状态数据。


#### quic_conn_early_data_reason
```c
int quic_conn_early_data_reason(struct quic_conn_t *conn,
                                const uint8_t **out,
                                size_t *out_len);
```
* 返回0-RTT被拒绝的详细原因。


#### quic_conn_is_closing
```c
bool quic_conn_is_closing(struct quic_conn_t *conn);
```
* 检查连接是否处理关闭中（closing）状态。


#### quic_conn_is_draining
```c
bool quic_conn_is_draining(struct quic_conn_t *conn);
```
* 检查连接是否处于排空（Draining）状态。


#### quic_conn_is_closed
```c
bool quic_conn_is_closed(struct quic_conn_t *conn);
```
* 检查连接是否已关闭


#### quic_conn_is_handshake_timeout
```c
bool quic_conn_is_handshake_timeout(struct quic_conn_t *conn);
```
* 检查连接是否由于握手超时而关闭。


#### quic_conn_is_idle_timeout
```c
bool quic_conn_is_idle_timeout(struct quic_conn_t *conn);
```
* 检查连接是否由于闲置超时而关闭。


#### quic_conn_is_reset
```c
bool quic_conn_is_reset(struct quic_conn_t *conn);
```
* 检查连接是否由于无状态重置而关闭。


#### quic_conn_peer_error
```c
bool quic_conn_peer_error(struct quic_conn_t *conn,
                          bool *is_app,
                          uint64_t *error_code,
                          const uint8_t **reason,
                          size_t *reason_len);
```
* 返回可能的对端错误。


#### quic_conn_local_error
```c
bool quic_conn_local_error(struct quic_conn_t *conn,
                           bool *is_app,
                           uint64_t *error_code,
                           const uint8_t **reason,
                           size_t *reason_len);
```
* 返回可能的本地错误。


#### quic_conn_stats
```c
const struct quic_conn_stats_t *quic_conn_stats(struct quic_conn_t *conn);
```
* 返回连接级别的统计信息。
* `struct quic_conn_stats_t`类型定义如下

```c
typedef struct quic_conn_stats_t {
  uint64_t recv_count;
  uint64_t recv_bytes;
  uint64_t sent_count;
  uint64_t sent_bytes;
  uint64_t lost_count;
  uint64_t lost_bytes;
} quic_conn_stats_t;
```

| 字段 | 含义 |
| ---------- | ------------ |
| recv_count | 连接总接收报文数 |
| recv_bytes | 连接总接收字节数 |
| sent_count | 连接总发送报文数 |
| sent_bytes | 连接总发送字节数 |
| lost_count | 连接总丢失报文数 |
| lost_bytes | 连接总丢失字节数 |



## 流

### 创建流

#### quic_stream_new
```c
int quic_stream_new(struct quic_conn_t *conn,
                    uint64_t stream_id,
                    uint8_t urgency,
                    bool incremental);
```
* 创建指定优先级的流

:::tip
该接口是低级别的流创建API。建议使用 `quic_stream_bidi_new`创建双向流，使用`quic_stream_uni_new`创建单向流。
:::


#### quic_stream_bidi_new
```
int quic_stream_bidi_new(struct quic_conn_t *conn,
                         uint8_t urgency,
                         bool incremental,
                         uint64_t *stream_id);
```
* 创建指定优先级的双向流
* 如果成功，出参数`stream_id`携带了创建流的ID


#### quic_stream_uni_new
```
int quic_stream_uni_new(struct quic_conn_t *conn,
                        uint8_t urgency,
                        bool incremental,
                        uint64_t *stream_id);
```
* 创建指定优先级的单向流
* 如果成功，出参数`stream_id`携带了创建流的ID


### 流优先级

#### quic_stream_set_priority
```c
int quic_stream_set_priority(struct quic_conn_t *conn,
                             uint64_t stream_id,
                             uint8_t urgency,
                             bool incremental);
```
* 设置流优先级。

### 流事件

使用如下的函数, 注册或取消读/写事件

#### quic_stream_wantwrite
```c
int quic_stream_wantwrite(struct quic_conn_t *conn,
                          uint64_t stream_id,
                          bool want);
```
* 注册流的写事件。

#### quic_stream_wantread
```c
int quic_stream_wantread(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         bool want);
```
* 注册流的读事件。

### 读取流

#### quic_stream_read
```c
ssize_t quic_stream_read(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         uint8_t *out,
                         size_t out_len,
                         bool *fin);
```
* 从流读取数据。


### 写入流

#### quic_stream_write
```c
ssize_t quic_stream_write(struct quic_conn_t *conn,
                          uint64_t stream_id,
                          const uint8_t *buf,
                          size_t buf_len,
                          bool fin);
```
* 向流写入数据。

### 关闭流

#### quic_stream_shutdown
```c
int quic_stream_shutdown(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         enum quic_shutdown direction,
                         uint64_t err);
```
* 关闭流的读或写。



### 流上下文

#### quic_stream_set_context
```c
int quic_stream_set_context(struct quic_conn_t *conn,
                            uint64_t stream_id,
                            void *data);
```
* 在流上设置用户上下文。


#### quic_stream_context
```c
void *quic_stream_context(struct quic_conn_t *conn,
                          uint64_t stream_id);

```
* 返回流上的用户上下文。



### 其他函数

#### quic_stream_capacity
```c
ssize_t quic_stream_capacity(struct quic_conn_t *conn,
                             uint64_t stream_id);
```
* 返回流上可发送数据大小, 单位是字节。


#### quic_stream_finished
```c
bool quic_stream_finished(struct quic_conn_t *conn,
                          uint64_t stream_id);
```
* 如果流完成数据读取, 返回真。


## 路径

### 创建路径

#### quic_conn_add_path
```c
int quic_conn_add_path(struct quic_conn_t *conn,
                       const struct sockaddr *local,
                       socklen_t local_len,
                       const struct sockaddr *remote,
                       socklen_t remote_len,
                       uint64_t *index);
```
 * 客户端连接增加指定的新路径。


### 其他函数

#### quic_conn_active_path
```c
bool quic_conn_active_path(const struct quic_conn_t *conn,
                           struct quic_path_address_t *a);
```
* 返回活跃路径的地址信息。


#### quic_path_address_iter_t 
```c
struct quic_path_address_iter_t *quic_conn_paths(struct quic_conn_t *conn);
```
* 返回路径地址的迭代器。调用者应调用`quic_four_tuple_iter_free`来释放该迭代器。


#### quic_conn_path_iter_next
```c
bool quic_conn_path_iter_next(struct quic_path_address_iter_t *iter,
                              struct quic_path_address_t *a);
```
* 返回下一个路径的地址信息。


#### quic_conn_path_iter_free
```c
void quic_conn_path_iter_free(struct quic_path_address_iter_t *iter);
```
* 释放FourTupleIter。


#### quic_conn_path_stats
```c
const struct quic_path_stats_t *quic_conn_path_stats(struct quic_conn_t *conn,
                                                     const struct sockaddr *local,
                                                     socklen_t local_len,
                                                     const struct sockaddr *remote,
                                                     socklen_t remote_len);
```
* 获取指定路径最近统计信息

```c
typedef struct quic_path_stats_t {
  uint64_t recv_count;
  uint64_t recv_bytes;
  uint64_t sent_count;
  uint64_t sent_bytes;
  uint64_t lost_count;
  uint64_t lost_bytes;
  uint64_t acked_count;
  uint64_t acked_bytes;
  uint64_t init_cwnd;
  uint64_t final_cwnd;
  uint64_t max_cwnd;
  uint64_t min_cwnd;
  uint64_t max_inflight;
  uint64_t loss_event_count;
  uint64_t cwnd_limited_count;
  uint64_t cwnd_limited_duration;
  uint64_t min_rtt;
  uint64_t max_rtt;
  uint64_t srtt;
  uint64_t rttvar;
  bool in_slow_start;
  uint64_t pacing_rate;
} quic_path_stats_t;
```

| Item | Description |
| ---- | ----------- |
| recv_count | 路径上接收报文数 |
| recv_bytes | 路径上接收字节数 |
| sent_count | 路径上发送报文数 |
| sent_bytes | 路径上发送字节数 |
| lost_count | 路径上丢失报文数 |
| lost_bytes | 路径上丢失字节数 |
| acked_count | 路径上总确认报文数 |
| acked_bytes | 路径上总确认字节数 |
| init_cwnd | 初始拥塞窗口，单位字节 |
| final_cwnd | 当前拥塞窗口，单位字节 |
| max_cwnd | 最大拥塞窗口，单位字节 |
| min_cwnd | 最小拥塞窗口，单位字节 |
| max_inflight | 最大在途数据，单位字节 |
| loss_event_count | 总丢包事件数 |
| cwnd_limited_count | 总拥塞窗口受限事件数 |
| cwnd_limited_duration | 总拥塞窗口受限时长，单位微秒 |
| min_rtt | 最小往返延迟，单位微秒 |
| max_rtt | 最大往返延迟，单位微秒 |
| srtt | 平滑往返延迟，单位微秒 |
| rttvar | 往返时间变化，单位微秒 |
| in_slow_start | 拥塞控制是否处于慢启动状态 |
| pacing_rate | 由拥塞控制算法估算的Pacing rate |



## 其他类型或函数

### 其他类型

#### quic_transport_context_t
```c
typedef void *quic_transport_context_t;

```
* 传输层回调上下文。


#### quic_packet_out_spec_t 

```c
typedef struct quic_packet_out_spec_t {
  const struct iovec *iov;
  size_t iovlen;
  const void *src_addr;
  socklen_t src_addr_len;
  const void *dst_addr;
  socklen_t dst_addr_len;
} quic_packet_out_spec_t;
``` 
* 出向报文。


#### quic_shutdown 

```c
typedef enum quic_shutdown {
  QUIC_SHUTDOWN_READ = 0,
  QUIC_SHUTDOWN_WRITE = 1,
} quic_shutdown;

```
* 流关闭的方向: 读或写。


#### quic_path_address_iter_t 
```c
typedef struct quic_path_address_iter_t quic_path_address_iter_t;
```
* 地址四元组的迭代器。


#### quic_congestion_control_algorithm
```c
typedef enum quic_congestion_control_algorithm {
  QUIC_CONGESTION_CONTROL_ALGORITHM_CUBIC,
  QUIC_CONGESTION_CONTROL_ALGORITHM_BBR,
  QUIC_CONGESTION_CONTROL_ALGORITHM_BBR3,
  QUIC_CONGESTION_CONTROL_ALGORITHM_COPA,
} quic_congestion_control_algorithm;
```
* 拥塞控制算法。

| 算法 | 说明 |
| --------- | ----------- |
| CUBIC | [CUBIC](https://www.rfc-editor.org/rfc/rfc9438.html)采用三次函数代替TCP标准的线性窗口增加函数，提高了高速率和远距离网络下的可扩展性和稳定性。 |
| BBR | [BBR](https://datatracker.ietf.org/doc/html/draft-cardwell-iccrg-bbr-congestion-control)使用连接的传输速率、往返时间和丢包率的最新测量值来构建网络路径的显式模型，并使用该模型来控制数据传输速度和允许最大在途数据量。 |
| BBR3 | [BBRv3](https://datatracker.ietf.org/meeting/117/materials/slides-117-ccwg-bbrv3-algorithm-bug-fixes-and-public-internet-deployment-00)是BBR的最新版本，包括各种修复和算法更新，可以降低数据包重传率并小幅改善延迟。(实验性)  |
| COPA | [COPA](https://web.mit.edu/copa/)是一种基于时延的拥塞控制算法。COPA基于目标函数，可以通过用户指定的参数配置实现吞吐量和延迟之间的权衡。(实验性)  |


#### quic_multipath_algorithm
```c
typedef enum quic_multipath_algorithm {
  QUIC_MULTIPATH_ALGORITHM_MIN_RTT,
  QUIC_MULTIPATH_ALGORITHM_REDUNDANT,
  QUIC_MULTIPATH_ALGORITHM_ROUND_ROBIN,
} quic_multipath_algorithm;
```
* 多路径调度算法。

| 算法 | 说明 |
| --------- | ----------- |
| MIN_RTT | MIN_RTT选择所有可用路径中平滑RTT最小的路径发送分组。它旨在优化吞吐并实现负载均衡，适用于批量传输应用。(实验性)  |
| REDUNDANT | REDUNDANT在所有可用路径上冗余发送所有数据包。它利用额外的带宽来最小化延迟，从而减少应用程序的总流完成时间，这些应用程序可以通过一条路径满足有限的带宽需求。在存在两条可用带宽不同的路径的情况下，它确保有效吞吐量至少等同于最优单路径。(实验性)  |
| ROUND_ROBIN | ROUND_ROBIN以轮询方式在可用路径上发送分组。仅用于测试目的。 |


### 其他函数

#### quic_set_logger
```c
void quic_set_logger(void (*cb)(const uint8_t *data, size_t data_len, void *argp),
                     void *argp,
                     const char *level);
```
* 设置日志回调函数。
* 对于每条日志，会调用函数`cb`。
* `data` 代表`\n`结尾的日志消息。`argp`代表传递给回调函数`cb`的用户自定义数据。
* `level`是一个不区分大小写的字符串，用于指定日志级别。有效值包括 `"OFF"`、`"ERROR"`、`"WARN"`、`"INFO"`、`"DEBUG"` 和 `"TRACE"`。如果其值为NULL或无效，则默认日志级别为`"OFF"`。


#### quic_packet_header_info
```c
int quic_packet_header_info(uint8_t *buf,
                            size_t buf_len,
                            uint8_t dcid_len,
                            bool *long_header,
                            uint32_t *version,
                            struct ConnectionId *dcid);
```
* 从QUIC报文中提取头部类型、协议版本、目的CID信息

