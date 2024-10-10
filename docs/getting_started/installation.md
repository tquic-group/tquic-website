---
title: Installation
sidebar_position: 1
---

# Installation

## Supported Platforms

TQUIC is written in the [Rust language](https://www.rust-lang.org/). Currently, it runs on Linux, MacOS, FreeBSD, Windows, iOS, Android and Harmony.


## Prerequisites

* [rust 1.70+](https://www.rust-lang.org/tools/install)
* [git 2.0+](https://git-scm.com/downloads)
* [gcc 9.3+](https://gcc.gnu.org/releases.html)
* [cmake 3.22+](https://cmake.org/download/)


## Building

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Linux" label="Linux" default>

To build TQUIC for Linux, run the following commands:
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--all` option enables cargo to build both the tquic library and example tools.
:::

If you want to enable the C API, just add `-F ffi` option to the `cargo build` command:

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="MacOS" label="MacOS">

To build TQUIC for MacOS, run the following commands:
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--all` option enables cargo to build both the tquic library and example tools.
:::

If you want to enable the C API, just add `-F ffi` option to the `cargo build` command:

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="FreeBSD" label="FreeBSD">

To build TQUIC for FreeBSD, you need the following:
```bash
sudo pkg install -y gmake
```

To build TQUIC for FreeBSD, run the following commands:
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--all` option enables cargo to build both the tquic library and example tools.
:::

If you want to enable the C API, just add `-F ffi` option to the `cargo build` command:

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="Windows" label="Windows">

To build TQUIC for Windows, you need the following:

* [Install Visual Studio](https://visualstudio.microsoft.com/zh-hans/)

* [Install NASM](https://www.nasm.us/)

To build TQUIC for Windows, run the following commands:
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `.\target\release\`, instead of the default location `.\target\debug\`.

The `--all` option enables cargo to build both the tquic library and example tools.
:::

If you want to enable the C API, just add `-F ffi` option to the `cargo build` command:

```bash
cargo build --release -F ffi
```

  </TabItem>


  <TabItem value="Android" label="Android">

To build TQUIC for Android, you need the following:

* [Install Android NDK](https://developer.android.com/studio/projects/install-ndk?hl=zh-cn) and set the `ANDROID_NDK_HOME` environment variable

```bash
# Set the ANDROID_NDK_HOME environment variable to the NDK installation path 
export ANDROID_NDK_HOME=/path/to/android-ndk
```

* Install Rust toolchain for Android and cargo-ndk

```bash
# Install Rust toolchain for Android
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android

# Install cargo-ndk for building libraries for Android without hassle
cargo install cargo-ndk
```

To build the TQUIC library, run the following commands:

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

# The -t <architecture> and -p <NDK version> options are mandatory.
cargo ndk -t arm64-v8a -p 21 -- build --features ffi --release
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--features ffi` option enables cargo to build the C API.
:::
  </TabItem>


  <TabItem value="iOS" label="iOS">

To build TQUIC for iOS, you need the following:

* [Install Xcode](https://developer.apple.com/xcode/) and Xcode command-line tools

```bash
# Install Xcode command-line tools. 
xcode-select --install
```
  
* Install Rust toolchain for iOS and cargo-lipo
```bash
# Install the Rust toolchain for iOS
rustup target add aarch64-apple-ios x86_64-apple-ios
  
# Install cargo-lipo for automatically creating universal libraries for iOS 
cargo install cargo-lipo
```

To build the TQUIC library, run the following commands:
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo lipo --features ffi --release
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--features ffi` option enables cargo to build the C API.
:::
  </TabItem>


  <TabItem value="Harmony" label="Harmony">

To build TQUIC for Harmony, you need the following:

* [Install OHOS NDK](https://gitee.com/openharmony/docs/blob/master/zh-cn/release-notes/OpenHarmony-v4.0-release.md#%E4%BB%8E%E9%95%9C%E5%83%8F%E7%AB%99%E7%82%B9%E8%8E%B7%E5%8F%96) and set the `OHOS_NDK_HOME` environment variable
```bash
wget https://repo.huaweicloud.com/openharmony/os/4.0-Release/ohos-sdk-windows_linux-public.tar.gz
tar -xvzf ohos-sdk-windows_linux-public.tar.gz
cd ohos-sdk/linux/
unzip native-linux-x64-4.0.10.13-Release.zip

# Set the OHOS_NDK_HOME environment variable to the NDK installation path for Linux
# eg. export OHOS_NDK_HOME=/path/to/ohos-sdk/linux/
export OHOS_NDK_HOME=`pwd`
```

* Install ohrs tool to help us build
```bash
cargo install ohrs
```

:::tip
`ohrs` is a scaffolding tool designed to streamline the Rust build process for OpenHarmony. You can see detail with [ohos.rs - cli/build](https://ohos.rs/docs/cli/build.html)
:::

* Install Rust toolchain for Harmony

```bash
rustup target add aarch64-unknown-linux-ohos
rustup target add armv7-unknown-linux-ohos
rustup target add x86_64-unknown-linux-ohos
```

To build the TQUIC library, run the following commands:

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

ohrs build -- --features ffi --release
```

:::tip
The `--release` option enables cargo to build optimized artifacts and put them in the directory `./target/release/`, instead of the default location `./target/debug/`.

The `--features ffi` option enables cargo to build the C API.
:::
  </TabItem>

</Tabs>


## Running the tests

The command below runs unit tests:

```bash
cargo test
```


## Further readings

* [How to use the demo client and demo server](./demo/)
* [How to use the API of TQUIC](../category/tutorial/)


## Problems?

* Please refer to the [documentation for common installation issues](../faq/installation/) first.
* Ask for help on our [GitHub issues](https://github.com/tencent/tquic/issues).
