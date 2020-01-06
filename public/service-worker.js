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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","d9513118889b36434f59c09f065b003f"],["/Anime/小王子电影的共鸣/index.html","14f04f9320db3666f20e447c83b74fc9"],["/Computer/Alienware/Alienware更换电池/index.html","c3c0afa110b408f298948485416e77ec"],["/Daily/Memorandum/index.html","0162e56e20b268c7ba6c20063f872d6c"],["/Daily/生活小常识/index.html","f695addd1f7b35c8967fce3710f00b57"],["/Daily/网络用语/index.html","dca4dd57104401023325efd113c42d6f"],["/Design/设计用户界面的注意事项/index.html","d059cbfaef5ab01cbc1d63f9030c8515"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","f25c1c770cc8561878144c727dc4a387"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","4c8f453ddf547099885f1b43fe759034"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","a08265ca8c999b9954ef97964aa7724c"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","af6106af6ba68154633dec78da92607a"],["/Game/GamePlatform/Steam/Steam库共享/index.html","3529b057a638e4a85fc4104578a45c9d"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","5a175c918cac5a8493f95de7a3146ab8"],["/Game/如何独立开发一款游戏/index.html","1d6dd65a4f8c45af3d629b65abf7ceaa"],["/Google/Chrome/Chrome上网助手/index.html","494d7b6632bcae9db7e686e98844cc57"],["/Google/Chrome/Chrome使用技巧/index.html","922c7381f14e1c659b2b987f0db1e15e"],["/Google/Chrome/Chrome插件/index.html","f41cb2038cd6f3ee1cab4786b3d63e1a"],["/Google/Chrome/Chromium/Chromium/index.html","c9876cfe80991ddebf637965b96d1b86"],["/Google/Google搜索技巧/index.html","bb7490e98c01b7397d1cfc5df05a06a9"],["/HardDisk/硬盘分区结构/index.html","4e69fe7ed5ef2e8bae26361eb9cc99ec"],["/Hobbies/Guitar/吉他入门/index.html","4a1803d36d8dca40c1c71a676654b6d6"],["/Hobbies/PersonalDiary/芦江曲/index.html","e09776756c2a70a1a95d0dbbe7083a51"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","6666a751fb4ec36b9f015151c3a53fc1"],["/Hobbies/Photography/摄影入门手册/index.html","ffe074550cd092fef0cb33e9631108c9"],["/Interview/2020年字节跳动面试题/index.html","d21f8e6cb3691f6e06a535634a5003c4"],["/Movie/HongKongMovie/开心鬼系列/index.html","1abfd91819ea964a9e59522317b5f3bb"],["/OperationSystem/Linux/Linux分区管理工具/index.html","0d6413a2ad5f88fb8ff775858a3c3403"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a5239e38b4cb9b0d16e3956a89b7afc5"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","802bd9b45b6732af6e580a74ad0a8fc6"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","f543b561269aa045c79b4a088dbdfc69"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","9166ef6ef27c72e6af3eaf19632fa19f"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","0d910f7241001280c885d207f1918f42"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c1cc451e0efbc740286f1778e0a2d389"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","ae651be585f1627e59234b7c0aac4cd9"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","0fdcdf464662f34f9aa9a25678b2ee5f"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","6b570011e484e14c5a4469d43f21e2a1"],["/Research/Math/线性代数/线性代数公式/index.html","90c83b6e22abcad620a48374d7447279"],["/Research/Math/线性代数/线性代数知识点总结/index.html","4c372802b624a6dee3da8609a8f449fb"],["/Research/Math/高等数学/高等数学知识点/index.html","17cdf530443d1be01cac230c376c0020"],["/Research/Memorizing/费曼技巧/index.html","4f7f05b2b982cf8c6806eb4e4e55eac5"],["/Research/思想政治/考研思想政治理论知识/index.html","82602f8af8eecd237dd95b3f0ca59b13"],["/Research/数据结构/数据结构/index.html","3c75679812fc4467cd097da84c005e3a"],["/Research/英语/考研英语作文/index.html","1845e44235d3b21acb71d2c1789ab2c3"],["/Research/英语/考研英语词根/index.html","d1eeaf4cd1ae497efcfcdf2f6a056690"],["/Research/软件工程/PseudoCode/伪代码/index.html","ea200b5204945833c75497da1cc501c5"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b2d2602e1154ef9bb918de3a3dda0fe1"],["/Research/软件工程/软件工程基础知识/index.html","7ad69baadd2afed1147936e4a6ac9f6c"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","56e01611aeb5ef31e4cd73cbd2481562"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","a1a3d4c7229b5dae97283eddca923cd3"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","4f84b2a19080e153a610f1d7f92a6cee"],["/TechnicalResearch/Base64加密原理/index.html","e25d78a9ec105381b7fcd8ac3ab530a6"],["/TechnicalResearch/CDN/index.html","8ec13372af6bb0efad674ee89c3ed61f"],["/TechnicalResearch/Git/Git/index.html","877622085b6f02ee8dbb38f011511fb4"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","1c298616d77a7152f8d55015cea59019"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","555604425763ddac6c8e0bee3b2a3cc0"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","0e9e33761a9a7295fef1d2229f486139"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","bfb04bc3bcc58b4d54c82d86657f2600"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","a8462435ae69835d6071dd91b5af18fa"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","e10985ad3eca5e7a05533dc0916e043c"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","28e3e348459bb8e2ffdf9c07d4fd52de"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","cc641eefe6b587c7f68c7900288c4e80"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","779202a5741876ff4e77bd6eb86f2490"],["/TechnicalResearch/Java/Java基础快速入门/index.html","ba958597a8df1112d2564fd4106319e2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","897aef8e87cdc81189309330f00bbf23"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","534a6558217d2500b9a0d4bd56ec8fd8"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","07eedaa94dd88cab8d74dce30fc68e79"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","e06b5d21a57a6c2e3230929b4cf86bf8"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","277ba73d182a1cc8fe7c3916c6350cd3"],["/TechnicalResearch/Python/PythonExercise/index.html","31dfbeeb3af22f482a85abf3fd95b1f0"],["/TechnicalResearch/Python/Python问题归纳/index.html","1fdf0ea575db3e52ee2a14eb6bac59c7"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a779d9636257e314de539c2e5593ceaa"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b317c50d639bf0916200790c65fa06e8"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","8e80d0d1606b04ebc90012b84c12b889"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","cfca903ea5e2aa7a7ab0ef55d4ac9dcc"],["/TechnicalResearch/服务器常用端口/index.html","3cc0ebc18f6a653eb423dce3432eb590"],["/TechnicalResearch/正则表达式/index.html","9ff110047f6e537651589a669ede70f3"],["/Teleplay/亮剑/晋西北铁三角/index.html","c4f488e31674fa51daee7696cd1cd091"],["/Teleplay/仙剑奇侠传系列/index.html","c3de3384b033bcaacb99df8ea951ea64"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","ff6e1754b40abf39c41323eb4af0b8b2"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","cac0e23a4d221e548b23b1e7c10680ab"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","bdcef59a97c34d1cf56f09a61e957e71"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","30c69d844583f544b108371a62889500"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","a18f77748e1d7bdd194b04617c757f71"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","09fc5b780589a7223d5e779ca2158fad"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","ef6b7af35d2422f5c63e7e27225b5d8d"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","66b5f0fb0c96e6945f75562173f78489"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","5e3034f6a8ce9b0d5ae91ab055dca3f3"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","82677b9bf7935c631836b7043ad6af06"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","521e4f3887e870130f2d20396fcdd0a1"],["/Tool/Music/网易云音乐/index.html","bdbed03a90b51ebcbab324f2afb7429a"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","084f273ba43833a488fc9ec967d2a62a"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","1492be56639b690fb47b715ecf52abd7"],["/Tool/Windows/Software/VMware/VMware/index.html","aa2f5ef7affd989ba21f5d6fbb233131"],["/Tool/百宝袋/index.html","bb88f630d2a5176d4f739ad32db7a2b1"],["/Tool/随机获取在线壁纸/index.html","33cd6b61f8b02c625c4d3c6edf4e2f4b"],["/Windows/Software/Office2019/Office2019激活/index.html","6276ed4a87f2c9d3f59efbcfa938539a"],["/about/index.html","78d9485beb9bff57f52ce29b2f46689c"],["/archives/2013/10/index.html","dfe59d633d7f71ea4b21d070785e72f6"],["/archives/2013/index.html","66ab0584ae576fa2ff83d2c1c65ceafe"],["/archives/2016/09/index.html","2a78711d540499716c25a234b64fb276"],["/archives/2016/10/index.html","efd2d97e55dca3a52290f7d5a675c4cc"],["/archives/2016/11/index.html","1ac1ff5b533a299628d88b01fe8f6dbb"],["/archives/2016/12/index.html","9cf8b37ed15876c883a750ad22352e5b"],["/archives/2016/index.html","becd292f2945a5dd236c397d6da2574e"],["/archives/2017/03/index.html","39c88fb2de583678d6ef995d43bb959f"],["/archives/2017/06/index.html","bca4b32739cef2732e0eaa5e87c40d61"],["/archives/2017/07/index.html","79d64e9db96f595d56947d738735d2a1"],["/archives/2017/09/index.html","630147892217e7ba0b8f3a7aacfdc661"],["/archives/2017/10/index.html","b5f14d42005fc0db93d8c05eb328dc35"],["/archives/2017/11/index.html","323581c6c0c04d5edfbfe6bea4024ae8"],["/archives/2017/12/index.html","abe1fb05bfab076cf08141bbd57fccbf"],["/archives/2017/index.html","0fb01444672b42090836518edc73b464"],["/archives/2018/04/index.html","a3dc9d9f45e48958faf543605984595b"],["/archives/2018/08/index.html","d944ca859f5bcd13f3d6bf4cfc4ab9d6"],["/archives/2018/09/index.html","30dd759d178d1f3114019ad6e5c92200"],["/archives/2018/10/index.html","80874b60016ef478381335e83274123d"],["/archives/2018/11/index.html","952318c168530a7d4dfd17296e982206"],["/archives/2018/12/index.html","33d72aad58aeacceb52a648486b085e3"],["/archives/2018/index.html","cf2b6d85eca37ca5385fdac76098b1e2"],["/archives/2018/page/2/index.html","3cf5dd410ef94dfe48496eec44ba7fad"],["/archives/2019/01/index.html","d2e400a995a1b2f737aa37524b9ed0dd"],["/archives/2019/02/index.html","dcecb52e4587237fa40a53887c4b2292"],["/archives/2019/03/index.html","93ab95aaeeaef552a1b245e5e1a4efa8"],["/archives/2019/04/index.html","5c08c225a914899639b5c823dd7ba25a"],["/archives/2019/07/index.html","aeb798825fe42e660a66053b8bb8859d"],["/archives/2019/08/index.html","2d08e660bc5ac222ecb9f2c70a08f163"],["/archives/2019/09/index.html","e96cba2c00c6f37341a69c721c700615"],["/archives/2019/10/index.html","79f86a23f8251838b0ed46774f9219a0"],["/archives/2019/11/index.html","f53cf61d3e07e27b2268951aec5b966a"],["/archives/2019/12/index.html","f7219c594643efaecfc98fa756641584"],["/archives/2019/index.html","208b843e4012c970baefd4dd30d8282c"],["/archives/2019/page/2/index.html","6f28e6b53f487d1154e4c8ff7fc32702"],["/archives/2019/page/3/index.html","68891c09865a3624c93cfb354b73633f"],["/archives/2020/01/index.html","07aa6f3450328c1fd8db49285b557191"],["/archives/2020/index.html","5335a4d25564369f1f2159172bf734ce"],["/archives/index.html","3b501e39f3c5ee4f27617b5195268582"],["/archives/page/2/index.html","0d6b01198dd3d7a0d8b90bbecdfe1ead"],["/archives/page/3/index.html","17f7ec224352cedb210f68030a893099"],["/archives/page/4/index.html","ca0d1ffb914cd17b510388a60e7231fa"],["/archives/page/5/index.html","6b0cce0da8025fcad5d53c20e688cf79"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","68622b934c6d3f0b9494159eafc9be92"],["/categories/Anime/index.html","b204af67d88393dec50a6da14555e528"],["/categories/Anime/宫崎骏/index.html","150b14cf1d52d75d3a3630243150280b"],["/categories/Computer/Alienware/index.html","0350b44704b5c5308fc723d116737cde"],["/categories/Computer/index.html","63b389c95d7b5fc76be928febf0f8fb0"],["/categories/Daily/index.html","91d91223f38ad91d73923c04e9f346f9"],["/categories/Design/index.html","28254ce342c52a3488b6d74d6a042d0a"],["/categories/Game/GamePlatform/Origin/index.html","31f6caf54ba8d53d8dfb596ce98be928"],["/categories/Game/GamePlatform/Steam/ARK/index.html","7916d21789036b4b4ef38c1eaac720b5"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","30b0373e423dd3dfc45af7be0e7a5792"],["/categories/Game/GamePlatform/Steam/index.html","cb25ec5901468faf6635c36ca4e0dd01"],["/categories/Game/GamePlatform/index.html","f7f536fd4a5b554eb2577ea156d87334"],["/categories/Game/index.html","3a01d67b29df17176653d25a2ec4d7ea"],["/categories/Google/Chrome/Chromium/index.html","482201e799907db7f8cf2dbed2e16d96"],["/categories/Google/Chrome/index.html","1f3aa678021f5164c21f991c5f05d30b"],["/categories/Google/index.html","726c2201c0e8d59512ab82fa3877ae6a"],["/categories/HardDisk/index.html","fa73df4758b98b7c56f2fe1fb6f2e577"],["/categories/Hobbies/Guitar/index.html","45a1e06ba474293d893a2988f922f26e"],["/categories/Hobbies/PersonalDiary/index.html","efbb427e6107158278f51bbde039f3d8"],["/categories/Hobbies/PersonalPoetry/index.html","83f091a3494c4d94d4c4d0f79a675d39"],["/categories/Hobbies/Photography/index.html","bbc8db2b015ca3100cc18d950f896c5a"],["/categories/Hobbies/index.html","82d834f8d68af4086bc1a5555d930476"],["/categories/Interview/index.html","5fb49dab1597c6f9198b779a468eebec"],["/categories/Movie/HongKongMovie/index.html","75dc416dcef27728837b30712cae011d"],["/categories/Movie/index.html","4eedc2c7d9a7da23f1dc5108b846d5a4"],["/categories/OperationSystem/Linux/Manjaro/index.html","c1d28c1397e9dcc557b7801563bcef61"],["/categories/OperationSystem/Linux/SteamOS/index.html","45496af419d7d21dbd68afd4663bf964"],["/categories/OperationSystem/Linux/index.html","2baa9b23b0e78d9ddc0c5c763ce12ee3"],["/categories/OperationSystem/Windows/Software/index.html","708fe7c896d1796a7898fb55ba602f47"],["/categories/OperationSystem/Windows/index.html","2840c47f43066ec32776cc7a58aedf48"],["/categories/OperationSystem/index.html","30584f1d6cf84321516c75851c8cc31f"],["/categories/Research/Math/MathJax/index.html","8681b81d545c77385543671c3654aba2"],["/categories/Research/Math/index.html","4469a7fe822ee433c92225eb92e4951a"],["/categories/Research/Math/线性代数/index.html","d69e587fe49c8b957ce3e1b775b0da26"],["/categories/Research/Math/高等数学/index.html","1fac6454466f2a5689cba75fdbb23244"],["/categories/Research/Memorizing/index.html","ab0e081e90c0131c75e2ecebc4367385"],["/categories/Research/index.html","ca1bb2166888fbcf1a35ece4daf8bcd4"],["/categories/Research/思想政治/index.html","7270040ab7e77b363710624e32db4920"],["/categories/Research/数据结构/index.html","70ba526dcfe778a40de26d57546a90bf"],["/categories/Research/英语/index.html","158e856e2e99499658b0f644f1eeee19"],["/categories/Research/软件工程/PseudoCode/index.html","c073cc46abb356cf7ccd9d0a02a48771"],["/categories/Research/软件工程/index.html","50a90d2394ca161fe64dafe5b8d8454a"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","adc79224400511dd26930fd8b0584198"],["/categories/TechnicalResearch/Android/RxTool/index.html","a8aa6afb028254647ff30bbf13f23186"],["/categories/TechnicalResearch/Android/index.html","083454bf1742772221f1a7ad8989113f"],["/categories/TechnicalResearch/Git/index.html","e6e6bf47febc0fcb868920d6cdd92a74"],["/categories/TechnicalResearch/GitHub/index.html","c0aa6c0ec931cda5f55b27c7548c41e9"],["/categories/TechnicalResearch/Hexo/index.html","1edc73328b85a337a40bfdf06997a59e"],["/categories/TechnicalResearch/Html/index.html","b6b4b05a3770b14969d1f1e1529c41e6"],["/categories/TechnicalResearch/Java/index.html","817100d96c54b9d7fbafb66ade41e980"],["/categories/TechnicalResearch/JavaScript/index.html","974a80ce996642c22bdc67eb94c197f2"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","6206761f7371efb96b2f28428fc70547"],["/categories/TechnicalResearch/MachineLearning/index.html","03c414eeaf009a0d032886bbde8fbfdf"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","01ae4cbc5f370d1c5433c372f6bea7b4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","c07764a4e0c7e65a5ca7c60dcfdea656"],["/categories/TechnicalResearch/Markdown/index.html","52af95238225ded107a5e7252544b08f"],["/categories/TechnicalResearch/Python/index.html","1dd4774de6bb3f9173c5124397bb6037"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","a94f0829e92863bdfbb89566468e6374"],["/categories/TechnicalResearch/Spider/index.html","eb1b9613e26503480e1887477c24b6f4"],["/categories/TechnicalResearch/TA/index.html","960b7dd47fe8c39c7ee87cf7c2270a19"],["/categories/TechnicalResearch/UnitTest/Android/index.html","f3e9ae51c302652c7c612db60b1bc3a5"],["/categories/TechnicalResearch/UnitTest/index.html","67068e997f1bd88aa32da91caf74a910"],["/categories/TechnicalResearch/index.html","00be879a77d70ef9bf28762e03779f9b"],["/categories/Teleplay/index.html","70c324ee0dc5ed58682e8e459b107328"],["/categories/Teleplay/亮剑/index.html","6618d72a16737c41216eb9cd6fb04726"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","2f6714c42c0edcdf2c48e77e61ec9418"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","5f4d5671b7207e0e4f984a276c2d9324"],["/categories/Tool/DevelopmentTool/Unity/index.html","496b1a9f4dde3006100aba3c23f61910"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","7b94e53632f6776a918dd1029476b706"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","dcf6505624c38cb3aec50f4a23133085"],["/categories/Tool/DevelopmentTool/index.html","7189909e37348692a5418e690261a4fc"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","e58e8539446e8322e81ceb000b707422"],["/categories/Tool/Linux/Manjaro/Software/index.html","bb7321fcffa85b6e804abc9eb56d906c"],["/categories/Tool/Linux/Manjaro/index.html","97f43276efb4206f1802a024201b97d1"],["/categories/Tool/Linux/index.html","3845f8eab8a4fb09cd38b4d163a3c847"],["/categories/Tool/Music/index.html","a762f7851b908c237c25bd0f26528d4f"],["/categories/Tool/Windows/Software/UltraISO/index.html","ab734a4ce605cd5565e5da8ac62b9eed"],["/categories/Tool/Windows/Software/VLC/index.html","d948773f40eacec1ac67441a4af355c2"],["/categories/Tool/Windows/Software/VMware/index.html","e88a5837b7217a19b7b03f0603411553"],["/categories/Tool/Windows/Software/index.html","9a9cd0333a459717f91f2601459abe58"],["/categories/Tool/Windows/index.html","81089e5a520fefcd9a72326516c1922e"],["/categories/Tool/index.html","acc73db8a4fb81a5e27b6b93b9d29fb5"],["/categories/Windows/Software/Office2019/index.html","80b3080d16a00c1c824404ff5932228a"],["/categories/Windows/Software/index.html","4618d191e9fd07835456f1489daffec3"],["/categories/Windows/index.html","62de5971c89345129915277f4ea36aad"],["/categories/index.html","f86648d35c7f11f7e78e49f631573331"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","39f488ebc93503bc69cf6957a4b988ca"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","8581553cb296f0b8ba32a907af30f465"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a8406e9126a17e32852986d302586b16"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","3f74b6604ebc9b2a493ac7b0f63d8143"],["/movie/index.html","d17eb298c9dd98269bc102aacc44f9cd"],["/music/index.html","25d581c1414e1cd7ad57d115202649b3"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","8f56c2cd76f0d62de304af2429f8b84a"],["/page/2/index.html","1c765c8c43fd942f72f0192390ac9ca2"],["/page/3/index.html","13d0f3bebf52b30a537fe548b158a4d3"],["/page/4/index.html","011d1dfe9c13751e96f45a1adb548401"],["/page/5/index.html","8f835b18d76eb0cf89c03d47ec89d128"],["/page/6/index.html","647ec49adaf35e4720ac2b06aafff4d6"],["/page/7/index.html","034c9c8adfe0895b63f98c6b3c84218c"],["/page/8/index.html","5c6a4462cfe91c68c3f27e6491a22354"],["/page/9/index.html","d3830e4c84211944219e0f63499d3109"],["/tags/ARK/index.html","da8d7f6772a711529ddb29dd5aad6621"],["/tags/Alienware/index.html","06bfe8104df6893307a4bc6efa7054a8"],["/tags/Android/index.html","d58f8500255ddae6f7c44a9e30aa22e9"],["/tags/AndroidStudio/index.html","8dd69f56cfb207f74cad3fa87b936992"],["/tags/Anime/index.html","d4e59d575b2fbfdef9fbca8210add6e2"],["/tags/Base64/index.html","b9d8134c0b08d17f2ea15b5a35d714ad"],["/tags/CDN/index.html","70e7085d7366384b0e076f8c3bf1a1a2"],["/tags/CSGO/index.html","9e0a93d0ed828d84f8d13503825bff68"],["/tags/Chrome/index.html","b01a18048dd16219ee6d1b62a1fd72f6"],["/tags/Chromium/index.html","b972cdcc96b4719c18ad7581d0083d7f"],["/tags/Computer/index.html","15390fd28ef194aaecdf578c6358fcfd"],["/tags/Contributor/index.html","8a46017ae002c3865baa5b85f3c9b4d7"],["/tags/Daily/index.html","34ccc7b6316e97167543b31150302680"],["/tags/DeepLearning/index.html","b7d25a0f95299712c7e67869f7453d6d"],["/tags/Design/index.html","5733cb6b89e4e534ff5f07ea5662370d"],["/tags/DevelopmentTool/index.html","0325dd60d4504274c7c57d34afe1ce28"],["/tags/Emoji/index.html","546103514f90a79d8bcbe5b7619bea4b"],["/tags/GFM/index.html","5197c454d1604269cdb5ae3bc28c8cba"],["/tags/Game/index.html","39371da257130eeb99efffaa62bed92b"],["/tags/Git/index.html","7df1466bd272b8f16d0a73bbd64782f0"],["/tags/GitHub/index.html","0774d96f21a2d72b39ec984134ff9ea5"],["/tags/Google/index.html","00d499e4111fe113172ab99376a6f6a1"],["/tags/Guitar/index.html","a8e32fc8a90277f8841ff0c8efb0a6f6"],["/tags/HardDisk/index.html","93bfd728ccdb38e5829c0e5b6406e732"],["/tags/Hexo/index.html","20c43dc5f79a25a54cb9764555dda594"],["/tags/Hobbies/index.html","02f685f61b16e5b81ccc1cfb26a29ea9"],["/tags/HongKongMovie/index.html","724e2d4cb10fe7de53d9c4caadc924c1"],["/tags/Html/index.html","0477e7ad8368060aba7ef99c6f5e2f60"],["/tags/Java/index.html","ce873f8dd6c2f83384c0f7ca4a606990"],["/tags/JavaScript/index.html","423175bcd8b9d716115942dc77372074"],["/tags/Linux/index.html","b49a541ae7dc39b060109576d8c436f8"],["/tags/MachineLearning/index.html","3bbdfc34c455f92c1976797c3031adbd"],["/tags/Manjaro/index.html","bc1b9b22ef19b3c6aafadf34b53e7bcc"],["/tags/Markdown/index.html","2ffc21faf8b54756e767e4defe8cb5ef"],["/tags/Math/index.html","c34dc5bd9cd4703cc33169a1501bdba3"],["/tags/MathJax/index.html","494608a892b05d03de741cab4f58dae6"],["/tags/Memorizing/index.html","342871ad2fe7eb9f2eadb6d3b2c21f96"],["/tags/Movie/index.html","89b300494a063676ba1ceb29b30115e3"],["/tags/Music/index.html","c9946be295a86e1e788b60502e62128e"],["/tags/OperationSystem/index.html","d3336953e6dc1e01ee2d11ac3ed9d347"],["/tags/Origin/index.html","19c73a086632d0a9ae088e3357a5bf80"],["/tags/PersonalDiary/index.html","dac52e5f164bef4aeff83d7d7dfac731"],["/tags/PersonalPoetry/index.html","d1cd7eb63cb9a1f4125090efc941f4e6"],["/tags/Photography/index.html","e2518f87cf4b05a7c18b82b68aab04b2"],["/tags/Port/index.html","c86d50fbbe68008ed9e126b4d25a37d3"],["/tags/PseudoCode/index.html","9127f0f407586508edb3342bd7113564"],["/tags/Pycharm/index.html","02ed2845ccdc9172259691abaf07a146"],["/tags/Python/index.html","395e596ee2f115dbd7ba06042cc35ad0"],["/tags/ReactiveProgramming/index.html","3d2e4b91fa1cf27016c05d1a6bb35d32"],["/tags/RegularExpression/index.html","26cc43d83b151fbca1bfb65db69db021"],["/tags/Research/index.html","3052216c250230035f17a2f7957e9eb9"],["/tags/RxTool/index.html","c016b1adcc507e14f096b54a334198f1"],["/tags/Software/index.html","41edfee5535318232c46880411a7cc8d"],["/tags/Spider/index.html","486e96211ddd88e0b07ea0296beacbaa"],["/tags/Steam/index.html","842b9701c8d72a00e15671fa3fb4b1b3"],["/tags/SteamOS/index.html","7e6e2bd92c646288dee4963727b77402"],["/tags/TA/index.html","371e6f8b825b14e77db54ed52c9b377f"],["/tags/TechnicalResearch/index.html","4fb2202c96b69eb8ee9e80315922baa7"],["/tags/Teleplay/index.html","2b989d3ed125421de3780bf4e4636396"],["/tags/Thunderbird/index.html","e38261bd72acc316ef5ff4d7f2b1d454"],["/tags/Tool/index.html","24ac3d5bdabc9b0fc062b9503f1ec868"],["/tags/UI-Design/index.html","d13619ef6d1cdff9282e310255fcdd53"],["/tags/UltraISO/index.html","6736eb18a72fe5834cde9741cdb21116"],["/tags/UnitTest/index.html","7b2b0123534a432428d3de2c5fc9f5a9"],["/tags/Unity/index.html","a70b89d2316ba5a1be9a94c89b3f32b9"],["/tags/VLC/index.html","d0e7d4871971f1018d0b3b8de52cd6f4"],["/tags/VMware/index.html","40b71c22d3eaf0108581a8a7c49f4f57"],["/tags/VisualStudio/index.html","67faeaf78b94e26ed835192693cd31cc"],["/tags/VisualStudioCode/index.html","3970861792d3b40be940bd2ea1fea0d7"],["/tags/Windows/index.html","7649455cd1590b9b816afa574c2527d6"],["/tags/index.html","523f460584a13c0f0b52a5bb81b7d872"],["/tags/亮剑/index.html","f2a2516176a0fa93e43967c143d234b4"],["/tags/仙剑奇侠传系列/index.html","e1e3f5fa4bb91b268c5ac301990a54f2"],["/tags/千与千寻/index.html","7771064907401400bd4866217756ad50"],["/tags/宫崎骏/index.html","e4229ce8c9f9b6f61a55af02b16eee03"],["/tags/小王子/index.html","653ea68e52e1d1cc06c1e337d33aecf5"],["/tags/开心鬼系列/index.html","f4bd214b11d1a3de5ea5ecde660ac9b9"],["/tags/思想政治/index.html","414848cb3d09dfc6f7f978ea95b3a310"],["/tags/数据结构/index.html","fdfd141b53c55103f4c40626c03d18ca"],["/tags/线性代数/index.html","920e3987fd925189a9c6303004c39ffc"],["/tags/英语/index.html","d23afd26b112aea59fa9a18291e0e300"],["/tags/软件工程/index.html","289f04e13258f80d9d1a740faf443c2e"],["/tags/高等数学/index.html","189b70cb71e654723460c612a65a61b0"]];
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




