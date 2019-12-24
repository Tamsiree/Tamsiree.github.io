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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/关于《小王子》电影里的共鸣/index.html","def2ab71f1dc8919900c1a5e4e256e6f"],["/Anime/宫崎骏/千与千寻/index.html","05f4e9d0e4ec5e02d1e3376f5b7efd80"],["/Daily/Memorandum/index.html","95d19812374a2bb632016329e3dcb3cd"],["/Daily/生活小常识/index.html","e76ea7c34fde7c7a11b2046444153497"],["/Daily/网络用语/index.html","71c3c85bd4bd532618b8333d5f38dbb0"],["/Design/设计用户界面的注意事项/index.html","8d04cb9ad608ed4ff0c1631e07b7ceac"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","fb8eedac76320877707c8994046149b0"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","23aabb499202efa570338566eac90ee9"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","119e010e0a7c088a919ee361f0b2a2ef"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ef7548d8988e87fb65e551ab2486d71c"],["/Game/如何独立开发一款游戏/index.html","c52036b2e8c43430a07a05a3a65836c8"],["/Google/Chrome/Chrome上网助手/index.html","4ccb84f1cba3b03f24717816e692dc61"],["/Google/Chrome/Chrome使用技巧/index.html","de67282f1902dbfe109c939844e81260"],["/Google/Chrome/Chrome插件/index.html","e92d5dbac29cd2455f842ca305f720f3"],["/Google/Chromium/Chromium/index.html","f054f7552465d49d270fed7c8d581a33"],["/Google/Google搜索技巧/index.html","c00d29c42b11ddda692624c46b8d98d3"],["/HardDisk/硬盘分区结构/index.html","b8cbea7ad37f3b39be7853d7653538ff"],["/Hobbies/Guitar/吉他入门/index.html","78f9f3780be06f2ce86d3d14860f50fb"],["/Hobbies/Photography/摄影入门手册/index.html","ba038c1f0e53b3cefbf0684194b34432"],["/Hobbies/个人日志/芦江曲/index.html","e77376b646fddf50d86cbe5050f904b7"],["/Hobbies/个人诗集/闲情逸致/index.html","7d68b9a2f83385623328b8989dd60b3e"],["/Interview/2020年字节跳动面试题/index.html","7f48f6c94c829aa127b439f1bd2db5fc"],["/Movie/HongKongMovie/开心鬼系列/index.html","6308d7efdd5d0efa6b0cb12cc940f955"],["/OperationSystem/Linux/Linux分区管理工具/index.html","53c08b7b639949887fb487b9943559aa"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","787e7e9d266ad777afd6c6c86b8f9516"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","a3ace81fa87baf8560da2339c8c63ce4"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","34bb4b4dd7f828351e6792be7339b283"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","4b02c6cfdf37793b1995d78fe0dfbf05"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","ab1f9a65c21a7e30b1b0dedbf5b2a48c"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","3af41d9188c66b99715b4d86676bc15d"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","2093eec5be60ece7591290ef29ae7f77"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","b0f1a7a87c89c97756f372a4d90ee469"],["/Research/Math/线性代数/线性代数公式/index.html","e2283899260c8dfc1b4ebf235dda67a5"],["/Research/Math/线性代数/线性代数知识点总结/index.html","f878bc4568eedae9ef4b8643e2ff7320"],["/Research/Math/高等数学/高等数学知识点/index.html","864a000a5e040b6bc1681caa10b647a6"],["/Research/Memorizing/费曼技巧/index.html","14654098f845d3575d17438b5426238a"],["/Research/思想政治/考研思想政治理论知识/index.html","96dac428347148cdbff55b1610419d3a"],["/Research/英语/考研英语作文/index.html","01086c7981e38eacd92c0d3eec695e90"],["/Research/英语/考研英语词根/index.html","93a79130b740965eede83ffe8c61becc"],["/Research/软件工程/PseudoCode/伪代码/index.html","005c92d7639cde54af6926286f6eb1e0"],["/Research/软件工程/中南大学软件工程考研题型/index.html","50116086ae5423efdcf9cb8bd2099bf3"],["/Research/软件工程/软件工程基础知识/index.html","edfb7302a1cd8678ed251442f2714232"],["/RxTool/Contributor/index.html","5571625c7a09779f71b55d5b8b5f1f5d"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","1f7b539ed5303b646cc338fa642cafb3"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","00ef5347757f469898f6fdb6ff0c62be"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","784e6d59341befdd69c5c79dec66f186"],["/TechnicalResearch/CDN/CDN/index.html","55f3cae1412b0955027b5afb1d18ba1f"],["/TechnicalResearch/Git/Git/index.html","6581544adc186a4a4b5d4876a81a5522"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","22d2a12d0779563350e0e19d1959127f"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","73b39a499876376b6f6d9d84e39f9fc9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","247c6f77b4056be7e331bbf52e450875"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","9dc0ef88a7efc55a1be9c74c8507bd90"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","b33c985ad289d5d476de9efa49f7299f"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","3b139b06d6b9939539ca83f036a8c28a"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","4192f741f029b48fdfab52c93ab401b4"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","d2f79152fe4c7f9cb7d1bb6ec9469369"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","aa6f45a29478e97c7543b53434f65cb4"],["/TechnicalResearch/Java/Java基础快速入门/index.html","3f969b4f64612065b41d1b70ca09d0a9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d35c2bc8cb97c1b37f31150272f80799"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","41f6db8a3681956935cd5522d53ea1de"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","aeb55e671cca28bb0564ea32209031b0"],["/TechnicalResearch/Port/服务器常用端口/index.html","404dbe0cf6de790e2be62a7275712503"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","fae3fdc6c4384e1d0ebf24152464132c"],["/TechnicalResearch/Python/Python-Exercise/index.html","fb29f8dda05f6aa058f725d081dd2543"],["/TechnicalResearch/Python/Python问题归纳/index.html","d135b1bdedd281110c78059fa70d5986"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","902db3293554252d4f8383167fd8d30b"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","a5297bafa72983818bb36bb2bbb99d4a"],["/TechnicalResearch/正则表达式/正则表达式/index.html","7319cfbc4b795016a0339777d83aea89"],["/Teleplay/亮剑/晋西北铁三角/index.html","590dcaf5a350bcbbd7ac6b65d0b834b1"],["/Teleplay/仙剑奇侠传系列/index.html","462eb71e1258ea3a29b4bab7646526e6"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","b48dacd0c1850142998ea3878a496780"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","8bdd6debb181efbb21d368006742f18f"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","bc2a213e4ed1438ad9165dcad9dd7cad"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","611cd2f35c875020f344bda884b281e4"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","825efa44d47e03337d6decc188eb67b1"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","c5fc8b8fb0b786e7fd127b57575f696f"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","52ae6544acf9f3dc7faebae6d19f8862"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","1deefefc67997a423763e734fcf1a454"],["/Tool/Music/网易云音乐/index.html","88fb726762cb163e00bb07d855f763c6"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","3771a5f9d66fbd5be5f0ee910408ff28"],["/Tool/Windows/Software/VMware/VMware/index.html","40497dda7fb379ca843c25864ec84915"],["/Tool/百宝袋/index.html","d704b9fa79c7e1a3c1122ba0af6ad657"],["/Windows/Software/Office2019/Office2019激活/index.html","1a08beb4fdb8f9798e0105e56d48cc8e"],["/about/index.html","fde5cb9a16753548359dd79a1ab86dc8"],["/archives/2013/10/index.html","83e83d774462b52fe3ed89406ae82ff2"],["/archives/2013/index.html","403d886ef0baaa812bcfac1f65acc3ca"],["/archives/2016/09/index.html","2bbf52f93c674d924e8585ef5ad8b88f"],["/archives/2016/10/index.html","a9551131c752caae7bd32b8b2d144af0"],["/archives/2016/11/index.html","3fd71fdf5c3c993e0576597f1e33196d"],["/archives/2016/12/index.html","5d71163673d794e80fc4fc64671effd0"],["/archives/2016/index.html","aecd7193e3ff2d0a1fb9763cd021e334"],["/archives/2017/03/index.html","405476ddab60a23f7cb14e1d51aedfbf"],["/archives/2017/06/index.html","5426a950238ddcce4407cdab61834cff"],["/archives/2017/07/index.html","3e0609ac93c9e6ae618249917e91b074"],["/archives/2017/09/index.html","32e0edab48696b593bb5b061d7f642c0"],["/archives/2017/10/index.html","e6b4e6c48c25dcccf64f23a2eb646a76"],["/archives/2017/11/index.html","f587bb0c386df1a706e8a69c12270495"],["/archives/2017/12/index.html","b24efe5805582a08880e6b0c22a13131"],["/archives/2017/index.html","3822fc0511c6da82231864b41ee1dcd8"],["/archives/2018/04/index.html","5003b5c91189a13ad4ccb2dadc2b72ed"],["/archives/2018/08/index.html","4b77fe185c77b5cdf95457470a9b3633"],["/archives/2018/09/index.html","0c234a2d98db8b3faf542e10ae7f81cf"],["/archives/2018/10/index.html","cc4e45e2d4ceb2baf5d8f1f17cbd97de"],["/archives/2018/11/index.html","accba0464c45027ace3f4e142b49cf06"],["/archives/2018/12/index.html","fd9614410594afe0f39b349204114923"],["/archives/2018/index.html","6c9fc0681e0df6bc14d902a5b470c763"],["/archives/2019/01/index.html","ea0feed6037b027be8df435199e94996"],["/archives/2019/02/index.html","737a6b7a01297d4c33fce35672c9fcee"],["/archives/2019/03/index.html","262928df21d9017d87635432d46513d6"],["/archives/2019/04/index.html","0f4ebc50480b1e5e3bded33b14343140"],["/archives/2019/07/index.html","f6f2bb6f398055eedafd9e2102449a66"],["/archives/2019/08/index.html","13bafce72b9b40091c3ec3f843828142"],["/archives/2019/09/index.html","9a07c361f420d5f8441351d5d6ed8f4e"],["/archives/2019/10/index.html","95c78f658a74ddaa72ee0cfe72f994c2"],["/archives/2019/11/index.html","9024f19cda8c7750a8dde25cab6839f2"],["/archives/2019/index.html","05354934c011b7b31f7a0fd87a452266"],["/archives/2019/page/2/index.html","51ef0a64b227a0c68133c09da2b7dc01"],["/archives/index.html","48e7bab7cc7725b94d88a69dc4985f97"],["/archives/page/2/index.html","eee87d7dacc493c271e58a9770683c31"],["/archives/page/3/index.html","3bf273453a07b9fde23ef4ed01858d61"],["/archives/page/4/index.html","787389379f5302621b2276025ac5e66e"],["/archives/page/5/index.html","a806cb21ae9d99409a55bbc9346a2307"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","5ce8202933cbe0da353f04cca51b3d57"],["/categories/Anime/宫崎骏/index.html","d137ad7312a95d1cb59d3d07f0d77f8e"],["/categories/Daily/index.html","3348d5e10feb1ff902386970dee89f24"],["/categories/Design/index.html","81b27a1027bb46abe55dd40e3bcd9369"],["/categories/Game/GamePlatform/Origin/index.html","d6686b83b081ea30f53ea3cbc11932ab"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","c06b4012c9c9225ec6d1650155017d62"],["/categories/Game/GamePlatform/Steam/index.html","6a7cf889169a4b81620e073e9393fd4e"],["/categories/Game/GamePlatform/index.html","b1c5c9cb7b3112431cccd625130aab56"],["/categories/Game/index.html","cc3a4eb70e088d0e8c6e92f729af7fb3"],["/categories/Google/Chrome/index.html","ae55595d5625c6eea72378e0ce7c09f4"],["/categories/Google/Chromium/index.html","97e9e25a5805ce89cb6c90f047d9f90f"],["/categories/Google/index.html","17a3779e0c81b072a10a97f9fa79e0f4"],["/categories/HardDisk/index.html","d5ed104bd8d35bfd09487a04b6431d34"],["/categories/Hobbies/Guitar/index.html","a48f3e3cd66928e032fedb193074eaf1"],["/categories/Hobbies/Photography/index.html","c608ace1e878d8b894adb8a9f3e1ba88"],["/categories/Hobbies/index.html","87a6b9df0321880117925ab2fdadf750"],["/categories/Hobbies/个人日志/index.html","518e52326fd24275ce54aa067731da38"],["/categories/Hobbies/个人诗集/index.html","90d98d03da97ca2a34152af0300692e1"],["/categories/Interview/index.html","30d38c744ca0fde0148fd4ae50a7013d"],["/categories/Movie/HongKongMovie/index.html","49392333cacbdde25fe26643e5bfa0f7"],["/categories/Movie/index.html","897a0a2e292c1fefba7e2f3ea5352a64"],["/categories/OperationSystem/Linux/Manjaro/index.html","063aee2a6c3e24fea1d29744750cfa95"],["/categories/OperationSystem/Linux/index.html","ed4b665f44dcf855a6bda2d8d0bdc608"],["/categories/OperationSystem/Windows/Software/index.html","3848dbe60bff3af3f85a55f24e3caf19"],["/categories/OperationSystem/Windows/index.html","09741366b27473b32d33d40ca0d58b39"],["/categories/OperationSystem/index.html","a5bb20802418aaa0621b0be1d0784d47"],["/categories/Research/Math/MathJax/index.html","4e8b5d4878f56462f07915e22900ff3e"],["/categories/Research/Math/index.html","3ee99c086554e9b604cba3b2c8b1ec38"],["/categories/Research/Math/线性代数/index.html","0fa02e1862e6e2273fe7e4e927b442bd"],["/categories/Research/Math/高等数学/index.html","b6b794dc3c106ab6252331a352f4ee15"],["/categories/Research/Memorizing/index.html","b3e4f057c41ae0e360ec0db9e9f1a2f8"],["/categories/Research/index.html","263a24563f62005a57c7de80363ffa7a"],["/categories/Research/思想政治/index.html","19c08df8926035aa389dfd4e106c0e9b"],["/categories/Research/英语/index.html","5dcbabdf40b7cc16729a80648d3dbe4f"],["/categories/Research/软件工程/PseudoCode/index.html","f0d8a3e96cad66d0535f9f2750161aba"],["/categories/Research/软件工程/index.html","b0802fe21266e75e2466196a32b1b4f6"],["/categories/RxTool/index.html","df3bf4ed7febf63e6a23a74cab4e5dfd"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a94a02a416311c97e47f259bda121356"],["/categories/TechnicalResearch/Android/RxTool/index.html","997377b900d250b75a3e60042bd4879b"],["/categories/TechnicalResearch/Android/index.html","4d02457a3f6f67bced82bcd57ac55284"],["/categories/TechnicalResearch/Android/单元测试/index.html","a601ab4d3d92369e8a7bae8cb7769b3c"],["/categories/TechnicalResearch/CDN/index.html","7ece498e61a2bb057edfeb526785095e"],["/categories/TechnicalResearch/Git/index.html","aba0fdd451ac7165992372a1730b69eb"],["/categories/TechnicalResearch/GitHub/index.html","f9e5a8148b8f5cb66b3c978e794bfc29"],["/categories/TechnicalResearch/Hexo/index.html","54c6efda36de9b10cb8c82200e8dcff8"],["/categories/TechnicalResearch/Html/index.html","776cebfdbf33ad34f5139772b586881e"],["/categories/TechnicalResearch/Java/index.html","23343c37db319c07ea42ab3798abc047"],["/categories/TechnicalResearch/JavaScript/index.html","c90d6865b1ca4bc2b25f591025b36d0c"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","b6ced8d60ede382c5aaa2e8d0eb0a350"],["/categories/TechnicalResearch/Markdown/GFM/index.html","d114b89e6db9058e5b3c4ff2732b6d6f"],["/categories/TechnicalResearch/Markdown/index.html","6b14ca703e30d39da33651239b7e3242"],["/categories/TechnicalResearch/Port/index.html","8d7fe62fcccc61f78c58156b2fce550b"],["/categories/TechnicalResearch/Python/index.html","a92d36ac507b13b2192b557a11726130"],["/categories/TechnicalResearch/Spider/index.html","9a818b1ced7f4a8ce16366ec1a4b2c95"],["/categories/TechnicalResearch/index.html","9673142059eb943ee04d45a1756d4267"],["/categories/TechnicalResearch/响应式编程/index.html","2a7555798951013ba213f0ea11247eee"],["/categories/TechnicalResearch/正则表达式/index.html","0b289c6cd6a439d3bf133601281c890e"],["/categories/Teleplay/index.html","169fab554a46aae384d5d050765358d6"],["/categories/Teleplay/亮剑/index.html","9596d02dbbe18f3aca7d5d2c94a56c71"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","a62307272c28f19d34f1055a97395532"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","15818f810d1d71fd4ae5639b842e9f29"],["/categories/Tool/DevelopmentTool/Unity/index.html","4e1d46c22bc001704ece72628d35c7b9"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","482f3213b3278c6f81d5e1ec2a38438b"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","a958586ac355600b0009193086d5c3a9"],["/categories/Tool/DevelopmentTool/index.html","43646f22a1d540130af10029fe5cd75b"],["/categories/Tool/Music/index.html","9469ad3e74e8ef61881309c322523d36"],["/categories/Tool/Windows/Software/UltraISO/index.html","ba0a4652c3540918170350a68a442a21"],["/categories/Tool/Windows/Software/VMware/index.html","b269783cba4f0e0f83f3b70001784457"],["/categories/Tool/Windows/Software/index.html","21275444b23aa0bd29516135855954bb"],["/categories/Tool/Windows/index.html","9ff8c2e2396e740f9e1117a30b8c873c"],["/categories/Tool/index.html","008412d82be847f843eef6d887863c0e"],["/categories/Windows/Software/Office2019/index.html","87278a4808689a851523d65bdd51c7ad"],["/categories/Windows/Software/index.html","769a9ea4837660ba270266bf2f9e2cdf"],["/categories/Windows/index.html","8f96f1bcde319490570385c38463856d"],["/categories/index.html","ac93cbb63068a86a7969b6b4d4409780"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b04c2cd6e71695bd500494a604a68f50"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","b23e0b1ce3481df41f2b2afc796aeb67"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a9df74ead8d5e13d556baf1491efe0a2"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","1e4edc89f862df9f4c1d82af39d27393"],["/movie/index.html","c3f88ad5d33164c92c69990bac3b7cc8"],["/music/index.html","1bc0253f477291b80d624280457d2f9d"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","142410ece3618ffe5de5a4b0f3df5d8a"],["/page/3/index.html","c8c4ce9c58f72f4c75066f9686dd11bf"],["/page/4/index.html","3e94beb7f0ab9a53228f518ebc66c16f"],["/page/5/index.html","d4b304218df0bff24e558d70c2b95117"],["/page/6/index.html","2ffa6382257c67e4d8cdada8363da465"],["/page/7/index.html","7d93b3f2cb9c639b1d46eba81a4e644c"],["/page/8/index.html","6a328f5af0645e653a84aa4f9178113b"],["/page/9/index.html","950cfe55e8f9607723a8c67ccc943e8d"],["/tags/Android/index.html","74c3ff406980112b8113eccbb5ad82e8"],["/tags/AndroidStudio/index.html","2cba09a8446d0e5c79f2ff8b0fe0095a"],["/tags/Anime/index.html","49bbddd59ebd9905b498d9f0fd8da837"],["/tags/CDN/index.html","3cbe5f8f00632caa5c160fbe14d26459"],["/tags/CSGO/index.html","cf9321d86dda10d9133232b1907bee9a"],["/tags/Chrome/index.html","65ad1fa80a6ffca91fef1d8e24091a62"],["/tags/Chromium/index.html","66865b93908f833ef3759aa358644523"],["/tags/Contributor/index.html","523cf465173a4c8b2efc9b4d80fe5e8e"],["/tags/Daily/index.html","8a5868fca893930f2219abe75495054a"],["/tags/Design/index.html","24fd4c811c05c63d0855e0798a62a07e"],["/tags/DevelopmentTool/index.html","957bfcda7f0c0c8bd0e2067b5edf65fc"],["/tags/Emoji/index.html","be2acedfed55f4f871580fb147280226"],["/tags/GFM/index.html","a8fbdb5a014340b436a0b85ef632275b"],["/tags/Game/index.html","ec960a5f1462a3bc51a4c53cc4f3c65e"],["/tags/Git/index.html","719c5674a8ba9b1cd96d9a016a1cd611"],["/tags/GitHub/index.html","50d43ba04f56cfeb5068b0dd3f86ccfa"],["/tags/Google/index.html","adacee25bdcac61350cf96d3bea32a8a"],["/tags/Guitar/index.html","60829c18aa7ed8aec3c2bcb3739798a9"],["/tags/HardDisk/index.html","1e997392ab4f016f88e9b223a08e4aab"],["/tags/Hexo/index.html","78742552f0b25cd07520e4774b164bae"],["/tags/Hobbies/index.html","16c7ee06134546217c3cd41ee26227a0"],["/tags/HongKongMovie/index.html","d879d10a019f33bb6ba3c1149936a047"],["/tags/Html/index.html","45eab6c0cbe6b1475c4f5f2f66bbff22"],["/tags/Java/index.html","b324627c90c63bd92d1cdf2ff30360ef"],["/tags/JavaScript/index.html","e33e7dff1a5eeb9221f944089de6a129"],["/tags/Linux/index.html","94808c257fdf6e9ac471d5401466cf39"],["/tags/Manjaro/index.html","0444964f1593e52c45eae4a9dc9f34e3"],["/tags/Markdown/index.html","eece80dfef11c154b2591e873f11bd27"],["/tags/Math/index.html","62079d536da2ff369149fa3db72955ab"],["/tags/MathJax/index.html","cc43900ae9f9f949bd7ee0c2e4f94f2e"],["/tags/Memorizing/index.html","dc4e3656e7a24ccee11afbf01044c1c8"],["/tags/Movie/index.html","d594f5f805655ac447a4acc9c2d72d98"],["/tags/Music/index.html","0f81fc79ebeae6301f70aa4bc5c64de7"],["/tags/OperationSystem/index.html","80cf73ce7cd0122c4e15bca3129b89d8"],["/tags/Origin/index.html","4c8222f50e264d8f7a9dfd9f465b56bd"],["/tags/Photography/index.html","d61ee6a90a267d476226b8aa983fc999"],["/tags/Port/index.html","1e8b73b2c3d7bc90a62852a6877c5e6f"],["/tags/PseudoCode/index.html","ada921eba8ec827cbb119638652c5b16"],["/tags/Pycharm/index.html","c73b7ffdc74b7f0073408a87ec3b6fad"],["/tags/Python/index.html","85ea0aab88ba90e3d76cf9079481f6de"],["/tags/Research/index.html","f7b95cbdd709baaf47204b17c75bb715"],["/tags/RxTool/index.html","8d7390230e26f51034bdfc0e99ec7bdb"],["/tags/Software/index.html","af4a98cfdbd661c12f8c522b58a783e8"],["/tags/Spider/index.html","3c7e227126192c239f45690488f2547d"],["/tags/Steam/index.html","379644120088dff10034bf7863d612b4"],["/tags/Teleplay/index.html","463d73de0f7e22e750ba786f177ea84c"],["/tags/Tool/index.html","d3dfc138d785eb8a9a8ffb9fba3ca22b"],["/tags/UI-Design/index.html","6cc03cafe1e34b4f3ddd1527c5c190de"],["/tags/UltraISO/index.html","6097e35528e29daa72dae9e9922bf2e6"],["/tags/Unity/index.html","188c79d7704feac69449530f0274978d"],["/tags/VMware/index.html","d268326e2471b7e679c3a8b4b91f5b16"],["/tags/VisualStudio/index.html","a93485706dd6f4c6c864fcb77c1b10ad"],["/tags/VisualStudioCode/index.html","5c4bf2862775492bae83d3123f695aaf"],["/tags/Windows/index.html","742ffa7535a2285dd5b316b4ac1b9a4e"],["/tags/index.html","7f2a7a4b5580e31b1b1e91020079a53e"],["/tags/个人日志/index.html","7c01f05fba8d0886b53222fcf34f1890"],["/tags/个人诗集/index.html","15d47b80359acf2d28e4cba066b9dd71"],["/tags/亮剑/index.html","e4a41d79f1ee415b5e24889514d89310"],["/tags/仙剑奇侠传系列/index.html","43fb1819f4f916de1b48df12b9f74b99"],["/tags/千与千寻/index.html","e143c82fcd0d978c9d7f87259b4f8ddc"],["/tags/单元测试/index.html","469b2124f77ecd59a182aa8c173520a7"],["/tags/响应式编程/index.html","9c87ae09c22e430cb6cf09e22762e4a9"],["/tags/宫崎骏/index.html","7c5368c8a4bacdf8e1d2525843ec2229"],["/tags/小王子/index.html","5f9a41b9ff09db665b2c3be2c0deb947"],["/tags/开心鬼系列/index.html","52aa93ca09868ac31ddf33ecae873825"],["/tags/思想政治/index.html","edbf26a1b30e0df947d7c0052f80c784"],["/tags/正则表达式/index.html","05ff860ddefbdda5a2baa4d6214ca023"],["/tags/线性代数/index.html","917b38b933b90362df7de210e6ffc7ab"],["/tags/英语/index.html","cd2fd4eda6fb7672f721199452e5f264"],["/tags/软件工程/index.html","7b3841789b2f3928ae18eefc97f59d73"],["/tags/高等数学/index.html","84308342245e2247ac834804b3818a23"]];
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




