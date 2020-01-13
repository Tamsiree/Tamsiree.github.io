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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a83ce0c321d61b0cc86d6a395f97e061"],["/Anime/小王子电影的共鸣/index.html","f6e3e432baba12fda9a38a4a329930d9"],["/Computer/Alienware/Alienware更换电池/index.html","afbcd5c599c531f6cbf63d5227aee040"],["/Daily/Memorandum/index.html","09684bf338be1d566ae1702797c8587e"],["/Daily/生活小常识/index.html","aa89a92d963f8afa2995b93997edaf0a"],["/Daily/网络用语/index.html","717392f082084e291838ffea9e5ca688"],["/Design/设计用户界面的注意事项/index.html","c88e8994866c097214bf8138acb8f526"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","5503ad6a584ff9e218afd15d588cd7ae"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","7563c5ee02751d18b69b8be081fb7975"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","8f5bcaac045dd10a9e80074c6279d49a"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","b5c443e6a20d817b8eb846b8e0f08f28"],["/Game/GamePlatform/Steam/Steam库共享/index.html","b28623028dc2a5c2fa0a6c9400a20fc3"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ad8c35bbc252036018528e1ad3731ea1"],["/Game/如何独立开发一款游戏/index.html","2523fe7d20211c246734aca124053405"],["/Google/Chrome/Chrome上网助手/index.html","98331ec80f7f9395786c9308ff74af12"],["/Google/Chrome/Chrome使用技巧/index.html","24519ee829760c0d7eaf42d88def6d60"],["/Google/Chrome/Chrome插件/index.html","aa39a4838a33cf19e4391ff256369e5a"],["/Google/Chrome/Chromium/Chromium/index.html","f92d62922e273d12686979ca03d25185"],["/Google/Google搜索技巧/index.html","3968952202869253988bef8f2c48befd"],["/Hardware/HardDisk/硬盘分区结构/index.html","8fb58c429ec50c27321b671218412bbd"],["/Hardware/Router/路由器固件/index.html","8d6974159f97bdc4f0a3bdb502066e3d"],["/Hobbies/Guitar/吉他入门/index.html","b3aab739200f893f2a5859ef9f64ea35"],["/Hobbies/PersonalDiary/芦江曲/index.html","c202e630f9e7bb6fbd6d6cb88ab4b8fb"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","328dd59867f0d0dcd0e8446a84ca3bcc"],["/Hobbies/Photography/摄影入门手册/index.html","091bcd171f7e796c0a09bb6cee4f0d34"],["/Interview/2020年字节跳动面试题/index.html","8a1e21038a11a7acf43efe7b731f2c56"],["/Movie/HongKongMovie/开心鬼系列/index.html","28a1446d2303e9301fef0f6e5a766be0"],["/OperationSystem/Linux/Linux分区管理工具/index.html","1a9d83979148baf4b7d6c0c7f142cbd5"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","c6b9610ebf399799170905e4d2e3e848"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","6267327579ec075dc563072c8aa5f781"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","c1b0401bc8cadeccbe48a3230daf3891"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","6208bb479c84f9aa49e432c4f9d2a89e"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","44fb91e02cbc8529776ce2d5775c9642"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","b35c622faf84f195ef31d019aeab1fd9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5e31bcdb91adfead7fe0ac14f0b57b41"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","93d21cd232bac9255fb1615824336e3a"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","ddeafde8947a02560d8d91ed6f617fc8"],["/Research/Math/线性代数/线性代数公式/index.html","43e2730521b714222999e0c2be5a0782"],["/Research/Math/线性代数/线性代数知识点总结/index.html","6ff406510c7acb1d0ad890279b4a0d03"],["/Research/Math/高等数学/高等数学知识点/index.html","e818ce73f72c8a87891c5479b441af63"],["/Research/Memorizing/费曼技巧/index.html","625a517710d264d6e68431a40920dce9"],["/Research/思想政治/考研思想政治理论知识/index.html","8a421fb18f9d8d299fe39cc7d1982598"],["/Research/数据结构/数据结构/index.html","95fe3bf4dd45b4f0a151b914b259a67d"],["/Research/英语/考研英语作文/index.html","77606b2a8d72473db88325ef0b1456cc"],["/Research/英语/考研英语词根/index.html","c432c99fcd5c736a006ddc6552c492c0"],["/Research/软件工程/PseudoCode/伪代码/index.html","2d58e513c7554046ecf228d4dc1887fa"],["/Research/软件工程/中南大学软件工程考研题型/index.html","137931cdf13b79fa10e048aafbe25deb"],["/Research/软件工程/软件工程基础知识/index.html","e967f602f0f2972deef7c5dd0c497a73"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","e84a209e72421135d0ee103efd71fe0e"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","5d5e0507b363b08a632d06157568e1e4"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","f8c55c8568cf6cd0e953af75e7a92050"],["/TechnicalResearch/Base64加密原理/index.html","734c1fe91646452b9eed5adccbebc1bb"],["/TechnicalResearch/CDN/index.html","3c35ef00ff4464a93fea4e0f4cd088f8"],["/TechnicalResearch/Git/Git/index.html","4530e5d3751e85d3868cc469349005f9"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","208f440c46492a1c57e2c6c67fcff315"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","cfac90154570fdd888718fa6e9f77ce1"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","e3a4f08e74acb1d48e890f19c59d7e6c"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","88b21623a7a630815c36777610657641"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","15e7b0bcaeee08d6b657bb71963523a2"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8f9648da5d2142f28c0e7fdb53b21dd7"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","1180f9a0b8ffc8dae4cfa5fefa1f0b23"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","f6b5a4999f032eac9dbb48ff5d3b46cd"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","69a0a835e3ac37e11a3e4919acf561e1"],["/TechnicalResearch/Java/Java基础快速入门/index.html","9ce8aacd4dd4a8ee2c4c9c206a5e1b0d"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","e67d730b7643840db47b3ecd38068453"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","72c74bf9d3bfc7fd9662805cdee5c34e"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","e967586bed6f98ec222648d88661bd04"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","f8ef728d5329502e8059ef8cb249a64d"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","a89c9a5ddc4afc39086f5c3cd5b0f6e8"],["/TechnicalResearch/Python/PythonExercise/index.html","37af7818c4b60aabaad2e558c180b9c0"],["/TechnicalResearch/Python/Python问题归纳/index.html","2e312d894560c1a132f3f2141a5082c5"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","82bb5461f4d0513ce0953f4a980d6b32"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","7ebcf543f93dec0d623cbeb2c6e6c192"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","7f6849e17dd900eacb1d415cfd0d6ee7"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","3c7408265dc4105fd9af4886b5eb3f36"],["/TechnicalResearch/服务器常用端口/index.html","9aa20e93997accd4629cdf5f1b3bf414"],["/TechnicalResearch/正则表达式/index.html","8670a99a6589a3cbfdd4d7b28511f77e"],["/Teleplay/亮剑/晋西北铁三角/index.html","3e518b1535226f8de2d35875bb19962a"],["/Teleplay/仙剑奇侠传系列/index.html","0cb18eb200786ad1da322cd2c95fe425"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","f99f3866f6b4c2202325f2407a1ec713"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","bc10136d9f9bf515a7b2480144c96cb5"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","60e10a7f3ac201b1f29a50e0532bd978"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","21539c0327709ce77a2e7efbd2f0e356"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","2eeb97d3922d6537fed6af400b913b9f"],["/Tool/DevelopmentTool/Unity/Unity动态加载Prefab/index.html","6dd5a133c99c3b29bec4a73056f254f6"],["/Tool/DevelopmentTool/Unity/Unity的Canvas组件/index.html","6321a88a605af72c1d8a6dac297a5452"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","4c379bed4c6f153e35c2cdae1a855c22"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","7e7106dd9034a43f5f3b32fa46412019"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","20ff211b22722a67f34bc61cdd5dd3a7"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","d7b2955cf5939c44a875a8df738b872d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode开发Unity/index.html","86230ffc1563c2813fe6cafeeb8fc72f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","e20f265040c81cebff4ae47763fd0a16"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","e79e12e3b20431a6f4b57725957e065d"],["/Tool/Music/网易云音乐/index.html","f079f626aac619b59b94575962e8deda"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","8aa153b20720b83d12412737dfeac596"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","b4c909bf94101cae0a4889a5437e27cc"],["/Tool/Windows/Software/VMware/VMware/index.html","77116a6f52ff5996a88474eb8cc77261"],["/Tool/百宝袋/index.html","d43a8bba45e9c5f8cbbe79514bc810ff"],["/Tool/随机获取在线壁纸/index.html","e0fa514ebc1587cf44da3aa38233730c"],["/Windows/Software/Office2019/Office2019激活/index.html","5afbb2cbb376bf0dff6ddf3b2dad806b"],["/about/index.html","70c03dce04c86a46d571e0ef89674a49"],["/archives/2013/10/index.html","829198663037cc17869305dd87834056"],["/archives/2013/index.html","d9a1a095c2c03857eba94d915ab712ee"],["/archives/2016/09/index.html","7a47f694ebbc3bdbb6ed5449af1c26e8"],["/archives/2016/10/index.html","83c20dea11dcbce264db5479d95156d5"],["/archives/2016/11/index.html","edaf9c9bce5a9afd017d1ffd585c5a6c"],["/archives/2016/12/index.html","d493a0c71877f6e0f2bc8c4f85ec6a91"],["/archives/2016/index.html","d085cb33bf469bde97df7b1e441c2b1d"],["/archives/2017/03/index.html","d5d1d1ec1cf8f2c960d0b418a8b9f8dc"],["/archives/2017/06/index.html","b9c9ad91ffd6fe111422d5c6274401f4"],["/archives/2017/07/index.html","3329fca773c1d5ec3b4d43d68a013883"],["/archives/2017/09/index.html","7acbda6170107d85c89a3286398abdd7"],["/archives/2017/10/index.html","37eee417903827e201c443de1074d393"],["/archives/2017/11/index.html","e479d702f8e47f9851a1e5672ffb41b7"],["/archives/2017/12/index.html","b5697ecbd18c3e5fde4823e3f4d360f4"],["/archives/2017/index.html","64b2026c4ef398954873798c50c91fde"],["/archives/2018/04/index.html","43466b1dc16233da91e966a610f0bb8d"],["/archives/2018/08/index.html","9bb27a2aadf10886f827eb627736b97f"],["/archives/2018/09/index.html","2dce5145481505102241b5e65cd15c17"],["/archives/2018/10/index.html","4cc7891539556a9886ac90134a4911b8"],["/archives/2018/11/index.html","1a2f71b599b140413f0903206e518226"],["/archives/2018/12/index.html","6733750a4df77f030b735d33e1a6f864"],["/archives/2018/index.html","ba960fd19831a9c0dad432c7776dea76"],["/archives/2018/page/2/index.html","c344facdd4403c11b1cad1eb032a47c4"],["/archives/2019/01/index.html","e1932b97c1b12ea57aa4addc5293a962"],["/archives/2019/02/index.html","4ec7c3c039e76396f5bc5e02d01274bd"],["/archives/2019/03/index.html","ea32c5c8cdf697db9301f06832d41c68"],["/archives/2019/04/index.html","82da4de5a18165961330b0a9bac51eed"],["/archives/2019/07/index.html","85504e9bc759333a74ac10778f688676"],["/archives/2019/08/index.html","bb196fe7fedf52cfa08e0068ebd0cebe"],["/archives/2019/09/index.html","fc6d1cb3b6b358b76287f721afe43288"],["/archives/2019/10/index.html","f220ced1f30fe8e60bd9ce5ec79e1923"],["/archives/2019/11/index.html","27ab9e39b7485bc30cebdba9a0afc748"],["/archives/2019/12/index.html","411940484860640420e8dce01e5d9a3d"],["/archives/2019/index.html","57a421981bcdc29a3c647c825e960e3e"],["/archives/2019/page/2/index.html","6ca6c475136edb116c01c1fbfdc5e037"],["/archives/2019/page/3/index.html","0ba49248e4b51307a25821da6e90f2f9"],["/archives/2020/01/index.html","4a7b303b0037dcec83d453ada123bc5c"],["/archives/2020/index.html","78f4515e6d51accec301a578b8b114ab"],["/archives/index.html","4437ed4c5ea37234062b1c2b1aed51b7"],["/archives/page/2/index.html","6cdacdb76c26f3c610370aad518b8236"],["/archives/page/3/index.html","50dbfbad151695e3ffb857eed37e8e47"],["/archives/page/4/index.html","b698b90e5291926d74d4682177f35df0"],["/archives/page/5/index.html","d264482ed0f44f60b587b2b087264b19"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","5eb5b953ea0509a617c1a856ed5a7c17"],["/categories/Anime/index.html","7e2d84935ea81a6d91d0adfcc0d97cbf"],["/categories/Anime/宫崎骏/index.html","382b7c012bbd53dd021c9a335a4a48ab"],["/categories/Computer/Alienware/index.html","3a9934bfbefa3150029efa54ec9625bd"],["/categories/Computer/index.html","a983ca8285a8e81c391bea7fa0579948"],["/categories/Daily/index.html","d7a1e7420d49b55c0b00de93f406dd53"],["/categories/Design/index.html","6074e3233fee4c71c86c1eb8d6a69ed8"],["/categories/Game/GamePlatform/Origin/index.html","266ddf343305f4ad61657dcd88c65759"],["/categories/Game/GamePlatform/Steam/ARK/index.html","ec7b19092e476672f99428cfb7dd2b5d"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","24d8caf63644e632074e9cec1e02cc5c"],["/categories/Game/GamePlatform/Steam/index.html","ccc601a2d921e267c639bc8eab2524b1"],["/categories/Game/GamePlatform/index.html","267daa32d68fa3eefef005e3a52aafdc"],["/categories/Game/index.html","a2497a8412da64423da121e062bb877e"],["/categories/Google/Chrome/Chromium/index.html","32707d256b6b6c695da8455f7547f445"],["/categories/Google/Chrome/index.html","554bab68a28837d0221f679d243b4e2d"],["/categories/Google/index.html","a3693b6bdfe343e6be3208ddc919bc30"],["/categories/Hardware/HardDisk/index.html","62227358a8c654b4df41c487451507fc"],["/categories/Hardware/Router/index.html","9efccc4f17710b923f6810fdac9e86c5"],["/categories/Hardware/index.html","f84cce3fada7e5926ad91cdaf35250a3"],["/categories/Hobbies/Guitar/index.html","122158e33492c5df2a44ce83b613290c"],["/categories/Hobbies/PersonalDiary/index.html","eaf2e60aeb459b41406b98fbacaeb93e"],["/categories/Hobbies/PersonalPoetry/index.html","2c78bcce2e562b96de859a1c652ed752"],["/categories/Hobbies/Photography/index.html","346faf938538f5f44f63537a1dc39a2c"],["/categories/Hobbies/index.html","e955cb5373c33994001e36517b79fd3d"],["/categories/Interview/index.html","7c43c60748c83fdf56f60f625f17ecef"],["/categories/Movie/HongKongMovie/index.html","375b1b059f79551b1695177d016f6ded"],["/categories/Movie/index.html","641b3094945ef28cfdf779f793233ccd"],["/categories/OperationSystem/Linux/Manjaro/index.html","f05dde33e2cdd421031d406f127a2d69"],["/categories/OperationSystem/Linux/SteamOS/index.html","74806a2bc961f50958f5606e4edf1fdd"],["/categories/OperationSystem/Linux/index.html","158c440b5232ffed81ea6657b578b300"],["/categories/OperationSystem/Windows/Software/index.html","222720c5e1eb96de6dcf046fdd970165"],["/categories/OperationSystem/Windows/index.html","8cbcbd09ec29cfc7cbb5d270fcbd21b9"],["/categories/OperationSystem/index.html","b0d79f44256c1be8d3f25558f06b4fc6"],["/categories/Research/Math/MathJax/index.html","5eae9833a68549a2d1c3c5bf226cea57"],["/categories/Research/Math/index.html","a0af51352958cb93081f021889f43651"],["/categories/Research/Math/线性代数/index.html","131f0b24eb766ec39c798eb69f8958ef"],["/categories/Research/Math/高等数学/index.html","524648e33ae32afe3ce270d96e71af00"],["/categories/Research/Memorizing/index.html","c706ee017e9ea56c3dfe675509065f59"],["/categories/Research/index.html","c8c8b101560f773945236f83f7a2972f"],["/categories/Research/思想政治/index.html","d3535a29d109da54f84509f5055fc531"],["/categories/Research/数据结构/index.html","ebcc2a3ea70723a471226499c90eaf5a"],["/categories/Research/英语/index.html","74cfd6a90a944cccadd11bbd0ff148eb"],["/categories/Research/软件工程/PseudoCode/index.html","b853cc342c4e63e87e1e06a5ef7d5a32"],["/categories/Research/软件工程/index.html","e9e64b12461f3987714761afdc7b4b7f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","2eec3b0a3b1acb442b7bd5cba8903f01"],["/categories/TechnicalResearch/Android/RxTool/index.html","97c2e98c7787f1fb320dff731160fc79"],["/categories/TechnicalResearch/Android/index.html","a7b6fd0f22b5fd4c12dd9969a21144e8"],["/categories/TechnicalResearch/Git/index.html","3c89792047dad092e6852aedae2f8567"],["/categories/TechnicalResearch/GitHub/index.html","8d95482e3a53d76e0ff61f303ae4fc56"],["/categories/TechnicalResearch/Hexo/index.html","ee2f826380d573395526667d54d6c4df"],["/categories/TechnicalResearch/Html/index.html","5f76c652a543f70c2134635b5c1b46b5"],["/categories/TechnicalResearch/Java/index.html","f293f465872ec30aa024978c38ad634f"],["/categories/TechnicalResearch/JavaScript/index.html","6884a33565fabeec8f80f1e344a282b0"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","06c4021716f2b3f8b87d64f9a6082cd9"],["/categories/TechnicalResearch/MachineLearning/index.html","38be1fb86bcae64f28e535d74a5b3485"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","77c74d318bf9827521a3cac39c3d12f4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","7be7b5ba81eddb66598b2820c84892c9"],["/categories/TechnicalResearch/Markdown/index.html","8d9775b8b21a1ee282e43f96c7659418"],["/categories/TechnicalResearch/Python/index.html","f3fcb0498521fe76705ab2e96ab70f65"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","7120ed7c9ef7ea3b708a53d1be113b34"],["/categories/TechnicalResearch/Spider/index.html","cba0e8e7536026aa0abf98cb9f0ebfec"],["/categories/TechnicalResearch/TA/index.html","6342f97dd66768077b85b65d942df68b"],["/categories/TechnicalResearch/UnitTest/Android/index.html","273000eaeaef63070fa33058b0c24484"],["/categories/TechnicalResearch/UnitTest/index.html","58de35688bc41dfc4c4e2f62d45a96b2"],["/categories/TechnicalResearch/index.html","1aff60320fb9a249b778ddb8a3f5f0a3"],["/categories/Teleplay/index.html","685b2a48acb3f451d2d192f375956109"],["/categories/Teleplay/亮剑/index.html","e1156324fec72c3e748ad50358b0be6b"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","9c1d5d9a9d3836c428cb850aadd21965"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","e47acbf377edd7aa5d90bd43febcb3f3"],["/categories/Tool/DevelopmentTool/Unity/index.html","bca43e54a4aa4a849906bf3f7c280b08"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","e6e9424a842b9b2fa8907701228fc19a"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","b98cf6dc325beb791d064f72d0af796a"],["/categories/Tool/DevelopmentTool/index.html","09973c0c3b3e2234983050ce9159d834"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","7640ac1a3d963100ac4189fbded689a3"],["/categories/Tool/Linux/Manjaro/Software/index.html","79e810cf8b5f1f38bcdbb2bb216ebff2"],["/categories/Tool/Linux/Manjaro/index.html","a5d84cf9c8dc60aeee1c1171ca3fb1ca"],["/categories/Tool/Linux/index.html","22d2d6fb03b196eb3502915a0d04ee83"],["/categories/Tool/Music/index.html","25093dc36a12b2717e31a9a74a2fb403"],["/categories/Tool/Windows/Software/UltraISO/index.html","eec2ba033d7384361fc92943a353ad0b"],["/categories/Tool/Windows/Software/VLC/index.html","96d975520440bcc37de6fb4d09581e75"],["/categories/Tool/Windows/Software/VMware/index.html","c0bc074c3eaeda541e96a01323c0b93b"],["/categories/Tool/Windows/Software/index.html","bc268adf2460f52bed13bb0aabc4ec88"],["/categories/Tool/Windows/index.html","6218df0c9e03fd1ba9c300336a20d2c9"],["/categories/Tool/index.html","1c0c7498e476674e16ead079dfd9b33c"],["/categories/Windows/Software/Office2019/index.html","885c058c8e33a90cbfbd44e1226e8b0f"],["/categories/Windows/Software/index.html","c8ed95e205eab3c1d7a2abf8d5c2bcf9"],["/categories/Windows/index.html","cd69d4b239465853669ab9e6f59206a4"],["/categories/index.html","7519aae5acf53ed6141530a74cbc62ff"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","107281d12e1b4574af45ed545fefbdfd"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","8c0db5a3b042baaa1593a689dc5b8220"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","86bb9c6805f793802c3c84af7427d839"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","fa689f5904d21742d43e8f4117d5f4f6"],["/movie/index.html","799939b052f48d11712924f634fedc5e"],["/music/index.html","b8ca8071dd14033766381d47877097f5"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","4993cf5b1a5a10c201342f34f28919db"],["/page/2/index.html","2581bdee4a06794c2c2e24a2956da95c"],["/page/3/index.html","5991ecce60aae7478b2a442282e21d33"],["/page/4/index.html","a973e45fbc7b177f91cc3cf3cc0b8452"],["/page/5/index.html","e2346514c4de1f1690309006a8927457"],["/page/6/index.html","af1549a3ea1dc0725418f87f0011233f"],["/page/7/index.html","d9a9d5628006d7c9604aa6fdf0361b8e"],["/page/8/index.html","77508229310af4888369b4a3dd64219a"],["/page/9/index.html","37f58b8eadd342d20a57fbb5bec31685"],["/tags/ARK/index.html","fba2d71ab4808ac8f644a9c888aadea9"],["/tags/Alienware/index.html","2d8d7a03537026ef9bb2a5f1e4e0192a"],["/tags/Android/index.html","081ae5077d9b68ab7c31d1ab1aff0ed4"],["/tags/AndroidStudio/index.html","1fb5ab0f0f6c24c6ce36333522004fc6"],["/tags/Anime/index.html","3f10a1167f29a037a0347fcdf7636c4c"],["/tags/Base64/index.html","834d54b70c5b12cd0c11137ada928f45"],["/tags/CDN/index.html","83cbf3a8d059a08c734b001c8c247264"],["/tags/CSGO/index.html","429bd573af18dfd954531c0007366eb2"],["/tags/Chrome/index.html","b24f75a64db6544383bbc77a6f26d051"],["/tags/Chromium/index.html","174d0ea0058498fa54d78de314df9e7f"],["/tags/Computer/index.html","ed2cdc35230cfcc325a0ec4318157186"],["/tags/Contributor/index.html","0b73a11d68ffbb5c2f232e3518aa7a69"],["/tags/Daily/index.html","3707f660c15c3bb61be1f51cf992c111"],["/tags/DeepLearning/index.html","d39008499fea37ce71ee02543d2554eb"],["/tags/Design/index.html","dc37b91d0ee5bf44b8fcdcf4b8172de5"],["/tags/DevelopmentTool/index.html","1c89ec2c85e78f6ed6029a37269ffbba"],["/tags/Emoji/index.html","519818a89c657a02a5066735e414587b"],["/tags/GFM/index.html","7c832cf7318f757d8b680cd574ad55f4"],["/tags/Game/index.html","aedd0eb332dc3defb2b683bda00908b2"],["/tags/Git/index.html","2b08a04b2fb5adebe56bec9e5e8c6f0c"],["/tags/GitHub/index.html","70ed0e88f47ec2990d721f7edd7469fa"],["/tags/Google/index.html","1ad716e237db36f0ec18251170cdeeea"],["/tags/Guitar/index.html","26c2bb793cd302cc82acefb003d67feb"],["/tags/HardDisk/index.html","90e43bc027f7f9bde91bfd0a782fc60f"],["/tags/Hardware/index.html","dd7698af75404457246aa5cc38fec1f8"],["/tags/Hexo/index.html","0e0838a8088c25ebb924597152ebac83"],["/tags/Hobbies/index.html","49562005ec02846e82622b1ae103770a"],["/tags/HongKongMovie/index.html","c8fa020ef8f851fd8a6c1c84827b0dad"],["/tags/Html/index.html","d2cdf1510eb0f541caefe92c099b589a"],["/tags/Java/index.html","eac3cb1a099f119363b3502571f6d1d2"],["/tags/JavaScript/index.html","0ceb907848ab5dd308eb20a47155272c"],["/tags/Linux/index.html","5365921a68820db5a0c447a99bab19d8"],["/tags/MachineLearning/index.html","42f934bd11af1351470d44ae83454fe6"],["/tags/Manjaro/index.html","e0d0e7012266266ca43b6c955dd3a924"],["/tags/Markdown/index.html","8eeb67aaf1c26f44d8e1afade0c128ac"],["/tags/Math/index.html","2be931f78ddb4a2f7c60102c94065016"],["/tags/MathJax/index.html","71eacf0406127cc4927b825ecf82b166"],["/tags/Memorizing/index.html","d2e018329364d7f4288aeb059a0ae9bd"],["/tags/Movie/index.html","67a3fd245b1398d8b26be1b2edf9e253"],["/tags/Music/index.html","7f25d098a0536096b2b7fbba24eb0db7"],["/tags/OperationSystem/index.html","b8a3fb14a312aca2ebfe91e4b07f1643"],["/tags/Origin/index.html","fe54d2be953a735944b04f63804c5a7b"],["/tags/PersonalDiary/index.html","1249068cf920f4990ea0bf347fbcb4a9"],["/tags/PersonalPoetry/index.html","d9c82d628462e0d86d0b92953b77544a"],["/tags/Photography/index.html","62e7770cf1436cd7d0ad94c439e8a1ce"],["/tags/Port/index.html","fd3adc6c1d31a83d74fd4ddbb39c88a1"],["/tags/PseudoCode/index.html","131501a1981d118b7e1cf03c545e7bd1"],["/tags/Pycharm/index.html","4b4a398a9510c5a012c52fab32ffe7f3"],["/tags/Python/index.html","110af34369b9675b52863ea26eb92744"],["/tags/ReactiveProgramming/index.html","a286d4de47fdd4b718f8d86d601e358f"],["/tags/RegularExpression/index.html","5d1948f70c1033a85989dcfa40b69b90"],["/tags/Research/index.html","b3316dd45f0668279a4a3c606653af33"],["/tags/Router/index.html","a7d8b3f83ad98e047658b01bfeeaf934"],["/tags/RxTool/index.html","2321d8ebc954b61fe53685798543cfbf"],["/tags/Software/index.html","2af11469c50013371d0118ea29bf2652"],["/tags/Spider/index.html","db31dd14ee0580317205d9f584e88b3b"],["/tags/Steam/index.html","2880818dc55e6ff7b93e1a798f00c39c"],["/tags/SteamOS/index.html","ec2d1e490a57d975bfd986d2492d88fc"],["/tags/TA/index.html","1bcdee19797c70adc98f47cbbd3a543c"],["/tags/TechnicalResearch/index.html","9df71ee236b5e02b6e752a11efd3fa7a"],["/tags/Teleplay/index.html","465c74e807d68b03a27a174e30214cb5"],["/tags/Thunderbird/index.html","e55d7099432c96afe57eeaabf2852ec5"],["/tags/Tool/index.html","11bfaa22fa788ae08ba776dde1b13f2c"],["/tags/UI-Design/index.html","453850576a0d3aee986a3f867264d78c"],["/tags/UltraISO/index.html","3ac39a006b9d3230fa263a0041fb6689"],["/tags/UnitTest/index.html","0f6c051a7c5b98acc67b0f62e0edf20f"],["/tags/Unity/index.html","216fd0d58fa34b40b7fceeced3360e6b"],["/tags/VLC/index.html","b51e2b5726022c070604ed7bad2d2fbf"],["/tags/VMware/index.html","4f80e423076045f43de9918275393e10"],["/tags/VisualStudio/index.html","bc064891bdd77705d52e93ece90e0beb"],["/tags/VisualStudioCode/index.html","45b4c7baaf4c200dff07fbc4fa678ee1"],["/tags/Windows/index.html","8d9842832688d629c3b2351ce281fccb"],["/tags/index.html","ef6b6641cb0057408213e3b1dbe4688a"],["/tags/亮剑/index.html","7fd3cd91a0df4b5c9a742f68ec0c77f2"],["/tags/仙剑奇侠传系列/index.html","3ad7ea94abd139bad58cf673d9f003a3"],["/tags/千与千寻/index.html","baa3de50c82849dcc9e7b3057b609152"],["/tags/宫崎骏/index.html","054fa97ffe1eef92db73d823a2ecb518"],["/tags/小王子/index.html","6cf1a67605653f2ed033a2a23ac38b63"],["/tags/开心鬼系列/index.html","281dcdccb652b1782c855417e384080e"],["/tags/思想政治/index.html","7061a6b951dd3dc69c933c8db004a3ea"],["/tags/数据结构/index.html","1a0ea62dc2a9d0a45ca16aa4993641a5"],["/tags/线性代数/index.html","c12ba007a54ac51cd1e40ddfe775b116"],["/tags/英语/index.html","1046f03822c1c22ba77ae1fe2f13d590"],["/tags/软件工程/index.html","545c7f3ddd1965cadce4f71ebab71d41"],["/tags/高等数学/index.html","a7ead2b30ed86bad382be8ebaee9f9f5"]];
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




