---
title: C/C++ QUIC API Reference
sidebar_position: 3
---

# C++ QUIC API Reference

## Preliminaries

The declarations are all in `tquic.h`, so you just need to include it in each source file:

```c
#include <tquic.h>
```

## Common types

The TQUIC library defines several types that are commonly used by its public functions.

| Types | Description |
|-------|-------------|
| `quic_config_t` | The behavior of the library can be managed through various settings specified in the `quic_config_t`. |
| `quic_endpoint_t` | Endpoint is an entity that can participate in a QUIC connection by generating, receiving, and processing QUIC packets. Endpoint may maintain one or more QUIC connections. |
| `quic_connection_t` | QUIC connection. |
| `quic_transport_handler_t` | The context provided by the user's code. |
| `quic_transport_methods_t` | The structure lists the callbacks used by the endpoint for interaction with the user code. |
| `quic_packet_out_spec` | Data and metadata of a outbound packet. |


## Configurations


### QUIC configurations initialization

#### quic_config_new

```c
struct quic_config_t *quic_config_new(void);
```
* Create an instance of `quic_config_t` and initialize it with default configuration. The caller is responsible for the memory of the Config and should properly
destroy it by calling `quic_config_free`.


#### quic_config_free

```c
void quic_config_free(struct quic_config_t *config);
```
* Destroy QUIC configuration


### QUIC configurations customization

#### quic_config_set_max_idle_timeout
```c
void quic_config_set_max_idle_timeout(struct quic_config_t *config,
                                      uint64_t v);
```
* Set the `max_idle_timeout` transport parameter in milliseconds.
* The default value is set to `0`, which means that idle timeout is disabled by default.


#### quic_config_set_max_udp_payload_size
```c
void quic_config_set_max_udp_payload_size(struct quic_config_t *config,
                                          uint16_t v);
```
* Set the `max_udp_payload_size` transport parameter in bytes. It limits
the size of UDP payloads that the endpoint is willing to receive.
* The default value is `65527`.


#### quic_config_set_initial_max_data
```c
void quic_config_set_initial_max_data(struct quic_config_t *config,
                                      uint64_t v);
```
* Set the `initial_max_data` transport parameter in bytes. It means the initial
  value for the maximum amount of data that can be sent on the connection.
* The value is capped by the setting `max_connection_window`.
* The default value is `10485760` (10 MB).


#### quic_config_set_initial_max_stream_data_bidi_local
```c
void quic_config_set_initial_max_stream_data_bidi_local(struct quic_config_t *config,
                                                        uint64_t v);
```
* Set the `initial_max_stream_data_bidi_local` transport parameter in bytes.
* The value is capped by the setting `max_stream_window`.
* The default value is `5242880` (5 MB).


#### quic_config_set_initial_max_stream_data_bidi_remote
```c
void quic_config_set_initial_max_stream_data_bidi_remote(struct quic_config_t *config,
                                                         uint64_t v);
```
* Set the `initial_max_stream_data_bidi_remote` transport parameter in bytes.
* The value is capped by the setting `max_stream_window`.
* The default value is `2097152` (2 MB).


#### quic_config_set_initial_max_stream_data_uni
```c
void quic_config_set_initial_max_stream_data_uni(struct quic_config_t *config,
                                                 uint64_t v);
```
* Set the `initial_max_stream_data_uni` transport parameter in bytes.
* The value is capped by the setting `max_stream_window`.
* The default value is `1048576` (1 MB).


#### quic_config_set_initial_max_streams_bidi
```c
void quic_config_set_initial_max_streams_bidi(struct quic_config_t *config,
                                              uint64_t v);
```
* Set the `initial_max_streams_bidi` transport parameter.
* The default value is `200`.


#### quic_config_set_initial_max_streams_uni
```c
void quic_config_set_initial_max_streams_uni(struct quic_config_t *config,
                                             uint64_t v);
```
* Set the `initial_max_streams_uni` transport parameter.
* The default value is `100`.


#### quic_config_set_ack_delay_exponent
```c
void quic_config_set_ack_delay_exponent(struct quic_config_t *config,
                                        uint64_t v);
```
* Set the `ack_delay_exponent` transport parameter.
* The default value is `3`.


#### quic_config_set_max_ack_delay
```c
void quic_config_set_max_ack_delay(struct quic_config_t *config,
                                   uint64_t v);
```
* Set the `max_ack_delay` transport parameter in milliseconds.
* The default value is `25`.


