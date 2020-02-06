---
title: 使用NexusPhp打造个性化的PT站
author: Tamsiree
date: 2020-02-05 20:46:11
description: 国内使用 `NexusPhp` 建立的PT站越来越多，风格大都雷同（正如yofeng同学所说的审美疲劳......），如何把 `NexusPhp` 快速配置成你喜欢的界面、风格，本人在这里抛砖引玉，希望大家在这里开放的讨论、共享使用 `NexusPhp` 建站心得，OK，Let's doing...
tags:
  - TechnicalResearch
  - PT站
  - NexusPhp
categories:
  - TechnicalResearch
  - PT站
  - NexusPhp
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/20150512112726335.jpg
---
# 前言
国内使用 `NexusPhp` 建立的PT站越来越多，风格大都雷同（正如yofeng同学所说的审美疲劳......），如何把 `NexusPhp` 快速配置成你喜欢的界面、风格，本人在这里抛砖引玉，希望大家在这里开放的讨论、共享使用 `NexusPhp` 建站心得，OK，Let's doing...


# 正文
## 为用户等级追加标识

方法：以简体中文为例，打开 `nexusphp.v1.5.beta4.2010XXXX\lang\chs\lang_functions.php` 修改 `257-266` 行下列设置（如果要其他语种也需要，则每种语言包都要配置）：  

修改前：

```php
'text_peasant' => "Peasant",
'text_user' => "User",
'text_power_user' => "Power User",
'text_elite_user' => "Elite User",
'text_crazy_user' => "Crazy User",
'text_insane_user' => "Insane User",
'text_veteran_user' => "Veteran User",
'text_extreme_user' => "Extreme User",
'text_ultimate_user' => "Ultimate User",
'text_nexus_master' => "Nexus Master",
```

修改后：

```php
'text_peasant' => "(堕落者)Peasant",
'text_user' => "(穷人)User",
'text_power_user' => "(百姓)Power User",
'text_elite_user' => "(小康)Elite User",
'text_crazy_user' => "(大康)Crazy User",
'text_insane_user' => "(中产)Insane User",
'text_veteran_user' => "(富商)Veteran User",
'text_extreme_user' => "(银行家)Extreme User",
'text_ultimate_user' => "(豪门)Ultimate User",
'text_nexus_master' => "(贵族)Nexus Master",
```

> 注意：Web服务器需要重启http生效！

