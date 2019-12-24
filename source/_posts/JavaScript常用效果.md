---
title: JavaScript常用效果
date: 2018-10-23 03:43:52
tags:
  - JavaScript
categories:
  - TechnicalResearch
  - JavaScript
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-w8epx6.jpg
---
# 正文

## JavaScript判断是否在当前标签页
> 不支持 IE 浏览器

```js
//判断是否在当前标签页
let hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
  state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
  state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
  state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
  state = "webkitVisibilityState";
}
// 添加监听器，在title里显示状态变化
document.addEventListener(
  visibilityChange,
  function() {
    if (document[state] === "visible") {
      document.title = "回来啦！";
    } else {
      document.title = "去哪了？";
    }
  },
  false
);
//初始化页面状态
document.title = "回来啦！";
```


---
to be continued...
