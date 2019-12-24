---
title: Python问题归纳
author: Tamsiree
description: 整理平时使用Python时遇到的问题。
tags:
  - Python
categories:
  - TechnicalResearch
  - Python
date: 2019-08-27 01:44:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/214606-15553359663cd8.jpg
---

# 前言
> 整理平时使用Python时遇到的问题。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/python.png)

# 解决问题
## Python拼接字符串
Python中,拼接字符串较为特殊

正确写法为:
```
	msg = '我有%d'%(self.num) + '个苹果'
```

错误写法为:
```
	msg = '我有' + (self.num) + '个苹果'
```

---

## Python 解决PIP下载安装速度慢
让PIP源使用国内镜像，提升下载速度和安装成功率。
对于Python开发用户来讲，PIP安装软件包是家常便饭。但国外的源下载速度实在太慢，浪费时间。而且经常出现下载后安装出错问题。所以把PIP安装源替换成国内镜像，可以大幅提升下载速度，还可以提高安装成功率。

国内源：
新版ubuntu要求使用https源，要注意。

清华：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/

中国科技大学： https://pypi.mirrors.ustc.edu.cn/simple/

华中理工大学：http://pypi.hustunique.com/

山东理工大学：http://pypi.sdutlinux.org/ 

豆瓣：http://pypi.douban.com/simple/

临时使用：  
可以在使用pip的时候加参数-i https://pypi.tuna.tsinghua.edu.cn/simple

例如：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pyspider，这样就会从清华这边的镜像去安装pyspider库。


永久修改，一劳永逸：  

* Linux下，修改 `~/.pip/pip.conf` (没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹)

内容如下：
```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=mirrors.aliyun.com
```

* Windows下，直接在user目录中创建一个pip目录，如：`C:\Users\xx\pip`，新建文件`pip.ini`。内容同上。

---

## 使用内置的tkinter开发时，提示libtk8.6.so找不到
提示错误如下：
```
ImportError: libtk8.6.so: cannot open shared object file: No such file or directory
```
解决方案：  
在Manjaro下 ，通过安装tk，完美解决

```
sudo pacman -S tk
```

---

## Sql语句报错"Unknown column 'G11' in 'where clause'"
一般是格式化字符串的时候没加引号。
pymysql.err.InternalError: (1054, "Unknown column 'G11' in 'where clause'") 

错误示例：
```
orderNo="G11"
sql='select * from t_cps_order where orderNo=%s' % orderNo
```

正确示例：在 %s处加双引号即可
```
orderNo="G11"
sql='select * from t_cps_order where orderNo="%s"' % orderNo
```

---

## 解决python中TypeError: not enough arguments for format string
```
def a(x,y):
	print("%s : %s "%x,y)
```

如上代码，我定义了个含两个参数的函数，传参时报错如下。

TypeError: not enough arguments for format string

将参数用括号括起后（如下所示），问题就解决了。

```
def a(x,y):
	print("%s : %s "%(x,y))
```

---

## ImportError: No module named 'urlparse'
问题：ImportError: No module named ‘urlparse’

> 将 `import urlparse` 替换成 `urllib.parse` 即可.

---
to be continued...