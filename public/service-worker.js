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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","6f48871580ef08d498833a145762220b"],["/Anime/小王子电影的共鸣/index.html","7256f4cf23fcb1521c70ce317a23d8b1"],["/Daily/Memorandum/index.html","b8bebe08add04ed783e6ac8d1fc53a74"],["/Daily/生活小常识/index.html","0efccb7cccee3d08e1983e6bb7194d91"],["/Daily/网络用语/index.html","f50f530037bf058dbe469cfc4a6db4ce"],["/Design/设计用户界面的注意事项/index.html","0db8c26b8da23186af8a59c548512411"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","edc6f126130e246696b96e9483b939cc"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","e6c96a2aa6d7b84055c324bbc69911a8"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","0787edad1662ab970c7992709bc04ba7"],["/Game/GamePlatform/Steam/Steam库共享/index.html","b97ccfbc45dcfa19bf47a5e5e7c37f4f"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","1148d326be55373314ed65d8885292b9"],["/Game/如何独立开发一款游戏/index.html","2918f7f844fb07efafc8215b31827499"],["/Google/Chrome/Chrome上网助手/index.html","508856b8dc63b7d9b0c976a4a3babea6"],["/Google/Chrome/Chrome使用技巧/index.html","fcb2e13e3d6902f6c8f49a42b308bb4c"],["/Google/Chrome/Chrome插件/index.html","65d4805cb3fe02c12f3b433bda64ad28"],["/Google/Chrome/Chromium/Chromium/index.html","728aa17fbb32794d4d157457cadd463c"],["/Google/Google搜索技巧/index.html","3188b1b5389fdda9112aeda315d40dad"],["/HardDisk/硬盘分区结构/index.html","a51c026028dc1534842fa6783c7537c8"],["/Hobbies/Guitar/吉他入门/index.html","559bcdb50ede2814faea8ff160f17c02"],["/Hobbies/PersonalDiary/芦江曲/index.html","b41ee2b0b2bd1f6e7f5615a2f1f15bb1"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","0c408163602e964e60dbb36b359f28c3"],["/Hobbies/Photography/摄影入门手册/index.html","bac28e8e95c879665a3a08f1828d91c0"],["/Interview/2020年字节跳动面试题/index.html","485b814dee50042bc22ee05c14e78d6b"],["/Movie/HongKongMovie/开心鬼系列/index.html","45579b80a99725918d3e5e948cede96b"],["/OperationSystem/Linux/Linux分区管理工具/index.html","c4fba2901dacc0744d79bfe5935abc96"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","749ec538534fd67a1b68546a728ff21b"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","679e09fabf7adc67c2ace79f74f413e8"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","55180c38e0d92067383d51247fcb9bc4"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","c271542d7109ee667a1c3ac349f28752"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","b2600d3ee8dc54367b649c15e7eb17e2"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","605a8f0270713577164dc4974f9af5d1"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","eb45db430e4fd219cd8c642f594bd532"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","0e13cc6e2637ee02fee8ca8451619e20"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","2be29e88a85942c049c4eaef720fabe4"],["/Research/Math/线性代数/线性代数公式/index.html","a3857dd8c3bbdc94883f7a25c7fcf743"],["/Research/Math/线性代数/线性代数知识点总结/index.html","180fb9db9bd0b005f049ebf66fae4eeb"],["/Research/Math/高等数学/高等数学知识点/index.html","00c0cfa1de137110c8e0415d7fac89b3"],["/Research/Memorizing/费曼技巧/index.html","74ac42ebf00bbfab20f5ca7ccddcd337"],["/Research/思想政治/考研思想政治理论知识/index.html","c04e52edd5071f619d9b00620684604f"],["/Research/英语/考研英语作文/index.html","291fc65d336230019f78abaa9f3157b7"],["/Research/英语/考研英语词根/index.html","2262b1bb918d0220354fcf1760adf539"],["/Research/软件工程/PseudoCode/伪代码/index.html","27ee4a0b24451a9ee18e6fb199c4b202"],["/Research/软件工程/中南大学软件工程考研题型/index.html","f4070d3af94cfc809ee42aa034b0fe94"],["/Research/软件工程/软件工程基础知识/index.html","42f5eaa7c95d4d81bb6b1e44cc0aaec4"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","98d83c9cb09757171ac0977b55cc3a41"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","d81a5c36c0e8109708cfaa29cbeebf02"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","9aade76422cb8c127e2bcb93ee413a7e"],["/TechnicalResearch/Base64加密原理/index.html","c7c73943bd42e2df9f81c2b9c68ae286"],["/TechnicalResearch/CDN/index.html","264840cad420a54b0d2fbbeb547d2c7d"],["/TechnicalResearch/Git/Git/index.html","b1010cfc22fad1d4bbca51ba43efa66f"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","6e2218e64852f08b17ad4e8681c0ca55"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","188dd48895af9537c9f8567e616d77b9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","bd91f8cc861f805c1b6130b778251ff7"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","3d22e69077a96eabc9cab509556d6886"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","3dc0ffb40ec846c21aefee74611bca62"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","ecf8cc3705cb58de226c78c624a9cc23"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","aaa2ff9d063809b697489a2edd3ae8b4"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","32dd4d0b632a77807d8de4e14e68bcac"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","068e9400d2ec60e5336c7134842fd572"],["/TechnicalResearch/Java/Java基础快速入门/index.html","0ed9053e260e2da9afcc6158fbabd90b"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","63b3ad27069f95e13e77b3167b1582c4"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","725d753418c76e604c6009c15d8038a6"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","45bffc872a0f7cd310175cefe42d2c27"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","e496e9f23ab12e399b673992d97b0c2c"],["/TechnicalResearch/Python/PythonExercise/index.html","d35a59225e9236d801e584527a69d50a"],["/TechnicalResearch/Python/Python问题归纳/index.html","560a9e5c4d2150f74ce969e582457d8c"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","3e079fb387f7da5d85ee01b56ef2ef35"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","93469ceefe2ce052fe6164e95d144bc5"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","07e6b01d7951e5f3325313b5b3dcd7fe"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","a7777a2abadd4387eb33d353a08830f6"],["/TechnicalResearch/服务器常用端口/index.html","b991392a3c030fc43a5ba8680e8f4652"],["/TechnicalResearch/正则表达式/index.html","aea1fa1954d2f4fd639e699f0a0d4500"],["/Teleplay/亮剑/晋西北铁三角/index.html","be9e6ae3cb5994e218c1c80e8125472c"],["/Teleplay/仙剑奇侠传系列/index.html","7384b461cf6e4dbacb07917ed378445e"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","18cb7d707e3a10f526d98f2851dac1a9"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","5eaf57929a086c322ffe342703af9b8f"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","f58c2e79ea871d1f04285998afceb61a"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","8a740fc7d452cba3b5d07639029190d9"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","bd9198cec015921d41a3fbe4abaec180"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","e25d3888486b905fae2b9fca957a4db2"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","a1fd1ed3c6c47af38b8fe227cc143cf2"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","f747403dca7f9e71d177818484070fd1"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","6288b8858da0c28c7025ecf6c9da4308"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","dc7fb79e36cb3818f3c6807bc6ac3635"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","08e7fab61a11db51f2eb5650ee61a109"],["/Tool/Music/网易云音乐/index.html","6846927f04e761ea0893c88861cccaba"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","62397a040197f743b3b283af466c9817"],["/Tool/Windows/Software/VMware/VMware/index.html","ad7dbe5a395309c4f7e6c7d3cee14283"],["/Tool/百宝袋/index.html","718cac1d073a424e18afa3eb6f7b655f"],["/Tool/随机获取在线壁纸/index.html","96d40c74ee2ea3828ef7b319542dc52c"],["/Windows/Software/Office2019/Office2019激活/index.html","b53fb0b3dc0cf655c1fc1563c8fe725e"],["/about/index.html","2ec5267e9c9dc634de07e95c0f063279"],["/archives/2013/10/index.html","e5bae55fff9c3c585cdeead9df338221"],["/archives/2013/index.html","0108a4f02e3e60f49cf7fc8903ea6298"],["/archives/2016/09/index.html","b792f42889ed70b21a863d4cb452c4a2"],["/archives/2016/10/index.html","fc9873b326cd97ba45bc6a43413f5800"],["/archives/2016/11/index.html","3e4d2ef73cdbf7af1d1126232e1b6569"],["/archives/2016/12/index.html","e0e3618b2674605be36eab2179b49f83"],["/archives/2016/index.html","5475f09eed5e10e01c862c979c1be1fb"],["/archives/2017/03/index.html","b962122f3ea99c43be124dbb2b1de24d"],["/archives/2017/06/index.html","782d377be72f49053523640398667992"],["/archives/2017/07/index.html","74c110763e45890b55affd59873d649a"],["/archives/2017/09/index.html","b410a4db1cf58ab9f22a464d00a0338f"],["/archives/2017/10/index.html","9219f7369b23b5056799abd4eed025b2"],["/archives/2017/11/index.html","e396c8683563eaf6c71be9f3f2be3428"],["/archives/2017/12/index.html","d8ccaf7d94b210a00d19bc6ddd3ee29f"],["/archives/2017/index.html","83789f21c47e42973ca2c8ae3b64bc1f"],["/archives/2018/04/index.html","abd158862babb8084a2e8d7f67be570f"],["/archives/2018/08/index.html","26dc752cb2dfc03554fa512cfecf019f"],["/archives/2018/09/index.html","51e8f28b746d6f90bf062b01f480f66e"],["/archives/2018/10/index.html","b6b02967d7305e7e831aeaae7ce945bc"],["/archives/2018/11/index.html","267f6684bac0805842138a91778217c4"],["/archives/2018/12/index.html","f7548171127ebd10392050cbeda9744b"],["/archives/2018/index.html","6aec6ae041d5d4f3806009508f5c5bb3"],["/archives/2019/01/index.html","6fbb857de996a36b9b854d3ea3980bf8"],["/archives/2019/02/index.html","d4afff17d048894f547230cf465a20aa"],["/archives/2019/03/index.html","2da7b1c289ce87fb052d6788fbb8f780"],["/archives/2019/04/index.html","c002d5e14746e3c3b4b411dc4854554e"],["/archives/2019/07/index.html","9ed02212258926312760249f0d7aebbc"],["/archives/2019/08/index.html","ed9c60b5fed8153f1f66c3050e70e136"],["/archives/2019/09/index.html","5a160a1bcd45dabbc2774f4d32a5bdb0"],["/archives/2019/10/index.html","38a9ab94bfd5ee2be7ad1ca04f135d85"],["/archives/2019/11/index.html","81090e8f198e7c7c75335d58b1664e82"],["/archives/2019/12/index.html","1e984dd0ad550f036bcaaca49dbdc653"],["/archives/2019/index.html","57169f235b10782deee3cf778109bdc7"],["/archives/2019/page/2/index.html","b87a2d6d54a76596da5c3d9df9e2ffda"],["/archives/2019/page/3/index.html","b4c2bf2eaa7807c2f81a703278ef2033"],["/archives/index.html","1b007c91062389e2eebd0003cd285429"],["/archives/page/2/index.html","db47bbc9441a5838d714e5f206e5d643"],["/archives/page/3/index.html","cf8e61ab5c4db2e2e03972beae995ad9"],["/archives/page/4/index.html","0776cb334e6e953893974718d74f2d55"],["/archives/page/5/index.html","417f957753a1fc720e905cbb16e09b37"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","36225dd1c8a70f82e4bfa1cf88fe5fdb"],["/categories/Anime/index.html","9a41b865c0018452158e8fb2c351b545"],["/categories/Anime/宫崎骏/index.html","eb59642542760211f4576b5b78df374d"],["/categories/Daily/index.html","d5be9eea1759a436aca1d602dd75f48a"],["/categories/Design/index.html","33c7b9c12ad75cccd91188ebd70cdf76"],["/categories/Game/GamePlatform/Origin/index.html","8a5c78fd8aa248322da015fa1b01aa86"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","cd13124e2fdb1716b70f6c7d587d038c"],["/categories/Game/GamePlatform/Steam/index.html","909d25b619015821e54053df75efb2b9"],["/categories/Game/GamePlatform/index.html","7a946500a7999a3701f1e28976257dae"],["/categories/Game/index.html","714cda605b14e2e7a2e05d675acd2ad8"],["/categories/Google/Chrome/Chromium/index.html","3d60e9dbee0b72f116d6f52aaf8bf877"],["/categories/Google/Chrome/index.html","1e6caac424bcb55c4536d48ae5e888cd"],["/categories/Google/index.html","6768e3df3f6f16f1df574982390c29ca"],["/categories/HardDisk/index.html","0716d76a3863c2caaacab911565f3442"],["/categories/Hobbies/Guitar/index.html","b86f0e23b8d8156f06f411548edd9d50"],["/categories/Hobbies/PersonalDiary/index.html","0dda108eb44287cb4946e0a826164919"],["/categories/Hobbies/PersonalPoetry/index.html","9da2cc484733749577aa6e9de0b27d8c"],["/categories/Hobbies/Photography/index.html","f7cc8c0f75d656934f0c3e44ea0c89c9"],["/categories/Hobbies/index.html","01d054707ea858c993d1ab90f91f3787"],["/categories/Interview/index.html","1dca45769aaf9bfa67ff493cef33e222"],["/categories/Movie/HongKongMovie/index.html","c7655dc5ecc87f50e34c6eae2dd1d358"],["/categories/Movie/index.html","67711987aa80c23ca3262fa47b60489f"],["/categories/OperationSystem/Linux/Manjaro/index.html","2dff51d3df646b287da25c3f151bafc0"],["/categories/OperationSystem/Linux/SteamOS/index.html","3edfed8f5397089c2bfc409e17eac8a3"],["/categories/OperationSystem/Linux/index.html","58775c9fde974955926718595c757e7c"],["/categories/OperationSystem/Windows/Software/index.html","4066a9d2f85daab67cc97805f555d2df"],["/categories/OperationSystem/Windows/index.html","ca13e59b660a782c2ba9377298ca5989"],["/categories/OperationSystem/index.html","fa5e4e2a78146ecb0cbda25641b58239"],["/categories/Research/Math/MathJax/index.html","02a320b63222ad8d1b55bec255392c9e"],["/categories/Research/Math/index.html","0db6c73fe1e0849c2ba35972081cf53e"],["/categories/Research/Math/线性代数/index.html","f38b4ed5664b053e5dcf1292282524b4"],["/categories/Research/Math/高等数学/index.html","bfcd7feb2b78df57dc52b5f4b489d4aa"],["/categories/Research/Memorizing/index.html","2283a052658c9a76a6f6f3e375bb3d0f"],["/categories/Research/index.html","6c0a2b92c118b2c2d6b69a9868243063"],["/categories/Research/思想政治/index.html","afa8e893f2cfc42400c1627008b106c6"],["/categories/Research/英语/index.html","636e1105de978ce0749a504d2ca4236b"],["/categories/Research/软件工程/PseudoCode/index.html","488d8d980cf83b504b07c1de17bb56f8"],["/categories/Research/软件工程/index.html","e9cab5c5379c26b7fb794fc2d0bfa26a"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","6c51593f8249fa81bf962417de3bdfb7"],["/categories/TechnicalResearch/Android/RxTool/index.html","d0a1af076d9d85e9dc68574688e3805c"],["/categories/TechnicalResearch/Android/index.html","ad8615e81983319bec3dbadbdc10beb5"],["/categories/TechnicalResearch/Git/index.html","cc21a84916edc775897c7bf7e269c6ae"],["/categories/TechnicalResearch/GitHub/index.html","1e02f8f819320fa66bff801d35a245cf"],["/categories/TechnicalResearch/Hexo/index.html","4a4b27f8d479daf787d0752566970a68"],["/categories/TechnicalResearch/Html/index.html","613081fc8a4d4e298f9e6b868d3236c3"],["/categories/TechnicalResearch/Java/index.html","4c43e3eec5eb51ff8d9ed13da2106875"],["/categories/TechnicalResearch/JavaScript/index.html","75e14e263b92048a674e73c5c4fd5d74"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","b768a14e2a9160b7657fd520668cce7c"],["/categories/TechnicalResearch/Markdown/GFM/index.html","9b350a06d243bcf225b2c91d8ab18adc"],["/categories/TechnicalResearch/Markdown/index.html","e6792911129e95e640c907febc81a3c2"],["/categories/TechnicalResearch/Python/index.html","b3563a94d78c52874dbd559ee004d63d"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","277c3a88cc9024f3c1b58acd3e6df8a0"],["/categories/TechnicalResearch/Spider/index.html","c9623fca5634ac9db6046851118ce30c"],["/categories/TechnicalResearch/TA/index.html","889724ec226d7e4db0e541d5080207db"],["/categories/TechnicalResearch/UnitTest/Android/index.html","5e86178445696b0e23989fe07c4d6a90"],["/categories/TechnicalResearch/UnitTest/index.html","96d117ddad9851bce784f218bc43a1d9"],["/categories/TechnicalResearch/index.html","e12e3b80bbf4e71d50b3f522af76d659"],["/categories/Teleplay/index.html","4fb5a4d668e7328237816941982fcaf1"],["/categories/Teleplay/亮剑/index.html","d00028b37aaf4e5e1e896e6ee0bfaa0f"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","f1c74fb2e4bf3d3a9287d5d07736e658"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","61e36774a8528259e136512405cdec79"],["/categories/Tool/DevelopmentTool/Unity/index.html","da9502f6517a4e6fa4e6264690468c69"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","15dcf3c1f833a696be57add59ba74e75"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","758ba33fd22d96ceae78dc639c189297"],["/categories/Tool/DevelopmentTool/index.html","d0b848643fb07dd55a88dceb23448579"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","2f4265fb07a1ae0e99d0d41435efdefc"],["/categories/Tool/Linux/Manjaro/Software/index.html","5346356399ec5f91c00c767e4834ed59"],["/categories/Tool/Linux/Manjaro/index.html","65f1bb6bea7fe94b35c79af8f368e053"],["/categories/Tool/Linux/index.html","4528d64872b7ef11b02e366dd3dea744"],["/categories/Tool/Music/index.html","7832a5fe3f103bc24abb394bb6abdc5d"],["/categories/Tool/Windows/Software/UltraISO/index.html","ea029f94e763c8f002f7f11e90068161"],["/categories/Tool/Windows/Software/VMware/index.html","ced9b05eff40bc86e9896a8d40c707d7"],["/categories/Tool/Windows/Software/index.html","6a37647cf80cbfe68e82870a4a83c39c"],["/categories/Tool/Windows/index.html","0e310696ca4c849b1c82ee5975dd115e"],["/categories/Tool/index.html","13ce6b0d4d37f80fd394ae7be0a5e51c"],["/categories/Windows/Software/Office2019/index.html","3ad205ac687bb7c7485ee62e671ae594"],["/categories/Windows/Software/index.html","5818b2742b63d9826d099d3b2dad441b"],["/categories/Windows/index.html","ac4006efa7adf69c7749edb159c464e6"],["/categories/index.html","75b9015de1f3646f860f6b784cf9ebe5"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8a64958e74ed3f6073a2c2c432b6bac8"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","547a62f3f2755f91d09a464f9fec5570"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","b1a113a6f126f75387f661555021b165"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","0cbf935731afa6b9cfc32227c42c71d1"],["/movie/index.html","29dd028a5c436dbbdf4c1c6e0d1bb246"],["/music/index.html","16334e373348726971c65be03b3c1d12"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/10/index.html","456a671a23cab5143a25409a48546c39"],["/page/2/index.html","5411a89d3418e75a4f7c55dbe0c473a0"],["/page/3/index.html","b2c362511501bceed97df75791ea97c2"],["/page/4/index.html","3844293ff25b49d460df7e98353ec69e"],["/page/5/index.html","8110401b397b6497b79e33a75409bb1b"],["/page/6/index.html","27c63c2cfb1d7dc502f9772d6fde2479"],["/page/7/index.html","7cf698a2ecea4d1ae37acc39a733edec"],["/page/8/index.html","baed5c9c921610f5f58db30a1bf0723d"],["/page/9/index.html","0970d3abc54bd15c79cd071e5c06ff70"],["/tags/Android/index.html","e4e6aa625f84e34a39bfb93895cc15f9"],["/tags/AndroidStudio/index.html","006081831ece7c45d50aecd9294f6b2d"],["/tags/Anime/index.html","a8c1858c7da7bf553dc457328cacc20c"],["/tags/Base64/index.html","1e76c4c53a9c33851d2453f94256ce67"],["/tags/CDN/index.html","b7ffbcc5628026a0182256e66e1a44c0"],["/tags/CSGO/index.html","763d4492ca919966499d520eddc2947e"],["/tags/Chrome/index.html","43cd8f74adace190aa8a950a54efbd1a"],["/tags/Chromium/index.html","64b40048de1326b4733b2862499beae7"],["/tags/Contributor/index.html","2d04b9f0f0b04b623f2d1978504b12ab"],["/tags/Daily/index.html","ededf118d46c571b2c4e7e9697cec208"],["/tags/Design/index.html","38f10a9416bc9783f1fc40658ecdb770"],["/tags/DevelopmentTool/index.html","d2406ed29ec6d3fdab009663f3412f26"],["/tags/Emoji/index.html","234701ce0a93965a16fdbd90122b0f87"],["/tags/GFM/index.html","b779d61b8a3bec2d800f41d7a7a0cf56"],["/tags/Game/index.html","6d74824489b0db60031438d524d4bd61"],["/tags/Git/index.html","a0f53474e28550ea35b82d6d2c1e2152"],["/tags/GitHub/index.html","c0aa73c0aa4709a48c214c615bf44f2c"],["/tags/Google/index.html","5334f82c41933f1cba6285c4eb3dd93f"],["/tags/Guitar/index.html","2470cfdf156f4afc71f3ecf78ef56681"],["/tags/HardDisk/index.html","e087f42f80e5e60fb858fcbcfd4418f2"],["/tags/Hexo/index.html","9d31ab4947166bec015a3bb0e977b4b5"],["/tags/Hobbies/index.html","134fe4dd0b5ed0bc1f28341d5ceacf45"],["/tags/HongKongMovie/index.html","5f967263afc9632f9f4b111953ecb578"],["/tags/Html/index.html","05a468e9a032e73ee0ec4168f278b58c"],["/tags/Java/index.html","ea3bcfe71c414942a54e0d2c47af8dba"],["/tags/JavaScript/index.html","e19ebf213cdad7049af0157426556912"],["/tags/Linux/index.html","f1d2bc53e27553330684124f7dc6997d"],["/tags/Manjaro/index.html","4e82240474a022b6f73e96d96d31df9d"],["/tags/Markdown/index.html","95560919aedd0f46c83923d9908cd21b"],["/tags/Math/index.html","eac5c0da0ca8c919cc5c5632b158d01c"],["/tags/MathJax/index.html","2c65749601429ab21915c60fa4ae4bb2"],["/tags/Memorizing/index.html","7226bab6ef7621cd3e03c69bd254a371"],["/tags/Movie/index.html","510c6097ff80f1c7cd793341bb707583"],["/tags/Music/index.html","1310364a30efce238d21c6851fa373cf"],["/tags/OperationSystem/index.html","4648d78e60329e83471fa859ef64b15d"],["/tags/Origin/index.html","6780e668625a1be5353c568c0209d388"],["/tags/PersonalDiary/index.html","9f3bd94c7d4e9f5c96dae49a6841ac6e"],["/tags/PersonalPoetry/index.html","3e08f9b941e5c30d39498b228006ab80"],["/tags/Photography/index.html","60f0ecc4b1619450040bccfd8aa0af70"],["/tags/Port/index.html","7652b1ea758a5bcbb9e587a6a8673ea9"],["/tags/PseudoCode/index.html","87c42998a7ec4e7feff13a496404a52b"],["/tags/Pycharm/index.html","56291c35d0e95c2cfd41933005333cb0"],["/tags/Python/index.html","6d3ca64bd5cdde802b7daa08dc53994c"],["/tags/ReactiveProgramming/index.html","2682cc9e68b360a7f02ca9fec581fdae"],["/tags/RegularExpression/index.html","0a3f42a09891cb5d44a5254103734bcf"],["/tags/Research/index.html","16b35e9279a0b5e0b3697b27bd89046b"],["/tags/RxTool/index.html","a69e20af388a40672d7e6bba86258f85"],["/tags/Software/index.html","800e5f21039dc29054272188c4d15175"],["/tags/Spider/index.html","742047b8879e2c431e011a7bddf985bd"],["/tags/Steam/index.html","6916341e37aa97a5ec9639ba5e34dc74"],["/tags/SteamOS/index.html","8261d75c15a5c5c8c3f931d9dd2ed36b"],["/tags/TA/index.html","025ad9a11cd1a3a07140a62194a0333f"],["/tags/Teleplay/index.html","20c8af65bf4413ed75f03a292fa8546d"],["/tags/Thunderbird/index.html","e429cebc3ea6b28d5027eae05f7314b8"],["/tags/Tool/index.html","60a695ab60208ae27d7ab592bde87aeb"],["/tags/UI-Design/index.html","57920da3fded6f3595f7e2907821f3e0"],["/tags/UltraISO/index.html","d350e399fe3b57792e6ff6244656d064"],["/tags/UnitTest/index.html","44caf909d2709b9f7bfa8d2d874f6173"],["/tags/Unity/index.html","8df914dd985182743830858fc2809e47"],["/tags/VMware/index.html","d4197e416f7d003f24f5b8f68719ae49"],["/tags/VisualStudio/index.html","ca50621ed3d85d0e980ae4641fda3bd4"],["/tags/VisualStudioCode/index.html","788a4fe6efb5a82e2ef82420ba36c6bb"],["/tags/Windows/index.html","075e20c32c1b5c0b3b5e5f13f3b63bad"],["/tags/index.html","7f6812bcb6b38bf53f5a6f89dcbd8cf6"],["/tags/亮剑/index.html","1e6bb83abd71a11ad2db77a0cc0451d9"],["/tags/仙剑奇侠传系列/index.html","0cf1deff75c259cb7f912c6ae1e65c2a"],["/tags/千与千寻/index.html","d01c8adb63d7106ed5739ad5ba7aa2e4"],["/tags/宫崎骏/index.html","24a121eb3e341356767d8072f3a501b0"],["/tags/小王子/index.html","4c2531e347135d0623db37711a24b76f"],["/tags/开心鬼系列/index.html","1ef03900b09618c1d8ba401db86a140b"],["/tags/思想政治/index.html","d80713ec40a2a676027aa016808e5a45"],["/tags/线性代数/index.html","60841051e7827ee47920953ad89b1d3f"],["/tags/英语/index.html","5478e5e6fe8b357dc5c851166c22b5fc"],["/tags/软件工程/index.html","223b4cc02e17dc9ed80fe393da1c9f65"],["/tags/高等数学/index.html","735b20b7a303934f8e253e413db10fcb"]];
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




