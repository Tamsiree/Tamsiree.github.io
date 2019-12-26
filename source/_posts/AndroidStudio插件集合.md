---
title: AndroidStudio插件集合
date: 2016-11-19 23:00:48
description: 想要更高效的使用AndroidStudio，当然插件是必不可少的，这里收集了平时觉得不错的插件。
tags:
  - Tool
  - AndroidStudio
  - Android
categories:
  - Tool
  - DevelopmentTool
  - AndroidStudio
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01cf099416056cb243.jpg
---
# 前言

想要更高效的使用AndroidStudio，当然插件是必不可少的，这里收集了平时觉得不错的插件。

# 安装说明 
给出的插件，可直接根据名字，在
> `AndroidStudio` - `File` - `Setting` - `Plugins` - `Browse Respositories`   

中搜索插件，下载成功后，重启 AndroidStudio 即可，如查询不到，则根据给出的下载地址，下载 Jar文件，再运用本地安装的方法安装插件。

![安装说明](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-c32ab735a5547a66.png)

---

# 插件

## codeglance
一款提高编程效率的插件,实现在编辑窗口右侧显示 minimap。

![codeglance](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20180102233548076.png)

如上图所示，很好用的插件。

可以使用该插件的IDE有： IntelliJ IDEA PhpStorm WebStorm PyCharm RubyMine AppCode CLion GoLand DataGrip Rider MPS Android Studio

下载链接：https://plugins.jetbrains.com/plugin/7275-codeglance

---

## Material Theme UI 
Material Theme主题的AndroidStudio，非常好看的一个皮肤，有三种主题可以进行切换，有兴趣的试一试.   
下载地址：https://plugins.jetbrains.com/plugin/8006?pr=phpStorm

![AndroidStudio皮肤](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-ef1dcd68cb8b214b.png)

![可以选择三种主题](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-2589a959588fb5be.png)

![这里是设置左边列表的皮肤，统一皮肤比较好看](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-2714772fdb15b688.png)

---

## ECTranslation 
这是一个可以对AndroidStudio中的英文进行翻译的一个插件，以后看源码的时候，就不用再去查字典了，方便多了，也可自定义快捷键，具体的可查看其使用说明。  
下载地址：https://github.com/Skykai521/ECTranslation

![翻译英文](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-625763d433f4ab1c.png)

---

##  .ignore 
平时在AndroidStuido上使用Git或者svn的时候，上传时需要忽略掉一些不需要的文件时，就可以使用这个插件了，右击轻松忽略。

![忽略文件](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-7a975ee5c3bae4b1.png)

---

##  Android Drawable Importer 
这个插件能够根据导入的图片，自动生成对应分辨率的图片，比如放入一张图片，他能够生成对应的mdpi,hdpi,xhdpi,xxhdpi,xxxhdpi分辨率的图片，并且当你需要删除一个图片的时候，可以连带的删除其他分辨率对应的图片，不用重复删除，具体的功能可以百度。  
下载地址：https://github.com/winterDroid/android-drawable-importer-intellij-plugin

![右击选择](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-5a05dce40ad555cb.png)

![生成图片](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-2e53e87cb8a02b69.png)

---

##  Codota 
搜索代码的插件，他的搜索源，不仅只有Github，而且还有知名博客和开发者网站，让你搜索一个东西，不用在找上半天；

![搜索代码](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-abd41aef0105aea4.png)



---

##  Findbugs 
看名字就知道是这个插件的作用了，它是一个静态分析工具，它检查类或者jar文件，将字节码和一组缺陷模式进行对比以发现可能的问题。  
有了静态分析工具，就可以在不实际运行程序的情况下对软件进行分析。不是通过分析类文件的形式或结构来确定程序的意图，而是通常使用Visitor模式来鉴别代码是否符合一些固定的规范。

![查找](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-258c77fa6241e240.jpeg)



![查找结果](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-d5331cfa56a5eff4.jpeg)



---

##  Dimen

根据输入的像素来自动生成 Android 项目的 dimen.xml 文件,主要是为了适配国产Android TV盒子的各种分辨率。  
下载地址：https://github.com/succlz123/AndroidPixelDimenGenerator

![生成对应分辨率像素](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-94ce2b2b3b2ef5c1.png)



---

##  ButterKnifeZelezny 
运用注解方式，大大的简化了控件的绑定操作，摆脱了一直findviewbyid的噩梦啊，这个插件挺不错的，很方便。  
下载地址：https://github.com/avast/android-butterknife-zelezny

![生成 findviewbyid](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-222e44d16bc8f3bc.gif)



---

##  GsonFormat 
这是根据JSONObject格式的字符串,自动生成实体类.  
下载地址：https://github.com/zzz40500/GsonFormat

![根据JsonObject生成实体](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-ecb12d11310dd769.gif)

