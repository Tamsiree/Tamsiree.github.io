/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a991e21cac576c35d41126db2d8e82c8"],["/Computer/Alienware/Alienware更换电池/index.html","9c04932725ddaa4f5e4386018426893c"],["/Daily/Hobbies/Guitar/吉他入门/index.html","cc41aa33112bd7cf49fad062663dccc4"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","c5eb62cead861558c03bf063d07973aa"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","f9f9e7ffc259b01231e2cca65a1d8d26"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","78867d0a689dd39c6eed1cb5c3faf9ed"],["/Daily/Memorandum/index.html","a212bc0322b17235a3b126aa109b3d0a"],["/Daily/个人所得税/个人所得税/index.html","6d013ba9516b93c55157862aa6692ff9"],["/Daily/五险一金/五险一金/index.html","88320914999a5f8aa32477e348ec991f"],["/Daily/生活小常识/index.html","844ab68562e4e9fc247d535dcd00ae87"],["/Daily/网络用语/index.html","bcb3d7d30bb5764c0629d5cc546aab5c"],["/Design/设计用户界面的注意事项/index.html","b891912285fe8ff51d3214a056463635"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","731df169014e4f9f345348f5ce975e87"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","102bc7ebff7454b935a2ece6b8c4f138"],["/Game/GamePlatform/Steam/ARK/index.html","df0ad41d133eb7a2c9e1e668c2987797"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","f3ef870d1be32df36ee4a656fe9147fc"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","282ae0e2ef02e780c30967e3a060f5c7"],["/Game/GamePlatform/Steam/Steam库共享/index.html","26615815b622bba4997fbede12731154"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","65e5082b648a68c1d7c1286f0b83d379"],["/Game/如何独立开发一款游戏/index.html","7d5a6809d6f2c2f2b6900fe6a8112261"],["/Google/Chrome/Chrome上网助手/index.html","591b6e3860e2c3a629a1e70b134f9f29"],["/Google/Chrome/Chrome使用技巧/index.html","7ea9a192e21be3ba0a056e2f467260be"],["/Google/Chrome/Chrome插件/index.html","f50e73bcb7f3291528b0570a54d26af4"],["/Google/Chrome/Chromium/Chromium/index.html","02ebe849e726cde2693f17d699970a75"],["/Google/Google搜索/Google搜索技巧/index.html","c2817a908e55518ca668465ad55bb03d"],["/Hardware/HardDisk/硬盘分区结构/index.html","4166d27b7718d1af0087edfffc918dbc"],["/Hardware/Router/路由器固件/index.html","e56aa20a9825d00dd44d1c7f8cc96011"],["/Interview/Python/2020年字节跳动面试题/index.html","d3e869e21db659a0385b6d4bafa09382"],["/Movie/HongKongMovie/开心鬼系列/index.html","7cd58c266d550bca8f0b2775b0145bb6"],["/Movie/小王子/小王子电影的共鸣/index.html","e7f240f12c0d694d35d1e7a7b97ab062"],["/OperationSystem/Linux/Linux分区管理工具/index.html","415324aaa518d5dbc4533fc59e39b1fc"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","bf8020cf7e91c36fd02371e887b23809"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","28fb6d4abe4507b81e72ecebd84ca642"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","970566e9d4eb1114518450c6b50f4e44"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","308aa881f52f04045d8f16cd24a874d8"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","c189c9c36c1e49b007bfe91a3cc53c56"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","e96c3702b34e50ca4837def11e782526"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","0ad498db9ab9cd5c3739c97ddf1daedb"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","04cb3524bc4392fad394057d72b1b620"],["/Research/Math/线性代数/线性代数公式/index.html","d0033f7f35e5e88d187fd74677356a99"],["/Research/Math/线性代数/线性代数知识点总结/index.html","a26882d45c9c4cd214ffa3f721134455"],["/Research/Math/高等数学/高等数学知识点/index.html","090a41f5dfeeaabb15ebd4bcfd36ca46"],["/Research/Memorizing/费曼技巧/index.html","d69b7e80cb8783f3e97d72771ca2abe5"],["/Research/思想政治/考研思想政治理论知识/index.html","1c2c7742031d6d7733979d8c103e9a37"],["/Research/数据结构/数据结构/index.html","f5f823db017a20abb23d2de4e593ebf7"],["/Research/英语/考研英语作文/index.html","b8c0cab91a4d94f0a7ee1fb468be0a08"],["/Research/英语/考研英语词根/index.html","f8bcdf719644e22ddb888f69f791c19f"],["/Research/软件工程/PseudoCode/伪代码/index.html","4a9fa722d9ee69a614ddd25b5747207e"],["/Research/软件工程/中南大学软件工程考研题型/index.html","bb0f503fcb3bbd85dd1001e231fa97ef"],["/Research/软件工程/软件工程基础知识/index.html","ca87d15f7d965d40cb2d4aa5b57fad3f"],["/Software/Anbox/Anbox/index.html","38e6bfb7ca86da01c40ab99077df22ec"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","9424e9eba224984e9096b15df45b4850"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","acb17f3c145ba51c7df4e6cd89d84b29"],["/Software/Office2019/Office2019激活/index.html","b8a8678d7d8a34fcfe25ecd2856117fe"],["/Software/Pycharm/Pycharm激活码/index.html","d3f83df9c80ed9af4bf117a453a69bf5"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","d9d7fffb1163b0db02a07b1fb1f75057"],["/Software/UltraISO/UltraISO/index.html","c2a120cb80c7beb99ba1dc31ff8f2d76"],["/Software/Unity/UnityHub许可证手动激活/index.html","d99f23c94ecd3aaa0240628742c56920"],["/Software/Unity/Unity使用技巧/index.html","0cd4cc2c93575ade719fcf59c8f7d439"],["/Software/Unity/Unity动态加载Prefab/index.html","cadc0a15bc897bbdef391e9f758f8bd2"],["/Software/Unity/Unity的Canvas组件/index.html","8cb2ac04a52cd947498c97d485302b2e"],["/Software/Unity/Unity问题归纳/index.html","0b938c0b4b11ec35e1783070b1345f4c"],["/Software/VLC/VLC使用技巧/index.html","81f695b4315c7b76c64c3b1a384ad919"],["/Software/VMWare/VMWare/index.html","6ade388d4b20fe827e61ee7bef93e6f5"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","74d7bad7a0aa19c3800f65f7038c05d5"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","ca8fa1e7a53e37b398b9238ff1447a5c"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","4175ad62e8bbf653d064b149733a23aa"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","5c7d61babe7709f93a6cb95fcef77d6b"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","9b2985db5693df7166d49c6b2fb5fcf7"],["/Software/Windows常用软件/index.html","3c1c8bd043e474462557fd1b6c74e725"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","e338872608bdb16ac453049acad4eec8"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","c783953a791fa836784be20fdd9e96bd"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","272a979a1d31c886d019ba25b2365640"],["/TechnicalResearch/Base64加密原理/index.html","05b50cfb5c9d468aa58a35bf39969ed6"],["/TechnicalResearch/CDN/index.html","75ff4ffbe9206f6db3060a10324212a9"],["/TechnicalResearch/Git/Git/index.html","6492d2ee7a085c6914c926c2829bfe45"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","36b7524f5b05120c44b91ab7b37103fb"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","2b8749dbb924f3a9217c30092c30a76f"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","907e518bde323576f5175d16da062a8f"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","bb714f377c694b9fbeb1819828fbe6f8"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","55368224412b5780b44562aa429b1f1a"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","477f2f1250fc591c13299cad9a1f0f1b"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","12652db994a62ecc44d8ab8fbc7834c8"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","95f432bf6cae4b2c38290036a5b85ac6"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","bc48b92cdaec581c7e903138696c8a36"],["/TechnicalResearch/Java/Java基础快速入门/index.html","e5b8f579e9204aa74ebb22509d70e326"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","c5b481db29c4ad7b50e8e323eeb74656"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","63858db804666f36bfc3d7ac382b7989"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","ce867b793a0781f4b7e994da5d977b1d"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","e5b4989b8805ad77de046771682f3360"],["/TechnicalResearch/Python/PythonExercise/index.html","aa5a47dea3282d5391b9c75a2e5768ac"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","9fb16fd2c31fff9afaff0dab97e4acda"],["/TechnicalResearch/Python/Python问题归纳/index.html","77c3a5f02114e8f2fc206af84cb6f3cf"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","970960e666a74e881283e3b3f90ea2b6"],["/TechnicalResearch/Regex/正则表达式/index.html","c65657dc1c62670cdda36ddec11d0530"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","164596cce4407a61d5035f85af7dcbdc"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","954a81a963c64fb096e44382d090269c"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","82417d465878c5db5daab9689b2c538c"],["/TechnicalResearch/服务器常用端口/index.html","4405240f6f2e8168451abfed381140f3"],["/Teleplay/亮剑/晋西北铁三角/index.html","f0995c62e7df32b140ad04884460a5fe"],["/Teleplay/仙剑奇侠传系列/index.html","8454849f55af52d018e4ed73d11c5001"],["/Tool/Music/网易云音乐/index.html","9e7616cd5bd35924c53d962f31310cf6"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","0d07bc3f5fb5b67d26e75bc7ff836be5"],["/Tool/百宝袋/index.html","057957d199ba516077186f5b00925ef2"],["/about/index.html","6bf644f7982728efd2156e9bce6b5339"],["/archives/2013/10/index.html","e2f614c9dcb5007c791a9cbe8e5aba1e"],["/archives/2013/index.html","e640cb191687c4a7bf179014a5ed63c6"],["/archives/2016/09/index.html","83ce275875f257e8f4a23c8a587ea1ad"],["/archives/2016/10/index.html","531db06ac7ea72783f43ffde1ee93d9d"],["/archives/2016/11/index.html","2d901c1edde4293ae92b2ec1ae09bcc9"],["/archives/2016/12/index.html","2f716dd29fcc8f2667c70f25fce90ede"],["/archives/2016/index.html","ccc4d4e63e719f8518cbce1c500d8929"],["/archives/2017/03/index.html","c477a059594663aa84bced5cecab7f08"],["/archives/2017/06/index.html","93552ab71900d75e95df0c9336c756dd"],["/archives/2017/07/index.html","a71a640a109e1555a9d65da50060c1c1"],["/archives/2017/09/index.html","a97cc954a60d2f12312a64bde582139f"],["/archives/2017/10/index.html","dee84dae627a7818d76662218c112b7c"],["/archives/2017/11/index.html","e7ca59a09a8128678b86f5795e9cc629"],["/archives/2017/12/index.html","2ab3313c820ec1aef8fd64cdee2ead97"],["/archives/2017/index.html","9258fd2d855a9e3689b197416e2510c8"],["/archives/2018/04/index.html","1da13c6164ac2f2c35b607d07dbbde6c"],["/archives/2018/08/index.html","cbc4aa6f8b7002a3ecbd75e5b81b422a"],["/archives/2018/09/index.html","c7ef266ebb5559c332ad86826abd0f26"],["/archives/2018/10/index.html","7bcdc3097b265551cd4615b68ef663c7"],["/archives/2018/11/index.html","b8878f9351a72dd147e9a0840f806e5b"],["/archives/2018/12/index.html","72c1642c35796b7126715bb921ff4736"],["/archives/2018/index.html","1cd288977fc9dd431ead83ed10ff0d62"],["/archives/2018/page/2/index.html","49c50bbf82c1faa9f3d86a743e7966d4"],["/archives/2019/01/index.html","a0d179f1be3967a5a188b340ed957187"],["/archives/2019/02/index.html","39d5ef6def157632d548a1f85890af09"],["/archives/2019/03/index.html","9e751dcc1cf90ab99a79b9cd10c83a9b"],["/archives/2019/04/index.html","689a620470a290e5c306bd70cb0ee33b"],["/archives/2019/07/index.html","76066df4dc0b79f30f1e60876835f5ad"],["/archives/2019/08/index.html","32440abf4f2f7142c7f63badecc78d87"],["/archives/2019/09/index.html","13090e6d48f8433c5276089d76480066"],["/archives/2019/10/index.html","d78339c968b4867991374c904baeb3b8"],["/archives/2019/11/index.html","b35fe69bcc85ba8be09fccd06e96f4cf"],["/archives/2019/12/index.html","806efa3828ad7a25874d8377677110c4"],["/archives/2019/index.html","b34b679a414a67f26be26fc015cf66cf"],["/archives/2019/page/2/index.html","f02f6111fa413409eace158bfcd90d71"],["/archives/2019/page/3/index.html","2d23c2d08196a51c8d4a22690a93cf1e"],["/archives/2020/01/index.html","80e99d1af909103cced2b1d65bad61e7"],["/archives/2020/index.html","ed08efc6ddada54e3f6a6f22edffa2a0"],["/archives/index.html","a6f914c27c199bd7195e9d692f482396"],["/archives/page/2/index.html","10c564f8661e27b92ee3f305f8b84fb5"],["/archives/page/3/index.html","c5832131f9fd1121115d75f6d12e70ea"],["/archives/page/4/index.html","78d1b88b084de89c680f9a0d797cc029"],["/archives/page/5/index.html","41931132797ce235a697408e0ff2d313"],["/archives/page/6/index.html","608d76b54ce849af2666ff2891b30944"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","ff343e38c37bfa438ad97f647d9a1fb5"],["/categories/Anime/index.html","57c5018dfd49f77d8b97a4057c429083"],["/categories/Anime/宫崎骏/index.html","3d27b9a10d7c9c25c4e90d32f38b6475"],["/categories/Computer/Alienware/index.html","130205e5f3789444878f16c583f332c2"],["/categories/Computer/index.html","c33b70b52967dd444e83ad54ff32d48a"],["/categories/Daily/Hobbies/Guitar/index.html","bc80854ff733332479eaca86f1bc5064"],["/categories/Daily/Hobbies/PersonalDiary/index.html","294024ef917078f4bcb05b485ae53029"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","40340fc7a576a72d49edea0e7a6030b9"],["/categories/Daily/Hobbies/Photography/index.html","0dcd0053bf5e959f474d2d12a34aacd7"],["/categories/Daily/Hobbies/index.html","8e17bdba619bfb39dee3e78d6ac5eeac"],["/categories/Daily/index.html","341bf6dde0e8912e2af626bdbb4b3933"],["/categories/Daily/个人所得税/index.html","9e17ce55def5a1a72205e9ad2a142885"],["/categories/Daily/五险一金/index.html","53c63f0e9d39b5ec9d43136f4dca5b4c"],["/categories/Design/index.html","c8f28401412b787c7736d1fdadfd0dda"],["/categories/Game/GamePlatform/Lutris/index.html","8951c2c6a234f27005686c22084dfeae"],["/categories/Game/GamePlatform/Origin/index.html","18250470ff8b82f1aba15ed72c647025"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","51b9bfc4f5c175a6c2dc503957775ebc"],["/categories/Game/GamePlatform/Steam/index.html","04f9b411e420ba2869624a57241efff2"],["/categories/Game/GamePlatform/index.html","d7b5c198accb32efd5b5c48dbf820501"],["/categories/Game/index.html","ea8a234ecd6907c9958999a61a9610b4"],["/categories/Google/Chrome/Chromium/index.html","8f9f19ef6cc1ac03a8c832f3b1f788dd"],["/categories/Google/Chrome/index.html","b0797790653757bd85af4d342e64c79c"],["/categories/Google/Google搜索/index.html","b6b0c36e6f5a5ef2eaf68185ab334320"],["/categories/Google/index.html","35424c66fd8db887d45a8f76e5a144b1"],["/categories/Hardware/HardDisk/index.html","501815ccf7b93809887423e0b81e3c25"],["/categories/Hardware/Router/index.html","f674cb0e25e5c4438571e67ca922fd18"],["/categories/Hardware/index.html","bd57af5a40d94bf26a4b7568d99536f7"],["/categories/Interview/Python/index.html","aa9a973f55f4e94f444b846754a6c8ea"],["/categories/Interview/index.html","3b0ba17c042936dfc0d5972f2b6dc90f"],["/categories/Movie/HongKongMovie/index.html","d57d2014bf8b6540f909615c9fe370d7"],["/categories/Movie/index.html","5b4e483d86ce50ac5962dd89c597cd85"],["/categories/Movie/小王子/index.html","0a3394a6019fee7caf372cfb60dec30f"],["/categories/OperationSystem/Linux/Manjaro/index.html","c8686a9815352e43c241b1c05f90ad60"],["/categories/OperationSystem/Linux/SteamOS/index.html","f748b68d76aec92e9d4c50e7f6d4c51a"],["/categories/OperationSystem/Linux/index.html","96269e2e303f1335667ac0fc33f34757"],["/categories/OperationSystem/index.html","73ea59ebf473f44d67633c36ba421904"],["/categories/Research/Math/MathJax/index.html","d5c8dca573eff2be28c6f5cafbd39c4f"],["/categories/Research/Math/index.html","2c7baeb4bba333a59cdba60ca7782b75"],["/categories/Research/Math/线性代数/index.html","657f9e0a84a4f2be43988fcc03b2908a"],["/categories/Research/Math/高等数学/index.html","527059a2ef861a9a4f9a554d8f9a5ab0"],["/categories/Research/Memorizing/index.html","03f850ad59ff0d619a61157e6a9bdc51"],["/categories/Research/index.html","f8b25509d70292d44c5ac504ef75938b"],["/categories/Research/思想政治/index.html","c2ebf7dd41ba29be60fab4b5d49b1971"],["/categories/Research/数据结构/index.html","8acf9f0b4689ba0ccc8cc9b42d9cdfce"],["/categories/Research/英语/index.html","20f9c98f09f34067a9e3fd92506d64ac"],["/categories/Research/软件工程/PseudoCode/index.html","24253e944e2b120e196c9f9de810a9a2"],["/categories/Research/软件工程/index.html","a34339ec003b2526e395df5198c983d7"],["/categories/Software/Anbox/index.html","333f341de9aff93e55de85006da7ec6e"],["/categories/Software/AndroidStudio/index.html","9ade16950c549c61b5ee689fb057ac20"],["/categories/Software/Office2019/index.html","8e776cb14cb798a3180b4923c3da9058"],["/categories/Software/Pycharm/index.html","db7a23446a46cc18f876332e9f5b4079"],["/categories/Software/Thunderbird/index.html","a0dbae4b698f227b13832f4c45be1e22"],["/categories/Software/UltraISO/index.html","bedaab336c4eec5bfa83c6e2c57278c2"],["/categories/Software/Unity/index.html","80d6431f4b06eab98d0da8cad3ec8e62"],["/categories/Software/VLC/index.html","848d23dc21b96fb5a6060bf451fc130d"],["/categories/Software/VMWare/index.html","08a0a745d3cd02776aa20e029434f977"],["/categories/Software/VisualStudio/index.html","a6b2414a40b6504592d3f69fbe03c550"],["/categories/Software/VisualStudioCode/index.html","50bc3acc1be512ec8dfe8b128da7e4e3"],["/categories/Software/index.html","c85b39b453ae78fe7935194ace9c6dbe"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a56ba3a280774c094e87ee468dcffa35"],["/categories/TechnicalResearch/Android/RxTool/index.html","3085820eb5a55c2a3a7cfe3ef20889ca"],["/categories/TechnicalResearch/Android/index.html","6089fdb6dde777e9f5e77792b07879af"],["/categories/TechnicalResearch/Git/index.html","0f91a21366ad540daad1903bcfd3e2d6"],["/categories/TechnicalResearch/GitHub/index.html","f782cc1466fea79acd200a66450a9e5d"],["/categories/TechnicalResearch/Hexo/index.html","45d630d234eada7e2b6059fe732def06"],["/categories/TechnicalResearch/Html/index.html","5adb5bfb17cabaa128a2031629d26456"],["/categories/TechnicalResearch/Java/index.html","a033ae5f8ace704806a3d97c4c977426"],["/categories/TechnicalResearch/JavaScript/index.html","c7150fd8a8b71db93a221f9e144deb86"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","ebe19ba5f6eb61e30723da3c1daf4de6"],["/categories/TechnicalResearch/MachineLearning/index.html","7fd18cd456d0f9ce86e4fd916115a4a5"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","93f44e40e01b2c67453689bd70455411"],["/categories/TechnicalResearch/Markdown/GFM/index.html","7930b591edfee61b9f9a1fed98ef333b"],["/categories/TechnicalResearch/Markdown/index.html","7d4507cd5cce9eb519beed09a6fa8504"],["/categories/TechnicalResearch/Python/index.html","c210cccb030363345cb27a60ef83d84d"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","737f22ca108ad8d661dd6f8625a2454e"],["/categories/TechnicalResearch/Regex/index.html","b7d3a28e381af4024047b479e5523e6d"],["/categories/TechnicalResearch/Spider/index.html","0db455af831f9909c14d1b71d6a9343f"],["/categories/TechnicalResearch/TA/index.html","8d2a8980dfb2e27d9c4938beac3099ed"],["/categories/TechnicalResearch/UnitTest/Android/index.html","0997addcd11eb3e5e861d15082f008fe"],["/categories/TechnicalResearch/UnitTest/index.html","b0bf4033aeb01495170c66dda0176874"],["/categories/TechnicalResearch/index.html","44fc3ba5d33f5f22c501a3e6b539bf87"],["/categories/Teleplay/index.html","76fd822e472a163c791d297fc07ba347"],["/categories/Teleplay/亮剑/index.html","5e5bb6dd608635fe9c8b2105c07198d5"],["/categories/Tool/Music/index.html","39b3ee8147dbf16c0feb4b2567e465e9"],["/categories/Tool/Wallpaper/index.html","38b1c3a405b110c66905501a2145a9cd"],["/categories/Tool/index.html","c739c81a532b8f16885cff879f626a70"],["/categories/index.html","e6e1c1a7c72158f9b593b5a2c688ce64"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","92cf133d34fd2f723b8cf594f74afabb"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","eb1913d44abcdc4d1c00aedf47443fe6"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3ff8d5d6fee47f3a8432d0e268cd0deb"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","a3a1d0131c91d3b38982d1b39e6ddd32"],["/movie/index.html","7b98b4327b071550839252a037e207fd"],["/music/index.html","bc7da20b84899f44a2170d9ac9a7c35d"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","44ce88f0933161dbbe5b94300d4c3a76"],["/page/11/index.html","40baffdd248df4addda7befcc43ef2e9"],["/page/2/index.html","c8e6b2b19b20dd59b1bda94575381da7"],["/page/3/index.html","5deabe9aed24084f3598da862cb4903c"],["/page/4/index.html","0bce9bb463d9390d4abd26235fabbd81"],["/page/5/index.html","a52b8049c672767edc1d764662eeedd8"],["/page/6/index.html","5254e1628e7ed8580fe7b1fe0c094a4c"],["/page/7/index.html","e3acc04708b480062b5c1fd684118c07"],["/page/8/index.html","d586b42fe8a7726d98a79e0c365cef62"],["/page/9/index.html","02a86aa3d00c7d20e0e3664ed68e427d"],["/tags/ARK/index.html","f0c55f74ba72fd8b080482914a1a14e4"],["/tags/Alienware/index.html","5746961568fd3ea768994249468c9556"],["/tags/Anbox/index.html","23f818893fe2402f4aad7a44bd1ba98b"],["/tags/Android/index.html","6839add28a0e141813b4ac3e21d8c6b0"],["/tags/AndroidStudio/index.html","9c451d73c48c0aa823a68c418772c42f"],["/tags/Anime/index.html","76471b504fd56fdd9a53db39c29b6aa0"],["/tags/Base64/index.html","b49d82933213d599e5631cf7e8d63b27"],["/tags/CDN/index.html","09f8e84dc3be9b65ca33f1b93e09b739"],["/tags/CSGO/index.html","7432025d4e0ba2ba29fa6c376794ccd3"],["/tags/Chrome/index.html","4f3a33b081b19157b83e3ea7657f7476"],["/tags/Chromium/index.html","db31c4ca7de53d78106b9abba10cdf69"],["/tags/Computer/index.html","d2790e0834f9c264b3946bd3321ba861"],["/tags/Contributor/index.html","62e919e2e01e6dc23b1898e219b11c8e"],["/tags/Daily/index.html","1843c464061e887135c3a423a24f8bfb"],["/tags/DeepLearning/index.html","42be923b9cf760a65ff25be3af23bf1a"],["/tags/Design/index.html","37ea88a65f026bf2bab5a1a3a25ba1ac"],["/tags/Emoji/index.html","a007f521dd7829638dff28e08451aac4"],["/tags/GFM/index.html","227853ec8679ede7e86087b88343efbd"],["/tags/Game/index.html","ae787273c1f16b348357421a9f3a6e48"],["/tags/GamePlatform/index.html","056e5032b3da027f2cc084293cc9cd26"],["/tags/Git/index.html","0474908e16806f6e3fa12c926ea92d50"],["/tags/GitHub/index.html","ee31d93637665c99ded7c659433a0e57"],["/tags/Google/index.html","de75264d4008f2625d15226c0c7ab7dc"],["/tags/Google搜索/index.html","a777012afd6002458a700459a4bcb452"],["/tags/Guitar/index.html","c6be8e331b199864056266c33de7f176"],["/tags/HardDisk/index.html","3537410c95ec676167fa4f538b7aae77"],["/tags/Hardware/index.html","e18bebc4deea1f76432fd3d23310f95e"],["/tags/Hexo/index.html","af53d0ddc5b4affa4950bbc38bc4d5e8"],["/tags/Hobbies/index.html","07200398a3aed463e8453f94b1fed22b"],["/tags/HongKongMovie/index.html","f3ff13f7e54ca94c325aedd79fed6ea5"],["/tags/Html/index.html","fb9d70b27c2cf6b0282246d9c1cb9f88"],["/tags/Interview/index.html","1606e9c97015a65e690401c58cd4c71d"],["/tags/Java/index.html","e5e73aca386f4c629f47f085b5a3d68c"],["/tags/JavaScript/index.html","e6d74081463c2399c3a61ae4b4df5c87"],["/tags/Linux/index.html","81106549915958dbbd52c5ce57f8a140"],["/tags/Lutris/index.html","d09c096de4f46e2d1f45129e44e87ee7"],["/tags/MachineLearning/index.html","8f6dd157359ce30dd2b55bdfd333efb0"],["/tags/Manjaro/index.html","842da7b36d33809222bae2cd2e733688"],["/tags/Markdown/index.html","2ea49fe0abe0bf718693d1d503b81400"],["/tags/Math/index.html","1f294c323a3a34ae4f32e85b17edbdb7"],["/tags/MathJax/index.html","6d19ff13fa1e746b3af5812249427bb2"],["/tags/Memorizing/index.html","3ad4c0660cd3e0fd256cd4067e49e458"],["/tags/Movie/index.html","908dcefdbefae662ac6b09137e2578cc"],["/tags/Music/index.html","b3ce585f19635d210953109f9e9dfeda"],["/tags/Office2019/index.html","7254cbbba1a11a4edc8e05f34dd947ad"],["/tags/OperationSystem/index.html","b91f6c03cf0493e950871f06da9d2e8f"],["/tags/Origin/index.html","2c76faea59497a8093a5d22a91ace280"],["/tags/PersonalDiary/index.html","d43c7307b6cb6ab3678eb215e590410d"],["/tags/PersonalPoetry/index.html","2fca6efc9d26a2410a39ecec4dde7dbe"],["/tags/Photography/index.html","afbf3ee5a2880b216b779afd29e6bad0"],["/tags/Port/index.html","a23ae9e68ecde7afd64d29701d9ea753"],["/tags/PseudoCode/index.html","e132eeb9118d7a433c1d3506f8bc5803"],["/tags/Pycharm/index.html","8514a0a1587c82d615ec93ea00ee2e99"],["/tags/Python/index.html","c1e14f06515ec05c9772118a627bdaac"],["/tags/ReactiveProgramming/index.html","b599965aafcb5f4b07c7e87d8ae1d953"],["/tags/Regex/index.html","378a97444812a5ef96e2632385852cec"],["/tags/Research/index.html","70cb3bde86ae0e884ab8e1746fe66d94"],["/tags/Router/index.html","233ba8f69cdd3f0a1072c0f81973d222"],["/tags/RxTool/index.html","0ddc8e5b5c4846d657b232ec063d0737"],["/tags/Software/index.html","d1686aec6ae0a8e75304a2fc007e1a06"],["/tags/Spider/index.html","580a50c7da47575a62e3af179f63ae58"],["/tags/Steam/index.html","6e5333d9b08fd5f0ab9d25a2e9d97897"],["/tags/SteamOS/index.html","da5cae2c2891a966203b00d39806d6dd"],["/tags/TA/index.html","dbc3e77e9313b8567d90798687cfc22d"],["/tags/TechnicalResearch/index.html","5cac420b980443d40a269952040c7315"],["/tags/Teleplay/index.html","cf166c254f0438fa25ca3a8ae1276a19"],["/tags/Thunderbird/index.html","0a84fe8313ddec8b471ca442d8e4ed01"],["/tags/Tool/index.html","e5bd8508f9bf2095dc11c2c0379fa553"],["/tags/UltraISO/index.html","84e56002d1b109bca8f096866490f188"],["/tags/UnitTest/index.html","d8037f317a30b97eb9270716e3abd286"],["/tags/Unity/index.html","bc50770ff0289408e9ac9a3ecadc14f8"],["/tags/VLC/index.html","b114674da66cc187613081a9db90a76a"],["/tags/VMWare/index.html","0a77b1d10b4bdb9b8871a8d2e1907093"],["/tags/VisualStudio/index.html","41f62162b2e7e32a60d71ee812024a98"],["/tags/VisualStudioCode/index.html","f97974fab0d97d60d18e494eda274567"],["/tags/Wallpaper/index.html","51be3bad69baba76e0e389fc636844fc"],["/tags/Windows/index.html","398048e20d7ffd60a6d63b0b72a7891d"],["/tags/index.html","511c744d83f1f87c59f67c9bcf5f3e17"],["/tags/个人所得税/index.html","edb3da4343f1e5fb6f89c6a3766e74fb"],["/tags/五险一金/index.html","16270ee624afdea5dd4a70cf18057ac2"],["/tags/亮剑/index.html","81660f741d28eb64d50cbc3eb35ebade"],["/tags/仙剑奇侠传系列/index.html","fecb22a5a2e7c8b93de71c1848021302"],["/tags/千与千寻/index.html","41d3acab8b9433ea6cfa90a08290e0ab"],["/tags/宫崎骏/index.html","99f25e246d4a5877c2fb5b9acacb626a"],["/tags/小王子/index.html","db9a34ceb7cffde58b345c7dbba2922c"],["/tags/开心鬼系列/index.html","95439ce9536c8425983bb26f4d17518d"],["/tags/思想政治/index.html","9720c191c98ef636869e1b7a31939bb8"],["/tags/数据结构/index.html","380d8f036d193aefdaa84b6d46228cf4"],["/tags/线性代数/index.html","82880a28397160c0e41403ddaf75783b"],["/tags/英语/index.html","b96d2cb3c12d1b0cd7d73f3f4a1e6148"],["/tags/软件工程/index.html","b784656217c29d1d8f66c46d212af1c9"],["/tags/高等数学/index.html","e78619b9ae776e065533f945724e543c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://tamsiree.com/"});




