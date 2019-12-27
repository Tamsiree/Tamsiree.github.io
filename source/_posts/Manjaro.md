---
title: Manjaro
author: Tamsiree
description: linux 拥有大量的发行版，虽然都是使用的相同的 linux kernel，但是由于 linux 下软件的繁多，各种不同的发行版有着不同的软件组合和生态。大众常用的几个发行版主要有 RedHat、Fedora、CentOS、Ubuntu 等。最近发现了 ArchLinux 分支下据说最好的版本 ———— Manjaro，对其进行一番尝试。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
date: 2019-09-20 23:32:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/109951163042681715.jpg
---
# Manjaro的尝试

linux 拥有大量的发行版，虽然都是使用的相同的 linux kernel，但是由于 linux 下软件的繁多，各种不同的发行版有着不同的软件组合和生态。大众常用的几个发行版主要有 RedHat、Fedora、CentOS、Ubuntu 等。最近发现了 ArchLinux 分支下据说最好的版本 ———— Manjaro，对其进行一番尝试。

# Manjaro是什么？

Manjaro是一款基于Arch Linux、对用户友好的Linux发行版。在Linux社区，Arch Linux的确是一个异常快速、强大、轻量级的发行版，它提供最新的、最全的软件。然而，Arch Linux面向高级用户，普遍认为，缺乏技术专长或者没有耐心的人是无法玩转Arch Linux的。

# 为什么是Manjaro？

首先，Manjaro是基于Arch Linux的！！！所以基本Arch上的操作（强大的Arch wiki）都可以应用到Manjaro上.
其次，Manjaro基于Arch开发，将Arch安装过程中很多复杂的操作（特别是驱动）都先帮你弄好了，所以安装不会像Arch那么复杂，反而和Ubuntu安装过程一样简单。
最后，用了Manjaro我们也可以和大佬们一样高呼“Arch 大法好了”，软件丰富，安装简单，基本一条命令就搞定，不需要像Ubuntu一样（可能）需要安装依赖！

## Manjaro安装的BIOS设置
(1).  SATA Oparation $\to [\ RAID\ ]$ 配置硬盘为 RAID  
(2).  Boot List Option $\to [\ UEFI\ ]$  
(3).  Secure Boot $\to [\ Disable\ ]$  
(4).  Load Legacy Option Rom $\to [\ Enabled\ ]$

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Manjaro_screenShot.png)

# Manjaro安装完成之后
## 更换数据源
Manjaro换源很简单  
```bash
#这个会显示最快的几个源，选最快的那个就行，我选的是清华的源。  
sudo pacman-mirrors -i -c China -m rank
#更新系统软件  
sudo pacman -Syy
```

> 这样其实就可以了，但是我安装某些软件的时候比如chrome（yay可以解决，但是太慢了），pacman是找不到的，所以推荐修改配置文件，并安装GPG key，这样就可以用pacman安装一些常用的软件了，具体原因我也不清楚，还希望有大佬可以解答一下。

## 添加 **ArchLinuxCN**  软件源：
修改`/etc/pacman.conf`, 在最后一行添加：  

```bash
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

升级系统
```bash
sudo pacman -Syyu
```

## 更新软件源并导入公钥
然后，命令行运行：
```bash
sudo pacman -Sy archlinuxcn-keyring
sduo pacman -Syy
```

---

# Manjaro常用软件

因为篇幅较多，所以独立整理了一篇文章，请移步我的这篇文章 [[ `Manjaro常用软件` ]](https://tamsiree.com/操作系统/Linux/Manjaro/Manjaro常用软件/)

---

# Manjaro美化
因为篇幅较多，所以独立整理了一篇文章，请移步我的这篇文章 [[ `Manjaro美化` ]](https://tamsiree.com/操作系统/Linux/Manjaro/Manjaro美化/)

---

## Manjaro使用技巧与问题归纳

因为篇幅较多，所以独立整理了一篇文章，请移步我的这篇文章 [[ `Manjaro使用技巧与问题归纳` ]](https://tamsiree.com/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/)

----
> to be continued...