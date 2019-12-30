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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b93bd98728678f9224ad81dfdf75b8d1"],["/Anime/小王子电影的共鸣/index.html","a90e37a02de4dfd7c6e2677c1b672b89"],["/Daily/Memorandum/index.html","a41a04aa67720765755e9b61951d6122"],["/Daily/生活小常识/index.html","09c8c350bb5cf6e58ca1f0005e018269"],["/Daily/网络用语/index.html","455ef9d5713009139b474f3294933008"],["/Design/设计用户界面的注意事项/index.html","9271c12b34eba9db909ae2a48700cb8d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","e3141ff8291624b979ea308c7aa2ba93"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","0acebe2b8c1531f09753eadbf85c920f"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","f7ba98224b5a94b2f01cad12cc3068f0"],["/Game/GamePlatform/Steam/Steam库共享/index.html","e681fdccd536e0173411b407dfeb326a"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","0dbd9428f6924bb549852a3c55e512ff"],["/Game/如何独立开发一款游戏/index.html","b5df7800c3970a3761c5eb8343bf2b10"],["/Google/Chrome/Chrome上网助手/index.html","e28836b25c3a198f6d632bfdf4951c93"],["/Google/Chrome/Chrome使用技巧/index.html","5d63c2284d9f2bcfcab805a3e588a77d"],["/Google/Chrome/Chrome插件/index.html","15de7b79dace2f12f79738d45f2622b0"],["/Google/Chrome/Chromium/Chromium/index.html","a400de7a90a9fcea301c8fc8ea0be1a0"],["/Google/Google搜索技巧/index.html","545815b43b805acf47d0ee987dc7cf85"],["/HardDisk/硬盘分区结构/index.html","93bd695f7a455b42f8ec215f2eb1bb6a"],["/Hobbies/Guitar/吉他入门/index.html","aed5d7ec0086e7c79849af20e53184fa"],["/Hobbies/PersonalDiary/芦江曲/index.html","f21233f51e2a368543b011bef81def1a"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","1826f31b366e9761aecfdc0e3707bf59"],["/Hobbies/Photography/摄影入门手册/index.html","89e883ab0d1e813e85c706ed9692db8a"],["/Interview/2020年字节跳动面试题/index.html","02895d775f7a2071e3cdd8d7832287ee"],["/Movie/HongKongMovie/开心鬼系列/index.html","f5f40dfb6dff09a08327e25255b12f3f"],["/OperationSystem/Linux/Linux分区管理工具/index.html","dc25494eee64a49ee1679ce573fcd0b0"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","bdaf503613f23090438cba5165a0fd34"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","9efbe2d5be7b6911061f9601e139ed3f"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","541611c19af84a328f5d22c27919a756"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aff9ccbfcdeee8cf148a4a5fd46af1e9"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","5c9786ae265bdf123e27c4c5363fdafc"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c54c0a9a29321dd36ea1270cc9064da9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","a814eec9d36b051bd0ec504483e9daec"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","3f831ef3c356fba1dba1dab9a9a35207"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","004b9877dddc1d136fb1075fcc301e16"],["/Research/Math/线性代数/线性代数公式/index.html","f643cfa104d9488de780b37126ed75f4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","64a4fd732f65bc255bb118bbd2673c1b"],["/Research/Math/高等数学/高等数学知识点/index.html","cf34b1cfc55eb0e2d22d132522cd6440"],["/Research/Memorizing/费曼技巧/index.html","9a208f8e3528fc2d878f3dd740f5ffb4"],["/Research/思想政治/考研思想政治理论知识/index.html","2209961c8e1cb191f42d2469044a880a"],["/Research/英语/考研英语作文/index.html","f53513f68e27047be588cee3ce2651d0"],["/Research/英语/考研英语词根/index.html","74154e91440d567ecc2d780530c7e57e"],["/Research/软件工程/PseudoCode/伪代码/index.html","8b4b36b553b52b4e61ebcb5ad8b145c3"],["/Research/软件工程/中南大学软件工程考研题型/index.html","708460abf6efaa21a23d846eb835cadb"],["/Research/软件工程/软件工程基础知识/index.html","65ac58763b4b4ea5e79a97b8933856fd"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","b123c14588b68e90f03d91abe24e0890"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","060cc9314c14f2979f88eb5e1661b244"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c40c2fe319414d4ebe0543ae31e6ec2a"],["/TechnicalResearch/Base64加密原理/index.html","c97e6d1cd4308a83812764fc0d25f648"],["/TechnicalResearch/CDN/index.html","94c2ef2541839bff8eabe89784915189"],["/TechnicalResearch/Git/Git/index.html","fc23b54df9686efbf8c72a4468240f4d"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","042cedbffd729025a09b93aa0ca11cb3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ce9b06b0664a6272fc70d79b7a9dd2d9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","8f745327ed00826ecd2668cc599e0fa8"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","a8bd216eb710f6320ee6c55206bac9d2"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","24a3d17d86d9ba9f705b25a4055fe88f"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","9a011cdc145192ac29c5ff226b6c2ec7"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","93723c3a5c884bcb49d9c0b1cc9c4999"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","06cb3183cdf34e53c128704485bdda0d"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","9e5c8b702964abcd2cde40301a51d685"],["/TechnicalResearch/Java/Java基础快速入门/index.html","b6c9c774efa5c782efe36aba19b58bd2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","5c688cc3532eedc0edfa3733dbc62f37"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","9cf9fe50b21917943e57e4116d9dee9e"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0e60d9a50178b94ea4e191a5f926d01e"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","24b5c03324cac874f598a1450226c080"],["/TechnicalResearch/Python/PythonExercise/index.html","7ad69aab1d43f958c8452e80caedcaad"],["/TechnicalResearch/Python/Python问题归纳/index.html","a22f96f6b0b5d030cc76c21f86b27668"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","ff7b57125b5397962bad302b02c020fd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","28355ca46f6927d785e2aab0235b7b5b"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","0545f2357b934b082e3c9ad57d6bffc6"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","abcb6d67dcf3dc640142c1cd53d1f89d"],["/TechnicalResearch/服务器常用端口/index.html","cc9f6893d892882546e96d2e9cb656d1"],["/TechnicalResearch/正则表达式/index.html","ec8b903e02d72beebaf3b50249aeca88"],["/Teleplay/亮剑/晋西北铁三角/index.html","123654baa12845d90931801f5985e340"],["/Teleplay/仙剑奇侠传系列/index.html","806c2e184d658cd8c6ef5793cd8bb8b5"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","082cc3b396210bd729f1f9c91b5b53db"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","560667aa92b8bb52030c318aeef33612"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","c1b51bf4b8195550a88f98724aaf33d7"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","8616259422d2a7fb8fd42aadec68fbb6"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","e8a77eaaa26030136a564210533aba6d"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","391b7787f44b11490f3061dd5c5b157c"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","87917ac0f9a19947fa6b70c680247699"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","6fe3035a51fa6252b1bd44df5782ff76"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","4b291c11ee91dad23646801dc563d909"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","b4934ace7dfc2dd909dc1cd1f1397832"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","f6f85ca5a857d2490d6a40452ef6c998"],["/Tool/Music/网易云音乐/index.html","4532c9f55ac7e44fa8bc4f36da849875"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","ad5e0e7b3b4c3fd7ba183b2c1c92864a"],["/Tool/Windows/Software/VMware/VMware/index.html","3fa15c9123c0603468053519602adff3"],["/Tool/百宝袋/index.html","f90f7d82e67e378a6af06f0e7c844112"],["/Windows/Software/Office2019/Office2019激活/index.html","3a8da1b12241f87eafc21d8b714070a1"],["/about/index.html","fece06137f8d5f52547f89511000180b"],["/archives/2013/10/index.html","ad14f2eae61740de0d243c3290938911"],["/archives/2013/index.html","44313c63fb31499f5b80a0f3bea6308f"],["/archives/2016/09/index.html","956a2dbedacd0130a7da0042939cf8be"],["/archives/2016/10/index.html","e7ee84dd746da25b346317d9e9e8e8ba"],["/archives/2016/11/index.html","f19327431d243388604e390788525ab5"],["/archives/2016/12/index.html","22ba8ee0ffe4729e36bae7db043358df"],["/archives/2016/index.html","21d3e7eab53ece8957655ec03039028c"],["/archives/2017/03/index.html","6e022891db76a44ead48390d55a1c60e"],["/archives/2017/06/index.html","890cc12ef8d87c6db2fda8b67656b8ec"],["/archives/2017/07/index.html","4edab1c7c919cdaff7a28e306b1d3915"],["/archives/2017/09/index.html","3b728d53075ac6fde52d9db79f7f7bf8"],["/archives/2017/10/index.html","55f6d54807b502eb0d276b9e11d2b56a"],["/archives/2017/11/index.html","3b3174ab2fd9f878bde41ea4a24ec46d"],["/archives/2017/12/index.html","2482642711fbde73e25cef53a6e5660d"],["/archives/2017/index.html","5372e710775f1bfd6d090bec79035488"],["/archives/2018/04/index.html","952504c1cae375c55bff4198b47f416c"],["/archives/2018/08/index.html","dad1f2b26d7e4a9f8c1cad8b599ddd8c"],["/archives/2018/09/index.html","67010fc93827241f9dd9c1ccc49ac8ca"],["/archives/2018/10/index.html","c557291c9f750b406a9aa63f7d6972d7"],["/archives/2018/11/index.html","506d3de096ce18a57e104c4e29749a80"],["/archives/2018/12/index.html","728c150b46afae47d84b89f342edc760"],["/archives/2018/index.html","7389a7ee7e704fa4b0577157c7a163e2"],["/archives/2019/01/index.html","b75773221f4a63009b42de00a3eec506"],["/archives/2019/02/index.html","426040ae7fade6856621082ea7e9c649"],["/archives/2019/03/index.html","d6894dfa709c540b45df105353a81344"],["/archives/2019/04/index.html","e91696661a49c4febf51df1ce9d1db3c"],["/archives/2019/07/index.html","594ead02c169e904676ab2f49b509dc0"],["/archives/2019/08/index.html","79416db56320bec77a7717fecfc91a2d"],["/archives/2019/09/index.html","eabb072bcebf9a89093d4b271de31042"],["/archives/2019/10/index.html","3dcccbd82afd410ce1c3c2cc55775c49"],["/archives/2019/11/index.html","ed9a2f6ba739db6843cfc842f8a37507"],["/archives/2019/12/index.html","5f25e4f07e544dc2e6d1e7ffaa84f423"],["/archives/2019/index.html","df3a8311610c1aebc936f1b1ccd2ccd1"],["/archives/2019/page/2/index.html","f6859f521436596db90038c1b9ff499b"],["/archives/2019/page/3/index.html","373a51b26351f7637413b1136489c232"],["/archives/index.html","4c8ed3fb22cdf0415d0b67dbc792ae66"],["/archives/page/2/index.html","aa35e14700e47595a2ee06505e408149"],["/archives/page/3/index.html","b1d33c8c3a73b6c5636c86f5f6c52c72"],["/archives/page/4/index.html","1315a1352ec3d115d3b2455c04dfd74f"],["/archives/page/5/index.html","503efcb2453bae77f8aa6dd461292a2d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","0b66a3d8692c248ff252e73e9f96a471"],["/categories/Anime/index.html","a217190f75a40ef75913e78edb36cecc"],["/categories/Anime/宫崎骏/index.html","cd814dc187838167a4dfff30df3bb5f5"],["/categories/Daily/index.html","aed5d8a3dabd2f86c2ab9f43a8be34d0"],["/categories/Design/index.html","45f9f042b290d93814f0673667363433"],["/categories/Game/GamePlatform/Origin/index.html","2db8db5b6a3008c93100b8ec2adc00fa"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","e66241e6380f89dc5766955c28883e9c"],["/categories/Game/GamePlatform/Steam/index.html","0702115677533eb40d31f367c52fe288"],["/categories/Game/GamePlatform/index.html","c2e1e6895a2308179f405e73ffff2745"],["/categories/Game/index.html","7384de01c6fae5e6c5112013b0dc0b1c"],["/categories/Google/Chrome/Chromium/index.html","c4c0278246c7f450d0f7bca9c427b130"],["/categories/Google/Chrome/index.html","899a1087d9cbfa033bae935210afca67"],["/categories/Google/index.html","f9e05fadc6e60646ae500d1738e27d87"],["/categories/HardDisk/index.html","b7cb4534c73cfe5c12eb673349335e8c"],["/categories/Hobbies/Guitar/index.html","da2e0800fd750ffb1098685cde3422cb"],["/categories/Hobbies/PersonalDiary/index.html","0d2bec79216fa84936a5e66017a86997"],["/categories/Hobbies/PersonalPoetry/index.html","e4381b407eeac81401ba138cfd730015"],["/categories/Hobbies/Photography/index.html","7bba8ee8f478349a53c4cb6c4903bc6a"],["/categories/Hobbies/index.html","ac7a5c08eaf68751465a2075abb7f096"],["/categories/Interview/index.html","05bdfe8653956b99af09d8e4f3a22a1e"],["/categories/Movie/HongKongMovie/index.html","2ea160c8681b40e4362cb33878137eac"],["/categories/Movie/index.html","0df27089099164cd9d66b5e5f0c999cf"],["/categories/OperationSystem/Linux/Manjaro/index.html","01b91bf84d813770ae6adc8893de3d31"],["/categories/OperationSystem/Linux/SteamOS/index.html","9005b69dcdc0e8e6282415e7fd5a9627"],["/categories/OperationSystem/Linux/index.html","087c5c4e8e633c1911493056f36d9f97"],["/categories/OperationSystem/Windows/Software/index.html","b3c0aa307bb843125a40a85f673d39ba"],["/categories/OperationSystem/Windows/index.html","2e6a190f29995fbe72825b0ce8359497"],["/categories/OperationSystem/index.html","8c2b95e740730c5a642883b0624478fa"],["/categories/Research/Math/MathJax/index.html","9dd6a5cfee30875325fbe8583f34556f"],["/categories/Research/Math/index.html","04ad60cd4e1696adf3916c1a49bd3e5a"],["/categories/Research/Math/线性代数/index.html","2c0f6be925c7ccba4535836ac2b00d7d"],["/categories/Research/Math/高等数学/index.html","b4d0bbb09850e5ed4c2eb88e43669e6f"],["/categories/Research/Memorizing/index.html","d1678ce3ee16df6efe9fa4e8b5874d3f"],["/categories/Research/index.html","1240a82562f388953f0cfb663828d2c2"],["/categories/Research/思想政治/index.html","6a6d39300b5e273cb5768d2b8e851da5"],["/categories/Research/英语/index.html","2c8f2475b1e2ec575946cee4c8333d22"],["/categories/Research/软件工程/PseudoCode/index.html","58da07fd445cea6da48b16288754a76f"],["/categories/Research/软件工程/index.html","7e0c8be479e4867ed3156c76fe1f7eab"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","154eaf61f6cd3eb857a7f1bd1d2cc24e"],["/categories/TechnicalResearch/Android/RxTool/index.html","64c8f10f889f324843c4bbbd43783dcb"],["/categories/TechnicalResearch/Android/index.html","e96164b1348de2d129d82ad8f08d7303"],["/categories/TechnicalResearch/Git/index.html","fa9db2be0f48075f9aed164423fb91bd"],["/categories/TechnicalResearch/GitHub/index.html","dcfb28f33d577dcd0a14e4fa45d63061"],["/categories/TechnicalResearch/Hexo/index.html","764d27aaaf8576becc33e192783d8fe3"],["/categories/TechnicalResearch/Html/index.html","8fcdde221594ecf2e2a62228490104a1"],["/categories/TechnicalResearch/Java/index.html","371655ccd9f77e6e80cfb81ac0ba21f6"],["/categories/TechnicalResearch/JavaScript/index.html","d8939300e1104590360502ce050cf92f"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","8f11eaa33f0b3c89e51016cca2bdfe01"],["/categories/TechnicalResearch/Markdown/GFM/index.html","1815dd957d3d35df7f817bb03e703e44"],["/categories/TechnicalResearch/Markdown/index.html","07f75f0a591802e01ba9944e658b978d"],["/categories/TechnicalResearch/Python/index.html","4f0da992e4094c8399a1885454608fdc"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","961cc7848fba49b7ecb85fb33879562e"],["/categories/TechnicalResearch/Spider/index.html","e2bf76e539b6504a7b820994d841172a"],["/categories/TechnicalResearch/TA/index.html","dc618a695408f9a3f15ac44c01dcb379"],["/categories/TechnicalResearch/UnitTest/Android/index.html","ab22e27a4c47b7fc96ca5a8c9a5bdd9f"],["/categories/TechnicalResearch/UnitTest/index.html","c38ff6b6d4c3286c1a8ae1cb1d6be67c"],["/categories/TechnicalResearch/index.html","ba4d06759ae9556facd8cd936fbfc6c0"],["/categories/Teleplay/index.html","4078b94af47b9bb23b3127b5fb6ed1cb"],["/categories/Teleplay/亮剑/index.html","7e3c5ac4d6bd518ddfb0a06c5d61ad70"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","ee15400cafe366d2c23675395ee39385"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","93f4ebb2eded232e17cd38589d4f2d53"],["/categories/Tool/DevelopmentTool/Unity/index.html","af1f55c1e9f19dc673bba979fc629bdd"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","8c4880d6b29d66f6494154e408831fc5"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","93c008fe3592a3daf5985b2f4cc4ccf1"],["/categories/Tool/DevelopmentTool/index.html","2a8180e1a5c5148a7be2ef8ffefb8e37"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","aaaaa3deb471adba71d44ee47c5a6caf"],["/categories/Tool/Linux/Manjaro/Software/index.html","63c75c5939d128de26b167be616858c8"],["/categories/Tool/Linux/Manjaro/index.html","7e4b9ae828b4df6abaf938b6bcc152ff"],["/categories/Tool/Linux/index.html","6960bf7b059d51671d2bfef3c2de8c84"],["/categories/Tool/Music/index.html","30d4c7d1cd0272346a2c1e17a232d974"],["/categories/Tool/Windows/Software/UltraISO/index.html","bf45b3bcc2520b333b8e512930877a98"],["/categories/Tool/Windows/Software/VMware/index.html","e2e6dbbc257fcf7eed14f440e302c4f5"],["/categories/Tool/Windows/Software/index.html","47c321820e3dc19dea7190a094a3ffdf"],["/categories/Tool/Windows/index.html","5cfd70b7dcabaf7f7a4771e984fc9266"],["/categories/Tool/index.html","2c8faf3b52b5308cbb3c06a277108348"],["/categories/Windows/Software/Office2019/index.html","f99c8bb959898a19c8a7cac4a67ee52d"],["/categories/Windows/Software/index.html","6331afd8db492a3c4f9d88fb7ecdd6b2"],["/categories/Windows/index.html","1a1eedd3d73f82e5bf466f473ff24319"],["/categories/index.html","1423748135a88503017ac74f7194f20c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","66041e255dfdf06ab08d22c5865bee34"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","b779174d9d37cded8bec78e4a2dd63ab"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","62653661a80052b1ed52f3d23a92556b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","c940fb7371994bc92841cc4b9fe75271"],["/movie/index.html","b20be9c5bc049c74ae7b5e5b711694a8"],["/music/index.html","da381bc9b4fea019cbf1b074957bca88"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","67e6055ff481b86ba8fd1ef1dae292d3"],["/page/3/index.html","ad5744d35ba1f3bfe44884b9b6e7a11c"],["/page/4/index.html","684ad4396f63c8041a31e9fb10542e51"],["/page/5/index.html","0a07a15df30fb5daf52f4e3c8ecc71bc"],["/page/6/index.html","e4931e3316eb9503151c0e9944291d1f"],["/page/7/index.html","3461d81af7310667a1fe8e15d4447442"],["/page/8/index.html","646ffd49c1399dd1c6362855d36fe656"],["/page/9/index.html","1816c5ffe503ab85e27a2d56b32b6810"],["/tags/Android/index.html","cb274458164b981bab73274aeac5631d"],["/tags/AndroidStudio/index.html","6e5cf5b73fceff56ff3e5191f1071ea6"],["/tags/Anime/index.html","a13c147ec38411dd1a36fefdbbd3176f"],["/tags/Base64/index.html","cbd7c2ab703d9cb623840bc442fe8c15"],["/tags/CDN/index.html","9cceb8518622a049229a5d5c5c74fa97"],["/tags/CSGO/index.html","341a274b5e3cccc12ee04aee90839674"],["/tags/Chrome/index.html","00a4434c52ccdb7cf4d0e225d8f42c20"],["/tags/Chromium/index.html","2b07350e2e920e9b93d6d42bbabe4b3c"],["/tags/Contributor/index.html","66ca610efe77028ae04e62e4d17bb328"],["/tags/Daily/index.html","1934229f801791309225f18ca73fd048"],["/tags/Design/index.html","5e5ef3ddd5afa17950a1092075335b39"],["/tags/DevelopmentTool/index.html","d0e6d03a27d3abcde81b5b378229ada1"],["/tags/Emoji/index.html","db980f512c3cd2101c30e421c8bb5ee4"],["/tags/GFM/index.html","1cecb38d28d39788cf5f9a1a35c57672"],["/tags/Game/index.html","d50151a1005f9cecc2facaf4c636e66c"],["/tags/Git/index.html","99714508099c41c0137b2c8354011861"],["/tags/GitHub/index.html","97938d4b800fc924c65e5caf89903f51"],["/tags/Google/index.html","76a9e51772ada911cc46116ccfe391e9"],["/tags/Guitar/index.html","3933a51b00bb9fd1db79baba46395c3c"],["/tags/HardDisk/index.html","c661b4f6c67188d5652ef332876f2812"],["/tags/Hexo/index.html","d3b1c2203a31f67a7159aee54ed9c1e9"],["/tags/Hobbies/index.html","1299aca421ad92a24c79b05ea0fcfb19"],["/tags/HongKongMovie/index.html","16761928c82f08e237451259a50e4834"],["/tags/Html/index.html","8c40744d166babe3d1fe977e365fd42e"],["/tags/Java/index.html","803d799ca1d792bd2cfb1c30ac31c459"],["/tags/JavaScript/index.html","47c9b96a4b6bc66886c21b11457ef859"],["/tags/Linux/index.html","4bf842039ed2b427d48cfdd329c6f6b3"],["/tags/Manjaro/index.html","b826c0304d0c459b104b3d12e291b9a0"],["/tags/Markdown/index.html","7f5abb0231964cfa413c7df18901e060"],["/tags/Math/index.html","35ea0d6b504f6ab39149fff77f785f87"],["/tags/MathJax/index.html","30579f2eeb6d48a62127ced40709922a"],["/tags/Memorizing/index.html","60a91a277ec1d25d58d61578e8d45263"],["/tags/Movie/index.html","f3c631cc04713afdaf383ac91bf4c96f"],["/tags/Music/index.html","a781d70e703a333b77e9dda10727de19"],["/tags/OperationSystem/index.html","d6a8f16be5196bfd0e8522d8006232a5"],["/tags/Origin/index.html","48545903bd33855523256fc9e90b619b"],["/tags/PersonalDiary/index.html","fb1a8d7a0e2f3d0aca4ede4db0411597"],["/tags/PersonalPoetry/index.html","caf902485ceab3bd3641024999e6be19"],["/tags/Photography/index.html","efc3f203819a1f9836209d265196582f"],["/tags/Port/index.html","158365761f060bf35c082df4dfb99107"],["/tags/PseudoCode/index.html","304fa30e60f3d624988ccba254f5bd0d"],["/tags/Pycharm/index.html","276cb5b914503df6c42e5f792c243d2f"],["/tags/Python/index.html","99572fbe8afe387a7d6719ff5bff2d37"],["/tags/ReactiveProgramming/index.html","3bd2ab57a290eae851f4f674bc9a1381"],["/tags/RegularExpression/index.html","5069c7f3d42c7fc001d1931f96529dc7"],["/tags/Research/index.html","7ac5f55deb9399ec63ab9b6cffb1875e"],["/tags/RxTool/index.html","ec4cd6f8b0bb2e6acb23a871a80c22fd"],["/tags/Software/index.html","d8a2b12834c37bb602b0cedb239058e7"],["/tags/Spider/index.html","9c7dde02d6067b9ee5a4e4af7d878a7c"],["/tags/Steam/index.html","745cd80e82d86027155db9120f24476c"],["/tags/SteamOS/index.html","b929e723a299c1c05a9e7418ad54a6c9"],["/tags/TA/index.html","3dd5f6114eae45d20a332bcc9f3f2a81"],["/tags/Teleplay/index.html","cdf74001dd857048b4b3e54ccc78824a"],["/tags/Thunderbird/index.html","7c88e1feced93ff9c676d6f42adcc8c1"],["/tags/Tool/index.html","70d8a8c6f16c2f84575b4dbfd4f7174a"],["/tags/UI-Design/index.html","57071f892b112db49748ac4204578628"],["/tags/UltraISO/index.html","62a04fb5e806378220ef2d7c70c92a4c"],["/tags/UnitTest/index.html","74170f611ee920a9480f25deae51f4f2"],["/tags/Unity/index.html","b6a7bf38d5601baeb2054a0662bd07ce"],["/tags/VMware/index.html","e81d5addfcf97f155d601d5909aa31d9"],["/tags/VisualStudio/index.html","f04b79d780bdc2d2029ec899384f70f3"],["/tags/VisualStudioCode/index.html","4bbdfaf1b7afa4004e2c7cc735725f37"],["/tags/Windows/index.html","a0f47b08b76c6590707d579d5f5e11b1"],["/tags/index.html","efe989fae9d42b61b8c6ffb28db53849"],["/tags/亮剑/index.html","07ee373d8ed4eeb4b0c9ff5212d81556"],["/tags/仙剑奇侠传系列/index.html","fa5c4cba086c2bed0370fb63a00de29b"],["/tags/千与千寻/index.html","a1426e763982cdbb339a064c7223fe73"],["/tags/宫崎骏/index.html","d03d80ffcda33aa61a3929b45e2b36b6"],["/tags/小王子/index.html","489f9ac090e82a0ccf4f557be6aab224"],["/tags/开心鬼系列/index.html","a7d28046f832e88e50eb5edb8a3bb608"],["/tags/思想政治/index.html","690ad06100eaa19669efebc1485375bd"],["/tags/线性代数/index.html","cdd2e8db36cfdf500f56ec0e4dfd4661"],["/tags/英语/index.html","29f0c482092f7dda6f7cbf27e8270ace"],["/tags/软件工程/index.html","a8729b1156cfc763f64e21e23b01a9f5"],["/tags/高等数学/index.html","b054e220557406dd673d94760fdca8fe"]];
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




