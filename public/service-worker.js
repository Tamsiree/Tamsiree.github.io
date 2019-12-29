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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b4c9f555a2b78e003c28b6cebc1f7994"],["/Anime/小王子电影的共鸣/index.html","830a37b33c92d42a3e5935bcd36a6f48"],["/Daily/Memorandum/index.html","3f07c02a2994917d15a52724a0b6b635"],["/Daily/生活小常识/index.html","ec22c46d17594da39041025fb35bffbd"],["/Daily/网络用语/index.html","3577184ac2568056e4d160e6a7700f28"],["/Design/设计用户界面的注意事项/index.html","9af447ae28db4631f9ba8c71036b4e7d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","6306224dab600466a145e8acb1db67b3"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","1c1af71e27b393d1db05496e802881bd"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","7fc5f53958dc612e784edb20f9bd1bb5"],["/Game/GamePlatform/Steam/Steam库共享/index.html","4884fa836b268749aec04aea5fec21e7"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","2e4fd97ef0a8c227e3ab2555cb935300"],["/Game/如何独立开发一款游戏/index.html","fc25b245f17d61883181ccaf0d31ed0a"],["/Google/Chrome/Chrome上网助手/index.html","421d8a70a18b8fd1cffd2c0bc359508f"],["/Google/Chrome/Chrome使用技巧/index.html","8e1187ecd06a11f04edae154a5376060"],["/Google/Chrome/Chrome插件/index.html","fb64aad1e0a25b44f458a7d766b2946b"],["/Google/Chrome/Chromium/Chromium/index.html","962ead1f7107922ba16d5efee074a76b"],["/Google/Google搜索技巧/index.html","e60516b85daa5b960defbea37a4c9dae"],["/HardDisk/硬盘分区结构/index.html","60326bfe2a05a438ae9523eeff14a7bb"],["/Hobbies/Guitar/吉他入门/index.html","ce51ff422757112ad36d9b99f6599f76"],["/Hobbies/PersonalDiary/芦江曲/index.html","4e077da88f643bdaafff2f81ba6335b2"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","7d2867e853e762a3f52e7c7d7aa217f7"],["/Hobbies/Photography/摄影入门手册/index.html","149df846050ebe36876c7e793d0c4c8d"],["/Interview/2020年字节跳动面试题/index.html","ebf15eb295d428ce0bfdb0e0b9ec3d9e"],["/Movie/HongKongMovie/开心鬼系列/index.html","01e4a7ee1aa08b9e196d7da9dea27f87"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5c19142cb34b39c3a065155adac1c7eb"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","072001846aa33a3b928ea93bef78d508"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","005287b6e0fc5f3b89cbe515186ff106"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","ed3c4eb979c20854e53ce71d82542668"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","570993459d2ed1a7902e03c1910d3c19"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","865b7a4d60615441dd29e41ea61ab000"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","99a8e6c842db8adaeee942d78ed340a0"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5ddd57c46cd49527e3c9008373dc3d8d"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","f96d22c0f19e8e12f78c69d0fac953b1"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b18a863f8365510661c3921408a729cd"],["/Research/Math/线性代数/线性代数公式/index.html","407e1995aed2abef05b45c1f0c395912"],["/Research/Math/线性代数/线性代数知识点总结/index.html","14deee472c53ca4062d64c0ab74f65b9"],["/Research/Math/高等数学/高等数学知识点/index.html","8b0dea60da5e5efdbfce9e7109c4e985"],["/Research/Memorizing/费曼技巧/index.html","2ac87a37dbd3966313ede5603f48d527"],["/Research/思想政治/考研思想政治理论知识/index.html","40ddc1f017dab7527a46947993ca52cf"],["/Research/英语/考研英语作文/index.html","6a56f739bd72458ea910cf1e36dc80c2"],["/Research/英语/考研英语词根/index.html","b435b593383fee849d69c9e77078b1cf"],["/Research/软件工程/PseudoCode/伪代码/index.html","1f3859bc89da1a0d228a57fbbf5f7bd7"],["/Research/软件工程/中南大学软件工程考研题型/index.html","7abc1c109122ff451050167ea6fa5e4b"],["/Research/软件工程/软件工程基础知识/index.html","7adab188a43932120b7d1ddaa615bd7f"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","f431b64b511e89896e3291000dc6fb44"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","c3444bf701da1b68f16fa8a34f3f6694"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","0a2472b8486a4415ec0935a795547eab"],["/TechnicalResearch/Base64加密原理/index.html","6c00307117f26805059d1c4e5a47479b"],["/TechnicalResearch/CDN/index.html","885abaf5a3a64a2ddeeb4956861142b8"],["/TechnicalResearch/Git/Git/index.html","bf429db034b1023b39f3f4ab63a2c0ab"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","745cc96bc3c843e9e807808c5b2cdbe4"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","d63d74a30fac2a446a094ae55e11ab44"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","4d4161aac1e83237438cf1214dfa147e"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","70415f3d2607e97037525a40f1edb990"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","925d4f9e2d2cb83a6c4abbc7fa8e1927"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","0567fb0712ce2dac0611e60a40636bb5"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","e63afea062ecea3a35104b1b981395a3"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","1d899c20899203c123bf8e868c37ef43"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","4cc2cfec7838e5396d62717243ee5acb"],["/TechnicalResearch/Java/Java基础快速入门/index.html","696065157f61078be8c0932af8d362d9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","2ce13787b6166cf2a0cf25ff41eb376d"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","2ae8a6fe82deb86eb669d9163480654d"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","74af80625b428e80dfec977021844810"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","aaa5631e5743a0c48afb45c5299b4b71"],["/TechnicalResearch/Python/PythonExercise/index.html","494ea09f3197ed245f52049c2e46f2d5"],["/TechnicalResearch/Python/Python问题归纳/index.html","abe0ace66656e3fd6bdc3e8c2cb9fd40"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","2c83eef6add508576bac3cb8aed36c80"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","94b86d50281544298d839fbfd8e50c43"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","c1623be5aae0d93d069211721076ff1d"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","fbd54d7fcf56e5b53023b6a6ce2ea059"],["/TechnicalResearch/服务器常用端口/index.html","18450157b56630b451380ff588f71200"],["/TechnicalResearch/正则表达式/index.html","cf952201ade7ab26df2dc4652569a3cc"],["/Teleplay/亮剑/晋西北铁三角/index.html","3fbb6beccd88a368f88cd989a76678f7"],["/Teleplay/仙剑奇侠传系列/index.html","296c3922134d84b678a3235ba61b1324"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","1eb08dcdcba129d2b70969e32e53da10"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","927926235d5ee23e452fc3f9c323eeb3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","7f368f4cd64c8729f632fb63e0a9e1ba"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","cf3fd8cf7bf33349b6be54bf0fcf1958"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","62e2c86670c346c790cab0a5889ef961"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","a9ac168e7ff802d16fe579b444ba3a9b"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","1994196c5ef98d4e8685da7a7fb994e8"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","92e054f075dc27c83fdf8f70fc4ab46f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","632485fa17ec2d5bc80f08ad6939f0c9"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","ffda715b04dbd051157dfffe49469cdf"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","5805af8d5bb3edddda4228428d9a0287"],["/Tool/Music/网易云音乐/index.html","0ce1aef02da1a47a51a39e338ef37e3e"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","1ae48e093b75057e4cf2742cb8e91673"],["/Tool/Windows/Software/VMware/VMware/index.html","7bbe1eb8e2fe0b1d9c3fdd50dd55131b"],["/Tool/百宝袋/index.html","4c1427ca51e6bff2587d99c0315e4f66"],["/Windows/Software/Office2019/Office2019激活/index.html","a8772b2b0da20449d8bef145d99ad9dd"],["/about/index.html","a41a82567d97cf15f1f114b24e7c93ef"],["/archives/2013/10/index.html","aea4b99b92784c1b10536d8e55a86610"],["/archives/2013/index.html","a6a81c451448703fd55819d748bdd7d2"],["/archives/2016/09/index.html","f0960e1a5fde70b1b8b66b88fad6bcee"],["/archives/2016/10/index.html","6069d32789dec17d742064410addf150"],["/archives/2016/11/index.html","22cc47ae3c1d70ccd2f33be864280af8"],["/archives/2016/12/index.html","42c2967d2cb152c6f1999ecd34ba642f"],["/archives/2016/index.html","f1f78a254f386655f640e638aba75ddb"],["/archives/2017/03/index.html","0add88bec7e0cf6514779a3463900dd1"],["/archives/2017/06/index.html","8d9fb68d8e81b725b82531eca3d0571f"],["/archives/2017/07/index.html","0fa1e4a408f0a2aaca88b8e2d5b73243"],["/archives/2017/09/index.html","5d44548c0e3f22a6fc9b4c9f6352ef83"],["/archives/2017/10/index.html","518057fc9fcf29a32b5a351b84f38038"],["/archives/2017/11/index.html","551938f69ff0fce8d3fbbe2ffe80e0ad"],["/archives/2017/12/index.html","d24a9d2a42c51593a33784a54e87d1b3"],["/archives/2017/index.html","f891de07eaa916f0450ed6016d4f0755"],["/archives/2018/04/index.html","a035f15d29d0aea18aab7e11630b0f22"],["/archives/2018/08/index.html","d2d65da3fa08806f2b9f7174d115b3cd"],["/archives/2018/09/index.html","1e2abc8c9a87502648c649de698882b9"],["/archives/2018/10/index.html","f2baa14bca5a9c22e5ee7c39878caa57"],["/archives/2018/11/index.html","ddef76ffc80c89ca74feda86ea575d68"],["/archives/2018/12/index.html","3c43dca7d9404f220ee55099cdc4bec9"],["/archives/2018/index.html","29f5669af27a4e609030bc3f69f459d5"],["/archives/2019/01/index.html","72cb707c25233e20567cafc7d3083a83"],["/archives/2019/02/index.html","5ad12d2c06d6f7a4d7bc37e37c482447"],["/archives/2019/03/index.html","ad188a5a971b0902c61c89b48ef0d492"],["/archives/2019/04/index.html","8351ab54c93596ac17574cfc8a178643"],["/archives/2019/07/index.html","db94901a8ac72afa6cd98e53dd760b30"],["/archives/2019/08/index.html","65bf9bef34d4bd7a007439c674bf04d3"],["/archives/2019/09/index.html","dabba7ed378d1c44cf008933824fc58d"],["/archives/2019/10/index.html","4cbf0ebec308402bc3125923fa279380"],["/archives/2019/11/index.html","8bf427a0b8f1fb8e336fc437c1f6cc84"],["/archives/2019/12/index.html","1b6e9f9860263824a3d25b1f6c7234e6"],["/archives/2019/index.html","25625d1cc91b6366f0bb6a53c96a26f0"],["/archives/2019/page/2/index.html","3a3d2e3d5464c15ee8c3e345d38c61e2"],["/archives/2019/page/3/index.html","696b0561ad2df3a6ca7fbe6e5346897b"],["/archives/index.html","2c7a422d50b6a647c77b97d3ba450bf6"],["/archives/page/2/index.html","387677fde586957ab12da485445ff865"],["/archives/page/3/index.html","843caed50d4081418de26b4a2970a451"],["/archives/page/4/index.html","59b94b69827ff70340ef1d606663f259"],["/archives/page/5/index.html","aa81a80be6ea8ff6d9cabd6e38098fbb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","465b2b30324de45508523bd63d8a0f87"],["/categories/Anime/index.html","41b33b836c9655a9a07907c787695c20"],["/categories/Anime/宫崎骏/index.html","58d13e104066c42125c685d366e529a3"],["/categories/Daily/index.html","d2bae54f7a99b3d25102d96170ab31d1"],["/categories/Design/index.html","44ef083ab47af55e8fdfaa24f994a1fa"],["/categories/Game/GamePlatform/Origin/index.html","3e646b381adf6b3577a569162b292ea3"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","c3aaa14e1e0d010d2d96c540b73f1aac"],["/categories/Game/GamePlatform/Steam/index.html","168daaf83ee991798ee1b8c82795ea2c"],["/categories/Game/GamePlatform/index.html","142c400072efae0fe8ad5c60de05b67b"],["/categories/Game/index.html","fff25459e15731902748dea7e7bc0c40"],["/categories/Google/Chrome/Chromium/index.html","d0eb7e1a108d9193683da5530a10b97b"],["/categories/Google/Chrome/index.html","f6e0ede6213f7cfcac94c15622ecbcb9"],["/categories/Google/index.html","e95e2fe93f77bcf3cedf05913a326564"],["/categories/HardDisk/index.html","6470473d63c6c8085bf42b313446fdbb"],["/categories/Hobbies/Guitar/index.html","f8a6d80f954198328b990e949c9353dd"],["/categories/Hobbies/PersonalDiary/index.html","62b67a0c775adba865e7d7c59f6b37be"],["/categories/Hobbies/PersonalPoetry/index.html","020ddbe27ed3d55a182060951fcf1475"],["/categories/Hobbies/Photography/index.html","017eadd3db99cbeec31ab6a4a20b1cc5"],["/categories/Hobbies/index.html","d176094990d8aeabdcb6a7307f2776cc"],["/categories/Interview/index.html","f88a3ee42607ac4883bc62ef205c4115"],["/categories/Movie/HongKongMovie/index.html","d85b9ef92bb21d1417bd55b536e8a0b3"],["/categories/Movie/index.html","8b13e26e7216cac75840e3b07eead304"],["/categories/OperationSystem/Linux/Manjaro/index.html","92bf2c5be432712f12e7216155bcd01d"],["/categories/OperationSystem/Linux/SteamOS/index.html","a9525b3711391033abb40f182e46eed6"],["/categories/OperationSystem/Linux/index.html","c1ee0674323401eacb3e36e477ca9a7e"],["/categories/OperationSystem/Windows/Software/index.html","ef1db72097a3782c994a96e4430c77a0"],["/categories/OperationSystem/Windows/index.html","78c65724042999007c0f45e3a5165b7a"],["/categories/OperationSystem/index.html","a5e6f4245871ccf6b7cefd5eee8593b8"],["/categories/Research/Math/MathJax/index.html","0869a4dc61bc72f3a9f0d3b715229632"],["/categories/Research/Math/index.html","cdb40aabd52c1c85f3b682d6e982aeff"],["/categories/Research/Math/线性代数/index.html","684087992b72b771982391c7aed963c1"],["/categories/Research/Math/高等数学/index.html","912178e3667d02cc8d57c3c02db33b96"],["/categories/Research/Memorizing/index.html","0130b3b630a71db4012cc773bcbff8c4"],["/categories/Research/index.html","fed5261f74bb6ef7551368e9a6a3a5b2"],["/categories/Research/思想政治/index.html","d57360a2315556f7acd4811b7ea370de"],["/categories/Research/英语/index.html","7efd205fcb59c13cf70823cd29dcaeaf"],["/categories/Research/软件工程/PseudoCode/index.html","1da9ef55167e49bb9f98c27ad45ab5ca"],["/categories/Research/软件工程/index.html","6bc66875511628bd96c38fea5d574c95"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","c49b4220fb1f0af0b2a34efad2154836"],["/categories/TechnicalResearch/Android/RxTool/index.html","a4c0cdb2dc610930090dfdd0244ded64"],["/categories/TechnicalResearch/Android/index.html","3c2078760fe442a7dc7211208ece6b84"],["/categories/TechnicalResearch/Git/index.html","7fa5797c89b10551f790546cd7c28b65"],["/categories/TechnicalResearch/GitHub/index.html","ddb94e3b689f1bd73df003e135590873"],["/categories/TechnicalResearch/Hexo/index.html","1efc1c49c533e260bebfc2533aa782f4"],["/categories/TechnicalResearch/Html/index.html","d0ada92bd136ba35824ff8a2afaea3fc"],["/categories/TechnicalResearch/Java/index.html","9e80710fa4bcf1f16566feaefd0635dd"],["/categories/TechnicalResearch/JavaScript/index.html","9ecb4bb7964b814477413e17fc9f14e4"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","533570d7c518352b92c4276c09bebee0"],["/categories/TechnicalResearch/Markdown/GFM/index.html","0458e2048dce4b3434e8e8da99176bd9"],["/categories/TechnicalResearch/Markdown/index.html","3e62a3e89213bb9d6f844fd058731bc8"],["/categories/TechnicalResearch/Python/index.html","fb6d366a82d6961b139b1535681db334"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","b997dadbe53c0ae41d79633856562c54"],["/categories/TechnicalResearch/Spider/index.html","b21e38df130ce72df25a4c4e1902c809"],["/categories/TechnicalResearch/TA/index.html","1be6b88c0e0d82a49a63acc269eca3bf"],["/categories/TechnicalResearch/UnitTest/Android/index.html","80560c1f76e75b6f090cd518514052f3"],["/categories/TechnicalResearch/UnitTest/index.html","bc1556be2e7a717374da8cc98f0a9423"],["/categories/TechnicalResearch/index.html","05011ada23407e6aafae6a3fe59759e9"],["/categories/Teleplay/index.html","28b9a72d3b05648d7f730e1e536f84e4"],["/categories/Teleplay/亮剑/index.html","26cef8df2e3e589517af2c158f3004d0"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","9e70ec39a84dfa2d194d9136cef5e6d8"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","f3b2b06b77b0ddd8cd17ab02063c4ccf"],["/categories/Tool/DevelopmentTool/Unity/index.html","957396fd874f95047da5985feefbf772"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","1759931f284fd695537520274445b2fa"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","70474da540b223bc64e3a3c9d2e342ab"],["/categories/Tool/DevelopmentTool/index.html","e9ccae83ac1dc36ca128329d78b80cfb"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","36d48ceb020f9f11ebbc2832f11e87a9"],["/categories/Tool/Linux/Manjaro/Software/index.html","a5a56d495cb31c9358c25a555fdb9679"],["/categories/Tool/Linux/Manjaro/index.html","65be0a8f9949963b8412241ddbc7c356"],["/categories/Tool/Linux/index.html","4561288909af4325526d7f888053485c"],["/categories/Tool/Music/index.html","ade6e3a7dd6caf1e2cc89028aef21375"],["/categories/Tool/Windows/Software/UltraISO/index.html","d6d7596be906a64e3729b1d23b8665a0"],["/categories/Tool/Windows/Software/VMware/index.html","29619781b63ad35fa00e58b7d1cd9831"],["/categories/Tool/Windows/Software/index.html","6c40eedcde0fa3f5a779b44151f8d09c"],["/categories/Tool/Windows/index.html","cbff4ee9ee2524dccfd6a9bd6af763a5"],["/categories/Tool/index.html","49d8f6e626fad5977e2be64139095609"],["/categories/Windows/Software/Office2019/index.html","cf344524d0db6eee3710a36c25a3cdba"],["/categories/Windows/Software/index.html","c40e2a1344714f97b64a5476ee91d621"],["/categories/Windows/index.html","462aaf295701771e2a7a8f92f8b05fda"],["/categories/index.html","0c1b89428f47e0e4b0a310dec4699eb5"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","214f22f434fb3fb5ae97cde9ba166c46"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","45e1225b40081f9729602a616b48673d"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3a84aa66ad6bb09ab410d2146a56c57f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","683ac7e91c5ca41dd7699a0382514cf5"],["/movie/index.html","a5fbb95fb25994ff3f3900f355f5da2a"],["/music/index.html","99bb5508e7b2e1e9dba8cce556be602d"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","c0dc95279c90183c6a65a8cb56ca9838"],["/page/3/index.html","e5e13061777bb015624cd0826368fbd2"],["/page/4/index.html","ea8e8b2afa9223353230bc6cf6e88935"],["/page/5/index.html","7a7236ade60bfeb33b51586a72aa0ce2"],["/page/6/index.html","ddf6a1bdc5501435937311158dcba9f3"],["/page/7/index.html","76abfc8b1161659fa8b6b5a270e8368f"],["/page/8/index.html","2dc3663ddfa1b59a8a37520b21fcb9d7"],["/page/9/index.html","f5034b5bd791d7077088c545fef10298"],["/tags/Android/index.html","d1e68ec4b8d28833902c48c118c5ff28"],["/tags/AndroidStudio/index.html","6e162d449f81651d5e7c24bd164a6301"],["/tags/Anime/index.html","5d0020a55cfbde703c08a7c871da68a4"],["/tags/Base64/index.html","8c11bd994ca1ec7e9c3849575504f3a4"],["/tags/CDN/index.html","6e468d4476b8bc264feb2eeecb97684f"],["/tags/CSGO/index.html","5e4a5f25d817472029ff11a10fd1dd6c"],["/tags/Chrome/index.html","d1c1bfd76da131287c7375ab0b6f001f"],["/tags/Chromium/index.html","399fcca8b7c2326c7ff756a7af23bd35"],["/tags/Contributor/index.html","947e814a32902fc29ab0a1c8c70bcfeb"],["/tags/Daily/index.html","8ef4f55ed524a5e23a89e47396066a7a"],["/tags/Design/index.html","28040a1855aecc16ebe6f98865863941"],["/tags/DevelopmentTool/index.html","fc91b1ddd734dd614c3900fb0c25d9e5"],["/tags/Emoji/index.html","649606484d0326cb480612f0b40a24a0"],["/tags/GFM/index.html","185fa3dd39ff0204206d54c9f5886cd2"],["/tags/Game/index.html","3d51f5e6c2c73964db80fae202b5bbb2"],["/tags/Git/index.html","fc27837263f86f9711f2cbc1538eb991"],["/tags/GitHub/index.html","e6c62c9da2af23db7794fa5c138a1e38"],["/tags/Google/index.html","b2a2ccd2daedfa5a1c288d8cdc8ac6ca"],["/tags/Guitar/index.html","55b53878c71364d8756952a55f99dca0"],["/tags/HardDisk/index.html","2ab75c4df5121b0db251365feaa03004"],["/tags/Hexo/index.html","c9c82e23e95a6b22df7ad35b109558ba"],["/tags/Hobbies/index.html","4275647890b7370c0972fb1ffdd5c62c"],["/tags/HongKongMovie/index.html","e01d2171c433c8301a7033a706794861"],["/tags/Html/index.html","62c37ba6cb5d058a23a2698662451880"],["/tags/Java/index.html","86b30f32996b4d839c8db9224bbd18b2"],["/tags/JavaScript/index.html","16c6d8a8d2817ad21206a9c4b60dcb91"],["/tags/Linux/index.html","479a7eb7a4139a0b66b605c9edcdb124"],["/tags/Manjaro/index.html","5215b364a8422f3af5be3cff1477349e"],["/tags/Markdown/index.html","1fe5f10e9668fa2bf27f79d93fe1fbed"],["/tags/Math/index.html","0a8bc494f8e3001d3707067b53043f0d"],["/tags/MathJax/index.html","dc8f99e0cc5220a52db1d297b6c0e23d"],["/tags/Memorizing/index.html","90052fef6121c78436c594956688d06e"],["/tags/Movie/index.html","7a69c4eb5bebfe0c4b4ab4b09befb0f1"],["/tags/Music/index.html","f5d69f912a610819bfe6ed63da6633f3"],["/tags/OperationSystem/index.html","0291cad3417fc380fb89bf0da87894e9"],["/tags/Origin/index.html","842951ab931ac2100c445576ba06cb26"],["/tags/PersonalDiary/index.html","c33c65a2246f057f89fc4f6ce5adf73b"],["/tags/PersonalPoetry/index.html","166e6bc5a53ca62488be7ca0fa574bcf"],["/tags/Photography/index.html","36412d3ac243e383b9b1995fd7f2c9ac"],["/tags/Port/index.html","9a8420c48848c323a89db98c86a7f332"],["/tags/PseudoCode/index.html","74c02c277dd1894041be427c1d3cce4d"],["/tags/Pycharm/index.html","a333ffaa1b9b4dec8ae403db626c58ec"],["/tags/Python/index.html","1b901278f25962204868f1b4fa6d138d"],["/tags/ReactiveProgramming/index.html","4a703917c0e32a82d0f7054ee7f47f91"],["/tags/RegularExpression/index.html","95c9cb2a5c99b7359c5d1e2c11ebf516"],["/tags/Research/index.html","6b7a8aff3747f34c0c9fef375060d110"],["/tags/RxTool/index.html","c868715e5ff34b1ce9e771822752f777"],["/tags/Software/index.html","9c9cf3bd8855fabd49be1bd1a2fd0eab"],["/tags/Spider/index.html","6497fc0157cbd2cf1693f7411ea77aca"],["/tags/Steam/index.html","ce011d1c904bcccd69bc5bd878fa443f"],["/tags/SteamOS/index.html","753750053b0fe1c46a004abc14ee7868"],["/tags/TA/index.html","cdee4600853ab056d1daa5f8521c1209"],["/tags/Teleplay/index.html","1827480902c89dec94223713f16b2fa9"],["/tags/Thunderbird/index.html","a2ecfae439ccaab143eee1c48715a13c"],["/tags/Tool/index.html","dfa1c43c9fe60a0e442ebd82e86f7d35"],["/tags/UI-Design/index.html","30436080498950ba95ba70fcadc1e996"],["/tags/UltraISO/index.html","c8356c25d336b9fa725563d38e191084"],["/tags/UnitTest/index.html","957d8075226c6ece9b0869f1c255dfa2"],["/tags/Unity/index.html","2f7c16aba3f329a951128a2752a2ce7f"],["/tags/VMware/index.html","c364a4816c50c7bf72074c229f3646a6"],["/tags/VisualStudio/index.html","dd1de0ae5f97535d6ebc635865fa296c"],["/tags/VisualStudioCode/index.html","bbf9120a21cb76ab7ce3b40417a68d39"],["/tags/Windows/index.html","d19646aea114ad690774b6408ad61e66"],["/tags/index.html","9a82d8b808ee8b6656ac5064d1b2cde2"],["/tags/亮剑/index.html","8f0e10583e92825396a72d6fe31db53f"],["/tags/仙剑奇侠传系列/index.html","98302fa66c30bb13204ebbbe9644f814"],["/tags/千与千寻/index.html","fa25d9a692120ada047f2332ec810767"],["/tags/宫崎骏/index.html","85d65a3e1780e90a0f1d62cb80bb4d52"],["/tags/小王子/index.html","d1d37a398766367393ffbce23f345fee"],["/tags/开心鬼系列/index.html","f938940a7993b324ed1331ca228ed846"],["/tags/思想政治/index.html","0e69e32a6db583e9af1da2acc83c65a7"],["/tags/线性代数/index.html","621b97e24cac36ef6ad00636b6cc1b95"],["/tags/英语/index.html","9f703ab5a525368604bc71f20d731b53"],["/tags/软件工程/index.html","3334feabd55d639caa36f923b4ab347f"],["/tags/高等数学/index.html","80411ae2621dc80b9ea0d8ee485c8186"]];
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




