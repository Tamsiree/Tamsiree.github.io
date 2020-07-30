---
title: Unity宏定义
author: Tamsiree
date: 2020-06-06 18:37:10
description:
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/jiqiren.jpg
---
# 前言
Unity包含一个称为 `Platform Dependent Compilation` 的功能。这包含一些预处理器指令，可让您对脚本进行分区，以便为受支持的平台之一专门编译和执行一段代码。

你可以在Unity编辑器中运行这个代码，这样你就可以专门为你的目标平台编译代码并在编辑器中测试它！

# 正文
## 宏

```c#
UNITY_EDITOR 编辑器调用

UNITY_STANDALONE_OSX 专门为Mac OS(包括Universal，PPC和Intelarchitectures)平台的定义。

UNITY_DASHBOARD_WIDGET Mac OS Dashboard widget (Mac OS仪表板小部件)。

UNITY_STANDALONE_WIN Windows操作系统

UNITY_STANDALONE_LINUX Linux操作系统

UNITY_STANDALONE 独立的平台 (Mac,Windows或Linux)

UNITY_WEBPLAYER 网页播放器 (包括Windows和Mac web播放器可执行文件)

UNITY_WII Wii游戏机平台

UNITY_IPHONE iPhone平台

UNITY_ANDROID Android平台

UNITY_PS3 PlayStation3平台

UNITY_XBOX360 Xbox 360平台

UNITY_NACL 谷歌原生客户端 (使用这个必须另外使用UNITY_WEBPLAYER).

UNITY_FLASH adobe Flash平台
```

也可以判断Unity版本，目前支持的版本

```c#
UNITY_2_6 平台定位为主要版本的Unity 2.6
```

---
> to be continued...
