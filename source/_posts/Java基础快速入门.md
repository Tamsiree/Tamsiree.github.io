---
title: Java基础快速入门
author: Tamsiree
description: 前些日子有朋友想要了解一下JAVA，于是便整理了这篇文章。
tags:
  - Java
categories:
  - TechnicalResearch
  - Java
date: 2018-08-21 11:14:00
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/t01e7631535e0aebff4.jpg
---

# 前言
> 前些日子有朋友想要了解一下JAVA，于是便整理了这篇文章。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/code_by_rasmusir-d4a4dj2.jpg)

*   如果基础不好或者想学的很细，请参看：[菜鸟教程 - JAVA](http://www.runoob.com/java/java-tutorial.html)
*   本笔记适合快速学习，文章后面也会包含一些常见面试问题，记住快捷键操作，一些内容我就不转载了，直接附上链接，嘻嘻


# 进入正题

## 开发工具的安装与配置

*   [强烈推荐] `IntelliJ IDEA` 安装与使用 [https://www.cnblogs.com/123hqb--/p/7552022.html](https://www.cnblogs.com/123hqb--/p/7552022.html)
*   JDK 环境变量配置：[http://www.runoob.com/java/java-environment-setup.html](http://www.runoob.com/java/java-environment-setup.html)
*   环境配置后在终端检查，java，javac，java -version，有任何一个命令出错都说明环境没配置后，是在不行，参考：[https://blog.csdn.net/qq_40147863/article/details/82762678](https://blog.csdn.net/qq_40147863/article/details/82762678)




## 第一个 JAVA 程序

*   一般的我们新建包>新建java类，会自动生成一条头部包信息，如果修改包名，或者直接从别的地方拷贝代码，要相应修改，例
```java
    package learn;
```

*   我们通过一个简单的实例来展示 Java 编程，创建文件 HelloWorld.java(文件名需与类名一致), 代码如下：
 
```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }
```

*   **一般的 main 函数我们是不会自己去敲的，而是使用快捷键，输入main，然后按下Alt + /两个键，会提示 main 函数，选好后回车**
*   注：String args[] 与 String[] args 都可以执行，但推荐使用 String[] args，这样可以避免歧义和误读
*   **然后 System.out.println(" ")函数也不会有人一个字一个字敲，输入syso，然后Alt + /两个键，会提示 sysout 函数，选好后回车**

<!-- more -->

## java 程序的运行


*   Eclipse 中运行 （最好记住快捷键）
    *   **1.快捷键：Ctrl + F11**
    *   2.右键 > run as > Java Application
*   终端 或者 cmd 中运行
 
```cmd
    C:> javac HelloWorld.java
    C:> java HelloWorld 
    Hello World
```

## 基本语法

*   编写Java程序时，应注意以下几点：
*   大小写敏感：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的
*   类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass
*   方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写
*   源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）
*   主方法入口：所有的 Java 程序由 `public static void main(String []args) `方法开始执行

## Java标识符

*   Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符
*   关于Java标识符，有以下几点需要注意：
*   所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始
*   首字符之后可以是字母（A-Z或者a-z）,美元符（$）、下划线（_）或数字的任何字符组合
*   关键字不能用作标识符
*   标识符是大小写敏感的
*   合法标识符举例：age、$salary、_value、__1_value
*   非法标识符举例：123abc、-salary

## Java修饰符

*   像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：
*   访问控制修饰符 : default, public , protected, private
*   非访问控制修饰符 : final, abstract, strictfp

## Java变量

*   Java中主要有如下几种类型的变量
*   局部变量
*   类变量（静态变量）
*   成员变量（非静态变量）

## Java数组

*   数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组

## Java枚举

*   Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug
*   例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁
```java
    class FreshJuice {
       enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
       FreshJuiceSize size;
    }
     
    public class FreshJuiceTest {
       public static void main(String []args){
          FreshJuice juice = new FreshJuice();
          juice.size = FreshJuice.FreshJuiceSize.MEDIUM  ;
       }
    }
```

*   注意：枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义

## Java 关键字

*   下面列出了Java 关键字。这些保留字不能用于常量、变量、和任何标识符的名称
*   没事多背背

|    类别   |    关键字    |  说明  |
| :-------: | ------------- | ------------- |
|    基本类型    |  boolean  |  布尔型  |
|        |  byte  |  字节型  |
|        |  char  |  字符型  |
|        |  double  |  双精度浮点  |
|        |  float  |  单精度浮点  |
|        |  int  |  整型  |
|        |  long  |  长整型  |
|        |  short  |  短整型  |
|    包相关    |  package  |  包  |
|        |  import  |  引入  |
|    变量引用    |  super  |  父类,超类  |
|        |  this  |  本类  |
|        |  void  |  无返回值  |
|   访问控制   |     private   |   私有的     |
|        |  protected  |  受保护的  |
|        |  public  |  公共的  |
|  类、方法和变量修饰符  |  abstract  |  声明抽象  |
|        |  class  |  类  |
|        |  extends  |  扩充,继承  |
|        |  final  |  最终值,不可改变的  |
|        |  implements  |  实现（接口）  |
|        |  interface  |  接口  |
|        |  native  |  本地，原生方法（非Java实现）  |
|        |  new  |  新,创建  |
|        |  static  |  静态  |
|        |  strictfp  |  严格,精准  |
|        |  synchronized  |  线程,同步  |
|        |  transient  |  短暂  |
|        |   volatile |  易失  |
|   程序控制语句     |  if  |  如果  |
|        |  else  |  否则  |
|        |  switch  |  根据值选择执行  |
|        |  case  |  定义一个值以供switch选择  |
|        |  default  |  默认  |
|        |  for  |  循环  |
|        |  continue  |  继续  |
|        |  break  |  跳出循环  |
|        |   while |  循环  |
|        |  do  |  运行  |
|        |  instanceof  |  实例判断类型  |
|        |  return  |  返回  |
|    错误处理    |  assert  |  断言表达式是否为真  |
|        |  try  |   捕获异常 |
|        |  catch  |  捕捉异常  |
|        |  throw  |  抛出一个异常对象  |
|        |  throws  |  声明一个异常可能被抛出  |
|        |  finally  |  有没有异常都执行  |
|    保留关键字    |  goto  |  是关键字，但不能使用  |
|        |  const  |  是关键字，但不能使用  |
|        |  null  |  空  |

## Java注释

*   类似于C/C++，Java也支持单行以及多行注释。注释中的字符将被Java编译器忽略
```java
    public class HelloWorld {
       /* 这是第一个Java程序
        *它将打印Hello World
        * 这是一个多行注释的示例
        */
        public static void main(String []args){
           // 这是单行注释的示例
           /* 这个也是单行注释的示例 */
           System.out.println("Hello World"); 
        }
    }
```

## 继承

*   在Java中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类
*   利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（super class），派生类称为子类（subclass）

## 接口

*   在Java中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色
*   接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类

## Java 源程序与编译型运行区别

如下图所示：  
![](https://img-blog.csdn.net/20180919162426630?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTQ3ODYz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## Java 对象和类

*   Java作为一种面向对象语言。支持以下基本概念：  
    多态、继承、封装、抽象、类、对象、实例、方法、重载
*   对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等  
    类：类是一个模板，它描述一类对象的行为和状态

## Java中的类

*   类可以看成是创建Java对象的模板
*   通过下面一个简单的类来理解下Java中类的定义：

```java
    public class Dog{
      String breed;
      int age;
      String color;
      void barking(){
      }
     
      void hungry(){
      }
     
      void sleeping(){
      }
    }
```

一个类可以包含以下类型变量：

*   局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁
*   成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
*   类变量：类变量也声明在类中，方法体之外，但必须声明为static类型。  
    一个类可以拥有多个方法，在上面的例子中：barking()、hungry()和sleeping()都是Dog类的方法

## 构造方法

*   每个类都有构造方法。如果没有显式地为类定义构造方法，Java编译器将会为该类提供一个默认构造方法
*   在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法
*   下面是一个构造方法示例：

```java
    public class Puppy{

        public string name;

        public Puppy(){
        }
     
        // 这个构造器仅有一个参数：name
        public Puppy(String name){
            //把参数name的值 赋值给 本类中的name
            this.name = name;
        }
    }
``` 

## 创建对象
*   对象是根据类创建的。在Java中，使用关键字 new 来创建一个新的对象。创建对象需要以下三步：
*   声明：声明一个对象，包括对象名称和对象类型
*   实例化：使用关键字new来创建一个对象
*   初始化：使用new创建对象时，会调用构造方法初始化对象
*   下面是一个创建对象的例子：

```java
    public class Puppy{
       public Puppy(String name){
          //这个构造器仅有一个参数：name
          System.out.println("小狗的名字是 : " + name ); 
       }
       public static void main(String []args){
          // 下面的语句将创建一个Puppy对象
          Puppy myPuppy = new Puppy( "tommy" );
       }
    }
```

*   编译并运行上面的程序，会打印出下面的结果：
```cmd
    小狗的名字是 : tommy
```

## 关于类的常见面试问题

*   1、一个".java"源文件中是否可以包括多个类（不是内部类）？有什么限制？
    *   可以有多个类，但只能有一个public的类，并且public的类名必须与文件名相一致
*   2、Java有没有goto?
    *   java中的保留字，现在没有在java中使用
*   3.请说出作用域public，private，protected，以及不写时的区别  
    这四个作用域的可见范围如下表所示  
    ![](https://img-blog.csdn.net/2018091916370321?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTQ3ODYz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
    说明：如果在修饰的元素上面没有写任何访问修饰符，则表示friendly


---
to be continued...