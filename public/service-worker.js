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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a4975bdeda85b1f96c9187e5ca21d59b"],["/Anime/小王子电影的共鸣/index.html","3fe0740ff223baa0796fe1c51bf16575"],["/Daily/Memorandum/index.html","3cb0fa1a98a73e6635e4f1ae32b070f1"],["/Daily/生活小常识/index.html","703d4c403a594b926b5bcb870f1476ba"],["/Daily/网络用语/index.html","ff902a1165655ee3c746c65a14ef2943"],["/Design/设计用户界面的注意事项/index.html","649450143e3acba75b93295462504316"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","faac8ba13c0b2022d37ed5ee05e2b771"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","895c1a2e19a6ada9848db5e1c03c2b1a"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","fe3ab0a6206bf59f1b44299269aba1cd"],["/Game/GamePlatform/Steam/Steam库共享/index.html","2d42cd1e90a9963102b1aba8f0f27b31"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","be433cb615d9e60a200517c612dcef62"],["/Game/如何独立开发一款游戏/index.html","807d4b819f87065d90b90fdbff0d2f44"],["/Google/Chrome/Chrome上网助手/index.html","1b91706b23c47187bd057bffd270f86b"],["/Google/Chrome/Chrome使用技巧/index.html","0f4b8339cc8fd3d918dac020c4c7d25e"],["/Google/Chrome/Chrome插件/index.html","e1b825c5ef17b061482494e6f1b2c86f"],["/Google/Chrome/Chromium/Chromium/index.html","db12bbb1178b9fda4d71f057c1afa2da"],["/Google/Google搜索技巧/index.html","6afe4fc298cc34fe85f674483632747b"],["/HardDisk/硬盘分区结构/index.html","de687973a9c0435cbeacb12010e6cc94"],["/Hobbies/Guitar/吉他入门/index.html","fbb9c07b63b88ff6202fa046e539de4b"],["/Hobbies/Photography/摄影入门手册/index.html","0ee669f8c280fff713947eee82f26ffe"],["/Hobbies/个人日志/芦江曲/index.html","20f6292f0c02a249a05366af6d93cf3f"],["/Hobbies/个人诗集/闲情逸致/index.html","7593988e61c70e61f99c470b100a9bc8"],["/Interview/2020年字节跳动面试题/index.html","856c66aae1fef71c89443c1e1af773a4"],["/Movie/HongKongMovie/开心鬼系列/index.html","3483d40155e125c65f6838f3532ad398"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5ec1ccabe7357b009b8a72f28d1ed8ca"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","e8f9fc09beff7f1731f0a07fe068058d"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","db8b57a8cb63d85dba0b306de31c2454"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","93e8a69249267024b24e63c5f76cddaa"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","8b59d758ac2fdfd82e0121b2704b77c0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","450464d86aed214976b4ec505e6eeba4"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","5ffea4f354b94720caee86888ca949cf"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","103270c7bcb670fab73b7ecd7542655c"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","e39ff16d7c5992ac8459dadfb763d833"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","6c3b4eab5ae5227bd07cfd056fc5c41c"],["/Research/Math/线性代数/线性代数公式/index.html","fd99ec253aa422cf84f83dc12291608b"],["/Research/Math/线性代数/线性代数知识点总结/index.html","43a9f018a94926be92187bdd98b2bd61"],["/Research/Math/高等数学/高等数学知识点/index.html","8edf819fe8d68a8cc8deb9e6afe7249d"],["/Research/Memorizing/费曼技巧/index.html","3616e130279477dc557acf1384330df2"],["/Research/思想政治/考研思想政治理论知识/index.html","8d3c46e3f6dab0250360dce83c9911fc"],["/Research/英语/考研英语作文/index.html","76bba00d58f659ee82ff3609ee53d818"],["/Research/英语/考研英语词根/index.html","8e602c649f0aae521072077c6a3b231d"],["/Research/软件工程/PseudoCode/伪代码/index.html","26ca9e66b740f00f4b23e99009a8b8fb"],["/Research/软件工程/中南大学软件工程考研题型/index.html","f9e3900461a3759e0fa7afdb497cfd66"],["/Research/软件工程/软件工程基础知识/index.html","025be52a444d054442514fe28de860cc"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","86da00ee9cff9fe4cd00c225a092bfe2"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","ec4c05658c2a271d10e2f513c73cd726"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","4422484d4c56bab70645996743a0fbad"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","558d196aa065b53dfbc26b59b148b7b7"],["/TechnicalResearch/Base64加密原理/index.html","17a885167e4db240a8d06738c5594476"],["/TechnicalResearch/CDN/index.html","ac0d923cd9c2f4c3a0f6dc893a3ab6a4"],["/TechnicalResearch/Git/Git/index.html","89167bcf224de825ae3d6ca6372789b3"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","4df8733139bbfa603f308856e2261ddd"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","1054bc24de0967590abf84fa407f7969"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","dd73d7791d646295b7d362e4838e002b"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","06c02e87f7823aa08408ca9ffd124de3"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","c365b77da6157b1d0b68f98c1b227fb3"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","0180d60d52a6fe05f3de5fb91c5c8f67"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","d38b2b43efaf05a6f844b3ef7ed7e44c"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","7dea647f75877b20907ab3aaf334d84f"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","f65ef54181aa383a1810d54da285ba4d"],["/TechnicalResearch/Java/Java基础快速入门/index.html","385e31a0f9d9b89d67e5bf94da7a5403"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","7ae9fbed0e132b5d3560d7abc7e69973"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","a4e2b05b4ad3ffb9b96ed9c4b91c1dcd"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","3d038e8bf466ed8b710ca8762bc6b014"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","cb6f27335b97b962cb23658abd5b58e2"],["/TechnicalResearch/Python/PythonExercise/index.html","61aba71181943cfa83ae262b523e9321"],["/TechnicalResearch/Python/Python问题归纳/index.html","9f05363e1604e43226bbd5e155f817cd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","a5af59b4929ecdf3a0ab51505aa70127"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","cb097d91efbc0dc349ffa1dd68a6ff82"],["/TechnicalResearch/服务器常用端口/index.html","6431c38026236c431674f13894edfb0d"],["/TechnicalResearch/正则表达式/index.html","74a3e0e7522dc2d259e19717f3800db9"],["/Teleplay/亮剑/晋西北铁三角/index.html","6fa5a45eafb9c9a9a624c6413f809e16"],["/Teleplay/仙剑奇侠传系列/index.html","d69285196a03f18ba32ff46d54986287"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","a12a240757790a7c82cac9318e8ccf5f"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","59f576db82f69f62f84776718b8a5071"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","ec1536941a1e1c15bd53d8ed4f6dd23a"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","6bfbfc5338090a09b14fc9f8026793dd"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","8bb2ce88276b8d140b4cd13a39a7e762"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","2f796a0f392a04cdf1ba9df7958ccaee"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","faccb1b38f1833f57422142b57bfc647"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","9ba284b1decd4cdf81c7763c5742d53d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","e58957528467233a328a6dadc50c237e"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","8345a0fc33d8c2e32e56b38ba55d4340"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","732f7282f3e7e4dcdd76cc4a9f89c729"],["/Tool/Music/网易云音乐/index.html","30e2a0c82351795302d3d8924e975774"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","6eedb4c8c19cb054b3f30e7909404d4b"],["/Tool/Windows/Software/VMware/VMware/index.html","225b212ecd5f0d5ea3b1cd50c770acda"],["/Tool/百宝袋/index.html","15ad75f63f3ff6376fcf5a55fdb1e5be"],["/Windows/Software/Office2019/Office2019激活/index.html","ddae16bfe32848dffe0986ccf1c9f76c"],["/about/index.html","31d37ba3915e1082f988d5c381f15fc1"],["/archives/2013/10/index.html","1189ffb4e92233f4d3a769c05f27c366"],["/archives/2013/index.html","f03b0fe9199b454f129ba7118b1f3172"],["/archives/2016/09/index.html","5ee5c37f5a7ecf97180c7f52a10d06bc"],["/archives/2016/10/index.html","f04c42694c8275d03854fd0142ec5721"],["/archives/2016/11/index.html","29754f20da32cc5a6e8602026b543c52"],["/archives/2016/12/index.html","9d39d8aea82a3d8fec7b464fa64c6bb3"],["/archives/2016/index.html","99a4edd1218825101a606f4f465406b8"],["/archives/2017/03/index.html","b1b09ac1d3b3e2a4f087671a80a57a95"],["/archives/2017/06/index.html","fc5187666857908b1d9239578542b6de"],["/archives/2017/07/index.html","a8c5ea48f5273570642b7792c3837994"],["/archives/2017/09/index.html","c95849fa695c35b85c1e3b4a522ff417"],["/archives/2017/10/index.html","81a64a5fc2c69d0f389227698d0324e1"],["/archives/2017/11/index.html","658d9912983ba694f7eff013e8e1e967"],["/archives/2017/12/index.html","db5883b79398705dea7b4c633e28db2b"],["/archives/2017/index.html","49f4cfef090a838c3250597ffc0ff15d"],["/archives/2018/04/index.html","f107716345f9a3ed0fa495a4f0e0db79"],["/archives/2018/08/index.html","9e87c205f4e1215c620c15817c56a0d8"],["/archives/2018/09/index.html","7ba6c1dd7c12d70c21156f932ad77694"],["/archives/2018/10/index.html","c497daa53a7d503972e1de1e145a7aa1"],["/archives/2018/11/index.html","d2e63545f223b78ad23348a8d7676baa"],["/archives/2018/12/index.html","3796e6c5f3b6a639c1df4a02b72c09a1"],["/archives/2018/index.html","69f479a67d4b67e45cceaa12ecadeb2a"],["/archives/2019/01/index.html","45027a25c41abfa25b176a70d11be526"],["/archives/2019/02/index.html","d9e9114a6fba300e672704b603318cbe"],["/archives/2019/03/index.html","2dd9e32fe0f0e33f8124b55f84834a6a"],["/archives/2019/04/index.html","7600e4f788869d53d97b3295da16388e"],["/archives/2019/07/index.html","89c4dca696b96522be81ddeb883e31b9"],["/archives/2019/08/index.html","dfb70eca2e261f1793cdf868913462a3"],["/archives/2019/09/index.html","58f56dea9d62a26ba3474445106f9974"],["/archives/2019/10/index.html","6c486338e66705545ec07c7e999db588"],["/archives/2019/11/index.html","e1d6382084d20ecf8a115085fcea7457"],["/archives/2019/12/index.html","d51a4d0cedd5ac7f411fed07946ad1d1"],["/archives/2019/index.html","aac011f24c8e1acfd8793d629e1b3693"],["/archives/2019/page/2/index.html","19468da21376853407d82737cb598925"],["/archives/2019/page/3/index.html","c7d9c023e03df4bac076182256b34ee2"],["/archives/index.html","f7633c2e6231528840c2e211b55ad672"],["/archives/page/2/index.html","b474359d63838bf23eee2c20b8167fd6"],["/archives/page/3/index.html","f13c974740141fbd289fd09062850185"],["/archives/page/4/index.html","34b979ae9dfe97a94540a6470c88eb06"],["/archives/page/5/index.html","14c69caa6bbda915103d1533e269dfd4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","0c82369066eb6e0f22b9108451d6b11c"],["/categories/Anime/index.html","84834c01bf13283945b730a779d06b53"],["/categories/Anime/宫崎骏/index.html","e5c26dc016aa3cadc6a2d224f36b2728"],["/categories/Daily/index.html","43d0b4ea6194949ba012edb1361dd013"],["/categories/Design/index.html","627ce76a66fdc6f277c281a9f128b6c0"],["/categories/Game/GamePlatform/Origin/index.html","4fef7dee60d159ca61edae7b221d49c9"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","0c31431863875575f56db260c2b30150"],["/categories/Game/GamePlatform/Steam/index.html","f6fad41656bf2cc0f894fcb5c34434f3"],["/categories/Game/GamePlatform/index.html","74933bdd6e8776183c942bde4b388381"],["/categories/Game/index.html","2a56934ea23798eac7ce783a68e6c2cc"],["/categories/Google/Chrome/Chromium/index.html","7a67b7a77b2b8cfa39e8a468e12f9ba4"],["/categories/Google/Chrome/index.html","cd011f8610f6a7ad0807f8d1f354e3b3"],["/categories/Google/index.html","00508f6abb4f29b4530a2a685a25abe5"],["/categories/HardDisk/index.html","2aae2f3d7595a8b35c1f071ca2f04e12"],["/categories/Hobbies/Guitar/index.html","26fc116385486f0bb84b73c246ad036f"],["/categories/Hobbies/Photography/index.html","48e5711be3d5eea6046c7c5a39ad571e"],["/categories/Hobbies/index.html","83c6ca46b00ea124164bfde0a207db91"],["/categories/Hobbies/个人日志/index.html","f966868e6765e9438be531c81e2fd2b0"],["/categories/Hobbies/个人诗集/index.html","be0270f224729fb743922e7674003818"],["/categories/Interview/index.html","c3a17711f4cb9cef979db9cc1eadcb14"],["/categories/Movie/HongKongMovie/index.html","18999a7b167d2cd11146497a38769060"],["/categories/Movie/index.html","63d75a69b649ffa2f338350b493fa0b8"],["/categories/OperationSystem/Linux/Manjaro/index.html","6ee8f13a600f2f4ea68c0ae7bb178de2"],["/categories/OperationSystem/Linux/SteamOS/index.html","81f07df0dc084380235e4582e0730ac2"],["/categories/OperationSystem/Linux/index.html","1cb2293c2ddf54c11236541d24d0c58f"],["/categories/OperationSystem/Windows/Software/index.html","5e7de4ea8a5c094c16cb3ef5299fb25f"],["/categories/OperationSystem/Windows/index.html","a689a29ebd59ce26cf6ac07675cd05a5"],["/categories/OperationSystem/index.html","ce59988c9284bc32d17dd105e25fa758"],["/categories/Research/Math/MathJax/index.html","a0ac71f1d0bba012a40304b5bb7f46e7"],["/categories/Research/Math/index.html","bd89f6a814330f31840f2f05bccc73ee"],["/categories/Research/Math/线性代数/index.html","6e8c802d1f65f275f0bb82d178148e4e"],["/categories/Research/Math/高等数学/index.html","b02e77b18e3f83ffa044052547b51a2a"],["/categories/Research/Memorizing/index.html","34ddf7429cf67163b2f1bdffe829f9a4"],["/categories/Research/index.html","f3c7d043e8b17bd1442e8585069a40fe"],["/categories/Research/思想政治/index.html","317c500523c86d640b88cba18e47a14e"],["/categories/Research/英语/index.html","ab5901ee3752681fd7634f21d73a2101"],["/categories/Research/软件工程/PseudoCode/index.html","3e004f6e64c699910a2c537e81f7f6e2"],["/categories/Research/软件工程/index.html","a1c4b7c231a469d176cf5dade42c4bec"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","9dba57af7a1055ba821d7e8a879266aa"],["/categories/TechnicalResearch/Android/RxTool/index.html","003064aec39d24b7c4b28cb1947a22de"],["/categories/TechnicalResearch/Android/index.html","f37dec94059a8974ca34d44fd14ac0dd"],["/categories/TechnicalResearch/Android/单元测试/index.html","6e95ec4938fe0c25b53e124540379b9e"],["/categories/TechnicalResearch/Git/index.html","87f8c5b970fc4a44808908e2ba78f050"],["/categories/TechnicalResearch/GitHub/index.html","b51d5786d9a4b9312ea51a99b02116c2"],["/categories/TechnicalResearch/Hexo/index.html","94c5723400b12a52f01b5f0e22f5fc61"],["/categories/TechnicalResearch/Html/index.html","e7010b96be6dc1e20a431d17105820f4"],["/categories/TechnicalResearch/Java/index.html","f553618f8f57ff01784f5fcd7f280699"],["/categories/TechnicalResearch/JavaScript/index.html","2157a60a89e389d124be7e3a63a35802"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","7748077d36dfefa11a9af2c943b26b2a"],["/categories/TechnicalResearch/Markdown/GFM/index.html","557c8a079772830c12f6971d8a2d0080"],["/categories/TechnicalResearch/Markdown/index.html","607878e4678d94412d110d299e170b73"],["/categories/TechnicalResearch/Python/index.html","aabbe9a8f18ea530d5cdf63561898720"],["/categories/TechnicalResearch/Spider/index.html","96d4c94de4550e90bdf401d63ae7ed5a"],["/categories/TechnicalResearch/index.html","37026ec85bb12a1684e946d7697db558"],["/categories/TechnicalResearch/响应式编程/index.html","4134feb49c886d6c57f66b4a788d7671"],["/categories/Teleplay/index.html","2cf3817f0f3d0ea1a967513e5fc20bd2"],["/categories/Teleplay/亮剑/index.html","361a86a6bed7eabffdc5caaf67d079d2"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","0bc51babefbd70aa32cc23271e56be52"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","e3a2d5071414cb8e42f3a48758651f11"],["/categories/Tool/DevelopmentTool/Unity/index.html","bf93af47d99f174bfb5885c4a20d1c42"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","528c73c31ab1b23c524b18ca2e4582df"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","d9b69f48e724c6ade5aa3d7b7d3eb263"],["/categories/Tool/DevelopmentTool/index.html","2996c1bef51fff8a87418ec72c789320"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","b61f63f1ef72ea2152d93df8b50f0370"],["/categories/Tool/Linux/Manjaro/Software/index.html","f969c1dc618a3ce288e6476eec4562eb"],["/categories/Tool/Linux/Manjaro/index.html","09dca99a388f987870760d8a198e2e99"],["/categories/Tool/Linux/index.html","e169ef800cf1ebffddbbbc2ec9645fd6"],["/categories/Tool/Music/index.html","38482c7db4e38bfb08ec43d0e2515fdc"],["/categories/Tool/Windows/Software/UltraISO/index.html","32d298a326be8a8780051a843cea2589"],["/categories/Tool/Windows/Software/VMware/index.html","12d747fdb1c65df47796015624f8678c"],["/categories/Tool/Windows/Software/index.html","873fc697c4e75abdfda2575ae14dd3a1"],["/categories/Tool/Windows/index.html","27a386d1f4713214783958eeec0e3714"],["/categories/Tool/index.html","97d08f5a7f035e56c25273347bd08016"],["/categories/Windows/Software/Office2019/index.html","92b399f1aa67fb776ca7910cb72fc888"],["/categories/Windows/Software/index.html","d649d61741b13be1c806ff217a1bce77"],["/categories/Windows/index.html","cc27ead220331dbfc998030ba4da6a72"],["/categories/index.html","2861354ee5d2410adb07b992596082d4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d095ebfc9dfd2bf3075f0ca670e967e4"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","6ccaca1182400ccbf2d623360c69fb1c"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","484ee048c48a066202d8f35c12c6e92b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","c9aab81ec1b07349c80e14403a99ffb4"],["/movie/index.html","bfb6384d9cc211f4013828b7baf13d19"],["/music/index.html","664abbd298a56ba7445be2f9f78862a4"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","a8ba2a34f95613fbe1504da408515d79"],["/page/3/index.html","f4b8b8e085dd115da0a1e2c110cd298e"],["/page/4/index.html","1249ca84a3df0321d533238af0c9ba94"],["/page/5/index.html","38f074aed46ec8ae36ee258145733cef"],["/page/6/index.html","fa911948de4a29e976fa667acea07c29"],["/page/7/index.html","672201aa1545e89d82e714179b8a865d"],["/page/8/index.html","dd72633f7440eb05bab1d2b43c593c91"],["/page/9/index.html","e305f2c740a03ce681562567194f43bc"],["/tags/Android/index.html","66e584182e866d51c6e180086d68cf9d"],["/tags/AndroidStudio/index.html","22a938516f5caaf2983d9fc9529f1619"],["/tags/Anime/index.html","6ab68286ba59aa0a5e21570039e7202c"],["/tags/Base64/index.html","d3027a7e871f5eda6cf8e5c0d8e7f130"],["/tags/CDN/index.html","9628dce81ed2037cf5692fe8791effe2"],["/tags/CSGO/index.html","9c5ec411d9d17fd248cd682c9ab421c2"],["/tags/Chrome/index.html","1932f378eb582f4ba83a06a891985ce3"],["/tags/Chromium/index.html","12c70dbfac541ab743bff5b3aef2d823"],["/tags/Contributor/index.html","de77963f2c66c565a2154f42bcde11f2"],["/tags/Daily/index.html","1ac1ff77e68bfa10a96aa404a2038aca"],["/tags/Design/index.html","5583b3d1122f5019771c5c3ce5c384cf"],["/tags/DevelopmentTool/index.html","ed0c6f25831c1863fa018e7bc01bd420"],["/tags/Emoji/index.html","cc782281ccc7377413a494abd83c0b86"],["/tags/GFM/index.html","8460c571722ff77b640bb3f0f18b0f03"],["/tags/Game/index.html","b87a998f65424efb331b8a6f588876a7"],["/tags/Git/index.html","f34aeabcecc44d8ab1a0873daf5f1666"],["/tags/GitHub/index.html","c774c992167a9a52bdc2cfa3ecc7914e"],["/tags/Google/index.html","85f509314c89732bd18293e6d32dbe88"],["/tags/Guitar/index.html","0d8d0d3715e6b31ed75fb73032639a2c"],["/tags/HardDisk/index.html","64fa57be74c87f4df9c87576484c0c7b"],["/tags/Hexo/index.html","446cbf714c64c46a6a8bd22c2d33b8a4"],["/tags/Hobbies/index.html","575e8a5261c364dfa0ef2e7dfa24294f"],["/tags/HongKongMovie/index.html","909f91e46add5fdb23bfcd70f48b9982"],["/tags/Html/index.html","b3e79cfac27d14cf05324c819f8bdd7e"],["/tags/Java/index.html","d2ef983903ae2aa4ae2a3cc4a3bc999a"],["/tags/JavaScript/index.html","f7876d10a012a6a4f540a274bcc83192"],["/tags/Linux/index.html","3308c9dfd2da4e5e70d58fb210fcf6de"],["/tags/Manjaro/index.html","2244285cc326e9627421214fa03d91c8"],["/tags/Markdown/index.html","1ee04a2a80817e05a35e06a306393dbd"],["/tags/Math/index.html","ccb354bc7e63afef7438e46e0e5d0712"],["/tags/MathJax/index.html","b59f91331dd8f9ef764846a36ed17c32"],["/tags/Memorizing/index.html","d7aced6cb2a37ebd3f29f6f2f1a67be0"],["/tags/Movie/index.html","16249d20fda722f7a5508ebe9a926be7"],["/tags/Music/index.html","50752c3e51c2815f49a4213514fa5085"],["/tags/OperationSystem/index.html","fc06d09e0471c068ab7d7334d6d66368"],["/tags/Origin/index.html","04894a889e9fe3588d5ff20244f8bf3c"],["/tags/Photography/index.html","eea03619d857d2472a3921ea26627938"],["/tags/Port/index.html","1b1094767038c3ce98dd46b92ba01c0d"],["/tags/PseudoCode/index.html","1d8bd1c8848bc7ffa27d789664121185"],["/tags/Pycharm/index.html","8e53298ef4a9ef640e4bcf9e58e7a056"],["/tags/Python/index.html","13c9eae4077e67c96684aecb8575d5ac"],["/tags/Research/index.html","ae45d3fd4f031df034bb03656aa61e05"],["/tags/RxTool/index.html","a82a2fda474b19ab0905ab70d23a2957"],["/tags/Software/index.html","346c11c4da2bca2221031f091f1dc53d"],["/tags/Spider/index.html","d12d0f6b6fd01f9d9735c1fb2e5bf2a6"],["/tags/Steam/index.html","b60038fb48eedd9f1c20b4f24c258cee"],["/tags/SteamOS/index.html","20b9a31160ac28e8dd270436bf123763"],["/tags/Teleplay/index.html","7f1f1c20632ad31cc8a8fe7391a3dc11"],["/tags/Thunderbird/index.html","452fdb257b83684bc1dd085e0011c5b6"],["/tags/Tool/index.html","e3b548b4a88a583c8ca7a32e0c19042e"],["/tags/UI-Design/index.html","d2746aa193bcaa4cb6a21630e7781264"],["/tags/UltraISO/index.html","5884a616e599e8d472e127f2ec3adc2a"],["/tags/Unity/index.html","8652a6b5c91b6a6c1be083d7035affeb"],["/tags/VMware/index.html","486ab73aec88447b5ba011e588417685"],["/tags/VisualStudio/index.html","1d55a00cacc6a308a62a63381c236b95"],["/tags/VisualStudioCode/index.html","ba919c72276c1c55b7115b9ba66cbca8"],["/tags/Windows/index.html","00b3835c25de38d7ef9f936ee77cb68c"],["/tags/index.html","032dd83d0fa198eff4ec632a98ddf5bb"],["/tags/个人日志/index.html","a4da3d1d119092658a4d8fee21be0cbf"],["/tags/个人诗集/index.html","1ae419ce26725e66a3b001ddca31e6e5"],["/tags/亮剑/index.html","d5f9511f1794ed05577a5e94f6d0f754"],["/tags/仙剑奇侠传系列/index.html","215454f8807d812ab8de8cd71e359be8"],["/tags/千与千寻/index.html","f0a3100989bdfec11ea3e1c4316d2368"],["/tags/单元测试/index.html","6b731e1e65982654fd21b4005357bb3f"],["/tags/响应式编程/index.html","920a8a418ac7d00180d0dc8fafb92c2a"],["/tags/宫崎骏/index.html","fa555e26b40e9d44ec0ee4a293438bb3"],["/tags/小王子/index.html","ffb0625f06f8c8421c7a97a4e8e05328"],["/tags/开心鬼系列/index.html","1d0436ac7bddb2adb994121b4851cc8c"],["/tags/思想政治/index.html","4e26868304dcfb109e1b15c63196b125"],["/tags/正则表达式/index.html","27554a350f853cd0c95303143dcc2469"],["/tags/线性代数/index.html","adf61bbf6635489394865139f4f32a86"],["/tags/英语/index.html","6c9e07ee0b460357b3a3355a8228dd83"],["/tags/软件工程/index.html","e4d1a81e016550c2f210d55257a5ae43"],["/tags/高等数学/index.html","e2486c16f95012af4e53a50e7b49f992"]];
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




