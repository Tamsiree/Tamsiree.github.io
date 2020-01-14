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

---

# 常见问题
1.   是什么让Anbox与Shashlik或Genimobile等其他项目不同？

像Shashlik 或Genimobile这样的项目使用模拟器来运行Android环境。模拟器创建一个完整的模拟系统，它有自己的内核等，而Anbox在与主机操作系统相同的内核下运行Android系统。不需要像QEMU那样的仿真层 。一切都直接在硬件上运行。这种方法还允许与主机操作系统更好地集成。

 

2.   是否可以安装Google Play商店？

是的，这通常是可能的。但是，只要设备未经过认证且供应商未与Google签署协议，Google就不允许任何人发送其应用程序。

Anbox项目对发布Google Play商店没有任何兴趣，我们不允许这样做。我们可以在以后为用户添加一种简单的方法，以便轻松分发适合Anbox运行时环境的Android应用程序。

 

3.   如何将应用程序安装到Anbox运行时？

除了使用Android Debug Bridge（adb）之外，用户还没有简单的方法将应用程序安装到Anbox运行时。 在主机系统上安装adb后，可以安装以下应用程序：

$ adb install path/to/my-app.apk

之后，您的应用程序应作为Anbox运行时的一部分安装，并可通过主机系统应用程序启动器启动。

 

4.   谷歌将Android应用程序引入Chrome操作系统的努力是否有任何关系？

Google正在以与我们非常相似的方式在Chrome操作系统中为Android应用程序提供支持。这两种方法都非常相似，因为它们都将Android放入基于Linux命名空间的轻量级系统容器中，并保留一个小桥接以允许与主机系统进行通信。

与Google的实施相比，Anbox不允许任何直接访问硬件设备。例如，它将Open GL ES连接到主机。在Chrome OS中，容器可以访问图形子系统的主机内核端，以便快速呈现。在我们的例子中，我们决定不采用这种方法来保持将Anbox移植到不同平台的简单方法。所有主机操作系统都需要提供Open GL / Open GL ES兼容驱动程序，以提供与图形子系统的正确集成。

 

5.   我最喜欢的Android应用程序不起作用。我该怎么办？

由于我们提供完整的Android系统，通常所有应用程序都可以工作。但是有一些例外：

如果您的应用程序依赖于特定的硬件功能，如WiFi，蓝牙或电话，我们需要额外的工作来桥接来自主机系统的那些。截至目前，您唯一能做的就是确保在这些功能不可用时您的应用程序正常运行。

Anbox使用Android 7引入的自由格式模式，允许多窗口系统。您的应用程序需要在自由格式模式下良好运行才能在Anbox中正常运行。您可以在 Android开发人员文档中找到更多详细信息 。

 

6.   Anbox无法在我的设备上启动。我做错了什么？

最有可能的不是你的错。Anbox仍处于早期阶段，并且在各种不同的系统中没有太多的测试覆盖率。如果Anbox没有为您启动，请按照 此处的说明进行操作并提交错误报告，以便开发人员可以查看问题。

 

7.   你说Anbox是收敛的。它今天在手机上运行吗？

最初的概念验证是在基于 Ubuntu Touch 的设备上完成的。从那时起，Anbox已经发展了很多，使桌面设备成为其主要的开发重点。然而，最近的实验表明，在基于Ubuntu Touch的移动设备上，Anbox仍然运行良好（通过一些调整并因为较旧的内核版本而解除限制） 。

我们知道像 UBports或 LuneOS这样的其他项目对将Anbox作为其发行版的一部分运行非常感兴趣。与这些社区的人们已经建立了密切的关系，但是还没有具体的计划，也没有每个社区项目的主题。

 

8.   为什么Anbox仅作为快照分发？

Anbox目前只是快速发布，因为快照使得我们开发人员的生活变得非常简单。它们使我们能够快速轻松地打包，轻松分发给用户，以及定期快速更新。 Flatpak 将是另一种选择，但我们尚未对此进行调查，我们也不打算在不久的将来这样做。但是，我们很高兴接受来自Anbox社区的贡献，以提供必要的更改，以便将Anbox分发为flatpak软件包。

Anbox目前没有做的一件事是对快照使用适当的限制。现在它只有在安装在所谓的快照模式中时才可用，它会禁用任何限制。这是我们将在未来几个月与上游合作的事情，以使我们的快照完全受限。

尽管禁用了快速限制，但Android系统仍然通过使用来自主机系统的Linux命名空间而保持独立。

 

9.   Anbox是否需要为每个设备提供特定的Android映像？

没有.Anbox不需要为每个设备提供特定的Android映像，因为它是以独立于设备的方式构建的。Anbox将为每个架构（amd64，armhf，arm64）提供单个Android映像，并且不需要任何设备特定的修改。



---

> 参考链接  
> [`[在Archlinux上安装Anbox]`](https://www.lainme.com/doku.php/blog/2017/04/%E5%9C%A8archlinux%E4%B8%8A%E5%AE%89%E8%A3%85anbox)  
> [`[ArchLinux上关于anbox-git的评论]`](https://aur.archlinux.org/pkgbase/anbox-git/?comments=all)  
> [`[github上的anbox]`](https://github.com/anbox/anbox/issues/3)  


---
> to be continued...