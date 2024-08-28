---
title: Installation
sidebar_position: 1
---

# Installation

## Failed to run custom build command for TQUIC?

If you get a `not found CMakeLists.txt` error, it is likely because the submodules of tquic were not downloaded properly.

```
error: failed to run custom build command for `tquic`

...
  CMake Error: The source directory "third_party/boringssl" does not appear to contain CMakeLists.txt.
  Specify --help for usage, or press the help button on the CMake GUI.
  thread 'main' panicked at '
  command did not execute successfully, got: exit status: 1

  build script failed, must exit now', index.crates.io/cmake-0.1.50/src/lib.rs:1098:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

The source code of tquic should be cloned using the `--recursive` option:
```
git clone https://github.com/tencent/tquic --recursive
```

If the source code has already been cloned, but you forgot to use the option `--recursive`, you can manually download the submodules like this:
```
git submodule init && git submodule update
```


## Failed to build the sources released on github?

The released code (https://github.com/Tencent/tquic/releases) does not include the tquic dependent submodule due to GitHub restrictions.

The recommended command to obtain the specified version of tquic source codes is as follows.

```
# Please replace the 'vx.y.z' with the version you need
git clone -b vx.y.z --recursive https://github.com/Tencent/tquic.git
```


## Not found example tools of TQUIC?

If you cannot locate the example tools in the directory `./target/release`, it is likely because you forgot to include the build option `--all` or `--release`.


## Not found C library of TQUIC?

If you cannot locate the static or dynamic c library of tquic in the directory `./target/release`, it is likely because you forgot to include the build option `-F ffi` or `--release`.


## How to specify the MacOS deployment target for TQUIC library?

You can use the environment varialbe `MACOSX_DEPLOYMENT_TARGET` to signal targeting older versions of macOS.

```
# Replace `10.12` with your desired deployment target
export MACOSX_DEPLOYMENT_TARGET=10.12
cargo build --release -F ffi
```


## How to optimize Library File Size for TQUIC on Mobile Platforms

Please refer to [Library Size Optimization](../further_readings/minimizing_size/)


## How to Fix "undefined reference to 'cbrt'" When Linking to a C/C++ Project?

The "undefined reference to 'cbrt'" error occurs because the cbrt function is part of the math library (libm), which needs to be explicitly linked.

For GCC/G++/Clang/Clang++ compilers, you can resolve this by adding the -lm option. If you are using CMake, include the following in your CMakeLists.txt:

```
target_link_libraries(
  this_is_your_lib_name 
  # Add other libraries if needed
  tquic
  m
)
```
