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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b892082a5b151ced1bbd344e5bb5e0c8"],["/Anime/小王子电影的共鸣/index.html","4e8cca48c9c916bc2fef4776865bce92"],["/Computer/Alienware更换电池/index.html","a9f177c8acd5dd5c7d34a2aa63b8b326"],["/Daily/Memorandum/index.html","5cb09ed4dfb2f003357fe47096e2ca65"],["/Daily/生活小常识/index.html","8038165b407f74ce131894fbbdcd38a8"],["/Daily/网络用语/index.html","d6393cc6095feac073955ea61e804cdb"],["/Design/设计用户界面的注意事项/index.html","71585f1d88112b332d528158723dd252"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","22e7ba683aef5c9e1a564db6f80bff00"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","5152e47f55b4b370bd6413472843b3d0"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","0b5e26996197bbe2b492d61d776b31b2"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","cfc6071cb7389cdc5e0e0dbc7d4ded9f"],["/Game/GamePlatform/Steam/Steam库共享/index.html","175b6493fdb173af588c32b692b3e517"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","2e199ad5e7bcfe3d5baac37fdf7c3191"],["/Game/如何独立开发一款游戏/index.html","f1d1e3165fe8c562658b384a58e5080c"],["/Google/Chrome/Chrome上网助手/index.html","004065c4abd43a99f1e02b54a3d5e091"],["/Google/Chrome/Chrome使用技巧/index.html","d9f52ac24a461d3ee9ca8f5b9980a020"],["/Google/Chrome/Chrome插件/index.html","388ca1ab24c83bf17f7aee48bc26ca67"],["/Google/Chrome/Chromium/Chromium/index.html","c4788578a23530e70349a08b651e204a"],["/Google/Google搜索技巧/index.html","b53227f7c17cf5f3502e39f473aa2247"],["/HardDisk/硬盘分区结构/index.html","875f9cf4ee56f4d526c9b51aacda6174"],["/Hobbies/Guitar/吉他入门/index.html","90d31bb82a946c714e1b07838fd41303"],["/Hobbies/PersonalDiary/芦江曲/index.html","9d0d42f8c2ab5b09724c3646c1dcea5e"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","55f22c86741e7b63f76cf765fe99393b"],["/Hobbies/Photography/摄影入门手册/index.html","fbf95f97cfbbb1cc570ecdcab085b0a5"],["/Interview/2020年字节跳动面试题/index.html","3b3e1588791d44121d8b693b39046fed"],["/Movie/HongKongMovie/开心鬼系列/index.html","dfbfd2b926d97d526318074fbd056ff0"],["/OperationSystem/Linux/Linux分区管理工具/index.html","f7bfdd19ebf61ab39843e4f6404af6f0"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","7559185d52524a707533e0aa622d912e"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","106dcfeab3ba908dd609aee568351635"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","1a64e3c5187e86fea99712a00941e7e3"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","c151fa45a9c9e8e2febb27a2b45fffe0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","7d4141cb87d18e8427cac35871afe5dc"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","f6c23e97a367e6533e8f1ea6053d04a3"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","546a73dd07d28c2551dc7a4e33a6ec7a"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","5c505594577e88073cab65bf46fc3cf3"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","bccd5fe63b1d1a4cd589a5126cee3bb7"],["/Research/Math/线性代数/线性代数公式/index.html","b3e268294f9409263c34823b136a7ecd"],["/Research/Math/线性代数/线性代数知识点总结/index.html","154fea962cad40fb87aaf6f91ca54f1d"],["/Research/Math/高等数学/高等数学知识点/index.html","8d0c36152e388958e34d1f348419c2d1"],["/Research/Memorizing/费曼技巧/index.html","6758a952c3d07be08f268d6167c05f2c"],["/Research/思想政治/考研思想政治理论知识/index.html","4b008261681f48e0c227d3bc5f2eb351"],["/Research/数据结构/数据结构/index.html","c4449038a90cd87789e15dfa0b66b53d"],["/Research/英语/考研英语作文/index.html","6f877e3cfdfb96560063beba492130a8"],["/Research/英语/考研英语词根/index.html","6999babde9402ed46393bb8b07e791ef"],["/Research/软件工程/PseudoCode/伪代码/index.html","14335f859695065e5ed6ee5d355598e4"],["/Research/软件工程/中南大学软件工程考研题型/index.html","e704defbf75c7d114677a6cf815fcc48"],["/Research/软件工程/软件工程基础知识/index.html","781e26b4ff0dbc06513e998ddac54bdd"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","f38ed4286a5e9143192e5f5d917885ab"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","12fdba67201b069fa95962fd1d470ab0"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e34368ffe9f65371cc12e97a51b46148"],["/TechnicalResearch/Base64加密原理/index.html","8b10802387ec78f46c842a1c7bfc4849"],["/TechnicalResearch/CDN/index.html","100002731d8df8f136868805edc200b2"],["/TechnicalResearch/Git/Git/index.html","6d2e3b297df6567007fb08585a87202c"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","3e34ae7b64016c6ba40ca79ab433c118"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","db294c105b14e5ba92ced63d1b0ec31b"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b83f47a174c57ba88b462ba85f5a3785"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","7bc8c6559d1a0c49c2400ae9c3e3b85f"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","5b7afc373c813087f097864a4de81f03"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","f6a19c286763c6e0c6ec58b80faa8ddf"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","75c63125eaf8db51abe3cb9209ab3566"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","3701b9964e103d2cc6d04b6ae0a5603b"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","cc8b0f8ddc14c2eded469b7126dd3f41"],["/TechnicalResearch/Java/Java基础快速入门/index.html","79795440d1cf36fbe2c5a2d6ad6c130a"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","1789ddaa234817f59f3fca92db120bfe"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","2edda24912b934332f20cb02885628ea"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d98734be2e2666e283db2c983b6d0120"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","3b5ace6aea3ebe0c417d9cfd6eb1e99d"],["/TechnicalResearch/Python/PythonExercise/index.html","f08026f8c4fc2b5e961735d0b132c8be"],["/TechnicalResearch/Python/Python问题归纳/index.html","c50ba5c8054d41d2e90b23c37aca4fae"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","4bf4f873802eac528e2e3f4a9bd2a279"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","7cd277683953a242226651c18ab94064"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","c30333f217410f4aa4b9642340038acf"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","24abb3d4a61b8de5d6356c9831892150"],["/TechnicalResearch/服务器常用端口/index.html","d95037a92a785dc9e3ae3cda8e37279a"],["/TechnicalResearch/正则表达式/index.html","28b68b02f6e758b807bef9d5e684423b"],["/Teleplay/亮剑/晋西北铁三角/index.html","160d40448f3139da20b2d93a8f5ecc15"],["/Teleplay/仙剑奇侠传系列/index.html","8e176dbbfa396791271f7af9b003acc1"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","0ee8512f89e1673c4d5465315811a1f3"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","fee7e9e68bb9a5f407d85e5fccab3046"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","cda82cfcbbcd1d2065e4074737c6a033"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","427e983790a506a9c775bfa19ef97e6e"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","d467d0fdf246c1daadcbd8f4e509d205"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","a7a70bd9573ce0b0dc8e9e861b8e91bc"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","1587ba8110c70acfca77c2550e1176c6"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","6dbb63c611653b70b063851a5d79b484"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","f02079844b3244c7840fa696e270eea0"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","6e61393e41e45896b0ddb51d8c03a85e"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","789e1f12753d9231397c8a6b2d75a304"],["/Tool/Music/网易云音乐/index.html","58734a5f7f4f66fd88effb2cb661cf22"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","336a6802a8cc3992122d840dd724da70"],["/Tool/Windows/Software/VMware/VMware/index.html","c1394bb6299565dbc71634abb4a9ac4b"],["/Tool/百宝袋/index.html","7284ad2a75ec670344e7dcf8207956c4"],["/Tool/随机获取在线壁纸/index.html","2310bc5c01b2991e441849ea7c211a29"],["/Windows/Software/Office2019/Office2019激活/index.html","ee4a441b7ecabe8d2384df19fc68797d"],["/about/index.html","cabbc08b48ba4371072fa0d128dabed2"],["/archives/2013/10/index.html","426a34c4c854fdc610e0b222b645789f"],["/archives/2013/index.html","f9054375e088ac2d0e45ec32bfc45345"],["/archives/2016/09/index.html","14b2a4b5102bb5ae0a7f4fe75039f57a"],["/archives/2016/10/index.html","c4fd0f2d3adf97abe7191aa3f2df6e22"],["/archives/2016/11/index.html","1ade1e6221dcee987c3a897b38651bb7"],["/archives/2016/12/index.html","83e80041c1060e6c9ba08792516926b5"],["/archives/2016/index.html","b9737c4a6fb3acb7ad5b5eea65b0e726"],["/archives/2017/03/index.html","b74a7ab985e0a76bda3592d2a9975102"],["/archives/2017/06/index.html","81a429f2a2b0897643ca81f4a1b32a14"],["/archives/2017/07/index.html","ea2ab4a398dcb0114dbb60f0bbc5b08e"],["/archives/2017/09/index.html","9db53f84988106fbe577665a8582f39a"],["/archives/2017/10/index.html","c24ecf6d933b4d99cc11be8c6af21033"],["/archives/2017/11/index.html","e32e21be3c475c799349fe9de58e0126"],["/archives/2017/12/index.html","26a7bcb3a800ccf3d4ca73163f19cec8"],["/archives/2017/index.html","f565ef9295ba1c53f6a676fe7dc9b762"],["/archives/2018/04/index.html","c3f7c40cdd1f3db017a251b7e3af41c5"],["/archives/2018/08/index.html","b95e0d351988673a6634f57748a3b423"],["/archives/2018/09/index.html","4d4bccf7626af774e74ad0aa481f5d9e"],["/archives/2018/10/index.html","d13f1a0d9ef1198f3b0dfc2e6455ae3c"],["/archives/2018/11/index.html","aa665eef8fc0632be34960970eb7ae9b"],["/archives/2018/12/index.html","345e508549f9b8addfcc3dd69f648ca0"],["/archives/2018/index.html","58fbcbd813cc86ca5d89ec9ff955e8f5"],["/archives/2019/01/index.html","1925e922b3dd8f09fbc5301a4e7fafe7"],["/archives/2019/02/index.html","6b4318e11282c53ab42aabb66c6fe5aa"],["/archives/2019/03/index.html","88ccdac095b4bd7a313656ac6bb22106"],["/archives/2019/04/index.html","eb4132073cad2be03c18732eac75ac9a"],["/archives/2019/07/index.html","b5ddf73ff4524101c549c2ba91f12d0b"],["/archives/2019/08/index.html","5a16c2414bb5ebe73ec0ff2e577f924a"],["/archives/2019/09/index.html","3517802c129d38d7f1b9631b3c34e6bc"],["/archives/2019/10/index.html","9ce0b3cbc8f0c0d41d5b4f6244712142"],["/archives/2019/11/index.html","3cdba98c1fa23bba8208d4354e8add96"],["/archives/2019/12/index.html","774fa0b1896c0f48d38b417d327bf362"],["/archives/2019/index.html","2797dca3d90de0d80adc9b37e5d9197c"],["/archives/2019/page/2/index.html","876f4ff1d2c025614b4de702bf5db3cd"],["/archives/2019/page/3/index.html","52e0fe427446d096e2aba01f119a107c"],["/archives/2020/01/index.html","509047f375611c3ecc13d1ddd60809c6"],["/archives/2020/index.html","154c4f167e850a5607df21461cbf56b1"],["/archives/index.html","42efa1efff22d352aea397fa73ab8be1"],["/archives/page/2/index.html","391ba7c500de758dc5e754707c0db71d"],["/archives/page/3/index.html","8277b334fb59d42d100f43817e37b7a7"],["/archives/page/4/index.html","3b6645b0294d95f3b5934010b4716ed2"],["/archives/page/5/index.html","0a7adfb82682a294e57c976283bfe842"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","fba544ef1294c71528020d827345845e"],["/categories/Anime/index.html","492e2c1ccfa1d32b201c70d73f30c83b"],["/categories/Anime/宫崎骏/index.html","3ce640535660526390d2e3e8f2409a5e"],["/categories/Computer/index.html","214b91f0599051f56168bc37d5fd1264"],["/categories/Daily/index.html","f9806f4614573cdec5c25ddc10fe6f1b"],["/categories/Design/index.html","daa0cc82554eafc21c547e7faead0e20"],["/categories/Game/GamePlatform/Origin/index.html","99faf3331882c62ecc489d70b9e62b70"],["/categories/Game/GamePlatform/Steam/ARK/index.html","3e7c3d6cf6189503a2b6ce23cba3485c"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","28263f87bdd4f6f827dbf767df7a4b1c"],["/categories/Game/GamePlatform/Steam/index.html","6c5dbbe26051a1805f8f93ebb253d231"],["/categories/Game/GamePlatform/index.html","d581b8591f5d1c84fd7be8360842890a"],["/categories/Game/index.html","8acde064fdecb04d27540c2a1014aa7b"],["/categories/Google/Chrome/Chromium/index.html","0a10f7bcb5e86018bbd498f15ba100fa"],["/categories/Google/Chrome/index.html","676db3568060407463075a7300d5dbaf"],["/categories/Google/index.html","fc67573021115f0aefae592364a86489"],["/categories/HardDisk/index.html","15ae4773c99e39431d0f98a7a8b597ad"],["/categories/Hobbies/Guitar/index.html","63ac218223a3f0eca19b996fa1e562bc"],["/categories/Hobbies/PersonalDiary/index.html","7347bdbd356b94047bb66b039cef5c6a"],["/categories/Hobbies/PersonalPoetry/index.html","a12e75373785f10a08eec66e3f556df9"],["/categories/Hobbies/Photography/index.html","f8a81e95face6d6188ccf049950d2370"],["/categories/Hobbies/index.html","e76070b03f11c8e7d6c1180cd71baf5a"],["/categories/Interview/index.html","bf76b863f2c795ed121a15f246832e1b"],["/categories/Movie/HongKongMovie/index.html","74ec9f40baf38e52ff46a0d1b6bf9fe3"],["/categories/Movie/index.html","31ab11ba3c8d5bb40bd7832bab416d0a"],["/categories/OperationSystem/Linux/Manjaro/index.html","b40ebd89e8939036f7fc0c8e1e8e6f8c"],["/categories/OperationSystem/Linux/SteamOS/index.html","ebd96e1b3de065c97a44f8ff04664a23"],["/categories/OperationSystem/Linux/index.html","c103b6399a64ab0733e9b1b7f3897783"],["/categories/OperationSystem/Windows/Software/index.html","91d369b9180f91e30caae2e87c5ee67d"],["/categories/OperationSystem/Windows/index.html","f35e9eed6f9ab91c9d2fb46bfcd188a7"],["/categories/OperationSystem/index.html","a43bbd99f1c997ad8a600cb4ca92ff1d"],["/categories/Research/Math/MathJax/index.html","0237e599f310d1ff705faa0d90df2da7"],["/categories/Research/Math/index.html","36fbff213ba8ba8eb857619d014a8af9"],["/categories/Research/Math/线性代数/index.html","7214bc50dafd1d8e9afb7f7c11bd32b8"],["/categories/Research/Math/高等数学/index.html","d3c12c0ba5b22c9733668303bb08ac07"],["/categories/Research/Memorizing/index.html","61539e3bd04601c31c1f66fc750d4767"],["/categories/Research/index.html","77e013de77cd02c9bc4b260b58346253"],["/categories/Research/思想政治/index.html","579b4afc0a3c4599813839b9c10e48d8"],["/categories/Research/数据结构/index.html","2a78a0b6037b875d5ed62c06cff77512"],["/categories/Research/英语/index.html","f468f258352d80faf1fc4248ee793807"],["/categories/Research/软件工程/PseudoCode/index.html","41032321737a6cb54796eaa9a4dcd67f"],["/categories/Research/软件工程/index.html","95b51c10a8ca88fe3ac4ad92700a3269"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a53ffe9f79fb82c6ba89c73c71fbb97e"],["/categories/TechnicalResearch/Android/RxTool/index.html","077d8eee43b53340cb72bc41cf701b9c"],["/categories/TechnicalResearch/Android/index.html","b8159b82f3954fb54182d4b20e44c611"],["/categories/TechnicalResearch/Git/index.html","13c5379a6d9254708bdac5ddc101dbf8"],["/categories/TechnicalResearch/GitHub/index.html","9d5eb920908c0ee8e65b82982fd2027c"],["/categories/TechnicalResearch/Hexo/index.html","40135a7aead08e61a6476ca6c16f01ac"],["/categories/TechnicalResearch/Html/index.html","b68f8891138dde88ae84be23dd70a9f7"],["/categories/TechnicalResearch/Java/index.html","a31d645c826820fcfc4d486b21c0b3fd"],["/categories/TechnicalResearch/JavaScript/index.html","4d1ca542515abc643656ead28ddb8eb6"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","484d33b22a3cb01a6daca8b7cbedf7a3"],["/categories/TechnicalResearch/Markdown/GFM/index.html","c1d22707ee6a566b34160e5f75fb60cd"],["/categories/TechnicalResearch/Markdown/index.html","4aa889b75f0110e64e50ffcf98edc9d3"],["/categories/TechnicalResearch/Python/index.html","b488855db8f62c3ca156632f51795ebd"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","9ab8f8fcdc0b2c5a9975bece756834db"],["/categories/TechnicalResearch/Spider/index.html","b5393c393750d8e461d154d66151d5e7"],["/categories/TechnicalResearch/TA/index.html","48545f92d7df1e9f35baae18739cf483"],["/categories/TechnicalResearch/UnitTest/Android/index.html","30c5a7f0515bb57ade8cd1aed5e8e3d2"],["/categories/TechnicalResearch/UnitTest/index.html","cbef7818170960eb89fae4a4a8eece3e"],["/categories/TechnicalResearch/index.html","e93c2eabfb82183e050395187a3577f7"],["/categories/Teleplay/index.html","0ab01124a9a3b57d202bc31239998871"],["/categories/Teleplay/亮剑/index.html","ad57e5eb946bcf6de80407195fe7d1a4"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","896bf69b347e0c7c84830c36eff94c65"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","8c5dfada2a1f85603a96483aea6bb62d"],["/categories/Tool/DevelopmentTool/Unity/index.html","54dab848ff9e8567eaa99db2a426c1f4"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","2b893847aa4deab017879e0398117d99"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","6b18edd8dbecb30c552aaf373199aecf"],["/categories/Tool/DevelopmentTool/index.html","ba6dbcf293433bd8b65f35c5b3a5570d"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","32fa08687b360515e3ce718fe6acf6c8"],["/categories/Tool/Linux/Manjaro/Software/index.html","472f3a64738d3b8bd48730ae8d983f60"],["/categories/Tool/Linux/Manjaro/index.html","5376b031bd514cd7bfefcfe2dcd96073"],["/categories/Tool/Linux/index.html","ae074970bc296be75d0c55064e60c424"],["/categories/Tool/Music/index.html","5753f5e5bf74468591514591a5e08b5c"],["/categories/Tool/Windows/Software/UltraISO/index.html","09c610a60dda3ebc8cafb4e3ece36c41"],["/categories/Tool/Windows/Software/VMware/index.html","4e1ba569edb63bcdb60aca7687510717"],["/categories/Tool/Windows/Software/index.html","b79673921ab846eb3a984d2223f16c04"],["/categories/Tool/Windows/index.html","499c8e9d9c3ae18c8664a7a0c122323b"],["/categories/Tool/index.html","34e32468755cdc380dc3bb5e9442b1ee"],["/categories/Windows/Software/Office2019/index.html","fc9b07def4bce0d077cf9efbc4804f1d"],["/categories/Windows/Software/index.html","5b62a33820d0e7e524ab6e12bcf7926f"],["/categories/Windows/index.html","30eb43ca4a207c93427986f3de482096"],["/categories/index.html","e7ea119ae4a60548e496f3aa75fbf944"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","056426e1446bf54a17bdfe451c4137cc"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","f49db51d6d57ff93d83e5c98b0382bd9"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","df3a3307d5d0937f9cce41a223b01a44"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","41f68186d9a1f415477fb4f5910fde32"],["/movie/index.html","f7e35864b51474e12d289d0efe6bf335"],["/music/index.html","5a433ef9119af21ed1ad557465b162bd"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","5cabe92455c7f4a5408e6dec06d4db2b"],["/page/2/index.html","db88b3055685bbd39e21393c847e4703"],["/page/3/index.html","842dd67595b4729f47905701140fe368"],["/page/4/index.html","c0c532a5bdb5f161f0fa0539141de571"],["/page/5/index.html","2c2e2926691dcfc547bbe5427899fb47"],["/page/6/index.html","24f96d76868ba33f8a7bd7f516d57a91"],["/page/7/index.html","33859e439f7bcb5ef58e0ed5ae5f54a8"],["/page/8/index.html","d3479f3feee64eff526b2017ad106a4e"],["/page/9/index.html","7cc042cc097852490b02576f51e6afcd"],["/tags/ARK/index.html","c5d68695c95f1b78cd84cf2fe9a2b197"],["/tags/Android/index.html","15eb017b4033cf2cbb021d0869ee3ce3"],["/tags/AndroidStudio/index.html","8d86e47d21015c12b569e871580a843b"],["/tags/Anime/index.html","fbf85710d61a7a7e7b526136ff41014d"],["/tags/Base64/index.html","e9ac2e741997ac28c32bd90703c166d7"],["/tags/CDN/index.html","93c1ae91da66a0ace1b6c28218899027"],["/tags/CSGO/index.html","52d622406b77c47f2a8c25d0ae66e830"],["/tags/Chrome/index.html","601b9ee4e300137d6ad2b1aa7d81fba9"],["/tags/Chromium/index.html","1412f765c2a1725d2fe8a2aa725a7626"],["/tags/Computer/index.html","42b3c94f2859dbc5c6b7e48841f27701"],["/tags/Contributor/index.html","7745315312ef039bf23b9b6afb497415"],["/tags/Daily/index.html","02a5bf68e3582af1bce42dae81c2a911"],["/tags/Design/index.html","fda99d119848007b2c0aba5f0b178f87"],["/tags/DevelopmentTool/index.html","ebf9803688aab4ed12be14580d03859a"],["/tags/Emoji/index.html","aaa07c6b5844b86ecacde0a3a65824f6"],["/tags/GFM/index.html","f1b7d38d00ce59c132fcbb6104d81106"],["/tags/Game/index.html","72dcbb479f97b02f981bc060b1c16d0b"],["/tags/Git/index.html","a1f625f146189c3beba8ac37b0f382f8"],["/tags/GitHub/index.html","1d94f9c3984917b03463c2ecfcce10ac"],["/tags/Google/index.html","29e3f9d1397600f1931b90ea72dc3672"],["/tags/Guitar/index.html","7e5e783125c30a5f5a63ad882adc955b"],["/tags/HardDisk/index.html","24cb872dfd72e460fc19adcc066cab41"],["/tags/Hexo/index.html","91f7f402967d7d6eb3a0d91123c37fb0"],["/tags/Hobbies/index.html","6b43bfb35e5aaaeea6ce6ec741a1fd7f"],["/tags/HongKongMovie/index.html","12be3b85f587d38f404fe0ce7f3af21a"],["/tags/Html/index.html","06eedbf6995581f9a264ff6e29fdbbf6"],["/tags/Java/index.html","0a47ff76f439cdf89ffdc571546aa085"],["/tags/JavaScript/index.html","2aeb9e4fb1bbee4bd70f1b8a07f740a5"],["/tags/Linux/index.html","c33b6df9581cbe026aaea4896e05a4b4"],["/tags/Manjaro/index.html","15c46c619f3f5a7a83819bd753402590"],["/tags/Markdown/index.html","401f7aa5743102869342d075b5f57f10"],["/tags/Math/index.html","14fe25d8527d4038a181efef6bff23c0"],["/tags/MathJax/index.html","1494cf461838c8cb90c8136578149700"],["/tags/Memorizing/index.html","a83447620dd283f88f9f474be4b17652"],["/tags/Movie/index.html","ac8707b39fa8a97c76d7a2440f70abf5"],["/tags/Music/index.html","8c70824e68f9dc770a60d70de7c453fc"],["/tags/OperationSystem/index.html","b879a0878c9e0f2ff0608e70a89ea6e6"],["/tags/Origin/index.html","743c063b79b2f3b4d39e846d7038ac1a"],["/tags/PersonalDiary/index.html","23062f617d7156110f5dea1524acc8fa"],["/tags/PersonalPoetry/index.html","fb279b9b2ac4e3782fd9bfb3da5d8364"],["/tags/Photography/index.html","7c683a30768d76930d268489ee0a7edc"],["/tags/Port/index.html","2763b82dd6b0cdee6f4a3247a3e18bfb"],["/tags/PseudoCode/index.html","80816d7bf041f563145eef6c4588509f"],["/tags/Pycharm/index.html","6ff081582f621adc5b7c99c84dc1d7ba"],["/tags/Python/index.html","592e0b036a466a0cd9394ebe96e8a050"],["/tags/ReactiveProgramming/index.html","03524778ca15dcc63128db34fdd8dc48"],["/tags/RegularExpression/index.html","11ca3deaad11cc3e5c3953225dfff205"],["/tags/Research/index.html","f56f884cacc39ca62c8542c6cb9b10d8"],["/tags/RxTool/index.html","35cc0eec6fa33a21b0c536586068457d"],["/tags/Software/index.html","8603efb084dc78b82479a0d00b97ce5d"],["/tags/Spider/index.html","974001c761fc49265ab793d1572f786f"],["/tags/Steam/index.html","1534a3ca953e1a7b9c3946a25a77a9ee"],["/tags/SteamOS/index.html","5738fc33b2cadb121bf1a7aa97e69b7a"],["/tags/TA/index.html","5f39a3356ec2179f5087816c68042775"],["/tags/Teleplay/index.html","47cfa7e957186cfc6264ebadf1e5a914"],["/tags/Thunderbird/index.html","8939ce23fb81bfbcdd9a3974530acb21"],["/tags/Tool/index.html","a731f45c6322a58251bc7d70cb6d468c"],["/tags/UI-Design/index.html","0421dacbacb3e87d4b59c8d22b7716d5"],["/tags/UltraISO/index.html","9f44fec3125565af6996c06b8749a12a"],["/tags/UnitTest/index.html","54158b16e3a9b24187894acadd9047c0"],["/tags/Unity/index.html","55c4529d0bcb68f7a9f20c1a7e82f7af"],["/tags/VMware/index.html","82f1b37f70fe547eaea8f7e9abd1a599"],["/tags/VisualStudio/index.html","7222f579f12aa510532f08deb4218fb1"],["/tags/VisualStudioCode/index.html","630e7c10d6320f9379af9741609804a9"],["/tags/Windows/index.html","6148923113f40a7c19e9615e33848e82"],["/tags/index.html","35edee7b5411257c880b2b3ea5e33042"],["/tags/亮剑/index.html","a29469e12fd2a989d2ec189b08eb675b"],["/tags/仙剑奇侠传系列/index.html","10f5e394a1d2b85726caceefc1f658b0"],["/tags/千与千寻/index.html","22ee207dab9203fb2284132f1c8c7b01"],["/tags/宫崎骏/index.html","f4c6e4e42b69597fb431c2c30b2f3bd4"],["/tags/小王子/index.html","9a7e5517480ca6eefd5d40320832d3ff"],["/tags/开心鬼系列/index.html","9e5c69ea579922a52fa44f044ba015fb"],["/tags/思想政治/index.html","5df323faafa596176e4a4250f3887ac2"],["/tags/数据结构/index.html","6a2d323f7dcbf79d6e038b2ac9b3332f"],["/tags/线性代数/index.html","085b47b96dbea217a5eaa6f6a3943cfe"],["/tags/英语/index.html","3999f0ca460bc6c6184d43558c4c6db3"],["/tags/软件工程/index.html","ca27e3585cb29615eb649c34b1bab674"],["/tags/高等数学/index.html","77f13fd76d7cad673477166cf1e8bf19"]];
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




