---
title: CSGO
date: 2018-12-18 11:34:00
tags:
  - Game
  - Steam
  - GamePlatform
  - CSGO
categories:
  - Game
  - GamePlatform
  - Steam
  - CSGO
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/thumb-350-570417.jpg
---
# 前言
![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/thumb-1920-587592.png)


# 显示FPS
1. 开启控制台  
游戏开始界面 - “选项” - “游戏设置”

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135501_1_lit.png)

找到“启用开发者控制台(\~)”，选择“是”

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135518_1_lit.png)

之后，在游戏中只要按“\~”按键(Esc下面)即可开启控制台

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135532_1_lit.png)

2. 显示帧数(FPS)及网络参数(PING、LOSS、CHOKE等)  
```bash
> net_graph 1 开启帧数、网络参数显示  
> net_graph 0 关闭  
```

> 在控制台输入“net_graph 1”后回车  
> 即可在右下角显示帧数(FPS)及网络参数(PING、LOSS、CHOKE等)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135619_1_lit.png)

3. 修改参数显示位置(左、中、右)  
```
> net_graphpos 0 参数显示在界面左边  
> net_graphpos 1 参数显示在界面右边  
> net_graphpos 2 参数显示在界面中间  
```

> 使用方法同上，控制台输入即可，下图是net_graphpos 0效果  

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135640_1_lit.png)

4. 修改参数显示位置高度(详细到像素)  
```
> net_graphheight 数值，数值越大，位置越高  
```

> 下图为net_graphheight 500 的效果

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135717_1_lit.png)

5. 修改参数显示字体大小  
```
> net_graphproportionalfont 0.9 将参数字体变小  
> net_graphproportionalfont 1 将参数字体变大(默认)  
```

> 只有两个显示效果，小于1字体小(上图)，大于等于1字体大(下图)

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135805_1_lit.png)
![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/340_170121135805_2_lit.png)

---

# 手雷轨迹


```
> sv_grenade_trajectory "1" 设置为 1 时将打开手雷飞行轨迹

> sv_grenade_trajectory_dash "0" 设置手榴弹飞行轨迹的线条为点状虚线

> sv_grenade_trajectory_thickness "0" 设置手榴弹飞行轨迹的线条粗细

> sv_grenade_trajectory_time "20" 设置手榴弹飞行轨迹的保留时间
```

# 其他命令

```
sv_infinite_ammo 1 无限弹药/手雷
```

```
noclip 穿墙
```

```
sv_showimpacts 1 打开着弹点
```

---
> to be continued...