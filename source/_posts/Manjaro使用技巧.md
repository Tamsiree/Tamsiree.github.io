---
title: Manjaro使用技巧
date: 2019-09-23 14:52:03
description: 在日常使用Manjaro系统的过程中，总会遇到这样或者那样的问题，也会遇到需要有某种需求的时候，特此记录。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01236039c4be3c4806.jpg
---
# 前言
在日常使用Manjaro系统的过程中，总会遇到这样或者那样的问题，也会遇到需要有某种需求的时候，特此记录。

---

# 使用技巧

## Dolphin 设置

Dolphin 是 KDE 下默认的文件管理器，整体来说做的很不错，但可能有一些使用不太令人习惯（例如单击直接打开文件）。这里列出几点优化配置建议：

-   双击打开文件（夹）：这个设置选项深藏在与 dolphin 毫无关系的角落里[无奈] 。打开系统设置=>桌面行为=>工作空间=>点击行为可以看见这一选项。
-   也有人可能会发现在Dolphin中使用 Del 键是很危险的：它会在没有任何确认的情况下直接删除你的文件。可以在配置Dolphin=>常规=>确认中打开文件删除确认。

---

## Grub 设置

在默认情况下我们打开 grub 引导菜单以后只有5秒钟的时间选择系统，这个能会带来些许不便。可以通过以下命令来修改 grub 配置：

```bash
sudo vim /etc/default/grub   # 修改为 GRUB_TIMEOUT=30  
sudo update-grub             # 更新 GRUB 配置  
```

---

## 系统设置

### 开机自启动程序

很多时候我们需要使一些程序开机自行启动，这时候可以在_开机和关机=>自动启动_里设置，可以添加应用程序也可以添加脚本。当然也可以直接把可执行文件复制到`～/.config/autostart` 目录下。

---

### 文件格式与应用程序关联

有时候我们需要针对不同的文件采用不同的程序打开，而默认程序往往不尽如人意。这时候可以在_应用程序=>文件关联_里修改。当然也可以在 Dolphin 下右键属性直接更改某一格式的默认打开程序。

---

### 修改默认浏览器

包括但不限于默认浏览器，还有例如文件夹管理器等。可以在_应用程序=>默认程序_里修改。

---

## 硬件配置

### NVIDIA显卡驱动
驱动版本的选择，这里你可以选择 free 或者 nonfree。  
我个人的建议是 nonfree。  
顾名思义，这个就是开源驱动可闭源驱动，如果你是原教旨主义者，我不介意你选开源驱动（而且他的兼容性更好），但是如果你要使用独显打游戏或者机器学习的话，我比较建议你选闭源，因为他在性能上要好一些，区别是肉眼可见的级别。当然这个驱动设置即使是安装好系统之后也是可以再修改的。

