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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","d9513118889b36434f59c09f065b003f"],["/Anime/小王子电影的共鸣/index.html","14f04f9320db3666f20e447c83b74fc9"],["/Computer/Alienware/Alienware更换电池/index.html","c3c0afa110b408f298948485416e77ec"],["/Daily/Memorandum/index.html","0162e56e20b268c7ba6c20063f872d6c"],["/Daily/生活小常识/index.html","f695addd1f7b35c8967fce3710f00b57"],["/Daily/网络用语/index.html","dca4dd57104401023325efd113c42d6f"],["/Design/设计用户界面的注意事项/index.html","d059cbfaef5ab01cbc1d63f9030c8515"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","f25c1c770cc8561878144c727dc4a387"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","4c8f453ddf547099885f1b43fe759034"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","a08265ca8c999b9954ef97964aa7724c"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","af6106af6ba68154633dec78da92607a"],["/Game/GamePlatform/Steam/Steam库共享/index.html","3529b057a638e4a85fc4104578a45c9d"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","5a175c918cac5a8493f95de7a3146ab8"],["/Game/如何独立开发一款游戏/index.html","1d6dd65a4f8c45af3d629b65abf7ceaa"],["/Google/Chrome/Chrome上网助手/index.html","494d7b6632bcae9db7e686e98844cc57"],["/Google/Chrome/Chrome使用技巧/index.html","922c7381f14e1c659b2b987f0db1e15e"],["/Google/Chrome/Chrome插件/index.html","f41cb2038cd6f3ee1cab4786b3d63e1a"],["/Google/Chrome/Chromium/Chromium/index.html","c9876cfe80991ddebf637965b96d1b86"],["/Google/Google搜索技巧/index.html","bb7490e98c01b7397d1cfc5df05a06a9"],["/HardDisk/硬盘分区结构/index.html","4e69fe7ed5ef2e8bae26361eb9cc99ec"],["/Hobbies/Guitar/吉他入门/index.html","4a1803d36d8dca40c1c71a676654b6d6"],["/Hobbies/PersonalDiary/芦江曲/index.html","e09776756c2a70a1a95d0dbbe7083a51"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","6666a751fb4ec36b9f015151c3a53fc1"],["/Hobbies/Photography/摄影入门手册/index.html","ffe074550cd092fef0cb33e9631108c9"],["/Interview/2020年字节跳动面试题/index.html","d21f8e6cb3691f6e06a535634a5003c4"],["/Movie/HongKongMovie/开心鬼系列/index.html","1abfd91819ea964a9e59522317b5f3bb"],["/OperationSystem/Linux/Linux分区管理工具/index.html","0d6413a2ad5f88fb8ff775858a3c3403"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a5239e38b4cb9b0d16e3956a89b7afc5"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","802bd9b45b6732af6e580a74ad0a8fc6"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","f543b561269aa045c79b4a088dbdfc69"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","9166ef6ef27c72e6af3eaf19632fa19f"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","0d910f7241001280c885d207f1918f42"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c1cc451e0efbc740286f1778e0a2d389"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","ae651be585f1627e59234b7c0aac4cd9"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","0fdcdf464662f34f9aa9a25678b2ee5f"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","6b570011e484e14c5a4469d43f21e2a1"],["/Research/Math/线性代数/线性代数公式/index.html","90c83b6e22abcad620a48374d7447279"],["/Research/Math/线性代数/线性代数知识点总结/index.html","4c372802b624a6dee3da8609a8f449fb"],["/Research/Math/高等数学/高等数学知识点/index.html","17cdf530443d1be01cac230c376c0020"],["/Research/Memorizing/费曼技巧/index.html","4f7f05b2b982cf8c6806eb4e4e55eac5"],["/Research/思想政治/考研思想政治理论知识/index.html","82602f8af8eecd237dd95b3f0ca59b13"],["/Research/数据结构/数据结构/index.html","6e955f84d6d291ef4be6b7e076175233"],["/Research/英语/考研英语作文/index.html","1845e44235d3b21acb71d2c1789ab2c3"],["/Research/英语/考研英语词根/index.html","d1eeaf4cd1ae497efcfcdf2f6a056690"],["/Research/软件工程/PseudoCode/伪代码/index.html","ea200b5204945833c75497da1cc501c5"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b2d2602e1154ef9bb918de3a3dda0fe1"],["/Research/软件工程/软件工程基础知识/index.html","7ad69baadd2afed1147936e4a6ac9f6c"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","56e01611aeb5ef31e4cd73cbd2481562"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","860759a4de20f180586ddf741bcd3608"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","b92183234e1a5a24b055b64e2971be79"],["/TechnicalResearch/Base64加密原理/index.html","e25d78a9ec105381b7fcd8ac3ab530a6"],["/TechnicalResearch/CDN/index.html","8ec13372af6bb0efad674ee89c3ed61f"],["/TechnicalResearch/Git/Git/index.html","877622085b6f02ee8dbb38f011511fb4"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","1c298616d77a7152f8d55015cea59019"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","555604425763ddac6c8e0bee3b2a3cc0"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","0e9e33761a9a7295fef1d2229f486139"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","bfb04bc3bcc58b4d54c82d86657f2600"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","a8462435ae69835d6071dd91b5af18fa"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","e10985ad3eca5e7a05533dc0916e043c"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","28e3e348459bb8e2ffdf9c07d4fd52de"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","c602809819028233f7ff14159a5bdc13"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","779202a5741876ff4e77bd6eb86f2490"],["/TechnicalResearch/Java/Java基础快速入门/index.html","ba958597a8df1112d2564fd4106319e2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","897aef8e87cdc81189309330f00bbf23"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","534a6558217d2500b9a0d4bd56ec8fd8"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","07eedaa94dd88cab8d74dce30fc68e79"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","e06b5d21a57a6c2e3230929b4cf86bf8"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","277ba73d182a1cc8fe7c3916c6350cd3"],["/TechnicalResearch/Python/PythonExercise/index.html","31dfbeeb3af22f482a85abf3fd95b1f0"],["/TechnicalResearch/Python/Python问题归纳/index.html","1fdf0ea575db3e52ee2a14eb6bac59c7"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a779d9636257e314de539c2e5593ceaa"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b317c50d639bf0916200790c65fa06e8"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","6301240880dec66bd03be04df1aa42bf"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","cfca903ea5e2aa7a7ab0ef55d4ac9dcc"],["/TechnicalResearch/服务器常用端口/index.html","3cc0ebc18f6a653eb423dce3432eb590"],["/TechnicalResearch/正则表达式/index.html","9ff110047f6e537651589a669ede70f3"],["/Teleplay/亮剑/晋西北铁三角/index.html","c4f488e31674fa51daee7696cd1cd091"],["/Teleplay/仙剑奇侠传系列/index.html","c3de3384b033bcaacb99df8ea951ea64"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","e6ccd631643584ed24a7474c794287e6"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","8879fd1a36d1757d89ef71785f671ff3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","8ff2ac4051b59f9209f9e369bf14b688"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","30c69d844583f544b108371a62889500"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","a18f77748e1d7bdd194b04617c757f71"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","09fc5b780589a7223d5e779ca2158fad"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","ef6b7af35d2422f5c63e7e27225b5d8d"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","66b5f0fb0c96e6945f75562173f78489"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","5e3034f6a8ce9b0d5ae91ab055dca3f3"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","82677b9bf7935c631836b7043ad6af06"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","521e4f3887e870130f2d20396fcdd0a1"],["/Tool/Music/网易云音乐/index.html","c36141fd2931435a88895f61d22f3865"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","084f273ba43833a488fc9ec967d2a62a"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","5e40e0189069ee6e4e6835eefbc7b393"],["/Tool/Windows/Software/VMware/VMware/index.html","aa2f5ef7affd989ba21f5d6fbb233131"],["/Tool/百宝袋/index.html","3ed1b334367ce8048f1f29619fe989f6"],["/Tool/随机获取在线壁纸/index.html","e185a72911d691997677fcfe70debe67"],["/Windows/Software/Office2019/Office2019激活/index.html","6276ed4a87f2c9d3f59efbcfa938539a"],["/about/index.html","5df9d0de9b61aa3125a32a7b04937653"],["/archives/2013/10/index.html","2ffee4f694f72a3e34ea05cc4dbaa60a"],["/archives/2013/index.html","22e1553895d8fc5545484b7d704fb301"],["/archives/2016/09/index.html","06ba49d772476545ffd0d868f32f73a1"],["/archives/2016/10/index.html","3194951c5e850615d559d328ac2abc04"],["/archives/2016/11/index.html","5cc089066cf07294f4441aa6f38081d4"],["/archives/2016/12/index.html","3a78fb9d070fd3d97203ba73f2150693"],["/archives/2016/index.html","c8f687342810eb16d220d5baf286e8d9"],["/archives/2017/03/index.html","cc8fc32ed61f185a7d0f45e0fd0e7393"],["/archives/2017/06/index.html","c1384e652670f3148b6346f9d070cd31"],["/archives/2017/07/index.html","2c3b3ffd41c4a60ff3264638db8877b1"],["/archives/2017/09/index.html","c77f1e2ebd071367bfe6aad7c2d037ea"],["/archives/2017/10/index.html","9828020fb9898ff5d2eb08c23c2beb6d"],["/archives/2017/11/index.html","2fab5f95078d2c953adf872b2a077b4e"],["/archives/2017/12/index.html","d93824f9aa8d1baabc4df7a264c35f99"],["/archives/2017/index.html","f9136ac05faf20fae3f1ea9e68c9f775"],["/archives/2018/04/index.html","86090d093c33ba2d3302b1145e046917"],["/archives/2018/08/index.html","90efa527b9d09ddd947210f120c59e46"],["/archives/2018/09/index.html","1629150adac37d83845cc263e3638940"],["/archives/2018/10/index.html","9f699a6a882128c5c186b3bad118479a"],["/archives/2018/11/index.html","fd1f543676f4d54d3db36117489268dd"],["/archives/2018/12/index.html","c387b5360599ebd5f72e7e62a6c2d5dd"],["/archives/2018/index.html","f49f749d30ef1a921189bf34c68d637d"],["/archives/2018/page/2/index.html","086537c5deef72a92e6fbbf0f8d39791"],["/archives/2019/01/index.html","dde28ef9920fd792527c4d4c6c7adddf"],["/archives/2019/02/index.html","63c339789c9a353b4e84b8e6c0cab93b"],["/archives/2019/03/index.html","e511ba96eae02e8791066214171d9eff"],["/archives/2019/04/index.html","cdc1301f8639be2920e05fe9369b9f97"],["/archives/2019/07/index.html","bf6428e624d35a06704c0c772443c3ed"],["/archives/2019/08/index.html","ec4543c3914ca9ccd3be8fad6a313ee6"],["/archives/2019/09/index.html","d11a655f810a4c0d1686359d0789af0a"],["/archives/2019/10/index.html","1ed61062e75bd2846d8a5a05d13791e9"],["/archives/2019/11/index.html","cf2e2e1d6065abab0395a16404af95de"],["/archives/2019/12/index.html","841a973606e1c492424b9361b6b2389c"],["/archives/2019/index.html","e56e05f028bd6c0ae89794bca28c437a"],["/archives/2019/page/2/index.html","a103aaf4ead33c837c2c5d38905b715b"],["/archives/2019/page/3/index.html","0e72e673ad766eba57edca7be29694ba"],["/archives/2020/01/index.html","c74afe6ed8e1a845572e57050506d649"],["/archives/2020/index.html","ac523aa5a83bd4f2c623006785a59fe4"],["/archives/index.html","a8584066a7f0538407b88424b6400bcd"],["/archives/page/2/index.html","27447c4e2fc6ad480d956d1e2d225b1f"],["/archives/page/3/index.html","4bcf3d6c2e7347fb99696aa949783f52"],["/archives/page/4/index.html","49bab090562eef48083e4db86192a1a8"],["/archives/page/5/index.html","b05a18bfd1291cb330e72fb13b4ae65d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","0c4a4d013d54892634245e641429d83b"],["/categories/Anime/index.html","ca4905631fa0cbf1fa383c4a0cc4b339"],["/categories/Anime/宫崎骏/index.html","48dbc3bbac2b2d09a172050ccfcd02e3"],["/categories/Computer/Alienware/index.html","b9f5d7ce025c8c4b79ba02e6de865cf4"],["/categories/Computer/index.html","923ec422457bc795d65390f05fe0544f"],["/categories/Daily/index.html","099b77d2935b88398090ffcdfdb6ef50"],["/categories/Design/index.html","6de6751b494ebc6477796f79a9505abb"],["/categories/Game/GamePlatform/Origin/index.html","b115959fdd252f06a1a264c1c26512bb"],["/categories/Game/GamePlatform/Steam/ARK/index.html","80fff6322fec10f5089823ec38ae1337"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","595e528a6160a29794104948a4c387a5"],["/categories/Game/GamePlatform/Steam/index.html","5ed0da16b9af8e4a45d1d45f8c41bf9a"],["/categories/Game/GamePlatform/index.html","0ba741cf59dcc826694e5a7f48c2e437"],["/categories/Game/index.html","9626e4608dc027e86d6d01966cf1cac8"],["/categories/Google/Chrome/Chromium/index.html","73fb2a7e92ea2446dfcdaf8bcf3cfe9c"],["/categories/Google/Chrome/index.html","16a1f8fb1c8f1a013fd7a2b4426e91cb"],["/categories/Google/index.html","0e0bfba1568f7de7ba4c3d51e4504a0d"],["/categories/HardDisk/index.html","0be3b897af9f9e5855546dc3acd48369"],["/categories/Hobbies/Guitar/index.html","eaea00dbd3893f51f523d56bfb1db1b4"],["/categories/Hobbies/PersonalDiary/index.html","36a0fb069a81b296ce2d84b6296bab63"],["/categories/Hobbies/PersonalPoetry/index.html","7a92f67809ffaed8f8a60faf4ab09222"],["/categories/Hobbies/Photography/index.html","16c4b6e5b9f55c8e879f7c13ef1d30fc"],["/categories/Hobbies/index.html","0b51710b7dc16934f1fefd54cf7126c6"],["/categories/Interview/index.html","76e4126cae0a5b5e394246a5e0e24f94"],["/categories/Movie/HongKongMovie/index.html","6ba0adeddc76a684831a290ef694acea"],["/categories/Movie/index.html","46d8775140c45f35ded5cb57da47aeb6"],["/categories/OperationSystem/Linux/Manjaro/index.html","149d4f6f5326f54fe30334d01c947cb2"],["/categories/OperationSystem/Linux/SteamOS/index.html","fd7fad3cccd9aff771b4d2df2d619674"],["/categories/OperationSystem/Linux/index.html","6bcdf4706f0dfff7ff183377a1aaf94f"],["/categories/OperationSystem/Windows/Software/index.html","8290457acbd964edca7fcc4b67263ed1"],["/categories/OperationSystem/Windows/index.html","b26c0df02ace61ecc4e0c2543212844f"],["/categories/OperationSystem/index.html","ea3776594a8f7def8f62aae23108e467"],["/categories/Research/Math/MathJax/index.html","96a000a8b885f44227213f9e114c1db1"],["/categories/Research/Math/index.html","585fda59ea0b79bdde009b3ef11bfa75"],["/categories/Research/Math/线性代数/index.html","7a61a2d1632b0e16c675e93916665db2"],["/categories/Research/Math/高等数学/index.html","329701954fae48aae26253ad0ab926b9"],["/categories/Research/Memorizing/index.html","83de04c2abffbe9a08a76c970a22cac8"],["/categories/Research/index.html","b81e786ea8c1a630416b0317de18300c"],["/categories/Research/思想政治/index.html","e011c409b690f81b72a5598725abb602"],["/categories/Research/数据结构/index.html","019327a013489926b5bad6487c163d1e"],["/categories/Research/英语/index.html","f7fd6709d290cac7e638fd6dd2f2f860"],["/categories/Research/软件工程/PseudoCode/index.html","3a0d9eefe7ab07e6e5e57da684e00567"],["/categories/Research/软件工程/index.html","083ddfb97cf1e26b8c15463ca3599125"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","cfe03aa6681f986b48eed680eb600d90"],["/categories/TechnicalResearch/Android/RxTool/index.html","cd1f56e8a2afa8a5eeefda50ea8dd801"],["/categories/TechnicalResearch/Android/index.html","c2e7c7ba6e43d007e048a5ac20a1e843"],["/categories/TechnicalResearch/Git/index.html","351ab0e79cf753669d23b7f88130e7f7"],["/categories/TechnicalResearch/GitHub/index.html","a6562ee9422953f4dcc0eee1c91f8c13"],["/categories/TechnicalResearch/Hexo/index.html","d1dd2fb6b6457630e06151b9bd35dcfd"],["/categories/TechnicalResearch/Html/index.html","fc5aeabbee29d3d5af0e215befabf62b"],["/categories/TechnicalResearch/Java/index.html","4cacc9017b49ec9a6b114163d58b0960"],["/categories/TechnicalResearch/JavaScript/index.html","d3a4998a96aee8832c6fc845010a6159"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","0792fae76631d114d7a69e8268046b80"],["/categories/TechnicalResearch/MachineLearning/index.html","8948733fb7a5da1f17f2cf24809ca22d"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","e0eda2bbdd1156997759fef41ddb3eb7"],["/categories/TechnicalResearch/Markdown/GFM/index.html","06103fcca4033708ebf95fcf4c38fe06"],["/categories/TechnicalResearch/Markdown/index.html","535ae5f25350d5f2a82016d76061ac06"],["/categories/TechnicalResearch/Python/index.html","88482f830ee9e3a299b2340edf5d4333"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","9074479f480efd7b6d5c2a01287c2785"],["/categories/TechnicalResearch/Spider/index.html","5cf5c85994a716c51d7ef3b6ae2d6dac"],["/categories/TechnicalResearch/TA/index.html","c41d0ee4d8c6ba52cd79451d6a1c01f6"],["/categories/TechnicalResearch/UnitTest/Android/index.html","f0cb9d439ae4cb99af042fca2a81c4b0"],["/categories/TechnicalResearch/UnitTest/index.html","cc23d8d551044ee04e17d5875f201643"],["/categories/TechnicalResearch/index.html","f95c480bb646947181f444efc65873e9"],["/categories/Teleplay/index.html","e7ce86e01fbcd63042de2c3164da35ec"],["/categories/Teleplay/亮剑/index.html","41e3310d5e6bde49e833baaed566bbc3"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","f50be87f3b022782245e68d6c9dae27c"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","67ade249d9cfa679c408c27593cd4609"],["/categories/Tool/DevelopmentTool/Unity/index.html","7048565a297327a73614bbf3d876c2f4"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","59d159f5fcc670c83f464ca0f62b938d"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","901037d803e5293cb5f855c976806345"],["/categories/Tool/DevelopmentTool/index.html","d94d6e986d468b43f85fb0745210d33c"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","ba52759e966b1980e430a4fd1196f2b1"],["/categories/Tool/Linux/Manjaro/Software/index.html","be04e0555b9ed5424ee7c1ea12e0a4ac"],["/categories/Tool/Linux/Manjaro/index.html","b12412234a982dc5cd82fd0e8706b066"],["/categories/Tool/Linux/index.html","8bab202fbdb6e63c901e247106fca82a"],["/categories/Tool/Music/index.html","89fcb5410592160ad68be4dc5deac311"],["/categories/Tool/Windows/Software/UltraISO/index.html","c2cc28844ab03ce8f6f847074362a818"],["/categories/Tool/Windows/Software/VLC/index.html","a5c63fcee5ba96a400a4b41fae909f37"],["/categories/Tool/Windows/Software/VMware/index.html","720b2df65693e1e9a346bc1df13f3bb8"],["/categories/Tool/Windows/Software/index.html","1078945e17248264dbad5ed782145e02"],["/categories/Tool/Windows/index.html","877b119c28b3de1841601f1ef4825112"],["/categories/Tool/index.html","916f5d942671724a5ab80c1ce2a50f11"],["/categories/Windows/Software/Office2019/index.html","b05c17428326cfa878884cac485ed649"],["/categories/Windows/Software/index.html","a1a704368b22dcbc712bbf326dfe9944"],["/categories/Windows/index.html","46fb81447c0604fd62edb4851e9f5d23"],["/categories/index.html","f32af4a37c920a21bbca71fda08349c1"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6143705026784d6dfa9fa05724aef879"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","b85b2d766c2a811dc77f85ccb88314f1"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","117df08e6b01021b95f122ec24c7a50b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","af845e4dc1ddaa381d4b3082f6e7c31e"],["/movie/index.html","955b9efdd85779b41154ad74a9f5096b"],["/music/index.html","3e0ed8ff9dbaae2975751ffa5a4cce91"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","dc45e0b942f4e6a4d30e545c505c5c36"],["/page/2/index.html","ae53bbaac6d7ba559d4a8f2def2864ce"],["/page/3/index.html","730ffb75488d5850d2495658f9c2206b"],["/page/4/index.html","e027f33dec2bcd8a901538a3c9423c10"],["/page/5/index.html","f51271d2219deccc57ffd44438f9c770"],["/page/6/index.html","111b55dc042519fb10d6760dafec9400"],["/page/7/index.html","6686a6db0d8c808691c04655aeeaca83"],["/page/8/index.html","24b12c860bae5eec98c14100fb69d3b9"],["/page/9/index.html","f8712c77bfbec0d396bc80ab21f750da"],["/tags/ARK/index.html","8c026e244c1d070b5b6b08c7aac5b78b"],["/tags/Alienware/index.html","c928c1901026b6cff8863951aa07bd25"],["/tags/Android/index.html","112a5605b5abad17e88a672d3542741f"],["/tags/AndroidStudio/index.html","6d5a0afc1d403a389c76b8bacfbe83f7"],["/tags/Anime/index.html","55c23c9f7791faa6ca5b4c2b8d35d61e"],["/tags/Base64/index.html","6c2ac31d7847bbd2be2e8d9618b57d05"],["/tags/CDN/index.html","872a66d673a150492177304a3dfd3c92"],["/tags/CSGO/index.html","28e1459f55d28b33a35b92911ed53d67"],["/tags/Chrome/index.html","a649a60659d8f2c218592ffb2d8c6bb6"],["/tags/Chromium/index.html","e58d50c3ecaf1492b2b764e31e04503f"],["/tags/Computer/index.html","f6845ac13f37ee160c98c26ce1112d7a"],["/tags/Contributor/index.html","bdae26ce035939ec77bd59281b67baa1"],["/tags/Daily/index.html","5815840fe7372713ab1f68bc22550861"],["/tags/DeepLearning/index.html","7665bfe3ddbe90e77e6f9f74d47c1abd"],["/tags/Design/index.html","77ceb4b746fa0dcc840a08a3517c7080"],["/tags/DevelopmentTool/index.html","ba26e4f93bdaec091f5f2f5c2da4db41"],["/tags/Emoji/index.html","146659a9c8e95bfbb1989b2fcea9be4a"],["/tags/GFM/index.html","e702734a5367db9e5e6a425c63caadea"],["/tags/Game/index.html","cc2a2d5453a3b170475bd08c0ff0079a"],["/tags/Git/index.html","d8048d3de25ccbb0a64ce2bd880e5730"],["/tags/GitHub/index.html","17676f9be8d24c23ee4f01a031b493d2"],["/tags/Google/index.html","872974423e907d13cb66f15afe235bb0"],["/tags/Guitar/index.html","34ec8c13eb51bd64d096fddaabfb8de0"],["/tags/HardDisk/index.html","add3e3d33a273cb4160b180a947721b0"],["/tags/Hexo/index.html","cd2cbc5ae71a2346bb5111120eddd0df"],["/tags/Hobbies/index.html","6b09405f566c503c8f3f998dfb0a0209"],["/tags/HongKongMovie/index.html","6ae2a990e980d51815b3f61a4c8684f5"],["/tags/Html/index.html","3281158731cfd93ba1c4a853786cf399"],["/tags/Java/index.html","5509ad0444e6a7357087f9c83c90d003"],["/tags/JavaScript/index.html","c91bf8a4c575a7335cb6c3b35ebe4d0a"],["/tags/Linux/index.html","b31917f886b420e377ebb362b4408bbe"],["/tags/MachineLearning/index.html","678c728daad9826758e6fb58825900b3"],["/tags/Manjaro/index.html","e8db88f5ac8ed3fb840e60d52dc1c9b9"],["/tags/Markdown/index.html","9beff5a875c4339c542c1d708071f949"],["/tags/Math/index.html","03d411dc243d0f64332240d6baf01f4a"],["/tags/MathJax/index.html","8470908016236b4bd64584eb376481d8"],["/tags/Memorizing/index.html","d8bb4f23b546733623f0127d2604da14"],["/tags/Movie/index.html","195d893d943e856a923119b64774b12e"],["/tags/Music/index.html","8429e70916f3828c82680a41933db09d"],["/tags/OperationSystem/index.html","af1929501ff13ea4fe75013b538556cb"],["/tags/Origin/index.html","5bb22cdb65c97ebb5bf354fe8d2a4cf9"],["/tags/PersonalDiary/index.html","012004bbd87853a83f43e91cf122a440"],["/tags/PersonalPoetry/index.html","c79eb63cd405cd6b6a2f657a6e9c35fc"],["/tags/Photography/index.html","4f6fac9e940708f29b8f506235070617"],["/tags/Port/index.html","57163ec805ef1734727efce9d1c8374b"],["/tags/PseudoCode/index.html","37e6681e72cff82314b0c4123240c9c9"],["/tags/Pycharm/index.html","8a398367727c2d488f33714836c6dc28"],["/tags/Python/index.html","57145531a688bfc0cd8f2a316f638bf8"],["/tags/ReactiveProgramming/index.html","4b02f2c51837d7c8cb642a67e63a82e4"],["/tags/RegularExpression/index.html","43b24b6c532bf6b7c0d76bae6dbf2237"],["/tags/Research/index.html","5c448dcf75049b07f3f2337c38af5154"],["/tags/RxTool/index.html","1dd213e8b19b4b113da4723866ecff3d"],["/tags/Software/index.html","27de9886119cd19096bd600586b48926"],["/tags/Spider/index.html","27b461d8896e74da129af053dc6bded2"],["/tags/Steam/index.html","f66cc5eb6b6ba5ca8ebabe8e87296573"],["/tags/SteamOS/index.html","720d7b3294166efe8f6daaec32760b3f"],["/tags/TA/index.html","477203aea9a7ba3a34be99d4d6884a17"],["/tags/TechnicalResearch/index.html","304ff8f791180272a0439b89bc422b13"],["/tags/Teleplay/index.html","078f9e2cbf3c4310bf2dfd6d87bf50dc"],["/tags/Thunderbird/index.html","7d0def6419a43b6edc9127e665f97a60"],["/tags/Tool/index.html","5ddeaeda17524c350eceaed698eb00f7"],["/tags/UI-Design/index.html","3f9ad79608bf5246e0adcc7f42ccc68d"],["/tags/UltraISO/index.html","83880f61bd85f36654ba6802d903dcbd"],["/tags/UnitTest/index.html","6c1f49bb70d8fb55b505b20e5e5165cc"],["/tags/Unity/index.html","a55583033cc16c158595527fce6dfc05"],["/tags/VLC/index.html","b9a775e42bd2e4257cb12aa9c91ad550"],["/tags/VMware/index.html","53be72850672f731aa9351d302bbb13a"],["/tags/VisualStudio/index.html","9e0c6383c502e4ab09fe350f0a3ec4fa"],["/tags/VisualStudioCode/index.html","3d7a0400be828179e32cfe66de9417d1"],["/tags/Windows/index.html","7c063de8cccf67c6985e320604314fe5"],["/tags/index.html","e93abaed305d335de9d8e6edd2833d95"],["/tags/亮剑/index.html","4bd0d772a4c5cf216d924294e07a2510"],["/tags/仙剑奇侠传系列/index.html","945b4c5d0ae03348f1e08d84cae868c1"],["/tags/千与千寻/index.html","cdabf3c0cb9738c6a1d25e4f771a4caf"],["/tags/宫崎骏/index.html","6aa8b6f24eef160695b30e7a572004e1"],["/tags/小王子/index.html","8bd622a28b7ae4996f3b1dbc6a093114"],["/tags/开心鬼系列/index.html","a6fd076267c6e0a114009fb857b0fbea"],["/tags/思想政治/index.html","cd92d77a96f915cf47e2e57efee27eee"],["/tags/数据结构/index.html","aed23cf4d381b5d2dc28e35c820e51ad"],["/tags/线性代数/index.html","7b3d71feceb2c57c6e8703ddaf0a383e"],["/tags/英语/index.html","f188e10ba4cb07df42bdef8e6132106a"],["/tags/软件工程/index.html","73fdd404dbe4ef29afcca9cba359d85c"],["/tags/高等数学/index.html","ba0cdd484aee725c751929070b49481e"]];
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




