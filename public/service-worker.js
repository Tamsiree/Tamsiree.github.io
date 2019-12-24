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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/宫崎骏/千与千寻/index.html","1bb0b4e7d6ec9d5386ecd6735042690f"],["/Anime/小王子电影的共鸣/index.html","385f6e86c1971dd9f68e01ee92b863ea"],["/Daily/Memorandum/index.html","1a3718b1d9c325a6077f0d8fec9610b4"],["/Daily/生活小常识/index.html","4e23d43deaf9c6fb5c5a8942fd3e681a"],["/Daily/网络用语/index.html","d3cfa0ae5a144e87a20771c9a124de15"],["/Design/设计用户界面的注意事项/index.html","54bed617f42227b30fbd4cda5be47cbf"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","244aae46a5fbf8067a1928c8e774f613"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","0799b594b0f6039cbe7599f5231ad07a"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","171626f5edb328e19b2b348cec5453db"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","477589200c22c99cc8f3e5f4c400715c"],["/Game/如何独立开发一款游戏/index.html","fbf783abec93a7fb073a4f32d0d29b7f"],["/Google/Chrome/Chrome上网助手/index.html","024fdd1d289e06a153aa39bda3887e61"],["/Google/Chrome/Chrome使用技巧/index.html","ec792099be1bb0ceb8e43966803d00e8"],["/Google/Chrome/Chrome插件/index.html","8bc9418d644e4909755b3e40d21c46da"],["/Google/Chromium/Chromium/index.html","fd68ccd9e0a373e46fe6ae25a587ac95"],["/Google/Google搜索技巧/index.html","2ae0fa5db180bcc7ba026342229333a0"],["/HardDisk/硬盘分区结构/index.html","9d522ce10d1d446a9db926b5fcac4684"],["/Hobbies/Guitar/吉他入门/index.html","5b8cc140082cafdd437ce2825cffc437"],["/Hobbies/Photography/摄影入门手册/index.html","f3e7fe056ae973eea2c1b83a6deac347"],["/Hobbies/个人日志/芦江曲/index.html","6519cd5d1caa687c7e8336e6b3a4a74b"],["/Hobbies/个人诗集/闲情逸致/index.html","c19720b85ea0b0226551c7b379c7a86e"],["/Interview/2020年字节跳动面试题/index.html","03f510e6f20bc248a92d0bff311f890b"],["/Movie/HongKongMovie/开心鬼系列/index.html","71aebfd337908594c30f316e0c609e97"],["/OperationSystem/Linux/Linux分区管理工具/index.html","48c8afcc07385657ceab1fda102ec730"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","745aef66b5a7c44e24350ab1302981c0"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","6ed6b1cb6cdbc6b76f88ed6f7fabae3a"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","b2cc201532e035dceec8b02684d81a27"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","281448029b802863a784299d3a451e0a"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","fa76936beff4832239309db752de8dc8"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","8b63551b002cdd3e9ca7613aaa0c86d6"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","819d6eed0f04ba371e031b851c5ea20f"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","de43eb80b8f102a81ef8164fa7b7727c"],["/Research/Math/线性代数/线性代数公式/index.html","43912b7f5b105f6e850eddd0a9487d6f"],["/Research/Math/线性代数/线性代数知识点总结/index.html","336f0a5e31290dfcb5caf3abb9bf765c"],["/Research/Math/高等数学/高等数学知识点/index.html","69bc9a459d81dfe67cde9687e437d705"],["/Research/Memorizing/费曼技巧/index.html","01f1dea92ec0592471291a2f4ae6bf69"],["/Research/思想政治/考研思想政治理论知识/index.html","02eb05cc74b8525ada3584be34a21a90"],["/Research/英语/考研英语作文/index.html","09e6bb8754966ba9fa1f1831d05c4cec"],["/Research/英语/考研英语词根/index.html","6ebe41de9dd13d017fea74ec6bbaefc4"],["/Research/软件工程/PseudoCode/伪代码/index.html","edae764c46518254f834ee445c4d0b88"],["/Research/软件工程/中南大学软件工程考研题型/index.html","ed0c0e26c3c1c37fcd8850aebd5dd845"],["/Research/软件工程/软件工程基础知识/index.html","0daef531586df28842e2e087c9089480"],["/RxTool/Contributor/index.html","be6fd4f1e44dbafc8121d62ba9587f29"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","c9a911ec041220c7df7b6c72946f1c39"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","202d00dac967c645dfe9c0f8181a1793"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","83344b4606830f3ab51c23b84bf6f3f9"],["/TechnicalResearch/CDN/CDN/index.html","2b613f2eaf9fb9f90cce8e04fe0e6099"],["/TechnicalResearch/Git/Git/index.html","8ec391efe3717ded83ab8a368e62d25e"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","34dd1ba22bddf59129fe6f2ca40dc1e7"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","d7a346633ab96489ce770973b98c084f"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b6ef01bc9a52e0a269c1117f15cef6d7"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","b3bfccb6e8b6e8078e065a2110f21acc"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","117c31457296731f5fe2df74985d5006"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","d5afebd592f18f3ec841c99cf6f8831b"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","03095946c521a53a754af617bc3692b3"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","33bc4bc495bbc5de9dc545a0944f161c"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","8fa2a6820c6b6ef478a64be4a12cae5e"],["/TechnicalResearch/Java/Java基础快速入门/index.html","dffd0eebc5de3bcaaa7d58b7fa94a3a5"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","4e062f90f5d8faddd3789bb490df2f6b"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","a6d9ad51b3aa9b5148edc4a5288f9ff1"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","cbfcdb6acd2b504e3b4e9f5ccd21d892"],["/TechnicalResearch/Port/服务器常用端口/index.html","2a380d74e792fdc5b6b666e0d3bd2c77"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","bb0c72aed3ee6ff6e52b08eb4795858e"],["/TechnicalResearch/Python/PythonExercise/index.html","9b7943a27857fd2c8dc4c68b85ee58f8"],["/TechnicalResearch/Python/Python问题归纳/index.html","8832f5f7d72e3d548c85dbe8c6b5ca22"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","1f08e9b1b1459ab16b3681068ba3e83d"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","3b3128181601f6ce34ecedea1df95782"],["/TechnicalResearch/正则表达式/正则表达式/index.html","5d76e031eb055f42818cece8a9fa6122"],["/Teleplay/亮剑/晋西北铁三角/index.html","ff4679b5596f947e535de7effc6859a7"],["/Teleplay/仙剑奇侠传系列/index.html","3354d2853696dac385102776d3b3d516"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","b2bae097ab375c1f0b043ea5cbe76e36"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","a03f7fdf0b81a43bea08e5f7574769ba"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","83eba178d05b0f83ff9e64971fca46a9"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","b935543d3178ac9e9509fada7edbb21d"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","1d1c055bcfaee86654e7fdfc97f54a28"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","b524746d4538b56001a2dded463767b8"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","864091a31be1594c4c4e2aff297398ab"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","40a66d0d3b1c65a470661c8d8493a9d2"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","0c58c4643473ad20b3ef28e2585c1115"],["/Tool/Music/网易云音乐/index.html","0ece88ee74b38264329cb527f604436c"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","f29037a840c67877a99adf07469bc937"],["/Tool/Windows/Software/VMware/VMware/index.html","7014337daa43b7876ae25631063da8b1"],["/Tool/百宝袋/index.html","f8bbcc82143e5e219b136ee3264f48d7"],["/Windows/Software/Office2019/Office2019激活/index.html","489afcbe825ac0e3fea4317ecd635659"],["/about/index.html","ae40044af769d0ebc9f2b6470580ece5"],["/archives/2013/10/index.html","84e099f61cc890e0b8945aad4dd42520"],["/archives/2013/index.html","9b847edb3e40bf467e1575bdd8c7c10f"],["/archives/2016/09/index.html","24ec94e14344aa8ed3f79228892bd95e"],["/archives/2016/10/index.html","a8e69f06b95016efc0866f284b616eb4"],["/archives/2016/11/index.html","0324b6051846143b1e903791d28ba1ad"],["/archives/2016/12/index.html","c06f3c8efa8e647450d6fa90c53eec2a"],["/archives/2016/index.html","8a31fd2d6505f73d898bd8572a384d6f"],["/archives/2017/03/index.html","349eb3b11eff137660e5728f0300f756"],["/archives/2017/06/index.html","80ede88b10b1acd65f64640ade2ec713"],["/archives/2017/07/index.html","ae6951990fe8dba037a77442fbc83ab2"],["/archives/2017/09/index.html","c03b3d27451e55fdf4a1a8bc841aa537"],["/archives/2017/10/index.html","b0379c7a9ead355fef73ddef8f46879e"],["/archives/2017/11/index.html","0c11ebef652e4c98a00acf775e907a0b"],["/archives/2017/12/index.html","d97f2285c444c3fe6c592b0465e6a589"],["/archives/2017/index.html","2f45621fb51960fa2f67de97953605ce"],["/archives/2018/04/index.html","52939c06b705f802903920d374978c62"],["/archives/2018/08/index.html","e4bcc2d721a8eb569b7188278012e5c4"],["/archives/2018/09/index.html","51129344191853332b8064c29397b1c3"],["/archives/2018/10/index.html","82a44f5651ff52ec0e90277a520ef473"],["/archives/2018/11/index.html","4457f362f41a35a2f0b992463872d5dc"],["/archives/2018/12/index.html","a4fb0120b9308796c48132f445f0f684"],["/archives/2018/index.html","6368f7bc3ed425410bdf097463414e73"],["/archives/2019/01/index.html","0a6cfb3f36f89ffbabffc51898d8c304"],["/archives/2019/02/index.html","1daf24025e245056b6e9f8907ddb8d31"],["/archives/2019/03/index.html","84036372a789997e44615f4a8f7b9216"],["/archives/2019/04/index.html","da0437dd39c27fe75eb06609ef099a94"],["/archives/2019/07/index.html","7d7232d6cbb80d10fda9e710d2a466bd"],["/archives/2019/08/index.html","fd41c190179e7fe2c8b9cef70c8722d9"],["/archives/2019/09/index.html","ca320c0c7fc0b032dfc6f7ba1f852453"],["/archives/2019/10/index.html","72ec17152b89b81f73f817969e48f9a8"],["/archives/2019/11/index.html","d14d181be222ed99b05b45b507169690"],["/archives/2019/12/index.html","63f3668188815efaffba51f6642f43da"],["/archives/2019/index.html","6d92ef9ca533c6fe313ee38f84629595"],["/archives/2019/page/2/index.html","7a360c1268ddba0f5b83ac1086ff6cb8"],["/archives/2019/page/3/index.html","16bfb84583ae4e93fca651badcb4bef5"],["/archives/index.html","96afa7c49b66f786ae6f2feecf0275f3"],["/archives/page/2/index.html","7740f82411e82036382ea2ecc113ef69"],["/archives/page/3/index.html","de916ed57d42a71b8473b8f1dcc286a5"],["/archives/page/4/index.html","e109e713895a77386faee9e93d02c306"],["/archives/page/5/index.html","812f0a65279016dbe62b1a8f2cf078df"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","1364ee7763e1d59fd9b9111b27d2b0f8"],["/categories/Anime/宫崎骏/index.html","206562ee736005b0caa8d7be8ed4cb1f"],["/categories/Daily/index.html","dc9e9c851df82ee1ce70d589e7a9d4bc"],["/categories/Design/index.html","0973f1bf09754a934683bebb2e817840"],["/categories/Game/GamePlatform/Origin/index.html","2cd6ea70cb2d3ea9bd189ce5269b305c"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","fb5c75fe29b6ffbcc74f1c98ee4686bd"],["/categories/Game/GamePlatform/Steam/index.html","302a9ba35292cffa1918387a178f153d"],["/categories/Game/GamePlatform/index.html","494418045d384e2c36e1510cf55b597f"],["/categories/Game/index.html","9d11c9d022b2f442d95ca6178417e909"],["/categories/Google/Chrome/index.html","eb367656562e35de7d435a32c69c089c"],["/categories/Google/Chromium/index.html","258ef92875c7d9523dc819951e871920"],["/categories/Google/index.html","4c84311278f3861e6b876008eae4b9bc"],["/categories/HardDisk/index.html","26b9c3047e26e15f711f1eb8042c9c25"],["/categories/Hobbies/Guitar/index.html","652533ce3bb20bb4b8a674d0fd352fb0"],["/categories/Hobbies/Photography/index.html","5e31fdb9e106613db6dfef1ca891780f"],["/categories/Hobbies/index.html","4c314ed1d01902add1c89beee7c15512"],["/categories/Hobbies/个人日志/index.html","7287e769e3314c990d18931062acd4a1"],["/categories/Hobbies/个人诗集/index.html","6cb5ad66ad575de03d8b493c7d16d6eb"],["/categories/Interview/index.html","026bc92dc23416736de729fbf2b453cb"],["/categories/Movie/HongKongMovie/index.html","0a98fbd61f8a6779416230d2710e9474"],["/categories/Movie/index.html","86e0b477d4abba1cbbcbfc641889a7d3"],["/categories/OperationSystem/Linux/Manjaro/index.html","4914f07563886126d01aad7324edc6f9"],["/categories/OperationSystem/Linux/index.html","9425329ed2a3db5f755287ac3e2d326e"],["/categories/OperationSystem/Windows/Software/index.html","2a8d47b9f21d440e46bfe74143a8eafd"],["/categories/OperationSystem/Windows/index.html","f07de723f70a785e697cbd264ad403b5"],["/categories/OperationSystem/index.html","2a2eb4869e0dc440c7fec09c6edad141"],["/categories/Research/Math/MathJax/index.html","7e4ef6b7433c756924bdfc4eb26a5c38"],["/categories/Research/Math/index.html","f7940c93b763d00383814fdf2b698a3e"],["/categories/Research/Math/线性代数/index.html","2a878daeb2084d02e90a65624eea9d72"],["/categories/Research/Math/高等数学/index.html","4e61676d6dbc683bc5d7cd8f1e528afd"],["/categories/Research/Memorizing/index.html","2f8ff21eb779e6b91d0b83ed2c10569b"],["/categories/Research/index.html","22f9c1307785ff8fef49e18d88b29778"],["/categories/Research/思想政治/index.html","00cce3ca65ffffe1d6177dbf0911bf78"],["/categories/Research/英语/index.html","a62b5917f3fb6f65a061927a72855b18"],["/categories/Research/软件工程/PseudoCode/index.html","c9a1f9fb5f2edc7a80775188a284cc38"],["/categories/Research/软件工程/index.html","f803c3bba9dfcf5ae42ca27988f80f3a"],["/categories/RxTool/index.html","03d431cd6f29e2a73effde81bdcd423b"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","0048cde568ca41e4f1a1896fb31a414c"],["/categories/TechnicalResearch/Android/RxTool/index.html","c55a53dc0f900951955dbf6bce0c6a14"],["/categories/TechnicalResearch/Android/index.html","7c1bad10375bdd279cd4023366817225"],["/categories/TechnicalResearch/Android/单元测试/index.html","da1493bd3ce302e101c48c19391cb906"],["/categories/TechnicalResearch/CDN/index.html","3c9b6600cb3124e39e6d9b8bafb887c2"],["/categories/TechnicalResearch/Git/index.html","33fcf814e7892edd204a0f28f6a3a185"],["/categories/TechnicalResearch/GitHub/index.html","59ece70882de2a9310dbb45f2ce53604"],["/categories/TechnicalResearch/Hexo/index.html","d3a6705c88a339c8ec79b96143c93a61"],["/categories/TechnicalResearch/Html/index.html","a5c7080135341e669a98beb89b9b6781"],["/categories/TechnicalResearch/Java/index.html","b3019c20bef0c811e43c75e626fc8631"],["/categories/TechnicalResearch/JavaScript/index.html","d76e91ed49763ed71821e2de0811c42e"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","1327ac3de2580effd72fb9c9bbbbc361"],["/categories/TechnicalResearch/Markdown/GFM/index.html","645913833c0b2b40d21277f6b9b81fe8"],["/categories/TechnicalResearch/Markdown/index.html","2b7145c7cd564b6ce76802c4da194705"],["/categories/TechnicalResearch/Port/index.html","49ec9e85491e5487985bc6e58f35b208"],["/categories/TechnicalResearch/Python/index.html","11e6e3a5d8fdab48c3f20108c8327372"],["/categories/TechnicalResearch/Spider/index.html","4718fe4e099cf6534c8cb424f385ce68"],["/categories/TechnicalResearch/index.html","b3a359a061fd8f285d0732fe4130d94b"],["/categories/TechnicalResearch/响应式编程/index.html","3f5550a622a2d07508d7cf670ea0ee31"],["/categories/TechnicalResearch/正则表达式/index.html","f4adc919d3cbf677183c35b158704289"],["/categories/Teleplay/index.html","40eb6a8f3e1bcc0b2ed0fd3abad33090"],["/categories/Teleplay/亮剑/index.html","9f31e3f960e4ca1878f8988b734b08e7"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","fa66b365392973f86888d50747a61045"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","7e39cbb09ff3c286e5f75e865d9fca5e"],["/categories/Tool/DevelopmentTool/Unity/index.html","18b202ffb5a0760e9734587949c405ba"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","bd53f7fe6b379e4d7ced82b234839e2d"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","fdf874e30fe6387ecd65323a2f84787d"],["/categories/Tool/DevelopmentTool/index.html","086d4eaea21f7c2a59d24e29cb4272ad"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","4ed49e6dc04752dc8bf99f31ffd268dc"],["/categories/Tool/Linux/Manjaro/Software/index.html","5e49bfb21d07bace63b91d3f7bd218e2"],["/categories/Tool/Linux/Manjaro/index.html","5b206e375f365918cdec9bc10a9891c5"],["/categories/Tool/Linux/index.html","7e28b762df68de230e3d0f169277cd30"],["/categories/Tool/Music/index.html","14f1c0eddd4bc1c75215b9c7e6c246ea"],["/categories/Tool/Windows/Software/UltraISO/index.html","b171c28d885b41fbb5bc107e33472c4c"],["/categories/Tool/Windows/Software/VMware/index.html","935d32ecd41a6a4a05379fd34938b088"],["/categories/Tool/Windows/Software/index.html","5d5964761f84b7df346776185a2f510a"],["/categories/Tool/Windows/index.html","d2199bb58d32d21f86c463904d129216"],["/categories/Tool/index.html","8fd025019cdbaac07cc545930226723d"],["/categories/Windows/Software/Office2019/index.html","a62e060b2558420d32ae8326c7fba605"],["/categories/Windows/Software/index.html","1da78ea270a0be901fe9f546d7e83a04"],["/categories/Windows/index.html","b13348b31f7b36dbb389aa52657824b8"],["/categories/index.html","abb6bcb406c0901084b7be6e8b9f6147"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7b459a656b30e3f874e53bc6bac386b7"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","abdad4a8bb456d93fec7f4881816e986"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","5500ee4f5b57dcef94724230face5328"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","c560161d9f7941410ee668ad5f894656"],["/movie/index.html","c86bd3ccdf963583b9cf28b1314fdb98"],["/music/index.html","5f396df7ac725b8f3d9745b4f2f2565f"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","146185ea9e97fbb6a638b8280254949f"],["/page/3/index.html","58110dd909873c699feb67d88c0c0511"],["/page/4/index.html","203e0f4b3a1928349a5b821583ada015"],["/page/5/index.html","a2e5b0e3e9a2d3ca6338f1dc4d32c79a"],["/page/6/index.html","489ba00a5ff41afb89dc99b54d2f0b6d"],["/page/7/index.html","ce66c9044b5b7147a3c756b53ca6af57"],["/page/8/index.html","9f527010b52fdddf3bf81b22cbc924c5"],["/page/9/index.html","3f22de16bb6beb0c35889f910d6be4a6"],["/tags/Android/index.html","f233e51a483849aed384535efcc338b5"],["/tags/AndroidStudio/index.html","e5372a2cc9db2225d6028c3acf8c1b5c"],["/tags/Anime/index.html","c2e6d07662fa6c317ebfd5834b3c4677"],["/tags/CDN/index.html","25daa4072566aa5cd20184c0d367f635"],["/tags/CSGO/index.html","b867db942270aea32b74673631b8caf9"],["/tags/Chrome/index.html","b170af88c20687f631965d96f093b101"],["/tags/Chromium/index.html","5e40d5396707a21d67ea64b6c839d839"],["/tags/Contributor/index.html","80ad68829fde556b42d7f381c29aa31f"],["/tags/Daily/index.html","64057d0fb63a04bd833acd33f315efeb"],["/tags/Design/index.html","73a286a62631313d82c0c4a2394229b7"],["/tags/DevelopmentTool/index.html","4d0ba60e51bf0a7a3a7246d1873459e7"],["/tags/Emoji/index.html","3cb4c81e396f360a3db5ad331742d626"],["/tags/GFM/index.html","5ee8a8893ccf92c843c5596ccfdd9fc1"],["/tags/Game/index.html","4021009a6923d46715af58f1a5fbb9c0"],["/tags/Git/index.html","b5368df6af56c42bfaec75bb33541e54"],["/tags/GitHub/index.html","d7b11d793d3da43ad02ca45c70b30f66"],["/tags/Google/index.html","4fb5c6ca043d6d5be4c367f35b73f163"],["/tags/Guitar/index.html","19f07586f495c5083d65f94d56e21555"],["/tags/HardDisk/index.html","9ae5de495f7bdf8662d2156658e13c6e"],["/tags/Hexo/index.html","f17604befd98e042c66cb26795e49840"],["/tags/Hobbies/index.html","16b1980c5c03b25fcb9cf4b72c786742"],["/tags/HongKongMovie/index.html","b9d4f5c21d81c2b1e3e06672ad7d8c7a"],["/tags/Html/index.html","361ce0e5c3aa67ded9608a43a86c199f"],["/tags/Java/index.html","a35d8fdd6d07c298682548063ddcf56d"],["/tags/JavaScript/index.html","3f8ba51da21574402e5584bcd86f44d7"],["/tags/Linux/index.html","d7d6cde76a9aa927760b1f627f485e6f"],["/tags/Manjaro/index.html","f00bb71f688d429705d8bc172f0d964a"],["/tags/Markdown/index.html","91cb6b49c5e9c6c7776b15535d484a0c"],["/tags/Math/index.html","e98cb168cbf9296154210cd7c5b7d9bd"],["/tags/MathJax/index.html","12cfe621c79530aaf7f453f5ac695c04"],["/tags/Memorizing/index.html","eceaa9b7ea5ddc20c8d7199046345066"],["/tags/Movie/index.html","d2f7f74feab97d173038d808122fcacc"],["/tags/Music/index.html","5d2f8a861dbff79a769b8ae7b7637658"],["/tags/OperationSystem/index.html","2cd059c96d305fbba796087b72de05f3"],["/tags/Origin/index.html","55f9dcc24c8eefa905116547e154f371"],["/tags/Photography/index.html","12107feb3a979be5ad70bb0f390e873b"],["/tags/Port/index.html","501cdb248458e9e3325bea54b0206fb1"],["/tags/PseudoCode/index.html","432db2353b1c46789fa9bbf522198e21"],["/tags/Pycharm/index.html","76d339a1a0fd92e1334daf08075198b3"],["/tags/Python/index.html","936a9687598312f50cede02efbcd80e9"],["/tags/Research/index.html","5dd25945ad724587d26437d7a56b4815"],["/tags/RxTool/index.html","629bfaca75bc47f2badaa44a5a1a57ae"],["/tags/Software/index.html","5df37f0bbb804e6fbcd75bfebf59a395"],["/tags/Spider/index.html","b97543586690fad9c55acc95118f11d2"],["/tags/Steam/index.html","1031efd4516c4050909f038d1e4d7b9f"],["/tags/Teleplay/index.html","005d91ade327cb41cafcc7db797a7fd1"],["/tags/Thunderbird/index.html","668d00aca5ff68cd572b9bc511afd99f"],["/tags/Tool/index.html","84ee1f9295f219f3145126b53198d7c2"],["/tags/UI-Design/index.html","15bd128e772886367856e79bb3e6a69b"],["/tags/UltraISO/index.html","0e1a8ecc8ba63e6bd30d3c7d7b185c1b"],["/tags/Unity/index.html","af8cf5658b4f2590d312fa65a0dad12f"],["/tags/VMware/index.html","8c4cb072c223b6b59a693122c1248ee0"],["/tags/VisualStudio/index.html","12ee01e846d8477f941c718c88594b05"],["/tags/VisualStudioCode/index.html","e36bdee3421faf7fe11e183dde62a16d"],["/tags/Windows/index.html","4d584b1f5a6129678159b87a60cc864f"],["/tags/index.html","79e0b726c481f1b72ac6f45c4d66e221"],["/tags/个人日志/index.html","0aa550728d4d72b47d8ecf2cb7d006ac"],["/tags/个人诗集/index.html","9705381bd436b19db38ce515bdbc643a"],["/tags/亮剑/index.html","13d6539b2b3157b7853af14ac1c1ff98"],["/tags/仙剑奇侠传系列/index.html","c7a27f7847bbb95750858aa10228f81f"],["/tags/千与千寻/index.html","0bd840f3e781c7359712def9029e6435"],["/tags/单元测试/index.html","5e5b28deca096ffd876820fec03727c6"],["/tags/响应式编程/index.html","96327d1140101a0e6b2d32d650908932"],["/tags/宫崎骏/index.html","e01e06d7f8698c21e560862b3e5e96fc"],["/tags/小王子/index.html","dada4dfa64724f136536553ef817b678"],["/tags/开心鬼系列/index.html","83c93a643c6da63396aed799887ecad3"],["/tags/思想政治/index.html","6e69252483f14fc6a201f3bac7deac9a"],["/tags/正则表达式/index.html","a77a8269d240f202b02c6d171b783895"],["/tags/线性代数/index.html","0efaad1cf65d9302d8dd63897a72839c"],["/tags/英语/index.html","dfcc70ce2279f9a89c832dc3d7d5b2d6"],["/tags/软件工程/index.html","8249f858d20654d326e0388042de2ba6"],["/tags/高等数学/index.html","76689c4c3fd647171de27a8181c8a549"]];
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




