---
title: Origin问题归纳
author: Tamsiree
tags:
  - Game
  - GamePlatform
  - Origin
categories:
  - Game
  - GamePlatform
  - Origin
date: 2019-08-18 21:59:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/timshowrqg.jpeg
---
# 前言

在使用Origin平台时，总会遇到这样或者那样的问题，特此记录。

# 正文

## Origin的下载速度改善方法

我们在使用origin下载的时候难免会遇到下载速度慢的问题，很多人都说修改hosts，但是现在不能很好的解决，下面说一下一个新的方法:

1. 退出origin，在origin根目录找到 EACore.ini 这个文件
2. 用记事本打开复制下面这段代码，保存退出  

```ini
[connection]
EnvironmentName=production

[Feature]
CdnOverride=akamai
```

3. 重新登录origin享受下载速度吧(注:有些地区这方法不管用)

---
> to be continued...
