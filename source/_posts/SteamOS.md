---
title: SteamOS
date: 2019-12-29 02:18:14
tags:
---
# 前言
SteamOS Beta 是Steam团队研发的 Linux 架构操作系统。该操作系统基于代号为 Debian Jessie 的 Debian 8 系统。它的工作始于 Debian 系统强劲的核心，并尽可能对其进行优化，使其拥有良好的客厅体验。最重要的是，它是开源的 Linux 平台，一切尽在您的掌控之内。您可以掌控您的系统，并且随心所欲地安装您想要的新软件或内容。

[SteamOS官方描述](https://store.steampowered.com/steamos/buildyourown?l=schinese)

# 安装和自定义 SteamOS

## SteamOS 硬件需求如何？

> 处理器： Intel 或 AMD 64 位性能处理器  
> 内存： 4GB 或更多内存  
> 硬盘驱动器： 200GB 或更大磁盘空间  
> 显卡： NVIDIA 显卡  
> 　　　AMD 显卡（RADEON 8500 和更新）  
> 　　　Intel 显卡  
> 附注事项： 安装需要 USB 端口  
> UEFI 固件（推荐）  


## 我该如何安装 SteamOS？

您可以通过两种不同的方式安装 SteamOS。推荐方式就是自动安装方式：使用默认的磁盘配置进行安装。专业安装方式会使用 Debian 安装程序，允许您在经过自动安装步骤后进行自定义安装。请在以下安装方式中选择一种。

> 警告：两种安装方式都将清除目标计算机上的所有内容

### 自动安装
1. [下载 SteamOS 安装](https://store.steampowered.com/steamos/download/?ver=custom)
2. 解压 SteamOS.zip 到一个空的 FAT32 格式 U 盘。确保使用的是 MBR 分区。
3. 将 U 盘插入您的目标机器。启动您的机器并在 BIOS 中选择从 U 盘启动。（通常在启动界面按下 F8、F11 或 F12 可以进入 BIOS 的启动菜单）。
4. 确保您选择的是 UEFI 启动，该选项可能看起来是类似“UEFI: Patriot Memory PMAP”。如果没有 UEFI 启动的选项，您可能需要在 BIOS 设置中启用 UEFI 支持。
5. 从菜单中选择“Automated install（会清除磁盘数据！）”。
6. 剩余的安装设置将自动完成，之后会给驱动器重新分区并安装 SteamOS。
7. 安装完成后，系统会重启，自动登入并安装 Steam。此时需要有互联网接入。如果您有互联网接入，Steam 会自动安装。如果您没有接入互联网（例如您需要连接至一个 WiFi 接入点），您将收到弹出提示告诉您接入互联网。关闭弹出的提示您将进入网络设置界面，在此设置您的网络。一旦您连接至互联网，关闭网络设置界面后 Steam 将开始安装。
8. 在 Steam 完成安装后，您的系统将自动重启并创建一个系统分区的备份。
9. 备份完成后，选择“reboot”来进入您全新安装好的 SteamOS

### 专业安装
1. [下载 SteamOS 安装](https://store.steampowered.com/steamos/download/?ver=custom)
2. 解压 SteamOS.zip 到一个空的 FAT32 格式 U 盘。确保使用的是 MBR 分区。
3. 将 U 盘插入您的目标机器。启动您的机器并在 BIOS 中选择从 U 盘启动。（通常在启动界面按下 F8、F11 或 F12 可以进入 BIOS 的启动菜单）。
4. 确保您选择的是 UEFI 启动，该选项可能看起来是类似“UEFI: Patriot Memory PMAP”。如果没有 UEFI 启动的选项，您可能需要在 BIOS 设置中启用 UEFI 支持。
5. 从菜单中选择“Expert install”。
6. 选择您的首选语言，位置和键盘布局。
7. 您可以选择更改默认的磁盘分区。
8. 剩余的安装设置将自动完成，并且会安装 SteamOS。
9. 安装完成后，系统会重启，自动登入并安装 Steam。此时需要有互联网接入。如果您有互联网接入，Steam 会自动安装。如果您没有接入互联网（例如您需要连接至一个 WiFi 接入点），您将收到弹出提示告诉您接入互联网。关闭弹出的提示您将进入网络设置界面，在此设置您的网络。一旦您连接至互联网，关闭网络设置界面后 Steam 将开始安装。
10. 在 Steam 完成安装后，您的系统将自动重启并创建一个系统分区的备份。
11. 备份完成后，选择“reboot”来进入您全新安装好的 SteamOS

# 我的操作
因为我本身的Alienware安装的是Manjaro系统，所以我便选择了VMWare虚拟机安装。  
因此，此时需要SteamOS的ISO文件，因为[下载 SteamOS 安装](https://store.steampowered.com/steamos/download/?ver=custom)下载的是.zip文件,因此我先将其解压，然后再将其打包成ISO文件：

首先安装cdrkit工具
```
sudo pacman -S cdrkit  
```

然后将目标文件夹打包成为ISO文件
```
mkisofs -r -o /home/tamsiree/Tam1T/SteamOS.iso /home/tamsiree/Tam1T/系统镜像/SteamOSInstaller/
```

最后用VMWare安装SteamOS系统。

---
> to be continued...