---
title: Hexo问题归纳
date: 2018-04-20 11:14:11
tags:
  - Hexo
categories:
  - TechnicalResearch
  - Hexo
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-6kogj6.jpg
---
# hexo版本更新之后，部分模块失效
错误原因：  
> hexo版本更新之后，部分模块会因为新特性的改动而失效

解决方案：  
> npm全面更新所依赖的工具库即可

```
npm update
```

# 执行命令hexo server，提示：Usage: hexo …. 提示找不到该指令
解决方法: 在Hexo 3.0 后server被单独出来了，需要安装server，安装的命令如下：  
```
npm install hexo-server –save  
```

安装此server后再试，问题解决。

# 执行：hexo server，启动了服务，在浏览器输入本地地址访问，看到白板和Cannot GET / 几个字

原因是由于2.6以后就更新了，我们需要手动配置些东西，我们需要输入下面三行命令：

```
npm install hexo-renderer-ejs --save

npm install hexo-renderer-stylus --save

npm install hexo-renderer-marked --save
```

这时候重新启动本地服务在访问。  
或者： 在空文件夹下，执行  
```
hexo init -- npm install
```

# 端口被占用  
错误原因：  
> localhost:4000 端口被占用  

解决方案:  
> 可执行 hexo s -p 5000 修改成5000 端口

# YAMLException: incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line at line 1, column 33:

解决方案：  
> （1）出现这种情况，一般都是缺少空格，在:冒号之后要有空格！检查x行y列附近的冒号，其之后是否跟了空格。  
> （2）仔细检查_config.yml文件中所有冒号后面的空格，格式很严格，必须是只有一个，半角。不管是多了还是少了都会报错，这是yml解释器所定义的语法。如果不确定的话，将输入法调整到英文模式，删除所有冒号后面的空格重新输入，不要使用Tab。

# ValidationError: ‘null’ is not a string!

解决方案：  
> 一般都是因为文章无内容，可能是因为在这篇博客文章中，有某些属性没有填写，比如author属性，tag属性，categories属性等，导致该属性是空的，即null，所以报错。  
> 友情提示：如果你是用MarkdownPad 2来进行博文写作，可能在打开该md文件之后，对文件名进行了修改，导致出现了两篇文章。就会出现错误。

# 执行hexo g命令后，报错：incomplete explicit mapping pair; a key node is missed

解决方案：  
> 主题目录下所有yml文件中所有有空格的字段都用双引号括起来，尤其注意languages下面的yml文件。

# 系统升级nodejs后，项目中的node-sass报错的问题
起因：  
在Manjaro系统自动更新了一波之后，准备执行 hexo g，发生了以下错误


```zsh
Module build failed: Error: Missing binding 

Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js 13.x

Found bindings for the following environments:

Linux 64-bit with Node.js 10.x
```

解决办法：  

```zsh
npm rebuild node-sass
```

# extends includes/layout.pug block content 

```bash
extends includes/layout.pug block content   
recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug   
aside_content.aside_content include includes/aside.pug
```

解决方法：请下载安装
```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

# 報錯wordcount is not a function

請檢查是否安裝了wordcount插件 

```
npm i --save hexo-wordcount
```

---
> to be continued...