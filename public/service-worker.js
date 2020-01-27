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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","3d95b778dca47cba50a5903c4eb85b36"],["/Computer/Alienware/Alienware更换电池/index.html","695b9f42706412905899a24bab0a1e56"],["/Daily/Hobbies/Guitar/吉他入门/index.html","03d74fb25d4cfb5191b1a1cb49a3b270"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","5fbf6846d4edbc0b263878fda8ba7deb"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","a1a4518981b49f777e71bfbc36f249dd"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","3fd1b1cc9feeacaa72a5e9d51127c1bd"],["/Daily/Memorandum/index.html","dedfa27aaf96de6cfa7cc3632aed466e"],["/Daily/个人所得税/个人所得税/index.html","966bc740d1110e2e6ddccb11a81f532d"],["/Daily/五险一金/五险一金/index.html","5bbb0c042278b2ba4d1de8a7874e1759"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","adefb40716ac92b2585b2dfe1f4e140f"],["/Daily/生活小常识/index.html","d5bca25fe59deb6d945e49ef930a0d56"],["/Daily/网络用语/index.html","7d16f742b9bcd3e6d91fdd1d26802f4d"],["/Design/设计用户界面的注意事项/index.html","a49f449222b3b59a3eaaf0c2790caec5"],["/Emoji/Emoji符号/index.html","a28a6329b3fad30b099cd3a413b01e29"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","5d3bdd959e28b58ff390efe2e8324b39"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","170821acf07de9446225ca41dafab9b0"],["/Game/GamePlatform/Steam/ARK/index.html","59c90ee66fd15cbde9ed211fa368af6b"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","5cfa65236f76e5e13da6d8f5f2790617"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","942d87cdb8b15e3d6ef656e1110659f4"],["/Game/GamePlatform/Steam/Steam库共享/index.html","ea93b4cb949c40c11ade71f9aac9704f"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","306f86fc80180d43de69267ca64b5994"],["/Game/如何独立开发一款游戏/index.html","bf8f70f03fc57decfa148cc33e24c2ac"],["/Google/Chrome/Chrome上网助手/index.html","f76e4d34fe9cb22b887db8ea8a688cc0"],["/Google/Chrome/Chrome使用技巧/index.html","3f6339efae88104a035aeb4de32700ef"],["/Google/Chrome/Chrome插件/index.html","9f3506ad6154a8a896b0999bc9d3e57a"],["/Google/Chrome/Chromium/Chromium/index.html","fac2d6f5ad823c50cc9b68fded6b9d41"],["/Google/Google搜索/Google搜索技巧/index.html","bcfa51fafe9b067aebd548b6e4d54dfa"],["/Hardware/HardDisk/硬盘分区结构/index.html","e2fcbf518666254b85b063c7816943cf"],["/Hardware/Router/路由器固件/index.html","fde48f5b714f9852897fb6ba1c225d09"],["/Interview/Python/2020年字节跳动面试题/index.html","47c83bf5d2424dd8020d770be3871a2e"],["/Movie/HongKongMovie/开心鬼系列/index.html","51387e275cdc49f12d6df1b01b31f3ca"],["/Movie/小王子/小王子电影的共鸣/index.html","0c3d4ad3b17b146b0919672703d76666"],["/Novel/盗墓笔记/盗墓笔记/index.html","34dfb26bdb550b8ee586f8ca0dff30b3"],["/OperationSystem/Linux/Linux分区管理工具/index.html","3cb4967be54d26e07097a0e5dedbb2b3"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","cd1cd198440122ad270a6717be932f27"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","47e27cc72c2f98bfad55521fab629875"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","3b3c5b333d81c54a60a8bac8bf61de86"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","145d485e0826ad58da55e577fa41ba19"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","f11824a6c6ca1b05011c56d214a35f53"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","9688dccbf1fbfef8034371777ecb6492"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","481544cb3cc6c20273231e6f23d6aa1d"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","16d1d0eefaa79943217ec614ffa79bb1"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","3c7f52d14755059a3ea8d7ce1214299a"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","539841c47a5e5a8a5e7f6e79de4c1064"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","cc412419fb7d62397dfde1242044b9cf"],["/Research/Math/线性代数/线性代数公式/index.html","152e66b13d02f0b00a99fe91a35a52b7"],["/Research/Math/线性代数/线性代数知识点总结/index.html","5f8a2d6f8f712b6b1e9ebc870e36f01d"],["/Research/Math/高等数学/高等数学知识点/index.html","ce71f9cdc94ec58272e295111d285f37"],["/Research/Memorizing/费曼技巧/index.html","fb20f63e06526bf00ced7a31931b1f25"],["/Research/思想政治/考研思想政治理论知识/index.html","5701ee7707f1d199bc056db15c24b2f4"],["/Research/数据结构/数据结构/index.html","a2b20b5b0c94471115ac02605b590331"],["/Research/英语/考研英语作文/index.html","74539a77c2a47367112a66ba40cd5dff"],["/Research/英语/考研英语词根/index.html","33c4235288158a4e23c6361ededa1af5"],["/Research/软件工程/PseudoCode/伪代码/index.html","bbcf580caed6f960207918c7d4c05896"],["/Research/软件工程/中南大学软件工程考研题型/index.html","ab001f9769533a9450146e2154331265"],["/Research/软件工程/软件工程基础知识/index.html","21e8f48e034eec5ba11f2968e27cbce0"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","6907105406875a29d46b8dad361c9648"],["/Software/Anbox/Anbox/index.html","ff14abc6cebafa4ec246b2f87a8e80d6"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","c80bf0a38859724b5292163fca3776c5"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","6ef84d745b721dd178eb67b595bf5af8"],["/Software/Office2019/Office2019激活/index.html","0e68cdbb4c22358a7c43840331b0f5cf"],["/Software/Pycharm/Pycharm激活码/index.html","e638d8ce211a5afe550fca889bb43c25"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","96cd51873a749ba0293c204accc8fbc9"],["/Software/UltraISO/UltraISO/index.html","a8b0d9d5847186bfce1fddb8edf11ce8"],["/Software/Unity/UnityHub许可证手动激活/index.html","6855f03a73f7e90f0e56645a0c521dd9"],["/Software/Unity/Unity使用技巧/index.html","485013cda9bccb01a198ae6257134aff"],["/Software/Unity/Unity动态加载Prefab/index.html","20d5df576d4c10c36659a0b91fb7276d"],["/Software/Unity/Unity的Canvas组件/index.html","5fe24409828f3a3bb0c27ec012ddb9be"],["/Software/Unity/Unity问题归纳/index.html","a6e70e80903a5e76085f4103fd218841"],["/Software/VLC/VLC使用技巧/index.html","1f68d1d9d26c5760ba9109ad8efc5986"],["/Software/VMWare/VMWare/index.html","c29f1b9487694805389c1f335dc5dd65"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","47756fbb83144252e26b26abf83647d4"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","c6182be040fef3a370d62dfd5a642420"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","457b7e5cdc46bd75eb567ec1d78cca3b"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","c2645c40dacd2f93f7316f2f939d313e"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","305f5a2cab190be555cef9896f7e0b2d"],["/Software/Windows常用软件/index.html","0aa1018df82d336cbf7a24b1d05d0c21"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","2e1a436543beb3c5fba1e6ac6a5e8e80"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","95773b6acfee8f5651a52de59762b5c5"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e0e915eb022cd7f738328d70e4372fb6"],["/TechnicalResearch/Base64加密原理/index.html","20dbfca1ec72991a822b59c35054e304"],["/TechnicalResearch/CDN/index.html","929080d50f7849490bffe93016f52c70"],["/TechnicalResearch/Git/Git/index.html","e2619f4566ef185852094fb6add887a9"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","0794c0ca33576121f3f49213c467b925"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","80b36e66262f7ba4f7300d69ede79082"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","207b917889fdfbb79eac09b33adc816c"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","c5a12637498decddd237f9e96da08a39"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","1674a532417df0c9dd235124f54b1cce"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","2cc475e8308ba39439e34c695db45f71"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","6f30a38823ce974d423c3cb54ac3f75f"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","4cb9d46352a851b2dd9343b69adef7e8"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","5555acaed329cb362ad29ac9434c44d1"],["/TechnicalResearch/Java/Java基础快速入门/index.html","38ceeea2ae79949dafc1018379eade88"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","7156c6c6b9234a618376490c1ee7ed22"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","67dd7f9a2418d190845f3f9fdc527061"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","79002ecdc1a7aa580b8dae9aa45c5d0b"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","dc3e75b4f24988d9678817fed4ea8a36"],["/TechnicalResearch/Python/PythonExercise/index.html","047739e045f97a1c465b8bd85f0b3a82"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","eb907a30630519e8742097630353e6b3"],["/TechnicalResearch/Python/Python问题归纳/index.html","737ae0c0934214795724d75384ae4c52"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","ef10abcd152fc4731fc53840973db522"],["/TechnicalResearch/Regex/正则表达式/index.html","b98de95d8d26bb15f9be69ad767dfc8e"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","ad817d5e65a19adfd730882a3b836a6e"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","45fd638fef070c95c547d8d823d3f840"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","8d19b3dea96466f13be21041672d72ea"],["/TechnicalResearch/服务器常用端口/index.html","c838d061f9359011b880ab0671353ead"],["/Teleplay/亮剑/晋西北铁三角/index.html","f53849ccac10c6ffa7d9de2e8b998357"],["/Teleplay/仙剑奇侠传系列/index.html","fa443ef8ad7c620d85ec01a45a2a475b"],["/Tool/Music/网易云音乐/index.html","c9e014dedc37833618d4d11f83cab997"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","56cf76bcb5f93f61d64b32f8b8b84b9d"],["/Tool/百宝袋/index.html","4f942c414b30e048e04f9443e454694b"],["/about/index.html","0e428d07805ed0b04ddad9e0de13faeb"],["/archives/2013/10/index.html","a941a4f89546e2b0fc2407bf5a1ba9ae"],["/archives/2013/index.html","1a5a085db568bfa4141a95c3953c0ae1"],["/archives/2016/09/index.html","bd33fc8b03787a976c7a60efe7bd5e94"],["/archives/2016/10/index.html","63bd8a55838cec7ff6085d1f52577831"],["/archives/2016/11/index.html","c286f8dda158ae03405781c011a56fd9"],["/archives/2016/12/index.html","c4ad28a6a41508e8545c9b628123eece"],["/archives/2016/index.html","0d1ffef3473720a47b23466ac57fae8c"],["/archives/2017/03/index.html","8256b214afc22c2e0b022eee367c9c0a"],["/archives/2017/06/index.html","87183da53bba0b84fdada9a0b047b1f2"],["/archives/2017/07/index.html","14f1b9cf7bb4b129a54c4216fe986a41"],["/archives/2017/09/index.html","2029540ff8c8e2670677c0d275bcdc80"],["/archives/2017/10/index.html","71d849b413bd5ec30bbcdaf16085591b"],["/archives/2017/11/index.html","12f1407cdc0d19c8dee739708f8ce3e4"],["/archives/2017/12/index.html","fcc7235df4f6f0f6354cb4ff6ff87e90"],["/archives/2017/index.html","42e47421099fded52a71188a0a5aca82"],["/archives/2018/04/index.html","438316b51f1eb1d65494e19a83ddeb65"],["/archives/2018/08/index.html","a431c7ab2740214bbcfe9b26ec214b91"],["/archives/2018/09/index.html","541021c923cf8f0a28cb8d1a6d42963c"],["/archives/2018/10/index.html","23f60abf6baf7adc802eebf7524eb3b6"],["/archives/2018/11/index.html","0356e862498b0675db02ea3762b921bd"],["/archives/2018/12/index.html","37dad31a2d3506d1352701c52b0bdd45"],["/archives/2018/index.html","4581b2762257d06e6e8f00f909424a50"],["/archives/2018/page/2/index.html","3182f1d3efb0255b06d2fedcac62c133"],["/archives/2019/01/index.html","ed31622f0263ca94897752eedab2a7d7"],["/archives/2019/02/index.html","090b6e72e1dbbdc8efb27e978767d54c"],["/archives/2019/03/index.html","5f090cb1d070f8b99cb6575717221e16"],["/archives/2019/04/index.html","e3c680731aac03f57e2130d1a303b0c0"],["/archives/2019/07/index.html","ba2624af7675ed2e000dab87b81fa2a3"],["/archives/2019/08/index.html","6ea36574c21b7f1bd66d02a258b1a676"],["/archives/2019/09/index.html","74570360a9f170bb8af9139b8d2edbf1"],["/archives/2019/10/index.html","38cab54428a94e556da0272d040f0134"],["/archives/2019/11/index.html","6e01cc67411b960e23488430c2c80004"],["/archives/2019/12/index.html","bd4729c77d56b3789ed6f8b569c0bcc8"],["/archives/2019/index.html","8cfdf2d213434dda877f9ccfda31f289"],["/archives/2019/page/2/index.html","467da5c2d03eecbf130f7f77db513bab"],["/archives/2019/page/3/index.html","270f1458e7be735ef7effbb7497ccaa9"],["/archives/2020/01/index.html","b4608caa8f01e2718c72adb56b37fe61"],["/archives/2020/index.html","89c0a289040b0023240448946e770629"],["/archives/index.html","76cd85d89f300fc2fc553a3d4106c6e8"],["/archives/page/2/index.html","a6695bb2ecdd9ab02a05814ba4ed2df6"],["/archives/page/3/index.html","3239c84464ba8b352f44f852eeddf936"],["/archives/page/4/index.html","f712410a6f53663af17d6208080cd1dd"],["/archives/page/5/index.html","121e7f885029a2b9d3e05081578e355e"],["/archives/page/6/index.html","e242f392c185dda14f9610b33f1341fd"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","04487ec11483b81b5fd424edac6d52d9"],["/categories/Anime/index.html","9e40cb1e7e45df826d2c54db1d767ff4"],["/categories/Anime/宫崎骏/index.html","5a13bdf0132b2ef0badf8138c4528923"],["/categories/Computer/Alienware/index.html","a9c4bab422f3c80ab86508e82b3f747d"],["/categories/Computer/index.html","b6c75fa3874e53002e4a11905da8832e"],["/categories/Daily/Hobbies/Guitar/index.html","3017810cba1ef52be58bf09971064efc"],["/categories/Daily/Hobbies/PersonalDiary/index.html","e643feb9cb2c15d897d17021a4fe57b9"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","d0b5a370cc76d89d6b011fc542903859"],["/categories/Daily/Hobbies/Photography/index.html","a6b22c61e5c439c4fd76cdbbed80210a"],["/categories/Daily/Hobbies/index.html","8ec09b61758174203bb07df1219333c5"],["/categories/Daily/index.html","751a8d15e9881fbdf2ca851b1540d1f9"],["/categories/Daily/个人所得税/index.html","8ca76fc6f1cd8f88db40fbf40f92bb9d"],["/categories/Daily/五险一金/index.html","bcb11bbfcaef7167a59d4e4a7c0d8eb8"],["/categories/Daily/新型冠状病毒肺炎/index.html","1477568d553c14a5eefe7b9e72f140aa"],["/categories/Design/index.html","90dcddc8e50c39573567f256427c289e"],["/categories/Emoji/index.html","b18ef5507f07aa78c80f5f044118bfdf"],["/categories/Game/GamePlatform/Lutris/index.html","733293b80fbcd6fff2a6e53b2cf0bf88"],["/categories/Game/GamePlatform/Origin/index.html","5388b60c44fa83da303a97dd15e108af"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","39798bc0c0cfde8b056a6883ffcb2b46"],["/categories/Game/GamePlatform/Steam/index.html","318ba73353e9677020a7c77498b56b38"],["/categories/Game/GamePlatform/index.html","bf4c72fc45cea39b01f0414a0a6d25ab"],["/categories/Game/index.html","5631f8dee8d29ffcce7de3dd0d299ffc"],["/categories/Google/Chrome/Chromium/index.html","c3b07bc517eb5d2b479826ea97ec36da"],["/categories/Google/Chrome/index.html","5da7ad6dc380fdaeab26283b0ed077ae"],["/categories/Google/Google搜索/index.html","1218a554a2df32795bc21bf44fba647a"],["/categories/Google/index.html","16005ae5c8a97ad4843569bf590dec7d"],["/categories/Hardware/HardDisk/index.html","ab3f1d3c3aa5ae1b3a2109d097217cbc"],["/categories/Hardware/Router/index.html","63ae3760001836e6634d6f9bbd735096"],["/categories/Hardware/index.html","61142399af9f055a802e161bdf60042b"],["/categories/Interview/Python/index.html","1ea29d91b85bda8a1000e75cc1d24a09"],["/categories/Interview/index.html","ced93e2e1a689d568765ad81132c23bf"],["/categories/Movie/HongKongMovie/index.html","94a3dbcaa8ae63ddbab8e686b61f3a8f"],["/categories/Movie/index.html","e5b285d6301a1bd01b2b66294a0ce088"],["/categories/Movie/小王子/index.html","b6a32cd54f38a92e869534abd420363f"],["/categories/Novel/index.html","77e5f01825b7da95bfbd05bd04b5b72b"],["/categories/Novel/盗墓笔记/index.html","80fa8a783ebe9d028a9ae425eba9ea60"],["/categories/OperationSystem/Linux/Manjaro/index.html","b4ebb52b23119a4a6b98fc53c2169243"],["/categories/OperationSystem/Linux/SteamOS/index.html","534e11324f958cff28f7f94f4e931e0f"],["/categories/OperationSystem/Linux/index.html","5b412ae57cd57b64ced8cf3f4e06004e"],["/categories/OperationSystem/index.html","480687263369bf1956c53e56f4d6f875"],["/categories/Research/Math/MathJax/index.html","3ed3423149f3dfe6ece945f5c340610c"],["/categories/Research/Math/index.html","8f297bfc5745ece57e691a9653e362dd"],["/categories/Research/Math/线性代数/index.html","6ff963307a6ec4bba6949c53ad2bfb14"],["/categories/Research/Math/高等数学/index.html","49a6238c0e5956ab4e3ed178d0871798"],["/categories/Research/Memorizing/index.html","7d70d0e898010484286fd04b04687ded"],["/categories/Research/index.html","68f7eff2c9a88670ee7588f901cde481"],["/categories/Research/思想政治/index.html","9454e1ca7be47295b3585e8d03ca09d2"],["/categories/Research/数据结构/index.html","bbe7343380e62ad1d8731500e880fdc5"],["/categories/Research/英语/index.html","b93c8966a80cf59a6bf3c7ef1b55fd5e"],["/categories/Research/软件工程/PseudoCode/index.html","1b8dfde796f91e49d6dd3e2d76676163"],["/categories/Research/软件工程/index.html","54c0485f3d552982dc84a7206b1cd6dd"],["/categories/Resources/index.html","553d30eef7d3f4d1a60fec9078fe3715"],["/categories/Resources/游戏资源/index.html","52eed7936f6fad8ea01d25efa30ed8b8"],["/categories/Resources/游戏资源/微元素/index.html","d485b07cadb8eb6188005575ca5057d0"],["/categories/Software/Anbox/index.html","0a5c0b79a5211c4b2e4fd9cd932392dc"],["/categories/Software/AndroidStudio/index.html","e13b93c62442674beefeba8ea01160fa"],["/categories/Software/Office2019/index.html","9ab8bf3d2a1aabed94f3a5ec5079ecc2"],["/categories/Software/Pycharm/index.html","ab43717cf7569fa6456f7fdb600fd5ca"],["/categories/Software/Thunderbird/index.html","e1617977d78f872fbed883de92b4d06b"],["/categories/Software/UltraISO/index.html","bb4d66a253b14c39b9e0c68ae76c070b"],["/categories/Software/Unity/index.html","0cf9e487de20e2bf70c968a21a95f918"],["/categories/Software/VLC/index.html","450810e177c5b9b90febb6f5b04d23ab"],["/categories/Software/VMWare/index.html","8053e064f570b6e7339962827ca01a8c"],["/categories/Software/VisualStudio/index.html","9b7ee6891e9b567a0feb27c7cda4bda7"],["/categories/Software/VisualStudioCode/index.html","2666301dd879fd12c4c1b3880ff37f21"],["/categories/Software/index.html","2ef608cd920c23a4c88332e4b3ace8f6"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","ee51a7e0220511d930d43a8a4dfa8532"],["/categories/TechnicalResearch/Android/RxTool/index.html","d73c59b36fee2a79e372f4637328ce68"],["/categories/TechnicalResearch/Android/index.html","57518b03451666223ae83e38fc2ae77f"],["/categories/TechnicalResearch/Git/index.html","abf437925f1612c983c73f3e33c5d691"],["/categories/TechnicalResearch/GitHub/index.html","b2c43e64e979e6034b7d60fcdf7c5bad"],["/categories/TechnicalResearch/Hexo/index.html","7ccfc07729f95bf2c77f659aaa4270f8"],["/categories/TechnicalResearch/Html/index.html","863f8148c1250fb1d3673b2efa21ebce"],["/categories/TechnicalResearch/Java/index.html","a62ebc0eaf6ce719217787debd44961d"],["/categories/TechnicalResearch/JavaScript/index.html","2c8dd04184fde5a737d8fa4378b055ea"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","6a9df249206a4661b53cc7fe0d99d518"],["/categories/TechnicalResearch/MachineLearning/index.html","dab37062855e478c5abd85c3e35e500b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","2e82dda26a53849ea14055c7240c3bc0"],["/categories/TechnicalResearch/Markdown/GFM/index.html","f37b7bb6618c2f8d77d0dbe99506c8ac"],["/categories/TechnicalResearch/Markdown/index.html","bd9a28c8fbab908e238d34292c3e5aeb"],["/categories/TechnicalResearch/Python/index.html","8f934dcdb6ea43174eecc25b051c6fb2"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","5842c2276a20aa722751c6dd053e7ec7"],["/categories/TechnicalResearch/Regex/index.html","ee5679c7ad31154bb8888508df2fc9c3"],["/categories/TechnicalResearch/Spider/index.html","a751f83bcafacf039eeaea6142333c7e"],["/categories/TechnicalResearch/TA/index.html","0802db60256cc3846584d933ba4dc0cb"],["/categories/TechnicalResearch/UnitTest/Android/index.html","e13eedd69aa105aa99172f161e53bf0f"],["/categories/TechnicalResearch/UnitTest/index.html","4b182095fd0eded25119a8fb10b2ac2c"],["/categories/TechnicalResearch/index.html","9f6d823c48876e872bb33a294f07b436"],["/categories/Teleplay/index.html","bdaf7c2f982cec6c3c3e07d513f2798c"],["/categories/Teleplay/亮剑/index.html","90828dbec2ff5203adb1387f95885e4a"],["/categories/Tool/Music/index.html","2f53d50aac2beef847c2ae8ffa18aac7"],["/categories/Tool/Wallpaper/index.html","127edeb1d23a653a5b7a5915d6171e2a"],["/categories/Tool/index.html","97ce545ae091e72631265107d61238b7"],["/categories/index.html","c216c6ee360c429aaba48a8d87e1a162"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","75788c98580c57333f80b54d61151bd4"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","1ca5a2160bb93ce5414c37e8425489b6"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","5befa5ee70ed391873002cb298c1a587"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","fd5d6354b34338f7afb11d4bb04b4df3"],["/movie/index.html","1bb5674af6a2554d47960907587487cf"],["/music/index.html","3d92effe4b5580138fe217fe50e514b1"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","58d9e00701d99fd2c17bbe4dc9b7c941"],["/page/11/index.html","d8cb60027fb72c61428dcefa9673a2b5"],["/page/12/index.html","5c51f8d26b90e4761ab32ef7683a7444"],["/page/2/index.html","1ff9faaba6ba2a8d4f8463757653acad"],["/page/3/index.html","02265d9ae8b5a0d537a50968a2713d4d"],["/page/4/index.html","8862565ffc8db54ec66b5df61faaeb64"],["/page/5/index.html","59ddf5e098191be002156a4de5eb0a82"],["/page/6/index.html","400e96d7a923cb20a1436c6cb567f07a"],["/page/7/index.html","58aac37b386145c92f17c757e07093c6"],["/page/8/index.html","1eb12cd4f9ef9af940cfad01bd07473b"],["/page/9/index.html","d33e4d23a8ba7e365dda62e7e40a12f5"],["/tags/ARK/index.html","1bc39b8b9e8c9c297c09b3fa721a8b12"],["/tags/Alienware/index.html","113e04645c78bb2960504c005d4aef1f"],["/tags/Anbox/index.html","820eb9983e7fc906300431d778d7cf89"],["/tags/Android/index.html","21d38386b6c8bb7da011b4b82b2c8452"],["/tags/AndroidStudio/index.html","a1822996174b5e415bd9740fbca56d4a"],["/tags/Anime/index.html","bf0c2e3204630aa1aa2e32b9a0e2765b"],["/tags/Base64/index.html","820191b4788ab9b8ddb446c280210321"],["/tags/CDN/index.html","e65ca4e946d3daca1c593aba79ee6c45"],["/tags/CSGO/index.html","21ef1d4e81f1d217b191c5b15665a7e7"],["/tags/Chrome/index.html","40200c57f6bb34e3a6a92f25ed847c2e"],["/tags/Chromium/index.html","02160e62c25a384dac2e19ba64538254"],["/tags/Computer/index.html","86424ca2d17f9da4e6e87f23230eff19"],["/tags/Contributor/index.html","b87fd19d81b2fa452e8318c3a266a21c"],["/tags/Daily/index.html","ce706f9e4ea9095961fab21812a6e909"],["/tags/DeepLearning/index.html","b1cad1082b905ff7c761e612775a97a4"],["/tags/Design/index.html","3b288744865cf46575b686c85d4c1a09"],["/tags/Emoji/index.html","bc6b5fb085c7582626276af15b299294"],["/tags/GFM/index.html","67476b7de5b38b820db30002131e030f"],["/tags/Game/index.html","abc86c58df831824ba5159c3ca23cadf"],["/tags/GamePlatform/index.html","bbb9ecb4f086e0c639e06b50c28bcc2c"],["/tags/Git/index.html","eb494f16f3306c69dfd2fdd7abad17f9"],["/tags/GitHub/index.html","fc47f8736793f4b69ab8637d94ea984f"],["/tags/Google/index.html","071617b5cbc20ab895e221952839bfac"],["/tags/Google搜索/index.html","ef3ee3b67ff9794d0338ac5de603309b"],["/tags/Guitar/index.html","e74a68838dc5aa9f6b0658fe05885a6e"],["/tags/HardDisk/index.html","967062c2dec1c506937e1ccf29a32604"],["/tags/Hardware/index.html","c03c10ae146dad6bae914268f635553d"],["/tags/Hexo/index.html","1f6872c8fb24c94b0047a5109518057b"],["/tags/Hobbies/index.html","774f55546d1d4f54bf567f5698a53173"],["/tags/HongKongMovie/index.html","6f0674d7b3494fdd18d02f5771bc8e54"],["/tags/Html/index.html","884c5c1bc89d0a38f0d05a6d292dc3c1"],["/tags/Interview/index.html","ebd41a5a3e14a011deea0efe6b860519"],["/tags/Java/index.html","9f816ef059847de3ed6d34690bbda6d9"],["/tags/JavaScript/index.html","5904a57e03dca7eeacdc9904a4e75b69"],["/tags/Linux/index.html","2285ca80b177b90e7a059d4cd3764a7a"],["/tags/Lutris/index.html","536768f06f7c0b58f6dd775abe37f878"],["/tags/MachineLearning/index.html","0c699954c9d38ff1f6a247b9226cfb79"],["/tags/Manjaro/index.html","9d0df38d47b2b36cb4d5b371c5726a60"],["/tags/Markdown/index.html","f453e5e3e6d15337caba5233d6152a01"],["/tags/Math/index.html","21feebdc74ddfcc3fde74036c10f51e4"],["/tags/MathJax/index.html","fb50e2c22350dc4955b1c6a8e08dcf18"],["/tags/Memorizing/index.html","62c12142c3af5fa54334b422b9942cb5"],["/tags/Movie/index.html","43e4046ce3de1aac0d1455aace6b4821"],["/tags/Music/index.html","87113f086f6e87dadbeec12562d1aac7"],["/tags/Novel/index.html","a43a95252f83deda56ccb0baf3d67b2f"],["/tags/Office2019/index.html","7690061d2fb21206c4828c20cc419a56"],["/tags/OperationSystem/index.html","0f800b5ea0d6ad7f6bd01479bbb6f97c"],["/tags/Origin/index.html","429ffb8bb48a742ad264f40a5589d817"],["/tags/PersonalDiary/index.html","03508eaadd16fa02d6bf372ca05a1941"],["/tags/PersonalPoetry/index.html","97f7e050be7e380b4297485c028c8907"],["/tags/Photography/index.html","55ca684c3b1beaf3599b627ad2b23a9a"],["/tags/Port/index.html","9eefdd8d9750df198bbc73ed711d1dcd"],["/tags/PseudoCode/index.html","ead4a68a51769e119af847bc9b5dddfe"],["/tags/Pycharm/index.html","ea1c2cbe86aec54f9fceaaf022151f64"],["/tags/Python/index.html","092f929a7976c9932545df2e4f398a67"],["/tags/ReactiveProgramming/index.html","44a961be7603c850d7fc6b5027d4fe9e"],["/tags/Regex/index.html","32134b5ff22a055d2367d60d57df33a0"],["/tags/Research/index.html","348fca2b22e29a60635065da9acf1ad6"],["/tags/Resources/index.html","fb26caa30dd9ff1667a933d7af82ca56"],["/tags/Router/index.html","efe7793862cc3e54ce0b13354cae750a"],["/tags/RxTool/index.html","2fe4217ce87a402c4eebef99a7fc12cc"],["/tags/Software/index.html","17b8d7ae2bb77e9961bef7b60079583e"],["/tags/Spider/index.html","9b394f2e2ef8113277d12d004341ccbf"],["/tags/Steam/index.html","39c06fc0950278abc82cca8d55b25a72"],["/tags/SteamOS/index.html","75fdc7e8cdd3e3bb5e1641956a1df159"],["/tags/TA/index.html","64ef2eda0109f228904bf3ccd825b156"],["/tags/TechnicalResearch/index.html","3cb264f074bae76918ea71293b1ff0e3"],["/tags/Teleplay/index.html","7c2499ebeaebedc906b350c4823dcf87"],["/tags/Thunderbird/index.html","c1d0044bdccfa5062ac0ace65ac0cce0"],["/tags/Tool/index.html","702cf50c100ffe01e17adee5f29a6169"],["/tags/UltraISO/index.html","82fcd8f3ecc9022cce41c563b3ded6d8"],["/tags/UnitTest/index.html","37acf3009341de91db3f8ac4ab650b7b"],["/tags/Unity/index.html","400d4f2504190275a00ed4b7edf36a01"],["/tags/VLC/index.html","573e10202946fcbd6b6b94c3399aa00d"],["/tags/VMWare/index.html","450f62b1b08a248dd460cbb97542c99f"],["/tags/VisualStudio/index.html","6428e64ebf5a8c641bdc5330d5145198"],["/tags/VisualStudioCode/index.html","59b614e11745be9c9cbb03ae8050d82b"],["/tags/Wallpaper/index.html","e4cb372b52ba356f47a828f9f853c7b7"],["/tags/Windows/index.html","585fdb731823690d170902a8a94ae227"],["/tags/index.html","7479cec8c466262e2fbed2b24b24a21a"],["/tags/个人所得税/index.html","e782bfa41f2a8e825f8018c558b7ded6"],["/tags/五险一金/index.html","ff9b0ebd8b165e10f759a6f8eeb15b0d"],["/tags/亮剑/index.html","ba03d87aa006123153c12924ea176305"],["/tags/仙剑奇侠传系列/index.html","6776ffccd61854dfd72c0b36776acf6f"],["/tags/千与千寻/index.html","b51ac6cf531e7880f229198f7a3b0f85"],["/tags/宫崎骏/index.html","b404bfb84d07010bf3a70125f229403a"],["/tags/小王子/index.html","a36c0bd372caee9f078282491c764113"],["/tags/开心鬼系列/index.html","26716c232d3f7e57fb9a5c80ea057ce4"],["/tags/微元素/index.html","223e27225df30b36fe797d0692adb91c"],["/tags/思想政治/index.html","e11b6906c3b442be7b678d9755104310"],["/tags/数据结构/index.html","368f34635f2bd15968474ac2bc7b8d7d"],["/tags/新型冠状病毒肺炎/index.html","d0ef1a5475c331fa03b3061454767eb0"],["/tags/游戏资源/index.html","fd10f45092a7d560d98da6c1761aecbf"],["/tags/盗墓笔记/index.html","862b638aef40a517ef55568035d9305f"],["/tags/线性代数/index.html","a25b18ef8576efce31981d17a1a9ce48"],["/tags/英语/index.html","d6e795b55624d945d8889f324d25833c"],["/tags/软件工程/index.html","c49600d02c229b17d9e3d2805902cc0a"],["/tags/高等数学/index.html","5709b55c4c958c1fcdb4828c09f9b2f0"]];
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




