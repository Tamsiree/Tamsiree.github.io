---
title: Manjaro系统优化
author: Tamsiree
date: 2019-09-24 18:25:10
description: Manjaro系统使用过程中，总会感觉有诸多不便，还是需要我们手动优化一下才更好的运行。
tags:
  - OperationSystem
  - Linux
  - Manjaro
categories:
  - OperationSystem
  - Linux
  - Manjaro
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/1c34660a6917f03b1249f8a1923d36ef.jpg
---
# 前言
Manjaro系统使用过程中，总会感觉有诸多不便，还是需要我们手动优化一下才更好的运行。

---

# 系统优化
## Manjaro 清理垃圾
### 清除系统中无用的包
```bash
sudo pacman -R $(pacman -Qdtq)
```

### 清除已下载的安装包

```bash
sudo pacman -Scc
```

### 日志垃圾
查看日志文件
```bash
du -t 100M /var
```

或

```bash
journalctl --disk-usage
```

删除指定大小日志文件
```bash
sudo journalctl --vacuum-size=50M
```

崩溃日志
```bash
sudo rm /var/lib/systemd/coredump/*
```

---

## 关闭baloo搜索服务
系统用着用着突然卡顿了起来，打开 系统卫士 查看系统进程，发现一个baloo系列的进程占用了过多的CPU跟内存资源，可能是某次系统更新打通了它的任督二脉，让我们来关他禁闭。

打开目录 `/home/tamsiree/.config/` ，找到 `baloofilerc` 文件

编辑修改选项 ：
```conf
[Basic Settings]
Indexing-Enabled=false
```

## pacman开启多线程

```bash
XferCommand = /usr/bin/axel -n 16 %u -o %o
```

## yay开启多线程

```bash
DLAGENTS=('file::/usr/bin/axel -a -n 16 %u -o %o'
	'ftp::/usr/bin/axel -a -n 16 %u -o %o'
	'http::/usr/bin/axel -a -n 16 %u -o %o'
	'https::/usr/bin/axel -a -n 16 %u -o %o'
          'rsync::/usr/bin/rsync --no-motd -z %u %o'
          'scp::/usr/bin/scp -C %u %o')
```


---
> to be continued...