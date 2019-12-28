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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","958f3de97baed4d5382c689df1a3e75b"],["/Anime/小王子电影的共鸣/index.html","d3b972359c4e2da8486a0a2165429b5a"],["/Daily/Memorandum/index.html","2b9f71d6dfbd893914c4ccff391c9359"],["/Daily/生活小常识/index.html","e9d5e855b2b0be63a3df47097c68fab7"],["/Daily/网络用语/index.html","5795749239dcfe636090ff9d1a9552c5"],["/Design/设计用户界面的注意事项/index.html","0d9705731ddce7dfc9d08f19094aed11"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","bd22ab8fd50c20f33efd2729ec69d1b0"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","d1a42730d74f0479ea9883a4c12ee50e"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","0b3ba3b892f0a00a0e897a979f25fa9b"],["/Game/GamePlatform/Steam/Steam库共享/index.html","c15bf570b942ebe78acfaefb793c9adc"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","e93a06bfca7aced171434a4ac5aecb6c"],["/Game/如何独立开发一款游戏/index.html","da90dda8461ee71fca0652608901fed1"],["/Google/Chrome/Chrome上网助手/index.html","5e42995a16484b37de48ab15517bbd74"],["/Google/Chrome/Chrome使用技巧/index.html","39c96c165a6e831c23a8335802893039"],["/Google/Chrome/Chrome插件/index.html","7f2746b6d49cd531485a9d90edcc0654"],["/Google/Chrome/Chromium/Chromium/index.html","1bd855e6023f66f16d2dc8da616a00ea"],["/Google/Google搜索技巧/index.html","bfd351858a4b5cae16ee62b007a22ab2"],["/HardDisk/硬盘分区结构/index.html","d25553ea636dd68d7bdb0bdfa88fc506"],["/Hobbies/Guitar/吉他入门/index.html","2df18595481f2210e622b10dbf17e1aa"],["/Hobbies/Photography/摄影入门手册/index.html","a5eb431570c1525e46239557d91c5924"],["/Hobbies/个人日志/芦江曲/index.html","b83a1dbe2c74abf0689f44e36796dec2"],["/Hobbies/个人诗集/闲情逸致/index.html","e8c147776dafb7507b41a69281585301"],["/Interview/2020年字节跳动面试题/index.html","48c3dbc98c860d6cd301db1f06182813"],["/Movie/HongKongMovie/开心鬼系列/index.html","da78a5de423ea3d6ada3eb94c2b40f03"],["/OperationSystem/Linux/Linux分区管理工具/index.html","ee221b460640efde13a19c0c438e398b"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a8ef5ea6521c7c937ad15c40eb163ac1"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","fffb9ec1e5214ae5f52ae99b1b1e98ca"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","9d953c87c9c7562ed81e3b68840e1b77"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","28c3c6a66f29766f57b5c0051b98a9b7"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","01f7da18c4c245dc2e4b46ea1e4eec42"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","012c05eb66f3f596852c467466eb46ba"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","054c4978aa4c7d425e84b59b5caa4911"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","521a901cb3eeac027c56ae3af19fe71b"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","575e5cdbfda82c964c75e4c8bdbc517b"],["/Research/Math/线性代数/线性代数公式/index.html","2d3591f82b137ee0dd97a1730c92d72c"],["/Research/Math/线性代数/线性代数知识点总结/index.html","2462e075912380a85ce6a27a1fd49ba5"],["/Research/Math/高等数学/高等数学知识点/index.html","ae727478d49f3ba4cfb3f9c1e2137815"],["/Research/Memorizing/费曼技巧/index.html","d7119413a6db434f8234a4d548bc0b0e"],["/Research/思想政治/考研思想政治理论知识/index.html","5a6dc5c15ea765681206a2c19e46c1e2"],["/Research/英语/考研英语作文/index.html","d7687b8fc8a49f9a1adeae545578cc99"],["/Research/英语/考研英语词根/index.html","b0c2a125081bda8192f7d2acdb4c6f11"],["/Research/软件工程/PseudoCode/伪代码/index.html","51d4008f52598077e67e1051b1b3198b"],["/Research/软件工程/中南大学软件工程考研题型/index.html","6abc0df61d196f2cd37fcdf1f42c8045"],["/Research/软件工程/软件工程基础知识/index.html","48083e784e6378ea3019bf4f4e65e8f6"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","57b31ac37799f3ed7e1f0429e8bfa789"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","7ebeb40bbb496768d844cbdf3717d514"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","98234a479a6fdce8e004689ea7737804"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","f2a1e0bdc825af9c73102d8af5a6a968"],["/TechnicalResearch/Base64加密原理/index.html","43098d5261e124bd4fd4b44a7d4b401d"],["/TechnicalResearch/CDN/index.html","df340e409984d4d118088715e70c0419"],["/TechnicalResearch/Git/Git/index.html","1738dfe2c660551cc1b55a4f9a437738"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","83df3235da4ec14084e76e688c778530"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","1235a5634dedcbac4fa264da4848f585"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","21afe7cbc4c15a8da0696a0bf195b741"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","be51d477b5ce99bc2f76b14ac5cd2941"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","61bdbbe1bc52150966d3402019b7fa08"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","d6706567d57192c55ccd19cdf7e46064"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","86fd1ea7792446ffd4ac5c50c67a6713"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","f803465458219b7d02811eda4f4dca18"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","c7b12415c605fc498cd53f94a8db26e8"],["/TechnicalResearch/Java/Java基础快速入门/index.html","a9930e0ea1af863758c83ee4afce3ad8"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","a4d9f88045b4793d790f09062d2e173d"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","1b60f485df4b7ec64b84b55e04979822"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","afa7d718d5919ed834f4d759dce8989b"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","1b62f349e28bfbe51542d8cfa7383e9c"],["/TechnicalResearch/Python/PythonExercise/index.html","ca842e3c3e08a3a2f39c961197484de8"],["/TechnicalResearch/Python/Python问题归纳/index.html","076f8d9edb2fc8d37b44e18d0bfbe2a3"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","5a4ae87ff918227da3389bad83c880ae"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","2a392f2f3f28e356f67b01a3cbbbd3eb"],["/TechnicalResearch/服务器常用端口/index.html","a5ba6d7a9c59f4a0adb2fd9f838f778d"],["/TechnicalResearch/正则表达式/index.html","db2de6228c897c1148228106af5f9063"],["/Teleplay/亮剑/晋西北铁三角/index.html","eae9e2a13b77afb2000098281c3c724a"],["/Teleplay/仙剑奇侠传系列/index.html","72c743da95407373abde01948a7f5796"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","911b5f0b9e9b9359085cd9bbde5dbc26"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","f14e5ecd3ebad34724465cfbb1eb7167"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","ae70623ba1ec22189ceff27d6ec1b002"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","5005b7e8fd9e59c37e0d8602f6e46a0b"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","caeb122f2aa3029a66fd93623f20d342"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","eb9ead9313f3801a57c2935237c3f250"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","56f7e0d9f7d33539fe78d25fc50df36a"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","1bb2aca90d0e9b819925311725914289"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","860bb12ac211f55ed7db1818f8d39960"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","0c61fc09b1571387a33374d16487893e"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","cd65677c88ded462b5d46c228f8ccdc1"],["/Tool/Music/网易云音乐/index.html","936b5fed4b52c730fea1ffe699cff038"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","2c07268b9ba967be1a3029ebf27eb61c"],["/Tool/Windows/Software/VMware/VMware/index.html","ea0f49af7c3015691a96f8bfffeedb67"],["/Tool/百宝袋/index.html","ea053432713fdfffe010cf6e248fa5d6"],["/Windows/Software/Office2019/Office2019激活/index.html","d14c63e00354eca6c1ad09db6ec2c2ab"],["/about/index.html","342707d975db8c87421882d20040f1c3"],["/archives/2013/10/index.html","3fe808b0535a63441c8b9539a90aa821"],["/archives/2013/index.html","a81212907b0a01e64a51318bafa229a9"],["/archives/2016/09/index.html","df0e8f8b27ebf7a0093063eb6db031d0"],["/archives/2016/10/index.html","128ddee7d7b1809f796cf6bbecde01b4"],["/archives/2016/11/index.html","7cc1cbe72da7f648f6cdec48f19ffe33"],["/archives/2016/12/index.html","6c5e0684e64f6187905a1e9a010f6b21"],["/archives/2016/index.html","109da71d179a06c760f13d9813a7dbb4"],["/archives/2017/03/index.html","814833c3b0bc55172d71b1b3f24b81c5"],["/archives/2017/06/index.html","2a8da0a0b6abd438bc8334db812e8b24"],["/archives/2017/07/index.html","387cff7c3f7736840d2003740695d6b5"],["/archives/2017/09/index.html","bec64f163ca540027fd9575dafd5a875"],["/archives/2017/10/index.html","b0ce4cc9030d29b1ba2493ab5196755b"],["/archives/2017/11/index.html","226c5f794a1ed0b94ee2caf3c6c363bb"],["/archives/2017/12/index.html","bc781d42441ad50fcc3e816da4a63f42"],["/archives/2017/index.html","f9a35be779ff8d767fee279221857f5b"],["/archives/2018/04/index.html","93630ac25c70021b268ba2ea8c89a89b"],["/archives/2018/08/index.html","81832b0b54f8d5fe2089614a35accc22"],["/archives/2018/09/index.html","2d8f00d05b1d56d7bac2f87b6a0d8873"],["/archives/2018/10/index.html","bba3196c743d495b31a62025a0ed73e6"],["/archives/2018/11/index.html","a4c43292e59aebca892f70b92bfde02f"],["/archives/2018/12/index.html","4a749c48affe804e05c47352df1a0688"],["/archives/2018/index.html","0ab7567f60612f1078d93cae30a5573f"],["/archives/2019/01/index.html","d1c77d2e47ae57a5d31a0d9597c30f4a"],["/archives/2019/02/index.html","5d8cc24eaf2f45de62a7ca6dae86de04"],["/archives/2019/03/index.html","368dc7fef47f01e2dec27688577116d6"],["/archives/2019/04/index.html","80842126e5c56461bbd24bcad6d6a01f"],["/archives/2019/07/index.html","c287123eaee416245d73c7d31a7c1e92"],["/archives/2019/08/index.html","4828a02322ee78300f078bd0743577ed"],["/archives/2019/09/index.html","73bab37446bb591e4b3bcc5a1f9702bd"],["/archives/2019/10/index.html","45908a9aa896c0004ec1a0ec4fb53c69"],["/archives/2019/11/index.html","f8af781bb87a5a517ae7c19885728525"],["/archives/2019/12/index.html","8d24e6386bf8bee889a3db9162525f45"],["/archives/2019/index.html","ef12aa7c6fe59f88d101b401859b1eba"],["/archives/2019/page/2/index.html","a89d5c8d184452f0fe2033832f1d252b"],["/archives/2019/page/3/index.html","8809c303cc2d287af75b0ac625a6711b"],["/archives/index.html","460be5fc93d2ce4a43e6ed332fe0c95a"],["/archives/page/2/index.html","ed866c4495dc951718c23cc64f5c2db1"],["/archives/page/3/index.html","c0e0f52bd5c3fbdb803c224b737148bb"],["/archives/page/4/index.html","98b6d9e8f5c3999a7413e29da25b8eaa"],["/archives/page/5/index.html","c6f64c98739dd8a8d3aafc3ebe854b0d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","e17aba67db8f58b6d2a7971261fb1204"],["/categories/Anime/宫崎骏/index.html","310bdb99215159a319377db1387c574d"],["/categories/Daily/index.html","410299ae2fd7c21d3f5a6fff09cd9c66"],["/categories/Design/index.html","b25eff4ebe8bfab69b58cfcd54305548"],["/categories/Game/GamePlatform/Origin/index.html","3cd7b4c1c86aafc0a16857c9006500e3"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","145d8138387b9ac9a35a52cb4ead7325"],["/categories/Game/GamePlatform/Steam/index.html","389e04940e1a7496867869cac5744097"],["/categories/Game/GamePlatform/index.html","cb1e67b2922a3da869f5a2642861d3ba"],["/categories/Game/index.html","6202b3a51c3cf99a1b7080036e9baf00"],["/categories/Google/Chrome/Chromium/index.html","0942532f3287c2e401ae94e110b3f3d2"],["/categories/Google/Chrome/index.html","6ef954ad84a89b7ccd9664a6552dab98"],["/categories/Google/index.html","741193ef862997208fc4bafb980b1c6d"],["/categories/HardDisk/index.html","991b2d4187b52d61ab5ca6ab0ae27d56"],["/categories/Hobbies/Guitar/index.html","e5a5a5d352ebb43efc734b31f61ef30d"],["/categories/Hobbies/Photography/index.html","2cf15aac65bb88ce1695eb6e04281769"],["/categories/Hobbies/index.html","061aca6fe5572b90415a66f58bb1449c"],["/categories/Hobbies/个人日志/index.html","6d5e2de384d14a0da2c1efe5ea9172ad"],["/categories/Hobbies/个人诗集/index.html","0e31222c8fa5c907c2132145b2dc84c0"],["/categories/Interview/index.html","dbccae2e23ca89ffc55a388ff52abcdd"],["/categories/Movie/HongKongMovie/index.html","95bdd91b2068a4f66f2afaf1262ca340"],["/categories/Movie/index.html","93137da6934ba92aefbfd26ec81c22a4"],["/categories/OperationSystem/Linux/Manjaro/index.html","474f0a89e5e1535af725d5b7c8591cd5"],["/categories/OperationSystem/Linux/SteamOS/index.html","5c25f08328ffc5077f929398ede310e7"],["/categories/OperationSystem/Linux/index.html","b537bfd80d27399447fc0306e78e7efb"],["/categories/OperationSystem/Windows/Software/index.html","145689080d273ce74b445a4eaf784665"],["/categories/OperationSystem/Windows/index.html","7454ec977f2e445b63c5c1b92aa5a6f7"],["/categories/OperationSystem/index.html","b229d058b81dbd050b4d919abba7fc78"],["/categories/Research/Math/MathJax/index.html","9cf871444668ef4a3eaff621d31f1445"],["/categories/Research/Math/index.html","bcb45256ccd21e287b56aab220a58143"],["/categories/Research/Math/线性代数/index.html","08452720fe6c191ee3354b0015406599"],["/categories/Research/Math/高等数学/index.html","6af839836fad313eb8be72ba609ac2be"],["/categories/Research/Memorizing/index.html","faca735706cf4bc2a62d4655b394a1df"],["/categories/Research/index.html","9f3caa5ba4da4f8717a72af996142b27"],["/categories/Research/思想政治/index.html","5b4ee152c21548a97105dec15704c53a"],["/categories/Research/英语/index.html","f5866921a1185bd2e8cfdab33e9f8b99"],["/categories/Research/软件工程/PseudoCode/index.html","c59ecf508759ee91913119a446ee7d79"],["/categories/Research/软件工程/index.html","af71db0e204f410061f659d4e7421a87"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","866c524b0ae5d7ca73a5f6d0b32f52e0"],["/categories/TechnicalResearch/Android/RxTool/index.html","051b89634745d1bc32f09cc1ab8707ab"],["/categories/TechnicalResearch/Android/index.html","807f655ff8cb6493ed6536bf052c8ea7"],["/categories/TechnicalResearch/Android/单元测试/index.html","6acebc6f866aea7d8f8b3dd328faf98e"],["/categories/TechnicalResearch/Git/index.html","142e2a4f7e6a3755b6876bee8131ce6d"],["/categories/TechnicalResearch/GitHub/index.html","29e3cc5d00935a024db68b1ea7711e2e"],["/categories/TechnicalResearch/Hexo/index.html","6531b08fbdd941ffde9719c348f42e4a"],["/categories/TechnicalResearch/Html/index.html","73a57c5fbc4654d7556544de88cedb19"],["/categories/TechnicalResearch/Java/index.html","d8ef84e170bd177320b498f67dde3526"],["/categories/TechnicalResearch/JavaScript/index.html","f6af2d8f633eb6fb66373df7309c792e"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","9a63ff5222ded12c9a053c61ae8c2510"],["/categories/TechnicalResearch/Markdown/GFM/index.html","8a87a50b915387d8b55eeb7230d6336f"],["/categories/TechnicalResearch/Markdown/index.html","e8ee69c4a3cf5719c9d7d86f8dc4b404"],["/categories/TechnicalResearch/Python/index.html","beee0c18a65c909c8053c47ad1d91b99"],["/categories/TechnicalResearch/Spider/index.html","1c328c01d277ec7fd01110cc22235b05"],["/categories/TechnicalResearch/index.html","0aa49376b09efcddef3f6dd050327c6e"],["/categories/TechnicalResearch/响应式编程/index.html","88a288c519c48122512eb32fc502ce62"],["/categories/Teleplay/index.html","1c38ff1ade2859f447afaa78b98b4433"],["/categories/Teleplay/亮剑/index.html","a43780384a1e2d515b42eeb4c692c7c7"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","4daede6bec3a397b8795bbb410ef5d7c"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","e1522c8b2b73a40c0d8ae052f130ea6c"],["/categories/Tool/DevelopmentTool/Unity/index.html","29faa4317d574f667a7b6bd043053e50"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","d0f1330d38d658617aa4d874275b1e7a"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","313ee3e0ef62f7f99ff83b046d744aa5"],["/categories/Tool/DevelopmentTool/index.html","d8031842e348929b1227ecf4ed401f89"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","44a1a77abbbe089e80a049cc93843fe5"],["/categories/Tool/Linux/Manjaro/Software/index.html","74ab6e4a67a6160fa744df5c85f3b0a7"],["/categories/Tool/Linux/Manjaro/index.html","c04af339ac9f01562d29f8b57ce98225"],["/categories/Tool/Linux/index.html","1cf9d917225c5f12843882bce9760379"],["/categories/Tool/Music/index.html","7f349769124f5d96a93db6468699dea4"],["/categories/Tool/Windows/Software/UltraISO/index.html","1ddf4a80381adc7400c25b26ba5d7dc6"],["/categories/Tool/Windows/Software/VMware/index.html","85add04c3f27e2c142a966a797a9a721"],["/categories/Tool/Windows/Software/index.html","9f3c704ba09368ca450d21f04df3148d"],["/categories/Tool/Windows/index.html","bc5b1fa004449e5dd530f5a521bf98f9"],["/categories/Tool/index.html","337479e30d868c93f1ccbc806c2783a4"],["/categories/Windows/Software/Office2019/index.html","a58293b5f542ac0d7d14ab17f48ca433"],["/categories/Windows/Software/index.html","1de16092f0dfc082cbc7e8175c01e28d"],["/categories/Windows/index.html","bee366cbb07f6ddf1b970aae26d05cc2"],["/categories/index.html","6dd5a0661290018650ea13034d602540"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d90d2a35df8053aad443f3f98625463f"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","831e32c52e5cb94842da24810baaf34b"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","d363516178683a8eb2e0e28f27814a17"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","1b6c292322791937cc77d60fe8c47709"],["/movie/index.html","3f687d3d6e42b823cca4424440a944df"],["/music/index.html","1f09eca7730f0fe076d1bcd286315032"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","ed12e3e58f3c932f5fda5325b8640fa9"],["/page/3/index.html","944ffd85e79083b06169690eb6c7074c"],["/page/4/index.html","3f00e304025a3f20da324709a9f47bf6"],["/page/5/index.html","b3bb417181d5a144047250209bc48ade"],["/page/6/index.html","7b0adae8591c3d8936158521be6abf4a"],["/page/7/index.html","ea67d907dcfe5c17e655e9a83659942f"],["/page/8/index.html","8773f7d536df2eb8b38fbd692fc43f49"],["/page/9/index.html","710665a978485ca742c125629c3a9621"],["/tags/Android/index.html","ec06bcf28093025a6fa5278661b49245"],["/tags/AndroidStudio/index.html","8244d261791b1c466cd817a50742410d"],["/tags/Anime/index.html","69e2beb496a69c7e33e6096b9361d356"],["/tags/Base64/index.html","e21ee83bfd16ccf1bf34fe6902eb6418"],["/tags/CDN/index.html","3f155bf1e268ad7e97d2184942894826"],["/tags/CSGO/index.html","f669391f25eb9f2ff0162bd33ec6c6f6"],["/tags/Chrome/index.html","521beae3f8a50a84cb7c4fa8be358281"],["/tags/Chromium/index.html","f92582f7a559c2cea0b1f7a299595db5"],["/tags/Contributor/index.html","4c892b85cf23abe71130e2a50cd7c7e9"],["/tags/Daily/index.html","3e71d1394921864b98cc254c5d917181"],["/tags/Design/index.html","44224b0fc28b8425b84db778d5252b8b"],["/tags/DevelopmentTool/index.html","e37bfc57044c094579b94154299e814a"],["/tags/Emoji/index.html","f244e6a6b45a30e654a8ffd105ea8070"],["/tags/GFM/index.html","34654868bdff97028d52c288d885bf64"],["/tags/Game/index.html","468134174bc58bc2666d76b16ad1f100"],["/tags/Git/index.html","e14d0abe87b3dd3525a458da2978963f"],["/tags/GitHub/index.html","51ae899f7eb3f16b6d03ab490b6bb440"],["/tags/Google/index.html","9da47d478abf78a13ba33bd3b2b1b230"],["/tags/Guitar/index.html","ccb2526deda3d5b52ab046ea8e1b17f5"],["/tags/HardDisk/index.html","16f3820b058f8fc3c730ddfb12ecbd9e"],["/tags/Hexo/index.html","7f444bb572fdea35021dd3cd110f743c"],["/tags/Hobbies/index.html","86b88414bb5fe76233af90cf8e4fb49e"],["/tags/HongKongMovie/index.html","a8eff1b84321d6bb29b6bfdd42fbf197"],["/tags/Html/index.html","bd3b9ed4457d1e701d32ec45c9f253e5"],["/tags/Java/index.html","1b7d0d2e0cd640a8e27158aa06e410e5"],["/tags/JavaScript/index.html","e15ff590af0b9d472a725582eba63278"],["/tags/Linux/index.html","7fdb401c4cc92e372b84e7184816d8e9"],["/tags/Manjaro/index.html","010ed92c3c928a844ec32a3d47b2d09e"],["/tags/Markdown/index.html","de75545c0af1c0d985049689f64686e0"],["/tags/Math/index.html","79cb861a84346b1ec9ce258549282d2e"],["/tags/MathJax/index.html","0f9eb21a94d88d14d011fd1c416e20d5"],["/tags/Memorizing/index.html","20163efebf9e58f84f0c6b11da2bdc58"],["/tags/Movie/index.html","12a63af92fe789bf4edd49b68898f49f"],["/tags/Music/index.html","b481306a3f5278c13cec531198b4b05f"],["/tags/OperationSystem/index.html","105a9545d17ed6d281f03feada2b20de"],["/tags/Origin/index.html","bfa688fc5fd01e7fb0d3e7fce260b300"],["/tags/Photography/index.html","36436d3903f39a5ca697a37f552f05e3"],["/tags/Port/index.html","4b7f85b7893f024e9ecf059d847da09d"],["/tags/PseudoCode/index.html","440949426c6238fdacdb34c5cd6fcf65"],["/tags/Pycharm/index.html","379d2c69d56fdba5d8aefed610912545"],["/tags/Python/index.html","7dc816370cbc4c20825fb8c3d57f8781"],["/tags/Research/index.html","58c6461e9248111f059b8d5f36859ce5"],["/tags/RxTool/index.html","c9ee26681e461292c19fad2347494181"],["/tags/Software/index.html","903b06a7ac8d44fff04a0da283bb5154"],["/tags/Spider/index.html","31f3bba236681bcf728b7599d2972d38"],["/tags/Steam/index.html","f59604802f2c1f5fefe7b6a16217b35f"],["/tags/SteamOS/index.html","2ea507c464ab57ebe5973af9eacfb8e2"],["/tags/Teleplay/index.html","6f2fd9cfccb1af5e02d783f5bf45380f"],["/tags/Thunderbird/index.html","981cdc743d9a7a301590346b594e1b04"],["/tags/Tool/index.html","1072cb01b2f86899fa0b819cb6109467"],["/tags/UI-Design/index.html","96a9a6565c63cbf053234a773d7dd07a"],["/tags/UltraISO/index.html","8398dff86686c6c0decf776e5849bc43"],["/tags/Unity/index.html","2a9898bfeaaf422e4a40486bbfb4619a"],["/tags/VMware/index.html","9e35905d4e90448ae5097999a3fd8af6"],["/tags/VisualStudio/index.html","3a62250249b37ee1541e375f6e4476d2"],["/tags/VisualStudioCode/index.html","43628f7c16a5304ee7a92c54fe345c6e"],["/tags/Windows/index.html","2f122d29778b0dd05445cdd8f266c288"],["/tags/index.html","57f85ebf9c26e75a7dc41548f4171b94"],["/tags/个人日志/index.html","65faa89c4fadd28d02d8d9ddc8386234"],["/tags/个人诗集/index.html","50c80cf2751680425dc7440aa8da35c6"],["/tags/亮剑/index.html","cd3a355165c48edb8874d097c67dd869"],["/tags/仙剑奇侠传系列/index.html","5b571b47fca5ac5856aa55ed5fa1945c"],["/tags/千与千寻/index.html","b0bfb1017e2db0a59bf3e52027b9b00c"],["/tags/单元测试/index.html","32cfd9d647aad0f6f19a758ab79b65dc"],["/tags/响应式编程/index.html","344425e9968bccdd0f89ad8556a83034"],["/tags/宫崎骏/index.html","20d36113e5779c943e01e96ab6e1a9e8"],["/tags/小王子/index.html","08b7fc87691f091bcf56546dc6727d8d"],["/tags/开心鬼系列/index.html","130ccd5ca1714b06fc6e2bf75fe94b97"],["/tags/思想政治/index.html","2bdf5d19ae3dae033eec99d6307bfe33"],["/tags/正则表达式/index.html","fc7caae3c4f6de6676df63662bdeec73"],["/tags/线性代数/index.html","2690015123de4c00d786741080019af7"],["/tags/英语/index.html","a5553f8ce1e1d216821849f190f9db7e"],["/tags/软件工程/index.html","f6d72f4d19cddb2ccdd253ae8bab2e6e"],["/tags/高等数学/index.html","b11081fa16dd6fccb17ecd3266c81c3c"]];
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




