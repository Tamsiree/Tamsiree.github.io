---
title: Anbox
author: Tamsiree
date: 2020-01-14 14:14:00
description: 听说最近出了一个软件[anbox](http://anbox.io/ "http://anbox.io/")，可以在Linux上原生运行Andriod程序，于是迫不及待想试一试。AUR已经有人打了包，所以装起来还算方便，只是系统镜像有点大，以及要编译的包稍微有点多。安装方法主要来自[artex-files在GitHub上的评论](https://github.com/anbox/anbox/issues/3#issuecomment-294023515 "https://github.com/anbox/anbox/issues/3#issuecomment-294023515")。
tags:
  - Linux
  - Android
  - Manjaro
  - Software
  - Anbox
categories:
  - Software
  - Anbox
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg8ba947b.jpg
---
# 前言
听说最近出了一个软件[anbox](http://anbox.io/ "http://anbox.io/")，可以在Linux上原生运行Andriod程序，于是迫不及待想试一试。AUR已经有人打了包，所以装起来还算方便，只是系统镜像有点大，以及要编译的包稍微有点多。安装方法主要来自[artex-files在GitHub上的评论](https://github.com/anbox/anbox/issues/3#issuecomment-294023515 "https://github.com/anbox/anbox/issues/3#issuecomment-294023515")。

# 正文

先安装所有需要的软件包 (anbox-image要单独先装，不然一直显示'cannot resolve anbox-image')
```bash
yaourt -S linux-headers dkms anbox-image
yaourt -S anbox-modules-dkms-git anbox-git
```
然后加载所需要的内核模块
```bash
sudo modprobe binder_linux
sudo modprobe ashmem_linux
```
再启动相关服务 (这里用start，如果你想开机自启可以再enable)
```bash
sudo systemctl start anbox-container-manager.service
systemctl --user start anbox-session-manager.service
```
最后在菜单中寻找anbox即可打开APP管理器。内置的一些程序如日历、设置等也会显示在菜单中，可以直接打开。目前内置程序还没有Google Play等，只能用ADB安装。

如果anbox还是不能运行，可以试试重启 (?)，以及试试用下面这句启动session-manager
```bash
anbox session-manager --gles-driver=host
```
我的台式机上不需要上述操作，但笔记本需要，可能和显卡有关。如果还有其它问题，可以看看AUR里和GitHub上的一些评论：

[https://aur.archlinux.org/pkgbase/anbox-git/?comments=all](https://aur.archlinux.org/pkgbase/anbox-git/?comments=all "https://aur.archlinux.org/pkgbase/anbox-git/?comments=all")

[https://github.com/anbox/anbox/issues/3](https://github.com/anbox/anbox/issues/3 "https://github.com/anbox/anbox/issues/3")

---

> 参考链接 [在Archlinux上安装Anbox](https://www.lainme.com/doku.php/blog/2017/04/%E5%9C%A8archlinux%E4%B8%8A%E5%AE%89%E8%A3%85anbox)

---
> to be continued...