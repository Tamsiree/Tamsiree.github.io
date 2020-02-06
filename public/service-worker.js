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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","42bc51e36d87a5d9430e739879f0610d"],["/Computer/Alienware/Alienware更换电池/index.html","55357aac673de6599e19ab5679b1a27e"],["/Daily/Hobbies/Guitar/吉他入门/index.html","00d4ceba6465c46d51be5b32ee2a99b1"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","831579b6b2cec5905e7c80a22f1f65f5"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","c29347cf22d11ccb9402833458726a8e"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","9f677c9b0122e3f15554d894c5e2c064"],["/Daily/Hobbies/拟音/index.html","f2c57195e99df40cd96ff83eac579888"],["/Daily/Memorandum/index.html","f37d5f6ae83c6f8a20b443633e867362"],["/Daily/专业术语/index.html","21bd3ec3bf010ea35333ee182f4b901e"],["/Daily/个人所得税/个人所得税/index.html","f494294e7acf6812b03446162a833570"],["/Daily/五险一金/五险一金/index.html","572043686afabb0ef8ec220646960fb1"],["/Daily/劣币驱逐良币/index.html","c4d38a67f5f0b06543a90485469a71fc"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","1611d5a4c4d874c7d6a289f2cac227ec"],["/Daily/生活小常识/index.html","5b64acf99827b3f52dd9998b6d4424f0"],["/Daily/网络用语/index.html","3589b9e597841dd574340b9726eacddf"],["/Design/设计用户界面的注意事项/index.html","bec8623f2bf95710eb96727e082a8e4a"],["/Emoji/Emoji符号/index.html","8582563aa4011094eb4a21b418863204"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","02b68da8672ddbec8d50a1ed7be9c086"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","2f153e3fa356af31b3ff33e34a2762bd"],["/Game/GamePlatform/Steam/ARK/index.html","2e624697b8f1366434e646aa6190c031"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","cd01e40db94ed1d653d227b4e0040ba7"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","9ab2b228d5541753c18c41b922e34b88"],["/Game/GamePlatform/Steam/Steam库共享/index.html","31f1c2bc80077ebe5d2f2cc266845520"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","36063561778e76d124188e2569b8542a"],["/Game/如何独立开发一款游戏/index.html","18b09615b6923054922029b31a28e8a7"],["/Google/Chrome/Chrome上网助手/index.html","489e6142ef147195c2739b41676afcd7"],["/Google/Chrome/Chrome使用技巧/index.html","b210efaa3dcc48de20990c7c5a529f14"],["/Google/Chrome/Chrome插件/index.html","df0069373c4da8e99a4bff1d49c86cea"],["/Google/Chrome/Chromium/Chromium/index.html","12ac92ea1c6dbd025045d9e5779a99a5"],["/Google/Google搜索/Google搜索技巧/index.html","cf6cfb9b1198d16c83803c0d4a58edd1"],["/Hardware/HardDisk/硬盘分区结构/index.html","bc21f20bd4081c67b8ba596f9cc89c00"],["/Hardware/Router/路由器固件/index.html","3cff9a55e8afb0e7de528952df4e2cec"],["/Hardware/电脑设备/index.html","0ed638d78570110012316d77483225b5"],["/Interview/Python/2020年字节跳动面试题/index.html","25ae734696a5921f5a06551248985e93"],["/Movie/HongKongMovie/开心鬼系列/index.html","0d98fd62754308a68e29b876bfe07b34"],["/Movie/小王子/小王子电影的共鸣/index.html","c108df7b5eaa3ea888bbe5e1027e5806"],["/Novel/盗墓笔记/盗墓笔记/index.html","4bc371baa04b72ba2609bc2e7bdca32c"],["/OperationSystem/Linux/Linux分区管理工具/index.html","6fedeff3c05b5c6f12ebdfe59222757e"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","3f362ca4d5ae1b7be7fb85542a37b3df"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","6c35fd5b85cb8e23ac58b321508ff21d"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","a3af6cee54c1b3b0dda4fba962b40dd6"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","0f1b7b8165a7db1d6536fdf132e170cc"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","0d37fbfc545751dc225ca071722250f4"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","25d39c6acfc2cb63a6c4893e6a8ab4c6"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","934f850a6d9058ffb1e1b044d0796d29"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c1167be917d8b5ca0e42cca33aabf1fe"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","757efd90d799ef96580e7cec00f0f355"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","7342cfb27bc90d34493fdc24977c5ae1"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","f455f5d8e0eeec9b735d1b5d2e4b5b3d"],["/Research/Math/线性代数/线性代数公式/index.html","697c2b946390f5030e493196a7e8a0c3"],["/Research/Math/线性代数/线性代数知识点总结/index.html","8725b7876a954d0cdaed3a557bcf14bc"],["/Research/Math/高等数学/高等数学知识点/index.html","d2015bbe3d097a38da264e821566d715"],["/Research/Memorizing/费曼技巧/index.html","28c1c3d2862f46ab62347218b962f6ed"],["/Research/思想政治/考研思想政治理论知识/index.html","8de0b65b56018b7783eab255417bae27"],["/Research/数据结构/数据结构/index.html","59d331c45e0b7d38935ae1701e17b929"],["/Research/英语/考研英语作文/index.html","135b26f17b2a02e9c33e623d59104454"],["/Research/英语/考研英语词根/index.html","5a70b7a01ede0f93323da802df09ed23"],["/Research/软件工程/PseudoCode/伪代码/index.html","e03c0ce0499a8bc6e3d6dea0d56609d8"],["/Research/软件工程/中南大学软件工程考研题型/index.html","d513b0103771c7f227aa4f4b5b59f729"],["/Research/软件工程/软件工程基础知识/index.html","82a4283ccd20e89b1070dd2887c62967"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","d927e6ddc477321d5e14cfc856db027e"],["/Software/Anbox/Anbox/index.html","19c324457e9d0bbb9283f1eb8c44a14c"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","235567e8c329358d16eaebbce56694d0"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","2a51d28f62ea2dcc697ee8c4917a59c9"],["/Software/Office2019/Office2019激活/index.html","59aafe81cf5f212cc3f74210e724f850"],["/Software/Pycharm/Pycharm激活码/index.html","fedce56b520f33a6b265263d90b349e6"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","9394368422854b481fa560b4d62d16c0"],["/Software/UltraISO/UltraISO/index.html","b0d57cd1a41bd0fa82e5b7dd017c88e7"],["/Software/Unity/UnityHub许可证手动激活/index.html","c9b4fdebdc8fa1310c4824b6a9a031d0"],["/Software/Unity/Unity使用技巧/index.html","691be783326d73f92d0c42c25ac03271"],["/Software/Unity/Unity动态加载Prefab/index.html","32dbd4d3e56160d6e98c732a75a92c61"],["/Software/Unity/Unity的Canvas组件/index.html","490019dc3a046b68cbe00d00383d6d15"],["/Software/Unity/Unity问题归纳/index.html","a20d26b4854ebfe005661d72b8cfefe1"],["/Software/VLC/VLC使用技巧/index.html","91488bf4b36d2afe8f1945cc2f1a673f"],["/Software/VMWare/VMWare/index.html","a6d223e6e756d904e58f4c513788b5da"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","09f3c9fe41765b7ff0cad73a81e4d38b"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","889a431fd168c88ba82db3d9f334b073"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","aef902a875fd4dd79a42992f3385de79"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","1a9d00c584891b01f431e3360969cbcf"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","f5444a6f762bfec59615dff919408ab7"],["/Software/Windows常用软件/index.html","cd9b0e7db4f50a78f82389d513d8a62b"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","7a59d3fa70bdd4962bd1b6a4b24d7552"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","2a4f3b6de4949da6f67892b0553e792d"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","98271a9bb8a9eb8922a97577875986e2"],["/TechnicalResearch/Base64加密原理/index.html","ef0883958a7ad37641a25d7076c4cdec"],["/TechnicalResearch/CDN/index.html","090503db2a5a211cb039432b73d4f51a"],["/TechnicalResearch/Git/Git/index.html","a216ed4064967960b717e92a70e6b4b6"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","8f981fd820bd19adaf31526cb7e2c479"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","76ec06ffa0a8210a419b4868fb544671"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","31e9505f47d4974812c030afd9d13dcf"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","dc89852f6bb813ebac4ca07ca0d1c1bc"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","9a182046ac8935bbf7746ebdee9b85ab"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","ce54f23405847886d23f606863a9497d"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","f8f76c901fc8b56b02cc630577a472da"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","223f1c68902b4d552d470e848036150d"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","3be8987dc5f39dd0f2cffff1e342f3bb"],["/TechnicalResearch/Java/Java基础快速入门/index.html","765c76beb8eeb2b064c863d33bb494dd"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","06a19d27987b4c1f57f5d1796e3e2718"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","f3210563efa3599eb65351f568dd31af"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","65c978f6d862ec6dff936fa19ff54965"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","ef71d0d2bc10b1527359f053047f8002"],["/TechnicalResearch/Python/PythonExercise/index.html","73686ed6020b5cc0a101fe27be594306"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","7d5a4880ec293ae2212d2f57935d18fc"],["/TechnicalResearch/Python/Python问题归纳/index.html","a4386ff1ef7caa5c1d72c60af54fdb4a"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","2c5da5d8c67ac910f7d6b1fd1b5cb819"],["/TechnicalResearch/Regex/正则表达式/index.html","c35cd0340d44ffac8456f99f05632ef9"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","4433e8b73ffcaca7c6d02ea5bc57800c"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","65984903a830d980e87531752e957651"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","43e8ac4bc1b2294d756acf27ba07cf50"],["/TechnicalResearch/服务器常用端口/index.html","3b2a876da668c447c64ca9f45e6017c3"],["/Teleplay/亮剑/晋西北铁三角/index.html","cfdb7b18a35a0bedb429ba737fa49b67"],["/Teleplay/仙剑奇侠传系列/index.html","5a81c6295f10c88e4c3e1baa974e2f4b"],["/Tool/Music/网易云音乐/index.html","83091fd01d566703541b53ad273d06d4"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","ca4add49944145286e259efc10c57304"],["/Tool/百宝袋/index.html","aead550a6b6127368f5d3e7203aa9fc0"],["/about/index.html","ddc351b069edabcf04ff04cd0675139b"],["/archives/2013/10/index.html","81d8d3420307256b7e3082b01a666746"],["/archives/2013/index.html","96e7b80b9529f0dfba1b0f6dabc61cc5"],["/archives/2016/09/index.html","97ce59e43d4bb6203e1fd42d18de38a7"],["/archives/2016/10/index.html","db169d7d43784a04a7ddeb1a7e12a880"],["/archives/2016/11/index.html","c92f3c4115fd20810a3aa9e7869f085d"],["/archives/2016/12/index.html","6a70606f4c3c37b4109a3aba1cf08339"],["/archives/2016/index.html","a1bd80da4d29551b2e41b7635d0963fd"],["/archives/2017/03/index.html","e1956a4311f8f35fe5a834b57f26d4f0"],["/archives/2017/06/index.html","b70a6fa3a445e17bebace7888853e444"],["/archives/2017/07/index.html","99e628ced9e73627397d90431dc78d0b"],["/archives/2017/09/index.html","657690845fd85756326b5b625d521bdd"],["/archives/2017/10/index.html","5aeef8567b7d499a8c0e54eb7aacab63"],["/archives/2017/11/index.html","a558df13e7e16b86a85d2fa96d9fe1a2"],["/archives/2017/12/index.html","f94e638cfeddfefb8d7f776cae9513f7"],["/archives/2017/index.html","3ec940bda3e857898dec804ca46a1135"],["/archives/2018/04/index.html","88dc001afc1a05806317c0a39376f6f0"],["/archives/2018/08/index.html","6afb9314f43dc1253d4cc2914e6fbb0b"],["/archives/2018/09/index.html","aee2e3fdb1ef529069723e5453d16bc0"],["/archives/2018/10/index.html","9015319a14ec32b67b13ada9f705cd15"],["/archives/2018/11/index.html","ceff8b719b50ffc2bb668a050192d72e"],["/archives/2018/12/index.html","f890e624208db5b40c589fcc67e736fb"],["/archives/2018/index.html","6ea25c46d994d049617fc462c998bbfe"],["/archives/2018/page/2/index.html","6aefb825f16f279e4a2a143b8fa0f9ba"],["/archives/2019/01/index.html","b1f177af39138e0746158fccfdf31b4d"],["/archives/2019/02/index.html","e097eaf884fa02b89a119f5a82d164fb"],["/archives/2019/03/index.html","f18a0001e1cdfdaa0f5198e51c8e2f65"],["/archives/2019/04/index.html","1d0317271ab960d6e30c8b4a5c2de616"],["/archives/2019/07/index.html","01c3d88968aea8113d7e518fcf510537"],["/archives/2019/08/index.html","40a26f7bdfee7f2a27a500841b30bb53"],["/archives/2019/09/index.html","cf1c4bfe76cbf71ff3250c35cd736094"],["/archives/2019/10/index.html","49a857ec74460d1d2d5d32e3c34ee0fd"],["/archives/2019/11/index.html","0209018ed272a171a25378bfe14a135f"],["/archives/2019/12/index.html","447baf1e390a50e4e443c8bc8f132c63"],["/archives/2019/index.html","ce9c6ac42d9f6e4382e4fc3ca2607ed0"],["/archives/2019/page/2/index.html","99a5e8c2d1d7809551c41f9f133301c4"],["/archives/2019/page/3/index.html","3d193175e2cb325f415036aca10873c4"],["/archives/2020/01/index.html","aea85cfd713e6ae570e59a84860b3528"],["/archives/2020/02/index.html","6612fc42aae1d9623e81ed8232cfa358"],["/archives/2020/index.html","7bd982b8aa3d82bc637ebcc74c8eecb3"],["/archives/index.html","c56ff85212f11e1e7aff3b33f42cc0a0"],["/archives/page/2/index.html","7036da03b2c6a263cd3f6598b1cdbc4e"],["/archives/page/3/index.html","b2a1b6678fd36a272c0c62b2f9dea6e4"],["/archives/page/4/index.html","d48789bbbf99e09c793dcb6f5eef56d5"],["/archives/page/5/index.html","f45899658c37684f249836cd791fdaad"],["/archives/page/6/index.html","3293806a68877502cf5575e810883752"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","0899203f60ceacda7fd9ba53c3a39be5"],["/categories/Anime/index.html","f550149493819642cc264f66ae30fae8"],["/categories/Anime/宫崎骏/index.html","c9ca24716fe88838b7bcbdac791bf74a"],["/categories/Computer/Alienware/index.html","7079d34e2d38c1e01a2dee1049d1ffc3"],["/categories/Computer/index.html","9291eb187c091a9b76ebaacbeac35540"],["/categories/Daily/Hobbies/Guitar/index.html","bcb4663af15a33eb798ff71f879cb23a"],["/categories/Daily/Hobbies/PersonalDiary/index.html","1cbdf30ce87af1d7e30581dce12f0fc4"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","816ff04707804f58604ba2163fd8d035"],["/categories/Daily/Hobbies/Photography/index.html","07588900958f41a13f0c6e068752c129"],["/categories/Daily/Hobbies/index.html","4cb4ee92e91eebabf370adb8075a444b"],["/categories/Daily/index.html","cfd51bde79c7af207721d256a4d46e64"],["/categories/Daily/个人所得税/index.html","cab9609ccb06061605b4b6556b91241d"],["/categories/Daily/五险一金/index.html","b0b5d49ce85401a49a04fdea2cbcc1c4"],["/categories/Daily/新型冠状病毒肺炎/index.html","0ba70a0e5a6f768f705ad499ef17cc67"],["/categories/Design/index.html","185c482e35a0e7358f0bdc61ba5e16b4"],["/categories/Emoji/index.html","ceb69034d4d1f5f52bb189631af1c401"],["/categories/Game/GamePlatform/Lutris/index.html","03e660eace075241710f0ffe99a39c63"],["/categories/Game/GamePlatform/Origin/index.html","5420d990d82c8dce602203561baabcf7"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","63330c33028d3d1af546a3e4865c8ece"],["/categories/Game/GamePlatform/Steam/index.html","2ac022f3b6b4de96ca04f104ee7bf533"],["/categories/Game/GamePlatform/index.html","bce586f996ae4d33967ec5c51a30d44e"],["/categories/Game/index.html","f47afa2aa352ba7fde2d1d1e46590a1e"],["/categories/Google/Chrome/Chromium/index.html","117da1a6d0b3ab908395632521f357b1"],["/categories/Google/Chrome/index.html","114ea89ba3e130039d09c853a79aeb54"],["/categories/Google/Google搜索/index.html","4389bdb4f697f3b03392a36abb2f386b"],["/categories/Google/index.html","39c12eabd65c77832206a939e46bd154"],["/categories/Hardware/HardDisk/index.html","f90438ced2c0f41b6715c9b50bd4b281"],["/categories/Hardware/Router/index.html","ea73ea5a3fed1621c3d5d5bf6ec168fa"],["/categories/Hardware/index.html","bd8ff43195fb0b00ceba2622aade0d5b"],["/categories/Interview/Python/index.html","42867526d755798f624550732d28fd70"],["/categories/Interview/index.html","2110753b1b28180f988f271e88d117d1"],["/categories/Movie/HongKongMovie/index.html","a219fa2625eac2197ad1bef9b9f6d4f6"],["/categories/Movie/index.html","ca9eb07347ce1d3f339dd1034c78c70e"],["/categories/Movie/小王子/index.html","0dfeea846a2a193479b202f975190e6e"],["/categories/Novel/index.html","b8ff723bbc588f4e137cb16b953a97a7"],["/categories/Novel/盗墓笔记/index.html","f9633e8c73f5cb168313af37bcf4a33c"],["/categories/OperationSystem/Linux/Manjaro/index.html","86171b6ba2586bda9ba40895d751a981"],["/categories/OperationSystem/Linux/SteamOS/index.html","90be717c606a6f5c01ca32718c553f70"],["/categories/OperationSystem/Linux/index.html","54c1dc1f5f0955d44b4549496d7540df"],["/categories/OperationSystem/index.html","ca21cef7cce1738b79ad5fad8fcb6a9f"],["/categories/Research/Math/MathJax/index.html","9edb8c67e0b1835127d2495c00eb783d"],["/categories/Research/Math/index.html","47c513f339ea06dd8f84010c7ba29a03"],["/categories/Research/Math/线性代数/index.html","18df8f1c2c359132a958927ce57fc1e7"],["/categories/Research/Math/高等数学/index.html","dca03a0ed9157e1cf46a653f728d83bb"],["/categories/Research/Memorizing/index.html","daca304b8610013b461f711f5d703a14"],["/categories/Research/index.html","7c0aa46763753f6122be89dedc802922"],["/categories/Research/思想政治/index.html","2a5f272078cdaafaf824fd51428e4063"],["/categories/Research/数据结构/index.html","b8f57c434e30b084f8bf5e756893ae4a"],["/categories/Research/英语/index.html","819f7c826f959038015f65359f50c8e2"],["/categories/Research/软件工程/PseudoCode/index.html","91701e0fd7b1c4f469cc22442a13fea3"],["/categories/Research/软件工程/index.html","01eb94b7f5ba5e8c589501201b91b72c"],["/categories/Resources/index.html","0089954d8c55bb344b75ee2d833a4a3d"],["/categories/Resources/游戏资源/index.html","96b0a657a404797ca7327f48a974e0e8"],["/categories/Resources/游戏资源/微元素/index.html","01f67d5ac89949c1f7d7ef868b2c62fd"],["/categories/Software/Anbox/index.html","2b28514dcb92c745a2836a79acb456b4"],["/categories/Software/AndroidStudio/index.html","0944ac00c7ee8b2de2c6d64f5f174299"],["/categories/Software/Office2019/index.html","20dcbf59a80de098fba1e171f5c227d2"],["/categories/Software/Pycharm/index.html","53c937f57ad37b5218eeb945d1fab235"],["/categories/Software/Thunderbird/index.html","523f46bf15bb081a023b0ad4e6791fc8"],["/categories/Software/UltraISO/index.html","6aaa946f53d195896f1373ec7ef34108"],["/categories/Software/Unity/index.html","823e07c8e3c2db54ff4df7d7f1285ac9"],["/categories/Software/VLC/index.html","e2afe3584fd95fe450b9e882c84e96d1"],["/categories/Software/VMWare/index.html","84ed2a40ea937fc8eaa840573091c89a"],["/categories/Software/VisualStudio/index.html","8b040a2de70b74cf232599e45afbc9fe"],["/categories/Software/VisualStudioCode/index.html","ffc4e86658fb927f8da25630ecdabd1c"],["/categories/Software/index.html","e4410ccdf05293004ce92e3737df8056"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","973ce8f3c6e199974fef6c34965f09dc"],["/categories/TechnicalResearch/Android/RxTool/index.html","c675f8ef68811395814ffa9fbb0ad6f9"],["/categories/TechnicalResearch/Android/index.html","57beba0d6666e6db128c1b7fa5228cec"],["/categories/TechnicalResearch/Git/index.html","2aaed9dd3ecb536698e747db0e20e903"],["/categories/TechnicalResearch/GitHub/index.html","92815600151ffe2cc2d8b71892de94e2"],["/categories/TechnicalResearch/Hexo/index.html","9bf57864b237798475f0c4f079537330"],["/categories/TechnicalResearch/Html/index.html","69be8a327b0e0e2859f1154aaaa4c01f"],["/categories/TechnicalResearch/Java/index.html","6a6477b4debd7dc1f91c303e9f9ad92f"],["/categories/TechnicalResearch/JavaScript/index.html","2801344b2ddb89eee0214af2d14d178a"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","d31fb4ef38867692e2d56eae3d0606a2"],["/categories/TechnicalResearch/MachineLearning/index.html","85d8ca20b846ae9fa1a961199b3b249d"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","31e94b6b4617436abe7f49df25c6f4b4"],["/categories/TechnicalResearch/Markdown/GFM/index.html","590add9bb1c9a48167ac9e0b5907f17f"],["/categories/TechnicalResearch/Markdown/index.html","5ccbbb7fd0666bfacf9496aba7b13917"],["/categories/TechnicalResearch/Python/index.html","7881fec305274882da1bb7f26caa709c"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","c73ac392a56a7121471077db5acef21d"],["/categories/TechnicalResearch/Regex/index.html","195f5cb2e72328d8d4bbd8c299e0c2a2"],["/categories/TechnicalResearch/Spider/index.html","8dca55d710bbc6f337603468a1817ae2"],["/categories/TechnicalResearch/TA/index.html","1e70f9c0d08fef8024124ab7e16b222b"],["/categories/TechnicalResearch/UnitTest/Android/index.html","0ca7c2424e62439ae6a67a0303189236"],["/categories/TechnicalResearch/UnitTest/index.html","ea6967fd5f1e786bf2e740f847d9ee85"],["/categories/TechnicalResearch/index.html","a85cbc3d974f8cf15c1fbd02a40f59ef"],["/categories/Teleplay/index.html","fe173b7d521f1ca5c43cfea71b5ca1ce"],["/categories/Teleplay/亮剑/index.html","17124722b824a5b22d09a9664dbae7dc"],["/categories/Tool/Music/index.html","a3a2191e0340ed5d149bccee702c3a2b"],["/categories/Tool/Wallpaper/index.html","0585061fed595086595d2c1571afbb8c"],["/categories/Tool/index.html","2110a910e1b6b6ab045b3c806d7851d1"],["/categories/index.html","9e70ff77e9a8763edcef979ac11e3226"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7b51f51ee08818d1cd56e4fd45e768ba"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","b1f8f1f2d6b77afb8e1ccbdf42f0708c"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","745bd7dfdfc895840919f5e0b1c7029c"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","ad3b1e5d46bd6fdbb752ce5d495dc1dc"],["/movie/index.html","d0fa8eae3e4310cf724e7e4ab0af1be4"],["/music/index.html","5ef0a2cef77248c1fb857110e8768450"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","26b4b175d1116f26e4fb05d638a74ef3"],["/page/11/index.html","f9d9b4ff84f1396782f140ae36be9cf9"],["/page/12/index.html","ddc2f3fd00c4c0110deb1f946967b45b"],["/page/2/index.html","c0fcdb5621cc0982d7f9e435f8a87aa8"],["/page/3/index.html","ae670920e2476bf977ae764223ff654b"],["/page/4/index.html","b52d4b7a248a3bbe75ee6e5b63d326e8"],["/page/5/index.html","aefe822d3debda994607103b3be1c267"],["/page/6/index.html","e76dbd37ef2c92e0c28495074a3a3a11"],["/page/7/index.html","f49e148f47754ad4413ab209690010c4"],["/page/8/index.html","7f9c5f3674bbc6f32a0dc18ba8f93d58"],["/page/9/index.html","52d5614b34acd1918bc702445c344fc0"],["/tags/ARK/index.html","82cc6dbc4d9a737e3367bc692efc514f"],["/tags/Alienware/index.html","42116508bf16f95f24fee2265b9342f4"],["/tags/Anbox/index.html","ce3e4e2b3b95de1b3c28aee8fabc614d"],["/tags/Android/index.html","b3a4730f0c9d51185d469e0d859412ac"],["/tags/AndroidStudio/index.html","443970bc896d7d2ac4729308dedb8a39"],["/tags/Anime/index.html","a6e41e1af538a69f62066c87fbfa5201"],["/tags/Base64/index.html","ee83283d74488735fb2730a33e4be38a"],["/tags/CDN/index.html","f84f8e80651e2390ac5f0b1c8889ed6e"],["/tags/CSGO/index.html","a3133d869e58e12020d722c21455752d"],["/tags/Chrome/index.html","988a64b119ed91111e8ee3e6ef069e13"],["/tags/Chromium/index.html","d19762c2c6a85ec6c42101f9cc208137"],["/tags/Computer/index.html","3fdb438234831b83e30acd9411a8beb1"],["/tags/Contributor/index.html","2665ec71d0821398da6cc8b46c7234a3"],["/tags/Daily/index.html","47b9a37c40c0a9458418613e17127615"],["/tags/DeepLearning/index.html","4fd41cad63e61064284bf4e85118c157"],["/tags/Design/index.html","28f807b0d7dcadbff49ed1d052a345d7"],["/tags/Emoji/index.html","6f3776459981171f3532fdccd88f5a60"],["/tags/GFM/index.html","19ea4e6e8ac6f58c33a7d20147268d6f"],["/tags/Game/index.html","45c6d02b3cd535535a0e9a5256998b6e"],["/tags/GamePlatform/index.html","3d131101432b1f6b43769f83b58796f2"],["/tags/Git/index.html","2254ba0ee4c32face0e97ae07ae7180c"],["/tags/GitHub/index.html","eaf70c8b1fdc02234078492f057d1e23"],["/tags/Google/index.html","187980c9d29640562451219836bc8118"],["/tags/Google搜索/index.html","1ae32e74b07a40cbce38c2a220619f8a"],["/tags/Guitar/index.html","a984b82885fb796db7b56887d90283a9"],["/tags/HardDisk/index.html","9b6001cabbcbecbc646fa7aae1da6d08"],["/tags/Hardware/index.html","78601f9c65efacd6a1e3dfe8e2857753"],["/tags/Hexo/index.html","eaf6d3aa991d323b5063f9f174c30729"],["/tags/Hobbies/index.html","f64992bf9844e86055aca3c74a0e379a"],["/tags/HongKongMovie/index.html","af0ef4892d69542186d51ccb0dafa452"],["/tags/Html/index.html","f954f8896e1c27174b1dfd43c937a2e6"],["/tags/Interview/index.html","fc8fa4413debcf92da24d30c36d9950f"],["/tags/Java/index.html","23903230f754af5cb23d6694bc834bba"],["/tags/JavaScript/index.html","4917007549116f17e309573bdaed99ad"],["/tags/Linux/index.html","c5874e76b732001d7f790253fc92b23c"],["/tags/Lutris/index.html","f800dbaf02ee0b8e7525f6c6f11f0ac9"],["/tags/MachineLearning/index.html","af9b0f2a357744e6599ae87fae3f8dd3"],["/tags/Manjaro/index.html","d0ceb9d5cf7322344558e801e7f2f217"],["/tags/Markdown/index.html","05f26bc23c079282e16cfc0cbcf152f6"],["/tags/Math/index.html","188b8bdf6aa8774f2376e09b78c388b8"],["/tags/MathJax/index.html","46fccaeaff5fa7bec7e2aceb6e5c2d0b"],["/tags/Memorizing/index.html","02f753d1a439e75a5bd3668b7243e5e2"],["/tags/Movie/index.html","d89533dd5accde025c2879c4facf6000"],["/tags/Music/index.html","c1dc926f406db713b029d28105266b9a"],["/tags/Novel/index.html","f56a5ea62efee2557fc78fd5e0feaaa2"],["/tags/Office2019/index.html","aa2d3a31b946c98cb88b97dd379a5011"],["/tags/OperationSystem/index.html","d79d4c6a1cc4a09442960175dba71fd8"],["/tags/Origin/index.html","237120d1cd6262f25c7eb15b7f941d43"],["/tags/PersonalDiary/index.html","bfe351bb475602c0f13e689e96f2c6cf"],["/tags/PersonalPoetry/index.html","16559b4331e4875c55761b6c44f73af4"],["/tags/Photography/index.html","b29dece6ac239ed34568f6c5b142c084"],["/tags/Port/index.html","758f833f39177f7a805cbd93fecf9d95"],["/tags/PseudoCode/index.html","fe2d2ad50094e82900b6a58ef45f0bad"],["/tags/Pycharm/index.html","d0cb24ca34635969dfa67e944817f92f"],["/tags/Python/index.html","5db550335f58eba08f10025888dde66e"],["/tags/ReactiveProgramming/index.html","0baa32a67b90049d455bd5a272879e8f"],["/tags/Regex/index.html","1a82f950047c07aceee6860b7a60e50a"],["/tags/Research/index.html","51176c9ea03b826123337f809eecdf06"],["/tags/Resources/index.html","0d8a2636553fb3090829dd9eedabfe38"],["/tags/Router/index.html","6c986533afc7ac852ccba51f8d156e5b"],["/tags/RxTool/index.html","bbabffe79de74c2adf84351172f9fa26"],["/tags/Software/index.html","de6b8dd80024081e2ead17aeecb5daea"],["/tags/Spider/index.html","bbeea9d526ffade39a528e3bd02035e8"],["/tags/Steam/index.html","cafac9c3cedb29a7cdedb8d8fcf02689"],["/tags/SteamOS/index.html","7d6cd68500889936c242ef8e72146783"],["/tags/TA/index.html","194aa0da9312969802cdf08d6e499b8f"],["/tags/TechnicalResearch/index.html","2f39bf590ad1a92ae2ed157811ae07c1"],["/tags/Teleplay/index.html","7c6c6d41a2bb7d213068ca66ea691bc5"],["/tags/Thunderbird/index.html","334594bab82a51b57f4c6bac5d633c0f"],["/tags/Tool/index.html","e3abb0ebff0ef7f9b2bb093a949bac35"],["/tags/UltraISO/index.html","f67f9a056967f9fc4ee87d6c3c93ea45"],["/tags/UnitTest/index.html","173b46fa875fdb2efe70218cb3ebabe8"],["/tags/Unity/index.html","f1aed52bb24fa775b4ee00c10e0c68c8"],["/tags/VLC/index.html","e99789f966ffedf386700b86d471c03d"],["/tags/VMWare/index.html","c3e352000c4c1c91b633dce0902340a4"],["/tags/VisualStudio/index.html","7f1b2232236a85c0e524444f9e54a22d"],["/tags/VisualStudioCode/index.html","897e2459afe1f26da0d8834018985732"],["/tags/Wallpaper/index.html","21cef71c93ce23b328f9bb8375d7de7c"],["/tags/Windows/index.html","8ad5e181dc9aa081d4613e5c97aa22eb"],["/tags/index.html","b5c1b5bc461a245aa4c991c1fce28b31"],["/tags/专业术语/index.html","b38a1d903fa01e1df0200409e820c326"],["/tags/个人所得税/index.html","ce63d4e04d1cd2015e26fa9d604acc11"],["/tags/五险一金/index.html","c2f48f9eb3160902b0e2656deffa6c22"],["/tags/亮剑/index.html","32b767ada1386612674664350cdfc283"],["/tags/仙剑奇侠传系列/index.html","8b03893e7d51830bf1acef04036c6a77"],["/tags/劣币驱逐良币/index.html","358bb9e025e4c05ec7d5548cc7471c3e"],["/tags/千与千寻/index.html","aa739883e49d04ee6e2c5dd8d5757eb7"],["/tags/宫崎骏/index.html","a3183f5c11ad3ffd5a48c63f8424e912"],["/tags/小王子/index.html","f3b0726185c9a2619dd1b12e54739342"],["/tags/开心鬼系列/index.html","810a5dcbf3492f41c3192910309651d6"],["/tags/微元素/index.html","f6bc0e8ffd97acd9c559ded9baecb65b"],["/tags/思想政治/index.html","a6fcc7333b86a7f4391e7fdbacc1953c"],["/tags/数据结构/index.html","18a8c655449909c6d7034fcf571ac8d3"],["/tags/新型冠状病毒肺炎/index.html","f1cdf28edfc0abbccb935ac16a3f5087"],["/tags/游戏资源/index.html","f66fbb3e840a7f83557c797441f6f4a0"],["/tags/盗墓笔记/index.html","e4bc2ac9f40b3c3cad2dd9fb5098f5e8"],["/tags/线性代数/index.html","98cdfc1c56bbabef9913b28bd1ab16a3"],["/tags/网络用语/index.html","1014df3485ec39cd0fbb9643c1ca634e"],["/tags/英语/index.html","f9edc1bfd2657734404098e83a97fc40"],["/tags/软件工程/index.html","7a63161b2f05dd0eaf02287d05643759"],["/tags/高等数学/index.html","870255c80fd36276ada7b48b0d2918d2"]];
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