#### quic_config_set_congestion_control_algorithm
```c
void quic_config_set_congestion_control_algorithm(struct quic_config_t *config,
                                                  enum quic_congestion_control_algorithm v);
```
* Set congestion control algorithm that the connection would use.
* The default value is `QUIC_CONGESTION_CONTROL_ALGORITHM_CUBIC`.


#### quic_config_set_initial_congestion_window
```c
void quic_config_set_initial_congestion_window(struct quic_config_t *config, uint64_t v);
```
* Set the initial congestion window in packets.
* The default value is `10`.


#### quic_config_set_min_congestion_window
```c
void quic_config_set_min_congestion_window(struct quic_config_t *config, uint64_t v);
```
* Set the minimal congestion window in packets.
* The default value is `2`.


#### quic_config_set_slow_start_thresh
```c
void quic_config_set_slow_start_thresh(struct quic_config_t *config, uint64_t v);
```
* Set the threshold for slow start in packets.
* The default value is the maximum value of u64.


#### quic_config_set_bbr_probe_rtt_duration
```c
void quic_config_set_bbr_probe_rtt_duration(struct quic_config_t *config, uint64_t v);
```
* Set the minimum duration for BBR ProbeRTT state in milliseconds.
* The default value is `200` milliseconds.


#### quic_config_enable_bbr_probe_rtt_based_on_bdp
```c
void quic_config_enable_bbr_probe_rtt_based_on_bdp(struct quic_config_t *config, bool v);
```
* Enable using a cwnd based on bdp during ProbeRTT state.
* The default value is false.


#### quic_config_set_bbr_probe_bw_cwnd_gain
```c
void quic_config_set_bbr_probe_rtt_cwnd_gain(struct quic_config_t *config, double v);
```
* Set the cwnd gain for BBR ProbeRTT state.
* The default value is `0.75`.


#### quic_config_set_bbr_rtprop_filter_len
```c
void quic_config_set_bbr_rtprop_filter_len(struct quic_config_t *config, uint64_t v);
```
* Set the length of the BBR RTProp min filter window in milliseconds.
* The default value is `10000` milliseconds.


#### quic_config_set_bbr_probe_bw_cwnd_gain
```c
void quic_config_set_bbr_probe_bw_cwnd_gain(struct quic_config_t *config, double v);
```
* Set the cwnd gain for BBR ProbeBW state.
* The default value is `2.0`.


#### quic_config_set_initial_rtt
```c
void quic_config_set_initial_rtt(struct quic_config_t *config, uint64_t v);
```
* Set the initial RTT in milliseconds.
* The default value is `333` ms.

:::note
The configuration should be changed with caution. Setting a value less than the default
will cause retransmission of handshake packets to be more aggressive.
:::


#### quic_config_set_pto_linear_factor
```c
void quic_config_set_pto_linear_factor(struct quic_config_t *config, uint64_t v);
```
* Set the linear factor for calculating the probe timeout. The endpoint do not backoff the first `v` consecutive probe timeouts.
* The default value is `0`.


#### quic_config_set_max_pto
```
void quic_config_set_max_pto(struct quic_config_t *config, uint64_t v);
```
* Set the upper limit of probe timeout in milliseconds. A Probe Timeout (PTO) triggers the sending of one or two probe datagrams and enables a connection to recover from loss of tail packets or acknowledgments. See RFC 9002 Section 6.2.
* The probe timeout value has no limit by default.


#### quic_config_set_active_connection_id_limit
```c
void quic_config_set_active_connection_id_limit(struct quic_config_t *config,
                                                uint64_t v);
```
* Set the `active_connection_id_limit` transport parameter.
* The default value is `2`. Lower values will be ignored.


#### quic_config_enable_multipath
```c
void quic_config_enable_multipath(struct quic_config_t *config, bool enabled);
```
* Set the `enable_multipath` transport parameter.
* The default value is false. (Experimental)


#### quic_config_set_multipath_algorithm
```c
void quic_config_set_multipath_algorithm(struct quic_config_t *config, enum MultipathAlgorithm v);
```
* Set the multipath scheduling algorithm
* The default value is MultipathAlgorithm::MinRtt


#### quic_config_set_max_connection_window
```c
void quic_config_set_max_connection_window(struct quic_config_t *config,
                                           uint64_t v);
```
* Set the maximum size of the connection flow control window in bytes.
* The default value is `25165824` (24 MB).


#### quic_config_set_max_stream_window
```c
void quic_config_set_max_stream_window(struct quic_config_t *config,
                                       uint64_t v);
```
* Set the maximum size of the stream flow control window in bytes.
* The value should not be greater than the setting `max_connection_window`.
* The default value is `16777216` (16MB).

