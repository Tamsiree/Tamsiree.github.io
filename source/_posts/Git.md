---
title: Git
date: 2016-12-20 22:37:43
description: 整理Git的各种用法
tags:
  - Git
categories:
  - TechnicalResearch
  - Git
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-4y37g0.jpg
---

# Git的妙用
有时候想要下载Github上的库，但是因为母亲对于我们的保护，下载速度往往只有10k/s左右，我们可以选择在Gitee上同步此库，然后在Gitee上下载，最后几秒就搞定啦！

如果是自己的库需要关联的话，可以这样做  
1. 先用 git 把库从 Gitee 上 clone 下来
2. 然后 删除库目录中的.git文件夹
3. [创建SSH秘钥](#创建SSH秘钥) ,使用 SSH 密钥连接本地仓库和 github 远程仓库
4. 然后 用 git 把本地库与远程库关联起来
```git
git remote add origin git@github.com:你的用户名/你的库名.git
```

## 创建SSH秘钥
在 GitHub 上，一般都是通过 SSH 来授权的，而且大多数 Git 服务器也会选择使用 SSH 公钥来进行授权，所以想要向 GitHub 提交代码，首先就得在 GitHub 上添加 SSH key配置。  

此时是没有 SSH 加密文件的,需要我们手动添加,首先使用命令:
```git
# 填写你自己的github注册邮箱
ssh-keygen -t rsa -C "youremail@example.com"
```

指定 RSA 算法生成密钥，然后敲三次回车键，期间不需要输入密码，之后就会生成两个文件，分别为id_rsa和id_rsa.pub，即密钥id_rsa和公钥id_rsa.pub.   
对于这两个文件，其都为隐藏文件，默认生成在以下目录：

* Linux 系统：~/.ssh
* Mac 系统：~/.ssh
* Windows 系统：C:\Documents and Settings\username\.ssh
* Windows 10 ThinkPad：C:\Users\think.ssh

密钥和公钥生成之后，我们要做的事情就是把公钥 id_rsa.pub 的内容添加到 GitHub，这样我们本地的密钥id_rsa和 GitHub 上的公钥id_rsa.pub才可以进行匹配，这样后就可以像GitHub上提交代码。

![GitHub绑定SSH](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/6134999-80a031f051c917f7.webp)

如上图所示，我们只需要将公钥id_rsa.pub的内容粘贴到Key处的位置（Titles的内容不填写也没事），然后点击Add SSH key 即可.  
在我们添加完SSH key之后，也没有明确的通知告诉我们绑定成功啊！  
不过我们可以通过在 Git Bash 中输入 ssh -T git@github.com 进行测试：
```git
ssh -T git@github.com
```

![SSH验证](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Post/6134999-f736ef17639d5802.webp)

# 问题归纳
## Git报错：index.lock File exists
Git 提交（commit 或 discard, remove等）时，报错，显示错误如：
```git
fatal: Unable to create 'XXXXXX/.git/index.lock': File exists.

If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.
```

解决方案:  
> 根据提示找到对应文件 `index.lock` ，删除即可。

# 强制拉取覆盖本地
在使用git管理代码时，我们总会遇到在本地修改了一通，结果发现忒乱了想重新来过，本能地尝试本地删除然后重新git pull，结果发现没用，文件根本拉取不下来。那行吧，咱直接从远程仓库拉取代码覆盖本地就行了。

```git
git fetch --all
git reset --hard origin/master
git pull //可以省略
```

git fetch 指令是下载远程仓库最新内容，不做合并 
git reset 指令把HEAD指向master最新版本

---
to be continued...

