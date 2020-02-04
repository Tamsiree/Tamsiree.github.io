---
title: Manjaro美化
date: 2019-09-22 11:41:03
description: 俗话说颜值是第一生产力（真的假的？）。但毋庸置疑一个漂亮的学习工作环境是会提高人的生产效率的。这里我就推荐一些桌面美化方案给大家参考。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01f37ee8b9d9b4e805.jpg
---
# Manjaro美化
俗话说颜值是第一生产力（真的假的？）。但毋庸置疑一个漂亮的学习工作环境是会提高人的生产效率的。这里我就推荐一些桌面美化方案给大家参考。

[![](https://i.loli.net/2018/09/16/5b9e51de18248.png)](https://i.loli.net/2018/09/16/5b9e51de18248.png)

---

## Breezemite

`Breezemite` 是一款模仿 MacOS 窗口按钮的 KDE 按钮主题。  
可以在 `系统设置 => 应用程序风格 => 窗口装饰` 里获取新主题安装它。  
注意你也可以在按钮选项中把窗口按钮调到左上角。

---

## Cairo-dock

顾名思义，所谓`cairo-dock` 就是模仿 MacOS 做的一个 dock，效果见屏幕底端。可以使用三维也可以平面化，包括特效、主题都可以在图形界面里设置，还是比较方便的。安装方法如下：

```bash
# 如果尚未安装 yay  
# sudo pacman -S yay  
yay -S cairo-dock cairo-dock-plug-ins  
```

注意右键 dock 可以选择开机自启动。

---

## Conky

`conky` 就是屏幕左侧的那个面板。使用`conky` 可以帮助你实时监测系统的一些有关信息，当然主要是看起来很酷\[/捂脸\]。在 Manjaro 上你可以直接一行命令安装： 

```bash
sudo pacman -S conky   \# 安装  
conky -C               \# 默认配置  
conky -c ~/.conkyrc    \# 用户设定配置文件路径  
```

官方 [repo](https://github.com/brndnmtthws/conky) 里提供了不少用户配置文件（User Configs），大家可以下载下来直接使用。

---

## Minimal Clock

KDE 一个鲜明的特色就是在它的桌面上一切都是组件化的。通常情况下你可以在自带的部件里找到很多好看有使用的部件，但在时钟这方面的表现不尽如人意，于是乎我就在 [store.kde.org](https://store.kde.org/) 上找到了 [Minimal Clock](https://store.kde.org/p/1173746/) 组件（效果见上图）。  
当然你也可以在这个网站上找到大量其他组件和主题来美化自己的桌面。

---

## Linux 终端体验

与 Windows 相比，Linux 拥有无比强大的终端。善用终端能大大提高你的生产效率。下面就介绍一些终端下好用的命令行工具。

---

## htop

`htop` 是 Linux 原生 `top` 命令的升级版。它是一个终端下的交互式任务管理器。你可以使用 htop 直接在终端管理你的进程与任务。你可以直接运行 `sudo pacman -S htop` 来安装。

---

## screenfetch

`screenfetch` 命令能在你的终端打印出你的系统信息，甚至图标（很酷不是吗）！同样可以使用 pacman 直接安装。当然你也可以考虑使用 `neofetch` 作为替代品。

---

## ranger

`ranger` 是一款终端下的文件夹管理器，并且支持 vim 快捷键。善用它可以大量减少你在终端与 dolphin（KDE 默认图形界面文件夹管理器）之间的不必要切换。同样可以一行命令安装：  
```bash
`sudo pacman -S ranger` 。
```

---

## thefuck

这个神奇的包是用 python 编写的，它的作用就是 —— 当你在终端输入了错误命令时，只要再输入`fuck` 就能自动纠错并执行。可以说是很符合人机工程学了[ /笑哭 ]。  
安装方式为：  
```bash
pip install thefuck 
```

---

## vim & vimtutor

无需多说，vim 绝对是文本编辑界的神器。据说甚至有巨佬全 vim 开发，真是令我等瑟瑟发抖。不过话说回来，vim 也绝对是提效神器，免去了你在终端与其他文本编辑器之间切换的痛苦——再加上一定的插件，写起代码来都是毫无压力。  
安装命令如下：

```bash
sudo pacman -S vim。
```

但 vim 的学习曲线也是无比陡峭，新手打开 vim 以后甚至可能都不会退出。这时候就需要 `vimtutor` 命令来帮助啦。如果你的 vim 正常安装成功，你就能在终端直接打开 vimtutor， 然后开始你的 vim 之旅吧！

---

## w3m

`w3m` 是一款运行在终端界面下的网页浏览器。对的你没听错，就是浏览器。如果有必要的话它甚至可以在终端显示图片。对于我这样一个 Zen Mode 重度患者来说，写代码的时候退出 Zen Mode 切换浏览器是件很麻烦的事情，这时候结合 w3m 和 yakuake 我就能直接简单浏览网页。怎么下载？问 pacman 去。

---

## yakuake

堪称 KDE 下的终端神器。如果你安装的是 Manjaro + KDE，那么 yakuake 已经预安装在你的系统里了，只要按`F12` 就能唤醒。其他 Linux 发行版的同学可以手动安装，一般在官方源里都有提供。

Gnome 或 Xfce 桌面的用户可以考虑使用 Tilda 或 Guake。

---

## zsh & oh-my-zsh

号称终极 Shell，拥有远超 bash 的高效功能。

当然，尽管 zsh 功能强大无比，但初期由于配置困难复杂，大多数人对其望而却步。直到有一天一位叫 Robby Russell 的程序员写出了 oh-my-zsh 这一 zsh 配置和插件管理器。可以参考官方网站 [ohmyz.sh](https://ohmyz.sh/) 。这里贴出 Arch 下的安装方法：

```bash
sudo pacman -S zsh               # 安装zsh  
chsh -s $(which zsh)             # 修改默认shell  
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"    # 使用curl安装oh-my-zsh  
```

可以考虑安装一些主题和插件，例如：

```bash
vim ～/.zshrc  
# ZSH\_THEME="agnoster"  
# plugins=(  
#     autojump  
#     extract  
#     git  
#     zsh-syntax-highlighting  
# )  
```

其中`autojump` 和 `zsh-syntax-highlighting` 需要手动安装： 

```bash
# 安装 autojump  
sudo pacman -S autojump  
# 安装 zsh-syntax-highlighting  
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH\_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting  
zsh  
```

> 推荐主题 `powerlevel10k`

![powerlevel10k主题](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Manjaro/plasmashell_20191114001128.png)

powerlevel10k的配置方法

```bash
p10k configure
```

powerline字体安装 [powerline fonts](https://github.com/powerline/fonts)

安装配置就此大功告成啦！

---

# manjaro kde主题
## 手动安装主题
首先manjaro安装主题，有两种方法：
通过“系统设置“-”全局主题“-”获取新的全局主题“，同样可以在”外观“中的Plasma样式、应用程序风格、颜色等当中”获取新的全局主题“。
通过manjaro kde store下载主题，然后将主题导入系统。

但是由于一些原因，方法1在我的电脑上是行不通的，加载速度极慢，下载速极慢，据说可以通过proxychain设置终端代理，据说可以行得通，但是我也没有尝试，所以也就不清楚了，所以方法1h是行不通的。

首先介绍下对应的主题，在以上链接的网站，可以搜索到很多的主题，但是能否适用于自己的桌面这就需要注意了，如果你的桌面是KDE的，那么就不能使用GTK主题，GTK主题适配于Gnome桌面。这里说说两个一个是 Global Themes这个是全局主题，也就对应与于设置中的全局主题 ;另外 Plasma Themes这是Plasma 样式，对应设置中的plasma样式。

第一步，下载 ocs-url 通过 yay -S ocs-url下载;

第二步，点击主题边上的 install按钮，之后会跳出是否打开 xdg-open，点击打开xdg-open,然后就会调用 ocs-url 下载安装主题，ocs-url可以自动下载主题，安装主题，同样适用于插件、plasma等;

另外：如果不使用以上方法，你也可以点击主题旁边的”download“按钮，下载对应的压缩包，解压之后移动到对应的目录：

￼```bash
/home/hzt/.local/share/plasma/desktoptheme 这是存放plasma主题
/home/hzt/.local/share/plasma/look-and-feel/ 存放全局主题
/home/hzt/.local/share/plasma/plasmoids/ 存放插件
```

以上目录如果没有就自行创建。

---
> to be continued...