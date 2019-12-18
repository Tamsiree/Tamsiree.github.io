---
title: Html常用知识归纳
date: 2018-10-21 21:34:52
description: 这是对用过的一些Html前端知识的归纳
tags:
  - Html
categories:
  - Technical Research
  - Html
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-5wd977.jpg
---
# 前言
这是对用过的一些Html前端知识的归纳。

# 设置网页标签页图标
设置网页在浏览器标签头的图标，通常说favicon.icon
在头文件中添加以下代码:

{% codeblock lang:html %}
    <link rel="icon" href="Images/wangyi.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="Images/wangyi.ico" type="image/x-icon" />
{% endcodeblock %}

# Input标签
## Input标签文本值的变更监听

{% codeblock lang:javascript %}
document.getElementById("myInput").addEventListener("input", myFunction);
function myFunction() {
  alert("input 输入框值已发生变化。");
}
{% endcodeblock %}  

## Input标签限制输入文本类型

### 限制为输入数字
{% codeblock lang:html %}
<input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')">
{% endcodeblock %}  

### 限制为输入英文
{% codeblock lang:html %}
<input type="text" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')">
{% endcodeblock %}  

### 限制为输入中文
{% codeblock lang:html %}
<input type="text" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')">
{% endcodeblock %}  

### 限制为输入数字和英文
{% codeblock lang:html %}
<input class=input maxLength=12 size=15 name=username id="username" onKeyUp="value=value.replace(/[\W]/g,'')">
{% endcodeblock %}  

### 限制为输入 数字 英文 中文
{% codeblock lang:html %}
<input onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')">
{% endcodeblock %}  