#### quic_config_set_max_concurrent_conns
```c
void quic_config_set_max_concurrent_conns(struct quic_config_t *config,
                                          uint32_t v);
```
* Set the Maximum number of concurrent connections.
* The default value is `1000000`


#### quic_config_set_reset_token_key
```c
int quic_config_set_reset_token_key(struct quic_config_t *config,
                                    const uint8_t *token_key,
                                    size_t token_key_len);
```
* Set the key for reset token generation. The `token_key_len` should be not less than 64.
* The default value is random bytes


#### quic_config_set_address_token_lifetime
```c
void quic_config_set_address_token_lifetime(struct quic_config_t *config,
                                            uint64_t seconds);
```
* Set the lifetime in seconds of address token.
* The default value is `86400` (1 Day)


#### quic_config_set_address_token_key
```c
int quic_config_set_address_token_key(struct quic_config_t *config,
                                      const uint8_t *token_keys,
                                      size_t token_keys_len);
```
* Set the key for address token generation. The `token_key_len` should be a multiple of 16.
* The default value is random bytes


#### quic_config_enable_retry
```c
void quic_config_enable_retry(struct quic_config_t *config,
                              bool enabled);
```
* Set whether stateless retry is allowed.
* Default is not allowed.


#### quic_config_set_cid_len
```c
void quic_config_set_cid_len(struct quic_config_t *config,
                             uint8_t v);
```
* Set the length of source cid. The length should not be greater than 20.
* The default value is `8`.


#### quic_config_set_send_batch_size
```c
void quic_config_set_send_batch_size(struct quic_config_t *config,
                                     uint16_t v);
```
* Set the batch size for sending packets.
* The default value is `64`.


#### quic_config_set_tls_config
```c
void quic_config_set_tls_config(struct quic_config_t *config, struct quic_tls_config_t *tls_config);
```
* Set TLS config.


#### quic_config_set_tls_selector
```c
void quic_config_set_tls_selector(struct quic_config_t *config,
                                  const struct quic_tls_config_select_methods_t *methods,
                                  quic_tls_config_select_context_t context);
```
* Set TLS config selector.


### TLS configurations initialization

#### quic_tls_config_new
```c
struct quic_tls_config_t *quic_tls_config_new(void);
```
* Create a new TlsConfig.
* The caller is responsible for the memory of the TlsConfig and should properly destroy it by calling `quic_tls_config_free`.


#### quic_tls_config_new_with_ssl_ctx
```c
struct quic_tls_config_t *quic_tls_config_new_with_ssl_ctx(SSL_CTX *ssl_ctx);
```
* Create a new TlsConfig with SSL_CTX.
* The caller is responsible for the memory of TlsConfig and SSL_CTX when use this function.

:::tip
It is recommended to use `quic_tls_config_new` to create a TLS configuration.
:::

:::note
When create a TlsConfig from raw SSL_CTX, `quic_conn_session()` and `quic_conn_set_keylog()` won't take effect.
Instead, you should use BoringSSL's [`SSL_CTX_sess_set_new_cb()`](https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_CTX_sess_set_new_cb
) and [`SSL_CTX_set_keylog_callback()`](https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_CTX_set_keylog_callback).
:::


#### quic_tls_config_free
```c
void quic_tls_config_free(struct quic_tls_config_t *tls_config);
```
* Destroy a TlsConfig instance.


### TLS configurations customization

#### quic_tls_config_set_certificate_file
```c
int quic_tls_config_set_certificate_file(struct quic_tls_config_t *tls_config,
                                         const char *cert_file);
```
* Set the PEM-encoded certificate file.


#### quic_tls_config_set_private_key_file
```c
int quic_tls_config_set_private_key_file(struct quic_tls_config_t *tls_config,
                                         const char *key_file);
```
* Set the PEM-encoded private key file.


#### quic_tls_config_set_ca_certs
```c
int quic_tls_config_set_ca_certs(struct quic_tls_config_t *tls_config, const char *ca_path);
```
* Set CA certificates.


#### quic_tls_config_set_verify
```c
void quic_tls_config_set_verify(struct quic_tls_config_t *tls_config, bool verify);
```
* Set the certificate verification behavior.


#### quic_tls_config_set_early_data_enabled
```
void quic_tls_config_set_early_data_enabled(struct quic_tls_config_t *tls_config, bool enable);
```
* Set whether early data is allowed.


