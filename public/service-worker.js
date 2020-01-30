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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","54f7e7c07559ce45d62bc0b88226283f"],["/Computer/Alienware/Alienware更换电池/index.html","852818435fe2e58c270f5c59daeb2503"],["/Daily/Hobbies/Guitar/吉他入门/index.html","86dffeb86686427195dad8542ccfaa36"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","9b5205b114fb9e78491555a9dc1aa954"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","eeb0aeac433653683dbc9d564a805519"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","c84da2a6aaa08fec2e543b45f3140ade"],["/Daily/Memorandum/index.html","13035cda41bca0d70c28f8c4a154f875"],["/Daily/专业术语/index.html","3ac550ce41639188df63c060ce7acf95"],["/Daily/个人所得税/个人所得税/index.html","0669c8120bc4f55abf835b15f751ccbd"],["/Daily/五险一金/五险一金/index.html","101f23f41ef86efab01b7c98815d0186"],["/Daily/劣币驱逐良币/index.html","d46e482fb1e476e6d73c7cf5c76b0bea"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","3521fe2d04e90bc6849c2052aefead24"],["/Daily/生活小常识/index.html","6611b98948aaa0ff7604d33f3cd124b1"],["/Daily/网络用语/index.html","c4478835deb5e937292d924e73e2bd4a"],["/Design/设计用户界面的注意事项/index.html","4118106bc2636ba7d5c508d903d8f122"],["/Emoji/Emoji符号/index.html","b237be65a9ff7a04fcb2066ed02a045c"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","2c840e1b7f95f976a0d1ba316a84b03c"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","13ab46c6ad9979fdc560552e8e8d3e04"],["/Game/GamePlatform/Steam/ARK/index.html","3293aabb93e55aadd4385bb648d66f3c"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","28dc70fa678c39a4a9d82f88a005dd6c"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","3e54aa14ca8d1016f4ecbbc02855ed00"],["/Game/GamePlatform/Steam/Steam库共享/index.html","e156a98c64a7e809a50ba4294d5c0e5b"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","9eeb8c590c46d373c13f112ec7c1ba58"],["/Game/如何独立开发一款游戏/index.html","652bd40fafc01fb0036f797dff5d2cd1"],["/Google/Chrome/Chrome上网助手/index.html","3ef58bc09aff5486ae717637dcee684a"],["/Google/Chrome/Chrome使用技巧/index.html","65fc9ea9a8933d64f3d7f63a9c1513aa"],["/Google/Chrome/Chrome插件/index.html","f06c0ae93a3e15ca19a4bb508f709b00"],["/Google/Chrome/Chromium/Chromium/index.html","6578319c28be588215b466513e6fdb62"],["/Google/Google搜索/Google搜索技巧/index.html","c745097a89cb8d78966e2afb85164bbb"],["/Hardware/HardDisk/硬盘分区结构/index.html","1938df08101f5925609c93195af240ed"],["/Hardware/Router/路由器固件/index.html","32a2eb5019ef37ca18ce5617f84a2b0f"],["/Interview/Python/2020年字节跳动面试题/index.html","8ee66398d2722248d03a2655b87cb836"],["/Movie/HongKongMovie/开心鬼系列/index.html","d8b84ecab267606fc7aea9fb8aabec01"],["/Movie/小王子/小王子电影的共鸣/index.html","4b51c6c1bdada59d0616d13ffe1c469c"],["/Novel/盗墓笔记/盗墓笔记/index.html","9fa97d8c62cddfabfee6ea9566b87206"],["/OperationSystem/Linux/Linux分区管理工具/index.html","bc118f0119d2e13cd1d8c03a16c48cb9"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","b09590c12955d1240932f8ec3cc1bdb4"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","75ce195e3bdd296e70275c84876b9547"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","5c3c5c252d14ae32b3e2fdb4da3f7198"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","633abb3ea8cf90742732b56529be197a"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","c2f80e078e8acc5e2398f2f4253fb28b"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","91df8c85ba2f47ae309f738ac3021d8c"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","a2ae4910f40d3cfd5913d17731113a8a"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","3d80966ceca66e050bee812b519ecc00"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","6b50f890c88e7d103fbf88dca11e49e5"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","00b293d7f4129cca81896a3fc32fa9fb"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","f32f8e6d53019f1cad8e7579b5ed1318"],["/Research/Math/线性代数/线性代数公式/index.html","6d85a058fe8684e80f12ea52df30dec3"],["/Research/Math/线性代数/线性代数知识点总结/index.html","61f8bba56ba4638f87ba96353c2bc701"],["/Research/Math/高等数学/高等数学知识点/index.html","01542e2a0bb964bc0669a78a8ffae94a"],["/Research/Memorizing/费曼技巧/index.html","fdb7fa076fa9997003d36ccbd5f43e4e"],["/Research/思想政治/考研思想政治理论知识/index.html","d2285c74c08f583008809b1cc4996c26"],["/Research/数据结构/数据结构/index.html","fd9deac773a70279ce3c76f905795b1e"],["/Research/英语/考研英语作文/index.html","2d8a4e83b30d5658ee71d9fd73273168"],["/Research/英语/考研英语词根/index.html","e4535df3831dd47fadb6c1f003346b33"],["/Research/软件工程/PseudoCode/伪代码/index.html","5fbea5da6a9d43f7b2f3ec7ea6e7b0e5"],["/Research/软件工程/中南大学软件工程考研题型/index.html","a5973b9cc6d2db952c820799802239a6"],["/Research/软件工程/软件工程基础知识/index.html","b107ef13457b7a378e409dc1fbd526f9"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","dab638bee7a85f8d1a82485cc02aab0d"],["/Software/Anbox/Anbox/index.html","0ba27e6dd73fb5ee9ebd5e682b593aa1"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","00ddbd76dc4b4a8ac0c744ad60da93d3"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","385eef2d5300659ef858859078b9462c"],["/Software/Office2019/Office2019激活/index.html","b1c83122694f4efd12be325039b4583e"],["/Software/Pycharm/Pycharm激活码/index.html","e9a3651fb7e6f862f7d44d66ae009e92"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","532eec5540b4d1285a1cb40b4bd3d36c"],["/Software/UltraISO/UltraISO/index.html","ac1644f203272993abc395216b88aca6"],["/Software/Unity/UnityHub许可证手动激活/index.html","e99868b106faf2fa333c87fbb231b4ff"],["/Software/Unity/Unity使用技巧/index.html","7d66b34b0a8048a2ccca7749b3f5c10c"],["/Software/Unity/Unity动态加载Prefab/index.html","9d801416dff7309120b5c626328ebb85"],["/Software/Unity/Unity的Canvas组件/index.html","3694ca3df46cacebe62c8bd8da2b9e35"],["/Software/Unity/Unity问题归纳/index.html","0b819635493ac351852caf4ca5226b9d"],["/Software/VLC/VLC使用技巧/index.html","5cefaee951f122920444256623c5881b"],["/Software/VMWare/VMWare/index.html","9b619be6fcca9ca948da768db2898e11"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","1402542fcc7b1085697da503d0e29781"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","ce55e3d9233e09117f8fd1335c6cc399"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","76c67a50e0e69c02f9458f8b298f5b06"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","9b46e1b342a7f113833e0e9e6a5e8301"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","dab5db085e3adcaf969972adcdbcbf5c"],["/Software/Windows常用软件/index.html","bb41d066648e4a490dd9af8aee94d4f5"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","b5bd87693fd4053a9d65c35e22a0e5d0"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","fc7240a8603aaef7e7b64a9ed7c0e1c7"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e7b4cd0384fc99f2289753c7fb90c9db"],["/TechnicalResearch/Base64加密原理/index.html","d70544816e18c5fa912317f7ee65b036"],["/TechnicalResearch/CDN/index.html","34ebc2aca13f88dd287e6711db009736"],["/TechnicalResearch/Git/Git/index.html","cbbb5ff4b8e6b379908d1990213fbfb1"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","53544378524d6a7054f43bf6fe750bf1"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","1b49bd07e1acdb1242a541619cb5d2c3"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","3e37ac49ef060a2d654e7c144fe8f4e5"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","cbdfc37d75ca321016be79e1c2b2088f"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","50e944d04774bb6eda7b44b2528c8b1d"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","16ea844c6672dc7105e42c4142ddd1aa"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","88d10b176251bab3d5b7b90bf0b00b50"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","ff7759996ffabd73b14b850a9dd3a5ec"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","6423ebabb1d2c7a853be2674092d6086"],["/TechnicalResearch/Java/Java基础快速入门/index.html","92c8d6011776a8df16910b7057a8f351"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d209b3b6fbb65e70bf030888cd8aa0d4"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","7417787341fd4195c1c4a86a0b9fa08f"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","d2e439f0c771df8c76d7928fb1067c6a"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","2b8a65ec27b01c96212c1288677936c8"],["/TechnicalResearch/Python/PythonExercise/index.html","f76ff8abf4cbe61913972ce85d070b99"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","f69970e3b58cb6375e4264ccd1d934c4"],["/TechnicalResearch/Python/Python问题归纳/index.html","6491d843b9b6f3617828ce5954f88e39"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","87540628659c194604d1cc7f8d3fa5b6"],["/TechnicalResearch/Regex/正则表达式/index.html","a180851034dc7e179cc329cc35439258"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","3818001674769c2d4697115e60ffc753"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","5a84ca455c530dbd36a31dd6d5a9da47"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","70f085bd2d422725ee0006e9987b6241"],["/TechnicalResearch/服务器常用端口/index.html","4283cba19c80c3f2db85b8dd1cbfeff9"],["/Teleplay/亮剑/晋西北铁三角/index.html","61d53693089e734448206b58a3c3d27a"],["/Teleplay/仙剑奇侠传系列/index.html","e5461f45b59c4008ebbae6cdc8ab4f1e"],["/Tool/Music/网易云音乐/index.html","46e06f84344fe0d3d0f0895c384c8c1e"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","1e015c56b7e5722a83410410cf0f8796"],["/Tool/百宝袋/index.html","83898b56bb2f34067f5245f5a49ff3b4"],["/about/index.html","fb4455a9aca2568e217e48322802927b"],["/archives/2013/10/index.html","9cae765d991fb9061522ae6163fdc44f"],["/archives/2013/index.html","9233d087dec658831a7ade0dbf73820a"],["/archives/2016/09/index.html","7bafeb1f18eb9fc80bb143a330a388c6"],["/archives/2016/10/index.html","48d834df8b04e05be519138ebec4b86c"],["/archives/2016/11/index.html","0c1382225433d16bcad1f6e02491d0e7"],["/archives/2016/12/index.html","282a6695a07c26475a59d160bd31f242"],["/archives/2016/index.html","ce5a76934c5bd52e00587889bbf23018"],["/archives/2017/03/index.html","d9a9803dd7252e7b4be3fcb0060faf2c"],["/archives/2017/06/index.html","1c244489498b2ebc3874aa25550d6fca"],["/archives/2017/07/index.html","7d0937e50be90c8368652945029de4b4"],["/archives/2017/09/index.html","2b24d7457f6270bd7367dcae68bca6c2"],["/archives/2017/10/index.html","5e5988da66139556fdd96bd8f234d115"],["/archives/2017/11/index.html","2394d265701509b48d82482cd106ff0e"],["/archives/2017/12/index.html","f4bb9955463259c4b73447b5ebdef167"],["/archives/2017/index.html","4392a85d84876853068be53e0b8eef0c"],["/archives/2018/04/index.html","bf7097279ba4b26e6c6fadcc4d78c056"],["/archives/2018/08/index.html","fff40ac59f72299174befd9209095fcb"],["/archives/2018/09/index.html","ad6137c14acf0adfc45e2d51823334b4"],["/archives/2018/10/index.html","e76c43f7e1086be60832502e7811d2fd"],["/archives/2018/11/index.html","89d76fc7948d86f372688aad441fe61e"],["/archives/2018/12/index.html","1fc47232bf00bcee2dca2be5deacd70a"],["/archives/2018/index.html","6362dfde3cee21157ab31534acccfa2b"],["/archives/2018/page/2/index.html","e3cd4cf20227b1b0d961f51da3228561"],["/archives/2019/01/index.html","9bc82a82af64331c88a6de304c5312c3"],["/archives/2019/02/index.html","82f9f070df3b67553894a7575780cf11"],["/archives/2019/03/index.html","23b54838395fff6c2e9f32ef3babe0a4"],["/archives/2019/04/index.html","91d70d660e68e72f346068cbd0dfaaf3"],["/archives/2019/07/index.html","78a56d49d0e2a09d509da7c0b8ad7746"],["/archives/2019/08/index.html","d7335d349477e09d36790d52aba8b3cb"],["/archives/2019/09/index.html","d7c6dbd0f0e56817b815f963a981c335"],["/archives/2019/10/index.html","3224ff8d4137fd5c0f2e9af8d7e2b1e0"],["/archives/2019/11/index.html","ed041d01c0530b7f0d22d65693080688"],["/archives/2019/12/index.html","4f957f01fc0fbd2bd0c138aea09bef86"],["/archives/2019/index.html","68a5161be5cd1c21d345127d85bf5eda"],["/archives/2019/page/2/index.html","c2660670ab964ff8d45a16cbdfbd6ce7"],["/archives/2019/page/3/index.html","262be064fe5e3b37788cba6de111dfc2"],["/archives/2020/01/index.html","1a9abb76eda846439d4ff7b801fb7583"],["/archives/2020/index.html","84e329e8fcaceefa43f6e47fc635485d"],["/archives/index.html","72c6a10d82ae577e3edae53e2d015f3f"],["/archives/page/2/index.html","c74beaa8a6719522c1cca12bfa976a0d"],["/archives/page/3/index.html","12a70791669f4aa15294368169471f64"],["/archives/page/4/index.html","c1580fbf9b37567790c4500eaf1b70a2"],["/archives/page/5/index.html","c08889054118aac32db8b9e3d8127f57"],["/archives/page/6/index.html","7f735a9befb435e9cd922302ed4d3946"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","51f702b25a12ed217e9955000a732be3"],["/categories/Anime/index.html","1ef08cf3d583143c2b08ce6fcd2402e2"],["/categories/Anime/宫崎骏/index.html","bff1cfc9f1e7a02612c82cfcf16abc96"],["/categories/Computer/Alienware/index.html","0ddc2b2a6f00a65d9da4531bddb2a02e"],["/categories/Computer/index.html","61daa7f9bce15ed6ebcbd5473c9ce5f1"],["/categories/Daily/Hobbies/Guitar/index.html","dac62cbf00dd652a967a427772c75077"],["/categories/Daily/Hobbies/PersonalDiary/index.html","942d3ea102e0e18109219dde1df5df55"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","35a2ef5d3e2c610c0793f320605c69c8"],["/categories/Daily/Hobbies/Photography/index.html","c0510c28206101e46eec7bb3d899cae3"],["/categories/Daily/Hobbies/index.html","9427bd8c6bbb1ed67e77caa991cc942d"],["/categories/Daily/index.html","6218d9c69e356536ae07ff532f90d67f"],["/categories/Daily/个人所得税/index.html","c71813db66daced1293c38ddcc3f885c"],["/categories/Daily/五险一金/index.html","63ffcc447fff8e98fbd779093d2ab218"],["/categories/Daily/新型冠状病毒肺炎/index.html","957d106b5b49af8af52c99259ebebb83"],["/categories/Design/index.html","91266a6ea589723ced2bd695a180edea"],["/categories/Emoji/index.html","ccd1aa8f60a91385ab5057de1c6f316c"],["/categories/Game/GamePlatform/Lutris/index.html","1eb7e9e8fa187adb5f58d9cc2b26a22f"],["/categories/Game/GamePlatform/Origin/index.html","593c48cd88f5d81f2fd46febba711770"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","038dfc09f9d44bc7981e2599c49e5d09"],["/categories/Game/GamePlatform/Steam/index.html","79ff04c1cb7885cdfb626dd9096a46cc"],["/categories/Game/GamePlatform/index.html","865061c4c139bce9e68dc790a2fe3707"],["/categories/Game/index.html","dd45c90ab4a5bf593b05387cc224e7ad"],["/categories/Google/Chrome/Chromium/index.html","427d3fef48ec2ddec4c019caf5433e97"],["/categories/Google/Chrome/index.html","8fa56bb8ebe919ebfae63b6f1ebf3eb7"],["/categories/Google/Google搜索/index.html","06e8ade6ddfc8567f49c98c2cfb6419c"],["/categories/Google/index.html","aaecfc167842cb43940c8018fd0d8014"],["/categories/Hardware/HardDisk/index.html","0a5e3ce9545ec50fc54a6075184b3c17"],["/categories/Hardware/Router/index.html","a7484d14e580f1f03d8f30195532092d"],["/categories/Hardware/index.html","c37de2220e6d0277b9672d8208afdf47"],["/categories/Interview/Python/index.html","01f73446e666c985985ca2480c3e514a"],["/categories/Interview/index.html","4821d239821efe0705c17009294c9be4"],["/categories/Movie/HongKongMovie/index.html","874cf041fdc1353c93bde235953cbd5a"],["/categories/Movie/index.html","88379ca19eb0dcecf436cc2c9c9e96e6"],["/categories/Movie/小王子/index.html","4087aaa73323e2ef602843034e21db30"],["/categories/Novel/index.html","1c4883cfbbb16aee3be6bc9dd0c7f651"],["/categories/Novel/盗墓笔记/index.html","3663dec6f01ba9f3d25c0e1e0756b011"],["/categories/OperationSystem/Linux/Manjaro/index.html","a12a5507cb33c8bad700e7686ef8cca5"],["/categories/OperationSystem/Linux/SteamOS/index.html","b28da69bdc5e2121a213e6555939596b"],["/categories/OperationSystem/Linux/index.html","4e09ce1c59c35cebef8da642dfd472ae"],["/categories/OperationSystem/index.html","1a7cabec9f12133ce44674ca040f4354"],["/categories/Research/Math/MathJax/index.html","5027b1dd6f7ef5213546af3bc73f9da3"],["/categories/Research/Math/index.html","9973b7deddb1a75e75e4e1627532c625"],["/categories/Research/Math/线性代数/index.html","b568dec09e463cbbae6fc0d8c51d812f"],["/categories/Research/Math/高等数学/index.html","859421ff7270283f5df8094af0a7bf16"],["/categories/Research/Memorizing/index.html","974b9597db1016fb70d11df5af633708"],["/categories/Research/index.html","84993809aeff91d88d30e4cdd5eb0718"],["/categories/Research/思想政治/index.html","035bb620ef9939b7182362e369627a74"],["/categories/Research/数据结构/index.html","8e837725e9a9774c2275cbd5025ba669"],["/categories/Research/英语/index.html","2fe92d0e229052440e7231cc5a96098c"],["/categories/Research/软件工程/PseudoCode/index.html","7c8f45d253a9a9da67ff98b53222031f"],["/categories/Research/软件工程/index.html","e33b309e3266f027bb216b0f34b06b35"],["/categories/Resources/index.html","384d69b12d7e2c633590158a7ee86ffd"],["/categories/Resources/游戏资源/index.html","625bec2c8afbdab0a8eab2b61961a487"],["/categories/Resources/游戏资源/微元素/index.html","57789d84fa80db73849dda05ec8ce0cb"],["/categories/Software/Anbox/index.html","3684e9cf18efa31f133f4ffaa42ba6b6"],["/categories/Software/AndroidStudio/index.html","14edce1ceb871b32b208db527e01590a"],["/categories/Software/Office2019/index.html","a894d70396330725c8f9f46bfc3747fd"],["/categories/Software/Pycharm/index.html","df8c6c267b897bf4dd09c7881158674f"],["/categories/Software/Thunderbird/index.html","1b5575fb01573e6262fd77d1f8531ae5"],["/categories/Software/UltraISO/index.html","5f58222fba986652526a57f5d91a6d81"],["/categories/Software/Unity/index.html","6cffe10b0e9826a4f802518d17ccd115"],["/categories/Software/VLC/index.html","98d2e80b5afc2ebf8fd8d55438175a61"],["/categories/Software/VMWare/index.html","98ef9d6d5944721f16bf97bbd0f4a2c8"],["/categories/Software/VisualStudio/index.html","5db1a3106ad7c758cb166687bc7608bc"],["/categories/Software/VisualStudioCode/index.html","608376f9bcdc4201a72409df4d239a15"],["/categories/Software/index.html","08bf94b0deae8d2f5b3078fe105e063f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","8d8544b733c96d7bd71c69b659da97fe"],["/categories/TechnicalResearch/Android/RxTool/index.html","50ffb370ad0fd23dbd8f392a1ac326d7"],["/categories/TechnicalResearch/Android/index.html","d63980471c477088ad80c9eae66176bf"],["/categories/TechnicalResearch/Git/index.html","2426278d7029dc68a28242696e4d3b95"],["/categories/TechnicalResearch/GitHub/index.html","ceb0223cfb6854aba94b16de4fa25743"],["/categories/TechnicalResearch/Hexo/index.html","04b45a09f8e0776d252b9ea483e84da2"],["/categories/TechnicalResearch/Html/index.html","19519e2b324c6103e9af71ce52bfa9a2"],["/categories/TechnicalResearch/Java/index.html","19ab741188f22aec4d3aa6e96ba38d8b"],["/categories/TechnicalResearch/JavaScript/index.html","73baca8465795d08e9ab0fd4a3529654"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","a0e5f434bc8d5a9ed8f5f9107ddf553f"],["/categories/TechnicalResearch/MachineLearning/index.html","fc0faab8dbc0e7116530671e8dca3e2b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","02c1582a604fc3f9e731052f016e7065"],["/categories/TechnicalResearch/Markdown/GFM/index.html","5a2109a43aed007c2e67f7fcfb58504e"],["/categories/TechnicalResearch/Markdown/index.html","ddb738a96495f36980ee74831759659c"],["/categories/TechnicalResearch/Python/index.html","216817e2bc6def1e573ef0f02dffbd31"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","8aa0980c243519f7f744e4e059a71860"],["/categories/TechnicalResearch/Regex/index.html","1f5e039cfbfa77b30a4dd5cd0a2a8e57"],["/categories/TechnicalResearch/Spider/index.html","c85f2bd22d269c6e2ac1428ebdd0098a"],["/categories/TechnicalResearch/TA/index.html","40fa1a41783eff9710fe6af9ddeb4054"],["/categories/TechnicalResearch/UnitTest/Android/index.html","d5a0d0f6d147a1a6e1ccd9261dbb7b4e"],["/categories/TechnicalResearch/UnitTest/index.html","cb442bb1c72a539efcd927473957d976"],["/categories/TechnicalResearch/index.html","69e6c9bce764de395c73c774f5670366"],["/categories/Teleplay/index.html","07d83a539cf1dba1100d18e4903987e2"],["/categories/Teleplay/亮剑/index.html","c19c6bca207731ea95e803772fc66e82"],["/categories/Tool/Music/index.html","1eddb21af55c4d538b55b7410a1fb819"],["/categories/Tool/Wallpaper/index.html","a38aa209b8fcf63991e37a556b93ca6e"],["/categories/Tool/index.html","7cd381fe8ace709adc277ec96519e85e"],["/categories/index.html","89f335ecd3704dc0a490bb7bd4f8df5d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8d557ea333a720a28034525a695862eb"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","a0652e5ba3532ae1ba7b61556825b40f"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","32cbbb3b8b61ac44b9444a406b3f64f4"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","aae203a027336993f22701289591f595"],["/movie/index.html","3453c9eeb9afba9dc951a4af79afebb7"],["/music/index.html","6715a2cfd4c97274cc468499105413fe"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","9eed45384f4cce9a68b0d6f5eb8ddbb9"],["/page/11/index.html","2d7960f5a53bfd92f1bdf65072ddf7c6"],["/page/12/index.html","ca1d96f57a2c66a491fd699de2b1045b"],["/page/2/index.html","2cfd0d05c0b0570efda7e55ce31951e8"],["/page/3/index.html","0a44be894b687376772e224cb524976c"],["/page/4/index.html","90b80b25f9298f6c016639f29c6227ca"],["/page/5/index.html","6132aac6d742f070d6a2e7f26f6c8644"],["/page/6/index.html","79011e9c2687f2c614dcdc6128fad9a5"],["/page/7/index.html","56c93802eb3334293432108e8198d854"],["/page/8/index.html","635daf2a226aa6e8e0918ef19eac9dab"],["/page/9/index.html","1f66673d5447ac0ea101ef59da8cd869"],["/tags/ARK/index.html","17ff168d398ee7631411b82029671bb8"],["/tags/Alienware/index.html","f6884b869e7a2f19d5fde645826836f3"],["/tags/Anbox/index.html","c7c2858fe744044b3fe58572441ebb47"],["/tags/Android/index.html","c7ec2edd1b66e54738ae6182b862ac75"],["/tags/AndroidStudio/index.html","ec52f56a44978fd23e648b4cf3aa35be"],["/tags/Anime/index.html","216b33edc883fdce1a5222902a76d600"],["/tags/Base64/index.html","e8ad25c4e38d6a745ad1ab652852118b"],["/tags/CDN/index.html","c2eafb14a0e7fd3ca16f705a60f32aa4"],["/tags/CSGO/index.html","b818fed355a0d49c9921213dc568dd0f"],["/tags/Chrome/index.html","1ac9a6ebfe2a41ac4cf20254fafcb1f9"],["/tags/Chromium/index.html","6e5dfb7f765a8cc0e5e391a0c91657f3"],["/tags/Computer/index.html","23c622f987fdac85fa305e2265fffa59"],["/tags/Contributor/index.html","2315bf067517c7cf636dbb1c876cafb0"],["/tags/Daily/index.html","ef44a36348aae317d208f9a7416f2ba8"],["/tags/DeepLearning/index.html","744854a26bed33842ced7a6a500be155"],["/tags/Design/index.html","1c85719b630ee42c500f32dd05197ef4"],["/tags/Emoji/index.html","0bb799c65db5a5a7a727c6d2bee848a3"],["/tags/GFM/index.html","b47f266898642787cf5fd34c995f0290"],["/tags/Game/index.html","f8ea8344d0c62a9abc88b3072d300354"],["/tags/GamePlatform/index.html","60f523c70c3018055e28a70922ef9b8b"],["/tags/Git/index.html","84e778d2a649a64628212217cda2cdfa"],["/tags/GitHub/index.html","29344c1ba1a2b85f87f3d4a4aebb3484"],["/tags/Google/index.html","8b28f0ac3e97868ec628c82566b27d81"],["/tags/Google搜索/index.html","59ea626f31fa0820ad00797dd7e6e3c2"],["/tags/Guitar/index.html","83c8b1f25d4ef89f82efbf823d25a7ee"],["/tags/HardDisk/index.html","fe95c9360b95b711b5ee274b3d3b2791"],["/tags/Hardware/index.html","b9d93f3a035b945bce5c9976e94796ec"],["/tags/Hexo/index.html","1ff6f36df677717c8ea5b3ea28b03685"],["/tags/Hobbies/index.html","e6ec064edb75ae53d085964966fb0f71"],["/tags/HongKongMovie/index.html","0e0982b425a17a70b5ca99cff41fe1c7"],["/tags/Html/index.html","54644dc6bac7b42313e3dd3f70a85b43"],["/tags/Interview/index.html","b87900398a40c3cc7986397632f0e606"],["/tags/Java/index.html","51640b57336fce26dc7997bde99bb103"],["/tags/JavaScript/index.html","260bf22d623312f52aa890eb93486a8a"],["/tags/Linux/index.html","1bcd6be41a64ceb05725038193c74feb"],["/tags/Lutris/index.html","5fdaecab96c32f87cb3ee8b78a9475d5"],["/tags/MachineLearning/index.html","c1379b37914380075190e1a70bd16c4b"],["/tags/Manjaro/index.html","27ab97b53306b424ec8cb1b3087459be"],["/tags/Markdown/index.html","6eafd6f174d2ac2190cc439472f06e96"],["/tags/Math/index.html","344ac0ca646f38da215ee6df7007e1a4"],["/tags/MathJax/index.html","3469875fa4e4eb78de7a5f3f9c637b22"],["/tags/Memorizing/index.html","1701d8d8bd8fabadf25ce3565d4da376"],["/tags/Movie/index.html","d61a1baaa1715e923df9c7ccffde946c"],["/tags/Music/index.html","b81d6e356aa360084d204335d2df6f25"],["/tags/Novel/index.html","121339388b76486fc6720b8c0564a738"],["/tags/Office2019/index.html","d84db000459d195c45d0ec2dd5a400bf"],["/tags/OperationSystem/index.html","0985725e8b85351a330fe416c7b9859a"],["/tags/Origin/index.html","31b0e9507200286ae717b1d002f80381"],["/tags/PersonalDiary/index.html","56d090d1832d22cf8c3fa69ec3ea5579"],["/tags/PersonalPoetry/index.html","228c6e889bab5be0fb04e841467c13ed"],["/tags/Photography/index.html","a6efd88fa174920c016d941a4e0c8515"],["/tags/Port/index.html","6e106d1819b0e0c4dcde961749a1e2a9"],["/tags/PseudoCode/index.html","0f878e1cd26540b9a225d3669871f720"],["/tags/Pycharm/index.html","e2725afa31fed7af9251eb9e63fd1bc0"],["/tags/Python/index.html","e48dad0335d01c57b61270e283ed18ba"],["/tags/ReactiveProgramming/index.html","0b88d9af9bb1e905c440b97868f7c2ff"],["/tags/Regex/index.html","3414ebd4c15744b657b1bb832385ec1d"],["/tags/Research/index.html","9509dda6341fe3cffa91f2bc511777b6"],["/tags/Resources/index.html","f96ea29afc223397fc4af96bcf363ecb"],["/tags/Router/index.html","c17a08aa02375b2b456a814ba788ecb6"],["/tags/RxTool/index.html","b8a26dcbc183a9521a09a9941212b9c4"],["/tags/Software/index.html","8dc556c8fa774cb53edd9854a44f5046"],["/tags/Spider/index.html","9bf8a0fd7940c70ebc17724ac592e773"],["/tags/Steam/index.html","a5b37215770c7ff8844f0ed05d218390"],["/tags/SteamOS/index.html","0cf18a736c4200c25eb93a505cd79df7"],["/tags/TA/index.html","7413b3991c56b21d7831d970e3dcf388"],["/tags/TechnicalResearch/index.html","19996f6048670a60b1f05b8df71a6876"],["/tags/Teleplay/index.html","8a42cbdd1181073024583b79afb9c288"],["/tags/Thunderbird/index.html","9f3d656875e28982d7d022591648fcc2"],["/tags/Tool/index.html","ad457de4fabd5ede9f485039391061e5"],["/tags/UltraISO/index.html","b79752afb401c171016ee26afd184f53"],["/tags/UnitTest/index.html","4a9ebbc9eeb195f558906c3efb1505fb"],["/tags/Unity/index.html","8d5d68e0085436ec024521af59ce0bb8"],["/tags/VLC/index.html","689981b2163cd3149f7346dc160b0a89"],["/tags/VMWare/index.html","026309071b3c7ece5a12d1973ba9d51b"],["/tags/VisualStudio/index.html","ce7fc05e2f0ef4a340617a898dcb8a31"],["/tags/VisualStudioCode/index.html","8519bd5af2567c397684deed6f756a1f"],["/tags/Wallpaper/index.html","2e1e592cb77b50759215c5b739cd520f"],["/tags/Windows/index.html","3d91d9e75075cc3a087e598d4a63a498"],["/tags/index.html","2a6e2e5f1e9ed6d1485990f7d31f90af"],["/tags/专业术语/index.html","c0d1e71be812342a288a5c3fa88be1a2"],["/tags/个人所得税/index.html","7f8fe327078ca539d6025f9325479ebf"],["/tags/五险一金/index.html","61c9140f2f76737306818eb7ac4deb67"],["/tags/亮剑/index.html","283f614de70a84094bbcdc71fa92d228"],["/tags/仙剑奇侠传系列/index.html","e7a13a67c4a42ee3871425c4dddf961f"],["/tags/劣币驱逐良币/index.html","8e9060469190c7a774af1def8eccfd59"],["/tags/千与千寻/index.html","050ba198573c0d821ad5f79436e57f9c"],["/tags/宫崎骏/index.html","07a6652b8a6a3572b0957474d9620390"],["/tags/小王子/index.html","1f598e876e5d868a7483c591dd9c1340"],["/tags/开心鬼系列/index.html","c96e3846e0ce241b5cfab2ad618b2e84"],["/tags/微元素/index.html","f1cdf3aabd629e4629ba8ff1a8526b9e"],["/tags/思想政治/index.html","f855814b9ec7620b4f41e3f068d61e79"],["/tags/数据结构/index.html","5988c8bccee54aa96f806e27fef4b8ae"],["/tags/新型冠状病毒肺炎/index.html","82b9d700e6c1a54165ad485b04db9389"],["/tags/游戏资源/index.html","d9587408622091e265efba0a4b42ba7b"],["/tags/盗墓笔记/index.html","a2d6861df2edbeb5d1586404e0aa42ef"],["/tags/线性代数/index.html","291786236e108903fdaf110b6b5cfc83"],["/tags/网络用语/index.html","467d4518878d638ba7c37d1b2c86bb19"],["/tags/英语/index.html","0017cfa4cd43b0c52dde7262c7720add"],["/tags/软件工程/index.html","0cf3ba390b221131629d229f3b23f865"],["/tags/高等数学/index.html","d6d14d06db92c6d2b697d83fead1d517"]];
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




