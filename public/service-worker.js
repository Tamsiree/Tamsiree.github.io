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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","6a443dab65afd072a8246f542635cf67"],["/Anime/小王子电影的共鸣/index.html","2fbd4d5541509c38fcf47a2b839ccf23"],["/Daily/Memorandum/index.html","0deb84a854a942ab91ef985438531b12"],["/Daily/生活小常识/index.html","4394121d58a8573daca0afedae00f8b1"],["/Daily/网络用语/index.html","beb6a488f21064bfee67fb4bef214ad5"],["/Design/设计用户界面的注意事项/index.html","a01148db10250c2247cc563f5bb4171b"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","04ee76b432bfef8a001f97283f581850"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","098eed9b2e222d13864c542489be1cb2"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","07c78ce602b821a7ac0106707e31d2ae"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","e0fcd45157f4064a11831492b0c5829f"],["/Game/如何独立开发一款游戏/index.html","5395e16b86d5ab05e3180bde91803bdc"],["/Google/Chrome/Chrome上网助手/index.html","9db490449100aaf46706ced3423a887a"],["/Google/Chrome/Chrome使用技巧/index.html","6c6aaac00a683ea8eedfdfb21da5028d"],["/Google/Chrome/Chrome插件/index.html","9070e4052995927e77d2a748ee1b6420"],["/Google/Chromium/Chromium/index.html","178857de44a54e7d0308e7eb041bfa4c"],["/Google/Google搜索技巧/index.html","dc684b8e436012f6092d9aa2294b71f8"],["/HardDisk/硬盘分区结构/index.html","b17c43d5de90ecca876fea7667dd62f3"],["/Hobbies/Guitar/吉他入门/index.html","2ec3607abfedc71012e509ea222cdc8d"],["/Hobbies/Photography/摄影入门手册/index.html","42beaa2f4762e621ad3fecb135df6612"],["/Hobbies/个人日志/芦江曲/index.html","151780418a77f5c9f221023654b991fd"],["/Hobbies/个人诗集/闲情逸致/index.html","4f690d685a428d0cd1847e57af5e036d"],["/Interview/2020年字节跳动面试题/index.html","2163d8b8d29f5619977188c6b683bff0"],["/Movie/HongKongMovie/开心鬼系列/index.html","b7e5c428d012f8088397f78d4d95d615"],["/OperationSystem/Linux/Linux分区管理工具/index.html","2900fd2069b69d3d9c13823e82502f8e"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","72477366dd3c6360f5a3f44008428208"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","3c638453c29eece341095d229d0423b7"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","52c1ac71731cb21ff332c4c960cf4b0a"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","ee20f908aeffcc52cc57a107d3945dfc"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","dfad163a757fe4dd319b1cc82f22fd7e"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","08bd04c9e5dba267c4bb7b90db047933"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","76cc9db646b3d3cdc2882f97a4e58591"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","f0cd210c070dae9c335062b2cb7839eb"],["/Research/Math/线性代数/线性代数公式/index.html","5f3d523e7fee22edca6666eba2a59281"],["/Research/Math/线性代数/线性代数知识点总结/index.html","a37f647ba2152c2be6a0fc9b4e25e846"],["/Research/Math/高等数学/高等数学知识点/index.html","6f9ee1dccd4062968a78e9654797b211"],["/Research/Memorizing/费曼技巧/index.html","4df4cb2d75b83595bd2312e9009f37f8"],["/Research/思想政治/考研思想政治理论知识/index.html","5a0e7d8faac2956b13ad1adbcf372b57"],["/Research/英语/考研英语作文/index.html","e3b96f30fecc6d5b2d15497bc779ab37"],["/Research/英语/考研英语词根/index.html","a6281e9381ea731befc03b1b038b5ea5"],["/Research/软件工程/PseudoCode/伪代码/index.html","1f415d3f4eee039d7ec9ecb07ab8ee5e"],["/Research/软件工程/中南大学软件工程考研题型/index.html","f69f19957cc521fd20239ea915aea059"],["/Research/软件工程/软件工程基础知识/index.html","891b0e2c1af94150a8407a334a70e213"],["/RxTool/Contributor/index.html","a525231c89494a64311840adac4fec34"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","14ba2204039ae4107960f71698a5d6da"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","4d2bb644cbaedfc1c23723e33b062d27"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","4d7c2ad30d003a870ce9aec66511670e"],["/TechnicalResearch/CDN/CDN/index.html","d99259fd3f00ee31d9295681f41eb869"],["/TechnicalResearch/Git/Git/index.html","648dec26219afd3363e1324d3495b783"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","cc05ac582e1e8e2e03edec9bfc6db357"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","e12132a8f99f5c3f8751d8d25f99b2e9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","7b33e084f82361162983700f0de00e1a"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","60d9722503b21de3a593bd8617cf0d91"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","3f2d9001f1143d1eceac040024c97518"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","c12f61c04cff77d7d9f1bd8e92cb99bc"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","462febac578fa4b2e718db895bdb4e4f"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","d2ab7e8ba51768bf5d5c0d18858df008"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","07b32aeb1044b988c3e3172e07e01931"],["/TechnicalResearch/Java/Java基础快速入门/index.html","0c34a3cc796b4bff70b50a88c5eed90f"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","cadbb393dd8cd7d142ac1d69e92efad2"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","a15735b969e2f9635c8d6fe9290e96f2"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","aa8006e72a00c14eeed7303fd09f033a"],["/TechnicalResearch/Port/服务器常用端口/index.html","1fc9e455f27043046d726ec3276b5df4"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","4a066c5a8e57f59c7142d2fdc276a600"],["/TechnicalResearch/Python/PythonExercise/index.html","9b61e5872da420aaaa6eaa589048523b"],["/TechnicalResearch/Python/Python问题归纳/index.html","be5ac200998b13fca86a758a1272f22b"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b3c427a6f25aec2c127bc4d847013e5e"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","393f4d8a8c7469094b1d27413c16cce6"],["/TechnicalResearch/正则表达式/正则表达式/index.html","665f882c4f10c83d7cbb89e132fad500"],["/Teleplay/亮剑/晋西北铁三角/index.html","ceba9d0a5522dd17455b2774c7712169"],["/Teleplay/仙剑奇侠传系列/index.html","64af4cc0450b0c2152fbf50d3befc400"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","5ebf6820cfadd5d47aa94293f93c9ecb"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","267431331d542841557de44d60a26308"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","381d4953804224de844a35cfeb650915"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","c65d781693fd867a51476849d5cff584"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","0dee8e56fbab291efff32131c70049c0"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","5396e6455e2932a8bb66d4ef04931537"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","8e7772c76540ed73a62c3d63caa3005d"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","cdf3c6848253dc53dba007bbabeb7d29"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","030f731a65cbecca997203ae17d657dc"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","cb850579aaeb7ade5e6ff7a045865887"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","01e1e09a3ad8ec1292b1fb58a2709457"],["/Tool/Music/网易云音乐/index.html","60810f45b2b90acacb5bbcb6aa9259b8"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","616244e88dc34aee9efb825604a494ab"],["/Tool/Windows/Software/VMware/VMware/index.html","ee923e4b467818412d46001e9c7a1499"],["/Tool/百宝袋/index.html","f843d182f1be98df0e3c18ea32a33aca"],["/Windows/Software/Office2019/Office2019激活/index.html","413cadd12e268ff1b7dcd8359b87ae85"],["/about/index.html","2be3ba2836027db725b757ae6b4c57d8"],["/archives/2013/10/index.html","80b2311756d9918cf4a2277496dd8747"],["/archives/2013/index.html","3704396c7c6ad2d236f9cde0ed12c022"],["/archives/2016/09/index.html","1242df05d86b75364a713a090db855b0"],["/archives/2016/10/index.html","2297dc028b998b58003a6a1a37bdaac9"],["/archives/2016/11/index.html","f20847c54504a0b104e72d2d0dd41175"],["/archives/2016/12/index.html","a131cc4b024d3b9aeedea025442cc1f7"],["/archives/2016/index.html","204c4eb4e2f966c3d62e4cef65579e86"],["/archives/2017/03/index.html","ecca1f79de2b576d9ee00d7fdebdd629"],["/archives/2017/06/index.html","b5a58499bbb16b8fe1f95df6415fac14"],["/archives/2017/07/index.html","cbe6420231afc4e83f4f2e911da52564"],["/archives/2017/09/index.html","1f61b60469881c898215cc8540246711"],["/archives/2017/10/index.html","f5aeb80c928cb37a00c925ad3245dfe7"],["/archives/2017/11/index.html","ef4a992d40aaaadd0cb2cefae06eb104"],["/archives/2017/12/index.html","e4098ccc1fb1f0f40efb869937f2ba7d"],["/archives/2017/index.html","36abfc804f8eae23739ecc45af89c0b2"],["/archives/2018/04/index.html","dc1a95cf8103a1e009edbfb3eb734fd9"],["/archives/2018/08/index.html","7c8b356e21422bb3e84328464988ef02"],["/archives/2018/09/index.html","9861d54a76093b52c8e3be530eba26ee"],["/archives/2018/10/index.html","de7acd2f90b5911359004955bf811f11"],["/archives/2018/11/index.html","86bd8d0104089b73dc0dcea5a029a419"],["/archives/2018/12/index.html","ff6be4f8ba424aa696e723a2bab9b529"],["/archives/2018/index.html","7f74ebbb81e0925a4967670379649a9b"],["/archives/2019/01/index.html","1b43b8156dd0aaa962e6a898f39a29f8"],["/archives/2019/02/index.html","0cc2edca474bc3f1b974899d8e246eb9"],["/archives/2019/03/index.html","d678889d2c1d1d959083166d429352d6"],["/archives/2019/04/index.html","3e41efa82ff7d8c936127567892ab619"],["/archives/2019/07/index.html","e5dede8a885df32a339a2eccb1366b84"],["/archives/2019/08/index.html","3286902b28b43d078e842b8ec8bbd938"],["/archives/2019/09/index.html","e1e726a2654a03be67c76ddd77ed43ee"],["/archives/2019/10/index.html","3a5028d9ce2f3d09bd66847feb66e1a4"],["/archives/2019/11/index.html","4342f659dc9f765264391865037dacd4"],["/archives/2019/12/index.html","7848688459ceb374867ee7373399b9b7"],["/archives/2019/index.html","34d5ba9c01ab732aeb6cf55424706a38"],["/archives/2019/page/2/index.html","9fd25fb6c91586c4ecda25cd2c9ed9e1"],["/archives/2019/page/3/index.html","ae5b0f5601fdaaedbe6ad7e36978da68"],["/archives/index.html","16d6f0278f642831043dba804d7423c3"],["/archives/page/2/index.html","644773823c52b15782adae636a371d0f"],["/archives/page/3/index.html","197f8e516248a21ea109c43cfd323e0e"],["/archives/page/4/index.html","801844ff94cbc046f76820e8a6a3e340"],["/archives/page/5/index.html","14fb986c807d0b95d552dd125362cab5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","446ead21b316e5eba4b1155ec7233a11"],["/categories/Anime/宫崎骏/index.html","d761c69714f22d4b20b00dd58e16c6d6"],["/categories/Daily/index.html","a7941a826b4c445f54ff0acb61a7fb5c"],["/categories/Design/index.html","d4a6be182612def85592e9a7e8991eae"],["/categories/Game/GamePlatform/Origin/index.html","c176f9f292bc6e04b267e58a261e1a28"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","a8de4346590d8fa5d419dc502388d17a"],["/categories/Game/GamePlatform/Steam/index.html","d488b2db088215a85a39d316eaac537c"],["/categories/Game/GamePlatform/index.html","0dcc8974bdc40e873668520078cf7060"],["/categories/Game/index.html","e5aff7f7a8c8f66c9c2b715f1274e4b4"],["/categories/Google/Chrome/index.html","8121d68b3535d636459933172dd681ed"],["/categories/Google/Chromium/index.html","c13966c16472b64cd777f1f5600eb23c"],["/categories/Google/index.html","6d4e146c9c82b1de2966fe2e9b26242c"],["/categories/HardDisk/index.html","1cdbd82d763041eb289384a01bcc8af1"],["/categories/Hobbies/Guitar/index.html","f65053cdc172eb5fc435afaa9b534ca9"],["/categories/Hobbies/Photography/index.html","53cddcafeca512a556d48e45777d554a"],["/categories/Hobbies/index.html","25a147b35f2bfb2b72a0d0ea2ad370cf"],["/categories/Hobbies/个人日志/index.html","2d7d1e4a49f5dd943ae3b8ad80d36bcb"],["/categories/Hobbies/个人诗集/index.html","53e452f5a7d09b0b13e04da6283901b2"],["/categories/Interview/index.html","de49f7d342950251bc8640150eb1d5b8"],["/categories/Movie/HongKongMovie/index.html","d8fdc1e7c0f723c16b974e25c60b0add"],["/categories/Movie/index.html","d36316b3c7d6e6d0c831f155715e2c01"],["/categories/OperationSystem/Linux/Manjaro/index.html","7b6dae881d658b576df453d9102d1dbc"],["/categories/OperationSystem/Linux/index.html","90b620f4dc7828c5a74f30e9b4781c79"],["/categories/OperationSystem/Windows/Software/index.html","cdf0e2a856286c0444684e02149f7196"],["/categories/OperationSystem/Windows/index.html","1540be0790dff4d8f23baf2d396331fb"],["/categories/OperationSystem/index.html","02910eb88191b9e497f12753cea0ac62"],["/categories/Research/Math/MathJax/index.html","de68cb4ef865f0da6360b95bf3985765"],["/categories/Research/Math/index.html","60542dd2cbd9bc17a64e6aaa86da2fed"],["/categories/Research/Math/线性代数/index.html","8ad7740816d1a3aa22333a595474194c"],["/categories/Research/Math/高等数学/index.html","f37c3028474d2a179d997534394b36c4"],["/categories/Research/Memorizing/index.html","822486613f7605ce6d018113589de124"],["/categories/Research/index.html","5b13ec94f6367e2156627a4c2cbda492"],["/categories/Research/思想政治/index.html","beb427d6ff5d6d7d0d1ce8d5e3782d3f"],["/categories/Research/英语/index.html","6ad70b4150523985df832087c69c146e"],["/categories/Research/软件工程/PseudoCode/index.html","5670b2f14fd1a9e22744af3b1676ca33"],["/categories/Research/软件工程/index.html","c15fb999784e8a52fc7be702bb3f24db"],["/categories/RxTool/index.html","af715ad0e3eaa8bea51dc2b874ce3250"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","c4c6390541e27d467ac1fcdcc656a199"],["/categories/TechnicalResearch/Android/RxTool/index.html","5ee1d0ce298924ff23f20279ffe683ba"],["/categories/TechnicalResearch/Android/index.html","2a5f1bf7d1d1498b693efaa26e7fcde0"],["/categories/TechnicalResearch/Android/单元测试/index.html","ec7fa02d120fc9a5478cddd81bcd0dcf"],["/categories/TechnicalResearch/CDN/index.html","03ad9be5bd1818e128e8eed956b39a90"],["/categories/TechnicalResearch/Git/index.html","f8d99609780a6623206c758fffc32cff"],["/categories/TechnicalResearch/GitHub/index.html","0da8cb3c9443524e71eeb1f42297518f"],["/categories/TechnicalResearch/Hexo/index.html","0b9ff9d8b18e0e9ee51eb30d20d8f89b"],["/categories/TechnicalResearch/Html/index.html","1b80f09d0960ab0667ceaf912b3a2388"],["/categories/TechnicalResearch/Java/index.html","0e8553c5d721bdd890a1af267fac1e01"],["/categories/TechnicalResearch/JavaScript/index.html","4d6c33edc3f7d41b5bb31d4d18315992"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","a9317228640bde12bd7c0ec9c903c947"],["/categories/TechnicalResearch/Markdown/GFM/index.html","254c8b276f82c3692eaca3efb83921d3"],["/categories/TechnicalResearch/Markdown/index.html","d6316cdfaf3fa1bd634db3a98580361c"],["/categories/TechnicalResearch/Port/index.html","a188d0f35c14dc3d919ecd05b6b182ef"],["/categories/TechnicalResearch/Python/index.html","dcc3653968d0d47381ef0f2035da6b0b"],["/categories/TechnicalResearch/Spider/index.html","7e661809a83f321c052cce8f7339b718"],["/categories/TechnicalResearch/index.html","6253fb100ef59cb745a9048b9c3f8343"],["/categories/TechnicalResearch/响应式编程/index.html","41ef25998a23308966ac5ecbbe7c6177"],["/categories/TechnicalResearch/正则表达式/index.html","3f964e11d06458836d527238edfae848"],["/categories/Teleplay/index.html","40c7bfb9d76971166fde1d3dad43ce08"],["/categories/Teleplay/亮剑/index.html","1025c6b4e8aa90512ddd9d682a7f04cf"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","edd00f8b41d663e85bb15296daddcfba"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","73cbda08cec5b2f662dc407a435e91b6"],["/categories/Tool/DevelopmentTool/Unity/index.html","6582ae26a591da4edea3603e8b4cf05f"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","4eac7c075488f308339c8c96fb50617b"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","ee8b7ad38a601945802877b799d5c8f6"],["/categories/Tool/DevelopmentTool/index.html","0cf799a9e3f7bba2a7c3f05976349dcf"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","c846b81a449ffbcb54bc65d3b09b7978"],["/categories/Tool/Linux/Manjaro/Software/index.html","d7c617119491116a3efa1a1124f5f428"],["/categories/Tool/Linux/Manjaro/index.html","3a23d3fe52a8842923f0fa6d3b909791"],["/categories/Tool/Linux/index.html","55225a493cc09254fbb52e5af30eca73"],["/categories/Tool/Music/index.html","ec2d3c2c8ba0503a0a03ae3428241941"],["/categories/Tool/Windows/Software/UltraISO/index.html","85d0dd5f534636cff99b98528d88a49f"],["/categories/Tool/Windows/Software/VMware/index.html","b371f97e2f7a7617955b6c410c274d04"],["/categories/Tool/Windows/Software/index.html","bb83f0b33c9a457c415e366e4efcdd8f"],["/categories/Tool/Windows/index.html","3067a2a4e4f814f8ef5078a08c9c54d4"],["/categories/Tool/index.html","fa9bfae6540202e15caccfb504fe026f"],["/categories/Windows/Software/Office2019/index.html","9d6573a6d553c094d6077a993fc4111b"],["/categories/Windows/Software/index.html","d02810392fa351eb819996e07dfbebad"],["/categories/Windows/index.html","a1965fe7e95f02b35185612346d35056"],["/categories/index.html","624d5ad7d2a61b28531478dfdac592be"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4a59e9dbf8aca87483617223ae85a43b"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","7f4ed8acf64df3fcb5fca784bb00c6b5"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","2d460bc38f32a29f1b0c6a7d326de053"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","69264c024696e121ea0a66ded43ec328"],["/movie/index.html","0e812218cf29fc35bcd5f8cd02efab1c"],["/music/index.html","291a2ab53d64059706de2c00fe878a4b"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","a68c4212cea0e263b4b4254e9127133a"],["/page/3/index.html","2809c679610d0085e76a1359f0fa1587"],["/page/4/index.html","3fb6a7a0034b89901dec7f64013e6e07"],["/page/5/index.html","2f7c8aa102d0e81ea9601e4a3557813e"],["/page/6/index.html","b9c8bc2facb2b3ee29c73e46fdda39c4"],["/page/7/index.html","ae83d51c89385a25cd1fbaa7c4c99f1a"],["/page/8/index.html","99e22886174f702a32fcf2b68ebf8182"],["/page/9/index.html","add6f7cbd16c4b6a4ecbaded24e31e77"],["/tags/Android/index.html","4cc1dec54f39c76684ac91714d89778e"],["/tags/AndroidStudio/index.html","eaa92110625d5ab024510bb1c48b10db"],["/tags/Anime/index.html","85e4fdf737d69cabaed7a6a325d12b2e"],["/tags/CDN/index.html","a20d6d4dcd18a18fa8ec04ce1ba6ce04"],["/tags/CSGO/index.html","4a3a33b53362249cb8789ac2c0333e11"],["/tags/Chrome/index.html","69a28662b2e42b348080f1b72a110099"],["/tags/Chromium/index.html","4d4ba4713625b666c6f30b164b543650"],["/tags/Contributor/index.html","a98e7f7da85241c194c2aaa5cc99e322"],["/tags/Daily/index.html","0d0b2568caf52d2367d3cabad2869806"],["/tags/Design/index.html","f84158dc16c0d1f02c26944d74389006"],["/tags/DevelopmentTool/index.html","8be60e0d76ca9ea6767ef0984ee956ff"],["/tags/Emoji/index.html","927fca102024a45e4963ee968d3ed4ef"],["/tags/GFM/index.html","34b3c81dd65ccf5ae35ddc2e91cab2ad"],["/tags/Game/index.html","b0cf174756c6e78903fbdf74970559ee"],["/tags/Git/index.html","748e6f0f782084f9645361255305593e"],["/tags/GitHub/index.html","9d475f96fd886051393cb892261c4949"],["/tags/Google/index.html","57b953fa5a3d1ed4a26aee0f1bc34eb5"],["/tags/Guitar/index.html","2cff8e767d1f5cc871f93b3b7a6658ba"],["/tags/HardDisk/index.html","2a05d4f48c6fa9afa82125ece0de64ed"],["/tags/Hexo/index.html","c2f1b894b581266b6e59115071dfae24"],["/tags/Hobbies/index.html","497d2904e650441b801ba7c078017415"],["/tags/HongKongMovie/index.html","383590ccdc47ba559c6ba2af458a570d"],["/tags/Html/index.html","736e2c8610c1be3781a9a5aac6989106"],["/tags/Java/index.html","c2303f1bfa5c20b596606c6ab2b7d1ae"],["/tags/JavaScript/index.html","71cc1dcc1416b09340042836a3696e2e"],["/tags/Linux/index.html","80de41bebb0fe3c511904fd9ffd44c2b"],["/tags/Manjaro/index.html","7306fb7755141a8898f4493a6ec672c1"],["/tags/Markdown/index.html","f0c638cd8395cccb40e94463d4c15206"],["/tags/Math/index.html","a9a1c9a813f3d7618b9220dde7ec75a2"],["/tags/MathJax/index.html","6743fd11ce4cd041988caed538a0559a"],["/tags/Memorizing/index.html","ec8dfad83df940868b1cce87d60a464b"],["/tags/Movie/index.html","a589dfbe9920d7c6c8e514c8108fc0d6"],["/tags/Music/index.html","23250f8af832a72db0a978fee1748e87"],["/tags/OperationSystem/index.html","6d06f6787bd813e41c3cb276b2640931"],["/tags/Origin/index.html","a0a64b85beb73cfa6e75a873944507cb"],["/tags/Photography/index.html","3501e3cf57f34901879d336760637649"],["/tags/Port/index.html","d488cbba7c5ddcb016b47d06584e1cce"],["/tags/PseudoCode/index.html","78c839abd8567fab89764416f7b5672b"],["/tags/Pycharm/index.html","a49fdf53a834ff72fa00bbb47c624ea2"],["/tags/Python/index.html","08207a2b04c40430c11ee210f2de7036"],["/tags/Research/index.html","6c599feac3fee260203109f8c87eee8c"],["/tags/RxTool/index.html","756f60d3e1d026b6da89dff43c2b6015"],["/tags/Software/index.html","fa56ad4aea3bba5bf8a73fea2651d1d0"],["/tags/Spider/index.html","880f3a9ac1f75ab7fc0b8bd2ab91fdbf"],["/tags/Steam/index.html","448a4761b54e6f2a30668433dcb2ecfc"],["/tags/Teleplay/index.html","ba2d4eea2a24402db1e5027dc825bab0"],["/tags/Thunderbird/index.html","80197065285e6ae80a51105bfbeec99a"],["/tags/Tool/index.html","4788696e4f70550c4f208731512d28d2"],["/tags/UI-Design/index.html","b03170bd446e3c389c0f5144d94ed81d"],["/tags/UltraISO/index.html","b4154089ce9cb317f159e23aeb1a3683"],["/tags/Unity/index.html","cf3305d6c1cfc3a9c25c240fc7a5116e"],["/tags/VMware/index.html","80236a06a9264db090eeb030286325bc"],["/tags/VisualStudio/index.html","515c340af7ce3509942f613b7ce22d0d"],["/tags/VisualStudioCode/index.html","90003ecd393704cae3248b7124eac852"],["/tags/Windows/index.html","d475466f6ee391d54b4ce6bd2b5871e2"],["/tags/index.html","1fb3541b1487ef46acdb367482b69971"],["/tags/个人日志/index.html","2c9e15b54fd29a3a518944be45fd7957"],["/tags/个人诗集/index.html","0f47153111693b4d52da36ef0fab02e0"],["/tags/亮剑/index.html","089168cb2f30c0d050e92009156c9ad1"],["/tags/仙剑奇侠传系列/index.html","819c2521f69a5f6ee8ad1f73f115131a"],["/tags/千与千寻/index.html","6bb1a47a49351720472db2956527611b"],["/tags/单元测试/index.html","04af1012da7c9a87607a935756734a4f"],["/tags/响应式编程/index.html","9aa29daf63030c77d1f286a1e870b391"],["/tags/宫崎骏/index.html","d880105328dade6fc176e04eda235f0e"],["/tags/小王子/index.html","6f63b84f31d84ce5eb5b40104a0d635a"],["/tags/开心鬼系列/index.html","b3d612a79b600a0b440bee08b7028429"],["/tags/思想政治/index.html","196a5fbb4364119d8d560a76701fbf9a"],["/tags/正则表达式/index.html","b0a75c66fefbf13f0a91ffb1e61430bc"],["/tags/线性代数/index.html","164a8135ee57c533f815155c4242cb3c"],["/tags/英语/index.html","4a7a1213e50430b499f639bb332321bb"],["/tags/软件工程/index.html","55e0582c73d9f54762037dcfff20b839"],["/tags/高等数学/index.html","09dffc58e933df7883c7e564d0a3875b"]];
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