![为用户等级追加标识](https://imgsa.baidu.com/forum/w%3D580/sign=7259bb0994cad1c8d0bbfc2f4f3e67c4/69be26d0f703918fe2fb96ec503d269759eec403.jpg)

## 关闭搜索箱
应用此风格的有 `CHDbits` 、 `TCCF` 、 `Pig2Pig` 等
为什么要关闭？  
`Nexusphp` 的搜索箱功能十分强大，不过对用户来说并不是每次都要使用的，且所占版面较大（个人觉得也是版面看起来雷同的一大因素），由于在后台和数据库中无相关配置项，故需要对程序进行修改：

打开主目录下的 `torrents.php` 文件，查找 `874-876` 行，来到这里：

```php
<td class="colhead" align="center" colspan="2">
    <a href="javascript: klappe_news('searchboxmain')">
        <img class="minus" src="pic/trans.gif" id="picsearchboxmain" alt="Show/Hide" />
        <?php echo $lang_torrents['text_search_box'] ?>
    </a>
</td>
</tr>
</tbody>
<tbody id="ksearchboxmain">
```

将 `class="minus"` 改成 `class="plus"`
在 `<tbody id="ksearchboxmain">` 中追加 `<tbody id="ksearchboxmain" style="display:none">`

完成后，代码变为：

```php
<td class="colhead" align="center" colspan="2">  
    <a href="javascript: klappe_news('searchboxmain')">
        <img class="plus" src="pic/trans.gif" id="picsearchboxmain" alt="Show/Hide" />
        <?php echo $lang_torrents['text_search_box'] ?>
    </a>
</td>
</tr>
</tbody>
<tbody id="ksearchboxmain" style="display:none">
```

![关闭搜索箱](https://imgsa.baidu.com/forum/w%3D580/sign=de05584a113853438ccf8729a313b01f/046d5fd5ad6eddc4baf51fdd38dbb6fd5266331b.jpg)

## 增加种子类别快速搜索功能
应用此风格的有 `HDcity` 、`高清第一` 等
`NexusPhp` 种子在高亮模式下本来就有此功能，不过大多数站点缺省模式下并不流行种子高亮显示方式（本人所了解的有 `HDStar` 及部分刚运营的PT站），通过颜色来判断种子类别还是有难度的！  
最流行的还是以`字符`和`图标`显示（可以通过配置数据库`user`表来预置），但在这两种模式下恰恰没有快速搜索的字符按钮，不过我们可以通过修改代码来增加它：

打开主目录下的 `torrents.php` 文件，查找 `1075-1077` 行，来到这里

```php
if ($count) {
    print($pagertop);
    if ($sectiontype == $browsecatmode)
在上面中第二行与第三行之间插入“print("<p align=\"center\"> ".$lang_functions['text_promoted_torrents_note']."</p>\n");” //这一句是完全引用作者在高亮模式下内建的语句！
```

修改后代码如下：
```php
if ($count) {
    print($pagertop);
    print("<p align=\"center\"> ".$lang_functions['text_promoted_torrents_note']."</p>\n"); //此处是在搜索箱下部位置插入，你也可以选择在其他位置插入！
    if ($sectiontype == $browsecatmode)
    torrenttable($res, "torrents");
```

![增加种子类别快速搜索功能](https://imgsa.baidu.com/forum/w%3D580/sign=2a738e2e5243fbf2c52ca62b807eca1e/114ce96eddc451da6de4a7cdb7fd5266d016321b.jpg)


## 改变置顶种子格子颜色
应用此风格的有`CHDbits`、`皇后`等
改变颜色有助于用户更醒目、更直观的区分置顶帖（当然方法有很多，看个人喜好，部分PT站使用“置顶”字符，`CHDbits`还更换了置顶标识），前些时间看到有人评价皇后的置顶种子颜色很“媚”，决定自己也改一改：
打开主目录`/include/functions.php`，查找`3021-3023`行，来到这里：

```php
$id = $row["id"];
$sphighlight = get_torrent_bg_color($row['sp_state']);
print("<tr" . $sphighlight . ">\n");
```

修改程序为（用下面五行替换上面3行）：

```php
$id = $row["id"];
if ($row['pos_state'] == 'sticky' && $CURUSER['appendsticky'] == 'yes') {
    $sphighlight = " class='twoupfree_bg'";
}
else $sphighlight = get_torrent_bg_color($row['sp_state']);
print("<tr" . $sphighlight . ">\n");
```

注意：上面`$sphighlight = " class='twoupfree_bg'"; 中的class='twoupfree_bg'`是赋予置顶种子格子的显示颜色，属性在风格目录下的`theme.css`文件中定义，可以根据下面`sample`自行添加，然后替换上面代码中的`“'twoupfree_bg'”`（注意每种风格都要添加），如果嫌麻烦就直接借用种子类型的一种，本例选择了`twoupfree_bg`，即与2X上传颜色相同。

```php
.free{color:#f0cc00}
.twoup{color:#aaaaaa}
.twoupfree{color:#99cc66}
.halfdown{color:#7c7ff6}
.twouphalfdown{color:#7ad6ea}
.thirtypercent{color:#70328d}
.free_bg{background-color:#ffff99}
.twoup_bg{background-color:#dddddd}
.twoupfree_bg{background-color:#ccff99}
.halfdown_bg{background-color:#cccdf8}
.twouphalfdown_bg{background-color: #96dbea}
.thirtypercentdown_bg{background-color:#ddc3ea}
```

> 注：在黑色风格下无效。

![改变置顶种子格子颜色1](https://imgsa.baidu.com/forum/w%3D580/sign=d2e2a73f2cf5e0feee1889096c6134e5/bac8bc198618367af849d7fb2f738bd4b21ce569.jpg)

![改变置顶种子格子颜色2](https://imgsa.baidu.com/forum/w%3D580/sign=19d4b0e3e1fe9925cb0c695804a95ee4/f280c218367adab46910b3658ad4b31c8601e469.jpg)


## 在种子主题上附加促销种子过期时间提示
应用此风格的有`CHDbits`、`HDcity`、`皇后`等 `Nexusphp`本来就有促销种子的过期提示（字符及图标显示模式下），只需要用鼠标放在促销类别字符或图标上就可以进行淡入淡出提示，不过用户要想了解每一个种子过期时间，都需要用鼠标进行查看，不太方便，对此可以对代码进行适当修改，使其附加到种子主/副标题上进行显示，这样看起来就直观得多了：

打开`include/functions.php`文件，查找`3093-3095`行（不同源码版本可能行号略有差异），来到这里：

```php
print(“<td class=\”rowfollow\” width=\”100%\” align=\”left\”><table class=\”torrentname\” width=\”100%\”><tr” . $sphighlight . “><td class=\”embedded\”>”.$stickyicon.”<a $short_torrent_name_alt $mouseovertorrent href=\”details.php?id=”.$id.”&amp;hit=1\”><b>”.htmlspecialchars($dispname).”</b></a>”);
$sp_torrent = get_torrent_promotion_append($row[‘sp_state’],””,true,$row[“added”], $row[‘promotion_time_type’], $row[‘promotion_until’]);
$picked_torrent = “”;
```

注意，上面红色字体用到的函数`get_torrent_promotion_append()`即是种子附加促销提示的显示模块。

Step1：添加一个功能函数：  
为了不改变原来的功能，我们需要在后面copy一下该函数并进行修改(函数命名为`get_torrent_promotion_append_sub()`，并插入到原函数附近)，修改后的代码如下：

```php
function get_torrent_promotion_append_sub($promotion = 1,$forcemode = “”,$showtimeleft = false, $added = “”, $promotionTimeType = 0, $promotionUntil = ”){
    global $CURUSER,$lang_functions;
    global $expirehalfleech_torrent, $expirefree_torrent, $expiretwoup_torrent, $expiretwoupfree_torrent, $expiretwouphalfleech_torrent, $expirethirtypercentleech_torrent;
    $sp_torrent_sub = “”;
    $onmouseover_sub = “”;
    if (get_global_sp_state() == 1) {
        switch ($promotion){
            case 2: {
                if ($showtimeleft && (($expirefree_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                    if ($promotionTimeType == 2) {
                        $futuretime = strtotime($promotionUntil);
                    } else {
                        $futuretime = strtotime($added) + $expirefree_torrent * 86400;
                    }
                    $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                    if ($timeout)
                        $onmouseover_sub = ” (<font color=’#0000FF’>”.$lang_functions[‘text_will_end_in’].$timeout.”</font>”.”)”; //free类型字符显示为蓝色，可以更改它
                    else $promotion = 1;
                }
            break;
            }
            case 3: {
                if ($showtimeleft && (($expiretwoup_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                    if ($promotionTimeType == 2) {
                        $futuretime = strtotime($promotionUntil);
                    } else {
                        $futuretime = strtotime($added) + $expiretwoup_torrent * 86400;
                    }
                    $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                    if ($timeout)
                        $onmouseover_sub = ” (“.$lang_functions[‘text_will_end_in’].$timeout.”)”;
                    else $promotion = 1;
                }
            break;
            }
            case 4: {
                if ($showtimeleft && (($expiretwoupfree_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                    if ($promotionTimeType == 2) {
                        $futuretime = strtotime($promotionUntil);
                    } else {
                        $futuretime = strtotime($added) + $expiretwoupfree_torrent * 86400;
                    }
                    $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                    if ($timeout)
                        $onmouseover_sub = ” (<font color=’#00CC66′>”.$lang_functions[‘text_will_end_in’].$timeout.”</font>”.”)”; //2XFree 显示为青色，可以更改它
                    else $promotion = 1;
                }
            break;
            }
            case 5: {
                if ($showtimeleft && (($expirehalfleech_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                    if ($promotionTimeType == 2) {
                        $futuretime = strtotime($promotionUntil);
                    } else {
                        $futuretime = strtotime($added) + $expirehalfleech_torrent * 86400;
                    }
                    $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                    if ($timeout)
                        $onmouseover_sub = ” (“.$lang_functions[‘text_will_end_in’].$timeout.”)”;
                    else $promotion = 1;
                }
            break;
            }
            case 6:{
                if ($showtimeleft && (($expiretwouphalfleech_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                    if ($promotionTimeType == 2) {
                        $futuretime = strtotime($promotionUntil);
                    } else {
                        $futuretime = strtotime($added) + $expiretwouphalfleech_torrent * 86400;
                    }
                    $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                    if ($timeout)
                        $onmouseover_sub = ” (“.$lang_functions[‘text_will_end_in’].$timeout.”)”;
                    else $promotion = 1;
                }
            break;
            }
            case 7: {
            if ($showtimeleft && (($expirethirtypercentleech_torrent && $promotionTimeType == 0) || $promotionTimeType == 2)) {
                if ($promotionTimeType == 2) {
                    $futuretime = strtotime($promotionUntil);
                } else {
                    $futuretime = strtotime($added) + $expirethirtypercentleech_torrent * 86400;
                }
                $timeout = gettime(date(“Y-m-d H:i:s”, $futuretime), false, false, true, false, true);
                if ($timeout)
                    $onmouseover_sub = ” (“.$lang_functions[‘text_will_end_in’].$timeout.”)”;
                else $promotion = 1;
            }
            break;
            }
        }
    }

    if (($CURUSER[‘appendpromotion’] == ‘word’ && $forcemode == “” ) || $forcemode == ‘word’){
        if(($promotion==2 && get_global_sp_state() == 1) || get_global_sp_state() == 2){
            $sp_torrent_sub = $onmouseover_sub;
        } elseif(($promotion==3 && get_global_sp_state() == 1) || get_global_sp_state() == 3){
            $sp_torrent_sub = $onmouseover_sub;
        } elseif(($promotion==4 && get_global_sp_state() == 1) || get_global_sp_state() == 4){
            $sp_torrent_sub = $onmouseover_sub;
        } elseif(($promotion==5 && get_global_sp_state() == 1) || get_global_sp_state() == 5){
            $sp_torrent_sub = $onmouseover_sub;
        } elseif(($promotion==6 && get_global_sp_state() == 1) || get_global_sp_state() == 6){
            $sp_torrent_sub = $onmouseover_sub;
        } elseif(($promotion==7 && get_global_sp_state() == 1) || get_global_sp_state() == 7){
            $sp_torrent_sub = $onmouseover_sub;
        }
    } elseif (($CURUSER[‘appendpromotion’] == ‘icon’ && $forcemode == “”) || $forcemode == ‘icon’){
        if(($promotion==2 && get_global_sp_state() == 1) || get_global_sp_state() == 2)
            $sp_torrent_sub = $onmouseover_sub;
        elseif(($promotion==3 && get_global_sp_state() == 1) || get_global_sp_state() == 3)
            $sp_torrent_sub = $onmouseover_sub;
        elseif(($promotion==4 && get_global_sp_state() == 1) || get_global_sp_state() == 4)
            $sp_torrent_sub = $onmouseover_sub;
        elseif(($promotion==5 && get_global_sp_state() == 1) || get_global_sp_state() == 5)
            $sp_torrent_sub = $onmouseover_sub;
        elseif(($promotion==6 && get_global_sp_state() == 1) || get_global_sp_state() == 6)
            $sp_torrent_sub = $onmouseover_sub;
        elseif(($promotion==7 && get_global_sp_state() == 1) || get_global_sp_state() == 7)
            $sp_torrent_sub = $onmouseover_sub;
    }
    return $sp_torrent_sub;
}
```

Step2：功能调用

```php
$banned_torrent = ($row[“banned”] == ‘yes’ ? ” (“.$lang_functions[‘text_banned’].”)” : “”);
print($banned_torrent.$picked_torrent.$sp_torrent);
```

两行之间擦汗如代码：

```php
$sp_torrent_sub = get_torrent_promotion_append_sub($row[‘sp_state’],””,true,$row[“added”], $row[‘promotion_time_type’], $row[‘promotion_until’]); //调用新的函数，获取过期时间
```

最后一行修改为：

```php
print($banned_torrent.$picked_torrent.$sp_torrent.$sp_torrent_sub); //在主标题上附加显示过期提示
```

修改后的代码：

```php
$banned_torrent = ($row[“banned”] == ‘yes’ ? ” (“.$lang_functions[‘text_banned’].”)” : “”);
$sp_torrent_sub = get_torrent_promotion_append_sub($row[‘sp_state’],””,true,$row[“added”], $row[‘promotion_time_type’], $row[‘promotion_until’]);
print($banned_torrent.$picked_torrent.$sp_torrent.$sp_torrent_sub);
```

![](https://imgsa.baidu.com/forum/w%3D580/sign=94782ced42166d223877159c76220945/6618c40a19d8bc3e70b6adec838ba61ea9d345f7.jpg)

![](https://imgsa.baidu.com/forum/w%3D580/sign=7078dd006c224f4a5799731b39f69044/8a935dd8bc3eb135f1791c9da71ea8d3fc1f44f7.jpg)

![](https://imgsa.baidu.com/forum/w%3D580/sign=8becadec838ba61edfeec827713597cc/716d4ed162d9f2d36df58fc9a8ec8a136227cc4d.jpg)


---

> 参考来源：  
> [[ 百度贴吧 ]【技术转】五步打造你个性化的Nexusphp PT站](http://tieba.baidu.com/p/2178676003)


---
> to be continued...