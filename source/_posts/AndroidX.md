---
title: AndroidX
author: Tamsiree
date: 2020-03-13 13:34:33
description:
tags:
categories:
cover:
---
# 前言
这里是前言介绍。

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
> to be continued...
