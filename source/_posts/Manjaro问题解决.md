---
title: Manjaro问题解决
author: Tamsiree
date: 2019-09-26 18:36:21
description: 在使用Manjaro系统时，总会遇到一些奇奇怪怪的问题，特此记录。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/36eb674ba0633d185da078804a3638e6.jpg
---
# 前言
在使用Manjaro系统时，总会遇到一些奇奇怪怪的问题，特此记录。


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
```

西文字体推荐使用 `dejavu` 、`noto` 字体。

```bash
sudo pacman -S ttf-dejavu ttf-roboto
sudo pacman -S noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk
```

配置字体效果非常耗费时间，如果想仔细折腾，可以参考如下几个网页：

1. [Localization/Simplified Chinese (简体中文)](https://wiki.archlinux.org/index.php/Localization/Simplified_Chinese_%28简体中文%29)  
2. [Font configuration (简体中文)](https://wiki.archlinux.org/index.php/Font_configuration_%28简体中文%29)  
3. [Font Configuration/Chinese (简体中文)](https://wiki.archlinux.org/index.php/Font_Configuration/Chinese_%28简体中文%29)  

---

#### 字体设置
在使用winfonts之后，电脑默认中文字体编程宋体，并不是很好看，我们把它转变成文泉驿正黑。操作如下：
在 ~/.config/fontconfig 目录下的 `fonts.conf` 中添加以下内容  

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
```bash
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
```bash
pacman -S vlc
```

---

## sudo 免密操作

开机启动和平时一些操作难免使用sudo命令。
```bash
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

```bash
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

## 秘钥出现问题

在更新软件时，蹦出来这个错误

