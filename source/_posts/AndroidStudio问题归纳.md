---
title: AndroidStudio问题归纳
date: 2017-11-21 08:59:15
description: 整理归纳使用AndroidStudio过程中遇到的问题，并记录解决办法。
tags:
  - Software
  - AndroidStudio
  - Android
categories:
  - Software
  - AndroidStudio
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/5wg9y3.jpg
---

# 前言
> 整理归纳使用AndroidStudio过程中遇到的问题，并记录解决办法。

![佛祖保佑永无BUG](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/e5b573b851277482a57b8e0de6b11d0c_hd.jpg)

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

---

## Error:Could not download protobuf-java.jar (com.google.protobuf:protobuf-java:3.0.0)
老项目导入到最新版本的 AndroidStudio 时，发现无法同步，找不到 protobuf-java.jar 这个包，因为新版本有所改动

解决方案：  
我之前只有 jcenter()，需要修改配置  
修改一下整个项目的配置 build.gradle  

```gradle
jcenter() {
    url "http://jcenter.bintray.com/"
}
```

---

## 报错 error: No resource identifier found for attribute 'cardCornerRadius' in package 'com.xxxxx.xxx'解决

在依赖我自己的 RxTool下的 RxUI库时，出现上面这个错误，我反复检查了res目录里的文件，最后确定没有缺少资源，查看报错信息如下：

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20191123140756.png)

发现有cardBackgroundColor，cardCornerRadius，cardElevation三个属性应该与cardview有关，然后我发现在app下的build.gradle文件中没有导入卡片布局cardview相应的依赖包。然后我导入相应的依赖包 
```gradle
implementation 'com.android.support:cardview-v7:27.1.1'
```

重新clean project后报错消失了，一阵狂欢，终于解决了，哈哈。

## AAPT: error: <item> inner element must either be a resource reference or empty。

Logcat 错误日志
```
AAPT: error: <item> inner element must either be a resource reference or empty。
```

问题出现原因：升级`gradle`插件导致对`values`文件的命名规则更严格，导致原本项目中存在的`values`文件因包含一些不严谨的键值对而报错。
例如：
```
<item name="about_version_code" type="id">false</item>
```

解决方法
修改成：
```
<item name="about_version_code" type="id" />
```

## Android Studio编译问题-Error:Could not find org.jetbrains.trove4j:trove4j:20160824

今天早上打开AS，发现项目编译不通过了。。。提示
```bash
Error:Could not find org.jetbrains.trove4j:trove4j:20160824

Error:SSL peer shut down incorrectly
```
真莫名其妙。。。

查阅资料，提供的解决方式大致有以下几种：

1. 在buildscript中加上这个 jcenter()
```gradle
buildscript {
    repositories {   
       jcenter()//       在这里加
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.1'
    }
}
```
但是，一般项目都有这个属性了，仍然是报上面的错。

2. 修改gradle-wrapper.properties文件  
将distributionUrl=https\\://services.gradle.org/distributions/gradle-4.1-all.zip  
修改为：distributionUrl=http://services.gradle.org/distributions/gradle-4.1-all.zip  
有的同志，说这样调整之后，重新编译就通过了。但我的仍然是编译不过。

3. 项目build文件中repositories和allprojects括号中加上mavenCentral()  
然后将 jcenter() 改成
```gradle
maven{ url'http://maven.aliyun.com/nexus/content/groups/public/' }

maven{ url'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
```
最后是这个样子：

```gradle
buildscript {
  repositories {
    mavenCentral()
    google()
    //jcenter()
    maven{ url'http://maven.aliyun.com/nexus/content/groups/public/' }
    maven{ url'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
    }
    dependencies {
      classpath 'com.android.tools.build:gradle:3.0.1'
  }
}
```
这样就编译通过了。

总结：个人认为，在AS加载（引入）各种包、库的时候，由于网络限制等原因，导致加载失败，这个时候，找个靠谱的第三方库来作为下载来源，才是最有效的。


---
> to be continued...