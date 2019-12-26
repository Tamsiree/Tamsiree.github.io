---
title: GitHub提速方案
date: 2019-11-23 23:58:18
description: Github 是程序员必备的代码托管平台，上面有许多公开项目资源可以供学习者免费下载学习，但有时候在github用git clone 下载公开项目的文件时，速度特别慢，因此Github提速迫在眉睫。
tags:
  - GitHub
categories:
  - TechnicalResearch
  - GitHub
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-2ed16y.jpg
---

# 前言
Github 是程序员必备的代码托管平台，上面有许多公开项目资源可以供学习者免费下载学习，但有时候在github用git clone 下载公开项目的文件时，速度特别慢，因此Github提速迫在眉睫。

# Github提速方案
为了解决上项目文件上传、下载速度慢的问题，翻越万里长城查阅资料，发现解决办法可以从 git clone 的域名入手。  
> 实际上用 git clone 下载项目文件时使用的域名是 [http://github.global.ssl.fastly.net](http://github.global.ssl.fastly.net) ，非 [http://github.com/](http://github.com/) 。  

因此，我们可以修改本地的 **hosts** 文件，在 **hosts** 文件中增加域名及域名解析对应的 ip，给该域名指定 ip 。

## 获取域名 IP
有两种方法可以查询 `github.global.ssl.fastly.net` 该域名对应的 IP：  
1. 登录域名  的 ip 地址查询网页
> http://github.global.ssl.fastly.net.ipaddress.com/

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191124001009.png)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191124001225.png)

找到域名 `github.global.ssl.fastly.net` 对应的 IP: `199.232.5.194` 。  

2. 利用第三方 DNS 域名解析网站，查询响应 IP  
常用的第三方 DNS 域名解析网站 [http://tool.chinaz.com/dns](http://tool.chinaz.com/dns)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191124002601.png)

不同地方对应该域名的响应ip不一样，网页解析速度也就不一样。选择TTL值最小的ip即可。

3. 查询CDN IP
前往[ipaddress](https://www.ipaddress.com/)找到最近的github的CDN IP

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/owzawzjyse.png)

```
github-cloud.s3.amazonaws.com
github.com
assets-cdn.github.com
github.global.ssl.fastly.net
```

## 修改 Hosts

修改 hosts 文件，给域名绑定访问 IP。
例如： 
```hosts
151.101.185.194 github.global-ssl.fastly.net
192.30.253.112 github.com
```
> 此hosts更新时间为 2019-07-08 18:32

每个系统下 hosts 文件的路径有点差异。

> * Windows   
>     C:\Windows\System32\drivers\etc\hosts
> * mac  
>     /etc/hosts
> * Linux  
>     /etc/hosts

## 刷新dns
为了使修改的hosts文件生效，需要刷新DNS缓存。

每个系统下刷新DNS缓存的方式有点差异。

> * Windows:  
> 　　ipconfig /flushdns

> * Mac OS X:  
> 　　sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder

> * Debian/Ubuntu:  
> 　　sudo /etc/rc.d/init.d/nscd restart

> * Linux with systemd:  
> 　　sudo systemctl restart network.service

> * Fedora Linux:  
> 　　sudo systemctl restart NetworkManager.service

> * Arch Linux/Manjaro with Network Manager:  
> 　　sudo systemctl restart NetworkManager.service

> * Arch Linux/Manjaro with Wicd:  
> 　　sudo systemctl restart wicd.service

我使用的是Manjaro，所以我的方法是：
```
sudo systemctl restart NetworkManager.service
```


---
> to be continued...