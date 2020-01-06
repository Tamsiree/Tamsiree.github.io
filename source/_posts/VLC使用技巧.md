---
title: VLC使用技巧
date: 2018-12-20 20:18:49
description: VLC 是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。
tags:
  - Tool
  - Windows
  - Software
  - VLC
categories:
  - Tool
  - Windows
  - Software
  - VLC
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg038cd77.jpg
---
# 前言
VLC 是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。

VLC多媒体播放器（最初命名为VideoLAN客户端）是VideoLAN计划的多媒体播放器。它支持众多音频与视频解码器及文件格式，并支持DVD影音光盘，VCD影音光盘及各类流式协议。它也能作为unicast或 multicast的流式服务器在IPv4或 IPv6的高速网络连接下使用。它融合了FFmpeg计划的解码器与libdvdcss程序库使其有播放多媒体文件及加密DVD影碟的功能。

# 正文
## VLC播放器将m3u8链接视频下载到本地
m3u8格式链接在浏览器上打开，没有插件的情况下你会得到长得跟下面差不多的一个文本列表

![](https://img-blog.csdnimg.cn/20181225112120286.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

有基础的同学可能知道，以.ts 结尾的那些就是视频连接的实际播放地址，当然你还要拼上前面的前缀。

在浏览器上安装过插件的情况，你可以直接在线预览影片，但是如果你想下载到本地却很麻烦，在浏览器上传好看网络请求你会发现一部60分钟的影片可能被切成了几百上千个片段，每个片段不到10秒，难道我们要下一千个片段，然后用格式工厂拼起来？

其实我们有更好的选择，最终结果还是要落在万能的vlc播放器上  
> 首先打开vlc播放器-->媒体-->打开网络串流  
> 在URL输入栏输入m3u8链接后  
> 点击播放按钮旁边的下拉箭头  
> 点击串流

![](https://img-blog.csdnimg.cn/2018122511353722.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

下一个页面直接点击下一步，再下一个页面点击添加按钮（前面的选项保持默认的文件即可）  

![](https://img-blog.csdnimg.cn/20181225113815292.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

在弹出的页面的点击浏览选择文件保存位置

![](https://img-blog.csdnimg.cn/20181225113913992.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

设置完毕以后其他页面直接点击下一步，到最后页面点击 “流” 按钮开始串流

![](https://img-blog.csdnimg.cn/20181225114031323.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

串流之后VLC播放器页面不会播放视频，但是下面的进度条会动，等进度条加载完毕以后，影片就下载好了，然后就可以在你之前保存的位置看到下载好的文件，VLC会自动帮你把所有ts文件拼接成一个完整的视频，是不是很贴心

![](https://img-blog.csdnimg.cn/20181225114350845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhZGR5eXVu,size_16,color_FFFFFF,t_70)

 也有在网上看到其他教程不过都相对麻烦，需要先提取ts文件下载地址，批量下载后再用工具自己拼成一个完整的视频，操作流程比较繁琐，用VLC操作就没有那么多流程了，对新手来说还是vlc播放器比较友好。

---
> to be continued...