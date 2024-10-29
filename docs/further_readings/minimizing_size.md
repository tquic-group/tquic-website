---
title: Library Size Optimization
sidebar_position: 4
---

# Optimizing Library File Size for TQUIC on Mobile Platforms

## Basic Optimization

* Instruct the compiler to optimize for minimal binary size

Modify Cargo.toml and add the following configuration:

```
[profile.release]
lto = true
opt-level = "z"  # Optimize for size
codegen-units = 1
```

Then compile TQUIC using the `cargo` command. For more details, see [Building](../getting_started/installation/).


* Strip symbols from TQUIC library file
```
# iOS
strip -x ./libtquic.dylib

# Android or Harmony
llvm-strip --strip-unneeded ./libtquic.so
```

:::tip
The size of the compiled TQUIC library is approximately 2MB, though it may vary slightly with different versions.
:::


## Further Optimization
* Disable unused features

If you do not use `qlog`, you can manually disable the qlog-related code.
```
# qlog feature is disabled when building
cargo build --all --no-default-features -F ffi,h3
```

If you do not use `h3`, you can manually disable the h3-related code.

```
# h3 feature is disabled when building
cargo build --all --no-default-features -F ffi,qlog
```

## Even Further Optimization
You can refer to [Minimizing Rust Binary Size](https://github.com/johnthagen/min-sized-rust) for more tips and techniques.

