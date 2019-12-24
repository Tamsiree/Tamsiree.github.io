---
title: Hexo博客绑定域名
date: 2018-11-03 00:06:19
description: 当我们在用hexo搭建了个人博客之后，用username.github.io访问难免有些奇怪，下面就花3分钟时间对如何绑定个人域名进行描述。
tags:
  - Hexo
categories:
  - TechnicalResearch
  - Hexo
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/3970baedd9aeb7e51ba12711ebd08e3d.jpg
---

# 前言
当我们在用hexo搭建了个人博客之后，用username.github.io访问难免有些奇怪，下面就花3分钟时间对如何绑定个人域名进行描述。

# 购买域名

![购买域名](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain0.png)

我是在阿里云买的一个域名 [tamsiree.com](https://tamsiree.com)  
当然也可以选一些top等比较便宜的域名，根据个人情况而定，购买完成之后需要进行`邮箱验证` 和 `实名认证`。

# 开始绑定域名

等待实名认证通过后跳转到域名管理中，点击解析按钮

![绑定域名](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain1.png)


## Github库 IP地址
我们可以通过ping仓管名的形式获取Github库的ip地址

![Github库 IP地址](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain4.png)

## 域名的解析
然后我们点击右上角的新手引导，这里需要输入自己仓库所在的ip地址

![新手引导](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain2.png)

![域名的解析](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain3.png)

## 解析完成
解析完成之后会返回解析结果

![解析完成](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain5.png)

## Github库的配置

接下来到我们进入该仓库中 点击 setting 往下滑 会看到**custom domain** 将自己购买的域名填写进去

![Github库的配置](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain6.png)  

![custom domain](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain7.png)

## Hexo的配置
最后一步就是在我们的本地博客路径下的 `source` 文件夹里新建一个 `CNAME` 的文件， 里面输入我们的域名

![Hexo的配置](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain8.png)

然后执行命令 hexo d 重新部署 然后打开我们的域名 就可以访问啦

![Tamsiree.com](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/hexo_domain9.png)


---
to be continued...