---
title: Unity的UGUI使用BoxCollider2D自适应UI大小
author: Tamsiree
date: 2020-06-27 11:08:07
description: 在使用Unity进行2D开发的时候，经常会出现屏幕适配的问题，UI因自适应而改变了自身的大小之后，与之相关的BoxCollider2D组件的大小却依然还是原本的大小，故做此记录。
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg-77a3a06.jpg
---
# 前言
在使用Unity进行2D开发的时候，经常会出现屏幕适配的问题，UI因自适应而改变了自身的大小之后，与之相关的BoxCollider2D组件的大小却依然还是原本的大小，故做此记录。

# 正文
废话不多说，直接上代码~

```c#
/* ========================================================
* |     作者：Tamsiree 
* |     创建时间：2020年06月26日 23:09:08
* |     主要功能：UI因屏幕适配自适应而改变了大小，使得 BoxCollider2D 跟随与之大小自适应
* |     详细描述：
* |     版本：1.0
*  ======================================================== */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoxColliderAdjust : MonoBehaviour
{
    public bool isAutoAdjust = false;
    private BoxCollider2D boxCollider2D;
    private RectTransform gameObjectRect;

    // Use this for initialization
    void Start()
    {
        gameObjectRect = GetComponent<RectTransform>();
        boxCollider2D = GetComponent<BoxCollider2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (boxCollider2D != null)
        {
            if (isAutoAdjust == true)
            {
                //把 BoxCollider2D 组件的偏移 设置到物体的中心
                boxCollider2D.offset = gameObjectRect.rect.center;
                //改变 BoxCollider2D 大小
                boxCollider2D.size = new Vector2(gameObjectRect.rect.width, gameObjectRect.rect.height);
            }
        }
        else
        {
            Debug.LogError("Can't find any BoxCollider2D");
        }
    }
}

```

---
> to be continued...
