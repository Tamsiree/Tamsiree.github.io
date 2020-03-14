---
title: Android之JetPack库
author: Tamsiree
date: 2020-02-21 00:07:43
description: 最近好几个小伙伴问我什么是**Android JetPack**，听说这个包好像有点牛,Android JetPack这货不是一个库，是一整套的库。
tags:
  - TechnicalResearch
  - Android
  - JetPack
categories:
  - TechnicalResearch
  - Android
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/v225243a3a2e454c85c456711f9576b08ehd.jpg
---
# 前言
最近好几个小伙伴问我什么是**Android JetPack**，听说这个包好像有点牛，你会不？

我心想什么鬼！Android JetPack这货不是一个库，是一整套的库，是一种信仰一种态度好么。从前，Android开发者基本都是被放养的。生态基本全靠自建，代表有Square全家桶，Glide，Google自己也肯定是出力的，但是并没有明确Android开发的几个大方向，所以安卓的开发生态一直是百花齐放百家争鸣。带来的问题就是经常出现包引用莫名报错。

事情从2017年发生了转机，在Google IO 2017，官方终于正视了这个问题开始尝试管理这个混乱的Android开发环境，并推出了Architecture Component，主要有以下几项：

Room: 官方的ORM库（个人认为比GreenDao好用）ViewModel/LiveData：生命周期管理工具，自此Android才真正的应用上了MVVM（BTW，DataBinding也归到了JetPack里）

在2018年，AndroidX横空出世，并且从1开始，意图取代经常自己打自己脸的Support Lib。

一张图来看看Google对JetPack有多看重

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/636954-4718fd5832dda024.webp)

# 一、**那JetPack到底是啥呢？**

> Jetpack is a suite of libraries, tools, and guidance to help developers write high-quality apps easier. These components help you follow best practices, free you from writing boilerplate code, and simplify complex tasks, so you can focus on the code you care about.

Jetpack 是一套库、工具和指南，可帮助开发者更轻松地编写优质应用。这些组件可帮助您遵循最佳做法、让您摆脱编写样板代码的工作并简化复杂任务，以便您将精力集中放在所需的代码上。

# 二、JetPack里的组件

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/636954-729fe067ddf62ef8.webp)

上图就是JetPack中包含的组件列表，每个组件都是相对独立的，可以被单独使用和构建。其中像被介绍的最多，也是最常被使用的LiveData, ViewModel, Room, Navigation, WorkManager之类的都发布了正式版，而**CameraX**, Compose之类的还处在Alpha版本，未正式发布，官方并不建议在生产环境中使用。

然后说下，JetPack所有的组件都是基于AndroidX构建的，如果想在项目中使用JetPack需要先将项目中对Support Lib的依赖全部换成**AndroidX**。

Android目前已经发展了11年，可以说是比较成熟的技术了，一开始时框架很少，也没有什么规范，所有的代码都是要自己写，比如网络请求，数据库请求，数据解析等等。后来出现了一些框架来帮助开发者快速进行开发，比如XUtils、Volley、OKHttp、EventBus等，随着框架越来越多，一个应用可以有多种技术选型，直接导致应用开发越来越不规范，导致做出来的应用质量参差不齐，这显然不是谷歌想看到的。谷歌随后推出了MVP和MVVM相关的官方例子，效果很一般，而且覆盖面只是在架构上，Goole I/O 2018大会上推出的Android Jetpack有望解决以上的问题。

# **三、Android Jetpack简介**

Jetpack并不是一个框架或者组件，它是一套库、工具和指南的集合，可帮助开发者更轻松地编写优质应用。这些组件可帮助开发者遵循最佳做法、摆脱编写样板代码的工作并简化复杂任务，以便将精力集中放在所需的代码上。  
Android Jetpack中的很多组件并不都是新开发的，而是很早就有了，比如在Goole I/O 2017大会时推出了 Android Architecture Component（AAC），它包括了LifeCycle、LiveData、ViewModel、Room。在Goole I/O 2018大会上，  
用AndroidX替代了Android Support Library，并在Android Architecture Component的基础上发布了Android Jetpack，AndroidX也是属于Android Jetpack。

Jetpack主要特性有以下三点：

**1.加速开发**  
组件可单独使用，也可以协同工作，当使用kotlin语言特性时，可以提高效率。

**2.消除样板代码**  
Android Jetpack可管理繁琐的Activity（如后台任务、导航和生命周期管理）。

**3.构建高质量的强大应用**  
Android Jetpack组件围绕现代化设计实践构建而成，具有向后兼容性，可以减少崩溃和内存泄漏。

# **四、Android Jetpack分类**

下图是Jetpack的分类。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/1417629-accd8be7a6cf03f0.webp)

谷歌仍旧不断的完善Android Jetpack，截至到2019年8月已经有很多新加的组件并没有显示在上图中，比如CameraX等。Android Jetpack分类有4种，分别是Architecture、Foundationy、Behavior、UI，下面分别介绍下。

