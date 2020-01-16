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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","2a77136e7e1dcfbdb890f1d42767c031"],["/Computer/Alienware/Alienware更换电池/index.html","c7ad39d91b2c2995860dd3c356690f36"],["/Daily/Hobbies/Guitar/吉他入门/index.html","bdeaee4751e26acda704ae86ba91ba84"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","0be4313c1b94e089c19ac1d1205c3a65"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","e3437ad74068fafe36a5d53e14a8b1c7"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","4098613f1293b2d678ff05cbc3e9dd3f"],["/Daily/Memorandum/index.html","3ef16f9ca7d8bc0e45d6fcc48ff112dd"],["/Daily/个人所得税/个人所得税/index.html","2bb491b0e83a60bdd71c83305a3e5c9c"],["/Daily/五险一金/五险一金/index.html","a0e0599f34ad7035933f9381fecdae72"],["/Daily/生活小常识/index.html","782052f01dc659430dc2ccba64b40156"],["/Daily/网络用语/index.html","d9825d9f7e35adcb7591c50966f98505"],["/Design/设计用户界面的注意事项/index.html","3f52b427b95762ab85efe210113f558c"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","96aaa247e239d25fee9f22cf2242b4e1"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","e5098f2630ec712749ac60cea9c8f0bf"],["/Game/GamePlatform/Steam/ARK/index.html","96b2df0a39aa37481fce0984b87fb9fa"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","bba22621c3dd2f0024ec04c8844d6537"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","2b7ebb6f443ef11c41f284cb5cf6fa2d"],["/Game/GamePlatform/Steam/Steam库共享/index.html","86edd0d26195c575bc0247516c97aa96"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","81a9843fa755cb16e867a08bda10055e"],["/Game/如何独立开发一款游戏/index.html","abec3c14fdc9bf6c0e28ebf2fcad5481"],["/Google/Chrome/Chrome上网助手/index.html","ebcfed3421cbfb8b6cd06ca573c6e554"],["/Google/Chrome/Chrome使用技巧/index.html","6052ef3da2056e74f815c84f7bd0a7f4"],["/Google/Chrome/Chrome插件/index.html","a2ed25fc444991a65a12728d1e8519ce"],["/Google/Chrome/Chromium/Chromium/index.html","10e770ec03f5d7112dd833601a858cce"],["/Google/Google搜索/Google搜索技巧/index.html","0e884b493bf9c7956bf274ffc84c2cce"],["/Hardware/HardDisk/硬盘分区结构/index.html","e78f67cb2c258d90ca9d5afc077268f4"],["/Hardware/Router/路由器固件/index.html","8d1d24025396ef17cb7cb74bdcbd3d3e"],["/Interview/Python/2020年字节跳动面试题/index.html","fc2f1b27f93afa6f7c200e6de2b1ade7"],["/Movie/HongKongMovie/开心鬼系列/index.html","c1b94b7094031323993e92b410d6d460"],["/Movie/小王子/小王子电影的共鸣/index.html","5a46374627191a36849636667cc1f50c"],["/OperationSystem/Linux/Linux分区管理工具/index.html","95fed064532abb03b42ef19c4bfdde7b"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a4a220672cef119675aff6a80ac066a2"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","fee0cd7fc748c0e53153b2391184d70c"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","353fe801109810aa6ea304f31f1ab899"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","56e476e06c9c5a47de4ec3fe8b5b35f0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","abd0922512c5feb30aeb575968436e29"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","ef2fb2c6d8163974074c24c28d0aa1f6"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","82bcc934d7536ac30ad59165018ab49b"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","739a0e0b0c3bcdfc903b042be355735f"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","ae63d9b1d24647237d88ce5db0870177"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","e2031b35819977da96f6e8e1e6a55661"],["/Research/Math/线性代数/线性代数公式/index.html","4dc04c49412e5548b352b65af16a5c31"],["/Research/Math/线性代数/线性代数知识点总结/index.html","b77dcde74367041f71ac6006cc88a631"],["/Research/Math/高等数学/高等数学知识点/index.html","cac03972ebbb5c3f281723d2ce078094"],["/Research/Memorizing/费曼技巧/index.html","106a32b10ba990fc474969928cfd9b0b"],["/Research/思想政治/考研思想政治理论知识/index.html","8557fd104f2a5f6a1277c7752f47a8ff"],["/Research/数据结构/数据结构/index.html","8f8498d0d5fd589102725a64a82e9d52"],["/Research/英语/考研英语作文/index.html","c8d6624c72dc9fbc8754706573f96c0b"],["/Research/英语/考研英语词根/index.html","47a6a68447f39162f8bcb08ecd2e7fd3"],["/Research/软件工程/PseudoCode/伪代码/index.html","d93d4adc6a7fdc9c78680d14699d9ee1"],["/Research/软件工程/中南大学软件工程考研题型/index.html","c61d14376be7fafcdeef7a14b40506a2"],["/Research/软件工程/软件工程基础知识/index.html","257dd715e3e98cc85d4c92129371fe16"],["/Software/Anbox/Anbox/index.html","5fee224145e2724c60dbdf91a1d217d4"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","648cff7fc599e122324b3754b2be7c8b"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","dbfc08015c39e5fb2fe632ee0a17dccc"],["/Software/Office2019/Office2019激活/index.html","d8a34e3c08becbd8fd011bedb2410470"],["/Software/Pycharm/Pycharm激活码/index.html","b926f8b4fbedda1a88aa9064d439a8e3"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","0558806690ac1479c1bf06e20ac0e4c6"],["/Software/UltraISO/UltraISO/index.html","8f16586e74de453a1e95257db1d7423a"],["/Software/Unity/UnityHub许可证手动激活/index.html","5842de41bd2116501ac1eeae049d2f20"],["/Software/Unity/Unity使用技巧/index.html","0ab6e3502b5f075365abcfd35a6fade7"],["/Software/Unity/Unity动态加载Prefab/index.html","5a4828a6a44250cab2cbb70d8ec22d4a"],["/Software/Unity/Unity的Canvas组件/index.html","e0589f95f6ea69383d72292d1abd7108"],["/Software/Unity/Unity问题归纳/index.html","d399291e87fee31690186c9f93e23409"],["/Software/VLC/VLC使用技巧/index.html","d4ba367f13a01b97955d97be74a2646c"],["/Software/VMWare/VMWare/index.html","760810bdacbb934fb1bc603b83a8080c"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","59447b16ccd1285431a69eb6d72a4be2"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","146ac2a68a3bbd79ced209b6dc9013a5"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","2e7329e9cfe610c1229a98f43ec70559"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","bce411ecd79c02b1f994d839200cb203"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","420e721fe2353dd7b7e8dee0f7d8a094"],["/Software/Windows常用软件/index.html","1cb12e8ca1685569a7322c14d17735a5"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","d037466fa0ef9730856be66be2a87aba"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","b1108e8afad20cef721130e6d973da58"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","cc1e76fd26054c1985db156e11a078fa"],["/TechnicalResearch/Base64加密原理/index.html","b3b325b0777081f83cb3f39f9e54dbab"],["/TechnicalResearch/CDN/index.html","3e4a6625fec3314bcacc7064d2c59cce"],["/TechnicalResearch/Git/Git/index.html","fe6e1b53fb207b1749cecbdfc6a4caf1"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","bf96b8f94ba2032f5c340b2520a863b8"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","cd7db7ef61a007a72acb3f03f9db1d40"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","ffb08c7caa1fb5308c1e1a752f1670ec"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","b6424aa469bb6b2d0b108913157a0f8b"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","1bfce50d5c22d15b0e59cb2a8f87cfde"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","01697f258688e777d99350806d48e1ec"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","48bd8db586033f5cf9520c954dd6f193"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","4aa8fa0b97533faa282a2ffd388fd092"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","f1b1791f63c17a16bc4afe587b99250d"],["/TechnicalResearch/Java/Java基础快速入门/index.html","5c076fe31cc99c48e1fba9bbf52011ef"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d78b547cd5524e0406ca2dfa952db874"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","072c55c846674e25a9fc1ed08eef3156"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0b7cae8150044e6cd932fa94964d263c"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","a30cc906ec64cd14c3182c4f2cab3bf6"],["/TechnicalResearch/Python/PythonExercise/index.html","19352dbf6a77be2809b470272dc7b6ed"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","1ccda3862a2e426ed46489540c10a3fa"],["/TechnicalResearch/Python/Python问题归纳/index.html","a6cbc638c0ed3b7522cf82416fa40d83"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a658c278f81cfb7459c56dc5fcc7d028"],["/TechnicalResearch/Regex/正则表达式/index.html","3f24e4afb8d1ffbd015d949657510c0e"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","1cb68827cc77648002ea5916cbc0169f"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","c19743242e28e8ac06b005924ce46bc9"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","bc142982b5d16a25fb570be534f7566c"],["/TechnicalResearch/服务器常用端口/index.html","6c5a425bc3be4b321ed84768b2bc9594"],["/Teleplay/亮剑/晋西北铁三角/index.html","948c26871dd10a71a20a0738ca816eb7"],["/Teleplay/仙剑奇侠传系列/index.html","13eaefd6fbec990ef73be321e19c67b1"],["/Tool/Music/网易云音乐/index.html","ef7808a1c7273a2693a7b483e99b0eda"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","b31f65826f38e2c0d721db2972b716e5"],["/Tool/百宝袋/index.html","16fde22935f6a575fb5517a19e599f4a"],["/about/index.html","0a2579aab0b192417e59daee5428c1b8"],["/archives/2013/10/index.html","23eb282acd01cce7091a57f4adbeac16"],["/archives/2013/index.html","bba47b30a3b709e86349218b2ebd92d0"],["/archives/2016/09/index.html","6a6d0168df1f0d06512792e9657315e1"],["/archives/2016/10/index.html","05242bad15584054badbd0f4344646b9"],["/archives/2016/11/index.html","8b188c9fd08033096d52d3f856e88b66"],["/archives/2016/12/index.html","5ff88d515957c94864cbea7f80884f65"],["/archives/2016/index.html","7e060c25f4f193df90c6337b6e2ea89f"],["/archives/2017/03/index.html","379a892038a57aeff1a292cc38971afd"],["/archives/2017/06/index.html","54598075acf0579ba680f23d6855811d"],["/archives/2017/07/index.html","f5dfc812ceac8c9e4957ce81f26e6361"],["/archives/2017/09/index.html","946e883b270a8842996cef8de6beb29e"],["/archives/2017/10/index.html","aa8c7bbd7ef6faf21fca38cd44cc8ae5"],["/archives/2017/11/index.html","f25b630cd09bfdfab4947b1087332784"],["/archives/2017/12/index.html","37c867557fb7b72a1bac9bee1a7c4d21"],["/archives/2017/index.html","09d34b95be271f957dbf3c79b2b3bbd9"],["/archives/2018/04/index.html","fc7603d345eb2fbca4ea0c6f94f27de2"],["/archives/2018/08/index.html","8b437120b70e27cc1b13f0a41ba4fc47"],["/archives/2018/09/index.html","7abf86120b7e8ec8dc14604c65a3cea0"],["/archives/2018/10/index.html","db2d0c69125bf2e9d9435a2bc4bb40d4"],["/archives/2018/11/index.html","25249eddea6b37bfd94f2a50c7a3de23"],["/archives/2018/12/index.html","8485fc1074c1e37ac2e5e88d06782187"],["/archives/2018/index.html","3cbb9300b5205578ab0cae5ffefae2e2"],["/archives/2018/page/2/index.html","2a3c60fde0b2937c10480bfe078a1fd9"],["/archives/2019/01/index.html","1674f05462b6f8729fac699f0b5d6ea5"],["/archives/2019/02/index.html","02923263e8f5e0f70182e28225047460"],["/archives/2019/03/index.html","e0b19c0791a5d0e6ac2ff0a360cb1667"],["/archives/2019/04/index.html","2454fea51a8801ed0b5f513b678b9648"],["/archives/2019/07/index.html","a92d9b72fb3b73b016f2e072ff847fe9"],["/archives/2019/08/index.html","126d0126f2d91d1d6e53ba8e7527d5c2"],["/archives/2019/09/index.html","539d8bc22accc36e606f654551d32d62"],["/archives/2019/10/index.html","1f832affab56ea740642770943f513cf"],["/archives/2019/11/index.html","54bf96e26e6c174d30289f28985a9925"],["/archives/2019/12/index.html","94ca59386d29fba37bfc6cb805c40b8c"],["/archives/2019/index.html","a7266387107c63f07c621ee8873635be"],["/archives/2019/page/2/index.html","b8a3e0909647c365b6d657189eadf6bd"],["/archives/2019/page/3/index.html","be08157df8a3e7585146ac87b80cf5b1"],["/archives/2020/01/index.html","401bb457e4167ae29a55f7ec06cce560"],["/archives/2020/09/index.html","5d1d58d753a636ee7e23f134d760f11b"],["/archives/2020/index.html","07712c7ba59c8ae28ca34cd8dff41b87"],["/archives/index.html","d9512bba39f5588cee0c9fd587f88bb8"],["/archives/page/2/index.html","f939744c4be2b3eec70917398d68db63"],["/archives/page/3/index.html","81ff160363e0ffd38e6b60d16f6a5acc"],["/archives/page/4/index.html","5e3f770bc41c357d1979fba45ec35aac"],["/archives/page/5/index.html","2e4773859163559910e2032bfffcc1c8"],["/archives/page/6/index.html","e75fd940b8758bf24265619fa911b62b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","5e488bfc55f80e5fdb8ccea704fc7f36"],["/categories/Anime/index.html","4c839d44079e26b90a77c4116ad727a0"],["/categories/Anime/宫崎骏/index.html","8d20430ec1f3c97b69726e9ecc99d303"],["/categories/Computer/Alienware/index.html","5c17f4703e94cd140a9764e755739e08"],["/categories/Computer/index.html","802e98eaa7d895d79cfc106c3142a7f9"],["/categories/Daily/Hobbies/Guitar/index.html","674be2d719b07c717f8839d3b45fd5c2"],["/categories/Daily/Hobbies/PersonalDiary/index.html","811382c3b23ad98d31464bf8f8dd2bd9"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","874bdb13856759e27b0f1fe7192bc485"],["/categories/Daily/Hobbies/Photography/index.html","3031e91bf0a908a1715188faa807fb05"],["/categories/Daily/Hobbies/index.html","94459387ab037722aec013a89ecdce44"],["/categories/Daily/index.html","455c5fb0435b7c565518d5bbe271ecd2"],["/categories/Daily/个人所得税/index.html","ac0b57c2cd03328b05eea0d19b68cdda"],["/categories/Daily/五险一金/index.html","ee432ff115ad2b12901f329e4b7c1ccd"],["/categories/Design/index.html","ce3fadb6d15ac2c262d8b56d6d8ca971"],["/categories/Game/GamePlatform/Lutris/index.html","c6b29f3f5f62829deca6fb181b5ac6c2"],["/categories/Game/GamePlatform/Origin/index.html","0196b65e8ceed9f1d34005d28d853510"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","7a4882195799b60ff1b4d3824d7d3fdb"],["/categories/Game/GamePlatform/Steam/index.html","d250ff3af0b6e8da2a369c797933b5c9"],["/categories/Game/GamePlatform/index.html","d05cd43d90d24db4f933e8445da984be"],["/categories/Game/index.html","38d36505fb57b8c5baa4379b419b66a5"],["/categories/Google/Chrome/Chromium/index.html","9b0156c2a8889de00418d897c4181f0c"],["/categories/Google/Chrome/index.html","fab2f57fce8d7677af0d231ef37c7285"],["/categories/Google/Google搜索/index.html","c562dab363188c7aaa2df744cedb9996"],["/categories/Google/index.html","dc879059f9948e2a5bfda3015c1fa086"],["/categories/Hardware/HardDisk/index.html","e45d17d4d719dfdb4793e1997da4874f"],["/categories/Hardware/Router/index.html","145ee0baf02402b896e032f863832d9a"],["/categories/Hardware/index.html","91314de5f53d73d34391745ffb5ececb"],["/categories/Interview/Python/index.html","ba591b46c335bf7f2a7e6bf81d887fec"],["/categories/Interview/index.html","a27235d3e8537d1154c944e97f212f10"],["/categories/Movie/HongKongMovie/index.html","b7f2c8f3edc9e434840c39983f9eca52"],["/categories/Movie/index.html","2ecf128b9a4a9dd56e98ecf5613f3fa3"],["/categories/Movie/小王子/index.html","acff5b727878b331a0da3c2163a1e7bb"],["/categories/OperationSystem/Linux/Manjaro/index.html","22b75b44033de43d55b79a5d75d0ac91"],["/categories/OperationSystem/Linux/SteamOS/index.html","44c3da0e52d20291513ddd699039d392"],["/categories/OperationSystem/Linux/index.html","3a2b0c31e222bf941d58ae0938b4ce4a"],["/categories/OperationSystem/index.html","4c3a8ad8ed9cdce3d7feb9f2d6626313"],["/categories/Research/Math/MathJax/index.html","d75e9d798b38c48810390df60c9e90fe"],["/categories/Research/Math/index.html","af7a2f7c6ffc46df4cddfdd011095bf7"],["/categories/Research/Math/线性代数/index.html","d5c1548b6a0445e93ec317598a44b888"],["/categories/Research/Math/高等数学/index.html","dd68b0ab98d07b6a2ae337c39b78aee8"],["/categories/Research/Memorizing/index.html","e1230b57eefe51dc7152cedca27a1a5d"],["/categories/Research/index.html","7cc930eb747e4bb071f6804cd182c0e0"],["/categories/Research/思想政治/index.html","40837a35d2f591c531f3cf23fbc3e167"],["/categories/Research/数据结构/index.html","5f6a805d3574325c1ea6b8a934d56789"],["/categories/Research/英语/index.html","cf041b6e317edb455a0b53938797a57f"],["/categories/Research/软件工程/PseudoCode/index.html","075b01cb1db819fd381360f3120987b5"],["/categories/Research/软件工程/index.html","62eef0ed11bf5c0ef0fc6fa531c1294b"],["/categories/Software/Anbox/index.html","cf168f5a9755eb55b627c39353ff9233"],["/categories/Software/AndroidStudio/index.html","1a77387761e0c819f09cad63770b49cd"],["/categories/Software/Office2019/index.html","7d454f7dbbb37c50421c7ade24c307ec"],["/categories/Software/Pycharm/index.html","20957b045b7851624119ec05f45bcb38"],["/categories/Software/Thunderbird/index.html","a6c0e8f09e447a44aa736711d3d5d8b5"],["/categories/Software/UltraISO/index.html","a5e8e6e1e21f447fe15131b98168e514"],["/categories/Software/Unity/index.html","f69d03613dd24f457e0d9d0078cdb1cc"],["/categories/Software/VLC/index.html","c9f91402fa9a7ed8ccaba1aeb0ab3580"],["/categories/Software/VMWare/index.html","dc33af10e1ef9fc1c396019730232157"],["/categories/Software/VisualStudio/index.html","1f4e2bddc63bf7fd6dc52171923e3c16"],["/categories/Software/VisualStudioCode/index.html","0d093b9f739b926e169d5201f7d5772a"],["/categories/Software/index.html","e410d599003f66752d2ff14837418384"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","f255041595761d3d1fb2a35b54bb2257"],["/categories/TechnicalResearch/Android/RxTool/index.html","dc9fe67942c9ce0c119cb8f7797d18f6"],["/categories/TechnicalResearch/Android/index.html","87d25cd5716903a7bebe43039ac09ddc"],["/categories/TechnicalResearch/Git/index.html","3a448b95f84ca6c4e4211a02df62e3d9"],["/categories/TechnicalResearch/GitHub/index.html","19cc1c48b8519b94555583e3e0a121f8"],["/categories/TechnicalResearch/Hexo/index.html","5c34268a4790e29afefaa41df64903ed"],["/categories/TechnicalResearch/Html/index.html","6fa67e580290b5621aa5547ff24e0933"],["/categories/TechnicalResearch/Java/index.html","0aba02be448190634842e2522aac9cb5"],["/categories/TechnicalResearch/JavaScript/index.html","33ac374708f366d280f9077c5e6b065b"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","43391323bb32d4e433e92d115f4cb49c"],["/categories/TechnicalResearch/MachineLearning/index.html","77bf41790e98237b6c0022f75a6cd63c"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","69202da3e68745eed9eda393f32f14f4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","71a55834c0dac5d5f496baefebd539b1"],["/categories/TechnicalResearch/Markdown/index.html","a386fe1330e08288cee7b164f2403d5a"],["/categories/TechnicalResearch/Python/index.html","aed3ca6b9471700780b324d11d17a6a9"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","201b746a84c5c8eaeae7fb1e9b0c58e2"],["/categories/TechnicalResearch/Regex/index.html","aae3b9c20b15b0b3ac1a3f05e50657e2"],["/categories/TechnicalResearch/Spider/index.html","dfba5d6992848952d1e3253ddb961d7b"],["/categories/TechnicalResearch/TA/index.html","acdd077c093cdd8ab424929b1d7ce616"],["/categories/TechnicalResearch/UnitTest/Android/index.html","b0e908c3fa01ac98bd58be8938f345ef"],["/categories/TechnicalResearch/UnitTest/index.html","a5b420fff1a8f497323f0cb777a7c8c3"],["/categories/TechnicalResearch/index.html","85a9a20d4e24ba3729429eecaccd8379"],["/categories/Teleplay/index.html","b1be94c0d98fe3502deacf48b9603689"],["/categories/Teleplay/亮剑/index.html","73c6cf53677938c4306abb7088fe1e96"],["/categories/Tool/Music/index.html","38d03cb50ad83d39d580c30c977fd679"],["/categories/Tool/Wallpaper/index.html","c40fd63d9855677d3c40dfdc7da2cf0f"],["/categories/Tool/index.html","a1f23fb62b4620e6321ab986b8359128"],["/categories/index.html","6a7585b31e8f2a68e4dab7a6b3097d18"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8ff27b5cc77d1d0da9a41ddcafc9df69"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","95915b4665d0a150455e6f6525f983f2"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","26dcd79ed3144355e7453f39061f4bd1"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","8495faa3c5edbab3989e261691d687af"],["/movie/index.html","4483edd72e3d718e1dfbdb543209a003"],["/music/index.html","25c34513d7980fe635eaec67ed2f1b40"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","1e5cd15d5cacebc0b115a5f3102c6189"],["/page/11/index.html","3715ee603f6d28632ec06db1136a7fbe"],["/page/2/index.html","da57079a18d358fb314574bdf4baa567"],["/page/3/index.html","100a47f4d79d9eefc96a043dbeee3b13"],["/page/4/index.html","f999bc637e77eed4adbf3403b62648a4"],["/page/5/index.html","9a119e1696f54bec817f6373966bcb6d"],["/page/6/index.html","4b56ae896ffe2b341c2657f851ba4c6f"],["/page/7/index.html","1fcae2e720a4f418a2a22269809c24b9"],["/page/8/index.html","b97c06c7c5d5b3023563087ff27c2cf3"],["/page/9/index.html","38d80f4dd6a300c75b16a1604a299b37"],["/tags/ARK/index.html","9432a50920e24625304cc3e65934d9fe"],["/tags/Alienware/index.html","d2db1e396a830130fbd330a4f6d2cc02"],["/tags/Anbox/index.html","5e19587892fa554fe2ef04619818ef6d"],["/tags/Android/index.html","b39300e581c48d698a264f9afbf7db1b"],["/tags/AndroidStudio/index.html","4b54b494c56f3ef5340eef4605dd89ae"],["/tags/Anime/index.html","9325cada26e983440ef09033f6537af3"],["/tags/Base64/index.html","58ec899626e0f82eafcdf827a6965dac"],["/tags/CDN/index.html","eb9b71ab9b9f0248b6ef2ddc31dcb1d8"],["/tags/CSGO/index.html","d930d26477a2f07364a93ad3da3f78ca"],["/tags/Chrome/index.html","e40aecfec8f3a449551582ddf13766e9"],["/tags/Chromium/index.html","1cd7ea8b6a9052eb87e34e0ae977c1e6"],["/tags/Computer/index.html","4df8824c84f11609c22a560d860ed054"],["/tags/Contributor/index.html","998f8d2171c07ef9bdb59b91a72c11cc"],["/tags/Daily/index.html","1827451941be2648d59bddf440190783"],["/tags/DeepLearning/index.html","c5e3e0d2ef4b99d182f917b333784135"],["/tags/Design/index.html","cc98644ee608e858b0090452b8c42f2a"],["/tags/Emoji/index.html","d4716382e0c01ce51e9a7ac5331ad598"],["/tags/GFM/index.html","b3c655213de53fe059717d1ecfd2b1ff"],["/tags/Game/index.html","d0c73e647e58623bb8de60b53a47d20f"],["/tags/GamePlatform/index.html","b1f9d09dcabe29e2b60810706ea07d30"],["/tags/Git/index.html","b49bf88fb41512d04535e0f74d997c2d"],["/tags/GitHub/index.html","7a0bd633afa99e34cfef351da9ceccfb"],["/tags/Google/index.html","fdb7d34113135bd7218e4f8022ece770"],["/tags/Google搜索/index.html","65c8f68ff8b005500860052bea45d4b2"],["/tags/Guitar/index.html","7bf36998b2f43d3450b2e6742128e0ba"],["/tags/HardDisk/index.html","62d6354dd99f91a3c04bc6a911252ae4"],["/tags/Hardware/index.html","f2b7bd3d901f0007ef74974bb69ce1c6"],["/tags/Hexo/index.html","f4b731e369312967f569ddf1f75e1501"],["/tags/Hobbies/index.html","70b5c9820ac25d930b8810de72b669f8"],["/tags/HongKongMovie/index.html","b0955d57d452417214ebc3e4406328cf"],["/tags/Html/index.html","c9265d8fc4c5b551b1c0f678ea975136"],["/tags/Interview/index.html","2d36017eba2bd1d3b703f804fba35500"],["/tags/Java/index.html","d83eef94116dba47f28692882025fee6"],["/tags/JavaScript/index.html","49c122fc472d4a56b7166f41593b1480"],["/tags/Linux/index.html","183eda4df49a5f9eb231a4e1264c8db6"],["/tags/Lutris/index.html","2a1bd9619c31e57bf42bb026cbb145d8"],["/tags/MachineLearning/index.html","4364a4aae439a8010b6fe0099caa2ce7"],["/tags/Manjaro/index.html","93edaf455834a2c89a763a9b8eb71598"],["/tags/Markdown/index.html","e388b1bc416e25e9876fc83047785455"],["/tags/Math/index.html","5c9582fe3b01c477408ec1f02014a627"],["/tags/MathJax/index.html","fdebe67c3a2bcfaa9de393b07aa13af3"],["/tags/Memorizing/index.html","984f9a7a79e8bcb9a977f3a6c4853e8d"],["/tags/Movie/index.html","ca5a7d1fa27c4cfaa545ea5aa9132b12"],["/tags/Music/index.html","ad4d89da7ee1058c36dba80036f28278"],["/tags/Office2019/index.html","eaf4dc8b043304f7828a9eeb9ff9743c"],["/tags/OperationSystem/index.html","f529591ed215deae9415ccaba16b1068"],["/tags/Origin/index.html","bd7db3714fd67af023f2f4bfe11d75c9"],["/tags/PersonalDiary/index.html","42a28fd79c7dca026fa77b338f20ba21"],["/tags/PersonalPoetry/index.html","72a60eef5be6b99f18f1aa2c3b7f110b"],["/tags/Photography/index.html","86250907ab5dcbd2c3e2d57fad291dab"],["/tags/Port/index.html","4bdeccde5d2228c2538c5a3f87bf7fcb"],["/tags/PseudoCode/index.html","c20704930aa726e1ee2da5c7c8447bd8"],["/tags/Pycharm/index.html","0e2958f1c1e24ad528f3a36c58824e5a"],["/tags/Python/index.html","41bb0be4d5ef7e5ee12d91f7d79c60f6"],["/tags/ReactiveProgramming/index.html","8b02452588a1c9eca14cc8db3024ee20"],["/tags/Regex/index.html","189c32eae625e17b2bec396be395929e"],["/tags/Research/index.html","871665736a24feaa25f51085415f7380"],["/tags/Router/index.html","9bd1174eec492e02b78864e0e387a04a"],["/tags/RxTool/index.html","bd8cf04164cc10487111ab941eb1b43a"],["/tags/Software/index.html","f41b95f2555affc66867dd08e729b166"],["/tags/Spider/index.html","79554af01b969b5b4635d9a3fde8774b"],["/tags/Steam/index.html","16e7c3807d28c0d1b3e43f27a25d07b2"],["/tags/SteamOS/index.html","65d9e0e18ac42254b4c0a461ef215afa"],["/tags/TA/index.html","dcceff1b5c745e52aab42333d82f83fb"],["/tags/TechnicalResearch/index.html","ac0f8f1c8367c5af99e28e3b76c2a578"],["/tags/Teleplay/index.html","ce7b120ef1375dc21273a73546dcc72b"],["/tags/Thunderbird/index.html","c897fcb92d12d41804629eb953e03cab"],["/tags/Tool/index.html","5aee7c6671fa33561ee853b23ae6b7b4"],["/tags/UltraISO/index.html","c8ad951b05ee77e6d6b80aa95e575c91"],["/tags/UnitTest/index.html","383c3e4692f8730cd2de3df40dd3a94a"],["/tags/Unity/index.html","a322962b195376cdeee17adf330a10bb"],["/tags/VLC/index.html","04607e502f092ab837881a189d7000fd"],["/tags/VMWare/index.html","c272e41e1622241a8e2a08ff81bd9063"],["/tags/VisualStudio/index.html","efaabb68b20c0df96325ce9b1e7a203e"],["/tags/VisualStudioCode/index.html","bf4450e2edfdf828460574323323d26d"],["/tags/Wallpaper/index.html","180f501ed98dc62609713a66071b6393"],["/tags/Windows/index.html","3644bbce7aad5e90779aafd2f4eb186d"],["/tags/index.html","4ce42efd15f618a05650153cb1437bd9"],["/tags/个人所得税/index.html","42f5051e976ddc8c61b6265ac8ab191b"],["/tags/五险一金/index.html","afc72343d998ead94a34f04355f93785"],["/tags/亮剑/index.html","6b31a7a7cdf6efcb81d733b58bf16c32"],["/tags/仙剑奇侠传系列/index.html","64cefe73adfc8393136adb297a423784"],["/tags/千与千寻/index.html","be2b22957a2a951a813bb463255a6cb6"],["/tags/宫崎骏/index.html","816834b316673277eec6b9b4eaeebdf7"],["/tags/小王子/index.html","4dec6404fc3f643c51fcb847199d4929"],["/tags/开心鬼系列/index.html","acda2fdc671ec88ec8295f44d8fb58fc"],["/tags/思想政治/index.html","ce73a0623e49024c7fdde2b37ca2f478"],["/tags/数据结构/index.html","b80a04bb9967bef339af1784653bcb75"],["/tags/线性代数/index.html","7fb98b17038dba2142e2419de2fc4479"],["/tags/英语/index.html","811c9c802c4501f7b84bce575f674ab3"],["/tags/软件工程/index.html","868ae7a351d4c03ed9cc36bf0106e90d"],["/tags/高等数学/index.html","9951638a522d759d218c473b35bd5e8b"]];
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




