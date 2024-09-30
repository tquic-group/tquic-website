---
title: 安装
sidebar_position: 1
---

# 安装

## 支持平台

TQUIC基于Rust语言开发，目前支持Linux、MacOS、FreeBSD、Windows、iOS、Android、Harmony平台。


## 环境准备 

* [rust 1.70+](https://www.rust-lang.org/tools/install)
* [git 2.0+](https://git-scm.com/downloads)
* [gcc 9.3+](https://gcc.gnu.org/releases.html)
* [cmake 3.22+](https://cmake.org/download/)


## 编译

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Linux" label="Linux" default>

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--all`指定cargo编译TQUIC协议库及示例工具
:::


如果要启用C语言接口，请在`cargo build`命令后添加参数`-F ffi`：

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="MacOS" label="MacOS" default>

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--all`指定cargo编译TQUIC协议库及示例工具
:::


如果要启用C语言接口，请在`cargo build`命令后添加参数`-F ffi`：

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="FreeBSD" label="FreeBSD" default>

要编译FreeBSD平台的TQUIC库，你需要额外安装如下依赖：
```bash
sudo pkg install -y gmake
```

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--all`指定cargo编译TQUIC协议库及示例工具
:::


如果要启用C语言接口，请在`cargo build`命令后添加参数`-F ffi`：

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="Windows" label="Windows" default>

要编译Windows平台的TQUIC库，你需要额外安装如下依赖：
* [安装Visual Studio](https://visualstudio.microsoft.com/zh-hans/)
* [安装NASM](https://www.nasm.us/)

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --release --all
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`.\target\release\` 目录，而不是默认的`.\target\debug\`目录。
参数`--all`指定cargo编译TQUIC协议库及示例工具
:::


如果要启用C语言接口，请在`cargo build`命令后添加参数`-F ffi`：

```bash
cargo build --release -F ffi
```
  </TabItem>


  <TabItem value="Android" label="Android">

要编译Android平台的TQUIC库，你需要额外安装如下依赖：

* [安装Android NDK](https://developer.android.com/studio/projects/install-ndk?hl=zh-cn)并设置环境变量`ANDROID_NDK_HOME`
```bash
# 将环境变量ANDROID_NDK_HOME设置为NDK安装路径
export ANDROID_NDK_HOME=/path/to/android-ndk
```

* 安装Rust Android工具链和cargo-ndk
```bash
# 安装Rust Android工具链
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android

# 安装cargo-ndk以便简单编译Android库
cargo install cargo-ndk
```

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

# 必须指定选项-t <architecture> 和-p <NDK version>
cargo ndk -t arm64-v8a -p 21 -- build --features ffi --release
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--features ffi`指定cargo编译C接口库
:::
  </TabItem>


  <TabItem value="iOS" label="iOS">

要编译iOS平台的TQUIC库，你需要额外安装如下依赖：

* [安装Xcode](https://developer.apple.com/xcode/)和Xcode命令行工具

```bash
# 安装Xcode命令行工具 
xcode-select --install
```
 
* 安装Rust iOS工具链和cargo-lipo
```bash
# 安装Rust iOS工具链
rustup target add aarch64-apple-ios x86_64-apple-ios
 
# 安装cargo-lipo以便自动创建iOS通用库
cargo install cargo-lipo
```

执行如下命令进行编译：
```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo lipo --features ffi --release
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--features ffi`指定cargo编译C接口库
:::
  </TabItem>


  <TabItem value="Harmony" label="Harmony">

要编译Harmony平台的TQUIC库，你需要额外安装如下依赖：

* [安装OHOS NDK](https://gitee.com/openharmony/docs/blob/master/zh-cn/release-notes/OpenHarmony-v4.0-release.md#%E4%BB%8E%E9%95%9C%E5%83%8F%E7%AB%99%E7%82%B9%E8%8E%B7%E5%8F%96) 并设置环境变量`OHOS_NDK_HOME`
```bash
wget https://repo.huaweicloud.com/openharmony/os/4.0-Release/ohos-sdk-windows_linux-public.tar.gz
tar -xvzf ohos-sdk-windows_linux-public.tar.gz
cd ohos-sdk/linux/
unzip native-linux-x64-4.0.10.13-Release.zip

# 将环境变量ANDROID_NDK_HOME设置为Linux平台NDK安装路径
# 例 export OHOS_NDK_HOME=/path/to/ohos-sdk/linux/
export OHOS_NDK_HOME=`pwd`
```

* 设置相关的环境变量
```bash
export CC_aarch64_unknown_linux_ohos=${OHOS_NDK_HOME}/native/llvm/bin/clang
export AR_aarch64_unknown_linux_ohos=${OHOS_NDK_HOME}/native/llvm/bin/llvm-ar
```

* 安装Rust Harmony工具链

```bash
rustup target add aarch64-unknown-linux-ohos
```

执行如下命令进行编译：

```bash
git clone https://github.com/tencent/tquic --recursive
cd tquic

cargo build --target aarch64-unknown-linux-ohos --features ffi --release
```

:::tip
参数`--release`指定cargo编译优化版本，编译结果位于`./target/release/` 目录，而不是默认的`./target/debug/`目录。
参数`--features ffi`指定cargo编译C接口库
:::
   </TabItem>

</Tabs>


## 运行测试用例

执行如下命令来运行单元测试：

```bash
cargo test
```


## 进一步了解

* [如何使用示例客户端/服务端工具](./demo/)
* [如何使用TQUIC API](../category/tutorial/)


## 遇到问题?

* 请参考[常见安装问题](../faq/installation/) 。
* 您可以在[GitHub issues](https://github.com/tencent/tquic/issues)提问寻求帮助。
