---
title: Origin问题归纳
author: Tamsiree
tags:
  - Game
  - Origin
categories:
  - Game
  - GamePlatform
  - Origin
date: 2019-08-18 21:59:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/timshowrqg.jpeg
---
# Origin的下载速度改善方法
1. 退出origin，在origin根目录找到 EACore.ini 这个文件  

2. 用记事本打开复制下面这段代码，保存退出

```
[connection]
EnvironmentName=production

[Feature]
CdnOverride=akamai
```

3. 重新登录origin享受下载速度吧(注:有些地区这方法不管用)


---
> to be continued...