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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","f3f440cdb685d2915753ed751dcf53eb"],["/Computer/Alienware/Alienware更换电池/index.html","dd66a2cd59a93c05e6195aa6e94a7c1b"],["/Daily/Hobbies/Guitar/吉他入门/index.html","0121e0b2607b39a56a4cd30172707076"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","2ad06aa48d26f3b2a9ba314bf717145d"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","fce686e181c979e2bcda1ecb8bc778e6"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","f9ecd31c06fb29c387ab99e564df5a84"],["/Daily/Hobbies/拟音/index.html","c681c47429d6a1ad8192f0d0a7385557"],["/Daily/Memorandum/index.html","51dfa61d2449746e471ade644af33ea1"],["/Daily/专业术语/index.html","5fe9fba2771e796b7a7cef9250322bb1"],["/Daily/个人所得税/个人所得税/index.html","675787e0c6043464e9a95d5b99b3554f"],["/Daily/五险一金/五险一金/index.html","ffa5e70edc3507be831885430424603d"],["/Daily/劣币驱逐良币/index.html","7a010d0c50502e859aa9701383b41c52"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","b20305af135323395467ed2674420067"],["/Daily/生活小常识/index.html","83d35cba61b3ec6bebaab08f00aebbac"],["/Daily/网络用语/index.html","79de718970fe383e9976aec6505bb7fc"],["/Design/设计用户界面的注意事项/index.html","d2f1fc2b72359e944ace77ec5af25df6"],["/Emoji/Emoji符号/index.html","5d0d8efe5c8693a5b9a973f78fc16b66"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","59c6914e22d74c4308c03c37a6423748"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","be9d295028e6b8393a67826ddb911c76"],["/Game/GamePlatform/Steam/ARK/index.html","8ad97796dbe870c84542760dd7003fdf"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","62d041aa798ee4b3b5035d279ee2a207"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","a92f2d9c23d7ed5d782607310c4f81f3"],["/Game/GamePlatform/Steam/Steam库共享/index.html","b781e17bc2a4a093bb40066846332dd7"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","04156c35230af34941e4871064f6303f"],["/Game/如何独立开发一款游戏/index.html","0c9d44b8ee9c50eeb7f9779597ea6715"],["/Google/Chrome/Chrome上网助手/index.html","6705dbc6b12e03c06f4c77b4f47cd162"],["/Google/Chrome/Chrome使用技巧/index.html","9704eb0d5a1f6668945cbab0937f9372"],["/Google/Chrome/Chrome插件/index.html","3af5937fb4440abec709223f91db9ccf"],["/Google/Chrome/Chromium/Chromium/index.html","20334686b31efa195377d28428609364"],["/Google/Google搜索/Google搜索技巧/index.html","4301d906c555b4e9912333cf7bc86504"],["/Hardware/HardDisk/硬盘分区结构/index.html","d848a2620492c85a575067af3308335c"],["/Hardware/Router/路由器固件/index.html","4f3b42c3bf752198b7d7311330797b31"],["/Hardware/电脑设备/index.html","adb98d2dfc404270a36d395359bb131d"],["/Interview/Python/2020年字节跳动面试题/index.html","5aaaf5faf60dc952a485d5350dfd09cd"],["/Movie/HongKongMovie/开心鬼系列/index.html","9eab50046a4ae964b6e03249e3c0b200"],["/Movie/小王子/小王子电影的共鸣/index.html","e5b56d653339b03cf03355ca248cb249"],["/Novel/盗墓笔记/盗墓笔记/index.html","9ee85ac04e9b89e26ea6dc7197bb4cd3"],["/OperationSystem/Linux/Linux分区管理工具/index.html","ef1d0af806fa5a5d8858a74a9482f80f"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","0d12ae6a67268d3fa0298a83b5012ef8"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","21da1b1529277468ff07364f354760ca"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","18e475b3214726471b7bf196ff95ad1d"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","f3f7384a45f6add7da8ebdd778b7f155"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","f9462ed2d8e1e88b5a3a4828a6af5787"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","7b4ca92cd93d3880df7122b7f774c830"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","3a0ac40e5c61095fdf3ccc9cd83735c9"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","43f5766090291241cc40fe466778c785"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","a21e0c182a04706220adcd87537da9fc"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","3815f4e3c4adf9417f90d4e7181afc6f"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","0a7b454bcf8971f5899c8f604abc6cb1"],["/Research/Math/线性代数/线性代数公式/index.html","bdd89e2a1106add1274d1404e6fe95f3"],["/Research/Math/线性代数/线性代数知识点总结/index.html","b5b3950d1f5783db45822387e64afe48"],["/Research/Math/高等数学/高等数学知识点/index.html","3378bf54e7e2b9d07fd0c762235ed8a1"],["/Research/Memorizing/费曼技巧/index.html","94f91b64d8e2a2638ac0b141a29900f0"],["/Research/思想政治/考研思想政治理论知识/index.html","e57511b7ac76af5285131afe6cff1149"],["/Research/数据结构/数据结构/index.html","e03aad9f0f070474a4b7ffb2f0505bf7"],["/Research/英语/考研英语作文/index.html","5ed07d05355158f2388e56f09c6f48c9"],["/Research/英语/考研英语词根/index.html","25b5ec868e10e37d77bb1561f0c182ee"],["/Research/软件工程/PseudoCode/伪代码/index.html","8754cb4278b96a6faf4baef80f47f950"],["/Research/软件工程/中南大学软件工程考研题型/index.html","f904cbf4d3490f5a9a2fd7ee0a02cc12"],["/Research/软件工程/软件工程基础知识/index.html","51c54849ae6c9bdae13c9e64d0e60867"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","62313cc2e0458fb6fc070e0b1d3c3de3"],["/Software/Anbox/Anbox/index.html","69efbb47717b17fdfc8e174bd5ea6b5b"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","ffe258f276e63d8c09c8bb5e54b3835c"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","6eda0fce5437ae9ccf9308cc33c63945"],["/Software/Office2019/Office2019激活/index.html","b4d5c518304c1ab419ac2f31ed23430f"],["/Software/Pycharm/Pycharm激活码/index.html","dec4bcfb9dfe65db5dcd0dcc7307ef0a"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","3bcacf7b611284a822cee19ff8b054ff"],["/Software/UltraISO/UltraISO/index.html","a557726659e1bd8c5897c4a1a27f26a8"],["/Software/Unity/UnityHub许可证手动激活/index.html","e89284a565831c530b5e911b85519970"],["/Software/Unity/Unity使用技巧/index.html","b04c178fd935164d4936f1d442ceac84"],["/Software/Unity/Unity动态加载Prefab/index.html","aa4bccb6da3430d5bfe5d753f6f5b4fd"],["/Software/Unity/Unity的Canvas组件/index.html","0b71c8f0ef81083123a24698a814e4d1"],["/Software/Unity/Unity问题归纳/index.html","de445500ddaf2e7ee87f4fa91b353a84"],["/Software/VLC/VLC使用技巧/index.html","8443f9eb04d8c46d0e89e31e9b21f35a"],["/Software/VMWare/VMWare/index.html","f10a1b3dec3075cc19502c53e45c9eab"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","06b46dc87fe9902340e09a00b00df33d"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","b0325c4eebf79d260d43633a8b74a3b4"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","818a3e73293cea78f5001f7d6097936e"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","01ce36a4707ebaeb24828faafc774a06"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","7609b024ab448b6a66bff4793a4ab692"],["/Software/Windows常用软件/index.html","be48614e1054698ec896ddfc626edcb1"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","530bdcb8e28499562797e6994825f38b"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","01be968f806f101395710821ad0b1957"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","3572fdb75d0bc231e4fd69679fad003c"],["/TechnicalResearch/Base64加密原理/index.html","052a24dc464ca639d025ef9432d1dfc0"],["/TechnicalResearch/CDN/index.html","3c3f91eb95d64884bde9b69a64556c08"],["/TechnicalResearch/Git/Git/index.html","6a8b29531556b7519ae758af6cba9dc5"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","8e31aa42c01dce3182760d3fc43c4a61"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","d53e4c2d5feae7ac44c78f46ec58a844"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","79d7c858bf22452cd482e8601a5d60e0"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","5fe3e33dd60067f685a4e9de3dd0a9ca"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","0dc06a8f7df9980539d6aadfe64e23f5"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8e2bde0198afc183d5492032978cee42"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","f88b889dad6f621af58689714aa6ca32"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","9102b5f813d01622c7a7cd6ea9d62e94"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","6ef60961d58de68e455879cc72bf464c"],["/TechnicalResearch/Java/Java基础快速入门/index.html","999dc751fa099514382bc982b60fafda"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","ed784a18a8d1c11b3579a5b5004b0fff"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","7288a4ec1e28a3ece30f2928613fac1b"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","135bc4ba6f6b0a288e6ff2c7be3d0fae"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","8991445a45480cd867047ff3ed662ca8"],["/TechnicalResearch/Python/PythonExercise/index.html","1ef1aec507ff4f2190a22086cfbbb0d3"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","d2fdaa806897bd52081bdb150d2fff57"],["/TechnicalResearch/Python/Python问题归纳/index.html","9903715398efdd6248e14a7dd21b02e5"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","7777b0f285ebd33ed43d1329a6179d7f"],["/TechnicalResearch/Regex/正则表达式/index.html","ace9f9a8d1bf7fd0ceb3c39f29363048"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","115d27b8e60d34addee86fee92a15f0e"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","ed83c72ce1e13016ef9b8dbc86155b04"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","47a125eec76639ee6a578b5ce4343070"],["/TechnicalResearch/服务器常用端口/index.html","6dc7e087f938c85092dff881671c28b2"],["/Teleplay/亮剑/晋西北铁三角/index.html","1c2819652e50a1c13c096b50fd351d47"],["/Teleplay/仙剑奇侠传系列/index.html","d50d1a2f4a488eb9fd2711dcd3c51697"],["/Tool/Music/网易云音乐/index.html","49b8b041d752ae683bec6324cfe32037"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","8ad7b3e50257fbc04727e94d4bb23d76"],["/Tool/百宝袋/index.html","5c1a99e82bc0249271aa0441af86d374"],["/about/index.html","9aa7a15ce919d28c043e1374c0dc2adc"],["/archives/2013/10/index.html","b7e750b124edb128dd49798a25587647"],["/archives/2013/index.html","6119c27eb8458d54f58bc86b8b0d97fc"],["/archives/2016/09/index.html","4c0c448c007e372c8b47ee6f9e1a2710"],["/archives/2016/10/index.html","41f9ac40fb81a2454572f287d4a5979a"],["/archives/2016/11/index.html","ddbe06d50206c6f0cbdb33bef9f6b349"],["/archives/2016/12/index.html","b9604895a72d8fd12b88111a0d86833e"],["/archives/2016/index.html","9d1fffa09e94396a27250d0952607c2d"],["/archives/2017/03/index.html","366dadd22e68cc2157476923d3f581c0"],["/archives/2017/06/index.html","f715f0896016275cb3874bc7288b02f9"],["/archives/2017/07/index.html","a947230914f3fb86c797791caac3027c"],["/archives/2017/09/index.html","3cd704645e7bfdfd14e59f5fd294498e"],["/archives/2017/10/index.html","9fb50772c83d9c41797e72b67e6205df"],["/archives/2017/11/index.html","a91e73cabe1c8d22c1bef97e7e218440"],["/archives/2017/12/index.html","e8f9d64a71aed656a40a7775a103619a"],["/archives/2017/index.html","872a80a44570342ddc0d13a46daaeea9"],["/archives/2018/04/index.html","17fafcda4718ea25c781ecbca9330f36"],["/archives/2018/08/index.html","eac4fb5314f84685d3077eba5c1c67c8"],["/archives/2018/09/index.html","cffda37d0bd21c4fd8a28601663a1af2"],["/archives/2018/10/index.html","7544535cd77ac9edaf3d76450e56d4cf"],["/archives/2018/11/index.html","b8ef403041993fcf92b63999dcbe6896"],["/archives/2018/12/index.html","b8fa39aedbf5b53f7fca4f909e43733d"],["/archives/2018/index.html","2c7ec47e538c64044b013e73b4f86e42"],["/archives/2018/page/2/index.html","f474741916092cf9d505eca2ccc37de0"],["/archives/2019/01/index.html","6626a4de0d1a884b1352693930adc345"],["/archives/2019/02/index.html","1e6b37715479462070d9f0646187a3b0"],["/archives/2019/03/index.html","23ee83ddeb8884c98ee4433a761e868c"],["/archives/2019/04/index.html","a21be42085e98e890f3b9b032ada3326"],["/archives/2019/07/index.html","9f1a85e6d924461207b869e35f6e57fd"],["/archives/2019/08/index.html","6759f2460cc157abb48b04efd2a5f5e7"],["/archives/2019/09/index.html","7829404a8fa4ea394b45742337debeef"],["/archives/2019/10/index.html","3906f09e33fc1fc13352224587dc9419"],["/archives/2019/11/index.html","b70735f6c6912f05b4612ff54afc9e1e"],["/archives/2019/12/index.html","ea32440a45dcceb1ef276a295d752faf"],["/archives/2019/index.html","76264fd054325a8e5c8e10c59deb517f"],["/archives/2019/page/2/index.html","e79c7203ba0fd3d00825511a0b0bb3c6"],["/archives/2019/page/3/index.html","ad7c51758e36cf1e6c5f240ca0d7efb9"],["/archives/2020/01/index.html","8432b3191a55cf4ddd906f0d987caa56"],["/archives/2020/02/index.html","689ca19e2010c220aa39af7971096c62"],["/archives/2020/index.html","8db13488991891419992cccf48ac01eb"],["/archives/index.html","4d71c5280942cc9e0c7810caffaef7cc"],["/archives/page/2/index.html","04dc2d2f0ef6096507e6e6137893b143"],["/archives/page/3/index.html","f4e21e07b0fc2126ae069e052a945050"],["/archives/page/4/index.html","a20c91c52bf80339c1a10cae10af5ad0"],["/archives/page/5/index.html","dc5b7559dff59b3d7f01dc56e90161ad"],["/archives/page/6/index.html","b96d74d89f8071c385e9c1de161f93b5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","6de60ee257780cf766ae6bbe80751ae6"],["/categories/Anime/index.html","166ed04b5dd241fd3928999c451372b3"],["/categories/Anime/宫崎骏/index.html","f460dc68f8fd99f32843d121d245671b"],["/categories/Computer/Alienware/index.html","35886f191d16fb2244778b242c792d8b"],["/categories/Computer/index.html","65910cada040d708d632fa27779f0521"],["/categories/Daily/Hobbies/Guitar/index.html","a3a0e09077d0e8beeb2ea0a296a15997"],["/categories/Daily/Hobbies/PersonalDiary/index.html","afbd29359fbffa0967a6b8fde6d96b37"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","9b1e369ff7f2d0c48e4417bcf08e83ec"],["/categories/Daily/Hobbies/Photography/index.html","ad6daa59b57ad438da7d63d44fbeafeb"],["/categories/Daily/Hobbies/index.html","22a5e4d680ba89a76b7315b39930d3a6"],["/categories/Daily/index.html","e22469ad46fe8475a16bef9bf5410b50"],["/categories/Daily/个人所得税/index.html","dd510420569bedbab931c1285c092bbc"],["/categories/Daily/五险一金/index.html","f615c4035f53d83b6eee28bbff209288"],["/categories/Daily/新型冠状病毒肺炎/index.html","e98011fdb84c12fc4e1a076530fda96a"],["/categories/Design/index.html","2540a98fba1eec8ed81e5542a7e534bf"],["/categories/Emoji/index.html","5480e86fb8e04b4ac8e0e7f725532d54"],["/categories/Game/GamePlatform/Lutris/index.html","7688bc4a208178148db3b71140cff4f3"],["/categories/Game/GamePlatform/Origin/index.html","928be54c65e07c180f187d9f173ac85b"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","1b481410daf39d90e0eb49f1685b1c6a"],["/categories/Game/GamePlatform/Steam/index.html","055a96daee448db37d088e3948543f88"],["/categories/Game/GamePlatform/index.html","23ef9402853bfe77717b4bed6a5422bd"],["/categories/Game/index.html","d39c113ecc50ce5afc02d9c5c63a3707"],["/categories/Google/Chrome/Chromium/index.html","47421c3b17f87027326de22fdf587acd"],["/categories/Google/Chrome/index.html","05bb9431c6b5088cb71ec82bc73f125c"],["/categories/Google/Google搜索/index.html","bd8d307cddb72740944837959ab1608a"],["/categories/Google/index.html","899233e11c91d0cfb24f4bd327c0464d"],["/categories/Hardware/HardDisk/index.html","7c0f783045fef75537ff64c8844df579"],["/categories/Hardware/Router/index.html","3b6e9d663207c9d09cd0d2fb2d09e300"],["/categories/Hardware/index.html","61d8410c5141085163bab4de9eb180a8"],["/categories/Interview/Python/index.html","a78e800f4be54bbd39889545b8bf63c1"],["/categories/Interview/index.html","401a04e270b78031a3632935f72d7014"],["/categories/Movie/HongKongMovie/index.html","145f536d6ed5bd5828907d9ea0de2209"],["/categories/Movie/index.html","2b74428b6621f76c9fdf71dd94441efc"],["/categories/Movie/小王子/index.html","c96fdcae16deb13b96ed624c7ef9390b"],["/categories/Novel/index.html","8d84074387d8a9a5238c32f87f838a61"],["/categories/Novel/盗墓笔记/index.html","3d294a4488e32d6fb6fca14be13794a2"],["/categories/OperationSystem/Linux/Manjaro/index.html","b09c12bca0ce2598da3cc5ebb2e81882"],["/categories/OperationSystem/Linux/SteamOS/index.html","59077e71b00ae0807f8ee46ec4dce41b"],["/categories/OperationSystem/Linux/index.html","7a96709c788d112ff9daf2351a8a16d9"],["/categories/OperationSystem/index.html","c6f324f0329052c782e997609600b0b1"],["/categories/Research/Math/MathJax/index.html","3d2edce156df2c969e4b5d16004add2f"],["/categories/Research/Math/index.html","fda8d5a7d85ce89e43d983ca9178ec0a"],["/categories/Research/Math/线性代数/index.html","74ef6aa00b104c84dd7b0b56b6c4bc00"],["/categories/Research/Math/高等数学/index.html","e016d3913d1dbd8aa230b8d8a8f074e0"],["/categories/Research/Memorizing/index.html","886f931e647f2d02b42aaa92fed2cf01"],["/categories/Research/index.html","4f446082abfd0c7240808d955c9c9ce0"],["/categories/Research/思想政治/index.html","70d1d9321df311822f67890941515529"],["/categories/Research/数据结构/index.html","db56bb9259e8e6de36e5e0732ca562b8"],["/categories/Research/英语/index.html","e5eb7f15baa26c47b4ce0473326ccaf0"],["/categories/Research/软件工程/PseudoCode/index.html","677f77ab5bdb148e1e1c2f73f2835529"],["/categories/Research/软件工程/index.html","54091ebf4e85ecba673a3820222ed44f"],["/categories/Resources/index.html","fda4431cc5b8b0ff7b3063dcd254bea8"],["/categories/Resources/游戏资源/index.html","cf22e03242207f38487a53bf4b78d65a"],["/categories/Resources/游戏资源/微元素/index.html","c2fcaa00cd8e77986f619a59e247bf40"],["/categories/Software/Anbox/index.html","00bcaa06cf2a0ebaa5a0f37e5944a001"],["/categories/Software/AndroidStudio/index.html","adf173014b483df6bc2e73dd7b9ea515"],["/categories/Software/Office2019/index.html","41342068ec5e9e427c3e62c938602ff0"],["/categories/Software/Pycharm/index.html","357f477cb3e2242f13dabee6549f7caf"],["/categories/Software/Thunderbird/index.html","d28730f5777d4d1e57a91929c2e3f619"],["/categories/Software/UltraISO/index.html","bec991eeb7d67a7736017b600e0a590a"],["/categories/Software/Unity/index.html","d6bf21079500e6e32fa9b67ab8d0e3bd"],["/categories/Software/VLC/index.html","7d529e231bc3523085585cce168b199b"],["/categories/Software/VMWare/index.html","377ff2aa22e0fd8ee0807d9fabbbcdd4"],["/categories/Software/VisualStudio/index.html","8c3cc95a10931858922a75930ed38f7c"],["/categories/Software/VisualStudioCode/index.html","ead39f4587f53f380433357d410d64f1"],["/categories/Software/index.html","9e88d987e7be4fa46266f13cca25d99e"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","25ce3b671ed495aa0aa2c4cdd15cce26"],["/categories/TechnicalResearch/Android/RxTool/index.html","dd1ca12e21730d8ac418dec7f6decdcb"],["/categories/TechnicalResearch/Android/index.html","6d81d410f851100aaa12eb69c00f0b68"],["/categories/TechnicalResearch/Git/index.html","2e145b244194d88972d6e4ffbbae4752"],["/categories/TechnicalResearch/GitHub/index.html","e238eb6a5a098b7bd2d916f87bce2138"],["/categories/TechnicalResearch/Hexo/index.html","6c8c0c6d27b87816b55ebaf940e5c4bc"],["/categories/TechnicalResearch/Html/index.html","e44385cfd2376dcbc1444e37ecbb362f"],["/categories/TechnicalResearch/Java/index.html","7ddce1257eb9e62e5c00e58797768c26"],["/categories/TechnicalResearch/JavaScript/index.html","8fad3f99994ed8954e7d6993ffc8fc66"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","51a14f4a52167be292472f2f1731c8f5"],["/categories/TechnicalResearch/MachineLearning/index.html","ecdc1f0caddfe1294f82f372753d9b16"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","76c8b19771b2a29de99021f8c363eadf"],["/categories/TechnicalResearch/Markdown/GFM/index.html","8d024d3b9727b977713cf0adee79db01"],["/categories/TechnicalResearch/Markdown/index.html","60ae84691fa6f7d70769b9429b5e3722"],["/categories/TechnicalResearch/Python/index.html","0c2a0eda1940ab71eb6797ac4abdccf8"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","71f6aa942a7ccb46ef8c0b1e0805e714"],["/categories/TechnicalResearch/Regex/index.html","11f9a6186d0ea883b443cff7060ed6a9"],["/categories/TechnicalResearch/Spider/index.html","e2f278f99b99185de362ee5dafa26c1b"],["/categories/TechnicalResearch/TA/index.html","a6bfa16b92f7c567f261740ba22b891f"],["/categories/TechnicalResearch/UnitTest/Android/index.html","5a6f63eadc82f3e7dc515539faa1a1ba"],["/categories/TechnicalResearch/UnitTest/index.html","3abe2d767777e244bd93fd5b574808e9"],["/categories/TechnicalResearch/index.html","7b961ebc666fd22899684f9a4fc5df3b"],["/categories/Teleplay/index.html","61b660f43922addc19936ed00ab88df0"],["/categories/Teleplay/亮剑/index.html","dd4aa264da365101821698fd57ee70cb"],["/categories/Tool/Music/index.html","343775f13792008d1367d464b0d8788d"],["/categories/Tool/Wallpaper/index.html","0c2fd659dde17f4253f0ed017b6871f8"],["/categories/Tool/index.html","a45250e463e5a705c2f23c64afb4d949"],["/categories/index.html","e1d91ddfdeea88d8209d644388fb554d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5b2f0db298476d6b1f8a250c7481b09d"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","f9738dbcafa24bd5a8d070a4b05ea2f6"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3eaea9278537587ac725263256e2bef7"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","12f80071301e4909e67c921c55016f04"],["/movie/index.html","a70de48dfe649462209ddd83644d5bf8"],["/music/index.html","876f59307e869ec722276ebf1fec4397"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","ba2b6578116dc143cd4eb8e0015b9a70"],["/page/11/index.html","1a5731fcb5cf38fcd8492e7f8f2dbb8a"],["/page/12/index.html","bc36929ade754ee1e047d63b8cff9912"],["/page/2/index.html","2026bda2bc9bb753d2178b14fa27af60"],["/page/3/index.html","50697f0577654a3d038b11ef8f029648"],["/page/4/index.html","0421cdfffff62bbd48418d11dbb71619"],["/page/5/index.html","a2eaee7aa1592051bd978eff8b277a48"],["/page/6/index.html","7280542e3f10e7b6317bac6f7a2b3721"],["/page/7/index.html","31ec1779819e8742e56d74f47f7155c3"],["/page/8/index.html","f1ba105fa78e48a18b5f528069d228ae"],["/page/9/index.html","0471e030b70159474d3048fbc9a37d9a"],["/tags/ARK/index.html","ac7671d8790d908ea55b755394e9137b"],["/tags/Alienware/index.html","f37a585ab5191139b3285cb6c19bcba8"],["/tags/Anbox/index.html","4245f6fa220201ee70c86bb0f51d9ce7"],["/tags/Android/index.html","3f84bd77560091f299478120a4c6d599"],["/tags/AndroidStudio/index.html","eb4a115852091e1c6d57ddeee692063f"],["/tags/Anime/index.html","9a19d2566286a5ff3d931d919d743ae1"],["/tags/Base64/index.html","54d3ccf4a64b30bd023c144bff2b4294"],["/tags/CDN/index.html","3af250b6abb7e7e7141bb59c44128479"],["/tags/CSGO/index.html","56f34c7e8f8e60cc9a1dc35dce77b66d"],["/tags/Chrome/index.html","836f20dd43e78fceaa5eb9f92cee4b4b"],["/tags/Chromium/index.html","9b93b2d8a7a3a84c6056616a252db693"],["/tags/Computer/index.html","a66233275a8ae5d55649ed5b1a12411f"],["/tags/Contributor/index.html","d9a5089b9f501d39a683e55a6e117279"],["/tags/Daily/index.html","4570152507f909c3687f97d187beef4f"],["/tags/DeepLearning/index.html","1f45a9a653c7ceec126dccf80506e01d"],["/tags/Design/index.html","df839a9e56cb7088beca73abe3057ca9"],["/tags/Emoji/index.html","91bc3f142e4dcebbed1471407aea30af"],["/tags/GFM/index.html","e599155c8abae831e2c5c884824bdb4c"],["/tags/Game/index.html","23282aa7178afc4742630693f91e1d64"],["/tags/GamePlatform/index.html","d7b81177d195f786fae181ec38e9705d"],["/tags/Git/index.html","0b90f05c0dee44a418ed81fde95837dd"],["/tags/GitHub/index.html","276a52cfb1252bfd4892b1f0677eb019"],["/tags/Google/index.html","53fc426f01a4fe82ec5ddd1f521c43c2"],["/tags/Google搜索/index.html","144828d7fca30a07bacfcf6d62e356a4"],["/tags/Guitar/index.html","e7b4f25137bf10f95d5aada2c18284a5"],["/tags/HardDisk/index.html","66276ec46a1373253ea205de4f4d795a"],["/tags/Hardware/index.html","fea9d4c76e4291c47bf3bd577eccf378"],["/tags/Hexo/index.html","cd00d32a98a842e72bbd12bfb496499e"],["/tags/Hobbies/index.html","37a0e2586c304c7f8b8ae61d35e5c676"],["/tags/HongKongMovie/index.html","49d8267d38baa5e8043f4c408a7dc6bc"],["/tags/Html/index.html","4fbcfc86efc0b95a38b0338d99ef8002"],["/tags/Interview/index.html","2b8dc5072b84d7af614a95b834b39a7e"],["/tags/Java/index.html","ea20946361bc2b2a7d88db55ef65ac1e"],["/tags/JavaScript/index.html","eda6a140ce7e72bfc7713605b122b5d5"],["/tags/Linux/index.html","e02526d26c3d213603377f9b82c41cf8"],["/tags/Lutris/index.html","89128224156e5049d9d248df70c6805b"],["/tags/MachineLearning/index.html","50629583bad0fe4fa4bbb8bc32c63974"],["/tags/Manjaro/index.html","42f5c320293cf63a216d8aec8d249c38"],["/tags/Markdown/index.html","442fd3a443d9aff5beb54d46914ca062"],["/tags/Math/index.html","476ddf55c9ca126e83738a0d0771c8cb"],["/tags/MathJax/index.html","9c600fb76ff06f85d18f1e0183ceb160"],["/tags/Memorizing/index.html","209540afbc12e3bb3175471636529368"],["/tags/Movie/index.html","e56503afb098ad5857a4dfe278fe9aa8"],["/tags/Music/index.html","7ff92d14ec7728c57d9763ffe4fda95d"],["/tags/Novel/index.html","ce84b139a3e4ed541bccb6c0fc9a2fe7"],["/tags/Office2019/index.html","5fd64525948f35c3dc25d34df1e95ed6"],["/tags/OperationSystem/index.html","1ab7c7b7e12bdfe018c2284896d5e17c"],["/tags/Origin/index.html","1dcc239481a9c222924638151067e9cb"],["/tags/PersonalDiary/index.html","e1e179f3ee479e7a6593d1d48b9097d3"],["/tags/PersonalPoetry/index.html","45d3a85844ef1aa88f8bf488a42317fb"],["/tags/Photography/index.html","5e4f722afb66612a828a7fdc93e3f718"],["/tags/Port/index.html","bff5a849f1d3a972030eb33d349fcea9"],["/tags/PseudoCode/index.html","97415db9e216029707d5631c58131672"],["/tags/Pycharm/index.html","900979e171f891b2b608e32c65852e05"],["/tags/Python/index.html","fe8fdc8f1e4937f3689400a5d10326ad"],["/tags/ReactiveProgramming/index.html","44a78359a18e83554c0a204748937d1f"],["/tags/Regex/index.html","19660136e36dcd07b6431524a03357ad"],["/tags/Research/index.html","2f30accf6daeacdb9dfc5a6295033be7"],["/tags/Resources/index.html","e47f925fb78bf740efde05616db10db8"],["/tags/Router/index.html","7a77182c8fa1929d42629638c6db76db"],["/tags/RxTool/index.html","8c9d92df638d8a98dfb702a3d1cb873d"],["/tags/Software/index.html","1bd0a4b29ae3a71009d5dcff3734b445"],["/tags/Spider/index.html","61c422e46478d9c8438fed44d89414a3"],["/tags/Steam/index.html","370a59def58976fe5733c8feecbc2fa8"],["/tags/SteamOS/index.html","a32e90d010a135a31dd3d2f15922c13f"],["/tags/TA/index.html","f8b5ad3675685e9fb2465161f5644e4a"],["/tags/TechnicalResearch/index.html","107f8656d2cf4f7373d3c7ca3b20168f"],["/tags/Teleplay/index.html","fbf9eb2c357ef00a9422d1b2628a52f3"],["/tags/Thunderbird/index.html","aca934014afcea6051bdb70f0d803808"],["/tags/Tool/index.html","edff482ed01d6e1e37bda14fa78c0d03"],["/tags/UltraISO/index.html","63981c9c304fcbacb0ed865277c49150"],["/tags/UnitTest/index.html","f3fbcab5ec587cebcd9d4884b651812b"],["/tags/Unity/index.html","e69c677f7ddc77fa85435b2704524e3d"],["/tags/VLC/index.html","e25956b9acf5750e4c62099eeb9abce9"],["/tags/VMWare/index.html","09d5c6ebec48fb5af148867f606b7ba0"],["/tags/VisualStudio/index.html","d929305a6ad41837eb08ef97b06e1f25"],["/tags/VisualStudioCode/index.html","fda0ebf1d2cc81b7b95152d7b6f8db75"],["/tags/Wallpaper/index.html","d113bf74e8c2515165005bed6d8cc97c"],["/tags/Windows/index.html","6519c0d1f6adb2ac3f4bd07061a0ee47"],["/tags/index.html","1fdf76c08e279cb252dfc72e59c55e04"],["/tags/专业术语/index.html","87100b0b1ad4a52bbde50c9a6545f4b3"],["/tags/个人所得税/index.html","b1f9d235f86906079ede59446cf6fe97"],["/tags/五险一金/index.html","f22ad1d598a677bb6cf7548e2147855a"],["/tags/亮剑/index.html","7e63bd706c71bf88cc2892c5376c211b"],["/tags/仙剑奇侠传系列/index.html","4aa5934b0306e5a36241c98486a44b03"],["/tags/劣币驱逐良币/index.html","9171e5e4072812f08f2d9e8b373ffdf5"],["/tags/千与千寻/index.html","ad6907f683612ff3d42b27ac26e52985"],["/tags/宫崎骏/index.html","0d9d0cffe03bb0c8356a9f0ca68eb605"],["/tags/小王子/index.html","ac1bc826219e8f507bef8a5a57309a0f"],["/tags/开心鬼系列/index.html","616aaa98952ef8000a061fa808fa5209"],["/tags/微元素/index.html","9705119c15c74719361714523332e2e1"],["/tags/思想政治/index.html","cc3cdda8aeae1398d8978eac57850e13"],["/tags/数据结构/index.html","81d93ac85ab42a1e6ec521b8389b3572"],["/tags/新型冠状病毒肺炎/index.html","081985706fe3cc0587e49c2861c86df9"],["/tags/游戏资源/index.html","d1851c3b91d7f9c044d2f757f6e9acd9"],["/tags/盗墓笔记/index.html","143bf0a8b9440c4fc07a8ce543cac6bd"],["/tags/线性代数/index.html","ed911c3571ce68aad0e034aa76b20cc5"],["/tags/网络用语/index.html","9dae1f33a863b1be10dc9094650719aa"],["/tags/英语/index.html","8ebe4caa6c8a22e6e7a19a3765ab5bd8"],["/tags/软件工程/index.html","524b53c16cadc501dd3af38aab500754"],["/tags/高等数学/index.html","a50560097a789e86dcf828e6ffe3e89a"]];
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




