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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","5d164d8752e546e9d43df44f665dbf24"],["/Computer/Alienware/Alienware更换电池/index.html","19e1b63e92ca4dd293191be5587f26df"],["/Daily/Hobbies/Guitar/吉他入门/index.html","a33e49102ee66becf733a6ec76b5daaf"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","c364b55c08f56592312c70abdfd004c8"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","0a9d4ef256ef5d1977ec1a5b78ffef88"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","de2a4c96d72ec25548dd7cb730a7c569"],["/Daily/Memorandum/index.html","dc9ab6aae79da212dea3334c0a1cffb4"],["/Daily/个人所得税/个人所得税/index.html","84ce0b600be668fc72c2fc9a781a5744"],["/Daily/五险一金/五险一金/index.html","87e76a974f5e21f7458e7712ce00e7df"],["/Daily/生活小常识/index.html","362bd9430c74e52efe830f71371156e1"],["/Daily/网络用语/index.html","a48fc938ea8d80b9e2f4540e7f140758"],["/Design/设计用户界面的注意事项/index.html","d749c25c277b65bea58972c8eb9f3b14"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","3627c9a22711e9c5fa8e7929a1318fd1"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","4618fa5a100acd416b618dd86fb892ff"],["/Game/GamePlatform/Steam/ARK/index.html","7fce06f1b912e72131379703e75cf3ab"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","dd595a47affca8389fb4e36bdffa75e9"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","27e65e224111a3ce488012a58a192641"],["/Game/GamePlatform/Steam/Steam库共享/index.html","d1052f47849a35cd680b9c36fe08dc8e"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","a466d6206276b175d53c3a1d108bc345"],["/Game/如何独立开发一款游戏/index.html","49e22d05e0b2922f462bf6548c947d0f"],["/Google/Chrome/Chrome上网助手/index.html","bc63350e303b6ff6cb3a7a2d19a6b64b"],["/Google/Chrome/Chrome使用技巧/index.html","c402b917a9571b5e521c942d7da0202e"],["/Google/Chrome/Chrome插件/index.html","6b7fa9675950ab2b413353cc4e2b2e06"],["/Google/Chrome/Chromium/Chromium/index.html","f232cd62ac292c9dcdfab8f43328f444"],["/Google/Google搜索/Google搜索技巧/index.html","f91b16e8f2c573587dd8881f0f828910"],["/Hardware/HardDisk/硬盘分区结构/index.html","93e44e19bda011bb29e3f5603a782b20"],["/Hardware/Router/路由器固件/index.html","65f2cf9e3314fa1427bc30508298fe30"],["/Interview/Python/2020年字节跳动面试题/index.html","0469f762bdcb56f1e18f6936c8519907"],["/Movie/HongKongMovie/开心鬼系列/index.html","4d00306ebd8f5b3bdc2acde42f8349ce"],["/Movie/小王子/小王子电影的共鸣/index.html","7a5d1ea2aebf89473411878034066cee"],["/Novel/盗墓笔记/盗墓笔记/index.html","19c0177dde56a88664ec3158f9acbfcf"],["/OperationSystem/Linux/Linux分区管理工具/index.html","71bd8c98082f18a931310290195629a9"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","75efba25bb064a842dc3d388f6950dad"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","eb20ab4e5b3a7a810ddf284686af1d05"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","2514c9a7b474e21be368da4521b0c7b3"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","38e0447c9e6c3cb8dbf46b2d3027d032"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","8a87de8c31f9ebd28e32b0836cd73f38"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","90c3e95c0a606d162c42ee5168b0be39"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","dba61fac7e65d478820d78b872129cb3"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","da7f62115e5f6193641ec4b04efa4655"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","8e4cc25edae301cac738b9d5e333e480"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","17d6a8f92b20fe88f672c52e5f24a17f"],["/Research/Math/线性代数/线性代数公式/index.html","a63e19cb9f3af8994e549d26326e26d6"],["/Research/Math/线性代数/线性代数知识点总结/index.html","34aaac040b9bb4f5393490dfc478c797"],["/Research/Math/高等数学/高等数学知识点/index.html","c1b56401d237faea40b0dc38a6f0406c"],["/Research/Memorizing/费曼技巧/index.html","871a30d2a76dc9a6bc0504e86b74897b"],["/Research/思想政治/考研思想政治理论知识/index.html","26e88e3642ddc9b5db0d21bfcd766185"],["/Research/数据结构/数据结构/index.html","6ff4461a898375e9c9f8bd0e56860062"],["/Research/英语/考研英语作文/index.html","ffed123a59df5e68c7bc0a8c85280965"],["/Research/英语/考研英语词根/index.html","099cc896cc1912abfba2355c199a9a25"],["/Research/软件工程/PseudoCode/伪代码/index.html","f2ced214c4c43228718a6e63daa916b4"],["/Research/软件工程/中南大学软件工程考研题型/index.html","64590df77168209363e0eeb21b923570"],["/Research/软件工程/软件工程基础知识/index.html","16cb107270008762cc39d81378871727"],["/Software/Anbox/Anbox/index.html","2d1279f239454e231467501962726e22"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","70a135e96507317c835f8339e1619499"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","a90d8cfb9b6b332ff35e40b0aa53ce57"],["/Software/Office2019/Office2019激活/index.html","ead4cb5a8a64501b3f1a2a015e6774c5"],["/Software/Pycharm/Pycharm激活码/index.html","e63060e41c28ed00f2097f5e0127f5ab"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","d5c54e8d866bf3c1dbfee035c14f0acf"],["/Software/UltraISO/UltraISO/index.html","3690b9fcefc810bf4ce7285bf33b50de"],["/Software/Unity/UnityHub许可证手动激活/index.html","f0666c2bd7b1715353a2e9bc5473d1c4"],["/Software/Unity/Unity使用技巧/index.html","c9b0b2651eedfa618ed868400fe5e9a5"],["/Software/Unity/Unity动态加载Prefab/index.html","ae7cd7359e0de1c8e0fe4b7b95fde746"],["/Software/Unity/Unity的Canvas组件/index.html","04df2b637ecac45d111923fd89d1f2f8"],["/Software/Unity/Unity问题归纳/index.html","a962f2440445a3569949b96c5851af1f"],["/Software/VLC/VLC使用技巧/index.html","fd501de11d6d4508916b263a086074c6"],["/Software/VMWare/VMWare/index.html","d7250e81167d9a629ad199b2e2f6fe75"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","a933a30b766996b4eb230126b339bb18"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","a01233601d5980da7f4e34cf2860e811"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","61460475cbc807390255e0eb2b4aa528"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","f7323a5ca5a60ef45f9736e35a4bbfd1"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","aca74223cae27d98432129d78df58aa2"],["/Software/Windows常用软件/index.html","21633bb2874ebc9e7f86bd01ed109952"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","1799112b5fa077b2204d2bdd37885da5"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","b3e94353c36d3564f6989643e6608e73"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","bec3598557f339faab85f5aabeb448ba"],["/TechnicalResearch/Base64加密原理/index.html","9f506d8abb96d5e28889c5f30ecf5805"],["/TechnicalResearch/CDN/index.html","afb79219e61ad925c1475f235278663e"],["/TechnicalResearch/Git/Git/index.html","87f958e28a6fad10c509066cb31b82fc"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","22ccdf743e8c472c918bae39b06ab9c3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","0709f59774fcb95739a4c60eade48118"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","2cb4de9e29d1c1bbecaa34630a241199"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","bcd48eb184f5b034d5acfa1b663300e3"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","5d99272cda89805b63dc7a21edf7fbd2"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","3514270debfb222496a0a855bad79cea"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","4c914bfb34d7b12762fec58978db2089"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","94884faa16eebb5a3b9eadb2a9d5af17"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","1dffc5d019f40faa55693169204f500f"],["/TechnicalResearch/Java/Java基础快速入门/index.html","7fb1c7b63a87ed90ad493092fed767d3"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","18af51a6202e9f69022545fc61328716"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","40c473055987fa25876a7605b3db4c30"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","d659a403e1f64c3469ef8c3812adbdd0"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","6f2441451bb0db6b07a491c6b1b35712"],["/TechnicalResearch/Python/PythonExercise/index.html","cdceea0bde9bb027c736f750699f849f"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","8664e3d4ef7f1e7c85893fe88abcfc21"],["/TechnicalResearch/Python/Python问题归纳/index.html","155e7b5e46d1a95f10b7e3e84bf9d949"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","c01394ad2db7c03ab04412b8eee22193"],["/TechnicalResearch/Regex/正则表达式/index.html","f25da52d9e3f2123ebc22d52a95ec9e3"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","59f6bb94620cb98155e404b206210940"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","36c9fea0331dcd7d8bb80f2db6b99add"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","5a970782807c97b43cb216a6311339b6"],["/TechnicalResearch/服务器常用端口/index.html","fec27875c1da21df1615b206a8b3e349"],["/Teleplay/亮剑/晋西北铁三角/index.html","9b0950d67853d6047c4f256057c22997"],["/Teleplay/仙剑奇侠传系列/index.html","4f7474cbc2e545f106d5da3196bf6930"],["/Tool/Music/网易云音乐/index.html","39c8f7eea67a01089932ada5a397bca6"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","9ab96c5d50c59892ca4b91454daf94a3"],["/Tool/百宝袋/index.html","6f1e525444edfab90f85e795e3ab7a80"],["/about/index.html","4eec69ef4996c8a2044f3e4719588a41"],["/archives/2013/10/index.html","c7f541b311c22de5fdbb0cd6671388f6"],["/archives/2013/index.html","1f12084e189223c68d5fb2469e64a10a"],["/archives/2016/09/index.html","75b6489e0114c4288038e763fadadd9d"],["/archives/2016/10/index.html","d81da3ee21d37ad85152845c971a7570"],["/archives/2016/11/index.html","ecc2668f89b853136d6a127b31723234"],["/archives/2016/12/index.html","a6dfc84dee50350c02f1ce03fe7ad9f9"],["/archives/2016/index.html","fa2986e13ff85364288521fcbd823483"],["/archives/2017/03/index.html","45e71c8b4f7361583137c113cd9ed462"],["/archives/2017/06/index.html","9f5e92114e7c2ddbdfb3665c036f6647"],["/archives/2017/07/index.html","2c62798c88435279f2938ad4dccedf56"],["/archives/2017/09/index.html","bf84dfbff94235d952a811519444c7c5"],["/archives/2017/10/index.html","97850c7d6c437c01455e80e676dc9bc1"],["/archives/2017/11/index.html","a981d92018e78e7a81625a29bb9c92d3"],["/archives/2017/12/index.html","6e5418ac52e33afdf9fc212415fba7d3"],["/archives/2017/index.html","6f8c8a0704cfcc624b510a1376fc1a35"],["/archives/2018/04/index.html","269492a74ffbe491ac84fa3d94e53720"],["/archives/2018/08/index.html","593e144a1899840c04344d91d76cd5e1"],["/archives/2018/09/index.html","e60d189d95d6a3a5a69e7b10f7cf931c"],["/archives/2018/10/index.html","de9d92f74c06e66e9c6bfdf83f239834"],["/archives/2018/11/index.html","9b5f891adf7ef40c10abf0db40411016"],["/archives/2018/12/index.html","def008d8718ae7b842386091091d6b11"],["/archives/2018/index.html","01f0f7d6b6d5907fff5448dc170922f3"],["/archives/2018/page/2/index.html","b85f51d362d8aa0191d28505e5bb1c9b"],["/archives/2019/01/index.html","cb55fa40e71cd58708ee41144e7b36af"],["/archives/2019/02/index.html","60c77ea96adf542d676239a9739a3489"],["/archives/2019/03/index.html","9476bf7a5eb5d71a0248b6ac9418c5a5"],["/archives/2019/04/index.html","54104ae30e0c0300c50da715f6f78754"],["/archives/2019/07/index.html","e9c2fc998c1f55354ecead3f5bb0ed65"],["/archives/2019/08/index.html","1fffcdd9052a7b9bb74e573aacb45c61"],["/archives/2019/09/index.html","f4cc08fa6da54dfc5b9664062b223862"],["/archives/2019/10/index.html","20631b8e2092445061a78798f0d2a10a"],["/archives/2019/11/index.html","c92f94740b429099d78f63a0c03728e4"],["/archives/2019/12/index.html","59c37f54e51253fbb42cb68f7591364a"],["/archives/2019/index.html","aeb4aeb94e47c412b63a80aadd520a4b"],["/archives/2019/page/2/index.html","82f155af77b35344a31fc8cc910033f9"],["/archives/2019/page/3/index.html","5aca689e7315ae3d93db50d94b00fb57"],["/archives/2020/01/index.html","2d5a4b6ef485057a051a7a138613ebd5"],["/archives/2020/index.html","b492ef9de72743db315cd40ae032bf4f"],["/archives/index.html","3272649512d6b1ee98027d271685b692"],["/archives/page/2/index.html","6251efeb571313c1bc9f2bc2a258c042"],["/archives/page/3/index.html","7e84b3bb1779bdfb6f01b6dfc32b5807"],["/archives/page/4/index.html","a1875a42f83ad74f4192aa19febc257c"],["/archives/page/5/index.html","a6e608dd8b8d66ced0db5a88fd25c3f7"],["/archives/page/6/index.html","9302338fa4bf190e9f0bdaf1d7e126db"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","25f019ef4c2248b6a178f013cb38df53"],["/categories/Anime/index.html","3687deae03a20df550097479fcdfcda7"],["/categories/Anime/宫崎骏/index.html","98e99190a51719ecdc8171044c83650c"],["/categories/Computer/Alienware/index.html","1f710ab149bae4c28948945fffaf33db"],["/categories/Computer/index.html","224984f35e57b1138ee76d674fc1d234"],["/categories/Daily/Hobbies/Guitar/index.html","c4f8b3340071ff4b0888269bcdbe2efa"],["/categories/Daily/Hobbies/PersonalDiary/index.html","0150389c1606729053da4a363b047feb"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","8e8cad9ae48a7330f8950b40b7491816"],["/categories/Daily/Hobbies/Photography/index.html","096301775b99483c5fddd60584146f4a"],["/categories/Daily/Hobbies/index.html","6dcb1697687a8b01778d9d4ca839b248"],["/categories/Daily/index.html","0577cfc5811340887c468eb660f2e0e1"],["/categories/Daily/个人所得税/index.html","2a9aa56deaa8e0b7ded3cf78f6fab0b5"],["/categories/Daily/五险一金/index.html","7e2c8a4672b9339005ca77b58106fedb"],["/categories/Design/index.html","3d98cf0fcf2648a56242db2abfb862a7"],["/categories/Game/GamePlatform/Lutris/index.html","dfb7747d9618df6d349aa8c645dfecb3"],["/categories/Game/GamePlatform/Origin/index.html","e29e12eee0c5b77d1e99393fba27de2e"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","0f4be5c30f809264f17feffaf46d9741"],["/categories/Game/GamePlatform/Steam/index.html","a1e1cd51030327e1497f2551c6a4ffe3"],["/categories/Game/GamePlatform/index.html","73cbf6b74b7c93151aa74b90a5003099"],["/categories/Game/index.html","79a23c66459b14169f3c9f2fdf03fd22"],["/categories/Google/Chrome/Chromium/index.html","2ac7d588d309cf91d579100dc82538aa"],["/categories/Google/Chrome/index.html","11c222212ba43ccf14b52c1c506d0009"],["/categories/Google/Google搜索/index.html","18d090e3fb413b12d23c591d27a7f3b0"],["/categories/Google/index.html","55c130f11def2aa20d2779639f3af9b7"],["/categories/Hardware/HardDisk/index.html","f54f66bf1c77334830927a1d96bc0822"],["/categories/Hardware/Router/index.html","17229554355f3b3b75ea314e797b418d"],["/categories/Hardware/index.html","c6e1c370960c9070b83ebd5a19c64a05"],["/categories/Interview/Python/index.html","f55504334b3832248f2e6c723bd37fa3"],["/categories/Interview/index.html","9a7faa1b87beb60ea64774a570f78116"],["/categories/Movie/HongKongMovie/index.html","f7c216bde1d95f096e67ab0dcd4bac09"],["/categories/Movie/index.html","5af38466af4ed6b04203209a1e0abe58"],["/categories/Movie/小王子/index.html","e69f3d6920a14595879abe7d55910b1b"],["/categories/Novel/index.html","746656867fe9b193f76b0d95dd0490c8"],["/categories/Novel/盗墓笔记/index.html","afbd9e6535c4e2f3541388ef6d66d2fb"],["/categories/OperationSystem/Linux/Manjaro/index.html","5c53ff13deacdd1c59ca0d2a6abd3603"],["/categories/OperationSystem/Linux/SteamOS/index.html","f53b46c5bdb2ba9e5fd6a0170ed7c328"],["/categories/OperationSystem/Linux/index.html","48434098108a238f6fe282d7cfeff956"],["/categories/OperationSystem/index.html","316b2cbb0f1d4e6afb7d1cc5f2a4b447"],["/categories/Research/Math/MathJax/index.html","980e14181c88d2c2b12660ec226acf4f"],["/categories/Research/Math/index.html","2e329ad985538d4a2ccad0d015a7430f"],["/categories/Research/Math/线性代数/index.html","f7a3f4b5393be7a18c98734cfb3bb771"],["/categories/Research/Math/高等数学/index.html","b71f6ea1a770d6db76ed111f0f316075"],["/categories/Research/Memorizing/index.html","635618fe684053cc48c386cc71b4f43d"],["/categories/Research/index.html","84228e900282409168092364e2ebf79e"],["/categories/Research/思想政治/index.html","6683c9721da910db6ea5b10be9fcab43"],["/categories/Research/数据结构/index.html","3c19a050592c9a4160d7ee58659fa588"],["/categories/Research/英语/index.html","3869b4bf45335113f719647b7477545d"],["/categories/Research/软件工程/PseudoCode/index.html","1b29ab0d7dda8b3f923227067f306ce7"],["/categories/Research/软件工程/index.html","e29fdb0590a4f8052f0bbb4579ea8ebd"],["/categories/Software/Anbox/index.html","502296e75d7cf13f5f50b9a10e6d29b0"],["/categories/Software/AndroidStudio/index.html","9cd7ba04ab38138abbe0cc5a9a4d064b"],["/categories/Software/Office2019/index.html","c4d4a068bd7d8732e78fdac934c08d2a"],["/categories/Software/Pycharm/index.html","b3ed0d65e46cf9cc328354df4d490b24"],["/categories/Software/Thunderbird/index.html","f2ac036d97f32da2e0478ece4ce13f18"],["/categories/Software/UltraISO/index.html","d344fc91842f04d4d4eba9f79fcd504f"],["/categories/Software/Unity/index.html","ba7bbae11d2394f9a8857fed5f38f5a0"],["/categories/Software/VLC/index.html","e5ddce7f040cc1ec6ddc265102105820"],["/categories/Software/VMWare/index.html","bd239b7611fcafa5018d221322759f2c"],["/categories/Software/VisualStudio/index.html","0dc74bcd3dc374ac18c74730fcf68856"],["/categories/Software/VisualStudioCode/index.html","89abb0242345318dc948a9c6b7d25a43"],["/categories/Software/index.html","e775d97c807123d59d1dfd5e4d55f451"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","026ece609d393251cc8cc47753b6606a"],["/categories/TechnicalResearch/Android/RxTool/index.html","f2a31afbee1e40bb6fc6ba1ea84c8241"],["/categories/TechnicalResearch/Android/index.html","a3a9795e51cbe115b7c5a0573f851eb5"],["/categories/TechnicalResearch/Git/index.html","ddc71803f47b8803b60f545cad39a15b"],["/categories/TechnicalResearch/GitHub/index.html","92252da581c0a5378fb6b5d847ad3511"],["/categories/TechnicalResearch/Hexo/index.html","9b7c9e34523eb2bb26edb994f4a6c745"],["/categories/TechnicalResearch/Html/index.html","ad6ab49bb32766b60a30605b1ab7fa27"],["/categories/TechnicalResearch/Java/index.html","57b32d84d0bda5bfa77a0a25f01b2cbf"],["/categories/TechnicalResearch/JavaScript/index.html","eeb11ea1728fba386ab0d96c2f8e1a95"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","0f9c247389c6b150fd5987a824a9f8fc"],["/categories/TechnicalResearch/MachineLearning/index.html","b7ea3d8b2fe1a093b96a9fd08f5fc016"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","9ed9c5620a569e8e5efd5f480261d71f"],["/categories/TechnicalResearch/Markdown/GFM/index.html","ea339f714c5fccb134f988c4a280797e"],["/categories/TechnicalResearch/Markdown/index.html","0626a3a29bcf6ed5861acd5257ad888b"],["/categories/TechnicalResearch/Python/index.html","84efd74954d61790492332b14aa08dcf"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","130572c75c30851f6112a55b3c0d1639"],["/categories/TechnicalResearch/Regex/index.html","192f6d91bc650864e0cddac31cf3258f"],["/categories/TechnicalResearch/Spider/index.html","566232fa9d1a67f187e6439c474c6924"],["/categories/TechnicalResearch/TA/index.html","9588a7eb28eb9a0a7486b9ce7ebc421f"],["/categories/TechnicalResearch/UnitTest/Android/index.html","2576c08dc6bfcb1972b92c375ffc46c7"],["/categories/TechnicalResearch/UnitTest/index.html","61cc9add4d875c798fb9ca3250896918"],["/categories/TechnicalResearch/index.html","ffa3617ffe1f1f372e045b254c1fe3bd"],["/categories/Teleplay/index.html","c0932696dcb05369170460452a775740"],["/categories/Teleplay/亮剑/index.html","2a56bb364c53e2d80def8be71de25126"],["/categories/Tool/Music/index.html","ad574b202fcbd774ff53c616b813c06c"],["/categories/Tool/Wallpaper/index.html","e1c8717e74d6d6fe254ac12049c80ce6"],["/categories/Tool/index.html","8e82add0e2e895d325f4dbcd841b02d8"],["/categories/index.html","d84f6eb68655d4150860cf8e285fcf0b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","089b9e9773e1ae1c0bf0d779f25bacdc"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","506fd7d3dbb7fbdd0d7649d33b4e4793"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","f7918d02317bab1e87638743d9f609b0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","0c9801c7bf08de567f705caa4d7ded05"],["/movie/index.html","871d2b3969b33615933b84b399adc503"],["/music/index.html","7f4b6658e3641c1dca48f8a09f167724"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","85be81cd7ad8d3e95e46f1c117244c02"],["/page/11/index.html","650e64346702604468775fad5494a1a1"],["/page/2/index.html","fe4899ad66d376e28d27cf9eec6c9ad4"],["/page/3/index.html","58f1dd63332ed1a0772e55676e442f9f"],["/page/4/index.html","cb10bd1f02c54e4579282bf1dddd532f"],["/page/5/index.html","55a2475590b8eeb73e33d0a14cca0e2f"],["/page/6/index.html","ad4998de9f6aa51c7acfea8f771851ac"],["/page/7/index.html","25b1c57d025569e3c9e25a4aca5dfd68"],["/page/8/index.html","7201bd4ab12d7d1ee51c1a85ad4872ee"],["/page/9/index.html","0664207370db60f22321c839e91cf330"],["/tags/ARK/index.html","937f66fe3f1f57d0320bcf18f83d2acd"],["/tags/Alienware/index.html","3f16c4e9ecdbdcec96af4161d93f7c85"],["/tags/Anbox/index.html","bd6b072f3098a3a16399fb0013d23e03"],["/tags/Android/index.html","ff2c7bd7d9b96d8757b4e6e129c3ebfb"],["/tags/AndroidStudio/index.html","f5c5f8460d7993497ce9a80509868c8a"],["/tags/Anime/index.html","d08aa3e49b4c6b90df5d8991f9a0cd91"],["/tags/Base64/index.html","e2406d9f836e1c695e314dadc56c22e6"],["/tags/CDN/index.html","87058bd335d54fa8c1834e6d5d91f378"],["/tags/CSGO/index.html","25df33f7be2e937dc2de6dd89e13d4e7"],["/tags/Chrome/index.html","a4d6a7dc747b9c998ee799896cc89737"],["/tags/Chromium/index.html","9b575aa23060fa70c7b23fe4cea3826c"],["/tags/Computer/index.html","ddf11e258f1f0481c00da61c68a97382"],["/tags/Contributor/index.html","f3d306ed80373dc6a5753e9fbc5b2dce"],["/tags/Daily/index.html","e78255da0b89926c464d4c2ccdd663c4"],["/tags/DeepLearning/index.html","26e7f8d26c96b78d457e3aea9a10eedd"],["/tags/Design/index.html","c9800a5684459ef35441751ed4307dc5"],["/tags/Emoji/index.html","92842d08a8ee4455cdc7a2769e9311ea"],["/tags/GFM/index.html","19c4e03b420f38ad88d59cc0351e4bad"],["/tags/Game/index.html","9c784cfe6a4f56942a4d3b4025f6a159"],["/tags/GamePlatform/index.html","86c4660f42ff65c0966357d155ced9a4"],["/tags/Git/index.html","3d2c83dbbe299b6ddb1c80b024497768"],["/tags/GitHub/index.html","e5e5a5813ce632f4a9e181051a7b699d"],["/tags/Google/index.html","088a453062982a238e37d514ff7d990a"],["/tags/Google搜索/index.html","1091ed53379493118fded68ebe519d97"],["/tags/Guitar/index.html","32644a495e9a2c22a8f49641a9ab3742"],["/tags/HardDisk/index.html","48ec94ce48e4d4754040848a463dd5be"],["/tags/Hardware/index.html","0c3f78655ea749aeb6e189e833c15fb6"],["/tags/Hexo/index.html","e1f971b9b7acba9a859002ac9eeef5bc"],["/tags/Hobbies/index.html","dc52d248e2ab8bb6541474d7b449f455"],["/tags/HongKongMovie/index.html","50c98f430cec36691e1439259f1ef71c"],["/tags/Html/index.html","4e173cbad31341647184d74ae3cbea6c"],["/tags/Interview/index.html","dec0b57abdf5e6434f6ed2380cd5a069"],["/tags/Java/index.html","180c4185d5c982511da4ba1a866ff8ac"],["/tags/JavaScript/index.html","0d34852339cb2e1e761f38c41bf340bc"],["/tags/Linux/index.html","da268ae5e5cae849fa6d50ef39271ed7"],["/tags/Lutris/index.html","c9b0e8a4ea1ff23e9d585a47396c9a1d"],["/tags/MachineLearning/index.html","39eb399de15b324f246f03406a89c59e"],["/tags/Manjaro/index.html","0bc4fbf0ce5ffac38d511745d10d06d3"],["/tags/Markdown/index.html","f312dd86f5d1b286a0aa7da40aca1b79"],["/tags/Math/index.html","ebd9e24f41af9e4f19d314bcc11573cc"],["/tags/MathJax/index.html","0554a7123c1c0014fddfcf4f9da8d7d3"],["/tags/Memorizing/index.html","2c9ecd75af5c4bb2e368e4d2cfd0d13c"],["/tags/Movie/index.html","a191d95d5d2e1f50ef5f26caf2de0da1"],["/tags/Music/index.html","58176d2210cb4fc494f44c61b6b5f7d8"],["/tags/Novel/index.html","ffc28ef82b892cdcd6bd82b48a5d4285"],["/tags/Office2019/index.html","31ade8f7f28999452556c1582c9fba0c"],["/tags/OperationSystem/index.html","697d8f74ff3818986261c7d25d233a91"],["/tags/Origin/index.html","370515d647163eeaa91eb771f6050d58"],["/tags/PersonalDiary/index.html","50c5cfa8c2db97977164400e210445a0"],["/tags/PersonalPoetry/index.html","890bcac2d74840e4ce5f687c39a0cd1b"],["/tags/Photography/index.html","dc95afbb5d89fc863610daea82e9d67a"],["/tags/Port/index.html","75c5ceca9a0cab71a3193df1aca37de1"],["/tags/PseudoCode/index.html","ade67b96e6954421c0bc949f6fa06d02"],["/tags/Pycharm/index.html","9a6f53960546e51d701467d9e7e74474"],["/tags/Python/index.html","990aed73011bd5383083c14a61dccd07"],["/tags/ReactiveProgramming/index.html","5fedb17c5eb1c39213f2fdb97fff0387"],["/tags/Regex/index.html","660d3ea4a7adef1fbbd6693fc18bb33e"],["/tags/Research/index.html","cf81b3c008d67f6a782e0b5f3954f51c"],["/tags/Router/index.html","5ef42572a3fb15f74d8afb67511d0916"],["/tags/RxTool/index.html","d27a0cf3d49adc2045de6678bd1ccc32"],["/tags/Software/index.html","dd78a477fad75ad3ea4e5742e9b8927f"],["/tags/Spider/index.html","d3601e8f25920ebb033e4707d8e8b315"],["/tags/Steam/index.html","2321e5a510f2b789d8e1ec11f76dd32b"],["/tags/SteamOS/index.html","cef41c31f36f46f519819a33c56abb3e"],["/tags/TA/index.html","42f013a343a7ae38601a5280f42aaf96"],["/tags/TechnicalResearch/index.html","f101b7057c88f34177490c010b4526a9"],["/tags/Teleplay/index.html","6b99e897e37d6358a474f150150b8d08"],["/tags/Thunderbird/index.html","4cb2c3936a7dbf91bb3dbd05dbf83cfa"],["/tags/Tool/index.html","225c9523fc4af5cdfd4251c443a81954"],["/tags/UltraISO/index.html","3509de0dfdce23259490b29bc7cbe199"],["/tags/UnitTest/index.html","8695a61d7220f45e774f671f47ec0835"],["/tags/Unity/index.html","c3c03b8a1d07d91a3e14698add227b4c"],["/tags/VLC/index.html","e4a37b0157da91caba78e805cd4abc0f"],["/tags/VMWare/index.html","a24fc3f870a9a3a8ac98fca8b4ed650a"],["/tags/VisualStudio/index.html","8c42dd7aa7846e263eb8bf8e09d51d74"],["/tags/VisualStudioCode/index.html","30af3588e7010d0f9048072e619ab62f"],["/tags/Wallpaper/index.html","fd60d56ce6e6e1219c73ecd263b9bfd6"],["/tags/Windows/index.html","004f8c128e3b3400574d9d0aac8bf8c2"],["/tags/index.html","e4a15da73b21e857377d4680132f98cc"],["/tags/个人所得税/index.html","89d19f7f83d763803815cae4c7d1570c"],["/tags/五险一金/index.html","894707590ecfeb57e0ea3b0400b8b72a"],["/tags/亮剑/index.html","5ffffc460bcf0d12bf6b0c0434193717"],["/tags/仙剑奇侠传系列/index.html","cc4cb1de97d26e8a64bb3b31f9524228"],["/tags/千与千寻/index.html","d3c47ddd3bb9c4874ae9ff3614f56278"],["/tags/宫崎骏/index.html","486cf682cd04d42dd0ebb4ad0b32aea6"],["/tags/小王子/index.html","be9e9214ef5dbdb8e42f973eb71c9623"],["/tags/开心鬼系列/index.html","82682891ad4da4d4f95336e0469dbaf1"],["/tags/思想政治/index.html","d9c4ec92c49dde496597a34011bfcbf7"],["/tags/数据结构/index.html","0d955cf81aa646f350f7825d87f6d7a3"],["/tags/盗墓笔记/index.html","ba4331ff0b3cb4a242f0e64338c7f61e"],["/tags/线性代数/index.html","4a84715fbab576e4566c916fc1ef6f84"],["/tags/英语/index.html","1dd97cefd47c748366419c073dc073fd"],["/tags/软件工程/index.html","57dcbaac475512412a2271de764acfa3"],["/tags/高等数学/index.html","fb90c1328c1b43570967eee16a75a196"]];
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




