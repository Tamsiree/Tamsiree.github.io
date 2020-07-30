---
title: Unity开发愤怒的小鸟
author: Tamsiree
date: 2020-05-29 10:59:19
description: 用最通俗易懂的方法去制作愤怒的小鸟,主要用于学习Unity的使用。
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/timgangrebird.jpg
---
# 前言
用最通俗易懂的方法去制作愤怒的小鸟,主要用于学习Unity的使用。

# 第一部分
## 游戏的逻辑
1. 小鸟的拖拽（最大距离限制）
2. 小鸟的弹出
3. 小鸟与猪头、道具的碰撞（死亡/受伤）
4. 皮筋的绘制
5. 制作各种特效
6. 游戏结束，胜利的判定
7. 一只小鸟 -> 多只的转化
8. 胜利判定星星特效的制作
9. 让星星一颗一颗的生成
10. 镜头跟随
11. 添加音效

涉及知识点：
> 1、屏幕坐标与世界坐标的转化  
> 2、Spring Joint 组件的使用  
> 3、碰撞检测（OnCollisionEnter2D）  
> 4、Line Renderer   

Spring Joint 2D 是Unity提供的一个弹簧关节组件。

# 第二部分
## UI制作
1. 暂停界面
2. 关卡选择
3. 数据存储

# 补充部分

渲染层级：

1. Camera  
Depth 先绘制depth低的物体
2. 同一个camera  
Sorting layer
3. 同一个Sorting layer  
Order in layer  
`[大的遮挡小的]`  
`易混淆：layer`

Camera:  
 1、clear flags：清除标记  
 2、culling mask：按照layer有选择性的渲染场景中的物体

---
> to be continued...
