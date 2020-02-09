---
title: PT站
author: Tamsiree
date: 2020-02-06 20:28:35
description: PT（Private Tracker）是一种改良自 BitTorrent 协定的 P2P 下载方式，“Private Tracker”指私有种子服务器。与 BT 最大的不同点分别为可进行私密范围下载，及可统计每个用户的上载及下载量。
tags:
  - TechnicalResearch
  - PT站
categories:
  - TechnicalResearch
  - PT站
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/d439b6003af33a8735fa4ebac05c10385243b5ff.jpg
---
# 前言
PT（Private Tracker）是一种改良自 BitTorrent 协定的 P2P 下载方式，“Private Tracker”指私有种子服务器。与 BT 最大的不同点分别为可进行私密范围下载，及可统计每个用户的上载及下载量。

# PT站的架构
## NexusPHP

### 简介  
根据其代码中的介绍（`aboutnexus.php` 页面）来看：

> NexusPHP由来自浙江大学的Nexus团队发起并开发完成。主要是提供一个完整的、有序的、重视用户信誉和知识的资源分享社区的解决方案，是一个PT（Private Tracker，即私有的Tracker服务器，是BT下载的一种）开源软件。

![aboutnexus.jpg](https://blog.rhilip.info/usr/uploads/2018/07/4003688781.jpg)

（当然也有人和我说，这是某浙大生毕业设计作品Orz）

虽然一遍一遍的在群里鄙视着NexusPHP的垃圾代码，但不得不承认就目前来看国内PT圈依然在大量使用NP（这里应该不用做详细数据统计了吧2333）。

而其他一些尝试，诸如：

-   [Gazelle](https://github.com/WhatCD/Gazelle)：国外著名PT架构，然而部署安装略麻烦，且纯英文界面。国内曾有人尝试翻译并建站，然而该主比我还不靠谱，以致于在17年度被人提及是开站狂魔2333。此外就目前看TVPlay这个基于Gazelle的国内剧集站点现状比一滩死水还不如。
-   [YoRHa](https://gitee.com/mojie126/YoRHa)：根本没有人知道的国内构架，主要原因是因为基于ThinkPHP的构架并没有完成23333，作者曾在PT吧发过主贴 [【20171009】开源一个国产PT项目…【pt吧】\_百度贴吧](https://tieba.baidu.com/p/5363288147) ，而且目前demo还存活（并开放debug模式），但已经有一段时间没有进行更新了Orz。
-   [meanTorrent](https://github.com/taobataoma/meanTorrent)：同样是一个国内开源框架，基于Node.js，同样部署安装麻烦（后面会具体讲~）。目前主站被人戏称（实际是官方简称）是[地雷站](http://mean.im/) ，但就我目前感觉，迈的步子有些大——一方面，过于绚丽的前端对于PT是否需要值得思榷；另一方面，主站目前只接受1080P的一些规定是否在站点初期有利于发展。此外，该站积分策略、上传方式中的一些不同与NP的新形势新方法，对于已经在NP惯性中的使用者来说是不是能很快适应。这些都要经过时间的考验，毕竟今年6月（2018年6月）也才正式上线。
-   [TBsource](https://github.com/QwertyRider/TBSource)：基于PHP，是NP的前身，应该也就只有CFFBits以及TTG这种_远古_站点在使用了吧~
-   [XBNBT](https://sourceforge.net/projects/xbnbt/)： 一个基于C++的构架，国内就只有紫荆PT在使用。
-   其他一些在Discuz基础上修改的tracker：这块多为自己写的，而且未能找到公开repo，在此仅作站点列举：六维空间、北交知行、天雪PT。

所以，面对众多的 `NP改` 站点来说，其实这个古老的（甚至连官网都挂了的）架构依然在支撑着国内PT网站的运行。

### 缺陷

但是从现代的角度来看NP，我们其实能发现很多问题。

有些属于已经被发现漏洞，多为跨站请求类以及SQL注入类。截止目前（2018/7/19），在 [国家信息安全漏洞库](http://www.cnnvd.org.cn/web/vulnerability/querylist.tag) 中以 NexusPHP 为关键词搜索可以找出近26条记录 。

![CNNVD.jpg](https://blog.rhilip.info/usr/uploads/2018/07/721100080.jpg)

而更多被诟病的其实是其代码架构过于老旧也不宜于维护。下面列几点我印象比较深刻的：

-   使用这个mysql已经被抛弃的库（PHP 5.5.0起废弃，PHP 7.0.0起移除），而不是mysqli库或PDO库。而PHP 7至少从评测上看，执行效率比PHP 5优秀很多~
-   代码使用print等方式输出网页。项目受限于时代背景，没有使用MVC等先进思想。
-   数据库设置不合理，大量查询以及写入语句落在 `users` 以及 `torrents` 等表上，造成数据表过热，故当站点人数过多或者种子数过多时，对站点所在服务器配置要求极其高（譬如NPU就因搜索问题换用外挂搜索引擎）；而另一方面，诸如faq、rules这些应该可以直接静态输出的却使用数据库进行存储（估计是为了多语言支持）
-   `torrentsrss.php`页面对passkey是否存在没有进行检查，导致非站内用户能通过构造相关链接直接读取站内**所有**种子信息。（部分站点已经修复这个漏洞）

### 目前分支情况

鉴于NP在很早之前就已经停止维护（Github上停留在7年前，即2011年），目前很多使用NP作为基础架构的站点都对其进行了一定的改良。我仅从用户体验（比如前端页面的更改）将站点分成以下几类：

-   **基本没怎么动**： 不得不说，很多站点对原始NP模板并没有进行修改（这是句瞎话，比如BYR看起来和原版似乎一模一样，但是后端的修改还是挺多的；又如二娘，修改了种子的BUFF系统。）。但其实不管该站Sysop到底出力没出力，都可以将对应站点视为一个模板。
-   **葡萄**：该前端模板将个人信息做成置顶栏，而不是和基本模板一样放在导航栏之下。种子搜索增加“随意看看”。

![putao_group.jpg](https://blog.rhilip.info/usr/uploads/2018/07/3085673525.jpg)

-   **蝴蝶**：以蝴蝶和珞樱为代表，对搜索词的词长存在限制，拥有用户自定义Javascript以及自定义css。
-   **蚂蚁**：虽然蚂蚁因为一些原因已经停止运营，但是模板并没有消失2333。目前仍有很多新站使用蚂蚁的模板进行建站，如_高清街_以及_美盒子_（都是小站）。我个人不是很喜欢蚂蚁的模板，它将一个种子的所有信息使用两个tr加一堆rowspan进行合并展示，在我看来其实增加后期维护的困难程度，尤其是在没有模板引擎的NP构架之下。

![mayi_tamp.jpg](https://blog.rhilip.info/usr/uploads/2018/07/1294908463.jpg)

> 截图为他人提供的美盒子截图。

-   **蒲公英**：蒲公英是魔改NP最为成功的一个站点。在它之前或者之后都有人尝试将Bootstrap与NexusPHP进行结合，虽不能说他们都失败了，但至少NPU成为了一个典型喵喵喵。。其他一些更改，比如rp系统、自动转种系统等都是该站点特点。
-   **HDA**：良心站点HDArea添加了种子预告系统，后被集市使用。（毕竟这两个站点早期开发是同一个人）

嘛，我影响稍微深刻的就这些站点，以及他们使用的模板。其他还有一些站点，此处就不一一列举了。

而从公开仓库来看，目前站点公开并有在更新代码的有以下：

-   lwenxu/jmbits：[https://github.com/lwenxu/jmbits](https://github.com/lwenxu/jmbits)
-   nwafu-mta/mtpt：[https://github.com/nwafu-mta/mtpt](https://github.com/nwafu-mta/mtpt)
-   zcqian/tjupt：[https://github.com/zcqian/tjupt](https://github.com/zcqian/tjupt)
-   QingyingPT/QY-PT-tracker：[https://github.com/QingyingPT/QY-PT-tracker](https://github.com/QingyingPT/QY-PT-tracker) ， 非完整代码

也确实是寥寥无几~

---

为了去了解站点构架，一个简单的搭建过程也是需要了解的。

NP搭建的最重要注意点是，**使用的PHP版本最高不应该超过5.6，并安装memcache软件及PHP扩展**。对数据库版本要求不是很严格，我使用MySQL 5.7测试可行。

> 本人写的十分简略（因为真心没有什么好讲的），如果有必要，还请参照他人的详细搭建过程。

### Linux下搭建

#### LNMP环境及Memcache

网上的教程真心啰嗦，`lnmp`一个一个的写过去，我个人还是喜欢用一键包来配置。`lnmp1.5`的自动值守命令为

```bash
screen -S lnmp
wget http://soft.vpser.net/lnmp/lnmp1.5.tar.gz -cO lnmp1.5.tar.gz && tar zxf lnmp1.5.tar.gz && cd lnmp1.5  && LNMP_Auto="y"  DBSelect="2" DB_Root_Password="lnmp.org"  InstallInnodb="y"  PHPSelect="4"  SelectMalloc="1"  ./install.sh lnmp
```

复制粘贴，然后接杯奶茶等编译完成，我们基础的`lnmp`环境就搭建好了。（注意：这样安装后主`PHP`版本为`5.5`，如果希望主版本用`7.x`的请自己使用 [LNMP一键安装包无人值守命令生成器](https://lnmp.org/auto.html) 生成值守命令或者交互式安装，然后`./install.sh mphp` 添加多PHP支持）

然后安装`memcache`，在`lnmp1.5`文件夹中进入lnmp解压后的目录，执行：

```bash
./addons.sh install memcached
```

选择`php-memcache`即会安装软件及`PHP`扩展。

#### NP源码及数据库

`NP`源码个人建议从`SourceForge`中获取，而不是从`Github`仓库。（之前Blog也说过，Github上的建表语句有问题）故，依次进行：

1.  从 [NexusPHP - Browse Files at SourceForge.net](https://sourceforge.net/projects/nexusphp/files/) 下载最新的zip包并解压到对应网站根目录即可。
    
2.  使用phpmyadmin或者其他CLI软件恢复`/_db/dbstructure.sql` 文件记录。
    
3.  修改`config/allconfig.php` 文件的以下内容使其对应：

```bash
‘SITENAME’  =>  ‘站点名称’
‘baseURL’  =>  ‘网站URL’
‘announce_url’  =>  ‘localhost/announce.php’（announce的url地址）
‘mysql_host’  =>  ‘MySQL主机’
‘mysql_user’  =>  ‘数据库用户名’
‘mysql_pass’  =>  ‘数据库密码’
‘mysql_db’  =>  ‘数据库名’
```

4.  设置目录权限777，因为NP的站点配置是通过操作config目录下文件的修改完成的。

```bash
sudo chmod 777  /dir/to/your/nexusphp
sudo chmod 777  /dir/to/your/nexusphp/config
```

5.  自己访问网站然后注册一个用户名，接着进入数据库管理（phpMyAdmin），在users表里面找到你注册的用户，编辑它的class属性为16


### Windows下搭建

Windows下搭建我个人推荐使用Laragon作为基础环境，因为相比其他WNMP、WAMP、XAMPP，环境管理更加方便，内置软件更为齐全。例如我选择的就包含了几乎全套我想要使用的工具2333

> 官网下载地址：[https://laragon.org/download/](https://laragon.org/download/)

![laragon.jpg](https://blog.rhilip.info/usr/uploads/2018/07/3158755942.jpg)

然而需要注意的是，默认Laragon提供的是PHP 7.x，我们需要额外到PHP官网上下载PHP 5.5版本的Portable以及Memcache扩展。下载位置分别如下：

-   PHP 5.5：到PHP官网的历史发布页面存档 [https://windows.php.net/downloads/releases/archives/](https://windows.php.net/downloads/releases/archives/) 中找到_php-5.5.38-Win32-VC11-x64.zip_ 下载并将解压到`laragon\bin\php` 目录
-   php-memcache： [http://pecl.php.net/package/memcache](http://pecl.php.net/package/memcache) 中下载，并解压至 `laragon\bin\php\php-5.5.38-Win32-VC11-x64\ext`目录，之后你就可以在Laragon的切换PHP版本并启用该插件。

完成基础环境的搭建后，Win下关于NP自身的文件以及数据库均与Linux下类似，在此不累述。

### 搭建中一些可能的问题

-   **直接提示HTTP ERROR 500** ：多数情况下是使用了PHP 7.x或者其他高于5.6的版本，建议使用PHP 5.3-5.5之间的版本进行搭建。
-   **Warning: Memcache::connect() \[memcache.connect\]: Can’t connect to localhost: 由于连接方在一段时间后没有正确答复或连接的主机没有反应，连接尝试失败。** ： 修改`classes\class_cache.php`中的localhost为127.0.0.1
-   **点击登陆后提示`Error: Errno:0 SQL:;`**： 使用Github上源码（这个源码真的是只能远观不能亵玩233）搭建，换用SourceForge的源。
-   其他待补充~

---

## meanTorrent 
### 简介
在简单的介绍完NP的历史以及搭建，让我们先跳出NP框架，了解下其他的一些前面讲过的框架及其搭建过程。

meanTorrent是目前来看，国人新框架中功能最为齐全、开发程度较高的一个。（其他我了解的都基本在开发过程中滴说）

从官方的介绍来看：

> meanTorrent - MEAN.JS BitTorrent Private Tracker - Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js, A BitTorrent Private Tracker CMS with Multilingual, and IRC announce support, CloudFlare support.

相比已经停止开发维护的NP框架，一个有正经团队维护的项目从好的看，出现问题能统一修复解决，但从另一方面，有点剥离站点个性化的需求——从目前项目列出来的几个站点来看，站点雷同程度**有过之而无不及** 。反正国人擅长建站，小站死了又是一批，能活成大站就是可以收割的时候2333）

同样考虑到更新频繁这一点，本处的搭建手记也仅做示例，具体还是请参见项目主页README的介绍。

> 2018.08.27 请注意meanTorrent自 `v1.8` 停止开源维护。且该版本存在_严重_的信息暴露漏洞，**不建议使用该框架建站**。  
> 2019.07.24 MINE站已经长时间522，而本月的18号另外一个用meanTorrent建站的中型站点PTDream+也宣布重新回到NPHP框架，实际也意味着meanTorrent框架的失败了。

### 依赖分析

meanTorrent其所用的依赖十分基础：Git（版本管理）、Node.js（运行程序）、MongoDB（数据库） 、Bower （浏览器包管理器）。

![2018-07-25_152451.jpg](https://blog.rhilip.info/usr/uploads/2018/07/1822414240.jpg)

## 开机及环境准备

按照本人惯例，开一台 [Vultr](https://www.vultr.com/?ref=6944263) (←这里有个很生硬的afflink) 的$5虚拟机进行搭建测试，系统为Ubuntu 16.04，地点随意。

同样，对基础依赖不大，所以全部程序直接包管理安装即可，喜欢折腾的可以通过源代码编译安装，但这里只是测试（踩坑），所以一切就简。

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80  --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse"  | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y git nodejs mongodb-org
sudo service mongod start
```

然后安装npm的包管理器bower （话说现在不应该都用Webpack或者Yarn了嘛？）

```bash
npm install -g bower
```

## 安装meanTorrent

> **建议使用非root账户进行安装！请使用adduser以及visudo创建新账户并赋予新账号超级用户权限。**

首先从Github上clone一份源代码来

```git
git clone https://github.com/taobataoma/meanTorrent.git
```

然后使用npm安装依赖（过程中一堆WARNING都可以不用管233）

```bash
cd meanTorrent
npm install
```

但似乎还是有问题，报错如下。在安装node-gyp、iconv以及sharp的时候报错。

```bash
rhilip@vultr:~/meanTorrent$ npm install

> iconv@2.2.3 install /root/meanTorrent/node_modules/iconv
> node-gyp rebuild

Traceback  (most recent call last):
File  "/usr/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py", line 13,  in  <module>
import gyp
File  "/usr/lib/node_modules/npm/node_modules/node-gyp/gyp/pylib/gyp/__init__.py", line 8,  in  <module>
import gyp.input
File  "/usr/lib/node_modules/npm/node_modules/node-gyp/gyp/pylib/gyp/input.py", line 5,  in  <module>
from compiler.ast import Const
ImportError:  No module named compiler.ast
gyp ERR! configure error
`gyp ERR! stack Error:  `gyp` failed with exit code:  1`
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:336:16)
gyp ERR! stack     at emitTwo (events.js:126:13)
gyp ERR! stack     at ChildProcess.emit (events.js:214:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)
gyp ERR!  System  Linux  4.4.0-127-generic
gyp ERR! command "/usr/bin/node"  "/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js"  "rebuild"
gyp ERR! cwd /root/meanTorrent/node_modules/iconv
gyp ERR! node -v v8.11.3
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
```

很明显的，还是出现了依赖缺失的情况，根据项目自身的介绍、 [node-gyp](https://github.com/nodejs/node-gyp#installation) 以及 [lovell/sharp#1087](https://github.com/lovell/sharp/issues/1087) 的相关提醒，安装`libicu-dev`、`GCC`编译库（主要是`c++`以及`make`这两个会被`node-gyp`调用）以及`python-dev`。然后重新安装依赖。

```bash
sudo apt-get install libicu-dev build-essential python-dev python-pip
npm install
```

使用 `npm start` 运行。过程中如果出现以下报错，说明bower以及相关浏览器端依赖没有正确安装（特别是在root账户下，这里直接使用新用户解决）。按照作者的建议是使用`bower install --allow-root && bower prune --allow-root`手动装一下。

```bash
rhilip@vultr:~/meanTorrent$ npm start

> meanTorrent@0.1.0 start /root/meanTorrent
> gulp

[08:54:34]  Using gulpfile ~/meanTorrent/gulpfile.js
[08:54:34]  Starting  'default'...
[08:54:34]  Starting  'env:dev'...
[08:54:34]  Starting  'copyLocalEnvConfig'...
[08:54:34]  Starting  'makeUploadsDir'...
[08:54:34]  Finished  'makeUploadsDir' after 835  μs
[08:54:34]  Finished  'copyLocalEnvConfig' after 14 ms
[08:54:34]  Starting  'lint'...
[08:54:34]  Starting  'less'...
Potentially unhandled rejection [2]  '../../../../public/lib/bootstrap/less/mixins/text-emphasis.less' wasn't found. Tried - /root/meanTorrent/public/lib/bootstrap/less/mixins/text-emphasis.less,../../../../public/lib/bootstrap/less/mixins/text-emphasis.less in file /root/meanTorrent/modules/core/client/less/mt-var.less line no. 4
```

如果一切没有问题，那么在运行`npm start`后会提示一下信息：

![TIM截图20180725190508.jpg](https://blog.rhilip.info/usr/uploads/2018/07/706347362.jpg)

## Nginx反代以及开机自启

通过以上环节，我们已经把所有的软件都基本配置齐全了，并启用了meanTorrent的开发环境。但是默认监听在localhost而不是0.0.0.0上，同样这个程序会因为ssh的断开而终止。所以我们需要安装Nginx以配置反代，同时使用systemctl或者其他守护工具（如作者使用多个bashscript脚本以及forever进行管理，如果你要使用forever的话，请先全局安装`npm i forever -g`）使其能开机运行并崩溃重启。

安装Nginx也直接用包管理器吧，lnmp1.5也提供单Nginx安装方式，反正怎么方便怎么来就ok~

```bash
sudo apt-get install -y nginx-extras
vi /etc/nginx/sites-available/default
```

然后将默认的信息全部替换为以下常见反代配置（无SSL）

> 如果是在CloudFlare后，建议参照本人之前教程进行设置。（[Cloudflare 下 Nginx 获取用户真实 IP 地址](https://blog.rhilip.info/archives/256/)）

```bash
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location /  {
        proxy_pass          http://localhost:3000/;
        proxy_redirect default;
        proxy_set_header Accept-Encoding  "";
        proxy_set_header    X-Real-IP       $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location ~  /\.ht {
        deny all;
    }
}
```

然后重新载入Nginx配置信息并重启npm，你就可以直接使用 ip 或者域名 来进行访问了。

```bash
sudo systemctl reload nginx
npm start
```

![TIM截图20180725201334.jpg](https://blog.rhilip.info/usr/uploads/2018/07/1885535522.jpg)

先不进行注册，退出我们来先写个service文件来使用Systemd进行守护管理。`sudo vi /etc/systemd/system/meantorrent.service`。并填入以下内容：

```bash
[Unit]
Description=meanTorrent
Documentation=https://github.com/taobataoma/meanTorrent/wiki
After=network-online.target
[Service]
Type=forking
User=rhilip
Group=rhilip
UMask=007
Environment=NODE_ENV=production
WorkingDirectory=/home/rhilip/meanTorrent
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=meanTorrent
[Install]
WantedBy=multi-user.target
```

> **注意修改User、Group、WorkinDirectory为你自己的信息。**

然后使用以下命令重载systemd配置以及实现开机启动等管理

```bash
sudo systemctl daemon-reload # 重载systemd配置
sudo systemctl start meantorrent  # 启动
sudo systemctl stop meantorrent  # 停止
sudo systemctl restart meantorrent  # 重启
sudo systemctl enable meantorrent  # 开机自动启动 （只需执行一次）
sudo systemctl disable meantorrent  # 取消开机启动
```

## 系统配置

> 个人建议这部分参考作者介绍 [Getting Started With meanTorrent](https://github.com/taobataoma/meanTorrent#getting-started-with-meantorrent)，对`config/env/torrent.js`下文件进行配置修改。关于站点个性化设置，本处不再累述~

配置好邮件系统和Tracker Announce部分后，重启meanTorrent，然后注册账号即可。如果你只是和我一样测试，不对邮件系统进行配置，默认情况下注册后因为无法发送邮件导致账号状态为`inactive`无法使用，需要进入mongo修改账户信息（其实我是默认config下进行账号注册的2333）。方法如下：

```bash
rhilip@vultr:~/meanTorrent$ mongo
> use mean-v2
switched to db mean-v2
> db.users.update({'username':'admin1234567'},{$set:{'status':'normal'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

那么，就完事了~

![success.jpg](https://blog.rhilip.info/usr/uploads/2018/07/983124934.jpg)

---

# 框架结构及相关分析

在实质性的进入Tracker内部逻辑之前，让我先水一篇分析性的文章~

## 框架结构

-   **NexusPHP**

像NP这种较老的框架并没有一个很明显的架构，各项信息杂糅在一起。但从导航栏相关中，大体可以分为以下几个子模块。

> 以下分类方式仅代表本人意见。

![nexusphp_framework.jpg](https://blog.rhilip.info/usr/uploads/2018/07/1204826235.jpg)

当然，目前各站在这个基础上均增加了一些新的系统，比如（万恶的）勋章系统、发布预告系统、转种系统（含自引用与他站引用）、任务系统、考核系统；对原有系统也有些许扩展，例如Bangumi榜单、AniDB榜单等的添加。

-   **meanTorrent**

meanTorrent的可以在其modules下明确的了解其架构。撰稿时，架构如下：

![meantorrent_framwork.jpg](https://blog.rhilip.info/usr/uploads/2018/07/2965044613.jpg)

## Tracker请求生命周期

从整个请求流程来看，用户的Bittorrent客户端使用HTTP GET的形式向Tracker服务器发起请求，Tracker服务器根据内部逻辑向数据库及缓存请求请求相关信息，并最终回复给用户。具体流程可见下方简图：

![lifetime.jpg](https://blog.rhilip.info/usr/uploads/2018/07/195623119.jpg)

当然上面的肯定过于简单了，没有对Tracker的内部逻辑进行分析，而就Tracker的内部逻辑来看，以NP这个面向流程的框架为例子，简图如下：

![tracker_life.jpg](https://blog.rhilip.info/usr/uploads/2018/07/1186911081.jpg)

而从整个Tracker网络（见下方图片示意）来看，用户在请求后，Tracker并不参与文件交换，同样，也不能真实的获取用户实际交换信息情况。（于是，我又可以就这个方向水一篇SP了）

![main-qimg-ff65100c115e14ddf6c606b3799e0ae7.png](https://blog.rhilip.info/usr/uploads/2018/07/3746969236.png)

> 图片来自 [Why is BitTorrent not downloading? - Quora](https://www.quora.com/Why-is-BitTorrent-not-downloading)

## Tracker分析

在这一手记前，首先先列一下几个相关文件，以方便快速查阅：

-   [BEP 0003 ：The BitTorrent Protocol Specification](http://www.bittorrent.org/beps/bep_0003.html)
-   [BEP 0007 ：IPv6 Tracker Extension](http://www.bittorrent.org/beps/bep_0007.html)
-   [BEP 0023 ：Tracker Returns Compact Peer Lists](http://www.bittorrent.org/beps/bep_0023.html)
-   [BEP 0048 ：Tracker Protocol Extension: Scrape](http://www.bittorrent.org/beps/bep_0048.html)
-   Private Tracker实现
    -   [**ZJUT/NexusPHP**/announce.php](https://github.com/ZJUT/NexusPHP/blob/master/announce.php) ，同时也包括其他开源的NP魔改架构，如nwafu-mta/mtpt、zcqian/tjupt
    -   [**taobataoma/meanTorren**/modules/announce/server/controllers/announces.server.controller.js](https://github.com/taobataoma/meanTorrent/blob/master/modules/announce/server/controllers/announces.server.controller.js)
    -   [WhatCD/Ocelot/worker.cpp](https://github.com/WhatCD/Ocelot/blob/master/worker.cpp) （Gazelle框架背后的主程序）
    -   [mojie126/YoRHa/application/announce/controller/TrackerController.php](https://gitee.com/mojie126/YoRHa/blob/master/application/announce/controller/TrackerController.php)

- - -

首先从最简单的信息查询来看，BT客户端会在还未正式向 `/announce` 发送请求之前，会向 `/scrape` 先发送请求（一般在种子 添加或者校验的时候），请求头仅添加种子的`info_hash`信息，示例如下：

```bash
GET http://nexusphp.localhost/scrape.php?passkey=110099109e337b7e335aa368200d7907c&info_hash=%e4%40%ad%c6%27%db%02%40%f7%c8%ed%9e%7b%aab%a3%e1gFW HTTP/1.1
Host: nexusphp.localhost
User-Agent: uTorrent/2210(25302)
Accept-Encoding: gzip
Connection:  Close
```

关于scrape的相关定义及返回信息在之前列出来的BEP 0048中，根据定义，这次`抓取(scrape)`会向用户返回一个字典描述对应种子的完成、未完成以及下载中的情况。本处直接引述定义：

> The response to a successful request is a bencoded dictionary containing one key-value pair: the key `files` with the value being a dictionary of the 20-byte string representation of an infohash paired with a dictionary of swarm metadata.

根据NP的实现（见 [NexusPHP/scrape.php](https://github.com/ZJUT/NexusPHP/blob/master/scrape.php) ），会从param字段中搜索并匹配出来info\_hash信息，如果param中没有能匹配出info\_hash，则会直接返回站内**所有**种子的做种信息。（如下图）

![TIM截图20180730165317.jpg](https://blog.rhilip.info/usr/uploads/2018/07/4091312727.jpg)

> 以上问题修复patch见 [:lock: Not allow empty info\_hash when request scrape page by Rhilip · Pull Request #11 · zcqian/tjupt](https://github.com/zcqian/tjupt/pull/11)，截止目前，多数站点未对该问题进行修复。

而如果存在info\_hash的话，则会对每一个提供的hash值进行数据库查找，如果查询结果不存在，则返回`Torrent not registered with this tracker.`的错误，而如果存在，则以一个benc编码的字典返回结果。其json格式如下：

```bash
{
  "files": {
    "xxxxxxxxxxxxxxxxxxxx": {"complete": 11, "downloaded": 13772, "incomplete": 19},
    "yyyyyyyyyyyyyyyyyyyy": {"complete": 21, "downloaded": 206, "incomplete": 20}
  }
}
```

此外，一个正常的客户端（例如`Transmission 2.94`）会定期向Tracker发送（announce）以下信息，并期望从tracker中获取回复以获取其他peer信息（这里仅指Private Tracker，其他的还有DHT网络、用户交换等方式）。

```bash
GET http://nexusphp.localhost/announce.php?passkey=db534098baaaa68bd725aaaae3051518&info_hash=aaaaaaaaaaaaaaaaaaaa&peer_id=-TR2940-lhqkh1jtwjqp&port=21736&uploaded=0&downloaded=0&left=739573325&corrupt=0&key=DDDD2A2B&event=started&numwant=200&compact=1&no_peer_id=1 HTTP/1.1
Host: nexusphp.localhost
User-Agent: Transmission/2.94
Accept-Encoding: gzip
Connection: Close
```

而tracker则会根据GET字段中的`compact`以及`no_peer_id`两个字段分别返回不同构造的结果，并设置相应头为

```bash
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Pragma: no-cache
```

当`compact=0&no_peer_id=0`时，其返回的json格式如下：

```bash
{
    "interval": 50,
    "min interval": 20,
    "complete": 6871,
    "incomplete": 3,
    "peer": [
        {
            "ip": "xxx.xxxx.xxx.xxx",
            "peer_id": "-TR2940-lhqkh1j31jqp",
            "port": 5698,
        },
        ....
    ]
}
```

其中， `peer_id` 视用户Requests字段这一项可以不要，而如果用户申请使用compact的形式返回，那么peer字段则会返回一个string而不是dict。

如果发生错误，则会返回一个错误字段（string），JSON格式内容如下：

```bash
{
    "failure reason": "Error msg",
}
```

## Bencode编码

在上面的例子中，我都是以json格式的形式来展示tracker返回的Response信息，但实际上，返回的信息是以Bencode的形式进行编码的。关于Bencode的介绍，可以访问[Bencode - Wikipedia](https://en.wikipedia.org/wiki/Bencode)。这里我们只需要知道一下编码规则就行：

|data types|raw|encoded|
| :---: | --- | --- |
|int|\-42|i-42e|
|string|‘spam’|4:spam|
|list|\[‘XYZ’, 4321\]|l3:XYZi4321ee|
|dict|{‘XYZ’: 4321}|d3:XYZi4321ee|

这些甚至不需要你自己一个一个拼合，现在有超多的库帮你进行拼合，你只需要构造好相应的字典，直接调用即可，例如：

-   PHP：[sandfoxme/bencode](https://github.com/sandfoxme/bencode)、[rchouinard/bencode](https://github.com/rchouinard/bencode)、[dsmithhayes/bencode](https://github.com/dsmithhayes/bencode)、[bhutanio/torrent-bencode](https://github.com/bhutanio/torrent-bencode)
-   Python：[amyth/bencode](https://github.com/amyth/bencode)、[utdemir/bencoder](https://github.com/utdemir/bencoder)、[jcul/bencode](https://github.com/jcul/bencode)、[fuzeman/bencode.py](https://github.com/fuzeman/bencode.py)
-   Node.js： [themasch/node-bencode](https://github.com/themasch/node-bencode)、[benjreinhart/bencode-js](https://github.com/benjreinhart/bencode-js)

---

# 构造一个Private-Tracker的Demo

在这节及之后的PT架构书写过程中，我将使用`ThinkPHP 5`作为MVC框架，[rchouinard/bencode](https://github.com/rchouinard/bencode) 作为Bencode编码库，实现一个演示性质的Private Tracker。在此，我将默认你已经对前面的内容有所理解，并对PHP以及composer有了解运用。

该项目代码见： [https://github.com/Rhilip/Simple-Private-Tracker](https://github.com/Rhilip/Simple-Private-Tracker) ，仅供学习无法运行~

> 请注意，本文所列方法，仅表示本人的一种实现。实际只要符合BEP 0003以及BEP 0027的都是可行的实现~  
> 请注意，本处所列代码并不一定是最新的，仅代表思考逻辑过程，具体代码请看repo

相关commit：[c2c37e668a3f63722b6d4d736e957c8cda76b2a8](https://github.com/Rhilip/Simple-Private-Tracker/commit/c2c37e668a3f63722b6d4d736e957c8cda76b2a8)

## 基础准备

首先，我们需要准备好PHP环境（建议为7.x）以及数据库，因为学习，所以缓存暂时使用文件缓存。并使用composer安装 ThinkPHP5以及bencode ，其命令分别如下：

```bash
composer create-project topthink/think=5.0.* tp5  --prefer-dist
cd pt
composer require rych/bencode
```

准备相关数据表，分别用来存储 Torrent（种子信息）、User（用户信息）、Peer（做种人信息）、Snatch（做种完成情况），此处为了方便（偷懒）直接使用NP的建表语句（-> 见 [NexusPHP/\_db/dbstructure.sql](https://github.com/ZJUT/NexusPHP/blob/master/_db/dbstructure.sql) 相关）就行（实际很多字段不需要）。顺带也方面后续兼容~

而文件夹方面，依次添加以下文件：

```bash
├─application
│  ├─tracker
│  │  ├─controllers
│  │  │ └─Index.php
```

并在路由（`route\route.php`）中注册两个控制器

```bash
Route::get('tracker/scrape','tracker/Index/scrape');
Route::get('tracker/announce','tracker/Index/announce');
```

并在设置中开启你的debug模式以及应用trace，准备postman或其他作为调试工具。

## 方法准备

我们先要为`TrackerController` 准备一些公用方法，分别用于构造响应信息（包括正常的以及错误）、禁用浏览器访问。修改`app\Http\Controllers\TrackerController.php`为以下信息：

```bash
<?php
namespace app\tracker\controller;
use think\Controller;
use think\Db;
use think\facade\Cache;
use think\Request;
use think\Response;
use think\Validate;
use Rych\Bencode\Bencode;
class Index extends Controller
{
    private $errormsg = [
        // Error message about requests params
        // Error message about Bittorrent Client
        // Error message about User Account
        // Error message about Torrent
        // Error message about Server
    ];
    private $announce_param = [];  // Announce Param HERE~
    public function announce(Request $request)
    {
    }
    public function scrape(Request $request)
    {
    }
    private function block_browser()
    {
        $judge = false;
        $request = Request();
        if (preg_match("/Mozilla|Opera|Links|Lynx/", $request->header("user_agent"))) {
            $judge = true;
        }
        if (!$request->isSSl()) {
            if (
                (null !== $request->header("Cookie", null)) ||
                (null !== $request->header("Accept-Language", null)) ||
                (null !== $request->header("Accept-Charset", null))
            ) {
                $judge = true;
            }
        }
        return $judge;
    }
    private function sendErrorMsg($code = 999, $msg = null)
    {
        if ($code && !$msg) {
            $msg = $this->makeErrorMsg($code);
        }
        return $this->bencResp([
            "failure reason" => $msg,
        ]);
    }
    private function makeErrorMsg($code)
    {
        return "$code - " . $this->errormsg[$code];
    }
    private function bencResp($obj)
    {
        $rep_benc = Bencode::encode($obj);
        return response($rep_benc)
            ->header("Content-Type", "text/plain; charset=utf-8")
            ->header("Pragma", "no-cache");
    }
}
```

我们将在`$errormsg`中定义错误信息，并在`announce`以及`scrape`这两个公开方法中定义具体逻辑。**而所有的响应应该使用`bencResp`构造。**

## 构建Scrape

相比较为复杂的Announce逻辑，我们先来处理较为简单的Scrape逻辑：

1.  从请求头中获取所有`info_hash`信息，
2.  从数据库中匹配出来对应的做种内容，
3.  构造返回或错误信息。

下面我们开始写Scrape的具体逻辑。首先我们先禁用掉 `非GET请求` 以及 `浏览器及非BT客户端请求`。代码如下，但实际上，因为已经设置的路由关系，我们其实已经禁止了非GET请求~，这里需要不需要都无所谓了~

```bash
// 1. Block NON-GET requests, (though it should be block in Router)
if (!$request->isGet()) return $this->sendErrorMsg(100);
// 2. Block Browser, Crawler or Cheater
if ($this->block_browser()) return $this->sendErrorMsg(101);
```

然后我们从请求头中获取info\_hash信息，并检查其是否存在（这里附加对各个info\_hash的字节数进行检查也行）。当其不存在时，返回错误信息。

**注意**，根据[BEP0048](http://www.bittorrent.org/beps/bep_0048.html)规定 ，info\_hash在url中是以`info_hash=xxxxx&info_hash=yyyyy`的形式存在的，故本人之前的写法是错误的（之前写法见[Archive.org的备份](https://web.archive.org/web/20181209113334/https://blog.rhilip.info/archives/988/)，只能匹配`info_hash[]=xxxx`的情况）

应为：

```bash
preg_match_all('/info_hash=([^&]*)/i', urldecode(Request::server('query_string')), $info_hash_match);
$info_hash = $info_hash_match[1];
```

针对info\_hash未找到的情况进行处理。

```bash
if (count($info_hash) < 1) {
    return $this->sendErrorMsg(null,
        str_replace(':attribute', 'info_hash', $this->makeErrorMsg(102)));
}
```

使用查询构造器生成SQL语句并查询，并对查询结果进行检查；当数据库中未检查到该种子时，返回错误信息。

```bash
$res = Db::table("torrents")
    ->field(['info_hash', 'times_completed', 'seeders', 'leechers'])
    ->where('info_hash', "IN", $info_hash)
    ->select();
if (count($res) < 1) {
    return $this->sendErrorMsg(131);
}
```

如果没有任何问题，我们需要把原来数据库中查询的结果（如下）进行转换

```bash
array(1) {
  [0] => array(4) {
    ["info_hash"] => string(20) "aaaaaaaaaaaaaaaaaaaaa"
    ["times_completed"] => int(0)
    ["seeders"] => int(0)
    ["leechers"] => int(0)
  }
}
```

方法如下，并最后使用`bencResp($obj)`的方式进行编码并发送

```bash
$rep = [
    'files' => array_map(function ($item) {
        return array (
            $item["info_hash"] => [
                "complete" => $item["seeders"],
                "downloaded" => $item["times_completed"],
                "incomplete" => $item["leechers"],
            ]
        );
    },$res)
];
return $this->bencResp($rep);
```

![scrape_resp.jpg](https://blog.rhilip.info/usr/uploads/2018/08/1882544365.jpg)

---

# PT站的做种和魔力值是如何增加换算的？
PT站的做种和魔力值是如何增加换算的？  
相信混了一段PT界的小伙伴，一定头疼一个问题，各大站点的PT魔力值是怎么计算的呢？  
以下是整理的帮助理解PT网站的魔力值计算方法。

**统计工具采用 PTTools 这款[PT助手](http://www.pttools.cn)的截图（隐私部分已做打码处理）**

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly81YjA5ODhlNTk1MjI1LmNkbi5zb2h1Y3MuY29tL2ltYWdlcy8yMDE5MDkyMS8wN2ExYmI2MzIwODU0MzQyODczYjBkNjE4OGQ4YzQ1Yy5wbmc?x-oss-process=image/format,png)

首先要说一下的是，国内PT站点基本上都是同一套魔力值公式，在计算魔力值的差异上基本不大。但是相信很多小伙伴还是云里雾里。下面上一张魔力值计算的公示图**（国内90%的PT网站都采用的这套公式）**

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2IzMTU4M2U5MjY5ZDQwY2U5YjgxMzdiOGRmZjE1NWU1LnBuZw?x-oss-process=image/format,png)

如图所示，很复杂的一套公式。文科生包括小编我在内，对这个公式真实“恨之入骨”~当然了，其实也不复杂。经过小编通过多种资料的查询，最终得出的结论如下（简易版）：

**1.发布时间较长**

**2.做种人数小于10个**

**3.体积越大越好**

只要在保种的同时满足以上3点，基本上跑满进度条是很有可能的！当然啦，如果小伙伴需要了解更加详细的资料，可以继续往下看。

**魔力值分析**

魔力值的A公式如下：

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2I5OWQxNjg1MWIxZDQxNmU4NTQ1MGIxYzFiN2QyZTZhLnBuZw?x-oss-process=image/format,png)

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzgxNzhmYmYyNmNlOTRlOWI4YTZkMzQ3ZjVlNGFhY2Q5LnBuZw?x-oss-process=image/format,png)

式中

-   **A**为中间变量
-   **Ti**为第**i**个种子的生存时间, 即自种子发布起到现在所经过的时间, 单位是周
-   **T0**为参数。**T0** = 4
-   **Si**为第**i**个种子的大小，单位是GB
-   **Ni**为第**i**个种子当前的做种者数
-   **N0**为参数。**N0** = 7
-   **B**为1小时中用户获得的做种魔力值点数
-   **B0**为参数，代表用户1小时获得魔力值的上限。**B0** = 50
-   **L**为参数。**L** = 300

**A值**

我们只讨论单个种子的情况，因此忽略掉加和运算，该公式包含三个变量，为了研究每个变量的影响，我们把公式拆分

（1）1-10^(-0.25\*i) 种子存活周期影响

（2）1+1.414\*10^(-0.167\*(i-1)) 当前做种人数影响

其中i为变量，分别代表周期数（以周为单位）和种子数

（1）函数图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzU0MmRjZWQ4ZDdkNTQwNTBiOTc1NmJkODgxMGRkYzU3LmpwZWc?x-oss-process=image/format,png)

从图中我们可以很明显看到：8周后时间对函数值没有明显影响。

（2）函数图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2U4MjU2NDM3OTNkZjQ2YmM5MTRmMGQ2YjJkMzAwYjQ0LmpwZWc?x-oss-process=image/format,png)

从图中我们可以很明显看到：大于10个做种人数后时间对函数值没有明显影响。

（3）（1）\*（2）的函数图形为

我们假设做种数和周期的数值相等，可得如下图像

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzA4M2RjNGQ2NWVjMzQ0NjU4ZTBmYWNkNTEyNThlMWQ4LmpwZWc?x-oss-process=image/format,png)

从中可以看到，种子数计时间为5时 ，有最大值。

（4）（1）\*（2）\*Si的图形

我们让做种数、大小和周期的数值相等，可得如下图像

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzVhYWQzMmViMTNlODQwN2NiODc0OTYwOTYyMzIwZjAzLmpwZWc?x-oss-process=image/format,png)

**B值**

B值（也即每小时魔力值）与A值关系见下图：

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxLzYwNDM5NmMwZjg5OTQ5NTJiMGIyNWE0MjVlMWYzOTk4LmpwZWc?x-oss-process=image/format,png)

在0-300时基本是直线关系。

**特殊情况分析**

当周期大于8，种子数多于10，函数（1）（2）的值不再随他们的增加而明显改变，因此以此时的值代替周期大于8，种子数多于10的值是合理的。

下面分析满足以上情况时的魔力值。

首先周期等于8，种子数等于10时，函数（1）（2）的值分别为0.99和1.04，则A值为A=1.0296\*Si ,B值为B= 31.85\*atan(（1.0296\*Si）/300)

其图形如下

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTkwOTIxL2Y4ZWNkNjBiNmYzNTQ4MmE5YzZjZDE3OTI1MzFhMjQ0LmpwZWc?x-oss-process=image/format,png)

重要结论：经拟合，以上线性方程为y=0.09658x+0.545，x为种子尺寸，y为一个种子每小时魔力值。相关系数为0.99867，标准偏差为0.2886。该方程适合周期大于8 ，做种数多于10的情况。

同时我们还可以得到一个重要结论：占用同样的做种磁盘空间，多个种子和一个种子所获得的魔力值是相等的（不考虑0.6\*12，适用于周期大于8，做种数多于10的情况），因为他们的A值是相等的，比如100g种子1个和1g种子100个，他们的A值可用A=1.0296\*Si计算，显然二者相等。

**结论**

1\. 8周后时间的增加不会让魔力值明显增加；

2\. 做种人数超过10后，做种人数的增加不会明显减小魔力值；

3\. 一个种子存活8周后，且做种人数超过10，种子尺寸小于200G时，魔力值与种子大小有近似直线关系，即B=0.09658x+0.545；

4\. 占用同样的做种磁盘空间，多个种子和一个种子所获得的魔力值是相等的。

以上就是PT站点魔力值的计算方法，看似复杂，其实主要记住最重要的三点“**大**” “**老**” “**少**” （即种子体积大，种子存活时间长，种子的做种人数少！）

---

> 参考来源：  
> [漫谈 PT 构架（1）：NexusPHP 简介](https://blog.rhilip.info/archives/961/)


---
> to be continued...