#### quic_tls_config_set_application_protos
```c
int quic_tls_config_set_application_protos(struct quic_tls_config_t *tls_config,
                                           const char *const *protos,
                                           intptr_t proto_num);
```
* Set the list of supported application protocols.


#### quic_tls_config_set_ticket_key
```c
int quic_tls_config_set_ticket_key(struct quic_tls_config_t *tls_config,
                                   const uint8_t *ticket_key,
                                   size_t ticket_key_len);
```
* Set session ticket key for server.


## Endpoint

### Instantiation and destruction

#### quic_endpoint_new
```c
struct quic_endpoint_t *quic_endpoint_new(struct quic_config_t *config,
                                          bool is_server,
                                          const struct quic_transport_methods_t *handler_methods,
                                          quic_transport_context_t handler_ctx,
                                          const struct quic_packet_send_methods_t *sender_methods,
                                          quic_packet_send_context_t sender_ctx);
```
* Create a QUIC endpoint. The caller is responsible for the memory of the Endpoint and properly destroy it by calling `quic_endpoint_free`.

:::note
The endpoint doesn't own the underlying resources provided by the C caller. It is
the responsibility of the caller to ensure that these resources outlive the 
endpoint and release them correctly.
:::


#### quic_endpoint_free
```c
void quic_endpoint_free(struct quic_endpoint_t *endpoint);
```
* Destroy a QUIC endpoint.


### Receiving Packets

#### quic_endpoint_recv
```c
int quic_endpoint_recv(struct quic_endpoint_t *endpoint,
                       uint8_t *buf,
                       size_t buf_len,
                       const struct quic_packet_info_t *info);
```
* Incoming UDP datagrams are supplied to the endpoint using `quic_endpoint_recv()`. 
The endpoint may find an existing connection for the packet and deliver it to the connection, create a new connection, 
or respond with a version negotiation packet or stateless reset packet.


### Sending Packets

#### on_packets_send

```c
typedef struct quic_packet_send_methods_t {
  int (*on_packets_send)(void *psctx, 
                         struct quic_packet_out_spec_t *pkts,
                         unsigned int count);
} quic_packet_send_methods_t;
```

* The user specifies a mandatory callback, `on_packets_send`, in the `quic_packet_send_methods_t` structure that
the endpoint utilizes for sending packets.

* The callback is called when the connection is sending packets out.

* On success, it returns the number of packets sent. If this is less than `count`, 
the connection will retry with a further `on_packets_send()` call to send the 
remaining packets. 


### Timeout events

#### quic_endpoint_timeout
```c
uint64_t quic_endpoint_timeout(const struct quic_endpoint_t *endpoint);
```
* Return the amount of time in milliseconds until the next timeout event.


#### quic_endpoint_on_timeout
```c
void quic_endpoint_on_timeout(struct quic_endpoint_t *endpoint);
```
* Process timeout events on the endpoint.


### Internal events

#### quic_endpoint_process_connections
```c
int quic_endpoint_process_connections(struct quic_endpoint_t *endpoint);
```
* Process internal events of all tickable connections.


### Transport Callbacks

The `quic_transport_methods_t` lists the callbacks used by the endpoint to communicate with the user code.


