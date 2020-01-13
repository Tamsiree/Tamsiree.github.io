---
title: GFM语法
author: Tamsiree
description: GitHub 的 Markdown 语法在其标准的语法基础上做了扩充，称之为 GitHub Flavored Markdown ; 简称 GFM。 
tags:
  - TechnicalResearch
  - Markdown
  - GFM
categories:
  - TechnicalResearch
  - Markdown
  - GFM
date: 2017-07-18 12:44:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-ey66mo.jpg
---

# 前言
**GitHub** 的 Markdown 语法在其标准的语法基础上做了扩充，称之为 **GitHub Flavored Markdown** 。简称 `GFM` 。  

**GFM** 有site-in issues,comments,pull requests等功能，它与标准的Markdown有一些区别，并增加了些新的扩展功能，在Github中，除了`README`文件外，`issues` 和 `wiki` 均支持 Markdown 语法。

> 注意：
不同的 **Markdown引擎** 均有可能做了不同的渲染处理，本文仅以`Github`常用的 **Markdown** 来做举例说明，



<!-- more -->

# 疑问解答:

**提问 1:**  
　　我把大段文段复制到 MarkdownEditor.io 上进行重新编辑，再贴回 github 修改框后，发现格式依然是乱的，只不过由一种乱法变成了另一种乱法。  
>回答 1：  
>　　上网去查，发现GFM是一种独立于Markdown的语法。在一些语法的书写上，比如列表多重嵌套，并在其中多层插入注释字段时，语法与普通的　Markdown　语法还是有很大的差别的。之前学习Markdown的时候，虽然知道Markdown有很多变种语法，但是写的都只是一些简单的嵌套，并没有涉及三四重以上的嵌套，也没有在嵌套中插入注释，所以一直没觉得GFM和Mrakdown有什么区别。直到碰上了具体情况需要这种的复杂书写时，才暴露出了这个问题。

**提问 2:**  
　　用GFM书写简单语法时，用两个空格键就能代替Tab。空格键和Tab键常常可以多打也没关系。于是我在多重嵌套的时候依然这么干。。然后就悲剧了。。T T 
>回答 2:  
>　　在书写GFM时想要不犯错，缩进必须要严格采用Tab键（Tab键会等于超级多个空格，远不止四个）。Tab键既不可以多打也不可以少打。

**提问 3:**  
　　列表多重嵌套时，对其中某一项插入注释  
>回答 3:  
>　　如果注释句要与被注释的句项都是４个#字体大小的（注意：正常大小字体也会被当成前面加了4个#来识别），为了让转换器识别出这是两句从属关系的语句，则插入之前，该注释句要与被注释的句项间隔至少一行；如果注释句要与被注释的句项字体大小不一样，则可以不用空行。但是不论是哪种情况，该注释句都必须要比被注释的句项恰好多空一个Tab（只管敲Tab就好了，就算觉得每个Tab离得再宽，编辑器也会自动帮你识别清楚的；但是对列表树根进行注释时，该注释句 却不能 比被注释的句项多空一个Tab。。。没搞懂为什么会这样　T T ）

**提问 4:**  
　　某些时候会把语法符号也跟着显示出来，或者一些语法转换成 H5 时错乱  
>回答 4:  
>　　可能是输入时，输入状态还是处于“中文”状态下。像空格，在“中文”状态下打出的一个空格距离和“英文”状态下打出的一个空格距离是不一样的。

**提问 5:**  
　　因为Markdown系列的语法最后要被转换成h5，所有可以在 Markdown 系列(包括GFM)文本中插入h5字段，以作为Markdown系列语法的补充，来显示出更多的效果。然而当我想在GFM写的表格中的某个空里，插入h5的代码写的列表时，发现怎么也写不出这个效果。  
>回答 5:  
>　　H5 代码与 GFM 代码至少间隔一行。也就是说，Markdown系列文本的原语法字段和插入的h5字段是分开来识别的，其中前者会被转换。因而h5字段只能在全局文本的基础上插入，并不可以在原语法字段的代码中强行插入。

**提问 6:**  
　　写语法时，经常会牵一发而动全身，语法错误累积多了之后，会给修改造成很大麻烦。因为任何一种显示出来的错误，都可能是多个语法错误的综合作用结果。  
>回答 6:  
>　　规范书写很重要！语法正确要从娃娃抓起！！