---

## Android Postfix Completion

可根据后缀快速完成代码，这个属于拓展吧，系统已经有这些功能，如sout、notnull等，这个插件在原有的基础上增添了一些新的功能。

![快速完成后缀](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-1f36618f5337f562.gif)

---

## Android Parcelable Code Generator 
Android中的序列化有两种方式，分别是实现Serializable接口和Parcelable接口，但在Android中是推荐使用Parcelable，只不过我们这种方式要比Serializable方式要繁琐，那么有了这个插件一切就ok了。

![Paste序列化](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-96a77c48b509a272.png)

---

## ADB Idea 
可以方便的对APK进行安装，卸载，删除，清除等操作

![Apk安装，卸载，删除](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-60cfc93156ad3acc.png)

---

## SelectorChapek for Android

根据一定的规则命名图片，可以根据图片生成出对应的选择器xml，比如点击选择器以及按下等效果的选择。

![Paste_Image.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-3e72adfad4fe0e53.png)

![Paste_Image.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-4fb311ab86eef82a.png)

![生成选择器](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-196eeef6a0650557.png)

---

## Lifecycle Sorter
可以根据Activity或者fragment的生命周期对其生命周期方法位置进行先后排序

![生命周期排序](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-bf3320c2700654f5.gif)

---

## Key Promoter

当你用到某个功能的时候，此插件会提示出此功能的快捷键，方便刚接触AndroidStudio但不熟悉快捷键的小伙伴，如下，选择一个Java文件，右击重命名，然后右上角就会提示他的快捷键。

![快捷键提示](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-85867fa18d2965ac.png)

---

## LayoutFormatter

此插件是XML格式化插件，自动排序，能够根据正确的排序顺序进行排序。

![自动排序](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-b3d1e3ea41769798.png)

---

## AndroidProguardPlugin 
一键生成项目混淆代码插件，值得你安装~  
下载地址：https://github.com/zhonghanwen/AndroidProguardPlugin

![生成混淆代码](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-684df5c21790b8a5.gif)

---

## android-selector-intellij-plugin 
插件生成normal，press和按下水波纹颜色  
下载地址：https://github.com/importre/android-selector-intellij-plugin

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-a119181fe04591f6.png)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-1d9630cf02fe1d63.png)

---

##  **[AndroidProguardPlugin](https://github.com/zhonghanwen/AndroidProguardPlugin)** 
混淆插件，可以自动生成对应的混淆文件

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-8073fd5dadd587b0.gif)

---

## SQLScout
数据库查看插件 这个AndroidStudio插件可以查看App中的数据库，但是需要购买，只有一天免费使用，下面有破解的方法   
官网：http://www.idescout.com/   
软件破解:http://www.cnblogs.com/tiantianbyconan/p/5972138.html   
配置：  
> 1、 _搜索 _ **“SQLScout”** _ 安装即可。_   
> 2、使用之前需要在在 project 的 `build.gradle` 里面添加：
```gradle
    allprojects {
        repositories {
            jcenter()
            maven {
                url 'http://www.idescout.com/maven/repo/'
            }
        }
    }
```

在 module 的 `build.gradle` 里面添加：
```gradle
    compile 'com.idescout.sql:sqlscout-server:2.0'
```

在启动的 Activity 的 onCreate() 方法添加一句代码：
```gradle
    SqlScoutServer.create(this, getPackageName());
```

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-9b9683c03ebcebf9.png)

---

## **[folding-plugin](https://github.com/dmytrodanylyk/folding-plugin)** 
layout文件夹分组

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-85dfd901c3e01dbb.png)

---

## [Fireline Plugin](http://magic.360.cn/zh/index.html) 
360的一个产品，可以检测代码中

1.  APP安全检查
2.  代码规范检查
3.  内存泄露检查
4.  日志输出检查
5.  空指针检查
6.  多线程检查

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-35ff18a37220f37c.png)

---

##  Alibaba Java Coding Guidelines 
阿里出的一个代码编写规范检测的插件。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-588ac952ba712a72.png)

---

## [Exynap](http://exynap.com/#examples)
Exynap是一个Android Studio插件，可以帮助您立即 查找和实现所需的代码

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-e3040e2362797ddf.gif)

---

##  **[AndroidSourceViewer](https://github.com/pengwei1024/AndroidSourceViewer)** 
可以在线查看 Android 和 Java 指定版本源码的 Android Studio 插件

![image.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-46a16695131d677f.png)

---

## **[SmallHelper-IDEA-Plugin](https://github.com/fashare2015/SmallHelper-IDEA-Plugin)** 
Small插件化框架的方便的跳转插件

![image.png](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2650372-71d9311ca753177e.png)

---

# 小结 
大家如果还有什么插件可以推荐的，可以留言给我，一起收集，一起分享吧。


---
> to be continued...