#### **1. Architecture（架构组件）**

Architecture指的是架构组件，帮助开发者设计稳健、可测试且易维护的应用。架构组件可以说是对应用开发帮助最大的组件，本系列也是围绕着架构组件进行讲解。

**DataBinding**：以声明方式将可观察数据绑定到界面元素，通常和ViewModel配合使用。

**Lifecycle**：用于管理Activity和Fragment的生命周期，可帮助开发者生成更易于维护的轻量级代码。

**LiveData**: 在底层数据库更改时通知视图。它是一个可观察的数据持有者，与常规observable不同，LiveData是生命周期感知的。  
Navigation:处理应用内导航。

**Paging**:可以帮助开发者一次加载和显示小块数据，按需加载部分数据可减少网络带宽和系统资源的使用。

**Room**:友好、流畅的访问SQLite数据库。它在SQLite的基础上提供了一个抽象层，允许更强大的数据库访问。

**ViewModel**: 以生命周期的方式管理界面相关的数据，通常和DataBinding配合使用，为开发者实现MVVM架构提供了强有力的支持。

**WorkManager**: 管理Android的后台的作业，即使应用程序退出或设备重新启动也可以运行可延迟的异步任务。

官方推荐的Android应用架构如下图所示。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/1417629-5811fbd287c2f453.webp)

这些架构组件既可以配合使用，也可以单独使用，这里建议还是尽量按照官方推荐的来。

#### **2. Foundationy（基础组件）**

基础组件提供横向功能，例如向后兼容性、测试、安全、Kotlin 语言支持，并包括多个多个平台开发的组件。

**Android KTX**：优化了供Kotlin使用的Jetpack和Android平台API。帮助开发者以更简洁、更愉悦、更惯用的方式使用Kotlin进行Android开发。  
**AppCompat**：帮助较低版本的Android系统进行兼容。  
**Auto**: 开发Android Auto应用的组件，提供了适用于所有车辆的标准化界面和用户交互。  
**检测**：从AndroidStudio中快速检测基于Kotlin或Java的代码。  
**多Dex处理**：为具有多个Dex文件应用提供支持。  
**安全**：安全的读写加密文件和共享偏好设置。  
**测试**：用于单元和运行时界面测试的Android 测试框架。  
**TV**: 构建可让用户在大屏幕上体验沉浸式内容的应用。  
**Wear OS**:开发Wear应用的组件。

#### **3. Behavior（行为组件）**

行为组件可帮助开发者的应用与标准Android服务（如通知、权限、分享）相集成。

**CameraX**：帮助开发简化相机应用的开发工作。它提供一致且易于使用的界面，适用于大多数Android。 设备，并可向后兼容至Android 5.0（API 21）。  
**DownloadManager**：处理长时间运行的HTTP下载的系统服务。  
**媒体和播放**：用于媒体播放和路由（包括Google Cast）的向后兼容API。  
**通知**：提供向后兼容的通知API，支持Wear和Auto。  
**权限**：用于检查和请求应用权限的兼容性API。  
**设置**：创建交互式设置，建议使用AndroidX Preference Library库将用户可配置设置集成到应用中。  
**分享操作**：可以更轻松地实现友好的用户分享操作。  
**切片**：切片是一种UI模板，创建可在应用外部显示应用数据的灵活界面元素。

#### **4. UI（界面组件）**

**Animation and Transition**：该框架包含用于常见效果的内置动画，并允许开发者创建自定义动画和生命周期回调。  
**Emoji Compatibility**：即便用户没有更新Android系统也可以获取最新的表情符号。  
**Fragment**：组件化界面的基本单位。  
**布局**：用XML中声明UI元素或者在代码中实例化UI元素。  
**调色板**:从调色板中提取出有用的信息。

# **五、在应用中引入Jetpack相关组件**

在项目build.gradle中添加google() 库，如下所示。

```gradle
  allprojects {
        repositories {
            google()
            jcenter()
        }
    }
```

如果想引入Room，可以在模块build.gradle中这么写：

```gradle
    implementation   "android.arch.persistence.room:runtime:1.1.1"
    annotationProcessor   "android.arch.persistence.room:compiler:1.1.1 "
    androidTestImplementation  "android.arch.persistence.room:testing:1.1.1"
```

# **总结**

这篇文章内部不多，旨在让大家了解Android Jetpack是什么，包括什么，如何引用，我们要准备开始学习Android Jetpack的架构组件。

最后对于程序员来说，要学习的知识内容、技术有太多太多，要想不被环境淘汰就只有不断提升自己，**从来都是我们去适应环境，而不是环境来适应我们！**

> 当程序员容易，当一个优秀的程序员是需要不断学习的，从初级程序员到高级程序员，从初级架构师到资深架构师，或者走向管理，从技术经理到技术总监，每个阶段都需要掌握不同的能力。早早确定自己的职业方向，才能在工作和能力提升中甩开同龄人。

---
> to be continued...