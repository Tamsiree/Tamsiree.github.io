---
title: Thunderbird问题归纳
date: 2019-12-24 22:08:04
description: Mozilla Thunderbird 非常的好用的邮件客户端，虽然很多人都习惯在网页上收发邮件，不过还是有很多资深网民喜欢用本地邮件客户端收发邮件，这款Thunderbird推荐给大家使用。它是经过对 Mozilla 的邮件组件的进行重新设计后的产品，它可整合多个网络邮箱于一体，随时都能拉取邮件到本地处理，或者随时发送邮件。简单易用，功能强大，个性化配置，Thunderbird 邮件客户端带给你全方位的体验。Thunderbird 支持 IMAP 、POP 邮件协议以及 HTML 邮件格式。轻松导入您已有的邮件账号和信息。内置 RSS 技术, 功能强大的快速搜索, 自动拼写检查等。
tags:
  - Tool
  - Linux
  - Manjaro
  - Software
  - Thunderbird
categories:
  - Tool
  - Linux
  - Manjaro
  - Software
  - Thunderbird
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/45w1y5.png
---

# 前言

Mozilla Thunderbird 非常的好用的邮件客户端，虽然很多人都习惯在网页上收发邮件，不过还是有很多资深网民喜欢用本地邮件客户端收发邮件，这款Thunderbird推荐给大家使用。它是经过对 Mozilla 的邮件组件的进行重新设计后的产品，它可整合多个网络邮箱于一体，随时都能拉取邮件到本地处理，或者随时发送邮件。简单易用，功能强大，个性化配置，Thunderbird 邮件客户端带给你全方位的体验。Thunderbird 支持 IMAP 、POP 邮件协议以及 HTML 邮件格式。轻松导入您已有的邮件账号和信息。内置 RSS 技术, 功能强大的快速搜索, 自动拼写检查等。

[Thunderbird官网](https://www.thunderbird.net/zh-CN/)

# 使用配置技巧

1. 用thunderbird接收非压缩包附件时候  
默认会自动打开附件作为邮件正文来阅读。但是对于经常接收大文本附件的人来说就不好用了，经常会因为附件太大把邮件卡死机。  
在工具-->首选项-->高级-->高级配置-->配置编辑器,找到 mail.inline_attachments，赋值选择 false。


2. 默认thunderbird是将回复加在回复邮件的后面，可以通过修改配置项实现回复在前面，步骤如上，找到配置编辑器，将 mail.identity.default.reply_on_top 这一项由默认的0改为1即可。


3. 如果附件为中文文件名，其他的邮件客户端有时候可能无法正确识别，通过修改配置可以解决这个问题，步骤依然如上，在配置编辑器中将选择 mail.strictly_mime.param_folding",将其值设置为0或1。


4. 让thunderbird回复或转发带着latest邮件的header信息，包括发件人收件人时间等，你可以直接安装"change quote and reply format"插件。虽然可以修 改本地配置项来实现，但是比较麻烦，喜欢的同学可以自己去弄弄。


5. thunderbird日历跟Google calendar同步  
需要安装lighting 插件，Google 日历插件，之前在记录与手机配置同步的时候介绍过。


6. thunderbird设置签名档在回复内容之上  
默认回复邮件时签名档是放在回复内容的后面（即整个邮件的结尾），这时可以设置一下“mail.identity.default.sig_bottom”这一开关项，默认是true，将其修改为false即可。

7. thunderbird在转发邮件是默认不带签名，可以设置一下  "mail.identity.default.sig_on_reply"选项，默认是true，将其修改为false转发邮件时就可以自动带上签名了。


# 接收服务器已存在
昨天系统重做之后安装Thunderbird准备进行配置，却遇到了一个诡异的问题。

向里面添加主gmail账户时不停的报错说“接收服务器已存在”，而添加其他gmail账户却没有这个问题。实在是让人不知道是怎么回事，于是拉出度娘来，依然没有找到答案。话说用雷鸟有那么非主流吗？还是说我遇到的问题比较罕见？

“接收服务器已存在”的错误原文是incoming server already exists

最后终于通过google找到了“接收服务器已存在”这个错误在英文版里的原文，实在是感谢mozila连本地化文件都共享出来的精神啊。

不过解决方法简单的让人有点郁闷呢，这个问题只要重新启动雷鸟就可以解决了，连重启系统都不用……

---
to be continued...