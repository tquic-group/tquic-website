---
title: 移动端库大小优化
sidebar_position: 4
---

# TQUIC移动端库文件大小优化

## 基本优化

* 使用特定编译选项优化二进制大小

修改Cargo.toml并增加如下配置：
```
[profile.release]
lto = true
opt-level = "z"  # Optimize for size
codegen-units = 1
```

然后再使用`cargo`命令编译TQUIC，详见[编译说明](../getting_started/installation/)


* 去除符号信息
```
# iOS
strip -x ./libtquic.dylib

# Android或Harmony
llvm-strip --strip-unneeded ./libtquic.so
```

:::tip
编译后的库文件大小约2MB，不同TQUIC版本的大小可能略有差异。
:::


## 进一步优化

* 禁用不需要的功能

如果不使用qlog，可以手工禁用qlog相关代码
```
# qlog feature is disabled when building
cargo build --all --no-default-features -F ffi,h3
```

如果不使用h3，可以手工禁用h3相关代码
```
# h3 feature is disabled when building
cargo build --all --no-default-features -F ffi,qlog
```


## 更进一步优化

可以参考[Minimizing Rust Binary Size](https://github.com/johnthagen/min-sized-rust) 中提供的更多技巧。

