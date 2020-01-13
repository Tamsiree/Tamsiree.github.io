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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","f1f40a4824bf64bcc5e86ccfcf02d0d1"],["/Computer/Alienware/Alienware更换电池/index.html","936b641c6158ca8d4d8a4213cc4a10c2"],["/Daily/Hobbies/Guitar/吉他入门/index.html","5734e9bcd7c7dae05b95f2129049b68d"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","c2965c2905869dcb0fb375147f4c738b"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","d85117dc74acc4f133130aa3e6fba1d3"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","30e3bb717045fc76798e5991c66c375b"],["/Daily/Memorandum/index.html","6cce7767576e8d91a2e0cba32b45f01a"],["/Daily/生活小常识/index.html","320de08348a40eae41ee9c65734bca93"],["/Daily/网络用语/index.html","8641458217b9d82f754758f11aad4f78"],["/Design/设计用户界面的注意事项/index.html","a7713f201e0f4af606606a3b63a5750b"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","5df311ec08d56ca4a37e900210ecfd38"],["/Game/GamePlatform/Steam/ARK/index.html","35653b1533cbd08114a3345d2ff28f0a"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","9c01b95c9b726f1164abd1a39e85bcef"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","c2942ffbb5d3d7882b2032e0222aed58"],["/Game/GamePlatform/Steam/Steam库共享/index.html","06ec15efe873d82496b1b37d90d3518c"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","c278dc9173dc8e9e0ffcaba9ed62bb42"],["/Game/如何独立开发一款游戏/index.html","87c0de8ff3a4e29e0c7beccd01c439a8"],["/Google/Chrome/Chrome上网助手/index.html","81e6ed630843a453b25b25f1be27cadc"],["/Google/Chrome/Chrome使用技巧/index.html","851e6e47778e977fe531eefa9c98b0a1"],["/Google/Chrome/Chrome插件/index.html","ec783a93b8d15b16afeaf82b04a22175"],["/Google/Chrome/Chromium/Chromium/index.html","902084c7350cb059cfa5bef47c1cde35"],["/Google/Google搜索/Google搜索技巧/index.html","aa8e07d756e95d13f6887fdcb03cc5d9"],["/Hardware/HardDisk/硬盘分区结构/index.html","69e5a699ce064c3b482cc60a051ab791"],["/Hardware/Router/路由器固件/index.html","69bdabcc746a7295fb3c73d2614de046"],["/Interview/Python/2020年字节跳动面试题/index.html","0631f790f0f4b65dd05d13aba5aac24f"],["/Movie/HongKongMovie/开心鬼系列/index.html","5f68c4b7859425797bab3b3d75869137"],["/Movie/小王子/小王子电影的共鸣/index.html","0a2e28ece8ca928711694d1bf6dc3191"],["/OperationSystem/Linux/Linux分区管理工具/index.html","985353357d14c558433e89e8f98a1dce"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","ceb42cd786d84939145de15ea25315cd"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","8f53af59dd00403f2d95d2a1120b23f5"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","d72110dfec258f9906777c8b12229e24"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","af8a15d1860fa612bd19d4b011bb7165"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","c669fe88d502b9e301bb0eb3911587c0"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","a54a155ec0e0208b8acccb3deeee4848"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","2f45e6b52391770aadebfadd80ba7076"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","63152f6191e48928d59821351fc76355"],["/Research/Math/线性代数/线性代数公式/index.html","d3d395b60d9c75e84296a81951858565"],["/Research/Math/线性代数/线性代数知识点总结/index.html","53006b496873291d82d96c3e99ed55f6"],["/Research/Math/高等数学/高等数学知识点/index.html","bad4786aec880a6085ea2871bdb54891"],["/Research/Memorizing/费曼技巧/index.html","a0f22bce6fac42de29a2378a8e79c00c"],["/Research/思想政治/考研思想政治理论知识/index.html","969f094d59637a682a101d7a3b7b9390"],["/Research/数据结构/数据结构/index.html","0ccfb4349a59b6328e3156f1cf168116"],["/Research/英语/考研英语作文/index.html","c1806012893896191102d2de5e2891a7"],["/Research/英语/考研英语词根/index.html","ca90d1f45d7364c6ab6a734964d41bdf"],["/Research/软件工程/PseudoCode/伪代码/index.html","e386ac1c1100c256972f7e738f424b50"],["/Research/软件工程/中南大学软件工程考研题型/index.html","de43ca2af4bedf8a83cb27623ed16220"],["/Research/软件工程/软件工程基础知识/index.html","fc82106d3916f6eaed286af443310cda"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","8dbac21d035c16efdc3d80d887a85be5"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","4a48c0b94d4716445796e901fd1da0f4"],["/Software/Office2019/Office2019激活/index.html","4d40b7bd8d44a0faeeefb0046af31f02"],["/Software/Pycharm/Pycharm激活码/index.html","1c760a869a805f9565d798d0a6e7a513"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","6255efeae474fd297bae9d56b776f090"],["/Software/UltraISO/UltraISO/index.html","9d6e519df426968eb312651ac2fa486a"],["/Software/Unity/UnityHub许可证手动激活/index.html","c0abf1141b07fbf8375eb4b144c44d56"],["/Software/Unity/Unity使用技巧/index.html","f72eb681de47854af79755edd0142d88"],["/Software/Unity/Unity动态加载Prefab/index.html","153e6e774a91e0d874c69cfa06d8f16f"],["/Software/Unity/Unity的Canvas组件/index.html","bf785dbfbd3012e5511f4b8e59d49a8d"],["/Software/Unity/Unity问题归纳/index.html","c046b4ed50803fa5d0239b1b3905aa59"],["/Software/VLC/VLC使用技巧/index.html","5cbb738f102b759640ee8f5011b493fb"],["/Software/VMWare/VMWare/index.html","7ae45cb4d6aefe72acee1dc79064a3d6"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","ea156526ecb5a23f81096d73e733928d"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","9930165b699ea558f31f4facd41469cc"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","64243261f394293ac2290c2d628cbb8c"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","f50c62f6fba415e179606b357c9241bf"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","341e47be2cbbdbe83308206edc45cfc4"],["/Software/Windows常用软件/index.html","0409c6d65c2fc9418f8681e3c7cfb41b"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","d8efb19510a890bc92f89608a5af1da5"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","1144ae49f6ef84c07acb219b963eb400"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e6115f1876ccb50e0cecd7d86ca6d9e1"],["/TechnicalResearch/Base64加密原理/index.html","b7960702cf93e4ec24354451eccb7286"],["/TechnicalResearch/CDN/index.html","5202a98fdc6dc2096b8af68473d3bc19"],["/TechnicalResearch/Git/Git/index.html","878e55582eaff52c066ca99e649afe6e"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","b07b2b947bf59f392508fc56d340e2d4"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","39f3b4b6ade195d49498134158cca28f"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","5eebf48cb05bce98f8f10b96efc81b30"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","17d000c4465d0935f06a8883dc43a485"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","b0073cb717864a32ce4a1071b5218ef6"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","484c6f9bb4c5be196405a318e945819b"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","272161ce78a072242ebd669302ed8507"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","54fd57a3f1cb635257b448c9051e3034"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","5138fc1f2edb873f9c1110eeec322034"],["/TechnicalResearch/Java/Java基础快速入门/index.html","b7941f3c99d7fd85c0e7e9c0b7b6b0b2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","3055cd6377b11d2cb0bf9d72b9036247"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","aad2cf0bf0cb4e178d20cc499b7a7f46"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","afc6dedac7c6d7ada5db4c1e75949885"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d2de9429efec099cfd437f62c499d812"],["/TechnicalResearch/Python/PythonExercise/index.html","7f80ec65c82e4af4a8f7a4cda50c4d87"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","fa8b18efe7aade5349c44b9680f1fb32"],["/TechnicalResearch/Python/Python问题归纳/index.html","ad13e314d58943bd17b4f123b2a5c250"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","097b85169e736c18a1266ee34a1c0041"],["/TechnicalResearch/Regex/正则表达式/index.html","d55536133ca9e85632572b4367062ec5"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","20a160d3f81b0f52e9ee44aada42f4f3"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","caf2d279a26bef4f3b9c1396e6cf5cbc"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","eaad0ed4aa42046614084aab4e44be93"],["/TechnicalResearch/服务器常用端口/index.html","0837a0da19fe4a5af65ebcf71a6b8bd2"],["/Teleplay/亮剑/晋西北铁三角/index.html","a3e204c93f00ad48d31147566aa37741"],["/Teleplay/仙剑奇侠传系列/index.html","3c46755a12bd384f1a9826437a2e5a13"],["/Tool/Music/网易云音乐/index.html","b708747b8705d790a7a6c1743f66f040"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","50cb014c51ef0536b54b582f4dfb0de1"],["/Tool/百宝袋/index.html","6ca945236cbe8a82261853fe4c3f8a24"],["/about/index.html","7eac2ba3c452497cf784099c19833ea7"],["/archives/2013/10/index.html","640ef8511d74fdcf142439fd6fe18e14"],["/archives/2013/index.html","12ba8caf9684d842ce3e642916a52b9e"],["/archives/2016/09/index.html","a784f0ef1fc9749d3ae2c645749a8e4a"],["/archives/2016/10/index.html","242219725cf4a2e15b91665d38d76ffb"],["/archives/2016/11/index.html","20ed9ce979466b889db2e014d817f3af"],["/archives/2016/12/index.html","c9ce6f583c6f2095da1ac80ff06f7194"],["/archives/2016/index.html","206bfa4c201baf550a96c5a76d1933d3"],["/archives/2017/03/index.html","a3b8e433c3c57be128c8835e1f607a38"],["/archives/2017/06/index.html","dcf07f1a13e8271f06392b513a798e44"],["/archives/2017/07/index.html","16ee55f2ea5e31f8bd84bf9749315737"],["/archives/2017/09/index.html","113f5cfccb4f0c8ae75cefb2084c3ab1"],["/archives/2017/10/index.html","798dba80c3738e254917d43cb1096af1"],["/archives/2017/11/index.html","268927af3809a71a96fb571af426e8f2"],["/archives/2017/12/index.html","03e66c6156dcb8cb2a5820e834e5781c"],["/archives/2017/index.html","b7acf0022b08a3f6205cfb9591ae02ca"],["/archives/2018/04/index.html","2868c4c847b0144f1ca633f32f4d1fba"],["/archives/2018/08/index.html","9f0ba5e730a6bd71f310427278fb9ba8"],["/archives/2018/09/index.html","18dbd2ff01740b0f1a1d3500cd8426e4"],["/archives/2018/10/index.html","78e26dce96acd6d19ae84c7517440bc3"],["/archives/2018/11/index.html","6a8b62104432d82814596842540cdda4"],["/archives/2018/12/index.html","cd91839fa18b4e6f566838126b6cf5c7"],["/archives/2018/index.html","8e6fa09b130c1debba8b8c309192d9fd"],["/archives/2018/page/2/index.html","155a60fc248a72c493e9354d77e4c2a6"],["/archives/2019/01/index.html","dc863cf8e5e7711fdc8b96c4babce860"],["/archives/2019/02/index.html","c0ab4c72a97800296a737196b57add94"],["/archives/2019/03/index.html","b8b09756b925e16b1e4c7401e4055d02"],["/archives/2019/04/index.html","610a4f38460a97a073078965760eaa71"],["/archives/2019/07/index.html","88f3b436c7b1490b2a936eeee00892bf"],["/archives/2019/08/index.html","c8aee69d43b5d5951398131d79d27705"],["/archives/2019/09/index.html","4dd8433d00e8c61ff3d1705fa23bf7e1"],["/archives/2019/10/index.html","506d958ff74a8861024b4619b15587ea"],["/archives/2019/11/index.html","fc29a676fcb68f6de7d1230595efbbf5"],["/archives/2019/12/index.html","149aae4f9122e1698a5173e077717fde"],["/archives/2019/index.html","050087d133b47b970ea7caf0eafcd64f"],["/archives/2019/page/2/index.html","a1e0195500fcacb5865d54cdf7c43593"],["/archives/2019/page/3/index.html","18e1497e6dc977b68eaebf2cf16251af"],["/archives/2020/01/index.html","403abedb59d6789997f09e839810c3ea"],["/archives/2020/index.html","c86a3ef7f0e1ce470982742a909b2dd0"],["/archives/index.html","4027c997deff4ac052d13d7b97d9fb82"],["/archives/page/2/index.html","7a7f6d43c05ed200fc97e28dba82442c"],["/archives/page/3/index.html","98b3cb8d0b36f626d7f13c04526e7e73"],["/archives/page/4/index.html","5c263b7d86037e0a5d093ba0cfcce456"],["/archives/page/5/index.html","b8595f4560352e0a4933436d4e76dea7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","a28eb094fec2997335a05578e1b0a82e"],["/categories/Anime/index.html","664eef0fe7f2f86a011b0296c3506b23"],["/categories/Anime/宫崎骏/index.html","ad682126548da3d9eb30284f02547ab1"],["/categories/Computer/Alienware/index.html","59c8bd350c9b313d785798af5144032d"],["/categories/Computer/index.html","3e85c83ba0e40848f3989d26da494103"],["/categories/Daily/Hobbies/Guitar/index.html","fe85f14f77336bc860dc1d24ce39a029"],["/categories/Daily/Hobbies/PersonalDiary/index.html","803b236d6fc1405ebeab03691ef40f52"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","fd3a18334ae4a5ffb5a854dd2862185d"],["/categories/Daily/Hobbies/Photography/index.html","e85feaa4c49f3716491f66f9a087788a"],["/categories/Daily/Hobbies/index.html","dba784ff8829c592d028331a4a68de9f"],["/categories/Daily/index.html","0bb6f8af6141664861cf20d7fdfc497a"],["/categories/Design/index.html","242511d1f8cbe0d367f9e1a7f866dc3d"],["/categories/Game/GamePlatform/Origin/index.html","8a13b9c359af06bf13cfedbee1e40c86"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","684b92753e30f66af063f3e30417d022"],["/categories/Game/GamePlatform/Steam/index.html","0318525d2d129fd4f4b601366d8e1d96"],["/categories/Game/GamePlatform/index.html","5b96dd1bd120f60a51d5a6b21dcd9232"],["/categories/Game/index.html","f72f530131605d4492ca646a0c7932bb"],["/categories/Google/Chrome/Chromium/index.html","b667d62510902a7952042d8634433320"],["/categories/Google/Chrome/index.html","533679a6d2151a87801cd80f4cf73c4c"],["/categories/Google/Google搜索/index.html","0ff160336a552268c031f94b7755d400"],["/categories/Google/index.html","1e5ce4a63dbf4d20669b102b0013ef37"],["/categories/Hardware/HardDisk/index.html","7c69c5291168fd3525111bc03a89e9bd"],["/categories/Hardware/Router/index.html","4732180f89cf424fe2b6ac5426a8c27a"],["/categories/Hardware/index.html","9c37b7a3ff0904f3a3ebcada8256ffb1"],["/categories/Interview/Python/index.html","6e9784755eafa53743cef47702fef2ed"],["/categories/Interview/index.html","e9820de3d24bfbb84af2d56ecd882ce2"],["/categories/Movie/HongKongMovie/index.html","a58232d004ba3acb6590d5e39b96f2d6"],["/categories/Movie/index.html","377e7355d5d8da34de940033dffe169e"],["/categories/Movie/小王子/index.html","8f0da8458726fd27a27c50790d4190a0"],["/categories/OperationSystem/Linux/Manjaro/index.html","18067d48be21648a637f138280c3c532"],["/categories/OperationSystem/Linux/SteamOS/index.html","8d42df274bf3a135d63d44c6339cb4c7"],["/categories/OperationSystem/Linux/index.html","7a3cd69b904516d4ae8ad004efb0b87a"],["/categories/OperationSystem/index.html","7eeb8d1b6b16875219f93973f6373f7e"],["/categories/Research/Math/MathJax/index.html","96763eb7a91663164f4ac35b69297e94"],["/categories/Research/Math/index.html","4ac1a968c99160cac10950a7c9e497f4"],["/categories/Research/Math/线性代数/index.html","216623cf8924a7c37da5f7e02674c3bf"],["/categories/Research/Math/高等数学/index.html","f6317f6fa4dd92314df66c98456564c9"],["/categories/Research/Memorizing/index.html","c1316e6ecda6e8f24bba7bd804ef8621"],["/categories/Research/index.html","0c415806620dab7cb9ed954f39502ae8"],["/categories/Research/思想政治/index.html","72716f4b0f6be34794b2d79b456d41c0"],["/categories/Research/数据结构/index.html","3b76f45bf4581e780241de8f0ff92583"],["/categories/Research/英语/index.html","bb87fefc41303bc2e8c7bbb45af24197"],["/categories/Research/软件工程/PseudoCode/index.html","4e699581d0061cf75eb2a64e79d95914"],["/categories/Research/软件工程/index.html","4dafc37cbfa1fbc59ebaeb877894fba7"],["/categories/Software/AndroidStudio/index.html","1cfbec48b34620ff3f2c2d56bad3e96b"],["/categories/Software/Office2019/index.html","a06a52c06216e72cdfc1b14253b725c0"],["/categories/Software/Pycharm/index.html","f681da905c468a38b800537393463a8d"],["/categories/Software/Thunderbird/index.html","214227c55cbd2f53e1515ee312473738"],["/categories/Software/UltraISO/index.html","a730ee023ae6e8932cee83056bdb26fe"],["/categories/Software/Unity/index.html","eb470c246a013ac6cefacc638edb379f"],["/categories/Software/VLC/index.html","c5949db71195bbd38afa133321fc2180"],["/categories/Software/VMWare/index.html","ac7b25356bf5e974a1056f348e180063"],["/categories/Software/VisualStudio/index.html","4e6bb1dd4efb4ca0e20008b3f0e04643"],["/categories/Software/VisualStudioCode/index.html","a682dfd90eb3ff8df790dd2e7ad9a1e7"],["/categories/Software/index.html","f81cb07f0fa9f2bd33f46069b4d3fc9a"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","e82970883ea3a7364ea0c1e7fb015737"],["/categories/TechnicalResearch/Android/RxTool/index.html","04917d300ad6349e4b3acf7f7afa13d9"],["/categories/TechnicalResearch/Android/index.html","4855a4ec43890ac82a2c1e48f714e346"],["/categories/TechnicalResearch/Git/index.html","196cbc1fca7d9adab829ea30e3bfbd6c"],["/categories/TechnicalResearch/GitHub/index.html","256ac7a6ea01385eef12477ced58d481"],["/categories/TechnicalResearch/Hexo/index.html","9f5033f63922a8f6a674340b924bbf6b"],["/categories/TechnicalResearch/Html/index.html","8cb7959ffcdd2154d82b8fe772ab0ce3"],["/categories/TechnicalResearch/Java/index.html","6665439aaaac3a437308c809cfaa6186"],["/categories/TechnicalResearch/JavaScript/index.html","fe8f89826373f56922380cbe83d5dab4"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","93d2c2928c3309ebc0d4d7fdc44d0bb8"],["/categories/TechnicalResearch/MachineLearning/index.html","e22c94385941f3eca5bbab340f38b90b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","67e6ec4cfd8c8e9701e41b11d45cf0ca"],["/categories/TechnicalResearch/Markdown/GFM/index.html","658a5ca4fbfe388eff5e999b5b8033b5"],["/categories/TechnicalResearch/Markdown/index.html","729f278c5f1d690b37b0195d7a5dab65"],["/categories/TechnicalResearch/Python/index.html","52c0b6b89df87fda5d8c54cc6ac78215"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","82bfe1b65bc590ae9a152f4034558649"],["/categories/TechnicalResearch/Regex/index.html","975f7eefb15402a67a8a4ca839b183ac"],["/categories/TechnicalResearch/Spider/index.html","b942c4e4de6a86db824ec698f0efc11c"],["/categories/TechnicalResearch/TA/index.html","7370f0f09b11c30a91210aa10203242f"],["/categories/TechnicalResearch/UnitTest/Android/index.html","3582bc4391933c2fa325f80e6623ccec"],["/categories/TechnicalResearch/UnitTest/index.html","c85974450532e5408e85627f8b82a738"],["/categories/TechnicalResearch/index.html","662af0f772b5d4e2584315dc1e7aafed"],["/categories/Teleplay/index.html","7bf4051fff41f10fdf4b4b7e4cd5282c"],["/categories/Teleplay/亮剑/index.html","24c874935b7eafd25dfffc10962f9e41"],["/categories/Tool/Music/index.html","d921d8fcd42a1eaeaf711c45f832e2f0"],["/categories/Tool/Wallpaper/index.html","6ce42e396f1ffbcec782dc3fa4b88c8c"],["/categories/Tool/index.html","b38c76a7ce81cf62025248a819b1f506"],["/categories/index.html","e055e701366dc1d99548190f3bc3a568"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2ec7fff454c64e9c4fe3768534594280"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","7b849876137ff1ebfd95433b657c261a"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a7c3e982a2d2047323710b68c078e787"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","b1d75df4b8da410b8706c308449741fd"],["/movie/index.html","6c6bd3b636d73f522f0d445c84527ef7"],["/music/index.html","8693b4c20ade529a4494e44f4d5abc47"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","802e90a3b171ecab51270dd825a30c4f"],["/page/2/index.html","782a38be0d0fc97c717dd0f89adf912d"],["/page/3/index.html","50a15f640a5af1fe16850b56199971c4"],["/page/4/index.html","48d62584bc33400c4dc3622feab0a40e"],["/page/5/index.html","410e7a06a26b48721276887f285a85b0"],["/page/6/index.html","345e92cbda4d77ae502fb030e34b1b89"],["/page/7/index.html","fbe2849fe52abdf9d932aa852f379cbf"],["/page/8/index.html","3b4a505b972198b39c7ce57e491a0431"],["/page/9/index.html","8c19237dbceb47077dfab7d03dc5abe2"],["/tags/ARK/index.html","af80faff28d297c7a265bf86cecad3e9"],["/tags/Alienware/index.html","17e4f88ef7b03175488255a835ba798a"],["/tags/Android/index.html","9429f9323c90138e655a3749943bd0c7"],["/tags/AndroidStudio/index.html","84eda7fbd6d9076f493d6c56a116c377"],["/tags/Anime/index.html","922afcca26b3a0e924e762e19f5fbcb9"],["/tags/Base64/index.html","838c7589039d5f05fd8e1be3c206828c"],["/tags/CDN/index.html","c1063c823e3fcb096950528f83666ff1"],["/tags/CSGO/index.html","3c78d34a7e150bf8029e933eae634ffd"],["/tags/Chrome/index.html","df0f95dcdfdeb6021615611faa6037c1"],["/tags/Chromium/index.html","5bd46d0ba8e3a964227e8b79b4030f64"],["/tags/Computer/index.html","b2707aea86743ae9ec93cd507a287149"],["/tags/Contributor/index.html","d7ec953157ad79a637fea1c245f8c9ec"],["/tags/Daily/index.html","253eda2fe099de89a84017dbedb28cde"],["/tags/DeepLearning/index.html","d5f75bcbeb6ebd5d2c590a51879ba69b"],["/tags/Design/index.html","38b71d0487d701aa15b922b88db086b0"],["/tags/Emoji/index.html","455377f801bbea982beeda65d67dcdb9"],["/tags/GFM/index.html","ce4d9f6e9e3ffbf04f7fb7939fa32ed5"],["/tags/Game/index.html","06bdfae91c68fed6611e92efe40796ce"],["/tags/GamePlatform/index.html","b2a0dfc2f5bcc7aff0c14ce3075230d0"],["/tags/Git/index.html","7d60a00ec5ebcc70c3781b76c84c9410"],["/tags/GitHub/index.html","0bda145b993c70aa5e7d30cc50866c15"],["/tags/Google/index.html","27dd257a634f782dd5eb3b3945389eae"],["/tags/Google搜索/index.html","ac1c9ac7c5e440ead53fdc20618a964c"],["/tags/Guitar/index.html","3b49ba7a5e6c50bf4478e654ea079de6"],["/tags/HardDisk/index.html","1c25a64f02fdce83c4e442a5104cab52"],["/tags/Hardware/index.html","b7660801766ecfd5e0d3479eff175d3e"],["/tags/Hexo/index.html","32a48dfc35738a4ca60d2b42a363e24f"],["/tags/Hobbies/index.html","1660b59ee7b308dcfcdce2ab12d26bde"],["/tags/HongKongMovie/index.html","5c2010fb9fdd5f0e17a6f9bd9b850967"],["/tags/Html/index.html","cc9b6c97fe98edc03da9094acb09fe3b"],["/tags/Interview/index.html","451e6674d350e0a8ef8ec0d627fd6e62"],["/tags/Java/index.html","986a346a018d482f4fde4d1c38c0f418"],["/tags/JavaScript/index.html","8401e72e48ae9ffbd700445680039f40"],["/tags/Linux/index.html","5be7fb33e17ae276ebb24c70ef494b5e"],["/tags/MachineLearning/index.html","50d099efaedfff8ce5f5c69cd3b8107a"],["/tags/Manjaro/index.html","a36259d124866c1f11fc24d1f4797b15"],["/tags/Markdown/index.html","33550d26136e6f02a65eede4d4520ea6"],["/tags/Math/index.html","3d3a68d70b3eb1769a169cc2dd54daa2"],["/tags/MathJax/index.html","38f7fce679642dfe5e4a69db4477b846"],["/tags/Memorizing/index.html","5f38562d1195691339db3510fbcd465c"],["/tags/Movie/index.html","e93aabad2373da41566d46613788463f"],["/tags/Music/index.html","763cac27def0fd5adceea58bdcbeb4a5"],["/tags/Office2019/index.html","6362376727b215a6941a67b0fff1bab9"],["/tags/OperationSystem/index.html","23b28915fe9f06add84108c2fab914e4"],["/tags/Origin/index.html","a2839ae66b6a1667d3f36244529c44fb"],["/tags/PersonalDiary/index.html","23034fa1e3bcd2d5aa018a89f59245fc"],["/tags/PersonalPoetry/index.html","dbe699075e53585143a0a4c856bfc70a"],["/tags/Photography/index.html","7dec07c55d113a1d16d0f3fe3a2ba6e3"],["/tags/Port/index.html","2b459e94d9b757eea6edcf693ba6d73d"],["/tags/PseudoCode/index.html","bdba9d62283c8daf30f551f5b03d73d9"],["/tags/Pycharm/index.html","1ae5eee60539e34613c317d76d449f00"],["/tags/Python/index.html","9752b916c070f3d8d512482ef52890a5"],["/tags/ReactiveProgramming/index.html","9a74a3b15d61db1bec9beef2508bac7d"],["/tags/Regex/index.html","a7169f8128a8e7ae7a984090a7d68175"],["/tags/Research/index.html","ddcd410ea4c274ffb1ab7fb7ec817b4b"],["/tags/Router/index.html","e0f8d3e85e112695452262cfc7b9b487"],["/tags/RxTool/index.html","a6f9bb20232f931fc59113c045e7d1be"],["/tags/Software/index.html","76bf6ebc94cf4f9f291ede29fd356e32"],["/tags/Spider/index.html","433f448013e0084f0987f36e1813afc0"],["/tags/Steam/index.html","24cf66790f1a519aebb43daf9861a911"],["/tags/SteamOS/index.html","4a414cc34e421763974bfc0e58226223"],["/tags/TA/index.html","d14e90b1adce9957e58ab69930618dd7"],["/tags/TechnicalResearch/index.html","b9a3b02adf9cf8a338622a5f8e9d8ab5"],["/tags/Teleplay/index.html","70690b78a033344a0273158b737f62bb"],["/tags/Thunderbird/index.html","11eaa4fda606e6f0540cc8a37a176c14"],["/tags/Tool/index.html","bc91b3eb7ebc7bbcf2e5c24dc5e1635e"],["/tags/UltraISO/index.html","3ecd9714bd316e73e9a682700f69e64c"],["/tags/UnitTest/index.html","cee32195fd237cc84a2f3c6f3da83ce8"],["/tags/Unity/index.html","2664deacb26dad45eebf5b8891f75496"],["/tags/VLC/index.html","8c078ae1791e1946adbde60a9e3186f0"],["/tags/VMWare/index.html","576ce816f9e3a55ccdd433896d024ddf"],["/tags/VisualStudio/index.html","baabb22d7ad54660ef532bcff182944d"],["/tags/VisualStudioCode/index.html","3d065153899cc8cd47be78a8933d19cc"],["/tags/Wallpaper/index.html","ada47daf7d624b5b50a20c4d5769af9c"],["/tags/Windows/index.html","6fb697d8c2a3beb0e6693372a11d786b"],["/tags/index.html","e41853b9558a8891a63d8a845718a917"],["/tags/亮剑/index.html","a35bfc6645b39084707affb192a0f3c0"],["/tags/仙剑奇侠传系列/index.html","6d12da8277b867a563ad5346117a80e1"],["/tags/千与千寻/index.html","66f580e2feaa72c0bd4cb4077c36cc63"],["/tags/宫崎骏/index.html","cb631b32a832654652d2a476c7ea0974"],["/tags/小王子/index.html","8badfb3f646a438903e644917d7871f7"],["/tags/开心鬼系列/index.html","67b2b6b39c1e914f89d4ad43653eff06"],["/tags/思想政治/index.html","48eeb079a19a46762425928004c6ede8"],["/tags/数据结构/index.html","2a49f401a0cb1acd01937d111aab9493"],["/tags/线性代数/index.html","0e614913de27c81a77458705e81c0044"],["/tags/英语/index.html","8fd2f994e44ecfda8976c4982c5c90e2"],["/tags/软件工程/index.html","fd47154e6b8e75f980674922440a6850"],["/tags/高等数学/index.html","05e27514b041ddf3176502e036de05c9"]];
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




