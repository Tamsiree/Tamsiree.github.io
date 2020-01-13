---
title: Unity动态加载Prefab
date: 2020-01-09 23:49:13
description: 在进行一些功能开发的时候，我们常常将一些能够复用的对象制作成 `.prefab` 的预设物体，然后将预设体存放到 `Resources` 目录之下，使用时再动态加载到场景中并进行实例化。例如：子弹、特效甚至音频等，都能制作成预设体。
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg6d49cc2.png
---
# 前言
在进行一些功能开发的时候，我们常常将一些能够复用的对象制作成 `.prefab` 的预设物体，然后将预设体存放到 `Resources` 目录之下，使用时再动态加载到场景中并进行实例化。例如：子弹、特效甚至音频等，都能制作成预设体。

# 预设动态加载到场景

一个预设体要能够通过代码控制在场景中进行显示，需要三个步骤，这里我们以动态加载怪物血条为例子分析一个常见的误区：

## 预设体资源加载

```csharp
//加载预设体资源
GameObject bulletPrefab = (GameObject)Resources.Load("Prefabs/BulletPrefab");
```

通过上述操作，实现从资源目录下载入 `Prefabs\BulletPreFab.prefab` 预设体，用一个 GameObject 对象来存放，此时该预设物体并未真正载入到场景中，因为还未进行实例化操作。

## 预设体实例化

在第一步中我们已经将预设体资源加载完毕，但是为实例化的资源不会出现在场景中，所以第二不我们需要对资源进行实例化，实例化使用的是 MonoBehaviour.Instantiate 函数来完成的，其实质就是从预设体资源中克隆出一个对象，它具有与预设体完全相同的属性，并且被加载到当前场景中：

```csharp
//实例化预设体
Instantiate(bulletPrefab);
```

因为我们没有对此实例化后的对象进行任何的属性设置，所以其属性与预设体最初的属性保持一致，并且其父节点默认为当场的场景对外层。

## 实例化对象属性设置（可选）

完成上述步骤之后，我们已经可以在场景中看到实例化之后的对象，但是通常情况下我们喜欢我们的对象之间层次感分明，而且这样也方便我们进行对象统一管理，而不是在Hierarchy中看到一大堆并排散乱对象，所以我们需要为对象设置名称已经父节点等属性。

（常见错误：对未初始化的hp\_bar进行属性设置，设置之后的属性在实例化之后无法生效。这是因为我们最后在场景中显示的其实并非实例化前的资源对象，而是一个克隆对象，所以假如希望设置的属性在最后显示出来的对象中生效，我们需要对实例化之后的对象进行设置。）

正确的设置代码如下，可以看到实例化对象已成功挂在到父节点Canvas上：

```csharp
GameObject bulletPrefab = (GameObject)Resources.Load("Prefabs/bulletPrefab");GameObject mUICanvas = GameObject.Find("Canvas");
bullet = Instantiate(bulletPrefab);
bullet.transform.parent = mUICanvas.transform;
```

其实前两个步骤可以在一起完成，简化后的写法如下：

```csharp
GameObject bullet = (GameObject)Instantiate(Resources.Load("Prefabs/bulletPrefab"));
GameObject mUICanvas = GameObject.Find("Canvas");
bullet.transform.parent = mUICanvas.transform;
```

---
> to be continued...