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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","fb56bac768288cbb280547138ca16794"],["/Anime/小王子电影的共鸣/index.html","3289ffc889c4e66052e36e86f7c9d4a1"],["/Daily/Memorandum/index.html","289f1190f099a7145ea1fedad1022675"],["/Daily/生活小常识/index.html","c0511b62eb0a8217f75a3ccd075797cb"],["/Daily/网络用语/index.html","13ed62747d058b8219ac2eae537e2b7b"],["/Design/设计用户界面的注意事项/index.html","9f43791377be0a337bc168bfc592c5cf"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","a6ab6bdb1896278c0c313060f4a181b3"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","9e190bfeb16cbeb9e0a08162b8c67e95"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","e64cdb3c7ba8cf79a6870cef1df09492"],["/Game/GamePlatform/Steam/Steam库共享/index.html","ca7488c54c2127fd8119643d7c62cc14"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","9d514b2be3c6a00d5b90fb7a12919434"],["/Game/如何独立开发一款游戏/index.html","c74803d3038d6bdf9ab9d245b3f8986e"],["/Google/Chrome/Chrome上网助手/index.html","02d82d6fe3680b22cd88f047cc159bb1"],["/Google/Chrome/Chrome使用技巧/index.html","09dadf5c8751208d4550239b8a94d689"],["/Google/Chrome/Chrome插件/index.html","245b8ce149d12be2457b256361c6b923"],["/Google/Chrome/Chromium/Chromium/index.html","9774831b36e5338a5c938ceb9179a2c7"],["/Google/Google搜索技巧/index.html","a32190cd45104bd5d6a120d59a52199f"],["/HardDisk/硬盘分区结构/index.html","e5ba1c325e970c27982787955c840c8a"],["/Hobbies/Guitar/吉他入门/index.html","9ac51cb0798bb26f23b77d437c08a764"],["/Hobbies/Photography/摄影入门手册/index.html","a3f2ea7d8470bf1a9e97ebae1954c2fe"],["/Hobbies/个人日志/芦江曲/index.html","561ed289d25dfcb930019102697a3a37"],["/Hobbies/个人诗集/闲情逸致/index.html","34f01c163d259e30921872a986cbfcee"],["/Interview/2020年字节跳动面试题/index.html","cd33675d63fd6d24f48b2a75615fd8fe"],["/Movie/HongKongMovie/开心鬼系列/index.html","0d2e56a7aa9f2aade1f70f27b40fed49"],["/OperationSystem/Linux/Linux分区管理工具/index.html","7fc97fb405d1ba929a80c8819f07500e"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","367fc0b33973441972db8f19a8c6e32f"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","67c1a5b428297fbfa8b6349b9f7fbba4"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","cdaebd1c8534d5526dea076bbee89569"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","be41f3deea29e11fc997309d94c0f254"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","ab9f0a7b943abeadbc2dffd70bba7069"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","7db5e9cfb0ac2caca21c953838a89d59"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","3e8723e5ab6b3dc4dde2f27e01458ced"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","3d0914f555073df35f54d5ae8556186e"],["/Research/Math/线性代数/线性代数公式/index.html","e01511f5db323a17ddd5f9663b8a361f"],["/Research/Math/线性代数/线性代数知识点总结/index.html","aba86027cb04aede69816b7e2a6d355e"],["/Research/Math/高等数学/高等数学知识点/index.html","2887b9f81b4f744942843d40454a1d50"],["/Research/Memorizing/费曼技巧/index.html","8069a86da1f47960520e01ea142acaec"],["/Research/思想政治/考研思想政治理论知识/index.html","4dc89f70bd0bd2f690c4f6beffdaf053"],["/Research/英语/考研英语作文/index.html","35694d007076f0d3defd82638f6813be"],["/Research/英语/考研英语词根/index.html","ce6ae9ad11a145507f8e447c15d4ff6f"],["/Research/软件工程/PseudoCode/伪代码/index.html","647e39f3ed283d305d7111eb79a406ff"],["/Research/软件工程/中南大学软件工程考研题型/index.html","454d5e873d7b17a50aae100ea73e8633"],["/Research/软件工程/软件工程基础知识/index.html","45fde3b261f820f8fbba9252884b2186"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","cf17878b1ebcef92c49797350d19a8d9"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","0942bf7e6659cb258ba0cdacf0a35035"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","4a9c57513b4e09835291a3e819d6b628"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","c3bc1335428c55ab35c78c5c5bdd2759"],["/TechnicalResearch/Base64加密原理/index.html","50ac3fe4aad4e4b6578009ef6eaddee5"],["/TechnicalResearch/CDN/index.html","f173dfdb1090fd7b7cfe2003c33a4f7e"],["/TechnicalResearch/Git/Git/index.html","5944965ee073ac74da15cabe3840900a"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","edaa3cfa93f5550989e267f6b9987dfd"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","bd7c46ecc5ba70e65932bb6d3ea413c3"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","2f7e4fbf122308fd8c2964c65163ab50"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","fc99e0acc35bb10017e6fdb30f1e9041"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","9f547124e466446e4917214fa84ed3a7"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","714eefb59e183d36f50a13c8278bb0c1"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","8053c1ad02abc3496595566ba01ac790"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","eeb74f1fd4e0398797e7625153355505"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","36d638bb6b7cd8a1d23fdc10315d8f18"],["/TechnicalResearch/Java/Java基础快速入门/index.html","1cbd265484ea8de15a03fbc9c9745319"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","641d2786f0f2379d3bc004f694bed043"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","6b0d46a4ec9cb33b561380d8a8e22f54"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d0424c9e1c459ffa4745032da508eb98"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","66eb3b33c5401b1ea9840c3dd411959a"],["/TechnicalResearch/Python/PythonExercise/index.html","f27d42525e203b6359429f2636beb6bf"],["/TechnicalResearch/Python/Python问题归纳/index.html","f5c553cad1ea808176a93dbe7e7c9807"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","2be66a290cba2f5e3e2809f6c0797898"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","ab83648002b09fa2bf287300200920f4"],["/TechnicalResearch/服务器常用端口/index.html","373851aba4524d63cd83a1ded2178bc0"],["/TechnicalResearch/正则表达式/index.html","4242f36200cba0820f65aabf2eee95b8"],["/Teleplay/亮剑/晋西北铁三角/index.html","94c93162b88cd79e99f33febd5b15301"],["/Teleplay/仙剑奇侠传系列/index.html","68850bf8e8bb3a0a76203125288ee42c"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","a3f742670cf6db4221565b80a887a22e"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","f967ba47d2ae34afda44122c7507176e"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","9a5ad2fbbb1134a05c381ad28365670d"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","a70f7efcaac42691204f6ad0b4d28af2"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","10a54ad6fe05d68faff4aee0e629e73b"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","5d068d44f3b72e9753df6db17cb360f1"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","d194e6be7a787c97a3e6f6cc47242811"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","eb7c1aa2e87d5d421592961e5bfe848e"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","b59b8fed58dc8f41294ae9f6e68cdf55"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","48bee19e7ce41b18a99216a9fcc7ee4c"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","61aafb92430794d82bbd20013723ec73"],["/Tool/Music/网易云音乐/index.html","675f0b1505e5dce1c0ae1d01acd7abcc"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","38c816149fa58afbd78e5d2f44c77ee5"],["/Tool/Windows/Software/VMware/VMware/index.html","8d20e5fee0bd49821d3c2b3585d8f7e8"],["/Tool/百宝袋/index.html","0d3b6193e8afa3cfc7c0b57f6641cfaa"],["/Windows/Software/Office2019/Office2019激活/index.html","25c9b7982ed93b4432b8ffc4c1ee9191"],["/about/index.html","6276c84ef85db482b341770f52c80e56"],["/archives/2013/10/index.html","517e47f2687a1245689e9e24c3f95c3b"],["/archives/2013/index.html","d3cb962153f792deb2f5b5665eb1d752"],["/archives/2016/09/index.html","a95e8ef761caa40d1fff5b46519c0e7e"],["/archives/2016/10/index.html","ec4288f3abce85a73cfa633c583f56aa"],["/archives/2016/11/index.html","9b7c3cca84a942a2bb2a838abc68f85c"],["/archives/2016/12/index.html","1c96f2224ba5c973829e4f923c6cbb3e"],["/archives/2016/index.html","016dcf2eb674b2b9b073905d07f966eb"],["/archives/2017/03/index.html","d28665d3e4345c8687b1cf972e97c9af"],["/archives/2017/06/index.html","0d706120e942d0baa8d933fd551d4e23"],["/archives/2017/07/index.html","1cbc0ec45d409f22ebc4ad93caf57353"],["/archives/2017/09/index.html","ff9eddf2a7603795419362917e17d87f"],["/archives/2017/10/index.html","5af7739657bd8954323f69be61841237"],["/archives/2017/11/index.html","da4789b90d4db2b340826126de42e2e0"],["/archives/2017/12/index.html","c041415319a1913b02f61c3cc5aec81c"],["/archives/2017/index.html","d72d4838624a01f2f38dcb8949428e6a"],["/archives/2018/04/index.html","d578cb9708f46853a92c013451c24636"],["/archives/2018/08/index.html","72cab63faca4ae8038e3dd7bc6d34417"],["/archives/2018/09/index.html","ccdd2ebac8a08802df6470d036d71dec"],["/archives/2018/10/index.html","1316937699d44d68f17e88049be077f7"],["/archives/2018/11/index.html","11ba3fc66c1619f1cfca1545f0e4c478"],["/archives/2018/12/index.html","1c90fbc690f92ae0ffaefa761e65daac"],["/archives/2018/index.html","61f359293616c45f919f99f04d5514ac"],["/archives/2019/01/index.html","5e2cd045ef0b12ec428f2a3ea0c120dc"],["/archives/2019/02/index.html","0206ec2e2dfc0d85fe7736b012112284"],["/archives/2019/03/index.html","74e5e2b6384101645a57b79397d3ce9b"],["/archives/2019/04/index.html","ebe6f5dc73249c8e7c1666b8d938895b"],["/archives/2019/07/index.html","f53b7175af2e63a7b7f70028cf02bbc2"],["/archives/2019/08/index.html","ca36d0a1a8bb5dc0a8c87d7408e54aa0"],["/archives/2019/09/index.html","e3b400742e1952be58f100f8f1cdb126"],["/archives/2019/10/index.html","ed006d6baffff8e0b7e912a707bbaa56"],["/archives/2019/11/index.html","7ff6d5120e85b65edd324ac84978ff2d"],["/archives/2019/12/index.html","07d43000a4df73cd1219a93b6541bb86"],["/archives/2019/index.html","30f9448e52d6423473e75130a704fb26"],["/archives/2019/page/2/index.html","f99ccc64bf21cefcf88aac4f5464e05a"],["/archives/2019/page/3/index.html","be4f26432d360f7e7a9bf5bba8a92a97"],["/archives/index.html","2ed6545cf506641a2dcf69d30fd43bf5"],["/archives/page/2/index.html","2ea2f16bdc54caabf502d45283646a72"],["/archives/page/3/index.html","846da458830707a0b5309eece65d9748"],["/archives/page/4/index.html","ed65f97f34e2206045544e9af10c7db2"],["/archives/page/5/index.html","ce0d1e6cca451115d8cfd726d5294df8"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","55bcfbcfbc200df453e8779ac0985546"],["/categories/Anime/宫崎骏/index.html","f666d877b1e6889149c1389100c662ee"],["/categories/Daily/index.html","bdf5a8e7856c0822eecd683316eb7ef4"],["/categories/Design/index.html","13a9df118951d52af280c3b38e478f8d"],["/categories/Game/GamePlatform/Origin/index.html","30aa3ed264a505733bbb4528e21eb36d"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","341616619587c562d116cbc409f53590"],["/categories/Game/GamePlatform/Steam/index.html","b33a093e5ab4178e598a17dad9b4bff3"],["/categories/Game/GamePlatform/index.html","1dc8534ef7f60a6b4583e11fd2307ac7"],["/categories/Game/index.html","baedc8db13d1480e79e3ea450186e045"],["/categories/Google/Chrome/Chromium/index.html","46887a99ed744b28388663761281b56b"],["/categories/Google/Chrome/index.html","68252d5f87ec8dfe0a7a5a40647fb59c"],["/categories/Google/index.html","e85182d866ebd6bb3bc50e40eb5afe5f"],["/categories/HardDisk/index.html","168cc623e52446a12bcff5363ec33337"],["/categories/Hobbies/Guitar/index.html","18a161a46db7ea105dd885d11dbca815"],["/categories/Hobbies/Photography/index.html","79626bc304f4b1a6d747e76f9e7a4db4"],["/categories/Hobbies/index.html","17a44ec9cddefc5a1ea4ec005ae3a012"],["/categories/Hobbies/个人日志/index.html","e8b32c121c0b6b863d184af50d495a97"],["/categories/Hobbies/个人诗集/index.html","84c2fe59a37c817ec056ca67847e46c8"],["/categories/Interview/index.html","07f1b80deb846f51a803071b98faf88f"],["/categories/Movie/HongKongMovie/index.html","616e9adf5c54303efef3f69cdfd6ad2d"],["/categories/Movie/index.html","f57b9f50c476b0b3bc81e258ed5f4b2a"],["/categories/OperationSystem/Linux/Manjaro/index.html","9a47a3115cbd262fbc38b22729e928f8"],["/categories/OperationSystem/Linux/index.html","e55fdd2f8986f8d43df773c6af92555f"],["/categories/OperationSystem/Windows/Software/index.html","b28b06a1f80eb0713de075bb7f6024b1"],["/categories/OperationSystem/Windows/index.html","59d8829420800865e59d5fc9b1d5d93b"],["/categories/OperationSystem/index.html","3d65c200488080d6fb8a881a74284f7b"],["/categories/Research/Math/MathJax/index.html","8f91ffe46257dc78f712a8818bdf9448"],["/categories/Research/Math/index.html","911763c2e97afd95fe29504eaa939d4d"],["/categories/Research/Math/线性代数/index.html","5ccf556b67776ef644747a8708e40860"],["/categories/Research/Math/高等数学/index.html","4ec53703d0daa4ccc7e1ad3701156678"],["/categories/Research/Memorizing/index.html","8c46705d288619f4ee675da56d90ccbd"],["/categories/Research/index.html","3ad327766ae4feb188145eebd737111d"],["/categories/Research/思想政治/index.html","9d4cfb1b689e72ea39e3f5a274b266c0"],["/categories/Research/英语/index.html","fdedb0e86932a5c93146cba1ec7bf52a"],["/categories/Research/软件工程/PseudoCode/index.html","d6a13b1856c756bff26d233e2dbdcd42"],["/categories/Research/软件工程/index.html","f1ecb171a648bc15ca45e6cf2eb44e90"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","c11317c4b18f89d890cebe19777adea2"],["/categories/TechnicalResearch/Android/RxTool/index.html","25986f9ca3a09cacac2b09285bcd0328"],["/categories/TechnicalResearch/Android/index.html","a0101c7bda5e2b92e2f128a17f3b1176"],["/categories/TechnicalResearch/Android/单元测试/index.html","35a1a4d9f0f66ec5e1ad646d8a303a9c"],["/categories/TechnicalResearch/Git/index.html","4782bacfe5fb7533843c8c018554fdae"],["/categories/TechnicalResearch/GitHub/index.html","5afadb5334a1ad897e0461fa53bb05ff"],["/categories/TechnicalResearch/Hexo/index.html","01158516a0d4467f7c3a60dbf4ccb9de"],["/categories/TechnicalResearch/Html/index.html","4abc930db776492547268731cc2c3ddb"],["/categories/TechnicalResearch/Java/index.html","92c963817b577dede4c1e721675dc905"],["/categories/TechnicalResearch/JavaScript/index.html","a60e233fa740c047e537ee240921e3a6"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","87470d51c9aeaf58410161840c4be74a"],["/categories/TechnicalResearch/Markdown/GFM/index.html","724bbff935a124ac0a4ffab09612695e"],["/categories/TechnicalResearch/Markdown/index.html","48cc6333e27f3f0a343367e1274c6c12"],["/categories/TechnicalResearch/Python/index.html","511c61297dea2f4141a15ee6e74e6728"],["/categories/TechnicalResearch/Spider/index.html","d10acfbf66a25dc97c6c920a0c1607fd"],["/categories/TechnicalResearch/index.html","50126937bbfe72f5e8adbda701bc0c9b"],["/categories/TechnicalResearch/响应式编程/index.html","72e7b1efbe3cb4436ca79c1605d33172"],["/categories/Teleplay/index.html","baf2e8134d35fb7399e82d63ea1c0288"],["/categories/Teleplay/亮剑/index.html","541b9a1ea81d23411d70d1e63a98b014"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","2aeac6ee4253be8a0e039fea1ff20586"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","f9aaa870e106769edf4d8296786e8a00"],["/categories/Tool/DevelopmentTool/Unity/index.html","bf6406e0f3447645b4f6a043b604d147"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","80d51bb2e149abd32db2496276e9a931"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","fd913e055ca5f354b0db963763646285"],["/categories/Tool/DevelopmentTool/index.html","984c05b9018794c8830944da7c32f30c"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","72388c0c1dc5a594aa26869aa5bbe01a"],["/categories/Tool/Linux/Manjaro/Software/index.html","a92e5caed6105e35b79a5176b63e7b77"],["/categories/Tool/Linux/Manjaro/index.html","0fedd21ab7ff3ac44f368111707bc87a"],["/categories/Tool/Linux/index.html","165f5196fb12b2ffc6e94a625e605d8f"],["/categories/Tool/Music/index.html","b10727a7f1b9635d2ec434135ebd25c7"],["/categories/Tool/Windows/Software/UltraISO/index.html","0e6c5522a3bfacca97e06434a804b58b"],["/categories/Tool/Windows/Software/VMware/index.html","b15bab1f1cd3ec924d58e47aef14d556"],["/categories/Tool/Windows/Software/index.html","9c69b184f1bda1b5f88548461512dde5"],["/categories/Tool/Windows/index.html","9e24a770462fd7d90597014cae293acf"],["/categories/Tool/index.html","59de8201d36ebad769b6c7b26e952a92"],["/categories/Windows/Software/Office2019/index.html","1de3627f3c25b2e9434c2d120966dc3b"],["/categories/Windows/Software/index.html","f87079cec2b5a6a96dcdef803678d15f"],["/categories/Windows/index.html","bc70f39d5309e1263ec73c5d7705cbb6"],["/categories/index.html","1fa64a56a743f2692b56b821bc0410fb"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","df656fc9189eae3377757910b72e26f7"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","e169eb69ea2e7a467ea063d496de7e54"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","1a6e1d724f7f20bae95da0a3b9ea3d71"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","46e22ba173cb38bd42f64136c6f96286"],["/movie/index.html","e1dc091a9fce19b4f4fe45a3d6445c02"],["/music/index.html","99a35f787fa36fa3a1bd59d83b52dd8e"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","a689fb1a3816d6781356b33e56570838"],["/page/3/index.html","46b4ac662252e97f3409b62d870e9821"],["/page/4/index.html","660ea36cfca93db607ec124ad80506fb"],["/page/5/index.html","2bfcb4cca5b477d6d4fa54233befff2e"],["/page/6/index.html","2ab1867cf5e301cac117a920fb3d184c"],["/page/7/index.html","fde00738401da6e444207503d4e58ca1"],["/page/8/index.html","260764ecebfda7c5954db8829227146d"],["/page/9/index.html","ee6dde1a5c68a71ba6b17ded0827c7fd"],["/tags/Android/index.html","3cef5e29a7cdb4e8082f649f237d420e"],["/tags/AndroidStudio/index.html","ee1db6e9fe604c2252b0d484fd7efb7d"],["/tags/Anime/index.html","533fd8ba9fca3477524d312a95a28454"],["/tags/Base64/index.html","190922a3b1ed3cca17c7e1e9387b8634"],["/tags/CDN/index.html","2308719fbdeb990d576aac6f96dfbf8c"],["/tags/CSGO/index.html","f2804847a43d8771ea3cabf762aa35f5"],["/tags/Chrome/index.html","c5358ccb0d08e2988cf276a48b615c6b"],["/tags/Chromium/index.html","ee5866da9bb85da29b0916c713b52061"],["/tags/Contributor/index.html","f237619be69c8c3a21c39b7761524a4e"],["/tags/Daily/index.html","fdfb805bca4bfb040397acf042b5a2e8"],["/tags/Design/index.html","62cf56e879b16c363835ac32a241c0d1"],["/tags/DevelopmentTool/index.html","a15a79bd511a05f7aa431db66e23e107"],["/tags/Emoji/index.html","1d91f02232caa67e176129330302e5b6"],["/tags/GFM/index.html","b2d608647f695d0ffc3a0a40e6ee731d"],["/tags/Game/index.html","646e6e4dc3b61d66d9ccc038cd8a62f4"],["/tags/Git/index.html","4b1876552c47a8a6a0fca102631e1655"],["/tags/GitHub/index.html","717a96b237dcfd9b22caa6e60f35e604"],["/tags/Google/index.html","17feb047004a53358921641dcac2d46e"],["/tags/Guitar/index.html","cf0f290bd76b2d912c90f2db4dbd3c4f"],["/tags/HardDisk/index.html","39acf885f3164a4b07b426bff387ad32"],["/tags/Hexo/index.html","5f00fe05b3cdb8403bca28e9c1113109"],["/tags/Hobbies/index.html","98525346fbfbc29820198392b0bc8e26"],["/tags/HongKongMovie/index.html","7e309ea55f54385d9c4708e79b5356ae"],["/tags/Html/index.html","27ea95dbd71eb0e67367fbd2c7608195"],["/tags/Java/index.html","3026c685c626d7571f1a8f31ff627821"],["/tags/JavaScript/index.html","034b57c3ef7c0e41b1827b42bb6a4ef1"],["/tags/Linux/index.html","4c990157461ce108d00804a414ee6a8c"],["/tags/Manjaro/index.html","bb8a504fcaa4ca18b91c0e277ef0643f"],["/tags/Markdown/index.html","e250b358bc6935fcb6a77637fc8f239d"],["/tags/Math/index.html","e6a930b3a2582db33a9108f04c4dd835"],["/tags/MathJax/index.html","b009bbb4a2dd98519adde7c9fad8acfc"],["/tags/Memorizing/index.html","dd80518d0acff9edf915a75a059ba9bc"],["/tags/Movie/index.html","f235760c35b239ae773c47550c6c680f"],["/tags/Music/index.html","c3db5685b25f0650a2a8ea70b10a18d0"],["/tags/OperationSystem/index.html","f0b2419ae7a9a09387851a1766ddb3aa"],["/tags/Origin/index.html","e483f6a893eb7fff2525ae5f4c5f495e"],["/tags/Photography/index.html","593cba2d72ff22bb26e1d618398bb043"],["/tags/Port/index.html","5d1b9107110c6ea1966b3dc4d9cd53b0"],["/tags/PseudoCode/index.html","dc224335fab25c12a10f51fad24c3f46"],["/tags/Pycharm/index.html","cb0f4dcfe8264b1fe9b3fe3e8dd447e7"],["/tags/Python/index.html","08bda5edd4b42d76bc1f20735ef43a33"],["/tags/Research/index.html","1ec6b06eeca45a4009fc1ac0a4ede2ab"],["/tags/RxTool/index.html","b1c0226c363df7ab9208b73c477982cd"],["/tags/Software/index.html","16cf3abe0af4fbfb023efe0d959ede51"],["/tags/Spider/index.html","b408762d1e7aa092e977b85b547b0068"],["/tags/Steam/index.html","5e6de5ce8cad82afb2f7353c0b2dec68"],["/tags/Teleplay/index.html","12464d7c0e9b97f33997268b5d4cdcd8"],["/tags/Thunderbird/index.html","d679a402d2bc557d43914c33df616203"],["/tags/Tool/index.html","9824c11137f4055978d6b1e5f9ccdef9"],["/tags/UI-Design/index.html","14d2f3eb0ec15638acc7d3cd0dc42097"],["/tags/UltraISO/index.html","fd9148575d61963dffeafb5ba50741c7"],["/tags/Unity/index.html","04b723c307ec6a581eebce46c5fc98a3"],["/tags/VMware/index.html","ae5591de04d723555fa58076bf7f3084"],["/tags/VisualStudio/index.html","0d859728112056ca5fd20de676a1eadc"],["/tags/VisualStudioCode/index.html","ad22a89d122a1ff20f790272b35e52cb"],["/tags/Windows/index.html","b3da332af91f5b522c24eba803c5c44c"],["/tags/index.html","63d8907d72e44b9416ec62c5f47b3df7"],["/tags/个人日志/index.html","4fd2466ad85aa4430441b1fe95b9ba6f"],["/tags/个人诗集/index.html","392062c8eef1eb7a6eec25681b6eecf2"],["/tags/亮剑/index.html","688f0e7ead34916dd0bcd44a04201bf9"],["/tags/仙剑奇侠传系列/index.html","20253e2c6833fd5c637738eb36a64abc"],["/tags/千与千寻/index.html","f653f60d43c169a30d3e9bae6edd3d04"],["/tags/单元测试/index.html","61be140e1dce91299f2302d600eeee81"],["/tags/响应式编程/index.html","8c50d2137f2c47d189cd9b9061d8a088"],["/tags/宫崎骏/index.html","324086659d6ecdfe35c783f3db6346b5"],["/tags/小王子/index.html","b262b9b5c0d8a5d1b659dc1ec8aac0b2"],["/tags/开心鬼系列/index.html","266da2dff1cbb68c1b4f4076f40ef6d8"],["/tags/思想政治/index.html","3fa24fd7829f6afa8265f66d5552e011"],["/tags/正则表达式/index.html","2d94ae74b111a7488f6a8edd6e305463"],["/tags/线性代数/index.html","ed3599476015d1cac46b5b1d6d82b0da"],["/tags/英语/index.html","93683f6b8175ec5eb50c2e8a76a51851"],["/tags/软件工程/index.html","7e35377e32606cc1220d89630ea67291"],["/tags/高等数学/index.html","a915225c12f1b25c9533769ef2298a8d"]];
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




