---
title: 问题定位相关
sidebar_position: 4
---

# 问题定位相关


## 如何分析加密的QUIC流量？

可以使用示例工具的`--keylog-file`选项保存TLS密钥日志，或者在你自己的程序中使用[keylog API](../api_reference/c_quic/#connection-logging-and-tracing)来保存TLS密钥日志。
该密钥日志文件可以用来在Wireshark中解密QUIC流量。

:::tip
在wireshake中，依次打开`Edit-> Preferences-> Protocols-> TLS`，然后将`(Pre)-Master-Secret log filename preference`设置为TLS密钥日志文件路径
:::


## 如何基于qlog日志分析QUIC协议？

可以使用示例工具的`--qlog-dir`选项保存[qlog](https://github.com/quicwg/qlog)日志，或者在你自己的程序中使用[qlog API](../api_reference/c_quic/#connection-logging-and-tracing)来保存qlog日志。

该日志文件可以基于qlog工具进一步分析。你可以使用[qvis工具套件](https://qvis.quictools.info/)，或者自行开发工具，来进一步分析qlog日志。

:::tip
qvis并不计划支持qlog 0.4及以上版本，直到qlog 1.0 RC发布。你可以采用如下命令将TQUIC生成的qlog转换为qvis兼容格式：

```
git clone https://github.com/tencent/tquic
cd tquic/tools/script
 
./tquic_qvis.sh <qlog-filename>
```
:::


## 如何将生成的qlog日志转换为JSON格式？

TQUIC目前生成的qlog文件采用流式的**JSON-SEQ**格式。可以使用下面命令将其转换为**JSON**格式:
```
sed 's/^\x1e//' <qlog-filename> | jq -s '.[1:] as $events | .[0] | .trace.events=$events | .traces=[.trace] | del(.trace) | .qlog_format="JSON"'
```

:::tip
jq工具的安装指南参见 https://jqlang.github.io/jq/download/ 。
:::

