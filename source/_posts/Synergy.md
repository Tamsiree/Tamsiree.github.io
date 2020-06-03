---
title: Synergy
author: Tamsiree
date: 2020-05-10 14:26:21
description: Synergy是一种Server加Client的机制，只要电脑们在同个局域网，Clinet们可以和Server通过网络共享键盘和鼠标，但是这个过程是单向的，而且Client的操作流畅度会受到网络限制，不过只要不是网速太差的情况下，不会有明显的延时和卡顿。我终于体验到了Windows和Linux一起使用的快感，切换系统？不存在的，鼠标一移动就行了，跨屏操作。
tags:
  - Software
  - Synergy
categories:
  - Software
  - Synergy
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg5794513.jpg
---
# 前言
家里人有台旧电脑，说是平日里用不着就给我拿去用了，我想平时需要在 Windows10 和 `Manjaro` 之间来回切换，甚是麻烦，就收下了。  
这下可好，装完Ubuntu，又把开发环境配了一遍以后，问题来了：加个电脑又不像加个屏幕那么简单直白，难不成我要配两把键盘，两个鼠标才能工作？？？我不同意，绝对不行！  
功夫不负有心人，还真让我找到了这一个天降神器——[Synergy](https://symless.com/synergy)。

Synergy是一种Server加Client的机制，只要电脑们在同个局域网，Clinet们可以和Server通过网络共享键盘和鼠标，但是这个过程是单向的，而且Client的操作流畅度会受到网络限制，不过只要不是网速太差的情况下，不会有明显的延时和卡顿。我终于体验到了Windows和Linux一起使用的快感，切换系统？不存在的，鼠标一移动就行了，跨屏操作。用户体验：真香！！

而且Synergy支持Windows，Linux，Mac，再也不用担心不支持的问题了。

# 正文
# 1.Synergy安装：

安利完了，就来讲一下如何安装Synergy。

## 1.0 Manjaro 16.04:

```
sudo pacman -S synergy
```

一行搞定！

## 1.1 Windows：

我在百度上找不到免费的版本，百度搜出来的所谓破解版。。。你们都懂的，根本不用点进去下载。  
最后还是搭了梯子去找谷歌爸爸了。下面这个是我下载的地址：

[Synergy Windows](https://sourceforge.net/projects/synergy-stable-builds/)

[没办法科学上网的小伙伴们点这里，至于下载积分数，我已经尽力了](https://download.csdn.net/download/weixin_41995979/10623447)

至于安装，在Windows下都是傻瓜操作你懂的，一路next，顶多改个安装路径。

## 1.2 Mac:

。。。我没有Mac

# 2\. Synergy配置

安装完肯定是要配置的啦，不配置是不可能的，这辈子都不可能了。

## 2.0 Server端配置

因为，我把Windows当Server，所以就用Windows来演示。  

![这里写图片描述](https://img-blog.csdn.net/20180824010722373?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTk5NTk3OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  

完成上面步骤以后，你会进入设置服务端的界面  

![这里写图片描述](https://img-blog.csdn.net/20180824011209893?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTk5NTk3OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  

![这里写图片描述](https://img-blog.csdn.net/20180824011401461?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTk5NTk3OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  

一定要去下面这里看自己的屏幕名称，其实就是你的电脑在局域网中的名称。

![这里写图片描述](https://img-blog.csdn.net/20180824011540397?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTk5NTk3OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  

设置完成以后点击开始就行了。

## 2.1 Client端配置

Client相对Server的配置比较简单，其实都没多复杂。  

![这里写图片描述](https://img-blog.csdn.net/201808240123560?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTk5NTk3OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  

照样配置完选择开始就行了。

# 3.开始享受吧！

如果一切顺利，你会发现你的鼠标可以从一天电脑的屏幕移动到另一台电脑的屏幕了，键盘输入也会自动切换到鼠标所在的屏幕。

# 4. 预料之外：

如果作为Server端的电脑键盘上有一些自带的快捷键，比如调节音量，调节亮度等等，照样可以用到Client端上，这个小细节太贴心了！！

---
> to be continued...
