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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","d9c0fd9848529ecf2b267381c77e8f0b"],["/Anime/小王子电影的共鸣/index.html","c5ca2a938bda5ca94ae8d8b48b934321"],["/Daily/Memorandum/index.html","d6caae854299933dea2f3713c30c204f"],["/Daily/生活小常识/index.html","6fa56b5400982e7da8c6b8189daed76a"],["/Daily/网络用语/index.html","2e20fa1a64fccd1f9a23b251b1a7a014"],["/Design/设计用户界面的注意事项/index.html","78127ee4a4f45d162fd1fd47d8a58126"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","427d7eb592da4d3265a89d299e26b249"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","b34d3b355791f976a33f2049172ac8ef"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","531e8f7ec98ab2e1e7d268b2040ad7e6"],["/Game/GamePlatform/Steam/Steam共享库的方法/index.html","58df8a6314eca9e38d9a3931b435fc75"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","66497627fcaa059f9f8de76b5f724a0d"],["/Game/如何独立开发一款游戏/index.html","8dcaaa3ca05600ef782a1b3db243e348"],["/Google/Chrome/Chrome上网助手/index.html","ccb840867fdaca26ab0233543d022110"],["/Google/Chrome/Chrome使用技巧/index.html","700304d562c9286f6885e8104e6210ab"],["/Google/Chrome/Chrome插件/index.html","3251226b2566b5c0691ecaf20ebcd0c3"],["/Google/Chromium/Chromium/index.html","33ba395434232f4149a1f9be56daa2ff"],["/Google/Google搜索技巧/index.html","601e6c2951c5b5679b8a38bc0cf387d6"],["/HardDisk/硬盘分区结构/index.html","e8f9c810e1d0e8ca86583212e8b34565"],["/Hobbies/Guitar/吉他入门/index.html","da19cdd199676c59e80debc6c8a5e1f3"],["/Hobbies/Photography/摄影入门手册/index.html","195b0611ff5a62cb5c2dd8afbc5c9f42"],["/Hobbies/个人日志/芦江曲/index.html","ceb2813984aefff67765a6e25f622d19"],["/Hobbies/个人诗集/闲情逸致/index.html","d6ddef2fd5891aa3413a0603af667f91"],["/Interview/2020年字节跳动面试题/index.html","a053886e9031232e837fa494506216d9"],["/Movie/HongKongMovie/开心鬼系列/index.html","3995d66474b1dd0eb3c5e208ebd710a3"],["/OperationSystem/Linux/Linux分区管理工具/index.html","1a9472e67b7eb5e8c0bca7cda8e87c81"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","83fb4088e6b7d725ebe52f9192b9bff4"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","54259143c12ff99500954e92acb2e8a5"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","9d8b4a40da7de578faed1519a84025d7"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","525df36f9a524f92f6225e3ef74c6bf0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","9c5b681e80cec480d4dd40f1213d07dd"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","ebc23784c022e446cbf5ccfa32eb4d41"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","c71ab45463738e5ca0d8c850e3c1a301"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","8868e04de054438855f1efbaaad8a240"],["/Research/Math/线性代数/线性代数公式/index.html","97c16d1eee1c4eea16c8ab51d4e91aa6"],["/Research/Math/线性代数/线性代数知识点总结/index.html","f3440624993bc4e362dc5cb9bd8674d7"],["/Research/Math/高等数学/高等数学知识点/index.html","dbdef20d68d199659f8efb1faed928e4"],["/Research/Memorizing/费曼技巧/index.html","20f2976de59a28b9afdc39b5a3958776"],["/Research/思想政治/考研思想政治理论知识/index.html","899800cb0a4e31e9fee26ab2d0a8b935"],["/Research/英语/考研英语作文/index.html","1d9eee8c915d3db9bfbed8b7754b201a"],["/Research/英语/考研英语词根/index.html","8aa6168e8653270d7f4cb219c57a2e50"],["/Research/软件工程/PseudoCode/伪代码/index.html","b0254cd28e82087601d84098e740e007"],["/Research/软件工程/中南大学软件工程考研题型/index.html","eeeac6c7c2deccc29ceb81f220683e48"],["/Research/软件工程/软件工程基础知识/index.html","d2acee11c45b2ce7b2a02420837d8994"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","895c5a97b7961d2c7f0a25fb49edd998"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","d73cbff981ed126024475e87b4a80f6c"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","f12c187ca9165561a2fe027d0e3051e9"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","f0dd4583082f87c66faf26bedc06a13f"],["/TechnicalResearch/CDN/Base64加密原理/index.html","ccf29abd89cc43a43b3ebf097825575f"],["/TechnicalResearch/CDN/CDN/index.html","98ea10570b186150091ceb1032e47846"],["/TechnicalResearch/Git/Git/index.html","a09dadb3e55637856e420c4ed0c79033"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","6a80861aeb834db0510925e7e1b43917"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","0d701997d071b2b2a6c5bf095e3620b3"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","148c83925408f84dc696c1b62c67710d"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","d0a841c4ae65f6b92c90711100bced6d"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","af2d2e767844f0b4ebdf05480236bf60"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","61f90e33b8b73854657a5de72e8a0aa2"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","a93ee4f30ef1a2fe63979b4fbe0d3771"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","8662419673dbe93292b3a2918766874f"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","2c4d62101387e2a2267a17ae20b2edb3"],["/TechnicalResearch/Java/Java基础快速入门/index.html","8a341f78ac5bc0dc466a8eca0e57f128"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","9247974eaac6dbf2c2a9d89c0467f713"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","051446278babd0f5a5976f9ba8bdb4b6"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","deaaaa6a913560cb10f8d4254ee21595"],["/TechnicalResearch/Port/服务器常用端口/index.html","b98e96af4977e2b3210a8745f25ed683"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","95622ab57347a0993dbaf36a7a6dc9ef"],["/TechnicalResearch/Python/PythonExercise/index.html","209409ce047da706cb9a64983572310a"],["/TechnicalResearch/Python/Python问题归纳/index.html","4d81e60810a056702e66da7b1cdeb078"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","7f3a803f70c5de57a40410a054dc7281"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","c41061553cbbb00fbcea59ae6827fd55"],["/TechnicalResearch/正则表达式/正则表达式/index.html","5fa24ee13e9fe7f4e333023a2699faf4"],["/Teleplay/亮剑/晋西北铁三角/index.html","61975c278011713c423005a4d9311c0c"],["/Teleplay/仙剑奇侠传系列/index.html","48e47eb13d7dc7585fb7208cfe98e084"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","01e3f8e9124e978862be81257aa13b77"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","7d11e01ac8ea4ebd32426e203981aa81"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","b88a56cbf5d682ba60771f150b9039a9"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","45e31804ed0da76c28d1faa8b85aa44e"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","af4d5ece11b10f996bcafa355f7697df"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","cb0c08b7a95ddcd5016ab0c1af040768"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","04f19138d52164eb7f2fd4542d7a3ea2"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","99a223ecd1e92fc097544a506c68c956"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","a2161b3ee21ae8834c02281cf7ab0364"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","46146086a142e2624c89c195686f5144"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","fcb01e93032fb8e1999e16cdeab003c7"],["/Tool/Music/网易云音乐/index.html","ed1105bba8a711009fa2b58f233be125"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","b06bbd6b433e9f2ea4802a2beacc7a98"],["/Tool/Windows/Software/VMware/VMware/index.html","d8c33bc03141eee56d32b06e436f6022"],["/Tool/百宝袋/index.html","ffa533d2f1826ae59fa25eea17ae63e1"],["/Windows/Software/Office2019/Office2019激活/index.html","a65ea7d5e2515ded939d516ecf3a54df"],["/about/index.html","1c8d607dfd195034cbd00abf7fd4a83f"],["/archives/2013/10/index.html","4e3d24accc741afbd9c283cec8b85474"],["/archives/2013/index.html","02debe041272a2b3c5d95bf6e3a233de"],["/archives/2016/09/index.html","85726d89f905217c8c07206efee7ac3a"],["/archives/2016/10/index.html","83435aa667f7713d8df7bd97e22052c2"],["/archives/2016/11/index.html","f34a1a97ecf29d2b8884a7bb2659a3b4"],["/archives/2016/12/index.html","3bc05827fce10ceb01ba88436f388345"],["/archives/2016/index.html","b7db0e4739481df4e6e51f2fe8b247fa"],["/archives/2017/03/index.html","894697ca0cf21f3662b331b4b747c3ff"],["/archives/2017/06/index.html","acb3025eefbcf6bd852bf865ff018ba7"],["/archives/2017/07/index.html","58fea6f2f564aa79f71684654ea0a95d"],["/archives/2017/09/index.html","41eee10457aacb83417e68ac25995356"],["/archives/2017/10/index.html","b4b414daa3c177f8595c5dcef70408e1"],["/archives/2017/11/index.html","5475ce75bea1c5e939559350b4eee71d"],["/archives/2017/12/index.html","77ea6cb04742fecc271267c5cb06847c"],["/archives/2017/index.html","39096532244d01db58f69433bb546834"],["/archives/2018/04/index.html","4d366d78ad2aeae445101d58f5d03f43"],["/archives/2018/08/index.html","54ddb9cd38110e11472b7979f6dc41a2"],["/archives/2018/09/index.html","91f028ecccba48297e92462356743d0e"],["/archives/2018/10/index.html","e7b9516f7c4130d053cceb7232ea9ab3"],["/archives/2018/11/index.html","dca0c2d9cf26d3260b86029e9703e95d"],["/archives/2018/12/index.html","c34256a1caeb20b324f20b82b27539c8"],["/archives/2018/index.html","9367d0ca0e5935be0f992e7223c915b7"],["/archives/2019/01/index.html","fd3664b07fb464ac57cfb968f6b6794a"],["/archives/2019/02/index.html","3308d4db10a992085310c1ca8d4880d9"],["/archives/2019/03/index.html","3d717d065a0182f36f868dd1966863c8"],["/archives/2019/04/index.html","52f0903b16173155bb7bac43e96b41c9"],["/archives/2019/07/index.html","61349b381fad7a4d8beb0557a25e594f"],["/archives/2019/08/index.html","f138c634e2bace4e33924506004f2456"],["/archives/2019/09/index.html","06f19cf8538ed31454fefced9a6ba35d"],["/archives/2019/10/index.html","710698fcf1fb69d377d30c4433bacacc"],["/archives/2019/11/index.html","b329a6edbda87dc76f300167269fb8e3"],["/archives/2019/12/index.html","9c16b61d4c7301a0cc294ba0c1999145"],["/archives/2019/index.html","3ac80318613eaac5e5fe2be2301ea305"],["/archives/2019/page/2/index.html","e504e81cac36e24ad183d83b5e7d5918"],["/archives/2019/page/3/index.html","96fe6bc3e57bddeb1bf750b1f29fd378"],["/archives/index.html","1c6d338f0086725c5d1ebf4a0c3f89a0"],["/archives/page/2/index.html","6f5ba2c990484c7c01a854d4009b558f"],["/archives/page/3/index.html","69d9e1cf6f5a468a6d8661e874b31e52"],["/archives/page/4/index.html","2127e7a1a5c2e85fb621bb91857d25a7"],["/archives/page/5/index.html","b47dab479557e3b310b43605176f58be"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","f8960c7977d9361430abe397336c79eb"],["/categories/Anime/宫崎骏/index.html","a74db8b9c9bb488cc3dd0d87d6f056ec"],["/categories/Daily/index.html","bf17c201fddae753b101957ced23e4d4"],["/categories/Design/index.html","7e1d2e71dee684f1093a5c707d090eae"],["/categories/Game/GamePlatform/Origin/index.html","8db6c200e48642100d42b50dc59554fb"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","3f10371bb327802e8e9f4f34afac6f45"],["/categories/Game/GamePlatform/Steam/index.html","c9b41d0f4807b7cb808adf3942709972"],["/categories/Game/GamePlatform/index.html","1f54280ac45a1d89e5aec7d54e71b4c5"],["/categories/Game/index.html","dda7eea442c5641f5b931b792902b1d6"],["/categories/Google/Chrome/index.html","c6d0df935e55f4028ff939904319a30a"],["/categories/Google/Chromium/index.html","da5c6850bba75e0a9007d3fcc010ef35"],["/categories/Google/index.html","c1796d24001f53025553f024244d27e4"],["/categories/HardDisk/index.html","1e381fe3bfd5dc844bb9a5bc25ec4dc2"],["/categories/Hobbies/Guitar/index.html","464f96d9588dccffcfe4c516578e2529"],["/categories/Hobbies/Photography/index.html","2db85ab31d443297d1b54e507d2df649"],["/categories/Hobbies/index.html","b994e0d447ff3189cce96e809ec7bd55"],["/categories/Hobbies/个人日志/index.html","7f3af4dc8f5ea1e9085510a4cbc2e537"],["/categories/Hobbies/个人诗集/index.html","3f6e84013405796f5bb8f8f1e59ef633"],["/categories/Interview/index.html","a517fcfcaa834920e6af5ad98cd41829"],["/categories/Movie/HongKongMovie/index.html","8802d097be49683e4efdf414db7f2a96"],["/categories/Movie/index.html","4bb77443bd14e94c4a6355f0a8f5faad"],["/categories/OperationSystem/Linux/Manjaro/index.html","30b60639fb5265f7b28de5c8abc332ff"],["/categories/OperationSystem/Linux/index.html","8f1478c1e4c56c26374c0331f5151b29"],["/categories/OperationSystem/Windows/Software/index.html","f8e584ccaf494a737e93e74af5720c16"],["/categories/OperationSystem/Windows/index.html","f43b8d1b7eaf607612a06291bac06192"],["/categories/OperationSystem/index.html","71824a5f8bb303b7184ee32e7a258a20"],["/categories/Research/Math/MathJax/index.html","bd487bd36419c239d38a079bc003367d"],["/categories/Research/Math/index.html","e35bbb2240c8a307c4c0b771294a4c8d"],["/categories/Research/Math/线性代数/index.html","d1b068acb660f5369e2cf53471db332e"],["/categories/Research/Math/高等数学/index.html","dca5bc4cbad30d40f039a1d4f6e97090"],["/categories/Research/Memorizing/index.html","ccc3361a9fc758a2d9d22b6d1531a3c8"],["/categories/Research/index.html","c8bf4047dc710ede628a34946c5e16fd"],["/categories/Research/思想政治/index.html","0e5ca3fc37cfa83ac5d76eb3a8713560"],["/categories/Research/英语/index.html","ca95cdf556b373e9d6b625d1fcf8c832"],["/categories/Research/软件工程/PseudoCode/index.html","dc99502413ba7991893a13168245fe68"],["/categories/Research/软件工程/index.html","0395b902b57f28caf46659612a7978a1"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","2eb76b8d6e9b53eda1268069f73f4b34"],["/categories/TechnicalResearch/Android/RxTool/index.html","eb0887faff84c2710ea120e1a1ea6bd8"],["/categories/TechnicalResearch/Android/index.html","9a1b6268aa4d0e6d8443b9ebe0ad8096"],["/categories/TechnicalResearch/Android/单元测试/index.html","cf51b9df81da4d00fc2ec395d3259081"],["/categories/TechnicalResearch/CDN/index.html","56e96e6e39821243c0a6b256e13e1785"],["/categories/TechnicalResearch/Git/index.html","7557232429a7a7a3eb0d81e97268fb9b"],["/categories/TechnicalResearch/GitHub/index.html","85f22dfb6888d43a36a33236c62dd067"],["/categories/TechnicalResearch/Hexo/index.html","e46211f68dd38631c1af4761703e4b01"],["/categories/TechnicalResearch/Html/index.html","d1f28119b0ce1ebc475e09da9b4ec4d3"],["/categories/TechnicalResearch/Java/index.html","5b5a81be88fc877cfcc5265bc7cac2e6"],["/categories/TechnicalResearch/JavaScript/index.html","2ad55dbe3012cdf8be4750c1b7be9aa7"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","5b057c18b9b620630a84e3c52391c2d8"],["/categories/TechnicalResearch/Markdown/GFM/index.html","b09f01ce74d1a5d9e961d701a537775b"],["/categories/TechnicalResearch/Markdown/index.html","4c47272ae27e76fa901fcbd1fcd80c3d"],["/categories/TechnicalResearch/Port/index.html","eb25bb867a9b10df79c27fa056f77270"],["/categories/TechnicalResearch/Python/index.html","6f627a100e005cbfbd8613d15210f2b7"],["/categories/TechnicalResearch/Spider/index.html","65ff20e19f51ed6c3e0edf12c66879af"],["/categories/TechnicalResearch/index.html","51ef17b2a67baf1ae969dd702d102d46"],["/categories/TechnicalResearch/响应式编程/index.html","f42975bcfb6b763fd9237a1e01ecf43c"],["/categories/TechnicalResearch/正则表达式/index.html","64ed3296bee622318372532f49e2df28"],["/categories/Teleplay/index.html","dac5ae873729783113d218ad09c867bf"],["/categories/Teleplay/亮剑/index.html","96cbc8446173bc4864aab92f988d5116"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","897267df60eb38661a70f3aa07783f20"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","c65e80d5d7a8329f4ea71d69b29d41a5"],["/categories/Tool/DevelopmentTool/Unity/index.html","53793464b6d41fae8802fbd25ef65aab"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","d5f2644812e51595280f18423537c265"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","2b3aae87729a227209a3ee82db0d4a21"],["/categories/Tool/DevelopmentTool/index.html","bcb7c7edfd3d01a36c7d931e86981eeb"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","a6c9e8204a7060165164bc83d3672532"],["/categories/Tool/Linux/Manjaro/Software/index.html","8a66886ac1b690ff8e92abe8531fda71"],["/categories/Tool/Linux/Manjaro/index.html","94a9a11c646cdc0eebf084084c923ff8"],["/categories/Tool/Linux/index.html","63b8dd79ebe722635c2c037dda9c756c"],["/categories/Tool/Music/index.html","4cb155437f0e0d4cdede735e19b17545"],["/categories/Tool/Windows/Software/UltraISO/index.html","a9ec22979c70888e1cdb3b71bcc88bae"],["/categories/Tool/Windows/Software/VMware/index.html","75eb3c2fdbbf1a0ca16acf10bfd7ead7"],["/categories/Tool/Windows/Software/index.html","837443e9bad2d059ee48e02617760413"],["/categories/Tool/Windows/index.html","63e72867746cc59b24cac8dd5f08b897"],["/categories/Tool/index.html","a94100a4844dad591ff33993e9ef14a8"],["/categories/Windows/Software/Office2019/index.html","370aa9f958a22667630e456b1d0b005e"],["/categories/Windows/Software/index.html","f01207db80ce5e62a8a1b94f16ea3888"],["/categories/Windows/index.html","cd5e8c755d44599fb23efcb26be52120"],["/categories/index.html","1a4f6d017c39639041c73f1429e18dc0"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","716515bb2f78fd12175bdfbcba921e61"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","cffb72d3e6934b354b735e6fc4b13942"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","22b175cc695910c0993d2f4aa3c97fa2"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","99e8deef17d8d1ae4f8139a634307595"],["/movie/index.html","49bb506ccfa73e6ed598fd6bb4f900c2"],["/music/index.html","90226504909654cf87ddf986f52e0ed9"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","29f79ea59928638f6d48879f4d6b0c41"],["/page/3/index.html","3d857f4d03164184bf4c5055e1092fb3"],["/page/4/index.html","98e6b79a5c0c19462bbcdd45b4499471"],["/page/5/index.html","2d930c442462f24ce33ec1b67a62d3d9"],["/page/6/index.html","2fe21b3b474085450613623884b300c8"],["/page/7/index.html","658ceeab24f7a9994181ca6fe31deee2"],["/page/8/index.html","a4d18922cf1224fc2790186b03cf12b5"],["/page/9/index.html","fdc5063cfc52f2882329f4dfe6bf5845"],["/tags/Android/index.html","e1176b1e85fe37350c38a90ae0807fad"],["/tags/AndroidStudio/index.html","9f685b029f606ac4bc8b1993902bdc5e"],["/tags/Anime/index.html","f07442cf8b088556944a7d2b2f22dbc8"],["/tags/CDN/index.html","c07333a3a5c79dca7e0b1e1d146c47fa"],["/tags/CSGO/index.html","0cfd3549cbe97d77e04422c772cd830c"],["/tags/Chrome/index.html","c631c55febe1721835ac6bfe36b142b7"],["/tags/Chromium/index.html","dfea665ed757f29be3b57e82b0f5463a"],["/tags/Contributor/index.html","0ba2c691d0ced0a43a16355e184663f1"],["/tags/Daily/index.html","465cda2226ff8df76bebe50a0d23ab59"],["/tags/Design/index.html","391872f09aa63f9e8d88440880a65e34"],["/tags/DevelopmentTool/index.html","c8fcc5da80707758483b24c03e1ad982"],["/tags/Emoji/index.html","848d3301eaf57dcb54a8368c21b420c1"],["/tags/GFM/index.html","7d29f4c90aa25f7e1a9ba9a54b8aae52"],["/tags/Game/index.html","3f9273e57c45b7e6d12f9bd63666aaba"],["/tags/Git/index.html","f996dd86aa0d73bf77f036f0e3cf57db"],["/tags/GitHub/index.html","683e52a8666c851bcf00b1d0a8aa86ee"],["/tags/Google/index.html","00646cc8afdd5d9a6121352c810b4614"],["/tags/Guitar/index.html","1dceba0a71e02e3121cc487ef2cb2949"],["/tags/HardDisk/index.html","c8e68c44ec0b0cf1e8dd670adc5f9316"],["/tags/Hexo/index.html","46c4f1f22f4d9f966a54b931ed0307f3"],["/tags/Hobbies/index.html","a9e65ef4cd553f080bed0efe628d09a7"],["/tags/HongKongMovie/index.html","99a655ef7511b9fe650afc56284b5046"],["/tags/Html/index.html","73dbca087f8d5b8c9098db28aa70dd8c"],["/tags/Java/index.html","76ddc97a180727a6006f3ab3fd51c37d"],["/tags/JavaScript/index.html","010608acfd58efe283ad2073eee440bb"],["/tags/Linux/index.html","f6a815d6bac2e0ac5a970d71dfeb6e1f"],["/tags/Manjaro/index.html","aac21a87369661fbb30fb2a7ffa28817"],["/tags/Markdown/index.html","6c779b974398c9f4808fe42781041477"],["/tags/Math/index.html","cc6f9544c65b067f32ffab600959a410"],["/tags/MathJax/index.html","a9bef7d466bf4f42c50800eccc57adb0"],["/tags/Memorizing/index.html","b1299595d0abbc9bc4287e666fd27f07"],["/tags/Movie/index.html","536b690f3469b464a72c7b41d95b46e3"],["/tags/Music/index.html","58f2f969e3af36350c0304e61c2a05e5"],["/tags/OperationSystem/index.html","8ba17ecf4f032646d004279c07e70e31"],["/tags/Origin/index.html","d153d85c4de81ffeb8a3cf270dec4d8c"],["/tags/Photography/index.html","c29f585ebfd3fcd49dd2379da9875381"],["/tags/Port/index.html","e3db0b85775196e7bc78095fc46a0cac"],["/tags/PseudoCode/index.html","b008ee74dc04c893d35ab1875936eae7"],["/tags/Pycharm/index.html","81189f3c47a928abd509eb267c72aa83"],["/tags/Python/index.html","753797cc82610b96bc7a231655fa470d"],["/tags/Research/index.html","008f813a651e10c43ed92efcb79e463a"],["/tags/RxTool/index.html","c7aea897897f24a3364041526ba618f2"],["/tags/Software/index.html","3c3e7c58000271ce2bd1d9e028208f1d"],["/tags/Spider/index.html","a8c29023582dbeff694ae439723d79ce"],["/tags/Steam/index.html","6ca78f8f022337666db527994344eb83"],["/tags/Teleplay/index.html","2d4b09d87e035a61cd73988d0ef3a859"],["/tags/Thunderbird/index.html","d9ef7edb5f9e437037ed0dd6d2d91404"],["/tags/Tool/index.html","a7ce338134b5adfd3e6b5bccb71c734b"],["/tags/UI-Design/index.html","7cf96fcfe7e57d52bc2e679abac2b887"],["/tags/UltraISO/index.html","373db641e8037d0f149b1c8050877976"],["/tags/Unity/index.html","2b35686b2a70847a2f1aa029e995724e"],["/tags/VMware/index.html","af10cc58da7ab8d12027ac409456edac"],["/tags/VisualStudio/index.html","c7b76c56c6f4e54e38dcb7dddf0459a8"],["/tags/VisualStudioCode/index.html","cd2195c8a371427f8759793f80666402"],["/tags/Windows/index.html","60db3391962bc760baad50e191bd6472"],["/tags/index.html","1f7c8685757d419c1d217830b41d7d2c"],["/tags/个人日志/index.html","ae21c850dd974b3993a7610ab253b1d6"],["/tags/个人诗集/index.html","2fcab32bb056c387a7bd86afbb019c9d"],["/tags/亮剑/index.html","49ecae881f3d2ca737a0cd7c72e9204c"],["/tags/仙剑奇侠传系列/index.html","12cf4ee16e09e84e221f2f73a484b5f2"],["/tags/千与千寻/index.html","67874397d9c3ae169dad13fae43909ce"],["/tags/单元测试/index.html","8d91b29f5906323dd24fb77d8e9440cc"],["/tags/响应式编程/index.html","19a872fc88a0fcfe1a93edd18eee6d08"],["/tags/宫崎骏/index.html","51889cf03cc212b4c8a677035594d990"],["/tags/小王子/index.html","569a26daefe345b9273812e06b061ccf"],["/tags/开心鬼系列/index.html","9f25f68571f9e5dd7c881eb77954de04"],["/tags/思想政治/index.html","1c0e6c7ce23de184d7820edb9d0f0efb"],["/tags/正则表达式/index.html","ccec10554486650e99ca5e080f05d9fb"],["/tags/线性代数/index.html","d8219180bf73ad736ee5c04f34dbda64"],["/tags/英语/index.html","104460b8afa8a2049e585d59f1694c24"],["/tags/软件工程/index.html","4e0061a14b6e284373b88b323e5fb67f"],["/tags/高等数学/index.html","d3d2c31236bde2070ece9595de86f1bd"]];
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




