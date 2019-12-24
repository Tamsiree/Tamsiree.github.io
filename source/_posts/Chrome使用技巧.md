---
title: Chrome使用技巧
date: 2017-12-18 10:45:33
tags:
  - Google
  - Chrome
categories:
  - Google
  - Chrome
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t012f8bc5b5e6497cc9.jpg
---
# chrome调试

常用调试快捷键

> F8：运行剩余程序  
> F9：运行该程序，一步步运行。  
> F10:调试跳过该方法，执行下一步  
> F11:进入函数内部  
> shift +F11:跳出该函数，返回上一个函数  
> 
> don't pause on exceptions :不要暂停异常（默认，取消之后按F8可以直接运行到异常处）

## 找出点击事件
要找出点击事件，就需要找出点击所触发的js函数，进行修改。js的封装性很强，而且用了一些js框架，通过源代码真的很难找到。所以只能借助强大的chrome浏览器了。

1. 打开Chrome的调试页面 `Ctrl` + `Shift` + `I` 或者 `F12` 。
> 有些页面占用了 `F12` 功能按键，无法使用

2. 选择调试元素，找到该元素的监听事件。
![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20190403095446448.png)

3. 找到你所需要的监听事件的类型，比如我需要的是点击事件，就打开点击事件，找到对应的js和方法，可能会有多个，可以选择临时移除，找到真正的那一个。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20190403095823781.png)

4. 找到该段代码，设置断点。开始调试执行。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20190403100103848.png)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/20190403100345369.png)

---
to be continued...
