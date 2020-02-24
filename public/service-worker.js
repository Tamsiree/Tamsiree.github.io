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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","151f6370e40574e847126ed07cbbdd50"],["/Computer/Alienware/Alienware更换电池/index.html","cd05aa2b16b7a6b5b4e66ef8ec08f5d6"],["/Daily/Hobbies/Guitar/吉他入门/index.html","8375eb0912cfae91f46aa44debd9ac71"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","dd9cdf4ce6f5c45d028d4080a7dbc980"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","17d51781ac3079f93edf363066cd77a8"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","7dcdae6bf62a71cbc2b2120408401df7"],["/Daily/Hobbies/拟音/index.html","563b12f0982cdda426e353c462973c6a"],["/Daily/Memorandum/index.html","d260b5e8f86ea3c524334a81cde1d97f"],["/Daily/专业术语/index.html","de2e21c3a2860d1dc6155f6c67f73c28"],["/Daily/个人所得税/个人所得税/index.html","55e2ed7219e17c45c1b564edcbc93228"],["/Daily/五险一金/五险一金/index.html","52bf88580f5468eca5793c6d6481bde6"],["/Daily/劣币驱逐良币/index.html","6cd3464a37e260c7b4fb48bff6eba26b"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","95f56ed050436273af30e9f18a180e5b"],["/Daily/生活小常识/index.html","20d5e3bcde6b811708117bc120faf4aa"],["/Daily/网络用语/index.html","bf2cbf8c0bba81a703541a0c07cd6e2c"],["/Design/设计用户界面的注意事项/index.html","f1f733b0d0bdb3ab3815a7578068534a"],["/Emoji/Emoji符号/index.html","c20f7bab9d5c56f1a81cbe391a831a53"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","7483322a77dedf9f95f1be28507b0dd9"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","edd4048ae44ed390d8dbbf7e29e59c56"],["/Game/GamePlatform/Steam/ARK/index.html","da1786189e8dbcd99807b7a9d2926ce9"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","239c6eb773da6a5209f022df0ad25897"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","a6fa26d1896090a199fe75403f5a91e3"],["/Game/GamePlatform/Steam/Steam库共享/index.html","d8627fd677f93feb3e49e61e56a550c8"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","3d418191f35b95998f713dc46238240b"],["/Game/如何独立开发一款游戏/index.html","762d3db7f494d8882e8a6bc2978f54f5"],["/Google/Chrome/Chrome上网助手/index.html","bf4255e7017f74eb285a695e76c72504"],["/Google/Chrome/Chrome使用技巧/index.html","65313c0661fd5913deec78ed68b38724"],["/Google/Chrome/Chrome插件/index.html","1ccf6a6f0c871bf26d558ee17f09db27"],["/Google/Chrome/Chromium/Chromium/index.html","eb72ea97bc716f9226d6587060011894"],["/Google/Google搜索/Google搜索技巧/index.html","a54fa070bb05613671076c0019c6c85a"],["/Hardware/HardDisk/硬盘分区结构/index.html","5621b88d3f2778caeeb7cdff51b36015"],["/Hardware/Router/路由器固件/index.html","ac932e9cc48f4efd2a9148aaf4186119"],["/Hardware/电脑设备/index.html","2446bfcad37c57fe196be5a12c19a5cd"],["/Interview/Python/2020年字节跳动面试题/index.html","9fdbc1ed63587e4d05c65d6df6c1d259"],["/Movie/HongKongMovie/开心鬼系列/index.html","b79a2aabe52aa7988291ed87950c8c37"],["/Movie/小王子/小王子电影的共鸣/index.html","7365207c5673978e68f873750dec3b6b"],["/Novel/盗墓笔记/盗墓笔记/index.html","f0f6afa3972b37d8026857cbe937582b"],["/OperationSystem/Linux/Linux分区管理工具/index.html","11527bdb756eb8bed4486e63a8d94f72"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","ed55d77e5d4b1529925525d408e68979"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","5d63cf910f76937717e9025c9991ded5"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","3be6dc42a0c38ef32692f189b5ac9fc0"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","101bb8a5c70aa1f0bd24c6204f7ae1b7"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","4ca3770235ad4e2211edc80ec1efea94"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","2d5a6799be33bc8adb9eccdd6ddc4e51"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","6f750609394e62652da1f225b3a97541"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","91318ed0758718ccd6557c85bdb6a695"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","1b5fbc93a0afa9f7471377a659177aba"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5a63f60ddea6f7a98a02f93646c20fe0"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","27c16321ebbfb5797f904dcfe2b6a05e"],["/Research/Math/线性代数/线性代数公式/index.html","c7f039fd339aa035eccf78bdfa1aabaf"],["/Research/Math/线性代数/线性代数知识点总结/index.html","98bd2254274c26f77d15fd264c8cd874"],["/Research/Math/高等数学/高等数学知识点/index.html","69cfd5cd56009c9fb7f1b4c110c9b9f5"],["/Research/Memorizing/费曼技巧/index.html","2386da7e237738d7b4885e4ee0372eac"],["/Research/思想政治/考研思想政治理论知识/index.html","6410b753c3578642d8712a7d6f086a92"],["/Research/数据结构/数据结构/index.html","c1fe00fbb7699255a85d9b31ab40be58"],["/Research/英语/考研英语作文/index.html","0413fdc903da1b2685596c5045c0c12d"],["/Research/英语/考研英语词根/index.html","a367ed5a0c87b692a62bbc5e8538f34b"],["/Research/软件工程/PseudoCode/伪代码/index.html","08de8a4d1a42a90af9720514c9b90cd3"],["/Research/软件工程/中南大学软件工程考研题型/index.html","8fd476e6b61e4bb8ab75e1eba76c9b28"],["/Research/软件工程/软件工程基础知识/index.html","33ae11fac69a92dbc74b45cd68b382bd"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","caaafbfea911a988ed560c8022ecf09a"],["/Software/Anbox/Anbox/index.html","28c38b8d2e5ebde7499cb490d2aa19f1"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","55e9e425be185ec85562efd2bde92f7a"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","78efff4955dd9a37e0701758be41b935"],["/Software/Office2019/Office2019激活/index.html","5a46a81b86dd5b6dae520b7b9b816c50"],["/Software/Pycharm/Pycharm激活码/index.html","4cea31d5d584813d776d53aab5968d45"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","63b834d994c15f987dffd698562a786f"],["/Software/UltraISO/UltraISO/index.html","346d24780bcf6e32bbdee18d72f43c44"],["/Software/Unity/UnityHub许可证手动激活/index.html","c270112c07a0384ac01a99fb038e4903"],["/Software/Unity/Unity使用技巧/index.html","2acbd193409630b9d314f1dc01062808"],["/Software/Unity/Unity动态加载Prefab/index.html","1a4ef2f80b2bccdeca777a5fa96e38f4"],["/Software/Unity/Unity合理导入模型/index.html","ac437a6593e050d69f49de251b05486f"],["/Software/Unity/Unity的Canvas组件/index.html","66e2784ba4b09b5686265dbdfd0a93a8"],["/Software/Unity/Unity问题归纳/index.html","b2326dd8df520f259f487cd997d83241"],["/Software/VLC/VLC使用技巧/index.html","739d4a38f984aeb1289bf78182d7e54e"],["/Software/VMWare/VMWare/index.html","443323c185163d0fb76fcbaac03224d7"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","03c6798ce864ea8172416f98a199f7c9"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","b6823c501f2a3608faac7dbff09e68aa"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","8d170e91bcdb98b1d6c42a3f8d8739c8"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","61d488c727f0b6b700ea892f041a7e90"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","162caab1245c31ee9c7484b24e6b5c9a"],["/Software/Windows常用软件/index.html","4f1b3f87ca6d81f34e670cf42134c377"],["/TechnicalResearch/Android/Android之JetPack库/index.html","7f40f82f267735d8b730f76b2a505dd0"],["/TechnicalResearch/Android/Android原生开发现状分析/index.html","e2708ac6f9b3a1c66f3e6fd4a039ab0c"],["/TechnicalResearch/Android/Android强制关闭软键盘输入法/index.html","768834805f129031dfe0f3448ccc424c"],["/TechnicalResearch/Android/Android研究EditText/index.html","55a9bc6b0feec3358e50a73c93b2cf17"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","1b312a9d1290102d06ba56e629471eef"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","1c3d1571f9eb9863e26f157c416d48d6"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","d76269875bd35ec31f851ac9f2eda054"],["/TechnicalResearch/Android/UnitTest/Android单元测试/index.html","dfa2e1d7c7714ff7b66b635d0119d07d"],["/TechnicalResearch/Base64加密原理/index.html","09825517b8f90df509c0bf4d39c76c2e"],["/TechnicalResearch/CDN/index.html","df32cd281544f1d11506317a8f55b659"],["/TechnicalResearch/Git/Git/index.html","330d29ab817e8a6d6933998ed86c13b4"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","00db3187e7203ec1bee6e7ab4a6d3915"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","1f1fa88b1c4d94154e105afb0a3a83f2"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","e6d97497b52ed4bc5c45e9822ea16420"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","e2c9a53a5029750110dc8dd52d6e40db"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","be30e5c66495222e9b67ea16dc8b24b8"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","31aa3a4e6198b20d61d7dd8c0540c61e"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","4b263f2b341b78ee40352a6d070951f3"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","53155d1e3c76ce59458a8fa55ad33ff0"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","6ef8a20c19e3213384ae4cb142b11144"],["/TechnicalResearch/Java/Java基础快速入门/index.html","21fac54a3e3bc0734ade7d0e42221bfe"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","db144541e34cd33e4311b98303ab0a6f"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","095efa3795bd264f8ca6d29565e9f2c9"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","8038549768a6e79ce866e0438a87698a"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","4b83cfc6c1e9826b054e65925c766fec"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","bb3d0a973447664ca878f60c446ab01a"],["/TechnicalResearch/PT站/PT站/index.html","aca7aaec86bf04043c719d2c07020355"],["/TechnicalResearch/Python/PythonExercise/index.html","2a1fb1a391ec37e287fffb256c21638f"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","7375a7936bbc1fddb04a6986ac9db068"],["/TechnicalResearch/Python/Python问题归纳/index.html","5ad67bf105cf081fd28edec142114565"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","fcbaf8cc511f0539a67cd8f30f2cf7b9"],["/TechnicalResearch/Regex/正则表达式/index.html","9cd5ce5fc65a5c885e4249c1d4859568"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","fe3c6016e3254f79825f46986e08192b"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","b3f9a1f0201ae26bb7d2e03d796c14d3"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","f0eb25b30f6bfdf339a234578433dc5a"],["/TechnicalResearch/服务器常用端口/index.html","c20674c1b824a74804e3ba6684324b19"],["/Teleplay/亮剑/晋西北铁三角/index.html","38a900404c1296c177d55bc798de7022"],["/Teleplay/仙剑奇侠传系列/index.html","8cc9d8f547ceb5b7e529131ee5f08c63"],["/Tool/Music/网易云音乐/index.html","960372a29f0041bf19dd7c3143e1da18"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","bd773d58ed0c62ce607490ba0a59b3b4"],["/Tool/百宝袋/index.html","a7ccd1c2ca1d4c3085b7f2e5d39629cb"],["/about/index.html","41945753f3fb5a1532de07a36914a8a0"],["/archives/2013/10/index.html","df4f48d1396cbaf13b12ec0b81cb9c0c"],["/archives/2013/index.html","3c90536fab809f6448cbb4d5e50dbd46"],["/archives/2016/02/index.html","3bce02f695219109cbaa5a65fda217f9"],["/archives/2016/09/index.html","13fb073f4add870bbc85755f84a50aab"],["/archives/2016/10/index.html","07887872624e0340c0d31d04f5b721b9"],["/archives/2016/11/index.html","cacfabceed3975a3bbed848c380bd206"],["/archives/2016/12/index.html","d29e739dfd26739d8139e6abf97b833c"],["/archives/2016/index.html","6b2f92ca9dd5b31bb19edacaa20ad873"],["/archives/2017/03/index.html","0d8f8fea9406c6ea9be9cb858246b0f9"],["/archives/2017/06/index.html","6434bb24bb47943401572ecac1dcc15d"],["/archives/2017/07/index.html","352d5f81423f749ace3e6d2c713da2bc"],["/archives/2017/09/index.html","c5680b7cf4d4d8ee76b989757ddfb96d"],["/archives/2017/10/index.html","202ad726a966d35f483f9dd9586e8c5b"],["/archives/2017/11/index.html","f2a2750849f5b9b26f78437ef2f51557"],["/archives/2017/12/index.html","65e721dbc7d839be9cfe8413f81aaf0f"],["/archives/2017/index.html","5ee669fc086f0344e07613d97db24362"],["/archives/2018/04/index.html","bed0ca8c434979c1145ef5418e20ee64"],["/archives/2018/08/index.html","5f63ac7e76c7222e6651190cb0fda0e0"],["/archives/2018/09/index.html","e10cf9d34e7cf8e2a61e076502cd5b04"],["/archives/2018/10/index.html","f3d0cbca2cbe571e1c5714bc1149aade"],["/archives/2018/11/index.html","70f33d95bbba292f607154f00d6d5355"],["/archives/2018/12/index.html","cf6e056d8c5b68b6a01ae2d285b69448"],["/archives/2018/index.html","1d00ad8139b604b30ac47796b3edbb49"],["/archives/2018/page/2/index.html","fe5c0742c3d1a92b59da279886cec1f1"],["/archives/2019/01/index.html","f605928f462a4dd29d368c1e3ce33c10"],["/archives/2019/02/index.html","6c9e60ddfb8d57f0527bd4e6d215512d"],["/archives/2019/03/index.html","fad2f4f2e4d435323eac976f174d218a"],["/archives/2019/04/index.html","122a7b60a4f13011490cf9af3c31c544"],["/archives/2019/07/index.html","f13d1bf92c3fcbc982ca2f82a1600a40"],["/archives/2019/08/index.html","a6477ead47a118dd4e75a19f7f7931c2"],["/archives/2019/09/index.html","9fa5b1fed5f2fa6aa8feb13bac788fa5"],["/archives/2019/10/index.html","88f7323ba09fbd7e995eb89ef0c2b449"],["/archives/2019/11/index.html","2f53603c0c961a3b0bbfa4ad96fd0c11"],["/archives/2019/12/index.html","0ce24d76270ae46bfe9246bd9fc2fb71"],["/archives/2019/index.html","a87719e91e7b58a4c3dba82f62db9b4e"],["/archives/2019/page/2/index.html","d507beae62966a1edbc0b86f4a1be66c"],["/archives/2019/page/3/index.html","1f44636af34c22e4204b0b485814d0b0"],["/archives/2020/01/index.html","bd6175c9c5b282600ade51622b3bbf43"],["/archives/2020/02/index.html","509aae2648c9799953a72209a7eea0b9"],["/archives/2020/index.html","1a4d8221e2064338e1a0ce356b6654fe"],["/archives/2020/page/2/index.html","e7ff003b20c3d4d5205c517b050ec894"],["/archives/index.html","7e2d778f718747f9a4a9111a40916a7b"],["/archives/page/2/index.html","076168c0d985fa099cc0edaa22178d93"],["/archives/page/3/index.html","a83d4d396bab6d0bdddc9bf4cc05b623"],["/archives/page/4/index.html","032a68558ea499d5158804ac482534ae"],["/archives/page/5/index.html","759687253ac16ac8038b9ed32aefa5dc"],["/archives/page/6/index.html","9e3159b98d04a58c89b1a9b14f8a2158"],["/archives/page/7/index.html","ab6df994187b78b3aa085c31fcec0391"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","6168a94e5c10df150a90615c5e23c9fd"],["/categories/Anime/index.html","c8f13a9cfd80019071ec66af29a332a0"],["/categories/Anime/宫崎骏/index.html","f8025d8d39b079732801a0d037d2848d"],["/categories/Computer/Alienware/index.html","0f060291a49441cedcf5cf730147989c"],["/categories/Computer/index.html","165fbceb9b9f6eed9cd4f1918fc659ae"],["/categories/Daily/Hobbies/Guitar/index.html","5f87184ddd2e9e7cbcb9eab13df8ed99"],["/categories/Daily/Hobbies/PersonalDiary/index.html","283215fd82f7a0756ea5a02227ee52d4"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","8db9acffd4346991ae0e2e3cb1b8393b"],["/categories/Daily/Hobbies/Photography/index.html","7ca2044ba1e33b71d28d7e4aae46996e"],["/categories/Daily/Hobbies/index.html","8a96e169bff39cc83d2b2b4beb2a1a8d"],["/categories/Daily/index.html","ae79eeba42c037ae42192d4b6c01e5ca"],["/categories/Daily/个人所得税/index.html","2208c01cefaf44596521d739e80f4252"],["/categories/Daily/五险一金/index.html","64848188fb779212829b8a5724309e3e"],["/categories/Daily/新型冠状病毒肺炎/index.html","c1b1db20303bed870033490152ffc475"],["/categories/Design/index.html","342227e8e68b93f509b2ab54400b5f7e"],["/categories/Emoji/index.html","21a19dbfb71ce69bec25851e1c0442cb"],["/categories/Game/GamePlatform/Lutris/index.html","cb5d7965ed0ff33dbcee63e43c1ad3d9"],["/categories/Game/GamePlatform/Origin/index.html","06d8875a137b5e0b74c73dcdc84a1787"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","80abd5569f9336bf06745fa4b0113db7"],["/categories/Game/GamePlatform/Steam/index.html","fc62775c498628862a7b96a62e52c5bc"],["/categories/Game/GamePlatform/index.html","cded6b5343e86c3c690bdac5f96b9bd1"],["/categories/Game/index.html","c9dfe5a853a975c1905541bec2f19599"],["/categories/Google/Chrome/Chromium/index.html","726ebdd584c1f1c8d3a8e0cdcefc5284"],["/categories/Google/Chrome/index.html","f8c15003e08a84da8b1bc04f067450cc"],["/categories/Google/Google搜索/index.html","bf766cbd516eaba775d603dc8cdc4c64"],["/categories/Google/index.html","b1844c0f8ccb9970455fd22087ca352d"],["/categories/Hardware/HardDisk/index.html","c3ac94d057d3bec058b803cf9a0f877b"],["/categories/Hardware/Router/index.html","e0cb56e69069f3474825e64e285e91de"],["/categories/Hardware/index.html","2a10ad3371fe4c8799982c359098ab18"],["/categories/Interview/Python/index.html","b6e1fbd297c4237efc23063376235c2a"],["/categories/Interview/index.html","c9c62e66a38884e7bb1539cafe8763bd"],["/categories/Movie/HongKongMovie/index.html","ef327b3656588ba7ebc5e6dd06f004c5"],["/categories/Movie/index.html","6d68efb002af9fa3f6e5f9bb75a85015"],["/categories/Movie/小王子/index.html","9e3efc2a5119b7d530fa3bef42ac483f"],["/categories/Novel/index.html","d08cada2d3b603c4485541c062b62f8d"],["/categories/Novel/盗墓笔记/index.html","be3c6863a335baa237d4a50c267aef81"],["/categories/OperationSystem/Linux/Manjaro/index.html","83f3428b7fbd7f078393760280a1b42e"],["/categories/OperationSystem/Linux/SteamOS/index.html","eb5e658a4f48859b76c1c455dbe2c45c"],["/categories/OperationSystem/Linux/index.html","8581a715b44a3a48d15c411f84bf4005"],["/categories/OperationSystem/index.html","07d595b5ce0727c40a2f585872eef054"],["/categories/Research/Math/MathJax/index.html","5d443a390740f6f2002ccbdcf8e7ba56"],["/categories/Research/Math/index.html","c3ab5a75a943d7610d2c9edb92d2ec24"],["/categories/Research/Math/线性代数/index.html","ca369f5b12010ec6c20d0c69239c1edc"],["/categories/Research/Math/高等数学/index.html","2faf01cd37f84cf2622d61eeab69aa72"],["/categories/Research/Memorizing/index.html","ea9af210393e6c5a98fdcf8eb2329228"],["/categories/Research/index.html","67fa5874f9faaadea1d1d898860bf773"],["/categories/Research/思想政治/index.html","94b8034ff27b2df8b0720893dfe00372"],["/categories/Research/数据结构/index.html","8e6935fb61b2cf065a1c2f5057afdf2d"],["/categories/Research/英语/index.html","ea0e91a36629ee9a84c97d52d618c9b5"],["/categories/Research/软件工程/PseudoCode/index.html","074c1f35f52af748796a5878787eec99"],["/categories/Research/软件工程/index.html","a1f66f3094d5bd27616e6b0b1654d79a"],["/categories/Resources/index.html","a496380afcd2920635401a07ad9a2bf8"],["/categories/Resources/游戏资源/index.html","70b39b409dfc80c5bbcfeaf925a807f5"],["/categories/Resources/游戏资源/微元素/index.html","f7e46e16da91237eefe2fe604455f4c8"],["/categories/Software/Anbox/index.html","6503ef0a90e222c565b5cc0852686d8b"],["/categories/Software/AndroidStudio/index.html","c8f183d2b0e9fa77d282bcd2803980a7"],["/categories/Software/Office2019/index.html","b431565301e208310513992e01302d9c"],["/categories/Software/Pycharm/index.html","e4bba2bc2f39e6e44a7f936d160e6c65"],["/categories/Software/Thunderbird/index.html","b9dcdc84ae094929bb1ecae2efcc0a8e"],["/categories/Software/UltraISO/index.html","bc11723d50a36caff97be51e2491ac48"],["/categories/Software/Unity/index.html","880041f1c005f9bac983d676872fb77c"],["/categories/Software/VLC/index.html","7efe7bfaa1ea860d68d790a8fa35566f"],["/categories/Software/VMWare/index.html","ef68fb7437308f4346d3942379a76fdf"],["/categories/Software/VisualStudio/index.html","8dd7d70934b28344ea72763f32207942"],["/categories/Software/VisualStudioCode/index.html","15aa42db7d09c6b337be40a15e0185c4"],["/categories/Software/index.html","624bb08b79ba55c27f4961c56e0a99b4"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","f43aea3904be8c20893cdf8d22eb7fd8"],["/categories/TechnicalResearch/Android/RxTool/index.html","607c6158be96aa03cb62169d6b545807"],["/categories/TechnicalResearch/Android/UnitTest/index.html","38b4c9f20d1a0ee016cc942d6c9da64a"],["/categories/TechnicalResearch/Android/index.html","b93c83e4211876d654c3f6c50a793b4b"],["/categories/TechnicalResearch/Git/index.html","d7e1075f3185e4fbb094fb6d294cbc18"],["/categories/TechnicalResearch/GitHub/index.html","4cc1fd52a926949bb00a6b3e071bd6a4"],["/categories/TechnicalResearch/Hexo/index.html","306e3f88dfacac9d07ebf24281e9d955"],["/categories/TechnicalResearch/Html/index.html","58d3907bbd60c2bfc84472857319cbbd"],["/categories/TechnicalResearch/Java/index.html","5af7daeda40455ac17403f5c3f81a67c"],["/categories/TechnicalResearch/JavaScript/index.html","14c1e3e53fcedf196c37e5caafcc6b78"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","23e76a24b9c48ec1fc45988ea2a1b7a9"],["/categories/TechnicalResearch/MachineLearning/index.html","a7187eacc949de5712ecf2af8168e6ba"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","dc73de744c92e565690fbad6b29b4930"],["/categories/TechnicalResearch/Markdown/GFM/index.html","7f452a460507faf5cff96093dbd3ff3d"],["/categories/TechnicalResearch/Markdown/index.html","e732902050e944a5f727b773f77a17e3"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","4064ffe779e31aeacab4cf011eed3cc8"],["/categories/TechnicalResearch/PT站/index.html","5b7062e2b31afbc356bb3d98eb077bc4"],["/categories/TechnicalResearch/Python/index.html","6daa2fa717e02ca1f4c97ffea6ebc480"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","bfa6775e100cdaced109e1d7b9257326"],["/categories/TechnicalResearch/Regex/index.html","7943fd01bb13529d123b8a5c7b0f30ed"],["/categories/TechnicalResearch/Shadowsocks/index.html","ceedec1370c9c41ca7d46cf63e179cc4"],["/categories/TechnicalResearch/Spider/index.html","47cc224b363d97a70a794ece4671e25a"],["/categories/TechnicalResearch/TA/index.html","744c10df94a369c39a1ccc331a1b7dd5"],["/categories/TechnicalResearch/index.html","119de2db76ac05107bcc96d716466584"],["/categories/Teleplay/index.html","ef97270f25d13527b54dfda7cdb00166"],["/categories/Teleplay/亮剑/index.html","829cd60ae6d71b6e08cbb74756294013"],["/categories/Tool/Music/index.html","3bf5c64e4d93399940b5073b33ce3ad2"],["/categories/Tool/Wallpaper/index.html","cc5fbd12431c0780b4dc048c64fb4a4e"],["/categories/Tool/index.html","c1c08ba40c7951f3508d7c89da46e220"],["/categories/index.html","d95903c63005010e6266cf23b153c72b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","247b72dbbd598b7389826b364d82f796"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","812cba946f627f1dd770ae93a1f23f93"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","643f34d092853aad680cb3520026f36b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","34000772b3ed2f0816ef1bac0995a59d"],["/movie/index.html","59555e8f121edc3e0e81eaada2f5013b"],["/music/index.html","b62adc7dbcf2f4b8f2f615f5eab1e2e6"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","d674eceef0537548c6ab8d0c86a93c52"],["/page/11/index.html","de0754d08c94a0f7664c0fee0708141d"],["/page/12/index.html","b5de4c0393b6f2948f2d6d31195fbfac"],["/page/13/index.html","ca73c9266b27c8f59eb027fda5c38052"],["/page/2/index.html","2c554866119e5dab99d6b8b2db5e61e7"],["/page/3/index.html","3f01f48d952066f2d99776ce91b3f088"],["/page/4/index.html","47350b49430c0d13de3cc3faa89edf6d"],["/page/5/index.html","ea9f59bd2cd78586b5ec096041aaae2c"],["/page/6/index.html","a2aa2294e07ab61ef618f8fba855f884"],["/page/7/index.html","f4a945d4cde83cc8b6842d5df37b9883"],["/page/8/index.html","66eef39360ecc501187f680df7d9bf20"],["/page/9/index.html","cb921864560b8d102d1ed2f0a6e74d1d"],["/tags/ARK/index.html","c558cf917b3054ed26e1747698724bdd"],["/tags/Alienware/index.html","9a67f2480450980b02d52c7d566a79f5"],["/tags/Anbox/index.html","3f586db2fdcfaba6436a49dea9d6c970"],["/tags/Android/index.html","117c9b30d5c57e6e6e1aa2d6a576322d"],["/tags/AndroidStudio/index.html","eefa9e5886f0ea4a2c0ea2b19b736f88"],["/tags/Anime/index.html","dbd7f4551db6b0a4278d948240ac6fe5"],["/tags/Base64/index.html","8686243f6119282ce3d38bdca81906e8"],["/tags/CDN/index.html","b05c41b31467feb361ef1b2f6c6c4dd5"],["/tags/CSGO/index.html","b8ef0e7227a7065b654fa4b929f9a07e"],["/tags/Chrome/index.html","1f9975c8c50cf5088027e949ee7785d9"],["/tags/Chromium/index.html","0387a5334525d67546a8d6c2aa3aa57f"],["/tags/Computer/index.html","305f55df05c08da31f4e91596adf26ac"],["/tags/Contributor/index.html","539bd98e981805d844a296a92ad520ce"],["/tags/Daily/index.html","6a3350437dcabd81ea522b465ea6d082"],["/tags/DeepLearning/index.html","509ef512146fd49c64bb17f7cd8e8192"],["/tags/Design/index.html","f3f578ae2f50de6603cc526c2a323439"],["/tags/Emoji/index.html","5d6bdeb9bdba4286b87393c222a86849"],["/tags/GFM/index.html","4a1ba8badc03970e1697d6b618d5cde4"],["/tags/Game/index.html","c5696bec05a07de9220ffe57bfee3b72"],["/tags/GamePlatform/index.html","b2db6b2027ccae5394906dcfea378521"],["/tags/Git/index.html","bff0de11584e7875c65ba41a03de8538"],["/tags/GitHub/index.html","7a273ebb6c1c4247c3b12cfe03e63c07"],["/tags/Google/index.html","244002210890cb5197a057d3c6fd0450"],["/tags/Google搜索/index.html","fcf52ba706fd77258b5686296323f910"],["/tags/Guitar/index.html","db6105f308be4747300e94be4d9decba"],["/tags/HardDisk/index.html","cc58fbde6daea11e478fba8621eb3253"],["/tags/Hardware/index.html","6cd0f341cb3ab6f94fa6e355a0f88aca"],["/tags/Hexo/index.html","16b212631d6e9cdb1b5aaaf2fbd48913"],["/tags/Hobbies/index.html","7b07f7e5af7cf6015e29154bccf3665f"],["/tags/HongKongMovie/index.html","a265d0dc5241bdf94e56545a1838ca2e"],["/tags/Html/index.html","89c1384a3e99424063d6d936d577a606"],["/tags/Interview/index.html","dabdac8f02c25025c5ed78015c79eb41"],["/tags/Java/index.html","ce042d64cf9fc2915f6ef626cb11f593"],["/tags/JavaScript/index.html","69750aa4ef9c2ee83963a78d18b50019"],["/tags/Linux/index.html","048d56f76f06158a53f3a9ca1e322925"],["/tags/Lutris/index.html","117d31590979aa754d356b1d010257a6"],["/tags/MachineLearning/index.html","be57d6aca2c8981b96b0c728aa660754"],["/tags/Manjaro/index.html","1d3d0e52d99f4fc91e30536783e5a566"],["/tags/Markdown/index.html","d214608553ed486b6d7b38aa59b8a4d5"],["/tags/Math/index.html","ef3b6b1c59ba7e7926fc426009f6153c"],["/tags/MathJax/index.html","2a798aa771db7220468fa6b7eb09c953"],["/tags/Memorizing/index.html","f81c736ad5cb207b3493d09c0c2b0fbb"],["/tags/Movie/index.html","8888c61c62417104390dce17aceaa6e6"],["/tags/Music/index.html","f980eab5a093f2e16bde841ce0e4c9aa"],["/tags/NexusPhp/index.html","ec6726cc65bbaf2fd18d99dc49ea7040"],["/tags/Novel/index.html","b6bde6a25619f070950d069db5166f98"],["/tags/Office2019/index.html","f15987080bffbc9e4eeee5ea12f32b88"],["/tags/OperationSystem/index.html","c0af743e2920b126c75e4eff7593e5ea"],["/tags/Origin/index.html","8fb238c1697f26fad68129def0723fe0"],["/tags/PT站/index.html","75d499cceabe07e39c913a55041534c3"],["/tags/PersonalDiary/index.html","2e3c8af419031355cae34ed3f61db039"],["/tags/PersonalPoetry/index.html","4afa6e659bd430498ca7b9c60278037d"],["/tags/Photography/index.html","0a11352f85c0b1b30fe200a03b087264"],["/tags/Port/index.html","f15c609a5623de34ae696463759f0cab"],["/tags/PseudoCode/index.html","99d6d15b944377e11001d59752b1b0fd"],["/tags/Pycharm/index.html","ccaebb19dd013142afe56967a4a4fc03"],["/tags/Python/index.html","610a0b1f9cbb41c5c3bd13ef2f019bf6"],["/tags/ReactiveProgramming/index.html","26ce36b506a4c37e0c3b400438a310c2"],["/tags/Regex/index.html","c2227e33d98fa8f9b614b5b2009de021"],["/tags/Research/index.html","4e7e6142eaca3df0655a27333f2f5894"],["/tags/Resources/index.html","d5b7e6b76ff0b386f68318b6f8b87805"],["/tags/Router/index.html","402a48f7a2b28e5e6b91c7366fe5921f"],["/tags/RxTool/index.html","30271915e7a3f05fadb1f1991ba46e6e"],["/tags/Shadowsocks/index.html","3fa067f8ba8f09122bbff87bb96d8771"],["/tags/Software/index.html","cccc5de66c11ea4b65c3ed9d3eed6e50"],["/tags/Spider/index.html","3fafb2320cd9af3df6480cf412782bef"],["/tags/Steam/index.html","96692610300f714efae3c549639046ab"],["/tags/SteamOS/index.html","9241c0f1547df22466ac862f317dfa75"],["/tags/TA/index.html","dee678eee7850f03d161c6bfd74e99ad"],["/tags/TechnicalResearch/index.html","ae6faece58db3f31e97452abb5681bd7"],["/tags/Teleplay/index.html","9d5b41633811a040570de4da94949639"],["/tags/Thunderbird/index.html","2d7d4fa8908496af4477f64cc97a9723"],["/tags/Tool/index.html","adc7598d0985798f651c85d97b98061b"],["/tags/UltraISO/index.html","0c97c56ce9aa4a0df3dea95f4df07bfc"],["/tags/UnitTest/index.html","476620199a592b48c5fded2d6f075271"],["/tags/Unity/index.html","942cecb3ae577356a6bd87cba3d1966e"],["/tags/VLC/index.html","b7933a0b4902b3736c737f95be882620"],["/tags/VMWare/index.html","e593499b2d46f8a324f42921093847f0"],["/tags/VisualStudio/index.html","5fac4fa5dace381812c44886c39bb2c6"],["/tags/VisualStudioCode/index.html","73e46aab1c8cdda459aad9987abbd4e8"],["/tags/Wallpaper/index.html","7a6775146128424409d6ee55eb0e09ba"],["/tags/Windows/index.html","a8102b351057c0795faa68560dba0db1"],["/tags/index.html","9544f72a17203d61aff96bda1ecfe52b"],["/tags/专业术语/index.html","d6d03a906e53f346b6d3dc9606cb3481"],["/tags/个人所得税/index.html","dd6bf5b6bd77b24cd0c79e3147797d5e"],["/tags/五险一金/index.html","2090acca46d43823fb5d69a277d1eef2"],["/tags/亮剑/index.html","4f77bab3d1fb4615acf91362ba083451"],["/tags/仙剑奇侠传系列/index.html","f7b3daf458b6728e355bc47f1e5d1eed"],["/tags/劣币驱逐良币/index.html","5995e20e280f4a5a20c5a7eba2b51e36"],["/tags/千与千寻/index.html","fd6c4e1533ab714b10022bb9831d194b"],["/tags/宫崎骏/index.html","2df77fad0e9c205767f0135d1d356ec7"],["/tags/小王子/index.html","2f8f54a2caf5b9c09d8d353af88db5fa"],["/tags/开心鬼系列/index.html","dff3fc661c36f1154cc951951f0febf9"],["/tags/微元素/index.html","c366298def7b26ab675deaa02a735a25"],["/tags/思想政治/index.html","836641ad083f1c7590471fe8ac69e979"],["/tags/数据结构/index.html","bb4892c38759f69dc67e4d5605c09929"],["/tags/新型冠状病毒肺炎/index.html","f72d1c766e2a993fbc74ed39a53fa5bf"],["/tags/游戏资源/index.html","0ddc3a3e47deba3cd1dfe831da156cd8"],["/tags/盗墓笔记/index.html","98dce028553997d81e879fc703b7b76c"],["/tags/线性代数/index.html","e37df957b17a8839b112fac2f92d99a6"],["/tags/网络用语/index.html","0fbab68cd6bce9d55d7a132832fa72b7"],["/tags/英语/index.html","7998e2d2e5c7e36b51a2d87d6b3b9cb5"],["/tags/软件工程/index.html","a5fb37eebdac23c89f22cff2c394f8bd"],["/tags/高等数学/index.html","200c87360b3386c85d171ac211b03993"]];
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