如果想切换驱动的话，你只需要打开 manjaro 自带的`系统设置`，这里边的 `硬件设定` 可以选择要的驱动版本。如果已经有其他版本的驱动已经安装，需要先把它卸载，否则会提示 冲突，无法安装新驱动。  
显卡驱动我建议早些确定下来，因为我目前的感觉是调整显卡驱动会有些风险，会引起系统没法进图形界面，如果你因为折腾N卡驱动而导致开机黑屏的话，我这里有一剂救命良药可供参考 [Manjaro卸载显卡驱动黑屏问题解决](https://tamsiree.com/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/) (都是我的血泪经验教训/(ㄒoㄒ)/~~)

然后我稍微说一下双显卡的问题，如果不是混合显卡可以跳过。  
目前我的 Alienware 是双显卡 英特尔集显 和 独显NVIDIA卡 GTX 970M 。  
Manjaro 已经内置了双显卡驱动，在驱动选择界面你可以选择单显卡驱动和双显卡驱动，双显卡驱动的区别是他的名字里边带有 bumblebee，我这里叫做“video-hybrid-intel-nvidia-430xx-bumblebee”。Bumblebee 是 linux 下相当好用的双显卡解决方案，他允许你手动选择用哪个显卡打开程序。  
但是还是需要稍微配置一下才能使用独显运行程序。

1. 确保安装的是闭源驱动 `video-hybrid-intel-nvidia-bumblebee` 系列的驱动
2. 解决依赖
```bash
sudo pacman -S virtualgl lib32-virtualgl lib32-primus primus
```

3. 安装双显卡切换程序bumblebee
根据自己的显卡所对应的驱动安装，例如我的显卡是 GTX 970M，对应的驱动是 `video-hybrid-intel-nvidia-430xx-bumblebee`，所以
```bash
sudo mhwd -f -i pci video-hybrid-intel-nvidia-430xx-bumblebee
```

4. 开启系统服务
```bash
sudo systemctl enable bumblebeed
```

5. 添加用户组权限
```bash
sudo gpasswd -a $USER bumblebee
```

6. 重启
```bash
reboot
```

电脑重启后，用命令行：
测试集显的FPS
```bash
glxgears  
```

测试独显的FPS
```bash
optirun glxgears  
```

> 会发现独显的FPS明显有了变化

查看显卡信息
```bash
optirun nvidia-smi  
```

> 至此，manjaro的双显卡就安装好了

显卡驱动安装好后，如何在程序中用独立显卡来运行呢，可以用到 `optirun`或者 `primusrun` 命令，格式为：
```bash
optirun wine qq.exe
```

```bash
primusrun android-studio
```

值得一提的是，在使用 bunblebee 框架的时候，nvidia 设置是不能打开的，你需要使用 `optirun -b none nvidia-settings -c :8` 来启动 nvidia 面板。其他设置依然可以参考 [manjaro wiki 页面](https://wiki.manjaro.org/index.php?title=Configure_NVIDIA_(non-free)_settings_and_load_them_on_Startup)。

---

### 分区挂载

这里我觉得最要紧的问题就是 manjaro 安装完之后不能写入 NTFS！也就是说他们打开只能只读。  
之前这个硬盘装的是双系统，大部分分区仍然是 Windows 下边的 NTFS 格式，然后发现 NTFS 分区不能写入。  
当然解决方案也很简单，安装 `ntfs-3g-fuse` 这个包就好。我强烈建议你不要用 `ntfs-config` 这个包，上次安装这个包直接导致我系统各种挂载不正常。

### 挂载新硬盘

```bash
sudo mount /dev/sda1 /home/tamsiree/Disk1/ 
```

`/dev/sda1` 为待挂载 新硬盘  
`/home/tamsiree/Disk1/` 为挂载指定路径

#### 设置开机自动挂载硬盘

查询磁盘UUID
```bash
ls  -al  /dev/disk/by-uuid
```

编辑/etc/fstab(用来存放文件系统的静态信息的文件)

加入挂载磁盘的信息

```bash
UUID=xxx  /[挂载目录]  ext4[文件格式]  defaults  0  0
```

重启系统即可

---

# 功能需求
##  生成ISO文件

1. 首先安装cdrkit工具
```bash
sudo pacman -S cdrkit  
```

2. 然后将目标文件夹打包成为ISO文件  
使用目录文件制作ISO文件
```bash
mkisofs -r -o 路径/ISO 文件名 目录文件路径
```
例子：
```bash
mkisofs -r -o /home/tamsiree/Tam1T/SteamOS.iso /home/tamsiree/Tam1T/系统镜像/SteamOSInstaller/
```

3. 制作完ISO文件后，如何挂载呢？
```bash
mount -o loop ISO文件名 挂载点路径
```
例子：
```bash
mount -o loop /opt/mycd.iso /mnt/cdrom
```

---

## 获取文件的md5sums

例如我在AUR中安装unityhub时，提示文件的 md5sums 验证失败(这问题老生常谈了)，因此便自己获取文件的 `md5sums` 然后修改构建脚本文件。
```bash
md5sum unityhub-2.2.2.AppImage  | cut -d ' ' -f1
```

---

## PGP Key Fingerprint

在注册 [ArchLinux](https://aur.archlinux.org/) 的时候，需要用到 PGP 秘钥。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191014041534340.png)

使用加密工具GPG 生成秘钥

> 简单介绍GPG  
> 
> 要了解什么是 GPG，就要先了解 PGP。  
> 1991 年，程序员 Phil Zimmermann 为了避开政府监视，开发了加密软件 PGP。这个软件非常好用，迅速流传开来，成了许多程序员的必备工具。但是，它是商业软件，不能自由使用。所以，自由软件基金会决定，开发一个 PGP 的替代品，取名为 GnuPG。这就是 GPG 的由来。  
> GPG 有许多用途，包括文件加密、邮件的加密。

1. 安装
```bash
sudo pacman -S gnupg
```

2. 查看帮助，如果屏幕显示 GPG 的帮助，就表示安装成功。
```bash
gpg -help
```

3. 安装成功后，使用 gen-ken 参数生成自己的密钥。
```bash
gpg --gen-key
```

---

## 安装deb包

### 使用 debtap 工具进行解包  

1. 首先查看电脑上是否安装过 debtap
```bash
sudo pacman -Q debtap
```
2. 安装解包打包工具 debtap
```bash
yay -S debtap
```
3. 升级 debtap
```bash
sudo debtap -u
```
4. 将deb解包
```bash
sudo debtap  xxxx.deb
```
5. 上述操作完成后会在deb包同级目录生成 ×.tar.xz 文件，直接用 `pacman` 安装即可
```bash
sudo pacman -U x.tar.xz
```
> 安装时会提示输入包名，以及 `license`。  
> 包名随意，`license` 就填 GPL 吧  

---
> to be continued...