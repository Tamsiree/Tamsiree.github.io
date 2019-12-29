---
title: VisualStudioCode中Settings Sync插件的基本用法
date: 2019-12-26 23:12:08
description: 自己平常工作生活中偶尔折腾系统，或许是因为驱动或者其他原因导致系统重装了，vscode的插件与配置等每次都需要单独记录一下然后再重新配置一遍，发现可以使用Settings Sync插件可以直接同步配置和插件。
tags:
  - Tool
  - DevelopmentTool
  - VisualStudioCode
categories:
  - Tool
  - DevelopmentTool
  - VisualStudioCode
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/cyqwanp87xgm.jpg
---
# 前言
自己平常工作生活中偶尔折腾系统，或许是因为驱动或者其他原因导致系统重装了，vscode的插件与配置等每次都需要单独记录一下然后再重新配置一遍，发现可以使用Settings Sync插件可以直接同步配置和插件。

![clipboard.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/1975534395-5b73c12c825ba_articlex.png)

## 上传配置以及相关

-   首先在VSC中安装SettingsSync，安装完Settings Sync插件重启窗口之后按快捷键`Shift + Alt + U`准备上传你的配置，但是首次上传需要一个access token。
-   到GitHub个人设置创建一个新的access token。登录github，在[Personal access tokens]页面点击Generate New Token按钮

![clipboard.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2317606048-5b73c5af281e1_articlex.png)

-   输入`Token description`token的描述，勾选`gist`权限，

![clipboard.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/1110566462-5b73c5dc835d4_articlex.png)

-   用新建的Access Token上传你的配置和扩展记录

![clipboard.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/671610823-5b73c65e95ceb_articlex.png)

回到vscode，在任意界面按 Alt + Shift + U，在对话框中输出刚才复制的 token。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/8056318-9e56c8327172b494.webp)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/8056318-c18d2e32912c1958.webp)

再次按 Alt + Shift + U 完成配置上传，使用组合键 Alt + Shift + D 即可下载配置。

一切完成后会自动弹出`Gist ID`，控制台也会显示Gist ID，这意味着你的配置上传到了GitHub Gist，你可以在 `https://gist.github.com/{your_userName}/{gist_id}` 上查看具体的上传内容

在VS Code中修改
复制重新生成好的token

点击命令面板 或 Ctrl+Shift+P 输入 sync: 找到 Advanced Options 回车
![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/4181780275-5c246e001cd68_articlex.png)

选中 Edit Extension Local Settings

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/531495797-5c246e3c67f93_articlex.png)

修改本地配置文件中的 token 属性就可以了

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/527372815-5c246ef664938_articlex.png)

找到配置文件修改
复制重新生成好的token

Win下：`C:\Users\Administrator\AppData\Roaming\Code\User`  
Mac下：`~/Library/Application Support/Code/User/syncLocalSettings.json`  
Linux下：`~/.config/Code/User/syncLocalSettings.json`  

进入目录后，找到 syncLocalSettings.json 这个文件，查找token，并替换后面复制的值，就可以顺利进行同步配置信息了。

> GitHub Gist: 28a47860089b3948b39775df2ffaaf4e

## 下载配置

-   快捷键`Shift + Alt + D`下载配置
-   首次下载需要输入你的Github Access Token.
-   然后输入 `Gist ID` 即可下载指定的配置，以及安装拓展，假如你有自定义扩展不在这个列表内，它们将被移除，你可以设置是否每次下载都直接移除旧的部分。

大功告成！ 现在你就可以在任何机器上轻松复制你的IDE配置了，嗯，每次重装系统之后也能很快进入工作状态啦 (๑•̀ㅂ•́)و✧

## 参考链接

> [Gist](https://gist.github.com/)  
> [Personal access tokens](https://github.com/settings/tokens)  
> [Settings Sync -- VSCode](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) 

---
> to be continued...