---
title: Manjaro常用软件
date: 2019-09-21 21:26:03
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t012460c7fdf2994e17.jpg
---
# 安装常用软件
## yaourt

> 注意：yaourt 目前已经停止维护，用户可以考虑迁移到 aurman 或 **yay**(推荐) 。  
> 可以参考 [Arch Wiki](https://wiki.archlinux.org/index.php/AUR_Helpers) 详细了解。


Arch Linux 强大之处之一就在于它数量庞大的 AUR（Arch User Repositry），许多优秀的第三方软件都在这里被维护和分流。  
但 pacman 的官方软件源里并不包含 AUR，所以 yaourt 就此横空出世。  
yaourt 是 Yet AnOther User Repositry Tool 的缩写，通过 yaourt 我们可以极大地扩展 Arch 的能力。  
作为 Arch 延伸版的 Manjaro 自然也能使用 yaourt，安装流程如下：

```bash
sudo pacman -S yaourt  
```

注意： 如果安装失败，可能需要添加第三方软件源  
修改 `/etc/pacman.conf` , 在最后一行添加：

```bash
[archlinuxfr]  
SigLevel = Never  
Server = http://repo.archlinux.fr/$arch  
```

然后继续安装 `yaourt`
```bash
sudo pacman -Sy yaourt  
```

可以参考 DigitalOcean 的这篇文章：[How To Use Yaourt to Easily Download Arch Linux Community Packages](https://www.digitalocean.com/community/tutorials/how-to-use-yaourt-to-easily-download-arch-linux-community-packages)。

> 提示： yaourt 使用时无需 sudo，否则会出错；  
> 如果频繁被提示需要调用 vim 等编辑器，可以考虑在`~/.zshrc` （bash 则为`~/.bashrc`）里添加 `export VISUAL="vim"` 。

---

## yay 
以后可以用yay来代替pacman安装软件   
```bash
sudo pacman -S yay base-devel
```

---

## Snap

```bash
sudo pacman -S snapd
```

启动并启用snapd服务：

```bash
sudo systemctl enable --now snapd.socket
```

确认服务状态，运行 `systemctl status snapd.socket` 命令

开机启动，开机运行命令脚本建立

> 系统设置----开机关机-----自动启动----添加脚本-----指定脚本位置。  
> 脚本开头：#!/bin/sh 后续自定义命令

---

## fcitx(输入法)

fcitx 是 Free Chinese Input Toy for X 的缩写，国内也常称作小企鹅输入法，是一款 Linux 下的中文输入法。

> 之前的老方法安装搜狗输入法各种无效.提示删除配置文件,等或者是部分应用程序无法调出中文输入法.此文完美解决这个问题。   
> 注意点 ：如果之前安装过搜狗输入法，请按照之前的安装步骤 卸载相关依赖以及软件，重点是还要删除～ config/ 下面 `sougou` 开头文件夹的配置文件之后开始下面步骤安装

```bash
yay -S qtwebkit-bin  
yay -S fcitx-sogoupinyin fcitx-configtool fcitx-im fcitx-sogoupinyin
yay -Sa fcitx-qt4
```

安装完 fcitx 之后还不能直接使用，需要编辑配置文件：  
修改`/etc/environment`, 在最后一行添加：

```bash
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

在终端输入  

```bash
qtconfig-qt4
```

找到 `interface` 选项  
把最低端的 `Defult Input Method`选项设置为`fcitx`  
按 `Ctrl`+`s`键 保持，然后重启即可。

然后重启 fcitx 服务即可使用。

-   建议安装 fcitx-googlepinyin 和 fcitx-configtool。前者提供更友善的输入联想，后者提供图形界面配置工具。

-   建议安装 fcitx-cloudpinyin 的大陆用户打开 fcitx-configtool 在附加组件里将云拼音来源改为百度，因为 Google 的服务在国内不稳定。

-   如果发现在命令行等界面下无法调出输入法，可以尝试安装 fcitx-qt5（针对 KDE 用户）。详细情况可以参见 Arch Wiki 。

---

## deepin-screenshot截屏
> 当前 Manjaro 下比较好用的截屏工具要属 `deepin-screenshot`

1. 下载安装
```bash
yay -S deepin-screenshot
```

2. 配置系统快捷键

在 `系统设置` - `工作区` - `自定义快捷键` 中  

![配置系统快捷键](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Manjaro/5410339-65ef5ef062c11a5c.webp)

点击 `编辑` - `新建` - `全局快捷键` - `命令/URL：`  

![快捷键触发器配置](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Manjaro/5410339-d6b61bcb24daa799.webp)

然后填写动作名称，如我这里是 `Deepin截图` , 然后分别填写注释（非必须）、触发器和动作，  
如下图：

![快捷键动作配置](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Manjaro/5410339-dbe8ca8b43041840.webp)

---

## git(系统自带)  
```bash
sudo pacman -S git
```

---

## VLC视频播放器(系统自带) 
```bash
sudo pacman -S vlc
```

---

## 网易云音乐
> 不用说，国内主流音乐播放器中唯一的一款支持 Linux 的。操作起来和 Windows 下的几乎没有区别。虽然个人不是网易云音乐粉，但还是要在这里感谢下团队的对 Linux 用户的付出。

```bash
yay -S netease-cloud-music
```

---

## 百度网盘
```bash
yay -S baidunetdisk
```

---

## 迅雷极速版
```bash
yay -S deepin.com.thunderspeed
```

---

## UGet
uGet Linux 下最好的下载管理器

```bash
yay -S uget
```

---

## Filezilla
Filezilla 免费的 FTP 解决方案

```bash
yay -S filezilla
```

---

# Teamviewer
Teamviewer PC 远程控制/远程访问软件，对个人使用免费

```bash
yay -S teamviewer
```

---

# aMule
aMule 着名的eDonkey / Kad客户端，具有守护进程版本和GTK +，Web和CLI前端。

```bash
yay -S amule
```

---

# Syncthing
Syncthing 用开放，值得信赖，去中心化的方案取代专有的同步和云服务。

```bash
yay -S syncthing
```

---

# franz
一个集合wechat.google.fancebook等的客户端。

```bash
yay -S franz
```

---

## 微信
```bash
yay -S deepin-wine-wechat
```
备选 yay -S wewechat

---

## QQ/Tim
> TIM 是腾讯旗下的聊天工具 QQ 的新版设计，腾讯官方已经在 2010 年停止了 Linux 版的 QQ 更新，wine 版的 QQ是网友制作并维护的 Linux 版 QQ，不过也在 2017 年停止了更新，于是 deepin 公司维护了一个 deepin wine 系列软件，包括 QQ。

```bash
sudo pacman -S deepin.com.qq.im #安装QQ
sudo pacman -S deepin.com.qq.office #安装TIM(推荐)
```

> Tim 运行需要依赖 gnome-settings-daemon   

```bash
sudo pacman -S gnome-settings-daemon
```

设置 `/usr/lib/gsd-xsettings` 为自启动   
`系统设置` -> `开机或关机` -> `自动启动` -> `添加脚本` -> 输入`/usr/lib/gsd-xsettings`    
重启即可 

> 喜大普奔，`QQ` 推出了官方 Linux 版本！  
> [官网](https://im.qq.com/linuxqq/download.html)  

```bash
# Linux QQ 需要依赖 gtk2.0
sudo pacman -S gtk2
```

```bash
sudo pacman -S linuxqq
```

> [deepin-wine的Tim或wechat字体发虚问题的临时解决办法](https://tamsiree.com/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/#deepin-wine的Tim或wechat字体发虚问题的临时解决办法)

---

## wps-office
```bash
# 安装wps
sudo pacman -S wps-office	
```

---

## VirtualBox
1. 安装 VirtualBox
```bash
sudo pacman -S virtualbox
```

2. 此时虚拟机已经安装完成，但是创建虚拟机之后启动会报错。提示内核问题。  
```bash
# 查询当前内核版本
uname -r 
# 5.3.8-3-MANJARO.
sudo pacman -S linux53-virtualbox-host-modules
```

3. 将VirtualBox模块添加到内核中。重启。  
```bash
sudo vboxreload
```

---

## google-chrome

chrome 浏览器的 AUR 版本，可以以下命令行安装 
```bash
`yaourt -S google-chrome` 
```

---

## shadowsocks-libev

> 某科学上网工具。在这里就不做详细介绍了，可以直接参见官方仓库。Arch 上的安装也很简单，直接使用 pacman 即可：`sudo pacman -S shadowsocks-libev` 。安装完毕后可以用 `ss-local` 命令搭建起本地服务器，用户以本地服务器为代理链接远端服务器从而访问 Google、Youtube 等网站，详细可以参考 [Arch Wiki](https://wiki.archlinux.org/index.php/Shadowsocks_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)) 。  

这里提几点小建议：

-   浏览器端可以考虑安装 [switchyomega](https://www.switchyomega.com/) 插件，它可以帮你自动切换代理节省流量。

-   终端代理可以考虑安装 proxychain-ng，同样可以直接通过 `sudo pacman -S proxychains-ng` 安装。然后修改配置：

```bash
sudo vim /etc/proxychains.conf  
# socks4 127.0.0.1 9050 （×）  
# socks5 127.0.0.1 1080 （√）  
```

使用时在需要代理的命令前加 proxychains4 就可以了，例如：`proxychains4 ping www.google.com` 。

-   图形界面管理器 [electron-ssr](https://github.com/erguotou520/electron-ssr)。Windows 下的 shadowsocks 客户端具有图形界面，而 Linux 下却只能用命令还要手写配置，这是比较烦人的。原先也有一个 shadowsocks-qt5，不过现在早就寿终正寝了。electron-ssr 总体表现十分优异，和 Windows 的客户端基本一致，在加上 Electron 天生跨平台→_→。  

安装也比较简单：  
```bash
yay -S electron-ssr
```

---

## typora

> 一款非常优秀的 Markdown 编辑器，也是我目前写博客（包括这篇文章）使用的主力编辑器。界面简介而功能强大，基于 Electron 强势跨平台，推荐使用。  

安装：  
```bash
yay -S typora
```

---

## wireshark-qt

> Wireshark 是一款免费开源的包分析器，可用于网络排错、网络分析、软件和通讯协议开发以及教学等。然而不幸的是官方网站上仅提供了 Windows 和 MacOS 的版本。不过不用担心，你依然可以使用 pacman 直接从 Arch 的 community 软件源里直接安装 wireshark-qt 。wireshark-qt 就是用 qt 做成的 wireshark 前端界面，它依赖于终端版的 wireshark-cli 。

这里提示一点： 通常直接安装完后启动 wireshark 会提示 /usr/bin/dumpcap 无权限，有些用户会因此选择在命令行里`sudo` 打开 wireshark，这其实很不安全。  

正确做法是运行命令

```bash
gpasswd -a username wireshark
```

然后重新启动，详情可以参见 [Arch Wiki](https://wiki.archlinux.org/index.php/Wireshark_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)) 。

---

# SpeedCrunch
一个漂亮，开源，高精度的科学计算器。

```bash
yay -S speedcrunch
```

---

# 游戏相关
## 安装wine

```bash
sudo pacman -S wine wine_gecko wine-mono winetricks
```

---

## 安装游戏平台Lutris

```bash
sudo pacman -S lutris
```

---

## 安装PlayOnLinux

```bash
sudo pacman -S playonlinux
```

---

# 开发工具
## visual Studio Code    
> Microsoft 最新作品，基于 Electron 完全跨平台，个人体验非常优秀的一款编辑器，社区活跃插件众多。话说 Microsoft 这几年来开源化浪潮是愈演愈烈，希望能一直做下去。

```bash
sudo pacman -S visual-studio-code-bin
```

---

## Intellij IDEA 
```bash
# 社区版 
yay -S intellij-idea-community-edition
# 商业版
yay -S intellij-idea-ultimate-edition
```

---

## Pycharm
```bash
#代码编辑器（IDE）
sudo pacman -S pycharm
```

---

## dbeaver 
```bash
# 连接数据库使用 dbeave (非常强大，Mysql、Oracle应有尽有) 
yay -S dbeaver
```

---

## sublime Text 3
```bash
# 首先安装 GPG key
curl -O https://download.sublimetext.com/sublimehq-pub.gpg && sudo pacman-key --add sublimehq-pub.gpg && sudo pacman-key --lsign-key 8A8F901A && rm sublimehq-pub.gpg
# 然后选择版本
# Stable 稳定版
echo -e "\n[sublime-text]\nServer = https://download.sublimetext.com/arch/stable/x86_64" | sudo tee -a /etc/pacman.conf
# Dev 开发版
echo -e "\n[sublime-text]\nServer = https://download.sublimetext.com/arch/dev/x86_64" | sudo tee -a /etc/pacman.conf
# 更新及安装Sublime Text
sudo pacman -Syu sublime-text
```

---

# 杀毒软件 
## clamav
> 安装配置使用clamav杀毒软件

### 安装clamav

```bash
sudo pacman -S clamav
```

### 更新病毒库

```bash
sudo freshclam
```

> 如果更新不了，或者更新特别慢，可以手动下载病毒库文件，放到/var/lib/clamav/文件下，在更新病毒库。

#### 病毒库文件链接（三个文件）：

> bytecode.cvd：[[ `bytecode.cvd` ]](http://database.clamav.net/bytecode.cvd)

> daily.cvd：[[ `daily.cvd` ]](http://39.137.1.205/cache/database.clamav.net/daily.cvd)

> main.cvd： [[ `main.cvd` ]](http://39.137.1.205/cache/database.clamav.net/main.cvd)

### 配置开机启动病毒库自动更新服务

```bash
systemctl enable clamav-freshclam.service
```

### 配置开机启动守护进程服务

```bash
systemctl enable clamav-daemon.service
```

### 使用clamav扫描根目录

```bash
clamscan  -ri /  --move=/home/tamsiree/文档 --max-scansize=4000M
```

### 选项注释：

```bash
-r 递归检查目录下的文件

-i 只打印受感染的病毒文件

--move 将受感染文件移至某文件夹

--max-scansize=4000M  支持扫描大文件
```

---
> to be continued...