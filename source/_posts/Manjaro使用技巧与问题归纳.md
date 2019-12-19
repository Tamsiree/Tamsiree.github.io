---
title: Manjaro使用技巧与问题归纳
date: 2019-09-23 14:52:03
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
# 常见配置问题

## Dolphin 设置

Dolphin 是 KDE 下默认的文件管理器，整体来说做的很不错，但可能有一些使用不太令人习惯（例如单击直接打开文件）。这里列出几点优化配置建议：

-   双击打开文件（夹）：这个设置选项深藏在与 dolphin 毫无关系的角落里[无奈] 。打开系统设置=>桌面行为=>工作空间=>点击行为可以看见这一选项。
-   也有人可能会发现在Dolphin中使用 Del 键是很危险的：它会在没有任何确认的情况下直接删除你的文件。可以在配置Dolphin=>常规=>确认中打开文件删除确认。

---

## Grub 设置

在默认情况下我们打开 grub 引导菜单以后只有5秒钟的时间选择系统，这个能会带来些许不便。可以通过以下命令来修改 grub 配置：

```
sudo vim /etc/default/grub   # 修改为 GRUB_TIMEOUT=30  
sudo update-grub             # 更新 grub 配置  
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
显卡驱动我建议早些确定下来，因为我目前的感觉是调整显卡驱动会有些风险，会引起系统没法进图形界面，如果你因为折腾N卡驱动而导致开机黑屏的话，我这里有一剂救命良药可供参考 [Manjaro卸载显卡驱动黑屏问题解决](https://tamsiree.com/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/) (都是我的血泪经验教训/(ㄒoㄒ)/~~)

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
```
glxgears  
```

测试独显的FPS
```
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

# 问题解决
## 中文字体显示问题
### 解决 中文字体 乱码方块

中文字体推荐使用：文泉驿、思源字体。
文泉系列字体：

```bash
yay -S wqy-microhei-lite
yay -S wqy-bitmapfont  
yay -S wqy-zenhei
```

adobe 系列字体及其他：

```bash
yay -S adobe-source-han-sans-cn-fonts  
yay -S adobe-source-han-serif-cn-fonts  
yay -S noto-fonts-cjk
```

西文字体推荐使用dejavu、noto字体。

```bash
sudo pacman -S ttf-dejavu
sudo pacman -S noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk
```

#### 字体设置
在使用winfonts之后，电脑默认中文字体编程宋体，并不是很好看，我们把它转变成文泉驿正黑。操作如下：
在 ~/.config/fontconfig 目录下的fonts.conf中添加以下内容  

```conf
<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>

<!-- 以下为添加内容 -->
  <alias>
    <family>sans-serif</family>
    <prefer>
	  <family>WenQuanYi Micro Hei</family>
	  <family>WenQuanYi Zen Hei</family>
	  <family>WenQuanYi Zen Hei Sharp</family>
    </prefer>
  </alias>

  <alias>
    <family>serif</family>
    <prefer>
      <family>WenQuanYi Micro Hei Lite</family>
    </prefer>
  </alias>

  <alias>
    <family>monospace</family>
    <prefer>
	  <family>WenQuanYi Micro Hei Mono</family>
	  <family>WenQuanYi Zen Hei Mono</family>
    </prefer>
  </alias>

</fontconfig>
```

---

### Home 目录下的中文名文件夹

如果在安装时选择了中文环境，那么系统就会自动生成一些本地化的文件夹，例如下载、桌面等。但是在很多情况下使用中文名文件夹很不方便，可以在_应用程序=>位置_里修改。

---

### deepin-wine的Tim或wechat字体发虚问题的临时解决办法

#### QQ
由于deepin.com.qq.office使用的是deepin自带的容器，故在调整dpi时需要使用环境变量调用deepin的wine

修改wine设置的dpi 

```bash
env WINEPREFIX="$HOME/.deepinwine/Deepin-TIM" winecfg
```

将 `显示` 页面下的dpi修改为 120

#### Wechat

修改wine设置的dpi 

```bash
env WINEPREFIX="$HOME/.deepinwine/Deepin-WeChat" winecfg
```

将 `显示` 页面下的dpi修改为 120

---

### 导入添加windows字体

Linux 上自带的字体许多情况下不够用，尤其是在打开Windows下的文件时经常会出现乱码的情况。  
为了一劳永逸，我们就直接把 windows 的字体搬到 Linux中。

