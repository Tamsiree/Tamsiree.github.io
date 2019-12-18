---
title: Unity3d问题归纳
author: Tamsiree
tags:
  - Tool
  - Development Tool
  - Unity3d
categories:
  - Tool
  - Development Tool
  - Unity3d
date: 2019-08-14 22:22:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/v2-bb4cb7afa870bd5aff95f0326f0bac63_hd.jpg
---

# 关于Unity升级到2018.3以上命名空间不存在解决方案
错误发生的原因：  
> 例如: 关于Unity升级到2018.3报 The type or namespace name 'Remoting'...错误

> 今天得到好消息是Unity2018.3将支持C#7，于是兴奋地升级了下。   
> 结果报了个The type or namespace name 'Remoting' does not exist in the namespace 'System.Runtime'这样的错误。    
> 网上查了下这是因为API LEVEL这边默认的是2.0的原因，升级到4.X就解决了。    

解决办法:  
`File` -> `build setting` -> `play setting`

![](https://img-blog.csdn.net/20180913204248247?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Jpbkthcw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)