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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","19f5550318067b72fe63c79a4f875d97"],["/Computer/Alienware/Alienware更换电池/index.html","a7b5d9b396f4fb42658e49aaf691f629"],["/Daily/Hobbies/Guitar/吉他入门/index.html","a1181d629bcbf261846aa96ee16ac84d"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","32fb88b3abc450ed62ed2a115cd4bb08"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","fff7676c5f75b9593cad9a78b1989d3f"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","f1ab2080399bf12f773fc37aabe81c42"],["/Daily/Memorandum/index.html","9bdbbbc5d243ad32d458b31d4659fe85"],["/Daily/个人所得税/个人所得税/index.html","4e1c881e5bb91444d6f0e501e1a17cce"],["/Daily/五险一金/五险一金/index.html","3d721ba46e58640bc4da11839173f715"],["/Daily/生活小常识/index.html","a5b15582960c56d59dfe07b7df44fc28"],["/Daily/网络用语/index.html","40d24319eac291b97f346bd585059291"],["/Design/设计用户界面的注意事项/index.html","ea8075b1c9f6d278938e857cf48ace7a"],["/Emoji/Emoji符号/index.html","de91a507260158c2c1be856a8b3374e1"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","a74be3ff769f842af9fd9dca7c540b6a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","36c96983780573f9ab41bbf4cb975b0f"],["/Game/GamePlatform/Steam/ARK/index.html","fd84ea73bd55dcd06f6cfe70265150b1"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","28d5cc5a79e393fd49e557d043461ec5"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","86ab7b6ae43778d3ca8fd00bf06852d9"],["/Game/GamePlatform/Steam/Steam库共享/index.html","79d54f489c304077baeba546562da19d"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","0bfd6500e9a59587e4d2df3ca2141098"],["/Game/如何独立开发一款游戏/index.html","2e4036338c23b1de2020ee3fa2e9dc73"],["/Google/Chrome/Chrome上网助手/index.html","352f5e4f25be870a6e3bf9b4de84a545"],["/Google/Chrome/Chrome使用技巧/index.html","a879fd2da77dcbca46a5261c7d25c66a"],["/Google/Chrome/Chrome插件/index.html","d36581cb29e7f2212d7d0880ec748bf7"],["/Google/Chrome/Chromium/Chromium/index.html","77ef7a786aa609f25ce4ed5c3ffb08bb"],["/Google/Google搜索/Google搜索技巧/index.html","4993e3cd9a0c300cdd31e421d33272b8"],["/Hardware/HardDisk/硬盘分区结构/index.html","0eee3163fe115380e9ffecae7411ea8e"],["/Hardware/Router/路由器固件/index.html","a220e3edb7297bcedd5d37baadf2945d"],["/Interview/Python/2020年字节跳动面试题/index.html","569a529ee9aee903b555c1570cf82cfe"],["/Movie/HongKongMovie/开心鬼系列/index.html","4d017315d13a4b01b97f6020aae53d12"],["/Movie/小王子/小王子电影的共鸣/index.html","3858eb0c51c35a8d5dff492a2876706c"],["/Novel/盗墓笔记/盗墓笔记/index.html","9358a8671cfaadde1cecffe1f6d88e4e"],["/OperationSystem/Linux/Linux分区管理工具/index.html","6f35fad13464c3f4a80cfb740e2d8c0c"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","aeb49fbf7be1ca56a9d3f6bc510cd37c"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","b7b2f5c83604111249ce25fedc9181a1"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","b5d8dabf0c31660bd3fcffeb127210e7"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","571a96d7f2fb59f1f3fcc4515868db54"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","51bb745adbf07cd8d1511ea83e6090cb"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","e9282d9d4ea902ef5d66ced27206ff8b"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","6372e38da2dcfa16e11d98639928035e"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","43ed53b300acb677236a7cc8d1e4112a"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","75aeed86585d38051b55b29b22791d7f"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5b92e046d8c5bf05eb52d1bb84000ee9"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","6cf662ee32be49495f358195901cbcd4"],["/Research/Math/线性代数/线性代数公式/index.html","6cc3147d87e4780df609203b0f2b6832"],["/Research/Math/线性代数/线性代数知识点总结/index.html","573aceb90eb11f2ada6c5966e60ecab9"],["/Research/Math/高等数学/高等数学知识点/index.html","a73e46eab02f88865ae412790ca811ef"],["/Research/Memorizing/费曼技巧/index.html","bea8b423e82394fcac6c2254c0b5e9f5"],["/Research/思想政治/考研思想政治理论知识/index.html","c3630ad583af7f5cc91d5ea9993b1aa9"],["/Research/数据结构/数据结构/index.html","c072dd937a22f51cce65defb7d017104"],["/Research/英语/考研英语作文/index.html","296c6e3b3203d275242bb2d06e968088"],["/Research/英语/考研英语词根/index.html","7de109d0b75a0f11c2e0837a3fdb9616"],["/Research/软件工程/PseudoCode/伪代码/index.html","8297cde60cc7d246ed5d121e2b80513d"],["/Research/软件工程/中南大学软件工程考研题型/index.html","bff497cb9bcf3317beab09236cf778ec"],["/Research/软件工程/软件工程基础知识/index.html","fc8740d7df0e665e65db1bce1c600e14"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","f176dbb5c3f32abb06f6909d5985f7ec"],["/Software/Anbox/Anbox/index.html","aebbaa1bbd055f0c351ed9b6c47a7659"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","64c049f130c42fc10d87ef915d66b67f"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","49385feccb0fcc8a9a46baf94be1735b"],["/Software/Office2019/Office2019激活/index.html","2a0ee458e7681b9bc09147530a9e3d6b"],["/Software/Pycharm/Pycharm激活码/index.html","e04559457fcd5c4a04d1b2f43a9a5266"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","081daf4b9b0569753d01118ec3183c3c"],["/Software/UltraISO/UltraISO/index.html","f2187ef50ac8ed14d97138aaf356e630"],["/Software/Unity/UnityHub许可证手动激活/index.html","7ec80add82a3f085952662e8bc9d1338"],["/Software/Unity/Unity使用技巧/index.html","f4224287ca77eb1af6824a18f23f5a1b"],["/Software/Unity/Unity动态加载Prefab/index.html","aaf3de6f4a5789eb47df710771da12b6"],["/Software/Unity/Unity的Canvas组件/index.html","64556711cfa468dabd7a31a286e27985"],["/Software/Unity/Unity问题归纳/index.html","d933253d4865870d249f831effb926de"],["/Software/VLC/VLC使用技巧/index.html","8f42a3bad330f8b9d81cacb67e9c49fc"],["/Software/VMWare/VMWare/index.html","cfd94f2110611e3223e66a73404d99ea"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","c2abd38855168811a757ddbce46cc8bc"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","6e6d08cdf73001b1ee8d6e7118589d02"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","b1a255fb71d8cefcbde3304b600edf56"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","648d2086c31457d0d72332e993afcbd1"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","182703ce22e43f5bc0e99e4390c316b9"],["/Software/Windows常用软件/index.html","281c46e7358430f935c0be4dc24d8c44"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","cdb8d4127e81b23981103f001a24b306"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","b54c6d496ae492ade7c3add121f7d478"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c86916983097e50dccbc8ea5015d946c"],["/TechnicalResearch/Base64加密原理/index.html","e69f929319ae3e24b4c5229f60049fee"],["/TechnicalResearch/CDN/index.html","0efd697bd8a471eefd76c221ca72bb57"],["/TechnicalResearch/Git/Git/index.html","1a839842a78add8154bb1f6dab48f87e"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","48d10badf44eb57b405f9f3383dee3e3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ed60fbeeefe423f1b26b88f06361c947"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","89d71008b94167f6ba763c7e7ba79d5a"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","4fdf4d9f146a8cbbef38905d4eff0bf3"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","0877e2c9fd1ceaf2372d2df8152aa5fe"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","b9f1d2be688f7358b3cd708fea4bded0"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","8ac7dfbf43de6bd35b25b48fe8fac93c"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","7f66195a3f4e52e4f7b34d4b6dfe921f"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","77f9c5b764112a6398bc75ba2993b0c9"],["/TechnicalResearch/Java/Java基础快速入门/index.html","af84f5aa7e0049de612184a49d3f0fd9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","bc007bcdb6cf73f457d43f7aa6acee59"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","9c0fc46d673bb6fb2b1dcd69b78e0605"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","440d69377efdae8bca8cc8cd26ced479"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","7b42f9bcc984db802af613a204ebb7a0"],["/TechnicalResearch/Python/PythonExercise/index.html","cb2d5aa627dca0d2c293bd97523e6bf7"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","f30f85420818fb857f7314fb6fe326ba"],["/TechnicalResearch/Python/Python问题归纳/index.html","09db5514088f45a248b4deb96a689ae1"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","aa426f79b2b7050c2438194f9e9982e6"],["/TechnicalResearch/Regex/正则表达式/index.html","708304e9e1554b09faf6828462d4fefa"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","6ef9e8eee691e013830ce7e2b1ccd7b0"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","67222eacad64a33702abb30ab98c2c9d"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","2fe1a2e2c0145ea207de7f0e6989364d"],["/TechnicalResearch/服务器常用端口/index.html","73ccb880fcd1d6e7c60080c89be5a0b1"],["/Teleplay/亮剑/晋西北铁三角/index.html","adf3f3477a92651925e3b6d308cd36e9"],["/Teleplay/仙剑奇侠传系列/index.html","4372a8628ae613dd40dc71a2346dcf66"],["/Tool/Music/网易云音乐/index.html","81e2d3dacedba14067a984948cd44926"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","49f2675a11a36f982d2d18f37c9625a7"],["/Tool/百宝袋/index.html","8fc4d15637c4c117540add86118e5288"],["/about/index.html","f0d19ed21abafe67470fe6343c14b635"],["/archives/2013/10/index.html","ee3773708a7425e7e118d2598cccb869"],["/archives/2013/index.html","c98974413bd48770a0c05982bf7ef340"],["/archives/2016/09/index.html","f044b693ea1f64f233df27167cea625c"],["/archives/2016/10/index.html","8ca2eda9f30ab1e16712be115a8ad1e3"],["/archives/2016/11/index.html","ff6d053cb813b287fcf054ad5bdec64b"],["/archives/2016/12/index.html","a5108c8d0df53613bcd830f83f1adcec"],["/archives/2016/index.html","70553f5c89fbf3e87a0d97d9c7d6116e"],["/archives/2017/03/index.html","f5169834d456df58bc2b99ec33019bb6"],["/archives/2017/06/index.html","05fa2fed12f964cca8483a5b71ca3f1e"],["/archives/2017/07/index.html","d1af3dea3ae400ec89864afec14f066b"],["/archives/2017/09/index.html","2c3c5ba0f33cd0f2a65321251a3798f2"],["/archives/2017/10/index.html","a169f24327861d537dbd9742c17715eb"],["/archives/2017/11/index.html","58263bbd199aabf2e34b77b82af9b91e"],["/archives/2017/12/index.html","0142385c0d06b7618ee9622cb596f8b6"],["/archives/2017/index.html","a4ba1a6128b483fb131bd0ebcff75e18"],["/archives/2018/04/index.html","93d36fd08c6db1a6b9da4627b5b6a063"],["/archives/2018/08/index.html","4e21f8e4e2ea71aaa02916066d60b61c"],["/archives/2018/09/index.html","a8f14ea5d91ca0d4d731a2c92cfb0aab"],["/archives/2018/10/index.html","6e2bb6ba16c9bb286271ca8d021044d1"],["/archives/2018/11/index.html","308ae3bdda2317e0f6f63fb901e6fce6"],["/archives/2018/12/index.html","43dff0a8cb5a350368f16f2e7f465cdf"],["/archives/2018/index.html","06821e6969255f6d20751fd22a94548c"],["/archives/2018/page/2/index.html","c1017f52f5a316881e2ccce32d1430a3"],["/archives/2019/01/index.html","9a9057f2282e71a189e227a4bd0ba63d"],["/archives/2019/02/index.html","580793eec04b42ca80e538da2702d09f"],["/archives/2019/03/index.html","eeac8765d3e7dc9b7100532aceddb80e"],["/archives/2019/04/index.html","e1fc993979fca27605629808e3ca37bc"],["/archives/2019/07/index.html","90396029137780f78a24f661a7e112c6"],["/archives/2019/08/index.html","88c9b7b662d89fbfd2ac850458471402"],["/archives/2019/09/index.html","62f58445d71c89fbc0b3ff1ed619fb67"],["/archives/2019/10/index.html","73bf8a6c88383a98094cde254236c0d4"],["/archives/2019/11/index.html","dba109fdd9cf10c7f442fa294614f32b"],["/archives/2019/12/index.html","1a73333d2b2594c0e6bfd0b976fce73d"],["/archives/2019/index.html","4dcb3b8727581a1f9cdb79c46f5df25b"],["/archives/2019/page/2/index.html","2fc4f9fe09728ca9807faa0072df9692"],["/archives/2019/page/3/index.html","5c9ae43980da35a01178b0bd796f87ae"],["/archives/2020/01/index.html","7445670ebc40dfc0b6d94539970e5aed"],["/archives/2020/index.html","d008de694de415dd4e4d81f28a685214"],["/archives/index.html","5b1df5743945da8c2b8befce0801d5d9"],["/archives/page/2/index.html","9dfd12484e040c962c3f659d5a88665c"],["/archives/page/3/index.html","2ac99de1219edf550b4542fd7e00ae68"],["/archives/page/4/index.html","0680c0b0883ca43468a04fe1eb4a068b"],["/archives/page/5/index.html","19af37df2c1492f1d627eaa783241208"],["/archives/page/6/index.html","1941737f42aa4d4adcc1a40898a5c898"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","17932e2f64d9ef9fdebccd3597462135"],["/categories/Anime/index.html","d8f0fbff0095e6e923996c803b1f5dd5"],["/categories/Anime/宫崎骏/index.html","4ce477a69973b600ce2693ff5cf9bb54"],["/categories/Computer/Alienware/index.html","5ad318dd4b71ab3898bd8f058ddd7a5e"],["/categories/Computer/index.html","25dc40bc7125320a3d6f0b5edc905a5b"],["/categories/Daily/Hobbies/Guitar/index.html","4a2b80fc5e965e719978100302c93c10"],["/categories/Daily/Hobbies/PersonalDiary/index.html","5ad9c64a418670b573ffca96ea96127f"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","b3a55c27ba2b89713c436aa98479b13a"],["/categories/Daily/Hobbies/Photography/index.html","dd29d68ae4308ef2ba3163400e7e93ed"],["/categories/Daily/Hobbies/index.html","bbb932582877e93c9b33c8201a4012f5"],["/categories/Daily/index.html","98ec01e8a811db084c6595b490367715"],["/categories/Daily/个人所得税/index.html","1215dc54ed84ef4561c0f29d8a3ed741"],["/categories/Daily/五险一金/index.html","e87da36e45851f57a865131c0a1c8dce"],["/categories/Design/index.html","96dc05ba84f98f16abcae1fbe0b4b6f0"],["/categories/Emoji/index.html","19402568d89c06d54ef63ce60125c08f"],["/categories/Game/GamePlatform/Lutris/index.html","7b285ba1c766cb2ccb2bce01dfb9fb21"],["/categories/Game/GamePlatform/Origin/index.html","b545eda162bb129789185b66ed96b4c3"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","36c966b8bffbc1f1d6dab1a9fddbd337"],["/categories/Game/GamePlatform/Steam/index.html","7afba5547287c96eef4b437abe1bbdf0"],["/categories/Game/GamePlatform/index.html","ad3a00ee75e571b33a95ac96eccb17f5"],["/categories/Game/index.html","a2d28d3b480fe76e827c223a86f2ed73"],["/categories/Google/Chrome/Chromium/index.html","9644334c99c257038e6c3a20b7c5d316"],["/categories/Google/Chrome/index.html","2426137019e676b940e326cfc6ac1f53"],["/categories/Google/Google搜索/index.html","ad13d0f665cc8204f5a0d4073b4c65d3"],["/categories/Google/index.html","6e4ee847d1646c9a2513d2056942dadf"],["/categories/Hardware/HardDisk/index.html","321ea05c8dea79087c948cd331aff733"],["/categories/Hardware/Router/index.html","6b55c05827ba7cae56b6472ffe082549"],["/categories/Hardware/index.html","b637c710069e13f61c661072632ff48d"],["/categories/Interview/Python/index.html","9886c100dbee63e63f57577220c4ac97"],["/categories/Interview/index.html","6950b68f8219be067b608c98382cfe71"],["/categories/Movie/HongKongMovie/index.html","6f1287810b7b5c3be1fa315865dc3d8c"],["/categories/Movie/index.html","8714e177ac62a8c4dab979653dc26c68"],["/categories/Movie/小王子/index.html","fbe0097ce7ee43b36437544ba7a9e3be"],["/categories/Novel/index.html","79c22aa86d0de2841f999e3c884c0420"],["/categories/Novel/盗墓笔记/index.html","52222602328622992732b053d8387af1"],["/categories/OperationSystem/Linux/Manjaro/index.html","696c3b0ab08f3fbf07a8860b1f48f35c"],["/categories/OperationSystem/Linux/SteamOS/index.html","2ff5e5b5239aabee720a06ef9b0974b0"],["/categories/OperationSystem/Linux/index.html","06d176747ea63f1938e972996c66815e"],["/categories/OperationSystem/index.html","dbb8b9101612a826bb7e943854347e4b"],["/categories/Research/Math/MathJax/index.html","75d879f311ee9497c4e766324945ae63"],["/categories/Research/Math/index.html","58c4a5da37170c29948a57b95ff16862"],["/categories/Research/Math/线性代数/index.html","b6645274dd1c9f088dd02b9fc33b4c85"],["/categories/Research/Math/高等数学/index.html","a41bd0d263555f8d49ae4691d353d471"],["/categories/Research/Memorizing/index.html","be43c262714f339481266a5e530bce47"],["/categories/Research/index.html","ea74f9e737ff1ff3ae6264d12adbd5cc"],["/categories/Research/思想政治/index.html","8c32eaf0cf75489c195b07b1696a99b2"],["/categories/Research/数据结构/index.html","7898a6227c8e0572ad408aff181885bb"],["/categories/Research/英语/index.html","6103ad2b4ea2959c151353393b912b3e"],["/categories/Research/软件工程/PseudoCode/index.html","eb21135a6eddeba278ae4079336824f4"],["/categories/Research/软件工程/index.html","aa113b88211efc82f024da774390d9c0"],["/categories/Resources/index.html","170c0097198e3a2ae7aa7b7e88881e7a"],["/categories/Resources/游戏资源/index.html","cd31b57976208d0d3565b99a687b80bd"],["/categories/Resources/游戏资源/微元素/index.html","05bd6298c091d459bca8820539212548"],["/categories/Software/Anbox/index.html","8b8bb928ed211fbf7a610aba6cd8ed2f"],["/categories/Software/AndroidStudio/index.html","5ea8248caeec121c667cb5a995330225"],["/categories/Software/Office2019/index.html","7a486c32cdf7af7c6b26d93bc04b7932"],["/categories/Software/Pycharm/index.html","015b3a34ea7140389e6fc524af09a936"],["/categories/Software/Thunderbird/index.html","2b2a08f686a7b566b6f7be9ecaac0584"],["/categories/Software/UltraISO/index.html","289ec5595b55907b790d084e6e21a5af"],["/categories/Software/Unity/index.html","b1b2cca4b9ec9149e4a6c7af8f0c2813"],["/categories/Software/VLC/index.html","364097dd819bc5b9a10210baa6449599"],["/categories/Software/VMWare/index.html","7e9c1d34acb5e2301858e996648d32cc"],["/categories/Software/VisualStudio/index.html","66d4090e4a625a0ac5675b9d36d58238"],["/categories/Software/VisualStudioCode/index.html","ae8cdbb5a8b4e23b1fea472240bb371c"],["/categories/Software/index.html","00c786f197699aabf87278a6ceea27cc"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","1d5167c250563c73a3537e7e31b3afca"],["/categories/TechnicalResearch/Android/RxTool/index.html","6a80b01ff4fef0fb5b4734d42ec773e7"],["/categories/TechnicalResearch/Android/index.html","279a9e7f4128537886459f7d15f87ef8"],["/categories/TechnicalResearch/Git/index.html","fa476937ae1abfbc6bb818dda6b40898"],["/categories/TechnicalResearch/GitHub/index.html","04b53c11c8833ea3aa1346d870efc28c"],["/categories/TechnicalResearch/Hexo/index.html","8de380c0f29b8afce1e0295e8556380a"],["/categories/TechnicalResearch/Html/index.html","5352e96fa94f5c9d431d210be9179616"],["/categories/TechnicalResearch/Java/index.html","f39293876ed29700ff7580d2e2a2c916"],["/categories/TechnicalResearch/JavaScript/index.html","af59cae571fe18a153e57e3497e44ffd"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","db9dfd9d66c9d2a7a61047d0927a857f"],["/categories/TechnicalResearch/MachineLearning/index.html","a149de0ae0296e5c895ef1c3fdf9fa38"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","aa7bb8faac1396e4350fc153a2a70839"],["/categories/TechnicalResearch/Markdown/GFM/index.html","6f1eccce67587bce84c8d70f1ae47339"],["/categories/TechnicalResearch/Markdown/index.html","3ee839894c4ac26605023bf1d18e5cc9"],["/categories/TechnicalResearch/Python/index.html","690a0d285aa743d66ecf8c5a16a7c268"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","8993216a388085ee77af5705975f7f2c"],["/categories/TechnicalResearch/Regex/index.html","dec8eb89dd1c03e97d2e5abcf3c161ea"],["/categories/TechnicalResearch/Spider/index.html","6edb7e0b8d121dd6b6b3571890c44a51"],["/categories/TechnicalResearch/TA/index.html","85d927d1280ea5be38949c7b82f60187"],["/categories/TechnicalResearch/UnitTest/Android/index.html","b6a6a2969e89f1b2c45960e4d2a444e8"],["/categories/TechnicalResearch/UnitTest/index.html","ae09e8cd683b4540e4b201e19cede50a"],["/categories/TechnicalResearch/index.html","05898f76dd14f36971b6c34d12dc5964"],["/categories/Teleplay/index.html","ef741085a757844135c9bdc3d3a08ad8"],["/categories/Teleplay/亮剑/index.html","a18354351a1a81b8b22a25575f041399"],["/categories/Tool/Music/index.html","90f8f92f65aa6c3efcd8c901af3211db"],["/categories/Tool/Wallpaper/index.html","d4893d0218fc3819389bd8d69e64b719"],["/categories/Tool/index.html","966511189a47e7d56c97c0e2e2a75188"],["/categories/index.html","3c17866aece3ede077fac1f63159b775"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6670fca97434d19f45aa4b8dc20bd4c1"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","8de019560fd16a98b0972f1dbd1d3441"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","cb3b889a19363927a797bdfc5a5b3959"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","6ae00440074a582e422201f7f9be1a74"],["/movie/index.html","47f6254090b19513ad2e72b50c16be43"],["/music/index.html","15c41b0fc68894ae8cfeea06133e0606"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","15e9a80e8bfe420f39fad1473df34a4d"],["/page/11/index.html","f65442e237127e9997af0ab56b134ab7"],["/page/2/index.html","375ba1f3dbcb94558346159d8cf7cc8b"],["/page/3/index.html","048ced281669ca4c982cd29d7f663e9b"],["/page/4/index.html","70236c9f7a36e1d9ddff80d35db62a0f"],["/page/5/index.html","157a34efb4a73470a93c5460c68cada1"],["/page/6/index.html","2dc63632f8635ab9b49a3f08d5fb77be"],["/page/7/index.html","a2e427f585f81149e5ea018c79831cd3"],["/page/8/index.html","ecf1d74885953f28d498df652ece08e7"],["/page/9/index.html","ff3e05f758e6d4a34ff949cc7b83902e"],["/tags/ARK/index.html","e52fbc0c340910e4ee3def88464fccfe"],["/tags/Alienware/index.html","3499496f0dcae5c341a77fcdfb952d11"],["/tags/Anbox/index.html","2ae446b2a99c279abb39da307eb0012e"],["/tags/Android/index.html","2152f96c098976bd0889879d146cb755"],["/tags/AndroidStudio/index.html","d46964c9309abe7df76896d553c5242b"],["/tags/Anime/index.html","5614208a6a1dcb7344dcbd86e48d7b5e"],["/tags/Base64/index.html","5534359e8a85807525deb1357e370c55"],["/tags/CDN/index.html","21b4ec4444de2709436b57bc0be21ef5"],["/tags/CSGO/index.html","7ea385a3c20ba272f3b56646393fe4a7"],["/tags/Chrome/index.html","d0d040d182dd82b3e68a68978704803d"],["/tags/Chromium/index.html","4a8342e0bbb2f8a9e1241fbbc54e0c83"],["/tags/Computer/index.html","5fb80c3eccca89f3a7ebcaf841a0e750"],["/tags/Contributor/index.html","f0bc63d7c4b9ba936943246f3ae4a4ec"],["/tags/Daily/index.html","c2719baf80794e85d9532d6d6df5d3e0"],["/tags/DeepLearning/index.html","d5a1b3ed520d9e811af8ee1a8296a283"],["/tags/Design/index.html","fc5c39b03a9d405bf77e7357ecf2588c"],["/tags/Emoji/index.html","fbaa7d6e0d3024d50e65d9ae254c52e7"],["/tags/GFM/index.html","cf8d22db8634add3a5bad6050deebff8"],["/tags/Game/index.html","98efc40511ebdf7e134a8008b446e068"],["/tags/GamePlatform/index.html","a9295cf415483ee04f527f920960fb5d"],["/tags/Git/index.html","219fd46af3fdfbb63e38b457418f2ff3"],["/tags/GitHub/index.html","acbf6cafc5ca85ab4b65c436cfb1baf9"],["/tags/Google/index.html","53c6526fa00c84ffe2aa1bc4f01133ac"],["/tags/Google搜索/index.html","3f97be0308a4bc834cbf8cd5649c39c5"],["/tags/Guitar/index.html","76714a7b38921535f02a27d637ecec8d"],["/tags/HardDisk/index.html","48ca0b3122729b3f6311ea71fac9ae34"],["/tags/Hardware/index.html","003603f76390b340f64325bb81a7c63d"],["/tags/Hexo/index.html","d96a36ddec85d117e180f5073ef4ce15"],["/tags/Hobbies/index.html","5039cd0a9f712f824ab6a90b3ab6a330"],["/tags/HongKongMovie/index.html","3f4aa7e06bc6bfd6a5e885061074150f"],["/tags/Html/index.html","e7f50beeaa423649efecd39fca46a257"],["/tags/Interview/index.html","d91f8b004d1be7b10445b0369c7a73b6"],["/tags/Java/index.html","e1cb5650c721c8ebc427a54a3379c638"],["/tags/JavaScript/index.html","e392a4ae798237846f75dd58f47a873e"],["/tags/Linux/index.html","d4f3d28abc73e76e86d8a845eb3d1cd8"],["/tags/Lutris/index.html","4f2797ab4716c71896be7c810c579a3e"],["/tags/MachineLearning/index.html","41280cccb1376ee2867fb792377d3e2e"],["/tags/Manjaro/index.html","9af9b2268f7f84eb867b9682dbe9b25b"],["/tags/Markdown/index.html","c303173eae94175801d2dbe3542d1592"],["/tags/Math/index.html","d54d24e634c97e6522b6945fde0f0419"],["/tags/MathJax/index.html","f564f938bbc46a8af38f8852742959b5"],["/tags/Memorizing/index.html","583155588fbdc2be6aed4805b7d24754"],["/tags/Movie/index.html","735e325a77ec8a10bce157a17d0b5b17"],["/tags/Music/index.html","6a212ca841012584e20189c672bd4584"],["/tags/Novel/index.html","ab29c7ba90b133ea324e1c3927eaa43c"],["/tags/Office2019/index.html","edd0d24539947dd39f2d1bbd0b2d5bf5"],["/tags/OperationSystem/index.html","acad23b54a3fb4a9f5a10c0d068a3239"],["/tags/Origin/index.html","6927ac6341bbfebef0da6268c1f65115"],["/tags/PersonalDiary/index.html","93a2d444cb3b26b78604a3b6506f1405"],["/tags/PersonalPoetry/index.html","53c78d946765b9d3987ef1d12b84cc76"],["/tags/Photography/index.html","7ba55f8979c3898768ec3cfa56edaf4a"],["/tags/Port/index.html","9f526852384726a8bd9143780c7feaac"],["/tags/PseudoCode/index.html","fe16f14996bd8c09e33e918867cf9ee2"],["/tags/Pycharm/index.html","d814cbd9aa7c907a96d2c27aedb541ed"],["/tags/Python/index.html","969151060f573f13d73c0845f232b7bd"],["/tags/ReactiveProgramming/index.html","189a01c9bb46fb2e2cd81954baf91969"],["/tags/Regex/index.html","178e2f3b7227fae253b965008bf50920"],["/tags/Research/index.html","2c05d2ab6a6c5f5f1323b6ca776c470f"],["/tags/Resources/index.html","dc7fe1903f05e6b683113cf9b6bac85b"],["/tags/Router/index.html","2e2e599ddc31763f75eae5d2fc0a4fb2"],["/tags/RxTool/index.html","583ea7b359c44fae1d45c0d01864c7a2"],["/tags/Software/index.html","cfbe30ecee6c9b07ced38534312a645c"],["/tags/Spider/index.html","20b954c13480456fb8b513fd821269b2"],["/tags/Steam/index.html","da69878384d9d0ddca622cbeafb095dc"],["/tags/SteamOS/index.html","259ef7fa0d1d77db8f8cc3ff6fed86cf"],["/tags/TA/index.html","519e38db72db74e3b2e990575490eba8"],["/tags/TechnicalResearch/index.html","f81067ab6182f49f8725d36abdd156ff"],["/tags/Teleplay/index.html","2cb34bc0630fce3aee1a95a001733c3b"],["/tags/Thunderbird/index.html","d784b537a317a814babaa4a53540da62"],["/tags/Tool/index.html","2e8c76a55e08c1a59e556e870b41b237"],["/tags/UltraISO/index.html","8cad7886fad20f1876d1dad99d57c3d8"],["/tags/UnitTest/index.html","30f78820b3d9d8e534bbabc6f8159332"],["/tags/Unity/index.html","1f88ad98ad79e37c743521fa1262111a"],["/tags/VLC/index.html","77d56ebbd0495a6a604e39e6be7d9a6d"],["/tags/VMWare/index.html","b1e6a8ff3b9c7faec31b3cab22ee038e"],["/tags/VisualStudio/index.html","286150d7fce43167a59cba2e1577a117"],["/tags/VisualStudioCode/index.html","b49df5b34bbdc2309f37803d2b75e7f2"],["/tags/Wallpaper/index.html","75f5b20ee8ff4cb1d30449eebf8d63e7"],["/tags/Windows/index.html","c10a552a5b5aac7b6e1b6455fdbe3101"],["/tags/index.html","f8d7a7a62ad4615f0eaa5ab4b804c402"],["/tags/个人所得税/index.html","3421ce74670a0dbae56153cacc783367"],["/tags/五险一金/index.html","ac66bf131eb5d23177ad7509adbc6a44"],["/tags/亮剑/index.html","34a1e5d0632f00326a275a7ca0204429"],["/tags/仙剑奇侠传系列/index.html","057ba1f7f8295a0519315397bf8b4f8c"],["/tags/千与千寻/index.html","e48ea236fab971dd1e42f77c69823736"],["/tags/宫崎骏/index.html","20942603c6c8091b04675f041840159f"],["/tags/小王子/index.html","be5c128dd8ec4ed27c1b9db5aa7bec80"],["/tags/开心鬼系列/index.html","7b064ed8790c87c2388c8d1d1dd53ffa"],["/tags/微元素/index.html","cd9492323b102af50fd88bb8a6dc3cf8"],["/tags/思想政治/index.html","9ef6a7897c94d09038bfe5f112340413"],["/tags/数据结构/index.html","b52fcad7f2bbb248cb6d17444334643e"],["/tags/游戏资源/index.html","8c728bd71223974fe16b33794b46d46c"],["/tags/盗墓笔记/index.html","3872d8fc8c2a0206ae2ce040c28fc5a6"],["/tags/线性代数/index.html","cd0abe7b00542bea54700c2461a60433"],["/tags/英语/index.html","58cee3b3e8fb53bb042e77a7c4e82f9a"],["/tags/软件工程/index.html","a326abc9146c1da5edaa74f26b070378"],["/tags/高等数学/index.html","55d04c504d5b9b6edb0d08bdfbe90312"]];
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