# 提示信息
## 使用 :hover::before 显示提示信息
{% codeblock lang:html %}
<style>
    span[data-title]{
        position: relative;
    }
    span[data-title]:hover::before{
        position: absolute;
        content: attr(data-title);
        top: -200%;
        left: 50%;
        transform: translateX(-50%);
        height: 32px;
        line-height: 32px;
        white-space: nowrap;
        background: #26a2ff;
        color: #fff;
        padding: 0 8px;
        border-radius: 4px;
    }
    span[data-title]:hover::after{
        position: absolute;
        content: '';
        top: calc(-200% + 32px);
        left: 50%;
        transform: translateX(-50%);
        border-top: 10px solid #26a2ff;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
</style>
<p>hello,<span data-title="我是提示信息！">请把鼠标放到我身上！</span></p>
{% endcodeblock %}  

预览效果:  

> ![:hover::before 显示提示信息](https://lvfan.xyz/html_css_youhua/htmlyouhua4.png)

# 性能优化
1. 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。

2. 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数

3. 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。

4. 当需要设置的样式很多时设置className而不是直接操作style。

5. 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。

6. 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。

7. 图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳。

8. 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。

    对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

## content方面

1. 减少HTTP请求：合并文件、CSS精灵、inline Image
2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
3. 避免重定向：多余的中间访问
4. 使Ajax可缓存
5. 非必须组件延迟加载
6. 未来所需组件预加载
7. 减少DOM元素数量
8. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
9. 减少iframe数量
10. 不要404

## Server方面

1. 使用CDN
2. 添加Expires或者Cache-Control响应头
3. 对组件使用Gzip压缩
4. 配置ETag
5. Flush Buffer Early
6. Ajax使用GET进行请求
7. 避免空src的img标签

## Cookie方面

1. 减小cookie大小
2. 引入资源的域名不要包含cookie

## css方面

1. 将样式表放到页面顶部
2. 不使用CSS表达式
3. 使用不使用@import
4. 不使用IE的Filter

## Javascript方面

1. 将脚本放到页面底部
2. 将javascript和css从外部引入
3. 压缩javascript和css
4. 删除不需要的脚本
5. 减少DOM访问
6. 合理设计事件监听器

## 图片方面

1. 优化图片：根据实际颜色需要选择色深、压缩
2. 优化css精灵
3. 不要在HTML中拉伸图片
4. 保证favicon.ico小并且可缓存

## 移动方面

1. 保证组件小于25k
2. Pack Components into a Multipart Document

# 自定义组件
## 数字滚动效果

{% codeblock lang:html %}
<template>
    <ul class="number-roll" :style="{height: height + 'px'}" v-html="strHtml"></ul>
</template>

<script>
    export default {
        props: {
            number: '',
            height: {
                type: String,
                default: '45'
            },
            time: {
                type: Number,
                default: 2000
            }
        },
        data() {
            return {
                hash: '',
                arr: [],
                strHtml: ''
            }
        },
        watch: {
            number: function (newValue, oldValue) {
                this.startDom();
            }
        },
        methods: {
            toHash() {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                let str = '';
                for (let i = 0; i < 20; i++) {
                    str += arr[parseInt(Math.random() * arr.length)]
                }
                this.hash = str;
            },
            toNumber() {
                let arr = [];
                for (let i = 0; i < this.number.length; i++) {
                    arr.push(this.number.charAt(i))
                }
                this.arr = arr;
            },
            dom() {
                let str = '';
                for (let i = 0; i < this.arr.length; i++) {
                    if (parseInt(this.arr[i]) >= 0) {
                        str += `<li class="${this.hash}" style="display: flex;flex-direction: column;" data-value="${this.arr[i]}">
                                    <span style="flex: 0 0 ${this.height}px">0</span>
                                    <span style="flex: 0 0 ${this.height}px">1</span>
                                    <span style="flex: 0 0 ${this.height}px">2</span>
                                    <span style="flex: 0 0 ${this.height}px">3</span>
                                    <span style="flex: 0 0 ${this.height}px">4</span>
                                    <span style="flex: 0 0 ${this.height}px">5</span>
                                    <span style="flex: 0 0 ${this.height}px">6</span>
                                    <span style="flex: 0 0 ${this.height}px">7</span>
                                    <span style="flex: 0 0 ${this.height}px">8</span>
                                    <span style="flex: 0 0 ${this.height}px">9</span>
                                </li>`
                    } else {
                        str += `<span>${this.arr[i]}</span>`;
                    }
                }
                this.strHtml = str;
            },
            startDom() {
                this.toHash();
                this.toNumber();
                this.dom();
            },
            animate() {
                let doms = document.getElementsByClassName(this.hash);
                for (let i = 0; i < doms.length; i++) {
                    let value = Number(doms[i].dataset.value);
                    let scrollTop = Number(this.height) * value;
                    // this.scroll(doms[i], scrollTop);
                    this.flash(doms[i], scrollTop);
                }
            },
            // 数字滚动特效
            scroll(dom, scrollTop) {
                let top = 0;
                let topAdd = scrollTop / this.time * 20;
                let interval = setInterval(() => {
                    if (top < scrollTop) {
                        top = top + topAdd;
                        dom.style.marginTop = '-' + top + 'px';
                    } else {
                        dom.style.marginTop = '-' + scrollTop + 'px';
                        clearInterval(interval);
                    }
                }, 20);
            },
            // 数字跳动特效
            flash(dom, scrollTop) {
                let top = 0;
                let timeSplit = this.time * Number(this.height) / scrollTop;
                let interval = setInterval(() => {
                    if (top < scrollTop) {
                        top = top + Number(this.height);
                        dom.style.marginTop = '-' + top + 'px';
                    } else {
                        dom.style.marginTop = '-' + scrollTop + 'px';
                        clearInterval(interval);
                    }
                }, 300);
            }
        },
        mounted() {
            this.startDom();
        },
        updated() {
            this.animate();
        }
    }
</script>

<style lang="scss" scoped>
    .number-roll {
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
</style>
{% endcodeblock %}  

代码实例：  

{% codeblock lang:html %}
<numberRoll :number="9866.66"></numberRoll>
{% endcodeblock %}  