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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","2b23b548892bd0a3e9f63a42448818c5"],["/Anime/小王子电影的共鸣/index.html","b1f4b8b01f8e60285d2c1692a875674b"],["/Daily/Memorandum/index.html","b85dbd7e1dd54a40dc917fbe6d720615"],["/Daily/生活小常识/index.html","e4b8f89d11cd0e577e781d67f3d4ed55"],["/Daily/网络用语/index.html","c937be8f882e3500052c68f298882442"],["/Design/设计用户界面的注意事项/index.html","c966d2584916df400be6b544af8ba91a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","a429df3faeba201015a13bdf24982253"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","9608eccd4d82394ffb7c01c3f91048bd"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","8cbc6faa19cf166cef1935de5402f7ec"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","a8f6f9958aeac133e434d6b58eb49e0a"],["/Game/GamePlatform/Steam/Steam库共享/index.html","c8e3e185fde038c4ddb41efaef15c343"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","43e530178fb3bab26c60af714147ffde"],["/Game/如何独立开发一款游戏/index.html","489ef7b04eab47258328175dc2c5d369"],["/Google/Chrome/Chrome上网助手/index.html","09d77014b681c7d6996b76bd59d2ca40"],["/Google/Chrome/Chrome使用技巧/index.html","7ae9376c94bfa1948bce6bd1f3fba16d"],["/Google/Chrome/Chrome插件/index.html","c00a464e2209accce112b3064262a27d"],["/Google/Chrome/Chromium/Chromium/index.html","ae47bc2bfa9bba31133cc84f86e7ab52"],["/Google/Google搜索技巧/index.html","1154e1cf84f329980a6c8815222b7e3e"],["/HardDisk/硬盘分区结构/index.html","edb500c71ce8c60229be5d4d8f651f47"],["/Hobbies/Guitar/吉他入门/index.html","0629ce8c79d726e37bb4e21566c43a35"],["/Hobbies/PersonalDiary/芦江曲/index.html","4b7a2623746252f24cf8b4787c635b83"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","b8fd25a7751563b88a988d267816bf9b"],["/Hobbies/Photography/摄影入门手册/index.html","58c58470173d1d02b47805446244af95"],["/Interview/2020年字节跳动面试题/index.html","15e5dc1ceb96e56d916673d4fc2d0cca"],["/Movie/HongKongMovie/开心鬼系列/index.html","9b01b871403aa58541ea54f831ad43c4"],["/OperationSystem/Linux/Linux分区管理工具/index.html","435a559661d65e39ed3d60d5fb4198f0"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","40b0f01ac7631e23a422080786cbd8ca"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","084d22e5b3e1e02852ae8aced47a5201"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","5d990e8e8020d022ac007dd99676004e"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","85801e7c4090cdb36f6727c1c7240ae4"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","4fe104ef33957834702cc5bd2100c850"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","cabb6a9b8c8ab1c57fbd4435209738e2"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5d33d0e342ced2559c4b48f5e19978ab"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","0610e8ae8fe71677e18e24c21695278d"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","e1f8413438143934ea6858c1c146a852"],["/Research/Math/线性代数/线性代数公式/index.html","ef73525ce7d4c6157dc95b14b235843f"],["/Research/Math/线性代数/线性代数知识点总结/index.html","aae83dd6cadfcfc8bbcfa27ae98fb89d"],["/Research/Math/高等数学/高等数学知识点/index.html","2bce4d9841df0ed72b644d59651484cd"],["/Research/Memorizing/费曼技巧/index.html","cf059969f2450297a07a9c5744f5ab35"],["/Research/思想政治/考研思想政治理论知识/index.html","96bdece8aeffbebfc8e24d5df0ce5055"],["/Research/数据结构/数据结构/index.html","0c370ef390c05c64944972a73a94300a"],["/Research/英语/考研英语作文/index.html","49fe41b89d781a8ffdd8f324e51229d6"],["/Research/英语/考研英语词根/index.html","efd0897d34c10d0cbf9067ff628936ae"],["/Research/软件工程/PseudoCode/伪代码/index.html","609cb93cca87cc7a78fa320bf457ae6e"],["/Research/软件工程/中南大学软件工程考研题型/index.html","69ac857dad8118536cb275cbcb1ec792"],["/Research/软件工程/软件工程基础知识/index.html","9a245389d83a62bd4768a1ab6f03c473"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","5f0c895498ee874eb5d5df5ba1c10434"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","2abf02f75df260db1b96fd64d17d8a58"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e661434ece3deed6436f69662a6faee4"],["/TechnicalResearch/Base64加密原理/index.html","46caf154b2646c1247c25e5561e2d1f6"],["/TechnicalResearch/CDN/index.html","18131b011b9ed2e0107fdd635eb2f21a"],["/TechnicalResearch/Git/Git/index.html","ee4af273294175b154d19e4a0a4197e6"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","e5bcc454fed4bede772a13331ed7ef36"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","6facca809ea479df76f50704f09b29d0"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","7b68c0a1d7a40d94f7f2c49718d336d7"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","a2e7f4f2c878ac65f0b8a2561189134c"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","f3046097ca847279074004b7fbe529ab"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","be986d289766b4d9a4afe878f6ecd7e4"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","ac0fd662addda7fb411112a787c47945"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","5d06eaad072974d2d3aa56d4ee04deac"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","4e8810f58b8516aec0b4eb8d495a3818"],["/TechnicalResearch/Java/Java基础快速入门/index.html","cad63a09decde25a7f84bd3dfe5e8fea"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","de477f66da81d0e133ebb4f7996a3965"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0ee68be28b3d5291d53774e2506be24f"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","244fd43b1fab203594d614f18bb2132d"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","c4ffbbee324ac48ce70ec3c68c539b7e"],["/TechnicalResearch/Python/PythonExercise/index.html","1e0d9085312b8bea1c4dd285845467ca"],["/TechnicalResearch/Python/Python问题归纳/index.html","86fbb7fe3947efd3596ca9d37a76738f"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","0d23152f804a204a00d3f3b18278037c"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","261a45bd87b069d8aa94676afc4c62a6"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","205c005154d9890eb4647506b8d47982"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","3aafe2b601382c3bff99c65415addaaa"],["/TechnicalResearch/服务器常用端口/index.html","c3a55594bca5489432b6130bbf36ce76"],["/TechnicalResearch/正则表达式/index.html","b8f74a40fe2bf3299e38c7274d84f527"],["/Teleplay/亮剑/晋西北铁三角/index.html","511d4a4ff511c0c8f9d5264daf0484d1"],["/Teleplay/仙剑奇侠传系列/index.html","41e301e984e9f29ee21a6ae32b25bbb3"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","c8b8dab1305c63a40c4d252bb9562393"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","5e35bd988bd3bc9722ef7c8b81352d88"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","1b3f56cd241ada53471de48138f351a3"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","ac8ac20ee9bed9f9af937c4f590d1386"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","6e38db5544f544eb94ef9a514798b051"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","8187385f32d2c97db80a792b98dd0f7b"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","3e60d474d86f6750508bea5ac6b903db"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","bcae6acc05f70039a4a764154a0ffde8"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","373026471422762707e5546b4d6a01b0"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","0dc1f4e8532618c6b9bd52aec8461c1e"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","7c95de8d848ffec154765b16114e5aa5"],["/Tool/Music/网易云音乐/index.html","c2466b7bfb83aca3cde41688327712f4"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","414aff8e63d3bddec4d18f8ad26a1a75"],["/Tool/Windows/Software/VMware/VMware/index.html","b49fcff188cd8288d8dcd400518028ef"],["/Tool/百宝袋/index.html","9164c76badffc12de1c8bb369486b456"],["/Tool/随机获取在线壁纸/index.html","ecd6102547365539937cabee473a9150"],["/Windows/Software/Office2019/Office2019激活/index.html","7367a3e7eef8d9073e49e63e53bde40d"],["/about/index.html","434c8debd009ede6fd25ed2e2be72277"],["/archives/2013/10/index.html","60dc88b42734d8855db8312a83993cef"],["/archives/2013/index.html","2e0e990e6b4bc99de7739d547966eda3"],["/archives/2016/09/index.html","c5854b64fb53df428287fa0a275e651c"],["/archives/2016/10/index.html","71d3757787231a7137d2639e7d585741"],["/archives/2016/11/index.html","4e9eba9d11c043df66e0e27ccdf340e3"],["/archives/2016/12/index.html","98626e8170664f2df67645c2df4e2809"],["/archives/2016/index.html","07bf579c4c175d15c33d8394cb3b7a76"],["/archives/2017/03/index.html","fb416a8c6d38de9fe22ba3ca86e079ed"],["/archives/2017/06/index.html","be5602c84732a52eccaeecfff18070fb"],["/archives/2017/07/index.html","fe527da4aba3c362614d575d1dbaf571"],["/archives/2017/09/index.html","35e19d336113c357124a53e5b98bd252"],["/archives/2017/10/index.html","d52eafc956fff7b0b61893e52747774a"],["/archives/2017/11/index.html","be0246c362145dd605435a6e73033d6a"],["/archives/2017/12/index.html","7e1b86cc097eca5d3f500411ca2d449a"],["/archives/2017/index.html","da86329304e930c65e2da1fd46b07ff4"],["/archives/2018/04/index.html","4af5c5a8e4a2af48f59feab61ea3bbe8"],["/archives/2018/08/index.html","fb696cde164b102b1a35c4416c8bfe9e"],["/archives/2018/09/index.html","77164833917bc3ff73f9ffbe289a945b"],["/archives/2018/10/index.html","bdbc4602761052a28559b81cbfc1463a"],["/archives/2018/11/index.html","f63ea112c705e67bf83386e0ebbfbb13"],["/archives/2018/12/index.html","e514ff16b7a9d6d86a9f05d50e098721"],["/archives/2018/index.html","187e8ec89621ed5e97f35b5accc6139e"],["/archives/2019/01/index.html","b7d1748252e50f5c5028455ff402d0c9"],["/archives/2019/02/index.html","303686d6e350b1f3eb30dfe58f426ea3"],["/archives/2019/03/index.html","6fca145a48182f7086b9cdf30a22596e"],["/archives/2019/04/index.html","c700f727dee5dfeb0d8d243783c741a6"],["/archives/2019/07/index.html","e6a39388085e1679d73db44fd7140c14"],["/archives/2019/08/index.html","085dde21124643386b85e4d69e3546fa"],["/archives/2019/09/index.html","7e0820a7db88789badd5ede029953515"],["/archives/2019/10/index.html","768e326b533119843af3c072305b108a"],["/archives/2019/11/index.html","9086a3ecb6ecb105c1e9a2cc7c194755"],["/archives/2019/12/index.html","64ab1b66bfad2ddd202cc309de4838a9"],["/archives/2019/index.html","ae68dc1cfa3937bd043a98a27ca1faed"],["/archives/2019/page/2/index.html","f2ad6e0bcd20848f989157a2a95f70f1"],["/archives/2019/page/3/index.html","614e9dc38df5a93d55043afb40c18e5d"],["/archives/2020/01/index.html","ebf9d618afa392844bcf6af2a92f6bf8"],["/archives/2020/index.html","fd883ebd75348b0960d368164226680c"],["/archives/index.html","c9af7f2270dd07b7e564076b29fe80ed"],["/archives/page/2/index.html","3a3f5a5d032eb73e8b7957be6f5373dd"],["/archives/page/3/index.html","f41b39955bde3a0ed3f029cda27f1439"],["/archives/page/4/index.html","5bafe1d57bbdc8d6d9c653ad224f05a5"],["/archives/page/5/index.html","563c33287018f72e6e1a0dd2fd305ab1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","fa29c498a55cb673ac6155ab30ce4c46"],["/categories/Anime/index.html","a862875de9c7143c3dd4f5376d101f72"],["/categories/Anime/宫崎骏/index.html","3970e7377c6e061f6891e15f5f4ea59b"],["/categories/Daily/index.html","a0b6ac4dd7c5f7ec05c72c8da6745361"],["/categories/Design/index.html","479a7bfc68fb77c33fd50971a1390a8a"],["/categories/Game/GamePlatform/Origin/index.html","72f9ea3e4665c0d2cafbd74043f41c07"],["/categories/Game/GamePlatform/Steam/ARK/index.html","2d538a977de3e0c51326aa8dae7042a1"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","798acb08197cc8302a64a593985d22d5"],["/categories/Game/GamePlatform/Steam/index.html","0e1200cf4aed9909ba091b506c3df264"],["/categories/Game/GamePlatform/index.html","ad3b9f7cd19c37e97a35a53307c984ae"],["/categories/Game/index.html","d1f19b5d9475c9b31b558953fc412038"],["/categories/Google/Chrome/Chromium/index.html","15c1d4bf737a3816c49d75eef14cde5e"],["/categories/Google/Chrome/index.html","681256e5e4a2fc3534e768a7411219ee"],["/categories/Google/index.html","eef48a7a9a200c8feb1ea2a878b069c6"],["/categories/HardDisk/index.html","ab286cbccf20171802c83d12572bcc82"],["/categories/Hobbies/Guitar/index.html","83e13873c0a4223a777e4673b8be03c5"],["/categories/Hobbies/PersonalDiary/index.html","a16575321f513c4848446757b8a9dd08"],["/categories/Hobbies/PersonalPoetry/index.html","029af883ed987f0fb273a684b2753e35"],["/categories/Hobbies/Photography/index.html","0c3c4986547d1ce39d85d26e11e8c1bf"],["/categories/Hobbies/index.html","890da240a767a89b6847608a321e5055"],["/categories/Interview/index.html","f27832cb2ea253fab93552c2adbe183f"],["/categories/Movie/HongKongMovie/index.html","8a61c9fc5ce49f0614531edb38e5f5e5"],["/categories/Movie/index.html","5465ba80182ac1bfa89e944d412438e1"],["/categories/OperationSystem/Linux/Manjaro/index.html","5ceb9007b576059110b1f50077ed7675"],["/categories/OperationSystem/Linux/SteamOS/index.html","0ab6af2488706a31042d86b117bbaf13"],["/categories/OperationSystem/Linux/index.html","9b540ea6af0d92926a73424a806ba7ba"],["/categories/OperationSystem/Windows/Software/index.html","78574c5d0b6ea89b84e35d58495ee967"],["/categories/OperationSystem/Windows/index.html","77b50c7318083983b7507759c3e661de"],["/categories/OperationSystem/index.html","68e689e6a6b6a9e5e4dd1330f3af99cd"],["/categories/Research/Math/MathJax/index.html","213c9074f9091d2c0f255097f10d3e92"],["/categories/Research/Math/index.html","ff55e4cce0809c8b663c6ff49e655344"],["/categories/Research/Math/线性代数/index.html","ba2514ab75e578c6071f0377988e8a45"],["/categories/Research/Math/高等数学/index.html","fa6cc9c64843736c5fc6d75bfc001da1"],["/categories/Research/Memorizing/index.html","97fe7543584c51eac8c7bb8bef6e044c"],["/categories/Research/index.html","da7f5eb99e107e9688cbfb4cae92ca76"],["/categories/Research/思想政治/index.html","b84ec5870449480fbc30d6757bac610a"],["/categories/Research/数据结构/index.html","0b58ab0eb480eef2be10984136a63b1a"],["/categories/Research/英语/index.html","f79f49e37e63a292569153916f7a5046"],["/categories/Research/软件工程/PseudoCode/index.html","16809bf1406fa8b268e27eeed071ee6f"],["/categories/Research/软件工程/index.html","6d4e81790f6978bac5daa042ef7f1886"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","c408473766586f83358430f97bf7027b"],["/categories/TechnicalResearch/Android/RxTool/index.html","082c99c9180f85be23e41870ee0da0ab"],["/categories/TechnicalResearch/Android/index.html","bed42760e10875026293640efd54c92f"],["/categories/TechnicalResearch/Git/index.html","8dcc3ce993e0db918c29c6efd20b2750"],["/categories/TechnicalResearch/GitHub/index.html","44e92aefdd26726d0feba2608fd3f900"],["/categories/TechnicalResearch/Hexo/index.html","3fd6a6ee846da3d8ceb42beb3d4529c5"],["/categories/TechnicalResearch/Html/index.html","55c88a7819946528f869f4d757527889"],["/categories/TechnicalResearch/Java/index.html","1b18bd98be062cdf5d3a30e14a2c8399"],["/categories/TechnicalResearch/JavaScript/index.html","efd952a6c3ab0bc6ad2fdbde73a2c857"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","04ccd70fe64e39376b095768dcf0a107"],["/categories/TechnicalResearch/Markdown/GFM/index.html","5d3f611b9a2acf25e55d0fdc7724fe3e"],["/categories/TechnicalResearch/Markdown/index.html","0e01c1a5fe71ed38017b8bac730858a5"],["/categories/TechnicalResearch/Python/index.html","fc19d7f3ac138c8f1b164d9e2676085d"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","a9a2970bae63e7a66fbc48bf42292f97"],["/categories/TechnicalResearch/Spider/index.html","20212d1365a3bcd36ebf868fbe3f9ac3"],["/categories/TechnicalResearch/TA/index.html","87c3e90fd26b224804cf96f09292a9b4"],["/categories/TechnicalResearch/UnitTest/Android/index.html","aee30dd29e1c922dda6183e3edff011d"],["/categories/TechnicalResearch/UnitTest/index.html","4426b589a1e7e5c3e0d26cc82fd135c8"],["/categories/TechnicalResearch/index.html","de8e4ad60b124d8037696522a6924c16"],["/categories/Teleplay/index.html","b6aed344d80d811e6fc9bb5e5793fd13"],["/categories/Teleplay/亮剑/index.html","5208988f188b24cef87b8c4799cf6c63"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","40f99d184476acf33333318d5b488244"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","2454480c6d95757ebe7119c5d6394880"],["/categories/Tool/DevelopmentTool/Unity/index.html","2da1398110ff4b039186afd9e6a40e0e"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","041896ea09ea62a86926187bbc0a8b53"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","5a28a3e9147655c7cdccd6176ab772b2"],["/categories/Tool/DevelopmentTool/index.html","9d44431d4dfa37de00a020a851382038"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","1a2f499c165f7100f81f5c89e6e219ef"],["/categories/Tool/Linux/Manjaro/Software/index.html","6be1a21ea5c0633a1343dbdc8b6ec0f8"],["/categories/Tool/Linux/Manjaro/index.html","819938e8d4cd8e22cfba1a1061215747"],["/categories/Tool/Linux/index.html","83346c0f0fa55ce5be2dcb92c1c49699"],["/categories/Tool/Music/index.html","b57f1a8cf31c5bd936fcd719e36ce20f"],["/categories/Tool/Windows/Software/UltraISO/index.html","ca4ca0060a50756d5f90399cf1121684"],["/categories/Tool/Windows/Software/VMware/index.html","c2c01165113a2c01dffb761a856d149b"],["/categories/Tool/Windows/Software/index.html","da701f22bea19d401c029a60d7d28e39"],["/categories/Tool/Windows/index.html","83b49e0870f9b95eb5ca5a6b5ebda2cf"],["/categories/Tool/index.html","81ad22e3b5888cda32965ab6f37ef749"],["/categories/Windows/Software/Office2019/index.html","0e388e3a1972e10b482c8a153f5ff841"],["/categories/Windows/Software/index.html","5fdf257db388712a9246e5b7de4bedac"],["/categories/Windows/index.html","c853e2a464abff96f9372a88540c0085"],["/categories/index.html","0decd71549264563e3e1f4c2a213411e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2e51285939b763cdd81a3aa2f60391bc"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","a437baf3b2d50846974425bc1836784b"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a602b67cd6646ef476fdfd126b591e31"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","8ed784347546f67ee34eef254b4e9418"],["/movie/index.html","7f2619c0b9bfdd1a79888cb911a05838"],["/music/index.html","595b96247e598ab874d648d6b60c8de5"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","b82c0c5760b6919b103401bbebec0b51"],["/page/2/index.html","8f97df224f97b472a4f1448be03a61b0"],["/page/3/index.html","bb94d056b477faa83d6b79fd0531c3d8"],["/page/4/index.html","3ce62543dba9b874088cf6f42d3304c8"],["/page/5/index.html","d197d95cea01430b4208510aa070df2d"],["/page/6/index.html","00bdcfed0345ab790f233ad53336cb07"],["/page/7/index.html","8292aa773d6723a1995247617e92f264"],["/page/8/index.html","0a1582f5cd092cd9cd2aa04bf76a7d2b"],["/page/9/index.html","fe0d5c6e2da7ffa006173d8de7cc1114"],["/tags/ARK/index.html","513f2f92382dee1ca3fae0753fbaa742"],["/tags/Android/index.html","a609d582d4f33b8a2bc657802883aab5"],["/tags/AndroidStudio/index.html","67d6710edc807a5cc2cf712291827750"],["/tags/Anime/index.html","747394a26403476d8508637971caa07d"],["/tags/Base64/index.html","c3480eaa6f6fe55f3ec04d75da70f093"],["/tags/CDN/index.html","01006a57d41bc1e1ef26169d745532fd"],["/tags/CSGO/index.html","949c3424d7438fe1050fc81df102bc03"],["/tags/Chrome/index.html","ab245ceb368f3820162e6f46a4399a86"],["/tags/Chromium/index.html","9afbb8801f2e802075b265f37e77ecbd"],["/tags/Contributor/index.html","982368440f688c3ad1105737053e1421"],["/tags/Daily/index.html","7894aaa64ddca4b99a05643b75343577"],["/tags/Design/index.html","25c6ffa4e54b3d89277181cf4d1305e3"],["/tags/DevelopmentTool/index.html","748d450789ba73a74605f05a9466d3cf"],["/tags/Emoji/index.html","ae2759bb25efbedb6dfd9f2ab40d1042"],["/tags/GFM/index.html","4a6d7fcf59103e889ab83786970d8544"],["/tags/Game/index.html","d9d54a181d07692a98d31de47941fc04"],["/tags/Git/index.html","d4daf837205d92e101357ff55822e9f7"],["/tags/GitHub/index.html","80ad33a48f26c91e597bacdaf75efdc3"],["/tags/Google/index.html","18f61d8134b208a3c944554dc877be82"],["/tags/Guitar/index.html","3d3866f8b590d198a194c7d5a9848c5b"],["/tags/HardDisk/index.html","f754d639119ebca9936430ad0500c742"],["/tags/Hexo/index.html","98e0f7ed6d2a586baccf06761636b30f"],["/tags/Hobbies/index.html","8d3661fc7cbd4c8ef0619e7d00beb6ce"],["/tags/HongKongMovie/index.html","33e2ef6966302ef2813f3e458ec779c9"],["/tags/Html/index.html","7848c71ddc1eabab0fe72569b7799e2d"],["/tags/Java/index.html","5fdc8256447e94d5830e85f68002a7ca"],["/tags/JavaScript/index.html","1b123840677baafd84b61260add269d3"],["/tags/Linux/index.html","94c5731123437e72228b89fb55bd2d48"],["/tags/Manjaro/index.html","0e002e933da4dfc661415ee981d18d6c"],["/tags/Markdown/index.html","ec2058f51f5cef53a224fa14a2f10ba1"],["/tags/Math/index.html","fb2c95711e63af5c38445b1e410d02fe"],["/tags/MathJax/index.html","9877436bd00a8c4a7aa1ab3fe430c417"],["/tags/Memorizing/index.html","2fbf6c07ea2d6d89835a56963bf59adf"],["/tags/Movie/index.html","0c31876185ad20c4c643abaa91afc772"],["/tags/Music/index.html","8c65bf30205ee4281cb0fe975c66e699"],["/tags/OperationSystem/index.html","c6540c1db26599b479f21a715de377aa"],["/tags/Origin/index.html","0c06084f922ec6169ab4f911e7961917"],["/tags/PersonalDiary/index.html","88b7d08f6469ff47ffa574da6fee096b"],["/tags/PersonalPoetry/index.html","6a6e5cf7983d1f4d9d97e60d4dce67a8"],["/tags/Photography/index.html","153d67db11d02a78ca5ce4fb93c94dd0"],["/tags/Port/index.html","60ecba8f6e30d04b0591a7d7ff50471c"],["/tags/PseudoCode/index.html","81bf255852a065b2f476ecc45919e01f"],["/tags/Pycharm/index.html","2ac2f9cfae31f36fdf6ad5264f37aadc"],["/tags/Python/index.html","2fbe051bc0ceec1e9a1d85370cc45d08"],["/tags/ReactiveProgramming/index.html","ad0cd1a29c38be191e9192f6e81fad80"],["/tags/RegularExpression/index.html","144c1ac314798787440df1f2ca3ea546"],["/tags/Research/index.html","967a3615b8e0d44a0dd72e17bc9bb456"],["/tags/RxTool/index.html","35e6f480fb6b1708ee4f9fafa0e83bbe"],["/tags/Software/index.html","766baa7498aabc1464f14b4c9c1373a7"],["/tags/Spider/index.html","c2deb1370991d4663b67a832c434899f"],["/tags/Steam/index.html","08562e6d45b75ec3489925b9b29ecfcf"],["/tags/SteamOS/index.html","2bb784864716bfc3fd36d7c3fac73eab"],["/tags/TA/index.html","0ca48037b99bc70b96d848c3e1c866fe"],["/tags/Teleplay/index.html","e45c8a5a8fbb4d2590d249977d4ae6ab"],["/tags/Thunderbird/index.html","19593944d56d5b636a5d5f2c33e1b911"],["/tags/Tool/index.html","ed443fcc674d8683111b7fa6ac39af62"],["/tags/UI-Design/index.html","3bfa9f5f01ea95fa79c323c7d89e3a61"],["/tags/UltraISO/index.html","2ab4fa0d14291523cd7fb42c27875ef3"],["/tags/UnitTest/index.html","fc11ef2c199b11bd5e623dd3abef429c"],["/tags/Unity/index.html","f7099a6d083f990bc170d927d593b8f1"],["/tags/VMware/index.html","c4910cbd5eca734f5a8bf5dc80195e40"],["/tags/VisualStudio/index.html","239c8c386750935198783988e56427cf"],["/tags/VisualStudioCode/index.html","4e3450e2b85d68bc8812b011e8393b10"],["/tags/Windows/index.html","85b17b5d44ded60f27b91dbbefb47758"],["/tags/index.html","523a8477eb71a262397d5469dfe22091"],["/tags/亮剑/index.html","d857d11de8513c66e5953bf325033853"],["/tags/仙剑奇侠传系列/index.html","d8a005ce70f88b6cc58f2001bb2e8c8b"],["/tags/千与千寻/index.html","6cfe6be31409ce76e9b295b5ad9ef031"],["/tags/宫崎骏/index.html","1a70eae03852f2d9b26f05dcc66e3209"],["/tags/小王子/index.html","acfb54785235e5f49ab3f1ddf71de467"],["/tags/开心鬼系列/index.html","c1af3f9d32737ef1374eea27cfe65aba"],["/tags/思想政治/index.html","0ef8cd027f451b764d1c347b310c1825"],["/tags/数据结构/index.html","109b6ae93b395e92821554c473dfd118"],["/tags/线性代数/index.html","40dcf975bdac274f8363595c1590e359"],["/tags/英语/index.html","ef856cb78b4ff141976b094fe869812d"],["/tags/软件工程/index.html","dbce8c58695f5ebb00fcb2a8a938e495"],["/tags/高等数学/index.html","711faf83a43beee9d7f546d6546d14c4"],["/随手记/Alienware更换电池/index.html","c659d7de8f878c5662421a3d5a2e6ab9"]];
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




