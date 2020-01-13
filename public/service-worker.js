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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","2aaab012fd8537cf392fae8edb03abbe"],["/Anime/小王子电影的共鸣/index.html","362574503323ca2e8146f3e85a86b4e9"],["/Computer/Alienware/Alienware更换电池/index.html","4bfe351f01b72c604d02a8c5c45fea5a"],["/Daily/Memorandum/index.html","9d45205734c90150489fe2655aeb8db5"],["/Daily/生活小常识/index.html","9fcfa099334fef10c3a314646e9d8911"],["/Daily/网络用语/index.html","49a66ae74d2abb65a16adf22e5b3248a"],["/Design/设计用户界面的注意事项/index.html","6ec6e2ec548f10866ffe99cbd2579903"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","d581184f96ae09e84d4fca906cc282a5"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","66e76e09dc45a2c93e7281761307797c"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","88c9d9f8bce8edcf4ce3f77dffd73a6a"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","e44c0683944503bc5aae06d2fcf2deb2"],["/Game/GamePlatform/Steam/Steam库共享/index.html","7ff6732aeb3de452db14d5e10432fcd8"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","adbfc7bb20b2c0f28ddf37a25fe51b58"],["/Game/如何独立开发一款游戏/index.html","8116ee86e54da23cc4449c16b25013b1"],["/Google/Chrome/Chrome上网助手/index.html","f2b0fd7d872193b7aaefcdb389d70047"],["/Google/Chrome/Chrome使用技巧/index.html","2e426dd0bea4ff09b4abcb149ffc1304"],["/Google/Chrome/Chrome插件/index.html","c99b37680e563557908c303fdd4a497f"],["/Google/Chrome/Chromium/Chromium/index.html","67f486a47f7d9772f55cf052bae2a539"],["/Google/Google搜索技巧/index.html","b5f0927c6e0521869611366c95d553e9"],["/HardDisk/硬盘分区结构/index.html","58952336c4b5b035e84bae1141d553ea"],["/Hobbies/Guitar/吉他入门/index.html","04387b3200f210edfbd6e3abc21b10d1"],["/Hobbies/PersonalDiary/芦江曲/index.html","07dea58f2f17c599793db5d23bcf8177"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","195df035c35f89d39e0626f7dd1db20f"],["/Hobbies/Photography/摄影入门手册/index.html","a18b6d6d4ffc13fb08575f04c810e7ec"],["/Interview/2020年字节跳动面试题/index.html","f9f2c4120bee289d602f4bcc732e4a74"],["/Movie/HongKongMovie/开心鬼系列/index.html","92d4d3a1d3c7edf0e580e915dc33cb96"],["/OperationSystem/Linux/Linux分区管理工具/index.html","d735d20e6f1e9b097498253cc15430ba"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","03f16f4b4bdc5a5372b0f72a3ddd0cc5"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","383ec275b58bc9c1ddb3f7846a4bf706"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","1a794ed7e70287bc07df239b1910e1ee"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","50507ab903edf3062c1c39eaa1b88fa1"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","dd8ed407e2666388c675f40f1271e407"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","2cd52e0343b8f0e641e930cf95fe4a2f"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","2da67d13c5ccc6ad20fecba34ca9ccee"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","64a73f1daa42a6f5287296e87e0f585e"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","db69e0bd5f891969f329fc5227ce23ad"],["/Research/Math/线性代数/线性代数公式/index.html","e938cba924649e6c7f4cb09ed2dc227d"],["/Research/Math/线性代数/线性代数知识点总结/index.html","81d68458909f7cf77fe6bc2ecf3967a4"],["/Research/Math/高等数学/高等数学知识点/index.html","bd99b7b6eb891f99c8f88404616803dd"],["/Research/Memorizing/费曼技巧/index.html","a8b477efe3d98a14bd79937f8b9ef791"],["/Research/思想政治/考研思想政治理论知识/index.html","a9117d89250baa737a8faca8b8d3d77a"],["/Research/数据结构/数据结构/index.html","9902416bc4aa7c08457df4bb32a2c92d"],["/Research/英语/考研英语作文/index.html","8ff6a2d5320d3bbeaad46cab6f58b674"],["/Research/英语/考研英语词根/index.html","32a654684c84147414f6f350c7326d29"],["/Research/软件工程/PseudoCode/伪代码/index.html","7dc4bb48e773d6ebdcf96882bfe88168"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b8f031b202f6d8020e088de19229efa4"],["/Research/软件工程/软件工程基础知识/index.html","bcf50cf8f8d9d6cac2fd50eb4e00fca8"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","61949b2e6d3c4fd02c7951136a909870"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","eba26e1eef4dc0f3e10126c9eaae7c2c"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","8153c83381369338412446ed54417a65"],["/TechnicalResearch/Base64加密原理/index.html","ae0f68b25b9c4fb9f592aecc6319bc81"],["/TechnicalResearch/CDN/index.html","6b7e7f0d3ba71c08815e08a8379ca759"],["/TechnicalResearch/Git/Git/index.html","ea1c5f5bc4f535779399befe02e49bc6"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","92b6491ecdfc061fb0a280502bb2322a"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","5f250f938cd9972678a472c327114d9a"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","cf45162df4e4621a054f76126b2660eb"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","69ee08ed7753fc9de24d01c1a5a6e69a"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","4d41d9398eed64d4e2fc4f8c6ac0e5fc"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","58e2ce7b594cf3c25dc22ffab69ea646"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","9afd6ae49e189890ce71570b2c8eb271"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","c0f4c0f244c9a4c7ab661977f19dd66f"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","181556b5dbe215b69e212e92939f4a32"],["/TechnicalResearch/Java/Java基础快速入门/index.html","82a0bc19bbc41bc3563b2df79e0604b5"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d79ab793e5506eef3571bb67cc9f2c13"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","53336feea062e325637e49c6b4d71952"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","cb9d95a6b2e1f69f25ced9f497b222ad"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","90bd847007d0240d7bacbef593ebcc4d"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","31d0a2a14fb72020f74411547aae1fca"],["/TechnicalResearch/Python/PythonExercise/index.html","254ed8dd88a7dc7cf7c9ba7edc8d3f79"],["/TechnicalResearch/Python/Python问题归纳/index.html","e30bc65ef0dedacf3c8832c29f4fad55"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","471ef9fe05c5812b3b62ca66e1b527b0"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","e835a2d971bbb064c9fd9faa734b5349"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","17a31e2c2616fadb50460382c96e167e"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","413a64a08c388c0e5d23eed2dabf7543"],["/TechnicalResearch/服务器常用端口/index.html","94914b006f96a551deb9239523e800f2"],["/TechnicalResearch/正则表达式/index.html","e8704053f3a8223164c398f15e9f5139"],["/Teleplay/亮剑/晋西北铁三角/index.html","3cdfac62ced762b585a9a86efa37b4a6"],["/Teleplay/仙剑奇侠传系列/index.html","541cb448b288852537a87c90d5075cc1"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","0974c55724e4d90a122295faa6f4a8ef"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","63615ccb738428f797cdacd8ddd8f3ce"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","78bfdbb9dd1e9f4eff8f6ba9793378c8"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","f6c8712c89ddbb11f32a91970a5cce2a"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","b481eab49da7a3c5067569bc31ead691"],["/Tool/DevelopmentTool/Unity/Unity动态加载Prefab/index.html","8237fd624576239b5d2806c7105d61e6"],["/Tool/DevelopmentTool/Unity/Unity的Canvas组件/index.html","3d9684f9b8c48502c92f6313df4dbc2a"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","66495f36c19c9560410a0e1249d4f978"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","82db5bd37d0332b058c42fb0543682ac"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","f72b301898e779220b8b7ddfd6e0ba0b"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","ba2fd4aaa5d946c567f1bb9f4fc6646c"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode开发Unity/index.html","4146d6ea58e94c14ada019238c6fdc80"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","c4d696e3566ef7b040977855ab71df8f"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","b5edd477ad7f9216118a1c9478f9f41a"],["/Tool/Music/网易云音乐/index.html","f53b13cf05ef4d8a043e768a5d915d12"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","627a2de24b7a003bb0200dc0ed9f788e"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","829136cdd872038417b9d4da24ae582d"],["/Tool/Windows/Software/VMware/VMware/index.html","e7b2aa2cb89612671da17ef926f7cfaa"],["/Tool/百宝袋/index.html","e04db7bfdbf65476352b9a30b1b78c9b"],["/Tool/随机获取在线壁纸/index.html","d5a344ab67cde5658e78d0e7156437bb"],["/Windows/Software/Office2019/Office2019激活/index.html","4b3c8ea2bbb102183c44047992367961"],["/about/index.html","82416daff2cbbe9b584bbb69e878406a"],["/archives/2013/10/index.html","e9f697b073d6dda3afb7ec82c0980a13"],["/archives/2013/index.html","5ee79e753307e2ac6ecb211580a961a1"],["/archives/2016/09/index.html","39ec4dbf6536ece8958ea256a0815d26"],["/archives/2016/10/index.html","896327a0bee81a28391c9ba803097843"],["/archives/2016/11/index.html","32aa2de63b308acbc344124097ea67d0"],["/archives/2016/12/index.html","b078ccb000d0adcbaa9053c302307b28"],["/archives/2016/index.html","25cd678922ec6c5f1f7430ee8d6acb3c"],["/archives/2017/03/index.html","55119eaafb891ddc188b0ed820f1c5c5"],["/archives/2017/06/index.html","3275e09acac84fc6d546202b7ccaad55"],["/archives/2017/07/index.html","cb6f2ea855144bf4b483d780534604e0"],["/archives/2017/09/index.html","a79eb9b3fd3f0b6cda79f178d35fc85a"],["/archives/2017/10/index.html","17050b0d2a026884598bba5ba1fcd7f2"],["/archives/2017/11/index.html","3bd36262227111423e5ff94e1c37f31a"],["/archives/2017/12/index.html","a208a25fd5e8cc2b44b4650369a72368"],["/archives/2017/index.html","4e0561f8b2863c9612ec726ab9d1d262"],["/archives/2018/04/index.html","ca91ca8dbcc1f0f149b040b1bc13934b"],["/archives/2018/08/index.html","5fbc1b615b5eef84a8547f399573a5ca"],["/archives/2018/09/index.html","dc6b4b6426e9d1758ab6954378be7490"],["/archives/2018/10/index.html","0165afbe5153f78a804155bfd5134da8"],["/archives/2018/11/index.html","b93e0ce3e8e6e508af1380965c6d249f"],["/archives/2018/12/index.html","49e73db5d093d25f607a2420215e4d90"],["/archives/2018/index.html","9bdacc72c5b89275557b3db6cf2415d0"],["/archives/2018/page/2/index.html","fa3c47fd7aac8cb3eea6f7fdad4881b9"],["/archives/2019/01/index.html","6ce6859d124eb3aee0b5c5a7884502d0"],["/archives/2019/02/index.html","82e89d8082d661aedd8f4574f83e9f35"],["/archives/2019/03/index.html","c2f608d0b0b7529f00c038747b7046f6"],["/archives/2019/04/index.html","6c694399c1d24e4d1b39291ed2d6a837"],["/archives/2019/07/index.html","6993a109fe43e94fca861c3ed5d9242e"],["/archives/2019/08/index.html","a397aa79227859a58f430cdbaf2c3359"],["/archives/2019/09/index.html","b2b6cc67974e1eb2a2b66e8603770a9c"],["/archives/2019/10/index.html","56d90bafe3cfd73b333b49e3b417f6dc"],["/archives/2019/11/index.html","2de97928d6b79186d6a76820dec562c8"],["/archives/2019/12/index.html","a5915668b66c63fbe6ec04488cd40891"],["/archives/2019/index.html","c84ce741831e50ecb2cb7d8171fea0ef"],["/archives/2019/page/2/index.html","0a10115c16757e3f40864995cf3b458e"],["/archives/2019/page/3/index.html","ac8e35b32aa236474455ac4029abea47"],["/archives/2020/01/index.html","286de8cdc481237bdd3cdf122c3d7531"],["/archives/2020/index.html","d7eccb3e256d118dd10cb4d0f3048e9c"],["/archives/index.html","d7597debe11ba625e27351936032185c"],["/archives/page/2/index.html","d811f2f48bc41143089ecfe7ac23d0f8"],["/archives/page/3/index.html","fb4a70f01324d4b03571a4836b3b2ad3"],["/archives/page/4/index.html","e728523d6f86d476fb609b944e99d28b"],["/archives/page/5/index.html","76f2a884001390aaf6892b7a54bb2976"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","2b7421c65c14f9b8381e6ee0e3fe7e4c"],["/categories/Anime/index.html","c76dbf5a0424765ae7d25e948c98c39d"],["/categories/Anime/宫崎骏/index.html","690f4e1e11aab9feb664a013ec07e722"],["/categories/Computer/Alienware/index.html","c6355e3cb7410fab9a1667242cae92bd"],["/categories/Computer/index.html","ab9cfbb9a11ee80bba1d58e547f28b9a"],["/categories/Daily/index.html","29a0be2861ab4f4bad473787114671e2"],["/categories/Design/index.html","d134bbf527963428206ae19d9779a96c"],["/categories/Game/GamePlatform/Origin/index.html","f9809b97fec956e9aea4a6fec98475b4"],["/categories/Game/GamePlatform/Steam/ARK/index.html","3711d67eaaf43e3aa5f2e3ddd539d8bb"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","99c252f5a73517a4fb880a5b10411ff2"],["/categories/Game/GamePlatform/Steam/index.html","0a118be810c61c01e9518652510004d1"],["/categories/Game/GamePlatform/index.html","33833146eeb2baae2aa51a3f39a5b77c"],["/categories/Game/index.html","cb88652199f907f47b6b335702d01c05"],["/categories/Google/Chrome/Chromium/index.html","77e79b590eaaf2105efe4b42dddde4b5"],["/categories/Google/Chrome/index.html","f58110d5d12c21bf10e4aef26e5dbcb2"],["/categories/Google/index.html","77ff2cbdd885737509565f044140f2bc"],["/categories/HardDisk/index.html","91d387d48845e04b00379237571ce148"],["/categories/Hobbies/Guitar/index.html","632121b2ee9b4f820240465c3299989e"],["/categories/Hobbies/PersonalDiary/index.html","87b2054c7a9e196114613e58407e02f0"],["/categories/Hobbies/PersonalPoetry/index.html","e0ba680c676a61ce0b75d537edb46bd6"],["/categories/Hobbies/Photography/index.html","79e74fc338c77409edd98d17094e94e3"],["/categories/Hobbies/index.html","276e0b872186c5198a685f253c341419"],["/categories/Interview/index.html","aa2aa053e8a07ab5560df79fe0b22361"],["/categories/Movie/HongKongMovie/index.html","98b6cb9f915ff26d97aad6cfd2246851"],["/categories/Movie/index.html","60549535f9f4fb74f96e1ebce4693536"],["/categories/OperationSystem/Linux/Manjaro/index.html","0541033585b3e66bdb3f96be45006468"],["/categories/OperationSystem/Linux/SteamOS/index.html","3a3c85931e2911758b604b969d6b4449"],["/categories/OperationSystem/Linux/index.html","a7fa3dcc79a9b98b18cc52db25ad596f"],["/categories/OperationSystem/Windows/Software/index.html","1f16e2981bdf991c176cfe3025026ae7"],["/categories/OperationSystem/Windows/index.html","7c6dbe31c826f386b6ff5ac84d645194"],["/categories/OperationSystem/index.html","2022a5226c63733cdfeb62c6baae70d4"],["/categories/Research/Math/MathJax/index.html","79d7fde3ee385d2c78ce2cf1e1b8af16"],["/categories/Research/Math/index.html","d05b1c840d0e273a431ad7dbac7f7f28"],["/categories/Research/Math/线性代数/index.html","bf177f3de977b4b9ea3233d38a817187"],["/categories/Research/Math/高等数学/index.html","d01ccc24895e7741d232414c2b9df7e4"],["/categories/Research/Memorizing/index.html","6e3a0a4c4935c8dec868e69b65c88126"],["/categories/Research/index.html","5f27447b9f2db5a97cb1471e173557d1"],["/categories/Research/思想政治/index.html","ab23bfac5f52727305d0402f9d374356"],["/categories/Research/数据结构/index.html","a3d96167ea2931572af477cbec10c948"],["/categories/Research/英语/index.html","311f2f0e84923d66c54bd8855a53beca"],["/categories/Research/软件工程/PseudoCode/index.html","6ef2cee7ac1cb7d7e63dd3d47f28072f"],["/categories/Research/软件工程/index.html","dc7aac2e43ef3595cdbe4f795fd30722"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","f74e596b134f5af6990b344ca4ee228d"],["/categories/TechnicalResearch/Android/RxTool/index.html","439d58d721fa0dce5d4337b1b1375b37"],["/categories/TechnicalResearch/Android/index.html","f7943a5a307b47b05f6c2aa86763d5e6"],["/categories/TechnicalResearch/Git/index.html","6e97ff73125def571642898d6ed41948"],["/categories/TechnicalResearch/GitHub/index.html","aa7942bc07da2d744d548f1ed1c5c451"],["/categories/TechnicalResearch/Hexo/index.html","34d4d681f207fda15b875d6c304acfd9"],["/categories/TechnicalResearch/Html/index.html","372d3071d35e6449c3859d282ef40a11"],["/categories/TechnicalResearch/Java/index.html","6751a7962c25c77478d8428093daa467"],["/categories/TechnicalResearch/JavaScript/index.html","76a818718997737d493107077dbf465c"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","39c4075be06b7e01ef3fb002572e505d"],["/categories/TechnicalResearch/MachineLearning/index.html","2757a291a78a5ae8863a569e3adeb1bd"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","83a38c7a0b44cc94bfe7676e53552fb6"],["/categories/TechnicalResearch/Markdown/GFM/index.html","e2204c7646331a777cf836a980c1b71e"],["/categories/TechnicalResearch/Markdown/index.html","30f628aa295b029d341e44abcdb644a4"],["/categories/TechnicalResearch/Python/index.html","02505d884b2df364848ca9b66ece0239"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","c56108f7e1c03e7228b6dad643aec405"],["/categories/TechnicalResearch/Spider/index.html","6f4af25ff591630f747dbfe72c82e58a"],["/categories/TechnicalResearch/TA/index.html","89cd253c5908a6812bf0eaa11be9847b"],["/categories/TechnicalResearch/UnitTest/Android/index.html","711028183f973a2af810550c81cf8bbe"],["/categories/TechnicalResearch/UnitTest/index.html","26d13ef796a0d9baa83ac79961f86ff5"],["/categories/TechnicalResearch/index.html","7964d66bb1501d5b8b4e877b4028d195"],["/categories/Teleplay/index.html","8f9f67b3a348339df7c290c7dca5a3a7"],["/categories/Teleplay/亮剑/index.html","57491dd21713bb6531430b1a046c53e6"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","03e519497d19ea318f1f4956c05d509a"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","3dfa3c3aff2e1e8b3bffdd0eab03c0df"],["/categories/Tool/DevelopmentTool/Unity/index.html","3030e0b267913449a42d0837486adb4b"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","dc098dc8681df4b36b70b1c71a98c6f4"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","5893b21001d34a55357d4389faab496b"],["/categories/Tool/DevelopmentTool/index.html","8aa6790332469fefd8891059e18c54b3"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","12204414787dbfed8e68d2af123780f8"],["/categories/Tool/Linux/Manjaro/Software/index.html","e8341b2d1157428f984137de4b20b75e"],["/categories/Tool/Linux/Manjaro/index.html","e949a77054d694d16accc68a92217899"],["/categories/Tool/Linux/index.html","b2a768d60a1d9cbd31caae6f0a5a1181"],["/categories/Tool/Music/index.html","431ffeab45067cbd5b118d625d17ff78"],["/categories/Tool/Windows/Software/UltraISO/index.html","d5a983f1d8e8eb7b09e6f254826bd5be"],["/categories/Tool/Windows/Software/VLC/index.html","b8090d362f3b16075ad403859407c753"],["/categories/Tool/Windows/Software/VMware/index.html","4fe8bc087bacf8001db8a41793f06a26"],["/categories/Tool/Windows/Software/index.html","ec3dfcd76427c0fe24b1e06de1abfe82"],["/categories/Tool/Windows/index.html","f20f02dc2bbdd6e0f835ccade2f4efe9"],["/categories/Tool/index.html","1542e8ccc6a56fd3abf6158f9276cd22"],["/categories/Windows/Software/Office2019/index.html","990ed5e545576c2b82ec160f539b6625"],["/categories/Windows/Software/index.html","854ec5ba4a9310febd8c239f364522e9"],["/categories/Windows/index.html","6cbc830be327baa7d34400778695eb6f"],["/categories/index.html","98e647faf3b0e6e0937c0b6a434fc9cf"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ff4a900011f3cd3bf6d082bfeb4422e0"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","595a239d47ac9e16a0bb9e331b601947"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a5ca284da134253101317e6ae971c76f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","89f73a223b5c7d193fee532cde683c10"],["/movie/index.html","6cd077c465d71d8c71ed3be47507c69b"],["/music/index.html","8463bf5af4e363f3c7d80db428678d8d"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","6c6eebabbd5efe8e5a7b32a4e72ef8bd"],["/page/2/index.html","a1e1e865ff92ddd92141e033f97e91d5"],["/page/3/index.html","f9c7a2d4d071b518dbc8da75de7585a5"],["/page/4/index.html","3402220713cc800341abc185b8b7a491"],["/page/5/index.html","69b4c01043cbe862d45949cb65376465"],["/page/6/index.html","895d1adc83e0672a8602735a050dddca"],["/page/7/index.html","36d1fa513992960ade65bc1771d30056"],["/page/8/index.html","8f1c0c02d49beec046b14f3e04377c5c"],["/page/9/index.html","8175455e9092c2881d1b67f166005321"],["/tags/ARK/index.html","22eb6fb634e86b7473a457ecfafdc11a"],["/tags/Alienware/index.html","c6f5a25807e6f529bd982b810e33900a"],["/tags/Android/index.html","32ce83cb86cb0436b42c41d1cbc50a28"],["/tags/AndroidStudio/index.html","9d93eeb55bc2ecedccf3bf8efa82b1af"],["/tags/Anime/index.html","886209577f116083d6250b30e7e0a2a1"],["/tags/Base64/index.html","5f6ed3a3b86fcb19b6374f0b09368aef"],["/tags/CDN/index.html","58761e6e6234155486488a6428a482c7"],["/tags/CSGO/index.html","89c8e246dc345ca39843d4069ff5009c"],["/tags/Chrome/index.html","cda67b04157e5ba6b5905a9c36f16568"],["/tags/Chromium/index.html","5c8becc07630c2d7c956d3e711437f24"],["/tags/Computer/index.html","02cc44c3625336f4f464208be3173e7a"],["/tags/Contributor/index.html","88eada5c52a5f1f79753ac2ee2f538fe"],["/tags/Daily/index.html","fd90fc62345655019026f025b182d413"],["/tags/DeepLearning/index.html","3705dad9ff6decb7b69043cb0802ee96"],["/tags/Design/index.html","bdb22d7b8bee681756ec9aa40f6e2632"],["/tags/DevelopmentTool/index.html","60bb43575b72fff8bde8a210d8c5ea34"],["/tags/Emoji/index.html","f32ad6184ad00f8508f561dae6a68903"],["/tags/GFM/index.html","4c2cb2488d416639dd3b0422528ca65d"],["/tags/Game/index.html","bd863de1cb48ed9dc40522d3f43b4141"],["/tags/Git/index.html","5fb4911eb2aa2f5c214f191726076348"],["/tags/GitHub/index.html","0f18e3d919ee31d6260b1f844444e8b5"],["/tags/Google/index.html","2f79881b250f0bb91dd6d024560fc7aa"],["/tags/Guitar/index.html","9169b8b6fadad370e30f0efc729f492f"],["/tags/HardDisk/index.html","37cf34f1f43e46a3e766a142c232229e"],["/tags/Hexo/index.html","88fa88d41032d03ac98fb4c755568806"],["/tags/Hobbies/index.html","0b97e3f4464de385d00a12868b5acb1a"],["/tags/HongKongMovie/index.html","38a40f672badf53874857f43ad7cdda8"],["/tags/Html/index.html","99eae974a53c50f71cbd68358ffc433b"],["/tags/Java/index.html","648c4a32dc578e9f4eb4745cc2c2ef16"],["/tags/JavaScript/index.html","ffbd37cc9e7103fd867e3aa9f486c7d6"],["/tags/Linux/index.html","1da1e4d6255b79528b5f8308b7d96c12"],["/tags/MachineLearning/index.html","a5b266ccb68ecc9d2911feb7f8bbc68b"],["/tags/Manjaro/index.html","b000fcba0c39034db36412c70d7d6b64"],["/tags/Markdown/index.html","7b32b2561e7cee8a818a2c162dd69657"],["/tags/Math/index.html","b6ea2dcbb71022756284fe049195492b"],["/tags/MathJax/index.html","2f4d95d24be14437c14abba8f6f52b33"],["/tags/Memorizing/index.html","cd6cc7085ef32a17292b7bfee6db61cc"],["/tags/Movie/index.html","a4428ab832d59723ac3efaa2c9cf31f6"],["/tags/Music/index.html","8d00ccad33bd50fd5a62701236abbf7d"],["/tags/OperationSystem/index.html","9662cd70d7fc5cb3a5c1e5e83787065e"],["/tags/Origin/index.html","a0ab69cc104b100690040a9df6e4a732"],["/tags/PersonalDiary/index.html","5c7125fc2a1d5663c446e7707cce613d"],["/tags/PersonalPoetry/index.html","9226d0adf7545d9239e39845bbfc3b3c"],["/tags/Photography/index.html","316e7a665d4e922b9b5abe6f853b65f1"],["/tags/Port/index.html","d8f504b210bf383668ef5d4e42c67dc6"],["/tags/PseudoCode/index.html","a679b78f047b1f3ed36406fd0bbece98"],["/tags/Pycharm/index.html","e14a73d5929bf826f481794668b9e644"],["/tags/Python/index.html","a721364732bae4668791e613b5641d0d"],["/tags/ReactiveProgramming/index.html","d22930dcf7f819ed7824200eac907986"],["/tags/RegularExpression/index.html","8f2a80cdc4d5ba166fd669d6f6b87f89"],["/tags/Research/index.html","cbde3cb3fea6340931cb131e4a9680af"],["/tags/RxTool/index.html","21070416b418c740e29154866fd7dd01"],["/tags/Software/index.html","9dd31079d23aab12162aca2ce2819fef"],["/tags/Spider/index.html","96d2606fb7d3bc2140d8d186ec574be7"],["/tags/Steam/index.html","2c461004ec5f0fbb24c2da889a8e7f4e"],["/tags/SteamOS/index.html","bd65f03df346dcf67b3ffa583ed6832d"],["/tags/TA/index.html","bb5e9209e561049431fe58363c8d553c"],["/tags/TechnicalResearch/index.html","a6ae73f597c11dfde9a1213129764fe9"],["/tags/Teleplay/index.html","c8c4afa37ab15b58eef2c3bfdd3847ff"],["/tags/Thunderbird/index.html","abd3cdbf0889667754ea528b958c58c2"],["/tags/Tool/index.html","47fe64a4b586fdc30c39f3dc61cec690"],["/tags/UI-Design/index.html","0214b364e1172b73888b9465f4749258"],["/tags/UltraISO/index.html","a2771106c61a2839b15c803d172fe228"],["/tags/UnitTest/index.html","92851e6a7d1cb5a8ed33e50081996ab6"],["/tags/Unity/index.html","a33ca3d87629cc7edf04e285160b0901"],["/tags/VLC/index.html","7ab25b744e7a0be1a9c628bc7904a6eb"],["/tags/VMware/index.html","6f5689dca0a73a14ee1938976ee89453"],["/tags/VisualStudio/index.html","986df1db6e04876edd1908d4c80e1349"],["/tags/VisualStudioCode/index.html","9676e7d96e7f33e4fcd3d1f23708266d"],["/tags/Windows/index.html","8eba39d11bfbcc977a8adbcdec56a92c"],["/tags/index.html","5c06b0c47fb86a7d90dcfd1253b231bf"],["/tags/亮剑/index.html","c676816de7c1a8afe50299f7391796c0"],["/tags/仙剑奇侠传系列/index.html","2ad166fa2e77ebbbd0f6b762cbd7d4ff"],["/tags/千与千寻/index.html","f92061680c877e014bf5479cb3e6415d"],["/tags/宫崎骏/index.html","a9fbdee3ecc37074d37d1cd2e23f243d"],["/tags/小王子/index.html","65dd158cad2abdb0ed5d13c9ebc69316"],["/tags/开心鬼系列/index.html","534dbddc7c358eff007caaa68999bbbc"],["/tags/思想政治/index.html","f8a6f80540a2638a04398e3493612480"],["/tags/数据结构/index.html","a849d46acf34faa3c69c0e87e725a660"],["/tags/线性代数/index.html","181670725edd174c10222f11989304f1"],["/tags/英语/index.html","688852110e0c38fb4559bdce194b381d"],["/tags/软件工程/index.html","56fb7429b9bc37c4b26e78584037d730"],["/tags/高等数学/index.html","839fca29d49f4f761419ad46a95ed63c"]];
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