错误日志
```bash
==> 正在从 archlinuxcn.gpg 添加密匙...
==> 正在本地签名密匙环中的可信密匙...
  -> 正在本地签名密匙 87F2E316E0ABC98B9DE8D4EF042FD810600954EF...
==> 错误： 87F2E316E0ABC98B9DE8D4EF042FD810600954EF无法在本地签署。
  -> 正在本地签名密匙 99399D88F7B752BF364CD485A85E3925A6211F05...
==> 错误： 99399D88F7B752BF364CD485A85E3925A6211F05无法在本地签署。
  -> 正在本地签名密匙 90403E12F4CE5E0E950E4AD2C96492E347202001...
==> 错误： 90403E12F4CE5E0E950E4AD2C96492E347202001无法在本地签署。
  -> 正在本地签名密匙 F905932C85D705FD2A3CC9E47C63370395FF0792...
  -> 正在本地签名密匙 1F255DC97A5431001F9D01F8CDABD988DD8AD93B...
==> 错误： 1F255DC97A5431001F9D01F8CDABD988DD8AD93B无法在本地签署。
  -> 正在本地签名密匙 4A6D297E6F74638E4D5F8E99152AC7B5F7608B26...
==> 错误： 4A6D297E6F74638E4D5F8E99152AC7B5F7608B26无法在本地签署。
  -> 正在本地签名密匙 6F6E9653B88BA07F5EED1B0096F3CA6256A95C51...
==> 错误： 6F6E9653B88BA07F5EED1B0096F3CA6256A95C51无法在本地签署。
  -> 正在本地签名密匙 4B1DE545A801D4549BFD3FEF90CB3D62C13D4796...
==> 错误： 4B1DE545A801D4549BFD3FEF90CB3D62C13D4796无法在本地签署。
  -> 正在本地签名密匙 0AABCAF6773D5B6E1F4ECF794E72AF09097DAE2E...
==> 错误： 0AABCAF6773D5B6E1F4ECF794E72AF09097DAE2E无法在本地签署。
  -> 正在本地签名密匙 43A253584139DC6D923B6EFC34F1E61A0EEB4F51...
==> 错误： 43A253584139DC6D923B6EFC34F1E61A0EEB4F51无法在本地签署。
  -> 正在本地签名密匙 3167205DC1F2582F226007FAB012733142D79E59...
==> 错误： 3167205DC1F2582F226007FAB012733142D79E59无法在本地签署。
  -> 正在本地签名密匙 9BE836747F3533EAABA99F1485AEA2926167AD32...
==> 错误： 9BE836747F3533EAABA99F1485AEA2926167AD32无法在本地签署。
  -> 正在本地签名密匙 708DFB13CBED9AB39449DBFB41C04120C297B594...
==> 错误： 708DFB13CBED9AB39449DBFB41C04120C297B594无法在本地签署。
  -> 正在本地签名密匙 F357BC80BE28C292B40ECEC8997995DF61A0959A...
==> 错误： F357BC80BE28C292B40ECEC8997995DF61A0959A无法在本地签署。
  -> 正在本地签名密匙 7B314BE77DBCA20E02DDBBC050BF8B712DCAD7EA...
==> 错误： 7B314BE77DBCA20E02DDBBC050BF8B712DCAD7EA无法在本地签署。
  -> 正在本地签名密匙 D88390B2991F8242FABD2A3C07F45E2A1937DD32...
==> 错误： D88390B2991F8242FABD2A3C07F45E2A1937DD32无法在本地签署。
  -> 正在本地签名密匙 53641635F498CDD60227A7ED0832F151DB0FB18E...
==> 错误： 53641635F498CDD60227A7ED0832F151DB0FB18E无法在本地签署。
  -> 正在本地签名密匙 1C874172781545C15399D4CF7E9BA67AD5E38E78...
==> 错误： 1C874172781545C15399D4CF7E9BA67AD5E38E78无法在本地签署。
  -> 正在本地签名密匙 38009E1FD96C320609BF05870A5BAD445D80C1CC...
==> 错误： 38009E1FD96C320609BF05870A5BAD445D80C1CC无法在本地签署。
  -> 正在本地签名密匙 4CFF42599833CF3AE98A2F098850CBC20940E3F9...
==> 错误： 4CFF42599833CF3AE98A2F098850CBC20940E3F9无法在本地签署。
  -> 正在本地签名密匙 1C9084FAFE017CEAE4AF59C91DF6CF104433578C...
==> 错误： 1C9084FAFE017CEAE4AF59C91DF6CF104433578C无法在本地签署。
  -> 正在本地签名密匙 AA0CBF3859E580B97D9F04638FDE3D8FC99F40AE...
==> 错误： AA0CBF3859E580B97D9F04638FDE3D8FC99F40AE无法在本地签署。
  -> 正在本地签名密匙 1D5AB52A241CC492A724FE14E8D79E63E3D142F3...
==> 错误： 1D5AB52A241CC492A724FE14E8D79E63E3D142F3无法在本地签署。
  -> 正在本地签名密匙 356690A1E7404E30D0E902B2E64D049594A54F54...
==> 错误： 356690A1E7404E30D0E902B2E64D049594A54F54无法在本地签署。
  -> 正在本地签名密匙 0285FB6900D102030550F20A34908FFBC0BFAC35...
==> 错误： 0285FB6900D102030550F20A34908FFBC0BFAC35无法在本地签署。
  -> 正在本地签名密匙 1B53ED6B05A88B45FE02AE6186CC4303D870877E...
==> 错误： 1B53ED6B05A88B45FE02AE6186CC4303D870877E无法在本地签署。
  -> 正在本地签名密匙 02E02B85AF209AA00F784A1DD48313B447CD9E46...
==> 错误： 02E02B85AF209AA00F784A1DD48313B447CD9E46无法在本地签署。
  -> 正在本地签名密匙 BEA7E7644AE093AB557E521A26D9876AC0719A0B...
==> 错误： BEA7E7644AE093AB557E521A26D9876AC0719A0B无法在本地签署。
  -> 正在本地签名密匙 48ADDE10F27BAFB47BB0CCAF2D2595A00D08ACE0...
==> 错误： 48ADDE10F27BAFB47BB0CCAF2D2595A00D08ACE0无法在本地签署。
  -> 正在本地签名密匙 2AC4CFDB42972D38F105800BC0EB1AA4536A8318...
==> 错误： 2AC4CFDB42972D38F105800BC0EB1AA4536A8318无法在本地签署。
  -> 正在本地签名密匙 B5971F2C5C10A9A08C60030F786C63F330D7CB92...
==> 错误： B5971F2C5C10A9A08C60030F786C63F330D7CB92无法在本地签署。
  -> 正在本地签名密匙 21E347C47A6A13CDE64713CBAE62544C55609060...
==> 错误： 21E347C47A6A13CDE64713CBAE62544C55609060无法在本地签署。
  -> 正在本地签名密匙 83F817213361BF5F02E7E124F9F9FA97A403F63E...
==> 错误： 83F817213361BF5F02E7E124F9F9FA97A403F63E无法在本地签署。
  -> 正在本地签名密匙 243C14E5339E1B88EDCB29C595FC83B3084A5ADD...
==> 错误： 243C14E5339E1B88EDCB29C595FC83B3084A5ADD无法在本地签署。
  -> 正在本地签名密匙 86EEEC214D245137446F4AB195304B04071CCDB4...
==> 错误： 86EEEC214D245137446F4AB195304B04071CCDB4无法在本地签署。
  -> 正在本地签名密匙 CF73A9AE20AD483CE51130E0303A369BE11E4BE7...
==> 错误： CF73A9AE20AD483CE51130E0303A369BE11E4BE7无法在本地签署。
  -> 正在本地签名密匙 A0B55B12351C08FED81DAAF4840A50A14EEF0D58...
==> 错误： A0B55B12351C08FED81DAAF4840A50A14EEF0D58无法在本地签署。
  -> 正在本地签名密匙 481C4474AF1572165AE4C6AF3FDDD575826C5C30...
==> 错误： 481C4474AF1572165AE4C6AF3FDDD575826C5C30无法在本地签署。
  -> 正在本地签名密匙 7028E1F320C45EE98473B1C35F1BC1A1BF2B11D0...
==> 错误： 7028E1F320C45EE98473B1C35F1BC1A1BF2B11D0无法在本地签署。
  -> 正在本地签名密匙 00e716120987a801cd25070828d10c49a44f261e...
==> 错误： 00e716120987a801cd25070828d10c49a44f261e无法在本地签署。
  -> 正在本地签名密匙 9AD42FE922425C9D93E60B43BAD2804227A0AF05...
==> 错误： 9AD42FE922425C9D93E60B43BAD2804227A0AF05无法在本地签署。
  -> 正在本地签名密匙 C41D545A576AC1FE4DBE90C9B6CF41D1879E8002...
==> 错误： C41D545A576AC1FE4DBE90C9B6CF41D1879E8002无法在本地签署。
  -> 正在本地签名密匙 504357523094066C67E56CF58D99AA5CAD3908B0...
==> 错误： 504357523094066C67E56CF58D99AA5CAD3908B0无法在本地签署。
  -> 正在本地签名密匙 1FDBDCE2D26BD8F100EE2E73B1B9AAD8BE7E7326...
==> 错误： 1FDBDCE2D26BD8F100EE2E73B1B9AAD8BE7E7326无法在本地签署。
  -> 正在本地签名密匙 5984EA8F3C6C92945EB2EE40BE378C0A19C6421B...
==> 错误： 5984EA8F3C6C92945EB2EE40BE378C0A19C6421B无法在本地签署。
==> Updating trust database...
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
gpg: 绝对信任密钥 917895402A693066 的公钥未找到
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: 公钥 CF66D153D884358F 在其签名之后的 16 秒生成
gpg: 深度：0  有效性：  1  已签名：  0  信任度：0-，0q，0n，0m，0f，1u
==> ERROR: Trust database could not be updated.
错误：命令未能被正确执行
:: 正在运行事务后钩子函数...
(1/1) Arming ConditionNeedsUpdate...
```

