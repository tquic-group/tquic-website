---
title: 安装相关
sidebar_position: 1
---

# 安装相关

## 运行TQUIC自定义构建命令失败?

如果你遇到`not found CMakeLists.txt`错误，这很可能是因为没有正确下载TQUIC的子模块。

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

应该使用`--recursive`选项下载TQUIC的源代码：
```
git clone https://github.com/tencent/tquic --recursive
```

如果源代码已经下载，但是忘记使用`--recursive`选项，可以像这样手动下载子模块:
```
git submodule init && git submodule update
```


## 编译Github发布页面的TQUIC源码失败？

由于Github的限制，其发布的TQUIC源代码(https://github.com/Tencent/tquic/releases) 并未包含TQUIC依赖的子模块代码。

建议采用如下命令获取TQUIC指定版本代码:

```
# 请将'vx.y.z'替换未你所需要的版本
git clone -b vx.y.z --recursive https://github.com/Tencent/tquic.git
```


## 没有找到TQUIC示例工具?

如果你无法在`./target/release`目录下找到示例工具，很可能是因为忘记包含构建选项`--all`或`--release`。


## 没有找到TQUIC C库文件?

如果你无法在`./target/release`目录中找到TQUIC的C静态库或动态库，很可能是因为忘记包含构建选项`-F ffi`或`--release`。


## 如何为低版本MacOS编译TQUIC库？
可以使用`MACOSX_DEPLOYMENT_TARGET`环境变量来指定支持旧版本的macOS。

```
# 请将'10.12'替换为你所需要的部署目标
export MACOSX_DEPLOYMENT_TARGET=10.12
cargo build --release -F ffi
```
