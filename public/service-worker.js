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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/关于《小王子》电影里的共鸣/index.html","9d2890ac97729a27fe466fc47635ad5c"],["/Anime/宫崎骏/千与千寻/index.html","02e5c956a96ea796f334b2fca440ee4e"],["/Daily/Memorandum/index.html","ecf53526c69e0a62340fb73a4721331a"],["/Daily/生活小常识/index.html","dcfe8743c05bf375aa337dd171e4484b"],["/Daily/网络用语/index.html","55ab80e008ea48388c656ed256c0c9ae"],["/Design/设计用户界面的注意事项/index.html","08d99a33003fdcab11157a20a9a358c7"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","dece823bdcd8c3b4a685e93f8e85eb82"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","989d21302a7d40f36465de94af7d5712"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","7e1b11f3356bdf05b381040a4609c9da"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","c2e7e1d90e80e2be182be17823f42daf"],["/Game/如何独立开发一款游戏/index.html","606beec37664712c933d88de939f237d"],["/Google/Chrome/Chrome上网助手/index.html","89727e34fb63c95525f93a8749343a75"],["/Google/Chrome/Chrome使用技巧/index.html","ff8054441aa025291ca1cebf7c3346ba"],["/Google/Chrome/Chrome插件/index.html","7251e132050f2f4a9a643e0e0081f9ce"],["/Google/Chromium/Chromium/index.html","47868410254fae5f39207b4b6d334b13"],["/Google/Google搜索技巧/index.html","5c36b5d78c21b8bca8d96a00e61dab55"],["/HardDisk/硬盘分区结构/index.html","2c468002a91999f73f4c125b2e99190c"],["/Hobbies/Guitar/吉他入门/index.html","a01649f26a2da1e633df8acbdf5fe317"],["/Hobbies/Photography/摄影入门手册/index.html","d8c4317149633ffd12fc7632ac2494d4"],["/Hobbies/个人日志/芦江曲/index.html","2f41077aa279fe42d2d3a7a115a0bfee"],["/Hobbies/个人诗集/闲情逸致/index.html","bc0d2a822d81985e0d3c5046e81a6ce1"],["/Interview/2020年字节跳动面试题/index.html","5c255c2cfd6ec217c4e293601136da15"],["/Movie/HongKongMovie/开心鬼系列/index.html","f8d10ded1537f35788813527051af74b"],["/OperationSystem/Linux/Linux分区管理工具/index.html","4968e28431b737547ec11c5d8d935c40"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a880eedaae09197493e253b0c04599ea"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","83f744b46a36a630816ab86bbf7328db"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","4214d077c072ef0643bf79754ebb8c68"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aa7e71904456862bf42aa2f84199d535"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","88390ae2fd1eeb600615ad2a822107c2"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","ba8bf0b25b1649108a93dfcf96356e84"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","e4e59bc9fe0ce47879f6cca63a1e80dd"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","f2a50663e5253454efaf4ecb9b6bfdfe"],["/Research/Math/线性代数/线性代数公式/index.html","a7970e8d999db4189b14419186ef761b"],["/Research/Math/线性代数/线性代数知识点总结/index.html","ca2cc3a306e3113a583f041814556562"],["/Research/Math/高等数学/高等数学知识点/index.html","58948edb0c9f869e8553c3f753123579"],["/Research/Memorizing/费曼技巧/index.html","95edb19198c5a4c52e93e9368a3c9909"],["/Research/思想政治/考研思想政治理论知识/index.html","635dd830e0adde9d27297206cbd4e367"],["/Research/英语/考研英语作文/index.html","e78d14ad5451cec3486adff04f90741f"],["/Research/英语/考研英语词根/index.html","9a70dac475d10bf072be61c1ea26166f"],["/Research/软件工程/PseudoCode/伪代码/index.html","4bec5c53d6cda72020929b417325cbd1"],["/Research/软件工程/中南大学软件工程考研题型/index.html","779aba14d916577beddef849dd44dd91"],["/Research/软件工程/软件工程基础知识/index.html","f8d227c17b955a7806828d245e5bf6d7"],["/RxTool/Contributor/index.html","9ff1201a7f9fb7ce9c8a1eef83c4f6b2"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","e0dc9717ee7766cfd50ce2e3a5c70581"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","8cf85bdf77e90e1939b8d7190f2eb51b"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","96bf7d976a219ed374e84c8439b7e009"],["/TechnicalResearch/CDN/CDN/index.html","39a75486e8e7d2e59a9aabb8937bef16"],["/TechnicalResearch/Git/Git/index.html","f4115cc8d270ff153dcc3429510993df"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","18ae0d40ea28fc2be0659565cc9e7386"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","65b0d633519b3e5994e97c85013ff2b2"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b6ac73329e3c5e672bdd29aca56da8b7"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","22226c85849a771cc6b3715c16cce920"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","43e52ba884870882d0be3691fc7082f0"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8df372376d1fddf03c613b969cb40c72"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","10a0d2c2dd0b5c592d72b98625893d92"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","0c68a3e75d3fcbf48230d8c127bf6f77"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","2eacbe7abb208d2a46a6fbd87063ddda"],["/TechnicalResearch/Java/Java基础快速入门/index.html","253a3e1ab72000d28f5730f80b0902c8"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","4dfd91767e7feffff357f48e70f743a8"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","1166a1d4d2137fa76734404214b89a3a"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","f5d4ead5387d84bfccad2f3517862962"],["/TechnicalResearch/Port/服务器常用端口/index.html","220ed65a5ad9340fd034bb338e4eda4e"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","364dcf884e8342f87057f1b7ab8c3d7a"],["/TechnicalResearch/Python/Python-Exercise/index.html","e3ed4e0a4f814c3e0c6cb819eb329514"],["/TechnicalResearch/Python/Python问题归纳/index.html","e375fe0f18138d7c39fac9ce7bf54165"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","fbfc54b4871d711752e684099fec6334"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","888300cc87427986caf27339dc2fca25"],["/TechnicalResearch/正则表达式/正则表达式/index.html","a12284277e46d013f1fab5d871a5bc86"],["/Teleplay/亮剑/晋西北铁三角/index.html","6f39c6b02170a3d5446129301fd8350c"],["/Teleplay/仙剑奇侠传系列/index.html","893be16d54d822f798ac1c207b05470f"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","8c2683d0f14790316e59a485e93e5506"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","82dbeb1d34fbf5e70ce89d846abe322e"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","707c9e731317328477923b1716da1886"],["/Tool/DevelopmentTool/Unity3d/Unity3d许可证手动激活/index.html","22cec3607351515d0a1f2290c35835d4"],["/Tool/DevelopmentTool/Unity3d/Unity3d问题归纳/index.html","cd2a78d732a62f0fd36aae4a6fdf700e"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","e0b58d5c44a0a4d69893b187c6dda67e"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","69fb6b9b222e6020ed6d9959a6a8eb0d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","55e8bb095d5f9211dbf0b6a8fe4cc463"],["/Tool/Music/网易云音乐/index.html","ab744c4e4d01d3109d7b8a43a6e00aa0"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","3511a9ae9e273368733428a78b0ed9ae"],["/Tool/Windows/Software/VMware/VMware/index.html","280868d20d7ee92301ec257a08915d87"],["/Tool/百宝袋/index.html","03d68c0c54dae545d21cb27d9f25eeff"],["/Windows/Software/Office2019/Office2019激活/index.html","f58e3d818a9b951569231ad928d09729"],["/about/index.html","3cc5ced9ba9a11cd573c966008235e52"],["/archives/2013/10/index.html","50a97c2fef02836aa5762a75b97b46e5"],["/archives/2013/index.html","81f55345ba162040883d5fb55da0daec"],["/archives/2016/09/index.html","ddaf8cf64755b37fbe83ea0a1460d22c"],["/archives/2016/10/index.html","a82622cc3da36cf3adc8f9c5081d4c2b"],["/archives/2016/11/index.html","018afad9ebfd1683abadaf4a06a5e330"],["/archives/2016/12/index.html","49407895c31a017e1d1e19582a306ee1"],["/archives/2016/index.html","e7eab2d85dd37c0688885748a744bca3"],["/archives/2017/03/index.html","595d7ec04031807d62734b9f0ff75613"],["/archives/2017/06/index.html","383590f09d38406458a93ab9ab6aea59"],["/archives/2017/07/index.html","5bd31ec112adbb0a99d6fe570aba212d"],["/archives/2017/09/index.html","ff8f5d2d4a6c86d177b3a11ea26631f5"],["/archives/2017/10/index.html","cd0ea4ed88a72da01bdca1d1b17793d3"],["/archives/2017/11/index.html","fe9fb0286b5931070fc5211e5a60e834"],["/archives/2017/12/index.html","73cd95e3749d15321d5bbeb01c2f483a"],["/archives/2017/index.html","4fa5d099d6d3fa2908a961634a6cdc39"],["/archives/2018/04/index.html","9c90f17ce90ae4192f4414f54cee8ee4"],["/archives/2018/08/index.html","df1bfc6b0d1474a6b379efb2296a6615"],["/archives/2018/09/index.html","015e5a8380a320239200e2f387c2a85f"],["/archives/2018/10/index.html","7f9b5708d1f90c89e9e4f9350ff59c29"],["/archives/2018/11/index.html","8fc3618af0b5a26ad4a5c1d5003b68e0"],["/archives/2018/12/index.html","f5b428d6bd0208144028e512dca5d8ba"],["/archives/2018/index.html","cc8f06cdd67f1a684a0b6b5535ec5f1b"],["/archives/2019/01/index.html","66c1b80e0c235dcdeceb3769161fe40c"],["/archives/2019/02/index.html","f2241c169bf6f4aab75fcf302bd3d00c"],["/archives/2019/03/index.html","de6565dcc98fb832b4e441e4dc2f0367"],["/archives/2019/04/index.html","9db654bbc1e24d0436d72a18074d397d"],["/archives/2019/07/index.html","760641847be406dfabdd8765ab2d1c24"],["/archives/2019/08/index.html","c6bc64acad257aaf725ee7846a8e60a8"],["/archives/2019/09/index.html","9f0229583a69d75806e5dfa70dd0af79"],["/archives/2019/10/index.html","2d5fa7c43a6e1d2ffc2f2216f1e4f46f"],["/archives/2019/11/index.html","16f0d9a414d5fa96d8d1a65f81f3723f"],["/archives/2019/index.html","f98c03ede11a77d4736a052b4d09975f"],["/archives/2019/page/2/index.html","591b3361ed67793c4abba3366e8d9169"],["/archives/index.html","5d04c443762cdeb0dab6c74dee47a0b9"],["/archives/page/2/index.html","2a3828d945ca1f015b313a876f13b889"],["/archives/page/3/index.html","3c1fb4725dcac04a922b34dd98a29f5c"],["/archives/page/4/index.html","e05df6dac9baeb37e39c7ba362abac6c"],["/archives/page/5/index.html","775a62e43b9b6102eeebe05352639e21"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","ed1aa900f2f7899ee4dd152e07162443"],["/categories/Anime/宫崎骏/index.html","39b2a8efa2dc9748fa2b56205d6e1662"],["/categories/Daily/index.html","5d2c2fa09c3b046f45296bd68c33c1a8"],["/categories/Design/index.html","2f87caf5538e58c88779361c73c733a5"],["/categories/Game/GamePlatform/Origin/index.html","9b1fabaa35db78d2673ceaaca65cf5c5"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","f67dee87d789722bfcc907e86b3f3f3d"],["/categories/Game/GamePlatform/Steam/index.html","ff7fef3e8b30eca80d9e69f3f5ab5044"],["/categories/Game/GamePlatform/index.html","c90608295139349a96dfea9f99562d9a"],["/categories/Game/index.html","6499d3843237a8f85aaaa7da88ad48be"],["/categories/Google/Chrome/index.html","5f4adea334d9e0fad7477d20953bbfc7"],["/categories/Google/Chromium/index.html","843e4724198dcf83ab0e9d940a5a929e"],["/categories/Google/index.html","345a32e6dda071ea007e3ddff0b968bc"],["/categories/HardDisk/index.html","9310acae45588d23f28f9e2dfc735f47"],["/categories/Hobbies/Guitar/index.html","4498c0f2f4b78e2bdd269b6b73463052"],["/categories/Hobbies/Photography/index.html","fc30cc89f21e13a9623f0d4a2e9e27a0"],["/categories/Hobbies/index.html","6b38fa59b76e2e590709a88311174dbd"],["/categories/Hobbies/个人日志/index.html","71b647069a3a95d90ea607a313bc9790"],["/categories/Hobbies/个人诗集/index.html","f529f3548fe0289fdd95edaa9e8dc57d"],["/categories/Interview/index.html","48b5e8e6059738696c670f86d6f26825"],["/categories/Movie/HongKongMovie/index.html","03998bf8b3b8bf44b5a3ae55a268e3eb"],["/categories/Movie/index.html","4fe30e484a9cd078844179b0dcac2551"],["/categories/OperationSystem/Linux/Manjaro/index.html","931a00cb78932be7e1f20aaa8ca79220"],["/categories/OperationSystem/Linux/index.html","3840e60806d97ac11fcfa217a599338a"],["/categories/OperationSystem/Windows/Software/index.html","9d83d7f5c530590178ec1366d44644a0"],["/categories/OperationSystem/Windows/index.html","d6b8a2fef8eb5976d02dca211f416e0c"],["/categories/OperationSystem/index.html","91cb6bd5ff05bb2c25bf4a199a9ffc87"],["/categories/Research/Math/MathJax/index.html","5738711ba625a453d0aacab4adeb1ab6"],["/categories/Research/Math/index.html","d936b87d5e9b7237526092d7a090d073"],["/categories/Research/Math/线性代数/index.html","8d4675c70e787457e1485ce8343fb83b"],["/categories/Research/Math/高等数学/index.html","89d22dd95c64ca012bbb486b7c5e2c72"],["/categories/Research/Memorizing/index.html","6e5e03d83593382e40aa989643075dab"],["/categories/Research/index.html","7c79df0a11d22134e6085f97eb8436e6"],["/categories/Research/思想政治/index.html","d72843d5451601fa9de2c4b8ebfbe2a6"],["/categories/Research/英语/index.html","5720b9dfdd66a6a05571bec889bba968"],["/categories/Research/软件工程/PseudoCode/index.html","9005cf259d287e11543fb46c824d8ccc"],["/categories/Research/软件工程/index.html","48a35754cd269b5eb2636e6c640cfbc7"],["/categories/RxTool/index.html","19986cee8610bc429607b3654d4a9962"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","4f73dcaad77947fb220795473082a193"],["/categories/TechnicalResearch/Android/RxTool/index.html","c59217458c56c48bd29e0cc0739e9d4c"],["/categories/TechnicalResearch/Android/index.html","f613bc2d5f1a4292dca8c93b3372e0e7"],["/categories/TechnicalResearch/Android/单元测试/index.html","f6605738a0e159f42b8c14275bcc15fd"],["/categories/TechnicalResearch/CDN/index.html","8cea9e28f4252fc0c0167f9f620eafca"],["/categories/TechnicalResearch/Git/index.html","364adaedc3f4c0cf01f13d82cc1527cf"],["/categories/TechnicalResearch/GitHub/index.html","b39c847358c8296e1ec63147025ccd08"],["/categories/TechnicalResearch/Hexo/index.html","25625ca5d57e8dff6ae5c0172c618bc0"],["/categories/TechnicalResearch/Html/index.html","f4b2f7507d9fb399b66a2df719eacf72"],["/categories/TechnicalResearch/Java/index.html","f5547c0e877bf9d8d47a1d876f8fcbab"],["/categories/TechnicalResearch/JavaScript/index.html","d87e6b23180488abfc6cf793859ec23a"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","028812c23c624b3ba297b03346a66d25"],["/categories/TechnicalResearch/Markdown/GFM/index.html","bb49e703e52347c12ae1689a3e84703c"],["/categories/TechnicalResearch/Markdown/index.html","783267621bbda12beb31fcffe3a5a017"],["/categories/TechnicalResearch/Port/index.html","5e7076b30cc41a221f7d20cae1494148"],["/categories/TechnicalResearch/Python/index.html","2d8994ebf89d038be7c6bfdb4e2b852c"],["/categories/TechnicalResearch/Spider/index.html","f3ded2b549b164ec10293a148c74d4c8"],["/categories/TechnicalResearch/index.html","eaf0e97ed6e7ecbab279dcafc7bf267c"],["/categories/TechnicalResearch/响应式编程/index.html","b72d7c1018920a9a55de94b15186feaa"],["/categories/TechnicalResearch/正则表达式/index.html","72b03949174b166acd8bd6dde1c8b1ab"],["/categories/Teleplay/index.html","2fc4e5fc3bed4d142432ca83d0e088cc"],["/categories/Teleplay/亮剑/index.html","ebf6714c3d81dbb45fe0819c745312a9"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","9212beac33d328a12502de6ee8fe911c"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","72c84f080e198bbb8cce31b9a9bfc4b7"],["/categories/Tool/DevelopmentTool/Unity3d/index.html","37c36d623fbf9d303228b1344c8a697d"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","34bdd4263202088f40087a694e730aa2"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","8b6ce9bfed0bd540f0b5cafa471c60b5"],["/categories/Tool/DevelopmentTool/index.html","c7a875b9e31404dbb97cb627a8e7b79f"],["/categories/Tool/Music/index.html","e28f07cdb27e1faade9df071b3dcece5"],["/categories/Tool/Windows/Software/UltraISO/index.html","8ad95be3a3333ec81d4a03f565eaf59b"],["/categories/Tool/Windows/Software/VMware/index.html","d686f856e7fb93cab395f12ad38279b1"],["/categories/Tool/Windows/Software/index.html","724cfa2bf29456148d023e14047e6211"],["/categories/Tool/Windows/index.html","089815187925c7cd32f9db2aa6618552"],["/categories/Tool/index.html","6d3069d1d9c6b566e350ca440716b3e4"],["/categories/Windows/Software/Office2019/index.html","aa0fa32cfc229c15a2c9ad5334701c48"],["/categories/Windows/Software/index.html","2ffe79cdb59dd9545880b15b7a114848"],["/categories/Windows/index.html","84d46a633179982937af21d0cb499bc2"],["/categories/index.html","8d46be1c29d9905fe1ffc4a9d8b60aac"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e10820f5e2bad81e403ddba09b225e0b"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","16b55b2287ea17dbaeb4b33c829bf5aa"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","a9844392c3c5f467dd3bcdfd8cf2a01f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","43854f0e2d3a34bdcc24a1ed74a1f020"],["/movie/index.html","041c5b6d3d82e2a858178cf39fa2b6b6"],["/music/index.html","97e383c0b4f5804b59e2ee2c2d09dc56"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","66d220a422d3492cdf96b088e1ae2a4c"],["/page/3/index.html","c6537ad39fd2460ff8c15c9cac740835"],["/page/4/index.html","13441751d2db39fdef3332d26223b1f9"],["/page/5/index.html","b14e74764c446835e6951108db845a8c"],["/page/6/index.html","721d09393590b181884c676a47b53300"],["/page/7/index.html","0702a5e71414a747467e5e84cd7d6ab0"],["/page/8/index.html","3e5d1adc0086e26fae770f64d8b30ae3"],["/page/9/index.html","4b2d61266cf0fd53906e8daf5467bcc4"],["/tags/Android/index.html","9d4f898b289efd6cbbc83e47120e2914"],["/tags/AndroidStudio/index.html","05504c19ef166980b4496a241c133ba4"],["/tags/Anime/index.html","55ada5bc1a7736a924092308764dd088"],["/tags/CDN/index.html","76eb4a9386f1b0ec0da7f8e3fb3bdbad"],["/tags/CSGO/index.html","253a424f2110aa82be66f45f24752c6d"],["/tags/Chrome/index.html","6ddee754cd6fd9c32ee24e0ff42b5e78"],["/tags/Chromium/index.html","fa19719cfb1b21b144267022772ae465"],["/tags/Contributor/index.html","f956019cebf1c98ea4d3d5fbb3f98e7a"],["/tags/Daily/index.html","34e334e8f0c7f73186ebb3a49e9faa90"],["/tags/Design/index.html","4ac9f0dce4793fad9f9c391aca80a365"],["/tags/DevelopmentTool/index.html","fc1eda7edcf37f20b60b3a268b059251"],["/tags/Emoji/index.html","b45801610d86ed9d4bbcf8153d6cece3"],["/tags/GFM/index.html","40e90f4e4644db9281dc01a3ccb27e4d"],["/tags/Game/index.html","5450dc41521d5fce9a57b1914452f514"],["/tags/Git/index.html","cef4330e30b118b461ec0f4d8a7f5960"],["/tags/GitHub/index.html","92b5ffe4ea99be5d1c80406f09ce536e"],["/tags/Google/index.html","87a18c3e75ec548f723110fc2cf6d83e"],["/tags/Guitar/index.html","75baae9da60420098a01dba5a22640cf"],["/tags/HardDisk/index.html","6a92d85b02f4750313bcedf6a7539269"],["/tags/Hexo/index.html","c04e63d31ba794e591709c2529b47e26"],["/tags/Hobbies/index.html","1b218ee82057aa02c334cbf3a9465f18"],["/tags/HongKongMovie/index.html","533643dfe21bbd86a66395c988c3faba"],["/tags/Html/index.html","0ba60f436eb4ba722721458eadc2c7ca"],["/tags/Java/index.html","5b9a8eba1e3eef4845684ecd2fd5395c"],["/tags/JavaScript/index.html","6b7b0f6a3553edc79ac36cd8c69e5edf"],["/tags/Linux/index.html","17f7d19f4186919514cf3a2195c72a30"],["/tags/Manjaro/index.html","48e642c471f35fe5be9a4bdcad80868e"],["/tags/Markdown/index.html","dc3e470cc142c72cbc8e2ebca99fb4ef"],["/tags/Math/index.html","410cdca4b6f1eebae59704447a39edae"],["/tags/MathJax/index.html","f43cdfb0647199e3782d15332db14e1e"],["/tags/Memorizing/index.html","2fbce34f860f6d798ad1f74888b43667"],["/tags/Movie/index.html","72b571d5965208d960006640095a11f4"],["/tags/Music/index.html","4148769281187a4b201e30515c9a877b"],["/tags/OperationSystem/index.html","4d304d96caf3584a934ce14309f825b1"],["/tags/Origin/index.html","219791228e875bbe1930f9c673e7b9e3"],["/tags/Photography/index.html","105c51e95866cb59c07316b2bd4b0347"],["/tags/Port/index.html","30fa03e72ed97d286b3746a718d0444f"],["/tags/PseudoCode/index.html","85aa533884a8aa7f9d973022438a18d4"],["/tags/Pycharm/index.html","80ba0a829febb0cc8683a48cd6d06e17"],["/tags/Python/index.html","38182290e0ac5adef95b7af8b572fae9"],["/tags/Research/index.html","a136965c566d51489df8367a6f33a9f4"],["/tags/RxTool/index.html","ff7c210c6ac71b24a28e62f3ddb4ea17"],["/tags/Software/index.html","a09c875f4cafb8ff110d7ebb8714190d"],["/tags/Spider/index.html","e4ab427482c0888179a7885755d1340e"],["/tags/Steam/index.html","15bc79d67a3f5fb75b0cc2d7f41b9fe8"],["/tags/Teleplay/index.html","216784069fe7fe155cd563b755e57a0d"],["/tags/Tool/index.html","df9ced13f1838bda2383c785f0227a65"],["/tags/UI-Design/index.html","0fad538b5d3b3e3a61cdbc68588c06a6"],["/tags/UltraISO/index.html","a6133784ffa36369e87291241eea6a4a"],["/tags/Unity3d/index.html","1bc53d67fb7a73815526761efbec956f"],["/tags/VMware/index.html","c67990bb99e58cef7c76d9e0b386b50a"],["/tags/VisualStudio/index.html","d6a998c83caeed2e349548b970d39807"],["/tags/VisualStudioCode/index.html","fe4fd197be4b220192a17fd56392a50d"],["/tags/Windows/index.html","9efcc2a6417112c6f7389fea93ef0b95"],["/tags/index.html","a7fee51b3aa1655bbe9e8ea459b1f73d"],["/tags/个人日志/index.html","dc49fe1feb70fa0103c69cb7b15668eb"],["/tags/个人诗集/index.html","d019cb345d4b27afa96b54f9ceb91353"],["/tags/亮剑/index.html","7e31f19d60fc7e48b1fabca2044056d1"],["/tags/仙剑奇侠传系列/index.html","7f40988939a5d5e60f6c570c9a9d448d"],["/tags/千与千寻/index.html","4c6cc8c0dc844c642a66e83385724b4f"],["/tags/单元测试/index.html","f40a0bf1e7db63a0fdceaaae6c6a49be"],["/tags/响应式编程/index.html","635672aabf259fa2a3934016a8a3dc3a"],["/tags/宫崎骏/index.html","1f5c12bcd6336a6b5cd3b0b09bc6d67c"],["/tags/小王子/index.html","afc7908c482d81d946f5cdbccbb427a5"],["/tags/开心鬼系列/index.html","71ba78b51f748f6bde6274a95a103340"],["/tags/思想政治/index.html","3d894307fb935f3b3de55c9a24231958"],["/tags/正则表达式/index.html","412c5d787a917b1d377524d9c109704c"],["/tags/线性代数/index.html","7a61e1972d8941966a82a7a5ef82ad63"],["/tags/英语/index.html","ae304b7f69879708c713999ed110401f"],["/tags/软件工程/index.html","9cfc5fc1b348928401a5d0347fd9bf0b"],["/tags/高等数学/index.html","28f4559992153ccaba6de10b4d942d6c"]];
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




