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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","7862760b7994598f67caec03954eee52"],["/Computer/Alienware/Alienware更换电池/index.html","0c83d6de5657fc96a5c23049b2d5a3d2"],["/Daily/Hobbies/Guitar/吉他入门/index.html","158dea974959bb33f05005bfe8bdb750"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","c07d9f62b26c9ea1ee30abcfa7d4b89e"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","67b3266a51b95bceded3135f18fe8976"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","b9ae912730c955e7ee77bf08c1ce5b1d"],["/Daily/Hobbies/拟音/index.html","0bda63f660c6c2bca43903dd5a866e87"],["/Daily/Memorandum/index.html","32765785b13ebd915f1dcd1d4a7d73fd"],["/Daily/专业术语/index.html","40c5a3ed48ee936f5efa2f85927b01a7"],["/Daily/个人所得税/个人所得税/index.html","4d750a35f1ba7ba1f22b9a5c97e228c0"],["/Daily/五险一金/五险一金/index.html","57ed90ccfcdf7a1a4d552c477d5f1338"],["/Daily/劣币驱逐良币/index.html","6944586f1879d992dcb24ce6c78e3f56"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","02c732dd0675fb26c640f5e4080fc397"],["/Daily/生活小常识/index.html","997caa92dd155a0efce360bc2c5783c7"],["/Daily/网络用语/index.html","d6344a2b4fdf151db2f221ca95358a43"],["/Design/设计用户界面的注意事项/index.html","0f849d1c23c601f307ce788323e792e4"],["/Emoji/Emoji符号/index.html","a52af5692901671f7415673118b31272"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","9da6de2c4448d6dd0840ddf9ca30048a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","618242ec752a3f85418a97d82041387c"],["/Game/GamePlatform/Steam/ARK/index.html","a55a0e69a0381014e73228a72b2e77c3"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","1cdfce44c32c8ec23a41e311b0af0ebb"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","a4308c7c61c0395436d7b0d047cffa02"],["/Game/GamePlatform/Steam/Steam库共享/index.html","8da6eea2316019020b77d79781484a97"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","40ac145ccc87014d50bf53a0f556de4a"],["/Game/如何独立开发一款游戏/index.html","f8c1fc9d314197ad7e893ff1a4fb5a3e"],["/Google/Chrome/Chrome上网助手/index.html","bb97c7ae4e85020240269eebd80ad403"],["/Google/Chrome/Chrome使用技巧/index.html","a8be1055506016ab61c49ede44af09b2"],["/Google/Chrome/Chrome插件/index.html","4db42826c70a2efef233647b7e7d6ecc"],["/Google/Chrome/Chromium/Chromium/index.html","7bc249692274d32ebdd87d4b8a1ee606"],["/Google/Google搜索/Google搜索技巧/index.html","d5d4ef4854cf94166965d9a6a48d560a"],["/Hardware/HardDisk/硬盘分区结构/index.html","a9f9e51f1c98b0960ae0e8beaf15eaf9"],["/Hardware/Router/路由器固件/index.html","a263d1c3bf9287fa2384588154311589"],["/Hardware/电脑设备/index.html","82cf65870c9a7b9219482781defd4ed2"],["/Interview/Python/2020年字节跳动面试题/index.html","764782f8da7e415f21a0b7afa90e084f"],["/Movie/HongKongMovie/开心鬼系列/index.html","4831e4d656fde0c75e48f9edb4b5590f"],["/Movie/小王子/小王子电影的共鸣/index.html","0938ba37511b612af431381a7adc4a39"],["/Novel/盗墓笔记/盗墓笔记/index.html","3592750a361dcac34603664a1f52488e"],["/OperationSystem/Linux/Linux分区管理工具/index.html","f2b9015d73368e984583710e98ff5071"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","f98c4924da3e510766b99bf34fa6a5f4"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","22ebab49f7da1cd825a5cbcfc73695c7"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","210ecfdd2232b3d32e6281d749a7d290"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","07b1d85d3e6fe345f00f2433b1acc92b"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","b180e5819c3e6a809ce37f8e9764d143"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","813092bd42a53df1d1478c415e988ecd"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","973b89ae74ee33d7a2fd03585a480c02"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","22488a0c4444e895a22905faa9790afa"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","c802494d16f00d9a1f1e2d0b0765e2e0"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","63d233aaaafe8fd4e709f74475e12a4a"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","d6246491cec203ff87e63ddd37ced1cf"],["/Research/Math/线性代数/线性代数公式/index.html","3140c8c57743531118d0153f4abb008a"],["/Research/Math/线性代数/线性代数知识点总结/index.html","567ddc5c64f630141b0ddf06034b10e1"],["/Research/Math/高等数学/高等数学知识点/index.html","98b632d1a4de9620fcdc61af3c54e393"],["/Research/Memorizing/费曼技巧/index.html","205babb68228b25da4055103ddeaf65a"],["/Research/思想政治/考研思想政治理论知识/index.html","7b6541cc5dc7eaaebd4460ce45010c18"],["/Research/数据结构/数据结构/index.html","179dc30073f00de772e23a9ad7c6019e"],["/Research/英语/考研英语作文/index.html","ac7266e417baafa249da42d67ea9697d"],["/Research/英语/考研英语词根/index.html","90c2c98661d73eaff372b338cd0bed89"],["/Research/软件工程/PseudoCode/伪代码/index.html","86e56d85d55523b483fa24421326f5f1"],["/Research/软件工程/中南大学软件工程考研题型/index.html","a5f2ce83cd5b89953747e45e7f6ec4b9"],["/Research/软件工程/软件工程基础知识/index.html","c824f6ff29077834a0529880c35d0627"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","8992600ca254b1ee16bca6e8ad8275fa"],["/Software/Anbox/Anbox/index.html","c448feab318e40914d5cdb5112b41057"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","28d2c0987be99878bbb6a8865c426437"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","6643693def770471fd188c87d155e628"],["/Software/Office2019/Office2019激活/index.html","e2a645ec3fe8ded200b3bb11b4155ad5"],["/Software/Pycharm/Pycharm激活码/index.html","9f58e815af592e88f3603a107bf1bc3f"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","46df8d334a06da7c0ca61530f465d2ca"],["/Software/UltraISO/UltraISO/index.html","9789f00bfce7efdd839d87d83c53eb1a"],["/Software/Unity/UnityHub许可证手动激活/index.html","c0c72adf6a93c724f87775db06891505"],["/Software/Unity/Unity使用技巧/index.html","847d44904bb463fb1846cd86cc9e9fa3"],["/Software/Unity/Unity动态加载Prefab/index.html","03dceeafaa579b82b90503e0dccd9aac"],["/Software/Unity/Unity合理导入模型/index.html","3bcdb127a5626296df2a8bdfa00ef8bf"],["/Software/Unity/Unity的Canvas组件/index.html","b62e694a2dadbe3eaf80eaa0878e89dd"],["/Software/Unity/Unity问题归纳/index.html","d3efa870a866b259c433440b4afecee5"],["/Software/VLC/VLC使用技巧/index.html","3539bf0ba857b323b89d0dea5b75617f"],["/Software/VMWare/VMWare/index.html","1d9d2c2497af698d132f032920a4d949"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","d0cf67b7ceac94fcc57e5770d0630f97"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","4b655388fe5d9f9fd010a7b45d10f189"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","75243e2d7b9d85d32147045dcf684132"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","f6264b2e243977bc3d51c574ff260385"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","a15593f98f54cb52605e0bc9a9101243"],["/Software/Windows常用软件/index.html","0fddca48173404ec0dab3073096f1696"],["/TechnicalResearch/Android/AndroidX/index.html","5617da3ea063b8704ed746b22ef0e88b"],["/TechnicalResearch/Android/Android之JetPack库/index.html","a533c5e712b662e47272a2885c9048a8"],["/TechnicalResearch/Android/Android原生开发现状分析/index.html","099352e9bd3ad01a59c2fcdf586076af"],["/TechnicalResearch/Android/Android唯一标识/index.html","22cb549ea18ae1206e6c5c2cf28c7bce"],["/TechnicalResearch/Android/Android强制关闭软键盘输入法/index.html","20c21c6d137822b7c7cbf5b61d2d33e8"],["/TechnicalResearch/Android/Android研究Fragment/index.html","df45810cea3a3e3536a1ec37e0c7b30c"],["/TechnicalResearch/Android/EditText/Android研究EditText/index.html","510310c1193871823a5a3e8f53f6b08e"],["/TechnicalResearch/Android/Room/Android之Room库的使用/index.html","035809ad3c1c9cc66b40d3dceec99f24"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","2601928c6ea6f7b453111dd038840c8c"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","2fa592d822b71d1ddd4866d0532bbc37"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","4b46d754ee88809ab917e2bdc753cf20"],["/TechnicalResearch/Android/UnitTest/Android单元测试/index.html","b8eed5d9c5afedd0da7df695d1933ee5"],["/TechnicalResearch/Base64加密原理/index.html","b180ca0dcf76125307f6de569a018cb4"],["/TechnicalResearch/CDN/index.html","cb0f61c04e821baa81efbc678256d742"],["/TechnicalResearch/Git/Git/index.html","c4c8e5b9155f02013874a13a92f46087"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","42ef8f62e56b5c139c5c5e122e983139"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ba6ebbc00c77f8458d09d6a58b6b91cb"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","58e14355c67de9126241d85ae185eec8"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","3ca0039eb170f0d3d5d337f1e345bdad"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","52940392770fb23fe53e7ceba6b06cb2"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8b8aac5dd5b6b63dbfbd664d2b1a53ac"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","869c381d15d9e3abc070e950ab4c5ef6"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","1ec0a24c3e2229e783e5418eaf0622f6"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","cf7f58910104c6ae9425eb46c35346d5"],["/TechnicalResearch/Java/Java基础快速入门/index.html","9e92eca2d5a16d825dc730d40590ab44"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","c9a625f3dcff68ba62bd5043521d4403"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","732d2a6b6ba29cc492fa0bd030b1eb87"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","bb36314d71757fc385f3adf2aad5bea9"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","5ec4831efefb32b9dcae04054ca52921"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","77ede1fee96cef0f26b5ffc1e5085773"],["/TechnicalResearch/PT站/PT站/index.html","38bb08952de5dc0f9172fbdaaee141e9"],["/TechnicalResearch/Python/PythonExercise/index.html","d2896031c4689446e279e6df903fbaaf"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","04f5c357e18cc425707d232c0dba88dc"],["/TechnicalResearch/Python/Python问题归纳/index.html","9fa18fc66bf55677f39e7def6a2dbb00"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","5e3f81edcd61b8be668e1be7c2cd388c"],["/TechnicalResearch/Regex/正则表达式/index.html","142c6c2b0b577a72ec94720f54d8114d"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","1a257bb5714a248b656d588d62b5948d"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","d84500c5c88938a9afdca69bf839dd3c"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","8c40cf0d2cf3857d9ece986a78a253c9"],["/TechnicalResearch/服务器常用端口/index.html","2ca2a6eba83883f7d64e053dc9e57705"],["/Teleplay/亮剑/晋西北铁三角/index.html","2334f4efc8563c40ecd66cf1138ab142"],["/Teleplay/仙剑奇侠传系列/index.html","4e5d3a76a4c87f5f5f313ba7e8c7d007"],["/Tool/Music/网易云音乐/index.html","a436b44d77636452280dc79e72e013d8"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","35e883980962d934dcd7f6c425603973"],["/Tool/百宝袋/index.html","f059b8fd59010bb21712aa556f27c372"],["/about/index.html","8dac93df8a9d4218e4c9b8e23eb821de"],["/archives/2013/10/index.html","fe9b0a39f8c54c5e158defc426cb6799"],["/archives/2013/index.html","3312ee07c31757566deb87b238900a11"],["/archives/2016/02/index.html","04489cf0b136a03f0f716eb46285d77e"],["/archives/2016/09/index.html","33f708c7f538c51649f2babf76df4a45"],["/archives/2016/10/index.html","3457685a2614ace621b6e1f62056554b"],["/archives/2016/11/index.html","9d066950590e7c5fe0b6aa72616102f3"],["/archives/2016/12/index.html","9c54dbf2535801330356460e99ee59ab"],["/archives/2016/index.html","54e59a70e6d89368844688111c2a793f"],["/archives/2017/03/index.html","e2cc231b4734b09153328023c77dc72d"],["/archives/2017/06/index.html","d07c30a93347e51f2912ccb00745bcd3"],["/archives/2017/07/index.html","03b444c350d3d8d1e5f11a35b9e9e946"],["/archives/2017/09/index.html","c39b502aa0ee74cbc2495845eb77f119"],["/archives/2017/10/index.html","1715835d76b3707400a66f75a4a1cd76"],["/archives/2017/11/index.html","435fcc8fe53fecd3ba6d42856b181a61"],["/archives/2017/12/index.html","8b11f4117c13c78eb643a0149025c425"],["/archives/2017/index.html","ac4ba60c785d7e56614fe9da3a61124a"],["/archives/2018/04/index.html","1e11ad3b11a69e57c155ab8e06359591"],["/archives/2018/08/index.html","09c4848eb43d03c0dbc136a1e1352f1b"],["/archives/2018/09/index.html","065e2006be32d0b4b8e5a3b5582ba8ff"],["/archives/2018/10/index.html","dfffada80f00837d2898f71906b18d0e"],["/archives/2018/11/index.html","346617112c99e4657ba542723f6d80c6"],["/archives/2018/12/index.html","1d01ac4204b65c0d8e1ac5a5952f7619"],["/archives/2018/index.html","2e535779e84b38b51505b9a1f4613ab3"],["/archives/2018/page/2/index.html","67aa8f4c1204484cbfc2c7813c21bcef"],["/archives/2019/01/index.html","1ef2e4eebd486641323ea0971ddb8e79"],["/archives/2019/02/index.html","41534c66c43d94a3844ae5ee1a988c27"],["/archives/2019/03/index.html","1ad542a99b2cf39d15f588e917e84f69"],["/archives/2019/04/index.html","e830f53ea9baa59e781fc15c380fc7c7"],["/archives/2019/07/index.html","e8769cf252e3081507f1313b86e5ae26"],["/archives/2019/08/index.html","9982a866c6402366bb2a55a3c1d11fa6"],["/archives/2019/09/index.html","829c33590680c4b7907a9d4ed9175e6f"],["/archives/2019/10/index.html","d4aa4aee896509aec1220df538c0ff04"],["/archives/2019/11/index.html","cde253e354ad25f9e29913308271c6be"],["/archives/2019/12/index.html","2501dec24cda96ff5f11dd2228cb01db"],["/archives/2019/index.html","70faca08d95a8c729f164f73dffd5e9f"],["/archives/2019/page/2/index.html","ba918d50a5ce699b15cdf6d7a42de34c"],["/archives/2019/page/3/index.html","99a4f9c1b823f98eea0c54eb14737e3f"],["/archives/2020/01/index.html","db13101dccfcc2c5ef0daf82c12f74c5"],["/archives/2020/02/index.html","22e6a68a8355f0d1502e1ca8fb491c76"],["/archives/2020/03/index.html","25641263e4c73fadc66c999baefe86f5"],["/archives/2020/index.html","beb1424e49093300a844c7382d6c279f"],["/archives/2020/page/2/index.html","959efb2d2a19ae5efaa29afa632f8050"],["/archives/index.html","09a255740ba53fef85e5fe58adfcfc24"],["/archives/page/2/index.html","2ba4c928864ee5c392d948c67b509920"],["/archives/page/3/index.html","473a4557f619c7fe856e771dc655431c"],["/archives/page/4/index.html","2c457880af42983e8efa3910531665ec"],["/archives/page/5/index.html","108b922257ce21db9b29ceda456fc60b"],["/archives/page/6/index.html","db589270147ec9d10caa6ab60d561b99"],["/archives/page/7/index.html","1e8b57e289e8b3dfc4f0282228ba0546"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","79ee7db04aeb33a0e112ed283d2ed9d4"],["/categories/Anime/index.html","1e630fd9a004b91207483c8cd468a3a4"],["/categories/Anime/宫崎骏/index.html","428911a85a842852b301e53fab6a0ae8"],["/categories/Computer/Alienware/index.html","ede417ddd383b7fbc0f9491ad3ae78f9"],["/categories/Computer/index.html","866a5d4019fbe3d91c741f63cbb566ee"],["/categories/Daily/Hobbies/Guitar/index.html","dec2f3a9eb7db39861915b246bc85958"],["/categories/Daily/Hobbies/PersonalDiary/index.html","b335df1b551d7630f6924cb152d173c6"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","7e73861dcc508891000253386c8a586a"],["/categories/Daily/Hobbies/Photography/index.html","1dad92a361557bf5f00140ab47af88c0"],["/categories/Daily/Hobbies/index.html","fc438762568763b12117cbbd2c5c7f8e"],["/categories/Daily/index.html","e14f6eec6f1226c3310d98fe61978211"],["/categories/Daily/个人所得税/index.html","c92b8188526203bbcbe0e7daedc287e8"],["/categories/Daily/五险一金/index.html","a8ac67c3fa12f4ae3d6d6bb6d5889f24"],["/categories/Daily/新型冠状病毒肺炎/index.html","26237bf637298ad3aa2e152ac7ce9727"],["/categories/Design/index.html","f3110439a82173048dea07b27dc55775"],["/categories/Emoji/index.html","47234d3342b0b61672e32d6a486071bd"],["/categories/Game/GamePlatform/Lutris/index.html","986622ebe6ada3c3daf58234a835b0b8"],["/categories/Game/GamePlatform/Origin/index.html","3bc966f4baa4c0315cf8052f93997901"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","9c3cfecbd0efbf205e1773a28295a9dc"],["/categories/Game/GamePlatform/Steam/index.html","04255af487032e4f18feae5cea285828"],["/categories/Game/GamePlatform/index.html","5485ff7bcd2c83707f1890ddaa79faf4"],["/categories/Game/index.html","d1adfc48dad91965b3c7bb1eeba6f866"],["/categories/Google/Chrome/Chromium/index.html","30d9d34647723c0c28305a0446424ec5"],["/categories/Google/Chrome/index.html","eb21aaa536bb7b3e969fba56a6dc5e04"],["/categories/Google/Google搜索/index.html","31d440f3df9ef0abfdc6290f0c763007"],["/categories/Google/index.html","2280a5642d3102d51e07a9395ffead94"],["/categories/Hardware/HardDisk/index.html","e5ec2b24d61f043fe319f7b69c9cb631"],["/categories/Hardware/Router/index.html","769eeff76d22b20661ff01d4b20f7d0f"],["/categories/Hardware/index.html","e864c2793dcd5a65346c427e6adc313c"],["/categories/Interview/Python/index.html","fc6446d460f6746cfce8fd01435290d1"],["/categories/Interview/index.html","a38c856c60cbc51597947041120c286c"],["/categories/Movie/HongKongMovie/index.html","bfe37fe12062c866b874a12c31cade46"],["/categories/Movie/index.html","62f5e63c5e03381e82d3c4074d6b71bd"],["/categories/Movie/小王子/index.html","9d3a66f9c7acef52de2bc8f4d8dd8ba0"],["/categories/Novel/index.html","1d0bade5ba09f341b61f96d31714494f"],["/categories/Novel/盗墓笔记/index.html","1968bfcdff6350abeee868fe51d39b26"],["/categories/OperationSystem/Linux/Manjaro/index.html","926a72636d1d6b5a68b307740687f209"],["/categories/OperationSystem/Linux/SteamOS/index.html","2931c1b7fe67308eb9b6d4acf0db9fdf"],["/categories/OperationSystem/Linux/index.html","ba422b7bc78f88140be33a6f32068b8b"],["/categories/OperationSystem/index.html","68509b2b66b31f50f1ba5db70cb04ba4"],["/categories/Research/Math/MathJax/index.html","50d8f72cfc7ca8d7e4461ff230c2cb55"],["/categories/Research/Math/index.html","35ac88367ee1bf27bceca896c1a5e896"],["/categories/Research/Math/线性代数/index.html","e078c4c78b482c448a6440f6c8d7abb5"],["/categories/Research/Math/高等数学/index.html","76133570a948fddf9241a347f3a30589"],["/categories/Research/Memorizing/index.html","08a6734cebc21fc0f8aefe8df8aff3c6"],["/categories/Research/index.html","dc0953483ed8c15a5acae9ee9b6ef006"],["/categories/Research/思想政治/index.html","a5a3c760445c9ab75a41ba69e622e854"],["/categories/Research/数据结构/index.html","97e320eac9ce598991e9f8e2b4d7e18c"],["/categories/Research/英语/index.html","5057ea37f66f692c2e0ed554aa9050a2"],["/categories/Research/软件工程/PseudoCode/index.html","c1c6d8ee58ebd2bb8fd1e4e9877cd342"],["/categories/Research/软件工程/index.html","dec92fbfbcb6e79b819e18e4b07059ae"],["/categories/Resources/index.html","3983103b689ad7182e04137c4888cd0e"],["/categories/Resources/游戏资源/index.html","36e0732ee4f57b790e33804c365c171f"],["/categories/Resources/游戏资源/微元素/index.html","b04489dce2b4a5b413a8b079e46526c8"],["/categories/Software/Anbox/index.html","e8df19933f0213a912d2661e79825985"],["/categories/Software/AndroidStudio/index.html","a0319db3623a9fe6c57f339c512cd930"],["/categories/Software/Office2019/index.html","2d95de61d2cf6029abf66e0153982fcf"],["/categories/Software/Pycharm/index.html","8575cad7eec7f5140fcffa5ab0b07e1c"],["/categories/Software/Thunderbird/index.html","96e7bb1e0257e8199a1bedcc17c0f14e"],["/categories/Software/UltraISO/index.html","6ef76cd82a6e3977582067a324fa212e"],["/categories/Software/Unity/index.html","b448e071fec84517834216e6d704a4af"],["/categories/Software/VLC/index.html","52ae5534a09b7c1af690d7d3760a3716"],["/categories/Software/VMWare/index.html","81538d363fa85acecb1959e28b3a33d5"],["/categories/Software/VisualStudio/index.html","ecd9067e3179699d932a037bb9592bf0"],["/categories/Software/VisualStudioCode/index.html","6212c946c52251286a3e6a2e4756df55"],["/categories/Software/index.html","7050bfe3ce57fc01a476b80fb0174283"],["/categories/TechnicalResearch/Android/EditText/index.html","52721523ce14d91997458de6eb62fb69"],["/categories/TechnicalResearch/Android/Room/index.html","ffa1ba77febb7ad18af6186cd02cdf4f"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a042a7519dd61f603af872f2739c393c"],["/categories/TechnicalResearch/Android/RxTool/index.html","466c7e5eb118c6ca0c9e457b9fa8fc35"],["/categories/TechnicalResearch/Android/UnitTest/index.html","622eab0c375b66f17a5bc8075cff9991"],["/categories/TechnicalResearch/Android/index.html","8f76653cf9532723827ed53a9b84d741"],["/categories/TechnicalResearch/Git/index.html","f09f8c5aaf13ee6c40680acf31194239"],["/categories/TechnicalResearch/GitHub/index.html","5f6843da6d298e78fe27c78f2b541b45"],["/categories/TechnicalResearch/Hexo/index.html","5e5ef6bbae8f9e7ef005b508e2f1b01d"],["/categories/TechnicalResearch/Html/index.html","386c8993d990fcce553eb45ea7cb3b87"],["/categories/TechnicalResearch/Java/index.html","36936e7d05ba18cd6d90c33a9f1ebb75"],["/categories/TechnicalResearch/JavaScript/index.html","d39d5e03825ee8b5f02afa5b2f7bb5a2"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","6e7e1b029578d9904759521b6d210eff"],["/categories/TechnicalResearch/MachineLearning/index.html","6e3c4d52907212db3bf84742285a1202"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","046d836bcd65d24d3cfe75bb1ecdae42"],["/categories/TechnicalResearch/Markdown/GFM/index.html","a449595de8176397631518caed8b9db7"],["/categories/TechnicalResearch/Markdown/index.html","2f8d06fed5a0ad5c4a25c69aed1a6085"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","89f2ae0f2d4543e85db9abf65d0b7622"],["/categories/TechnicalResearch/PT站/index.html","f7bcbac53d77f09a27495e1021135e2d"],["/categories/TechnicalResearch/Python/index.html","20a319b70de6f5572a57f8affb79c464"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","1394033b0b91b4c0fec910e0142d3157"],["/categories/TechnicalResearch/Regex/index.html","34f9c7f79a325829019a52189be2edd5"],["/categories/TechnicalResearch/Shadowsocks/index.html","059dc0924095a9d5d243f0d2fa745bbf"],["/categories/TechnicalResearch/Spider/index.html","5778fa3766d80adbc73bedd6b59a6607"],["/categories/TechnicalResearch/TA/index.html","459ed58293c904286f96ae893229ab37"],["/categories/TechnicalResearch/index.html","300e0d6579690b863e5600410d13e5c2"],["/categories/Teleplay/index.html","bb9fd0682052d70bd56ea5a50488358f"],["/categories/Teleplay/亮剑/index.html","59f804034a31119d7ee6b08a6c3b3f82"],["/categories/Tool/Music/index.html","d988e68e62e7a76bddd16ecf1f4ea012"],["/categories/Tool/Wallpaper/index.html","d306564182a8e130db1e0c175f03ab27"],["/categories/Tool/index.html","8941089c974677ce7bb979be82594e90"],["/categories/index.html","a6b9dcaa470d1bf8697c01cb10d46c25"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","05fca7773a2968b93b863def03d0ae20"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","d2a5ba4f4528688b44a8692fe194fc0e"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","9db5918e1276aa93e79ee8a0a56f034c"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","ed2a5fed7b1750246f13545aab3ba886"],["/movie/index.html","6ccc03fcf6b29258de6a697e54448a5a"],["/music/index.html","f6931c925712f326aaacb4ca35eb4b63"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","eeb1ca8f799bde1b8e260080cdf82c33"],["/page/11/index.html","efda292d7894ed8beac0687d982f8671"],["/page/12/index.html","bb7d6f20f6e0d779aaf38199f4f3fe60"],["/page/13/index.html","9dbd77ab3ddbc44b159b221aec54d78a"],["/page/2/index.html","7c079e7d91f6c535160f8b61564fba21"],["/page/3/index.html","21aaed6a5cd0489c21cfd0dfde2d90e2"],["/page/4/index.html","a5fbd9b9abdf80c3c15c44b25b02504d"],["/page/5/index.html","c13013902b774d7a249005c6d0b6e0a3"],["/page/6/index.html","208de03fb099c84248e1465f1703c720"],["/page/7/index.html","2326ed5eb8397529e0af7a37e9455c0a"],["/page/8/index.html","c6d4b3aaae6cb594fb3a22da5fc744fa"],["/page/9/index.html","d7917838d4e1d2d938587dd68e2d1f61"],["/tags/ARK/index.html","234ce800523f91089abe884ea8c3b399"],["/tags/Alienware/index.html","9d9867fdd239572a9154dee9d141d4fd"],["/tags/Anbox/index.html","1ea932add20b5437faa400bd4ce5cf2e"],["/tags/Android/index.html","6f5703c0b50fcbbf4cc0a8350d04d7ce"],["/tags/AndroidStudio/index.html","9342cf02e2c052826c293bca10414730"],["/tags/AndroidX/index.html","4a8d167e58c180ddd8bfd47387517edf"],["/tags/Anime/index.html","ca1e473d4ade75472633c537f7d614ec"],["/tags/Base64/index.html","4df07e42c8efc40770ead1329d9434eb"],["/tags/CDN/index.html","64cc5ccad1fd907c00a0daeb6af2182b"],["/tags/CSGO/index.html","99927ff59773d24279853fce592099eb"],["/tags/Chrome/index.html","1b461b72c139dc58af2f746f69274495"],["/tags/Chromium/index.html","feb90a84d4701a4f12b135cec0e9c1af"],["/tags/Computer/index.html","d2ad561dd7b45399b029a341a819e905"],["/tags/Contributor/index.html","6678f848b4048b255083f4a454140603"],["/tags/Daily/index.html","294025860ca1b03d2c5d51ad16413a79"],["/tags/DeepLearning/index.html","1d6027c151682331b08e13bd5e8b0c38"],["/tags/Design/index.html","991535c318cb3b568d92bc54752010ef"],["/tags/EditText/index.html","231e81e449ab8dce91501570662a03b9"],["/tags/Emoji/index.html","fe2c662ad8b0541b5635c68a0a704426"],["/tags/Fragment/index.html","6890e6827eb38b1cda80c875350e24a2"],["/tags/GFM/index.html","4344aa4fed5558a3aea9e780af42ecb9"],["/tags/Game/index.html","c2314957e3329bdcc3e07a3d4404f43b"],["/tags/GamePlatform/index.html","97e14d1076bbfd032c13740af94426d5"],["/tags/Git/index.html","f363a6df7054ded2874a34c9bd392d1f"],["/tags/GitHub/index.html","52133573a228497b683f3a55df6c66c5"],["/tags/Google/index.html","c4597fc95a88c24d22c12296bde35f97"],["/tags/Google搜索/index.html","51ed1183d926604831bad20e7855949d"],["/tags/Guitar/index.html","e08b6c98191a31f681911266d983c22d"],["/tags/HardDisk/index.html","d036c886e8f4232d93a28f37ae9bbf9d"],["/tags/Hardware/index.html","324afe42d8d64d58a87e354d7130b17c"],["/tags/Hexo/index.html","51f53baa7657b08254ec7da5a1e69dad"],["/tags/Hobbies/index.html","85bc3bb8782a483832704da3c1fb9c4e"],["/tags/HongKongMovie/index.html","b954f8575a3db64088a6c3bcc726865f"],["/tags/Html/index.html","7922dd1a49edc926f2255dc88a158565"],["/tags/Interview/index.html","e1633d10939266a968df9787c36b47cc"],["/tags/Java/index.html","75bc7a17a0959179f49e6a266fa0d18e"],["/tags/JavaScript/index.html","6a36f84c172140bb6fce018f863e536c"],["/tags/JetPack/index.html","632669428eb0c6248be0a55a4de0b4cf"],["/tags/Linux/index.html","a55ff0d5c58d9b1dcf021c25ec64d2ce"],["/tags/Lutris/index.html","957f38e274023044b0bd924d0a3f1f65"],["/tags/MachineLearning/index.html","7f6dfa5122c61da32d3eb76586c9065e"],["/tags/Manjaro/index.html","529129da2a073444a4ba2a7468a4ecbe"],["/tags/Markdown/index.html","9343d56e6cdefd078ddbd076e1654158"],["/tags/Math/index.html","94b6828597cd1906ec06ba789d09d851"],["/tags/MathJax/index.html","44c7c7b106b6faf22dd01b75e14d7266"],["/tags/Memorizing/index.html","d38e67d6c34aef19fbea697c77ddbd6f"],["/tags/Movie/index.html","80f5b736c90165234a9b8569958d32eb"],["/tags/Music/index.html","88052a46d32198681e990a896e518215"],["/tags/NexusPhp/index.html","c65ff656ca7de2e71aa836d4d44c2d8e"],["/tags/Novel/index.html","71fc65088c8ec59b17c010a5101ac0e3"],["/tags/Office2019/index.html","f458e749429c6b0f8964bca0e96abda6"],["/tags/OperationSystem/index.html","7cb0cf3e01c19c28357a62a83e1d3af7"],["/tags/Origin/index.html","7dac78db16b30b0c730957fcf47a0cd7"],["/tags/PT站/index.html","875639632e075bf6c0cf2689726fd5aa"],["/tags/PersonalDiary/index.html","3dc17bab8b810eb716ca5fe25e497b62"],["/tags/PersonalPoetry/index.html","e3c7675acfd35a56ac38b590d5ad8eec"],["/tags/Photography/index.html","4ac360caf7cc8e6db4e67cee3abb3a5f"],["/tags/Port/index.html","2a4959be7ac31e22c7861cc8ed5e37ae"],["/tags/PseudoCode/index.html","150fa4d7edfe1dec030ad9bfb9d4c663"],["/tags/Pycharm/index.html","b2e23ad632de07ff8ba417b98beb1bcb"],["/tags/Python/index.html","a89a7da5bd160d06d1ba9e3d59c7a930"],["/tags/ReactiveProgramming/index.html","f16e4ba03252c67cad21c8b1c51d43e9"],["/tags/Regex/index.html","794605da7d0c8978d354d4087d5c4e5e"],["/tags/Research/index.html","6ae4d739894f5784751e2a93bf67e64b"],["/tags/Resources/index.html","ba2fd563eee03431825814282e48ff90"],["/tags/Room/index.html","16277631aace2fcad36835d5d65fe1f4"],["/tags/Router/index.html","ecc59bc1e9280027411a3bbd3becc43b"],["/tags/RxTool/index.html","b74ffb2bf71d26fa0f63a92a168b6cd8"],["/tags/Shadowsocks/index.html","8ff2f71e3eeb9b2261216378b41ef1ff"],["/tags/Software/index.html","8f453dd0ae6c172dfc4ae8cb78655c50"],["/tags/Spider/index.html","959336f4615d0adbd1d1b5a13532afca"],["/tags/Steam/index.html","e9db5ec0c87b59f70ba5bcaeefca6686"],["/tags/SteamOS/index.html","26e8ad43aa7fea93f307925ca6858e6a"],["/tags/TA/index.html","bd829736673b2c87580213daf2f8d63c"],["/tags/TechnicalResearch/index.html","8b2e00097135b5768bd5ed433394a6d0"],["/tags/Teleplay/index.html","2ff451dd677ab07414635dac8f5e886b"],["/tags/Thunderbird/index.html","24665121a4f7d6d882e89102c3a46b12"],["/tags/Tool/index.html","df3fce3788dfe9a1f5668503e8becdcd"],["/tags/UltraISO/index.html","ffa1f5a54aa9a8a918831dcdad059685"],["/tags/UnitTest/index.html","f3ffdc48bfdf2ad0ecab0726f9b3e3de"],["/tags/Unity/index.html","09eed0cfe6ce011b42bc5b3efb76e12b"],["/tags/VLC/index.html","8c0d705df4bdda5dbd20e7f095e8d819"],["/tags/VMWare/index.html","cf75e34b31fd7e9515df49656ad03cdc"],["/tags/VisualStudio/index.html","bf45cfd9623ab18036b868c9318f99e7"],["/tags/VisualStudioCode/index.html","6fc189af3b7fc53ad40e8a32b60c96e6"],["/tags/Wallpaper/index.html","20b271afbcd90af045cc1d2663223a89"],["/tags/Windows/index.html","d474504584fa2969b857322957cab68a"],["/tags/index.html","4803d8eeb5ec1ca6c0c387f247dbe4b1"],["/tags/专业术语/index.html","9322af5a4600dc4f16a07ba76a17ad81"],["/tags/个人所得税/index.html","9b73b159e28f2efed437f4da7f232fbd"],["/tags/五险一金/index.html","0ecdec98b8ac933b6c1a1ab806ffaffb"],["/tags/亮剑/index.html","ed1d24e8d9bdf1d0c57c8a87899291f1"],["/tags/仙剑奇侠传系列/index.html","1b5a6999c28a0b2b871c975257cbecca"],["/tags/劣币驱逐良币/index.html","49aed0b73efe9df846e6d3e086dea5d2"],["/tags/千与千寻/index.html","bff8db6b5f0baf58bade22d79bd903ad"],["/tags/宫崎骏/index.html","332add7a5aec98a01b6a1a48c21f15ea"],["/tags/小王子/index.html","5f9d781bb3fe37339f913f57b80407f3"],["/tags/开心鬼系列/index.html","474e600307a4f41c15227b8c20a6c030"],["/tags/微元素/index.html","fb49920df4d1aebf0fe34aaea08d51f5"],["/tags/思想政治/index.html","9c541b35c31aa87559f90798808b58e4"],["/tags/数据结构/index.html","d89a6c5fef51b37bbef7ce1dc1711654"],["/tags/新型冠状病毒肺炎/index.html","dd671ed5e00469f2b3d3222e0f4f92f3"],["/tags/游戏资源/index.html","942c643142bb2d7682c08b1e9e318c74"],["/tags/盗墓笔记/index.html","41d3ddc3b4f300aa1aad3facc8864fe8"],["/tags/线性代数/index.html","578ab5d356e21d4eec06e338e92411db"],["/tags/网络用语/index.html","e55d08c76781fd86ceafd2e8c8d88cc9"],["/tags/英语/index.html","cf358f656fafd93be88e7d2b4de5e21b"],["/tags/软件工程/index.html","c401e3f32114ab0fe06523c17abf4c58"],["/tags/高等数学/index.html","4e2baa5582d064c470d2ebcdf5e0d4ad"]];
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




