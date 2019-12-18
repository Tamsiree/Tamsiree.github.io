---
title: Manjaro卸载显卡驱动黑屏问题解决
date: 2019-10-21 13:27:07
description: 大晚上的滚动更新了Manjaro的内核之后，突然发现无法播放声音了，一系列的排查下来，发现是NVIDIA显卡驱动导致的问题，于是乎便卸载了video-hybrid-intel-nvidia-430xx-bumblebee 显卡驱动。结果，重启之后黑屏无法进入桌面了，于是乎便开始了修复之旅。
tags:
  - 操作系统
  - Linux
  - Manjaro
categories:
  - 操作系统
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/chuyin_sky.jpg
---
# 前言
> 大晚上的滚动更新了Manjaro的内核之后，突然发现无法播放声音了，一系列的排查下来，发现是NVIDIA显卡驱动导致的问题，于是乎便卸载了`video-hybrid-intel-nvidia-430xx-bumblebee` 显卡驱动。  
> 结果，重启之后黑屏无法进入桌面了，于是乎便开始了修复之旅。

![](https://w.wallhaven.cc/full/1j/wallhaven-1jjo99.jpg)

# 开始修复

1. 第一步，使用 `Ctrl` + `Alt` + `F3` 进入 `ttf3` 命令行界面。（庆幸还有这个回天之术 (˶˚  ᗨ ˚˶)）  
2. 第二步，使用 `root` 用户登录（不用考虑操作的权限了）
3. 第三步，在终端输入 `sudo mhwd` ，查看可用驱动（mhwd是Manjaro自带的驱动程序管理器）  
4. 第四步，在终端输入 `sudo mhwd --install pci video-hybrid-intel-nvidia-430xx-bumblebee` ,安装闭源显卡驱动.  
5. 第五步，如果不出意外的话，此时会发现安装失败啦，哈哈哈，不要急，听我说，因为默认是没有连接网络的，当然安装失败啦，所以接下来我们要连接无线网络  
6. 第六步，通过 `ip link` 查看无线的设备 (设备名[broken link: invalid section]，通常是类似 wlp2s1，我的设备是wlp60s0)  
7. 第七步，启用无线设备 `ip link set <设备名> up` (就是上一步你所看到的设备名)  
8. 第八步，在终端输入 `iw dev <设备名> link` 获取连接状态  
一般会看到 `Not connected.` 的显示结果  
9. 第九步，在终端输入 `iw dev <设备名> scan` 扫描可用WIFI热点  
10. 第十步，就要根据这个连接的WIFI类型来操作啦！  
　　(1). 如果 WIFI 无需密码，则输入 `iw dev <设备名> connect <WIFI名称>` 即可  
　　(2). 如果 WIFI 是加密的，又要分两种情况啦：  
　　　　A. 如果 WIFI 是 `WEP` 加密方式，就输入 `iw dev <设备名> connect <WIFI名称> key 0:<WIFI密码>` （这里需要注意的是 WIFI密码要13位）  
　　　　B. 如果 WIFI 是 `WPA/WPA2` 加密方式的话，则输入 `wpa_supplicant -i <设备名> -c <(wpa_passphrase <WIFI名称> <WIFI密码>)`  
　　　　　　a. 如果没有异常就再次输入 `wpa_supplicant -i <设备名> -c <(wpa_passphrase <WIFI名称> <WIFI密码>) -B` 就好啦,  
　　　　　　b. 如果出现异常 `ul80211: Could not set interface <设备名>` 此类的错误，就先输入 `killall wpa_supplicant` 后，再重复`WPA/WPA2` 加密方式的连接  
11. 第十一步，在终端输入 `dhcpcd <设备名>` 获取动态 IP 地址
12. 第十二步，重复 **[第八步]** 查看 无线网络连接状态  
13. 第十三步，重复 **[第四步]** 安装 显卡驱动  
　　如果更新失败，提示 `error:pacman failed` 或者 `/var/lib/pacman/db.lck`，则是 pacman 被锁住了，需要执行命令 `rm /var/lib/pacman/db.lck` 删除 `db.lck` 文件
14. 第十四步，驱动安装成功之后，在终端输入 `reboot` 重新启动  
15. 第十五步，期待你的Manjaro桌面的重新出现吧～

> 如果你卡在了网络连接这一步，跟我的情况有出入的话，可以查看下这个 [Arch Linux 官方的无线网络连接配置](https://wiki.archlinux.org/index.php/Wireless_network_configuration_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))