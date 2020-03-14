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


## Android Studio 使用ButterKnife生成变量加前缀m

以前 把 局部变量 改成成员变量的时候可以, 但是现在使用ButterKnife并没有在生成变量的时候自动加前缀m

![局部变量](https://img-blog.csdn.net/20180819112719556?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE5MzA3ODA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

在 `File` -> `Other Settings` -> `ButterKnifeZelezny` 设置：

![ButterKnifeZelezny](https://img-blog.csdn.net/20180819112932927?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE5MzA3ODA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

---

## Unable to load class 'org.gradle.api.internal.component.Usage'

今天从GitHub上下载一个项目导入Android studio3.0后报错，报错如下，详见截图：

```bash
Error:(26, 0) Unable to load class 'org.gradle.api.internal.component.Usage'.
Possible causes for this unexpected error include:<ul><li>Gradle's dependency cache may be corrupt (this sometimes occurs after a network connection timeout.)
<a href="syncProject">Re-download dependencies and sync project (requires network)</a></li><li>The state of a Gradle build process (daemon) may be corrupt. Stopping all Gradle daemons may solve this problem.
<a href="stopGradleDaemons">Stop Gradle build processes (requires restart)</a></li><li>Your project may be using a third-party plugin which is not compatible with the other plugins in the project or the version of Gradle requested by the project.</li></ul>In the case of corrupt Gradle processes, you can also try closing the IDE and then killing all Java processes.
```

![](https://img-blog.csdn.net/20171117202419826)

这个bug产生的原因就是和Android studio3.0有关，因为在Android studio2.3的时候还没有这种情况。

解决办法: 

把project的build.gradle里的classpath 'com.novoda:bintray-release:0.3.4'改为0.5.0版本的就好了。如下图所示：

![](https://img-blog.csdn.net/20171117203143970)

---

## java.lang.BootstrapMethodError: Exception from call site #3 bootstrap method

在引用ButterKnife库时，提示错误：  

```bash
java.lang.BootstrapMethodError: Exception from call site #3 bootstrap method
```

在[butterknife_issues](https://github.com/JakeWharton/butterknife/issues/1468)找到了解决办法

解决方式：在build.gradle中添加以下代码Java8的新特性

```gradle
compileOptions{
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
}
```

---
> to be continued...