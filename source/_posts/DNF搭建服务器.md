---
title: DNF搭建服务器
author: Tamsiree
date: 2020-04-28 23:04:04
description: 这篇文章是我从【台服DNF吧】贴吧所学到的内容，在此感谢贴吧各位大佬。本文没有技术讲解，只是一些操作流程，适合新人观摩。文中用到的服务器为百度云，搭建完成后可以，朋友们联机一起打游戏；按照这个步骤，也可以使用虚拟机通过局域网联机。电脑系统是win10也可以运行。
tags:
  - Game
  - DNF
categories:
  - Game
  - DNF
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/d810950926cc5b4a811ea63b2a3c4160.jpeg
---
# 前言
这篇文章是我从【台服DNF吧】贴吧所学到的内容，在此感谢贴吧各位大佬。本文没有技术讲解，只是一些操作流程，适合新人观摩。文中用到的服务器为百度云，搭建完成后可以，朋友们联机一起打游戏；按照这个步骤，也可以使用虚拟机通过局域网联机。电脑系统是win10也可以运行。

# 正文

## [](#原教程地址： "原教程地址：")原教程地址：

DNF服务端单机架设教学：[http://t.cn/R6j0ECl](http://t.cn/R6j0ECl)

DNF服务端新手架设教学：[http://t.cn/R6jOAqf](http://t.cn/R6jOAqf)

PVF文件介绍：[http://t.cn/R6jOLw3](http://t.cn/R6jOLw3)

国内玩家自制的十佳版本：[http://t.cn/R6jOLQQ](http://t.cn/R6jOLQQ)

GM工具：[http://t.cn/R6jOy9J](http://t.cn/R6jOy9J)

搭建所用到的知识和步骤上面的教程已经说的很详细了，再次感谢贴吧各位大佬！ 因本人水平技术有限，文中难免出现错误疏漏之处，谨请斧正。

## [](#用到的软件： "用到的软件：")用到的软件：

服务器：

-   百度云1核/1GB/40GB/普通型III+1M（这个配置应该可以运行10个人）

游戏客户端+服务端：

-   [http://pan.baidu.com/s/1o8mDEuI](http://pan.baidu.com/s/1o8mDEuI) 密码：231y

游戏win10补丁：

-   [https://pan.baidu.com/s/1yxpT8Pw6lUMIbINQOJVJXA](https://pan.baidu.com/s/1yxpT8Pw6lUMIbINQOJVJXA)
    
    复制到游戏目录覆盖，电脑系统是win10，必须下载这个补丁游戏才能运行。
    

黑岩10.0新纪元端：

-   [https://pan.baidu.com/s/10pNazmyl31-Ym-T\_8ic\_cw](https://pan.baidu.com/s/10pNazmyl31-Ym-T_8ic_cw)
    
    只需要下载官方版或技能增强版+客户端就可以了。
    

软件工具：

-   [https://pan.baidu.com/s/1-HQBWBGBiKDnolT81Ur3JQ](https://pan.baidu.com/s/1-HQBWBGBiKDnolT81Ur3JQ)
    
-   putty：可以连接上你的服务器，运行各种命令。
    
-   filezilla：可以往你的服务器上传文件。也可以用教程中的WinSCP软件。
    
-   Notepad++：文本编辑工具。
    
    软件安装教程很简单不写了。
    

**多图警告！！！**

## [](#搭建步骤： "搭建步骤：")搭建步骤：

1）关于服务器系统最好还是按照教程里的CentOS 5.8 64位，如果是自己用虚拟机的话。

百度云管理界面打开是这个样子

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/1.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/1.jpg)

记住公网IP，之后会用到。选中你的服务器，点击更多操作，重装操作系统

百度云重装操作系统，选择如图所示：

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/2.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/2.jpg)

在我测试了下用最新的7.5x86\_64(64bit)会报错，游戏服务器的某个软件提示需要用到32位的操作系统。所以我选择了6.5 i386(32bit)。

管理员用户名root，选择设置密码，这个密码之后会用到。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/3.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/3.jpg)

2）下载好游戏后，解压【服务端架设工具】这个文件，将下图所示的这两个文件上传至服务器根目录。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/4.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/4.jpg)

下载好的服务端工具里有putty和WinSCP，也可以使用WinSCP上传文件，方法上面的教程链接里有。

打开filezilla，在主机填入你的服务器公网IP，用户名root，密码是你刚才设置的，端口22，连接上就如下图所示。选好路径后，右击文件选择上传。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/5.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/5.jpg)

远程站点后面是路径，就上传到这里，图示我已经把文件上传到服务器了。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/6.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/6.jpg)

3）打开putty。在Hostname中填入你的服务器公网IP，点击Open

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/7.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/7.jpg)

在login as后输入root，这是用户名，接着要求你输入密码，就是刚才你设置的。输入过程是不会回显任何字符，输入完成后如下图，出现光标。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/8.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/8.jpg)

依次输入三个命令：

**cd /**

**chmod 777 dof**

**./dof**

此时服务端开始安装。安装完成后会自动弹窗，提示重启。

4）修改文件，进入如下图目录中

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/9.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/9.jpg)

从cain01到cain05，这5个文件内容差不多，需要修改里面的IP。先下载下来，用Notepad++打开，修改里面的IP为你服务器的公网IP。打开后，某些字段“=”之后是空的，这就需要填入你的公网IP。

把这5个文件全部修改完成，上传服务器并覆盖原文件。

Notepad++这个软件是我习惯用的一个文本编辑软件，如果用记事本打开修改的话，我怕是会出现什么问题。

5）重新打开putty，输入用户名密码。

输入 ./run，服务端程序开始运行。出现五国那个就可以使用客户端登陆了。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/10.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/10.jpg)

6）解压客户端文件，解压win10补丁，将文件覆盖至游戏客户端文件。打开game.ini文件。内容如下：

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/11.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/11.jpg)

在Server和DBIP后面填入你服务器的公网IP，然后你的客户端就可以运行啦。

7）注册账号通过客户端的左上角的注册账号按钮

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/12.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/12.jpg)

8）连上服务器如果频道是灰色的无法选中不能进入。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/13.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/13.jpg)

需要再次打开putty连上你的服务器，连续输入两次./stop，再输入一次./run，出现五国就可以了。进入游戏界面如下：

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/14.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/14.jpg)

## [](#游戏更新： "游戏更新：")游戏更新：

我下载的是黑岩10.0端，相关信息可以前往【dnf台服pvf吧】贴吧看。

一共需要两个文件，一个是Script.pvf，一个是黑岩客户端文件。

1）先把黑岩客户端文件解压覆盖到你原来客户端的文件里面，把Script.pvf也覆盖到客户端文件里。

2）把Script.pvf文件上传到服务端。putty连上服务器，连续输入两次./stop，关闭服务器程序。打开filezilla把pvf文件上传到如下图目录下：

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/15.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/15.jpg)

3）运行服务端程序./run

更新以后会发现一些变化，比如赛利亚房间，活动任务等。

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/16.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/16.jpg)

## [](#最后 "最后")最后

这个我在搭建的时候几乎没有遇到什么问题，搭建完成，成功运行之后写成此文，没有对游戏内容测试（好像组队会有bug），对游戏功能，pvf文件等没有深入研究。虚拟机搭建我没有试过，应该是可以运行。创建一个虚拟机，下载安装centos5.8系统，设置虚拟机网络，虚拟机的局域网地址就是上面公网IP。

这个游戏版本是大转移之前的版本，建议不要使用GM工具，从头再走一遍任务流程，听着NPC熟悉的声音，配合这背景音乐，还是有点莫名感动啊。

《地下城与勇士》这款游戏陪伴我走过十年寒窗，成为我生命中美好的回忆。

放几张图：

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/17.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/17.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/18.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/18.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/19.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/19.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/20.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/20.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/21.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/21.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/22.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/22.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/23.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/23.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/24.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/24.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/25.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/25.jpg)

[![](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/26.jpg)](http://www.rwyqboy.top/img/post/DNF服务器架设和更新教程/26.jpg)

谨以此文纪念陪伴我成长的无数游戏。

> 本文来自转载

---
> to be continued...
