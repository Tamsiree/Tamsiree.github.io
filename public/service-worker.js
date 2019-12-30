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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b93bd98728678f9224ad81dfdf75b8d1"],["/Anime/小王子电影的共鸣/index.html","a90e37a02de4dfd7c6e2677c1b672b89"],["/Daily/Memorandum/index.html","a41a04aa67720765755e9b61951d6122"],["/Daily/生活小常识/index.html","09c8c350bb5cf6e58ca1f0005e018269"],["/Daily/网络用语/index.html","455ef9d5713009139b474f3294933008"],["/Design/设计用户界面的注意事项/index.html","9271c12b34eba9db909ae2a48700cb8d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","e3141ff8291624b979ea308c7aa2ba93"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","0acebe2b8c1531f09753eadbf85c920f"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","f7ba98224b5a94b2f01cad12cc3068f0"],["/Game/GamePlatform/Steam/Steam库共享/index.html","e681fdccd536e0173411b407dfeb326a"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","0dbd9428f6924bb549852a3c55e512ff"],["/Game/如何独立开发一款游戏/index.html","b5df7800c3970a3761c5eb8343bf2b10"],["/Google/Chrome/Chrome上网助手/index.html","e28836b25c3a198f6d632bfdf4951c93"],["/Google/Chrome/Chrome使用技巧/index.html","5d63c2284d9f2bcfcab805a3e588a77d"],["/Google/Chrome/Chrome插件/index.html","15de7b79dace2f12f79738d45f2622b0"],["/Google/Chrome/Chromium/Chromium/index.html","a400de7a90a9fcea301c8fc8ea0be1a0"],["/Google/Google搜索技巧/index.html","545815b43b805acf47d0ee987dc7cf85"],["/HardDisk/硬盘分区结构/index.html","93bd695f7a455b42f8ec215f2eb1bb6a"],["/Hobbies/Guitar/吉他入门/index.html","aed5d7ec0086e7c79849af20e53184fa"],["/Hobbies/PersonalDiary/芦江曲/index.html","f21233f51e2a368543b011bef81def1a"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","1826f31b366e9761aecfdc0e3707bf59"],["/Hobbies/Photography/摄影入门手册/index.html","89e883ab0d1e813e85c706ed9692db8a"],["/Interview/2020年字节跳动面试题/index.html","02895d775f7a2071e3cdd8d7832287ee"],["/Movie/HongKongMovie/开心鬼系列/index.html","f5f40dfb6dff09a08327e25255b12f3f"],["/OperationSystem/Linux/Linux分区管理工具/index.html","dc25494eee64a49ee1679ce573fcd0b0"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","bdaf503613f23090438cba5165a0fd34"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","9efbe2d5be7b6911061f9601e139ed3f"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","541611c19af84a328f5d22c27919a756"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aff9ccbfcdeee8cf148a4a5fd46af1e9"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","5c9786ae265bdf123e27c4c5363fdafc"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c54c0a9a29321dd36ea1270cc9064da9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","a814eec9d36b051bd0ec504483e9daec"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","3f831ef3c356fba1dba1dab9a9a35207"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","004b9877dddc1d136fb1075fcc301e16"],["/Research/Math/线性代数/线性代数公式/index.html","f643cfa104d9488de780b37126ed75f4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","64a4fd732f65bc255bb118bbd2673c1b"],["/Research/Math/高等数学/高等数学知识点/index.html","cf34b1cfc55eb0e2d22d132522cd6440"],["/Research/Memorizing/费曼技巧/index.html","9a208f8e3528fc2d878f3dd740f5ffb4"],["/Research/思想政治/考研思想政治理论知识/index.html","2209961c8e1cb191f42d2469044a880a"],["/Research/英语/考研英语作文/index.html","f53513f68e27047be588cee3ce2651d0"],["/Research/英语/考研英语词根/index.html","74154e91440d567ecc2d780530c7e57e"],["/Research/软件工程/PseudoCode/伪代码/index.html","8b4b36b553b52b4e61ebcb5ad8b145c3"],["/Research/软件工程/中南大学软件工程考研题型/index.html","708460abf6efaa21a23d846eb835cadb"],["/Research/软件工程/软件工程基础知识/index.html","65ac58763b4b4ea5e79a97b8933856fd"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","b123c14588b68e90f03d91abe24e0890"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","060cc9314c14f2979f88eb5e1661b244"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c40c2fe319414d4ebe0543ae31e6ec2a"],["/TechnicalResearch/Base64加密原理/index.html","c97e6d1cd4308a83812764fc0d25f648"],["/TechnicalResearch/CDN/index.html","94c2ef2541839bff8eabe89784915189"],["/TechnicalResearch/Git/Git/index.html","fc23b54df9686efbf8c72a4468240f4d"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","042cedbffd729025a09b93aa0ca11cb3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ce9b06b0664a6272fc70d79b7a9dd2d9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","8f745327ed00826ecd2668cc599e0fa8"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","a8bd216eb710f6320ee6c55206bac9d2"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","24a3d17d86d9ba9f705b25a4055fe88f"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","9a011cdc145192ac29c5ff226b6c2ec7"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","93723c3a5c884bcb49d9c0b1cc9c4999"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","06cb3183cdf34e53c128704485bdda0d"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","9e5c8b702964abcd2cde40301a51d685"],["/TechnicalResearch/Java/Java基础快速入门/index.html","b6c9c774efa5c782efe36aba19b58bd2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","5c688cc3532eedc0edfa3733dbc62f37"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","9cf9fe50b21917943e57e4116d9dee9e"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0e60d9a50178b94ea4e191a5f926d01e"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","24b5c03324cac874f598a1450226c080"],["/TechnicalResearch/Python/PythonExercise/index.html","7ad69aab1d43f958c8452e80caedcaad"],["/TechnicalResearch/Python/Python问题归纳/index.html","a22f96f6b0b5d030cc76c21f86b27668"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","ff7b57125b5397962bad302b02c020fd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","28355ca46f6927d785e2aab0235b7b5b"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","0545f2357b934b082e3c9ad57d6bffc6"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","abcb6d67dcf3dc640142c1cd53d1f89d"],["/TechnicalResearch/服务器常用端口/index.html","cc9f6893d892882546e96d2e9cb656d1"],["/TechnicalResearch/正则表达式/index.html","ec8b903e02d72beebaf3b50249aeca88"],["/Teleplay/亮剑/晋西北铁三角/index.html","123654baa12845d90931801f5985e340"],["/Teleplay/仙剑奇侠传系列/index.html","806c2e184d658cd8c6ef5793cd8bb8b5"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","082cc3b396210bd729f1f9c91b5b53db"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","560667aa92b8bb52030c318aeef33612"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","c1b51bf4b8195550a88f98724aaf33d7"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","8616259422d2a7fb8fd42aadec68fbb6"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","e8a77eaaa26030136a564210533aba6d"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","391b7787f44b11490f3061dd5c5b157c"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","87917ac0f9a19947fa6b70c680247699"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","6fe3035a51fa6252b1bd44df5782ff76"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","4b291c11ee91dad23646801dc563d909"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","b4934ace7dfc2dd909dc1cd1f1397832"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","f6f85ca5a857d2490d6a40452ef6c998"],["/Tool/Music/网易云音乐/index.html","4532c9f55ac7e44fa8bc4f36da849875"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","ad5e0e7b3b4c3fd7ba183b2c1c92864a"],["/Tool/Windows/Software/VMware/VMware/index.html","3fa15c9123c0603468053519602adff3"],["/Tool/百宝袋/index.html","f90f7d82e67e378a6af06f0e7c844112"],["/Windows/Software/Office2019/Office2019激活/index.html","3a8da1b12241f87eafc21d8b714070a1"],["/about/index.html","9b3e5845d3441c7a6c5765c82162079b"],["/archives/2013/10/index.html","53eb022368464905e14fda5960ebbcbd"],["/archives/2013/index.html","abc5bafa31067b21db2ddeca008a165a"],["/archives/2016/09/index.html","9e141ac7677f9a12a3654ff0ff8205b3"],["/archives/2016/10/index.html","0ac65dd86d7d52ed50095801a56bf72b"],["/archives/2016/11/index.html","146f0a4ac4c3291f1fe2c3658a4c1969"],["/archives/2016/12/index.html","4c168075a1fb397fb01c814182d4e70b"],["/archives/2016/index.html","7531b1b365f0cbe1cdba68f87fe9afb2"],["/archives/2017/03/index.html","32a840a4780fdc78b79ba4581e22692b"],["/archives/2017/06/index.html","4cf5260cd018a18ad46ac7c52a74adc4"],["/archives/2017/07/index.html","fcc3a24f35ec4158734c60e8e8f3ebd5"],["/archives/2017/09/index.html","447e758049f7dfea3d3d4f5f9d319796"],["/archives/2017/10/index.html","37a40801030fd80085079fa5972c3fba"],["/archives/2017/11/index.html","4c2f1ac30b8b137d1f49a08237490601"],["/archives/2017/12/index.html","208a26659c30513d6803394a48374805"],["/archives/2017/index.html","78384cb1226caffdb5c7ae203003e44d"],["/archives/2018/04/index.html","14418354835a2fad87a0e1fe5b8a5897"],["/archives/2018/08/index.html","bc1a693e97afaf849c6ae4ba94cd9a3b"],["/archives/2018/09/index.html","d17078c060c87f8e2e3c813d8a808832"],["/archives/2018/10/index.html","522bb77e324a5f580cbd3ad003703ef5"],["/archives/2018/11/index.html","5e403a7405a38cfcf54795c33397aacc"],["/archives/2018/12/index.html","92cc5c286ecf96fd5a8148212e3b2358"],["/archives/2018/index.html","405ee1920390cede7793cb5eef0a4aee"],["/archives/2019/01/index.html","833d1efd996a37efd2203691a136c32f"],["/archives/2019/02/index.html","bb7a10ec543de7af18caf7069702835d"],["/archives/2019/03/index.html","7b00bfc2a01eddff9a318c6b7e518197"],["/archives/2019/04/index.html","80a131f631bdb7c8604cf21c8f229ee7"],["/archives/2019/07/index.html","a3d8f1000b76db381c992c7483ba12b8"],["/archives/2019/08/index.html","6254c4b3cda368f0bfd15de19602f5c9"],["/archives/2019/09/index.html","82573fa7461255f6399c9901069e5f8a"],["/archives/2019/10/index.html","718e026b8ec42623d0be7f1a5240adb9"],["/archives/2019/11/index.html","47f79257a7b659666f4d0f839271190e"],["/archives/2019/12/index.html","cf7564acd99192eef7765ce35c16a382"],["/archives/2019/index.html","e040438951fbee8b115ea99f4c60c9c6"],["/archives/2019/page/2/index.html","1af452c98e23a41b3842d3f33849403a"],["/archives/2019/page/3/index.html","344b00bbdb7ff3c72548483f9df483d7"],["/archives/index.html","c6b2880482f428c4e653de58362a7c9b"],["/archives/page/2/index.html","9493e336e7c5ecc80c7f809f7cb9d177"],["/archives/page/3/index.html","468764a2d281931807021835050f32ec"],["/archives/page/4/index.html","2664e362de1b1b0581bf93bfea673156"],["/archives/page/5/index.html","2ee46616c5abb15e6a2123bbb3a21249"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","a0ee2392347808551c220f80a1c7aca1"],["/categories/Anime/index.html","e49b3eed22f85193660d4bd45450625a"],["/categories/Anime/宫崎骏/index.html","7ba13c336f294b420ec305d3cffea446"],["/categories/Daily/index.html","e2f3841a46fe0513f20eeaf2b770403f"],["/categories/Design/index.html","f9bb519294a1548e68719872178b83b1"],["/categories/Game/GamePlatform/Origin/index.html","8aa06aaa72ae3fbbe378f9498b86407e"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","768f13b14b2b500da814b6e474cce237"],["/categories/Game/GamePlatform/Steam/index.html","1a443d7d988738f480c30b946d7ec7cc"],["/categories/Game/GamePlatform/index.html","0b7e1eeb6aaea47246ae87a9f0a2eb36"],["/categories/Game/index.html","4d4ec9d1e2e628e346908f87a1b4bf5e"],["/categories/Google/Chrome/Chromium/index.html","62d8f6061225bcecfff84063467f81c7"],["/categories/Google/Chrome/index.html","967af8c73180f4b615c1ecb72829f900"],["/categories/Google/index.html","806a049c2a8ce66002143f4f2293b129"],["/categories/HardDisk/index.html","154e8ab155f6582bd26e81d8619b606d"],["/categories/Hobbies/Guitar/index.html","1450974f1035f8d562131bb6666ed6d0"],["/categories/Hobbies/PersonalDiary/index.html","eab41f3a5b8f419c02e02b66090afbfb"],["/categories/Hobbies/PersonalPoetry/index.html","d04323a12b0ee7d6f7fc4706e1859483"],["/categories/Hobbies/Photography/index.html","37c7df2e1d621556e15c4e09127cfaee"],["/categories/Hobbies/index.html","5247c447ce74141c2ed817c4d97a527d"],["/categories/Interview/index.html","6aaf3a54996106fdc7edbdb7b003d889"],["/categories/Movie/HongKongMovie/index.html","c49edb96665e853c0b7a8ada36c35723"],["/categories/Movie/index.html","dcb6629d8453c6f082e2620153180e90"],["/categories/OperationSystem/Linux/Manjaro/index.html","b8e51279fdc98f798fae6ab60ea75b5b"],["/categories/OperationSystem/Linux/SteamOS/index.html","c9db7fbce80e0c1473b40204932b0316"],["/categories/OperationSystem/Linux/index.html","9a1a070529d5844918fe5417b9feee6f"],["/categories/OperationSystem/Windows/Software/index.html","2db204ab2cb793b485066284d37099de"],["/categories/OperationSystem/Windows/index.html","8cf99c6c3d2e444bf20820d82ffb5277"],["/categories/OperationSystem/index.html","b861bc2a033466715aa3635c0dc48914"],["/categories/Research/Math/MathJax/index.html","dd96ed7cf673fadc396631ae52b2683a"],["/categories/Research/Math/index.html","7514a8c500e7c88481747270fadc86fe"],["/categories/Research/Math/线性代数/index.html","720d388df7bb9aed6787b30fc5d55af9"],["/categories/Research/Math/高等数学/index.html","40cd9e1430ed6de63cee627e1d8dedac"],["/categories/Research/Memorizing/index.html","b07147f4675a4849025894ca53bd3e29"],["/categories/Research/index.html","e6c3421ce0aea6a5f9ea5303081333e1"],["/categories/Research/思想政治/index.html","5837939079169e6cf42037160458e86b"],["/categories/Research/英语/index.html","dc0c59b98e20b83cd3a636225649d469"],["/categories/Research/软件工程/PseudoCode/index.html","a60addad10a71032e2f5c10e4a40080a"],["/categories/Research/软件工程/index.html","4d61348dea4956d70dc9ce776070664f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","797f01e3d60d7977efa0c7db19115d1d"],["/categories/TechnicalResearch/Android/RxTool/index.html","66d28cb600851f829c1b9187c450f8af"],["/categories/TechnicalResearch/Android/index.html","d4e85fb443cb8fc07352a512f35c0ec3"],["/categories/TechnicalResearch/Git/index.html","460fc051833d78a4ac6fad9e4fabcdef"],["/categories/TechnicalResearch/GitHub/index.html","628f180099394f1c65c31fa46aceab83"],["/categories/TechnicalResearch/Hexo/index.html","493c2ce7f6b3dd66d3fbbda1dcf807e1"],["/categories/TechnicalResearch/Html/index.html","2a0ffadeb2e2240f8df73bb8e2429846"],["/categories/TechnicalResearch/Java/index.html","1d4bbfdaa460d24fc95d7a4b2345dd06"],["/categories/TechnicalResearch/JavaScript/index.html","414d9289540d21c0e2564a21921f1869"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","059b616c07cf714aba7c256a5d758324"],["/categories/TechnicalResearch/Markdown/GFM/index.html","a4966833b1fd9dde3efc802a60e22678"],["/categories/TechnicalResearch/Markdown/index.html","bea2b9b6feb818049239b2853addb13f"],["/categories/TechnicalResearch/Python/index.html","049249e5cc65262f638fbe799bf32785"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","839e4e7b32e0687b3cbf73c119305147"],["/categories/TechnicalResearch/Spider/index.html","33b48396acc3e76e7856ef442770ce72"],["/categories/TechnicalResearch/TA/index.html","6cbfe1b40390abf1449aa203deba0dd0"],["/categories/TechnicalResearch/UnitTest/Android/index.html","b9069f4559d4836eb04c2496ca9b716f"],["/categories/TechnicalResearch/UnitTest/index.html","d252e3d14c4bf23390497dbace6f56b0"],["/categories/TechnicalResearch/index.html","845764e39eaafce2ceac4a4e1fa9e7e0"],["/categories/Teleplay/index.html","1c7039f71780db409a48e5383ab67d23"],["/categories/Teleplay/亮剑/index.html","51f2706370682dbd38d823de5f4de098"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","69097f1bf42b9d5ea86ba8f95f161015"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","0a3dc936564e7a089d68d600fff6c204"],["/categories/Tool/DevelopmentTool/Unity/index.html","41d40f7a44d1e107a78f64e57031622c"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","dafa14a9ddecd0029c8fbda5259a7f34"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","53daa82492f34d7ed0829006e925cdf4"],["/categories/Tool/DevelopmentTool/index.html","48acfac3b93ca3804fe1de7d18b665dd"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","0557d67538ff4605328adb404a65dab6"],["/categories/Tool/Linux/Manjaro/Software/index.html","7e59adcb75be359551a57286f4f7c97f"],["/categories/Tool/Linux/Manjaro/index.html","10bff080449b1faa319dd4c9aa58b56f"],["/categories/Tool/Linux/index.html","7a35cb53531af1af20a3e87589c87790"],["/categories/Tool/Music/index.html","128c7b060d344e4d3ade85c30b7fd272"],["/categories/Tool/Windows/Software/UltraISO/index.html","8b4726c3150d355568a645f3d6a5ebfb"],["/categories/Tool/Windows/Software/VMware/index.html","5c9e3eb507d5c9b328fc2c2aa9f2faed"],["/categories/Tool/Windows/Software/index.html","b124df74eba8cc16b24cbbe9ad491d9b"],["/categories/Tool/Windows/index.html","03e4d289c7c3d4c2577963b1b490bfa4"],["/categories/Tool/index.html","510c17b6e6802ff522d7044192e6b0c1"],["/categories/Windows/Software/Office2019/index.html","c8d3c7656f830bfd9e9f5ad3636f1caf"],["/categories/Windows/Software/index.html","7c3f1a2f700d6ebc140859529fbfd0cd"],["/categories/Windows/index.html","4bc592acf36090c01fbedb49353f9573"],["/categories/index.html","66e1138c94ce6310d416edbbc999dcc2"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2529cd231a1cfc670559ba5068a5fbe5"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","27d27ed4595cd408c68af704d05099b8"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","8eb00b44bad3fe0dc6ea675f9fa70450"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","e6787793491ba115af8355c0a3c91f7c"],["/movie/index.html","ed8b649e921e3d03f401f3d2626b9200"],["/music/index.html","0a92484e534913f420f3ec6e5d59c0d5"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","07e56aa2d0af264d6058354f87c82bbf"],["/page/3/index.html","e692f20c10f1d50821b36f526c130b20"],["/page/4/index.html","b290b506a0f91ef22415be52514c227c"],["/page/5/index.html","ecbe762904a2607e92fc07804df0ebee"],["/page/6/index.html","239debdf5042b605f69ab3ffcde6257a"],["/page/7/index.html","cddf5d586a3fbabee8bc7bb0d3d84e23"],["/page/8/index.html","c33b16a4f2113490a35cff5d4b78e81c"],["/page/9/index.html","e1f60274094718908a66e414f3d3c0d4"],["/tags/Android/index.html","46be5deb61142d1e05f66cfc6bfd3530"],["/tags/AndroidStudio/index.html","490e8f413b9d79d1973011c0c17bf1d5"],["/tags/Anime/index.html","0b8bdb541a673f53365d6b041943e21f"],["/tags/Base64/index.html","dcbf357881ded27bad36954c1568ddd3"],["/tags/CDN/index.html","bef30d045915abfe2c0b84ac52f786fd"],["/tags/CSGO/index.html","b2e0cbf16863e425df59190fb2c1c450"],["/tags/Chrome/index.html","30a979736f9022105f90dd860a3adf3c"],["/tags/Chromium/index.html","f4e3e9750e63b31c407e6d80ad4706bb"],["/tags/Contributor/index.html","85f236c33b9a7b388104435ae5e9c07f"],["/tags/Daily/index.html","3de49b210795bef904d4d352a56e04e0"],["/tags/Design/index.html","98c257ab14dc8392af3de328a250fc69"],["/tags/DevelopmentTool/index.html","c0e7f714193776095be5fb5d6ae76b00"],["/tags/Emoji/index.html","0b3ef91a1a058070ed42372bd139b133"],["/tags/GFM/index.html","41f43e703d29079eab76fdd4eb21ccdf"],["/tags/Game/index.html","c21c659c31cf285e484a3061a0a8ba9b"],["/tags/Git/index.html","5d295d7124f795ec84706e1df5949526"],["/tags/GitHub/index.html","b09da2a87421b2494855cb4930ebed24"],["/tags/Google/index.html","5d35e9d5245a52dcde283131282c150e"],["/tags/Guitar/index.html","f81184138afddbe822991a0c1ca3ee1e"],["/tags/HardDisk/index.html","438f3491f609b88977b652049b2d6029"],["/tags/Hexo/index.html","256b03313da57f24fd23361fc9daf65c"],["/tags/Hobbies/index.html","c9ba806f8ea834d7bba863a83004c44d"],["/tags/HongKongMovie/index.html","9507e838563896361e8f387efc4d3af3"],["/tags/Html/index.html","746a51655ccb3ae3a787cdf86b441400"],["/tags/Java/index.html","d935039a5082f40e495d8518295543eb"],["/tags/JavaScript/index.html","d2001f1df16364a41cdd134868d099dd"],["/tags/Linux/index.html","6f7e0eb379c9981f782e0bd73dea186b"],["/tags/Manjaro/index.html","bf0ae0db4d01c7f7b4cc8dd30eed41fb"],["/tags/Markdown/index.html","bb5804e5cd30a61cbc8e7f01a16d15c9"],["/tags/Math/index.html","6c9e395cf01c3ca1214985853a9031c4"],["/tags/MathJax/index.html","c4172173cfd8ab45f7d3530ed2868be5"],["/tags/Memorizing/index.html","b788a80d100230855976075dc25ea0ea"],["/tags/Movie/index.html","05f8dc4981a1d284bf670d35cecace6c"],["/tags/Music/index.html","8030d705c45e2d67fe2a2c0526922e63"],["/tags/OperationSystem/index.html","f2e3c9da8667b74e54c0af5c5a017753"],["/tags/Origin/index.html","0076c0372cc2cf1140d99b6ddfd4fedf"],["/tags/PersonalDiary/index.html","b9e381c1046279bbe58bba46d55a7f73"],["/tags/PersonalPoetry/index.html","ef58adc29fc0e8423f9b149516e3e803"],["/tags/Photography/index.html","4456203e9eed4bd64c992414a754dd35"],["/tags/Port/index.html","216b5263e4d8a07374466bd57d1f6196"],["/tags/PseudoCode/index.html","658a3750648aeffaa88a6b300eca5310"],["/tags/Pycharm/index.html","644ee3466e1684551688c3b62417ba7d"],["/tags/Python/index.html","f153ababeb998c212852d45d626083ff"],["/tags/ReactiveProgramming/index.html","28db2a96f74574511af0512a58ed81cd"],["/tags/RegularExpression/index.html","d860f0ef38532d834b9f917f53e03e33"],["/tags/Research/index.html","7b1f6b2ecf5d7a7974af8cd9434a4be1"],["/tags/RxTool/index.html","e4e7d0d90f698b13c69a58ffc09b8d35"],["/tags/Software/index.html","9c3d22d64f4314fae75809541abfb35f"],["/tags/Spider/index.html","9920193dfc93f8196d0d356efcddaad5"],["/tags/Steam/index.html","b92807f0936142b2e3a5c2d7e3c7da9c"],["/tags/SteamOS/index.html","0af3499f20141f5c026af5f4399bb629"],["/tags/TA/index.html","ad5b56fa44e78d15af10ac0c4c241a6d"],["/tags/Teleplay/index.html","c7c79a4969362be8213ef519899f1b2d"],["/tags/Thunderbird/index.html","bbc7a2bb448f221fca1c1b39bf17063a"],["/tags/Tool/index.html","91328cc1d2baf2078d153a7996fa6b01"],["/tags/UI-Design/index.html","5a130248a1d3c10d9cc3ef801d5f48d9"],["/tags/UltraISO/index.html","f029ef5dcfa3161f7958b7736a64f507"],["/tags/UnitTest/index.html","39336446c9e789c606e27df862f7fe30"],["/tags/Unity/index.html","ea66ebea6d7968a598c6353b30783d28"],["/tags/VMware/index.html","eba7f8088507c7d6fa3132d3589a5c03"],["/tags/VisualStudio/index.html","964785ceb5eb096f2d711e2c151c6709"],["/tags/VisualStudioCode/index.html","8b0e75433e6807ac18e362ee39406eea"],["/tags/Windows/index.html","d22907f9731b7c8d3f5f5c1cb47d1e0a"],["/tags/index.html","772466e2361b2333f7e98efa635c1ba6"],["/tags/亮剑/index.html","34785715f215f8b9ea8f642fc5ea668d"],["/tags/仙剑奇侠传系列/index.html","241b698c3c34003f78a4c816e468ce6f"],["/tags/千与千寻/index.html","85ab5e359fd843003a892d0fb2464059"],["/tags/宫崎骏/index.html","e71f1209d99a17f3b099a088425a298d"],["/tags/小王子/index.html","fb4d88a67a998796cedcc888c08fb0e8"],["/tags/开心鬼系列/index.html","fb74fd85b2efaba816759eb7eaa8a6e2"],["/tags/思想政治/index.html","99cea73d1ffbf8c8ff6b2259bdd3b8e6"],["/tags/线性代数/index.html","0b64ece736f3140c761f4471fefaea05"],["/tags/英语/index.html","ab371f36d5dd92d862aa837d17ca3fb2"],["/tags/软件工程/index.html","b3eae425467f74dcd3fa56393828421f"],["/tags/高等数学/index.html","e20205659facefbc9c21147d29b9a04e"]];
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




