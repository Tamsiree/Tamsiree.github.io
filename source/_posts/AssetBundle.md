---
title: AssetBundle
author: Tamsiree
date: 2020-06-19 10:13:02
description:
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/jiguangbo.png
---
# 前言
这里是前言介绍。

# 正文
## AssetBundle的定义和作用 

1，AssetBundle是一个压缩包包含模型、贴图、预制体、声音、甚至整个场景，可以在游戏运行的时候被加载；  
2，AssetBundle自身保存着互相的依赖关系；  
3，压缩包可以使用LZMA和LZ4压缩算法，减少包大小，更快的进行网络传输；  
4，把一些可以下载内容放在AssetBundle里面，可以减少安装包的大小；  

## 什么是AssetBundle

可以归为两点：  
1，它是一个存在于硬盘上的文件。可以称之为压缩包。这个压缩包可以认为是一个文件夹，里面包含了多个文件。这些文件可以分为两类：serialized file 和 resource files。（序列化文件和源文件）
serialized file：资源被打碎放在一个对象中，最后统一被写进一个单独的文件（只有一个）
resource files：某些二进制资源（图片、声音）被单独保存，方便快速加载

2，它是一个AssetBundle对象，我们可以通过代码从一个特定的压缩包加载出来的对象。这个对象包含了所有我们当初添加到这个压缩包里面的内容，我们可以通过这个对象加载出来使用。

## AssetBundle使用流程

1，指定资源的AssetBundle属性
	（xxxa/xxx）这里xxxa会生成目录，名字为xxx
2，构建AssetBundle包
3，上传AB包
4，加载AB包和包里面的资源



---
> to be continued...
