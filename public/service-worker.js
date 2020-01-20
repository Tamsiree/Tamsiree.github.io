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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","393744d0d897bd5994210d27624e4244"],["/Computer/Alienware/Alienware更换电池/index.html","1b1dc3ee1a0982230453de0e984f5765"],["/Daily/Hobbies/Guitar/吉他入门/index.html","178a9ba45bd519d7fdcdef1e1fb76379"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","e13e330ceb0da11731c7aa693902c393"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","80ddac659c6eb4da2dc9a1cc899ec76b"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","48c53489ad7243ca2ac69d5c3a1e62a3"],["/Daily/Memorandum/index.html","340fb02f5901e94c76fec9fb61232f08"],["/Daily/个人所得税/个人所得税/index.html","7b5dcb8c2f90ba54fa6a3090ba13edee"],["/Daily/五险一金/五险一金/index.html","e6c5b9e023e357cb8820378487e1dd31"],["/Daily/生活小常识/index.html","34f8922690fb777727c531dca8370a53"],["/Daily/网络用语/index.html","9440aab69acae230684985aef3ea6e02"],["/Design/设计用户界面的注意事项/index.html","c58f9fbb87450b840d365c87a37cb64f"],["/Emoji/Emoji符号/index.html","ff8c42195aa8f104a7e2c0c758d25bab"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","5bf25e20e8491bf79e63ebc7a96f9873"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","9b2b8a407305c96e8bb93057cdd852f1"],["/Game/GamePlatform/Steam/ARK/index.html","58de65963f3032c3293345f1f78f9bf5"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","3a236a7423b2abbd78e6de9001880ab6"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","339b11aa6bb6e1ed72afb65d9d33d7f7"],["/Game/GamePlatform/Steam/Steam库共享/index.html","b2c7b73a5bbb67994030edce4f913ab8"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","52cb69a5dda36ca89a011d30903f4f75"],["/Game/如何独立开发一款游戏/index.html","3387c7098adfb4e6ba916deb3d43e108"],["/Google/Chrome/Chrome上网助手/index.html","319d69adac0a62e14caf3e06915ae2f1"],["/Google/Chrome/Chrome使用技巧/index.html","e41586d563507b9f04223878f7b82530"],["/Google/Chrome/Chrome插件/index.html","a35b53addcf7a5939224b46d5cb68bae"],["/Google/Chrome/Chromium/Chromium/index.html","70fd22138c3ff3ef034790dc285643ab"],["/Google/Google搜索/Google搜索技巧/index.html","f9a72c524735b863d6d1860bcdfb80ca"],["/Hardware/HardDisk/硬盘分区结构/index.html","4b336a59d178b0dc95c9d45dea3ae8c6"],["/Hardware/Router/路由器固件/index.html","735da92d6372f8a5d479f565d8abeb2a"],["/Interview/Python/2020年字节跳动面试题/index.html","635ab6080c308f681cc62d8cae599ca5"],["/Movie/HongKongMovie/开心鬼系列/index.html","4771195aa39caa65a666c8cc2561eb2c"],["/Movie/小王子/小王子电影的共鸣/index.html","19063ee41544aa86d0c342dfcdddc3c2"],["/Novel/盗墓笔记/盗墓笔记/index.html","29739e46dff3c2b801f5667247a11bba"],["/OperationSystem/Linux/Linux分区管理工具/index.html","cef5d6cec19e240864a90f24c8809c22"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","01a28991e2e2b3d593c8fc74f67faf3e"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","1cac8d08721ed4cb65c19e229a964a34"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","742047a44884f6b51a39b445a41f2fcf"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","957b6b3766bb1a8dd9ee47997c90cc57"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","bad00d6dc3e6ecd0a64543028fc170c8"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","014f6aae937fef17e970f9f73c373e33"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","3777749b0f1a013f34f8145b10ba1048"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","278ee0b0a4f511ee5afb7799ac313447"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","617a166bd0b86ad36b433781feb91850"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b389a8f260a671d05db42d7332fa0c96"],["/Research/Math/线性代数/线性代数公式/index.html","caa7739ee56aa92224a17a0f788c6d51"],["/Research/Math/线性代数/线性代数知识点总结/index.html","1486056dd0ee8de229c506a342f8ea07"],["/Research/Math/高等数学/高等数学知识点/index.html","65bddda0be19a1075e9f2a508e5cb37d"],["/Research/Memorizing/费曼技巧/index.html","ff4b24ab485be49c6226ab34201005b7"],["/Research/思想政治/考研思想政治理论知识/index.html","6531f5cea62f603c9e45c9e7fa484272"],["/Research/数据结构/数据结构/index.html","0ca06a3e089be4327abadd570d3ebe51"],["/Research/英语/考研英语作文/index.html","79d7fa35a7e1d890b2496a6edcb06ee9"],["/Research/英语/考研英语词根/index.html","c7e51006163f43c833453f458e02b48d"],["/Research/软件工程/PseudoCode/伪代码/index.html","96471d6ea47142272eca5eb5803a42dc"],["/Research/软件工程/中南大学软件工程考研题型/index.html","4a9fd1e04b04c265e6cd3b4a0f5a5f55"],["/Research/软件工程/软件工程基础知识/index.html","446d4d9c4ba681c4d92f7b6523eae039"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","e3f7a0cd886585e7664b7183dd5bdedd"],["/Software/Anbox/Anbox/index.html","6bf7353e6999a2feaa04491584be0cd7"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","ab62fbd627530b86240f0880c7857f25"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","74fb339985bbd2f677f9438e27060782"],["/Software/Office2019/Office2019激活/index.html","664ae3d3fbbbabd86377c3cc8005ca69"],["/Software/Pycharm/Pycharm激活码/index.html","84f4f4cd4c631e7462178b42bce2397e"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","0214e7f32afcc0b443897159661577ad"],["/Software/UltraISO/UltraISO/index.html","f69cc63aace5d5381888444718a3b8a1"],["/Software/Unity/UnityHub许可证手动激活/index.html","d6f612bfdcc47764f0a8ddab19955853"],["/Software/Unity/Unity使用技巧/index.html","7a4f87af3f935f74a102dded1c624003"],["/Software/Unity/Unity动态加载Prefab/index.html","7c7936fcf45563de619d2966189d30e0"],["/Software/Unity/Unity的Canvas组件/index.html","c5c0fa880377900f3fa92d477262a50c"],["/Software/Unity/Unity问题归纳/index.html","c4e681f62778fd02433349ff12c7f270"],["/Software/VLC/VLC使用技巧/index.html","5f57e353ce78fdff23d608c25df67ee5"],["/Software/VMWare/VMWare/index.html","2d11b757f09bb030d02df97dd0e5aec3"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","5a6615245de2357fdbaabd786f66cf1b"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","0293d8968cc12fe9bd12bafb2deaf128"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","9476fc81f3f1c8e189045a6400251452"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","508d2a623206bf3208205d56480cc886"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","d2648ff9bd520030e2f77343ecc18e70"],["/Software/Windows常用软件/index.html","60afc239de2c92f6abcdac5d6b89cc26"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","271d71f43602c2a85d7c1120bd8efd98"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","093270f5e3b991517b28f36fa5858cc5"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","34795ea6d50a13e6ac90bfbb0a3992b1"],["/TechnicalResearch/Base64加密原理/index.html","d3f01978703ba3f07d6c2eba599dd2f0"],["/TechnicalResearch/CDN/index.html","9552cdd6bfa8097644b1e1534cf1bc06"],["/TechnicalResearch/Git/Git/index.html","9121a5ff1a08402958844efa9ac90c54"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","937b29ec18f393cb7d66949ad365c497"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","959af2da5466b6704787b909b602fb31"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","cdc276c6fd211da5dbf94d635c112267"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","aa3fd9529419665445435700c8981c19"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","8030aad44d928c761903b014e05882be"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","0576963e48c0ff48ba61040c25a1657f"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","a1c0220ebac36d4968ef898fffd781ce"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","b5ddf27cf323971aea0a70db538b1493"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","e3c6cdf5f6c6edee51e901966f1a8e33"],["/TechnicalResearch/Java/Java基础快速入门/index.html","0c76e73da5c95d99425ec92b83e98272"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","880a1e71703456400715ce36139708cb"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","b949f4c8085d4bb6ac3aff5af4b48461"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","d6f07728c8de32672073d110f03365a8"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d89a96203aad091acb2623e069f9228d"],["/TechnicalResearch/Python/PythonExercise/index.html","0df4e5446efa32cb8e67a9cdd3cee3c7"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","3999512d642e18b8f3a75108ee31511d"],["/TechnicalResearch/Python/Python问题归纳/index.html","98c93bdea088c8f8aab58dc1dc7b1b7a"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","f1f57cf5bf31fc2dc897799613344bce"],["/TechnicalResearch/Regex/正则表达式/index.html","90b21cf51909d5e745e2c1d8ef91c52c"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","ec5b0e9ea82b90b9d37b472ac66ed6f5"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","13facae6ad93ba9caff7a555df2bf771"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","6bf838b9222dcd92ea6e27ff586d045c"],["/TechnicalResearch/服务器常用端口/index.html","a19dc0653d2941c924feb7235f9ed6b6"],["/Teleplay/亮剑/晋西北铁三角/index.html","73145cc2783d0e08e928af7f61058279"],["/Teleplay/仙剑奇侠传系列/index.html","2beaf02d8887319b0bb0bb632c295557"],["/Tool/Music/网易云音乐/index.html","31ca19b5f7b7231cf5d00edc23752c84"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","937e127ce5a955985bd5aaafe8607046"],["/Tool/百宝袋/index.html","e7a643f2f4214705c158f5d0d758f61f"],["/about/index.html","0976bb6bc3cefcc1e4f7dc079dcabcea"],["/archives/2013/10/index.html","1a9b0e8e3b8ffc6e51f852dc03f09da5"],["/archives/2013/index.html","0955f7d50647b4dbf644d55e8689dda3"],["/archives/2016/09/index.html","f0a260b82f259e62a792a9148e8057f2"],["/archives/2016/10/index.html","3915230f8ffd5f7ab2d84ea1361cc3af"],["/archives/2016/11/index.html","51243d5249c4b0b2a9d462c6c07d2113"],["/archives/2016/12/index.html","a2db54bcaf0b31c159a47bdb1e5ec417"],["/archives/2016/index.html","2290744aa8c52b1f56dd02ee9eeabbbb"],["/archives/2017/03/index.html","06574272a026429607576d1d1db9d945"],["/archives/2017/06/index.html","96d302366b50817bbde3216d5ff54c0d"],["/archives/2017/07/index.html","d297c58292689c8b8b4df4d4873ca7e2"],["/archives/2017/09/index.html","446a06dcc8c3dc37a2efbc4a5d6ae263"],["/archives/2017/10/index.html","6efca80b47d8cde0251abe2689b9b763"],["/archives/2017/11/index.html","ead5bce3114f273b61eb0db501ecaf92"],["/archives/2017/12/index.html","4b4445a713def30a6b14ead59f3af3f2"],["/archives/2017/index.html","6dd520d975baec821aacba8f00e6b76e"],["/archives/2018/04/index.html","0901a06f316198169b9c551e5e0ec905"],["/archives/2018/08/index.html","b2d8bf639126f6e291d91501ea9a6b82"],["/archives/2018/09/index.html","b4271cd2f3af4b83b2f7517059de8e5f"],["/archives/2018/10/index.html","eb2fb23292e49ee9332f6bdb396bf7a9"],["/archives/2018/11/index.html","33d59a923bf6cc3e550926cee3c0df9d"],["/archives/2018/12/index.html","36c4291524c6ca3101dbe7ee10bda8b1"],["/archives/2018/index.html","4b6635b5e5a1a2ab5e4d8da581ceb784"],["/archives/2018/page/2/index.html","1c065e77e2ad93efed7da6397081faf6"],["/archives/2019/01/index.html","32755e838247b217e5b76531cb05889c"],["/archives/2019/02/index.html","aea1f6bc6b2a8d29d0587204b9ec45e1"],["/archives/2019/03/index.html","3da033728238ccbcfe1ab23d36b75f92"],["/archives/2019/04/index.html","5e24864518f6d35068b8d1a52875a3e0"],["/archives/2019/07/index.html","711fd930eaa4a889c6c6dc6b258ccac5"],["/archives/2019/08/index.html","1d59967a7aa29a1f489396d61eb51073"],["/archives/2019/09/index.html","ae55675279d3ceaade4d62570147f3e1"],["/archives/2019/10/index.html","c197a342f018a8c6e511d1e88e0a2044"],["/archives/2019/11/index.html","7027a352371d128f437573b1d51e3818"],["/archives/2019/12/index.html","44ff5c98e25a4583a80288db6260a24d"],["/archives/2019/index.html","f182d7a2bb01b7b4a09eb517e81b8b01"],["/archives/2019/page/2/index.html","0641a659fc30c006df32d73bd2a2ffc0"],["/archives/2019/page/3/index.html","0706d6381d1c9d930d544a6aa1ddf2f5"],["/archives/2020/01/index.html","bf14d1b3f346a7ea6ed4b4768e9f09f6"],["/archives/2020/index.html","fa984a037b94b037258d9a846cec3f94"],["/archives/index.html","94ea461658dcf520423c1e7a1a0b7265"],["/archives/page/2/index.html","e25241da6b129298d2e57f3828486151"],["/archives/page/3/index.html","0a1ce0d5c5eb4d4dd69278773f6cb7b2"],["/archives/page/4/index.html","3aabd30d6ca72662ea10c1288623cf11"],["/archives/page/5/index.html","031b226e4f1822a225dbf1985598c06b"],["/archives/page/6/index.html","dbfdea4a6fbf3fb78f3afb8debf9a57b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","09b9249b148b0f7bd22861bf1c41dc4f"],["/categories/Anime/index.html","e96763746cafd5179ce43bff62ce32e0"],["/categories/Anime/宫崎骏/index.html","ce7c502af962b70dac46738465e5b630"],["/categories/Computer/Alienware/index.html","b970da26c59332f8cc8fa890f75930ff"],["/categories/Computer/index.html","d96da0308ba30ef1aeaadc9d81148609"],["/categories/Daily/Hobbies/Guitar/index.html","014880427493589efe7696d4e1c9841e"],["/categories/Daily/Hobbies/PersonalDiary/index.html","4935054c16710981e477cfc581e24527"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","bf794b9b294faa90303903d0b4d9523c"],["/categories/Daily/Hobbies/Photography/index.html","af17e00152de817792dd01c578414858"],["/categories/Daily/Hobbies/index.html","03d17187255f1a0ee7b589e40cbee0ab"],["/categories/Daily/index.html","65d33ac0780161c7ca005db6c2b72149"],["/categories/Daily/个人所得税/index.html","2c526f343240a7e17f4d5cad524c184b"],["/categories/Daily/五险一金/index.html","799c80045516bd0b537058dd0fd23ef8"],["/categories/Design/index.html","4a8d1513941a1d7e9b90dff497df2690"],["/categories/Emoji/index.html","f39d62c4e99a55c6e42ff856b8885f52"],["/categories/Game/GamePlatform/Lutris/index.html","a4447f1327aab77585d6afb0a2925280"],["/categories/Game/GamePlatform/Origin/index.html","857b5f9e6746231d0cd64485b36e55c3"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","75b48a04875e95e223567c2355776b82"],["/categories/Game/GamePlatform/Steam/index.html","248dbe47c60eafeb984403d11ff2514a"],["/categories/Game/GamePlatform/index.html","3b7d424ea6c3585a641ded56325f080b"],["/categories/Game/index.html","635e7beef752f29d1ce80181712e3722"],["/categories/Google/Chrome/Chromium/index.html","4b12d9fe90a9b36320c4ade0510230e8"],["/categories/Google/Chrome/index.html","efe74cedd8c59e04a4c200724a058c60"],["/categories/Google/Google搜索/index.html","30ba70e220098d50d9069cd4fa15208e"],["/categories/Google/index.html","a0aaa5f9ea6f1c8a33a44482ec60153e"],["/categories/Hardware/HardDisk/index.html","299f312e2d3a7a4d40e594176d39fa2b"],["/categories/Hardware/Router/index.html","2b20ab1c5b8baaa1533cab7686542ae5"],["/categories/Hardware/index.html","b3a9a66c68adb0e168ec7fd8b59e195a"],["/categories/Interview/Python/index.html","3722f9ef33a3cb539e44014334057312"],["/categories/Interview/index.html","f23040e3979593f2b666ef97eaa15517"],["/categories/Movie/HongKongMovie/index.html","c5943746b761cef7186def701ad97199"],["/categories/Movie/index.html","1f98aeb73d42400bc2545b88db386e0a"],["/categories/Movie/小王子/index.html","51bbecd533cf9253ddf95eb4e2ecef01"],["/categories/Novel/index.html","ca9b2d38d3cec809202621f376bd573f"],["/categories/Novel/盗墓笔记/index.html","5cd897e74cc0d3bb2dd213c813c19cb1"],["/categories/OperationSystem/Linux/Manjaro/index.html","b08ef0200320c71d4670692921befb78"],["/categories/OperationSystem/Linux/SteamOS/index.html","05265772f9d24993b5c4adfc0a65af85"],["/categories/OperationSystem/Linux/index.html","94f57ff7d10c25d859512062ce2736b5"],["/categories/OperationSystem/index.html","11d0e827e35a8db2187a13197f6abdf6"],["/categories/Research/Math/MathJax/index.html","600a4a6b9b89d21a69a6bc13f510b390"],["/categories/Research/Math/index.html","2c16d25b0af44c42cf6e5bfb7f90bc56"],["/categories/Research/Math/线性代数/index.html","183a58b5bb90e511b0b5f64471199e5c"],["/categories/Research/Math/高等数学/index.html","ee63d648500d8e0bb12486ea17253ae8"],["/categories/Research/Memorizing/index.html","8886da1d70970a7dee61a5e37653565a"],["/categories/Research/index.html","ee45dac071b0e689d6d2ab2bcb380dce"],["/categories/Research/思想政治/index.html","9370ca72c91893f304fb7498c280b456"],["/categories/Research/数据结构/index.html","f291cc168ffbb173dce924493e42b14a"],["/categories/Research/英语/index.html","230b263b749ce1f9f0484d1275f8f791"],["/categories/Research/软件工程/PseudoCode/index.html","c25b3907c57a006cb037057b0ea536ab"],["/categories/Research/软件工程/index.html","7b6f8ae0ab7254500c3e5dfda4fa7796"],["/categories/Resources/index.html","3031ffaf71a61505eed073479b92ac65"],["/categories/Resources/游戏资源/index.html","859d653f5125dbd62643600a26a8eaff"],["/categories/Resources/游戏资源/微元素/index.html","ac8fd47c83a660d9f61ddf7bc0d7d3c5"],["/categories/Software/Anbox/index.html","833e67c73e95df3c5a8e7e12944b44a4"],["/categories/Software/AndroidStudio/index.html","4c89fbaf715da1ad5a3c8b85d95833d1"],["/categories/Software/Office2019/index.html","aba84e12df77ea0f1f672d45c7324b07"],["/categories/Software/Pycharm/index.html","9f9a593328bb4d31f7df9bac70b130f0"],["/categories/Software/Thunderbird/index.html","750577ad4b8740a08314ef2d03dcccd5"],["/categories/Software/UltraISO/index.html","930a2a032b75160a135e340fb9cd7021"],["/categories/Software/Unity/index.html","e0e2600cb250464c3b18bf0bee504116"],["/categories/Software/VLC/index.html","917d431385361b392f226012df87f898"],["/categories/Software/VMWare/index.html","9c06bc432ff5eb72827eebcc884e6670"],["/categories/Software/VisualStudio/index.html","c6ac439887f95a961a809f75d11b5777"],["/categories/Software/VisualStudioCode/index.html","5fabd9896868e41b341919d07b842d54"],["/categories/Software/index.html","6956e57f4706f8f06251370275b79633"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","1f6d1154ce9bc264056692a2aa2f4cd6"],["/categories/TechnicalResearch/Android/RxTool/index.html","a94161ab3e056f7d011204bdf044daab"],["/categories/TechnicalResearch/Android/index.html","d6df477686778c897b45146c0ece7a2f"],["/categories/TechnicalResearch/Git/index.html","b476f0a31946682822095dcfe514ac21"],["/categories/TechnicalResearch/GitHub/index.html","08750bbca436099493640862363f0d99"],["/categories/TechnicalResearch/Hexo/index.html","7ebe89e557e1545645a75d590c2dd591"],["/categories/TechnicalResearch/Html/index.html","f1b2bc93c81eb927507ecf69f8a7d4d1"],["/categories/TechnicalResearch/Java/index.html","518978b4767ce25e246513b34baa89d1"],["/categories/TechnicalResearch/JavaScript/index.html","4a3cfbf534645624f5afab5263ed472b"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","b6f9338f32122e48aaca081e638117fc"],["/categories/TechnicalResearch/MachineLearning/index.html","bda4e89b9a165aa735f904ae20518975"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","940317c3e0652441233d34b776394733"],["/categories/TechnicalResearch/Markdown/GFM/index.html","a1138e61a28483b4e00ba6a7263c9c2f"],["/categories/TechnicalResearch/Markdown/index.html","6b627d6573c5a7fc73ca623a52c6d8ed"],["/categories/TechnicalResearch/Python/index.html","49f7cc93253771c3ab86f8397289c352"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","f709729953fcb0e3fecc4e5d89f318a0"],["/categories/TechnicalResearch/Regex/index.html","0cc93e2d13df9d5a2c43b0c8ee5bf600"],["/categories/TechnicalResearch/Spider/index.html","21d269dac5be3dbfb559b3089e232be9"],["/categories/TechnicalResearch/TA/index.html","2ef077d384862f8811e6516ecd00874e"],["/categories/TechnicalResearch/UnitTest/Android/index.html","aa17f84a1f1c4c22248c6270fae1f5d4"],["/categories/TechnicalResearch/UnitTest/index.html","816d5b6ef76821942aaba30a8e73ee03"],["/categories/TechnicalResearch/index.html","96f2834d076fb47ff03d3b307fcf621d"],["/categories/Teleplay/index.html","f9caf6ef29b3db097d90ac5d86675898"],["/categories/Teleplay/亮剑/index.html","6d1e941dc3cefa43b9c207c6b40d0f8a"],["/categories/Tool/Music/index.html","205b688879c1875104444b4fbd8287d9"],["/categories/Tool/Wallpaper/index.html","44e9662298ab769d029da138dcf6c2ad"],["/categories/Tool/index.html","1fc1576d7b641c1a848d68f5d313e18d"],["/categories/index.html","4289906adc2b0fa850bec12fd13b2f53"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","67731d8b8058264a449c0a43ec4d55de"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","ca38f70ed67f0968c3029689e3ce0c63"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","edcfc31337b7c117384a3fc30801662c"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","fbbe821174eb5c661e0f5df3ce4ec971"],["/movie/index.html","8607b3afd6bbedf3fd46a4f6d7d43d93"],["/music/index.html","fa5ee50000e295fe38222532020d2105"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","e1557d8d314a5ddb08e96fab1d74f618"],["/page/11/index.html","d914afd4fd7b0e182caef5aa9550fcc4"],["/page/2/index.html","02551e6d279c89fdadfedcf55734ca78"],["/page/3/index.html","2d43cfd34c202ce350c2c426d0f817de"],["/page/4/index.html","60693936ca9fc8dc62f447f959da656c"],["/page/5/index.html","21d28077449efafdabb744495e84cf14"],["/page/6/index.html","f02e71e725a3a33a046f7e2e921bfee8"],["/page/7/index.html","63b22741286cfd9db49079a977463762"],["/page/8/index.html","363ffdaa82be918332fad0b71ccc15f1"],["/page/9/index.html","5c84f1b0fe4ffa75021043ea51afe0e1"],["/tags/ARK/index.html","449c63930db833bee0f43f5a5fd46568"],["/tags/Alienware/index.html","53586c12ce65f3bc01937b3bb5c04177"],["/tags/Anbox/index.html","2759c8a8b38c9edd954258312f45e78d"],["/tags/Android/index.html","9402226c1892daa6a53f8da46562ad24"],["/tags/AndroidStudio/index.html","48f82eae4fcd1deeb7a4953f50d446f8"],["/tags/Anime/index.html","8d0fb57b069fb81dec01688c8c67d743"],["/tags/Base64/index.html","531db8daa88cbba376ca9d069cbf1566"],["/tags/CDN/index.html","892c37ef706d22d7fa9e06be576696dd"],["/tags/CSGO/index.html","d0952f98c96af36e999f85667a79379d"],["/tags/Chrome/index.html","38120cb0f2d3612bfed17cdafd715701"],["/tags/Chromium/index.html","c0c5dd9594795d7fed9336321fc0e587"],["/tags/Computer/index.html","44b6897ece9629d0c1ac3314348219ad"],["/tags/Contributor/index.html","5b2f97a210396b76efffc979a774fda9"],["/tags/Daily/index.html","cc14cab68f577207bb455791c9cacf19"],["/tags/DeepLearning/index.html","e474edfd8751f57967330ff8bf933f9b"],["/tags/Design/index.html","b1423ec25d96de41a69fad08b4cf027e"],["/tags/Emoji/index.html","d61ab73b121c3601a6f67af94783287a"],["/tags/GFM/index.html","1ae040445d5cd03265b09416f9850295"],["/tags/Game/index.html","963e64bdbdfcacb98c07f120e3ab8fd5"],["/tags/GamePlatform/index.html","e1ac7c11382cf4c10f5b79e9d448f21a"],["/tags/Git/index.html","ac129c0684dbc8ea6a79da193b0dbdcf"],["/tags/GitHub/index.html","a105f2a24aadca3837d1e0e76096dc1d"],["/tags/Google/index.html","23242d643df11721ad80e714d7102064"],["/tags/Google搜索/index.html","6f8032b9111b69dd40b76b1d66827f05"],["/tags/Guitar/index.html","3f0fc38f79722cd9f7d11765e3cf349c"],["/tags/HardDisk/index.html","e3f5e47afcabfed6bf6d8b9a0fd0d42c"],["/tags/Hardware/index.html","60cc00300df321b0e26897863ccd3559"],["/tags/Hexo/index.html","946138c70bb829b9b40b2ee98c1888f7"],["/tags/Hobbies/index.html","9f0dece73692a6e1cd68660f06356848"],["/tags/HongKongMovie/index.html","50fe755bd7d6d7689cd54ab048ad6634"],["/tags/Html/index.html","cfd7aee3d26efc2936fcdd06f0c585f5"],["/tags/Interview/index.html","4e4b950d966d0662597d33b98f274425"],["/tags/Java/index.html","544e77abf2322b1875587521e9fdfdb3"],["/tags/JavaScript/index.html","4bcfab9eed11f62f8f678501c71e831d"],["/tags/Linux/index.html","60e9cf919420881177e6dfe21dacb309"],["/tags/Lutris/index.html","bc9cc83a7015adda356106948a65f13d"],["/tags/MachineLearning/index.html","7d9158d7c3f28f1a6391adfd865f3112"],["/tags/Manjaro/index.html","1128bd29204b9c8767e5f0e5075e7056"],["/tags/Markdown/index.html","249bb4b7478186781ce67f94aaf7412a"],["/tags/Math/index.html","50a46fba0eeb93ccf205140582a7756d"],["/tags/MathJax/index.html","22684a4e35e0aa122899568621420a20"],["/tags/Memorizing/index.html","be51283ad3ca560a485d0d84f336094e"],["/tags/Movie/index.html","e85ad0f9ac799166a552ec473c85bd6c"],["/tags/Music/index.html","06d99fdc411f8063cf43d7ac61934c96"],["/tags/Novel/index.html","4b5bfbf11a9733a0d82ae7d52e7be102"],["/tags/Office2019/index.html","85ec90ac72f1d305e8134353a44dd69a"],["/tags/OperationSystem/index.html","38c096714288da2378f1a6727424adbc"],["/tags/Origin/index.html","8b768acbcefcd671147472122dc0360f"],["/tags/PersonalDiary/index.html","9350f82d50ff11aa0a497ec6a37787de"],["/tags/PersonalPoetry/index.html","8f7c76139d7df5446a89d2c82ef3c718"],["/tags/Photography/index.html","dfc0b1f159335f07bf3e62fef3156b1b"],["/tags/Port/index.html","5813c153c51d60e25d22384832accc2a"],["/tags/PseudoCode/index.html","3025b5b42cc563c245fe89c736d06b17"],["/tags/Pycharm/index.html","4f30f80166e3e1c7c561162535b7bf68"],["/tags/Python/index.html","db115c0f89096497cd0dad6db9bec7b4"],["/tags/ReactiveProgramming/index.html","7d3b19f39bdf1c2065fb9a06f447584f"],["/tags/Regex/index.html","bcdfa194cefa446ebba881bb8ea61285"],["/tags/Research/index.html","474040c31a07fee88ea8546af376360e"],["/tags/Resources/index.html","5e6396cc848307a0c573e43937564bc6"],["/tags/Router/index.html","2fd2b1aa892455ba18252e491db8890c"],["/tags/RxTool/index.html","4029a7ef25ad93c70e5d80c1ebc522b0"],["/tags/Software/index.html","0971d349a1beb5ba76cb8100986d885b"],["/tags/Spider/index.html","bb150d9ce2ffb1e490f2442c7f998a16"],["/tags/Steam/index.html","9e532df0c8ee01e91dd14c5058b10214"],["/tags/SteamOS/index.html","c0371648ef2311b08e6ae21e9ed1a8d4"],["/tags/TA/index.html","cdf7487259661a1a9a174d9c3ee160cf"],["/tags/TechnicalResearch/index.html","01ccbe9b9f0542f4b4a086844d488337"],["/tags/Teleplay/index.html","fec4f479ce8b1b41311c4b3146500161"],["/tags/Thunderbird/index.html","147b03249feb6d336e083729abcccc44"],["/tags/Tool/index.html","b9d846682ac1eefe27a9abaa57505ea8"],["/tags/UltraISO/index.html","b50cec54144ecbab3dbd8bc5c02b77a9"],["/tags/UnitTest/index.html","3fee255834e14c6415d2b18c2c7fe402"],["/tags/Unity/index.html","0eb92316fb6834deb6187f7633abca44"],["/tags/VLC/index.html","bf3f11c901fa4077330b771eeecf11fe"],["/tags/VMWare/index.html","481e80c8c63c5ed9bc87d314a30aa801"],["/tags/VisualStudio/index.html","cbc042271f16fa32d073f383b87f9033"],["/tags/VisualStudioCode/index.html","48aa19fc4ab3ea321a5869c2fd3bcd79"],["/tags/Wallpaper/index.html","75312d90bff5d220ccfc1799890cd940"],["/tags/Windows/index.html","b9b5a7d443e5ea724df1052fd8b082c1"],["/tags/index.html","ecebec0fa839d2190fa9c501eda93eeb"],["/tags/个人所得税/index.html","ca1628f1c5415578c9eec7fd92be21fc"],["/tags/五险一金/index.html","c20d8a9d40ed8bce4e0994b967cceca1"],["/tags/亮剑/index.html","eb34451a7b2b994acf401c72134792c1"],["/tags/仙剑奇侠传系列/index.html","80a8eda681a59ff487ce417762d91326"],["/tags/千与千寻/index.html","b8593708613e4d3b5529dad8564e2848"],["/tags/宫崎骏/index.html","b8ac45a3992b1b4260cfc5a095d86d22"],["/tags/小王子/index.html","ac9cf5919f8693c46ec6e5965e529871"],["/tags/开心鬼系列/index.html","1252a8dc2a2b581e314eb031c121e90e"],["/tags/微元素/index.html","4f73130b11ed12d0eaf0b39d6040b278"],["/tags/思想政治/index.html","036d2126b0f7b3484b40c90b3cea81aa"],["/tags/数据结构/index.html","b7348d6cedb6b3700b4da27bbd031d33"],["/tags/游戏资源/index.html","0f1accdb5158d4d9ca5b9d3208718baa"],["/tags/盗墓笔记/index.html","2770b14dca98ab9efe42b1497c9448c0"],["/tags/线性代数/index.html","c49fbde7f30c259b1b21482dbfafa7c1"],["/tags/英语/index.html","16b8e502a4834c71550ecf5347ba75a8"],["/tags/软件工程/index.html","d33e3ff85671a4704e3ede9f78b28ba6"],["/tags/高等数学/index.html","db58e608a8e3ea7e9a2f9f1fb98d5c66"]];
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