解决方案：
```bash
rm -R /etc/pacman.d/gnupg
pacman-key --init
pacman-key --populate archlinux
```

---

## Manjaro更新软件失败
在系统提示软件更新时，准备进行软件更新，突然遇到这个错误。

```
全部安装大小：  2800.78 MiB
净更新大小：    40.91 MiB

:: 进行安装吗？ [Y/n] y
(294/294) 正在检查密钥环里的密钥                   [#####] 100%
(294/294) 正在检查软件包完整性                     [#####] 100%
错误：gnome-shell-extension-gsconnect: 来自 "lilac (build machine) <lilac@build.archlinuxcn.org>" 的签名是未知信任的
:: 文件 /var/cache/pacman/pkg/gnome-shell-extension-gsconnect-19-1-any.pkg.tar.xz 已损坏 (无效或已损坏的软件包 (PGP 签名)).
打算删除吗？ [Y/n] y
错误：inxi: 来自 "lilac (build machine) <lilac@build.archlinuxcn.org>" 的签名是未知信任的
:: 文件 /var/cache/pacman/pkg/inxi-3.0.30-1-any.pkg.tar.xz 已损坏 (无效或已损坏的软件包 (PGP 签名)).
打算删除吗？ [Y/n] y
错误：timeshift: 来自 "lilac (build machine) <lilac@build.archlinuxcn.org>" 的签名是未知信任的
:: 文件 /var/cache/pacman/pkg/timeshift-18.9.1-1-x86_64.pkg.tar.xz 已损坏 (无效或已损坏的软件包 (PGP 签名)).
打算删除吗？ [Y/n] y
错误：yad: 来自 "Colin Keenan <colinnkeenan@gmail.com>" 的签名是未知信任的
:: 文件 /var/cache/pacman/pkg/yad-0.40.0-2-x86_64.pkg.tar.xz 已损坏 (无效或已损坏的软件包 (PGP 签名)).
打算删除吗？ [Y/n] y
错误：无法提交处理 (无效或已损坏的软件包)
发生错误，没有软件包被更新。
```

> 我猜测原因可能是在Manjaro系统安装之后，我先安装了一部分软件，过了一段时间，我修改了 `/etc/pacman.conf` 文件，添加了 `ArchLinuxCN` 软件源，导致后期更新时，软件的签名不一致，因此需要修改 `/etc/pacman.conf` 文件中的 `SigLevel` 选项为 `Never`。

例如：
```
[archlinuxcn]
#SigLevel = Optional TrustedOnly
SigLevel = Never
Server = http://mirrors.163.com/archlinux-cn/$arch
```

如果问题仍然存在，可以尝试着把 `/etc/pacman.conf` 文件中的 **所有** `SigLevel` 选项为 `Never`。

在更新完成后，记得修改回原来的文件配置！有利于系统的安全。


---
> to be continued...