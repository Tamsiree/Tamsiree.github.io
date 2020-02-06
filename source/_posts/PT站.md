---
title: PT站
author: Tamsiree
date: 2020-02-06 20:28:35
description: 记录PT站相关的知识。
tags:
  - TechnicalResearch
  - PT站
categories:
  - TechnicalResearch
  - PT站
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/d439b6003af33a8735fa4ebac05c10385243b5ff.jpg
---
# 前言
记录PT站相关的知识。

# 正文
## PT站的搭建

MTPT Nexusphp框架

## PT站的做种和魔力值是如何增加换算的？
PT站的做种和魔力值是如何增加换算的？  
相信混了一段PT界的小伙伴，一定头疼一个问题，各大站点的PT魔力值是怎么计算的呢？  
帮助理解PT网站的魔力值计算方法。

**统计工具采用 PTTools 这款[PT助手](http://www.pttools.cn)的截图（隐私部分已做打码处理）**

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly81YjA5ODhlNTk1MjI1LmNkbi5zb2h1Y3MuY29tL2ltYWdlcy8yMDE5MDkyMS8wN2ExYmI2MzIwODU0MzQyODczYjBkNjE4OGQ4YzQ1Yy5wbmc?x-oss-process=image/format,png)

首先要说一下的是，国内PT站点基本上都是同一套魔力值公式，在计算魔力值的差异上基本不大。但是相信很多小伙伴还是云里雾里。下面上一张魔力值计算的公示图**（国内90%的PT网站都采用的这套公式）**

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2IzMTU4M2U5MjY5ZDQwY2U5YjgxMzdiOGRmZjE1NWU1LnBuZw?x-oss-process=image/format,png)

如图所示，很复杂的一套公式。文科生包括小编我在内，对这个公式真实“恨之入骨”~当然了，其实也不复杂。经过小编通过多种资料的查询，最终得出的结论如下（简易版）：

**1.发布时间较长**

**2.做种人数小于10个**

**3.体积越大越好**

只要在保种的同时满足以上3点，基本上跑满进度条是很有可能的！当然啦，如果小伙伴需要了解更加详细的资料，可以继续往下看。

**魔力值分析**

魔力值的A公式如下：

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2I5OWQxNjg1MWIxZDQxNmU4NTQ1MGIxYzFiN2QyZTZhLnBuZw?x-oss-process=image/format,png)

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzgxNzhmYmYyNmNlOTRlOWI4YTZkMzQ3ZjVlNGFhY2Q5LnBuZw?x-oss-process=image/format,png)

式中

-   **A**为中间变量
-   **Ti**为第**i**个种子的生存时间, 即自种子发布起到现在所经过的时间, 单位是周
-   **T0**为参数。**T0** = 4
-   **Si**为第**i**个种子的大小，单位是GB
-   **Ni**为第**i**个种子当前的做种者数
-   **N0**为参数。**N0** = 7
-   **B**为1小时中用户获得的做种魔力值点数
-   **B0**为参数，代表用户1小时获得魔力值的上限。**B0** = 50
-   **L**为参数。**L** = 300

**A值**

我们只讨论单个种子的情况，因此忽略掉加和运算，该公式包含三个变量，为了研究每个变量的影响，我们把公式拆分

（1）1-10^(-0.25\*i) 种子存活周期影响

（2）1+1.414\*10^(-0.167\*(i-1)) 当前做种人数影响

其中i为变量，分别代表周期数（以周为单位）和种子数

（1）函数图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzU0MmRjZWQ4ZDdkNTQwNTBiOTc1NmJkODgxMGRkYzU3LmpwZWc?x-oss-process=image/format,png)

从图中我们可以很明显看到：8周后时间对函数值没有明显影响。

（2）函数图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2U4MjU2NDM3OTNkZjQ2YmM5MTRmMGQ2YjJkMzAwYjQ0LmpwZWc?x-oss-process=image/format,png)

从图中我们可以很明显看到：大于10个做种人数后时间对函数值没有明显影响。

（3）（1）\*（2）的函数图形为

我们假设做种数和周期的数值相等，可得如下图像

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzA4M2RjNGQ2NWVjMzQ0NjU4ZTBmYWNkNTEyNThlMWQ4LmpwZWc?x-oss-process=image/format,png)

从中可以看到，种子数计时间为5时 ，有最大值。

（4）（1）\*（2）\*Si的图形

我们让做种数、大小和周期的数值相等，可得如下图像

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzVhYWQzMmViMTNlODQwN2NiODc0OTYwOTYyMzIwZjAzLmpwZWc?x-oss-process=image/format,png)

**B值**

B值（也即每小时魔力值）与A值关系见下图：

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzYwNDM5NmMwZjg5OTQ5NTJiMGIyNWE0MjVlMWYzOTk4LmpwZWc?x-oss-process=image/format,png)

在0-300时基本是直线关系。

**特殊情况分析**

当周期大于8，种子数多于10，函数（1）（2）的值不再随他们的增加而明显改变，因此以此时的值代替周期大于8，种子数多于10的值是合理的。

下面分析满足以上情况时的魔力值。

首先周期等于8，种子数等于10时，函数（1）（2）的值分别为0.99和1.04，则A值为A=1.0296\*Si ,B值为B= 31.85\*atan(（1.0296\*Si）/300)

其图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2Y4ZWNkNjBiNmYzNTQ4MmE5YzZjZDE3OTI1MzFhMjQ0LmpwZWc?x-oss-process=image/format,png)

重要结论：经拟合，以上线性方程为y=0.09658x+0.545，x为种子尺寸，y为一个种子每小时魔力值。相关系数为0.99867，标准偏差为0.2886。该方程适合周期大于8 ，做种数多于10的情况。

同时我们还可以得到一个重要结论：占用同样的做种磁盘空间，多个种子和一个种子所获得的魔力值是相等的（不考虑0.6\*12，适用于周期大于8，做种数多于10的情况），因为他们的A值是相等的，比如100g种子1个和1g种子100个，他们的A值可用A=1.0296\*Si计算，显然二者相等。

**结论**

1\. 8周后时间的增加不会让魔力值明显增加；

2\. 做种人数超过10后，做种人数的增加不会明显减小魔力值；

3\. 一个种子存活8周后，且做种人数超过10，种子尺寸小于200G时，魔力值与种子大小有近似直线关系，即B=0.09658x+0.545；

4\. 占用同样的做种磁盘空间，多个种子和一个种子所获得的魔力值是相等的。

以上就是PT站点魔力值的计算方法，看似复杂，其实主要记住最重要的三点“**大**” “**老**” “**少**” （即种子体积大，种子存活时间长，种子的做种人数少！）

---
> to be continued...