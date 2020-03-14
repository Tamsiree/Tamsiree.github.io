---
title: AndroidX
author: Tamsiree
date: 2020-03-13 13:34:33
description: Android技术迭代更新很快，各种新出的技术和名词也是层出不穷。不知从什么时候开始，总是会时不时听到AndroidX这个名词，这难道又是什么新出技术吗？相信有很多朋友也会存在这样的疑惑，那么我来探一探AndroidX的前世今生。
tags:
  - TechnicalResearch
  - Android
  - AndroidX
categories:
  - TechnicalResearch
  - Android
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bga6e4154.jpg
---
# AndroidX的前世今生

Android技术迭代更新很快，各种新出的技术和名词也是层出不穷。不知从什么时候开始，总是会时不时听到AndroidX这个名词，这难道又是什么新出技术吗？相信有很多朋友也会存在这样的疑惑，那么我来探一探AndroidX的前世今生。

Android系统在刚刚面世的时候，可能连它的设计者也没有想到它会如此成功，因此也不可能在一开始的时候就将它的API考虑的非常周全。随着Android系统版本不断地迭代更新，每个版本中都会加入很多新的API进去，但是新增的API在老版系统中并不存在，因此这就出现了一个向下兼容的问题。

举个例子，当Android系统发布到3.0版本的时候，突然意识到了平板电脑的重要性，因此为了让Android可以更好地兼容平板，Android团队在3.0系统（API 11）中加入了Fragment功能。但是Fragment的作用并不只局限于平板，以前的老系统中也想使用这个功能该怎么办？于是Android团队推出了一个鼎鼎大名的Android Support Library，用于提供向下兼容的功能。比如我们每个人都熟知的support-v4库，appcompat-v7库都是属于Android Support Library的，这两个库相信任何做过Android开发的人都使用过。

但是可能很多人并没有考虑过support-v4库的名字到底是什么意思，这里跟大家解释一下。4在这里指的是Android API版本号，对应的系统版本是1.6。那么support-v4的意思就是这个库中提供的API会向下兼容到Android 1.6系统。它对应的包名如下：

```gradle
android.support.v4.app
```

类似地，appcompat-v7指的是将库中提供的API向下兼容至API 7，也就是Android 2.1系统。它对应的包名如下:  

```gradle
android.support.v7.appcompat
```

可以发现，Android Support Library中提供的库，它们的包名都是以android.support.*开头的。

但是慢慢随着时间的推移，什么1.6、2.1系统早就已经被淘汰了，现在Android官方支持的最低系统版本已经是4.0.1，对应的API版本号是15。support-v4、appcompat-v7库也不再支持那么久远的系统了，但是它们的名字却一直保留了下来，虽然它们现在的实际作用已经对不上当初命名的原因了。

那么很明显，Android团队也意识到这种命名已经非常不合适了，于是对这些API的架构进行了一次重新的划分，推出了AndroidX。因此，AndroidX本质上其实就是对Android Support Library进行的一次升级，升级内容主要在于以下两个方面。

第一，包名。之前Android Support Library中的API，它们的包名都是在android.support.* 下面的，而AndroidX库中所有API的包名都变成了在androidx.* 下面。这是一个很大的变化，意味着以后凡是android.* 包下面的API都是随着Android操作系统发布的，而androidx.* 包下面的API都是随着扩展库发布的，这些API基本不会依赖于操作系统的具体版本。

第二，命名规则。吸取了之前命名规则的弊端，AndroidX所有库的命名规则里都不会再包含具体操作系统API的版本号了。比如，像appcompat-v7库，在AndroidX中就变成了appcompat库。

一个AndroidX完整的依赖库格式如下所示:  

```gradle
implementation 'androidx.appcompat:appcompat:1.0.2'
```

了解了AndroidX是什么之后，现在你应该放轻松了吧？它其实并不是什么全新的东西，而是对Android Support Library的一次升级。因此，AndroidX上手起来也没有任何困难的地方，比如之前你经常使用的RecyclerView、ViewPager等等库，在AndroidX中都会有一个对应的版本，只要改一下包名就可以完全无缝使用，用法方面基本上都没有任何的变化。

但是有一点需要注意，AndroidX和Android Support Library中的库是非常不建议混合在一起使用的，因为它们可能会产生很多不兼容的问题。最好的做法是，要么全部使用AndroidX中的库，要么全部使用Android Support Library中的库。

而现在Android团队官方的态度也很明确，未来都会为AndroidX为主，Android Support Library已经不再建议使用，并会慢慢停止维护。另外，从Android Studio 3.4.2开始，我发现新建的项目已经强制勾选使用AndroidX架构了。

