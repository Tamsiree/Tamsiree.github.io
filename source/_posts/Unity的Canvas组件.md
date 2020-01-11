---
title: Unity的Canvas组件
date: 2020-01-11 16:29:18
description: Canvas组件在Unity UI系统中表示画布，任何UI元素都是基于这一张画布，通过不同的UI Widget组合，设计出一个漂亮的UI。下面我们来认识这一组件。
tags:
  - Tool
  - DevelopmentTool
  - Unity
categories:
  - Tool
  - DevelopmentTool
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg4068a18.jpg
---
# Canvas
Canvas组件在Unity UI系统中表示画布，任何UI元素都是基于这一张画布，通过不同的UI Widget组合，设计出一个漂亮的UI。下面我们来认识这一组件。

# Render Mode
Unity4.6 发布的New GUI 有三种渲染模式，下面一一介绍：

1. ScreenSpace－Overlay 通常这种模式下，我们不需要相机，也可以讲UI Widget渲染在屏幕上面。它好像在我们的摄像机上面添了一层薄薄的膜，也就是说，在这种模式下，当场景中存在其他物体时，首先看到的将是UI上面的Widget。

2. ScreenSpace－Camera 通常在这种模式下，我们可以使得3D场景中的物体夹在摄像机 和 我们的UI 之间，这样我们可以将场景中的物体，比如一些特效之类的渲染在UI的上面，使得画面更炫。  
当我们设置为Camera模式时，我们需要指定一相机，这样Unity系统会通过该相机来渲染与之相关的UI和场景中的GameObject. 另外，我们发现相机 和 我们的Canvas保存固定的相对位置，当改变Camera位置时，Canvas的坐标也跟着变化，而Canvas中的UI Widget 和 Canvas保持相对位置不变。

3. WorldSpace 这时UI是相对于世界空间的，和其他场景里的物体一样有世界位置、遮挡关系。此时相机为透视投影模式，UI离摄像机越远，则越小，反之越大。

Canvas有三个组件：Canvas组件，Canvas Scaler组件，Graphic Raycaster组件

---
> to be continued...
