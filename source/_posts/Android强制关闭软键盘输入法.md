---
title: Android强制关闭软键盘输入法
author: Tamsiree
date: 2020-02-16 15:03:37
description: 在类似评论说说的这种界面中，输入评论内容后，点击发送按钮，小米手机的键盘有时候不消失,只是消失了自定义的输入框式样弹框，大概率出现的一种情况（即使你自己调用的关闭键盘也会出现无效的情况）。
tags:
  - TechnicalResearch
  - Android
categories:
  - TechnicalResearch
  - Android
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/20170812142435mxeUN.jpeg
---
# 前言
在类似评论说说的这种界面中，输入评论内容后，点击发送按钮，小米手机的键盘有时候不消失,只是消失了自定义的输入框式样弹框，大概率出现的一种情况（即使你自己调用的关闭键盘也会出现无效的情况）。

# 正文
解决方法：

> 在 `AndroidManifest` 配置 需要强制关闭软键盘输入法 的 `Activity`  

```xml
<activity
    android:name=".activity.ActivityLogin"
    <!-- 新增这一行代码 -->
    android:windowSoftInputMode="stateAlwaysHidden">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```


---
> to be continued...