---
title: Windows10自带邮件添加Gmail
author: Tamsiree
date: 2020-06-19 15:06:15
description: 在不翻墙的情况下，使用Windows10自带的邮件添加Gmail收取邮件。
tags:
  - Windows
  - Software
categories:
  - Software
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg-21960ed.jpg
---
# 前言
这里是前言介绍。

# 正文
## **0\. 添加前的准备工作**

**这一部分非常重要！**

**这一部分非常重要！！**

**这一部分非常重要！！！**

很多人不能成功添加gmail账户很可能就是因为gmail中的必要设置没做。

首先，你当然是需要有一个gmail账号的，然后登录gmail邮箱，点击右上角的图标进入设置界面

![](https://pic3.zhimg.com/v2-9f85befb066b0ffe4ac99884ff86a502_b.png)

![](https://pic3.zhimg.com/80/v2-9f85befb066b0ffe4ac99884ff86a502_720w.png)

  

点击“转发和POP/IMAP并启用IMAP服务”。

![](https://pic2.zhimg.com/v2-fdfedfba0cef1cd916e67ad1c35f16e1_b.png)

![](https://pic2.zhimg.com/80/v2-fdfedfba0cef1cd916e67ad1c35f16e1_720w.png)

  

相信上面这些gmail设置中的步骤大部分人都知道，下面还需要对gmail账户进行设置！

点击网页右上角我的账户进入google账户

![](https://pic2.zhimg.com/v2-c40f53284ace8c5cc574cdf25fc85c99_b.png)

![](https://pic2.zhimg.com/80/v2-c40f53284ace8c5cc574cdf25fc85c99_720w.png)

  

此时分**两种**情况：启用了两步验证的账户和未启用两步验证的账户（建议开启两步验证，附录中会简要介绍开启方法）

**0.1 未启用两步验证的账户**

选择“登录与安全”中的“关联的应用和网站”， 将“允许安全性更低的应用”设置为“开” ，然后关闭窗口

![](https://pic4.zhimg.com/v2-6a3f38069e83ac05dca9fd92673ac14b_b.png)

![](https://pic4.zhimg.com/80/v2-6a3f38069e83ac05dca9fd92673ac14b_720w.png)

  

  

![](https://pic1.zhimg.com/v2-3db3ce08c0fb8b7629118fec81305a9c_b.png)

![](https://pic1.zhimg.com/80/v2-3db3ce08c0fb8b7629118fec81305a9c_720w.png)

  

**0.2 启用了两步验证的账户**

选择“登录google”，进入“应用专用密码”子栏

![](https://pic3.zhimg.com/v2-80055bdcf03400aabf2de677957c5fc6_b.png)

![](https://pic3.zhimg.com/80/v2-80055bdcf03400aabf2de677957c5fc6_720w.png)

  

  

  

![](https://pic2.zhimg.com/v2-94d78a065025ab07a0dfc4ec738888d5_b.png)

![](https://pic2.zhimg.com/80/v2-94d78a065025ab07a0dfc4ec738888d5_720w.png)

  

按实际情况选择设备和应用，生成应用专用密码并复制， 在要连接到 Gmail 帐户（或添加 Gmail 帐户）的应用中，可将此密码与 Gmail 地址一起使用。这一组合将对使用 Gmail 帐户的应用授予该帐户的完全访问权限。

![](https://pic3.zhimg.com/v2-ae68565c1485a906478aac117132b8ba_b.png)

![](https://pic3.zhimg.com/80/v2-ae68565c1485a906478aac117132b8ba_720w.png)

  

  

  

![](https://pic3.zhimg.com/v2-22526db052bded6c230f8f07585ec3ee_b.png)

![](https://pic3.zhimg.com/80/v2-22526db052bded6c230f8f07585ec3ee_720w.png)

  

至此，google账户的设置工作全部完成，下面进入win10邮件app添加gmail邮箱。

## **1\. 向win10邮件app添加gmail账户**

打开win10邮件中的添加账户，**选择添加的类型为高级设置而不是google，并进入“Internet电子邮件”**

![](https://pic4.zhimg.com/v2-86ed4df7840c425bbb5be51afc86518f_b.png)

![](https://pic4.zhimg.com/80/v2-86ed4df7840c425bbb5be51afc86518f_720w.png)

  

账户设置填写内容按下图所示进行填写即可，需要特别提示的是**密码栏：若未开启两步认证请输入gmail密码；若已开启两步认证请输入准备工作中复制的应用专用密码！登录后即可使用gmail并进行同步了。**

![](https://pic4.zhimg.com/v2-36f1ffb0260446203660715fa9979e27_b.png)

![](https://pic4.zhimg.com/80/v2-36f1ffb0260446203660715fa9979e27_720w.png)

  

  

其他诸如outlook等邮件管理应用也可以参考上面的方法，准备工作都相同，只是账户添加页面略有不同罢了。

写到这里可能有人会疑惑为什么win10邮件app、outlook等添加gmail这么麻烦，而网易邮箱大师无需上述繁琐操作？其实网易邮箱大师并没有通过IMAP等进行gmail邮箱的同步操作（其他邮箱网易邮箱大师是通过IMAP的），而是获得了gmail的应用授权，因此google账户中关联的应用里会看到网易邮箱大师，这也是网易邮箱大师经常提示重新授权gmail的原因。google的安全设置比较复杂，国内邮箱应用就选了个相对简单的处理方法，也许这更适合国情吧。

**附：开启两步认证的方法**

由于前面已经插入很多图片，相信大家对google账户页已经比较熟悉，下面将以文字简单介绍开启两步认证的方法。

1.  在“**我的帐户**”页面上，选择“**登录和安全**”。
2.  在“**密码和登录方法**”之下，选择“**2 步验证**”旁边的箭头，并按要求提供密码。  
    **注意:** 如果你有 Google Apps 帐户但无法看到此设置，则须由管理员首先开启它。
3.  在“**通过 2 步验证登录**”页面上，选择“**开始设置**”。
4.  按要求重新输入密码，并在“**设置手机号码**”步骤中输入或验证你的手机号码。在下一步中，输入你收到的手机验证码，然后选择“**验证**”。
5.  在“**信任此计算机**”步骤中，选择“**下一步**”；在“**启用 2 步验证**”步骤中，选择“**确认**”。

---
> to be continued...
