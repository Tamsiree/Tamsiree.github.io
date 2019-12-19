---
title: Hexo插入Bilibili视频自适应
date: 2019-03-18 13:06:24
description: 在Hexo插入Bilibili视频的时候，发现视频的播放器大小好小，于是决定解决一番。
tags:
  - Hexo
categories:
  - TechnicalResearch
  - Hexo
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-422864.jpg
---
# 前言
> 在Hexo插入Bilibili视频的时候，发现视频的播放器大小好小，于是决定解决一番。

# 原版分享视频

![Bilibili分享视频](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191118130727.png
)

```html
<iframe src="//player.bilibili.com/player.html?aid=47115841&cid=82509825&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

直接将B站中的视频插入地址放入文章MarkDown中的效果如下：

<iframe src="//player.bilibili.com/player.html?aid=47115841&cid=82509825&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

这个视频也太小了，而且不能全屏，很难受，于是在网上看到有人用自定义调节视频的高宽。

# 自适应视频播放器

```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=55224540&cid=96981660&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe>
</div>
```

只需要在分享复制的代码外层添加这一层 `div` 就好了，最后效果如下：

<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=47115841&cid=82509825&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe></div>

> 手机上也能很好的自适应噢

本文中的自适应解决方案来自这篇 [文章](https://www.andyvj.com/2019/02/12/190213-01/)，里面还介绍了其他音视频平台插入的方法，在这里也谢谢这位老哥了。