---
title: Unity武器拖尾效果
author: Tamsiree
date: 2020-07-01 20:19:24
description: 本文主要介绍使用 Pocket RPG Weapon Trails 插件 实现 武器拖尾效果。
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/21b8138987ebc07c387652bb2441bfcc.jpg
---
# 前言
本文主要介绍使用 Pocket RPG Weapon Trails 插件 实现 武器拖尾效果。

# 正文

Asset Store地址：[https://www.assetstore.unity3d.com/en/#!/content/2458](https://www.assetstore.unity3d.com/en/#!/content/2458)  
CSDN资源地址：[http://download.csdn.net/detail/akof1314/7610241](http://download.csdn.net/detail/akof1314/7610241)

截图：  
![](https://img-blog.csdn.net/20140709190707821?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWtvZjEzMTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)  
![](https://img-blog.csdn.net/20140709190739833)

- - -

由于这个插件提供的**AnimationController.cs**仅对**Animation**动画进行支持，对**Animator**动画支持的话需要自己实现。文档上说明实现的方式：

> The WeaponTrail can be built by calling Itterate(float itterateTime) and UpdateTrail(float currentTime, float deltaTime). These functions are called by AnimationController, however if you don't want to use AnimationController you can call these yourself.

即只需要调用**Itterate**和**UpdateTrail**方法。下面使用另外的角色模型进行测试拖尾效果。

测试角色的模型包：[https://www.assetstore.unity3d.com/en/#!/content/15103](https://www.assetstore.unity3d.com/en/#!/content/15103)  
CSDN资源地址：[http://download.csdn.net/detail/akof1314/7610385](http://download.csdn.net/detail/akof1314/7610385)  
首先，在**Animator**窗口，创建休闲**idle**状态和攻击**attack**状态，设置它们相应的Motion，设置从idle到attack的动画参数为**Attack**，类型为Trigger，如下图所示：  
![](https://img-blog.csdn.net/20140709190941014)  
![](https://img-blog.csdn.net/20140709191003805)  
**Speed**属性可以控制当前状态动作的速度。接着，创建个脚本**TamTrail.cs**附加到角色上，脚本代码如下：

```c#
using UnityEngine;  
using System.Collections;  
  
public class TamTrail : MonoBehaviour {  
  
    private Animator animator;  
  
    void Start () {  
        animator = GetComponent<Animator>();  
    }  
  
    void OnGUI()  
    {  
        if (GUI.Button(new Rect(0, 0, 50, 50), "攻击"))  
        {  
            animator.SetTrigger("Attack");  
        }  
    }  
}
```

运行，可以看到默认角色是休闲状态，点击按钮是攻击状态，如下图所示：  
![](https://img-blog.csdn.net/20140709191040185)![](https://img-blog.csdn.net/20140709191054552)  
查看模型，可以看到武器是绑在右手上的，如下图所示：  
![](https://img-blog.csdn.net/20140709191114115)

给武器(Object003)添加一个子对象，命名为**Trail**，为其添加**WeaponTrail.cs**脚本、**Mesh Renderer**组件，材质为Pocket RPG Trails提供的材质，设置好如下图所示：  
![](https://img-blog.csdn.net/20140709191140432)  
修改**TamTrail.cs**代码为如下：

```c#
using UnityEngine;  
using System.Collections;  
  
public class TamTrail : MonoBehaviour {  
  
    public WeaponTrail myTrail;  
  
    private Animator animator;  
    private float t = 0.033f;  
    private float tempT = 0;  
    private float animationIncrement = 0.003f;  
  
    void Start ()   
    {  
        animator = GetComponent<Animator>();  
    }  
  
    void LateUpdate()  
    {  
        t = Mathf.Clamp(Time.deltaTime, 0, 0.066f);  
  
        if (t > 0)  
        {  
            while (tempT < t)  
            {  
                tempT += animationIncrement;  
  
                if (myTrail.time > 0)  
                {  
                    myTrail.Itterate(Time.time - t + tempT);  
                }  
                else  
                {  
                    myTrail.ClearTrail();  
                }  
            }  
  
            tempT -= t;  
  
            if (myTrail.time > 0)  
            {  
                myTrail.UpdateTrail(Time.time, t);  
            }  
        }  
    }  
  
    void OnGUI()  
    {  
        if (GUI.Button(new Rect(0, 0, 50, 50), "攻击"))  
        {  
            animator.SetTrigger("Attack");  
        }  
    }  
}
```

将**Trail**对象赋给**My Trail**属性，如下图所示：  
![](https://img-blog.csdn.net/20140709191204768)  
现在运行，可以看到休闲状态时，武器拖尾的若隐若现，如下图所示：  
![](https://img-blog.csdn.net/20140709191220352)  
攻击时的效果：  
![](https://img-blog.csdn.net/20140709191236764)  
要调整好**Trail**对象的位置、旋转等，尽量贴合武器，设置拖尾的高度，尽量与武器同长度，才能产生较好的效果。当攻击结束，武器往回收的时候，也会有拖尾，如下图所示：  
![](https://img-blog.csdn.net/20140709191019593)  
如果要去掉这个时候的拖尾，可以采用更精确的控制拖尾的出现。选中攻击动作，切换到"**Animations**"，播放动作，在攻击开始时刻，添加一个事件，如下图所示：  
![](https://img-blog.csdn.net/20140709191842725)  
在攻击完毕，也添加一个事件，如下图所示：  
![](https://img-blog.csdn.net/20140709192008088)

点击"**Apply**"进行应用。修改**TamTrail.cs**代码为如下：

```c#
    void Start ()   
    {  
        animator = GetComponent<Animator>();  
        // 默认没有拖尾效果  
        myTrail.SetTime(0.0f, 0.0f, 1.0f);  
    }  
      
    public void heroAttack()  
    {  
        //设置拖尾时长  
        myTrail.SetTime(2.0f, 0.0f, 1.0f);  
        //开始进行拖尾  
        myTrail.StartTrail(0.5f, 0.4f);  
    }  
  
    public void heroIdle()  
    {  
        //清除拖尾  
        myTrail.ClearTrail();  
    }
```

现在运行，就会发现休闲状态时候，不会有拖尾效果，当进行攻击时，拖尾只在相应的时间点进行出现，如下图所示：  
![](https://img-blog.csdn.net/20140709192036293)  
武器回收的时候，也不会有拖尾了，如下图所示：  
![](https://img-blog.csdn.net/20140709192049288)

---

> 参考资料：  
> [无幻](https://blog.csdn.net/akof1314/article/details/37603559)   
> [Unity3D 武器拖尾效果(刀光) 使用 `[PocketRPG Trails]`](http://blog.csdn.net/xv_ly15/article/details/8509781)  
> [`[ 宣雨松 ]`挥动武器产生的剑痕特效](http://www.xuanyusong.com/archives/2110)

---
> to be continued...
