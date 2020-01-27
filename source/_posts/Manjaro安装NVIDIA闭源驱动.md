---
title: Manjaro安装NVIDIA闭源驱动
author: Tamsiree
date: 2020-01-23 21:21:20
description: 在我的环境（NVIDIA 970M，Intel核显，Manjaro18.1.2，KDE）下安装 NVIDIA 的闭源驱动调试成功，依据知乎上的 [介绍](https://www.zhihu.com/question/353534899/answer/884086339) 此种方法使用了较长时间后也没问题。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg2bb9f36.jpg
---
# 前言
在我的环境（NVIDIA 970M，Intel核显，Manjaro18.1.2，KDE）下安装 NVIDIA 的闭源驱动调试成功，依据知乎上的 [介绍](https://www.zhihu.com/question/353534899/answer/884086339) 此种方法使用了较长时间后也没问题。

# 正文

在 screenfetch 下展示我的配置信息

```bash

 ██████████████████  ████████     tamsiree@tamsiree-alienware
 ██████████████████  ████████     OS: Manjaro 18.1.5 Juhraya
 ██████████████████  ████████     Kernel: x86_64 Linux 5.4.13-3-MANJARO
 ██████████████████  ████████     Uptime: 3h 56m
 ████████            ████████     Packages: 1262
 ████████  ████████  ████████     Shell: zsh 5.7.1
 ████████  ████████  ████████     Resolution: 1920x1080
 ████████  ████████  ████████     DE: KDE 5.66.0 / Plasma 5.17.5
 ████████  ████████  ████████     WM: KWin
 ████████  ████████  ████████     GTK Theme: Breath [GTK2/3]
 ████████  ████████  ████████     Icon Theme: maia
 ████████  ████████  ████████     Font: Noto Sans Regular
 ████████  ████████  ████████     Disk: 731G / 1.2T (68%)
 ████████  ████████  ████████     CPU: Intel Core i7-6700HQ @ 8x 3.5GHz [98.0°C]
                                  GPU: GeForce GTX 970M
                                  RAM: 5569MiB / 15758MiB

```

optimus-switch-sddm是用于SDDM的，对应KDE桌面，如果你安装的是Gnome可以看同作者的GDM，作者还有对应lightdm的脚本。

安装方法：  
主要参考[Github安装脚本](https://github.com/dglt1/optimus-switch-sddm)的说明  
我的安装步骤大体如下，可能有所疏漏或者没更新的地方，建议同时参考上面的Github原作者的README

1.  删除Bumblebee或者开源驱动
    -   方法一： 使用mhwd命令删除即可  
        开源驱动：`sudo mhwd -i pci video-nvidia`  
        删除Bumblebee就把video-nvidia改成系统设置-›硬件设定里Bumblebee驱动的名字

    -   方法二：直接在硬件设定里右键选移除

2.  安装nvidia私有闭源驱动  
    在系统设置-›硬件设定里直接右键安装下面的驱动中的一个，我的是video-nvidia-440xx

```
video-nvidia-340xx
video-nvidia-390xx
video-nvidia-418xx
video-nvidia-430xx
video-nvidia-435xx
video-nvidia-440xx
```

此时千万不能重启！否则会卡死！![在这里插入图片描述](https://img-blog.csdnimg.cn/20191121235550778.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZXJwYWh1,size_16,color_FFFFFF,t_70)  
上面是我完成后的驱动配置。
3.  安装依赖  
`sudo pacman -S linuxXXX-headers acpi_call-dkms xorg-xrandr xf86-video-intel git`  
linuxXXX-headers的名字换成你自己内核版本的名字，系统设置-›内核里查看正在运行的内核，我的是`linux35-headers`  
下图红色的即是 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191121234823105.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZXJwYWh1,size_16,color_FFFFFF,t_70)
4.  `sudo modprobe acpi_call`
5.  清理之前的文件  
在脚本里其实会帮我们删，为了保险也可以直接查看一下.

```
/etc/X11/
/etc/X11/mhwd.d/
/etc/X11/xorg.conf.d/
/etc/modprobe.d/
/etc/modules-load.d/
```

6.  安装  
执行`install.sh`之前可以修改一下switch/nvidia文件夹下的nvidia-xorg.conf文件取消`#Option "DPI" "96 x 96" #adjust this value as needed to fix scaling`的注释，否则在Nvidia Prime模式下字体可能会过小。  
在~/目录下输入以下命令

```
git clone https://github.com/dglt1/optimus-switch-sddm.git  
cd ~/optimus-switch-sddm  
chmod +x install.sh
sudo ./install.sh

```

7.  一行命令切换Nvidia Prime和Intel核显模式  
`sudo set-intel.sh`换Intel核显  
`sudo set-nvidia.sh`换Nvidia Prime
8.  重启  
`reboot`

# Tips

没有独显驱动会导致关机卡死，Bumblebee切换性能不佳，只安装Nvidia Prime耗电过多，目前这种方式是我遇到的最合理最完美的。

---

> 参考来源：  
> [Manjaro论坛](https://forum.manjaro.org/t/howto-set-up-prime-with-nvidia-proprietary-driver/40225/33)  
> [Github安装脚本](https://github.com/dglt1/optimus-switch-sddm)

---
> to be continued...