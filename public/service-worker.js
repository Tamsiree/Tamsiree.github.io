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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","926e8768a75eb3a1d12271c70c9aa08d"],["/Anime/小王子电影的共鸣/index.html","354bbe382ca1177e552b0b1ca65651ae"],["/Computer/Alienware/Alienware更换电池/index.html","fcc7e60f25e441131bd135581d4eaad1"],["/Daily/Memorandum/index.html","bd9d1a71af803d23d630c9fdc9e6bb17"],["/Daily/生活小常识/index.html","fe157ce43fc037cd6448757cd2838c9c"],["/Daily/网络用语/index.html","256c52b5b4c8d2990a7e2d74888479b1"],["/Design/设计用户界面的注意事项/index.html","ccd62c1429ca6d1f0abbcf5d40d86833"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","aa079125d40370c306790049355c8e65"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","fd4d8a7c3867e249a0eb964b2a7ea364"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","b08dfc98c31b19e17f760c125622801d"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","43ac313162b896277b08f3ac78e36a01"],["/Game/GamePlatform/Steam/Steam库共享/index.html","1824ec1d40f78db53aa5ccbc5f3a89d4"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","9dab466bafb2aee8328af632b496bdbb"],["/Game/如何独立开发一款游戏/index.html","d0450b89620fae8038d81db49684ac7e"],["/Google/Chrome/Chrome上网助手/index.html","cb13dc290bca4cd71414fadc0407a05c"],["/Google/Chrome/Chrome使用技巧/index.html","70e1a16cda9e7a186b5f376518b57849"],["/Google/Chrome/Chrome插件/index.html","7fa587533aaa7c674301169e2e0f39ae"],["/Google/Chrome/Chromium/Chromium/index.html","e8f60f9c75bc024a3b1bd3658e8043ce"],["/Google/Google搜索技巧/index.html","bf29de019ee12101edc3ae851d3176e5"],["/HardDisk/硬盘分区结构/index.html","fdfda68435b364f7645a1603aaeae717"],["/Hobbies/Guitar/吉他入门/index.html","b4df37bb94ba1d939072b49ce024c170"],["/Hobbies/PersonalDiary/芦江曲/index.html","6022e5b12668b21f53d5efcd78499872"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","f1fbea165dff248d31b9205c3391e4d1"],["/Hobbies/Photography/摄影入门手册/index.html","b8d02736c238eacec76cb4cc3c160afd"],["/Interview/2020年字节跳动面试题/index.html","589427a055ecac7dd989d39aede0b86a"],["/Movie/HongKongMovie/开心鬼系列/index.html","2d568cef5ccf0e78c1a90d1119e9de09"],["/OperationSystem/Linux/Linux分区管理工具/index.html","37e4bebd1736f153e8baa266b734a804"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","b69bcdef187eb7ece8695869f0f02402"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","29e111c4d42aa1dbde3d4b93c3b62a17"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","8559b8019272570403227088bfa98cd0"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","ade0f330b45cc1514f5bd7fbeb5afe31"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","0fbf495b7ab5e49e9f7efd1645f7afa7"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","6b5707d3edf7fe57b3348c78665d45e9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","04d5ffc8987eab230f7df83df4ef3c4a"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","640aef627f3a1770f056831f73beab23"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b30571b9a533bf35793c4f251d30afd6"],["/Research/Math/线性代数/线性代数公式/index.html","66d65763dea284e4f7bbbe0614a6b68e"],["/Research/Math/线性代数/线性代数知识点总结/index.html","f0214580a2ad43dd2c3a77d9214d605f"],["/Research/Math/高等数学/高等数学知识点/index.html","5f6375719871980a736ec0dd127ae288"],["/Research/Memorizing/费曼技巧/index.html","2d82520c8f13f0a87007166df5a62ec0"],["/Research/思想政治/考研思想政治理论知识/index.html","37576a69e225dc90d7c50fa3cb0ef8dc"],["/Research/数据结构/数据结构/index.html","5785c3cdc29e1dc10a7fff49f0245b0b"],["/Research/英语/考研英语作文/index.html","e43d3c1a7948b118819bd633cea23840"],["/Research/英语/考研英语词根/index.html","129d05ffb68b239a390847ec7afad4ce"],["/Research/软件工程/PseudoCode/伪代码/index.html","c2770c078380a559b3f217d1f23829bf"],["/Research/软件工程/中南大学软件工程考研题型/index.html","4af3890f641ff0cf22ce38a07694e6fb"],["/Research/软件工程/软件工程基础知识/index.html","3d3435bb421408126c3a670aa1fbc522"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","63b61a706082489b71b16b5b5bd7e327"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","35a7dec99107979c79dd7835ed83070f"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","f43e3f40bcb737eddcd978393d76bd80"],["/TechnicalResearch/Base64加密原理/index.html","7cd0d2d05669069c62544b5de16d2635"],["/TechnicalResearch/CDN/index.html","db1e4c26942c3a2fc03bc3172fdfd9f0"],["/TechnicalResearch/Git/Git/index.html","668af5fda3f82e89eb6f4af2b0658380"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","9d6d297535b8aa8cd2213561af61fc5f"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","4ddd0d8dd71f5c1f8e2c5b1da412a49a"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b9a047a6f786bc97e591371391faf563"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","8f99738091d819bc63b09aec9d96b021"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","00fd841c684da2d643ea92a3cb703166"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","7a559e51cbd9dc97265e9c1d96a1c86c"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","e23a81146a4369f82f7197f9f7f7e7bc"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","672dd658f86312c8b9e42538046079bb"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","788085006caef872917b76de1c2b2e36"],["/TechnicalResearch/Java/Java基础快速入门/index.html","071f7f5454a6d12910db19aa98ce617c"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","94cb784d61534ffc8139b05d2d8134d3"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","8fb7c34770ca4acfcc1aaded4a714200"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","11abd593d77984b4020e7504f932ac4e"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","244b93d0f1c94d08f9cd0b356e1f3475"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","fd980802e52434a9cfd2beea5e148701"],["/TechnicalResearch/Python/PythonExercise/index.html","aba566c4d31a1a54db0857dea23b3de2"],["/TechnicalResearch/Python/Python问题归纳/index.html","f66c5a978325be772c060bcfd88e25d5"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","82f84cb64633678122d0a90deab519bd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b686bad99f142a72f9e0e21fbd3c8f78"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","a79ac0fcc74630be47ada4dfdd4c79a9"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","343effa28a8fb7f29d3a6fc43da8ab3f"],["/TechnicalResearch/服务器常用端口/index.html","dccec0fd4ae9188e892f19e57df6463c"],["/TechnicalResearch/正则表达式/index.html","209b04acc31d4bae815687db8b811162"],["/Teleplay/亮剑/晋西北铁三角/index.html","26db98cd90daed971883d620c36841c6"],["/Teleplay/仙剑奇侠传系列/index.html","4c5ab3984c6ac459836e4f6ec51ea71b"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","681f96f053830cabd41d0cd1790da4d3"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","244fe2dd72ff9ba07ee5aa060497439a"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","4fb87b5e1252dd1a1595ecf11ef187fb"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","48d270973c8e8b1f7944985a068836b6"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","c339f41bf6e7185837ba1e12ae1b14a8"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","3e8f94e75b5ef7b1a7244ee6b6c79b41"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","4e8ce618b5712ac67bd3355e586fe31d"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","8cd1cfa183b55d2d39218c1788b3c46d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","71d8f271695436e3adab51c5aea11113"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","2dab861ff2b2a1e69d23506f3f487cf0"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","93ab42d183049ab58fd5811819910c06"],["/Tool/Music/网易云音乐/index.html","09b1d1c32633ae535d348b6c2187db90"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","dea3eb956421b5423275c8633bea3247"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","e38396ba979e9614a501708a1be39297"],["/Tool/Windows/Software/VMware/VMware/index.html","eb91cc118d7c367fb3ba810d14db2d4d"],["/Tool/百宝袋/index.html","f403b4d72140d06a6460489923273513"],["/Tool/随机获取在线壁纸/index.html","ec65cd7ec44a38ec726c92bc2132e2da"],["/Windows/Software/Office2019/Office2019激活/index.html","4204e17dcf1560730a90dc85913e4a15"],["/about/index.html","6d03d8b2cf7598cb8187eaa08cf1bcaa"],["/archives/2013/10/index.html","68f7f06e6336fe252674b095c33e7f9c"],["/archives/2013/index.html","4b1b8f1b6892d1617bd019c21cebfbf8"],["/archives/2016/09/index.html","43d44da38872e7c5b9845d3ad386f28e"],["/archives/2016/10/index.html","6965605d4f4f2f5f554d9b91358f3954"],["/archives/2016/11/index.html","e2cf1a90c7bde924f10d93a4a12d3d8e"],["/archives/2016/12/index.html","4e9bb11cd0c5c6b08582d6a74068e4ee"],["/archives/2016/index.html","1ad25fe096beaaa4bd84b7691f75a213"],["/archives/2017/03/index.html","659e6907edbbfb611ab2bd1afd21fbd6"],["/archives/2017/06/index.html","80787ec4a07233e9ddf25527086d3208"],["/archives/2017/07/index.html","f37c7d57684132987edff7ac82736a47"],["/archives/2017/09/index.html","7b64d7015df6ebc334ae5350f085b621"],["/archives/2017/10/index.html","11993578e8425291614eea5f3e9d2eb1"],["/archives/2017/11/index.html","441437d2ab3dad7473d0382ec889d602"],["/archives/2017/12/index.html","a6a2a8d4cde4d6cedf8b310d4266cbe4"],["/archives/2017/index.html","42247e3fcee2a55eba5d7c2449c71035"],["/archives/2018/04/index.html","ace68babeee6d35abea23a1e690f8e35"],["/archives/2018/08/index.html","524ba70b6ca5dbc620c274d118c2d8bf"],["/archives/2018/09/index.html","cb6fa76869c4bf41c6e55d44790232c1"],["/archives/2018/10/index.html","2e58716faa4112c3d66d61733071151f"],["/archives/2018/11/index.html","3aa37492d2eefa8a0bac6b461d87eb93"],["/archives/2018/12/index.html","46b01949d857e39f41e21ec7dab3862b"],["/archives/2018/index.html","3792c4f958b3c47e36ea96bdc3da52a3"],["/archives/2018/page/2/index.html","95abb5c369c19ad6660f68b7ec81200e"],["/archives/2019/01/index.html","0030da9ba10d07f3c801c1e81e20486b"],["/archives/2019/02/index.html","40062d681338e7537cdca425d656f7e7"],["/archives/2019/03/index.html","fdfc439e7eb2db59bda01d10439cd579"],["/archives/2019/04/index.html","bae026c8234c47df24f5e6db3fb9a30b"],["/archives/2019/07/index.html","f227dbf04141bb8252ce14cea08cb750"],["/archives/2019/08/index.html","ad0064c3b142aa14ceb7e39aaea35a04"],["/archives/2019/09/index.html","7a3d3e0b073457aca07833b3c671894a"],["/archives/2019/10/index.html","c6669338d17ef4d08e4fa7eb38e09f2b"],["/archives/2019/11/index.html","8ac728a088f4b3852001ce4d0fbd02f1"],["/archives/2019/12/index.html","0d01addc1594f34837e28761ad0b7066"],["/archives/2019/index.html","0345eed05161d02d93a4e96c2c604f23"],["/archives/2019/page/2/index.html","e650750ab5fbad8481707203f7094d9a"],["/archives/2019/page/3/index.html","99dd62b9df90f5513de1aeb3ffbfa66a"],["/archives/2020/01/index.html","a48844e263629f420fd9e561d462d2b2"],["/archives/2020/index.html","63526bec9c7031df6dedc8cfb92a8ca0"],["/archives/index.html","c637d61453c6bf74deb04d7e947d34a4"],["/archives/page/2/index.html","29e80d34cc146a080dbf4bd88ab4d520"],["/archives/page/3/index.html","2ffac9fc95b7eb5c4d8a7f882d728fae"],["/archives/page/4/index.html","c889c6f0d69b1cbb092b0879e930bb45"],["/archives/page/5/index.html","cf061e3bcc6281d8dbe6f6f09bbade23"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","6ce6ee5978587d21ce636329edc6f009"],["/categories/Anime/index.html","d2f1943b5769ef7ac968f4280a46f520"],["/categories/Anime/宫崎骏/index.html","f5e02dbe0ef0eab461478961a1b0c67f"],["/categories/Computer/Alienware/index.html","e106c981d1dc37a65cd5154e42189a4a"],["/categories/Computer/index.html","2187045997546356e90aaed175ab1bfa"],["/categories/Daily/index.html","a760eebfc78b6851915e0db1dab727d3"],["/categories/Design/index.html","62c03f4f900a70e4f7eafc1d1efdaa5f"],["/categories/Game/GamePlatform/Origin/index.html","1bbc0ed949670d74f8b89819ee6655ec"],["/categories/Game/GamePlatform/Steam/ARK/index.html","bb933aae30038182985715c6a8420fd9"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","b360fde4d86d4c1876043171803eff43"],["/categories/Game/GamePlatform/Steam/index.html","35f1bdabadc40a32fb407a6ab43ec366"],["/categories/Game/GamePlatform/index.html","0624c960321987495151659064ddd0e7"],["/categories/Game/index.html","cd17f0770b44b3a92f6b0fc1bd207e68"],["/categories/Google/Chrome/Chromium/index.html","735f928418bdf25e1e375e58f9244d07"],["/categories/Google/Chrome/index.html","d5300f24f7d255403661d49f657a471d"],["/categories/Google/index.html","36d177af1d4c966dfac5d97fdb28a170"],["/categories/HardDisk/index.html","e5d6be5caaead333c62f59269bcd4a82"],["/categories/Hobbies/Guitar/index.html","00e2ac1f6a4c65e33cdbd66cf294d958"],["/categories/Hobbies/PersonalDiary/index.html","2935c61ab22e93485879dc48099551e6"],["/categories/Hobbies/PersonalPoetry/index.html","b33287df742bf18be009446ca3c2f632"],["/categories/Hobbies/Photography/index.html","de93d7705ac9504bf1660e912c516eef"],["/categories/Hobbies/index.html","918af82016bb5c120280b21bec5d36f5"],["/categories/Interview/index.html","d9f73d7e493b84dc747fdc54f0f09290"],["/categories/Movie/HongKongMovie/index.html","5a711b115c778808acf0e9b3402d0512"],["/categories/Movie/index.html","796da8af26071fb3504fb44ef41ae970"],["/categories/OperationSystem/Linux/Manjaro/index.html","305ce4210c0e3ad71e7d4ea9694b26e7"],["/categories/OperationSystem/Linux/SteamOS/index.html","c2f49ad4fc318f64a3125510d1435f77"],["/categories/OperationSystem/Linux/index.html","8697e5aa902c9fa1d061978e159d5b41"],["/categories/OperationSystem/Windows/Software/index.html","644d40ab1e92cbb66ac33c1b8281fd0f"],["/categories/OperationSystem/Windows/index.html","850df3f8efb6bbe2995eb3e5cdf6a263"],["/categories/OperationSystem/index.html","fc9babd45a3a3aeea8980d1cdc39b0b6"],["/categories/Research/Math/MathJax/index.html","e603e8e7b891dbf398c9c379c4fd98d7"],["/categories/Research/Math/index.html","e457fc7783d8c012f7cb206c01f08c7f"],["/categories/Research/Math/线性代数/index.html","c7346aee37759c174801803211df5a34"],["/categories/Research/Math/高等数学/index.html","6396b10724616446e12e6975c34ddd29"],["/categories/Research/Memorizing/index.html","61eb991349de678d26c63981d9a5f17d"],["/categories/Research/index.html","9b7182a78c44ee7a333d52063c76d3e1"],["/categories/Research/思想政治/index.html","f0c1ddf428f17ef8f5f8ea99987db88d"],["/categories/Research/数据结构/index.html","fed4348623b423a7367a36e4ad9b8b8c"],["/categories/Research/英语/index.html","6cc4284a2ca34a9eef62abb8400aa5f1"],["/categories/Research/软件工程/PseudoCode/index.html","1f577b68278541001c5ef1a6028753e3"],["/categories/Research/软件工程/index.html","4e486f7507cc3b0b6f8d83d0d03bd170"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","ba4cad78ed68bb40824984d8898600b7"],["/categories/TechnicalResearch/Android/RxTool/index.html","9b02182f4590152898128fe182a05d5e"],["/categories/TechnicalResearch/Android/index.html","e7e43648ebf8f0b8b4587c7e58f3b6a3"],["/categories/TechnicalResearch/Git/index.html","28b45c7665689d316e524847ab625224"],["/categories/TechnicalResearch/GitHub/index.html","8690dc96e7b9d06a57905ed1b3222dc1"],["/categories/TechnicalResearch/Hexo/index.html","18f9938929dbb90fe530b5f66d36aa8a"],["/categories/TechnicalResearch/Html/index.html","3abdc4deb69d401ab766dd127e90c9a5"],["/categories/TechnicalResearch/Java/index.html","a104380e248d4553995ce5235470d765"],["/categories/TechnicalResearch/JavaScript/index.html","5c54e9c6159b8fc176d8c2fb217427d6"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","992c92ef53a9ab5eab6965d00adcc9b5"],["/categories/TechnicalResearch/MachineLearning/index.html","38a97593b0196e37bb0c0ae8e6c211e4"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","231eaddaf636506ea103480d3871b88d"],["/categories/TechnicalResearch/Markdown/GFM/index.html","7a1493d5fa39b82e2bb2a628b28837ef"],["/categories/TechnicalResearch/Markdown/index.html","19e9956c5f00d5c60bcbcb3d21e28f61"],["/categories/TechnicalResearch/Python/index.html","e5088a5ecfb28333547609388d139145"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","30c0bff7d28ed5ce5e0beeca0e0b03b1"],["/categories/TechnicalResearch/Spider/index.html","0c361ce4c0aeaac2a4db8f061876eb8f"],["/categories/TechnicalResearch/TA/index.html","9d467f73f5580180c15ad8c3f140f4d8"],["/categories/TechnicalResearch/UnitTest/Android/index.html","15a7f823c704f5c10be687b8cade6712"],["/categories/TechnicalResearch/UnitTest/index.html","822c966d4da2c830de3dd742c9da7f90"],["/categories/TechnicalResearch/index.html","8fba33820d76bfe86c7c98ab5b4ca350"],["/categories/Teleplay/index.html","def85f7b457d42434bc272f012f4f86e"],["/categories/Teleplay/亮剑/index.html","7a47fa4cf6da730f97bd5579a9e85a6b"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","2395faed41ed150266a1dd9ff4d9631a"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","dbf7a49a4302ffdfa466ae9f870edf98"],["/categories/Tool/DevelopmentTool/Unity/index.html","fba1aaa43ee35a286de3fcceb66b1f19"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","31dd3f228f3f63c5f024b62fd5ee5fcd"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","18dedcbdf7e2289fe99ea70cef2086cf"],["/categories/Tool/DevelopmentTool/index.html","4c1855a65a40c9c4b8cbd878271b84eb"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","d1d087d504405a51038071cf2e142bdd"],["/categories/Tool/Linux/Manjaro/Software/index.html","30807a4a599608f23507131a414ffc96"],["/categories/Tool/Linux/Manjaro/index.html","a94899f92cb20cac2e1b9b040f1bf595"],["/categories/Tool/Linux/index.html","08d2a16b06ce5bcc78fc71ca7bfab8a6"],["/categories/Tool/Music/index.html","b112292fb61476b5a5b35b255a006839"],["/categories/Tool/Windows/Software/UltraISO/index.html","82da49bc2404c924dd30512c75a3c7b5"],["/categories/Tool/Windows/Software/VLC/index.html","8d145b5f1b80b0682383e6ec5f80b3df"],["/categories/Tool/Windows/Software/VMware/index.html","5021e59884ef4e26a862e93eb7fbd04d"],["/categories/Tool/Windows/Software/index.html","926b6a231b9667079af6de1a308634c9"],["/categories/Tool/Windows/index.html","2dceebd33348e9d29b25337ca559fb09"],["/categories/Tool/index.html","9d8cd224ea81d1d8a6272589dcb60540"],["/categories/Windows/Software/Office2019/index.html","800941bd541c813eccac13b6a7e9c8bc"],["/categories/Windows/Software/index.html","a579f3eabdc1c3979494d07098465b5d"],["/categories/Windows/index.html","2b1b3245222010c7a69bb494d6802ae6"],["/categories/index.html","d9c3a985269329f39ff2ed415599a4bf"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2025c936cf74f25fe048c9ba478291b8"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","ca4358693661141cf36c5f8439fdb66c"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3c2ee82c6dea37cb7df934718fec18a0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","d266cbf014e6970169e974d9362b642f"],["/movie/index.html","41ad4c651110c1ca05a3bda2eb60d811"],["/music/index.html","4ec7ba4a1e986578527603607a4500ef"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","55ae92666041a3fe42b5adb291f93fc1"],["/page/2/index.html","0acc55d4f55b19b80b62ac8f862f686f"],["/page/3/index.html","7698332a1036558f4f0c5e4249e7e650"],["/page/4/index.html","eb21322a11238559e8ec275507f404e3"],["/page/5/index.html","b272df5d94562d9c7dcf0dc541fac385"],["/page/6/index.html","4ca0aec1f1d1358e4fbedacdd97917cf"],["/page/7/index.html","ac385a0cd8298ea419e80437dd49730d"],["/page/8/index.html","4d894f82632ad65177ec20dcc3a56229"],["/page/9/index.html","24697cdc6be65325f2314e9bbdfd363d"],["/tags/ARK/index.html","f31c7c6f3bc35982aa4f7fffe16e8a4c"],["/tags/Alienware/index.html","f98e9bfa12a82654ca19798f874df383"],["/tags/Android/index.html","dc189084c0936547a4525f25e90f43bd"],["/tags/AndroidStudio/index.html","cf941cbf41091a2021e06270ef902867"],["/tags/Anime/index.html","5e62d4fe8aff378695ddb40f59c6e577"],["/tags/Base64/index.html","5707b444c01d8b675d4acb495cfb7ee5"],["/tags/CDN/index.html","6a735a9912c837102bbce3ce1f6663ea"],["/tags/CSGO/index.html","fd02b5c45dc66c5d0f89b129d8071ecf"],["/tags/Chrome/index.html","bd5f47a2e61615e2e629b9819b9801b4"],["/tags/Chromium/index.html","ba2921b6898f5b606351e09d92936fd2"],["/tags/Computer/index.html","ec281e9f381b6c19611be150678bfce1"],["/tags/Contributor/index.html","e667f2b67084e6dc463a67f919b12b93"],["/tags/Daily/index.html","18bd313ac6bb1a4500a6bc3489fb163f"],["/tags/DeepLearning/index.html","eb3b14f2a3a755b155a7a8a773170b80"],["/tags/Design/index.html","9540594b4ead6b4e466a77870a80555e"],["/tags/DevelopmentTool/index.html","b7c96e3e2a77cd4ff5ecff5ccf0f5384"],["/tags/Emoji/index.html","fe3e361282ed66eea36526d2a8eae592"],["/tags/GFM/index.html","03c3eed54395cc1ef893483eb31f6718"],["/tags/Game/index.html","8de6e0a40abe836b2c6cfd5f2eb521e7"],["/tags/Git/index.html","161db62765422bd27d276a6efde2390f"],["/tags/GitHub/index.html","c3e46c7d500d44bd0c98e684f1f58e0a"],["/tags/Google/index.html","8acc0f649ee2e025b6f1db19e6cd4de3"],["/tags/Guitar/index.html","828d69ea37f5bf6624ba19efaf40cd84"],["/tags/HardDisk/index.html","3cee32da9597f80d00bfcfa0756dcaab"],["/tags/Hexo/index.html","eeaa6626b7c7536b4d351c2a0763eb08"],["/tags/Hobbies/index.html","327b760870a07ac41918ce5a2d9cee32"],["/tags/HongKongMovie/index.html","81320b899542ca5ac324fb1d198c71c0"],["/tags/Html/index.html","cf35cf735ba17480e503225bbbab9bdf"],["/tags/Java/index.html","b0fbdcc473c50e72b5d41ce6a203058c"],["/tags/JavaScript/index.html","0b08c978fed51fa9f31713d6f8745640"],["/tags/Linux/index.html","a7b910f5c128961f7ec0a3c89fb5d0ea"],["/tags/MachineLearning/index.html","2e9e99c0e49a8a6e3449ad08647ab936"],["/tags/Manjaro/index.html","8a579b410b73da4cb5f19bbca124fbea"],["/tags/Markdown/index.html","60c3d632961c6263fb326d7bc947fc23"],["/tags/Math/index.html","7b0511be5ce2b040ddcc35e4e0f1ddb8"],["/tags/MathJax/index.html","d312eecb33da69483f0b06fc8a5f5f21"],["/tags/Memorizing/index.html","483c924ecb258654a859a6641c5b3d52"],["/tags/Movie/index.html","05f22c2c5e4b94d851827d7a74506e71"],["/tags/Music/index.html","45ad436a6ba9767e2e38df980852d50b"],["/tags/OperationSystem/index.html","5a3779ec5529b06095381d6047306559"],["/tags/Origin/index.html","bb1f7b30859852cbf887a51c1800dbaa"],["/tags/PersonalDiary/index.html","946d4e07dd1b217f026ae1abf4408f92"],["/tags/PersonalPoetry/index.html","36bad60f2acdb3501cb13908a40e7199"],["/tags/Photography/index.html","11da74676894c2e3f1b1ea36d5e3ec9b"],["/tags/Port/index.html","6da7431e90597235cd892440ba8af9c6"],["/tags/PseudoCode/index.html","cda7179201392ea376af2236c931221d"],["/tags/Pycharm/index.html","a7f8a5167a58c2cc4da38b4285674133"],["/tags/Python/index.html","b9a92e7b2bf826739367b0899369efeb"],["/tags/ReactiveProgramming/index.html","5608614843de2c1362111281e1765d51"],["/tags/RegularExpression/index.html","ff70f07b5e414fd504a2a2ac63561d71"],["/tags/Research/index.html","3e568dfb02a833e9f6423cb4b203d488"],["/tags/RxTool/index.html","10fa93d7137af1ad2f52c4d220733df2"],["/tags/Software/index.html","0365900375a0f03118130b403e5ee3ff"],["/tags/Spider/index.html","3c715cdfe6a3fe1870b7a605971e3654"],["/tags/Steam/index.html","a74208f61a4a3c5871df3b4a11a9bb15"],["/tags/SteamOS/index.html","f3d7911ad18fed7e8285102ea835c4c3"],["/tags/TA/index.html","c59e4e300db163ddc5af0302542f4939"],["/tags/TechnicalResearch/index.html","486105033ffe526a3d3e9854102cdfc6"],["/tags/Teleplay/index.html","141c4186927da6108242c447f6df5f44"],["/tags/Thunderbird/index.html","81497c5a5ed57b55124c224b62d9d857"],["/tags/Tool/index.html","393374476ec2db21824fe29ed32b478a"],["/tags/UI-Design/index.html","33e577c4af7dafb921df0c09ff88b128"],["/tags/UltraISO/index.html","822619ce50527656435eb2764ff2dfd2"],["/tags/UnitTest/index.html","c9d0a2da501a41c75a4abae30a0ac7da"],["/tags/Unity/index.html","356a29210fa0e3e0d74adab4d4d0cf53"],["/tags/VLC/index.html","850fe261a254c4e95592aaabf798a438"],["/tags/VMware/index.html","68f51c5fc75cb1cc7d8db5b9b517addd"],["/tags/VisualStudio/index.html","9b46231b7448b283d3a5b077380a525d"],["/tags/VisualStudioCode/index.html","2f9eb3223fa41d6569b79116cb40451a"],["/tags/Windows/index.html","db39803d0c1fdbe02b8bfd8ed928e803"],["/tags/index.html","316f5009b7486fd09f41ac970ce8282f"],["/tags/亮剑/index.html","622ff8e0c8daf037cbfa1279581ef6ca"],["/tags/仙剑奇侠传系列/index.html","7a8efbf74253384637878839f5e805a8"],["/tags/千与千寻/index.html","0c9ea10405da028dff1bc98b7c335e68"],["/tags/宫崎骏/index.html","97bd5d2dd8d5478747269b18a236bfb6"],["/tags/小王子/index.html","1f361cdb4633a14f440947c7fadd5de6"],["/tags/开心鬼系列/index.html","fdafb5223cbdcbcc7b9ca412d820360d"],["/tags/思想政治/index.html","b45d24c12d2bfeff6d018aef5db14dc6"],["/tags/数据结构/index.html","a5d22367a79b7c60dbce7b83513a99ac"],["/tags/线性代数/index.html","725aa408b1de17622fd184c6db98fc1b"],["/tags/英语/index.html","d6d43bf918f402dfde4cce3c4d68d32f"],["/tags/软件工程/index.html","4db0fee2d28a24f899e3daf0370482d5"],["/tags/高等数学/index.html","50ea6553760c9da499aa556747eb2266"]];
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