#### on_conn_created
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_created)(void *tctx, 
                          struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```

* `on_conn_created` is called when a new connection has been created. This callback is called
 as soon as connection object is created inside the endpoint, but
 before the handshake is done. This callback is optional.


#### on_conn_established
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_established)(void *tctx,
                              struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
* `on_conn_established` is called when the handshake is completed. This callback is optional.


#### on_conn_closed
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_closed)(void *tctx,
                         struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
* `on_conn_closed` is called when the connection is closed. The connection is no longer
  accessible after this callback returns. It is a good time to clean up
  the connection context. This callback is optional.


#### on_stream_created
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_created)(void *tctx,
                            struct quic_conn_t *conn,
                            uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
* `on_stream_created` is called when the stream is created. This callback is optional.


#### on_stream_readable
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_readable)(void *tctx,
                             struct quic_conn_t *conn,
                             uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
* `on_stream_readable` is called when the stream is readable. This callback is called when either
  there are bytes to be read or an error is ready to be collected. This
  callback is optional.


#### on_stream_writable
```c
typedef struct quic_transport_methods_t {
  void (*on_stream_writable)(void *tctx,
                             struct quic_conn_t *conn,
                             uint64_t stream_id);
  /* ... */
} quic_transport_methods_t;
```
* `on_stream_writable` is called when the stream is writable. This callback is optional.


#### on_stream_closed
```c
typedef struct quic_transport_methods_t {
  void (*on_conn_closed)(void *tctx,
                         struct quic_conn_t *conn);
  /* ... */
} quic_transport_methods_t;
```
* `on_stream_closed` is called when the stream is closed. The stream is no longer accessible
  after this callback returns. It is a good time to clean up the stream
  context. This callback is optional.


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
* `on_new_token` is called when client receives a token in NEW_TOKEN frame. This callback
  is optional.


### Miscellaneous functions

#### quic_endpoint_set_cid_generator
```c
void quic_endpoint_set_cid_generator(struct quic_endpoint_t *endpoint,
                                     const struct ConnectionIdGeneratorMethods *cid_gen_methods,
                                     ConnectionIdGeneratorContext cid_gen_ctx);
```
* Set the connection id generator for the endpoint.
* By default, the random connection id generator is used.

#### quic_endpoint_exist_connection
```c
bool quic_endpoint_exist_connection(struct quic_endpoint_t *endpoint,
                                    const uint8_t *cid,
                                    size_t cid_len);
```
* Check whether the given connection exists.

#### quic_endpoint_get_connection
```c
struct quic_conn_t *quic_endpoint_get_connection(struct quic_endpoint_t *endpoint, uint64_t index);
```
* Get the connection by index

#### quic_endpoint_close
```c
void quic_endpoint_close(struct quic_endpoint_t *endpoint, bool force);
```
* Gracefully or forcibly shutdown the endpoint.
* If `force` is false, cease creating new connections and wait for all active
connections to close. Otherwise, forcibly close all the active connections.


## Connection

### Create connections

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
* Create a client connection. If success, the output parameter `index` carrys the index of the connection.


### Closing connections

#### quic_conn_close
```c
int quic_conn_close(struct quic_conn_t *conn,
                    bool app,
                    uint64_t err,
                    const uint8_t *reason,
                    size_t reason_len);
```
* Close the connection.



### Connection Context

#### quic_conn_set_context
```c
void quic_conn_set_context(struct quic_conn_t *conn,
                           void *data);
```
* Set user context for the connection.


#### quic_conn_context
```c
void *quic_conn_context(struct quic_conn_t *conn);
```
* Get user context for the connection.


### Connection logging and tracing

#### quic_conn_set_keylog
```c
void quic_conn_set_keylog(struct quic_conn_t *conn, void (*cb)(const uint8_t *data,
                                                               size_t data_len,
                                                               void *argp), void *argp);
```
* Set the callback for writing keylog.
* `cb` is a callback function that will be called for each keylog.
* `data` is a keylog message and `argp` is user-defined data that will be passed to the callback.


#### quic_conn_set_keylog_fd
```c
void quic_conn_set_keylog_fd(struct quic_conn_t *conn,
                             int fd);
```
* Set keylog file


#### quic_conn_set_qlog
```c
void quic_conn_set_qlog(struct quic_conn_t *conn,
                        void (*cb)(const uint8_t *data, size_t data_len, void *argp),
                        void *argp,
                        const char *title,
                        const char *desc);
```
* Set the callback for writing qlog.
* `cb` is a callback function that will be called for each qlog.
* `data` is a qlog message and `argp` is user-defined data that will be passed to the callback.
* `title` and `desc` respectively refer to the "title" and "description" sections of qlog.


#### quic_conn_set_qlog_fd
```c
void quic_conn_set_qlog_fd(struct quic_conn_t *conn,
                           int fd,
                           const char *title,
                           const char *desc);
```
* Set qlog file


#### quic_conn_trace_id
```c
void quic_conn_trace_id(struct quic_conn_t *conn,
                        const uint8_t **out,
                        size_t *out_len);
```
* Return the trace id of the connection



### Miscellaneous functions

#### quic_conn_index
```c
uint64_t quic_conn_index(struct quic_conn_t *conn);
```
* Get index of the connection.


#### quic_conn_is_server
```c
bool quic_conn_is_server(struct quic_conn_t *conn);
```
* Check whether the connection is a server connection.


#### quic_conn_is_established
```c
bool quic_conn_is_established(struct quic_conn_t *conn);
```
* Check whether the connection handshake is complete.


#### quic_conn_is_resumed
```c
bool quic_conn_is_resumed(struct quic_conn_t *conn);
```
* Check whether the connection is created by a resumed handshake.


#### quic_conn_is_in_early_data
```c
bool quic_conn_is_in_early_data(struct quic_conn_t *conn);
```
* Check whether the connection has a pending handshake that has progressed
  enough to send or receive early data.


#### quic_conn_is_multipath
```c
bool quic_conn_is_multipath(struct quic_conn_t *conn);
```
 * Check whether the established connection works in multipath mode.


#### quic_conn_application_proto
```c
void quic_conn_application_proto(struct quic_conn_t *conn,
                                 const uint8_t **out,
                                 size_t *out_len);
```
* Return the negotiated application level protocol.


#### quic_conn_server_name
```c
void quic_conn_server_name(struct quic_conn_t *conn,
                           const uint8_t **out,
                           size_t *out_len);
```
* Return the server name in the TLS SNI extension.


#### quic_conn_session
```c
void quic_conn_session(struct quic_conn_t *conn,
                       const uint8_t **out,
                       size_t *out_len);
```
* Return the session data used by resumption.


#### quic_conn_early_data_reason
```c
int quic_conn_early_data_reason(struct quic_conn_t *conn,
                                const uint8_t **out,
                                size_t *out_len);
```
* Return details why 0-RTT was accepted or rejected.


#### quic_conn_is_closing
```c
bool quic_conn_is_closing(struct quic_conn_t *conn);
```
* Check whether the connection is closing.


#### quic_conn_is_draining
```c
bool quic_conn_is_draining(struct quic_conn_t *conn);
```
* Check whether the connection is draining.


#### quic_conn_is_closed
```c
bool quic_conn_is_closed(struct quic_conn_t *conn);
```
* Check whether the connection is closing.


#### quic_conn_is_handshake_timeout
```c
bool quic_conn_is_handshake_timeout(struct quic_conn_t *conn);
```
* Check whether the connection was closed due to handshake timeout.


#### quic_conn_is_idle_timeout
```c
bool quic_conn_is_idle_timeout(struct quic_conn_t *conn);
```
* Check whether the connection was closed due to idle timeout.


#### quic_conn_is_reset
```c
bool quic_conn_is_reset(struct quic_conn_t *conn);
```
* Check whether the connection was closed due to stateless reset.


#### quic_conn_peer_error
```c
bool quic_conn_peer_error(struct quic_conn_t *conn,
                          bool *is_app,
                          uint64_t *error_code,
                          const uint8_t **reason,
                          size_t *reason_len);
```
* Returns the error from the peer, if any.


#### quic_conn_local_error
```c
bool quic_conn_local_error(struct quic_conn_t *conn,
                           bool *is_app,
                           uint64_t *error_code,
                           const uint8_t **reason,
                           size_t *reason_len);
```
* Returns the local error, if any.


#### quic_conn_stats
```c
const struct quic_conn_stats_t *quic_conn_stats(struct quic_conn_t *conn);
```
* Return statistics about the connection.

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

| Item | Description |
| ---- | ----------- |
| recv_count | Total number of received packets on the connection |
| recv_bytes | Total number of bytes received on the connection |
| sent_count | Total number of sent packets on the connection |
| sent_bytes | Total number of bytes sent on the connection |
| lost_count | Total number of lost packets on the connection |
| lost_bytes | Total number of bytes lost on the connection |



## Stream

### Create streams

#### quic_stream_new
```c
int quic_stream_new(struct quic_conn_t *conn,
                    uint64_t stream_id,
                    uint8_t urgency,
                    bool incremental);
```
* Create a stream with specified priority.

:::tip
This is a low-level API for stream creation. It is recommended to use
`quic_stream_bidi_new` for bidirectional streams or `quic_stream_uni_new`
for unidrectional streams.
:::


#### quic_stream_bidi_new
```
int quic_stream_bidi_new(struct quic_conn_t *conn,
                         uint8_t urgency,
                         bool incremental,
                         uint64_t *stream_id);
```
* Create a new quic bidiectional stream with the given priority.
* If success, the output parameter `stream_id` carrys the id of the created stream.


#### quic_stream_uni_new
```
int quic_stream_uni_new(struct quic_conn_t *conn,
                        uint8_t urgency,
                        bool incremental,
                        uint64_t *stream_id);
```
* Create a new quic uniectional stream with the given priority.
* If success, the output parameter `stream_id` carrys the id of the created stream.


### Stream priorities

#### quic_stream_set_priority
```c
int quic_stream_set_priority(struct quic_conn_t *conn,
                             uint64_t stream_id,
                             uint8_t urgency,
                             bool incremental);
```
* Set the priority for a stream.

### Stream events

To register or unregister an interest in a read or write event, use the following functions:

#### quic_stream_wantwrite
```c
int quic_stream_wantwrite(struct quic_conn_t *conn,
                          uint64_t stream_id,
                          bool want);
```
* Set want write flag for a stream.

#### quic_stream_wantread
```c
int quic_stream_wantread(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         bool want);
```
* Set want read flag for a stream.

### Reading from streams

#### quic_stream_read
```c
ssize_t quic_stream_read(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         uint8_t *out,
                         size_t out_len,
                         bool *fin);
```
* Read data from a stream.


### Writing to streams

#### quic_stream_write
```c
ssize_t quic_stream_write(struct quic_conn_t *conn,
                          uint64_t stream_id,
                          const uint8_t *buf,
                          size_t buf_len,
                          bool fin);
```
* Write data to a stream.

### Closing streams

#### quic_stream_shutdown
```c
int quic_stream_shutdown(struct quic_conn_t *conn,
                         uint64_t stream_id,
                         enum quic_shutdown direction,
                         uint64_t err);
```
* Shutdown stream reading or writing.



### Stream context

#### quic_stream_set_context
```c
int quic_stream_set_context(struct quic_conn_t *conn,
                            uint64_t stream_id,
                            void *data);
```
* Set user context for a stream.


#### quic_stream_context
```c
void *quic_stream_context(struct quic_conn_t *conn,
                          uint64_t stream_id);

```
* Return the stream’s user context.



### Miscellaneous functions

#### quic_stream_capacity
```c
ssize_t quic_stream_capacity(struct quic_conn_t *conn,
                             uint64_t stream_id);
```
* Return the stream’s send capacity in bytes.


#### quic_stream_finished
```c
bool quic_stream_finished(struct quic_conn_t *conn,
                          uint64_t stream_id);
```
* Return true if all the data has been read from the stream.



## Path

### Create paths

#### quic_conn_add_path
```c
int quic_conn_add_path(struct quic_conn_t *conn,
                       const struct sockaddr *local,
                       socklen_t local_len,
                       const struct sockaddr *remote,
                       socklen_t remote_len,
                       uint64_t *index);
```
* Add a new path on the client connection.


### Miscellaneous functions
#### quic_conn_active_path
```c
bool quic_conn_active_path(const struct quic_conn_t *conn,
                           struct quic_path_address_t *a);
```
* Return the address of the active path


#### quic_path_address_iter_t 
```c
struct quic_path_address_iter_t *quic_conn_paths(struct quic_conn_t *conn);
```
* Return an iterator over path addresses. The caller should properly destroy it by calling `quic_four_tuple_iter_free`.


#### quic_conn_path_iter_next
```c
bool quic_conn_path_iter_next(struct quic_path_address_iter_t *iter,
                              struct quic_path_address_t *a);
```
* Return the address of the next path.


#### quic_conn_path_iter_free
```c
void quic_conn_path_iter_free(struct quic_path_address_iter_t *iter);
```
* Destroy the FourTupleIter


#### quic_conn_path_stats
```c
const struct quic_path_stats_t *quic_conn_path_stats(struct quic_conn_t *conn,
                                                     const struct sockaddr *local,
                                                     socklen_t local_len,
                                                     const struct sockaddr *remote,
                                                     socklen_t remote_len);
```
* Return the latest statistics about the specified path.

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
| recv_count | The number of QUIC packets received |
| recv_bytes | The number of received bytes |
| sent_count | The number of QUIC packets sent |
| sent_bytes | The number of sent bytes |
| lost_count | The number of QUIC packets lost |
| lost_bytes | The number of lost bytes |
| acked_count | Total number of packets acked |
| acked_bytes | Total number of bytes acked |
| init_cwnd | Initial congestion window in bytes |
| final_cwnd | Final congestion window in bytes |
| max_cwnd | Maximum congestion window in bytes |
| min_cwnd | Minimum congestion window in bytes |
| max_inflight | Maximum inflight data in bytes |
| loss_event_count | Total loss events |
| cwnd_limited_count | Total congestion window limited events |
| cwnd_limited_duration | Total duration of congestion windowlimited events in microseconds |
| min_rtt | Minimum roundtrip time in microseconds |
| max_rtt | Maximum roundtrip time in microseconds |
| srtt | Smoothed roundtrip time in microseconds |
| rttvar | Roundtrip time variation in microseconds |
| in_slow_start | Whether the congestion controller is in slow start status |
| pacing_rate | Pacing rate estimated by congestion control algorithm |



## Miscellaneous types and functions

### Miscellaneous types

#### quic_transport_handler_t
```c
typedef void *quic_transport_context_t;

typedef struct quic_transport_handler_t {
  const struct quic_transport_methods_t *methods;
  quic_transport_context_t context;
} quic_transport_handler_t;
```

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
* Outgoing packets. 


#### quic_shutdown 

```c
typedef enum quic_shutdown {
  QUIC_SHUTDOWN_READ = 0,
  QUIC_SHUTDOWN_WRITE = 1,
} quic_shutdown;

```
* The stream's side to shutdown.


#### quic_path_address_iter_t 
```c
typedef struct quic_path_address_iter_t quic_path_address_iter_t;
```
* An iterator over FourTuple.


#### quic_congestion_control_algorithm
```c
typedef enum quic_congestion_control_algorithm {
  QUIC_CONGESTION_CONTROL_ALGORITHM_CUBIC,
  QUIC_CONGESTION_CONTROL_ALGORITHM_BBR,
  QUIC_CONGESTION_CONTROL_ALGORITHM_BBR3,
  QUIC_CONGESTION_CONTROL_ALGORITHM_COPA,
} quic_congestion_control_algorithm;
```
* Congestion control algorithms.

| Algorithm | Description |
| --------- | ----------- |
| CUBIC | [CUBIC](https://www.rfc-editor.org/rfc/rfc9438.html) uses a cubic function instead of a linear window increase function of the current TCP standards to improve scalability and stability under fast and long-distance networks. |
| BBR | [BBR](https://datatracker.ietf.org/doc/html/draft-cardwell-iccrg-bbr-congestion-control) uses recent measurements of a transport connection's delivery rate, round-trip time, and packet loss rate to build an explicit model of the network path. The model is then used to control data transmission speed and the maximum volume of data allowed in flight in the network at any time. |
| BBR3 | [BBRv3](https://datatracker.ietf.org/meeting/117/materials/slides-117-ccwg-bbrv3-algorithm-bug-fixes-and-public-internet-deployment-00) is the latest version of BBR, including various fixes and algorithm updates that reduce packet re-transmit rate and slightly improve latency. (Experimental) |
| COPA | [COPA](https://web.mit.edu/copa/) is a tunable delay-based congestion control algorithm. COPA is based on an objective function where the trade-off between throughput and delay can be configured via a user-specified parameter. (Experimental) |


#### quic_multipath_algorithm
```c
typedef enum quic_multipath_algorithm {
  QUIC_MULTIPATH_ALGORITHM_MIN_RTT,
  QUIC_MULTIPATH_ALGORITHM_REDUNDANT,
  QUIC_MULTIPATH_ALGORITHM_ROUND_ROBIN,
} quic_multipath_algorithm;
```
* Multipath scheduling algorithms.

| Algorithm | Description |
| --------- | ----------- |
| MIN_RTT | The scheduler sends packets over the path with the lowest smoothed RTT among all available paths. It aims to optimize throughput and achieve load balancing, making it particularly advantageous for bulk transfer applications. |
| REDUNDANT | The scheduler sends all packets redundantly on all available paths. It utilizes additional bandwidth to minimize latency, thereby reducing the overall flow completion time for applications with bounded bandwidth requirements that can be met by a single path. In scenarios where two paths with varying available bandwidths are present, it ensures a goodput at least equivalent to the best single path. |
| ROUND_ROBIN | The scheduler sends packets over available paths in a round robin manner. It is only used for testing purposes. |



### Miscellaneous functions

#### quic_set_logger
```c
void quic_set_logger(void (*cb)(const uint8_t *data, size_t data_len, void *argp),
                     void *argp,
                     const char *level);
```
* Set callback for logging.
* `cb` is a callback function that will be called for each log message.
* `data` is a `\n` terminated log message and `argp` is user-defined data that will be passed to the callback.
* `level` is a case-insensitive string used for specifying the log level. Valid values are `"OFF"`, `"ERROR"`, `"WARN"`, `"INFO"`, `"DEBUG"`, and `"TRACE"`. If its value is NULL or invalid, the default log level is "OFF".


#### quic_packet_header_info
```c
int quic_packet_header_info(uint8_t *buf,
                            size_t buf_len,
                            uint8_t dcid_len,
                            bool *long_header,
                            uint32_t *version,
                            struct ConnectionId *dcid);
```
* Extract the header form, version and destination connection id from the QUIC packet.

