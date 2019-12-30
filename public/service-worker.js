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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b4c9f555a2b78e003c28b6cebc1f7994"],["/Anime/小王子电影的共鸣/index.html","830a37b33c92d42a3e5935bcd36a6f48"],["/Daily/Memorandum/index.html","3f07c02a2994917d15a52724a0b6b635"],["/Daily/生活小常识/index.html","ec22c46d17594da39041025fb35bffbd"],["/Daily/网络用语/index.html","3577184ac2568056e4d160e6a7700f28"],["/Design/设计用户界面的注意事项/index.html","9af447ae28db4631f9ba8c71036b4e7d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","6306224dab600466a145e8acb1db67b3"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","15bf4677842d49d4534912ad455676c0"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","f0a0be58085683d184f68b028357beee"],["/Game/GamePlatform/Steam/Steam库共享/index.html","7c30f7ab6b96ac882d88cc25bf9b7896"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","d981a4aeb3cf80a8b9f8419ebf4c723f"],["/Game/如何独立开发一款游戏/index.html","fc25b245f17d61883181ccaf0d31ed0a"],["/Google/Chrome/Chrome上网助手/index.html","421d8a70a18b8fd1cffd2c0bc359508f"],["/Google/Chrome/Chrome使用技巧/index.html","8e1187ecd06a11f04edae154a5376060"],["/Google/Chrome/Chrome插件/index.html","fb64aad1e0a25b44f458a7d766b2946b"],["/Google/Chrome/Chromium/Chromium/index.html","962ead1f7107922ba16d5efee074a76b"],["/Google/Google搜索技巧/index.html","e60516b85daa5b960defbea37a4c9dae"],["/HardDisk/硬盘分区结构/index.html","60326bfe2a05a438ae9523eeff14a7bb"],["/Hobbies/Guitar/吉他入门/index.html","ce51ff422757112ad36d9b99f6599f76"],["/Hobbies/PersonalDiary/芦江曲/index.html","4e077da88f643bdaafff2f81ba6335b2"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","7d2867e853e762a3f52e7c7d7aa217f7"],["/Hobbies/Photography/摄影入门手册/index.html","149df846050ebe36876c7e793d0c4c8d"],["/Interview/2020年字节跳动面试题/index.html","ebf15eb295d428ce0bfdb0e0b9ec3d9e"],["/Movie/HongKongMovie/开心鬼系列/index.html","01e4a7ee1aa08b9e196d7da9dea27f87"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5c19142cb34b39c3a065155adac1c7eb"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","072001846aa33a3b928ea93bef78d508"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","005287b6e0fc5f3b89cbe515186ff106"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","f38ace7c6cdff7eaa3c1699eefaf9274"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","570993459d2ed1a7902e03c1910d3c19"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","865b7a4d60615441dd29e41ea61ab000"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","99a8e6c842db8adaeee942d78ed340a0"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","206865a2b41f76fd51336e17ea9a4693"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","f96d22c0f19e8e12f78c69d0fac953b1"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b18a863f8365510661c3921408a729cd"],["/Research/Math/线性代数/线性代数公式/index.html","407e1995aed2abef05b45c1f0c395912"],["/Research/Math/线性代数/线性代数知识点总结/index.html","14deee472c53ca4062d64c0ab74f65b9"],["/Research/Math/高等数学/高等数学知识点/index.html","8b0dea60da5e5efdbfce9e7109c4e985"],["/Research/Memorizing/费曼技巧/index.html","2ac87a37dbd3966313ede5603f48d527"],["/Research/思想政治/考研思想政治理论知识/index.html","40ddc1f017dab7527a46947993ca52cf"],["/Research/英语/考研英语作文/index.html","6a56f739bd72458ea910cf1e36dc80c2"],["/Research/英语/考研英语词根/index.html","b435b593383fee849d69c9e77078b1cf"],["/Research/软件工程/PseudoCode/伪代码/index.html","1f3859bc89da1a0d228a57fbbf5f7bd7"],["/Research/软件工程/中南大学软件工程考研题型/index.html","7abc1c109122ff451050167ea6fa5e4b"],["/Research/软件工程/软件工程基础知识/index.html","7adab188a43932120b7d1ddaa615bd7f"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","f431b64b511e89896e3291000dc6fb44"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","c3444bf701da1b68f16fa8a34f3f6694"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","0a2472b8486a4415ec0935a795547eab"],["/TechnicalResearch/Base64加密原理/index.html","a825999b762b7735d52329c782b9e122"],["/TechnicalResearch/CDN/index.html","885abaf5a3a64a2ddeeb4956861142b8"],["/TechnicalResearch/Git/Git/index.html","bf429db034b1023b39f3f4ab63a2c0ab"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","745cc96bc3c843e9e807808c5b2cdbe4"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","d63d74a30fac2a446a094ae55e11ab44"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","4d4161aac1e83237438cf1214dfa147e"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","70415f3d2607e97037525a40f1edb990"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","925d4f9e2d2cb83a6c4abbc7fa8e1927"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","0567fb0712ce2dac0611e60a40636bb5"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","e63afea062ecea3a35104b1b981395a3"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","1d899c20899203c123bf8e868c37ef43"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","4cc2cfec7838e5396d62717243ee5acb"],["/TechnicalResearch/Java/Java基础快速入门/index.html","696065157f61078be8c0932af8d362d9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","2ce13787b6166cf2a0cf25ff41eb376d"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","2ae8a6fe82deb86eb669d9163480654d"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","74af80625b428e80dfec977021844810"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","aaa5631e5743a0c48afb45c5299b4b71"],["/TechnicalResearch/Python/PythonExercise/index.html","494ea09f3197ed245f52049c2e46f2d5"],["/TechnicalResearch/Python/Python问题归纳/index.html","abe0ace66656e3fd6bdc3e8c2cb9fd40"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","2c83eef6add508576bac3cb8aed36c80"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","94b86d50281544298d839fbfd8e50c43"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","461fc6336d514adbd6eb2747ee226c28"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","fbd54d7fcf56e5b53023b6a6ce2ea059"],["/TechnicalResearch/服务器常用端口/index.html","18450157b56630b451380ff588f71200"],["/TechnicalResearch/正则表达式/index.html","cf952201ade7ab26df2dc4652569a3cc"],["/Teleplay/亮剑/晋西北铁三角/index.html","3fbb6beccd88a368f88cd989a76678f7"],["/Teleplay/仙剑奇侠传系列/index.html","296c3922134d84b678a3235ba61b1324"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","1eb08dcdcba129d2b70969e32e53da10"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","927926235d5ee23e452fc3f9c323eeb3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","7f368f4cd64c8729f632fb63e0a9e1ba"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","cf3fd8cf7bf33349b6be54bf0fcf1958"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","62e2c86670c346c790cab0a5889ef961"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","a9ac168e7ff802d16fe579b444ba3a9b"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","1994196c5ef98d4e8685da7a7fb994e8"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","92e054f075dc27c83fdf8f70fc4ab46f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","a3f2457b63eda6b90afe2ea49527684f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","ffda715b04dbd051157dfffe49469cdf"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","a9901fda3c0c11dc282dba0c3f9c527e"],["/Tool/Music/网易云音乐/index.html","0ce1aef02da1a47a51a39e338ef37e3e"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","1ae48e093b75057e4cf2742cb8e91673"],["/Tool/Windows/Software/VMware/VMware/index.html","7bbe1eb8e2fe0b1d9c3fdd50dd55131b"],["/Tool/百宝袋/index.html","4c1427ca51e6bff2587d99c0315e4f66"],["/Windows/Software/Office2019/Office2019激活/index.html","a8772b2b0da20449d8bef145d99ad9dd"],["/about/index.html","deb10eab58e2e03f9dedddadd55b7cf1"],["/archives/2013/10/index.html","d5ea792fa40c76eb052b2881a7695424"],["/archives/2013/index.html","5f3be868e28c5370e86ac1de6727d40d"],["/archives/2016/09/index.html","610c2a75f9c3e3d43f10a52f98cd6403"],["/archives/2016/10/index.html","643a988568a6a227ed1a72f2c3b90f46"],["/archives/2016/11/index.html","7785e22a797abfaa67ce737c3d5bb836"],["/archives/2016/12/index.html","df81e19e71b7e7cf205cb9c2ca9a3cad"],["/archives/2016/index.html","5f2c3343db5769d602e7ec67ac0eab9c"],["/archives/2017/03/index.html","c7cb60bca80c3e27dfc254985660cc86"],["/archives/2017/06/index.html","a096ed7be1ad93fa552dbaa49a6273f6"],["/archives/2017/07/index.html","65e515a5b2d047b39e32a8278e094314"],["/archives/2017/09/index.html","3e4204da6f6ed3167430d8c5a2ff49ea"],["/archives/2017/10/index.html","b9a16c84554295d10fecf207a0b4bdb7"],["/archives/2017/11/index.html","da7c910320aacee6f958008c7ff6b012"],["/archives/2017/12/index.html","8916584b792ceae3d2f23719755d7407"],["/archives/2017/index.html","46bc7cb775b29097dff44b13d84df5ae"],["/archives/2018/04/index.html","f1d42c4cee64f89fe53dc9f5ca71896e"],["/archives/2018/08/index.html","a781c75c9edd953b84d3d5d175131cba"],["/archives/2018/09/index.html","cb9ba6abd507741fae47e8a7563edc37"],["/archives/2018/10/index.html","bcff586175089a72fc567edf835dc9c2"],["/archives/2018/11/index.html","299df372a50162dc7666c9c74029f23e"],["/archives/2018/12/index.html","8138fc32262c45a27a3f6ee69290672c"],["/archives/2018/index.html","53e44be47edc91111d4501635768a922"],["/archives/2019/01/index.html","292c3b4c48de5cf16d173a772ff1183b"],["/archives/2019/02/index.html","074092ff66c58b05b77ca3542c603150"],["/archives/2019/03/index.html","3e4b70f4415f78676deb5148f5102d94"],["/archives/2019/04/index.html","72d2950d3eab870d1e6730d98646c900"],["/archives/2019/07/index.html","ec989d24e1e07ec17b4db8be83e771ca"],["/archives/2019/08/index.html","48d2c29966a60d29d81f00cc2d69a986"],["/archives/2019/09/index.html","5dcaa84dfb8ee23b104f13395ceee664"],["/archives/2019/10/index.html","d5227b36f8c217f5d069173e9688a4f0"],["/archives/2019/11/index.html","52808218d044d660cdefa9aa0bfd686c"],["/archives/2019/12/index.html","d056cb6c9f58dd0aaf89248adffaeb02"],["/archives/2019/index.html","ba33f15daf84ae1255802e86512edb16"],["/archives/2019/page/2/index.html","30065841db7f5b2b842ce03c45f22b49"],["/archives/2019/page/3/index.html","52d17440c9c87e31b6d37ddeeb816cc3"],["/archives/index.html","cd8931499ef3708a5ac8eb36d191e876"],["/archives/page/2/index.html","035d39b8e5be172701fb6564972d100b"],["/archives/page/3/index.html","d763c296c9be329af4f78322ce6d2f4b"],["/archives/page/4/index.html","5790fd13f5a6c25ff9911f230625ed84"],["/archives/page/5/index.html","99e7cccab86b2acd4a6cf4b7d187d684"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","29dbf751cd5c975bdb1f021e4bf5cc9f"],["/categories/Anime/index.html","af4f6e4aa0aa03808d7aae979c045725"],["/categories/Anime/宫崎骏/index.html","51f98037b18f1f059472540ad79aa406"],["/categories/Daily/index.html","a072189ea7590f6c1f199c3b830c1c84"],["/categories/Design/index.html","166bbe38339db77fa1f3c687937a6357"],["/categories/Game/GamePlatform/Origin/index.html","e0be7d904dc84a02cad478571d44a110"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","b33b738e39da9970d36e35e9db1bb6cb"],["/categories/Game/GamePlatform/Steam/index.html","67319bd3e26e6a3f55633f37ef9eadd8"],["/categories/Game/GamePlatform/index.html","df1c18cddb9713f0770ee5ab5a26564b"],["/categories/Game/index.html","1b61d23a3874cbf0ab7475d62857b200"],["/categories/Google/Chrome/Chromium/index.html","64fcfb15bc831c1c1e3019dacbb9cace"],["/categories/Google/Chrome/index.html","b3c577c81a62c65192806491bebb79ac"],["/categories/Google/index.html","5f26cd8de6477544dc3555a6906224da"],["/categories/HardDisk/index.html","81dc2af3eb51422ff8c33f8a6c9744b8"],["/categories/Hobbies/Guitar/index.html","b104d0482262f8d48a8fc4909321b0e6"],["/categories/Hobbies/PersonalDiary/index.html","d97730a25608848e538be4b60f86d252"],["/categories/Hobbies/PersonalPoetry/index.html","231b905a24d19234c171dcc4d281797d"],["/categories/Hobbies/Photography/index.html","375480189d558bf690965f7a94ce0cb1"],["/categories/Hobbies/index.html","6355bedc9871d17ed769b645ae9a508c"],["/categories/Interview/index.html","5c36ee00112bec8b49b37983b9662f20"],["/categories/Movie/HongKongMovie/index.html","a1bf475834dc0744a169421dbbc9b47c"],["/categories/Movie/index.html","a4ba59b94853a1f3f0d3722808cacb44"],["/categories/OperationSystem/Linux/Manjaro/index.html","2ef58fe916800debe1c47a6676753e83"],["/categories/OperationSystem/Linux/SteamOS/index.html","82bc87062a7bed26967d69bbc8c78914"],["/categories/OperationSystem/Linux/index.html","f2a6155b55d107bef6a4c71e80ac4fed"],["/categories/OperationSystem/Windows/Software/index.html","1e6f318d7e0aae1c4f37447f50ffe84f"],["/categories/OperationSystem/Windows/index.html","9f3b1df5534bffd908ffa8327abe83af"],["/categories/OperationSystem/index.html","df0254c537e5e0609134fbc610bdd4c6"],["/categories/Research/Math/MathJax/index.html","b3cf48952aae5c78ea5227c9036c1dc0"],["/categories/Research/Math/index.html","52e121e0c621f4fe678cf4a241249078"],["/categories/Research/Math/线性代数/index.html","157dad26b589a5b1880a38d3675ed34c"],["/categories/Research/Math/高等数学/index.html","c0b5d193e95cf97fdaeb1f1d4c482e97"],["/categories/Research/Memorizing/index.html","efbbc1c5098eaf1669d9f655491e64bc"],["/categories/Research/index.html","497ccaa6ab0f00a96616e96dd8ac2be9"],["/categories/Research/思想政治/index.html","459748e1da12e1f69c69f54658202dbb"],["/categories/Research/英语/index.html","a320fe37f36fcd7b4146f511d6e2fb31"],["/categories/Research/软件工程/PseudoCode/index.html","9e8020e533cbed08e4c1c4cd92e609ee"],["/categories/Research/软件工程/index.html","58a4f6fb7529e303c539cd84a8a395a5"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","0264dfe7e5d7116b8b6c609d80edfd19"],["/categories/TechnicalResearch/Android/RxTool/index.html","b2ea54defea66fdd4398fc5f3b99e7bf"],["/categories/TechnicalResearch/Android/index.html","639801009f4314d2497c5ca83204d34e"],["/categories/TechnicalResearch/Git/index.html","a58c7f85731656dccceafb78c5e4325d"],["/categories/TechnicalResearch/GitHub/index.html","05a00812f81256361f85000b5c93f60b"],["/categories/TechnicalResearch/Hexo/index.html","b47ae05c109207842b8982dc9d080095"],["/categories/TechnicalResearch/Html/index.html","e0ffef0d0c53b56cd52fd794c1f59d47"],["/categories/TechnicalResearch/Java/index.html","783d6da0f48ba545ea13176fe445402f"],["/categories/TechnicalResearch/JavaScript/index.html","40b41f4e67d5581ceca7fc906dea6489"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","ddeb184d335481533a9f80ae4d827b03"],["/categories/TechnicalResearch/Markdown/GFM/index.html","ed4a067389d2cf343abba774be09c175"],["/categories/TechnicalResearch/Markdown/index.html","3564ddca16ca643d6fda8440aa726da2"],["/categories/TechnicalResearch/Python/index.html","60a0a902805c7efe0a4fba83f0940a61"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","b8fb411732fa58d20888684740142fe5"],["/categories/TechnicalResearch/Spider/index.html","c433257adf1e07df1066b96984d24118"],["/categories/TechnicalResearch/TA/index.html","a045f37dfe41365c5a94b4f1f1fac87a"],["/categories/TechnicalResearch/UnitTest/Android/index.html","9b31d5ecb3615903deee19c04fa94a5b"],["/categories/TechnicalResearch/UnitTest/index.html","dd3e9bc56a2c4e8bc46063dc4e5b7130"],["/categories/TechnicalResearch/index.html","1949d10eba9857c0e5be37371d9f6416"],["/categories/Teleplay/index.html","a69b07d92b5faed484f5e061fbae01dc"],["/categories/Teleplay/亮剑/index.html","207b621f33c2b662e2bef26a9b2c3609"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","14fea254a366e7e13cd37f6e9e692cbc"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","10ab134270a8bf2e9fa2a422b807e4b6"],["/categories/Tool/DevelopmentTool/Unity/index.html","18235c4d5ce8e9c1bd3f567997260bf0"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","7374bc96eb8287d926c127e9e4d16025"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","841c6b7d7a8d9627cada0cd095f2c306"],["/categories/Tool/DevelopmentTool/index.html","186f4cc82ab16213ab10b5ad199a77cf"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","cd3266cbf13db04bcf9b3c162e63448a"],["/categories/Tool/Linux/Manjaro/Software/index.html","58daed0c453b7818ac028adc8c10ba3e"],["/categories/Tool/Linux/Manjaro/index.html","aa9e3a960abb0001f87589fb264e7f81"],["/categories/Tool/Linux/index.html","a1bfafd80a26956d99c6939be3b2f703"],["/categories/Tool/Music/index.html","a016e8439ec6b47a088c37c242f26798"],["/categories/Tool/Windows/Software/UltraISO/index.html","a91350d6dc3e43fae85fab6cb538280f"],["/categories/Tool/Windows/Software/VMware/index.html","4d609935f4d945959448461bcdfabc56"],["/categories/Tool/Windows/Software/index.html","f3d1744481650e516a5ed5787345959a"],["/categories/Tool/Windows/index.html","e6cf3956f54c3794889cf5ec2730d290"],["/categories/Tool/index.html","6c9f63df5c4e46923763fcc9531f1654"],["/categories/Windows/Software/Office2019/index.html","df479831c7c541a1853d29866e58adc3"],["/categories/Windows/Software/index.html","adeb4f70b174870018d7c00d99272733"],["/categories/Windows/index.html","da14399894a65b3bbb8e1815e7b08db0"],["/categories/index.html","1243c089638095b220c06be427b8a3a6"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","3f0692cb493d5431fa086300ca4fa23d"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","e06811386906ae12eda4cd24fe5ce6c4"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3e6a4a2195106f17347ee8472f1db2c8"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","620f4c522b87db69d693ea0080b38df9"],["/movie/index.html","f3f41fe1a81694057789f69b926322c4"],["/music/index.html","f69ed9b78f58336721035737303daba2"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","5558534a974c7eeee7b12444cae42699"],["/page/3/index.html","b884ef1d3fa83d8beed4335ce79c1222"],["/page/4/index.html","72a900d686598fa67b38c16a5bdf4a68"],["/page/5/index.html","2bc30e860ca747f8d4698d36532ed4b5"],["/page/6/index.html","e29cd0cb101c66bcc94a40ae97d1bf4d"],["/page/7/index.html","ffb3bd8951d9fb16cf831f6a6a845128"],["/page/8/index.html","bb7dc1fe31b11d41b4252612c35d94bb"],["/page/9/index.html","5be0a1ecfd734750aa50b444f9925388"],["/tags/Android/index.html","977a77305833ac4cd1e207ae6a0555a6"],["/tags/AndroidStudio/index.html","22414802a17e2fd90984ac09a0212923"],["/tags/Anime/index.html","10f26a92c136a6f7364132d3194d054b"],["/tags/Base64/index.html","3b1155c8cba6e3f2d78c46bbcc416842"],["/tags/CDN/index.html","1d35863661e10d8da76b48e4ab602cc1"],["/tags/CSGO/index.html","150e8281074e43e2a3078c82d3360436"],["/tags/Chrome/index.html","92a3d1bbd64d6edc8f6075a0693be633"],["/tags/Chromium/index.html","77fd233c861d63a9b757c81036f80a90"],["/tags/Contributor/index.html","4ca85d37fdb50a7dc1d34761d1e4b328"],["/tags/Daily/index.html","6a8027e8196644f1973013656a96e3ee"],["/tags/Design/index.html","78557711262c15c18c3f075d7eef0a07"],["/tags/DevelopmentTool/index.html","a5bf3c826249965f607be408e49b85ef"],["/tags/Emoji/index.html","93ef99ac295d12c08d9fbef4938f806a"],["/tags/GFM/index.html","fb6e550b54cb8df99b7fdad676a047ac"],["/tags/Game/index.html","c1ffccb18d7f9a71927beabbf33a00f5"],["/tags/Git/index.html","e2202dd3edc04851bbda58819138886d"],["/tags/GitHub/index.html","5739a4054f4c697b7925e47bbf1111bb"],["/tags/Google/index.html","4112906ac06844bb4cda5715888bc28c"],["/tags/Guitar/index.html","99d2522a44818eb82d38709e2720ed14"],["/tags/HardDisk/index.html","07fea749c238156361ca82d4c035bc4c"],["/tags/Hexo/index.html","fdd793ad70fafee33b76cf8f3567071d"],["/tags/Hobbies/index.html","2214bcf9e1dc4f48d5ea7edeb90cd5ab"],["/tags/HongKongMovie/index.html","35f532c6f31eb04df4222f50cd806815"],["/tags/Html/index.html","dbf7b27a0de5b85a431c48150e2063cf"],["/tags/Java/index.html","5448e9f9cec5cd364833d51eed7938e4"],["/tags/JavaScript/index.html","09ccbf7a30e0d383e5c8b50149399ce2"],["/tags/Linux/index.html","0863a80916780692c73576f056748019"],["/tags/Manjaro/index.html","7966620b7c5a1ba6b3e5c8ffe2dcfb82"],["/tags/Markdown/index.html","443cffb5fef074696d1d5d88803a9be5"],["/tags/Math/index.html","cf9c7638f16639e17b2db0db5c162381"],["/tags/MathJax/index.html","761b2020416ad25dc5bb66a541f84b24"],["/tags/Memorizing/index.html","a68e826ba458d7bb12f10866e97cb0d9"],["/tags/Movie/index.html","ccba6e39c08b300a44a76f6c74a393b3"],["/tags/Music/index.html","567920f3a5bccd94ba8263fbe8e5a5b3"],["/tags/OperationSystem/index.html","3de6495dabe548c7efe4cb159a0bd2f3"],["/tags/Origin/index.html","a43db643f6e2b102c7ff50b3a136942a"],["/tags/PersonalDiary/index.html","6f3a5b0154dfdc220b3ccb86873a926a"],["/tags/PersonalPoetry/index.html","94ecc6367ee1ef79b4ec11a82f47e571"],["/tags/Photography/index.html","ddd31f5e8c2208dc1ac07b0e694269ed"],["/tags/Port/index.html","0d95dcf58ed06b56a2e9c4e82c792790"],["/tags/PseudoCode/index.html","fd7dd2882a6b9a8c8e0060c9c7cb9b27"],["/tags/Pycharm/index.html","c708f8c8af10bc52450052e6eec32554"],["/tags/Python/index.html","16dcdb1a7106efa18d697ef822a4bc73"],["/tags/ReactiveProgramming/index.html","23a28a61b0635732fe02602edab20027"],["/tags/RegularExpression/index.html","206df77694e763e69937d517a0075fd4"],["/tags/Research/index.html","e7c5141972a8ef0deb492b633751c801"],["/tags/RxTool/index.html","392ae4bf13bcf7fae112dbc1e1ba1f9e"],["/tags/Software/index.html","5908872c2d58f4c8e320feab09218b2c"],["/tags/Spider/index.html","ba824e143d5fad2c6b76921385c5f2f4"],["/tags/Steam/index.html","72258be5e8c0acf88de81f9da9b55248"],["/tags/SteamOS/index.html","0e87d493ade01573bd22d18b7245cdd2"],["/tags/TA/index.html","93c0c73eb6d5530b1245fe779c62088c"],["/tags/Teleplay/index.html","facd4796824e257c2801c6de449ad1ce"],["/tags/Thunderbird/index.html","76868a051c70c52a9a909d9cd21e6130"],["/tags/Tool/index.html","bca0da165f5698e934349846e4951d45"],["/tags/UI-Design/index.html","ce6701491bfddb50269dfa9752cf98f0"],["/tags/UltraISO/index.html","96089c6d7838ff1a903e5915a1236dae"],["/tags/UnitTest/index.html","308b25ca7ced228263d885c190a9883c"],["/tags/Unity/index.html","36882c389472ac7b0620f53e26d4a495"],["/tags/VMware/index.html","63f41463bad6f8be4a21eef10ef6c3de"],["/tags/VisualStudio/index.html","4a4c1086ba6f3cad8cb9a69be99b7fb2"],["/tags/VisualStudioCode/index.html","ea130cdea2877d5c4038418e751c9fee"],["/tags/Windows/index.html","8f8fce215b9f68db2031dfa9590d42f4"],["/tags/index.html","ecbdb6e117ffa7c428eea9919bd7784c"],["/tags/亮剑/index.html","f20f82f25080b968b8c3ac6c4870c492"],["/tags/仙剑奇侠传系列/index.html","0561ac71d181ea3af1eebf393831637e"],["/tags/千与千寻/index.html","9ad37d23f0aa147fb792cbfbd41aa8e8"],["/tags/宫崎骏/index.html","0e9ebd6f6c0851519d9644e5410a12c8"],["/tags/小王子/index.html","2071ca6830614fb689a9d7dec2fccdbc"],["/tags/开心鬼系列/index.html","0d1b18341c44ab48276113c5cddc8463"],["/tags/思想政治/index.html","03e61e73cf598e0062698acba0d68b83"],["/tags/线性代数/index.html","57de825d9547fae9a108e6fea1f83da5"],["/tags/英语/index.html","c99919edb0838a943cb2b47d67c5824b"],["/tags/软件工程/index.html","a3df5876ce4840717bdff3eb2afbe9eb"],["/tags/高等数学/index.html","b05f7a458b66606438ff3031facc2620"]];
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




