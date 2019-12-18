---
title: Steam中文支持
date: 2018-11-09 12:31:27
description: 整理Steam上的诸多游戏中文显示问题。
tags:
  - Steam
categories:
  - 第九艺术
  - GamePlatform
  - Steam
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01ef59672c708202df.jpg
---
# 前言
> 整理Steam上的诸多游戏中文显示问题。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/e179935d45ef5adf3fb597ddff202ca0_hd.jpg)

# CSGO中文支持
## 原因
CSGO 内部社区服务器登陆器不支持中文，导致出现方块乱码

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/c39d96eef01f3a2921dcccf49725bc315c607c38.png)

## 解决方案
CSGO 社区服务器的字体在游戏中独立设置的，与系统无关。  
找到并打开 CSGO 游戏文件的 `30-non-latin-inf-win.conf`  

默认路径:
```cmd
~/.local/share/Steam/steamapps/common/Counter-Strike Global Offensive/csgo/panorama/fonts/conf.d/30-non-latin-inf-win.conf
```

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/86de7d3e6709c93d1afbcdca913df8dcd00054cf.png)

这文件打开就注明是设置确定非拉丁字体的优先级。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/cdcb58afa40f4bfb658a5d690d4f78f0f63618fa.png)

在倒二行（也就是 <\/match>和<\/fontconfig>之间），添加教程中的文泉驿正黑字体代码

```conf
<match target="pattern">
  <test qual="any" name="family">
    <string>Helvetica</string>
  </test>
  <edit name="family" mode="assign"><string>WenQuanYi Zen Hei</string></edit>
</match>
```

例如:

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/e3662cdda3cc7cd9a8f0f7e43701213fb90e9173.png)

上面这段的含义就是将文泉驿正黑字体代替：`Helvetica`  
当程序要求调用 `Helvetica` 时，程序实际会调用文泉驿正黑字体。  
当然 `Helvetica` 字体也就不能用了。但是，你不用担心这个，因为基本上是没有预装这个字体，而且我们经常是用它的替代字体 `Arial` 。  

# Dota2中文支持
## 中文显示问题
### 起因
Dota2的载入界面和玩家名称的中文却呈现空白 

> 通过FC_DEBUG环境变量，观察V社游戏调用字体的过程。  
> 最后发现出现中文空白的地方，往往是由于这一处的调用字体过程中，英文字体优先级高于中文字体。  
> 这可能是由于此处的 lang 或 charset 参数没有设置正确，关于这一点，我并没有验证。但这不影响我解决中文显示问题。

### 解决方案
类似于上面的 [CSGO中文支持](#CSGO中文支持) 解决方案
> 首先，保证你的系统上已经安装了文泉驿正黑字体。

找到并打开 文件 `/etc/fonts/conf.avail/25-wqy-zenhei.conf`

然后在倒二行（也就是 <\/match>和<\/fontconfig>之间）插入一段
```conf
<match target="pattern">
  <test qual="any" name="family">
    <string>Helvetica</string>
  </test>
  <edit name="family" mode="assign"><string>WenQuanYi Zen Hei</string></edit>
</match>
```
> 本解决方案对CS，CSGO以及CS起源的中文显示也有效

## 中文输入问题
> 仅针对`ibus`用户，对fcitix用户无效。由于V社采用SDL的版本还不支持ibus，后来有人自己开发支持ibus的SDL库，并且支持IBUS的特性将很有可能纳入下次新版的SDL中。  
> `fcitix`用户可参考这个[链接](https://forum.ubuntu.org.cn/viewtopic.php?f=34&t=466879)

### 解决方案
1. 下载该 [网盘](https://pan.baidu.com/s/1kElXTmzVJ8zrPINv2kv3eg) 中的文件。  
提取码:`y86i`
2. 在steam中右键 `dota2` ，`属性`，`本地文件`，`浏览本地文件`。进入 `bin` 文件夹。
3. 将下载下来的 `libSDL2-2.0.so.0` 复制进去，以替换文件夹原有的。
4. 然后，重启，试一试在 dota2 中打字交流的感觉。

> steam聊天的中文输入同理

# 传送门2中文支持
## 起因
传送门2选择中文语言，进去发现界面却是一片空白

## 解决方案
与上面的 [Dota2中文支持](#Dota2中文支持) 解决方案一样。 