1. 将windows字体拷贝到linux下面  
找到Windows电脑 C:\Windows\Fonts 下，将所有的字体文件拷贝到U盘。  
或者直接在百度云里将windows字体下载到linux本地。  
将win字体迁移到linux字体文件中。

```bash
sudo mkdir /usr/share/fonts/windows/
sudo cp U盘拷贝的Windows字体路径/* /usr/share/fonts/windows/
# U盘拷贝的Windows字体路径 替换成 你实际的路径
cd /usr/share/fonts/windows/
rm *.fon
```

2. 建立字体索引信息，更新字体缓存

```bash
sudo mkfontscale
sudo mkfontdir
fc-cache -fv
```

这样就可以成功在linux上使用Windows字体。

---

## 解决 网易云音乐 无法输入中文
经过我自己探索，终于找到解决办法，分享给大家：
1.先安装 `qcef` 这个软件包
```
pacman -S qcef
```

2.编辑`/opt/netease/netease-cloud-music/netease-cloud-music.bash`，把它改成这样：
```bash
#!/bin/sh
HERE="$(dirname "$(readlink -f "${0}")")"
export LD_LIBRARY_PATH=/usr/lib
export QT_PLUGIN_PATH="${HERE}"/plugins
export QT_QPA_PLATFORM_PLUGIN_PATH="${HERE}"/plugins/platforms
exec "${HERE}"/netease-cloud-music $@
```

3.安装 `vlc` 这个包
```
pacman -S vlc
```

---

## sudo 免密操作

开机启动和平时一些操作难免使用sudo命令。
```
# 切换到root用户
su root  
nano /etc/sudoers/  下面一个文件 或者新建一个文件都可以
%sudo   ALL=(ALL) ALL  # 打开前面注释  
%wheel ALL=(ALL) ALL  后面添加，一定要保证在这个语句后面
tamsiree       ALL=(ALL)       NOPASSWD:ALL
%tamsiree       ALL=(ALL)       NOPASSW
```

---

## 解决 安装显卡驱动后 或者 更新内核后 `无法播放声音的问题`
在 `~/.asoundrc` 中(如果没有则新建)[此文件为隐藏文件]  

```
defaults.pcm.card 0
defaults.pcm.device 0
defaults.ctl.card 0
```

> 有时候在更新完内核或者其他必要性更新之后，重启之后变得无法播放声音  
> 根据我的经验，一般来说，先 **关机** 一次，然后过一会儿再启动，就又神奇的能播放声音啦！

---

## Manjaro卸载显卡驱动黑屏问题解决

移步前往我写的另外一篇文章吧 [**[Manjaro 卸载显卡驱动黑屏问题解决]**](https://tamsiree.com/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决)

---

## 通过pacman-manager安装软件失败

通过pacman-manager安装软件失败,并提示以下信息：

```bash
正在验证 source 文件，使用md5sums...
    deepin.com.wechat_2.6.2.31deepin0_i386.deb ... 通过
    WeChatSetup.exe ... 失败
    run.sh ... 通过
    reg.patch ... 通过
==> 错误： 一个或多个文件没有通过有效性检查！
```

解决方案：  
前往 `/var/tmp/pamac-build-xxx/`目录，删除缓存的临时文件即可。

---

## 分区挂载

这里我觉得最要紧的问题就是 manjaro 安装完之后不能写入 NTFS！也就是说他们打开只能只读。  
之前这个硬盘装的是双系统，大部分分区仍然是 Windows 下边的 NTFS 格式，然后发现 NTFS 分区不能写入。  
当然解决方案也很简单，安装 `ntfs-3g-fuse` 这个包就好。我强烈建议你不要用 `ntfs-config` 这个包，上次安装这个包直接导致我系统各种挂载不正常。

## 挂载新硬盘

```
sudo mount /dev/sda1 /home/tamsiree/Disk1/ 
```

`/dev/sda1` 为待挂载 新硬盘  
`/home/tamsiree/Disk1/` 为挂载指定路径

### 设置开机自动挂载

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

# 获取文件的md5sums

例如我在AUR中安装unityhub时，提示文件的 md5sums 验证失败(这问题老生常谈了)，因此便自己获取文件的 `md5sums` 然后修改构建脚本文件。
```bash
md5sum unityhub-2.2.2.AppImage  | cut -d ' ' -f1
```

# PGP Key Fingerprint

在注册 [archlinux](https://aur.archlinux.org/) 的时候，需要用到 PGP 秘钥

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
待续...