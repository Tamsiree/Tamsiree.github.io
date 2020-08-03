---
title: Unity自定义编辑器菜单
author: Tamsiree
date: 2020-06-07 22:30:28
description: 自定义编辑器菜单扩展。
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/yingduan.jpg
---
# 前言
自定义编辑器菜单扩展。

# 正文
## 添加菜单

![](https://img-blog.csdn.net/20171219112315437?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("Tools/MyOption")]
private static void MyOption()
{
    // 自定义菜单Tools
}
```

---

![](https://img-blog.csdn.net/20171219112745900?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("Tools/Sub/MyOption")]
private static void MyOption()
{
    // 子菜单
}
```

---

![](https://img-blog.csdn.net/20171219113153129?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

添加系统菜单(Window)的菜单项
```c#
[MenuItem("Window/AAAOption")]
private static void MyOption()
{
    // 添加系统菜单(Window)的菜单项
}
```

---

添加菜单项的快捷键

> % 代表 Ctrl 或 CMD  
> \# 代表 Shift  
> & 代表 Alt  
> LEFT/RIGHT/UP/DOWN 代表方向键  
> F1 … F2 代表功能键  
> HOME, END, PGUP, PGDN 代表对应按键  
> _[a-z] 代表A-Z字符

以上每项快捷键可以组合使用，字符单独使用需要‘_’前缀，组合使用不需要‘_’前缀。快捷键冲突不会有提示，只会有一个被启用。

![](https://img-blog.csdn.net/20171219114341841?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("Tools/Option1 %#a")]
private static void MyOption1()
{
    // CTRL + SHIFT + A
}


[MenuItem("Tools/Option2 %g")]
private static void MyOption2()
{
    // CTRL + G
}


[MenuItem("Tools/Option3 _g")]
private static void MyOption3()
{
    // G
}
```

添加右键上下文菜单，使用内置指定路径

> Assets/ 工程视图右键菜单  
> Assets/Create/ 工程视图右键Create菜单  
> CONTEXT/ComponentName/ 属性面板对应组件的右键菜单  

![](https://img-blog.csdn.net/20171219120914066?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


```c#
[MenuItem("Assets/MyAssetControl")]
private static void MyAssetControl()
{

}
```

![](https://img-blog.csdn.net/20171219121106977?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("Assets/Create/MyAssetControl")]
private static void MyAssetControl()
{

}
```

![](https://img-blog.csdn.net/20171219121341930?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("CONTEXT/Rigidbody2D/MyOption")]
private static void MyOption()
{

}
```

---

菜单禁用控制

![](https://img-blog.csdn.net/20171219121732021?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#

[MenuItem("Tools/Option1")]
private static void Option1()
{

}

[MenuItem("Tools/Option1", true)]
private static bool CheckOption1()
{
    // 路径相同，返回可用性
    return false;
}
```

---

菜单项的排序与分组

![](https://img-blog.csdn.net/20171219122657724?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[MenuItem("Tools/Option1", false, 2)]
private static void Option1()
{
}

[MenuItem("Tools/Option2", false, 1)]
private static void Option2()
{
}

[MenuItem("Tools/Option3", false, 21)]
private static void Option3()
{
}
```

---

属性面板组件的右键菜单，获取当前组件

```c#
[MenuItem("CONTEXT/Rigidbody2D/MyOption")]
private static void MyOption(MenuCommand menuCommand)
{
    // 获得当前组件对象
    var body2D = menuCommand.context as Rigidbody2D;
}
```

---

自定义组件右键菜单

> 需要继承MonoBehaviour  
> 不能是static的方法

![](https://img-blog.csdn.net/20171219145741014?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[ContextMenu("MyMenu")]
private void MyMenu()
{
}
```

---

自定义组件属性的右键菜单

![](https://img-blog.csdn.net/20171219150156739?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[ContextMenuItem("Set Name", "SetName")]
public string myName;

private void SetName()
{
}
```

---

自定义组件加入组件菜单

![](https://img-blog.csdn.net/20171219151127901?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![](https://img-blog.csdn.net/20171219151143147?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdG9tXzIyMXg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```c#
[AddComponentMenu("MyComponent/Enemy")]
public class Enemy : MonoBehaviour
{
}
```

---

> 来源：[自定义编辑器菜单扩展总结](https://blog.csdn.net/tom_221x/article/details/78841427)

---
> to be continued...
