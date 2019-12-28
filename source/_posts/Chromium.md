---
title: Chromium
date: 2019-02-14 16:03:33
description: 安装模式 Chromium可以免安装，下载zip压缩包后解压缩即可使用，而Chrome虽然理论上也可以免安装，但Google仅提供安装版（而且每次打开chrome都会提示开发者模式危险）。
tags:
  - Google
  - Chrome
  - Chromium
categories:
  - Google
  - Chrome
  - Chromium
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-nkp2mm.jpg
---

# 前言
安装模式 Chromium可以免安装，下载zip压缩包后解压缩即可使用，而Chrome虽然理论上也可以免安装，但Google仅提供安装版（而且每次打开chrome都会提示开发者模式危险）。



# Chromium
## 下载地址
[官方存储库地址](http://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html)

以Windows版为例：  
> 选取你要的版本后，里面包含3个ZIP压档案、1个安装程式、1个XML更新事项说明文件、1个版本说明和一个资料夹。  
> 免安装版只需下载 `chrome-win32.zip` 解压即可，安装版则下载 `mini_installer.exe` 安装。  

安装版在 `Windows Vista` 及更高版本 `Windows` 的安装位置为：  
```
%UserProfile%\AppData\Local\Chromium\Application  
```

安装版在Windows XP、Windows Server 2003的安装位置为：  
```
%UserProfile%\Local Settings\Application Data\Chromium  
```

## 问题解决

> 每次打开 Chromium，地址栏下方就会提示 “缺少 Google API 密钥，因此 Chromium  
> 的部分功能将无法使用”。提示不仅很烦人，并且还无法在 Chromium 登录 Google 账户。  

如果你不需要登陆 Google 账号，仅仅是因为提示烦人，那么执行上面三个命令，就能满足你的需求，想要登陆 Google 账号的话，就需要配置 Google API Key

### 设置环境变量
设置环境变量，屏蔽提示（推荐直接配置Google API key）

**打开 windows 的 cmd 命令提示符，依次输入以下命令：**
```bash
    setx GOOGLE_API_KEY "no" 
    setx GOOGLE_DEFAULT_CLIENT_ID "no" 
    setx GOOGLE_DEFAULT_CLIENT_SECRET "no"
```

### 配置 Google API Key

#### **方法一：使用博主提供的 Google API Key**

`cmd` 命令提示符，依次输入以下命令：
```bash
    setx GOOGLE_API_KEY AIzaSyC_EZR_OV98AU_ryXXlwRYPiMhmR3cT06g 
    setx GOOGLE_DEFAULT_CLIENT_ID 819070943831-k8l3gu19fs79lhm27et415uvdn69hokt.apps.googleusercontent.com 
    setx GOOGLE_DEFAULT_CLIENT_SECRET wtKZB5SMWUWQqsE74LBg3Yd9
```

#### 方法二：申请 Google API

1. [https://cloud.google.com/console](https://cloud.google.com/console)  
2. 创建或选择已有项目 $\Rightarrow$ 左侧边栏 `API 和 服务` $\Rightarrow$ 凭证  
3. 创建凭证(类型为 “API 密钥”,名称随意, 不使用密钥限制,记住生成的 key)  
4. 再创建一个凭证(类型为 “OAuth 客户端 ID”, 名称随意, 应用类型选择 “其他”, 记住生成的 “客户端 ID” 和 “客户端密钥”)  
5. 格式填写自己的 API Key

```bash
    setx GOOGLE_API_KEY 生成的API密钥 
    setx GOOGLE_DEFAULT_CLIENT_ID 生成的客户端ID 
    setx GOOGLE_DEFAULT_CLIENT_SECRET 生成的客户端密钥
```

> 重新打开 Chromium 浏览器,提示消失


---
> to be continued...