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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","70708041bd1a92aacbd66d4dc0fc3d5a"],["/Computer/Alienware/Alienware更换电池/index.html","20a3b39d7d1144db1a3f9e0b2f7bab79"],["/Daily/Hobbies/Guitar/吉他入门/index.html","ba44d34739faacf67a928bdd2013aa59"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","e661e615b01a3031479b178554332c0e"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","998a6a5be1743285ab9d2310415c1577"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","08052b205f3928c23de32aa20ddb66c3"],["/Daily/Memorandum/index.html","2893e6e2a69c46b8952e0b6f392808ee"],["/Daily/个人所得税/个人所得税/index.html","f6fccb3bc3fd71de854551912b93ada2"],["/Daily/五险一金/五险一金/index.html","75a97c5e129d785102a51d06c196277b"],["/Daily/生活小常识/index.html","56093fd95b09437127a11917f061690f"],["/Daily/网络用语/index.html","c58fd64efd5609ab05de2d057fcf873e"],["/Design/设计用户界面的注意事项/index.html","ccbd4f152e3f3caab45868ceb8beaaa8"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","71aa4b938498870eb63b6f043ee0eb2d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","9c45ac4e70fbd01d19277cd02ea55a2f"],["/Game/GamePlatform/Steam/ARK/index.html","4f328f2b2251e7ee2a81256b709feb44"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","cbb7dfdf365dada481e0980476ed2b4c"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","b140be2a101e1615fd390da4763b0796"],["/Game/GamePlatform/Steam/Steam库共享/index.html","945522c15b409396f4e804f5d8c92bef"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","4b357c609e4c272fa95f77b2b3bbe4c1"],["/Game/如何独立开发一款游戏/index.html","6c78f60c0b3fc4f387041dfb94eda09f"],["/Google/Chrome/Chrome上网助手/index.html","86848f17a729d1ca9d9c6bbd49d9a98f"],["/Google/Chrome/Chrome使用技巧/index.html","8be58b40bc555da58a11435d89ea908a"],["/Google/Chrome/Chrome插件/index.html","a65b8ce349d8b1390cdc91f72363e461"],["/Google/Chrome/Chromium/Chromium/index.html","81b8e2b8d94a598503434dda4d36ac0b"],["/Google/Google搜索/Google搜索技巧/index.html","cfd8f037819385aad4516df7ca1cc094"],["/Hardware/HardDisk/硬盘分区结构/index.html","2fa73e5fbf26197dd137c7a2c4264de4"],["/Hardware/Router/路由器固件/index.html","e284ba9a9793115674af97c82e2de322"],["/Interview/Python/2020年字节跳动面试题/index.html","373d796ac15500ecafb347e564e89758"],["/Movie/HongKongMovie/开心鬼系列/index.html","7ed958e561a339bd2254a6f0af80283d"],["/Movie/小王子/小王子电影的共鸣/index.html","c15544d16677564492922c910b40ea01"],["/Novel/盗墓笔记/盗墓笔记/index.html","07b5f29bd3fa139c3965bb3079913506"],["/OperationSystem/Linux/Linux分区管理工具/index.html","a88f9d107ff24232a6a8b40d89697225"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","93e6e4fe4f307367603031517e6f3baa"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","0e56fc6d9eb4237fb5e579545538bd5e"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","9787e3d034276c59879712acbaa11610"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","04b021522656d316c97e78a19b7c24f6"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","b49e873fcf09f8faa204c9ade3e21c46"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","ece17d9c0233c4bd40f788e00cc61f81"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","1b1437ff7986378ec4fd12d7bb678d9f"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","025d5c3709270cb37fae1e18d145c077"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","f88533df6e5eac8f8d159ee52fee29a7"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","96bb4e15cc34878a45961b07651b1ab4"],["/Research/Math/线性代数/线性代数公式/index.html","733cb496de37001f8ee3d54873619b0c"],["/Research/Math/线性代数/线性代数知识点总结/index.html","6856a9658ad145a23b83a9435230f240"],["/Research/Math/高等数学/高等数学知识点/index.html","c1c09583bcf747c353960a731cf33d4d"],["/Research/Memorizing/费曼技巧/index.html","7cc4591a1a83ba4c9f67afbec9c48041"],["/Research/思想政治/考研思想政治理论知识/index.html","9cc94bc6da748791f06bcfa2c3c3006e"],["/Research/数据结构/数据结构/index.html","74c0f98e989393398d92eb5868a117a5"],["/Research/英语/考研英语作文/index.html","887776dc80ff8cf7609b76ceef20a505"],["/Research/英语/考研英语词根/index.html","d8a82f20f268b9bee170e0d5d3c7185b"],["/Research/软件工程/PseudoCode/伪代码/index.html","dda0bfb7f5bebaf990859d189c6b09cf"],["/Research/软件工程/中南大学软件工程考研题型/index.html","1d1020b16dd02f6254b8af40fdd682f9"],["/Research/软件工程/软件工程基础知识/index.html","fd977c67d95c6c7a7eb232d0128c9c6b"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","ccdc52aa2d68c80b36476f04ecfe573d"],["/Software/Anbox/Anbox/index.html","6c9abc344f722300d714891bdb607701"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","8dd1405b7a11ea9894907974f8dd74d3"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","3b717d60d98ffa5d42922d62b504eae9"],["/Software/Office2019/Office2019激活/index.html","95efc59f9308463ed2fd3e2defcb249d"],["/Software/Pycharm/Pycharm激活码/index.html","2397a681665e926ebd76da6b0ba2d758"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","71901c6cb58f6a49120daba9b25a7b9e"],["/Software/UltraISO/UltraISO/index.html","d07a30a082a540fd107b965941687c4a"],["/Software/Unity/UnityHub许可证手动激活/index.html","818d8d043b66370665784cfa686e1dbe"],["/Software/Unity/Unity使用技巧/index.html","b9973004ec6f8e3341b56ad4721d38ce"],["/Software/Unity/Unity动态加载Prefab/index.html","55f659e8f69fc484aaadca2e647aef87"],["/Software/Unity/Unity的Canvas组件/index.html","970aa881586eebf76ce0e0392d6b9f3e"],["/Software/Unity/Unity问题归纳/index.html","e542468c17a104fe62673783ca1fad5f"],["/Software/VLC/VLC使用技巧/index.html","b75aa72b8ed54423d27e1d04d3290682"],["/Software/VMWare/VMWare/index.html","b2794f9697e5c55d9f918fa4d1693747"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","b31ed394657fa31358272a51c8f6e253"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","fa6303b969f2b43af09d8cee46c51116"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","fbb45dd2a8fcc2a8f79ac77be19eb27c"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","3eb0412a280f28308f7ca63e453a05bd"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","c5118e704ea6443cc123de8afb1ae68f"],["/Software/Windows常用软件/index.html","97ecdd6943f2461af1ae5b41c4c00077"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","f42e868e32ed3ac9365cea524c4f69db"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","7f53b260ac4acd43aed84d1e193edebc"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","1607cc50d9b4650939b6807c477f43bf"],["/TechnicalResearch/Base64加密原理/index.html","46dd9783afab60d19ab19bebf31d6784"],["/TechnicalResearch/CDN/index.html","3acd76777ada49a5664d732441d50796"],["/TechnicalResearch/Git/Git/index.html","92624774ee85b089a4b1f8ed761a2367"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","2ebcdd3c48aa2c1898492565383b2294"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","86fcce094283c85665abe05147f39211"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","df86058b954feb39b356a4279415027d"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","d7010a908c92da5e4d47f9e54c303d27"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","4ad14b253cae5d205568b92e5b99af52"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","1eb92fb84da881dc3363b03dcbbf313a"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","38610bdb71809c2b17cdc9c3a1e5b154"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","8e8a3ad573bd39aad9856b23823e566d"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","3b2a05d9df6581ea747f88430a98d46a"],["/TechnicalResearch/Java/Java基础快速入门/index.html","c036208df5843e9ca4934a5accccdc34"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","7292aca7a464f3a21133801803101585"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","e8541a5c96f1df10663dfeec09d1a5fb"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","cd33b29bb7310f033b701a5838150674"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","2788ca82f3f20e742086643406920216"],["/TechnicalResearch/Python/PythonExercise/index.html","7336f86a0d47d00ad4ae1408161b70ee"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","c403d7d67c0cbd62e7a936442d3ef985"],["/TechnicalResearch/Python/Python问题归纳/index.html","51597828532a679379e631aa28600384"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","fee0f0575883955941769704cba1ca7f"],["/TechnicalResearch/Regex/正则表达式/index.html","8050d0e09329934c68e6ef922a35f493"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","d3a76b2a3a2aed6f3ae33cf482dae668"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","f1f98a9bb133a6f2e834e822dca50578"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","e278b69b1b6f60c4d605d966d1d75f46"],["/TechnicalResearch/服务器常用端口/index.html","85065f1e527619f08a54e8bcfc02e752"],["/Teleplay/亮剑/晋西北铁三角/index.html","d31ec370090038c368e58b0bdb2f436a"],["/Teleplay/仙剑奇侠传系列/index.html","5705846f5cb36d1b2a0fab520a16d8cb"],["/Tool/Music/网易云音乐/index.html","0868c75702d15828b02c0a331f2a6ad8"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","ec291d08c50cafc726832d37a00201fa"],["/Tool/百宝袋/index.html","a7fb703700b79ab563dc9fc30f786bc3"],["/about/index.html","b45541305450e6589f3486f2d72b6d8e"],["/archives/2013/10/index.html","877bb000b71a8ce91bd626a2a4c60cf1"],["/archives/2013/index.html","9a4e99c28e19d2dd61a2475215c8a2e1"],["/archives/2016/09/index.html","88041a0db3c20b4c8be0cc635343837a"],["/archives/2016/10/index.html","3f4b4b1ee09bf7bf7a40bec069946961"],["/archives/2016/11/index.html","045d3422b3c253f022bc19068ae4b66c"],["/archives/2016/12/index.html","4f439804d0575d8cb09ac9157a730247"],["/archives/2016/index.html","ea514d01438f62546ba3e67c47753dd9"],["/archives/2017/03/index.html","91c9738f92f56a4ae92341bcc6d0bc87"],["/archives/2017/06/index.html","2fb141a081ab007c3cdaf2804baa7670"],["/archives/2017/07/index.html","14af30c0ebcea0c1689d095805761e27"],["/archives/2017/09/index.html","daa25a8fcc16551be03e9e1a16ab879b"],["/archives/2017/10/index.html","f7ca41cc1d3d7dacd3d222a441f7bc93"],["/archives/2017/11/index.html","aea178870753f1dc09cb40b9432de229"],["/archives/2017/12/index.html","4c12e30c6e5b9eb8b930658709223936"],["/archives/2017/index.html","d44fced200dd7bad13dcfd79e0217918"],["/archives/2018/04/index.html","2a53c46a0d117d012c5d6310c0d65e13"],["/archives/2018/08/index.html","576c099cd63389df03fd2422eb4e4381"],["/archives/2018/09/index.html","b20468ef05bc4ceb8bc9f8905a164bbc"],["/archives/2018/10/index.html","f8cca496dbf91d1024e70ef578830f6c"],["/archives/2018/11/index.html","f7c80c107825ad99cecb3aac2ccc48de"],["/archives/2018/12/index.html","93f65d268eb9d79c6f6dd8e8dfa03d1c"],["/archives/2018/index.html","a0bf5160e4a7d9f3949da9f8101e20e7"],["/archives/2018/page/2/index.html","afc571e03e542d1f2ab88841d7ebeb07"],["/archives/2019/01/index.html","07caba29b49fdd3d5199fb4d59b5d7aa"],["/archives/2019/02/index.html","72772c30b7d7880a737ec98d4fcae66d"],["/archives/2019/03/index.html","573d093170175fac051b33a1dea2f679"],["/archives/2019/04/index.html","58d37e31212d1eb90d7b0725347cde05"],["/archives/2019/07/index.html","1d9ca172bcd65c595a8298ae9b943dd5"],["/archives/2019/08/index.html","e5cddd68e928026784d1334684cc1625"],["/archives/2019/09/index.html","5c01db4b266223032b9b02406a224b6a"],["/archives/2019/10/index.html","b40b0d9d193430c10882fe7f559e9cbb"],["/archives/2019/11/index.html","09ee1cdb3fe8f0849dcc62a0ee079c3f"],["/archives/2019/12/index.html","880872c4047f31d454bb0a418face49e"],["/archives/2019/index.html","79c8d94c3eef5b7fd8c862620acab75d"],["/archives/2019/page/2/index.html","b00fe2d364b9b789136e7900335a2b03"],["/archives/2019/page/3/index.html","fb233a45f65047f99758d1c706edb33f"],["/archives/2020/01/index.html","bf1b8f30a4fbfb6a6c88208faef27f4b"],["/archives/2020/index.html","a37301ebfbf27acd350fd5cea3c37b73"],["/archives/index.html","9f623066da68e2ac851c668d413c7fa0"],["/archives/page/2/index.html","eca67ea534234a045cea02373b5504d5"],["/archives/page/3/index.html","16218357c2db794529544dca1b21abe0"],["/archives/page/4/index.html","d44dc9075a8701c74e215757c7b7fe6d"],["/archives/page/5/index.html","a84a0d836fc2195131da931ef22fad7a"],["/archives/page/6/index.html","0dc531e49a8e1934c4a3f81dc1625883"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","c5c2330d6588a194da5cc8939aac664c"],["/categories/Anime/index.html","90efc129c86b1594676c587ff6d7a7e2"],["/categories/Anime/宫崎骏/index.html","29bfe5e341f953bc528651a7309ce991"],["/categories/Computer/Alienware/index.html","bd5977eda3f53d5b05b611dae916ca00"],["/categories/Computer/index.html","0f583daa8db575ca8ce2d145c6e5d31b"],["/categories/Daily/Hobbies/Guitar/index.html","0d1fc7aad728c4fc193f33a7fde621c9"],["/categories/Daily/Hobbies/PersonalDiary/index.html","e5cc14fe1a6cbf126e295c257dae494e"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","64e37a0e853eb91ac1d7f518248ca6df"],["/categories/Daily/Hobbies/Photography/index.html","2eeffd4e7674c8f09e1d115916d2076e"],["/categories/Daily/Hobbies/index.html","46fdad777241c6c19577e6d0717b508b"],["/categories/Daily/index.html","6532f70e2313042a4f8a5530ae465a54"],["/categories/Daily/个人所得税/index.html","1d1bff1c05eb4a896cf196ddbd0c0797"],["/categories/Daily/五险一金/index.html","ed8015dc453b5f62c40a3cf031178402"],["/categories/Design/index.html","3c0291f6eb9dc0b7474b383d01de7d3f"],["/categories/Game/GamePlatform/Lutris/index.html","df6b91d3b19456c4254835ff252f0e6f"],["/categories/Game/GamePlatform/Origin/index.html","4d5079f3031f90dd95b6953f7561cac7"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","a9b64b8664ab2c3580aae5ba0c5b1877"],["/categories/Game/GamePlatform/Steam/index.html","14ae14cfbe4a446a236dd780986b1b6b"],["/categories/Game/GamePlatform/index.html","7e26e0103bdf1119e0c9fd99970a75ef"],["/categories/Game/index.html","3aac4af769a814d95bd17c7b29260f8d"],["/categories/Google/Chrome/Chromium/index.html","13be448cf329c31190e4659f4945298a"],["/categories/Google/Chrome/index.html","df66af255aaab6ef81e888c9487c3ac6"],["/categories/Google/Google搜索/index.html","d86c16d3c6cb3f5858718d3aa3c361a3"],["/categories/Google/index.html","c59307548e7a4916f56fe48c30126fa3"],["/categories/Hardware/HardDisk/index.html","9fa580cefcd9791a4d89ddcb801f06f9"],["/categories/Hardware/Router/index.html","f3e482e133ef199ca74dd5981f91e572"],["/categories/Hardware/index.html","343cf410afcf0b9f0b8ef4955aa6dfe0"],["/categories/Interview/Python/index.html","af594aec1cc840e6a66b0c6d5dc6db35"],["/categories/Interview/index.html","b4652c45cc39fe812aa596d8d269c053"],["/categories/Movie/HongKongMovie/index.html","fd2fe37c32bd85b0177aa96893268a11"],["/categories/Movie/index.html","1a6642e606db076e4a82c9a189820416"],["/categories/Movie/小王子/index.html","adbcccee85fe4a7d019a683affadff23"],["/categories/Novel/index.html","13d5606a70c501e8738a8c7cacc85552"],["/categories/Novel/盗墓笔记/index.html","8ae47495da931c9c9075a9d70c0c835a"],["/categories/OperationSystem/Linux/Manjaro/index.html","f18b5ccf6628b54deb643e3b39a12331"],["/categories/OperationSystem/Linux/SteamOS/index.html","68e64291b242f7228563f24a16dcb199"],["/categories/OperationSystem/Linux/index.html","1bda07a89243791236620b9d82a91586"],["/categories/OperationSystem/index.html","707e3952a594136575cdc78baba63cc8"],["/categories/Research/Math/MathJax/index.html","b6422679eeebecd8f28ab621f5f9be9b"],["/categories/Research/Math/index.html","bec54e29e76a23f011107c62b65fa0d1"],["/categories/Research/Math/线性代数/index.html","26a3c777fe7f50bd43adbcb378cf57d6"],["/categories/Research/Math/高等数学/index.html","48bae4beec2e427cfeefefcf49ba102d"],["/categories/Research/Memorizing/index.html","1d062aeb72e5c23fac3ca1e5dd20bf8c"],["/categories/Research/index.html","849fa0c322ded24d450341953cf8cf3d"],["/categories/Research/思想政治/index.html","f68fd06f9b23fc7eb43cf7122f6964f1"],["/categories/Research/数据结构/index.html","d7e4410ef55dba18ed9b1edffd0a9bd8"],["/categories/Research/英语/index.html","0458635a03ddfb96ed233cbbc9d81964"],["/categories/Research/软件工程/PseudoCode/index.html","09fca34606915e068020915dd4bfce03"],["/categories/Research/软件工程/index.html","8cbfad8fb1af76a76dc42894a7791e20"],["/categories/Resources/index.html","22289d68bf596abf52dfdbc13cfd6d27"],["/categories/Resources/游戏资源/index.html","a5bf233834e2f9659ef7fb14d724e917"],["/categories/Resources/游戏资源/微元素/index.html","85d55d4bf674b711e7b78ca54cbe404d"],["/categories/Software/Anbox/index.html","46e0060f65dba373906e0c43020425cc"],["/categories/Software/AndroidStudio/index.html","5d634f7c26fd9b3dbc9305543447a9a5"],["/categories/Software/Office2019/index.html","a7527d1f6deaf1c3a1bded8a3c399a61"],["/categories/Software/Pycharm/index.html","caf1dbf3aa670bcc0420011b69022b3b"],["/categories/Software/Thunderbird/index.html","d9e9649c6f27dbbd7d65b5beb161b3ae"],["/categories/Software/UltraISO/index.html","20ab4aab20093b8de5e420e6146fcff3"],["/categories/Software/Unity/index.html","3d16796d72e2997debd190f6d4853516"],["/categories/Software/VLC/index.html","1e19e79eafad7095c897a42566b72c0e"],["/categories/Software/VMWare/index.html","da12497d694cefa0eb543ecf89b7807f"],["/categories/Software/VisualStudio/index.html","19699479d02751b8e18019284a216059"],["/categories/Software/VisualStudioCode/index.html","bba1dd0b2e893c63562063aa96889143"],["/categories/Software/index.html","b7559128f920354f07ffc332d969d92a"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","eb78468c20f1b55cf12b23f70c01906d"],["/categories/TechnicalResearch/Android/RxTool/index.html","1ecc797b9c3e6ed570b69d1bfa340243"],["/categories/TechnicalResearch/Android/index.html","c16f7c102c425edd87ee78de2b3f5ce4"],["/categories/TechnicalResearch/Git/index.html","57299791e152dd9319e44221e51c5c8f"],["/categories/TechnicalResearch/GitHub/index.html","5697bf4c724c63cc0e54e886780f30e1"],["/categories/TechnicalResearch/Hexo/index.html","e2774d3ca72633a478ee0c02489fe575"],["/categories/TechnicalResearch/Html/index.html","ad7b8f4e19a50a8c70998c5e54256952"],["/categories/TechnicalResearch/Java/index.html","989c725b64e2b3b48dfafe28fa73c6f5"],["/categories/TechnicalResearch/JavaScript/index.html","203a364325826f86ab7ea0f989576ada"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","015ea9a384494a47efea9c1bf1b1d13c"],["/categories/TechnicalResearch/MachineLearning/index.html","2e1afc3412291a5686a7f30b44f37682"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","95792a38bc7331e5c929f7ee1bdf3e01"],["/categories/TechnicalResearch/Markdown/GFM/index.html","fb9f5e9bb5a1b16b7dab4ea3f6f19597"],["/categories/TechnicalResearch/Markdown/index.html","a8d81c0ecc7e11f9357770ab2471f42d"],["/categories/TechnicalResearch/Python/index.html","ecb11108239ed7e961376938dcf0f4e9"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","9e4f8d61613ca37c4c1bee25ce76da65"],["/categories/TechnicalResearch/Regex/index.html","cc5b31eb3e622b33c3b56865c4c1d487"],["/categories/TechnicalResearch/Spider/index.html","4754e2e6625a6192e194708bc2756907"],["/categories/TechnicalResearch/TA/index.html","3a161181189122f218aa012d6d784018"],["/categories/TechnicalResearch/UnitTest/Android/index.html","c5ec0c810c72936204b340636a3c8a84"],["/categories/TechnicalResearch/UnitTest/index.html","fb26234d722c761eb1ded7cbf63f98ae"],["/categories/TechnicalResearch/index.html","28c0e907d4aa80ad554677439524c322"],["/categories/Teleplay/index.html","8add5a22b6df8087fdf0f592e334f422"],["/categories/Teleplay/亮剑/index.html","634e6682a140b88de498525caeb6379c"],["/categories/Tool/Music/index.html","af306e4dcb809cdf1ec7c3f8596a3500"],["/categories/Tool/Wallpaper/index.html","da6882861da27569ea9d49cba5a2178c"],["/categories/Tool/index.html","02945424b7a34ef9159b085bc0916b5e"],["/categories/index.html","0d1e7306b13a1fb00c257fe999598f9e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2f9c7d927f7ae6dc8af7a05b5838d35a"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","9c49fa5f96ce01da92a9e94672b2e7bb"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","354505c2f6ad2e32077e8322f3f3ffbf"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","ccbf5282f4ce77b33b21ac3cad90cf3b"],["/movie/index.html","b0ed44ca3b599a2d1511802c5937c37f"],["/music/index.html","d947d6b27e546945d2b25efbff79d89e"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","2cecc3ae7d18cef1e81e784551b306b4"],["/page/11/index.html","8859340334f2b29dc183cc2334531ddb"],["/page/2/index.html","b05689ba58aeaa64cda5a2a26df379ec"],["/page/3/index.html","dbde43fcb631082c8663ef160491013e"],["/page/4/index.html","773fcf45c6b184b6eaa2336921b138dc"],["/page/5/index.html","02fcbb1c6dada87615c7822a1eed8225"],["/page/6/index.html","cb07c1d47781656b604db551493aa619"],["/page/7/index.html","42c832f2b5e878052267a7bf82f0188b"],["/page/8/index.html","38856ff822413660df8cc45654df9f32"],["/page/9/index.html","e0ab2b885f65ce5c2f4ebdf25be26874"],["/tags/ARK/index.html","a7c30eb3188c34e2a5fa9848479664b0"],["/tags/Alienware/index.html","acf3307d872a78ef34e1965c2af48cf5"],["/tags/Anbox/index.html","c247e442668fead722f864cf27bc7372"],["/tags/Android/index.html","54ea08cd98bd322ca5c5c489a0e6c17f"],["/tags/AndroidStudio/index.html","0dc97e1c7c4582b3feb25102fec580fc"],["/tags/Anime/index.html","400771bfe1d029ac88c29096701f1c41"],["/tags/Base64/index.html","4f4ae86565343d26df7700ae2b1768c5"],["/tags/CDN/index.html","5924e78c3018d5cab5fc6098d5143279"],["/tags/CSGO/index.html","71be23772010848226eb68f1bd68553f"],["/tags/Chrome/index.html","79aace5ccb5f582db77a2ee514802cdc"],["/tags/Chromium/index.html","cf1030be59829ec8c3ea66a39049888e"],["/tags/Computer/index.html","a534b435026026d2c520501ff7ee3667"],["/tags/Contributor/index.html","2510c1afa91ca6328cb8b66f63347f20"],["/tags/Daily/index.html","4d662412568559b797bcd5679b1d9c4f"],["/tags/DeepLearning/index.html","b811d2a48f9115026b562a49c23cafb7"],["/tags/Design/index.html","b13c5f2fa0c97fd7116fc1a88365d3d8"],["/tags/Emoji/index.html","8ae532f073238d61aad5176723e6ec7b"],["/tags/GFM/index.html","74f0b7be898d195233ad276a6c4da74d"],["/tags/Game/index.html","8a22fdcf34b7ff55be9b190319614b76"],["/tags/GamePlatform/index.html","252ec20b064998ec60045bd08965acac"],["/tags/Git/index.html","2d5aebc002b96a045be92fee5b4eea1d"],["/tags/GitHub/index.html","c011afc6cb5f8456da16badf5aaa3717"],["/tags/Google/index.html","5dd98c01e2aa6a50119b03a05f615cf3"],["/tags/Google搜索/index.html","a42673a5d7950725b5a40c46c7a4ece1"],["/tags/Guitar/index.html","1b3df8e7b87711b262b724f0e8da2e3d"],["/tags/HardDisk/index.html","ffea5ef78b0f2c1b65a604cd913e6132"],["/tags/Hardware/index.html","05b16aaef76a79c6895c280b6393ca66"],["/tags/Hexo/index.html","1799787e60bcd00978434854a0c9e0c5"],["/tags/Hobbies/index.html","23f0324ac454a2e3fe1904d00fb11398"],["/tags/HongKongMovie/index.html","46f5ed5242e57dbe1c744fc7572b3dd4"],["/tags/Html/index.html","a1e2c4bab38c33ad1d8bf6b7fea4e140"],["/tags/Interview/index.html","9d5c10fbd4e414b3c1dc026b7c0653a8"],["/tags/Java/index.html","f9fc117b6cfafd0c3a0a33e2a327aca4"],["/tags/JavaScript/index.html","d2f4f92674def45f5098e27e413e43d7"],["/tags/Linux/index.html","681e9840bce6636c54cb8a0336a6ed8c"],["/tags/Lutris/index.html","e396771a40f2e379da6307ebee4c155d"],["/tags/MachineLearning/index.html","67091746ef278bbc1b869d0cd7c62448"],["/tags/Manjaro/index.html","1733c799e2c133320ecee61e4cc88d3a"],["/tags/Markdown/index.html","b4595c225fe6614d3d6aa92703033723"],["/tags/Math/index.html","b752cd2ea57543a175f3cb5cc8f910bb"],["/tags/MathJax/index.html","bc621bf4351ea5886975617dbe65a9d5"],["/tags/Memorizing/index.html","327e707ebb5d843fba80a63b80e664f1"],["/tags/Movie/index.html","2e2484dd4969f7d318c8c5217e960592"],["/tags/Music/index.html","87d9ca0e12ce71894b89d33a2efc8a1f"],["/tags/Novel/index.html","ea027d9a7039b8412b748d86e19fe33f"],["/tags/Office2019/index.html","0f8961d9b63a05a3d70bc47bdf5504c4"],["/tags/OperationSystem/index.html","c6ce6acc8a406ec16946565ae7daf91a"],["/tags/Origin/index.html","63e556eacbbfd758228a07e3c7b2dd71"],["/tags/PersonalDiary/index.html","edab634b668b51139144325f3615db2b"],["/tags/PersonalPoetry/index.html","d0ee8891f1dbf26e17e7b4250e3bb889"],["/tags/Photography/index.html","c66f3873687c9695b6aa78f217b4f485"],["/tags/Port/index.html","3396b7157714e188193646c7db5ec6c8"],["/tags/PseudoCode/index.html","51628fda9d993dc330f204c2801f85c2"],["/tags/Pycharm/index.html","06317f9ac1d9e8e2639d973e398a4205"],["/tags/Python/index.html","f2b0bfb3bc67cf5376e4c88cbec8bb96"],["/tags/ReactiveProgramming/index.html","bdb7c316750d6e0b60c5aa013fe7a90f"],["/tags/Regex/index.html","30c55de8d09e913b685d906b14acd4d7"],["/tags/Research/index.html","9f536d1a1cb7191b874b29901dd7a615"],["/tags/Resources/index.html","cfb57802db1e98caf35b00402792cf96"],["/tags/Router/index.html","d8984acb196825442a0924723794ba23"],["/tags/RxTool/index.html","09aa1ed49ba77423d8bee83dda774a14"],["/tags/Software/index.html","6b24e06cfcbd3b433142e9e5d55711bd"],["/tags/Spider/index.html","a9a7937e63d2766be79631bcc7a715d4"],["/tags/Steam/index.html","69dc7341d5895492bd079ab604c3b8ae"],["/tags/SteamOS/index.html","ac0de711b3ecae7db5a5b86508d7aa00"],["/tags/TA/index.html","88f1c16304eb16ba6d301a33b5c43b01"],["/tags/TechnicalResearch/index.html","a18d6d9cf68c8b8fe10ec9ef1b025f2f"],["/tags/Teleplay/index.html","77d23528c1803b136410c71c6562de4b"],["/tags/Thunderbird/index.html","c03d7d617d376e153767ae27663bca91"],["/tags/Tool/index.html","e873ce91b2c3e3166907036afab455dd"],["/tags/UltraISO/index.html","dac4310d579b2d9b6628755b80e90424"],["/tags/UnitTest/index.html","fafbb3b3b86890bad586f9db48289975"],["/tags/Unity/index.html","af6f5631ac3a42ca1c33de64ecccba0a"],["/tags/VLC/index.html","f2f106bc22c9e92c58cbc07f7082e8f4"],["/tags/VMWare/index.html","15d244dcd7a5e4c7d6a30c266040b94c"],["/tags/VisualStudio/index.html","4ee6e63d02426617302e6bbcb73ebf0d"],["/tags/VisualStudioCode/index.html","af104ea215ce9518e6a748c0f52accd1"],["/tags/Wallpaper/index.html","18078e3be5b2c4996f39e5b78b21c662"],["/tags/Windows/index.html","85194d8bc71ac3129fa1b7a2178a0f73"],["/tags/index.html","7a29440061d7daf15b5ee9c386913164"],["/tags/个人所得税/index.html","3c5ecdeaadb989849b5c154936cb0bde"],["/tags/五险一金/index.html","d48b12deb40f6464f783b70290191c0d"],["/tags/亮剑/index.html","00f6d48e5d39d10a1867e77c605f61fb"],["/tags/仙剑奇侠传系列/index.html","5229ea8a3b94fe961eb82d17d05c8412"],["/tags/千与千寻/index.html","9afc495029c7964ff8f040b8ce7e922a"],["/tags/宫崎骏/index.html","2daaac02acfec9e7b60cb411c965012d"],["/tags/小王子/index.html","be9065585c7b676848ba833be9d19123"],["/tags/开心鬼系列/index.html","fa85c5bfe32fb3f4f504828283cd2ff9"],["/tags/微元素/index.html","ef63505e83afe4a2f2144da364522c30"],["/tags/思想政治/index.html","13594667482636d334430a9767d94323"],["/tags/数据结构/index.html","53bdd9c2ffc3597f3c69a5f69e9b638a"],["/tags/游戏资源/index.html","fd34c3d8f076599881250bb849af02ac"],["/tags/盗墓笔记/index.html","0de998113fa8fe8019584e4710d7e02a"],["/tags/线性代数/index.html","b203bcb20d3c335ddb4bb07e04241607"],["/tags/英语/index.html","dfff0efab97f14268ae47b60add5ee25"],["/tags/软件工程/index.html","0825068ed173856a6d1842e3f46a7435"],["/tags/高等数学/index.html","db4372d53c8da83d1c1ed6955b0978c6"]];
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




