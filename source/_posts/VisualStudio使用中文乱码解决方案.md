---
title: VisualStudio使用中文乱码解决方案
author: Tamsiree
description: Visual Studio（中文版）默认保存的文本文件是 `GB2312` 编码的，默认的行尾（End of line）是 `CRLF` 的。如果仅仅是在 Windows 下开发问题也不大，但是涉及到跨平台开发的时候，就不是很满意了。
tags:
  - Tool
  - DevelopmentTool
  - VisualStudio
categories:
  - Tool
  - DevelopmentTool
  - VisualStudio
date: 2019-07-18 13:19:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/v2-0c1570453df88cc154251edad85e4440_hd.jpg
---
# 前言
> Visual Studio（中文版）默认保存的文本文件是 `GB2312` 编码的，默认的行尾（End of line）是 `CRLF` 的。如果仅仅是在 Windows 下开发问题也不大，但是涉及到跨平台开发的时候，就不是很满意了。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/n67rkq.png)

<!-- more -->

# 正文

VisualStudio 本身的`文件 -> 高级保存选项`中是可以选择保存的编码和行尾的，但是不支持为默认的。还有一个问题是`CL`编译的时候，对`UTF-8`格式支持不好（需要添加`/source-charset:utf-8`选项，默认是当作本地字符集的），对于带`BOM`标记的文件则没有问题。

若使用的VisualStudio的文件选项中没有 `高级保存选项`    
(在Visual Studio 2019中，该命令没有默认显示在“文件”菜单中。用户需要手工设置，才能显示该命令。)     
可查看 [VisualStudio高级保存选项不存在解决方案](https://tamsiree.github.io/Tool/Development-Tool/VisualStudio/VisualStudio高级保存选项不存在解决方案)

所以我们在项目中统一规定使用`UTF-8 with BOM`编码，行尾为`LF`(\\n)。

这里介绍两个插件：“ForceUTF8 (with BOM)”和“Line Endings Unifier”。

---

## ForceUTF8 (with BOM)

这个插件还有两个版本，一个是带`BOM`的，一个是不带的。插件是开源的，代码很简单。就是在文档保存的时候，判断是否是文本文件。如果是的话，那就先转编码为`UTF-8 with BOM`，再写入文件。使用这个插件后，你的 Visual Studio 创建的所有文件编码都将是`UTF-8 with BOM`。

下载地址：[https://marketplace.visualstudio.com/items?itemName=jz5.ForceUTF8withBOM](https://marketplace.visualstudio.com/items?itemName=jz5.ForceUTF8withBOM)

其实可以直接在这个项目上改，在保存文件前把`\r\n`、`\r`、`\n`都替换为`\n`即可（要注意替换次序）。

---

## Line Endings Unifier

这个插件用来统一行尾。可以设置针对的文件和目标行尾。它也是开源的。这个插件与上面插件不同的是，可以有选择性的改变，某个解决方案、项目、文件夹、文件的编码，只需鼠标右键找到“Unify Line Endings”选项设置即可。

下载地址：[https://marketplace.visualstudio.com/items?itemName=JakubBielawa.LineEndingsUnifier](https://marketplace.visualstudio.com/items?itemName=JakubBielawa.LineEndingsUnifier)

![Line Endings Unifier](https://www.123si.org/photo-gallery/articles/2019/03/07/original/123si-org-img-1551943740925.jpg "Line Endings Unifier")

---

## Visual Studio IDE 安装扩展

打开`工具 -> 扩展和更新`，在“扩展和更新”界面中，左边选择“联机”，右边“搜索”输入扩展名称关键字，选中要安装的扩展，点击下载即可安装。例如下图。

![Visual Studio IDE 安装扩展](https://www.123si.org/photo-gallery/articles/2019/03/07/original/123si-org-img-1551946922424.jpg "Visual Studio IDE 安装扩展")


---
> to be continued...