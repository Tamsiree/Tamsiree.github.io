---
title: VMware
author: Tamsiree
description: VMWare (Virtual Machine ware)是一个“虚拟PC”软件公司.它的产品可以使你在一台机器上同时运行二个或更多Windows、DOS、LINUX系统。
tags:
  - Tool
  - Windows
  - Software
  - VMware
categories:
  - Tool
  - Windows
  - Software
  - VMware
date: 2019-09-10 00:09:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/timdsag.jpeg
---
# 前言

> VMWare (Virtual Machine ware)是一个“虚拟PC”软件公司.它的产品可以使你在一台机器上同时运行二个或更多Windows、DOS、LINUX系统。  
> 与“多启动”系统相比，VMWare采用了完全不同的概念。多启动系统在一个时刻只能运行一个系统，在系统切换时需要重新启动机器。VMWare是真正“同时”运行，多个操作系统在主系统的平台上，就象标准Windows应用程序那样切换。而且每个操作系统你都可以进行虚拟的分区、配置而不影响真实硬盘的数据，你甚至可以通过网卡将几台虚拟机用网卡连接为一个局域网，极其方便。安装在VMware操作系统性能上比直接安装在硬盘上的系统低不少，因此，比较适合学习和测试。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/68b3ad0a9b0fee6f58a540f8d3c13158_r.jpg)


# VMware 所有版本永久许可证

> 注：如果是WinXP或32位系统请用 10.0 版本；11.0 版本之后支持Win7或更高版64位系统。

[VMware官方下载](https://www.vmware.com/go/getworkstation-win)

```
VMware Workstation 15 for Windows

UA5DR-2ZD4H-089FY-6YQ5T-YPRX6
ZF582-0NW5N-H8D2P-0XZEE-Z22VA
GA590-86Y05-4806Y-X4PEE-ZV8E0
UG5J2-0ME12-M89WY-NPWXX-WQH88
YA18K-0WY8P-H85DY-L4NZG-X7RAD
```

```
VMware Workstation v14 for Windows 

FF31K-AHZD1-H8ETZ-8WWEZ-WUUVA
CV7T2-6WY5Q-48EWP-ZXY7X-QGUWD
```

```
VMware Workstation v12 for Windows 

5A02H-AU243-TZJ49-GTC7K-3C61N 
VF5XA-FNDDJ-085GZ-4NXZ9-N20E6
UC5MR-8NE16-H81WY-R7QGV-QG2D8
ZG1WH-ATY96-H80QP-X7PEX-Y30V4
AA3E0-0VDE1-0893Z-KGZ59-QGAVF
```

```
VMware Workstation v11 for Windows 

1F04Z-6D111-7Z029-AV0Q4-3AEH8 
```

```
VMware Workstation v10 for Windows 

1Z0G9-67285-FZG78-ZL3Q2-234JG 
4C4EK-89KDL-5ZFP9-1LA5P-2A0J0 
HY086-4T01N-CZ3U0-CV0QM-13DNU 
```

```
VMware Workstation v9 for Windows 

4U434-FD00N-5ZCN0-4L0NH-820HJ 
4V0CP-82153-9Z1D0-AVCX4-1AZLV 
0A089-2Z00L-AZU40-3KCQ2-2CJ2T 
```

```
VMware Workstation v8 for Windows 

A61D-8Y0E4-QZTU0-ZR8XP-CC71Z 
MY0E0-D2L43-6ZDZ8-HA8EH-CAR30 
MA4XL-FZ116-NZ1C9-T2C5K-AAZNR 
```

```
VMware Workstation v7 for Windows 

VZ3X0-AAZ81-48D4Z-0YPGV-M3UC4 
VU10H-4HY97-488FZ-GPNQ9-MU8GA 
ZZ5NU-4LD45-48DZY-0FNGE-X6U86 
```

```
VMware Workstation v6 for Windows 

UV16D-UUC6A-49H6E-4E8DY 
C3J4N-3R22V-J0H5R-4NWPQ 
A15YE-5250L-LD24E-47E7C 
```

```
VMware Workstation v6 ACE Edition for Windows 

TK08J-ADW6W-PGH7V-4F8FP 
YJ8YH-6D4F8-9EPGV-4DZNA 
YCX8N-4MDD2-G130C-4GR4L
```


# Oracle VM VirtualBox安装增强功能和共享文件夹的方法

**一、介绍下如何安装增强功能**  
**1)**选择安装增强功能的安装包有2种方法，分别如下：  
**第一种**：找到设备->安装增强功能  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402230218065.png)  
**第二种**  
1)找到设备->点击选择虚拟盘。  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402230706814.png)  
2)找到VirtualBox->VBoxGuestAdditions.iso文件。  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402230805853.png)  
**二、介绍如何共享文件夹**  
1)找到菜单栏上的设备->选择共享文件夹->创建共享文件夹(共享文件夹就是本电脑共享文件夹，该文件夹设置自动挂载分配，这样每次启动虚拟机就可以进行共享文件。)  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402234425405.png)  
2)重新进入虚拟Ubuntu，在命令行终端下输入：  
sudo mkdir /mnt/sharing 新创建一个挂载点；  
sudo mount -t vboxsf Share /mnt/sharing 进行挂载  
执行下ls 看下有没有挂载成功。  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402234646693.png)  
3)如果不想每次启动后都进行挂载的话，可以设置为自动挂载，如果有选中“Auto-mount”的选项的话,可在/media/目录下看到你共享的名字sf\_name;例如共享的文件夹名字为share，那就看到sf\_share。  
**三、在本系统关联虚拟机上的系统，进行文件共享。**  
点击桌面上的网络右击鼠标，选择映射网络驱动器，其中的文件夹的路径，为共享文件夹的路径，最后在电脑中的网络位置，出现共享文件的图标，双击该文件夹，显示了共享的内容。  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402235507873.png)  
**最后，实现的结果如下图：**  
![这里写图片描述](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20170402235551025.png)

---
> to be continued...