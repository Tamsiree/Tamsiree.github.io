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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a2ed93289001c6f991993582b9a9e898"],["/Computer/Alienware/Alienware更换电池/index.html","9a1e4ba142046674eed50be67bf055ae"],["/Daily/Hobbies/Guitar/吉他入门/index.html","7d8bc95b964b303cf62ff834647ea4fd"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","562a9d6d5c2470359c72b56bdf1f166b"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","a3677bf9b720a11205ae7fe3d522fa7f"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","0ed872cc793c001be41907f7d8629b62"],["/Daily/Hobbies/拟音/index.html","85debffa95332336f811e49e0443c1ca"],["/Daily/Memorandum/index.html","64038755ee5a3614a282faac33d96b13"],["/Daily/专业术语/index.html","c99f034409a1b7e1507e4c0d7c658b22"],["/Daily/个人所得税/个人所得税/index.html","0efba31440ddddd6d2bd78a909d32d70"],["/Daily/五险一金/五险一金/index.html","8416a801339dd9be5dee6f7e5a8289d9"],["/Daily/劣币驱逐良币/index.html","e9a8ca0aa3a9067ecffd2bbbfb4920ce"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","a6309d6666ee3c750c6dcac64397886c"],["/Daily/生活小常识/index.html","03df20e56d18c0bebc2d1f8fbed4e980"],["/Daily/网络用语/index.html","e55791a7e57818d28d4308f5d205eb65"],["/Design/设计用户界面的注意事项/index.html","c979452398e2939c3be8f100ef7e2cf8"],["/Emoji/Emoji符号/index.html","71cca834882467a1845fbbc9d7461fa0"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","775fd57a95086f70f51f7631471293cd"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","6bac7878d46d08f633ff21eb1ac83880"],["/Game/GamePlatform/Steam/ARK/index.html","8cdff1357e450c4d51d276ebb6a72d2a"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","022b57c2674dabab140990ac4d98fb1e"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","793563154d58ae9dbd327804eba8f26d"],["/Game/GamePlatform/Steam/Steam库共享/index.html","3f6bae20f9240744a536c1eba78d8cf9"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ae10f17920a55582663a5ab7ef52aa8c"],["/Game/如何独立开发一款游戏/index.html","2235b9d8f86314545bc38c82d1577a01"],["/Google/Chrome/Chrome上网助手/index.html","2adfc092ca3455e618d480d92b570b61"],["/Google/Chrome/Chrome使用技巧/index.html","f5b73d78675e1f6f705e5b3cb475144b"],["/Google/Chrome/Chrome插件/index.html","56c9ae2a5c056eebf073592bf4f92a18"],["/Google/Chrome/Chromium/Chromium/index.html","34b385e122bed7385acfaf169dc06b43"],["/Google/Google搜索/Google搜索技巧/index.html","17c3b10adef4a71188ab49e9576354b8"],["/Hardware/HardDisk/硬盘分区结构/index.html","dbdd360e6cdd0507c77a77538c9656c7"],["/Hardware/Router/路由器固件/index.html","3f837643d568300da1b0615593d8f4ff"],["/Hardware/电脑设备/index.html","c710ea8bd88ea5b1a0640de156e50a31"],["/Interview/Python/2020年字节跳动面试题/index.html","08a59b3f7af2797e0e0e6fa07d11986d"],["/Movie/HongKongMovie/开心鬼系列/index.html","07943933b371c51a2b372fddba11b236"],["/Movie/小王子/小王子电影的共鸣/index.html","d0b7bdeac5f4aaeae3ac0afb3a836c62"],["/Novel/盗墓笔记/盗墓笔记/index.html","33af31ae18b916a5a1aee444b8ec6ae1"],["/OperationSystem/Linux/Linux分区管理工具/index.html","8280a7da7616e169544b539b2f604855"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","02986ade3270ee586330c0ed33903213"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","76011d63707f0b0a4e6d33985c34d882"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","1b84ef4895e1dd9fb8b0f80ecfda3282"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","eba9ea0014c96e9acd52f17b715d4eb3"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","764ece50f2c37bfb3ad4d28c8d3bde57"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","59a02b0d0fa178650c28e877d0de11d6"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","9c77d09ca43348864b33962ab5b75df0"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","8dc0bf7c600a2da8867aa43c616268f3"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","1023dfa4845747489a31dba104a64cbc"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","3a008ab9cdb809d0f9396f17d83bcbaf"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","212489a08e9e658a4d0b7605f36f4f00"],["/Research/Math/线性代数/线性代数公式/index.html","9eb935f315852b7c1c24d8781e684563"],["/Research/Math/线性代数/线性代数知识点总结/index.html","918e36e7ecaa8eca80e85a328efe9389"],["/Research/Math/高等数学/高等数学知识点/index.html","26b3631dc0f1fb8d8a13f05bd4905ad7"],["/Research/Memorizing/费曼技巧/index.html","c041f986b9511f3c9235a0c719af6cf7"],["/Research/思想政治/考研思想政治理论知识/index.html","1525064bbd22d119e45a81b6e751f213"],["/Research/数据结构/数据结构/index.html","52c921c4d51f69c92f1be18bc2915065"],["/Research/英语/考研英语作文/index.html","14a69823ea8d6271cbeb460d05faf6c9"],["/Research/英语/考研英语词根/index.html","35032d2e87c9f9016bf21c235f47d343"],["/Research/软件工程/PseudoCode/伪代码/index.html","de14f6fab95e08edeeba76a318c0a696"],["/Research/软件工程/中南大学软件工程考研题型/index.html","7424d3d2f2aa84b48c0293150bd05033"],["/Research/软件工程/软件工程基础知识/index.html","085f8765aca990b05250b6bd3e9364fe"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","985faaa3f530e80fdb35276040a78317"],["/Software/Anbox/Anbox/index.html","75b2465f165aa16930e5a4f4124bef7e"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","d3e924c38033dec59ca6ebca42732bb7"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","6db56c04ee89da39ed6cdd86759378ca"],["/Software/Office2019/Office2019激活/index.html","05bc6e46a891c63d99243391539d553f"],["/Software/Pycharm/Pycharm激活码/index.html","91dd3e5d6c46cb94cc48282227461bc8"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","8fead92436603a6c6134a916b935cd8d"],["/Software/UltraISO/UltraISO/index.html","4cd6bec139a46d8d643459693a4ad5ff"],["/Software/Unity/UnityHub许可证手动激活/index.html","bc3adf454e17f4c35aaf899e0e78e8bd"],["/Software/Unity/Unity使用技巧/index.html","bfeb9b263b2e99aa97bcdc0f13a0ff9f"],["/Software/Unity/Unity动态加载Prefab/index.html","03f70c02d268c8fcf89bf9cfc2a2ac47"],["/Software/Unity/Unity合理导入模型/index.html","b58a4afb493ee46c36764df312e08212"],["/Software/Unity/Unity的Canvas组件/index.html","e635bf41c6db37f1588710caa849aa9d"],["/Software/Unity/Unity问题归纳/index.html","7e9ed39d18518abc3c69a91ec0e2b811"],["/Software/VLC/VLC使用技巧/index.html","b47e8814e7cfa39c3b2ce32c4f1c4da8"],["/Software/VMWare/VMWare/index.html","3041dc08384a3809207561f029e4d8f4"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","a9b95bd67312bde6cf0fca2115014c08"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","8faec4e7e4798d9154f840258eb44f7c"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","0d3846ef98b616ed586527760085a4f0"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","b111a41ed6784c88712f56bb8bc54492"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","35597d21d7962bb140286eadb7737906"],["/Software/Windows常用软件/index.html","6fccd282b02af2184e6c670b583170fe"],["/TechnicalResearch/Android/Android之JetPack库/index.html","c2b72d3c5e3e88d7e6e0aec37d03ab43"],["/TechnicalResearch/Android/Android原生开发现状分析/index.html","d40f9416941b0ab1ecf0e1f751e97243"],["/TechnicalResearch/Android/Android强制关闭软键盘输入法/index.html","5be105c0e54d71c63fbdfc7ccafb8c56"],["/TechnicalResearch/Android/EditText/Android研究EditText/index.html","fa39882e9c589f29a0e5a869a8e2ab97"],["/TechnicalResearch/Android/Room/Android之Room库的使用/index.html","e62382810feeeb2350e22fd7b87119af"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","83396b35d7d83a397e190f4e8d9d7f95"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","52824d36e02ba0b6ee20b66cb7cd38c2"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","e9eeaace8e645fc7ec354ffb04081aff"],["/TechnicalResearch/Android/UnitTest/Android单元测试/index.html","63cba4fe1d29459c7bdfa020a32fa975"],["/TechnicalResearch/Base64加密原理/index.html","b8269f23795ecd82280c707ab36f49ce"],["/TechnicalResearch/CDN/index.html","8965c7bd8f978aa96c6a6e50edd29811"],["/TechnicalResearch/Git/Git/index.html","1968cad9ed38042651055221f5bdf47e"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","5dca6b4f3a9a83b724d55ac427261319"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","9a7984a3f7f51617bb87eb1defcfe991"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b2dc4824e213901cb4c3a2c5295353c3"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","b78d03a4e8a98b2c51b7b22ec9c804dd"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","e284907f8aca1293da9b9e30d646e7a0"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","ac9fa07d26dbe96dd6ceb2228459544e"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","029c101f5059257466bed7cd8fff21fa"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","00cc483bf74f942d4048804604dd2109"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","bce3a2f12e777ec2efbe2a568965233d"],["/TechnicalResearch/Java/Java基础快速入门/index.html","0e49ae1cb78d2614ec2b20a6afa999ec"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","f4a670b2316432c7b94ef3b54761315c"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","529d7f729a89f0426d6117c470f95f23"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","d33389e56e0251b242065a747b7f14fd"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","a274aa3ecb94fd540434323af7409113"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","ada94aa4b4c99ce77fe7db486bf59388"],["/TechnicalResearch/PT站/PT站/index.html","1f56b31fffc5cd6dd01f201f572a6284"],["/TechnicalResearch/Python/PythonExercise/index.html","7bb2bf6e6075870f46de34ad1c33cf77"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","ae7ed1b09c4d34699ee9a5d4d8fab02b"],["/TechnicalResearch/Python/Python问题归纳/index.html","1e0c12c6f791fcbe573fba60d7a6eacd"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","918ee1fa5094a073e39a9346a607570d"],["/TechnicalResearch/Regex/正则表达式/index.html","2abe7c0d1da8b24b619341b314c620fe"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","3f52cd9a5401949c9edf45eecaa57e53"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","0629029ad4b7510bfd06cd528e75cf87"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","772340a55463bed1afebee3b737c6fe6"],["/TechnicalResearch/服务器常用端口/index.html","f82605e45da4364da0ddc08cc5a8320a"],["/Teleplay/亮剑/晋西北铁三角/index.html","daaa5d0dc912739015b4bcd6e5bccb7f"],["/Teleplay/仙剑奇侠传系列/index.html","9549048a7d53e2a09e0092262668dc3d"],["/Tool/Music/网易云音乐/index.html","deaa9771858f1f03cac620dfeabff27e"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","43088f93c1137ba7d7268944e2217437"],["/Tool/百宝袋/index.html","e0bf44d65f667dc85af2b47f5730f1b1"],["/about/index.html","9048391469aa61d2e6022c69adebc9f4"],["/archives/2013/10/index.html","48ab49d8c6728c5112652f53ca3b43ae"],["/archives/2013/index.html","20dfc7392fc060b72606dac6da6fa486"],["/archives/2016/02/index.html","cee5b1d2fcd52efdbeb2e108ed2f0a98"],["/archives/2016/09/index.html","65b85d12c2571b63ba7e6027ff070c52"],["/archives/2016/10/index.html","d7011990ab06ce1baaf48403cbc4ec63"],["/archives/2016/11/index.html","fabe3b8d85c333dc8d13bdb5cbe3779b"],["/archives/2016/12/index.html","ce9256bb08fe9214adb7199309dbd6df"],["/archives/2016/index.html","5b23e25a502f1c76e588caa6660bf44b"],["/archives/2017/03/index.html","6ec94709a1e9ab9441319c260b6df5b6"],["/archives/2017/06/index.html","a859b7013d85a26017d091c20eb07ac8"],["/archives/2017/07/index.html","6214ec1fb3ea46acf2a6fde8c1b89ee0"],["/archives/2017/09/index.html","34beb212a1d583234a824a7cbd45d973"],["/archives/2017/10/index.html","982a9f58aff528f894ba32afd248e6b3"],["/archives/2017/11/index.html","19b12800d33770b46705e7960c76b21c"],["/archives/2017/12/index.html","701230d8e379f3be96642fc023b8e532"],["/archives/2017/index.html","3c375368ae5fad49289c11bc5e6e48ad"],["/archives/2018/04/index.html","06c40a38a181d8e8c760fa2981893225"],["/archives/2018/08/index.html","984f692ff01b4ee273b9e2861618f869"],["/archives/2018/09/index.html","146a70453ab4aab1a224426f0c2ab78e"],["/archives/2018/10/index.html","b7ed12e9579c3dbd8bd0af4cb77641c2"],["/archives/2018/11/index.html","d4f764500853fe07166708245d7e4a55"],["/archives/2018/12/index.html","66256bfa88a492f674429379663bd329"],["/archives/2018/index.html","2c771f0f6361daac48321f0c75d3cd4a"],["/archives/2018/page/2/index.html","ac58d4d629096c2896e2ef6b2956eee9"],["/archives/2019/01/index.html","1289bb2b6182d44776b6efa1cd5d054d"],["/archives/2019/02/index.html","4f1627361757aff54203f393776f7341"],["/archives/2019/03/index.html","e766c3a5352905f7a5fa1f5fa96917c5"],["/archives/2019/04/index.html","62675f09c0c52117f159761c0d5489cc"],["/archives/2019/07/index.html","a495eaa2a28b53b7ee391d3bbcb73156"],["/archives/2019/08/index.html","bc08f63920b243c1c5026c38fa18f530"],["/archives/2019/09/index.html","5b86107677e8559bdac8a795624ec17b"],["/archives/2019/10/index.html","037e5d3c84c6c6bdfcab0dce9da7585f"],["/archives/2019/11/index.html","4fda2f736ac4a6184e187399956e2657"],["/archives/2019/12/index.html","3ab7e09e9134276142ebc0783451580a"],["/archives/2019/index.html","02b7fe722c2bf9152fc850193daf67d8"],["/archives/2019/page/2/index.html","361cc4c6a30e91b5d75afcced8ea9f84"],["/archives/2019/page/3/index.html","139a85724908a8d1ea15246befc47652"],["/archives/2020/01/index.html","a97a8695c1c4c71a8f88dc95485c2d5d"],["/archives/2020/02/index.html","964fd55b4b7380e6da59ec7d89b1a79f"],["/archives/2020/index.html","cf9ed67b9115bb5687a14e3c58acde97"],["/archives/2020/page/2/index.html","a374d7c3ce4026ed71499b3136a4d711"],["/archives/index.html","784f72011e40b3f755b5f3dcf0a69a31"],["/archives/page/2/index.html","2a53df5585ee3dfb22379975eb581652"],["/archives/page/3/index.html","c875bb9dfe354d07dd581f358c6e990a"],["/archives/page/4/index.html","1b7fadede18af4bc998ca61cb980fd40"],["/archives/page/5/index.html","9588e59b04d43b7c005be252f0e0e491"],["/archives/page/6/index.html","640c6f75d4b6536f45e2348f8b745bdb"],["/archives/page/7/index.html","473217d24acee419c6e6377e3f316309"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","a2a520bbec944c1d01327cf4762f080a"],["/categories/Anime/index.html","f8256ef7142e63de791a659a01bcbd78"],["/categories/Anime/宫崎骏/index.html","5392347a55f0d6c3f2f2217a72342ea5"],["/categories/Computer/Alienware/index.html","8db754fa0f391564ef96835a2b79a808"],["/categories/Computer/index.html","6cdf003d01d348349057006c95a124aa"],["/categories/Daily/Hobbies/Guitar/index.html","7ab76ab79013779d78b02baa88fc3095"],["/categories/Daily/Hobbies/PersonalDiary/index.html","8787fcc087c6cb8d26e141ed3ef0328e"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","d24fba167fec9fac748fb9434834e696"],["/categories/Daily/Hobbies/Photography/index.html","93eec6966ab117fac2fe8aa499907891"],["/categories/Daily/Hobbies/index.html","64b59f4fea41d8c22233ac7d876d8a84"],["/categories/Daily/index.html","398a33ad62bbe87daa12fb46be032399"],["/categories/Daily/个人所得税/index.html","17f4692f666183cb6601453905e47142"],["/categories/Daily/五险一金/index.html","0bda2804f65db55a747c94950d8a44a4"],["/categories/Daily/新型冠状病毒肺炎/index.html","a7894175aea68489a4b789f6e458e32a"],["/categories/Design/index.html","5c506563db12297b8660e20b7db500d2"],["/categories/Emoji/index.html","55754e9dc29b4468f366f38fdb3bf13a"],["/categories/Game/GamePlatform/Lutris/index.html","44f1cf23a1fb7bbf723e1462047c869b"],["/categories/Game/GamePlatform/Origin/index.html","7d40ecb1584643f2fcfbe2f7b15cf33b"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","14c87609214a930deea967fc2b1eb0f2"],["/categories/Game/GamePlatform/Steam/index.html","0f65e4dbdb3f165317e8b47aef3f3208"],["/categories/Game/GamePlatform/index.html","8f8ebe70245f309c40fa6aebfc7740e8"],["/categories/Game/index.html","89df219b3181cdcc9e0a7a8f5fada6d4"],["/categories/Google/Chrome/Chromium/index.html","4fa77e31a7726a2c49820cb0ebd1fee8"],["/categories/Google/Chrome/index.html","df328224d930cc4c3642713639099509"],["/categories/Google/Google搜索/index.html","5d475d18333e2868de075ead201b86d6"],["/categories/Google/index.html","9429855536b53163248400f84655821c"],["/categories/Hardware/HardDisk/index.html","e53490389d0675fcbffe799341121b1c"],["/categories/Hardware/Router/index.html","085b6f92acf34677fb04e5a259432ccb"],["/categories/Hardware/index.html","98e7e000a62d6d5ec90801ffb15e0c96"],["/categories/Interview/Python/index.html","54aa54625f202a8535bf0d345a1b19b4"],["/categories/Interview/index.html","c236a8805a7672f771b785a4e23f365d"],["/categories/Movie/HongKongMovie/index.html","f7523237b097f6cbdb0041bf8d88a7f3"],["/categories/Movie/index.html","98c58047e439acbc820ecb0263724543"],["/categories/Movie/小王子/index.html","8bbafde60d902c4851ce62ce8296b234"],["/categories/Novel/index.html","62cd3b935cd0c6a5134af1bebc61ba84"],["/categories/Novel/盗墓笔记/index.html","c57eb371690bf68d21d5cc52777da37c"],["/categories/OperationSystem/Linux/Manjaro/index.html","9376c771faaa3da72e45500cb52b698d"],["/categories/OperationSystem/Linux/SteamOS/index.html","a48194c1e9c643dcf226708ee928e62b"],["/categories/OperationSystem/Linux/index.html","80822323284c0fc51c1155a36f0f2be1"],["/categories/OperationSystem/index.html","675aabe8f359d818367a234371f90082"],["/categories/Research/Math/MathJax/index.html","0c1504e79cd8d3f4ad59454c5cf10f74"],["/categories/Research/Math/index.html","d8c036bbad0df151018a50f731e96617"],["/categories/Research/Math/线性代数/index.html","0686ed0a9889a82b15c963bb450bdad9"],["/categories/Research/Math/高等数学/index.html","f9a7b707a1059b557b0920061792c5f8"],["/categories/Research/Memorizing/index.html","82acf247fd55a152f3e6ba57edf119db"],["/categories/Research/index.html","3afc21681a1e9051a907d1c0c40eb131"],["/categories/Research/思想政治/index.html","8ec1c12d0a45bb8d2b32f15749b9fb3c"],["/categories/Research/数据结构/index.html","2e103a9f5cfcc2c2378865589b75f5e5"],["/categories/Research/英语/index.html","c44369a60007f1d31665a649592cb6de"],["/categories/Research/软件工程/PseudoCode/index.html","1187aad895be179dd32ca17563eeca9f"],["/categories/Research/软件工程/index.html","93d89499cb2cbe9aac84962c07de8bbf"],["/categories/Resources/index.html","805122200f1ec176bf66a8d175d265c5"],["/categories/Resources/游戏资源/index.html","f609e9bbead40d70e5f0b93dac3b431a"],["/categories/Resources/游戏资源/微元素/index.html","a41d66014013d9f8e426a7a5b3871af5"],["/categories/Software/Anbox/index.html","1fff6f97849cffb716321d16cbfcd931"],["/categories/Software/AndroidStudio/index.html","8e519e78bcc5613d08b9a4cb5e544e9e"],["/categories/Software/Office2019/index.html","8242c05c416179a947ae7d358cc78416"],["/categories/Software/Pycharm/index.html","ad4c37849655d56c5cbb6b9ed5cb11a6"],["/categories/Software/Thunderbird/index.html","0ae229802cbb10e3fa7beab88483002f"],["/categories/Software/UltraISO/index.html","2c284db4784991fa9a5a5c71b78c2cb0"],["/categories/Software/Unity/index.html","380e5b104100b7d961d12dd1bedb47d9"],["/categories/Software/VLC/index.html","cbb93e2dcc0e5e8575ebcb39025da1fe"],["/categories/Software/VMWare/index.html","42d6321094380664b751f53e7fe44388"],["/categories/Software/VisualStudio/index.html","100b39423739ffa2e7d2d2c48a2151bb"],["/categories/Software/VisualStudioCode/index.html","51a63e8da81b094e5f46b45656ef619b"],["/categories/Software/index.html","0fd8a78c8a33a17adc35612854d63b14"],["/categories/TechnicalResearch/Android/EditText/index.html","3a230028db484f176e3f8487fe544fee"],["/categories/TechnicalResearch/Android/Room/index.html","020f45938be2dc691786ab2c80d0ed90"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","1cc27e71c1c7f7d3adce3e3b947c956b"],["/categories/TechnicalResearch/Android/RxTool/index.html","381246ae75ab5ad2cf9e33b377a0de1b"],["/categories/TechnicalResearch/Android/UnitTest/index.html","3fb34c0306874c08e5ee545f2a65df13"],["/categories/TechnicalResearch/Android/index.html","6d72229da68d587132de818526977e7f"],["/categories/TechnicalResearch/Git/index.html","1a45bc761cbf786affbb60785fa34b8c"],["/categories/TechnicalResearch/GitHub/index.html","af18a180dd3dde895405ce4bcfe47225"],["/categories/TechnicalResearch/Hexo/index.html","b25df659399c6f7a8f204eea45bdca93"],["/categories/TechnicalResearch/Html/index.html","3bef906eaa1679dd15e48a9770f12947"],["/categories/TechnicalResearch/Java/index.html","0718d075e5ae9c6d071c615840993691"],["/categories/TechnicalResearch/JavaScript/index.html","8e608b690039c4aaafaf67b8ab86e661"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","2db113a8cae48d83d8a305fe68ffab6e"],["/categories/TechnicalResearch/MachineLearning/index.html","402fbd59e7bb4411a517ec5f9ca626d4"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","0c83266a4a3b5390acca69873cc0f2d8"],["/categories/TechnicalResearch/Markdown/GFM/index.html","aa2830f15cba42d17f18ae8f16312bb7"],["/categories/TechnicalResearch/Markdown/index.html","17b43ee605a6ed81a5cfbc196b932c06"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","3c1e3fa905c2edef3f80d4e5f79cb481"],["/categories/TechnicalResearch/PT站/index.html","abf573d63e78f3e25bcbbeaf8a34a8ee"],["/categories/TechnicalResearch/Python/index.html","48cd6aa05f2035651a19ca7cc65fcb59"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","f2a9b302d328a0bf0f52bf4ed34383c3"],["/categories/TechnicalResearch/Regex/index.html","9223a540207fb2ec5d3134aca97c3e17"],["/categories/TechnicalResearch/Shadowsocks/index.html","1e918edf15546570e3eca7bd27099475"],["/categories/TechnicalResearch/Spider/index.html","0a1d67373b189bb66a8325d135299a9e"],["/categories/TechnicalResearch/TA/index.html","b62217eaa4f6e432ad3e872438095a56"],["/categories/TechnicalResearch/index.html","f1d0f66adba6d0f8300cc320e9e70dfd"],["/categories/Teleplay/index.html","026433344c041c4846205ea70fe52f5b"],["/categories/Teleplay/亮剑/index.html","c828f3c61bc2666eb3d8637c8f1d6ec7"],["/categories/Tool/Music/index.html","38d9e579a527b0292ab423c3f494d566"],["/categories/Tool/Wallpaper/index.html","90aaf6170352068f2e4e06e64202ea72"],["/categories/Tool/index.html","8032345cfa004c1f8e024203e8fd6a26"],["/categories/index.html","6431b5b7dd3861d8fb9be81c1d1c44ab"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5758cb091e6be6654bc38cfb0564e697"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","93d577d7f64381b5c29eaa357f0fd835"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","9af8707e8bde65e861ca6ee386baa3d7"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","7ce93d248a4356a13ba078463ffbd3dd"],["/movie/index.html","67ebab5789f0bf5e4e13fb00cfbd1f47"],["/music/index.html","dea9ed01b08d49edcaf502913837d377"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","b14ec8d6c68d7aca5038745ee9775796"],["/page/11/index.html","1dc6da8cd60523c0be1ce403e71829bb"],["/page/12/index.html","440d6b2e16ec3c8627b565efe88d07b3"],["/page/13/index.html","46198a2d5badc94ad505222b0c536842"],["/page/2/index.html","2ef723b0a31432d1ab734cbae4e675f8"],["/page/3/index.html","f9cfdb23a462a65aaec2d8c6f6de77b0"],["/page/4/index.html","6e0aee7c355e44a1205bde206646e9e4"],["/page/5/index.html","b739694ffa3430dc1d9fbb6cd952a126"],["/page/6/index.html","6c2587fcd1899f3b5bcbce617adba23c"],["/page/7/index.html","3bf99c724aef398deb45b1cb19192be7"],["/page/8/index.html","97180283f0a1815385940ebcf39a6b87"],["/page/9/index.html","76dbc8c5ccaccec2fd644c90b647ccf1"],["/tags/ARK/index.html","d6e5a1ddd0c31d6d73bd8e2973810695"],["/tags/Alienware/index.html","61a934a2e6973d6c903ca27ec7e047ce"],["/tags/Anbox/index.html","0dc287bf7b9b9709d3937f4119961a34"],["/tags/Android/index.html","7b22cc80c37fa3a6040a8b32fb09f3c6"],["/tags/AndroidStudio/index.html","4af79194fd1f8f23e20a0e45e2f679d4"],["/tags/Anime/index.html","dbc41db4b48ec86586b26343902074dd"],["/tags/Base64/index.html","37aea2303a7ddee3a01fe976a0c2c9d5"],["/tags/CDN/index.html","f6f121d5af771c8d0ed66519f779df6a"],["/tags/CSGO/index.html","677a83bcbe156f74ef563cd9b8fa515d"],["/tags/Chrome/index.html","bd5cd23516944c5247e61357d7464e90"],["/tags/Chromium/index.html","01bcce7e0daa21e39669a5569fcb4996"],["/tags/Computer/index.html","33f0fdf844c8fe94c82820628ab159e7"],["/tags/Contributor/index.html","6e384f455e2bbe470dc57bf5d7b180fb"],["/tags/Daily/index.html","957c96e0f0f62631b2c56394bda71b28"],["/tags/DeepLearning/index.html","3d4c11f29082fdb864f8c093ba749bc5"],["/tags/Design/index.html","f63d71f1670741514fcd06dc91391620"],["/tags/EditText/index.html","f602d8b3b52b7fd3201584823cb7d06b"],["/tags/Emoji/index.html","3a665e158adb87b3a869535487f7cd88"],["/tags/GFM/index.html","ecc88cbf590a1352ee1119d37abf6581"],["/tags/Game/index.html","30eb64ce7898bcff5aa1ffd3303e6e62"],["/tags/GamePlatform/index.html","b1d4e8514030c0286634ae6ccaf08b7a"],["/tags/Git/index.html","e638acf485f5b633fd26b06127d68d95"],["/tags/GitHub/index.html","61dc36ee8b494dfe33d2c6944a94f09a"],["/tags/Google/index.html","01bc2ee7b56a9b4c75dd794820e43b51"],["/tags/Google搜索/index.html","8228c5e023e6d9a73669b6ab93db492e"],["/tags/Guitar/index.html","35d0d5d13232697afdf1040bb3789676"],["/tags/HardDisk/index.html","545a114e7d552818d49ffaa17b42b244"],["/tags/Hardware/index.html","86e22e99dd9e1c18b138c1d6f91a626d"],["/tags/Hexo/index.html","388b1bd547193fee1e25df4bea5820e2"],["/tags/Hobbies/index.html","9ec4f77bf07e531bc856afed87677602"],["/tags/HongKongMovie/index.html","bbc14c963a35603db41860db93e4f17a"],["/tags/Html/index.html","0e2ee2ca5f7c8b5acfde750e1cb104b7"],["/tags/Interview/index.html","3cc3ac685c2610fb933a9310de7ff82b"],["/tags/Java/index.html","3db4915f5f9e57e6410cc0496938deb5"],["/tags/JavaScript/index.html","66107f929e4eca3e062d850b474945b4"],["/tags/JetPack/index.html","dcb7a20babc4f3337044af610a2f4791"],["/tags/Linux/index.html","64c3c5142f8908e83009093bd544a1c0"],["/tags/Lutris/index.html","1b6091e5e9805e6a6a2922ea6c5cb0fc"],["/tags/MachineLearning/index.html","7b46e7ad3e7fba8ede0dbefccd3ebd76"],["/tags/Manjaro/index.html","99ed636f8736f9ce85ade3eb8ad340d9"],["/tags/Markdown/index.html","ea0a5b72702d22f5a77981c6502f0045"],["/tags/Math/index.html","b9f281874827ccd471293d144ff78cf2"],["/tags/MathJax/index.html","ac2dc2215f048695f68f2f6d46733697"],["/tags/Memorizing/index.html","a6d1c1d58ce4ba6d6397f6434ca6b8d9"],["/tags/Movie/index.html","ff411ef163503450c68bd7a4fc6e1e85"],["/tags/Music/index.html","20fb0bced78da9fe75ef1a00f18d5a78"],["/tags/NexusPhp/index.html","7cdad56c88868551c939460297e0dbb6"],["/tags/Novel/index.html","cca81ac3676321bad955dfb7bf8140b2"],["/tags/Office2019/index.html","34149798a69fae557d962e94e82ecbfa"],["/tags/OperationSystem/index.html","4c2109714d2447b87c312ab9b7fd1a36"],["/tags/Origin/index.html","9330ab7ffa7c116cb8382e84c087ec72"],["/tags/PT站/index.html","a9850af9e8f208aeec43ee07a2cf1b9e"],["/tags/PersonalDiary/index.html","624eb37c43001f2754a3ef531609a9c9"],["/tags/PersonalPoetry/index.html","69a928ad685c511d30cbe9b223c32e02"],["/tags/Photography/index.html","f02bd7aec09626f7235a84bd71d96c8d"],["/tags/Port/index.html","90320742453d1e19b442e51b26122a06"],["/tags/PseudoCode/index.html","9b93008d74fe9e1c4e6b0bdafcf8dd7b"],["/tags/Pycharm/index.html","e1c25c6371196c3f0d650c905d36d697"],["/tags/Python/index.html","3c32cf170fd3da4c21146e11968a0e6f"],["/tags/ReactiveProgramming/index.html","299dc946617958597c1cf1ddc0a1bd87"],["/tags/Regex/index.html","d64965eccd514d058b4d4d347e54e2b9"],["/tags/Research/index.html","d03a2580237550e16e4c4eb1fa1e47ef"],["/tags/Resources/index.html","bb3d73f1c5c83bc316594ded6a71f858"],["/tags/Room/index.html","78e0924b8fbd61bff12e4add8ddc5961"],["/tags/Router/index.html","13fcd1a8e50fab942f2c63300d9c601b"],["/tags/RxTool/index.html","571446c2263506476ca71cc033fe2c7a"],["/tags/Shadowsocks/index.html","cc37c2e4e5c37a8270006144153d9c0b"],["/tags/Software/index.html","c7b3c949e53e7a3b079ec5b6f43636ff"],["/tags/Spider/index.html","84d601cfafa190d7119042ceec704dfa"],["/tags/Steam/index.html","bedad1af4b7502142a3a307bb3b0060b"],["/tags/SteamOS/index.html","fd7cc4e417e0af793183dcad3917e1b5"],["/tags/TA/index.html","ae66bdbbb9d322ed1a2c6ed4bf9a3d66"],["/tags/TechnicalResearch/index.html","13efce92f60736e27b4dd89e89f3d124"],["/tags/Teleplay/index.html","a071aa2e815ff502d325acf7eab8c7c5"],["/tags/Thunderbird/index.html","b8203697d0464e0a7c23e606f6af29a6"],["/tags/Tool/index.html","c79c3def381e793db4472e0cb38d8e7b"],["/tags/UltraISO/index.html","efc9bf7639ab6fe877cc724771b9dc29"],["/tags/UnitTest/index.html","de0fbe3ea50dccee1b7522660364b32d"],["/tags/Unity/index.html","7a16609109102ab5772a619231c574a7"],["/tags/VLC/index.html","fcc76b49747163c863282690bfd35800"],["/tags/VMWare/index.html","ebcc6b98f64ff33da4d26c9792053df7"],["/tags/VisualStudio/index.html","230a6863e366bf69e196409ba5ac440a"],["/tags/VisualStudioCode/index.html","28f01807ef9c82ccbd8ae3ec5aba0aae"],["/tags/Wallpaper/index.html","6fd68daf861c2ada5663ac8a6e08ca31"],["/tags/Windows/index.html","55dbdf95467a5b9d744d74fa68140fd2"],["/tags/index.html","f31eae88f0bc360696781a4a98febac2"],["/tags/专业术语/index.html","20a4642fe9acef9d1a04d51d4d6348a3"],["/tags/个人所得税/index.html","2a5da921aa626cca957108fb5afc6dce"],["/tags/五险一金/index.html","eff64af2cc25a4698da9bec3bfff375e"],["/tags/亮剑/index.html","b13f99c355c827d383424cfa33570568"],["/tags/仙剑奇侠传系列/index.html","25550615d8d3d1a72848e14e5f013fbb"],["/tags/劣币驱逐良币/index.html","bf284ad0af9174dcd765a61f7686f0fc"],["/tags/千与千寻/index.html","6a1d380d312bebedf0ff4bc7dc130b9b"],["/tags/宫崎骏/index.html","b65fa911cba3d8ed5fbfc705ee90ad7d"],["/tags/小王子/index.html","b5a623ce98a2a1ee2243acf109771111"],["/tags/开心鬼系列/index.html","5e8bc4380b16603e381368b72684d3ea"],["/tags/微元素/index.html","55529be483ab11315d07d0fffb622b30"],["/tags/思想政治/index.html","d598d15ff89f959093b4e334877a200d"],["/tags/数据结构/index.html","1df09d81875c3270a3d1a5215811b9fe"],["/tags/新型冠状病毒肺炎/index.html","c764031d9c9b3a89f18403e3e25ad113"],["/tags/游戏资源/index.html","9d9a52067ceb4ea0b2815e6257d33f6b"],["/tags/盗墓笔记/index.html","c2b5cf4ab494e8a7177980d733938bc0"],["/tags/线性代数/index.html","d074f6a3f1893ec4af8a932559cfcbe0"],["/tags/网络用语/index.html","3eab9060af59fec0c34b49d418b1f7ad"],["/tags/英语/index.html","b69d69aa89bd4872e61c084fece913f4"],["/tags/软件工程/index.html","3a7ad4296a78d190aea666ad5bc34f57"],["/tags/高等数学/index.html","7b9ffcb1f06a3a71ec17d7c0e9f464e0"]];
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




