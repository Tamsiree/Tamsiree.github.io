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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","ccd5933cacc326036958c0a7b5e0a6cd"],["/Computer/Alienware/Alienware更换电池/index.html","73e3b27b03c59664ef0d2bbd37f86ccd"],["/Daily/Hobbies/Guitar/吉他入门/index.html","fa6f5796fa3f80269b86a72108e79b60"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","258234954dc706cbded07b56c9c9dfd1"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","4f0ad752d6fbf9df6914a117139ff568"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","a88f3d1c64c57a1bec4691b035ebca00"],["/Daily/Memorandum/index.html","f78d4652ce16145ed22ea0e16d149c15"],["/Daily/个人所得税/个人所得税/index.html","f26a29defb1be79e4fc1954604f10c49"],["/Daily/五险一金/五险一金/index.html","3825be4e884ba4a96615bfe7f0cb364f"],["/Daily/生活小常识/index.html","0ed8125fea46349a4d512cb15015cc0e"],["/Daily/网络用语/index.html","efc05a70699f1a667adbffbd4242005d"],["/Design/设计用户界面的注意事项/index.html","c2595601c3a044ead255e15327c06db7"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","1d3f3bbf191061efd637f3cff45a28e2"],["/Game/GamePlatform/Steam/ARK/index.html","ef3d63441562e443963f2d3a25f8ba54"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","4eb67c5ad266cb98908b957e0c53606c"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","ff412d6f325d3afe2a254ce7fff787c5"],["/Game/GamePlatform/Steam/Steam库共享/index.html","c3117263904d11518af787e16a1f1779"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","f40f4fd0d7976e052c030ca8c5fd00d0"],["/Game/如何独立开发一款游戏/index.html","74a0e9fc11b4074f34114e65a0040a21"],["/Google/Chrome/Chrome上网助手/index.html","ae9198fee469faf97c1585885e86ffb5"],["/Google/Chrome/Chrome使用技巧/index.html","98ab7a3458c0797a113019c04becc357"],["/Google/Chrome/Chrome插件/index.html","b4813e6113eafe3dfc7e62378af7c465"],["/Google/Chrome/Chromium/Chromium/index.html","839e6e328ab962889eb1eeab94ff34b0"],["/Google/Google搜索/Google搜索技巧/index.html","754264c6f9f81ab2f2c6b646190c00b4"],["/Hardware/HardDisk/硬盘分区结构/index.html","7eec25a97547996741d06320c64e2325"],["/Hardware/Router/路由器固件/index.html","ea6f26533b1d95999ad2194eb53e7264"],["/Interview/Python/2020年字节跳动面试题/index.html","207116980c6f2f74d509c9b8efc8102e"],["/Movie/HongKongMovie/开心鬼系列/index.html","ec0ba5142540cb25b68dfb7f2b157e72"],["/Movie/小王子/小王子电影的共鸣/index.html","df7f5cc6aaf3dd669aca6b5cbda908cf"],["/OperationSystem/Linux/Linux分区管理工具/index.html","82fe0a8906208d7c2160f2ccfaf47f72"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","0693ae3585ebbba4fd276e0212dc9952"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","5f2b51ec34178247f2764d184f6c72dd"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","bbbb418785cd7648c1defa8b2d611d46"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","5c0d1be56e8d77cdd8dc73663f2a2cca"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","a7ec312ebf9f00484cbe0764ea98b4bd"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","acf1125b4e36da0896cd7663e339e031"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","fad757161a3d9474a8e174d30873271f"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","42517fa8071252f3fee0e0cf6279f978"],["/Research/Math/线性代数/线性代数公式/index.html","d35eb7122a4f7e7ade6b46ecc464b9e4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","fa7a59f1a7b564f6aea5803a8fb52097"],["/Research/Math/高等数学/高等数学知识点/index.html","b66d0e95e987550124695b66f77cd820"],["/Research/Memorizing/费曼技巧/index.html","3f08599b1ddc4c2732ef8257b61babf4"],["/Research/思想政治/考研思想政治理论知识/index.html","7b1893b6f3599cc4981f9c7966c5f3bb"],["/Research/数据结构/数据结构/index.html","3b6e8a6c524c960d435bf5c8c2c622ee"],["/Research/英语/考研英语作文/index.html","ce50572e41bd662f2b7bcc4ce58bbd65"],["/Research/英语/考研英语词根/index.html","836f69fbb60a815c9254e61c970868bb"],["/Research/软件工程/PseudoCode/伪代码/index.html","3bfd47918bdd27cb7f4c1f44226639b4"],["/Research/软件工程/中南大学软件工程考研题型/index.html","8e721871b1c8471c62577cba86602b99"],["/Research/软件工程/软件工程基础知识/index.html","10c63f38b996522fd31952e2752c10c8"],["/Software/Anbox/Anbox/index.html","b609676ec2cd2171c40490e098308b4c"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","44652a0c3b5f4f51779dbd106ae666a0"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","3c5edabb7fa2bff5c3938cd3a4604f4c"],["/Software/Office2019/Office2019激活/index.html","5ae72fa71e97ff888ac3ae5b296907b2"],["/Software/Pycharm/Pycharm激活码/index.html","1c4aa76f9192cc50f64273f6e75b55d8"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","d171b2ed80aa66da318d457897f0a6b4"],["/Software/UltraISO/UltraISO/index.html","7ccbe2890f57a3bd9c903c4289cf3f28"],["/Software/Unity/UnityHub许可证手动激活/index.html","5d74fa717818d58ad04bbe89633c903f"],["/Software/Unity/Unity使用技巧/index.html","cb5057fd2a21911cd07c03e7f2bf0a49"],["/Software/Unity/Unity动态加载Prefab/index.html","0c5014870054c366266181fdb174dad2"],["/Software/Unity/Unity的Canvas组件/index.html","19d638a47c4737ed04c1c76cff201727"],["/Software/Unity/Unity问题归纳/index.html","535f33b094a4b1152e0f6c62c51d7db2"],["/Software/VLC/VLC使用技巧/index.html","84a468efece739cce25382241609a3f4"],["/Software/VMWare/VMWare/index.html","f759bb7a2ea63e6925507d298d47dbb1"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","7d4bc3ba0ff1fcae1cd12f5fed87f5b9"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","d56e61ed5d81d795cd7d817cbe395a86"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","ce4fe7c8c617157332d64e4bc9e53ab9"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","ed55ac869033c6e0a3f3329c6798eaaf"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","eb8aae100da3b6e5435a4f03c84fa86b"],["/Software/Windows常用软件/index.html","f0d408ac2e79eac7e533c11764aade63"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","9e27a1628a0ad431cc263104b70c021e"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","289f15e95a638da29323d68b58f6f64f"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","8170ed3edfa62da71e02ec389dcf143a"],["/TechnicalResearch/Base64加密原理/index.html","23157e22bebc1ecec829f886e2601022"],["/TechnicalResearch/CDN/index.html","5b31ef533a654fd6215570d9942eff46"],["/TechnicalResearch/Git/Git/index.html","ca444016d9166a920d17b2e2b77f928a"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","b81cf337c7135d516f4dcb386795f11b"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","30a0b95bbf321309d64709b92b186601"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","514001abe4c6e92e9563b3e2827dac83"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","e6006f107928b4a724c9b56c9e34af84"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","df5758c98a5e57f133d3f1d333991208"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","ea0542fa941e00a065b0e09c7f3afea5"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","db6973f54d02ba63d495870c75051d36"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","0461496678dc8e0b7eca35182a9a6bb4"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","082b0ba6b4597470a6137c29511f4f28"],["/TechnicalResearch/Java/Java基础快速入门/index.html","dfc9e7eb3689df3651d3e09744b46094"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","dae329d20e35b0408b8898e59ca0c4c1"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","aae5abe22345263ed39e5c09dcfb2fbc"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","392e3f9fd1ac1b1325d5166caab5b455"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0387b876b35676adcfb6b887cb586552"],["/TechnicalResearch/Python/PythonExercise/index.html","3f29a48704bbbb6629b44ff067f2838f"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","cafa198e1883a312d99cf08134cd3fbf"],["/TechnicalResearch/Python/Python问题归纳/index.html","66a3427f18e426169504f513b082a93e"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","82ac485aa49ee8e527985ab522b6f295"],["/TechnicalResearch/Regex/正则表达式/index.html","427ab15d22343d64a58f43463921eaab"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","6748e2baadc15ad352074a15e917bacc"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","380ac2cafe05c6fe706aaab9e7d3d886"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","c2e42d3e234b900a61751baf8ba540dd"],["/TechnicalResearch/服务器常用端口/index.html","569b5a29bee63d7abf6a366e267144f6"],["/Teleplay/亮剑/晋西北铁三角/index.html","0e3430ca70d06dc491619e8a1ba9697b"],["/Teleplay/仙剑奇侠传系列/index.html","a55d6ecbaa8aac045f6b48ac733c7d7c"],["/Tool/Music/网易云音乐/index.html","7382ca0a645d440ab371473452b6c86c"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","deda1c7e07c60845096d0edf8c0b7cb2"],["/Tool/百宝袋/index.html","1476ddbc9895d4e9282efffa4280ce4d"],["/about/index.html","e0f1aaff68933824961ef1f13516d0a1"],["/archives/2013/10/index.html","190798fcf049f92f5e4a2eb20a47c52d"],["/archives/2013/index.html","ef2fbe1eeb6b31cafa61e40a295af99e"],["/archives/2016/09/index.html","e2c68c1703c28647dccff9fa4e186869"],["/archives/2016/10/index.html","ebc54a34a83ef48a30e2cf7d60418694"],["/archives/2016/11/index.html","48886776f9947844908dfa9ec2b84552"],["/archives/2016/12/index.html","cfcc77e3712937c32192b6349c89e194"],["/archives/2016/index.html","60412417fffffa428e6988677ea2bf3e"],["/archives/2017/03/index.html","8bd8c4e0e547787491a5be721d26b3a5"],["/archives/2017/06/index.html","ca68e81647f7475878b7f77eba530aaa"],["/archives/2017/07/index.html","67f4ae5eaa0189dd5a7b6ce4e66c98dc"],["/archives/2017/09/index.html","a99d9cdd6a7e7e29e4af07a335597aaf"],["/archives/2017/10/index.html","7681dca97f8ac588027794b7fed73dd3"],["/archives/2017/11/index.html","839aaabd336743da3d4a276efb1c2eb5"],["/archives/2017/12/index.html","41198c4cf14bacf3c6f02bef0b89e5e7"],["/archives/2017/index.html","2138bb12fd38eedc512293af7f030379"],["/archives/2018/04/index.html","23c4457b5d8370421f90c43a644798d5"],["/archives/2018/08/index.html","2b17fb5212876c73126b4483e80c5835"],["/archives/2018/09/index.html","f381b1714a5f0573adca236b8ef32a69"],["/archives/2018/10/index.html","66fd6c490787c33ded9c4c15fdbe0f42"],["/archives/2018/11/index.html","5fd4f6a003afdb0b541801e852394d82"],["/archives/2018/12/index.html","e7f84501d2644613b5ec1f5d596a83f6"],["/archives/2018/index.html","601b480220a3030ae987354cbe80cc40"],["/archives/2018/page/2/index.html","5083e42b1862488382815305cd288640"],["/archives/2019/01/index.html","e65073b10e84b7380729cc57224eb5e1"],["/archives/2019/02/index.html","da340b190582550014d746a98b285031"],["/archives/2019/03/index.html","889c325930517f7f113cd6e00822256a"],["/archives/2019/04/index.html","22ce814c764af45cc3e7e366b7d4aa3c"],["/archives/2019/07/index.html","1e480e10948243257511569f886cc65f"],["/archives/2019/08/index.html","769a04207293b5610ece4c050fea2a72"],["/archives/2019/09/index.html","ab37525965bf88ad97ed9d696a239d67"],["/archives/2019/10/index.html","3ca72498e3a520cbd5eae57d84d9cc6a"],["/archives/2019/11/index.html","037d5e09746e7eda1b440635f80abc04"],["/archives/2019/12/index.html","da6adf611f970a3815fb5746b2ba9220"],["/archives/2019/index.html","05ae5c68b7645c26b49ec974de6ef67e"],["/archives/2019/page/2/index.html","b3770f0bdc9661f3ec74e12147c21707"],["/archives/2019/page/3/index.html","9b9fa3afefc36c26c4856f7e53bd6827"],["/archives/2020/01/index.html","8c0f79d8d85e80b52e1250b184cd1bb6"],["/archives/2020/index.html","eb99adeb3901f88fd7478bed5efe8bbd"],["/archives/index.html","cf40bc92037100bde9f083132c3377a4"],["/archives/page/2/index.html","33e30642609b315f6d4267410ed4acfa"],["/archives/page/3/index.html","8f04f4c2f1f6efd5fcd617890a70e0d2"],["/archives/page/4/index.html","3c4746675ae2d370b7c0e08eabe4ed2a"],["/archives/page/5/index.html","a54f9447824caa32137af2bf4e75d69b"],["/archives/page/6/index.html","db05f29f321b45bca628cc5e936bddbf"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","1eea72a96d6592e496344a2fc6a14a5e"],["/categories/Anime/index.html","776a1fb20cbb0408b3a390c0a1d0bdd2"],["/categories/Anime/宫崎骏/index.html","da718b5b6ae3a9c66161fc832f84b04f"],["/categories/Computer/Alienware/index.html","5c47cb4199364057d616351b2bcf7145"],["/categories/Computer/index.html","94b71a3f5d2f29057bc62f2aa9e84d0c"],["/categories/Daily/Hobbies/Guitar/index.html","73d7231b7211c5afa99357d209150c12"],["/categories/Daily/Hobbies/PersonalDiary/index.html","5a35ec90f8a5a90935f7c0a8f1108741"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","1245ea124fc2e52185e7951d38fe3885"],["/categories/Daily/Hobbies/Photography/index.html","9bb37eb2abc3fbffa8831f176fe980aa"],["/categories/Daily/Hobbies/index.html","e7e5b101c36936faec6a64a79f1e3210"],["/categories/Daily/index.html","083a0d57f728f34372e3180232d89ff7"],["/categories/Daily/个人所得税/index.html","ad5ee31651b07a50fdf888f8532674e1"],["/categories/Daily/五险一金/index.html","6f53b77b658950cb3143dee058e6b957"],["/categories/Design/index.html","2765dae2ef950683c03021990f42348c"],["/categories/Game/GamePlatform/Origin/index.html","ecd719ea8b263f90f26ae196825316bc"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","8c3b87131e411a7bc146ca0f5a973b27"],["/categories/Game/GamePlatform/Steam/index.html","01f871e46a3a76d8ce6fb9a9abbe6922"],["/categories/Game/GamePlatform/index.html","63a28728bfbc82e3c252ec16a5a4581e"],["/categories/Game/index.html","bd8e143a3b3eb2f99474f29b2b1268a3"],["/categories/Google/Chrome/Chromium/index.html","abb41ff8181933e93cddc04f40a1afa3"],["/categories/Google/Chrome/index.html","340132ccbdb6c29dc273c7be59fa042e"],["/categories/Google/Google搜索/index.html","80323308f1e9bfa16373c11e8092ee8d"],["/categories/Google/index.html","0639cae0213c4a02c6666777b07f2775"],["/categories/Hardware/HardDisk/index.html","1949ad0b7342b7ce6d268d3e8a166419"],["/categories/Hardware/Router/index.html","e4377708fcf2fa56b97bfe3be59cc5b0"],["/categories/Hardware/index.html","587816e6fec0955da789d9a5c6f322be"],["/categories/Interview/Python/index.html","f8dc26011c5834004e027981a495a75b"],["/categories/Interview/index.html","c12bcdcc7cb96066bece4bcf901e4265"],["/categories/Movie/HongKongMovie/index.html","a64bb422e335805308afeb6f137b1a83"],["/categories/Movie/index.html","9851744a91fab8c4025b921216d3cf47"],["/categories/Movie/小王子/index.html","a3b6a3e39c9754b00b4a9ca4087a9fa2"],["/categories/OperationSystem/Linux/Manjaro/index.html","be60378971fcbb8e5bfe79fc3d35217c"],["/categories/OperationSystem/Linux/SteamOS/index.html","199ae9cf14931b233217a5682bfae89a"],["/categories/OperationSystem/Linux/index.html","94e01a75d8af81518fd581eb41e115ea"],["/categories/OperationSystem/index.html","d95d32ce7a8a495b12e7d458b2b0955b"],["/categories/Research/Math/MathJax/index.html","204022dd16f0d91eafe4b0bde3274200"],["/categories/Research/Math/index.html","6401d43ba539792b9af9be4001d4c4b6"],["/categories/Research/Math/线性代数/index.html","7b56bfb770fc7dda6673f3dea8e26534"],["/categories/Research/Math/高等数学/index.html","3a21e30078ea6a5b84e233b1ec52fde1"],["/categories/Research/Memorizing/index.html","71731f24519f4d6d026a84b248a70291"],["/categories/Research/index.html","6c24753415a3fc04942fb4aee89d5e19"],["/categories/Research/思想政治/index.html","e74f4e4a94d057f5c95710e11a0fb8ec"],["/categories/Research/数据结构/index.html","495ebab5b97411a2ae941fede8e08c93"],["/categories/Research/英语/index.html","e6e1a31be1496717433af8206923b841"],["/categories/Research/软件工程/PseudoCode/index.html","74bd485d37c7a672b1f34ed268ce07a9"],["/categories/Research/软件工程/index.html","e8b03c909e4fe67321d80fc263d6d210"],["/categories/Software/Anbox/index.html","c80a509784cd639ef9a4f1c3a5cf506f"],["/categories/Software/AndroidStudio/index.html","8ffeb4ad47c1bed44a70089e17dac550"],["/categories/Software/Office2019/index.html","b6b3ab3a5f5bbbac7ce89d3d13906c5b"],["/categories/Software/Pycharm/index.html","6f4fb7ee0105017605af42c71714e281"],["/categories/Software/Thunderbird/index.html","1d66d4a81fa75a673248e7d1f8b022e7"],["/categories/Software/UltraISO/index.html","07fed91bd1f271b43a33310cac4768d9"],["/categories/Software/Unity/index.html","eef1cb9977fc167119be9c171941775f"],["/categories/Software/VLC/index.html","cc9b0074d834144bb5b83b7f6dc954b0"],["/categories/Software/VMWare/index.html","90871f02e77828aed8f3ae6814efedd5"],["/categories/Software/VisualStudio/index.html","f176f2fe6678e8735467a021e0f67da8"],["/categories/Software/VisualStudioCode/index.html","a86fc8826bfe0832ad59ab0774fe3728"],["/categories/Software/index.html","fb0bc09860c272ca5daa527ba2c6b016"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","1a998a77e43b92dbaf633589db34230c"],["/categories/TechnicalResearch/Android/RxTool/index.html","6a5f4321fc1db5375f57db5e1c191c6d"],["/categories/TechnicalResearch/Android/index.html","7bc7726e9fbf33147702f44b5752cf82"],["/categories/TechnicalResearch/Git/index.html","682bcc0a3bd91260eb55fe6dd9ef2ba4"],["/categories/TechnicalResearch/GitHub/index.html","748818753e4d47fdbd24a445dd6e7e19"],["/categories/TechnicalResearch/Hexo/index.html","ff44a06d05a640416c24fb2961cbdcad"],["/categories/TechnicalResearch/Html/index.html","6f0fefde0c77dbbad82e8d86f6a4cb57"],["/categories/TechnicalResearch/Java/index.html","a932b39ccd1ccfe8905a733d695a8845"],["/categories/TechnicalResearch/JavaScript/index.html","8e70e5090ed0e9d95708f4e7ee2d640e"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","9c6f4cf5891039c24c4e1439e9180a39"],["/categories/TechnicalResearch/MachineLearning/index.html","036c269fde314dabae6cb923ecb2f4b3"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","1746b92a69e756073d07e62ea5bd8ce6"],["/categories/TechnicalResearch/Markdown/GFM/index.html","9ef0fa06b6655ebd6628753fac42c1de"],["/categories/TechnicalResearch/Markdown/index.html","0a7f6f353b7d6215bc7a5a850bff64b0"],["/categories/TechnicalResearch/Python/index.html","ba8d57589960a9f08b729d7f7061bc2f"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","a9050344b8ab96ee9a2e432a3028fa3e"],["/categories/TechnicalResearch/Regex/index.html","e71a3eea5e2788eab2c73f9b0dd5c0ba"],["/categories/TechnicalResearch/Spider/index.html","d53ec3f03279f76b60dc95518ba694f5"],["/categories/TechnicalResearch/TA/index.html","08694ce31e308b9a614e1dd40c25d0fb"],["/categories/TechnicalResearch/UnitTest/Android/index.html","82c094b366717282d62e18895b1f1a7b"],["/categories/TechnicalResearch/UnitTest/index.html","f2923ca7b9bca91bc864c97ffe60d378"],["/categories/TechnicalResearch/index.html","a0bf2a45cf5c6580d0e6b72fc110eeeb"],["/categories/Teleplay/index.html","7169255fb46e2281959413d3deb84c38"],["/categories/Teleplay/亮剑/index.html","aa22442368311aeab168c8d1edfb31c2"],["/categories/Tool/Music/index.html","453725bd31c093265e18fdb340938942"],["/categories/Tool/Wallpaper/index.html","51654bf722052e571bc01ca3e1951a4b"],["/categories/Tool/index.html","478e2519f6bc6a8f4c670b4c7c32e8c1"],["/categories/index.html","89de3cba610bfa2e934a5526a5d3ba60"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0444cd3728c90cffa356fa79f1a4180a"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","d225b72b2cac84cfaafee428990ae9b6"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","c2564aa48e59db89acf151219639a878"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","ab4805b836f0e9fe5d70673a32b01bb5"],["/movie/index.html","52fba4c5528135d11c66114393919159"],["/music/index.html","1072316cc6e3046bd5f99153cea2933d"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","328f376caf33001a06519aff816e316f"],["/page/11/index.html","04d0d5619f19f2843341cfe7980f9613"],["/page/2/index.html","d34b3fcf04156179c576367a1bf98a53"],["/page/3/index.html","32150f72c0c149266c5de8f15d5525b2"],["/page/4/index.html","4789f1170a565c58838bbb18e1e70bbe"],["/page/5/index.html","e1774b0f3636f9a8cc0e92310e5270d1"],["/page/6/index.html","4725fbcb3de1ab004b59d22702f7bc2e"],["/page/7/index.html","4cbe8709f3254fe5761051e6af54696c"],["/page/8/index.html","e8d883842de1910a09efd2fb89c5f120"],["/page/9/index.html","dc9862918d45653591c317d53f9ff1a2"],["/tags/ARK/index.html","d9dc22bffd36e81686266d80c40caf38"],["/tags/Alienware/index.html","068c32f3769caa492d36ecbe8415768e"],["/tags/Anbox/index.html","44493ae3476ab596f194d48982dab0fc"],["/tags/Android/index.html","c8e361d3f8b2744d6eba269acbfb4d80"],["/tags/AndroidStudio/index.html","fd678d8bff5e9c350990204d1d55de84"],["/tags/Anime/index.html","ddc658dd99ab0690ae86eae0373faccc"],["/tags/Base64/index.html","2bc79cb20fa6c635da429f2ad858d231"],["/tags/CDN/index.html","78afc61431b821a6fcb48e765ce0d66b"],["/tags/CSGO/index.html","46a78640f2079d84808744ce87aafd9a"],["/tags/Chrome/index.html","330f01d1bd5307aad6fb4a3115a340ea"],["/tags/Chromium/index.html","d6dd603e8846f6631e47c1047da582bc"],["/tags/Computer/index.html","663b8a5e21c9fdd302cddbe161f9597a"],["/tags/Contributor/index.html","65550d00d803c7cb84d098629126b570"],["/tags/Daily/index.html","207324bd9185494003c1721d455f7634"],["/tags/DeepLearning/index.html","cefb4ab57562f71727ad601f26055a70"],["/tags/Design/index.html","f55cdb6edd60324a354452caabf4d7ac"],["/tags/Emoji/index.html","23a974fb5c8e39bc960ec57929588e2f"],["/tags/GFM/index.html","be4594877ea3ebd9839e21fea004b9b7"],["/tags/Game/index.html","9ec059632a369bdfcf0572fbbbdfe75b"],["/tags/GamePlatform/index.html","98a0c11ec47e362ac8deea3d3d0e97de"],["/tags/Git/index.html","9fc782871774c6f173ac2af5b90e55cb"],["/tags/GitHub/index.html","d2233f1e9af75492648a6b03f09c9f81"],["/tags/Google/index.html","07f3d8e245caf2f4a16722ffbb438186"],["/tags/Google搜索/index.html","e27d54c2d93bf9083b70b0456d31f529"],["/tags/Guitar/index.html","a1af571e15618180ee154875d030894d"],["/tags/HardDisk/index.html","4342d794a4d1a205a7a307ea2806d0de"],["/tags/Hardware/index.html","a42dc3b711d4dac175fe2d2e6f926286"],["/tags/Hexo/index.html","11b52b335f9be2a4467d396fe075e89c"],["/tags/Hobbies/index.html","fc7bf03d4cc5e524668765b56bf8acd9"],["/tags/HongKongMovie/index.html","ad8a3acb0005fad6d62da42f7fb06a6d"],["/tags/Html/index.html","8bda27c98e59d8947e2fcd6b790afffc"],["/tags/Interview/index.html","3a3c6bebb48efd725895e54d962c0f18"],["/tags/Java/index.html","5f97a38a4f594a38b2379689f1e2d76d"],["/tags/JavaScript/index.html","58c8b4789aaf36dd496c2eb0c02291ad"],["/tags/Linux/index.html","4276758bc9cf62d5ab3ad8855601e571"],["/tags/MachineLearning/index.html","675577d10743a66a060b78f9c5acfe54"],["/tags/Manjaro/index.html","e30308febe0b427d2476664ce7ff3266"],["/tags/Markdown/index.html","670b054bb6874be934b6b9cb27fd94ef"],["/tags/Math/index.html","072a81dbcd99213db4b805f72ec05365"],["/tags/MathJax/index.html","9f8ebfbae053f125fa3cf20f72609e6c"],["/tags/Memorizing/index.html","5729a43172054d82a568de7ec96f9585"],["/tags/Movie/index.html","5ad94de5f66cbec134a0c839d73f6d9d"],["/tags/Music/index.html","9d4e11c5a7072934c72d33a4c58094bb"],["/tags/Office2019/index.html","ecebc7f4843cee8d309d64c0105d8a4b"],["/tags/OperationSystem/index.html","3d2c6a57e0c0ca68070c6688df981917"],["/tags/Origin/index.html","18ad301e2ac7a8591e5e9645bd8a00d3"],["/tags/PersonalDiary/index.html","b7b0a6755d90e12ebd3bdfa9520a6379"],["/tags/PersonalPoetry/index.html","7851570253eff5b37ea630058412f6b4"],["/tags/Photography/index.html","534b973cde159ab2a7c80bd9fd3e4ef2"],["/tags/Port/index.html","8a12cdf46aa8cf6f36c62f417912cd3a"],["/tags/PseudoCode/index.html","d8df670681f12652e29e9873f560b6ae"],["/tags/Pycharm/index.html","8169fe1e439536a6c68d95ad2132350e"],["/tags/Python/index.html","61b930658795b3914c07c007f173b5ab"],["/tags/ReactiveProgramming/index.html","ce51641b289ab22f00cfd6249ca4cd05"],["/tags/Regex/index.html","7125c8612b7716b1cef2436cf269cdd3"],["/tags/Research/index.html","88205b552612413a68814574d5078f63"],["/tags/Router/index.html","c052472264efcab175409b6b725846db"],["/tags/RxTool/index.html","6acc59303e011e409b2f3457bac44492"],["/tags/Software/index.html","7a8cd9bce9f66a4d45078ab2dcbe0ff4"],["/tags/Spider/index.html","c2b10780babda3506119a4bd8b73d062"],["/tags/Steam/index.html","9ee0562967dd91070ed13e07ce8f2808"],["/tags/SteamOS/index.html","43f2c58b136dba8429b2c9137358fbe7"],["/tags/TA/index.html","5164d40148e9dead7be8a6986585ed84"],["/tags/TechnicalResearch/index.html","973f158aa466be937679a777f7d64fd7"],["/tags/Teleplay/index.html","564d2cef62bb9567138cab42fb0db912"],["/tags/Thunderbird/index.html","762f6707f55d3809d60b93e8577a46d0"],["/tags/Tool/index.html","58566226767ad2efd860aa7ec576e462"],["/tags/UltraISO/index.html","dd12d5b4496582f55ecd7671c20b02c9"],["/tags/UnitTest/index.html","bfbca475d250f732fdea3bc4507a54cc"],["/tags/Unity/index.html","5a974400ed624ce6357239973b208393"],["/tags/VLC/index.html","92c8b980acfe570928c6a47eb1dd3ef9"],["/tags/VMWare/index.html","1223baa0791dcdb8f264702dbb90a65e"],["/tags/VisualStudio/index.html","214e75c23be6db35da33b253af5342cd"],["/tags/VisualStudioCode/index.html","616909eecb55765832ec7373f1a9c5e9"],["/tags/Wallpaper/index.html","b7ae147444c2d3845de1b511e9f5d088"],["/tags/Windows/index.html","1a7242905a7ed27973c2602022e457f4"],["/tags/index.html","3aa8a5c0ab3063e8188cfa99ca69f6d5"],["/tags/个人所得税/index.html","4ebf18845072bb79bdef01148083d626"],["/tags/五险一金/index.html","3201a45418871d1a8facc8545a5a8c48"],["/tags/亮剑/index.html","29321178fc6088f8e1c81cecaf8e1491"],["/tags/仙剑奇侠传系列/index.html","8ccab335434103d9f18d878412edcd21"],["/tags/千与千寻/index.html","0f7dd4a3aad7c14ca7deca46de69d759"],["/tags/宫崎骏/index.html","7c1ed9b76f263d5ffb2d18d545def7d1"],["/tags/小王子/index.html","d238e11c7d9165ef0dd35551def7a013"],["/tags/开心鬼系列/index.html","7ec3c499a720cba4fc67748c1b7b25cf"],["/tags/思想政治/index.html","262233605ba735a370a620dd6e576c96"],["/tags/数据结构/index.html","74af98319224586af8cdde6ac49e61c2"],["/tags/线性代数/index.html","81edbd857eb081d8577b26f8da631db1"],["/tags/英语/index.html","9cdf53228dbc0b607598b9fc1306bb5d"],["/tags/软件工程/index.html","3498364931483be86efb26fef00e2a7f"],["/tags/高等数学/index.html","a1c3cd0a4836f61f93096b3e23af336a"]];
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




