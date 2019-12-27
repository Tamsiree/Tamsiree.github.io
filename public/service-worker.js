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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/宫崎骏/千与千寻/index.html","8e62da98bd1d38250423be198308aa9d"],["/Anime/小王子电影的共鸣/index.html","2833039303b3cd31893a6627ee682864"],["/Daily/Memorandum/index.html","5e6bb6b92e4e688efea27e4cd623c1fe"],["/Daily/生活小常识/index.html","904aceab2964fded862ef6e0533185b2"],["/Daily/网络用语/index.html","354b9d397899bb81a2a5b79777d23efd"],["/Design/设计用户界面的注意事项/index.html","d8b18f65a86d9914635607b353e3a153"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","d4e14928c236866e2ff653065ece2b3d"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","dee85a9cbcaa7eccabd0b2c9cf6d27d4"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","354fc126cd53e1d8222b98fef2e245e2"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","8ea4beb8f59498a3998ac3e6be31d9b3"],["/Game/如何独立开发一款游戏/index.html","81683a4e2700d20667f3988f2b53b56a"],["/Google/Chrome/Chrome上网助手/index.html","672b06390e69970abb47a488c188288e"],["/Google/Chrome/Chrome使用技巧/index.html","6fbfcf8c3d353ac02ad533f5850ebc42"],["/Google/Chrome/Chrome插件/index.html","db02a3c7e2136526b56fb501075c37f3"],["/Google/Chromium/Chromium/index.html","178857de44a54e7d0308e7eb041bfa4c"],["/Google/Google搜索技巧/index.html","04eaff255997ba8d6e214a667a356c71"],["/HardDisk/硬盘分区结构/index.html","25363f016b6c839d534449e054a16c83"],["/Hobbies/Guitar/吉他入门/index.html","77ec4ffbe10b6e2f4844c382d6be7d99"],["/Hobbies/Photography/摄影入门手册/index.html","530b7a2382fc4eb44324234ccb8f245b"],["/Hobbies/个人日志/芦江曲/index.html","8a3ea51ebac008ebf7c84391e0c4a67c"],["/Hobbies/个人诗集/闲情逸致/index.html","cac61d2f90d77d8e96aa8c6b6fa1b9f8"],["/Interview/2020年字节跳动面试题/index.html","30eb697bedd4c48694d8ef343b7d7ce2"],["/Movie/HongKongMovie/开心鬼系列/index.html","ef1150870432bf268869f03d12b210a9"],["/OperationSystem/Linux/Linux分区管理工具/index.html","ff0888874689350ea983282eaf51fb48"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","733690290ee95e328fe1ea2784f2ff2b"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","1a85aac3f47b3efefb748ae3f5b476e1"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","4d770ae01e371e7714431e85e3d31bda"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","965856f6f2374fb68db292bafcc97e91"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","4f865aed728e22238877d5b06f1d29b4"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","3e63305d140019a7a0435eae607aeae5"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","3d54859ba45ee5af74664ea50c56ebe1"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","3e59efcdb18dba059473ae9cd22c59ee"],["/Research/Math/线性代数/线性代数公式/index.html","07e082e1b1aa2b267cbb647457de4839"],["/Research/Math/线性代数/线性代数知识点总结/index.html","71500b2ea467f72809eb291a49dbbf34"],["/Research/Math/高等数学/高等数学知识点/index.html","b9616e4241bd5ae78e36b671cfe906f2"],["/Research/Memorizing/费曼技巧/index.html","6ba6a4c2562fcf54c3636750e9fb9eee"],["/Research/思想政治/考研思想政治理论知识/index.html","4efb610ccebdb8c5749f7cc7cc2a6265"],["/Research/英语/考研英语作文/index.html","c3dbbd3fcccd33b34f2b269d224fab11"],["/Research/英语/考研英语词根/index.html","a0da9c9d7a7c9cf62ab752e5a45a2294"],["/Research/软件工程/PseudoCode/伪代码/index.html","0730ae80a1adbb04306ff94dafa76398"],["/Research/软件工程/中南大学软件工程考研题型/index.html","8ba8687d796bda4e7d05dea259cd2bdf"],["/Research/软件工程/软件工程基础知识/index.html","611fb1f89d553661b203906a189b6e6e"],["/RxTool/Contributor/index.html","a525231c89494a64311840adac4fec34"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","512fa26e1a989b47ca5e08f9838b0348"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","ae6ac5f8ae1fd9f1b997cc29f97ecff4"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","3ff7331fa2c4aad52b960503a354987e"],["/TechnicalResearch/CDN/CDN/index.html","62654407bd92b05f079df7c2c852867b"],["/TechnicalResearch/Git/Git/index.html","592108af56d7bd0cb3f0832f3a6ecbc4"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","e29fb8b7629f12e4bb14b66c67f19590"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ddcdda7b96433aa9ab9a5df6241ed75f"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","f94cf34fab23c28831a9ee9ed7b19456"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","3cbc5871c7744dad294882b1e9ba1957"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","3f2d9001f1143d1eceac040024c97518"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","c12f61c04cff77d7d9f1bd8e92cb99bc"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","462febac578fa4b2e718db895bdb4e4f"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","fb06abd8c11187d563541a900ec2d190"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","679b58be947c87e65916b6a1b45578a7"],["/TechnicalResearch/Java/Java基础快速入门/index.html","64efbfa366cf2e21956e8136741b07a0"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","cadbb393dd8cd7d142ac1d69e92efad2"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","a15735b969e2f9635c8d6fe9290e96f2"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","3b89921c66eeae4949f3300726510254"],["/TechnicalResearch/Port/服务器常用端口/index.html","69e4021dbfcff89d73dd7e684f6bfbac"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","d11447e2fca53ca34e3bbbd6be8afe8f"],["/TechnicalResearch/Python/PythonExercise/index.html","533b708ce48c914750a2a5f83b9135df"],["/TechnicalResearch/Python/Python问题归纳/index.html","15b6302842fdbaf254e3e6d2997283df"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b3c427a6f25aec2c127bc4d847013e5e"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","bbe94748be9124a70541fcb966860a7a"],["/TechnicalResearch/正则表达式/正则表达式/index.html","3471f64501e70d2c68b2f18631149924"],["/Teleplay/亮剑/晋西北铁三角/index.html","8614e5f2dd2d334ddb11ef473491198a"],["/Teleplay/仙剑奇侠传系列/index.html","aaa6e96622ac5a7cf2c3681bc5d58a52"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","c50e339dd9dfd8c1973f1d35e5880854"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","453b94eb08518e0393c9d7199618f79b"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","8c335accbb98ce77dcc39e3d24bec734"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","3bacd37b634cadfd74db4bb2507e122b"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","5d111cb0a5ee1046942189943d715a0a"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","60183d02a805f8487bdda33ec50f9032"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","58995e4886d0454b701b4a47956ec1be"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","922f88e399a308d85bf4763eb01ad32e"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","280051abbf4218c384afccdcc5a9d4a9"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","c68706cc823bdd3c732e3dcadf3cf59b"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","01e1e09a3ad8ec1292b1fb58a2709457"],["/Tool/Music/网易云音乐/index.html","228144971ebd28a53eb94a7648e795ff"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","9b70a986eae81fb91fbe52694432487f"],["/Tool/Windows/Software/VMware/VMware/index.html","db61017e0ea22061d166bff290a15902"],["/Tool/百宝袋/index.html","a7a38ebf444eea6ac4d5d9d367481424"],["/Windows/Software/Office2019/Office2019激活/index.html","8c5e7ccc7c800f16cdd2b90168e4b950"],["/about/index.html","2a15e631bec805b3c6e867dc5389027e"],["/archives/2013/10/index.html","e3413735ba2470fcf7b5e8879090cceb"],["/archives/2013/index.html","e0dfd45b1667f4916eadbec34ae50e5e"],["/archives/2016/09/index.html","caa4292e37249cc742325fc0f1a18742"],["/archives/2016/10/index.html","b0905d3fd565e069b5c7f2fecb8928d3"],["/archives/2016/11/index.html","698ca0925faf5a0000bc7ac3e25444bc"],["/archives/2016/12/index.html","d3ef7828caf5c4978f96697bbda5aa89"],["/archives/2016/index.html","3017057e39d23077ce27710986492f3b"],["/archives/2017/03/index.html","7051bdcddfda4eac696e80c1cafd63f7"],["/archives/2017/06/index.html","88752dc1e19ccbb9ea5e0b4c330de8b2"],["/archives/2017/07/index.html","3c8c6fba59cd1a9490828d5070c666b5"],["/archives/2017/09/index.html","7ec4b56c8626ede2fe213876b0b56449"],["/archives/2017/10/index.html","7a26658627ce4786b64736af8335bf86"],["/archives/2017/11/index.html","1b93abc8aa1f2f1d602524459e575830"],["/archives/2017/12/index.html","3d93452b07a72d00cec0dd1b195bf70a"],["/archives/2017/index.html","9e34737f55d8b5e164de7a9efa3d0f9e"],["/archives/2018/04/index.html","382ece1e50b44ba56339bb042b93d15f"],["/archives/2018/08/index.html","38af084cb370cc87daeb5e6bfab8b026"],["/archives/2018/09/index.html","9fa7fd9fcf33231f78c11fd6ed4f618d"],["/archives/2018/10/index.html","bbfbb4e85fc3f05ca993a442647647eb"],["/archives/2018/11/index.html","927a952d089e084938d9873610e08413"],["/archives/2018/12/index.html","a93ef279586cb2ca311359211ef356bf"],["/archives/2018/index.html","9f31c477c009d42b03cebc9d16f1a127"],["/archives/2019/01/index.html","5ea1e647977fb9e433260cd9eaac0e83"],["/archives/2019/02/index.html","3a37bbbcbb7af9a865d260bcf0b2c14d"],["/archives/2019/03/index.html","6c100b2c30441139d6f100e288f730ce"],["/archives/2019/04/index.html","001644f9319ebfa5491ed3f4fe28bd6f"],["/archives/2019/07/index.html","ec0205a20cf0a02ba63d9512bd13786d"],["/archives/2019/08/index.html","97363cfae5add7f9a0de42cc99f17ce6"],["/archives/2019/09/index.html","b32ef922b477b708bceb8cf7616d57ce"],["/archives/2019/10/index.html","c5d71c1f9d5bd414dd0ad9d29fe99c7b"],["/archives/2019/11/index.html","f457f42a77f921be7a862b6fe3a8e895"],["/archives/2019/12/index.html","7c708c4e067d39dc08eb242521208b81"],["/archives/2019/index.html","8fb24eef1557a4f558b5b8c6e15f4c46"],["/archives/2019/page/2/index.html","bd5b297a621638b53f81c26541e16245"],["/archives/2019/page/3/index.html","3516d7071abdba1b46ac5db0644f6964"],["/archives/index.html","a6ff2ba438f2ba2f88d7903bf0e81a2b"],["/archives/page/2/index.html","05a47abed9d734e8ae7416e1da3c64c4"],["/archives/page/3/index.html","0126a5128052416ee90f41279a04d4c0"],["/archives/page/4/index.html","4647dc65f7e6714774924b96477b060c"],["/archives/page/5/index.html","fe3b73b224fe68c5655fba0a3f3c2563"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","8e639c5544146b7329a39c963b6c115c"],["/categories/Anime/宫崎骏/index.html","742ff4b0500955b860cc0c5d42a831a5"],["/categories/Daily/index.html","4033c715f18ba45d8ae9ed4dfef90be0"],["/categories/Design/index.html","5593587e31f00da768eb45d4499bc4e1"],["/categories/Game/GamePlatform/Origin/index.html","37c07b2be8676e6cdd06fea1977555bc"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","0ecba190a951b1f1042a9c065cf00f16"],["/categories/Game/GamePlatform/Steam/index.html","eeef6c60b9bfcce04aed958e9253fa13"],["/categories/Game/GamePlatform/index.html","4bec62e78a7bdd1e126e3213b3453563"],["/categories/Game/index.html","c14b22c94a7dd58bed5b86289147a7ae"],["/categories/Google/Chrome/index.html","5db5451339d29d9421f5fff21ccdaaba"],["/categories/Google/Chromium/index.html","bad8853298e851a43e65ad074bc4eabb"],["/categories/Google/index.html","f512b3e2fc41731e94bdd0eb95d72221"],["/categories/HardDisk/index.html","375b5932b351fde0b24566ea2a5044bd"],["/categories/Hobbies/Guitar/index.html","be3efe9ebd10f892ece0c43160716db2"],["/categories/Hobbies/Photography/index.html","38a105dac2ad61694dde3dd80741655b"],["/categories/Hobbies/index.html","3802df9eb4926cded7797fc0453ecddf"],["/categories/Hobbies/个人日志/index.html","605cfad7b1d4aff82ff6bb186b5c7234"],["/categories/Hobbies/个人诗集/index.html","a38c9c9b9cc14e765c32817d47e8a8fc"],["/categories/Interview/index.html","1dc8e8071e51d90af94d9cc4bd95f7da"],["/categories/Movie/HongKongMovie/index.html","0c50efc70ca2603bef3a1ce80a264c00"],["/categories/Movie/index.html","ddcb72d8998868c8af3e0011b5beb05e"],["/categories/OperationSystem/Linux/Manjaro/index.html","f3e6c574469b9d07da270046c852cd94"],["/categories/OperationSystem/Linux/index.html","27fea52e8c2d95a52f0ac50698d4190f"],["/categories/OperationSystem/Windows/Software/index.html","a70bee919ebc904f6d31ca60a8ba9a3e"],["/categories/OperationSystem/Windows/index.html","443feed61b814a9825e80c22f7a85a97"],["/categories/OperationSystem/index.html","fcbdc1d9df33d883a90698984ed98b13"],["/categories/Research/Math/MathJax/index.html","e1600e1bdd168dec099276716d061716"],["/categories/Research/Math/index.html","9a9724f871d4085a29ce6ed1cecc77ba"],["/categories/Research/Math/线性代数/index.html","bfa18b4989970f4058109f77ee402e25"],["/categories/Research/Math/高等数学/index.html","eff9f66c259aac544afffefa965b8724"],["/categories/Research/Memorizing/index.html","6f074a0788368763d71f018e6467bd11"],["/categories/Research/index.html","1ac8f416943fc3773788e0b0281a127b"],["/categories/Research/思想政治/index.html","96e5bfd0ec75eec287d5daf8e933a1b9"],["/categories/Research/英语/index.html","29a7bb1c127e20a9dbd5317ca6dd825a"],["/categories/Research/软件工程/PseudoCode/index.html","e840b2a55cfdd22d98b1522e1f3f331d"],["/categories/Research/软件工程/index.html","aedef83b10ade4b50e412405d20d8fc6"],["/categories/RxTool/index.html","65a9c480a9771d81c1857d8ad64b4c81"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","318218c596ff8336a1c007a2e4636a03"],["/categories/TechnicalResearch/Android/RxTool/index.html","2718d9cb81f7ffed9f9c77532bef9fc7"],["/categories/TechnicalResearch/Android/index.html","ff64669ee56730bc6c7e5c6921a6718d"],["/categories/TechnicalResearch/Android/单元测试/index.html","4323bde6c084eba16e15f2e169c36a5e"],["/categories/TechnicalResearch/CDN/index.html","b12590f8d54114e700f054d80772dae5"],["/categories/TechnicalResearch/Git/index.html","0b9549fa507721bafbf359ea2daf11a7"],["/categories/TechnicalResearch/GitHub/index.html","a6dd9f5e39a37e8dc538c16bf9dcadda"],["/categories/TechnicalResearch/Hexo/index.html","c4d8c86cc72c8b693fcbfed445910081"],["/categories/TechnicalResearch/Html/index.html","59eb9d1a2859d329c66b1f3f16f149a8"],["/categories/TechnicalResearch/Java/index.html","6ed3e5596279b534715865433102bab0"],["/categories/TechnicalResearch/JavaScript/index.html","f223d2c8cb7b27679816641558ea1d9a"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","aa1923bb883a0f02cc2cf5ff16700244"],["/categories/TechnicalResearch/Markdown/GFM/index.html","632f776fad74b4cafca3dc8f92b45e0d"],["/categories/TechnicalResearch/Markdown/index.html","019a32394bd328b3a907f3710e5bcd11"],["/categories/TechnicalResearch/Port/index.html","33b51dc34cb874b05956e268e3b6f3c2"],["/categories/TechnicalResearch/Python/index.html","72d012568b2a53a6e6187604594cab1e"],["/categories/TechnicalResearch/Spider/index.html","64306338e87d29c102ee4235da6f4abf"],["/categories/TechnicalResearch/index.html","a41e894fcf3a95995c3bd4335ffa5464"],["/categories/TechnicalResearch/响应式编程/index.html","5bc22bfc79f43b8e8b38e29d16b6f48b"],["/categories/TechnicalResearch/正则表达式/index.html","ded948c1eac70ee9a44e5803b691b354"],["/categories/Teleplay/index.html","999f194ade0a328acb0eb24a32c0ac4e"],["/categories/Teleplay/亮剑/index.html","10f847b713744e32d0bd439b8d6d9322"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","7acd4fb5abeacc2736bc7f8baaa6cade"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","93c48a33a8b7fe5ffbcb71b470d157ee"],["/categories/Tool/DevelopmentTool/Unity/index.html","524881a1267cc1059b04d9d18eee13f4"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","6d8787e99feca3ee2dde1b71e21ac250"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","d1fc19a7c295c667fa1088bf578c31b3"],["/categories/Tool/DevelopmentTool/index.html","4c33ecf2920540590998b6df7ebf494f"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","be15a35a84100d40863bc3adae36f320"],["/categories/Tool/Linux/Manjaro/Software/index.html","732ca8f6eca4dab762d67ecee3d284ad"],["/categories/Tool/Linux/Manjaro/index.html","c7e4a32c0a0ecdbb1c06f7b8aaff00b7"],["/categories/Tool/Linux/index.html","027887d3f6f710e9017ff1ad14d8c73c"],["/categories/Tool/Music/index.html","66db6e1be2559f811eab1e4be998411a"],["/categories/Tool/Windows/Software/UltraISO/index.html","db02bfc9fcf56a995904ad9ed2f765a4"],["/categories/Tool/Windows/Software/VMware/index.html","de0d0c38e350cb961c4a6db4731e6b60"],["/categories/Tool/Windows/Software/index.html","78183b34a899049bf9b22fb5d75c2882"],["/categories/Tool/Windows/index.html","217fc93ff377499d6a5439b0949c1cb7"],["/categories/Tool/index.html","db3dc74c4cb4f160b77944af8dce4765"],["/categories/Windows/Software/Office2019/index.html","d81c98ffa01fadb1cc07fe26f2c214be"],["/categories/Windows/Software/index.html","08635194dc160c3fb5698ed5f0e5b9e8"],["/categories/Windows/index.html","226bc281daedc3b0b206787952f4e4b4"],["/categories/index.html","61f7ef85998f604ad4e786450faccfbf"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","44346424d6d4b71a3a5d021b6c1b78d3"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","2918c5655b59d33a7722710dbcd39d2b"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","093973b3c9477b56582a365be1df1e61"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","c1f858601f42dfc3ec8054335cfe7684"],["/movie/index.html","8a9cec5d27482f4318a3a1321892b8cf"],["/music/index.html","fd32c0ffe28525da87e8ae96b635abe4"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","aee26c4ceadb4076c5a4c764c3e35c21"],["/page/3/index.html","82a14e80b869c881b05623505f14b1f3"],["/page/4/index.html","297419643f7d9d37bb178f1b1c56ae5f"],["/page/5/index.html","987b6d2e8da1a81375eabf96ded054f3"],["/page/6/index.html","339115ef63ba822d484e975137213bf9"],["/page/7/index.html","9aee588a36063657177d06685a3ce475"],["/page/8/index.html","09aeca6af22554a186d4d9072d58d01e"],["/page/9/index.html","b2a70dc35c9cc11690e4a80d844fa3c4"],["/tags/Android/index.html","187ec1ba8a503c905bb35dc2bda7ef22"],["/tags/AndroidStudio/index.html","3197158e250d96135f606ab62fed9456"],["/tags/Anime/index.html","b04ec2534a055f91037ef46c5c1d475f"],["/tags/CDN/index.html","a3c7ff1730ce20ef08a3308875396579"],["/tags/CSGO/index.html","a24e7b9ea6f463ba786a15993a0c6ea0"],["/tags/Chrome/index.html","672c76fd8ef305e8888979ae4a755349"],["/tags/Chromium/index.html","35a672ffa1ff4f57a261e6200e88f6c2"],["/tags/Contributor/index.html","933c6a4132c1663494e029dbbf683f16"],["/tags/Daily/index.html","25f573721c9e584d9fe6fd658212d1a4"],["/tags/Design/index.html","80ac8bd6cb8146ad2ea73ae6fe8a1d4a"],["/tags/DevelopmentTool/index.html","45e4a6238137b62af87588ea969afe8c"],["/tags/Emoji/index.html","f4587a7794e054dd6ff681b1928d75dd"],["/tags/GFM/index.html","f4c3e282a8577419148de185ed6601af"],["/tags/Game/index.html","8ac9096d7a2b3f02955618fbc95127bd"],["/tags/Git/index.html","0f1de614054f217d7a9f269226957ebd"],["/tags/GitHub/index.html","58d937c2f1b47ca9c9127078db3a593d"],["/tags/Google/index.html","da677cd913351aec4307b89dce43b385"],["/tags/Guitar/index.html","7f04fb682ff42700b7fb35aa16da2d03"],["/tags/HardDisk/index.html","c42e64656d2f797fcb6df0b2ad17c105"],["/tags/Hexo/index.html","c4023c5b498b70f59f184338b82b5681"],["/tags/Hobbies/index.html","37e56488cf2f35ce9ad178b75a0e8794"],["/tags/HongKongMovie/index.html","2ac6174328ff614916336a655ca6c242"],["/tags/Html/index.html","31b82b36d566bd249b91731cefe7e58a"],["/tags/Java/index.html","30c40da357eb15d054b339a7a61ccaa5"],["/tags/JavaScript/index.html","e35f56381571bb05c1c90d032c0f2b9d"],["/tags/Linux/index.html","6b3a54105ecfb671f30a33669cf87629"],["/tags/Manjaro/index.html","8264e3d8eb5bd5e25c98726c049a11c0"],["/tags/Markdown/index.html","dbf4a250a740d1cf88b84ecb685331b0"],["/tags/Math/index.html","751a2416c3c17034d956c381d2ffcbfb"],["/tags/MathJax/index.html","1cf8b488ab466d0ed28dfc0293b55e53"],["/tags/Memorizing/index.html","7fdf5531fade654acf20099a9a4fa45a"],["/tags/Movie/index.html","e47f58354238ef844a8820cf3fdcb7e6"],["/tags/Music/index.html","4766cf98544166070ccfa83f8f1a19e8"],["/tags/OperationSystem/index.html","6f14be27fb510952ddeba2abb3cf8f2f"],["/tags/Origin/index.html","0e066d3ea4d189ff5f0885dd3a6784df"],["/tags/Photography/index.html","ecde71b4f0341dd18c1aca820c63d06e"],["/tags/Port/index.html","eea86151582c0f959f7ae38d2523abb7"],["/tags/PseudoCode/index.html","b97abe95dd98264523036132cf4330f5"],["/tags/Pycharm/index.html","3283c6310a30719932fe44d3141f896b"],["/tags/Python/index.html","0002d37eab6d6dbe1eb2c45f17b3f92c"],["/tags/Research/index.html","aa9a3aaa5a28dd90b0ab35538e15f8bc"],["/tags/RxTool/index.html","abe402adfea296f571ce53f3a1af8c28"],["/tags/Software/index.html","3b3aee1e7fcabe093a5e3053c62371f4"],["/tags/Spider/index.html","f1026eaa5d567dd6154b1bfb91662453"],["/tags/Steam/index.html","04fa77600324ac5930a93bd94ad10d00"],["/tags/Teleplay/index.html","f660dc5a9e6e4bc4cc7fb80bd6ff4fb7"],["/tags/Thunderbird/index.html","4b5d25cf8349a0886a8ac2b3e6f4ea6b"],["/tags/Tool/index.html","d7700fa7599a96720a83d2153f22dd5a"],["/tags/UI-Design/index.html","1a8b50d820214fdd23f8b4e11a0a0a68"],["/tags/UltraISO/index.html","7c5d51a3b4c4b75d61a7860203bad5c2"],["/tags/Unity/index.html","a1a56276e2a70ba61c5e49e7b07e592f"],["/tags/VMware/index.html","810938053edc445d790ed875afd6cc3a"],["/tags/VisualStudio/index.html","e31ad0f8862e1e3ab206471477f43c93"],["/tags/VisualStudioCode/index.html","b92ad484f8ded79565a9803c44c1f3c5"],["/tags/Windows/index.html","94d2baef4fce643031993462b673ed1b"],["/tags/index.html","b82c5615dae295e346eeaae9ffc5da0e"],["/tags/个人日志/index.html","8eeb4951ae102658f8fedd670df8dc50"],["/tags/个人诗集/index.html","7490bbb78f576d6f28bc5da84377c446"],["/tags/亮剑/index.html","39e1f1498a905a53b7ffdc39dfac4048"],["/tags/仙剑奇侠传系列/index.html","baf63cceb24fe48a088885ef58772086"],["/tags/千与千寻/index.html","d992da2d4907d7c6455c6ca603dcb1ca"],["/tags/单元测试/index.html","2d29b92c774d63fb804faf188868161d"],["/tags/响应式编程/index.html","26005743b301fa0e6f2d307bfdc1f3d8"],["/tags/宫崎骏/index.html","0e0af967d23508977cfbed2545b3a735"],["/tags/小王子/index.html","1350c2c4d6ee982a8657fd20ca901270"],["/tags/开心鬼系列/index.html","36cbf399dc3a86a11c59298d0b29ad76"],["/tags/思想政治/index.html","48cb518d9c9c4201842363b41af66013"],["/tags/正则表达式/index.html","f9d366cce81346195576cd280f63d243"],["/tags/线性代数/index.html","f52ab4605493a4ea0ebbb76bba3c9125"],["/tags/英语/index.html","3963eb8004614c00f29e01e25cfdf449"],["/tags/软件工程/index.html","cd2ba7a65d5529bab6d9428f8fa4e836"],["/tags/高等数学/index.html","5f0dd8fba9563eb9b37afcfbcd5fbb84"]];
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




