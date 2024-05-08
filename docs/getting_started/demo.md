---
title: Example tools
sidebar_position: 2
---

# Example tools

:::tip

The example tools are built by adding an option `--all` to the `cargo build` command. They are generated and saved in the directory `./target/release/`.
:::


## Server

### Run the quic server
```bash
./tquic_server -c cert.crt -k cert.key -l 127.0.0.1:8443
```

The server is configured to listen on the address `127.0.0.1:8443` and act as an HTTP/3 file server.

The test certificate `cert.crt` and private key `cert.key` can be found in the directory `./src/tls/testdata/`. They can also be generated using the following commands:
```
openssl genpkey -algorithm RSA -out cert.key -pkeyopt rsa_keygen_bits:2048
openssl req -new -key cert.key -out cert.csr -subj "/C=CN/ST=beijing/L=beijing/O=tquic/CN=example.org"
openssl x509 -req -in cert.csr -signkey cert.key -out cert.crt
```

### More options

You can explore different options by using the `-h` option for help information.
```bash
./tquic_server -h
```

The output is as follows:
```
Usage: tquic_server [OPTIONS]

Options:
  -l, --listen <ADDR>  Address to listen [default: 0.0.0.0:4433]
  -c, --cert <FILE>    TLS certificate in PEM format [default: ./cert.crt]
  -k, --key <FILE>     TLS private key in PEM format [default: ./cert.key]
  -r, --root <DIR>     Document root directory [default: ./]
  -h, --help           Print help

Protocol:
  -t, --ticket-key <STR>
          Session ticket key [default: "tquic key"]
      --address-token-key <STR>
          Key for generating address token
      --enable-retry
          Enable stateless retry
      --disable-stateless-reset
          Disable stateless reset
      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>
          Congestion control algorithm [default: BBR]
      --initial-congestion-window <NUM>
          Initial congestion window in packets [default: 32]
      --min-congestion-window <NUM>
          Minimum congestion window in packets [default: 4]
  -e, --enable-multipath
          Enable multipath transport
  -m, --multipath-algor <MULTIPATH_ALGOR>
          Multipath scheduling algorithm [default: MINRTT]
      --active-cid-limit <NUM>
          Set active_connection_id_limit transport parameter. Values lower than 2 will be ignored [default: 2]
      --recv-udp-payload-size <NUM>
          Set max_udp_payload_size transport parameter [default: 65527]
      --send-udp-payload-size <NUM>
          Set the maximum outgoing UDP payload size [default: 1200]
      --handshake-timeout <TIME>
          Handshake timeout in microseconds [default: 10000]
      --idle-timeout <TIME>
          Connection idle timeout in microseconds [default: 30000]
      --initial-rtt <TIME>
          Initial RTT in milliseconds [default: 333]
      --pto-linear-factor <NUM>
          Linear factor for calculating the probe timeout [default: 10]
      --max-pto <TIME>
          Upper limit of probe timeout in microseconds [default: 10000]
      --anti-amplification-factor <NUM>
          Anti amplification factor [default: 3]
      --cid-len <NUM>
          Length of connection id in bytes [default: 8]

Output:
      --log-level <LOG_LEVEL>  Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]
      --log-file <FILE>        Log file path. If no file is specified, logs will be written to `stderr`
      --keylog-file <FILE>     Save TLS key log into the given file
      --qlog-dir <DIR>         Save qlog file (<trace_id>.qlog) into the given directory

Misc:
      --send-batch-size <NUM>  Batch size for sending packets [default: 16]
```


## Client

### Run the quic client

```bash
./tquic_client --connect-to 127.0.0.1:8443 https://example.org
```

### More options

Use the `-h` option for help information.

```bash
./tquic_client -h
```

The output is as follows:

```
Usage: tquic_client [OPTIONS] [URLS]...

Arguments:
  [URLS]...  Request URLs. The host of the first url is used as TLS SNI

Options:
  -c, --connect-to <ADDR>       Server's address
      --local-addresses <ADDR>  Optional local IP addresses for client. e.g 192.168.1.10,192.168.2.20
  -h, --help                    Print help

Concurrency:
  -t, --threads <NUM>
          Number of threads [default: 1]
      --max-concurrent-conns <NUM>
          Number of concurrent connections per thread [default: 1]
      --max-concurrent-requests <NUM>
          Number of concurrent requests per connection [default: 1]
      --max-requests-per-conn <NUM>
          Number of max requests per connection before re-establishment. "0" means infinity mode [default: 1]
      --total-requests-per-thread <NUM>
          Total number of requests to send per thread. "0" means infinity mode. Values below number of urls will be considered as number of urls [default: 1]
  -d, --duration <TIME>
          Benchmarking duration in seconds. "0" means infinity mode. Client will exit upon reaching the total_requests_per_thread or duration limit [default: 0]

Protocol:
  -a, --alpn <STR>
          ALPN, separated by "," [default: h3,http/0.9,hq-interop] [possible values: hq-interop, http/0.9, h3]
  -s, --session-file <FILE>
          File used for session resumption
  -e, --enable-early-data
          Enable early data
      --disable-stateless-reset
          Disable stateless reset
      --congestion-control-algor <CONGESTION_CONTROL_ALGOR>
          Congestion control algorithm [default: BBR]
      --initial-congestion-window <NUM>
          Initial congestion window in packets [default: 32]
      --min-congestion-window <NUM>
          Minimum congestion window in packets [default: 4]
      --enable-multipath
          Enable multipath transport
      --multipath-algor <MULTIPATH_ALGOR>
          Multipath scheduling algorithm [default: MINRTT]
      --active-cid-limit <NUM>
          Set active_connection_id_limit transport parameter. Values lower than 2 will be ignored [default: 2]
      --recv-udp-payload-size <NUM>
          Set max_udp_payload_size transport parameter [default: 65527]
      --send-udp-payload-size <NUM>
          Set the maximum outgoing UDP payload size [default: 1200]
      --handshake-timeout <TIME>
          Handshake timeout in microseconds [default: 10000]
      --idle-timeout <TIME>
          Connection idle timeout in microseconds [default: 30000]
      --initial-rtt <TIME>
          Initial RTT in milliseconds [default: 333]
      --pto-linear-factor <NUM>
          Linear factor for calculating the probe timeout [default: 10]
      --max-pto <TIME>
          Upper limit of probe timeout in microseconds [default: 10000]
      --cid-len <NUM>
          Length of connection id in bytes [default: 8]

Output:
  -p, --print-res           Print response header and body to stdout
      --dump-dir <DIR>      Dump response body into the given directory. If the specified directory does not exist, a new directory will be created
      --log-level <STR>     Log level, support OFF/ERROR/WARN/INFO/DEBUG/TRACE [default: INFO]
      --log-file <FILE>     Log file path. If no file is specified, logs will be written to `stderr`
  -k, --keylog-file <FILE>  Save TLS key log into the given file
      --qlog-dir <DIR>      Save qlog file (<trace_id>.qlog) into the given directory

Misc:
      --connection-failure-threshold <NUM>
          Client will exit if consecutive failure reaches the threshold at the beginning [default: 10]
      --send-batch-size <NUM>
          Batch size for sending packets [default: 1]
      --max-sample <NUM>
          Number of max samples per thread used for request time statistics [default: 100000]
```
