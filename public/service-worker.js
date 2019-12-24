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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/关于《小王子》电影里的共鸣/index.html","04adeca472ab001365d3ea17fdb1967c"],["/Anime/宫崎骏/千与千寻/index.html","77e2a523a9d504b8cebf7898d501fde6"],["/Daily/Memorandum/index.html","ae7f1f7a0d5276ac45c0497b7a52275e"],["/Daily/生活小常识/index.html","9b272fbfe62e20fa510dd78dd42f16a3"],["/Daily/网络用语/index.html","5331dbbdb8f7bd1aefe471acc53a9f94"],["/Design/设计用户界面的注意事项/index.html","e545d58eb2d2e12078a8bdbf5eb684ca"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","9940000c21a97c2d79300c9f056f5964"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","4a928e04052e0027c51dfcf532c1ac31"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","ebd58320b43c15408560e47885a6da72"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","e782aa61e9dd187025a90e73550c843a"],["/Game/如何独立开发一款游戏/index.html","fb6c5aa08665c22af3d45132da304788"],["/Google/Chrome/Chrome上网助手/index.html","006af36265957a5e503dbec9d0908436"],["/Google/Chrome/Chrome使用技巧/index.html","a75ca1ab2909804e1d94fa1603c4dd49"],["/Google/Chrome/Chrome插件/index.html","1357c9899111ffd74db44c375b5e6792"],["/Google/Chromium/Chromium/index.html","1e3cd0ed0607e03b48ee74d45d9f6d48"],["/Google/Google搜索技巧/index.html","70254a8a4a8aa9997b1334cffc8a8bbc"],["/HardDisk/硬盘分区结构/index.html","d78924347a0e4214c193d96eaad05d5d"],["/Hobbies/Guitar/吉他入门/index.html","ea6a78a58a3fad2433fe60761c603506"],["/Hobbies/Photography/摄影入门手册/index.html","8600856cba3714c0c4066d88d8319209"],["/Hobbies/个人日志/芦江曲/index.html","7d8afbc11a07ff6a4ad85b1ffc68fbf0"],["/Hobbies/个人诗集/闲情逸致/index.html","4b02f9846fd629b533c4dc29b332109c"],["/Interview/2020年字节跳动面试题/index.html","3e5360e01b9c35f5e629cf4f6c5fc3c9"],["/Movie/HongKongMovie/开心鬼系列/index.html","f59040d5df38abb9799b2eeef88b356e"],["/OperationSystem/Linux/Linux分区管理工具/index.html","a26ecdd137e7719b9eeed24f5d69e250"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","7dd324a69056f00a86d9e2c610c9f59b"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","ba3228cc229e8fc321f90ec53d46cd99"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","902fb78943ae66a22e7fdda69ff314d6"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","1cb3a9a220c8628a7849ab3ba092fbb0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","5ebb88959d647aa9fc9ebb3c23447693"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c983b08a391c26d7412ac7d7d0a18b9c"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","d03814eaca07d520b7e3e54d4d7c6da3"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","718420189af360114b6f4cd5adc6d25c"],["/Research/Math/线性代数/线性代数公式/index.html","213d3885b231f21281207e6ab57b13d6"],["/Research/Math/线性代数/线性代数知识点总结/index.html","9a0517c67a8934001e46ccafdda73d9e"],["/Research/Math/高等数学/高等数学知识点/index.html","8795d47ef4f909d9ad66fba760adc7ba"],["/Research/Memorizing/费曼技巧/index.html","5126391c558033394c896fcadb2e5311"],["/Research/思想政治/考研思想政治理论知识/index.html","05852aefc9e2a839f77b3d2b197fea2a"],["/Research/英语/考研英语作文/index.html","9280042b363872865d847861a231fc9e"],["/Research/英语/考研英语词根/index.html","e90e154eb9fb20d9e21e833d338c4a45"],["/Research/软件工程/PseudoCode/伪代码/index.html","b344ea870792a33c70d27b993500ec72"],["/Research/软件工程/中南大学软件工程考研题型/index.html","36f6ac94b48ab18b565d8943ad73508f"],["/Research/软件工程/软件工程基础知识/index.html","526ffbd0c7c944101642513cb81077d0"],["/RxTool/Contributor/index.html","aa52b2c0f4274848b23e2ef7ff0784bb"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","57ef08b5347ad8efbac5217b5993c47e"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","be9de77754330715a195ba423a7150c8"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","bd0146645d6b63d1ba0d0ebd0df9a865"],["/TechnicalResearch/CDN/CDN/index.html","7ee93f49f03f450ea2c5540f08a53ffc"],["/TechnicalResearch/Git/Git/index.html","d30fbe058b26100b0ff1991741f8c297"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","323d682685929cb82e48772676781189"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","90b2e538feb2fe535717d99f4f2ff228"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","5b81a17a4b58a60e1a66d6c6316321d4"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","3c50ac5b282db3288e3afe1e1768a0fc"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","f7bfcd51be87e601598165bc3b8d8f91"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","4fd9e6ec7ca1177e7514745fe6adcd2a"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","dd7ce5c897aa46dee801e1d543ee6779"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","5dce09055811e66d6cb3a61fce06ff66"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","c98d48804f22a893c5d2c5967d82258e"],["/TechnicalResearch/Java/Java基础快速入门/index.html","6245c2b97c36132bd2af8e3eec897621"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","20c2e1ad4f40f7d518f3d27305664219"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","b463ac34f68da55a1c883038b4d49c0a"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","b1f9fb6f7339c648b141706ebe896bcb"],["/TechnicalResearch/Port/服务器常用端口/index.html","704ab02438250e714229aa445b75a6dd"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","6027d210a442b75fa87d7de8f2c75bcc"],["/TechnicalResearch/Python/Python-Exercise/index.html","9d09d8110b3b0135af346dbd1caa3d1d"],["/TechnicalResearch/Python/Python问题归纳/index.html","d05e11cf15f2f465f4175e17da464e95"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","5d3a4eb486a3636a8a402e3cd23346a6"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","2f6f1bae553ccb46222ca7a5bd8c9aab"],["/TechnicalResearch/正则表达式/正则表达式/index.html","e84fc8b5d8c080addc1ca9fb75ba1a20"],["/Teleplay/亮剑/晋西北铁三角/index.html","0dcb2074f2d946114faa9dad0ccd4112"],["/Teleplay/仙剑奇侠传系列/index.html","704d7bc18166265654b02904109445bc"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","43231a58e8b427837d5e5010f805a663"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","e912312b08499b99588f9528191aa40b"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","4216ad34df50388d25d4cb0c0833a3f7"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","4cc62d0ff3687d86bf3da4dd6b633d45"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","e13c8580e124918a957f80e8deaa2733"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","d9a090cbc7a6670df17f9e6c0a489276"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","b1a1d1892e02a670d469d46a2ae19f09"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","81cb9746a07a54a0c1538ec386e0bea8"],["/Tool/Music/网易云音乐/index.html","f4e0981fe72b87dc73398003a7c5a92a"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","a3795c6b56f716a7cb547db095f03b41"],["/Tool/Windows/Software/VMware/VMware/index.html","c6a37bd4a864000758d4f7852d5ce0fd"],["/Tool/百宝袋/index.html","e71b886399870781cbe40fec66106589"],["/Windows/Software/Office2019/Office2019激活/index.html","b1ba14c7a3284887c9676ba956d6b954"],["/about/index.html","c817bd646265a20f58ba7fe24b83e290"],["/archives/2013/10/index.html","4a9f17cbe4231f1a5b4fb0ffbe8ce411"],["/archives/2013/index.html","2e80b2e690cd00313e536d614b0e4ee6"],["/archives/2016/09/index.html","e8b1803f047a742cd0e6b8973d97e511"],["/archives/2016/10/index.html","2a7d7268f0168e74c22b063888d953e4"],["/archives/2016/11/index.html","dea4d6faa0c4d217d1cd25b888480ba3"],["/archives/2016/12/index.html","7d31ae197edd3243058f3e0bcfd9790a"],["/archives/2016/index.html","e10c03367bf0726a041e2916a4633592"],["/archives/2017/03/index.html","3e2d2f2606645bd48ddef7cc7be63486"],["/archives/2017/06/index.html","5fc46fa713f1fc41122e013cf8214783"],["/archives/2017/07/index.html","82c076fb794a6f0fd9994b57d9e8d335"],["/archives/2017/09/index.html","033fec3975d1a14821d157b3b1bed57e"],["/archives/2017/10/index.html","c9b99ebf5a2209fdbc5ceec566a8639b"],["/archives/2017/11/index.html","04eef9ae0ebb3420e0d4000565cbd1df"],["/archives/2017/12/index.html","35d324e8ad7efc8c0b39f554938dbd76"],["/archives/2017/index.html","7ec9233406a3d17d595b332024617217"],["/archives/2018/04/index.html","0f008d6b358c426e3cbdf2b36c3f9fe0"],["/archives/2018/08/index.html","247d1e5aa5371bd546c9298d773e57a7"],["/archives/2018/09/index.html","f66b3f2ea28852ceb32f8d51b8103dd5"],["/archives/2018/10/index.html","df248fbe12e396451a82ee522550e2c6"],["/archives/2018/11/index.html","e1a996f1945cfd0dedf23c4533273dc6"],["/archives/2018/12/index.html","4f9b0d9132ae9091c534254a352e55b1"],["/archives/2018/index.html","60356517463344dfb166d612c068d2a8"],["/archives/2019/01/index.html","30778c2f70b42978f56e605e38c2b2f2"],["/archives/2019/02/index.html","99d945edf31afcb92dbae254e495ef59"],["/archives/2019/03/index.html","3832e52bd187d030d597a3d4174f6598"],["/archives/2019/04/index.html","f0500e8ec3ab2ede2e59556cf2eea18b"],["/archives/2019/07/index.html","e31568c27ca84cfe4191d132ee2794a6"],["/archives/2019/08/index.html","3505ba09570fc35b6ea12815e0098b00"],["/archives/2019/09/index.html","8df8e340b4af76ba7e95c8a9d6ee3b93"],["/archives/2019/10/index.html","23074d58bcc51f8a8c55a9d6b26cfccf"],["/archives/2019/11/index.html","9fc8d6e6f405aaac5d95dd932a28fce2"],["/archives/2019/index.html","11090d0c67af405321a162379c1ad1c0"],["/archives/2019/page/2/index.html","e83fd7d38107a55fbd2c34e1daf04513"],["/archives/index.html","36e929d447d63c633fa4596d8606aa6b"],["/archives/page/2/index.html","ecb521f8627987635c366c64fb71d463"],["/archives/page/3/index.html","dee1343f91554ed43d6c15ec6bc96224"],["/archives/page/4/index.html","7fad7cdb20ba47d16dad637f98ae662b"],["/archives/page/5/index.html","8ef787d2ee65d4d8f4f11497ee677cd7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","f3b1280855f7a5a4776d3dc2a9ad4669"],["/categories/Anime/宫崎骏/index.html","bad790e5151225198d488dbff0d601be"],["/categories/Daily/index.html","7b259f98bdc2e1a74f5246e4c63f68f8"],["/categories/Design/index.html","dd2d15febfc498168f0b4628e64ccc53"],["/categories/Game/GamePlatform/Origin/index.html","037f9caedaf67094eea19c15567cb4df"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","870e86a608681fdc29aaec6dd8fbda23"],["/categories/Game/GamePlatform/Steam/index.html","f05ee5c73efd086bf5453bd01d53a49d"],["/categories/Game/GamePlatform/index.html","b3660e9ee3d9d5c35997874b8f4dbb9e"],["/categories/Game/index.html","3d79b31587bc77c2ca233ef21a88acdf"],["/categories/Google/Chrome/index.html","d7d04b45d5d6e28536b2c83525734332"],["/categories/Google/Chromium/index.html","80bc6ae7eb3070fc0cf2e940bf74feb7"],["/categories/Google/index.html","4869ec15db6a6702eb10b3cec054e8bf"],["/categories/HardDisk/index.html","4bbc83ace7d875d38696fff97d3a76ce"],["/categories/Hobbies/Guitar/index.html","e62f50c5eaf8d095be14b86cce49343b"],["/categories/Hobbies/Photography/index.html","cc0baf646106cb85a0004965790c646c"],["/categories/Hobbies/index.html","08844d5aab8b776f18a731778cf00126"],["/categories/Hobbies/个人日志/index.html","4cad1b14c432ddb4c1488abf01bc960d"],["/categories/Hobbies/个人诗集/index.html","471c4fa27b8e2d03b27a45c56ae320bd"],["/categories/Interview/index.html","772c62bb868c5bbdf85ea1c8582b5eac"],["/categories/Movie/HongKongMovie/index.html","64912762d4ec09ebd59a375f68eeffbd"],["/categories/Movie/index.html","ab41f02f1169152d390bab38850e66c9"],["/categories/OperationSystem/Linux/Manjaro/index.html","ea5f52c6879c341be1f0570860c5bd10"],["/categories/OperationSystem/Linux/index.html","e90a0c56bc01fc48be65bf5ae2e47de8"],["/categories/OperationSystem/Windows/Software/index.html","12ba35575957abfa6d83eb3303634c67"],["/categories/OperationSystem/Windows/index.html","95c3e0d3fb770cafa5efe20b78b82ef8"],["/categories/OperationSystem/index.html","dad09d69d153938c418a0f510bc3a572"],["/categories/Research/Math/MathJax/index.html","295630050c9c71de8d6152ccff59cb88"],["/categories/Research/Math/index.html","dd12a436a131fba68f30d470984139de"],["/categories/Research/Math/线性代数/index.html","debad1fef7652d730d50ce537a7e20bf"],["/categories/Research/Math/高等数学/index.html","bedcbe04bd8f3f985e3879e5f3b3ed94"],["/categories/Research/Memorizing/index.html","ad95b4fe5bf63faa94e5ae61ff018092"],["/categories/Research/index.html","07d50883ad4936d289812dac27c83d27"],["/categories/Research/思想政治/index.html","05f6a0bdb059dad119e52dbeb26e727d"],["/categories/Research/英语/index.html","eb5eea57d327d84fe98268b63f599854"],["/categories/Research/软件工程/PseudoCode/index.html","06c06353902d3220acea9e867dbb7548"],["/categories/Research/软件工程/index.html","fe9c175a72388d8d2e80fd7658c6144f"],["/categories/RxTool/index.html","6ff94d91b67edf8a44cf57fbb43f7aa9"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","8fdc0b643657ce0f4d024e6ba3a078fe"],["/categories/TechnicalResearch/Android/RxTool/index.html","3a58f1a6ac7098fcd673dfedd6731e91"],["/categories/TechnicalResearch/Android/index.html","8a00899cee0b9743f04222b50b77fa59"],["/categories/TechnicalResearch/Android/单元测试/index.html","fd06568503e86c08e47b14f4c6052428"],["/categories/TechnicalResearch/CDN/index.html","72b85e2374dd786687dadd46a44a37bb"],["/categories/TechnicalResearch/Git/index.html","52f8095771b4ce1f3064d5d50076d8dc"],["/categories/TechnicalResearch/GitHub/index.html","d3c96f0efef82bc59ac81545b6191f2d"],["/categories/TechnicalResearch/Hexo/index.html","5970802eee21a538854bfce2d49f2516"],["/categories/TechnicalResearch/Html/index.html","ac79f86167a05edfb0f299ba97f81db9"],["/categories/TechnicalResearch/Java/index.html","26f85206538fd3f6fb98d69de78d7ca6"],["/categories/TechnicalResearch/JavaScript/index.html","0626dc16e0673f43ca7223d91e463e02"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","3b6f2cb41797af5716982e65726f9243"],["/categories/TechnicalResearch/Markdown/GFM/index.html","d7d32cd3949856deabaa7d1567ac730c"],["/categories/TechnicalResearch/Markdown/index.html","174f4a4cb3cb38b8ba00c1317c4bd80f"],["/categories/TechnicalResearch/Port/index.html","c883dd14716023475a9413a532970949"],["/categories/TechnicalResearch/Python/index.html","a6b02e6914b92e9f1577bc3f10d8698f"],["/categories/TechnicalResearch/Spider/index.html","a56042793fc93c2ced2774ae9f509967"],["/categories/TechnicalResearch/index.html","1e6be7b0ae73fcd0c14d16aca5cd257e"],["/categories/TechnicalResearch/响应式编程/index.html","370d7c7c9c7e52d33b3647d46296057f"],["/categories/TechnicalResearch/正则表达式/index.html","c8e7470a6896114ecd507bf5acd751db"],["/categories/Teleplay/index.html","20e5b224fcdf238a0998fa1270b02f32"],["/categories/Teleplay/亮剑/index.html","031f1a7c1b786d211b922810593c3fe2"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","f33c1610a49a787fa12a053b9307bd87"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","703c1b93ddd39f244d261c86174ea101"],["/categories/Tool/DevelopmentTool/Unity/index.html","0e3ea388ae7ca2629494adb9b1c381e5"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","e25358b6f93477ea4e0580bb74979636"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","ed46e2bdb82297e4d25de751123791fd"],["/categories/Tool/DevelopmentTool/index.html","efdee06fe0096939a9bf35016a62bf56"],["/categories/Tool/Music/index.html","a6640ffb6ea379ab67e2359d266db781"],["/categories/Tool/Windows/Software/UltraISO/index.html","4b2b5ed8179643cfa7eab7d9eb0e7e86"],["/categories/Tool/Windows/Software/VMware/index.html","28fcbc695f05eece16d946672b228405"],["/categories/Tool/Windows/Software/index.html","a1555a6e56652c286195468a99056592"],["/categories/Tool/Windows/index.html","600e50a8a5c5ed704a7ed15c4e2cba7f"],["/categories/Tool/index.html","a0e76eb07395e0f3f28014310c894a84"],["/categories/Windows/Software/Office2019/index.html","2d16cc0c35df9cba100562ba204c5c33"],["/categories/Windows/Software/index.html","28e276af6a44412ff0df983c39588fa1"],["/categories/Windows/index.html","a3e01540a5686f3c3336ac686d05f0fe"],["/categories/index.html","a65f047e75b870d2ce91492de1f098b0"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","50033e26b38a1a1e9709e52faa6057f4"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","35407faa34c1c243661459f09eb305b5"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","abb8026977398dc639762310aa84fc81"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","9bc7d794b8fe701182dd045d93f5a91e"],["/movie/index.html","58c294c1a9f70391c3b2243fcbf6c508"],["/music/index.html","09421e8e22c5cb47451eac3eae36ce92"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","ed035f50a61b1297a201cd40dcb2651c"],["/page/3/index.html","900c6f3f0f1b2823e9ba424ba20fcb1a"],["/page/4/index.html","eb3282bd814c1f74c5d820476f4001c9"],["/page/5/index.html","f5229077255d1c23a65bc44f93beba55"],["/page/6/index.html","248cab175a2cc8043a5e820d233c8a1a"],["/page/7/index.html","deb44b0cef626bada6d49a22fc1b567e"],["/page/8/index.html","832018db54a4877eccb032b43442d6b2"],["/page/9/index.html","1c4c218ebeea54ad2a305266266ff745"],["/tags/Android/index.html","d62d9c6c0a49e9b02cb3b336d89966d2"],["/tags/AndroidStudio/index.html","ff1481ff717ad1d319b9e18330d0179a"],["/tags/Anime/index.html","7e130c9e42b2ad8e6b670f28d52247bf"],["/tags/CDN/index.html","47c5e46c71c799209b7c2a02d85a6966"],["/tags/CSGO/index.html","23508f442070a143165d15664fc4a571"],["/tags/Chrome/index.html","bc92715cc50dae19e0958fa25dd2e139"],["/tags/Chromium/index.html","60653a9f7c022ef8e6368db85a693639"],["/tags/Contributor/index.html","65626cd3d0d5251afbb7ab249e868f72"],["/tags/Daily/index.html","e8c9aa497890a76346fae7b597172794"],["/tags/Design/index.html","eff939989bead1d226d765baf7daaa61"],["/tags/DevelopmentTool/index.html","8d2bf731684df60e3738300056702871"],["/tags/Emoji/index.html","a2ca0ffcfa1b96942cc1d2a61cba23fc"],["/tags/GFM/index.html","9d09663d634a2b9014accb636b534180"],["/tags/Game/index.html","eb51b4e2380a9b1d3b721ec2bdece08a"],["/tags/Git/index.html","3ea2064dc783be9b7bae6306c06d2e71"],["/tags/GitHub/index.html","528d3aaed2ee8e9aa10351d70f114386"],["/tags/Google/index.html","779688287e6ec05b85d6e61668fde218"],["/tags/Guitar/index.html","1ccec943e650e83594e4285441ac31d6"],["/tags/HardDisk/index.html","853cb5a8ff06c7dd2001f7f8ba450432"],["/tags/Hexo/index.html","d6550de47c9b445985e35e6c62bdd200"],["/tags/Hobbies/index.html","bdb2d0e9b5b397438af9a99265777132"],["/tags/HongKongMovie/index.html","0bd2b5f8a3d4e9f93ae8a00f7ef2befb"],["/tags/Html/index.html","f8a937aaa9907e502c2b761bc2796695"],["/tags/Java/index.html","e8fb002b0153bc980e551c65cde02b61"],["/tags/JavaScript/index.html","a5727c174c7bb36f607cc718f7e58a12"],["/tags/Linux/index.html","2dacd9906e65d92ecb0b708496e45087"],["/tags/Manjaro/index.html","686cafe2bdc1c03dd410aecf5f07236d"],["/tags/Markdown/index.html","ae2e1fb9a3d305c22b61800d549db03d"],["/tags/Math/index.html","fe6883854a8f3051cb5cac62f21afc38"],["/tags/MathJax/index.html","2d585189dd3ee3fdfd57f6d71b2b5e90"],["/tags/Memorizing/index.html","9615458ee71e875a4027750816d775ab"],["/tags/Movie/index.html","bbc84def1c5f5d8473f3241c7d79dce6"],["/tags/Music/index.html","5271f230dc619114644b1619f817f640"],["/tags/OperationSystem/index.html","c7a28641095ae02911f0c15c9c340bf8"],["/tags/Origin/index.html","d99b97ffa52576d3370d121ed174c543"],["/tags/Photography/index.html","1d22027068dc03d6e05f3f6f17c214f8"],["/tags/Port/index.html","903a2852b05600334bb32562fd583c2d"],["/tags/PseudoCode/index.html","d29bdd1269eee5f2296fd4f4ad2e6502"],["/tags/Pycharm/index.html","8ffe0e04dc59e5f718fe7225c05f25e2"],["/tags/Python/index.html","2071399024e33685c025259086fbc647"],["/tags/Research/index.html","5fb73cacb35f170367808dae2dcfdab1"],["/tags/RxTool/index.html","fb65e903a5f845231e1224dec91c667b"],["/tags/Software/index.html","78835e72c32001f365509fefde8339ef"],["/tags/Spider/index.html","41191ace18a770e9f851f5e4cefeb7dd"],["/tags/Steam/index.html","04c2c92f1b6a6b8a590581901fc2d539"],["/tags/Teleplay/index.html","ecfe6d5e4c27285b815558711ba01678"],["/tags/Tool/index.html","201f957bf2ac69bc1a5bee24c25d830a"],["/tags/UI-Design/index.html","b42a11824f35c3af4c16efce6697da45"],["/tags/UltraISO/index.html","0b5981347765cf8da0b516904b42ac03"],["/tags/Unity/index.html","a30d538ebdf710446a2382fb4c0f3720"],["/tags/VMware/index.html","91d8ae04244b3f26dfef95503f59d53f"],["/tags/VisualStudio/index.html","fe6c203ddd44e70cb41d5b684c573f26"],["/tags/VisualStudioCode/index.html","9d5441e3be01c26c5ce5664c039d0033"],["/tags/Windows/index.html","454320f00a52f1d7b41f3f1c390e6058"],["/tags/index.html","96b4d3e41d330e915c9fb52eac1d00c7"],["/tags/个人日志/index.html","df759520a1d4b48f18c8ee6fead7d25f"],["/tags/个人诗集/index.html","8e644ff59d90250e7611da0a6400ae5a"],["/tags/亮剑/index.html","c7a0933daa250e4ce93af96e0d6f1ed9"],["/tags/仙剑奇侠传系列/index.html","d0b9aa528c3ebbba48cb1dd39bd55922"],["/tags/千与千寻/index.html","2d1d531870b418781102243d58b617c9"],["/tags/单元测试/index.html","6c9eff096a4ebfc61721c2169ffef6a9"],["/tags/响应式编程/index.html","fe520c6342ba91f7f0f25c16938f777a"],["/tags/宫崎骏/index.html","8e920b3dfd28f7414739f31af2b827df"],["/tags/小王子/index.html","b4ae3c6607e71027a2225d20ab680d01"],["/tags/开心鬼系列/index.html","fa271e7f84bde14a8bc5f773900a4c12"],["/tags/思想政治/index.html","caeb059c15316c4e8df3a5994f24f283"],["/tags/正则表达式/index.html","a7562f6e9211e5a993a9037cf40f8c8b"],["/tags/线性代数/index.html","f65b2ee798c1a26c179dae3047ae7103"],["/tags/英语/index.html","c1a788d5e5a8c695a58fa73aad7b075b"],["/tags/软件工程/index.html","ede0f5fec503ac64e9fc818f0927c137"],["/tags/高等数学/index.html","a9384d0897665124d14a62ea6a729100"]];
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




