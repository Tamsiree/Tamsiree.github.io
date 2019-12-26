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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/宫崎骏/千与千寻/index.html","68c4b790f07ad7825515c15c29ada7f5"],["/Anime/小王子电影的共鸣/index.html","30d39f4bed0be2cc5e45dc3b8a7353a0"],["/Daily/Memorandum/index.html","26f37b2e7b16d5b1b7a3659d1834fbc9"],["/Daily/生活小常识/index.html","4bcf7ed02fe04405e2a668a00aa5a828"],["/Daily/网络用语/index.html","003219662502c79153e3eec91357b2ae"],["/Design/设计用户界面的注意事项/index.html","5003170a6a955e01ba24cc758e166495"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","766d44acfdf1f0815dfff52c561b156b"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","65d375ebf3ea6ce3c12945aa7c98475e"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","cba7dd85a01032b4499bfadfbcad5d28"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","79bdba1b46e681fb9dbb2047e1744bb1"],["/Game/如何独立开发一款游戏/index.html","017ecdc8ec6ed279e5c72415e6769593"],["/Google/Chrome/Chrome上网助手/index.html","78735d912fbe9eba15d87a303633b22b"],["/Google/Chrome/Chrome使用技巧/index.html","89ab208c166f9b3911fce2141fed45eb"],["/Google/Chrome/Chrome插件/index.html","e7b2392a6cd14dfc6e0f7f0d63277330"],["/Google/Chromium/Chromium/index.html","fce2f8266b0298bd8db58f94ea70a0f0"],["/Google/Google搜索技巧/index.html","f9665541c2869c25b58a1a817c2f3f60"],["/HardDisk/硬盘分区结构/index.html","35c950995d8c08c222ab6e241d6ee888"],["/Hobbies/Guitar/吉他入门/index.html","0bb19f624746f0ed22c484dc58fefee6"],["/Hobbies/Photography/摄影入门手册/index.html","f9c9a4ce35245e906c3de96a72ee55f3"],["/Hobbies/个人日志/芦江曲/index.html","ac7156e2fcbcd23b5f0027c2d43714e1"],["/Hobbies/个人诗集/闲情逸致/index.html","fab4db9e6868fa2bc2e3638ce95e03ae"],["/Interview/2020年字节跳动面试题/index.html","ffcce439dfc64a8fb8680f89885524bc"],["/Movie/HongKongMovie/开心鬼系列/index.html","3e8ffc6fd01374e4e047840532d45eea"],["/OperationSystem/Linux/Linux分区管理工具/index.html","7f5336416160239f14320b8c38f80a1e"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","b76d0c4d97368fc690a6ca9e4720e86a"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","16e139911cd3836018d0483305fbece4"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","335454a677ee577e9a4cc060b1675886"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","7b926283cbb48ea42456f331131a7a7b"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","4b890b2f61492bfb6d7866a30f12295b"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","2ad910582b1be79e0ac77df0925673fb"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","26e87c7fcae60ea4b23acd13c525daaa"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","94edb9ebe1dddffaece3f73f870618e5"],["/Research/Math/线性代数/线性代数公式/index.html","e8b5e0b92fc05ebc6d3b82e7543e7c1e"],["/Research/Math/线性代数/线性代数知识点总结/index.html","c3386e76d8fb0e55dc39e68f9276c9fa"],["/Research/Math/高等数学/高等数学知识点/index.html","ccae48b61f07fbf020a9a1b649a2e91b"],["/Research/Memorizing/费曼技巧/index.html","749c477d2a06c95ac1f8381fb5245998"],["/Research/思想政治/考研思想政治理论知识/index.html","012c15ff00fb0709905d65e60b901d07"],["/Research/英语/考研英语作文/index.html","41123458fa50ca891afb406d9ebb48a6"],["/Research/英语/考研英语词根/index.html","e203dcc4320ead02393570de102659c1"],["/Research/软件工程/PseudoCode/伪代码/index.html","416f997f72ab41e21d962252bb906a55"],["/Research/软件工程/中南大学软件工程考研题型/index.html","f84b918b74759fd25df4a9efdc700584"],["/Research/软件工程/软件工程基础知识/index.html","2bb1f203a1bb0bca979b74794f07d59a"],["/RxTool/Contributor/index.html","815b62b073af5adee15da2ff17f80e3e"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","8435efca321b07ae3ad4f992410b00db"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","5f09a3539aad91b779de49a345c11fb7"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","c1b4e8e123cb464c49728e2d63c72dd2"],["/TechnicalResearch/CDN/CDN/index.html","e504e1f81bd398ce3b053407aa84ed9d"],["/TechnicalResearch/Git/Git/index.html","396c6c11e0c31d62b37b1c3394d9aaad"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","1b82347f2cee5004866ea32672fe42dc"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","dcf391d91210ab497d0c02053f030f7c"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","aa727ac433b2d90ee5b12511765bb1dd"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","12c59e4d20928fe5b40939c3a160285c"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","83d891a7bd62fcfb42b5600be23f694a"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","f668890e3053b112a937a3a660bdb092"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","f17a0956fc872a447ec2089e30fe7ac8"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","67257886d2777ebae3000c113721f435"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","8d4833f229727a3488096d9aaa07f3d4"],["/TechnicalResearch/Java/Java基础快速入门/index.html","aa99ce48dd81c16f034900999d39bcc4"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","b145688d6f07f198a492a97c2c92731b"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","bea0dcfefefe12ee4657285e753bcfa5"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","897e8a38f782a85094ffb6ab3df36881"],["/TechnicalResearch/Port/服务器常用端口/index.html","ad1383cceca4fe0effb57c74013351e4"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","03fae7c7753ffd5cd91257606c43c758"],["/TechnicalResearch/Python/PythonExercise/index.html","86946f1adcb51f1c27edc2d2396b57d0"],["/TechnicalResearch/Python/Python问题归纳/index.html","6c1044c6e45a92df22b4b0b4d7ba46f1"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","2912ceddf687180266c871a246b2ad9f"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","35e514465e900ce103097cf6350266ee"],["/TechnicalResearch/正则表达式/正则表达式/index.html","7c00718ebc82c84daf6361daea0a2edb"],["/Teleplay/亮剑/晋西北铁三角/index.html","07976e9db2f6f0e73d2f0768d416f070"],["/Teleplay/仙剑奇侠传系列/index.html","a2232aa92c3e7768cb16fb101a6708af"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","4dee381d3e5127b55860d1cfb46006d6"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","a23b0ad55ef69241432a6d4a271eacf3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","ee15b4e7bc12253b6557891c99c9972e"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","4777dde26497a18bb78ff46b9438ea98"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","650ef66bfe3ef647cd669eb5c87e4227"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","35dc1e0f4875cd484effefe5c65b43f0"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","8e74fed1391f9765ebcc2118b2864380"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","4d8e53ea9e20105b7b8babc2369b94a6"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","604824bd7db3da9d93942b963314dba6"],["/Tool/Music/网易云音乐/index.html","6179bb5cdb1ce8b30e7c5e3d2d46eff5"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","62bad45f30dd15dd155a1f8506753080"],["/Tool/Windows/Software/VMware/VMware/index.html","1c59aad2da818db250ecdec3637a543e"],["/Tool/百宝袋/index.html","cc8da81f7f31f28b9459677b3fe16fc5"],["/Windows/Software/Office2019/Office2019激活/index.html","973b5c24502331fba03756cf603be5e4"],["/about/index.html","63be5c7b4ac3e2084ffcd17fc4da1cc3"],["/archives/2013/10/index.html","47bc3fbd8c2bcbd6bc7a42c3d320e082"],["/archives/2013/index.html","81262fe3f1058c28c99d4b2152a7d217"],["/archives/2016/09/index.html","062f1eb5a799f33f5c29c3a1666ca61b"],["/archives/2016/10/index.html","a2768a282f16d25fa2754b9521a48259"],["/archives/2016/11/index.html","94d7818c86bbabc26392b596e37a68c4"],["/archives/2016/12/index.html","291999b1962d6862d2dfdcd14cf047e1"],["/archives/2016/index.html","3deb99b082e87ce2df48cb55c36c3b38"],["/archives/2017/03/index.html","928b7841b82423ce59e9402ac075394e"],["/archives/2017/06/index.html","df99b964239a028f74ffe20fe0b94e55"],["/archives/2017/07/index.html","2e2e0360c17cac68ad260cda33cc36a8"],["/archives/2017/09/index.html","547f4b2cf3c5be0b322f99732ce66cd0"],["/archives/2017/10/index.html","0a4bb70adafbefa4e2fdc7b1dd12ea43"],["/archives/2017/11/index.html","7542d22de55a1104bf944b2025a6dc9f"],["/archives/2017/12/index.html","82607b3d3b80be0e3b0f546a7f5c5c53"],["/archives/2017/index.html","d5f08628d4b749fecf473d1d8e72659b"],["/archives/2018/04/index.html","bd93733f8d8362244bdcd3e420fcca6d"],["/archives/2018/08/index.html","a36714e703d8e3cbead53dfdf285530b"],["/archives/2018/09/index.html","621649a5e69a67eb7c8c8f2fbac3d374"],["/archives/2018/10/index.html","1afe3a83a192cbc99c2ed6759adad3be"],["/archives/2018/11/index.html","5ae0321134b17085adf7444d4accbf42"],["/archives/2018/12/index.html","b6aa5509db0d81006559be8f16285732"],["/archives/2018/index.html","e5d236528c8c59fde9002ba447c60260"],["/archives/2019/01/index.html","980890a272f12ef8e7526b1aa7a06736"],["/archives/2019/02/index.html","36246b40f309d9bef2c727f7690d8e6f"],["/archives/2019/03/index.html","93f56a0a5579a1b155d9e505e02cd262"],["/archives/2019/04/index.html","4417221cb201265107e920de7ed5f9d0"],["/archives/2019/07/index.html","53088ea1ab558a3141d8d5103ef1ceae"],["/archives/2019/08/index.html","5bb295d379e0bfb19a3f9ee5ccf8b3ec"],["/archives/2019/09/index.html","a758e74d851661bbc63052242ee6c7d0"],["/archives/2019/10/index.html","3bbe932e4bf0464760a436b392dd7e71"],["/archives/2019/11/index.html","0391c7605dd832d0166c0ecd214c00af"],["/archives/2019/12/index.html","f0d5768f4b01ca06f6dc1d6f74161304"],["/archives/2019/index.html","6068feed89169822d5294275b6ec8255"],["/archives/2019/page/2/index.html","ce69e1f2c4fc8481e479bcea5e94d265"],["/archives/2019/page/3/index.html","7b8b4a338f4c1cb259d31b8c01c626e9"],["/archives/index.html","854d13dab7726b5a9efb5ae1102ad2cf"],["/archives/page/2/index.html","f600d2ddc99fe02d598e8c3155964d7e"],["/archives/page/3/index.html","049d18779afb67f8eab3b995ef40cce9"],["/archives/page/4/index.html","fb6674993be636badc557356a15ac4c4"],["/archives/page/5/index.html","f94fe62a4f9a1f1f4f429fad236fb7e4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","e305bd76813eaa6ce4984eed1dfdd20a"],["/categories/Anime/宫崎骏/index.html","23b8b773abf10a54e43694ecfdb7a8cf"],["/categories/Daily/index.html","d3061b6535ccfa90da15eb6c7860240b"],["/categories/Design/index.html","7771c63583b0a65d033c54114322a338"],["/categories/Game/GamePlatform/Origin/index.html","25a1ba8efa3f2cff6f7a807c25f3f19b"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","940be61b0e966a61c980af30ed88621f"],["/categories/Game/GamePlatform/Steam/index.html","9de52d0ba60a3ca47c73c5ebabd7af56"],["/categories/Game/GamePlatform/index.html","92b4d10cb71a08e729f2ecc489c42936"],["/categories/Game/index.html","21fc2b000f23e64f0169c64167f408f5"],["/categories/Google/Chrome/index.html","1dc26762f71b18286af9ffe9ff36f3fe"],["/categories/Google/Chromium/index.html","4b5d9b464f771bfe2a8d576ee881f5eb"],["/categories/Google/index.html","24b40a4246402d03295da3bfadc8ec1f"],["/categories/HardDisk/index.html","03e38520ad89a43fad0650bf58e6df1b"],["/categories/Hobbies/Guitar/index.html","15d3f0ae2a47d6175ca02167e5d3f490"],["/categories/Hobbies/Photography/index.html","1f22a8204b1cae96355e557b51fd2ab8"],["/categories/Hobbies/index.html","f22e8c49670861c346f4a56d8ab6ec85"],["/categories/Hobbies/个人日志/index.html","449b4ff54427aa6fdabfee9d0849519b"],["/categories/Hobbies/个人诗集/index.html","cfb2196eab74a3757dde033cc23fe106"],["/categories/Interview/index.html","c0eae686bb656ddf15407f9228e72e38"],["/categories/Movie/HongKongMovie/index.html","8244b73004dccc0871059651c7f0e911"],["/categories/Movie/index.html","0a2c5d49885690df9420b2854fa39eae"],["/categories/OperationSystem/Linux/Manjaro/index.html","482903e4b52b29f0081533b96eb5a62e"],["/categories/OperationSystem/Linux/index.html","745ac5daf7717ac6022d73c80d737dbf"],["/categories/OperationSystem/Windows/Software/index.html","44fe2f62c83f74ac47dd48c722a19668"],["/categories/OperationSystem/Windows/index.html","67577f994f543b81481d25dd46803042"],["/categories/OperationSystem/index.html","b9a6a87e2b68ea7006800240b517f9d1"],["/categories/Research/Math/MathJax/index.html","3d833af213e9886d341216340c7a72df"],["/categories/Research/Math/index.html","204501eb7b635be0f94d66696c526dd6"],["/categories/Research/Math/线性代数/index.html","d4b7f274bdb0528892e1365095bfb2a3"],["/categories/Research/Math/高等数学/index.html","1f3e89d5b46709963babf277b7104611"],["/categories/Research/Memorizing/index.html","cd08b205f75602c58fefb2ad0dd33835"],["/categories/Research/index.html","5ff9893798f20b78af603bd207c31c17"],["/categories/Research/思想政治/index.html","59de835c846b9dd4132133b4e8c4e5ca"],["/categories/Research/英语/index.html","7c7ace33f3eb4430502e66698210733f"],["/categories/Research/软件工程/PseudoCode/index.html","9a2cb98bce3cd87b48f44543c938159e"],["/categories/Research/软件工程/index.html","24e3bad55f814a4b311afde21f375841"],["/categories/RxTool/index.html","8f4c4a96abdae2596df8f7df542ef3b3"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","44261bfe6a0b643dfe7e96cc0a691f7e"],["/categories/TechnicalResearch/Android/RxTool/index.html","db77282c41188e066eb122e03a4008b0"],["/categories/TechnicalResearch/Android/index.html","dd66c6261c33544cd9a7203afa175161"],["/categories/TechnicalResearch/Android/单元测试/index.html","789350ceac1baf99adcb5da988138135"],["/categories/TechnicalResearch/CDN/index.html","fd149160f11b63e308c259df5825ce2b"],["/categories/TechnicalResearch/Git/index.html","4213ee3f5f6505d01e9dedfb770c3bc4"],["/categories/TechnicalResearch/GitHub/index.html","e22e982dd1fcd520c69c16b6d28f60db"],["/categories/TechnicalResearch/Hexo/index.html","da2dbaf79895b07fb0e1c5b22f2ccd47"],["/categories/TechnicalResearch/Html/index.html","59ce6a5a14b86cb40e85d4bbb1325afb"],["/categories/TechnicalResearch/Java/index.html","ea53b8cac41d9d93cdbd74abec778632"],["/categories/TechnicalResearch/JavaScript/index.html","8bef8a635eb2cfbef14cd1ba3833255b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","3ce18386cd84032a13ed24dc8f5ef02e"],["/categories/TechnicalResearch/Markdown/GFM/index.html","4f72514b39accc12b844470b5e499506"],["/categories/TechnicalResearch/Markdown/index.html","2883b4d1b88f916bfb4eb84d01e60daf"],["/categories/TechnicalResearch/Port/index.html","5d4c1edd03e8eb63bc60c831ad5b42e2"],["/categories/TechnicalResearch/Python/index.html","44dbee4166e5184343e022b66a046aae"],["/categories/TechnicalResearch/Spider/index.html","bc7d8cdaf1952ff5ae8d522b599c7645"],["/categories/TechnicalResearch/index.html","6f6ae3eab2b13b9cb733bbea5b5d8e87"],["/categories/TechnicalResearch/响应式编程/index.html","50c6c1809ee3ca1d3df7e05fce4927c0"],["/categories/TechnicalResearch/正则表达式/index.html","c75cd69606718a39fa67fd1553dc0271"],["/categories/Teleplay/index.html","4a3a9eea7cdb9ac675f4ab18876b3055"],["/categories/Teleplay/亮剑/index.html","fa9a0dba0c0a37a96a3a7d64b2067c4b"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","d77f2caeff109a42e2684070e6665173"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","3e962adc2c4112ce67a7b5d592c5ed29"],["/categories/Tool/DevelopmentTool/Unity/index.html","999abee2088a0fb86568080236864d16"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","8eec3ebfd50b13516b0f8c1c209d5df1"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","e917583b42b918ed45746010fcf83842"],["/categories/Tool/DevelopmentTool/index.html","34094522aedf8c0637df3aadcf4517f0"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","75a7c40071740f45ef3911d3872bb09a"],["/categories/Tool/Linux/Manjaro/Software/index.html","4f113cf35ed61403e98382fe0cfb88ea"],["/categories/Tool/Linux/Manjaro/index.html","a17e656ec53d7a935a5e6863a586332f"],["/categories/Tool/Linux/index.html","335804b104f5bd95125ae9738f6218c3"],["/categories/Tool/Music/index.html","7bc5fe692307081d4bde95eb65ad231e"],["/categories/Tool/Windows/Software/UltraISO/index.html","e162abd156112601c4899bf34bf9fe79"],["/categories/Tool/Windows/Software/VMware/index.html","364be25dc628e4472a39aab0af7a0dea"],["/categories/Tool/Windows/Software/index.html","407b606a515d24f0fb29fef849148016"],["/categories/Tool/Windows/index.html","eebb3430f4296c94d193b13b90bde02f"],["/categories/Tool/index.html","87ac0d01afafcc3db0d7173faf888206"],["/categories/Windows/Software/Office2019/index.html","472ffaa02d8851787425dd822b66eff2"],["/categories/Windows/Software/index.html","bd6832a349701c061664247900c10dfe"],["/categories/Windows/index.html","80681a438ce19c79bf9a94add680acc0"],["/categories/index.html","6a53c9a8d8b3172eda1deb793481d59d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","da12e30d7384c7a6b340c9f729536af8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0a1609140180308ae65584e4942dbf0f"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","d66101a47ba81709bbf77d1d13c4ea6b"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","39ae25a87543626e47b66bfb1e6ab04b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","e583f86c93c242cf4f0ce5299208d0b0"],["/movie/index.html","f053fc8b4658acb0ddba2d482e423f36"],["/music/index.html","d3a0c5cb3c5221d0516e8f9522e9d17c"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","0016c4378231c7c3a2691d59644772da"],["/page/3/index.html","12c9392690c617c0abd83bfea3ec9595"],["/page/4/index.html","8d5c91f4e7e3b91a0a1ed43b36102f10"],["/page/5/index.html","8ad463d67369378fc20d77b7bafcad8d"],["/page/6/index.html","6494da39bad15f5281e31a58dfe2d99a"],["/page/7/index.html","cdec08805a3d4a908e9619869442f140"],["/page/8/index.html","d92c981cb86ba86ca230db652c11e830"],["/page/9/index.html","44d89266a3d6682e444fe4aedfcb412d"],["/tags/Android/index.html","a8fc7e4073702d18bf28d46fe095cdfd"],["/tags/AndroidStudio/index.html","6843f9b9d92ed64d462eacf72f817fa6"],["/tags/Anime/index.html","a1347ff434de7f81c2d6e2eb270c8293"],["/tags/CDN/index.html","5b0c3ead7533aba49485e42d45a00ced"],["/tags/CSGO/index.html","5914680a0bf2d4fd0370c51da9219b72"],["/tags/Chrome/index.html","0a40ae474e2fcdffbd3b57692d6bb183"],["/tags/Chromium/index.html","12f90a0093364d5eb53afd55b83994ed"],["/tags/Contributor/index.html","c0a65b25cfabc7fbbd626d4f2367427a"],["/tags/Daily/index.html","ab0fcf0784e759ea6b7cfebba8e8b421"],["/tags/Design/index.html","c82b8eaf2fbc6410c7575241ad9f0607"],["/tags/DevelopmentTool/index.html","5ac55f4062ce0750321988c13fcfab2b"],["/tags/Emoji/index.html","ec471a444f47d755ed50c645e343ac58"],["/tags/GFM/index.html","5d1cd6272d11b3e396cccf91152bb1ef"],["/tags/Game/index.html","8b2ddf4603a7f79383ebb7e9992020bb"],["/tags/Git/index.html","fdaed71b8d08bd47185ded82e31b344b"],["/tags/GitHub/index.html","546d0023ae4f9b1ab979e21edb83f732"],["/tags/Google/index.html","22e5f097aa980723d8abdcb036992ea6"],["/tags/Guitar/index.html","297ca9e0c1cf825b17145808e583d28b"],["/tags/HardDisk/index.html","488c9a00081948b91c4195f09c8ea534"],["/tags/Hexo/index.html","d2759ceaf63cdbc2416d1127753e4d27"],["/tags/Hobbies/index.html","cd7a705b358027e90e75b1c524b9f5b1"],["/tags/HongKongMovie/index.html","36971c9b8c1ae4206de69bc308927165"],["/tags/Html/index.html","cdc277795b11766150228cca9282ef5f"],["/tags/Java/index.html","3f2747cc1e6ba14cf19f03cc3115ba2e"],["/tags/JavaScript/index.html","0d8f39c05f7d41a77e0def10dcf76ee4"],["/tags/Linux/index.html","3979eec076564d97cb19ac4005bc6d87"],["/tags/Manjaro/index.html","584bdee74fcf4e7eef1f4c7a7012f78f"],["/tags/Markdown/index.html","2fc6ee324275f13ac0886e2c8420183d"],["/tags/Math/index.html","a0cf61c8518e3d43b4d8ddcdec08610d"],["/tags/MathJax/index.html","73c7faf661e065708acb5547e20023d6"],["/tags/Memorizing/index.html","c39e53a138c02de17a52988ccc6679cb"],["/tags/Movie/index.html","04442af035b6fbd6b0b6f0e9493701f6"],["/tags/Music/index.html","69577b0a7370b741090d98ad936a1dc9"],["/tags/OperationSystem/index.html","4aed6bf130de13d787b17e9cd7ed19c2"],["/tags/Origin/index.html","7a489ba438e2d64f0150ac60a6a376b8"],["/tags/Photography/index.html","979ecf72ecec9a258a62d8d758b60b7d"],["/tags/Port/index.html","40b5652494a770571b0f3336af4746ae"],["/tags/PseudoCode/index.html","bf66f3910c428fc0e3c7d0747c1b15dc"],["/tags/Pycharm/index.html","8d5be3bb1204a55ea6779bc6ffce799e"],["/tags/Python/index.html","467b5e1afe77c54e7e187aab8a0183d7"],["/tags/Research/index.html","6888cb6559b6e6811b21d8acfb2aff57"],["/tags/RxTool/index.html","4b6b5451c2e4829c3b635668b190eedb"],["/tags/Software/index.html","b7c0ec17f38a4f877e045fd6feb16fad"],["/tags/Spider/index.html","a3e0a7949b176ec26037185b2d45199d"],["/tags/Steam/index.html","4e226519ddd71f463b711e4313799a32"],["/tags/Teleplay/index.html","d05f973a7454ba45f9a00d3fe15fa45f"],["/tags/Thunderbird/index.html","1bf80020a077f19c54851fe3b0147e20"],["/tags/Tool/index.html","9a0ef99ec153bf31f0663eec75bd5848"],["/tags/UI-Design/index.html","27abbcab1c6711b91bc51b21c9735c9b"],["/tags/UltraISO/index.html","0488f69da3865235fa88746cca5047a4"],["/tags/Unity/index.html","3f0ff507558da254abf52ad45ecc38f8"],["/tags/VMware/index.html","c178c778ab375cf5741871292cbcd7a6"],["/tags/VisualStudio/index.html","391c8e4f16178c44e048e585275ebc34"],["/tags/VisualStudioCode/index.html","7897d2253b02518033239944490046e1"],["/tags/Windows/index.html","393fda9d24784d6ce28ba26efe6f7f8a"],["/tags/index.html","4f5e92200a161c17510eb3f8ef843143"],["/tags/个人日志/index.html","75d063d3f92233c87c0e5e7a57e64075"],["/tags/个人诗集/index.html","e7aa9783ea97c122ba0f3dc354dbcf1c"],["/tags/亮剑/index.html","69a21d48e1872f0410eddb9f3042b4d3"],["/tags/仙剑奇侠传系列/index.html","f5ce628f60484639762ae20a841f196c"],["/tags/千与千寻/index.html","0a0c0d2d83c9c381190a80d6be1f75fa"],["/tags/单元测试/index.html","9db34cb7175c1cfd27ba965e005a74a7"],["/tags/响应式编程/index.html","5b303bb2a2cd87818bc8f55f127ae870"],["/tags/宫崎骏/index.html","a45603a496d0edf42b3b2697f6bca28c"],["/tags/小王子/index.html","d61c38a02ce62dda3414378f6d4eaf9f"],["/tags/开心鬼系列/index.html","0a27f2bd839abe2cd5b10f80e1b9fad3"],["/tags/思想政治/index.html","9e19e64f759cce9acfb8c7341f687f1d"],["/tags/正则表达式/index.html","71e9964a416b0b0ce6cd026313ab4dd7"],["/tags/线性代数/index.html","102bf86bef834ed24c3e6dafa010fb23"],["/tags/英语/index.html","8af2bb425e75a7472ae44944a970a6ab"],["/tags/软件工程/index.html","df349e1a8cbbd1f5b21cc522f438484a"],["/tags/高等数学/index.html","3523605b9d30a1b1b7bf3a9b8edd07c1"]];
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




