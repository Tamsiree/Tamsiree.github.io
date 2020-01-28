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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","1bc270d0f5bd0f8e415ac042915b8511"],["/Computer/Alienware/Alienware更换电池/index.html","54c838f0fc42859da3d255f2e846d690"],["/Daily/Hobbies/Guitar/吉他入门/index.html","08cd942172915211ca90daf178ec7c8b"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","f8585c1496c5637b27fcb8aca64e9e6b"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","8173b612dce80a1a443543326f7d6168"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","2df84694d9436fa3c6caea1e6c7bf0b6"],["/Daily/Memorandum/index.html","d0299516c8839c5dd0414941bc2fd70f"],["/Daily/个人所得税/个人所得税/index.html","1a1d39a3575576e780ae86a250a20d53"],["/Daily/五险一金/五险一金/index.html","90b0dba59aa03a5827461500d80e4304"],["/Daily/劣币驱逐良币/index.html","f9c43cb26214e8ab10c94f16a8eff7ba"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","09a9c88cb7820a5e45a7353634cd4a8f"],["/Daily/生活小常识/index.html","4b979ea88df5fe24c4d722e9c2f76d48"],["/Daily/网络用语/index.html","542dceefd20ce6d4fbe0fbe22116bc2d"],["/Design/设计用户界面的注意事项/index.html","1db742008c6a1fdd8b732cfd8d13590e"],["/Emoji/Emoji符号/index.html","c5bcfc161db757ca11fc4dd915952b4f"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","95844769c7cd8b8d2948e24126b69923"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","57e50a4d97ee96fa2d89fedd26e8016c"],["/Game/GamePlatform/Steam/ARK/index.html","99709cd700ce8f49a146dfe90158f76f"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","762269ae89ec6e2ce2d6baa6242ed8fa"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","1d49627159cb5e92963a77c8af96f5fe"],["/Game/GamePlatform/Steam/Steam库共享/index.html","7af2830f4c346c52116c88671d8f7f3e"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","a1ad52e2afa531f5b2851a1ed9bf0406"],["/Game/如何独立开发一款游戏/index.html","cbb365951e73171c6c07234457bbd395"],["/Google/Chrome/Chrome上网助手/index.html","fe98bdc2dbffb1c4e146f4ae8bc54b19"],["/Google/Chrome/Chrome使用技巧/index.html","6899979a72482154406dafd0718e00f6"],["/Google/Chrome/Chrome插件/index.html","8058006b687a866341b4e7092b2918f9"],["/Google/Chrome/Chromium/Chromium/index.html","99f65143ad04c6c3afbd41505863553a"],["/Google/Google搜索/Google搜索技巧/index.html","99cf6d7dedf1b941f598071f02c7a632"],["/Hardware/HardDisk/硬盘分区结构/index.html","50c29bbafe27bb66e903608ac5d5d624"],["/Hardware/Router/路由器固件/index.html","25ea960e94bba152eea4a4d511ebaafb"],["/Interview/Python/2020年字节跳动面试题/index.html","3da6f290cc9726050327d651698ac4fc"],["/Movie/HongKongMovie/开心鬼系列/index.html","ac2495f4474c44b6642e4b72788dc784"],["/Movie/小王子/小王子电影的共鸣/index.html","b0baa519f7b63859730252b36dbc160d"],["/Novel/盗墓笔记/盗墓笔记/index.html","bd6307fb6e48efcbdc39f790986c68cb"],["/OperationSystem/Linux/Linux分区管理工具/index.html","91f161410f91bebb398c8ab3c9668d5e"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","55ec928004f3ce02157303aa8ee19ac7"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","d9656a4a32edc375f80742bd799130d8"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","cf30545942acc802550c0d93e8833273"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","a1d8d7ee08bbfc4d426ea5231bfda471"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","cfea1b25bcff05613f95f217010faafd"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","c6cafe9896dc92866aa188aa2dff3a72"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","98cc290efeca9b247c497595607f98d3"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","52868f47830ce92d7999e4ac0bb99655"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","918593982381cb841541a624a4c2ed88"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","706f43d00df4f0cde2b3b1096e933461"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","5369fc1e1e2d13ca987b0e136a0f9f1f"],["/Research/Math/线性代数/线性代数公式/index.html","4f3548d2ad8e5d4bfe6c463e10e35ee6"],["/Research/Math/线性代数/线性代数知识点总结/index.html","7dd62c3d1e9b560130bcb55006950036"],["/Research/Math/高等数学/高等数学知识点/index.html","69ece1750e6d937132014c24b191b4f7"],["/Research/Memorizing/费曼技巧/index.html","bc218b8bfd2c3f225c465fdd8cbe159a"],["/Research/思想政治/考研思想政治理论知识/index.html","b5dba53c7f2744c518abab4f5be18d10"],["/Research/数据结构/数据结构/index.html","c6787a9eb1c3ff25426813e89242475c"],["/Research/英语/考研英语作文/index.html","e1b4c62856a45645d93fa286ed217c73"],["/Research/英语/考研英语词根/index.html","f72996a499e5fc279a517ebbbebe287a"],["/Research/软件工程/PseudoCode/伪代码/index.html","de10f9018175d8e0ff28c8b65d4c5028"],["/Research/软件工程/中南大学软件工程考研题型/index.html","5e6503d110faea703961166f99369ee0"],["/Research/软件工程/软件工程基础知识/index.html","bf72cf6be4498b08adb73549ae216de3"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","2acd83179ded4c72ef59f7165cdccde0"],["/Software/Anbox/Anbox/index.html","12cbe7f2f648621402e7961dda765e8c"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","b6020bc28cdd1dff75ba9a803f224b34"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","8c9546af38da8577c6222af82347e540"],["/Software/Office2019/Office2019激活/index.html","af9640f4c885887e0008228c95c5c06d"],["/Software/Pycharm/Pycharm激活码/index.html","c5980e28a4970fb1e4e5e734767b0d0a"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","394f935af7f6f738d78cdb2973e905be"],["/Software/UltraISO/UltraISO/index.html","7e00fe1e2cf27583ffc626dd8b367f6e"],["/Software/Unity/UnityHub许可证手动激活/index.html","f16c6c6b7de5eab04b0c8d2ac55054a2"],["/Software/Unity/Unity使用技巧/index.html","e6237e70db387ccf442f03816370d3e8"],["/Software/Unity/Unity动态加载Prefab/index.html","19b27551463a83247d80c386441ed341"],["/Software/Unity/Unity的Canvas组件/index.html","7feed28186d175daa50c69ae3b3527d8"],["/Software/Unity/Unity问题归纳/index.html","f72f52434e3aa08de2bdb54e1e959bdb"],["/Software/VLC/VLC使用技巧/index.html","c2917a1776604efb60570a75a3a2e530"],["/Software/VMWare/VMWare/index.html","f191c3fc41fabfb7829797d499c2c6f0"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","cc5efdda8d0dfd13a0183bef356533c7"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","4da880be99c75e1aff64ed782122c02b"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","decccd3c9fdbdfb7782d029977616cd5"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","1d54f6e0a0d4412cce6c83a1a5850665"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","262d839fbd1fceebd34617ecf54d33b0"],["/Software/Windows常用软件/index.html","0a61b7c703ba726e6de1c635187ba063"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","d522b5634a56daf1c3f0536377d409a2"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","bd4198329e603c421f463c03082cb178"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c1b4c2de5a9a90cf9492f857b7cbc280"],["/TechnicalResearch/Base64加密原理/index.html","5b53a795a578ee0d55ef67b265464fed"],["/TechnicalResearch/CDN/index.html","fe9622eba5d5ada04627a33b9a627126"],["/TechnicalResearch/Git/Git/index.html","2e90664148e8a086564e1925e794bdc6"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","a9754c3ea18a6a212928d77ba4f0ad8c"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","7073ffcff6fa81439108e21add82217c"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","3cca7127c3779c493ac1c419e0112e5e"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","759a07dc037b02a2ab2472a1cd85e8a4"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","6f42737b06678c7404012562f341bbce"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8dcc1261c06e26592751f063a619f22a"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","61c7e6253ec7bb6359adc6d134878ceb"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","89493ea634282fe794d53f4fc70093d8"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","5fde8bad6223a12bdc3b67c47c7d215c"],["/TechnicalResearch/Java/Java基础快速入门/index.html","2614a5345f43a04533097049237adc42"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","afa773e9da61b154e74c2e628da05b02"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","e34950cdd4354513cae67538b8839e7b"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","80f2d2f1118783684f81010268762089"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","eb2b1da262353a0a1d091df33e4514b5"],["/TechnicalResearch/Python/PythonExercise/index.html","d2fba55f507a693153695d8a6f89a0eb"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","0161e3b8e4a7ae347ca585fd17ca9b92"],["/TechnicalResearch/Python/Python问题归纳/index.html","da260c820b7c5b0b11ed0780af24b48c"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","67e1d2b3f4160efbb8242a85b4c88804"],["/TechnicalResearch/Regex/正则表达式/index.html","220e39c43981794615bf5e86078b38e1"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","fc03be2432d31cbbf0a58823ed163c71"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","600bc28baec616cb9d89b5d60f2499fa"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","a8e76d237105dd3220022d8fb8cfcd5c"],["/TechnicalResearch/服务器常用端口/index.html","719c345816815843f642d8d1937a4162"],["/Teleplay/亮剑/晋西北铁三角/index.html","25b515fcabd7b69fdf5879f7b561743e"],["/Teleplay/仙剑奇侠传系列/index.html","6df1cef936f1291c6cd2d92593844a86"],["/Tool/Music/网易云音乐/index.html","50a72445847b37010bf99f94a38db872"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","6e02d5016953a1dd766759ec3b5c6683"],["/Tool/百宝袋/index.html","f283eab537395d56e8966a4e12bb303e"],["/about/index.html","35e9a3b1c37e1ffbe84168aadeafe4f4"],["/archives/2013/10/index.html","932ab6958dce4470b57aa98476a83f7a"],["/archives/2013/index.html","0c16e2be04dd247fe989edf838a29bf5"],["/archives/2016/09/index.html","313b2f02e39124135144506605e3d2e1"],["/archives/2016/10/index.html","375b251780fa4dbd31c7034ee5dc1a95"],["/archives/2016/11/index.html","f68bbc86d2d6428450ed8d6d786d080f"],["/archives/2016/12/index.html","3291b4640c8eefbba4369a43a27c051b"],["/archives/2016/index.html","3fc09edf51fe69c69ecad89a29d9e407"],["/archives/2017/03/index.html","9ac1f3d8881e97e81553ec05446c2180"],["/archives/2017/06/index.html","de957bb2e78358f3c57a882e743fbf2b"],["/archives/2017/07/index.html","5045a3044f2771efa84801de00e2abb1"],["/archives/2017/09/index.html","2598597e4c2916cd8a84c77e40b03496"],["/archives/2017/10/index.html","12414aa2f80164cb67d2cd308441242f"],["/archives/2017/11/index.html","f46f7b6ce99ddb8f1703f7866dcc8f65"],["/archives/2017/12/index.html","ac64a8bec4338c3ec3bfefeae1de59a3"],["/archives/2017/index.html","287442fd069cd33c512a7c58465631a6"],["/archives/2018/04/index.html","3904c88e2192b9c776e9ed6539aa804a"],["/archives/2018/08/index.html","f2837a8927b40c6239d786a444551adb"],["/archives/2018/09/index.html","0d2cdfd343551a78842797d224f9368a"],["/archives/2018/10/index.html","c379017cd3e56d08196adc2a546e78bd"],["/archives/2018/11/index.html","e25edc462c52c738fdedd21c6902cb90"],["/archives/2018/12/index.html","5bf10d625ab1a9c8361476e309b7a9bc"],["/archives/2018/index.html","44455105363ee3f88c7349129e3aeef3"],["/archives/2018/page/2/index.html","e7941c524050b70eb197f7b4c517b3a3"],["/archives/2019/01/index.html","80926468d99bdfb9cd33c8fc0b017a1b"],["/archives/2019/02/index.html","6bdbea726a153496d5719588f2840b2f"],["/archives/2019/03/index.html","71c50d41a86dbc290721b666a462d8c8"],["/archives/2019/04/index.html","10d5f5a11778b92437949b7a240f2425"],["/archives/2019/07/index.html","1ef5b89e484b42aca538f56e6a9f8bee"],["/archives/2019/08/index.html","2a5294d49567dc332bb1cfbc3a53ba6f"],["/archives/2019/09/index.html","349cd44e89929cd71260b84014bdb80e"],["/archives/2019/10/index.html","9e93db912b02afaeae32c4d1877e02ff"],["/archives/2019/11/index.html","e4e759723739b9af457242c326a34cb9"],["/archives/2019/12/index.html","ee5a7cd54cda95e309a15d548991ad4d"],["/archives/2019/index.html","c176a26ebe48d5bad584a487c8105fe8"],["/archives/2019/page/2/index.html","7834284f9dfbf9bdf34098ad77a923df"],["/archives/2019/page/3/index.html","983d18727eeab89dc1412a532565870d"],["/archives/2020/01/index.html","dd50bda3bf22915f6396d131e31c2c4d"],["/archives/2020/index.html","a48dd58b0e432337198fcc5eecdf214b"],["/archives/index.html","ea812eabd892fc11b1b74498554a51b4"],["/archives/page/2/index.html","c2a7d20e69cfab72bc581f9a0de8f110"],["/archives/page/3/index.html","4311d580657bbd28b5ed54e2a9166d33"],["/archives/page/4/index.html","48b4dab3723cfa2d71fc40a0f3068b2c"],["/archives/page/5/index.html","1a9a0e0998088f4342a499ced1dd6426"],["/archives/page/6/index.html","044d71d105147c8e629658e68966e681"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","4bc74124c2911c3f82b76cfd1c0de8ff"],["/categories/Anime/index.html","ecddec7465fd48d8fd77a640440df120"],["/categories/Anime/宫崎骏/index.html","ff78676f9f2bb91ab033ee90d831bc88"],["/categories/Computer/Alienware/index.html","544f98b1375d3c82f809ed972636a12a"],["/categories/Computer/index.html","c0928d77b1e5fcca6a74aa48cf46f694"],["/categories/Daily/Hobbies/Guitar/index.html","1b63e55ba835f559d423adc6f5d11eb9"],["/categories/Daily/Hobbies/PersonalDiary/index.html","e49c013dcb0ea24fa96fa3a4eb68f822"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","11c4964c9aae241e29c00e6b8504b5a8"],["/categories/Daily/Hobbies/Photography/index.html","e5b14e4c5e1a620a49f97ce45639507c"],["/categories/Daily/Hobbies/index.html","19bcefe9ea40ca6d2eddf99c90d4ecaf"],["/categories/Daily/index.html","536aa0b4b569a01b52dca0918486d9d2"],["/categories/Daily/个人所得税/index.html","35ea9bacc0bee6c70835dcfff74f5890"],["/categories/Daily/五险一金/index.html","193419f15dc5e4db001a0c4a60fb4a4c"],["/categories/Daily/新型冠状病毒肺炎/index.html","2965c63d81524b71277af33a80d51e85"],["/categories/Design/index.html","38ac9e80fb4d88f708202290fe8c92d3"],["/categories/Emoji/index.html","a7dda43363e974481c94c9007e130ccf"],["/categories/Game/GamePlatform/Lutris/index.html","8808a7ed0aace3b88ced05774a5adc43"],["/categories/Game/GamePlatform/Origin/index.html","3361b2e4f3f5cbc68ced9fc9f10edce3"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","94080a3ea7c0ff87e82b042be33c97a6"],["/categories/Game/GamePlatform/Steam/index.html","8c86774d36cdd72c8bd94084deaef9b1"],["/categories/Game/GamePlatform/index.html","8e3d36757599d75db2f21df50b047627"],["/categories/Game/index.html","906b7c3261905fadcb1920e035875799"],["/categories/Google/Chrome/Chromium/index.html","309815604ea32b0f0631b14301bc495a"],["/categories/Google/Chrome/index.html","7a053c4521eb173c685c689e11767d7c"],["/categories/Google/Google搜索/index.html","90f70b5a84689924b86905475fff9fe1"],["/categories/Google/index.html","c622a7ba720b6e2a29e22e31c3245fce"],["/categories/Hardware/HardDisk/index.html","80a8bef62e1b316c73a2cf3098d2c68a"],["/categories/Hardware/Router/index.html","08fc63760e60367608694c88ebb73140"],["/categories/Hardware/index.html","a157cccf3da3a7ab770c0476f7466cba"],["/categories/Interview/Python/index.html","fbba307361136acf5916d8f41b9520f4"],["/categories/Interview/index.html","cfc0b0b94a1d80bce55b8ba6d96fc96e"],["/categories/Movie/HongKongMovie/index.html","216e8d50cd9b0c7b5a0837cfccba2927"],["/categories/Movie/index.html","bfcf8e6f28f86528779c459e4eec8f5d"],["/categories/Movie/小王子/index.html","f41d69746835695b6dde1996c4e12581"],["/categories/Novel/index.html","9a5bf1a6062a9af81ef9723388815606"],["/categories/Novel/盗墓笔记/index.html","c3d42716409e09e76c632351dc6d6bfb"],["/categories/OperationSystem/Linux/Manjaro/index.html","762caf64dadea230cb1c4d279a6b8e0c"],["/categories/OperationSystem/Linux/SteamOS/index.html","63125c0c9ae15e2e5122ef363800a57f"],["/categories/OperationSystem/Linux/index.html","a405154ba2c8def18723029f1561baab"],["/categories/OperationSystem/index.html","cfeb7b4de1fb04212231a6241ccc9a15"],["/categories/Research/Math/MathJax/index.html","bf544eb4785eeae5ae06906427d4e60e"],["/categories/Research/Math/index.html","ebc237b16b460d6edb0a2b6048b2bae0"],["/categories/Research/Math/线性代数/index.html","539f26add18d996bde7044c866d80f1d"],["/categories/Research/Math/高等数学/index.html","60974f2b1566da1f5d3a16cfdea4946e"],["/categories/Research/Memorizing/index.html","bc2eaedbd79f45b1a7b2d5a858db12b8"],["/categories/Research/index.html","d900237121672f8d4735945342d9b5ee"],["/categories/Research/思想政治/index.html","6c52775194e318f15ae0bcbaba2c94d3"],["/categories/Research/数据结构/index.html","86d98cc4030f097418e5086be24164aa"],["/categories/Research/英语/index.html","964d4861c5fcdeedcb524f4b5f32649c"],["/categories/Research/软件工程/PseudoCode/index.html","e28af25f2f600c4acdb7eaba0d721a34"],["/categories/Research/软件工程/index.html","6be68fd776a1acd9b5542ff83eb030ba"],["/categories/Resources/index.html","d71e82cd28be5d6f97c48b9809955499"],["/categories/Resources/游戏资源/index.html","a772f1802fd1082b4135f9f2cccd939d"],["/categories/Resources/游戏资源/微元素/index.html","341bc9a01f5b33a02db60742a486fdd0"],["/categories/Software/Anbox/index.html","a584829f668d633e94c18eac572cc614"],["/categories/Software/AndroidStudio/index.html","fbb48d0d687e01414a7896cc64a3106a"],["/categories/Software/Office2019/index.html","b0b57765d89a8499e5546ee700603b86"],["/categories/Software/Pycharm/index.html","f7000772ff7fe34c445127b14ce71a20"],["/categories/Software/Thunderbird/index.html","2504c31776afd704e3b7928af56b9634"],["/categories/Software/UltraISO/index.html","cc101c394853ac3e88135580351431db"],["/categories/Software/Unity/index.html","a19927374c04fe43061b58d3650cf406"],["/categories/Software/VLC/index.html","118346be4a6a4c1e340199a03156a8f0"],["/categories/Software/VMWare/index.html","b5672b62766e9a9984be0888e09d269f"],["/categories/Software/VisualStudio/index.html","ea0a337bdeaa6568a46e51811234a5a7"],["/categories/Software/VisualStudioCode/index.html","7f99d4de5490c776afdb8b295551699e"],["/categories/Software/index.html","4df852f106ca51226130954609370a22"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","619c669b5641322438d6e809da0bcd45"],["/categories/TechnicalResearch/Android/RxTool/index.html","a860fea1d9a26dad7c7afd30069681ec"],["/categories/TechnicalResearch/Android/index.html","bb18c6bcddfe066f2d2be8cb675920bc"],["/categories/TechnicalResearch/Git/index.html","be9b56c0ae4bd32f80e42e49acf26e31"],["/categories/TechnicalResearch/GitHub/index.html","dab4f7744dec0d991b85143454f7fb6d"],["/categories/TechnicalResearch/Hexo/index.html","38d61463b7357142a77277113dcfc26a"],["/categories/TechnicalResearch/Html/index.html","c850ab3a27017fd939615f5691d90298"],["/categories/TechnicalResearch/Java/index.html","a379a49f06995005afdfd9f719ef811a"],["/categories/TechnicalResearch/JavaScript/index.html","05967e510ce02a98853fb738f8e9b1ab"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","6c0055c8f3698b2a94388e20b98177db"],["/categories/TechnicalResearch/MachineLearning/index.html","9978a7a329da5d23739dc0474502dcf1"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","7a12931a3e152643adb028368b35fd59"],["/categories/TechnicalResearch/Markdown/GFM/index.html","62ee688db627a8d67877bb9c8dd130ea"],["/categories/TechnicalResearch/Markdown/index.html","ba166d3cffce9cc5c9b726bcde6b0112"],["/categories/TechnicalResearch/Python/index.html","9f667169b55d5e0f6d3fc23742853ad8"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","5b6874a984b53720fca5f6ec99c842bb"],["/categories/TechnicalResearch/Regex/index.html","1575fbd2c38256316c87ae2e9f32b1e8"],["/categories/TechnicalResearch/Spider/index.html","211f867286a5907b0677eade92984473"],["/categories/TechnicalResearch/TA/index.html","b4f7fb539db8b836f6cae7c71fe86980"],["/categories/TechnicalResearch/UnitTest/Android/index.html","7ba30a3cb874f777c6cd9fb4083ce3c9"],["/categories/TechnicalResearch/UnitTest/index.html","815aae77faca72c910fa88f8ccc3fb0c"],["/categories/TechnicalResearch/index.html","59ef7cda84ee9e8b7c8ce4481448d0c7"],["/categories/Teleplay/index.html","b07b202437f679cf75064f47bf60beea"],["/categories/Teleplay/亮剑/index.html","1897a8acdf130bbed589dea26a58474d"],["/categories/Tool/Music/index.html","1d48fb75377712d8abaeb6f9fdca4d9f"],["/categories/Tool/Wallpaper/index.html","5e09879fa6742a4054f7c0d5f0c817d2"],["/categories/Tool/index.html","ba6e97cd18485dcc75d5a3a15032c66e"],["/categories/index.html","6e5dc5b8c885510fb68b50355e0bb63c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5176bbc28e7bec1a746816a6490c9b77"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","684723b75b777bfc172c40f3b68d642e"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","003a608db9763d1ac593c742df4bc1ce"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","8e83210434944bce1f6e2dc870e750fe"],["/movie/index.html","0028be6363a3c09d67f8c7fafe72798a"],["/music/index.html","6b8d5000fdc23b5c37b357697e9703d0"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","068adf84aaf5cf7bc6d9b7d143dc1b7a"],["/page/11/index.html","d531c50b723ff076bbafd7d04ebbb4bb"],["/page/12/index.html","0c1e117eeaeb1266df1b2f42edfa1b78"],["/page/2/index.html","f0e1ba67b432a9f12a863ae96c2b1fbd"],["/page/3/index.html","4c38fc9f8ab613455583168704030ca5"],["/page/4/index.html","a0ea8fa11d413692a0b043f8c2ec9dd2"],["/page/5/index.html","a97bc6cb97168b3fa4781c02dd7e12b2"],["/page/6/index.html","3514f4a090fffde22862390266fe0262"],["/page/7/index.html","adc603f98be8e74fe5b8c9de5220bb0d"],["/page/8/index.html","f3d7ae939305bd7b1954682f773e73cc"],["/page/9/index.html","11156add094998b6d0aca1e609dc0b51"],["/tags/ARK/index.html","2de77b478e253094f3dd3513b2aed19b"],["/tags/Alienware/index.html","87ab2d7ae6c52d38595c07564dd8a1e4"],["/tags/Anbox/index.html","5ca2da92dccca86c7865e41569971dc8"],["/tags/Android/index.html","51bef0b06f08acf48cdb06d54dc33be9"],["/tags/AndroidStudio/index.html","a0bd2fd22c8491dd55aa88e96911fbb1"],["/tags/Anime/index.html","4d75d1d18ad1f7c6ae6219c08465e382"],["/tags/Base64/index.html","99a4d0f1aef8520e5ae6d88986c71ebc"],["/tags/CDN/index.html","c188c38a5888a9000f9dd863491d8762"],["/tags/CSGO/index.html","4e478d29434fb7fd35750513a3f7aa02"],["/tags/Chrome/index.html","a9ce8613c3152adb6b37091a681fabae"],["/tags/Chromium/index.html","6a706ac7b1d94a143ac1278735d9c078"],["/tags/Computer/index.html","92ecb0dac18aa926c6dfe4742cac5309"],["/tags/Contributor/index.html","d7f0250aef1071f724e5de72c847b5a8"],["/tags/Daily/index.html","2efcff9d5b75acac42937a6e0f526bc0"],["/tags/DeepLearning/index.html","f3eb6cceccb9087de71b858290f3680d"],["/tags/Design/index.html","a0d039e745121593e635707c8607178e"],["/tags/Emoji/index.html","874721a1e34a1d6141faed8840a7e1a7"],["/tags/GFM/index.html","3a4d7e3ea8114b11375580cd9650b6ab"],["/tags/Game/index.html","d6891b59de9442ddf937d5a336eafa5b"],["/tags/GamePlatform/index.html","f25e3a061b2bc2de001698c3b7773f0e"],["/tags/Git/index.html","d5716ea0c8860537cba5c1aef292f370"],["/tags/GitHub/index.html","a55cf08a8b0ee4958fefec5676913aa6"],["/tags/Google/index.html","3e6d5fb402ed27359a3c9c15b5b28410"],["/tags/Google搜索/index.html","ec17049ee40dd71c419fffdc9940c9cf"],["/tags/Guitar/index.html","cc783d81c804313f5db56a31ebfff859"],["/tags/HardDisk/index.html","e3334623a4074d1b7079e7405bfa8518"],["/tags/Hardware/index.html","d9f162658200855c9ca12e462a9bcb33"],["/tags/Hexo/index.html","cc9dc869e524ca328707de734ccd471a"],["/tags/Hobbies/index.html","c37ecdf4311f5a7ac9119d65e7064e8f"],["/tags/HongKongMovie/index.html","3b03183baed19a6b0a9aab49eeae33ba"],["/tags/Html/index.html","47aabe4ed60b56a25f29dee203d20ef6"],["/tags/Interview/index.html","02db05bdca214272f2339c19b5b513d8"],["/tags/Java/index.html","7a893c13e302bfbd75f1e89c4860dab0"],["/tags/JavaScript/index.html","bf69d6573a9554b8f63e2dc993337c94"],["/tags/Linux/index.html","ce00de5bd2c2b2f0f7f25c8d2e8b74a0"],["/tags/Lutris/index.html","a76185cb03460df24f79df826f3fb3c3"],["/tags/MachineLearning/index.html","377147851e5e1a1ea5df07cebc3d7630"],["/tags/Manjaro/index.html","2a689279d87a2a590e77d3901ada6084"],["/tags/Markdown/index.html","b3ac392b36a073d57ab9fc1716c9a66b"],["/tags/Math/index.html","fe0de50028907a4f9517472f86d8396f"],["/tags/MathJax/index.html","d6c4ff93a6410aa8fb8e4f4195bdf97f"],["/tags/Memorizing/index.html","c82cd985e7122a73d877bf63187333b2"],["/tags/Movie/index.html","9621b2d3f65617735499f8013c09121d"],["/tags/Music/index.html","7200cb5472bfdec5a1723b89a6029661"],["/tags/Novel/index.html","adf03ea77c90273711e3b8c19f18ea01"],["/tags/Office2019/index.html","c5fe47c44a7bb52b72232631dc6cbbbb"],["/tags/OperationSystem/index.html","a60c691d880c8df5732cc5d052e21318"],["/tags/Origin/index.html","bc3229c66b8c52e3e16a38afa0a47806"],["/tags/PersonalDiary/index.html","4cdfffbd0735e01dee84bb51449ec77d"],["/tags/PersonalPoetry/index.html","6887769c2e2c19ce3357ea913e225a2f"],["/tags/Photography/index.html","85582f8e7c1f5369f4fa9b03a472581f"],["/tags/Port/index.html","83a4550c1a2ee088ead3f58edf78083e"],["/tags/PseudoCode/index.html","84ae1350ac32cf5cdec5825af7a14846"],["/tags/Pycharm/index.html","7ca44f3a58c31b498bafc84d9ab3e167"],["/tags/Python/index.html","950e811fbf3cf97761f1f5667395c230"],["/tags/ReactiveProgramming/index.html","42fd19a2cd54067ede111ed0fbdf0375"],["/tags/Regex/index.html","85437cf084ead0f0407bf4f5bc949868"],["/tags/Research/index.html","9693a2aa9336f77175131dc3f4dfe0f5"],["/tags/Resources/index.html","6c6d33a4c9ce0e5955efe2e090cdfb7f"],["/tags/Router/index.html","ca25ee37aa720f280d87adfc8485a966"],["/tags/RxTool/index.html","6e942e98a21bee65f16085f03ec45924"],["/tags/Software/index.html","04c29181f5118ba715c1f482535cd8a8"],["/tags/Spider/index.html","130e90017f35335ea1f045c36f814671"],["/tags/Steam/index.html","2cf5f9ed7a3495337f699606a2d8b38a"],["/tags/SteamOS/index.html","3165f52d36f53248f23dc63c0fd22c96"],["/tags/TA/index.html","b96af0220cf33355b94674866ede57c6"],["/tags/TechnicalResearch/index.html","07aa0e3b9fbff5cdb9b0c1580c4d6b55"],["/tags/Teleplay/index.html","62e0dc8ef9155a64f8da32f9f7118dc8"],["/tags/Thunderbird/index.html","b1a011be0322e62932e7b23890fc6e39"],["/tags/Tool/index.html","1f7713e6f339207b82fe21c852625f1b"],["/tags/UltraISO/index.html","c05610e185973250d5ef5a00db2a2ae5"],["/tags/UnitTest/index.html","de4c3381bd929e99ee0b9d910348566e"],["/tags/Unity/index.html","9dd2fa7b21d1961c1b8aab37f6434f17"],["/tags/VLC/index.html","3b19a665c5ea9b99a223045cb5a031af"],["/tags/VMWare/index.html","bfe04a366cfccb276cc3890965ca8184"],["/tags/VisualStudio/index.html","04095a522f8a13489890c4934310fb2a"],["/tags/VisualStudioCode/index.html","4b0a3e5bf8f0bb7fb6725d1ca015c601"],["/tags/Wallpaper/index.html","e2721ab2272e715d71dd05ff551383b8"],["/tags/Windows/index.html","b75e9d5f489b3028a83044c6ba1e4177"],["/tags/index.html","e39303222d9c6b10deda1a95e0d894f0"],["/tags/个人所得税/index.html","a559ce5d25b9d1623c10a039a9ab6506"],["/tags/五险一金/index.html","bf93541e1d1b4f0e8f3f98991aafe459"],["/tags/亮剑/index.html","a9a13bc2069add86e4c037ab6c436f84"],["/tags/仙剑奇侠传系列/index.html","db1df4708d200c41ec6edbd099bc83c0"],["/tags/劣币驱逐良币/index.html","260e580de606e1427cfea97ff26b3b27"],["/tags/千与千寻/index.html","5e3a8a5453e3d9c276957d411e1b5e09"],["/tags/宫崎骏/index.html","862283b83cf3c03ee02e90ffa69fa79f"],["/tags/小王子/index.html","32c64a955998eeaa44d278fa2a2edc40"],["/tags/开心鬼系列/index.html","e4164fb4e7e4f1b6472df7887535b976"],["/tags/微元素/index.html","cc6c106460d77cfaa39f8353aa580625"],["/tags/思想政治/index.html","6aab53f11d0fdf70df0947f1166b6913"],["/tags/数据结构/index.html","d46d2eecbcd9cb3b61aa90db48092cc7"],["/tags/新型冠状病毒肺炎/index.html","7ec99eff6ff9aead38d8522091fcba0f"],["/tags/游戏资源/index.html","4ebef0c4fbf6778dea691c07b98c778d"],["/tags/盗墓笔记/index.html","b6a829d29f76bab0d8cd04a2c8903c9f"],["/tags/线性代数/index.html","5120e3cd420125ec83691c1972324541"],["/tags/英语/index.html","4338e8c7e37549d366a36b5b67dd0aa0"],["/tags/软件工程/index.html","404ea73fd31a9a9a1b0be534e8eb9fe9"],["/tags/高等数学/index.html","7e8b48a1b8787d945c53cb13776f481d"]];
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




