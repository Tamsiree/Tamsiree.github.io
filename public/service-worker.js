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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","74da69ed8b5743e697f3729a412379a1"],["/Anime/小王子电影的共鸣/index.html","47b02d43cf697eac9a846506254735a5"],["/Daily/Memorandum/index.html","bb75c05732223da7a6793f5ed46571fb"],["/Daily/生活小常识/index.html","398a0d64d4f1565b09f9c7d69588fede"],["/Daily/网络用语/index.html","7b3f4f7a8f95b077f6ba86d565e412c3"],["/Design/设计用户界面的注意事项/index.html","9131e64a6ae17bf7cfed6a93b2612110"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","5e8352bc0857e4089c5d03ab99d993bf"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","aade5e4e76c0b8004b939b91a1c034b4"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","cc45e0ab0fe3e36ce9fc466d1a8fe94d"],["/Game/GamePlatform/Steam/Steam共享库的方法/index.html","c834e731313f2db850ec4a2fb6ec33aa"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","c282d8d770f093aec8db0c635e576462"],["/Game/如何独立开发一款游戏/index.html","883d42348e12177c62f60a2d9e834a8e"],["/Google/Chrome/Chrome上网助手/index.html","38d41547bbe6970d1a5491af777a0f95"],["/Google/Chrome/Chrome使用技巧/index.html","082857af9d4970e68de556b721f95504"],["/Google/Chrome/Chrome插件/index.html","5477ab2b57814fb3c6f7a102e116f0af"],["/Google/Chromium/Chromium/index.html","e7ddb2bcbc1d59ad1a4ace359aba5fe0"],["/Google/Google搜索技巧/index.html","6ed1211c023916ee8602c003040a3aa7"],["/HardDisk/硬盘分区结构/index.html","33d7cae12bb5d3d37ee055a42c008107"],["/Hobbies/Guitar/吉他入门/index.html","095445613c82f1aaf922da8dea15d7ed"],["/Hobbies/Photography/摄影入门手册/index.html","72fa03eaf7ee855ea1ee069a304d0d7c"],["/Hobbies/个人日志/芦江曲/index.html","ab8f68b8efe3719daa7ff63bd1b62255"],["/Hobbies/个人诗集/闲情逸致/index.html","b9e614e4621e4ff9ce4995015992a7d5"],["/Interview/2020年字节跳动面试题/index.html","e9a82165dea80b2e0566185d4ec5d5d3"],["/Movie/HongKongMovie/开心鬼系列/index.html","6c5e3b232c30d31d43d131ebad6b58c0"],["/OperationSystem/Linux/Linux分区管理工具/index.html","f5467fba86dccb5283b91751761941d2"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","420a7abb1f744cb397cfec749fbf1585"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","379829b521c6acc91db908daad4b602e"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","bf88a68e05a7790fb62cbdc29034d698"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","b4d92aecef4a79021269c98f94ce4d44"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","8ee2d22807a6c06d25f317babf6b3bca"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","212182ec10731a1d3dd060f458ddc0a0"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","b7b18ec092cd17a8e533a175fa701acc"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","12343308fa7ee735b95525816ba75df4"],["/Research/Math/线性代数/线性代数公式/index.html","90c266f7177e20ea3b2d17303a213292"],["/Research/Math/线性代数/线性代数知识点总结/index.html","f7d99bc0ea9099b13a2dd3bdf823a6c6"],["/Research/Math/高等数学/高等数学知识点/index.html","41447ef4683bd4b5c5da4a87188c7807"],["/Research/Memorizing/费曼技巧/index.html","fba1d9d343f8cb6f1dbc3f18d044ae33"],["/Research/思想政治/考研思想政治理论知识/index.html","1d6cefae035b10367d0ddaac704b257d"],["/Research/英语/考研英语作文/index.html","7a8e0d2be46b240ffddb8a29df149890"],["/Research/英语/考研英语词根/index.html","67c3feaa5d4c8e8726aec0fd1569095c"],["/Research/软件工程/PseudoCode/伪代码/index.html","9a1158fa5d2d693a5974a0bdad4c7d09"],["/Research/软件工程/中南大学软件工程考研题型/index.html","49ee7e2cddb4177a3817170fe3d02771"],["/Research/软件工程/软件工程基础知识/index.html","d88028d69e7cefc25eb04bd7a9cd8fe8"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","846988522512500442cbba2aa976a3ac"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","0c2e5b7d4bc0579ec6429042ebc1e8a2"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","8d3d39f3c64009710cefe732f67ab399"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","e94414fcee54d864eda406351fa5c3c0"],["/TechnicalResearch/CDN/CDN/index.html","ada0916016581076b25b03e003494642"],["/TechnicalResearch/Git/Git/index.html","764127cdf9378cbea4f29882a0094a02"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","a423a2e6aeecc00296204f8e7dbcec2d"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","5f69dc910151223e650146ca16d41a40"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","1ad3226d97c25e3b24094a77f62f698f"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","4b9618464ab9e4a1c7bc81f999e8e0b6"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","2792ad6e64d4fb8b7ff19f61a50b34f5"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","b112f49bba8bf50814b85d5423112039"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","2480f513cb58ab20a2b1b414f4447340"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","fac2069d46bff4c2b7550e8c0034aa5c"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","184c6907c38a17a9762f5e23f51ab960"],["/TechnicalResearch/Java/Java基础快速入门/index.html","cb4ede1126cfa3af3242dcf3f699da74"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","b84f6f6cf37d17d47b45ba121fc6c1e1"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","a88678ec932b97c73825c82fd702ceba"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","edf00b150e7920304fd5b890a0167a93"],["/TechnicalResearch/Port/服务器常用端口/index.html","18ca436541c3e5a02135f123b0517dd9"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","17b7271a570e455a6e75f0f872339533"],["/TechnicalResearch/Python/PythonExercise/index.html","76800ddcf647ab1f8be61f5d9a7317d4"],["/TechnicalResearch/Python/Python问题归纳/index.html","47a0e654b7d30e391d3274a156b9b259"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","5f3891f9142c00e5357b3cfe99fa0859"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","53dc1da5b717f6f4b8d3f6af1fd6066b"],["/TechnicalResearch/正则表达式/正则表达式/index.html","a75a171bcbaab0006447ec4908e5dbfc"],["/Teleplay/亮剑/晋西北铁三角/index.html","481632a83d1c209abdec3760db4760df"],["/Teleplay/仙剑奇侠传系列/index.html","504e74c6e7ce6055149d35b9590bcb60"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","33a47bcc54bce93388b5c1fbe5ff197a"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","e26220f12d4457a2399f856643c7417a"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","f71efdc46fa11b610f14d71f34d9d7d4"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","6f2826338aa9ea58cc11b1caa24b7733"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","6474c900874f2d374a76001a749ab030"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","92e0cda36644e738a63e0c9b624a7c2a"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","fba6e32e6245ea791555f78617106337"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","8f08a5a91f68c59d9fbe57236eaa4d0b"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","7366bebe0fee085ee3509de505d0bef1"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","2f3c80baf22af371bd66e153bff6c922"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","c17ba91fa022376cc21c3d87d4be0a70"],["/Tool/Music/网易云音乐/index.html","28679a51dfe62bca64ce0ee1213f6584"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","4d8c8e3fbbfbeac1af9c72845e2e224d"],["/Tool/Windows/Software/VMware/VMware/index.html","0904dc7842433ca519bb7cee459a560b"],["/Tool/百宝袋/index.html","3e03816521b7d0f61ecca35224c188a2"],["/Windows/Software/Office2019/Office2019激活/index.html","8104b4a84c78d297d3ec5063c80514f4"],["/about/index.html","05fdcdbe4c2a64ef894e3088bcf85fd9"],["/archives/2013/10/index.html","f13c9d657a20c4b24e378f1f8a394f42"],["/archives/2013/index.html","0d37361af5a73ebd9739e58fb615fa87"],["/archives/2016/09/index.html","8c7406220594a457d4d8e373f5490860"],["/archives/2016/10/index.html","e6621e46681295b7a1025900a5bcb25d"],["/archives/2016/11/index.html","472841de272050f3782139bd07597d5b"],["/archives/2016/12/index.html","40f16810ca2496223c86b5144a7a8178"],["/archives/2016/index.html","f3d7c00ad5e862352f0fadae22a976b2"],["/archives/2017/03/index.html","6592a0655890784e7f3cfb95cd4aa666"],["/archives/2017/06/index.html","8f50c1ac8c46d4334389a31002770646"],["/archives/2017/07/index.html","d8648c8703d9a41e6d630b2189de62d6"],["/archives/2017/09/index.html","442729044ec03f5708225ee88b424bb4"],["/archives/2017/10/index.html","a89bae58f57847d648d6ad7de9453d11"],["/archives/2017/11/index.html","e9f5fc5f4be9327ec11b8fe02a657ae0"],["/archives/2017/12/index.html","c15f727cf2aa33d856b86e997deae51b"],["/archives/2017/index.html","2e9c437c101075ee2b84de1f21d9acc8"],["/archives/2018/04/index.html","290e68357af3df6a9cc2cdd71589efa1"],["/archives/2018/08/index.html","319b7c7cbd3d9aabb50a7c638160dc99"],["/archives/2018/09/index.html","9be2cfe41815b1b7906186575f6aa87c"],["/archives/2018/10/index.html","b9d7c92e0165f89d3f606c75c9f5d37c"],["/archives/2018/11/index.html","6fe7da7d029cc7885d6f8c967e82a217"],["/archives/2018/12/index.html","e6d875eb5f8f2373e87a08d109ac82df"],["/archives/2018/index.html","b5dede3b9e24ce4f7498d739b815dd2f"],["/archives/2019/01/index.html","f3823f78cf81bd031acf3617ae90d10a"],["/archives/2019/02/index.html","6e64cfbbd27943fbdd5e6f8127cb5118"],["/archives/2019/03/index.html","e0dd45d5853a873f5481535bff7b378a"],["/archives/2019/04/index.html","5cebf71b63f76b8ff3a9562c553d089a"],["/archives/2019/07/index.html","ede9876286425eb819328251937029ef"],["/archives/2019/08/index.html","53a66ce216789d4ef623d4922d8ad77e"],["/archives/2019/09/index.html","756c376929e7e72f1d2acbc0b51276f6"],["/archives/2019/10/index.html","bb041cabf38d29ceb24135a0c841df32"],["/archives/2019/11/index.html","c64454386617a844538fbb891cfae811"],["/archives/2019/12/index.html","b622832846eaef54f193404ef0817578"],["/archives/2019/index.html","562cc95693c195416e730c3eb32c486a"],["/archives/2019/page/2/index.html","a797aca6e360024a55d89de23b2c1552"],["/archives/2019/page/3/index.html","0f6b00c9a8628f22bb35c9ce4b3fcd6b"],["/archives/index.html","4fe7f0b68e820468e5d85c416730d7a3"],["/archives/page/2/index.html","65aeae2fab5600d09baadecbd03d0dfd"],["/archives/page/3/index.html","b2e7338ba22a9137c55dac7a7c4ab2bb"],["/archives/page/4/index.html","3908cee963ff0d0ed04e4be72d45f135"],["/archives/page/5/index.html","911b5ba781ff1f828a996056f68cfcf9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","6aa52f19340588ab1050cca575f3206b"],["/categories/Anime/宫崎骏/index.html","4fde7504f464d73f9dc237525d4f307d"],["/categories/Daily/index.html","b8efd5ba4e169b3bf769436ced7ecf88"],["/categories/Design/index.html","915688f6e2a602d07d2b4bc7e45c12dd"],["/categories/Game/GamePlatform/Origin/index.html","5aeaf01a9c0acd484a07aad81fc971c1"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","9193f69c7e1c611cf3d86d4bc7c6a1fd"],["/categories/Game/GamePlatform/Steam/index.html","423ef1e8a1e0473be980b4ba5ea7b3fc"],["/categories/Game/GamePlatform/index.html","2a1371bf4d2fce8fcd80bb1b0e9760ac"],["/categories/Game/index.html","2efba28838ed00c2bef094b0f0182c37"],["/categories/Google/Chrome/index.html","e685688d159287a169e181fbaa664c9f"],["/categories/Google/Chromium/index.html","9fea9ebac9b13e2b7823cfd0591da740"],["/categories/Google/index.html","890a5cdf744b84289ffda58626b1f4e1"],["/categories/HardDisk/index.html","45132109bdf9ce1b0ef39ab017f738db"],["/categories/Hobbies/Guitar/index.html","a93d02148275a13a84eae1ae3acfa279"],["/categories/Hobbies/Photography/index.html","d9176e3a6ff7a377fc7a9d86b2bc3927"],["/categories/Hobbies/index.html","49a01dd7abeb6b2734e657d5f8cc4bc7"],["/categories/Hobbies/个人日志/index.html","f749c40038de7df58145bc8b748cadc8"],["/categories/Hobbies/个人诗集/index.html","7bea1582e3ff6fe2739deb327aacd3c5"],["/categories/Interview/index.html","95ea92320f5d9182f6254412e4d2137c"],["/categories/Movie/HongKongMovie/index.html","d456ef204927d2ee4783031359d6b25f"],["/categories/Movie/index.html","e7e77813f05327cd3aaa33609e66ce35"],["/categories/OperationSystem/Linux/Manjaro/index.html","c265a6f12d24796f9eeff4b097497e12"],["/categories/OperationSystem/Linux/index.html","278559f51453b7d45cb79d2fb57121fc"],["/categories/OperationSystem/Windows/Software/index.html","8e0d5afcd4f990e7a845c68f4e9863de"],["/categories/OperationSystem/Windows/index.html","a3702bf6fb4b10690ddc12462f127220"],["/categories/OperationSystem/index.html","8986d9219466e06b12e6724a45b111fa"],["/categories/Research/Math/MathJax/index.html","270c5d94f90a5217703cd6a1991409b8"],["/categories/Research/Math/index.html","378761cbeca7cc7e14a7ec28c5d69227"],["/categories/Research/Math/线性代数/index.html","8472929a26024125f32a326effe7c039"],["/categories/Research/Math/高等数学/index.html","4e5eae7be7f98cd9712cdc633d51a1f6"],["/categories/Research/Memorizing/index.html","172d3939d3a4d386dd541e34b3e6d99a"],["/categories/Research/index.html","8ab86dc03b36b17e1a4f7f223c2872ca"],["/categories/Research/思想政治/index.html","5ecaf7a32433b6a2873ef9b1e6ed6776"],["/categories/Research/英语/index.html","ca3f1db5fe62fcf27633e5ce83de061e"],["/categories/Research/软件工程/PseudoCode/index.html","1932f7b2dd8ec816c1056a8e42208893"],["/categories/Research/软件工程/index.html","98b170d7282689fa1d0b95804c04fc7f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","39b27b54d4ca219fd98f8aca5d168bc1"],["/categories/TechnicalResearch/Android/RxTool/index.html","454a2f939c69561fc01671b3878451e8"],["/categories/TechnicalResearch/Android/index.html","0562c508f299f3e7e1010fd1bd788d72"],["/categories/TechnicalResearch/Android/单元测试/index.html","d04e9c20a903764275e50e41b6ab01a6"],["/categories/TechnicalResearch/CDN/index.html","314325e640b069d32516d3cd7a66fbd0"],["/categories/TechnicalResearch/Git/index.html","5e253662e110542e740e55e80f30d29a"],["/categories/TechnicalResearch/GitHub/index.html","031c1992a3660867bc9cb6e2016aebbf"],["/categories/TechnicalResearch/Hexo/index.html","93ddf8121a80b9d809a9c00ebcb2a417"],["/categories/TechnicalResearch/Html/index.html","5ea4f6d28b4c3429540b3fe4cc2f706e"],["/categories/TechnicalResearch/Java/index.html","3bde11f68a773d3805644f862fdb37e4"],["/categories/TechnicalResearch/JavaScript/index.html","6f24650a8db6df40d0df19d125332552"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","a0309bbee8c778364b3958d32595123f"],["/categories/TechnicalResearch/Markdown/GFM/index.html","1246a01696cda2d12f59666fda1e52ad"],["/categories/TechnicalResearch/Markdown/index.html","6439b0b527812e72268de57e2c9cf23d"],["/categories/TechnicalResearch/Port/index.html","498fe77f23113a01f7cef3c1113350e9"],["/categories/TechnicalResearch/Python/index.html","4bd3dfff7897cb5610c2a6e288f12303"],["/categories/TechnicalResearch/Spider/index.html","6c55dcf192ab7f5f6faf87a1ad83c7cb"],["/categories/TechnicalResearch/index.html","1b078a4b6104af2b437bbaea998587c6"],["/categories/TechnicalResearch/响应式编程/index.html","e8f0daf85c20207df2ab2a0ae32059d7"],["/categories/TechnicalResearch/正则表达式/index.html","81c2aa85af6d83ba497764f75e06e3b5"],["/categories/Teleplay/index.html","30ae3cc62454eb7104b38ed3690fff7e"],["/categories/Teleplay/亮剑/index.html","645cb085cb22f6abb19bf112725dee0f"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","a164d1f62d9d23773b1bdee93c007bcf"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","3efe783b44759646500f93f2318b7fdb"],["/categories/Tool/DevelopmentTool/Unity/index.html","f4507c371c32cfa85e7c003860591541"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","5b687fa4d4e0db8eb827986b03a350d2"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","77b507d812f7a9f8c3e7e0d81fc600ff"],["/categories/Tool/DevelopmentTool/index.html","024051a90574b758c50a3d0aa5def713"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","11c147f401af3f5eda9bf33403364524"],["/categories/Tool/Linux/Manjaro/Software/index.html","28324ef61b5b7ff2e451a2a5618f87bc"],["/categories/Tool/Linux/Manjaro/index.html","1f6312f4019f3c58fd31a67b9217effb"],["/categories/Tool/Linux/index.html","a522ff15abfd0471b7f5585d97e1b2b6"],["/categories/Tool/Music/index.html","e2b24e67744fc79a0ae6f531f31b86d6"],["/categories/Tool/Windows/Software/UltraISO/index.html","f9e22a073dc9e0556901b75618f6f20b"],["/categories/Tool/Windows/Software/VMware/index.html","22669355d46b696c62ff91790c43a119"],["/categories/Tool/Windows/Software/index.html","5f6c5e6937d7b3e7358a270132bb03e6"],["/categories/Tool/Windows/index.html","572db86bad9aa186bb81f828d72f4b30"],["/categories/Tool/index.html","c3b6deb5577b49bc9110e2d609737d07"],["/categories/Windows/Software/Office2019/index.html","a480de83ac38179b965a145f53c580a5"],["/categories/Windows/Software/index.html","2e1c1d556a1669b0786e2f82b7be8305"],["/categories/Windows/index.html","1ad1f3dd8fb2f515840e06c96d23478b"],["/categories/index.html","247947e2758fdb54e05ae8ea42949d3b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d028c0d06f07b7c91916f8743563eb75"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","721695f595b65916a08000ea316fbc3e"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","1a085e1c493597edf540684987150dbb"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","081c0cf20f4ffafe7acc82083b6878d8"],["/movie/index.html","a34189a9e5958adbf419cb85a33cabe3"],["/music/index.html","3b2b02124fb45afdc951f6be9f681532"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","6a873d6d7faa4ce987767361e51a7645"],["/page/3/index.html","ae2d60df21d1932ca219bb8b5a9542b8"],["/page/4/index.html","0e2a33fa89a1cb28696a0f614be6c1b5"],["/page/5/index.html","99096b4d1d2bd36af41678333d52feee"],["/page/6/index.html","7350eee6039bc1c45b6a753e3022a2ee"],["/page/7/index.html","676a17f97f438ad2c05ec1a52b6594d7"],["/page/8/index.html","913510076d498196406795d2b5d1b37b"],["/page/9/index.html","4a363bf82d5276924f5735d15e78202c"],["/tags/Android/index.html","010e02e066e2377541ff97a772517b9c"],["/tags/AndroidStudio/index.html","1973427875c609f9536fee3002813a69"],["/tags/Anime/index.html","6fcd0ce8dfe58ad201fa06f3dbac5214"],["/tags/CDN/index.html","ad2ca17685389f077374aa0df3e4e40a"],["/tags/CSGO/index.html","1f91c6ff841a2e983627e9b480fc414d"],["/tags/Chrome/index.html","790ac61b254e8871073503abdda80504"],["/tags/Chromium/index.html","6f20edf8b21df0b328deec1fc32a0c0c"],["/tags/Contributor/index.html","9ae6b2bff46b5758f51f6ab295bcf77c"],["/tags/Daily/index.html","9822c69c099c609220c76032cf825db8"],["/tags/Design/index.html","a46cd6a16e6dc50dc738abcc751d8aeb"],["/tags/DevelopmentTool/index.html","2ed9106834ee4d08091cb8011c364740"],["/tags/Emoji/index.html","29d80d23e47a1ced3560c14b75f38136"],["/tags/GFM/index.html","3c348e411c64edd28396ba0e06ac3a5f"],["/tags/Game/index.html","b8f347f10b3aa6c96c1db6daa614e3c4"],["/tags/Git/index.html","99bf410589bdd03fc570429b0571f3b0"],["/tags/GitHub/index.html","6526a2c59a2ab0baee34fb9b83b062a0"],["/tags/Google/index.html","1bb80c1e33a8a98c24f2f91c49f948ee"],["/tags/Guitar/index.html","21ea4aef697b9952d5807ed9a3b8036e"],["/tags/HardDisk/index.html","c3bb2880b49f14e0624861529ec92732"],["/tags/Hexo/index.html","b824fd2bc73f5c7da278c20d85bced68"],["/tags/Hobbies/index.html","e8cd2065d2d691f346087cf4444b48ea"],["/tags/HongKongMovie/index.html","c4f316f01778d09df5a4612c7cd71572"],["/tags/Html/index.html","678cd6eab64e45a61947bc65223acace"],["/tags/Java/index.html","d7c7ed7b4171df5b503527bb7e7e0a94"],["/tags/JavaScript/index.html","bab217dccda72f40d2c4437870a6933a"],["/tags/Linux/index.html","8b9a41807d2838eccaad7e994781e0d1"],["/tags/Manjaro/index.html","ad794c2965f5d8e71a8b0a3efe280ac2"],["/tags/Markdown/index.html","4401741b232ed6f40ac83fbae3080eea"],["/tags/Math/index.html","4520665ea7942d43dde9286bb90b8a18"],["/tags/MathJax/index.html","f1b1967b0cf93890ddc0d221f84fa5d9"],["/tags/Memorizing/index.html","e95c444fffa55620f57c75bfed6552e1"],["/tags/Movie/index.html","d1daee371c05d019fd86c0645e55325e"],["/tags/Music/index.html","69412f8464bdbdd7a9070aec76277804"],["/tags/OperationSystem/index.html","30e2189439bb1bd7acbe3c565f03c513"],["/tags/Origin/index.html","58f9ff61616e7891b5cd3afa5245925e"],["/tags/Photography/index.html","7bf44cabf329276ebf845051617dd967"],["/tags/Port/index.html","87573ddbd8382c682f90b51123ef6651"],["/tags/PseudoCode/index.html","c28bcccf485a14161e782f38ab44f122"],["/tags/Pycharm/index.html","7eaeecd53c7a36d185c8179cf8c7deda"],["/tags/Python/index.html","4c630b9ccc5d4eb3805d8474b1d3c86f"],["/tags/Research/index.html","354f161625c11a44acd4b8bf689b6179"],["/tags/RxTool/index.html","e950b68fc351625549c05048d6b7f60d"],["/tags/Software/index.html","8a149b474d5a974b23c7624896ad5cdd"],["/tags/Spider/index.html","13f31480b35599dd4dc0b83cd1cad6be"],["/tags/Steam/index.html","d27a4accc158d94817408d74af381cac"],["/tags/Teleplay/index.html","b79f79621874d1066bf1f93a484c5f2f"],["/tags/Thunderbird/index.html","855704a0e878a91427b3f1258e9750f8"],["/tags/Tool/index.html","d0c9dbcd79b87d335c279cccf572ca75"],["/tags/UI-Design/index.html","4e45f74ada094d7cf6f4492cffc05515"],["/tags/UltraISO/index.html","073d7a4480c63efa365d5874ce2ac46a"],["/tags/Unity/index.html","cc62f4f8d382659b23439066207d8c9e"],["/tags/VMware/index.html","f8209716c1d7684e6517122e350460b5"],["/tags/VisualStudio/index.html","04c65eee2381815ab3646634fccb1e64"],["/tags/VisualStudioCode/index.html","793dc21ab48b0bc863f3a6fd034a4886"],["/tags/Windows/index.html","cef854b58c81211f6cd6c9e1ee4403f2"],["/tags/index.html","22cd412ca3591be692bb34cfb68cb1a5"],["/tags/个人日志/index.html","0c0fb4a64d88546b94c14e2aae915b09"],["/tags/个人诗集/index.html","31729c6f03c9f43845a01060ceeaf827"],["/tags/亮剑/index.html","99b388f9798535a9546df70093862f34"],["/tags/仙剑奇侠传系列/index.html","d9b6b2e6a742ff8782c868dffcf4feef"],["/tags/千与千寻/index.html","aac92b2e15d526cad75fdd23692fa9ab"],["/tags/单元测试/index.html","8839e14e6658cb6b458a6f825cc24a20"],["/tags/响应式编程/index.html","98ce6e0e40b90535ea88c27425e64716"],["/tags/宫崎骏/index.html","e29c506a837c1ac39e9256c8d7e951bc"],["/tags/小王子/index.html","074de6e7417e8705c7f278107bfe1a75"],["/tags/开心鬼系列/index.html","bda1c6bf8ccf8d70a0d37d7d5add3429"],["/tags/思想政治/index.html","78d2d4813c3614fd3173d002dca0b0e8"],["/tags/正则表达式/index.html","e421f04bbcb7ed8417f4bf07a8b019fc"],["/tags/线性代数/index.html","63641411b22f85e8e835eedf9882c818"],["/tags/英语/index.html","c5eac1eb8c5212490f4bd41194099270"],["/tags/软件工程/index.html","cc418ba87fe4a6afe6677c1f7b96a0e8"],["/tags/高等数学/index.html","4e8bea7d4869ff3ade22ef21018bc448"]];
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




