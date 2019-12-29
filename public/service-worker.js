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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","d90a97763d2c911684ffe016260ffd75"],["/Anime/小王子电影的共鸣/index.html","fdcb28b1834643a6aacd68cef86759fa"],["/Daily/Memorandum/index.html","7d957ac379cc895600e0901db9c1505a"],["/Daily/生活小常识/index.html","feede397c4ecb6df4930235a1fb8e293"],["/Daily/网络用语/index.html","1d0c12aceb913946091098b00a4941ce"],["/Design/设计用户界面的注意事项/index.html","351ccd1d5ceea999d1cb62d07f879a6a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","f7ed72dc88f90d80ca563116dc6755f6"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","8d8117ff087515ab94d4d02add2e0fb5"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","be5cd5b19fa76cbd446b393d62f7dedd"],["/Game/GamePlatform/Steam/Steam库共享/index.html","012dd2c517ed01d2a1babedaa8a1fdc1"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","84a20d07b60090cdbe863fd7b6e236b2"],["/Game/如何独立开发一款游戏/index.html","c1fb5485f8b87225539bd4872c18ef88"],["/Google/Chrome/Chrome上网助手/index.html","07ce676f2970145bf06eb446950dabeb"],["/Google/Chrome/Chrome使用技巧/index.html","948268441f4443e9e2f766444a09df86"],["/Google/Chrome/Chrome插件/index.html","b3259ea52e309480b28bf9ecf0304669"],["/Google/Chrome/Chromium/Chromium/index.html","c953f4093a92abe72bfb0c2d3efa5972"],["/Google/Google搜索技巧/index.html","3a74786823b1039867fbe3a542aaf281"],["/HardDisk/硬盘分区结构/index.html","b6f60b5bec463a8f96a89ab997affb28"],["/Hobbies/Guitar/吉他入门/index.html","2cdcd1c917e97268428045a6edfbeae5"],["/Hobbies/PersonalDiary/芦江曲/index.html","f92705ef89ad070c176a3aa7f988560a"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","d4214dd43ca3ce19f1fffc6668f3e790"],["/Hobbies/Photography/摄影入门手册/index.html","2577b7d24b324b4c2a8123a42cf5c3e8"],["/Interview/2020年字节跳动面试题/index.html","112a1236473b8e9ef0204ba76bcbb497"],["/Movie/HongKongMovie/开心鬼系列/index.html","ac39be273798e45d123ce540d5e7cc4b"],["/OperationSystem/Linux/Linux分区管理工具/index.html","58e0316f519237c94ba7f85021a43ed2"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","f372d48b6f8f2a5dc08eb91383404400"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","b4bfe8685b93dd720c850708f3c5d223"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","ad5fe8468afcecf96b8dffd27fedb856"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","27c49ac9460935524576d8fe28d10f43"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","e171a8e854046df1513b7b1bb83d808c"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","a7f8be92556d63cbe14c5f5711ca8b29"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","d4a448d01de23a3892884e342681fab9"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","c58890daa869ed9407b432ceb450e166"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","6db2e731ba716a154dcd5574d6a9bff9"],["/Research/Math/线性代数/线性代数公式/index.html","23a2c22e80df111f5557e37a92822938"],["/Research/Math/线性代数/线性代数知识点总结/index.html","a59c4083f4f0643dc98e542069a0322e"],["/Research/Math/高等数学/高等数学知识点/index.html","15683ffc5123d2962ecad2157e401aef"],["/Research/Memorizing/费曼技巧/index.html","ecfde74091e90aed669cd2bd06762f7e"],["/Research/思想政治/考研思想政治理论知识/index.html","94b6866c965583ac0b4ab6310e3daa68"],["/Research/英语/考研英语作文/index.html","5740f33e0df0a1ca4af498ae94442d20"],["/Research/英语/考研英语词根/index.html","3583c96da16904e1ddd5d0a1de483d21"],["/Research/软件工程/PseudoCode/伪代码/index.html","6571fc2161958c9572c28715c9078fc6"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b957119d6c410fc89f973f0653b6664c"],["/Research/软件工程/软件工程基础知识/index.html","3810014af0e74790c963b965db5aafae"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","e24e17f3b0ce2eb12de593c8827b5ad4"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","44cefaa4d268d1217bedf4213527652a"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","8ca6ff5ed8023324b0203fa22a604577"],["/TechnicalResearch/Base64加密原理/index.html","9c6abd9f5d2d75c2d65d2eee9219c4e6"],["/TechnicalResearch/CDN/index.html","bc76be951f7738c4fbc74b11500b992b"],["/TechnicalResearch/Git/Git/index.html","b39000adfcbb95f3914d4185e33bdba3"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","aa63b4d8614af669a6e548ebb8eb83d1"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","b31a31572b89bcbc718c78f2ff1fa44a"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","a751445c50cab5368b8a04f14d54cf63"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","78e79a191a11df1747f7a2d31c5f5782"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","f1a4b3388aaaf8cd0c5f94b03a5ab874"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","bdc287d1f5b8f0ff80251f74667a1de3"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","54c216385f890cc4803f73bc34632322"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","7fad925fb120999f832f80f3de60e993"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","ba53192d1a01af4977d2a3837fb4d062"],["/TechnicalResearch/Java/Java基础快速入门/index.html","be20b3baf9e4d17217aa0cffe55c402f"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","0d2f84016ffca9f4e09fc597adfd6793"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","41c910ff01e7dfb05d2c317a11be7dd7"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","95df336c9eb7a7780f79156518de10e5"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","1c371de3947272aa9d6e16016aacd5a9"],["/TechnicalResearch/Python/PythonExercise/index.html","cd7e85d1b66ebcf1fa3aa12fc381da2e"],["/TechnicalResearch/Python/Python问题归纳/index.html","70029896b4fdef11f09e2d34cdaa29c7"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a1c53e9d45edf14f14821778d3f1da4d"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","a1b121a3454008f7128e5ac25fe2b027"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","164790083e3fac1ae2ddbd512be889f0"],["/TechnicalResearch/服务器常用端口/index.html","2de70f86bcf7c92f799b461df347a42b"],["/TechnicalResearch/正则表达式/index.html","9f8e9b84c112820c216659b0ceed1b5b"],["/Teleplay/亮剑/晋西北铁三角/index.html","8fd1944588df0f2d052347330b18a316"],["/Teleplay/仙剑奇侠传系列/index.html","e594ce2c2521994b8c4c011e00e36755"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","2737b48bb238d56877ae671360a31986"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","6e4bce1526309adf9e997c0e7ccd5f28"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","727baee9b78185cb9dad4f0810b41b3f"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","a56e515022719674dd60162318742629"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","a84a60080b1169435e15a00124484f0d"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","e33101d8cc2ec813acac6b5731bf74ee"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","287b4bf50a9f102424b44408357aa085"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","038c7a79b290bfd7088bc241495e5bac"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","f25b9961d0f54a904a8469ded8643d23"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","6c75e50d2509ff47ad6709283f7aebdc"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","7a8992e76378900be409354330401a7c"],["/Tool/Music/网易云音乐/index.html","543ca93ddbd97c78f9137e5911811a93"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","e9b4c4e8579b7433cc9bd095f7fe27b5"],["/Tool/Windows/Software/VMware/VMware/index.html","d6573bd49e73408d5886677c950ac9c5"],["/Tool/百宝袋/index.html","1a6ea7b1e5165ea405e467c0234d72d1"],["/Windows/Software/Office2019/Office2019激活/index.html","bc1e11563c24bf2a6169de1dee0f718d"],["/about/index.html","36e41ab53ebcd40fe8b01991120efd79"],["/archives/2013/10/index.html","9ee107f82bb32cc293c436392bd71f32"],["/archives/2013/index.html","9ed4db6d9780929e03ce29c192dc75dd"],["/archives/2016/09/index.html","05cb5dd3b94dc97bdfcac4d59c6d2da5"],["/archives/2016/10/index.html","b039cd2b451d436b0c3c193de44e8164"],["/archives/2016/11/index.html","4bbf6c42f47eb612ad7f1b183b508392"],["/archives/2016/12/index.html","11494a21190fb223958b0648972c750b"],["/archives/2016/index.html","1fd064020ff3c989cb1bff9815b2fe17"],["/archives/2017/03/index.html","8224e3d3d4332e1cec55057a58c12e8b"],["/archives/2017/06/index.html","7235583e72a44c27a2a0040ee9145e45"],["/archives/2017/07/index.html","a55672f7f2784514c5a3126fe4e68e25"],["/archives/2017/09/index.html","3b0d6d79c3ea6a0b5f3de8c422fcc016"],["/archives/2017/10/index.html","30be9b20f95c003effbf98de793aa6cc"],["/archives/2017/11/index.html","cb49ef856c22054c3255592378dafbf8"],["/archives/2017/12/index.html","3267ba57f47cfd6a0e3b33e9c4d6f6f2"],["/archives/2017/index.html","0fec4988dda72881023caddbc95f760e"],["/archives/2018/04/index.html","f87afb4b89f385c60d7fd782f800e48d"],["/archives/2018/08/index.html","11216013bc3455565f3ba79ccc121104"],["/archives/2018/09/index.html","1673c531382e9173b31bbada41b1259f"],["/archives/2018/10/index.html","d5951caf0ad9c104189911f5a1c0d396"],["/archives/2018/11/index.html","26a271a9a06a0ac2208a65ae1803f759"],["/archives/2018/12/index.html","c5ccca80dd81e554e5c41c2c4f3a9aea"],["/archives/2018/index.html","8d6cb5c4f71da98e4d62828594b2f153"],["/archives/2019/01/index.html","5b0e6a619bda2db04ef6e48686bd7571"],["/archives/2019/02/index.html","11f19b47be22d81aff2f6aef4e28805b"],["/archives/2019/03/index.html","09d1ff47f13c01ff813da92a7e32d78f"],["/archives/2019/04/index.html","ee31add2676a9efbc7f5ca0ab54e47de"],["/archives/2019/07/index.html","30892273115c0d7819de83075fee8851"],["/archives/2019/08/index.html","5fd5cfb5d4b73cab596a2f644addd11f"],["/archives/2019/09/index.html","c1a422e2be0f96834b4aaa2efa7f2c0c"],["/archives/2019/10/index.html","8c50b796bd37e991712e9e4db3ff99e5"],["/archives/2019/11/index.html","e4f058ffdb9738d615c9caff6c4bc845"],["/archives/2019/12/index.html","d7e9ad115796f88d4b613c4162167720"],["/archives/2019/index.html","a44ec9ba8e33617051a36c10f8425730"],["/archives/2019/page/2/index.html","0b0b7f148ef18e4c11a229526e53001d"],["/archives/2019/page/3/index.html","a681157e1ec34a71c801a93568dec61c"],["/archives/index.html","182d2757b01adde399b109b944847996"],["/archives/page/2/index.html","a7a10d2ca457dd99f94895e273c30ec9"],["/archives/page/3/index.html","6fac0ff9c6722c9d06807184550eb764"],["/archives/page/4/index.html","89a5844172546cddafd00129426e465a"],["/archives/page/5/index.html","f93ead2bceb53ddeb6cbe81d969dea80"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","28b812e2f789231d1179f079584fd992"],["/categories/Anime/index.html","c580ede270a319f92d2ff07e6920c7cd"],["/categories/Anime/宫崎骏/index.html","4f17e910dd8a667ed1a02859ed8f457e"],["/categories/Daily/index.html","58be631a0dd9c0f86c94795820743936"],["/categories/Design/index.html","871ad959bc2d13cfda1e6c55b04c435e"],["/categories/Game/GamePlatform/Origin/index.html","0e8e0bc8856c668216f43d923ce40bfa"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","cf2df2854dc1afa3df78f0773d5038bf"],["/categories/Game/GamePlatform/Steam/index.html","b7344ecfb349638cbfa511d313287189"],["/categories/Game/GamePlatform/index.html","6e4d3a5deb0c0dd2336bdf1c7f27f8af"],["/categories/Game/index.html","57a4cca036837d0f568590ec3f4d98a2"],["/categories/Google/Chrome/Chromium/index.html","6c0f53f19d210a1267943cc5995d99eb"],["/categories/Google/Chrome/index.html","98eaab8377510eb817a91e5e15306fb2"],["/categories/Google/index.html","e3357ab31b311ad8852cb494e706cc15"],["/categories/HardDisk/index.html","aebc2f7b8da283f9c0cda7390ba36494"],["/categories/Hobbies/Guitar/index.html","232f48e8363ff234e602c79c3e17803c"],["/categories/Hobbies/PersonalDiary/index.html","1b2e9620c2d39a569019b1f083477100"],["/categories/Hobbies/PersonalPoetry/index.html","0a71ba963d720b4c054fa29ef8721af9"],["/categories/Hobbies/Photography/index.html","d9579b7f9e9b4d85347308febd056dfb"],["/categories/Hobbies/index.html","90f71a19dd4bb0dd385b5228e70e77d5"],["/categories/Interview/index.html","25187b5bbbf9f5871656f0f36e0dec52"],["/categories/Movie/HongKongMovie/index.html","9172a91be2abfdeb4e00ac01f2498184"],["/categories/Movie/index.html","41ee3a779d8e225902a4f61b43afbe11"],["/categories/OperationSystem/Linux/Manjaro/index.html","4c32a8fc6723d217521ec6f230747bef"],["/categories/OperationSystem/Linux/SteamOS/index.html","4c1050ba2a913aecae358211d1b2cbed"],["/categories/OperationSystem/Linux/index.html","b1c136f5f63573487bf7030223ecb4eb"],["/categories/OperationSystem/Windows/Software/index.html","ce19ade81f0c7a0053e77461a8db866e"],["/categories/OperationSystem/Windows/index.html","99bbd888b84cdd031f8e8653b5ec01fd"],["/categories/OperationSystem/index.html","fee1768fd76987ae7aa486b10ba6b710"],["/categories/Research/Math/MathJax/index.html","8fc540973f2a2c8e76b97e5b1549e3c4"],["/categories/Research/Math/index.html","92f675176322b3c5fade73807e3d5df7"],["/categories/Research/Math/线性代数/index.html","5fddbcb0aecc3473de7d6542b9abf68a"],["/categories/Research/Math/高等数学/index.html","0743099e554377fbff15887b91410b91"],["/categories/Research/Memorizing/index.html","214b3049fe96d01d208b2e0faac2aa19"],["/categories/Research/index.html","62b772f80661ca1c9791111109e8d48e"],["/categories/Research/思想政治/index.html","72b1881d7a22ff61f36208f2fec15e34"],["/categories/Research/英语/index.html","a2150cc1473ac7db5b766fdd40696784"],["/categories/Research/软件工程/PseudoCode/index.html","5acdf0a54ac5fe49c237fe848c9df3a9"],["/categories/Research/软件工程/index.html","4c33bf8293b075baa77d8d07e462ab86"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","4e957a805a0cf34ef82b03b442282351"],["/categories/TechnicalResearch/Android/RxTool/index.html","eedf36db8e028b2c786ecf7665fcb1de"],["/categories/TechnicalResearch/Android/index.html","97e6809092caa3c24c0596ffc76e8390"],["/categories/TechnicalResearch/Git/index.html","3cc4066ae34aa0c9c23f810354d8354b"],["/categories/TechnicalResearch/GitHub/index.html","9a1c4c331fc96631f170384274071c15"],["/categories/TechnicalResearch/Hexo/index.html","0bdeaaba01e643db8cf647d7ca751356"],["/categories/TechnicalResearch/Html/index.html","b00c725972221e0ff8d4b188e750e2de"],["/categories/TechnicalResearch/Java/index.html","c00e15c3ad586018b9ad6c623c4d91d0"],["/categories/TechnicalResearch/JavaScript/index.html","a0dfb342959a540e61bf067cc49570ec"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","5e881c1371d33f1bff9af71e4eb231b4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","8b6867b8dc9f99e398b3ecd9d53331b4"],["/categories/TechnicalResearch/Markdown/index.html","7bfb15cb4e8aebf1476e821d2fb5a2c7"],["/categories/TechnicalResearch/Python/index.html","87fcc87eb884995b8cab6b11ef1ad52d"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","bfbe7918ea1c99bb0692352003a24962"],["/categories/TechnicalResearch/Spider/index.html","59f7f8b8c37204ea39e324cfcbf2eda9"],["/categories/TechnicalResearch/UnitTest/Android/index.html","4b334246c951c93aef6f82637ecdda76"],["/categories/TechnicalResearch/UnitTest/index.html","bca04567d297ecaf454556766ba69a65"],["/categories/TechnicalResearch/index.html","784493d9d1f4c7237b8212660885b9de"],["/categories/Teleplay/index.html","5946122a5d7c3d0aab0bebfac4254e3c"],["/categories/Teleplay/亮剑/index.html","cbe3f7d11841887886133425c3464383"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","5acf400b9e46a223a8bde42f25bfa6a0"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","cbb3ed17d44021336167afaf0a606e7c"],["/categories/Tool/DevelopmentTool/Unity/index.html","093e7800b190539b1eabaa5dbed8c151"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","639fbf8c48eac8d5381fe5480804e03c"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","e995fee8323a2670a43ca62e660f35cb"],["/categories/Tool/DevelopmentTool/index.html","26eea1f3f5e6c6774c670d89697d7b6d"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","bb4ec8bdd243933f81d8d83b2aaacb00"],["/categories/Tool/Linux/Manjaro/Software/index.html","3b573927a9c0771fde3886fa41a68574"],["/categories/Tool/Linux/Manjaro/index.html","e973cb4458625f1b7bdc02f8b6993f73"],["/categories/Tool/Linux/index.html","1f5737799e305e0bb45b6960e6597938"],["/categories/Tool/Music/index.html","fa5fefd10eb06c3f341edffa6040c1f8"],["/categories/Tool/Windows/Software/UltraISO/index.html","e14bac066d0f0542283063a2a5c5a55a"],["/categories/Tool/Windows/Software/VMware/index.html","27a48a2322abce423f1359b22b44be9c"],["/categories/Tool/Windows/Software/index.html","b797c5978acc1e0393396f6d665a5b2b"],["/categories/Tool/Windows/index.html","5d1e9db61efae43d8c1a88534ff55ae3"],["/categories/Tool/index.html","e031eaf2bdf7d8a8ee1d3c60b1dc5667"],["/categories/Windows/Software/Office2019/index.html","da0a336775a9a4e935387bd46f656cc6"],["/categories/Windows/Software/index.html","9e21b0430dcaa83557041ecd04ffba9b"],["/categories/Windows/index.html","f1251dcf2d9b5877702366f14a8e6ae6"],["/categories/index.html","459b591a69eff1ccd81a881109d0d465"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","94d2d18a55a4f084f5be0534ce265cce"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","90997bb26caa89636bb9832bb3131d88"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","725a2c5bf5f8d994e44a0d7c3c15826e"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","446b773d6c38e14af1e33491aa9f1b8e"],["/movie/index.html","a676659e7025d965d7292ad3790108d7"],["/music/index.html","ee5e298fed3164d872897c3235d36d6d"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","565ae409441b82c8909373b4098e3741"],["/page/3/index.html","a69c9479c8b97ba91469631b4ca42ea4"],["/page/4/index.html","9cb9ea3fe2473e2de7aafc7743e25f9c"],["/page/5/index.html","b0da2a320c0f58b6782ad7e5e9736b3e"],["/page/6/index.html","a00d7a9856b5245359e0be4b94ff00ab"],["/page/7/index.html","a2bd69fa4956e73fc5bff112e4440d26"],["/page/8/index.html","8eb89a7acc792b7e80232bdd94b6445a"],["/page/9/index.html","18b59154ced029dfa1ba6541cd70d4b2"],["/tags/Android/index.html","fcd271df912d6fec09f4f2bd99ed63fc"],["/tags/AndroidStudio/index.html","307c3688f2956807b0f97e62ca6a8a86"],["/tags/Anime/index.html","3dac40d2d76e5cb272a83ebcb6cb17e7"],["/tags/Base64/index.html","2f7b75b9523b47146493261f39169906"],["/tags/CDN/index.html","31548f0022baecdbed7359486a42f5f3"],["/tags/CSGO/index.html","f70967ad004ef96fe0c8a89b5bcebcbf"],["/tags/Chrome/index.html","38537dadf570b7352f539118ebf9b4fa"],["/tags/Chromium/index.html","d095aa1395188512e3492da874c4abc8"],["/tags/Contributor/index.html","8eac3b7014bbbdb07b15fcb778b29bca"],["/tags/Daily/index.html","b6a59c1f39f48dbd62b87453141faf81"],["/tags/Design/index.html","fe633281731d9e36b9caa3f93d103a7c"],["/tags/DevelopmentTool/index.html","1b31877cb25b0adbc766e5aa0ca4a7a1"],["/tags/Emoji/index.html","88d0cdac179bfbed70ff55b2a78c77b8"],["/tags/GFM/index.html","51d2e36635ff240b2aed46b134da92dd"],["/tags/Game/index.html","753e5787e2294b699a1ec78d1844e629"],["/tags/Git/index.html","e1c84a1c62b8eaea8c23d5fee8826977"],["/tags/GitHub/index.html","d971941d5e3d92047edd6ff4f0de0980"],["/tags/Google/index.html","dabdbcd238cf857f75d1c1d1669eac9b"],["/tags/Guitar/index.html","4f943db575a0753475ff9c0c27030510"],["/tags/HardDisk/index.html","54745a0b64427cf4beb5fe47ca0dddaa"],["/tags/Hexo/index.html","d5d8b0d148f91c85e4a137464714c7e7"],["/tags/Hobbies/index.html","cd4b1186f0c8b409ceb6df2e55f940b8"],["/tags/HongKongMovie/index.html","9c25fe1cc391b85a70735ab566094c02"],["/tags/Html/index.html","06961fe2fe4921100ccb7d74d8a24b29"],["/tags/Java/index.html","ed4a410c92dd224c63a33e4440484020"],["/tags/JavaScript/index.html","e0a5ac278b043cc6082d5297a65e8554"],["/tags/Linux/index.html","ba19fe436bc91e238222afbfce2139be"],["/tags/Manjaro/index.html","65704f453edc393dcd991cbdc2fbd447"],["/tags/Markdown/index.html","6f833fc33e616848098374e021d835ca"],["/tags/Math/index.html","d02e9ee97ec2dfe6e868e4af6d3445f4"],["/tags/MathJax/index.html","aa04ab6a74abfc17b46cdbd2cc21fe84"],["/tags/Memorizing/index.html","652dcdadd6a39916e502e72f6be11f00"],["/tags/Movie/index.html","61305b0f00005f9f8e0d53f719ebc917"],["/tags/Music/index.html","2d30da3ccd1da2a38419ee2d102e12d3"],["/tags/OperationSystem/index.html","c82494016e4be4de3331b7114171b8dc"],["/tags/Origin/index.html","ba874e3347d77728eb6b69598c759cb3"],["/tags/PersonalDiary/index.html","b8ecc0598b2eca14a1834436751ea113"],["/tags/PersonalPoetry/index.html","caef488077c5fbb9bb23c0819a49550a"],["/tags/Photography/index.html","ecbc29108510a52c7873794b3b59dd1d"],["/tags/Port/index.html","fcff7778d411e49bdacbe5bd565c2f71"],["/tags/PseudoCode/index.html","b2ecee348ded2447ceef2aec98169360"],["/tags/Pycharm/index.html","6c0af6eeb56bacc1a47587d1ec43f6a6"],["/tags/Python/index.html","f590df6c5e92cf79cf048c917afd1295"],["/tags/ReactiveProgramming/index.html","d5b5df35bba56f7277ae88bb37611948"],["/tags/RegularExpression/index.html","88a534d5b43273c24a4cdf3ac728d63e"],["/tags/Research/index.html","dc0128e8bd8f7fea2c0223e9f45cfaac"],["/tags/RxTool/index.html","9254b6ff4ab45d27bd8869496eeaecec"],["/tags/Software/index.html","8f2bb29a33766e9da202015f1e9ca63f"],["/tags/Spider/index.html","7baea2075135bef218ad1c26215c4860"],["/tags/Steam/index.html","580bf3b20fec690c707e3596fa2ef223"],["/tags/SteamOS/index.html","0980d8cfcf3ec5e06ad3770702f70492"],["/tags/Teleplay/index.html","6f944f1b4f6f4685b7866d4e6ff90d3a"],["/tags/Thunderbird/index.html","1cf380b0b835a3c03dd4fd609de515b3"],["/tags/Tool/index.html","f173d2a76e6529fbb383a988a5f7d771"],["/tags/UI-Design/index.html","615cbcbfb5b5c94dbae1fe387ea33aa9"],["/tags/UltraISO/index.html","8331d12dd5dacd168bd04fabb33810be"],["/tags/UnitTest/index.html","881450c244d52ea75054502a3cede769"],["/tags/Unity/index.html","4b3a46dbed43129058edf6fa67580135"],["/tags/VMware/index.html","4f1e6a09137efbd1e0ca75ced86c35e5"],["/tags/VisualStudio/index.html","23526df245e7572e2a86da793604b139"],["/tags/VisualStudioCode/index.html","46eade4af2e6b6624318b39db2673122"],["/tags/Windows/index.html","2416086c2aa40a1e5a7b274750ab613a"],["/tags/index.html","f348bf0d4ea324439a5827c38a023afc"],["/tags/亮剑/index.html","a6168c8c1248deb0d5cbc90e6e3e7775"],["/tags/仙剑奇侠传系列/index.html","d99ed19655fc22b4e91fbcdaeb08c2c9"],["/tags/千与千寻/index.html","086faacfecc4fb2087502495a4df48c7"],["/tags/宫崎骏/index.html","4a0006a1cfe4ba10ef5fb7c1a62eea9f"],["/tags/小王子/index.html","ef8fd02f1d2f821c6c77d4381c57ff94"],["/tags/开心鬼系列/index.html","8338da9fc3b7769ab04e3eb3d9db1439"],["/tags/思想政治/index.html","9344e557998347ccdb72a27bd4af6839"],["/tags/线性代数/index.html","02c455e33cccf672fc8b4f3f36433d32"],["/tags/英语/index.html","b566b2d07e3739839b019c4f250b4da8"],["/tags/软件工程/index.html","5afbf4055ac1b7eb0a16790a4c5ac6b7"],["/tags/高等数学/index.html","b3a9d967bcf72f2157acbf92d0848fbc"]];
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




