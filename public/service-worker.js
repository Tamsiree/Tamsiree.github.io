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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a9a4162c5823c57d1634b6ea228e761f"],["/Computer/Alienware/Alienware更换电池/index.html","fa3ce8d05bba6be22d421504a7751d9b"],["/Daily/Hobbies/Guitar/吉他入门/index.html","b6ba3a6d40469e3501fd81e60e1c72b1"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","a5c3e26514aba88ad89cf1526a8bbb66"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","a76ea122b46be783d8ce12df8cc11823"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","d22107bfd774beceea47634d9cfead46"],["/Daily/Hobbies/拟音/index.html","fc7d7d912ca4080b9b598ab1bee954fd"],["/Daily/Memorandum/index.html","433dcbf18275dc27ad5e8bad095d1fc9"],["/Daily/专业术语/index.html","6d852828f6617254eda3684be9fdad12"],["/Daily/个人所得税/个人所得税/index.html","36c87ec373d21fb2fa0b6cc1046073aa"],["/Daily/五险一金/五险一金/index.html","99f986a21dc6295621f4ce79047f105d"],["/Daily/劣币驱逐良币/index.html","0b62268ca93621559a6958d3176704ec"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","95b7393ec7a07ee3ce2dfd96eaaec63a"],["/Daily/生活小常识/index.html","5b12a59494d37a8b1578510a2f96d5c5"],["/Daily/网络用语/index.html","fb438b26b5921740d36e01dcf3d65ca0"],["/Design/设计用户界面的注意事项/index.html","b371884c9859854fad41c6ffface0360"],["/Emoji/Emoji符号/index.html","a7dc04a93abce01e8027131242fa7eeb"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","bfb0e82b9010798117cf6bfccb1d9974"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","77848e2446f25e0e154f5fccf243bede"],["/Game/GamePlatform/Steam/ARK/index.html","961cda036841ad542ecdcf52dac0b7bd"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","c93f9a46d4484f916a3631b2a4249f48"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","188aefbdb2ca34dc65ca88550feec65f"],["/Game/GamePlatform/Steam/Steam库共享/index.html","dc208478a679d71eb3c73d9c9cd56f8e"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ef5e40aef4433712752d35c32b124462"],["/Game/如何独立开发一款游戏/index.html","9626ede8e32905a1e9c364956c21d6da"],["/Google/Chrome/Chrome上网助手/index.html","57e0eac7c05e9655ddfc2eeb3fc75b06"],["/Google/Chrome/Chrome使用技巧/index.html","5619ddafad174315198df1d8e98f1f78"],["/Google/Chrome/Chrome插件/index.html","8a6d181a3022e20abae563d301e0d058"],["/Google/Chrome/Chromium/Chromium/index.html","0aab406104308f5acf2024a46e03d25a"],["/Google/Google搜索/Google搜索技巧/index.html","292d609b24d165dd90138584c1ad3c0b"],["/Hardware/HardDisk/硬盘分区结构/index.html","f347edaaa864a5ad7e6659e67652d083"],["/Hardware/Router/路由器固件/index.html","b780daacc2a5acad509defc87e346254"],["/Hardware/电脑设备/index.html","948740d85d4c0e19baceb4de9a1dc0cc"],["/Interview/Python/2020年字节跳动面试题/index.html","54bb8332eb926fe70ca29104f0e87e9b"],["/Movie/HongKongMovie/开心鬼系列/index.html","2bc7413caa7f354056f1385db55be4ff"],["/Movie/小王子/小王子电影的共鸣/index.html","749401e6051e223883d67fcccae29425"],["/Novel/盗墓笔记/盗墓笔记/index.html","cb48a9d1c6a2180a18320751fddedae2"],["/OperationSystem/Linux/Linux分区管理工具/index.html","0834d65cc1d1cf3595a5bf56bd604c63"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","e36a363066b3a5907438bb711b68390c"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","001145cddd43d034d7b76c10d7dd4ab1"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","05c96cdfd5759cb745ea92196f89b0f2"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","8796f144ab35f385d97e0805f52660f8"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","b66dd71e881ad81ba1f087cff4c26ed1"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","55cdb21a0a3aa58a765e0c1612837e90"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","a8126843055892ca6f0f14d214ea2998"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","4b6fe845d5c488477d2cdf199401926f"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","cc1825932950afa407108ec16607618c"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","46f5823d476788503198833631451208"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","abde5e0e1010246f75d7a4d9e29bd852"],["/Research/Math/线性代数/线性代数公式/index.html","6c9b82052966e6268941ec58daae6da4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","0a13157f1a0f78ca4bad273612ad219c"],["/Research/Math/高等数学/高等数学知识点/index.html","04fe9ebc89990aeb3dd277ac4d6507b1"],["/Research/Memorizing/费曼技巧/index.html","46dedc2048013aa0cb6417af83db756b"],["/Research/思想政治/考研思想政治理论知识/index.html","d57c0893da704c7264d744c3edf70427"],["/Research/数据结构/数据结构/index.html","af14d98f3dccdffeabe6d4e512b596a8"],["/Research/英语/考研英语作文/index.html","3ec8383b781923bc6f75b2ceae51870a"],["/Research/英语/考研英语词根/index.html","e404f29ead60e04bbef474151a3bb262"],["/Research/软件工程/PseudoCode/伪代码/index.html","f6f0039543a41e2e1a66c9a6c174d781"],["/Research/软件工程/中南大学软件工程考研题型/index.html","40236f47611c700df1fdc428d73dc63d"],["/Research/软件工程/软件工程基础知识/index.html","7dd65059b635f3b9d5c4ddcad3f2b728"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","be2e4d1ce813def2969de9b0f4e981d0"],["/Software/Anbox/Anbox/index.html","0e981f1acfba843ab371bd594bf58282"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","acb58b0a29c543cad817c3a5ed35e4f8"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","85964ee63061c9d323b37c84e1b65821"],["/Software/Office2019/Office2019激活/index.html","b2415e074c4e0aa961ec39869f4f5ead"],["/Software/Pycharm/Pycharm激活码/index.html","f43f7e04a8876d1acd5874409a832d54"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","93e9f8845f20372a002910c9c1711378"],["/Software/UltraISO/UltraISO/index.html","201d35c66e1124c5f623a037f6dbc73a"],["/Software/Unity/UnityHub许可证手动激活/index.html","a92cad1ac3d5c1704164eb1b84f344c8"],["/Software/Unity/Unity使用技巧/index.html","de2bd95d166473a08933aa4f573b4021"],["/Software/Unity/Unity动态加载Prefab/index.html","f838b05ddce3c7d7835df2adff94f994"],["/Software/Unity/Unity合理导入模型/index.html","da9d2d50bf01da035e111ac0447c3707"],["/Software/Unity/Unity的Canvas组件/index.html","19099078f96e797529b0fb735677d25c"],["/Software/Unity/Unity问题归纳/index.html","d0d52e294429b9720471161ca7a9f3ec"],["/Software/VLC/VLC使用技巧/index.html","48d7783ea6407723369207c29d85af3f"],["/Software/VMWare/VMWare/index.html","e6e9433c8cd2b967ac32cdf612bf8dd5"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","819a7a79b2a22c604c63c7b295230a41"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","71323d05dfbb46a3d01f672d203a7d22"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","26e1df28801d13b1a59b61e471129bc5"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","21fefb1dcbb5e15fd0b115d9fb4f6e85"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","e26bd3fbd565904580cf48ffd802610e"],["/Software/Windows常用软件/index.html","4246304776597c18eb0c4834873e1248"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","6e4a78d302c8aea99fb2eb231400aac5"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","0b1a55e303601acc911bfc8f76647dc1"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","78c45f17fdef0dde416905c1fb12979d"],["/TechnicalResearch/Base64加密原理/index.html","e7c5c9c1e1d60b0caf4047a94ba03d74"],["/TechnicalResearch/CDN/index.html","040aa0828eea1119857e7a99880cfd1d"],["/TechnicalResearch/Git/Git/index.html","52cb1ff72fa42e3f6bea9bdb59f5cff5"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","3a995287f285384ee7bda4b06651b1dd"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","271b8f10755d5927134946e0b6ee2db9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","93b518895fd35439a15a8790fea7dfaa"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","91784716658c26679a2d2a0c1d221160"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","e9054573188b2987182c3a6d83b7da88"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","7d2c0df91951e429997f51ee23beb950"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","23f2fd7895b16d5ecb10df0cd7a64d2d"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","6f1ded02a7ca1b66bfece679fd21a55e"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","0df77b994b01f3edda884c355e69bd14"],["/TechnicalResearch/Java/Java基础快速入门/index.html","58833847f44e071f2b3589f9ec4b7939"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d59b3486ecee23d9cf9fd7ccb17e66f5"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","090f2b4b4459667caf534154fd235c72"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0d6670d3cfb5fc529fe9d75a3a617a35"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0deadf75de4735eee812974a22271bca"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","fce6ba35f401feff69f4c10c402c4870"],["/TechnicalResearch/PT站/PT站/index.html","3f4544d166665362a76fed360a5f317d"],["/TechnicalResearch/Python/PythonExercise/index.html","d5eafff5769204008ceeec250615fe32"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","584739e0141888f68c7b2d8a70eaebfa"],["/TechnicalResearch/Python/Python问题归纳/index.html","29be0a555e6d8a6bd751d48b1662bb1a"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a90100415ff0f62d29e3079bc44932ed"],["/TechnicalResearch/Regex/正则表达式/index.html","8be46458f6535e94bfe214c2d0042f8c"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","7472456c98fc4ae7b7f4e4a1ebc683bd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","6d3803ccf2e50674cec62da0017a5a83"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","804a9de747cf8a419b44b441a35f5f70"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","1b445a0f27e67c2ff037465dc5f230df"],["/TechnicalResearch/服务器常用端口/index.html","6ab67bb0f974a12291d55f8e9eee42a0"],["/Teleplay/亮剑/晋西北铁三角/index.html","171fa577ac2a9ecaf93fd034c67e9920"],["/Teleplay/仙剑奇侠传系列/index.html","dc07e4b2cfac6d49bfe06d9d1b9e5591"],["/Tool/Music/网易云音乐/index.html","2f7d6f6f9e36368441d7c15b5ee3d2f3"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","232934ef388e0311b502e898f8d7c2e2"],["/Tool/百宝袋/index.html","e173644e7924ce311ae023699179e984"],["/about/index.html","53e91fcac905368d2bd7eec2a47cc5ea"],["/archives/2013/10/index.html","52e009d68d3599ed22e738f9bee29c8d"],["/archives/2013/index.html","f3625cda8f4ee1b91ab400d206c273b4"],["/archives/2016/09/index.html","29c4d43477b9c91a52205fcaa02fd14d"],["/archives/2016/10/index.html","c259e8341fd3ed0527ce788725829466"],["/archives/2016/11/index.html","120cf3cab8fd620aab2ec3ca12f1a44b"],["/archives/2016/12/index.html","011945ce71bbcaae596768e5c0250e5f"],["/archives/2016/index.html","944c52afb8bbc39ea92d6f76ef45f2ba"],["/archives/2017/03/index.html","6714204d5b0628feb2ec2a295ae7de16"],["/archives/2017/06/index.html","328b1900fffaad762575b643e6b67478"],["/archives/2017/07/index.html","232112e2ea31e7e362058c88899001ad"],["/archives/2017/09/index.html","bf993f1247df8904b59eedf2fcf78fda"],["/archives/2017/10/index.html","b7e1fe5be363e393edf2fc2fdbf971d3"],["/archives/2017/11/index.html","e16be6d143a0f9e662504719dc506db1"],["/archives/2017/12/index.html","3deb8ebf0bf35e6047b3e48d6110a508"],["/archives/2017/index.html","1cda320802315bb12933f44f1291b32a"],["/archives/2018/04/index.html","f1a52db3ccb234a369a2c073ba27010b"],["/archives/2018/08/index.html","24f1cb7ccc21f405b997090787e5f7df"],["/archives/2018/09/index.html","164089c85f208e2b026ec03453960891"],["/archives/2018/10/index.html","2033a5ab3fba93571447f85bb794cc9a"],["/archives/2018/11/index.html","a4977e5a7a48defc4abcd579ac594cd2"],["/archives/2018/12/index.html","898fd482a9ae1b3147f4aaf72bbdcd13"],["/archives/2018/index.html","b662b94643e0bbf630473c0dd21fe95c"],["/archives/2018/page/2/index.html","c4f0946d8800f5e5c2361a76f1f0159d"],["/archives/2019/01/index.html","d0bc8f86853834eded70b89652d99fd3"],["/archives/2019/02/index.html","ab0b92fe11ea2cffd373bdd88bd91894"],["/archives/2019/03/index.html","7746b3c0ccd5215a782cab39a4b88c0c"],["/archives/2019/04/index.html","5d645d21a84321e21a206058e21be33c"],["/archives/2019/07/index.html","46c70865e0ccd747c56bfe084d53d189"],["/archives/2019/08/index.html","35f352be4baffd3ba1816cc0bb6dde9d"],["/archives/2019/09/index.html","a425eb54486235792cec0aaf5cabb61f"],["/archives/2019/10/index.html","605a02b53989702d286fb0717047c57b"],["/archives/2019/11/index.html","fef352b77352108219c37b0e585e3c21"],["/archives/2019/12/index.html","59e77325fe615161aa6fc71d825ed186"],["/archives/2019/index.html","146390634725bdbcbffe2669b97910a2"],["/archives/2019/page/2/index.html","caf14656b6ffbb7c19c6632a139d2cec"],["/archives/2019/page/3/index.html","e6f34981af1528c7340945463e61d17b"],["/archives/2020/01/index.html","d19f44fe24cf6c1cf130599f36c0b788"],["/archives/2020/02/index.html","0293886e8c3a44355650e38d0f276a81"],["/archives/2020/index.html","92a29bfb92b6d52a8929a9f5a9052538"],["/archives/2020/page/2/index.html","e727dd41690902c496f130f940b90332"],["/archives/index.html","a8edb7ed89e9becfbb30edf3066fe4d3"],["/archives/page/2/index.html","a9b17a7a3a82fd25e1fdb44632f9b2e4"],["/archives/page/3/index.html","8ea4eaf6f62b767ff8dfc7d5e124faf7"],["/archives/page/4/index.html","977e64ff132a82d68aa3155d66bab26d"],["/archives/page/5/index.html","66c708ce9eb074d0f4b08c0efa04bbd1"],["/archives/page/6/index.html","00f0569f25af1da3152fa66f6eb20234"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","bf31779662ba74bdbee2d4af8e9254f6"],["/categories/Anime/index.html","ed87d1cf568f43ed690e74d423853182"],["/categories/Anime/宫崎骏/index.html","b122876439c3e38c37ea61a62fef1915"],["/categories/Computer/Alienware/index.html","e8e30437edcf0f08458a4865f0497b85"],["/categories/Computer/index.html","8cbbb5bb13e0b29724c5bf2ddd0e8882"],["/categories/Daily/Hobbies/Guitar/index.html","962dd467e550d26523dd2799e9a4974d"],["/categories/Daily/Hobbies/PersonalDiary/index.html","971077e78291c6b417bc6d4cfc555667"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","40e06ab7b6562f31ccab689ae8a56ca6"],["/categories/Daily/Hobbies/Photography/index.html","6ca790a56217daf9cd536dd495d6d601"],["/categories/Daily/Hobbies/index.html","33025d80c5f304d64eae7545df9c4eef"],["/categories/Daily/index.html","a404f35dabd069c76db42f06161e25bd"],["/categories/Daily/个人所得税/index.html","2ba4955a4f83b3df9b4e3b1f3b773b5b"],["/categories/Daily/五险一金/index.html","4205bea946b671a97bfaa42a52ee6bc9"],["/categories/Daily/新型冠状病毒肺炎/index.html","f9fbf59d1e6246d272c02338d6d25951"],["/categories/Design/index.html","86e1613d95798711601e7a3e8413c997"],["/categories/Emoji/index.html","bffd8d4817c86b3a227498931e5154e7"],["/categories/Game/GamePlatform/Lutris/index.html","325050b67ccce1cbc4501b79151d1088"],["/categories/Game/GamePlatform/Origin/index.html","baacf896b71c32d37c76473bf704938f"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","a649f96c5c26f8ec2cae0393832795c0"],["/categories/Game/GamePlatform/Steam/index.html","5862427fee1de9c55519ce6b8b9ddc0e"],["/categories/Game/GamePlatform/index.html","8d6e4bb673a94c094b8b64fe75461334"],["/categories/Game/index.html","c4562ca296da9f453c1889d384361618"],["/categories/Google/Chrome/Chromium/index.html","45da55f650340376b6eb32c8d6468621"],["/categories/Google/Chrome/index.html","c64dc839f5e437b1b0fdd964f4a1bdb3"],["/categories/Google/Google搜索/index.html","15f015f7f875c9f6a28011a2d1a8787c"],["/categories/Google/index.html","007889b670cad2e6b5fea938b749b0d5"],["/categories/Hardware/HardDisk/index.html","2de6257d7b257f67893fbea7fc86dc7f"],["/categories/Hardware/Router/index.html","a88157484eebef6097121c4feaaffeaa"],["/categories/Hardware/index.html","a0286b0f12fbe7b838a0f5b3ea2bf809"],["/categories/Interview/Python/index.html","cbbe3e177ef24f8bf5dc067e5f14c098"],["/categories/Interview/index.html","7de19f75dd6f75856b3c62c1a90501f3"],["/categories/Movie/HongKongMovie/index.html","fd1a3b37903f8cf158bbbbf062b975d1"],["/categories/Movie/index.html","518c1be1a6c5dac122c65f3eafe17fc8"],["/categories/Movie/小王子/index.html","5a34bc9b84d546290c04a34bfa5e41f1"],["/categories/Novel/index.html","553bd30c8d53432d8fdeeabb0e77f9d6"],["/categories/Novel/盗墓笔记/index.html","40e51bdbe854da43b1a13c77148ae43a"],["/categories/OperationSystem/Linux/Manjaro/index.html","eb3b7cc336a1a5f7f3ad4d7895a8f481"],["/categories/OperationSystem/Linux/SteamOS/index.html","e12e7bfae8f2a70337ae6803f0069e42"],["/categories/OperationSystem/Linux/index.html","34bc812030f2b3e2602ede021b8491dd"],["/categories/OperationSystem/index.html","e66c34e783eba30e547b2756e5ecf747"],["/categories/Research/Math/MathJax/index.html","a4d33d375dd2bfc879f01cbec9b7c75b"],["/categories/Research/Math/index.html","44b1858dbe4ee690a78604377cfc6d81"],["/categories/Research/Math/线性代数/index.html","243c901cf1c01c52470bacf1838c0ac6"],["/categories/Research/Math/高等数学/index.html","60845ed5086f0b098412c40fb15cb4c5"],["/categories/Research/Memorizing/index.html","c691f5d6afe13f50ce1d561dabb9b236"],["/categories/Research/index.html","d02cc4a6b1a66e54ba88562fd7eca2bd"],["/categories/Research/思想政治/index.html","08ed8e73914eb7b9dd40451f673ef329"],["/categories/Research/数据结构/index.html","2f4224d0cf044b6cc9f69fa794e6056f"],["/categories/Research/英语/index.html","4f0c265de560453685df8518087336f8"],["/categories/Research/软件工程/PseudoCode/index.html","5063aa4633f6764c57ffef569fba5e75"],["/categories/Research/软件工程/index.html","39b6a2027b72881843fa9869f4cd54de"],["/categories/Resources/index.html","43071bd1426c6aeeb1a8dce27fca01c2"],["/categories/Resources/游戏资源/index.html","6b298353cd29da25849b4beb6054d188"],["/categories/Resources/游戏资源/微元素/index.html","829067e79c2e25f9b6443f6591f6d6bb"],["/categories/Software/Anbox/index.html","7d50cf42d5096f4213f19f7ecc78476f"],["/categories/Software/AndroidStudio/index.html","629cb44c06a4693aac7e5f3a1b2c09df"],["/categories/Software/Office2019/index.html","d9e456cad6a40f40d18b05d0a39d8a39"],["/categories/Software/Pycharm/index.html","363e0203a189d4560371c7aa90ac1cbc"],["/categories/Software/Thunderbird/index.html","712a8a5903ff0d7dd3ae15df7eca0ecf"],["/categories/Software/UltraISO/index.html","998f5a71a32a9918f0160a151061c54a"],["/categories/Software/Unity/index.html","ecaa7a5c33de3218b5d4ccbda64ae40f"],["/categories/Software/VLC/index.html","0fa3d676790ffd6e3f2310a792a031c1"],["/categories/Software/VMWare/index.html","de11e014bf8b63cad686c64c9795388f"],["/categories/Software/VisualStudio/index.html","b1dc6e8251a3fe8b6b5bf6938005a46a"],["/categories/Software/VisualStudioCode/index.html","56eb940aca2b7c4c8ecd27560179052d"],["/categories/Software/index.html","c4140601afdbcaeb646935d11c1e989f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a171df293e0d08f9ab3a93f6658bd514"],["/categories/TechnicalResearch/Android/RxTool/index.html","d3b389119c077e2c8a2226573a696816"],["/categories/TechnicalResearch/Android/index.html","3920560497b759808dbbf727dabba28a"],["/categories/TechnicalResearch/Git/index.html","bc7e767e228e56686c0b5f0030a380f8"],["/categories/TechnicalResearch/GitHub/index.html","2302f997f031bedc7f064b73bc2a86f8"],["/categories/TechnicalResearch/Hexo/index.html","96f6f954116436c7d94a3fb00a6bab02"],["/categories/TechnicalResearch/Html/index.html","b6afc0ffe6eaab9bbc78d2444ccb0a0b"],["/categories/TechnicalResearch/Java/index.html","a5960ef410dc18d1130097d328d9affc"],["/categories/TechnicalResearch/JavaScript/index.html","f10b334bdc298d3a08398b7f066c150e"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","db8701a86410887a8bd89b7a7384a073"],["/categories/TechnicalResearch/MachineLearning/index.html","dd7552fd66473ca95c27ad2613cf4236"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","519356f6283bf74207d7632e3a8df33b"],["/categories/TechnicalResearch/Markdown/GFM/index.html","5a2dcfb921cafd17e8cffbee2db9fbc6"],["/categories/TechnicalResearch/Markdown/index.html","1513b462ba61bfc649e34fa48ef90ae5"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","e442bb1f0a8dac772bf37c71d8aced04"],["/categories/TechnicalResearch/PT站/index.html","4188b9765b8680b16efb95281141ba3d"],["/categories/TechnicalResearch/Python/index.html","1e6178063fa11e27152d2a34cd9354d7"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","e1b18ac278b632e12236319bb946648d"],["/categories/TechnicalResearch/Regex/index.html","f18ec33949aafac7ecb511898542183e"],["/categories/TechnicalResearch/Shadowsocks/index.html","365d47c4dac6cf4d374b3b68cb0b277f"],["/categories/TechnicalResearch/Spider/index.html","dd5131c54b64adcb5b145cb269f8640b"],["/categories/TechnicalResearch/TA/index.html","d0a3cf7664ab171241107338537e2a8b"],["/categories/TechnicalResearch/UnitTest/Android/index.html","1810bb36d7846c003bb2d2802bc690c3"],["/categories/TechnicalResearch/UnitTest/index.html","17ebefc59dcd8c7bb2867aac7aad291e"],["/categories/TechnicalResearch/index.html","c7fbbf44c64a29e038d1059d6c1ded47"],["/categories/Teleplay/index.html","cbbe744ce9d9d92549ac39757516158e"],["/categories/Teleplay/亮剑/index.html","7191426ec866c9cbcefe6515f4549796"],["/categories/Tool/Music/index.html","bc58e141cf8f8159652cfe045444215d"],["/categories/Tool/Wallpaper/index.html","a3f99fa18edeb0324d2de15d2f93c4db"],["/categories/Tool/index.html","fc76ade89c39f9c2cb1f17ef144d564e"],["/categories/index.html","fdab330e4136c65315df969ceaf376a4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","01bef919ea2dad2c2748afd058f5709e"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","823d0036f8435a5e3e14940998e72245"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3248c29743e7b5139790ca1d48fe6fb0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","e029c051c9be1a27d9840ce9da163a96"],["/movie/index.html","13b399738028cd4eb37ef44b8ee44cb8"],["/music/index.html","f34f4cfe297832990b36ad523abe94b9"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","7571132751ab06d40b01a618a9ba879c"],["/page/11/index.html","b9e3aff3e4738398b7ef58ce5715065c"],["/page/12/index.html","7f73a53342f629fc36daca36fdf656e9"],["/page/2/index.html","b0da606a81676ef4a325f4a79514711f"],["/page/3/index.html","40e239cbd75296d72ccb991c109c3912"],["/page/4/index.html","f40a1bf976a496b2ad89c231694dc1b2"],["/page/5/index.html","31bd9759eb9d97811c13ba7e2f5e49db"],["/page/6/index.html","532f04a3c6392fd29aa380e5b13be90c"],["/page/7/index.html","2dfb7d94cba6caa478823ede02a8d016"],["/page/8/index.html","224775c0883cf5ed7bd6d5b845f196dc"],["/page/9/index.html","d404e61cc42f881454be52901a556d6f"],["/tags/ARK/index.html","e283b1dc512dd48b607ff45c30b867c6"],["/tags/Alienware/index.html","8da3d241c8418c385b8c38140eeb61f5"],["/tags/Anbox/index.html","04680e478f0926c6535f7d32ba68bdf9"],["/tags/Android/index.html","62f7eb85a6c7e8cf52ed3fbd4d0cd0bb"],["/tags/AndroidStudio/index.html","098c5c35275d0cdcc3e2cbf436c53b49"],["/tags/Anime/index.html","d1d805b9323865adc906b4b61a1aabe6"],["/tags/Base64/index.html","594a4fa471dc0666b24e0e1e6ccf42f5"],["/tags/CDN/index.html","f8fc8630d062091c68d254e41ed7613d"],["/tags/CSGO/index.html","6486056e2c2ba70b3ceb5b30d7b32d9e"],["/tags/Chrome/index.html","ed4411c3151e49685af7e7d6ea5e7028"],["/tags/Chromium/index.html","670c9891af3925b055b742ae13ec99fe"],["/tags/Computer/index.html","da17e690747861964d3cc0328bc9d5a4"],["/tags/Contributor/index.html","17b829ee379a08ed25ace34c7d7d0ffa"],["/tags/Daily/index.html","95f85a12db0115506601a1892d0a16da"],["/tags/DeepLearning/index.html","3cb82b8c5b054ac66ccc8c56a1e813dc"],["/tags/Design/index.html","e19a6ed9604d4504be460311a1ff7c0c"],["/tags/Emoji/index.html","4bf5042456b9031187a36a8d79f63a03"],["/tags/GFM/index.html","adcfa2cfa7764ee3b23db846839a3d22"],["/tags/Game/index.html","0bb6020d88bca3c3aa91f439a8ad90df"],["/tags/GamePlatform/index.html","6dedb7a4553c7477c0feaa0ea5a80dd9"],["/tags/Git/index.html","d6a9a5980d5a4a64b8add305466861d2"],["/tags/GitHub/index.html","bb47b8cd270cd75bb040c8e17690408e"],["/tags/Google/index.html","271388cb2a2ede98986d94eb4a8535e7"],["/tags/Google搜索/index.html","3b6cbad8606090b313101d1d605298bc"],["/tags/Guitar/index.html","94e3877bbc56d79e17a23e4a91d12734"],["/tags/HardDisk/index.html","6d77788ba4a88d6d547bc9bd287094a1"],["/tags/Hardware/index.html","f94a8bfdb77510ae2b52a0a4f5387cd0"],["/tags/Hexo/index.html","091dd9a6bafb1277e3855aee6662f95b"],["/tags/Hobbies/index.html","580127c8e0851b3cd0add982b3304ec9"],["/tags/HongKongMovie/index.html","dc5d0f7e0955ff3b8a32298d48d8f77e"],["/tags/Html/index.html","e8344685b417be677ae1c975d4f799b1"],["/tags/Interview/index.html","4dc14b2461d6a241b1dfa2e1804e3476"],["/tags/Java/index.html","d686f07c763218646880cc16c74b64f9"],["/tags/JavaScript/index.html","c1fba427f554337c7982f686af09d7c6"],["/tags/Linux/index.html","4b9450abff309a1e779937f9237fb510"],["/tags/Lutris/index.html","b1ab832c4a73a57c082dd893447faf72"],["/tags/MachineLearning/index.html","6c72eaf011a75b6c69aa65e3f5a1c6f6"],["/tags/Manjaro/index.html","6c07170e2c92375c61a6dfcfbe853765"],["/tags/Markdown/index.html","4d0a1c43b53858b9117c040f7a3540a3"],["/tags/Math/index.html","9d9cbabfcaf513613ef693b75a4a4d2a"],["/tags/MathJax/index.html","58ba00662f5987154ee4a23e426f7f31"],["/tags/Memorizing/index.html","17f5beead89be676dabf80bbd2dc5490"],["/tags/Movie/index.html","1a86544347e74d39d8e5f952e7a0fe7a"],["/tags/Music/index.html","4cdf5cd83cb637f090e95d0f51fdd295"],["/tags/NexusPhp/index.html","fd77fbda2090d124435bdc06bd3611e8"],["/tags/Novel/index.html","37a3819a56851b34a7bbbb7eb31d80de"],["/tags/Office2019/index.html","d0f965c9f16e98aed16eac1428d320a2"],["/tags/OperationSystem/index.html","628c0e8294b5d1796b28a8e690e29668"],["/tags/Origin/index.html","9e4e87e988df60dcf8446cbe21d15596"],["/tags/PT站/index.html","2c8086587188659250ab789e97494c15"],["/tags/PersonalDiary/index.html","b3d3b30c175a42a031141bb2400ced26"],["/tags/PersonalPoetry/index.html","595c6d036d1df3df7626e53aa8cc0b81"],["/tags/Photography/index.html","f8ef16b1a3d11b9112381fa659ecd57a"],["/tags/Port/index.html","e8c9ff7c96591f6f3cd8856dddbc4894"],["/tags/PseudoCode/index.html","1c5b965a2bea93899cf0bda6fea3a710"],["/tags/Pycharm/index.html","265513acb59af08f4c094c3d77cd596d"],["/tags/Python/index.html","22442c6e1826974cacd1c1d784df2190"],["/tags/ReactiveProgramming/index.html","450e2250a26397eada70d3bc1d09956b"],["/tags/Regex/index.html","e96a3b7d3729ab2053eb78548c44a9df"],["/tags/Research/index.html","c7fa530f69cdc9b4d7d848f2e777830b"],["/tags/Resources/index.html","0ed33f1da37316e0063251af0b3f2837"],["/tags/Router/index.html","b6c71274145442757872966f4fac6dad"],["/tags/RxTool/index.html","084bdb24e3717d1162e452508d6a2b37"],["/tags/Shadowsocks/index.html","486c9b92a1ada273e9b13560d0fb70ce"],["/tags/Software/index.html","ca6e525192932d156e1be28ce0f94412"],["/tags/Spider/index.html","c36c8d1561d90759210464a35f6a0866"],["/tags/Steam/index.html","302c12ed798335ee06c3c7cfe1f59aa1"],["/tags/SteamOS/index.html","71cca58f22a78f7db8e00f5206de98b1"],["/tags/TA/index.html","e3ae044d8bdbd4823a672f1fda0c1bda"],["/tags/TechnicalResearch/index.html","735af82f2807044c24f3cdfe6aa73682"],["/tags/Teleplay/index.html","1d285b5bc6f4ee1e7850d579d776885f"],["/tags/Thunderbird/index.html","408f96cf88a7b18a1994ef86a832e8d7"],["/tags/Tool/index.html","415cc458b04f025a640677326da27088"],["/tags/UltraISO/index.html","38dacec68c93a626ea8140eb2ff56b1c"],["/tags/UnitTest/index.html","a5cd668aa3dfadbd0cd24ec6bbd763e7"],["/tags/Unity/index.html","395e24616043941c31b026b08fd813c5"],["/tags/VLC/index.html","196e2ea83a57e159eabeaaf06f60b44b"],["/tags/VMWare/index.html","5915137adb54c2052625c93f3ba6014b"],["/tags/VisualStudio/index.html","af876a6531871ffb35b894d8dd6afb94"],["/tags/VisualStudioCode/index.html","a0e8771013cdcd6a963e9a931be1ebd8"],["/tags/Wallpaper/index.html","d563a45f7d20cd122dfb79c65d1ff999"],["/tags/Windows/index.html","49e4990fbd1bd646cd3ea7985fdc33e5"],["/tags/index.html","f077788de312b75dc9fbbe9f7a5bd1db"],["/tags/专业术语/index.html","b37bbb1ea3602c5006bdc179e6b23d25"],["/tags/个人所得税/index.html","9e28856f67c86e212190fa58109bcea5"],["/tags/五险一金/index.html","b7b7531d2f0aeb7abc83f6e959e59c65"],["/tags/亮剑/index.html","90e671e0a6803d28281174dc43195fdb"],["/tags/仙剑奇侠传系列/index.html","4e9656e8c6bce66cbbee96afa00605ac"],["/tags/劣币驱逐良币/index.html","82eb718f16174710dac103b3132cf8b5"],["/tags/千与千寻/index.html","e0ac9b265afd54f4a6a59de783099c42"],["/tags/宫崎骏/index.html","9771a5fab6858e0053776bb6f0c96fc4"],["/tags/小王子/index.html","f050c2dc4786f90bf184c92b0f4cdac3"],["/tags/开心鬼系列/index.html","fc0993a6802dc8c9f3473868dae67d2d"],["/tags/微元素/index.html","bd0f55cd767a27cdff60e02868706c60"],["/tags/思想政治/index.html","99288857017750ad362ceb8fbc73d388"],["/tags/数据结构/index.html","860707ab66e70516dd9f43ed0b7eb08d"],["/tags/新型冠状病毒肺炎/index.html","9dbd1b324dbd5cab450192512b33c326"],["/tags/游戏资源/index.html","46ca61d2d8a079b1aea90252d4a8d9e9"],["/tags/盗墓笔记/index.html","b88856ce6b2835028e9556a4d1a08abc"],["/tags/线性代数/index.html","83d798439aa17dd1fd4be79b542bb8b1"],["/tags/网络用语/index.html","449d30baf55b527d8eeebceef936d5a2"],["/tags/英语/index.html","14f827d4ec6f0d2a7d5dbf47f0272e66"],["/tags/软件工程/index.html","070147e8599cb347ca63163c55017e92"],["/tags/高等数学/index.html","642cb1b2f357e94674e4908428b56deb"]];
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




