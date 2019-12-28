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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","019cfed9093bfaf9348ade881447683d"],["/Anime/小王子电影的共鸣/index.html","8497ab650c4cdc7c3c1d39fcba96e9c5"],["/Daily/Memorandum/index.html","cb5dabaab90d75cd3a850e018a33c749"],["/Daily/生活小常识/index.html","668071e300a91d36e78452684b13efa9"],["/Daily/网络用语/index.html","39802d36df23e3c6b82b123b1a23d67f"],["/Design/设计用户界面的注意事项/index.html","dab44865a80825ff784485f71e079027"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","06a8ca90d45231981293cb0b5712596b"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","66da9c575ca92c92803c059ed934533f"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","b67e8cea52d3a45eecea54106276859b"],["/Game/GamePlatform/Steam/Steam库共享/index.html","245f4d21b24909eccdc5cc08d047e45b"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","e7da6782edf7fbb255193460c3406f48"],["/Game/如何独立开发一款游戏/index.html","4d2cd192d73cdfb5667384350b180c2f"],["/Google/Chrome/Chrome上网助手/index.html","4704cabc1caa9d6ac049eebc7ee344a9"],["/Google/Chrome/Chrome使用技巧/index.html","da8cc685f5071f698463de9f81abb645"],["/Google/Chrome/Chrome插件/index.html","dd0857f9e8f01670a87b4f3965cec948"],["/Google/Chrome/Chromium/Chromium/index.html","c53ea44dcf0796a48d0cffac221368eb"],["/Google/Google搜索技巧/index.html","bc37b2c15d1930a03c1004791ab61145"],["/HardDisk/硬盘分区结构/index.html","2b4b5aa4bbb78a0a6023278ccd85f13a"],["/Hobbies/Guitar/吉他入门/index.html","20f95cd0cc9fff6df6c394801c1befdd"],["/Hobbies/Photography/摄影入门手册/index.html","125795bc95b67101c71452624e31ee73"],["/Hobbies/个人日志/芦江曲/index.html","3b34f22b55ddb9815917756ad180b26a"],["/Hobbies/个人诗集/闲情逸致/index.html","54b4351f68019a315412172db37d92f8"],["/Interview/2020年字节跳动面试题/index.html","176317b0daa19304223c992c71966e86"],["/Movie/HongKongMovie/开心鬼系列/index.html","6b7b47ef8ae981874f711bcaf14b7735"],["/OperationSystem/Linux/Linux分区管理工具/index.html","b164f9a892b217c2f12ca3c593f35401"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","32cb4f4e543da7539b09d9e6e2bd4512"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","52c57347f9316b611defdccfca44233c"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","09f64c4758a2ad3ce900b88a629d0c69"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","448ec3de76ee9f0aa70f72ef87b5c15d"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","1801db9a377974bd6991a9a428168188"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","4ec8eff5b17d642663aaaccf66f87d96"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","47a42710fd159fa1b83f10d694a1db16"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","9ec15d16c0dd00c0967598cc656e41b2"],["/Research/Math/线性代数/线性代数公式/index.html","d4610c972429867c832a039b0a75e5df"],["/Research/Math/线性代数/线性代数知识点总结/index.html","9fc248f12671b787000be433148a248a"],["/Research/Math/高等数学/高等数学知识点/index.html","c7353208d49e85dd19eda07b121d414b"],["/Research/Memorizing/费曼技巧/index.html","0e027452a8b2e66a1115a09f36063101"],["/Research/思想政治/考研思想政治理论知识/index.html","88b5755e728deb38b1f675b0145aba9d"],["/Research/英语/考研英语作文/index.html","2d66c009ad536623cc3f4b5a9daf6ee4"],["/Research/英语/考研英语词根/index.html","71e8528917b0d9d9855e8abcf9a3da2c"],["/Research/软件工程/PseudoCode/伪代码/index.html","71c18f8210242744ed03aa778d66fda3"],["/Research/软件工程/中南大学软件工程考研题型/index.html","9b58372d10ca2e68ca02970e57db7738"],["/Research/软件工程/软件工程基础知识/index.html","6921350dd4196f97e6f86ff25393f537"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","cc3648a40aa0b9ecad12ec091be8903c"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","6ca6d8f89be31d7da8a249eb04990ebc"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","2b7ecba4c11bb91e65441e905a7e4628"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","552e0ed941eb5c9b6edb9b35476fde67"],["/TechnicalResearch/Base64加密原理/index.html","ba5e58cdf22f68b33cda9557fc4d6581"],["/TechnicalResearch/CDN/index.html","721c3a27dcbcb29c10981dd3a1b1bbb1"],["/TechnicalResearch/Git/Git/index.html","454fcb691dd449447b15fa8165cda4c2"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","efddebea2caebfdb6dfe29bb9ec00b65"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","291492542d75dca054dbf5c850652c7f"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","77af34b190db65432a7559d65c275fc8"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","bf1b3904a1935ebbe34e01c6abc7b663"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","15a2320b8f2f5c8b916858eb72e39b04"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","27c8fa9dc5fc28fdc2a3b8e2104e56dd"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","0345e2dc014b0078dd9f33ae7d0fa0b7"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","fc4e5f43fc03005e9197e8bd828d10bf"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","7654c05f62cf3fea67a6e39371afcb9d"],["/TechnicalResearch/Java/Java基础快速入门/index.html","fe08e7362e034485278462d0da2c4b88"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","726ac2355c66219e0601e21e21da5b66"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","c2585ff2d0c92a3765170dcfde0776c0"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","70f786c88481d391ea6837e17b815afc"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","038b04187b37a22fd67417ae06a2a7d5"],["/TechnicalResearch/Python/PythonExercise/index.html","04d6a3785158d587cbabcf11eb95d9ee"],["/TechnicalResearch/Python/Python问题归纳/index.html","5ebf7baab0f7e7c2ead53c737b2b35ba"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","6acb998d59a5e6499038fa4370a405a8"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","ec1a442c490652de7dca13753595b1bc"],["/TechnicalResearch/服务器常用端口/index.html","a7d2e5c13ae8bffd31265f85564d56b5"],["/TechnicalResearch/正则表达式/index.html","1485c7cf77b30a032609041f440f84be"],["/Teleplay/亮剑/晋西北铁三角/index.html","78023a1ec41dd5edbd0958a6c6286634"],["/Teleplay/仙剑奇侠传系列/index.html","bdae5938b1cb6de6edd7c729c60118de"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","6e06ade6026384256f4e6124945bb2b5"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","dca07fb112def7accefc9ba5226faf99"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","675ae66f5c7e8a856cb8f27b97bbdc14"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","e6718b2e6a93044db09ead5b47953841"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","bef89a7a233516c9c00634935fd71e41"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","f61b84fdaaf5bca5fa359fed81fb4997"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","d9cb2a2dc2e2ccf6d1cd6da8531e3fe6"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","0689333db5b910a7a1a50102bc1838a7"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","1a89cc5120e51aa771f977feb394e554"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","889f9398225e319a1a5e29724876a836"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","7203422ff48c95647dca23ae19807704"],["/Tool/Music/网易云音乐/index.html","9cb88c1696876d3db5ec6716b4f7c522"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","5aaacd785aa32edf015e3e947e18e888"],["/Tool/Windows/Software/VMware/VMware/index.html","0ad6dc19bf6dea942942f120fe87d897"],["/Tool/百宝袋/index.html","a9ed61d48b315e18fb527f6a279c7af1"],["/Windows/Software/Office2019/Office2019激活/index.html","4d68816db506b7f9f381b99e73994c9c"],["/about/index.html","a9e5b31c7132b4a26666a27d9444e2c8"],["/archives/2013/10/index.html","ddd7800e2d8141d021c9ef2ef08310de"],["/archives/2013/index.html","c8a73174c978b2ba8ca57233c065635d"],["/archives/2016/09/index.html","6a1243275116917458c0e6bb24c377e9"],["/archives/2016/10/index.html","268c57efdf4665dd561ac2772b017a5b"],["/archives/2016/11/index.html","87c9b60554fa32a5ac7c7a97cb817dfa"],["/archives/2016/12/index.html","cfd175d57e15891e30df2de149e1e80b"],["/archives/2016/index.html","c96d3cf5248c5c634b1d01826c63e991"],["/archives/2017/03/index.html","de8d48741eaf1a97c4f4590456e3f358"],["/archives/2017/06/index.html","d68ef62a62ea3051fb84370b12b82d57"],["/archives/2017/07/index.html","3550828928147c077f5a81bb95794da0"],["/archives/2017/09/index.html","e78a8d36f15e27b2698f98ecfc76224a"],["/archives/2017/10/index.html","c63283b13cf1f63a2f3e6198ef434b2f"],["/archives/2017/11/index.html","91354b76b0cdd0b6579dff7a21c976b4"],["/archives/2017/12/index.html","ab1e7fcc521dc8a68dc7715265881f2c"],["/archives/2017/index.html","6cac1fdec59f3e31c1eebdf29c9a2f5e"],["/archives/2018/04/index.html","0c166e38315b3a8a39d84ab70595b326"],["/archives/2018/08/index.html","b3d431b5a3ff258899226049b82d998a"],["/archives/2018/09/index.html","bf9cd95dd1e16479563783e8ad619cca"],["/archives/2018/10/index.html","6931afbd3c368ac26be5a4a33a3a7fe4"],["/archives/2018/11/index.html","9b61628a77e5ca0302fe5be59577ac27"],["/archives/2018/12/index.html","35a8136e3448866e914c103f4d8300dc"],["/archives/2018/index.html","9513c47b989f9752efb0938837c222ca"],["/archives/2019/01/index.html","31bed56f5494ccf2abe0b0c7c9836859"],["/archives/2019/02/index.html","0b3bd244f0ceff150e9bfa04a19fe8cc"],["/archives/2019/03/index.html","02f790af7d0f3c1e1373c07cbd6cb53f"],["/archives/2019/04/index.html","f52b03f8644da9e637d8fb57cdc06f55"],["/archives/2019/07/index.html","660df331cfc09067d37010c74dc75760"],["/archives/2019/08/index.html","71b389f0a83661ae16072d4272e7e088"],["/archives/2019/09/index.html","ee283092cdabd97cdd0c5101716b2690"],["/archives/2019/10/index.html","ec9405b552e9180b034f0186ba3c8797"],["/archives/2019/11/index.html","ef51460495998cfccf1a81a280c5bcdc"],["/archives/2019/12/index.html","bed4c4f2455ecfcea7fb4438918434f0"],["/archives/2019/index.html","0d85947c4638d742b82fc343b1b9be72"],["/archives/2019/page/2/index.html","cf08715b8ede960f99ff4c808bceed9a"],["/archives/2019/page/3/index.html","d1d546b2c9f4d7c079df87f06f6dc823"],["/archives/index.html","dad79ad89751da7ddfbeabfc079e321e"],["/archives/page/2/index.html","a72e2cedbf4e4398e6549f1c556c17b5"],["/archives/page/3/index.html","2e278152e36f80230d517160b8228586"],["/archives/page/4/index.html","d6d1bc7c7e7411167a21a3079dc5ff27"],["/archives/page/5/index.html","5779e77604c887b740add291dd53a8d5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","45d4fbed51db0af11874a6ce51459c6a"],["/categories/Anime/宫崎骏/index.html","396457eb4eba670f83b43c55a3314073"],["/categories/Daily/index.html","8427391934ff3f37444946ac17ab1748"],["/categories/Design/index.html","59cb20e2458534ebd88031fa3e187d4b"],["/categories/Game/GamePlatform/Origin/index.html","556969335c15b831823292c3e28a5708"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","4cbdafdc0766a510cf143c6c4a91d842"],["/categories/Game/GamePlatform/Steam/index.html","6826c7d2a7aff99ab869e88d93f00cbb"],["/categories/Game/GamePlatform/index.html","c600ac155394f1b0c5106e86696d7cc5"],["/categories/Game/index.html","24f41ea02118008f05d34c90a7435868"],["/categories/Google/Chrome/Chromium/index.html","78cbb606e612ba55aaa3894d3c65e24c"],["/categories/Google/Chrome/index.html","ee8a5814f0fd7f2dcc9e670f53039044"],["/categories/Google/index.html","938f74234801194bfa305ee24798f04d"],["/categories/HardDisk/index.html","b1eb7be36f0ad2537d5ceef0d857ad0f"],["/categories/Hobbies/Guitar/index.html","b2ed3115efa5022d284223ad98b3af51"],["/categories/Hobbies/Photography/index.html","b6fd78391f1fa5bcbc8d813f2c451f35"],["/categories/Hobbies/index.html","e8526f6543265e206d772288b6846727"],["/categories/Hobbies/个人日志/index.html","2348930af7d198c69b3885b884b2e39d"],["/categories/Hobbies/个人诗集/index.html","34ef0a0bc0f19b47cdc2349b42dbc6af"],["/categories/Interview/index.html","3cd71a9062274c7b17d43670c1e73cfe"],["/categories/Movie/HongKongMovie/index.html","a862ca3d5aa4686ed00e299ef2cc94ea"],["/categories/Movie/index.html","0debd81d89f7553abb79405460719052"],["/categories/OperationSystem/Linux/Manjaro/index.html","c506f788b867e79bb405bc8741664201"],["/categories/OperationSystem/Linux/index.html","99b86193d00e637d79c959fdccf27c8a"],["/categories/OperationSystem/Windows/Software/index.html","1f4ae7fc61f8b1228c065ea26569d562"],["/categories/OperationSystem/Windows/index.html","cfe3b6cee815d253f0f649f27fd612fd"],["/categories/OperationSystem/index.html","e0eeee7de18995609e7ee1993e4d9225"],["/categories/Research/Math/MathJax/index.html","059d0035253d60f03d980779e3f7998d"],["/categories/Research/Math/index.html","f0e5e001e6cde0149472352dce8e94c1"],["/categories/Research/Math/线性代数/index.html","a15411c4e10a07edfd863f4a87324586"],["/categories/Research/Math/高等数学/index.html","ceeb1442db93b666cce88ccfee6ceba7"],["/categories/Research/Memorizing/index.html","6bf455d6e9d08798f467dbef215e9304"],["/categories/Research/index.html","37ef922b8bd291240a78915f14dfeb5f"],["/categories/Research/思想政治/index.html","348fa1f8414562a74349a8fd2b9b3e4b"],["/categories/Research/英语/index.html","ee1b12c028cf3f31bdf406364939f43e"],["/categories/Research/软件工程/PseudoCode/index.html","bc6d61fa69fc46446b9866af9b7d44b8"],["/categories/Research/软件工程/index.html","c125128550fb4481f69f717d532db6ef"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","54d65677afc516b8e878b2f7d1eee978"],["/categories/TechnicalResearch/Android/RxTool/index.html","b4cb068c44be3791931cd4abd8a3dfc2"],["/categories/TechnicalResearch/Android/index.html","f1cf754da0da5bb1bd486fc8471ff7ef"],["/categories/TechnicalResearch/Android/单元测试/index.html","91f9200756f1a8d6d44b0c819d68fc1b"],["/categories/TechnicalResearch/Git/index.html","07698fb73fa8b63ad420997951eaab90"],["/categories/TechnicalResearch/GitHub/index.html","bc4e4f30e608733865522523ec073bc4"],["/categories/TechnicalResearch/Hexo/index.html","71bc9aefac0f9aed4f8f754e4dd427a4"],["/categories/TechnicalResearch/Html/index.html","04cdc54a4e0206c2306c8deb99057c88"],["/categories/TechnicalResearch/Java/index.html","18c2d2df28e074b77e2686514b987ba1"],["/categories/TechnicalResearch/JavaScript/index.html","982b6c5e5e18c594233d780719166304"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","94c83b279eb168d279ab370868237e50"],["/categories/TechnicalResearch/Markdown/GFM/index.html","0aff587480db11e170313529b15ec14a"],["/categories/TechnicalResearch/Markdown/index.html","c97308159aa483a4775107c34f14d4a8"],["/categories/TechnicalResearch/Python/index.html","4c4970181c22cceb31f063f738a8a408"],["/categories/TechnicalResearch/Spider/index.html","1823902a2635b83483e7ad6956cb0107"],["/categories/TechnicalResearch/index.html","26edd21b490fa045cfdad6c783c09c33"],["/categories/TechnicalResearch/响应式编程/index.html","aa591a4c15abd3294e35524ba39b3e5d"],["/categories/Teleplay/index.html","d9804e80bd7ff00157d8383ba18b5cfc"],["/categories/Teleplay/亮剑/index.html","c3c6c88627f5519fa833bae879db06f8"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","5dbf5966e95276dec87ed6d5ea89e44d"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","392d1f652193df41a75413579590af62"],["/categories/Tool/DevelopmentTool/Unity/index.html","e81084374c206443a2316627a445d250"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","65e94b2ed0dd263fe839c43b3ce30b71"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","7e22270825e247657c7376525fa8f29b"],["/categories/Tool/DevelopmentTool/index.html","cc53f0fb0eee988bc0653b4035eed773"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","461f50756bed24991c795a1183759c04"],["/categories/Tool/Linux/Manjaro/Software/index.html","9dbabc37280bf7dbf7d2448a673a8cc8"],["/categories/Tool/Linux/Manjaro/index.html","351ec71c164f1f6ba7a3e6fb653474b5"],["/categories/Tool/Linux/index.html","6959b8ffffcf52692880d03f85993f7f"],["/categories/Tool/Music/index.html","38bfcd361df48e25593dc4354bb896ef"],["/categories/Tool/Windows/Software/UltraISO/index.html","fe3b0cc9b1c45d846ad27deeef5b1d64"],["/categories/Tool/Windows/Software/VMware/index.html","da587862df0df00931d7d36c3b36ea05"],["/categories/Tool/Windows/Software/index.html","8e3a06a21cbe7d6148ed7f009b6d4dc8"],["/categories/Tool/Windows/index.html","bb6082cad6c9123b38e1881e3f9c4f09"],["/categories/Tool/index.html","ec9e1f98ae8c83365d15da7009086c83"],["/categories/Windows/Software/Office2019/index.html","600980d44bbae8e26e0ab469915510ab"],["/categories/Windows/Software/index.html","a170cb7b25f1dd7ff239b261a79fdb1e"],["/categories/Windows/index.html","e1ab2eaea7e08bc70e0a1fbcc037f978"],["/categories/index.html","0d92765fb1312df3710edc5a5c39b552"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","10b34a241e10be6c810acd885f155265"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","09b33f8d355275393033d6c86300b5d9"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","bf47d0265599adfb005c38989e95fada"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","875ba920c3dd580789d9be1ab2872c96"],["/movie/index.html","f9c96dc4f2bbefa445ce3554b704f1df"],["/music/index.html","769bee1792bab205aaf342fae859712b"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","f0294e94aaa6c411e6d5335edbac15a2"],["/page/3/index.html","e7491e55082da512b2a90d4e0e57cb4d"],["/page/4/index.html","aaf05da0814f15fcf4512f4384623de1"],["/page/5/index.html","522a779bb7eb23052e1dc2d31438b09f"],["/page/6/index.html","996d9733c702fb0001def421ea661311"],["/page/7/index.html","83afa7715d6a0a209d225f7d077b1f3b"],["/page/8/index.html","b85081784d7ec453a750cd909e8248d1"],["/page/9/index.html","3d49b2bca553e326cdbb5c087074b9c0"],["/tags/Android/index.html","80a60252acc960b28cd05c5eda4c507d"],["/tags/AndroidStudio/index.html","85d9b8a75d6e49e30337ec21663b9a95"],["/tags/Anime/index.html","a7bb0e962c0d93fc004e6f64a2f87088"],["/tags/Base64/index.html","a20aa75e3c02f94952c945da011415bb"],["/tags/CDN/index.html","9f3c261b0c665edc09e43cf1389ad9a5"],["/tags/CSGO/index.html","49f69a602a5e804bc91f2c428a7c0cf1"],["/tags/Chrome/index.html","1429701e83dc5557e3164337f7ba613e"],["/tags/Chromium/index.html","f2961f2a7e39d6c6c0c8e34ca9179505"],["/tags/Contributor/index.html","eac4f990829fc071c358a3e0f1845c28"],["/tags/Daily/index.html","f8631deb3b3d5ac3fe65d6bc3d30663e"],["/tags/Design/index.html","baa02eac37ff626503b71dfb5b333e1e"],["/tags/DevelopmentTool/index.html","9033451a310de5c649fd16a024a356d2"],["/tags/Emoji/index.html","87be9dc110c4d1ddae1d8c147ff44802"],["/tags/GFM/index.html","125f63977b274e9c4f65d50416adad7a"],["/tags/Game/index.html","727f869c6df756e7535b73491035361d"],["/tags/Git/index.html","30dfe2c096a84e193cd3b2ca6b5a4f08"],["/tags/GitHub/index.html","fee2d5ed7690b950217164e22ecde28f"],["/tags/Google/index.html","d44466cc20ce9095be5ab19085f05801"],["/tags/Guitar/index.html","91181621f34ff18389291c185e013a11"],["/tags/HardDisk/index.html","970a4f4e937bdc40dc4205f701685b87"],["/tags/Hexo/index.html","ac0c8834ea7e3e3368e1151ebde700dc"],["/tags/Hobbies/index.html","bb88c7a19189faea8eea79d79980f4a9"],["/tags/HongKongMovie/index.html","6b9d319ed858c83ecc2d9b0b77f97d86"],["/tags/Html/index.html","0a2f779c72b67c2c61f41684562a8022"],["/tags/Java/index.html","1a8f2f12067b0bed7028e1dfd1668a96"],["/tags/JavaScript/index.html","85c9d2ea1f13ec93d9a5c4ae84984786"],["/tags/Linux/index.html","4bd88a16929ac672de1280f7f8e94108"],["/tags/Manjaro/index.html","dfd426f53c400d2969018b481d3c5223"],["/tags/Markdown/index.html","2b32249170d6407b9a4db351c153747b"],["/tags/Math/index.html","bda670ab554dbd179ca1cb57e2ed3ccf"],["/tags/MathJax/index.html","b89fe7a0993e00d1bbf3c0de3e976583"],["/tags/Memorizing/index.html","3ad0fc58ee639ff3f3b434b2314c6ff2"],["/tags/Movie/index.html","8e40ad072de08035fa4fcc1df715d588"],["/tags/Music/index.html","83ef8048094ce4697208baf758c8e548"],["/tags/OperationSystem/index.html","3278d08fee463e3221908bb395ed704d"],["/tags/Origin/index.html","b7bb693443f3577382853e4805c02ce5"],["/tags/Photography/index.html","fcf866314b422d445665e85e48fb2980"],["/tags/Port/index.html","411c0e4f4cb81d0d2463358251d4d190"],["/tags/PseudoCode/index.html","0a15cc1a7e8b8242d2093330ab1381d4"],["/tags/Pycharm/index.html","1d0b087453f68ce755896c112df1b912"],["/tags/Python/index.html","2d7921f0984053c1e56d92558d966e00"],["/tags/Research/index.html","066013e49cc3a8af9289ce1342f8169f"],["/tags/RxTool/index.html","191ff3da22b7dd9a294d04f8b97ab185"],["/tags/Software/index.html","845c4641eab9a65ac39b44236c6d513a"],["/tags/Spider/index.html","c5bfb73037e910a0c2c733bd20bf1af4"],["/tags/Steam/index.html","0ebb637c4c8ad08094df4d61eb7a74de"],["/tags/Teleplay/index.html","916c2c1a60656df308ecd2c3b291a0d5"],["/tags/Thunderbird/index.html","691ec4586f446ede685961870cd597b4"],["/tags/Tool/index.html","1d73b01b5fc0a4a902ebfe3ae6a0e726"],["/tags/UI-Design/index.html","d15d5a9d09598a3be086cf366bc97472"],["/tags/UltraISO/index.html","15f2dc201b5db313cf298faeaf96095f"],["/tags/Unity/index.html","5ccb9f79bfb6acc6eb7b07831232f30b"],["/tags/VMware/index.html","03c4870caa14833737757fb0cb7e9bcc"],["/tags/VisualStudio/index.html","8af713a832608e10460f5eb0b683d8d2"],["/tags/VisualStudioCode/index.html","86deb5af7157d1db0798dae62c8511d8"],["/tags/Windows/index.html","b811a02bf13d2e5f44cb8706ef6258a3"],["/tags/index.html","a3dcb8d8a7fbbe807581e80374e47a03"],["/tags/个人日志/index.html","b967bd49be211fc5b1dccd0551021820"],["/tags/个人诗集/index.html","c348f6e734aead2df6ee2d67f78e070b"],["/tags/亮剑/index.html","350e7449c004dd4dbc271c8496f9b846"],["/tags/仙剑奇侠传系列/index.html","42400dcf43f1ad5ec663e38f2b18cec9"],["/tags/千与千寻/index.html","6b1047d9509a1fa204170b9a4097f86c"],["/tags/单元测试/index.html","184a6919ea7240e168fe319f172724af"],["/tags/响应式编程/index.html","bc8eb383eeb43a4ee9799eda29916c5c"],["/tags/宫崎骏/index.html","840b76570d17d053ea12932c3203c212"],["/tags/小王子/index.html","ede8692ea0a02bd8142cb507a2a7ce97"],["/tags/开心鬼系列/index.html","5bc594d4d8a2500def12b00aefc910fe"],["/tags/思想政治/index.html","e770fb85736c33e47cb95dce5d1692d2"],["/tags/正则表达式/index.html","879e378eddf1d7bfa55db522c0ce8711"],["/tags/线性代数/index.html","049bdde0c881129bfb65b00515cbf286"],["/tags/英语/index.html","abcec97f20cfffc6807e7ee5e14788b4"],["/tags/软件工程/index.html","31fa88eaee504aad83e61d2bbca97a91"],["/tags/高等数学/index.html","653aa1597dff5165bd69e12234a1370a"],["/随手记/SteamOS/index.html","2f6df87be0516d5bf58d1d9efa9841b1"]];
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