**提问 7:**  
　　有时候在修改代码时，改了一个地方好像把前面字段的显示改过来了，改到后面又发现前面字段的显示重新乱了。或者是感觉后面字段的语法完全没问题，但是就是显示出来不对（比如　####　会一直被直接显示出来，或者三级列表项会一直被显示为二级列表项）  
>回答 7:  
>　　还是因为语法错误累积得太多，牵一发而动全身。还是那句，规范书写很重要！

**提问 8:**  
　　连续７个 # 后，无法转换成更小号的字体  
>回答 8:  
>　　还是因为语法错误累积得太多，牵一发而动全身。还是那句，规范书写很重要！

**提问 9:**  
　　输入时，发现刚刚从 句首 输入的一个单字符，闪了一下又消失了  
>回答 9:  
>　　把前一个句法的末位字符改成以　'英文输入状态'　输入

---

# 横线示例
```
Markdown示例 --------------------
```

效果：

--------------------

```
Markdown示例 ============
```

效果：

============

```
Markdown示例 ****************** 或 ---
```

效果：

******************


> 由于不同引擎渲染效果不同，建议只使用 --------- 来表示横线，因为实测 `---------` 是最通用的语法

---

# 标题
```
    一级标题
    ====
    二级标题
    ----
```

```
    # 一级标题  
    ## 二级标题  
    ### 三级标题  
    #### 四级标题  
    ##### 五级标题  
    ###### 六级标题
```

## 居中标题(简书和GFM语法不支持）

> 由于markdown 定义全支持html标记，所以你可以直接在markdown里面写html语法。

`<center>居中渲染</center>`  

<center>居中渲染</center>

---

# 文本
## 换行
### 实现方式一  
有一些引擎在渲染机制上是有出入的，直接回车不能换行，  
但是你可以在上一行文本后面补两个空格，  
这样下一行的文本就换行了。
或者就是在两行文本直接加一个空行。
也能实现换行效果，不过这个行间距有点大。

> 注意，关于换行，文字默认定义为段落，也就是说你如果想要段落换行的话，需要输入换行，否则你的文本是默认为一个段落，是否换行取决于渲染引擎以及显示宽度。

### 实现方式二
你可以添加HTML标记`<br>`在需要手动换行的位置，也可以直接输入换行符，切换到下一行；要注意的是：你的编辑器是否允许 你在编辑段落的时候输入 换行符。

Markdown示例
```
	《爱情公寓》是上海电影集团公司出品，<br>上海高格影视制作有限公司承制的都市青春喜剧，由汪远编剧、韦正执导，陈赫、娄艺潇、孙艺洲、李金铭、邓家佳、王传君、金世佳、赵霁、李佳航、赵文琪领衔主演。
```

显示结果：
《爱情公寓》是上海电影集团公司出品，<br>上海高格影视制作有限公司承制的都市青春喜剧，由汪远编剧、韦正执导，陈赫、娄艺潇、孙艺洲、李金铭、邓家佳、王传君、金世佳、赵霁、李佳航、赵文琪领衔主演。

## 文本块
### 语法1：

在连续几行的文本开头加入2个Tab或者4个空格。（不推荐，实际上tab与空格有些渲染引擎并不支持)

```
    <tab><tab>欢迎到访
    <space><space><space><space>很高兴见到您
    <空格><空格><空格><空格>祝您生活愉快
```

```
    欢迎到访
    很高兴见到您
    祝您生活愉快
```

### 语法2

使用一对各三个的反引号`就是1按键左边的~键，位于你电脑上esc键下方的按键：[~]`

反引号引用文本块
```
    欢迎到访
    我是Tamsiree
    你好呀
```

> 当然你也可以在代码块中使用各种语言标记，如果你的markdown引擎足够强大，会渲染出不同效果

## 文字高亮

文字高亮功能能使行内部分文字高亮，使用一对反引号。 一般我们会在一些关键位置加亮提示用户，也可以做网站的tag标签  
语法：

```
    `linux` `网络编程` `socket` `epoll`
```

效果：`linux` `网络编程` `socket` `epoll`

## 斜体、粗体、删除线

### 语法效果

```
*斜体1*
```

*斜体1*

```
_斜体2_
```

_斜体2_

```
**粗体1**
```

**粗体1**

