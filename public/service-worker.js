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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/宫崎骏/千与千寻/index.html","061feb2aef6cb2da7ab8d3ae68a4ac4f"],["/Anime/小王子电影的共鸣/index.html","9dc4f26be9beeffd692ba201baddcc0c"],["/Daily/Memorandum/index.html","ec0d92bba54e8c065ef61f8e2242e6df"],["/Daily/生活小常识/index.html","bd43e56a84940705eef64c7bc4de4162"],["/Daily/网络用语/index.html","e4bea78b06d847f57250b233d31b4574"],["/Design/设计用户界面的注意事项/index.html","80b6649f99907054effe83acb2e3737d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","ded63b0077b8b68f7ff2906acd708f21"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","1c5425ab0efb556efede26f68319e323"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","baf82dbec5e35453f58ee7a5771ca9f0"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","f2e5cc0d0eb3433ff6994c8c100ed1a1"],["/Game/如何独立开发一款游戏/index.html","24cd9619b440a268246cc72c5172c1fd"],["/Google/Chrome/Chrome上网助手/index.html","4d99051dc79f05fac865a4aefc41e65a"],["/Google/Chrome/Chrome使用技巧/index.html","e91374d7c5df72fadbdaaa9718ffdb54"],["/Google/Chrome/Chrome插件/index.html","ad8de276e34f5a1012b04652c4aa989d"],["/Google/Chromium/Chromium/index.html","1042a4321780f4ca2f94a6e32ce9b4bc"],["/Google/Google搜索技巧/index.html","26d369a2f08b17e28fe0562ddc6d83bc"],["/HardDisk/硬盘分区结构/index.html","d7939ee4bbf7ae41465d928ad937917e"],["/Hobbies/Guitar/吉他入门/index.html","ffec5651febcd0fe16dc17590c23f93b"],["/Hobbies/Photography/摄影入门手册/index.html","548a2c2c47e548d350f58e0607aa3010"],["/Hobbies/个人日志/芦江曲/index.html","ce238ddb4e58662a7cf2da14dda0497d"],["/Hobbies/个人诗集/闲情逸致/index.html","aef7c57c349d97a17e892763a48bc921"],["/Interview/2020年字节跳动面试题/index.html","dc42fad51a39b88487346083f2911018"],["/Movie/HongKongMovie/开心鬼系列/index.html","6155035abde2eddae333c40e6044bc54"],["/OperationSystem/Linux/Linux分区管理工具/index.html","6b70f643db446afb6b0dd3ee9dd485a6"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","2c7e094f8da2721fbec418092ba76c05"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","899aafab529e527841f31694ebe75f0b"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","54f5b869f5af781d594642e4400240af"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","e136dd2680ea4dbe5ea2cb20613b9e7e"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","d8508659a458a704be06717b60f0c5b6"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","2e2161e9d569b0fb985c6b6563a53b03"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","7f6d8513efa9ddc06ea2e8ddcf04d5df"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","34a727f8e7707302319733cf466db208"],["/Research/Math/线性代数/线性代数公式/index.html","cf0de11e55f5e8659b7ca0126a17229f"],["/Research/Math/线性代数/线性代数知识点总结/index.html","1a534ca53dbf3f61040d114795a6ca44"],["/Research/Math/高等数学/高等数学知识点/index.html","7da82e108a28e90711daa2f573f617b3"],["/Research/Memorizing/费曼技巧/index.html","feb1ad4cb74edb20da205074e60e8665"],["/Research/思想政治/考研思想政治理论知识/index.html","e94f44e54f177003c02ea7d67451dea1"],["/Research/英语/考研英语作文/index.html","43d5676e250b7c96a410656cd923e4cb"],["/Research/英语/考研英语词根/index.html","8a9fa409177a25e3655957ce2ac9f91e"],["/Research/软件工程/PseudoCode/伪代码/index.html","792e8248feb28d897a78cb364a3ed1d8"],["/Research/软件工程/中南大学软件工程考研题型/index.html","67d07acf37c05eafd8c2e4880c77acdf"],["/Research/软件工程/软件工程基础知识/index.html","3c0ef684666060d2ad24bcd49a0d62fe"],["/RxTool/Contributor/index.html","09ddd8cc556d52bb42af0dcdab529caa"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","6f30d089b4d09a281582759c514ba277"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","920a1f7f82e89700fe7f4aff986e8c1f"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","6b0afd7321bceb0a6126ffe9db1d88e0"],["/TechnicalResearch/CDN/CDN/index.html","084f6c97ff89de5ab2e4f078cd1be58b"],["/TechnicalResearch/Git/Git/index.html","8fe158e7d4dccab68dc8e4159f4f42ee"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","26a449f9ba613117799e9fe4e9b622b3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","e2d31c0046c099911934a27889ffd6da"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","c5e756091e8e2b82bd1f9a00b27c5984"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","8c967342f8dc76e6235b79259dcd1857"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","65e88d768c33876cd4a46664df4866a7"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","d31548fc2b419a5256c6910f972b0af2"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","b2585c130936a97b0e490dd55af23718"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","2d2f12173e9c3328e80f686dd717063f"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","43d679d308d1387f240f287a8ef6639a"],["/TechnicalResearch/Java/Java基础快速入门/index.html","7c9207f9051e937f73d43392fb3bd615"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","1913fb49dc21651e82672b5e765f6017"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0bf30d15564874a11c05502a1ba01a87"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d77350bd9104b23807208ab2f9f7da82"],["/TechnicalResearch/Port/服务器常用端口/index.html","3aa5a8a19ace9a4d85d9ffec0095f4e9"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","352c1d03d7d5a8362bc5261a0aa8ac67"],["/TechnicalResearch/Python/PythonExercise/index.html","17122eb22c0a431a07fd12e4b08f2026"],["/TechnicalResearch/Python/Python问题归纳/index.html","c34e27dfcfb794f7ef4cb318100c756c"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","4f39e141597c60e0a081294aa7f446af"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","55832b2eb6e688c46a4f0f5cb3f3b336"],["/TechnicalResearch/正则表达式/正则表达式/index.html","f182204c9d0c552a79acde03b4e71392"],["/Teleplay/亮剑/晋西北铁三角/index.html","e269f438be6f500b007f54774d0b52d7"],["/Teleplay/仙剑奇侠传系列/index.html","25afa6a6b0f0c514dfc21651e77507f6"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","221c09436cf454116728b4cabd3fbb99"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","f60f64b573bfda2434d20a16c4c90576"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","3209135be1f444345a72ebb42b3975a2"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","48c3938d9bf1f4e62bed634d01f15ccd"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","d5c0277a6c7a446bf8f3b95888fb847a"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","f07162906aefc646b716eec6dff72cd9"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","25447d958117f51bf4e16a5533f2486e"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","b0c8c1a152f4e4efc582cc4dd2195545"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","e59186c0cb3fc713543971e042b192a9"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","89061ed508630121c1c5a6e06706ac1e"],["/Tool/Music/网易云音乐/index.html","08136e4dee9590bc7ede2dc708b475ed"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","f93c530ae432eeef73d43baf947aab7b"],["/Tool/Windows/Software/VMware/VMware/index.html","52d0eaae01cc2cade317897b769013ee"],["/Tool/百宝袋/index.html","e6c04aa5eb8328578a2c13de5a6e024c"],["/Windows/Software/Office2019/Office2019激活/index.html","c31f3fcdc8238d8f19d0f9827c9e44fe"],["/about/index.html","afb2e89b2ac5e13924e794a634242875"],["/archives/2013/10/index.html","c0d4d5513959691c11aca5a2994c6089"],["/archives/2013/index.html","acf43dc9e1378a9079798daa6b96082b"],["/archives/2016/09/index.html","a4802617649b3d13b0e1c481c8a48b74"],["/archives/2016/10/index.html","1413f774b10f5359afffc1aed1a39d6b"],["/archives/2016/11/index.html","d9eb71bd1b3597f21dfb000de5d60f4c"],["/archives/2016/12/index.html","45207089696504d0e0e8fb143226b5ea"],["/archives/2016/index.html","27de38981ebbe0d303dea43e06e6da91"],["/archives/2017/03/index.html","15eebf9d7237aad902c39c2662e76fab"],["/archives/2017/06/index.html","cbf753ec8aa95ad6160257ea3c2c6b14"],["/archives/2017/07/index.html","1380ba600f8c6a508f438e9034dcd92b"],["/archives/2017/09/index.html","00696a16e17c22a5bdbbb37abe4cf414"],["/archives/2017/10/index.html","c0bdb9706bfe9343bb7f1af3ac92ee22"],["/archives/2017/11/index.html","49f2d41674f5ed92191ad30b0c290c77"],["/archives/2017/12/index.html","3c7d0a23a4af1a851813ca00b798bbac"],["/archives/2017/index.html","fd3d252bf21eefcf1913f218d7e3cb48"],["/archives/2018/04/index.html","7621adc25661822d7a7b348a1cd30f94"],["/archives/2018/08/index.html","d529b65473e68077095bea4873736ebd"],["/archives/2018/09/index.html","006242d6b8c03b7409b49e5b081cda53"],["/archives/2018/10/index.html","ebb7851f9fef0ae977c1985f908d30ab"],["/archives/2018/11/index.html","c0d13571d8a9eed093388a48dd5bfe87"],["/archives/2018/12/index.html","4b6e3399a7cd98d8b5ba68ff69e378eb"],["/archives/2018/index.html","a6f9614d1ecc7cd7ea2367ac26b3d578"],["/archives/2019/01/index.html","8fdadac0b44a01a572393e79093beed1"],["/archives/2019/02/index.html","e7b79d57ffeab98f057d968aa66412cb"],["/archives/2019/03/index.html","2d45a7686d2beeda2a43ed455cc8aeb6"],["/archives/2019/04/index.html","6ff2868718e7ccc779255f1ef5494078"],["/archives/2019/07/index.html","a30f53eab8729140f864b1028a57389b"],["/archives/2019/08/index.html","28ba5b99555ac9046e6917835d4f8932"],["/archives/2019/09/index.html","25dbc5c9af521f965e8ef84d106e0f09"],["/archives/2019/10/index.html","18c08b9ab51cfd5ef9739d54d983ecea"],["/archives/2019/11/index.html","2fad2766b6cc2713541c184266d886a7"],["/archives/2019/12/index.html","a7f105859dcd94d6efb4023c7722c65d"],["/archives/2019/index.html","bf354a904c136459c8af40fa83fcc7a7"],["/archives/2019/page/2/index.html","f86343292c367b01b5cfc4995dec3c12"],["/archives/2019/page/3/index.html","52dcb4b0a508da524f1a6d9366aa52de"],["/archives/index.html","af91264aa4f42d739fbf80b72f0bcc6a"],["/archives/page/2/index.html","ff3f17ac561c5c6483d6001836f757b1"],["/archives/page/3/index.html","f6374cc44948db1339271ebd46da7299"],["/archives/page/4/index.html","a2b48ee86769ca991abb09fa6e928e4b"],["/archives/page/5/index.html","b35199dfe160e84228f07cad19cb73b2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","312c8da1fbcd563fcc38220d3a8d2e10"],["/categories/Anime/宫崎骏/index.html","2656490d08f037810b102deffc83f267"],["/categories/Daily/index.html","349f650ce2a5bed308804a7ee4e31702"],["/categories/Design/index.html","811c85e5f337b25145ce625722e78d92"],["/categories/Game/GamePlatform/Origin/index.html","f8b13f8b3136d7a09bd6af95e52126ae"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","07792b23981f8c5ebb833bbbafacc112"],["/categories/Game/GamePlatform/Steam/index.html","7aa1e8574b9b32e207c0697b951ad4c9"],["/categories/Game/GamePlatform/index.html","9748dc2752b514608ecfc8d095a4d161"],["/categories/Game/index.html","b79b4ca4d81ac50d2f606df20a458d8d"],["/categories/Google/Chrome/index.html","46a65a61f9e6134f19a005babe1fe651"],["/categories/Google/Chromium/index.html","a5e743d1a5fa6357617f5e0e18db1b6f"],["/categories/Google/index.html","8fabff66c5ffceb36f7b4c8d44281797"],["/categories/HardDisk/index.html","19f02db0aad8a4eceb9c8a4b071ae6a3"],["/categories/Hobbies/Guitar/index.html","5e7042c722815809241abf1d9db722e7"],["/categories/Hobbies/Photography/index.html","9473e4117526f6cf36b9dc3cd0dfa078"],["/categories/Hobbies/index.html","0cf9d3244f633fe6bb17e100d54f2563"],["/categories/Hobbies/个人日志/index.html","83062a4b045e03ff072f8fa262c31373"],["/categories/Hobbies/个人诗集/index.html","91fe46e25398b7421862d47459383bf7"],["/categories/Interview/index.html","c13a7fa92511929813250aecba434e88"],["/categories/Movie/HongKongMovie/index.html","f8b83301852dabe24808ebbd58f8dc78"],["/categories/Movie/index.html","4c389c3b29dc234e640795f39f7ddf41"],["/categories/OperationSystem/Linux/Manjaro/index.html","3bee60b1c070809eb5168fa7dd88483d"],["/categories/OperationSystem/Linux/index.html","e03caa521b8eeb2a1c611a05f12bf17b"],["/categories/OperationSystem/Windows/Software/index.html","684f97913cb3a8c2de7c084be89ca84c"],["/categories/OperationSystem/Windows/index.html","3205f634428cdc42c421153d74d010f0"],["/categories/OperationSystem/index.html","2c6e8e54f28b8ddc440ee774868615ad"],["/categories/Research/Math/MathJax/index.html","368f83cd2ee679961c18f6b48f369bb2"],["/categories/Research/Math/index.html","01541648bcfc73c6c25b8f9ed986b793"],["/categories/Research/Math/线性代数/index.html","398ed9f2fd481607b616c8403ac131eb"],["/categories/Research/Math/高等数学/index.html","7ad5438c1cc9eb405187f793464a1d70"],["/categories/Research/Memorizing/index.html","1206c5fb0fc37cc6f714a3f2f4f3d89e"],["/categories/Research/index.html","68288afa2f54521a79201e0e7b066ca1"],["/categories/Research/思想政治/index.html","2d65705f575a4bf2b33b1a45e1cbfbdb"],["/categories/Research/英语/index.html","45e347fed13903ac08248a5146558d3e"],["/categories/Research/软件工程/PseudoCode/index.html","d57120e39da2a2b36fbc0a263b573e4b"],["/categories/Research/软件工程/index.html","b7d0d232f309772038a2c6959250b3c1"],["/categories/RxTool/index.html","c91a41933e61ccc0b6610c31228bd0e2"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","ea2a6551949d9ebe4d5bd21f9626e380"],["/categories/TechnicalResearch/Android/RxTool/index.html","38967cfd2b7cab9ca696034cf262d529"],["/categories/TechnicalResearch/Android/index.html","b71c29b63c347fb1abbf27b5ffc58703"],["/categories/TechnicalResearch/Android/单元测试/index.html","bd38f233209673b26ba1bda4ab166915"],["/categories/TechnicalResearch/CDN/index.html","0202d6e7b0bf2b4eadb3633c750dde9b"],["/categories/TechnicalResearch/Git/index.html","b10845537b6ef46befaf3ab0fcfb4fc5"],["/categories/TechnicalResearch/GitHub/index.html","9242d586a20f58acfdfaf899bc176af7"],["/categories/TechnicalResearch/Hexo/index.html","f2b08d9764c66e78db2ce0452c80c8ab"],["/categories/TechnicalResearch/Html/index.html","2e7a6455d2e8e232f87b021d2200e006"],["/categories/TechnicalResearch/Java/index.html","a1f820f90f062595092862498fdb9230"],["/categories/TechnicalResearch/JavaScript/index.html","f3304515d3df6397d5844a1121863b5b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","1c06a6fa223ff235019970fa4411606d"],["/categories/TechnicalResearch/Markdown/GFM/index.html","e0811b72e2927dcc2304b4b9c9d8c086"],["/categories/TechnicalResearch/Markdown/index.html","6a8825b60676321353fc74a5db14e1f2"],["/categories/TechnicalResearch/Port/index.html","f880f712203533ba6c0ff82d1dd954eb"],["/categories/TechnicalResearch/Python/index.html","ed24d15d9a50b28fdfcef255606566a2"],["/categories/TechnicalResearch/Spider/index.html","4a9b7bf1d95d0f578ad18cdfa44e9df6"],["/categories/TechnicalResearch/index.html","11b39b482bdb7af647f1e48bd724ccce"],["/categories/TechnicalResearch/响应式编程/index.html","15ab3b22b922b5c842053a4c2e144f69"],["/categories/TechnicalResearch/正则表达式/index.html","1aa421cadd0cfa63013271659853e340"],["/categories/Teleplay/index.html","d8e6df5bc030972215abc668031153b5"],["/categories/Teleplay/亮剑/index.html","f428026047ae358089a04dfc9aab0c50"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","6f9f4a2ada22b42f057dce0ea629e8a5"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","02059ac9cb354fea8bbd5d502f2d283f"],["/categories/Tool/DevelopmentTool/Unity/index.html","726075c0230f9483039568b06eb08ac6"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","002890496029a00b6d1e58d7fedda987"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","5fde6f3054a29d83d54e0a0b407eeb46"],["/categories/Tool/DevelopmentTool/index.html","ca388f713712154bcf66cf93f0905be8"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","e6ef9ce87ed7b5ff71ab4f823e4bcbe5"],["/categories/Tool/Linux/Manjaro/Software/index.html","fefcddafb20d937887eec5e7449d9259"],["/categories/Tool/Linux/Manjaro/index.html","93f0ad9785f45737373648d99af0e951"],["/categories/Tool/Linux/index.html","98ae42ebf7e941c57a518f408c0139e0"],["/categories/Tool/Music/index.html","cbb0973074393d8c1458fb9b8f43e7b6"],["/categories/Tool/Windows/Software/UltraISO/index.html","d78e5d8489a69cc2f12d77f8b200b8ad"],["/categories/Tool/Windows/Software/VMware/index.html","f0a880fb16a7e0c172025e55983f610b"],["/categories/Tool/Windows/Software/index.html","9f41247a3960b8d1879ce661c5649385"],["/categories/Tool/Windows/index.html","bec5dfb744b92c0e0719ef7f07404523"],["/categories/Tool/index.html","caa33a5e1e41f48db3c1e1d5dd5c8b97"],["/categories/Windows/Software/Office2019/index.html","8aeb16bd38226ea6a2212be39909238d"],["/categories/Windows/Software/index.html","07ab2f18b148e1f1cae0c32b74a69ca7"],["/categories/Windows/index.html","f6f292f461c1a235b7ef61e9dafd911c"],["/categories/index.html","2d1ed05071ca41c8d367abcd5336c045"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b737f11de088a4cbdf9b97191bbf391c"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","08baf9f2c6073239a6451989f6b09954"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","2786dd367be6b05ace5f7ebd1d2da8c0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","1ceeea1154e31ce859053e457b99babb"],["/movie/index.html","c2274953b583fb830d3597e67f13bb55"],["/music/index.html","8a25e3883ed6a0b953b8ad62d2fd983f"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","533ef5b9fbe8162fb398c9c07065325f"],["/page/3/index.html","93588facfb532aef76aaf9d14dadb140"],["/page/4/index.html","37b2023eb730a3db7ab5671208f00972"],["/page/5/index.html","1137c2099825e3abfacaede0c569514e"],["/page/6/index.html","72cb08d592d1847871e6f80313b3f7c3"],["/page/7/index.html","1175b12ba2981b40521232b163d47b58"],["/page/8/index.html","c7536fb1df0f652233cdc797a4ad7929"],["/page/9/index.html","32b0c62ec89bb1b0b222113b587da93e"],["/tags/Android/index.html","251f10db7c5528eda160434585d689f1"],["/tags/AndroidStudio/index.html","9cbcd891999b354aff34c94ea8364fdf"],["/tags/Anime/index.html","55e92a00c8035f2b9aa34b4445fc3b71"],["/tags/CDN/index.html","f945c722428f88028f9f1d74b70b02f9"],["/tags/CSGO/index.html","c14150c57b2c88cb2cd02adc3be87c61"],["/tags/Chrome/index.html","20313764e4542ef8ffd7fc3a67395499"],["/tags/Chromium/index.html","ef494d92fa5a8b1c76ffa9c1d2d11434"],["/tags/Contributor/index.html","e276097d203fa805f7f054893b2a7dae"],["/tags/Daily/index.html","d2e71aeda125a398d45b47c85b3a2d70"],["/tags/Design/index.html","33d752bf023866620942a87acb4a0a32"],["/tags/DevelopmentTool/index.html","bc08337e4e9fdcea39e8c816c006e36f"],["/tags/Emoji/index.html","cb2a090e8aa2773188fb5c74e2c8e980"],["/tags/GFM/index.html","79833b52d9b755d8430bf2ebe7282be3"],["/tags/Game/index.html","06eaa4a4eb16b87392171ec9f2b4a043"],["/tags/Git/index.html","749ee2b08ee27d602a6524ebcba556fc"],["/tags/GitHub/index.html","2bee241d2a3b76d6a486dd9d47429803"],["/tags/Google/index.html","a0244d123be386670af0db057c6b411a"],["/tags/Guitar/index.html","a3f18815e04d3711d4bc2e8199666250"],["/tags/HardDisk/index.html","b16e4b0178775801ca4253e9f9a0ec6a"],["/tags/Hexo/index.html","7c196fe39d9f06e164daba89011febb4"],["/tags/Hobbies/index.html","f47cc3d978620a9ddcf4c2e9b71f7d2d"],["/tags/HongKongMovie/index.html","d93e44fa11ce219ade46074a0db17d6e"],["/tags/Html/index.html","712566ee7572ea8c221524f4f947184a"],["/tags/Java/index.html","ac65a4991b47f498c40f8f86319bde92"],["/tags/JavaScript/index.html","d96a2aaccb24e7801bd14dbe89912622"],["/tags/Linux/index.html","dc85ec2c21532ee08c96f2a1956189c0"],["/tags/Manjaro/index.html","8abbe4b53eb79fde623431e323939663"],["/tags/Markdown/index.html","6dc484a592cffb74a43885383a402728"],["/tags/Math/index.html","d5fadc90b94145eab317e839922e3368"],["/tags/MathJax/index.html","1c2cc3788787aa9ab87d9f376c21cb30"],["/tags/Memorizing/index.html","27f94af1ca9f0893e69379c440178383"],["/tags/Movie/index.html","b123038743a8089e73543bb1a8a561c6"],["/tags/Music/index.html","cafa41808a35817329f678e9bd546998"],["/tags/OperationSystem/index.html","f864284a93a131854c64d750dab87de3"],["/tags/Origin/index.html","d001fb29ae347b185c3813ce916df9d7"],["/tags/Photography/index.html","13a44b8beb1a8f7813e7a5aae20b5d50"],["/tags/Port/index.html","782ecc0c28a5743cf01268f8965d8f9e"],["/tags/PseudoCode/index.html","eadf698a020638805433f8f913ec443c"],["/tags/Pycharm/index.html","d1744835e9403d152e67333206b722f8"],["/tags/Python/index.html","56cf5a9ece685cfeeb773de38e95551b"],["/tags/Research/index.html","5a9e50593311af61b700a1b9987df1b5"],["/tags/RxTool/index.html","4d6c3442bf878c1c419642d98c713272"],["/tags/Software/index.html","fa786b57959dfd282cca4206e7de60b1"],["/tags/Spider/index.html","f8881f75d9c1339447eaa6d054c2f408"],["/tags/Steam/index.html","911c2be6313eb4216e3f04010e6d4c5c"],["/tags/Teleplay/index.html","1f5e733d129a854ccc458346210f6778"],["/tags/Thunderbird/index.html","1e59ada7ca43f3c91fb295f42e471aa5"],["/tags/Tool/index.html","873555a391d07ef5a701b5ed7cdf8e3c"],["/tags/UI-Design/index.html","8a1f5b28f9bbc2678b4107106aa37611"],["/tags/UltraISO/index.html","87bc7ca76424be6e0daa0655fe0d5223"],["/tags/Unity/index.html","9d3b503463b5118420e66eb0548f2b60"],["/tags/VMware/index.html","d19e649389373ed06c3fd1f63e882bc1"],["/tags/VisualStudio/index.html","16be9c52dcacf4cf7b1709081f5edec9"],["/tags/VisualStudioCode/index.html","fcffef9e2783650cdfb325191225348e"],["/tags/Windows/index.html","f4f0f31bee1f190fe030a0f5ef90cb83"],["/tags/index.html","6a598f810601bbf7ac2e477016d4343e"],["/tags/个人日志/index.html","5b8f139028268c652e912c38a7e1ef06"],["/tags/个人诗集/index.html","13f0ebf481e60263c12970a84a73394b"],["/tags/亮剑/index.html","a85d4743b185c6b2789bbaf301e39782"],["/tags/仙剑奇侠传系列/index.html","6b88ddbb73619fad28fe6238fd462099"],["/tags/千与千寻/index.html","cac327241c0a487931bb075ae8635b3d"],["/tags/单元测试/index.html","82082cb63707c311d4f0a39cb3738a2a"],["/tags/响应式编程/index.html","210b5455374faa8a30cd4521ee35af26"],["/tags/宫崎骏/index.html","1790c0fb6620f635629f2f75d5e68654"],["/tags/小王子/index.html","24b0f47b1b833ab064455ae70b6f6269"],["/tags/开心鬼系列/index.html","639efa3bc5fbcc89391cfa8c9c8ce22e"],["/tags/思想政治/index.html","04ebcf86c1a698229737094fbe8b16be"],["/tags/正则表达式/index.html","fb514894e8f293df4428d22d79c10f30"],["/tags/线性代数/index.html","035ddf1fd5b863558389c29676a4a717"],["/tags/英语/index.html","e1f8410a540665c470c9777659ece514"],["/tags/软件工程/index.html","674970c5b95568de795bbb318a8d8e31"],["/tags/高等数学/index.html","b71e6aa8a8ec8af1115ac041decb6936"]];
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




