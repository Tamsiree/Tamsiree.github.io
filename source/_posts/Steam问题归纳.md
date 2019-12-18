---
title: Steam问题归纳
date: 2017-12-03 11:08:35
description: Steam在Windows环境下支持的还不错，但是到了Linux环境下就会出现各种各样的问题，因此便总结归纳一下所遇到的问题及其解决方案。
tags:
  - Steam
categories:
  - 第九艺术
  - GamePlatform
  - Steam
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01fbd871ed0d04d43d.jpg
---
# 前言
> Steam在Windows环境下支持的还不错，但是到了Linux环境下就会出现各种各样的问题，因此便总结归纳一下所遇到的问题及其解决方案。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Vendetta.jpg)

---

# 正文
## Steam中文支持
请移步查阅我的这篇文章 [[Steam中文支持]](https://tamsiree.com/第九艺术/GamePlatform/Steam/Steam中文支持/)

---

# 使用独显N卡运行游戏
可以在 steam 的游戏启动选项里打开高级选项，填写 `primusrun %command%` 这样你就可以规定用独显来启动特定的程序。

---

# steam不能正常运行
如果你发现你的 steam 不能正常运行，就去装 steam-native 这个包。

---

# XCOM2运行卡顿
如果你玩 XCOM2 卡顿，可以考虑调整一下配置文件，位置是：

```ini
~/.local/share/feral-interactive/XCOM2/VFS/Local/my\ games/XCOM2/XComGame/Config/XComEngine.ini
```

把 PoolSize=10 改成 256，OneFrameThreadLag=True 改成 False。
虽然还是有点卡，不过可以接受了。

---

## Manjaro运行Steam 文明5/6
> 系统环境 : Linux 5.3.11-1-MANJARO

运行文明5  
只需要设置 `启动选项` 为:

```
LD_PRELOAD=/usr/lib32/libopenal.so.1 %command%
```

---

运行文明6 
> 会报错 undefined symbol: FT_Done_MM_Var

解决办法
在 `终端` 中用如下办法运行steam:

```
LD_PRELOAD=/usr/lib/libfreetype.so steam
```

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191203112012.png)

> 在Manjaro的论坛上找到了 [解决办法](https://forum.manjaro.org/t/steam-recently-civ-vi-stops-to-launch/68244/3).

---
待续...