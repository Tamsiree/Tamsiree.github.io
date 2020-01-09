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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","7a9cf3a50f7ad30c72530f2c2c32171e"],["/Anime/小王子电影的共鸣/index.html","939b4d70d0be796cabeb63c5940ee7af"],["/Computer/Alienware/Alienware更换电池/index.html","963fb62fc950a42741ac1114074a22aa"],["/Daily/Memorandum/index.html","ebec42f0545a7b917973749e69f5534b"],["/Daily/生活小常识/index.html","6a60405491c3f33028ef7da1c0321af6"],["/Daily/网络用语/index.html","4fc98271fd0f19e612afb14fc5004bd0"],["/Design/设计用户界面的注意事项/index.html","7cc308baa7f250ffcdd3fe4194c868ba"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","efcc46ba6a7921614a87621705c0d079"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","abf81c6f9cf513fa103093e4b032d7d0"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","9dcfe5344666c59e9d076e2f34d75dfe"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","2ec3de7b61cdcad58048bb97cd7804bd"],["/Game/GamePlatform/Steam/Steam库共享/index.html","983c887fe73366aa4105e4a14b53f591"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","9f920c2624c6749d7e01cb98a41f6d68"],["/Game/如何独立开发一款游戏/index.html","4f74d14d6d8463a2d43e15d889a8873c"],["/Google/Chrome/Chrome上网助手/index.html","0e5f11d408935db19f3c91597b85f5f6"],["/Google/Chrome/Chrome使用技巧/index.html","8937c1a6ad5e52cf0f73e87ed768a42d"],["/Google/Chrome/Chrome插件/index.html","fc00598ebf66c65e6160e0ff673d15fa"],["/Google/Chrome/Chromium/Chromium/index.html","27fee9bd1f4d42744b0fabedf42a351a"],["/Google/Google搜索技巧/index.html","94f95dbde1baa9c4e7b6294fd1581670"],["/HardDisk/硬盘分区结构/index.html","b4eca5d8cdeac7f8e61fd6f2438b9da5"],["/Hobbies/Guitar/吉他入门/index.html","33c6d96d5c8e3c39ac4b7c3e673c1382"],["/Hobbies/PersonalDiary/芦江曲/index.html","dc68d7ba5a17f478e214d65bd75a8208"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","4a1f94a4380a3624fdd55d54753c794c"],["/Hobbies/Photography/摄影入门手册/index.html","66ddf9b7d8a9a353d86bcd65ea9581ce"],["/Interview/2020年字节跳动面试题/index.html","e80bec00a70b53a638b522fa7ca2595a"],["/Movie/HongKongMovie/开心鬼系列/index.html","29613de03898bc4b06af6a470aecc9cf"],["/OperationSystem/Linux/Linux分区管理工具/index.html","7cf571c3c397272e1837bea498b9034c"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","2aa1c1d8995f85aad0242fcfa23f009f"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","b7a47eb11c5d5cdf2b77689f7c985db6"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","9bde51ff9aa2d460e5684b9277d412ff"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","c7d3d10b07642d5c97fa814cbf726cf7"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","74a10ea10c8a3250cb55d266638f8631"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","0574f5e8305c4213d4a55d8686597da1"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","b6a057830ab51b08eee40ee56d08399f"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","af062bf8e61152c0f3411c567273f438"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","77d63c4119d6d4288b0eb54bd838a414"],["/Research/Math/线性代数/线性代数公式/index.html","dbc539c7e9b167210cc2d1b7087e7410"],["/Research/Math/线性代数/线性代数知识点总结/index.html","15d108e17ecd6fcc1091519110fe44e0"],["/Research/Math/高等数学/高等数学知识点/index.html","704c66d9aa7c05bf460f7a65c81dd177"],["/Research/Memorizing/费曼技巧/index.html","851052ab731f25fcfb913988b5a1d111"],["/Research/思想政治/考研思想政治理论知识/index.html","a3eb1cb1cb31d40f3aced97d62e76f36"],["/Research/数据结构/数据结构/index.html","4c810847da6313724593308ba6cf39bd"],["/Research/英语/考研英语作文/index.html","81b5361a7fb4698f50122e2ed54cc309"],["/Research/英语/考研英语词根/index.html","fd18fc86f4587dd4c895e1d538b007fb"],["/Research/软件工程/PseudoCode/伪代码/index.html","13f7c0ceefe146281e965dfd780224e7"],["/Research/软件工程/中南大学软件工程考研题型/index.html","40f8b9044aea2666ce3e79e97448a98f"],["/Research/软件工程/软件工程基础知识/index.html","0a9fb7ac02691d3c8617617bf66d40ed"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","86717e7ccf7ca356e6f0318acc79af85"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","10f6c672c1edd374d0daeb47b3dc4dcc"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","a78c7887ce42566f81a327a2957c0f39"],["/TechnicalResearch/Base64加密原理/index.html","4783e9c01df7a2cdc3582fdc7d0abb93"],["/TechnicalResearch/CDN/index.html","cf7e67c2d228f5057cb06978d2c19f16"],["/TechnicalResearch/Git/Git/index.html","0b5dac705e85724e4cd53ce3d83fe2c1"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","e34cf33091df934d5118e08c9b4702f9"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","5cac668b50b8a11eb4e6828b3daec924"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","640d3b1f37f648a398de975fc3ffb045"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","55bef8700ac0868ba3ce262b83f06f2e"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","e7fb59fcac5390f02d3346235a63bbf3"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","d083fcb66fdcbe9de60ac61292154a3d"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","69b07da46cf9c888c407696a41f12fbe"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","f55c5652579d11ce61248fd9ad7619b6"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","ed964c0cf0b3e9ee6a92f41e98e9fe96"],["/TechnicalResearch/Java/Java基础快速入门/index.html","41cec2df8139d474350148ae864ef1df"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","5d8698ddc28593d4b83989a738e8afe5"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","c0a2fb80b44dc313a245ca7cdd2fb601"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","669d8445962b098b04c06eddc233ac1e"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","600c6a11540ff6fe847389da5be434e9"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","c87c72ece170dd01ebba7c970d7fae10"],["/TechnicalResearch/Python/PythonExercise/index.html","d93c723e96f643d717d17a9145ac4e0f"],["/TechnicalResearch/Python/Python问题归纳/index.html","9b87479d95857ede07b15994ae185877"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","1b3ad71d9d8944ca60587f211b4d90fb"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","7fe584d15a85398376ae574d2b906a62"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","d9536d0038e7b7d9d3fcf28fdd33fd19"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","d3a85077d22616e388a266fe8d179f39"],["/TechnicalResearch/服务器常用端口/index.html","558a654b4baa18d0063cb5bf99f45f41"],["/TechnicalResearch/正则表达式/index.html","f9d311b02df80e1b36c5960af931f112"],["/Teleplay/亮剑/晋西北铁三角/index.html","26ad5c959f3c925ccce0eb97081b6076"],["/Teleplay/仙剑奇侠传系列/index.html","1bec2515bec65d752c0560e5b800d769"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","5d0e1e3346662dfa72e1b07763f0e369"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","3d1c4d850fcdaec5945eb2f87664dff3"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","6edcee24c81ae99ee04d72ed305c01ba"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","042260cc7a30bd8f624e23c7f56ab41a"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","826cf0b0d4551f29a8223a7a759f8b72"],["/Tool/DevelopmentTool/Unity/Unity动态加载Prefab/index.html","ccbb305b4366ebab246469431574d876"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","bb9342624d08f2eda3be46cbaddc0eed"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","4005bb1dad65a418a625499505e8c911"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","774cc9759fcbc3ae14eafb777adfa0bb"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","ed2a04ed0d7ee7823f21c7537d4fc4da"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode开发Unity/index.html","f70bef21eb96036e98d7a19c3876e7f2"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","58b9f422b6b94f0b68a05e4a2f70b87a"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","791c690c830583c15b425a7fbd1ea4cb"],["/Tool/Music/网易云音乐/index.html","850b528ae1cecefc172eb2dec3c3e6fc"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","b505fefadb8c4548db8340c33dd2f9c0"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","386db959a1dce1e3813a748072f1bb43"],["/Tool/Windows/Software/VMware/VMware/index.html","ec7271284594ece6695f8085f5a2f2ee"],["/Tool/百宝袋/index.html","c4f9cd076fad84d4cdd5ee244c9d0465"],["/Tool/随机获取在线壁纸/index.html","ef0dee04e7dba0e546b6c4a3745077d1"],["/Windows/Software/Office2019/Office2019激活/index.html","07b35eb10055ea8667cd8f0de4a02efb"],["/about/index.html","b64ae9a136cfe3cf60f1b9b073e6d967"],["/archives/2013/10/index.html","f53cb181533739ff15ae40e50fbad5c5"],["/archives/2013/index.html","ad6d42fbd29de9e4500f9d936b5ab214"],["/archives/2016/09/index.html","357ee495077a4b5499ebbb748cf45a30"],["/archives/2016/10/index.html","617e5b401ef065f14d2a2a9809f3b9bf"],["/archives/2016/11/index.html","6b21c170f70ef3934ded4a918160c74d"],["/archives/2016/12/index.html","3c650e84061be20b6368c2aea4550d18"],["/archives/2016/index.html","4d744f52941f3e54957b3888914e57e1"],["/archives/2017/03/index.html","ef9b78de5517e9a82b507d7a8faed3a3"],["/archives/2017/06/index.html","1eff6788af0005ba89f06173f4233de6"],["/archives/2017/07/index.html","cc34c845f5433c343d9bad512dcb1ef8"],["/archives/2017/09/index.html","f1442f757fba6e252e51cc6942a1dcdd"],["/archives/2017/10/index.html","c9ec1e782166322932b0f8d343d38443"],["/archives/2017/11/index.html","8b713498f2e19dad3d94edf88c5ae3c7"],["/archives/2017/12/index.html","8b6b03223936f270ad4d04d154c70679"],["/archives/2017/index.html","f8a30f219fee6c82e009b8108244bdba"],["/archives/2018/04/index.html","d6e8412602f7ce95d47dee59110f6616"],["/archives/2018/08/index.html","50500b93218bf708aa4ba79db0558b1b"],["/archives/2018/09/index.html","9066a43a867a0250da706e0e97aebd25"],["/archives/2018/10/index.html","8cb589cfcd21240a3f0582cb24f24e27"],["/archives/2018/11/index.html","117b3aa2786df92f1e132215a07a12fc"],["/archives/2018/12/index.html","75eba9f7161c26b9ffc10672aa48ba78"],["/archives/2018/index.html","6849cc2a56a62673fa3c285bc66df6ae"],["/archives/2018/page/2/index.html","93cf9dce9f5b146152e12c669b883e76"],["/archives/2019/01/index.html","2b1194df08a12d8ed02e43a06d8256fd"],["/archives/2019/02/index.html","ceececc7ef5dc8fc8be8d77692d29e14"],["/archives/2019/03/index.html","812deb121ff689ca5e7ab2c77c381e34"],["/archives/2019/04/index.html","aca1d23658a7f8052c52ecee80827c25"],["/archives/2019/07/index.html","e2174d836ad604e9292f66b04fb2df10"],["/archives/2019/08/index.html","dd720e5509515907e8118b512c48842a"],["/archives/2019/09/index.html","122d35b1766490c721b5100268d507bb"],["/archives/2019/10/index.html","03543ccbc6c1074a0e8aa8567eb2c3ce"],["/archives/2019/11/index.html","f8f7d28d561ea4120d4b1034dbc1cf82"],["/archives/2019/12/index.html","cbbe1e1e7d69c0ae211f57a417a1a2e4"],["/archives/2019/index.html","8d26b85efe9b0676958e0f07f02d5d98"],["/archives/2019/page/2/index.html","6627c6623ed94b504877de7122c81111"],["/archives/2019/page/3/index.html","e2c56b289e844a772a8adeca61b9e7b7"],["/archives/2020/01/index.html","292e3259e7354b262576da844e42b769"],["/archives/2020/index.html","358f843e9b1d2f90ba998a67e43ceecf"],["/archives/index.html","9f5942246507c8f0d0a2f4d2e5dcd283"],["/archives/page/2/index.html","6c395cb689d280b7c1d28225d3115321"],["/archives/page/3/index.html","6bd2c5ba806567cf7cf2a6bb2f775087"],["/archives/page/4/index.html","d8b369bfeeba4ad40acf4a303050149e"],["/archives/page/5/index.html","3cefdcc81d84f03a381d3e0a59dbd0c7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","e3e4c94c2cde8f7fe5bfc152e04e9af7"],["/categories/Anime/index.html","9a9ee3026a755de097e6f2b0ec57cc20"],["/categories/Anime/宫崎骏/index.html","9663d47050f89d6f41ba6c4d6dff6e4b"],["/categories/Computer/Alienware/index.html","f6c5ad707877a38753e69deec4c62535"],["/categories/Computer/index.html","59d3eb6f2a9810af279327cf5442d286"],["/categories/Daily/index.html","1c5a5d4c7a891a44ba79bd6f311e0202"],["/categories/Design/index.html","6ed2215e32d4a6e9444dc2614a5eed63"],["/categories/Game/GamePlatform/Origin/index.html","1e538b51cb26d57c7b850606b6c4e5ce"],["/categories/Game/GamePlatform/Steam/ARK/index.html","25ace942ce9c60eaded80cc8edcf897e"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","4cbafa120140ec58a12f09156cd36c94"],["/categories/Game/GamePlatform/Steam/index.html","2fb82ba03c6789cfe055f8b278fa4f09"],["/categories/Game/GamePlatform/index.html","112d308f4860f3375395ebc2628b52df"],["/categories/Game/index.html","b5b14c651ea4398895f24a0a115c9ca6"],["/categories/Google/Chrome/Chromium/index.html","4d9877256a10b5128965cbbf8aaf2876"],["/categories/Google/Chrome/index.html","584256ea6bcb0c106604a1e9f994b286"],["/categories/Google/index.html","8093e59229d5d49fa54143330fe7474f"],["/categories/HardDisk/index.html","5b7e1717912357d28dfbc1b19ee89751"],["/categories/Hobbies/Guitar/index.html","23aad01e4765c55486c1b15dea703883"],["/categories/Hobbies/PersonalDiary/index.html","4df7b90d6d358057de835549537d85ac"],["/categories/Hobbies/PersonalPoetry/index.html","8725970dbc1ca759fea908952009fa7f"],["/categories/Hobbies/Photography/index.html","3d73744791257ba58fcd69cb083d966d"],["/categories/Hobbies/index.html","6fb3f4db2f4cb6e0bd6ab3afb5d39dc0"],["/categories/Interview/index.html","f03f3a2a1d82472a7ec3cf7f80190691"],["/categories/Movie/HongKongMovie/index.html","db8a892b38131efd7e730122816966bf"],["/categories/Movie/index.html","82ea2f8f956c6e93dcc890cbf42b99be"],["/categories/OperationSystem/Linux/Manjaro/index.html","7e16c105dd6fcde807704a5fbb2667ef"],["/categories/OperationSystem/Linux/SteamOS/index.html","b799ae0ffd03cb97d12a3bf8d9c49cdb"],["/categories/OperationSystem/Linux/index.html","98363f0a1ef220a54c74975aca9be92b"],["/categories/OperationSystem/Windows/Software/index.html","c12822f594f84980fee422197c282629"],["/categories/OperationSystem/Windows/index.html","6434620a0e4ce34118cbd3d49c80a7d5"],["/categories/OperationSystem/index.html","889012fb7a1a430969825359507b5576"],["/categories/Research/Math/MathJax/index.html","4757f2f7544bf01ca5bbe91dd99181ea"],["/categories/Research/Math/index.html","826ed14d929ad3a282ac4aaf21b1895d"],["/categories/Research/Math/线性代数/index.html","7be2b930195cddb770197cb6946fda92"],["/categories/Research/Math/高等数学/index.html","196ea5ae674e5c56d4ad013b047752b8"],["/categories/Research/Memorizing/index.html","8c47b3a4068853dd10fe65d72f39dad8"],["/categories/Research/index.html","a06df0b9673f7f441ccb6f6355709555"],["/categories/Research/思想政治/index.html","56dc7f1b0358e71088ffc41e6cb3f244"],["/categories/Research/数据结构/index.html","076185310a7b89abe70af922d3e21e0e"],["/categories/Research/英语/index.html","d84f87ba7ee6d06b80eea1aaa4cc55bd"],["/categories/Research/软件工程/PseudoCode/index.html","f0cfac855d927ac91f26b9a0a112dbc6"],["/categories/Research/软件工程/index.html","d44beaffeceb9d676f7780958f82b0a3"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","e67e4427c3712c4e125ca6e41c99fe48"],["/categories/TechnicalResearch/Android/RxTool/index.html","a5a355e5264af0507dc215bf04fa05ae"],["/categories/TechnicalResearch/Android/index.html","b2640bcd2b7b41c2069f9e25986910bb"],["/categories/TechnicalResearch/Git/index.html","c56bacc93418eec7f595952af05d5298"],["/categories/TechnicalResearch/GitHub/index.html","0e4f1c01814c66b10e5051b6e8f4fefc"],["/categories/TechnicalResearch/Hexo/index.html","1d7f6d1aa15582fc3bc4e589ddf88dd3"],["/categories/TechnicalResearch/Html/index.html","2d00cffb6c75f007648709aff324d546"],["/categories/TechnicalResearch/Java/index.html","5d3c17a4899392d5d317ca5ca04b80f3"],["/categories/TechnicalResearch/JavaScript/index.html","c98149fa75438ce2f58fd46a608dc0ca"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","8d3599f8d7d69aac641e90107db5696e"],["/categories/TechnicalResearch/MachineLearning/index.html","17c2528c18c2efea3b46c6a3913a8da7"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","6b605c1c691b2ee3b95cb95d8f3170b4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","15521db0b35957f34334b34272238805"],["/categories/TechnicalResearch/Markdown/index.html","a4902d28aa009b4897f5797a58600167"],["/categories/TechnicalResearch/Python/index.html","a9c4234d63be2ddda4390f9afefe9c17"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","e2578178736cad6dad0bddff5b3d5f52"],["/categories/TechnicalResearch/Spider/index.html","2e53df99e380fb32a52176569c36ebe2"],["/categories/TechnicalResearch/TA/index.html","9a4fbe44a0f1d992d4e36ffcbc3e0a5c"],["/categories/TechnicalResearch/UnitTest/Android/index.html","84103d802ae26526abf14d1d45cbf9b4"],["/categories/TechnicalResearch/UnitTest/index.html","ff6a339b162af6f1b0e72136e43165f8"],["/categories/TechnicalResearch/index.html","301d74b38e08c2051eda974b3e9ebcc2"],["/categories/Teleplay/index.html","ee259075e051517d6ca0bac83aacff33"],["/categories/Teleplay/亮剑/index.html","c21d75aa1fd30e21856e6856ba9ab9cc"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","5cd78408be0501a8ef4651114977fbf1"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","d06c763002273a96421dc2c2fbb8c83a"],["/categories/Tool/DevelopmentTool/Unity/index.html","92010d95ea0a3c325bc2c3a3578b385c"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","d63ab48d1ce16b6e1220e8563ae0439b"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","320440365ff192ed9a8f1c45fd2af10d"],["/categories/Tool/DevelopmentTool/index.html","cb31f9ec685b3ba168213f796259d7fb"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","90788f36240e56b83d8780239152fc90"],["/categories/Tool/Linux/Manjaro/Software/index.html","54c743827c0f3b5a3dfae6286455f7fc"],["/categories/Tool/Linux/Manjaro/index.html","843729b12420f3e68fdb01f120d5188f"],["/categories/Tool/Linux/index.html","638845192d6a11349412a6f3c164036b"],["/categories/Tool/Music/index.html","13f41e54adb5e5df33b0b2cc4f2e21a3"],["/categories/Tool/Windows/Software/UltraISO/index.html","4a1df81f72402abdac4e8858661a371a"],["/categories/Tool/Windows/Software/VLC/index.html","27631b91a949decf16b2933010a153cc"],["/categories/Tool/Windows/Software/VMware/index.html","83b3d422408d0fc717433255b022c806"],["/categories/Tool/Windows/Software/index.html","e6da9fde75fdf534af2f265669e4a685"],["/categories/Tool/Windows/index.html","5bae16a5e283c5d87e55690b4ab3b80f"],["/categories/Tool/index.html","73f2c781827b6cb3a0101196e5dc13d0"],["/categories/Windows/Software/Office2019/index.html","77e19ee411be0ea383e9396b0fa72e0f"],["/categories/Windows/Software/index.html","60acf57e804e6dd8f689bef3fd22b02f"],["/categories/Windows/index.html","f5e816688c5019e4e677a1e527ac75aa"],["/categories/index.html","7a01b89b760da4a9bfc6987783f89b0c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","02cc58d0418bf853b78e8b473d4a0504"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","e02217ea10d36119b4de3491c70548be"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","cfde1019ad9e7d4affb6e1b3f2d911ee"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","c2364d60a0da0b2f8444cc377ee8bcca"],["/movie/index.html","332bfbc67403db03f633494541eac2e0"],["/music/index.html","f3975320d39eda2bf1932302b4025f10"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","12293ef9d442ae82e84443b887342735"],["/page/2/index.html","38685295520e78dda4312260e929eef0"],["/page/3/index.html","721769e2bcd8b8615459fdf4997f711a"],["/page/4/index.html","f1a46edcb28cf3446c0f8bbac78630ac"],["/page/5/index.html","e19a7a554d9df4529d92f326c23d658f"],["/page/6/index.html","a1ff6d2935fdd763a662c44bcd4b1237"],["/page/7/index.html","b0c4466c9fc8830b278cc88842e4871c"],["/page/8/index.html","4844662dadbeeb0ca41d1c860a831a89"],["/page/9/index.html","426f952f5c125be72f65e39bf95f51fd"],["/tags/ARK/index.html","a7829eceaaee42e1a34aecb5c247a096"],["/tags/Alienware/index.html","e0e253cc6c7db27ad63580202dc2eff1"],["/tags/Android/index.html","fc22c48739b6b4dea6df59feb2154a71"],["/tags/AndroidStudio/index.html","2423b9c6e6339dedcca8223471a74ae9"],["/tags/Anime/index.html","1fba16a8fa5bf839d4bc39e3a1b94511"],["/tags/Base64/index.html","e58ac0a2d9af98c7255c3cc46edac891"],["/tags/CDN/index.html","c1ede1fcad6e135ddc3ddbc72c23c554"],["/tags/CSGO/index.html","6f53f108df04d31ecaeb47e1467b134d"],["/tags/Chrome/index.html","d5b9558f3424fe8bba44c7fb2ebaea22"],["/tags/Chromium/index.html","5f4905d1e1c3a04439551a6747f932dd"],["/tags/Computer/index.html","294e278332949c44b4c18ee8d7d4f78e"],["/tags/Contributor/index.html","a994fb18417f059623909368e4b98313"],["/tags/Daily/index.html","dbcf77d70073bb957c90a99c6c3882e2"],["/tags/DeepLearning/index.html","37a8022c0cecacf9adfff1c5c6b9c838"],["/tags/Design/index.html","eb31634134f3bf40fefb666c8c2a63dc"],["/tags/DevelopmentTool/index.html","12996ab2634b4db146463f2a04c004ac"],["/tags/Emoji/index.html","73906ec826dd023e28f2913996af5541"],["/tags/GFM/index.html","523447dc5f8080930095d2beaacbee93"],["/tags/Game/index.html","bf825c9f0a22617932b38c291356d5d6"],["/tags/Git/index.html","7030d09a380f0993a7af356823606863"],["/tags/GitHub/index.html","2421219c33c99325a583c1a012f6791a"],["/tags/Google/index.html","e570770fa87699ff54dc0065ae718a1f"],["/tags/Guitar/index.html","5d1fb1b68d2d4b3315863b701dea00e0"],["/tags/HardDisk/index.html","b502baa3325feb16651cf1736e0f5cb4"],["/tags/Hexo/index.html","f2ad245e3d0ce2bb519aa323184b26e1"],["/tags/Hobbies/index.html","026e94794c3b66725209ed9ca45b2456"],["/tags/HongKongMovie/index.html","2f6a9b8b982198f423121193adf098b7"],["/tags/Html/index.html","289694ceeee1919e84c62c627512d78f"],["/tags/Java/index.html","d2745bbd428f2abe8b7922f55e74ddeb"],["/tags/JavaScript/index.html","801d7ac7297d71c1229158432ccc477e"],["/tags/Linux/index.html","3caf9522fe0ac87407a5372f903cb80b"],["/tags/MachineLearning/index.html","1972f08d7f93a0dbb7c2828739accd0a"],["/tags/Manjaro/index.html","68ba77973210797506f818770a6fa245"],["/tags/Markdown/index.html","8840a2e7545afa32959eedb6bbb4e333"],["/tags/Math/index.html","ecdc7adcf35747519813500f9ed7a252"],["/tags/MathJax/index.html","232c65e08d9532230962536a34b8fed9"],["/tags/Memorizing/index.html","4595beefd5838cc3ad905d937058cb67"],["/tags/Movie/index.html","1dec69369b3b2a255c906dbf47a2e778"],["/tags/Music/index.html","9768147965c320ee5f9bfacc54ccf82d"],["/tags/OperationSystem/index.html","cab56bad0610955ef573d41d0a9c25c1"],["/tags/Origin/index.html","212049a74376fffc70e2742f2d70a895"],["/tags/PersonalDiary/index.html","65c8b6e6556315c226e10b863493277e"],["/tags/PersonalPoetry/index.html","360ba069f96cc9061bb7a8cafe89a5a3"],["/tags/Photography/index.html","3bc5e0954d0796792cbe754ce2bf2684"],["/tags/Port/index.html","d4310e6f5c93467e40874d29d866c4d4"],["/tags/PseudoCode/index.html","2f1fdeb7f053f9a962257e97d1016852"],["/tags/Pycharm/index.html","92997f92b0f782563b12d66d102abe83"],["/tags/Python/index.html","d9e4dca1a684cf3d85f2f093ea3e6b56"],["/tags/ReactiveProgramming/index.html","79679c572a6d6e3a913b43a55b372640"],["/tags/RegularExpression/index.html","96c58d64256478d1cd2097b8b2649d3c"],["/tags/Research/index.html","52762f3d657f1aa0bf4890a18f85870a"],["/tags/RxTool/index.html","4103a9b776de7947e3b42d4882912f49"],["/tags/Software/index.html","758edf31f0949ea966a1d2f3a3ad3b09"],["/tags/Spider/index.html","c8d7bcb2a2c6e6058125a614d46a06a2"],["/tags/Steam/index.html","f216906bc36d1034fdd37eb8ad038faf"],["/tags/SteamOS/index.html","f665cc0c9a4d56f7e04f48a1c74498d7"],["/tags/TA/index.html","c6731f54c179b537a25030b57732ac3f"],["/tags/TechnicalResearch/index.html","232daef25c63678c359782d8f2a5e058"],["/tags/Teleplay/index.html","6d31bf759cfa300bf87c053811fd142a"],["/tags/Thunderbird/index.html","3ab7c980fe47e223c378e0933149dd0e"],["/tags/Tool/index.html","7ca2d4b2c1b810304c6a853959af8d7f"],["/tags/UI-Design/index.html","ab9315a96e57e80d15ef9aa88ecff2f3"],["/tags/UltraISO/index.html","c308838842b6d79fa38f5c4b0237b620"],["/tags/UnitTest/index.html","8787db2d833f4763dfca3a650afdefdb"],["/tags/Unity/index.html","37289184861d5aa286965864abd82d2e"],["/tags/VLC/index.html","e2beb9aca0b2dbe9f15ff03b16de80c7"],["/tags/VMware/index.html","ddc552350c2c08c1df3c816a012668fb"],["/tags/VisualStudio/index.html","49ba3576d22488611bc9bbdb41412c74"],["/tags/VisualStudioCode/index.html","1e9a77670b3b93655b282f81ea3511cc"],["/tags/Windows/index.html","554e311c8efcbcfba1592719443f2413"],["/tags/index.html","10075af19ae28ccbaa9dc9bae2702ff0"],["/tags/亮剑/index.html","98e68d2d8607de1026b523843bb78384"],["/tags/仙剑奇侠传系列/index.html","b3218529c27c6ca0c2f9e685148bd930"],["/tags/千与千寻/index.html","80a3c711b891383429edc3e23d9ac4c9"],["/tags/宫崎骏/index.html","8d89422becc3d0b2c58a0c1b04d8c7d1"],["/tags/小王子/index.html","186e05cde74841f076440a9d54abf9fb"],["/tags/开心鬼系列/index.html","bd4c27356447032e79fee715bf4b918b"],["/tags/思想政治/index.html","b271a4d3dc5af815d2f596c59eb1a4c7"],["/tags/数据结构/index.html","9a8d2fe891e4c871ff0c6a02720ebcdd"],["/tags/线性代数/index.html","4e6b16715c4f5cb0a7970d220fefc7c3"],["/tags/英语/index.html","e9dbcf37d32e5b6c9fdec37ee86ff683"],["/tags/软件工程/index.html","ac6eb791aeb2ba169f45cbed36a6a581"],["/tags/高等数学/index.html","c0a84be02aaf582620fcceee2ee4ec84"]];
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