![s](https://img-blog.csdnimg.cn/20190824070204547.png)

那么对于老项目的迁移应该怎么办呢？由于涉及到了包名的改动，如果从Android Support Library升级到AndroidX需要手动去改每一个文件的包名，那可真得要改死了。为此，Android Studio提供了一个一键迁移的功能，只需要对着你的项目名右击 → Refactor → Migrate to AndroidX，就会弹出如下图所示的窗口。

![d](https://img-blog.csdnimg.cn/20190824070402776.png)

这里点击Migrate，Android Studio就会自动检查你项目中所有使用Android Support Library的地方，并将它们全部改成AndroidX中对应的库。另外Android Studio还会将你原来的项目备份成一个zip文件，这样即使迁移之后的代码出现了问题你还可以随时还原回之前的代码。



# 正文
## AndroidStudio 项目适配 Android X (Android 9.0)

> 老项目、大项目适配Android X 注意了，一定要谨慎、谨慎、再谨慎。项目中用到的第三方库多的话会很麻烦，有些第三方库还没有适配Android X。
> 适配Android X的两种情况：一种是老项目适配Android X ，另外一种是新项目要求适配Android 9.0

### 环境配置

> Android Studio 3.5.2  
> targetSdkVersion 28  
> [gradle-wrapper.properties文件内] distributionUrl 5.4.1  
> [build.gradle文件内] gradle 3.5.2  

在 gradle.properties 中加入如下代码，表示支持 Android X.

```gradle
android.useAndroidX=true
android.enableJetifier=true
```

然后在 AndroidStudio 顶部菜单栏中 $\Rightarrow$ Refactor $\Rightarrow$ Migrate to androidx,，一键转为 androidX.

接着在 build.gradle(Module:app) 的 android 添加 支持 `Java 1.8`
```gradle
compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_8
  targetCompatibility JavaVersion.VERSION_1_8
}
```

修复无效的旧引用导致的错误：  
1. 修改代码内报错的 import 语句  
2. 修改布局中的标签头,例如

|       名称       |                  变化之前                   |                     Android X                     |
|:----------------:|:-------------------------------------------:|:-------------------------------------------------:|
|   RecyclerView   |   android.support.v7.widget.RecyclerView    |     androidx.recyclerview.widget.RecyclerView     |
| ConstraintLayout | android.support.constraint.ConstraintLayout | androidx.constraintlayout.widget.ConstraintLayout |
|     CardView     |     android.support.v7.widget.CardView      |         androidx.cardview.widget.CardView         |

## 升级 AndroidX 之后 常用的依赖
### 1、CardView

```bash
 implementation 'androidx.cardview:cardview:1.0.0'

```

### 2、TabLayout

```bash
 implementation 'com.google.android.material:material:1.0.0'

```

### 3、RecycleView

```bash
implementation 'androidx.recyclerview:recyclerview:1.0.0'

```

### 4、Snackbar

```bash
implementation 'com.google.android.material.snackbar.Snackbar:1.0.0-rc01'

```

### 5、swiperefreshlayout

```bash
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0'

```

### 6、viewpager

```bash
implementation 'androidx.viewpager:viewpager:1.0.0'

```

### 7、design ui 库

```bash
implementation 'com.google.android.material:material:1.0.0-rc01'

```

### 8、coordinatorlayout

```bash
implementation 'androidx.coordinatorlayout:coordinatorlayout:1.0.0'

```

### 9、constraintlayout 约束布局

```bash
implementation 'androidx.constraintlayout:constraintlayout:1.1.2'

```

### 10、NavigationView 侧滑

```bash
implementation 'com.google.android.material.navigation.NavigationView：1.0.0'

```

### 11、drawerlayout 抽屉布局

```bash
implementation'androidx.drawerlayout:drawerlayout:1.0.0'

```

### 12、gridlayout 网格布局

```bash
implementation'androidx.gridlayout:gridlayout:1.0.0'

```

### 13、recyclerview-selection RecycleView 高亮显示方案

```bash
implementation'androidx.recyclerview:recyclerview-selection:1.0.0'

```

### 14、国内可打开的 官方对照连接

[AndroidX 依赖对比 google官方](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.android.google.cn%2Fjetpack%2Fandroidx%2Fmigrate%2Fclass-mappings%3Fhl%3Dzh_cn)

### 15、viewPager 2 这个是2与viewPager不同哦

```bash
implementation 'androidx.viewpager2:viewpager2:1.0.0'

```

---

> 参考来源：  
> [CSDN guolin](https://blog.csdn.net/guolin_blog/article/details/97142065)

---
> to be continued...
