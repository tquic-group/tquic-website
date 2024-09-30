---
title: 使用相关
sidebar_position: 2
---

# 使用相关


## TQUIC是否支持移动端平台?

TQUIC是基于Rust语言中实现的，它具备在Rust支持的任何平台上运行的能力。目前TQUIC支持Linux、MacOS、FreeBSD、Windows、iOS、Android、Harmony平台。


## 支持哪些版本的QUIC协议?

TQUIC目前支持[QUIC v1](https://datatracker.ietf.org/doc/html/rfc9000)。


## 链接TQUIC库时遇到undefined reference cbrt错误

`cbrt` 函数是`libm`数学库的导出函数，开发者需要手动链接`libm`库。
* 对于GCC/G++/Clang/Clang++编译器，可以使用`-lm`编译选项。
* 如果使用CMake，可以在CMakeLists.txt中添加:

```
target_link_library(
  tquic
  m
)
```