```
__粗体2__
```

__粗体2__

```
这是一个 ~~删除线~~
```

这是一个 ~~删除线~~

```
***斜粗体1***
```

***斜粗体1***

```
___斜粗体2___
```

___斜粗体2___

```
***~~斜粗体删除线1~~***
```

***~~斜粗体删除线1~~***

```
~~***斜粗体删除线2***~~
```

~~***斜粗体删除线2***~~

>    斜体、粗体、删除线可混合使用
    

# 图片

基本格式：

```
    ![alt](URL title)
```

alt和title即对应HTML中的alt和title属性（都可省略）：

*   alt表示图片显示失败时的替换文本
*   title表示鼠标悬停在图片时的显示文本（注意这里要加引号）

URL即图片的url地址，如果引用本仓库中的图片，直接使用**相对路径**就可了，如果引用其他github仓库中的图片要注意格式，即：`仓库地址/raw/分支名/图片路径`，(此处已使用 CDN加速 `Jsdelivr` )如：

```
 https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/miku.png
```

## 语法效果

```
![miku](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/miku.png)
```

![miku](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/miku.png)

# 链接

## 链接外部URL

### 语法效果

```
[技术博客](https://tamsiree.github.io/ "悬停显示")
```

[技术博客](https://tamsiree.github.io/)

# 锚点

其实呢，每一个标题都是一个锚点，和HTML的锚点（`#`）类似，比如我们

语法效果

```
[回到顶部](#)
```

[回到顶部](#)

不过要注意，标题中的英文字母都被转化为**小写字母**了。

> 以前GitHub对中文支持的不好，所以中文标题不能正确识别为锚点，但是现在已经没问题啦！

# 列表
## 无序列表

*   昵称：果夏虾仁

*   别名：隔壁老王

*   英文名：Jelly

## 多级无序列表

*   编程语言
    *   脚本语言
        *   Python

## 有序列表

### 一般效果

就是在数字后面加一个点，再加一个空格。不过看起来起来可能不够明显。  
面向对象的三个基本特征：

1.  封装
2.  继承
3.  多态

### 多级有序列表

和无序列表一样，有序列表也有多级结构：

1.  这是一级的有序列表，数字1还是1
    1.  这是二级的有序列表，阿拉伯数字在显示的时候变成了罗马数字
        1.  这是三级的有序列表，数字在显示的时候变成了英文字母

## 复选框列表

*   [x] 需求分析
*   [x] 系统设计
*   [x] 详细设计
*   [ ] 编码
*   [ ] 测试
*   [ ] 交付

您可以使用这个功能来标注某个项目各项任务的完成情况。

> Tip:
> 
> > 在GitHub的**issue**中使用该语法是可以实时点击复选框来勾选或解除勾选的，而无需修改issue原文。

# 块引用
## 常用于引用文本   

> **“端”（endian）的起源**  
> 以下是Jonathan Swift在1726年关于大小端之争历史的描述：  
> “……下面我要告诉你的是，Lilliput和Blefuscu这两大强国在过去36个月里一直在苦战。战争开始是由于以下的原因：我们大家都认为，吃鸡蛋前，原始的方法是打破鸡蛋较大的一端，可是当今的皇帝的祖父小时候吃鸡蛋，一次按古法打鸡蛋时碰巧将一个手指弄破了，因此他的父亲，当时的皇帝，就下了一道敕令，命令全体臣民吃鸡蛋时打破较小的一端，违令者重罚。”


## 块引用有多级结构

> 数据结构
> 
> > 树
> > 
> > > 二叉树
> > > 
> > > > 平衡二叉树
> > > > 
> > > > > 满二叉树

# 代码高亮

在三个反引号后面加上编程语言的名字，另起一行开始写代码，最后一行再加上三个反引号。

> Markdown编辑器的代码块在识别上需要一些特别的处理，要加上对应的关键字才可以识别出各种语言，再以不同形式的高亮色来标记

|名称|关键词|
| :---: | :---: |
| CSS   | css |
| PHP   | php |
| SQL   | sql |
| C | c , cpp |
| Java  | java |
| Scala | scala |
| Swift | swift |
| matlab | matlab |
| Groovy | groovy |
| R | r , s , splus |
| GO    | go , golang |
| text | text , plain |
| Python | py , python |
| Erlang | erl , erlang |
| JavaFX | jfx , javafx |
| Perl | perl , pl , Perl |
| VisualBasic | vb , vbnet |
| Shell | sh , bash , shell |
| SASS & SCSS | sass , scss |
| AppleScript | applescript |
| diff & patch | diff patch |
| F# | f# , f-sharp , fsharp |
| Objective C | objc , obj-c |
| ColdFusion | coldfusion , cf |
| C#    | c# , c-sharp , csharp |
| Delphi | delphi , pascal , pas |
| Ruby  | ruby , rails , ror , rb |
| XML   | xml , xhtml , xslt , html |
| JavaScript | js , jscript , javascript |
| ActionScript 3.0 | actionscript3 , as3 |

## 示例

```java
//java
public static void main(String[]args){} 
```

```gradle
dependencies {
	//基础工具库
	implementation "com.github.tamsiree.RxTool:RxKit:2.3.9"
	//UI库
	implementation "com.github.tamsiree.RxTool:RxUI:2.3.9"
	//相机库
	implementation "com.github.tamsiree.RxTool:RxCamera:2.3.9"
	//功能库（Zxing扫描与生成二维码条形码 支付宝 微信）
	implementation "com.github.tamsiree.RxTool:RxFeature:2.3.9"
	//ArcGis For Android工具库（API：100.1以上版本）
	implementation "com.github.tamsiree.RxTool:RxArcGisKit:2.3.9"
}
```

```c    
//c    
int main(int argc, char *argv[]) 
```

```bash
#bash
echo "hello GitHub" 
```

```javascript
//javascript
document.getElementById("myH1").innerHTML="Welcome to my Homepage"; 
```

```cpp
//cpp
string &operator+(const string& A,const string& B) 
```


# 表格

|表头1|表头2|
|-|-|
|表格单元|表格单元|
|表格单元|表格单元|

## 表格对齐

表格可以指定对齐方式

|左对齐|居中|右对齐|
| :--- | :----: | ---: |
|左对齐|居中|右对齐|

## 混合其他语法

表格单元中的内容可以和其他大多数GFM语法配合使用，如：

### 使用普通文本的删除线，斜体等效果

|名字|描述|
|-|-|
|Help|~~Display the help window.~~|
|Close|_Closes_ a window|

#### 表格中嵌入图片（链接）


|图片|描述|
|----|---|
|![miku](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/miku.png)|miku|

# 表情

Github的Markdown语法支持添加emoji表情，输入不同的符号码（两个冒号包围的字符）可以显示出不同的表情。

比如`:blush:`，可以显示 :blush:  
> ：blush： ----->  😊

具体每一个表情的符号码，可以查询GitHub的官网 [官网](http://www.emoji-cheat-sheet.com)。

但是这个网页每次都打开**奇慢**。。所以我整理到了本博客中，大家可以直接在此查看 [[Markdown内使用Emoji表情]](https://tamsiree.com/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情)。

# diff语法

版本控制的系统中都少不了diff的功能，即展示一个文件内容的增加与删除。  
GFM中可以显示的展示diff效果。使用绿色表示新增，红色表示删除。

其语法与代码高亮类似，只是在三个反引号后面写diff，  
并且其内容中，以 `+`开头表示新增，`-`开头表示删除。

效果如下：
```diff
    + 鸟宿池边树，僧敲月下门
    - 鸟宿池边树，僧推月下门
```

# 补充部分
## 文本添加下划线
Markdown 并无下划线的原生语法，因为会和链接的默认样式产生混淆。

* 方法1：使用行内 HTML的 `<u></u>` 标签可以快速添加下划线，但是
HTML5 规范建议开发者尽量使用其他元素替代 u 元素。而且使用行内 HTML的 `<u></u>`的下划线很难自定义其他效果，比如颜色

```html
<u>Markdown行内文字</u>
```

效果：  
<u>Markdown行内文字</u>

* 方法2（推荐）：由于方案1的不完美，因此我个人建议那些喜欢高颜值排版的朋友，可以使用html的span标签、设置行内CSS的border-bottom属性 来添加下划线。这种方式自定义程度最高。

```html
<span style="border-bottom:2px dashed blue;">Markdown行内文字</span>
```
效果：  
<span style="border-bottom:2px dashed blue;">Markdown行内文字</span>


---
> to be continued...