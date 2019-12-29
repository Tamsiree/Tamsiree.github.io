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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b4c9f555a2b78e003c28b6cebc1f7994"],["/Anime/小王子电影的共鸣/index.html","830a37b33c92d42a3e5935bcd36a6f48"],["/Daily/Memorandum/index.html","3f07c02a2994917d15a52724a0b6b635"],["/Daily/生活小常识/index.html","ec22c46d17594da39041025fb35bffbd"],["/Daily/网络用语/index.html","3577184ac2568056e4d160e6a7700f28"],["/Design/设计用户界面的注意事项/index.html","9af447ae28db4631f9ba8c71036b4e7d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","6306224dab600466a145e8acb1db67b3"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","1c1af71e27b393d1db05496e802881bd"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","7fc5f53958dc612e784edb20f9bd1bb5"],["/Game/GamePlatform/Steam/Steam库共享/index.html","4884fa836b268749aec04aea5fec21e7"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","2e4fd97ef0a8c227e3ab2555cb935300"],["/Game/如何独立开发一款游戏/index.html","fc25b245f17d61883181ccaf0d31ed0a"],["/Google/Chrome/Chrome上网助手/index.html","421d8a70a18b8fd1cffd2c0bc359508f"],["/Google/Chrome/Chrome使用技巧/index.html","8e1187ecd06a11f04edae154a5376060"],["/Google/Chrome/Chrome插件/index.html","fb64aad1e0a25b44f458a7d766b2946b"],["/Google/Chrome/Chromium/Chromium/index.html","962ead1f7107922ba16d5efee074a76b"],["/Google/Google搜索技巧/index.html","e60516b85daa5b960defbea37a4c9dae"],["/HardDisk/硬盘分区结构/index.html","60326bfe2a05a438ae9523eeff14a7bb"],["/Hobbies/Guitar/吉他入门/index.html","ce51ff422757112ad36d9b99f6599f76"],["/Hobbies/PersonalDiary/芦江曲/index.html","4e077da88f643bdaafff2f81ba6335b2"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","7d2867e853e762a3f52e7c7d7aa217f7"],["/Hobbies/Photography/摄影入门手册/index.html","149df846050ebe36876c7e793d0c4c8d"],["/Interview/2020年字节跳动面试题/index.html","ebf15eb295d428ce0bfdb0e0b9ec3d9e"],["/Movie/HongKongMovie/开心鬼系列/index.html","01e4a7ee1aa08b9e196d7da9dea27f87"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5c19142cb34b39c3a065155adac1c7eb"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","072001846aa33a3b928ea93bef78d508"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","005287b6e0fc5f3b89cbe515186ff106"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","ed3c4eb979c20854e53ce71d82542668"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","570993459d2ed1a7902e03c1910d3c19"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","865b7a4d60615441dd29e41ea61ab000"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","99a8e6c842db8adaeee942d78ed340a0"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","e03c3c3348b9203f491fe11fec1b5a87"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","f96d22c0f19e8e12f78c69d0fac953b1"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b18a863f8365510661c3921408a729cd"],["/Research/Math/线性代数/线性代数公式/index.html","407e1995aed2abef05b45c1f0c395912"],["/Research/Math/线性代数/线性代数知识点总结/index.html","14deee472c53ca4062d64c0ab74f65b9"],["/Research/Math/高等数学/高等数学知识点/index.html","8b0dea60da5e5efdbfce9e7109c4e985"],["/Research/Memorizing/费曼技巧/index.html","2ac87a37dbd3966313ede5603f48d527"],["/Research/思想政治/考研思想政治理论知识/index.html","40ddc1f017dab7527a46947993ca52cf"],["/Research/英语/考研英语作文/index.html","6a56f739bd72458ea910cf1e36dc80c2"],["/Research/英语/考研英语词根/index.html","b435b593383fee849d69c9e77078b1cf"],["/Research/软件工程/PseudoCode/伪代码/index.html","1f3859bc89da1a0d228a57fbbf5f7bd7"],["/Research/软件工程/中南大学软件工程考研题型/index.html","7abc1c109122ff451050167ea6fa5e4b"],["/Research/软件工程/软件工程基础知识/index.html","7adab188a43932120b7d1ddaa615bd7f"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","f431b64b511e89896e3291000dc6fb44"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","c3444bf701da1b68f16fa8a34f3f6694"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","0a2472b8486a4415ec0935a795547eab"],["/TechnicalResearch/Base64加密原理/index.html","a825999b762b7735d52329c782b9e122"],["/TechnicalResearch/CDN/index.html","885abaf5a3a64a2ddeeb4956861142b8"],["/TechnicalResearch/Git/Git/index.html","bf429db034b1023b39f3f4ab63a2c0ab"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","745cc96bc3c843e9e807808c5b2cdbe4"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","d63d74a30fac2a446a094ae55e11ab44"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","4d4161aac1e83237438cf1214dfa147e"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","70415f3d2607e97037525a40f1edb990"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","925d4f9e2d2cb83a6c4abbc7fa8e1927"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","0567fb0712ce2dac0611e60a40636bb5"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","e63afea062ecea3a35104b1b981395a3"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","1d899c20899203c123bf8e868c37ef43"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","4cc2cfec7838e5396d62717243ee5acb"],["/TechnicalResearch/Java/Java基础快速入门/index.html","696065157f61078be8c0932af8d362d9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","2ce13787b6166cf2a0cf25ff41eb376d"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","2ae8a6fe82deb86eb669d9163480654d"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","74af80625b428e80dfec977021844810"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","aaa5631e5743a0c48afb45c5299b4b71"],["/TechnicalResearch/Python/PythonExercise/index.html","494ea09f3197ed245f52049c2e46f2d5"],["/TechnicalResearch/Python/Python问题归纳/index.html","abe0ace66656e3fd6bdc3e8c2cb9fd40"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","2c83eef6add508576bac3cb8aed36c80"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","94b86d50281544298d839fbfd8e50c43"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","461fc6336d514adbd6eb2747ee226c28"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","fbd54d7fcf56e5b53023b6a6ce2ea059"],["/TechnicalResearch/服务器常用端口/index.html","18450157b56630b451380ff588f71200"],["/TechnicalResearch/正则表达式/index.html","cf952201ade7ab26df2dc4652569a3cc"],["/Teleplay/亮剑/晋西北铁三角/index.html","3fbb6beccd88a368f88cd989a76678f7"],["/Teleplay/仙剑奇侠传系列/index.html","296c3922134d84b678a3235ba61b1324"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","1eb08dcdcba129d2b70969e32e53da10"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","927926235d5ee23e452fc3f9c323eeb3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","7f368f4cd64c8729f632fb63e0a9e1ba"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","cf3fd8cf7bf33349b6be54bf0fcf1958"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","62e2c86670c346c790cab0a5889ef961"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","a9ac168e7ff802d16fe579b444ba3a9b"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","1994196c5ef98d4e8685da7a7fb994e8"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","92e054f075dc27c83fdf8f70fc4ab46f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","a3f2457b63eda6b90afe2ea49527684f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","ffda715b04dbd051157dfffe49469cdf"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","a9901fda3c0c11dc282dba0c3f9c527e"],["/Tool/Music/网易云音乐/index.html","0ce1aef02da1a47a51a39e338ef37e3e"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","1ae48e093b75057e4cf2742cb8e91673"],["/Tool/Windows/Software/VMware/VMware/index.html","7bbe1eb8e2fe0b1d9c3fdd50dd55131b"],["/Tool/百宝袋/index.html","4c1427ca51e6bff2587d99c0315e4f66"],["/Windows/Software/Office2019/Office2019激活/index.html","a8772b2b0da20449d8bef145d99ad9dd"],["/about/index.html","a67253d3a04b7bc05b874c01e7035f91"],["/archives/2013/10/index.html","56b346d564a6c4f8ae03bb60c57a0f22"],["/archives/2013/index.html","c370df5d86924d358c87366cc67ba602"],["/archives/2016/09/index.html","5bc309edc227131de4a2675a5a7d2d47"],["/archives/2016/10/index.html","d375cce6f7a38b62007a0dd6dd1c4c9e"],["/archives/2016/11/index.html","27d2f8e26433a5743e5445c5c57831ee"],["/archives/2016/12/index.html","622e5eece8055c64ef272785b4caf181"],["/archives/2016/index.html","aa1b3205fe57935c0a7e94459179a330"],["/archives/2017/03/index.html","97d418851072f47da103bf42690fa123"],["/archives/2017/06/index.html","a214449cb6d237422d57bb8bae11ac06"],["/archives/2017/07/index.html","28670fdc3b1976b397f6016c5ce18bee"],["/archives/2017/09/index.html","541e1af0a0b8f780ed89aa00de450c16"],["/archives/2017/10/index.html","dfb7a8a4cac3a1a0e7f0fc55d2ceceb8"],["/archives/2017/11/index.html","2c62029dd2ecc607cc162087f8a02861"],["/archives/2017/12/index.html","e66e6d2f6512f3e2f699613ef0cd5d60"],["/archives/2017/index.html","3d2b08b2de5f794d3b983f4d6a3a4bbf"],["/archives/2018/04/index.html","31e19f1dd4434aad3fed890382ab40e8"],["/archives/2018/08/index.html","79c0574e4f1fa23a49dbf66bc6a2dd4d"],["/archives/2018/09/index.html","0a20d83d0acb8964955348197aa532d2"],["/archives/2018/10/index.html","1c3f6d9705c8f1dc0c253589891b6a88"],["/archives/2018/11/index.html","a2a6601c15f5d0ac4c2fb857eb61c225"],["/archives/2018/12/index.html","abdcd8967a5f0310bb8b2eed3bd80510"],["/archives/2018/index.html","7b14025b12b7e49e73a8a344531b6602"],["/archives/2019/01/index.html","528546104d63fc02a7a2deb14bb9f10e"],["/archives/2019/02/index.html","807c8e918199fabf4dea217b988ff061"],["/archives/2019/03/index.html","be7230c60b1639099f9fe0f22c195c4e"],["/archives/2019/04/index.html","b8196caa2d313a892dca7086324cd813"],["/archives/2019/07/index.html","0e88bf656d32cfe93c8f65b35ad9f3be"],["/archives/2019/08/index.html","7fce9a161012269a77965cd7ad5fd3b5"],["/archives/2019/09/index.html","9b5b74162054bf5fee63947f9b4d2252"],["/archives/2019/10/index.html","17beb5d6e1874e8a98664bfb11b118ce"],["/archives/2019/11/index.html","0221510518a83e95edd7fc9ea5befe18"],["/archives/2019/12/index.html","9526264611b5034ff0810634556dfef9"],["/archives/2019/index.html","efcdcbdc9670904399798d929fb69818"],["/archives/2019/page/2/index.html","fdbbc03ca5990513408b8309df9a062d"],["/archives/2019/page/3/index.html","8cf79b018a7bae7d66d46d966bc37fda"],["/archives/index.html","b8d639fb5a1f72c48c61581cf9e423df"],["/archives/page/2/index.html","1c2b23df6ecca70765c65239dab0b53c"],["/archives/page/3/index.html","6f353a3cfd704f6e39d254b51fe8c136"],["/archives/page/4/index.html","c91820ed2d3510d246f75127a215e3d0"],["/archives/page/5/index.html","0eb562905efaecbb3bd7d29b45cda535"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","5129583bc9403d3fa5d61e8c340b0f39"],["/categories/Anime/index.html","56ab0ec3dd8634a14193e5a1adb25362"],["/categories/Anime/宫崎骏/index.html","99c62a9c077b5c463463b4c167c54f24"],["/categories/Daily/index.html","63ecece2b0d38ca4719c3d26fbe41db7"],["/categories/Design/index.html","a7e9db9f6455446fbde9db593db89521"],["/categories/Game/GamePlatform/Origin/index.html","f66928245a28ac93ea31b58484609412"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","d2c4185dfef34d86b5f4e9be6956da63"],["/categories/Game/GamePlatform/Steam/index.html","8394935d2f547339a9af7629ec9cf9cd"],["/categories/Game/GamePlatform/index.html","ee803564ea6cb53606b74c152d479527"],["/categories/Game/index.html","d3a45e14a4e7fa42b794c9b2702d4ddd"],["/categories/Google/Chrome/Chromium/index.html","7030d9344e2a5b2bd62eee4aaf9a21cc"],["/categories/Google/Chrome/index.html","0e15d77e4754ea1a02a5e14a3902c045"],["/categories/Google/index.html","d88679627548e4a33f6254f5240de7ed"],["/categories/HardDisk/index.html","85549c851ae558150f4e91837b4c4a5a"],["/categories/Hobbies/Guitar/index.html","b65881131215b593cdc32df87cd4e6da"],["/categories/Hobbies/PersonalDiary/index.html","ac0cb0a17df93daf621d5ad501966af6"],["/categories/Hobbies/PersonalPoetry/index.html","1d06f6e07af3e8af57c1f7284d4128c4"],["/categories/Hobbies/Photography/index.html","c86042582ec1e6e9138ddbb1ecca06a4"],["/categories/Hobbies/index.html","01344ea3913617781a3b12162f959014"],["/categories/Interview/index.html","31c67236cd539f142caa065831addead"],["/categories/Movie/HongKongMovie/index.html","368dd466e4312122eeef8091e8d88414"],["/categories/Movie/index.html","f2d2f6846147c6094c5f23a4cfb0ffa2"],["/categories/OperationSystem/Linux/Manjaro/index.html","1e7a16e876d711d177b50278c3b5b5ae"],["/categories/OperationSystem/Linux/SteamOS/index.html","a2fa1cdfc7ead04838f86011c211acbf"],["/categories/OperationSystem/Linux/index.html","40d88d96bdf7781ca3488df396d07cc2"],["/categories/OperationSystem/Windows/Software/index.html","6978cb02c7626de0ec146366bd202cad"],["/categories/OperationSystem/Windows/index.html","2998c1418f0d7709666b1179d48173fd"],["/categories/OperationSystem/index.html","309c35da3d24e466d1ca5f4edbdeaef7"],["/categories/Research/Math/MathJax/index.html","edcfafe3717cd8f826e3b19a50b3a2f6"],["/categories/Research/Math/index.html","7ad131837d91fd49eebb44ab4261ebc1"],["/categories/Research/Math/线性代数/index.html","def259da0355314676ecf18fffee3ec8"],["/categories/Research/Math/高等数学/index.html","91ebfe752fbb483156f1c4e569d73210"],["/categories/Research/Memorizing/index.html","0c3d612a62c1dbf017e050927b8b2bdb"],["/categories/Research/index.html","4cefd0f04a820270993f1e43591d6dc9"],["/categories/Research/思想政治/index.html","87ac1481922cd88a35dc736392bcba2d"],["/categories/Research/英语/index.html","5ecac2fcf375983bf17260971237d623"],["/categories/Research/软件工程/PseudoCode/index.html","75fb26e9aab0a1906282d7188ad54c8b"],["/categories/Research/软件工程/index.html","37a13b3d36eba073113998613bc01ba5"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","87b14184c8e4181595e0decf5028f882"],["/categories/TechnicalResearch/Android/RxTool/index.html","13d714f4e44c8c8bdca5be10c4f61829"],["/categories/TechnicalResearch/Android/index.html","fbe1e88d626d645206f3ab53159104ec"],["/categories/TechnicalResearch/Git/index.html","5b3054788a798ee98f015cb66462aa0e"],["/categories/TechnicalResearch/GitHub/index.html","b20431459bf36349031f0e58a1860676"],["/categories/TechnicalResearch/Hexo/index.html","33c6d65e3c37bcd794947479eda82179"],["/categories/TechnicalResearch/Html/index.html","ca1cf99f00d7547a6d9f4819dab8842d"],["/categories/TechnicalResearch/Java/index.html","8597fd0fbcfa5ee6941fd82a1cb59ae7"],["/categories/TechnicalResearch/JavaScript/index.html","97fc9c46db354c1b9eb0755e410a01ac"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","9b72255bce3969230dbb1501e9408225"],["/categories/TechnicalResearch/Markdown/GFM/index.html","1fdf94a7eb01003efb882944f1527549"],["/categories/TechnicalResearch/Markdown/index.html","515d16f88884b8dbcd4814334c2b808b"],["/categories/TechnicalResearch/Python/index.html","b9b630c7f7421526e86ac1d34faa6684"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","58478397a56d23460ee06541795602f5"],["/categories/TechnicalResearch/Spider/index.html","c02ecfb6701e380ed5d6e1ffda1a21dc"],["/categories/TechnicalResearch/TA/index.html","77e0a906de8e8d3d2a3c96f03c1e9359"],["/categories/TechnicalResearch/UnitTest/Android/index.html","1dda114c27efe3257994142688b93953"],["/categories/TechnicalResearch/UnitTest/index.html","5d6d5458b4dd3704b76682c8dd0340cd"],["/categories/TechnicalResearch/index.html","9d2a9eefbd5724c9ae6db85e8d429444"],["/categories/Teleplay/index.html","9feca0a991b53a55c65bbeb1ceff1e24"],["/categories/Teleplay/亮剑/index.html","985571b48c40929959ac43f5abeba489"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","143136902b866cc88fe834c6de19232f"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","15e48275b83c54a0a4bcca6a150aa3af"],["/categories/Tool/DevelopmentTool/Unity/index.html","bb33e32cd235f38febe105c1d73843ff"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","5235767ad3bc1587ca41d35523a12785"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","6f7159c2d2847f54b3de52ae082f0aff"],["/categories/Tool/DevelopmentTool/index.html","711530a1bdc2753f9e7e197bb1f9d232"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","d8d6750356ef1771ee1c6182e79cc5f5"],["/categories/Tool/Linux/Manjaro/Software/index.html","5fb68e72df632dbefb3a1e996817e3e5"],["/categories/Tool/Linux/Manjaro/index.html","59141907837ca32bb5356fe230ee57f6"],["/categories/Tool/Linux/index.html","1b12ce420cebb2674040a66726840858"],["/categories/Tool/Music/index.html","8abb2965bcc7a8603cf04b15c6064cc5"],["/categories/Tool/Windows/Software/UltraISO/index.html","a034f2074715a8860ec334e242ef68d4"],["/categories/Tool/Windows/Software/VMware/index.html","99ebdc82a98a4e911dba758bce5fd4e0"],["/categories/Tool/Windows/Software/index.html","5c0bf37d000e2134521e79522d1f6f58"],["/categories/Tool/Windows/index.html","c93ea9aa767589d2f4c1e8391d5f87e7"],["/categories/Tool/index.html","7e19b7314bda6a766b5fb9f04e78adab"],["/categories/Windows/Software/Office2019/index.html","2ea9d9c9289bceaff2a345cf89a6d32f"],["/categories/Windows/Software/index.html","e8a5e86631fec1ac8f742bccaa1a5189"],["/categories/Windows/index.html","3d223c848206a7154bfb0ca54595f344"],["/categories/index.html","0bda2e07ddd7ed6a9a0e3280a14ac1b3"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","dd2e60359540a50fe265febe9385419a"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","16c54b6412b4c3dff84e952f7891f5bf"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a1c7a5285d747a46893e78006de3b0bc"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","316b005e3c3f0a387e4e107d426a6b09"],["/movie/index.html","28d6a81579f1aae74595d13ffd54fa59"],["/music/index.html","6afbd4e75455138154c4c7c157bdac82"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","b175bb104a10f6858f520cefee7202c4"],["/page/3/index.html","e28f7f738291344f129e37bd0ba35bef"],["/page/4/index.html","919b5eb1118cb51ac961340860bd3faf"],["/page/5/index.html","4aa99a3b06f2a3933d0bbd2062078486"],["/page/6/index.html","6a3686f0a7a3b24ebf24eeab3e59085b"],["/page/7/index.html","5cd70584e4f3f7827221cc7276e4a444"],["/page/8/index.html","cac1a2a71056708bcca6f975f2d876cb"],["/page/9/index.html","a0fe880c6e62b337f34a9d341ff282c8"],["/tags/Android/index.html","4e68f4324412a513eb9ff273fafcdd88"],["/tags/AndroidStudio/index.html","a22ac6a98782a40f1ded62150156485e"],["/tags/Anime/index.html","421884080166d181a135e0e7a0355d61"],["/tags/Base64/index.html","a7efcfa2e5af5546d62106023071584f"],["/tags/CDN/index.html","1f4e160b50aa2bb234675433d9f0f87e"],["/tags/CSGO/index.html","c44b058ba55cce99cc23c81524465622"],["/tags/Chrome/index.html","de1ead1e1fd62f643b552c0a5e515a78"],["/tags/Chromium/index.html","1b4a497d22cb9abf8fbc46b1f0bfbe4f"],["/tags/Contributor/index.html","f2fc40e3156137837097abb1dc7e7864"],["/tags/Daily/index.html","517960641a03fd407b2b414489d3075c"],["/tags/Design/index.html","29900cd368c1571aad4179a75707a6d0"],["/tags/DevelopmentTool/index.html","234e2b06dfe22e17ce775983be6b64c5"],["/tags/Emoji/index.html","a577895479134975038cf7dc91ace579"],["/tags/GFM/index.html","21ee7637c1996be8a43f66e9462e7552"],["/tags/Game/index.html","44750779701cc3f40a6744b8f99c8e2a"],["/tags/Git/index.html","4153207a58db3df6935e5055f14eea33"],["/tags/GitHub/index.html","ab740705f2e7bc8653985d8e7186c1c1"],["/tags/Google/index.html","c8fbbbc870f018920bdb0622bc10d9d7"],["/tags/Guitar/index.html","ed8038adadaa8f18263dd3f15744129f"],["/tags/HardDisk/index.html","c2cee06b6cbe5b6ed730d7d08a08f206"],["/tags/Hexo/index.html","21d87e4f8fb437139381c95b8b450040"],["/tags/Hobbies/index.html","03c60d7f14e740f644ab5894d5db9a71"],["/tags/HongKongMovie/index.html","7ba338ede8b33c45aebafaa75c51db2a"],["/tags/Html/index.html","cbd1e4e5de79202ff217d4f9b813be33"],["/tags/Java/index.html","ac5d0efab0ac278f878f7f8a4c553969"],["/tags/JavaScript/index.html","16c5287b675976dcdbe61f7a48bd63fa"],["/tags/Linux/index.html","a9db7d2e4e5caea184157e492360ae3e"],["/tags/Manjaro/index.html","776b6ee131f18ae1c8ea390492f22b89"],["/tags/Markdown/index.html","e7671e47e05fb40393fc7d616c9efc9b"],["/tags/Math/index.html","b234ac52581c7de011fd50cfed1b23fd"],["/tags/MathJax/index.html","4fc5c84d14d385606e74b14a648572a6"],["/tags/Memorizing/index.html","7bebc26ae6c1f7a20424ee1e462d68bb"],["/tags/Movie/index.html","1c5a95524c58c5c6ba4994990dd7103b"],["/tags/Music/index.html","0273e60f1aebc4f3c6de6afe46b66ad9"],["/tags/OperationSystem/index.html","943eb56cc67cd89ff9f80b5baf361909"],["/tags/Origin/index.html","514915d5db9ac5b7d8bfcde7e935f533"],["/tags/PersonalDiary/index.html","c961c4fb5646778f4138a1290b963d08"],["/tags/PersonalPoetry/index.html","0d4d2c24ee241924133da71df74765c8"],["/tags/Photography/index.html","4444a6212a4cdd8b7da10927a9341213"],["/tags/Port/index.html","6438348d10d6681f9625684d063c9da1"],["/tags/PseudoCode/index.html","51009ae3f95fa75a7f7df4d3fc048f29"],["/tags/Pycharm/index.html","7f01ed0e38e71bdbb894aabb41e771d8"],["/tags/Python/index.html","eb12355a20014902e1aaede8fa528a3b"],["/tags/ReactiveProgramming/index.html","0e081890540abd69aba531b8e79dfd3d"],["/tags/RegularExpression/index.html","461fb214b6888398fbdcbdb6ea6a9409"],["/tags/Research/index.html","8ecd9a6a3d95c6257044c8793e084e9b"],["/tags/RxTool/index.html","6f70a2360fdba1a16ce3ad9b69618b05"],["/tags/Software/index.html","fd28fa86593722095551f86b6bf98b90"],["/tags/Spider/index.html","a09ff25e56fc6888e5b78fd59f0a5d84"],["/tags/Steam/index.html","0869e02af67f3430af8186f6b28bf223"],["/tags/SteamOS/index.html","ea908db2c4f1c8c2c365eb14c88cc61f"],["/tags/TA/index.html","96fc4810c6718194627209bf2a132fae"],["/tags/Teleplay/index.html","95c742fd35d895c9de634acf786a904a"],["/tags/Thunderbird/index.html","b9446302226c835051fdf0fee72c5752"],["/tags/Tool/index.html","6c0ecb570d3c303edb1769479f6d7cfe"],["/tags/UI-Design/index.html","e662a68f04eaab3f07d70380042bacee"],["/tags/UltraISO/index.html","0c344000a3afb084312b85c8ad553d63"],["/tags/UnitTest/index.html","fe5896034482d05db52f6cb941bc25e2"],["/tags/Unity/index.html","cd38716773605654dc530f2856d62360"],["/tags/VMware/index.html","219eb7e75c7f8f864f8cecccc943f6a8"],["/tags/VisualStudio/index.html","783e8bc955910dfaf9932503832015b9"],["/tags/VisualStudioCode/index.html","86bfabc169c19723a3403cd38cd33a9e"],["/tags/Windows/index.html","8864d192ecc020bb54fa05b7c087f891"],["/tags/index.html","c4d5c591594282cef8d67ad70feaf91f"],["/tags/亮剑/index.html","2a47748ab5487118574a7fff6f0db1b8"],["/tags/仙剑奇侠传系列/index.html","eef949ccebd6793815d067e9d25dba04"],["/tags/千与千寻/index.html","414ca994a1b120d0cdf53b0c910a3567"],["/tags/宫崎骏/index.html","a62270ba131359c4d8a1e3ffc328c1e5"],["/tags/小王子/index.html","239e88e272d56e830b0baae7545c3d0b"],["/tags/开心鬼系列/index.html","d5026888d7d4d5bc23d7249352d4395b"],["/tags/思想政治/index.html","f5f908a8c1041efd1bdfaa241e7726bc"],["/tags/线性代数/index.html","5c5189fd102ef3722cb4855fa58ae4a0"],["/tags/英语/index.html","2e3270e5cfac6573259d2a88e68ab60d"],["/tags/软件工程/index.html","1232d20de8ade90456ab57e78dea2708"],["/tags/高等数学/index.html","2d45ac67dc50d9efa4516a984684291e"]];
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




