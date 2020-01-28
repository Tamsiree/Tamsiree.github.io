---
title: Hexo重新部署
date: 2019-10-18 10:00:12
description: 因为折腾Manjaro的NVIDIA卡的驱动程序，导致系统只能显示ttf界面，只好重装系统，因此Hexo也需要重新部署。
tags:
  - TechnicalResearch
  - Hexo
categories:
  - TechnicalResearch
  - Hexo
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t018b1761a290906f94.jpg
---
# 前言
因为折腾Manjaro的NVIDIA卡的驱动程序，导致系统只能显示ttf界面，只好重装系统，因此Hexo也需要重新部署。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/183634-1568716594f366.jpg)

# 正文
# 首先安装依赖环境

1. 安装nodejs
```bash
sudo pacman -S nodejs
```

2. 安装npm
```bash
sudo pacman -S npm
```

3. 生成ssh秘钥
配置git个人信息和生成ssh密钥
```git
git config --global user.name "xxxxx"
git config --global user.email "xxxxxx@xx.com"
ssh-keygen -t rsa -C "xxxxxx@xx.com"
```

4. 设置Github的ssh密钥
因为篇幅较多，所以独立整理了一篇文章，请移步我的这篇文章 [设置Github的ssh密钥](https://tamsiree.com/TechnicalResearch/Git/Git/#创建SSH秘钥)

5. Git Clone Hexo from github
如果clone失败或者clone的速度太慢，可以参考我的这两篇文章 [[Github提速方案]](https://tamsiree.com/TechnicalResearch/GitHub/GitHub提速方案/) 与 [[Git的妙用]](https://tamsiree.com/TechnicalResearch/Git/Git/#Git的妙用)  

6. 安装Hexo
打开你原有的 blog文件夹,在 git bash 上 输入 
```bash
npm install hexo-cli -g
```

7. 安装依赖文件
```bash
npm install
```
```bash
npm audit fix
```

8. 启动Hexo
```bash
hexo server -d
```

不要用hexo init初始化，部分文件已经拷贝生成，如果不慎使用，则站点配置文件_config.yml会被初始化为默认值

> 到此为止，重新配置已经完成


---
> to be continued...