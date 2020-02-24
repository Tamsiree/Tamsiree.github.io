---
title: Android之Room库的使用
author: Tamsiree
date: 2020-02-22 14:29:49
description: 最近疫情待在家里，想着没事就做一个APP练练手，需要用到数据库的本地化方案，便尝试深入了解以下 Google官方的ORM库 `Room`。
tags:
  - TechnicalResearch
  - Android
  - Room
categories:
  - TechnicalResearch
  - Android
  - Room
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallroom25601440bg7e04c99.jpg
---
# 前言
最近疫情待在家里，想着没事就做一个APP练练手，需要用到数据库的本地化方案，便尝试深入了解以下 Google官方的ORM库 `Room`，配置和使用还算比较简单，没用过的可以查看 [官方文档](https://developer.android.google.cn/training/data-storage/room/),上手还算比较容易。可以参考Google官方在GitHub上的示例库 [[Android Room with a View]](https://codelabs.developers.google.com/codelabs/android-room-with-a-view/) ,一步一步非常清晰的展现了框架的架构与流程。

# 正文

# 问题归纳

> 新入手的库当然会遇到坑的啦！  

## 模糊查询的Sql语句拼写问题

本来一切增删改查都进行的很顺利，然后 APP 中有一个模糊搜索的功能。  
例如查找 person 表中 name 或者 name_pinyin 包含某字符串的所有用户，一般sql语句是这样

```sql
Select * From person Where Name Like %name% OR Name_Pinyin Like %name_pinyin%
```

在Android端里面一般用的数据库都是注解 @query ，后面拼上需要查询的语句，当然每个数据库框架要求的格式可能不一样，但是最终编译成的最终语句肯定是上面那种格式的。

终于，皇天不负有心人，最终经一个群里大佬提醒以及在Stack Overflow上面搜了一下，找到了最终答案，应该是这样的

```java
@Query("SELECT * FROM person WHERE Name LIKE '%' || :name || '%' OR Name_Pinyin LIKE '%' || :name_pinyin || '%'")
```

原来是用双竖杠去拼接，而不是加号,在sql语句拼接中:

> 在SQL中的SELECT语句中，可使用一个特殊的操作符来拼接两个列。  
> 根据你所使用的DBMS，此操作符可用加号（+）或两个竖杠（||）表示。  
> 在MySQL和MariaDB中，必须使用特殊的函数。  
> 说明：是+还是||？  
> Access和SQL Server使用+号。DB2、Oracle、PostgreSQL、SQLite和Open Office Base使用||。详细请参阅具体的DBMS文档。

`Stack Overflow`上的评论：  

![Stack Overflow](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/2998957-75ac0ad97fecc0c4.webp)

---

> 参考链接：  
> [[`Android—Room数据库（介绍）`]](https://www.jianshu.com/p/cfde3535233d)

---
> to be continued...
