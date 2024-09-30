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
* Remove unused features

If you do not use `h3`, you can manually remove the h3-related code.

If you do not use `qlog`, you can manually remove the qlog-related code.

:::tip
Future versions will provide feature flags to easily disable certain features.
:::


## Even Further Optimization
You can refer to [Minimizing Rust Binary Size](https://github.com/johnthagen/min-sized-rust) for more tips and techniques.

