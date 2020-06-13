---
title: RESTful
author: Tamsiree
date: 2020-06-13 09:31:43
description: RESTful是目前最流行的API设计规范，用于Web数据接口的设计。RESTful规范一种软件的架构风格，设计风格，而不是标准，为客户端和服务端的交互提供一组设计原则和约束条件。
tags:
  - TechnicalResearch
  - RESTful
categories:
  - TechnicalResearch
  - RESTful
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/duchu.jpg
---
# 前言
> RESTful是目前最流行的API设计规范，用于Web数据接口的设计。本文总结RESTful的特点，以及如何设计和使用RESTful风格的API。
> 
> RESTful规范一种软件的架构风格，设计风格，而不是标准，为客户端和服务端的交互提供一组设计原则和约束条件。

# 正文
## 面向资源编程

每个URL代表一种资源，URL中尽量不要用动词，要用名词，往往名词跟数据库表格相对应。

一般来说，数据库中的表都是同种记录的集合，所有API中的名词也应该使用复数。

举例来说，有一个API提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。

```html
https://api.example.com/v1/zoos
https://api.example.com/v1/animals
https://api.example.com/v1/employees
``` 

## HTTP动词

对于资源的具体操作类型，由HTTP动词表示。  
常用的HTTP动词有下面五个（括号里对应的sql命令）。

```html
GET（SELECT）：从服务器取出资源（一项或多项）。
POST（CREATE）：在服务器新建一个资源。
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
DELETE（DELETE）：从服务器删除资源。
``` 

## 在URL中体现版本

例如：

```html
https://www.bootcss.com/v1/
https://v1.bootcss.com/
```

## 在URL中体现是否是API

例如：

```html
https://www.bootcss.com/api/mycss
https://api.bootcss.com/mycss
```

## 在URL中的过滤条件

如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。

```html
?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件
```

## 尽量使用HTTPS

例如：

```html
https://www.bootcss.com/v1/mycss
```

## 响应时设置状态码

1. 信息，服务器收到请求，需要请求者继续执行操作
2. 成功，操作被成功接收并处理
3. 重定向，需要进一步的操作以完成请求
4. 客户端错误，请求包含语法错误或无法完成请求
5. 服务器错误，服务器在处理请求的过程中发生了错误

## 返回值

> GET请求 返回查到所有或单条数据
>
> POST请求 返回新增的数据
>
> PUT请求 返回更新数据
>
> PATCH请求 局部更新 返回更新整条数据
>
> DELETE请求 返回值为空

## 返回错误信息

如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。

```json
{
  "error": "Invalid API key"
}
``` 

## Hypermedia API

如果遇到需要跳转的情况，携带调转接口的URL。  
Hypermedi API的设计，比如github的API就是这种设计，访问 api.github.com 会得到一个所有可用的API的网址列表。

```json
{
  "current_user_url": "https://api.github.com/user",
  "authorizations_url": "https://api.github.com/authorizations",
  // ...
}
```

从上面可以看到，如果想获取当前用户的信息，应该去访问 api.github.com/user，就会得到下面的结果。

```json
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3/users/#get-the-authenticated-user"
}
```

## 其他

（1）API的身份认证应该使用OAuth 2.0框架

（2）服务器返回的数据格式，应该尽量使用JSON，避免使用XML

---
> to be continued...
