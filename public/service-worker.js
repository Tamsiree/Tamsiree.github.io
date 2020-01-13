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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a83ce0c321d61b0cc86d6a395f97e061"],["/Anime/小王子电影的共鸣/index.html","f6e3e432baba12fda9a38a4a329930d9"],["/Computer/Alienware/Alienware更换电池/index.html","afbcd5c599c531f6cbf63d5227aee040"],["/Daily/Memorandum/index.html","09684bf338be1d566ae1702797c8587e"],["/Daily/生活小常识/index.html","aa89a92d963f8afa2995b93997edaf0a"],["/Daily/网络用语/index.html","717392f082084e291838ffea9e5ca688"],["/Design/设计用户界面的注意事项/index.html","c88e8994866c097214bf8138acb8f526"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","5503ad6a584ff9e218afd15d588cd7ae"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","7563c5ee02751d18b69b8be081fb7975"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","8f5bcaac045dd10a9e80074c6279d49a"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","b5c443e6a20d817b8eb846b8e0f08f28"],["/Game/GamePlatform/Steam/Steam库共享/index.html","b28623028dc2a5c2fa0a6c9400a20fc3"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ad8c35bbc252036018528e1ad3731ea1"],["/Game/如何独立开发一款游戏/index.html","2523fe7d20211c246734aca124053405"],["/Google/Chrome/Chrome上网助手/index.html","98331ec80f7f9395786c9308ff74af12"],["/Google/Chrome/Chrome使用技巧/index.html","24519ee829760c0d7eaf42d88def6d60"],["/Google/Chrome/Chrome插件/index.html","aa39a4838a33cf19e4391ff256369e5a"],["/Google/Chrome/Chromium/Chromium/index.html","f92d62922e273d12686979ca03d25185"],["/Google/Google搜索技巧/index.html","3968952202869253988bef8f2c48befd"],["/HardDisk/硬盘分区结构/index.html","33f373de6b0c4dc783f658d1f18da425"],["/HardWare/Router/路由器固件/index.html","e02fd2e07f175297780c08eb89214dfa"],["/Hobbies/Guitar/吉他入门/index.html","b3aab739200f893f2a5859ef9f64ea35"],["/Hobbies/PersonalDiary/芦江曲/index.html","c202e630f9e7bb6fbd6d6cb88ab4b8fb"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","328dd59867f0d0dcd0e8446a84ca3bcc"],["/Hobbies/Photography/摄影入门手册/index.html","091bcd171f7e796c0a09bb6cee4f0d34"],["/Interview/2020年字节跳动面试题/index.html","8a1e21038a11a7acf43efe7b731f2c56"],["/Movie/HongKongMovie/开心鬼系列/index.html","28a1446d2303e9301fef0f6e5a766be0"],["/OperationSystem/Linux/Linux分区管理工具/index.html","1a9d83979148baf4b7d6c0c7f142cbd5"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","c6b9610ebf399799170905e4d2e3e848"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","6267327579ec075dc563072c8aa5f781"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","c1b0401bc8cadeccbe48a3230daf3891"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","6208bb479c84f9aa49e432c4f9d2a89e"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","44fb91e02cbc8529776ce2d5775c9642"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","b35c622faf84f195ef31d019aeab1fd9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","5e31bcdb91adfead7fe0ac14f0b57b41"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","93d21cd232bac9255fb1615824336e3a"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","ddeafde8947a02560d8d91ed6f617fc8"],["/Research/Math/线性代数/线性代数公式/index.html","43e2730521b714222999e0c2be5a0782"],["/Research/Math/线性代数/线性代数知识点总结/index.html","6ff406510c7acb1d0ad890279b4a0d03"],["/Research/Math/高等数学/高等数学知识点/index.html","e818ce73f72c8a87891c5479b441af63"],["/Research/Memorizing/费曼技巧/index.html","625a517710d264d6e68431a40920dce9"],["/Research/思想政治/考研思想政治理论知识/index.html","8a421fb18f9d8d299fe39cc7d1982598"],["/Research/数据结构/数据结构/index.html","95fe3bf4dd45b4f0a151b914b259a67d"],["/Research/英语/考研英语作文/index.html","77606b2a8d72473db88325ef0b1456cc"],["/Research/英语/考研英语词根/index.html","c432c99fcd5c736a006ddc6552c492c0"],["/Research/软件工程/PseudoCode/伪代码/index.html","2d58e513c7554046ecf228d4dc1887fa"],["/Research/软件工程/中南大学软件工程考研题型/index.html","137931cdf13b79fa10e048aafbe25deb"],["/Research/软件工程/软件工程基础知识/index.html","e967f602f0f2972deef7c5dd0c497a73"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","e84a209e72421135d0ee103efd71fe0e"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","6525f1572db0b758cbd7e81cc4d7965c"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","14345b8e33046239b229ca1c186ad078"],["/TechnicalResearch/Base64加密原理/index.html","734c1fe91646452b9eed5adccbebc1bb"],["/TechnicalResearch/CDN/index.html","3c35ef00ff4464a93fea4e0f4cd088f8"],["/TechnicalResearch/Git/Git/index.html","4530e5d3751e85d3868cc469349005f9"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","208f440c46492a1c57e2c6c67fcff315"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","cfac90154570fdd888718fa6e9f77ce1"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","e3a4f08e74acb1d48e890f19c59d7e6c"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","88b21623a7a630815c36777610657641"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","15e7b0bcaeee08d6b657bb71963523a2"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8f9648da5d2142f28c0e7fdb53b21dd7"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","1180f9a0b8ffc8dae4cfa5fefa1f0b23"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","f6b5a4999f032eac9dbb48ff5d3b46cd"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","69a0a835e3ac37e11a3e4919acf561e1"],["/TechnicalResearch/Java/Java基础快速入门/index.html","9ce8aacd4dd4a8ee2c4c9c206a5e1b0d"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","e67d730b7643840db47b3ecd38068453"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","72c74bf9d3bfc7fd9662805cdee5c34e"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","e967586bed6f98ec222648d88661bd04"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","f8ef728d5329502e8059ef8cb249a64d"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","a89c9a5ddc4afc39086f5c3cd5b0f6e8"],["/TechnicalResearch/Python/PythonExercise/index.html","37af7818c4b60aabaad2e558c180b9c0"],["/TechnicalResearch/Python/Python问题归纳/index.html","2e312d894560c1a132f3f2141a5082c5"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","82bb5461f4d0513ce0953f4a980d6b32"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","7ebcf543f93dec0d623cbeb2c6e6c192"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","7f6849e17dd900eacb1d415cfd0d6ee7"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","3c7408265dc4105fd9af4886b5eb3f36"],["/TechnicalResearch/服务器常用端口/index.html","9aa20e93997accd4629cdf5f1b3bf414"],["/TechnicalResearch/正则表达式/index.html","8670a99a6589a3cbfdd4d7b28511f77e"],["/Teleplay/亮剑/晋西北铁三角/index.html","3e518b1535226f8de2d35875bb19962a"],["/Teleplay/仙剑奇侠传系列/index.html","0cb18eb200786ad1da322cd2c95fe425"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","f99f3866f6b4c2202325f2407a1ec713"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","bc10136d9f9bf515a7b2480144c96cb5"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","60e10a7f3ac201b1f29a50e0532bd978"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","21539c0327709ce77a2e7efbd2f0e356"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","2eeb97d3922d6537fed6af400b913b9f"],["/Tool/DevelopmentTool/Unity/Unity动态加载Prefab/index.html","6dd5a133c99c3b29bec4a73056f254f6"],["/Tool/DevelopmentTool/Unity/Unity的Canvas组件/index.html","6ffd1571d6a08fac9e6d88cdf867df04"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","4c379bed4c6f153e35c2cdae1a855c22"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","7e7106dd9034a43f5f3b32fa46412019"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","20ff211b22722a67f34bc61cdd5dd3a7"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","d7b2955cf5939c44a875a8df738b872d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode开发Unity/index.html","86230ffc1563c2813fe6cafeeb8fc72f"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","e20f265040c81cebff4ae47763fd0a16"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","e79e12e3b20431a6f4b57725957e065d"],["/Tool/Music/网易云音乐/index.html","f079f626aac619b59b94575962e8deda"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","8aa153b20720b83d12412737dfeac596"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","b4c909bf94101cae0a4889a5437e27cc"],["/Tool/Windows/Software/VMware/VMware/index.html","77116a6f52ff5996a88474eb8cc77261"],["/Tool/百宝袋/index.html","d43a8bba45e9c5f8cbbe79514bc810ff"],["/Tool/随机获取在线壁纸/index.html","e0fa514ebc1587cf44da3aa38233730c"],["/Windows/Software/Office2019/Office2019激活/index.html","5afbb2cbb376bf0dff6ddf3b2dad806b"],["/about/index.html","7cb2e114f7d9779c2317d0e47b752685"],["/archives/2013/10/index.html","b964c02450de81dc65d85a1e53f2c5c0"],["/archives/2013/index.html","7930f40d2151a62622454b70a362366d"],["/archives/2016/09/index.html","503db6959f2a873ee9377b2b895757eb"],["/archives/2016/10/index.html","a5f11cc752a8b2e45c64c91ddcfc13c6"],["/archives/2016/11/index.html","476d15b2cf5dec2305ee43e4c02c8e6f"],["/archives/2016/12/index.html","26c5d6708a02ae78684e9d774b51eae3"],["/archives/2016/index.html","0df456155b6b0472dd7be0a3495672ac"],["/archives/2017/03/index.html","9399e42c96e456c13e8996a1fc54c1f3"],["/archives/2017/06/index.html","da78cf8cfcbf215de47cbf5511040b66"],["/archives/2017/07/index.html","7094522436c33b218292fc5d4a4218b6"],["/archives/2017/09/index.html","5a6477635a6930e03581e021e5d2a2d1"],["/archives/2017/10/index.html","41ce982df108f93a5f411e1126900c80"],["/archives/2017/11/index.html","68e0665896b8f0beb10f956bea28dbfe"],["/archives/2017/12/index.html","dd8eebee4fb577c498a9948e892bbeb5"],["/archives/2017/index.html","4f6547489348b7c93fcb78708cc0e5d5"],["/archives/2018/04/index.html","c4356200c239334ecacae64f3deb3e98"],["/archives/2018/08/index.html","f18ff395e933b15ef631b91886023555"],["/archives/2018/09/index.html","e1d2f7c103bbbbf0dfda912679d91db6"],["/archives/2018/10/index.html","808fc676354ff7d35d5172905128c0db"],["/archives/2018/11/index.html","3ab83d8d130ed536f132449cac3f3381"],["/archives/2018/12/index.html","99340dfdc4f0aebc84bbf04ebd1d0ae4"],["/archives/2018/index.html","12623a99e5e5a03b02132822ad1632b9"],["/archives/2018/page/2/index.html","bc7f64c7f948599f1ddb8eb119a2c177"],["/archives/2019/01/index.html","6078ede7ef13dad2fa670732bcccd5c1"],["/archives/2019/02/index.html","e0181faac500519f65c768f815340640"],["/archives/2019/03/index.html","317791efa272ea0f7163c84f50793f18"],["/archives/2019/04/index.html","ebf3b3e74d6f425a4931759d79cc8c2e"],["/archives/2019/07/index.html","dcbe271c37a5b8402b36c586acadbe2c"],["/archives/2019/08/index.html","27bca5f00f6655f508c229340e13eb1e"],["/archives/2019/09/index.html","f4a8247949d4885a4e180d1322e925e8"],["/archives/2019/10/index.html","ea5565616c452a833cf6c0bd825cf71f"],["/archives/2019/11/index.html","665c65460c88ceaa06535bb35350af18"],["/archives/2019/12/index.html","9b0c519a142948a26c2997009e80cd10"],["/archives/2019/index.html","8c9d554afa99ac98cc6a33b6093f3378"],["/archives/2019/page/2/index.html","8d9ff4bfaba0a04279e6afc0392af1f0"],["/archives/2019/page/3/index.html","cf6f72ffa22155faadc1adf248741a96"],["/archives/2020/01/index.html","ac522f7a708aa1918035129bc692ae42"],["/archives/2020/index.html","e144962b13cbcc99a58f79888b52c79b"],["/archives/index.html","e25c8f2efa1a72f6f92945642d99a950"],["/archives/page/2/index.html","f660690194a810dceb3699992b5db031"],["/archives/page/3/index.html","c7df61a0173f4d61c60695b11a8f7c08"],["/archives/page/4/index.html","f6bc951586ab1b1c913962f7fe3a945a"],["/archives/page/5/index.html","f77f89123c2cf44ceaf8112f521afd2d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","d96b64b28a9687b4c2419c3d3fa2a8b8"],["/categories/Anime/index.html","ac251752142b0cd1fb21fdc3ef27d112"],["/categories/Anime/宫崎骏/index.html","4afc3ed8affc24607877ce2a50bcabea"],["/categories/Computer/Alienware/index.html","66f8369f98b7b18c6c9708c60778287f"],["/categories/Computer/index.html","c15f3f902e38f4b553355564cd79a712"],["/categories/Daily/index.html","e99ea8946d251f2706584bac94df267b"],["/categories/Design/index.html","aac3040dc3e83c8f6e21eedb6eecfd01"],["/categories/Game/GamePlatform/Origin/index.html","13b463246ada402f361a71226f43b66a"],["/categories/Game/GamePlatform/Steam/ARK/index.html","04a3533613bf1d501f2b1bd8013a4de2"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","ca696b8b0eaf4ec6e9c450eadabf314d"],["/categories/Game/GamePlatform/Steam/index.html","c2ee65a3b8a1c1d608c3e156f45f812c"],["/categories/Game/GamePlatform/index.html","0f3d4cdf040684835ec8fbd7a1f3d9f0"],["/categories/Game/index.html","3275480dcf28109355b81ac8ebe8bf6b"],["/categories/Google/Chrome/Chromium/index.html","88e0e01bc59aa33f85e8a3671533c60d"],["/categories/Google/Chrome/index.html","7200f43e1e8336b4bcd70d04717cf5ee"],["/categories/Google/index.html","990e12234353da2d5ee1171af63e5e46"],["/categories/HardDisk/index.html","6f635bebf43100b3c42d1df93a481c81"],["/categories/HardWare/Router/index.html","97d04d88da4fcd95b263072523b6af78"],["/categories/HardWare/index.html","c3dedbeb107b9d5c5006ad580a6320eb"],["/categories/Hobbies/Guitar/index.html","0a9bfebac3ca47cd14699798a94dc0a9"],["/categories/Hobbies/PersonalDiary/index.html","33164503ae842910f99bbe67d0c92ec0"],["/categories/Hobbies/PersonalPoetry/index.html","178dec2eec3a1364b0a6cefd46f19768"],["/categories/Hobbies/Photography/index.html","9520f94da061dcef8d46dd4170a366c2"],["/categories/Hobbies/index.html","37b2efdcb9849c09117394e338fb7c08"],["/categories/Interview/index.html","bc3ee74602db3ff831b88a9184b6e118"],["/categories/Movie/HongKongMovie/index.html","f727dcb9358d4e91428cb47f7a02ad39"],["/categories/Movie/index.html","ad7ed784a8e2d3c8a7dbd979df187344"],["/categories/OperationSystem/Linux/Manjaro/index.html","813203a2089dc403356743836efeaf15"],["/categories/OperationSystem/Linux/SteamOS/index.html","437597b5c4b5d732747c117b13901bf1"],["/categories/OperationSystem/Linux/index.html","713386945da75513f2913c04062b6fd8"],["/categories/OperationSystem/Windows/Software/index.html","76fd90e7707aedecab70668ec8803c09"],["/categories/OperationSystem/Windows/index.html","fcaa033ddb96c51808b12f61f990e9d8"],["/categories/OperationSystem/index.html","70dd2649ccb1538859379d18cd597bc4"],["/categories/Research/Math/MathJax/index.html","78adecdaf45bb72ae8be59d1aeafd3fa"],["/categories/Research/Math/index.html","38e13872b5e6a07a69b624e4b4bdff16"],["/categories/Research/Math/线性代数/index.html","46ecd762cef4c77e606ec4779b5132b8"],["/categories/Research/Math/高等数学/index.html","5d572982666f4c21a5ca7671ef43df93"],["/categories/Research/Memorizing/index.html","18b4b0e9e9fdebe4bfbe3af009caec79"],["/categories/Research/index.html","044a5eb625bc80c859d9321bbd7a5609"],["/categories/Research/思想政治/index.html","d3ec58e3a252e097b19c6ad28f53559f"],["/categories/Research/数据结构/index.html","48e419f4b68de6e7fabb8495ff5e2e03"],["/categories/Research/英语/index.html","8f38b1ae26926d2cab80deb5473867dc"],["/categories/Research/软件工程/PseudoCode/index.html","85a2e9bf5cfb7a6564cb2e7b043a5e2b"],["/categories/Research/软件工程/index.html","1ed7a234aeaaa3fbca94d914b83f8a1f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a5063ecdc261eab96e48f8891ee49f30"],["/categories/TechnicalResearch/Android/RxTool/index.html","2a74607d0927dcb21dca272ea7ef1363"],["/categories/TechnicalResearch/Android/index.html","35031234d140bd40af2b87c8929ed9e8"],["/categories/TechnicalResearch/Git/index.html","0653c8e523be63512e38b38133d496ef"],["/categories/TechnicalResearch/GitHub/index.html","553d3b7c2bfdefd388faf70b870cdbc4"],["/categories/TechnicalResearch/Hexo/index.html","9f0458358ef3564b30d7dd8b67eddd79"],["/categories/TechnicalResearch/Html/index.html","18a36ba21c2170c8eedf6a4a5aa3a3a8"],["/categories/TechnicalResearch/Java/index.html","36b78ddf3869c14190f9812270fe6864"],["/categories/TechnicalResearch/JavaScript/index.html","84b879f4400175353d3a10a3c9960bab"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","b2516116296fa9acef886e3f71eebff8"],["/categories/TechnicalResearch/MachineLearning/index.html","60af1e76a102efb937d8e616d1a018c6"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","fd90e8d8e9b47011938ff494101e339c"],["/categories/TechnicalResearch/Markdown/GFM/index.html","9b8bf0fbdb58c1084572765ecaef13b6"],["/categories/TechnicalResearch/Markdown/index.html","b5fcaa8a72952cdef7a77024d64cb2b0"],["/categories/TechnicalResearch/Python/index.html","f9ce08a5b7d87145485aacd47e505514"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","19942a19522aa6964b5cded9b6c65de3"],["/categories/TechnicalResearch/Spider/index.html","a7dedb81d9817df5e061f8a4c6239b26"],["/categories/TechnicalResearch/TA/index.html","39c72724d9ca422aab72f12f57c4cb8d"],["/categories/TechnicalResearch/UnitTest/Android/index.html","64351e4ff6f7ec538d249d9ef10ca05d"],["/categories/TechnicalResearch/UnitTest/index.html","a97e502821206daef7f0d836aea64721"],["/categories/TechnicalResearch/index.html","72a0c0ded89dabec2b67c620ab7986d3"],["/categories/Teleplay/index.html","03e8a16a3a72ff57978f161927c6e07e"],["/categories/Teleplay/亮剑/index.html","fe36f9a866985b5eb4b9853ea571ed5d"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","5c129199622c93d6c9fe06d8fe8bfbb9"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","aa3b58760a49a5a32eca71d04577c649"],["/categories/Tool/DevelopmentTool/Unity/index.html","73b6a6b837ead9493564cdfb96ede197"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","50ee1064386a3e3559edc2771ef8b390"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","a747c650c459232babe549f5c38afe71"],["/categories/Tool/DevelopmentTool/index.html","b52438062c1fe93c81ce22f53583e0b6"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","c749f0319e09ab802c6a94406d08910b"],["/categories/Tool/Linux/Manjaro/Software/index.html","42084fed33cd6a161a8acd5cb5e3097a"],["/categories/Tool/Linux/Manjaro/index.html","9c541ca6c4308468059806ef3df99e8b"],["/categories/Tool/Linux/index.html","2ef149f4c1eb1f876ca33e14b4baf96f"],["/categories/Tool/Music/index.html","cee646b45621506ee4d3a140cb5040dc"],["/categories/Tool/Windows/Software/UltraISO/index.html","af5c324e9c3edf6c021acb885421b6f6"],["/categories/Tool/Windows/Software/VLC/index.html","aeecded6b518c3b037682c82a226e5a1"],["/categories/Tool/Windows/Software/VMware/index.html","78218163c8960adbe1a1ccd6995db068"],["/categories/Tool/Windows/Software/index.html","ff67e7dcaed4b62dc032929fc85c5963"],["/categories/Tool/Windows/index.html","3dd4107fb6bb55db546f48f4af5e2fab"],["/categories/Tool/index.html","8474ff0ee390269e3a09e87e71f545d9"],["/categories/Windows/Software/Office2019/index.html","04346e123a7cb1c0eabed788c7bb101d"],["/categories/Windows/Software/index.html","41806f546b694b8a9e92dbc37d6b2d87"],["/categories/Windows/index.html","7ec38937c491df3a93162e138c536427"],["/categories/index.html","235c8a61ee8d45cd86ab83e082fe802a"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c2e03958c75a829b301e466f8fbbb5bf"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","ed7cc97a7d5c4a28edbae569c3f751d7"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","f832899e4d5b2700a9984b80cda06608"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","74d9c1f39337a465b5093b0149ada637"],["/movie/index.html","9652d34e8840aa04ddb7a636c75a9c1a"],["/music/index.html","d2c8cad31889992f9a895bc52d6ca66f"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","dd406fe5a5569d30216f0c697984a51c"],["/page/2/index.html","237cfb73a011165de742656755a380d3"],["/page/3/index.html","b23798f69bc0ea6f3ba7fd140215e9b8"],["/page/4/index.html","2e4e631dab25d48901c2a4bf79881178"],["/page/5/index.html","fad9822decf0974daf2af3a32c713676"],["/page/6/index.html","e12a9f0f20a764152ec2d9265df4a0b5"],["/page/7/index.html","a1b585deaf1a5f259b1cda7f617e8d2f"],["/page/8/index.html","2e321ab87b7977d6e97e522d018365f5"],["/page/9/index.html","56efa9080479234a64fe80f6db1b8709"],["/tags/ARK/index.html","b289e64377a0830e89899bd65efbc10c"],["/tags/Alienware/index.html","356019b30d633afd0b1573653435df4b"],["/tags/Android/index.html","9bf214cc6fcabab98a59e23ffd8151e4"],["/tags/AndroidStudio/index.html","cbb5cb8302b8923aa19143080aed9376"],["/tags/Anime/index.html","f0ea50c46e05f52ced3e77149f6554f1"],["/tags/Base64/index.html","e70d81756f272960daaf301d066724cb"],["/tags/CDN/index.html","708c94002e6b2f6301c3d66bd414a3f5"],["/tags/CSGO/index.html","700c17d61cb95a18b2febdfdabae7e0b"],["/tags/Chrome/index.html","7ab9cdc0c11a1a547c7be6b260561cab"],["/tags/Chromium/index.html","cc124e7f432a4da39041fdf7411d966e"],["/tags/Computer/index.html","47b3cb9a1958fadd150a39522ba0134c"],["/tags/Contributor/index.html","05a593e01a9ee84cfa81a8d537117790"],["/tags/Daily/index.html","2bef5939e763253f752c9a5602edc1cc"],["/tags/DeepLearning/index.html","64497c5b95c8119c0b80c3ee34259a20"],["/tags/Design/index.html","017d0acd70ecd2b6f449136529e7a8dc"],["/tags/DevelopmentTool/index.html","2461acb77c927b69cd8bbad0ffa54737"],["/tags/Emoji/index.html","4962548be860abf0c7c834db256153d4"],["/tags/GFM/index.html","fb997e0bf0e266efd9f1471db22e0747"],["/tags/Game/index.html","4461331a8a84870bcb7ff4b38425ae30"],["/tags/Git/index.html","8de15624b2372bae8c658297ecdaeb0f"],["/tags/GitHub/index.html","b4f5e12ed841974a22373f432d28d2d0"],["/tags/Google/index.html","f6921389cadbaea26cb48b2e7b823712"],["/tags/Guitar/index.html","858424edef90612c086cc4ad8fb0642d"],["/tags/HardDisk/index.html","d8542b055fd334d336e29cab41ecebe0"],["/tags/HardWare/index.html","e29671f53dc796f611e224e1754b6544"],["/tags/Hexo/index.html","f6b9579d493928b1fc2f34972f25daae"],["/tags/Hobbies/index.html","813d9342121b20c09fa64d1a404c6c8a"],["/tags/HongKongMovie/index.html","c1eeb4451abd285d29f2177b604770af"],["/tags/Html/index.html","d196a4b72786f9fc90bcb47312eb4039"],["/tags/Java/index.html","ff9dcc150288ef8f49f9207195a92474"],["/tags/JavaScript/index.html","3d6eaa541815a69509904808286db524"],["/tags/Linux/index.html","2f981bd47fadb5b2d9e0036816ff6dea"],["/tags/MachineLearning/index.html","54988dab99540a1dcc4277e8c86980cd"],["/tags/Manjaro/index.html","3a62f127857f0c82cd62583fee6ccf80"],["/tags/Markdown/index.html","1a70fb517b9f4b274b53e9b6670ddecf"],["/tags/Math/index.html","75c4b6388eb894cc03147232f5ca13f0"],["/tags/MathJax/index.html","f424d8637529a19545cfbc254f90e000"],["/tags/Memorizing/index.html","edce4b7f198871fed3ad0bacdfc07e90"],["/tags/Movie/index.html","f628651efe5b517446f67a5c0aa1af47"],["/tags/Music/index.html","3e381ce4ee21c85628c33ba1c5cedb8e"],["/tags/OperationSystem/index.html","3ad4a1971462fb25ba0da2f28441b868"],["/tags/Origin/index.html","0da7c45c9aa44951cabff591721a2474"],["/tags/PersonalDiary/index.html","d9927345b80951dbd7b132799ec5baa1"],["/tags/PersonalPoetry/index.html","65f159fde8832151d3784e0a09757a83"],["/tags/Photography/index.html","66c661d16819f33c5a76a88fcc123d39"],["/tags/Port/index.html","f43cc4bd38aa00dc801675e08048ceaa"],["/tags/PseudoCode/index.html","bef03d6254524769bea70d220212353b"],["/tags/Pycharm/index.html","1bd572824021b95436c7e0abf5492a12"],["/tags/Python/index.html","b33c3e503a3c85d2da49f9f5ae5f0ce6"],["/tags/ReactiveProgramming/index.html","496bfa322ea27ba674a448847fecdd65"],["/tags/RegularExpression/index.html","c08f553ce2b6a76b9f894febb021bed7"],["/tags/Research/index.html","fd5147edab6f5ef847580454c4e9255b"],["/tags/Router/index.html","c6e98f10f23b994a8895b1dc910a269b"],["/tags/RxTool/index.html","5cb8c5bcc0bb107c5742b3ac3f45f313"],["/tags/Software/index.html","f0594e9f09eb0d1f5d16b279a1b39216"],["/tags/Spider/index.html","f05d17c18addcec2f477632c3411ca3c"],["/tags/Steam/index.html","eb1c0f9469836b44b89ea28ace9469e9"],["/tags/SteamOS/index.html","39b5a62eab70bafe4465f6d60363c5d4"],["/tags/TA/index.html","9f14727f7a63824b12ece4e219f7255b"],["/tags/TechnicalResearch/index.html","23ffbeb4535226f3abfc3a3129013154"],["/tags/Teleplay/index.html","16b649b4b2fdcb0d2ca388e6aaa75a2e"],["/tags/Thunderbird/index.html","820557e90d014b6f57cbeabd02c0edf4"],["/tags/Tool/index.html","3b50f62a38d2e5e32fc0382ff1f80bfe"],["/tags/UI-Design/index.html","645f9a7a84474a59d8acbb8f20921c48"],["/tags/UltraISO/index.html","49d8ac96a715b38c07d48345101b18b9"],["/tags/UnitTest/index.html","ab5a191044019475737c754fd974aa9f"],["/tags/Unity/index.html","aed0273486f3868904bca6d9c8bac0f4"],["/tags/VLC/index.html","f7f61dc2fd969e37682e27f721e7e0b7"],["/tags/VMware/index.html","73d8a14488b03a64fb0a62c879324ea1"],["/tags/VisualStudio/index.html","62109c2acfc702e894d5851bedfacaab"],["/tags/VisualStudioCode/index.html","e8a7d6707cf14cdd0b780dbe782d28c5"],["/tags/Windows/index.html","035c5f7bbeb29622e0ee418e49e81314"],["/tags/index.html","55ced06bbf29868fd9367ead4e52e62b"],["/tags/亮剑/index.html","308bf9f879729c60b694b18ea7226984"],["/tags/仙剑奇侠传系列/index.html","aea3d0f2e1117a22718bf8565498aff0"],["/tags/千与千寻/index.html","5c30c4f559d9d0c89ba4c61fd57a4ca5"],["/tags/宫崎骏/index.html","c40776080de075c1174c05dae4edd601"],["/tags/小王子/index.html","3e5117e27d516e06df06c7b43e0a9126"],["/tags/开心鬼系列/index.html","ca525b3b6f1e198e9f957b23b1c78c53"],["/tags/思想政治/index.html","db3d789841d685c38ca5ca422a0bb22e"],["/tags/数据结构/index.html","123b07866813d60a910223a1481b3e09"],["/tags/线性代数/index.html","e7a62316292d03efc3d1c8a137e04533"],["/tags/英语/index.html","0d99a2a6233d7bfe5d1044e172ba612f"],["/tags/软件工程/index.html","508f207bfd83363aff783b877ba83b48"],["/tags/高等数学/index.html","747d1c13af93ae7264e9f5739ba74013"]];
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




