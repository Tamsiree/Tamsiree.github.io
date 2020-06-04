---
title: Manjaro搭建samba共享
author: Tamsiree
date: 2020-05-08 14:18:50
description: 为了方便Linux在Windows平台下开发，搭建Manjaro无密访问samba服务器
tags:
  - Software
  - samba
categories:
  - Software
  - samba
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg882b157.png
---
# 前言
> 为了方便Linux在Windows平台下开发，搭建Manjaro无密访问samba服务器
> 
> 后面加了Windows下搭建samba方法

# 正文
## 安装smb服务器

我用的是Manjaro gnome 18，需要安装下面几个软件

```
sudo su 
pacman -S samba nautilus-share manjaro-settings-samba

```

## 配置/etc/samba/smb.conf参数

### **1）** 安装上面软件之后，开始配置参数，先备份smb.conf

```
mv /etc/samba/smb.conf /etc/samba/smb.conf.bak

```

### **2）** 然后新建一个，写入如下参数 `vim /etc/samba/smb.conf`，这里感谢[Conanx](https://www.cnblogs.com/conanx/p/5102340.html)给我的参考！

```
[global]
workgroup = WORKGROUP       
#所要加入的工作组或者域
netbios name = Manjaro      
#用于在 Windows 网上邻居上显示的主机名
security = user             
#定义安全级别
map to guest = bad user     
#将所有samba系统主机所不能正确识别的用户都映射成guest用户
dns proxy = no              
#是否开启dns代理服务

[misfit]                    
#共享显示的目录名
path = /home/misfit/code    
#实际共享路径
browsable = yes             
#共享的目录是否让所有人可见
writable = yes              
#是否可写
guest ok = yes              
#是否允许匿名(guest)访问,等同于public
create mask = 0777          
#客户端上传文件的默认权限
directory mask = 0777       
#客户端创建目录的默认权限
#注意共享文件在系统本地的权限不能低于以上设置的共享权限。

```

修改好了输入`testparm`检查smb.conf是否有语法错误，需要其他配置这里是：[配置参数详解](https://blog.csdn.net/xg38241415109/article/details/78933949)。

### **3）** 配置权限和密码工作

```
##将系统用户加入到samba用户，并设置密码，这里我们按两次回车，设置成无密码
smbpasswd -a  misfit  #这里misfit是上面设置的 #共享显示的目录名，也就是自己系统用户名

##查看所有Samba用户
pdbedit -L     

##查看对应IP上的samba服务器
smbclient -L //IP   #例如查看本机 smbclient -L 127.0.0.1

##这一段已经失效----2019.4.10更新
##将 path 中目录的所有者改为nobody，否则，任何人都没权限操作这个目录。另外用如下命令设置:
##chown nobody:nobody /home/misfit/code  -R

##将 path 中目录的权限设置为777
chmod 777 /home/misfit/code -R
chmod 777 /home/misfit/                 #这个不给权限会拒绝访问

```

**到这里配置基本完成了，跳到下一步直接启动samba服务器**

> > **注意：不要把自己的 /home/misfit 系统目录修改成nobody权限了，会导致开机无法登录系统**  
> > **如果导致进不小心修改了，登不进界面，在开机界面按`ctrl+alt+F2`进入tty2控制台，修改输入下面命令改回权限**  
> > `chown misfit:misfit /home/misfit -R` 这里misfit是linux的用户名。

> **其他知识补充：**目前samba有三种后台：smbpasswd、tdbsam和ldapsam。sam应该是security account manager（安全账户管理）的简写。  
> 1.smbpasswd：该方式是使用smb自己的工具smbpasswd来给系统用户（真实  
> 用户或者虚拟用户）设置一个Samba密码，客户端就用这个密码来访问Samba的资源。smbpasswd文件默认在/etc/samba目录下，不过有时候要手工建立该文件。  
> 2.tdbsam：该方式则是使用一个数据库文件来建立用户数据库。数据库文件叫passdb.tdb，默认在/etc/samba目录下。passdb.tdb用户数据库可以**使用smbpasswd –a来建立Samba用户，不过要建立的Samba用户必须先是系统用户**。我们也可以使用pdbedit命令来建立Samba账户。pdbedit命令的参数很多，我们列出几个主要的。  
> pdbedit –a username：新建Samba账户。  
> pdbedit –x username：删除Samba账户。  
> pdbedit –L：列出Samba用户列表，读取passdb.tdb数据库文件。  
> pdbedit –Lv：列出Samba用户列表的详细信息。  
> pdbedit –c “\[D\]” –u username：暂停该Samba用户的账号。  
> pdbedit –c “\[\]” –u username：恢复该Samba用户的账号。  
> 3.ldapsam：该方式则是基于LDAP的账户管理方式来验证用户。首先要建立LDAP服务，然后设置“passdb backend = ldapsam:ldap://LDAP Server”

## 然后启动服务

```
systemctl start smb     #启动服务

#然后设置为开机自启
systemctl enable smb    #开机自启

#其他命令
systemctl status smb    #查询状态
systemctl restart smb   #重新启动

```

> Manjaro防火墙默认关闭的，并且没有安装selinux，安装了的需要关闭  
> `systemctl stop iptables #关闭防火墙`  
> `setenforce 0 #关闭selinux`  
> 关闭selinux开机启动  
> `sudo vim /etc/selinux/config`  
> 将`SELINUX=enforcing`改为`SELINUX=disabled`。

## 最后挂载到windows上

**打开资源管理器>>右击网络>>映射网络驱动，添加\\Linux IP\\共享目录，完成**  
   
   
 

## Windows搭建服务器

**1） 关闭windows防火墙**  
控制面板>>系统安装>>windows防火墙>>打开关闭防火墙，家庭、共用都关掉  
**2） 解禁Guest账户**  
资源管理右击计算机，管理>>本地用户和组>>用户，右击Guest选择属性，将账户已禁用的勾去掉。  
**3） 在本地策略上修改用户权限分配和安全选项**

-   输入“secpol.msc”命令打开本地安全策略向导：
-   本地策略>>用户权限分配>>拒绝从网络访问这台计算机，双击打开，将Guest账户删除。
-   本地策略>>安全选项>>网络访问：本地账户的共享和安全模型，双击打开，设置为仅来宾模式。

**4）将Windows的文件夹设置成无密共享**  
右键需要共享的文件夹，属性>>共享(标签)>>共享(按钮)，添加everyone用户，设置权限级别为 读\\写 ,单击共享。  
**5）最后挂载到Manjaro Linux**

-   查看共享目录`smbclient -L //[PC的IP]`
-   挂载共享目录到Linux，manjaro 默认安装了cifs：  
    `mount -t cifs //[PC的IP]/[共享目录名] /[挂载目录名]`

**6）开机自动挂载samba** （貌似无效）  
在`vim /etc/fstab`添加：

```
//[PC的IP]/[共享目录名]   /[挂载目录名]    cifs    defaults,guest  0 0 

```

> > 关于服务器的选择：  
> > 我目前偏向于在虚拟机Linux中将smb和nfs都搭建，Linux和windows之间共享用smb，Linux挂载到开发版用nfs。

---
> to be continued...
