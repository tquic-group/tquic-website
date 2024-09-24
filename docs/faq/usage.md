---
title: Usage
sidebar_position: 2
---

# Usage


## Whether TQUIC supports mobile platforms?

TQUIC is implemented in the Rust language, enabling it to be run on any platform supported by Rust. TQUIC currently supports Linux, MacOS, FreeBSD, Windows, iOS, and Android.


## Which versions of the QUIC protocol are supported?

TQUIC currently supports [QUIC v1](https://datatracker.ietf.org/doc/html/rfc9000).


## Got the undefined reference to cbrt error when linking the TQUIC library

The `undefined reference to 'cbrt'` error occurs because the `cbrt` function is part of the math library (libm), which needs to be explicitly linked.
* For GCC/G++/Clang/Clang++ compilers, you can resolve this by adding the `-lm` option.
*  If you are using CMake, include the following in your CMakeLists.txt:

```
target_link_libraries(
  tquic
  m
)
```
