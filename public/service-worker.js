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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","9f9dfa8c9eb8459c23e637c16be39cbd"],["/Computer/Alienware/Alienware更换电池/index.html","9293a9b61da951944ad33459c9f2df33"],["/Daily/Hobbies/Guitar/吉他入门/index.html","8c37bc0e719596e6963e01ca2cda886b"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","88f1334798793fd1e55ae74d2f2348a0"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","fab636792cfe1de4c7b04937e1748b26"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","6735b457e85a6f622e18742ccbe8d7fe"],["/Daily/Hobbies/拟音/index.html","5ea2eed3ad92291926a70fc1cc00f196"],["/Daily/Memorandum/index.html","06db56126e1c700a6edd2d20479e1da5"],["/Daily/专业术语/index.html","32fb7cd838f574a29271f1684240c8ba"],["/Daily/个人所得税/个人所得税/index.html","369879bd73678e95db8ab854e9357f7f"],["/Daily/五险一金/五险一金/index.html","c94987d8cce168ab1570d152658cbb4a"],["/Daily/劣币驱逐良币/index.html","1d35c1fa7da436d73083404d10ddaedc"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","406aa2f936dee77cdf64537b955fab33"],["/Daily/生活小常识/index.html","0a8b1af8a4029d1eeb734f0279c27b45"],["/Daily/网络用语/index.html","c9f093863d7549c8530ed8b5b23ac777"],["/Design/设计用户界面的注意事项/index.html","93808436029d33b0aea96e2c7a7f3697"],["/Emoji/Emoji符号/index.html","cd4da2c6d162647c65ddb5c7b855cdd0"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","b5d9379a8896fe661346e52cc1ce790b"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","d8aecfa1944c4d37a1e33bd2742d1c5f"],["/Game/GamePlatform/Steam/ARK/index.html","4477b005d46262c186a84779ae97b8ef"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","9ec5a813bcdcfe6b54d174c660f4a473"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","e477bfaacb2d93cbdfc633b571125b8d"],["/Game/GamePlatform/Steam/Steam库共享/index.html","a9c5104a23b89fe93c080d0f6bb2e969"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","e2ac94c62aa272a72b4d6c457c6240b6"],["/Game/如何独立开发一款游戏/index.html","cef57a26f0eed3d15be90e473a026fcd"],["/Google/Chrome/Chrome上网助手/index.html","ed84361a0ceca0475412fc51462549f6"],["/Google/Chrome/Chrome使用技巧/index.html","e6dc1d66a205cca2ff6db7695f35272b"],["/Google/Chrome/Chrome插件/index.html","b4b70694f00b0114af96b95137f2f3bf"],["/Google/Chrome/Chromium/Chromium/index.html","0a8d2d3f8c3f9c96e82b6a4442c16936"],["/Google/Google搜索/Google搜索技巧/index.html","18fc0ea5ea0126be136273327698413a"],["/Hardware/HardDisk/硬盘分区结构/index.html","3d6207b15602301327f35b8b6a49cab5"],["/Hardware/Router/路由器固件/index.html","4a5c11cce451017210bf1b9190f3d32c"],["/Hardware/电脑设备/index.html","8e951321cb54b2fa05ede423d056e4f5"],["/Interview/Python/2020年字节跳动面试题/index.html","3ec2514da3d357609c7a23223bac77b8"],["/Movie/HongKongMovie/开心鬼系列/index.html","f842009e861fface392e9f66b256e079"],["/Movie/小王子/小王子电影的共鸣/index.html","b25a95440476cdb04409451702a73338"],["/Novel/盗墓笔记/盗墓笔记/index.html","1c577e59310b9748f64f2d746acfad25"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5f2c134b0a3afc5f008a89d63d623a64"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","81025f78409971a5bad8e36d4c736546"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","a1254e01b40be178d0f4d7be5decc399"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","cf671d297ed5f5b9446e831d916288ae"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aa10018398ef73d60fea711d45b1c0af"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","cf71e157a178ec31fa431556c79f0dee"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","33aa539d09b6c402dc0dbd92deb85b51"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","bfb74efb3fccd6c4cb012db71362ee3a"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","0b5687a07de78664f1f1eb81feadb8f8"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","6449d604ac34a7cff25c4a28b61dcf71"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","3b314434881e03cec40fb6f46e0f753b"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","c2569e9f0fa7a6349306ab838b3e42a7"],["/Research/Math/线性代数/线性代数公式/index.html","c909c9c3807ca2b6456dfdfd7a24bb83"],["/Research/Math/线性代数/线性代数知识点总结/index.html","a107a4eeb0df03e949d737b8cf9792f8"],["/Research/Math/高等数学/高等数学知识点/index.html","d31e41ca9ef47ea3e3d7cbf8cbfaf989"],["/Research/Memorizing/费曼技巧/index.html","2c0808d1721543e4360c5ccf7fe30f08"],["/Research/思想政治/考研思想政治理论知识/index.html","4a044b6754e865c91903404e0ae10aa5"],["/Research/数据结构/数据结构/index.html","1f192a3f2ccb1636baba81ab6343558b"],["/Research/英语/考研英语作文/index.html","d166771a5d78c88b92f8aaa747d51330"],["/Research/英语/考研英语词根/index.html","6fa0b67eed971ec3faa446222547592a"],["/Research/软件工程/PseudoCode/伪代码/index.html","9a71c8150ed3079d6910abc4b94d4ad7"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b8887c7eb6861dafe063f18f0b905e27"],["/Research/软件工程/软件工程基础知识/index.html","019d34691f93d6b3f91195d2b0410a75"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","86a33d04f65b3b9d2220cc7569908d7d"],["/Software/Anbox/Anbox/index.html","fa6dc681878a0ebc09ee34a9513cc069"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","ba1a0215b8f86a87d52491134ed74a5f"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","62989f9ab0ba72561c955819f0c136ef"],["/Software/Office2019/Office2019激活/index.html","a61bfc83f5d1f9c01e721bfeb5dcaf8b"],["/Software/Pycharm/Pycharm激活码/index.html","f6f7c198369c7b0c4f6024a833c6ce70"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","72d29991ca4f0ee04d0b6a61ac3419b4"],["/Software/UltraISO/UltraISO/index.html","fa4bb65f9c1f73e6cc72eee827b161fc"],["/Software/Unity/UnityHub许可证手动激活/index.html","c821a02d236f8f293f0bc556fee35927"],["/Software/Unity/Unity使用技巧/index.html","9a7f3533e859743d4f0d4fd3b10d2c53"],["/Software/Unity/Unity动态加载Prefab/index.html","3fb7d626fa3d110b155e07d60e0dd537"],["/Software/Unity/Unity的Canvas组件/index.html","d72b999993be75eebd35bc08505608e0"],["/Software/Unity/Unity问题归纳/index.html","8033d87aa2c3d3d26e4558d27ffdace7"],["/Software/VLC/VLC使用技巧/index.html","784793820422516eac9effd23d125702"],["/Software/VMWare/VMWare/index.html","cda1671681c0abdb72271d2226a3cb28"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","7bda5d645828c35929e422c472318324"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","66901b6ecb52b5c6a862d99796aa5b5c"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","be693168f9cc874cb111a89e889393b9"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","9ee0e7828eb3b6f1ac754ccb47d4b8d3"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","88447938c6d0c19acbd98e030b8b917d"],["/Software/Windows常用软件/index.html","49d266cd488b9aea4a4c232d99737598"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","1a51ffe785dedf005b9a8f074129858a"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","272be6f6da26a65bc89da7a3944fbacd"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","ea03c460015af3b7f40a991fa351fd80"],["/TechnicalResearch/Base64加密原理/index.html","76893b483b926647be10b543666f8cf7"],["/TechnicalResearch/CDN/index.html","7b6e002f91df9b373d3cec83935b03ec"],["/TechnicalResearch/Git/Git/index.html","acea59d99db3b9750642080ef22cddfd"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","2a9c8ff15e7770ec43fc8984c3ca4c3d"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","44609528f36254e271a86d45227d3ba0"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","9b039ab91647f482d96735ed9614347b"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","f107ed9de14a76087941e6e1a46f20d6"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","d8ce1ec74163b42c29ee4828f924e112"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","58c37fe2fc7d0795a63e6c5d875c07c2"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","c01ad93ec1a463b74e8140a1bd8dde07"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","ba36088e5cc2f04307adc0c7cf6fb584"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","9d80894cc3916e21460f6227b15f78d7"],["/TechnicalResearch/Java/Java基础快速入门/index.html","591ac611dde85cad6cfedc7e5e6824a9"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","2d92a9d4598c7baf2f254e1927b71486"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","bf8e5f7d71cba366d5f3abfe148d0321"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","bef3e9efaba20a5212761fc019b7f9ad"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","38af351c310211fbf8b49916945049f7"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","c96dd6e1abf57750b3e5b1122c05b617"],["/TechnicalResearch/PT站/PT站/index.html","bde4444cb3da6231c237754f7d4fd4ca"],["/TechnicalResearch/Python/PythonExercise/index.html","77c97c78cd62c4cbd2cee1c0dc0fa91b"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","d6aa653ed201ed36b901ec74ff63f53c"],["/TechnicalResearch/Python/Python问题归纳/index.html","4436b78ef5edb34e9b967c27eb8ca4f2"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","6d2ad482207e58d506487f486adc9822"],["/TechnicalResearch/Regex/正则表达式/index.html","9be99fb2e0bb9e69b8c0ea75e1b55215"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","01db4cd5c4c7b2368e79824a6a674dce"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","805fb985c4796527e0036873e419af6c"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","9ef21cbb644e6a0b56291e91551d99c0"],["/TechnicalResearch/服务器常用端口/index.html","0cba387507b545cfee393bd43d195218"],["/Teleplay/亮剑/晋西北铁三角/index.html","bfe9f2e2ec5f73fdee94d59f7f2a0ee3"],["/Teleplay/仙剑奇侠传系列/index.html","53fc9e53c49eaeadea267f360219c932"],["/Tool/Music/网易云音乐/index.html","b6effaedf0b77fa3dc426755608f8413"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","455e64bd4184f8b0d84acbac8027ad47"],["/Tool/百宝袋/index.html","55fe8222739c7108e0b3f77ba059ec19"],["/about/index.html","2bf04e58851494427fa2c0650e258cc6"],["/archives/2013/10/index.html","d83307f2e1379bbb56592821dd7be6fb"],["/archives/2013/index.html","b84cebd8ca6c546d76e95376dfc8e551"],["/archives/2016/09/index.html","3b0914bca38a0c34cb06d6bb98e2621f"],["/archives/2016/10/index.html","1ee3bbaf00f512c341615b2d5cd425a6"],["/archives/2016/11/index.html","b835745997e12751d81277ce7163fcbb"],["/archives/2016/12/index.html","fc4cbab283bea6406e25d049fdff02e2"],["/archives/2016/index.html","3d7fec4f3c7ee5b5ba56c5148938517c"],["/archives/2017/03/index.html","e42eda14bb089a0b346c89ff632d0824"],["/archives/2017/06/index.html","c8af96c4ab1339369570b2f66ee0d3a6"],["/archives/2017/07/index.html","5813c85e96a70f9675c622c14a3fab68"],["/archives/2017/09/index.html","22c740d32a50d8ba22162b018dacea4a"],["/archives/2017/10/index.html","4a45bb1446f1324f812214f87f28d096"],["/archives/2017/11/index.html","4f53a9a03a39867ed6778edb8bb4eb5d"],["/archives/2017/12/index.html","e7c3c109b02969a19eb665168ceeb707"],["/archives/2017/index.html","005da59cdbbc0fa6b231248114e3e8e8"],["/archives/2018/04/index.html","8478c145a0189ad722d6f4663a689113"],["/archives/2018/08/index.html","2ee305a2a29c1f01aa909f349673d57b"],["/archives/2018/09/index.html","49fbb63f0dd1bfc63c74221b5b688f75"],["/archives/2018/10/index.html","38e00efb453b424cba73effdb75cdc19"],["/archives/2018/11/index.html","dca0d681e0cdf04403ae65768cbdbaf8"],["/archives/2018/12/index.html","515d60c5166a2b1a1ce8283876af0c10"],["/archives/2018/index.html","78678c82c3441f038e28dc86d36607b1"],["/archives/2018/page/2/index.html","dfcc7be5cd813253fdb0ab52542adcf2"],["/archives/2019/01/index.html","b6b8a8002db72c47be045b9f0540f566"],["/archives/2019/02/index.html","f58727c2cb1a82e41ea57c91ea5407c0"],["/archives/2019/03/index.html","ace7d66e2d59e4e11134f01858a09b63"],["/archives/2019/04/index.html","92261bbb1e70fd1f90d59decabab08a6"],["/archives/2019/07/index.html","d87fe70c38c206765f901e276e3da55c"],["/archives/2019/08/index.html","6a5752ca2dee6d8ff70c7c2d7f435c35"],["/archives/2019/09/index.html","2d33099af24942a926ff7b8b209fdc43"],["/archives/2019/10/index.html","8356d02e6860a820acf3bc14cbe4c274"],["/archives/2019/11/index.html","e1f8b616a74f7fe87fc24307abb1767b"],["/archives/2019/12/index.html","45495ed74417e3a0675de4554a157837"],["/archives/2019/index.html","b8e68dadbbf97d5e4f43703ac3094b2e"],["/archives/2019/page/2/index.html","036ec4680fff79541ec9dcba3d18c6d3"],["/archives/2019/page/3/index.html","4a8b7d10ab6269b3647b3d9c994f2770"],["/archives/2020/01/index.html","8cc06a7b2cc480bb4b3cdc98c0ab569e"],["/archives/2020/02/index.html","6805dff5d84f023048318aeef82dd93a"],["/archives/2020/index.html","449f4d4743272e033f448ddfbe667cf8"],["/archives/2020/page/2/index.html","6ffe439453f4484fa48848a6d966761b"],["/archives/index.html","e30f6bab31beda8c40f8ed5eb29a1d25"],["/archives/page/2/index.html","0be225f4a809c0c5b22b3590d26c9b33"],["/archives/page/3/index.html","b96068ec77b58c1d1f56cf0b38dbb83d"],["/archives/page/4/index.html","eb1d4d5aaf3006aa6699ce585b0beab2"],["/archives/page/5/index.html","d6f8c48c66d9277fc7489367d2932663"],["/archives/page/6/index.html","3cee50cf4b361d913eb7e44c9ee850e2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","eac6f54d420efdd657864aa317ab921b"],["/categories/Anime/index.html","dba67914d4d1417272657fc43af3f46b"],["/categories/Anime/宫崎骏/index.html","0fb8175fb6c017a41a19611803c73111"],["/categories/Computer/Alienware/index.html","fb5c0a29f6bed6e4fa34c0dbcade584e"],["/categories/Computer/index.html","b3c25fb72a0c742d16905dca9bc58e04"],["/categories/Daily/Hobbies/Guitar/index.html","ae359da5e4a74c188518645da7c74802"],["/categories/Daily/Hobbies/PersonalDiary/index.html","a82bd4f120b44b886b357ff696fd74a0"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","4fc19368d4c578e66c76e1009e5f65b5"],["/categories/Daily/Hobbies/Photography/index.html","d5489908536387c647cba5299159260e"],["/categories/Daily/Hobbies/index.html","405b685dda84687b07fd2a4d97aee603"],["/categories/Daily/index.html","94857f6e1a7c168231043d275996f8a7"],["/categories/Daily/个人所得税/index.html","a4dea72de6d5692e9dbeb1f5e86c9824"],["/categories/Daily/五险一金/index.html","56dfb0411793283e8ead1e0fb751617b"],["/categories/Daily/新型冠状病毒肺炎/index.html","c04d4de048e6bb8af1d3f656b6ee58ce"],["/categories/Design/index.html","b408de13aafd3898e44288e95b3c0fef"],["/categories/Emoji/index.html","d2e1d6e97c0a7f291d063b2cafc89649"],["/categories/Game/GamePlatform/Lutris/index.html","ddb81f8cfca9fd40137d586ebd87ae22"],["/categories/Game/GamePlatform/Origin/index.html","256acf5b945565edbf10f36108cccc04"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","7b70299311c1f9687f34ee9cf9fbcae2"],["/categories/Game/GamePlatform/Steam/index.html","c76d40f968f4a86de0c697dd7ffbbead"],["/categories/Game/GamePlatform/index.html","491f41db88942824cc1acb85965e4a8e"],["/categories/Game/index.html","e0093960afd8372f8f287fe44281f412"],["/categories/Google/Chrome/Chromium/index.html","1cf9c575687ecffc53973225ac6d8c96"],["/categories/Google/Chrome/index.html","2af1016d8e50d16f6b7a24cb0ea13427"],["/categories/Google/Google搜索/index.html","f8b291e055ccc53cd2c1d087f625fca4"],["/categories/Google/index.html","ec05693d3b15e1998ab19c9bb82a20b3"],["/categories/Hardware/HardDisk/index.html","f6a18ae08dcc212d24cf0a505f0d97d6"],["/categories/Hardware/Router/index.html","e49e2479fddd8c3726c2b4291614d3a7"],["/categories/Hardware/index.html","b485533904cacff020364d819bac775b"],["/categories/Interview/Python/index.html","5f131173080633c2df079c1707efda6e"],["/categories/Interview/index.html","d4c3178fb802f8269231481235081838"],["/categories/Movie/HongKongMovie/index.html","073be19affab7a55dc0b63f6c511da19"],["/categories/Movie/index.html","90aa149a5a64da8139a9332c7ad070f3"],["/categories/Movie/小王子/index.html","a1538df30c0d4c4541d2e21ba7865f1b"],["/categories/Novel/index.html","3282cc5a4bd898d213dc7c195ab9682d"],["/categories/Novel/盗墓笔记/index.html","f6a3a83315273576b1856f18bff3a408"],["/categories/OperationSystem/Linux/Manjaro/index.html","5d1925c867993ac0f145e646392d14b1"],["/categories/OperationSystem/Linux/SteamOS/index.html","aa4df57bd86980047dc7bd62275669ae"],["/categories/OperationSystem/Linux/index.html","86e38972b90fed15cf47c12eee368d02"],["/categories/OperationSystem/index.html","07bd3e788e8d4521d42c3ac1977190aa"],["/categories/Research/Math/MathJax/index.html","931f48343c1d9386cfa8424b7b1a2d9e"],["/categories/Research/Math/index.html","4d577ae1f00ffa3e29725b0d8862306b"],["/categories/Research/Math/线性代数/index.html","0dc4e6c705f716bbb4c67aebd017f2fb"],["/categories/Research/Math/高等数学/index.html","72a64fdbe2d64ad466055c4af82b2960"],["/categories/Research/Memorizing/index.html","5aab9816b0e9ffecb91008c59e84a8c6"],["/categories/Research/index.html","30491984aedc73b02e6d38c8df4efa41"],["/categories/Research/思想政治/index.html","64027af36cf4e5bf96a67353fd7f37ab"],["/categories/Research/数据结构/index.html","7243d1fe96e18fdb07920a5d0cc69375"],["/categories/Research/英语/index.html","67719e547fc0146f4fc1026bf681638c"],["/categories/Research/软件工程/PseudoCode/index.html","f2b64dafcd8313f76db12df4b546ce5e"],["/categories/Research/软件工程/index.html","934422fd5c6850cf6f874029c9d6c39f"],["/categories/Resources/index.html","c0b75713ed2d9b7c3e39d8078987f9ce"],["/categories/Resources/游戏资源/index.html","089c4deaf36d05a6fe65d9b4cce13015"],["/categories/Resources/游戏资源/微元素/index.html","c5ebc1e3e38dc2038df321e829f76c74"],["/categories/Software/Anbox/index.html","0844e778bdcccf0a967448331a17b2d9"],["/categories/Software/AndroidStudio/index.html","3cb512b380a4deb23d2dbe4a66388706"],["/categories/Software/Office2019/index.html","d237173fd1a81defbb3ebf8b29468e7e"],["/categories/Software/Pycharm/index.html","243618683b5ff3bba96c943144133315"],["/categories/Software/Thunderbird/index.html","5a437ff17c0872f4f274bc9e661aaf97"],["/categories/Software/UltraISO/index.html","5f89e8f2af249b8cf25284a89cfde7fa"],["/categories/Software/Unity/index.html","b7acae932425b2504936d9c03064795c"],["/categories/Software/VLC/index.html","e8df22ec58016ba019f3186f383b59a7"],["/categories/Software/VMWare/index.html","16ea9bf4f9cf89b94edeae82790311d5"],["/categories/Software/VisualStudio/index.html","84fe09962f807827f50163503d4f9049"],["/categories/Software/VisualStudioCode/index.html","79f817a3e62a2ae09a3acfe192ae1e97"],["/categories/Software/index.html","fd0b821bad8f26857a6ad491c6aa387c"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","77fa039a75bff616739355d6b3225913"],["/categories/TechnicalResearch/Android/RxTool/index.html","b7608831a6b5d39532fbcd184a2b6339"],["/categories/TechnicalResearch/Android/index.html","85df29d8ee2021ddcac9988a7856a303"],["/categories/TechnicalResearch/Git/index.html","7d84317e519c044d49cae8cf56380ca8"],["/categories/TechnicalResearch/GitHub/index.html","f097eaf52528939e06ec3b5a097d6dac"],["/categories/TechnicalResearch/Hexo/index.html","688bac12410065ea4a339cc529eab03f"],["/categories/TechnicalResearch/Html/index.html","9fe18de98c4a5cce48b1e94b336317b7"],["/categories/TechnicalResearch/Java/index.html","86fdb5bb3fb6d5aee002fefcc07245cb"],["/categories/TechnicalResearch/JavaScript/index.html","a600cc67913c0335deaac395a85373e2"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","237599199d85260c36961939f184fbde"],["/categories/TechnicalResearch/MachineLearning/index.html","e4fdbada65a1f010d095493c025f0abe"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","88a95e7262364508b8fc6e6942f983f1"],["/categories/TechnicalResearch/Markdown/GFM/index.html","0ac00d34fff11ba817e50a383e32d779"],["/categories/TechnicalResearch/Markdown/index.html","799d9567969659ff995d019881c623cc"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","6da1648a3978c33bf5f26688312fad7d"],["/categories/TechnicalResearch/PT站/index.html","98d64c1aa4f3558406beead36779dbe2"],["/categories/TechnicalResearch/Python/index.html","5d311fe14f17946d91dc7eeeb7f99456"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","e83228007465f64199ab33266795d9d2"],["/categories/TechnicalResearch/Regex/index.html","d6764712c4bb586e07c914ec17621ca3"],["/categories/TechnicalResearch/Spider/index.html","3609acc4d046239c0015ac86b8d3cba0"],["/categories/TechnicalResearch/TA/index.html","98f7ef798856c17a4abf6a3a222a7299"],["/categories/TechnicalResearch/UnitTest/Android/index.html","a822d76dd7f5218ad29c4515db35eaa1"],["/categories/TechnicalResearch/UnitTest/index.html","235ffb05dbc7f1eded512c0d7482d8a1"],["/categories/TechnicalResearch/index.html","edd552fc7b791963f3240fdfb667f063"],["/categories/Teleplay/index.html","55919a69039ea2dd56904cbe935b0469"],["/categories/Teleplay/亮剑/index.html","bee794701390e0790f6bc3df4f4e68bf"],["/categories/Tool/Music/index.html","cae3a9caedcfbd14ad462b9b1a2bd27c"],["/categories/Tool/Wallpaper/index.html","abb8162d17af4a62f4338038aed09218"],["/categories/Tool/index.html","393cbca16d5c31164c26698712484192"],["/categories/index.html","8234f51fcc12b5d180d6cf52ef6ee126"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","1287baa02a06bcc11280a16170e2dffd"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","e212df0ce2f3ef795b720d080ab2f832"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","7b98f638a8cb05095fa67fea1e2916a7"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","7c717d9c1094c0e00e6064c040e877db"],["/movie/index.html","b3a23bae68d47650b0a09dcdfdbf63a1"],["/music/index.html","056ac6aae1d38be234bd2f8eec23eeb4"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","84d4d63a08f5d956d84638fa981557a0"],["/page/11/index.html","0cfaae06b58d7c0ad95211e9e9beef27"],["/page/12/index.html","efbf7a1b65c617ab07d9beaa75dc2399"],["/page/2/index.html","da632f4337d8025b263136366a80fab4"],["/page/3/index.html","177b41e6d80f74824a2bcc76b61d2a03"],["/page/4/index.html","7f0cab85b74c7b3d99799733c1411398"],["/page/5/index.html","2c848f4d79e248f013a8eb5b4ad66981"],["/page/6/index.html","d4f48d2c15835b8e934f6e298e2b681a"],["/page/7/index.html","acf08c85c570e3103ac3b9d4c5306d11"],["/page/8/index.html","10ee3d0caf867c78bc01b6f20d92ed4f"],["/page/9/index.html","05dc54e6fcfcd94290eab128d72dba81"],["/tags/ARK/index.html","b3f1c2760889853f91715f35865abf8b"],["/tags/Alienware/index.html","4bf52fd9589fc16f831f6d7c4a841fd2"],["/tags/Anbox/index.html","d7be01c3be578fab0a99818ef19028d9"],["/tags/Android/index.html","1cfe96d4e56f9463627ed895e2978491"],["/tags/AndroidStudio/index.html","20d4dce1465d478db9fc5a6a58e50833"],["/tags/Anime/index.html","67699e1682cc5156eecd40b2f81d9844"],["/tags/Base64/index.html","1fab55b243d05865fe8fccc806c2dcc1"],["/tags/CDN/index.html","beb4a00d4c85e5ed2ab4917d231793b6"],["/tags/CSGO/index.html","dc18e0eb51ff4422b3bc12732772c31b"],["/tags/Chrome/index.html","a44f904d69787bb6ac1dddf36e8edc9d"],["/tags/Chromium/index.html","7ff0d315e0bb6d9c5cd10a5d7b0817c3"],["/tags/Computer/index.html","dd30fb171cd17e2a18508bd1cfe2f91a"],["/tags/Contributor/index.html","034096facd0f8293d14e6312994e7232"],["/tags/Daily/index.html","b866df96724eb60d147d62c12add1b61"],["/tags/DeepLearning/index.html","6526a8d3c3ba36cf5182a009fa514265"],["/tags/Design/index.html","92e6868b3f4f0ce4c294e41be0ff10f0"],["/tags/Emoji/index.html","90d5a5a1f45f8cf09aa09588c8b52fe3"],["/tags/GFM/index.html","f99352c1d98f07b2f5c6994be7de61ff"],["/tags/Game/index.html","510b0c2c6903280fdf7a416a25a7a77e"],["/tags/GamePlatform/index.html","f7334d0b865f93e98c346847ce188328"],["/tags/Git/index.html","535e3bbe071c1796db6e2c7266b43351"],["/tags/GitHub/index.html","e66f2b74f389301cb33a0063d02cea66"],["/tags/Google/index.html","ffb9595da022c29d8d3ce55f9d9a8d5f"],["/tags/Google搜索/index.html","fac523c69c03c3e934c6e3fdca83b56c"],["/tags/Guitar/index.html","b806a641aecfb51d2ba2a2c53337ef73"],["/tags/HardDisk/index.html","9089cd1f9df4786ac7357aa509b070d5"],["/tags/Hardware/index.html","232b918e3178a064596347a547060f8a"],["/tags/Hexo/index.html","38cf9fc4c3cd3249225669342e1b2328"],["/tags/Hobbies/index.html","b5379f16bf65bad87348722867910ae2"],["/tags/HongKongMovie/index.html","52b5e76b4bc145ce704b3e91981409e8"],["/tags/Html/index.html","797cea09f122a0eb8aba9dfe34fa035e"],["/tags/Interview/index.html","8fabf226802f92e1bb3e806cc3d91b8a"],["/tags/Java/index.html","9cc3db5f123006b9c35b592cc70cce59"],["/tags/JavaScript/index.html","010a32e0582a417fd8e43399940be312"],["/tags/Linux/index.html","e77b63006303cf9f9216a873a683b575"],["/tags/Lutris/index.html","a86c8fe35f7de083d1dc2f65ac3ddd19"],["/tags/MachineLearning/index.html","72acdf2deba3bf8d670ccc2d31d7b55f"],["/tags/Manjaro/index.html","6a7b64b62fac418dad9a62a7e4578daf"],["/tags/Markdown/index.html","eb128c13a4006c030f55745339fb44b9"],["/tags/Math/index.html","cb84c36ba484c46b96dad20ec4ee82c3"],["/tags/MathJax/index.html","c367327e147bbf5b82f3e4f075af35a9"],["/tags/Memorizing/index.html","31f77fd98cb8401d343b0892642aa967"],["/tags/Movie/index.html","384243b6af717aca0e1e2fb783bd4c0f"],["/tags/Music/index.html","fcf57315eb5f22e02baa1aa7ec7eba00"],["/tags/NexusPhp/index.html","ec05ee9d4ad4b0d04772257c3b20f0d5"],["/tags/Novel/index.html","b846169f006c52774e27123b8b947579"],["/tags/Office2019/index.html","9ea9ada477a8dbd5ee40cb8716993b95"],["/tags/OperationSystem/index.html","863a78b24b537243a40f3439fd0e377f"],["/tags/Origin/index.html","f70ecbe86f1b4d17a4550ed286548d4c"],["/tags/PT站/index.html","e42a7edc5e23bf2e83c0473a1046dfe9"],["/tags/PersonalDiary/index.html","a465cca11bc3147d5554b74a07673fc8"],["/tags/PersonalPoetry/index.html","53846d204f6e5c94c792372adf88cc5d"],["/tags/Photography/index.html","a42af7bafffba12dfea2cfe23a47728b"],["/tags/Port/index.html","cc731aa515c516f62d863db678d5a82c"],["/tags/PseudoCode/index.html","4e27f6308c1e9abe3ee40fbfa1253e81"],["/tags/Pycharm/index.html","4be57d6ff3d49aedde139a61efe7bd24"],["/tags/Python/index.html","c72e985affeede4c86eb1263e4dae4e3"],["/tags/ReactiveProgramming/index.html","4858ed79418a33254275d6dee978920a"],["/tags/Regex/index.html","554967192ce6725d289f0252eb81604a"],["/tags/Research/index.html","39d7261d49462e7ace07356a63610bc9"],["/tags/Resources/index.html","c39fba4be9c07ab993f466f8250adedb"],["/tags/Router/index.html","f2ff9da70cf33861b6a9e0acde716409"],["/tags/RxTool/index.html","ddb01c2653fabecfbb84ef5fa310211a"],["/tags/Software/index.html","ede7e01ee7e6255d870c41006b207f8e"],["/tags/Spider/index.html","979d17d307f16517a089e6be1b7911d8"],["/tags/Steam/index.html","6167c2836f6ee8370427132cbb325870"],["/tags/SteamOS/index.html","1082a20dded6b9e7914993b558020783"],["/tags/TA/index.html","24026779bc513c60ac443519bfb7fd7d"],["/tags/TechnicalResearch/index.html","94ececc4474edb64d7c251f9b9393bf7"],["/tags/Teleplay/index.html","cfe6a0d1eaab3c64ad4a733363d10e2c"],["/tags/Thunderbird/index.html","da3683a7aeb30fb6f1ff697f61655314"],["/tags/Tool/index.html","96436f86fd75e31359ca9f55accd8d9d"],["/tags/UltraISO/index.html","b8618fde8937475f58ce22cfb3f6f352"],["/tags/UnitTest/index.html","9f2d737d15c34d8b81b3ff26733befeb"],["/tags/Unity/index.html","26a569dfd4f9f0b6b942c0f59c75bd29"],["/tags/VLC/index.html","49c65c1762ad9c6697f2cfea70ab2d1d"],["/tags/VMWare/index.html","0b9849b255e3c8c56f6a3dd459dde203"],["/tags/VisualStudio/index.html","307e0437c9556416d25a41a0c2838b94"],["/tags/VisualStudioCode/index.html","8893c93bbe7cc23a455536bb8600f85e"],["/tags/Wallpaper/index.html","3663f156f66623914261167a45f3af1c"],["/tags/Windows/index.html","56733bf4aa7156936566ca7a0fcb4fce"],["/tags/index.html","0bd59f1b554e0309abcd0c9bd41f9ee9"],["/tags/专业术语/index.html","d7510cfc52ec234c390417d75f9ab2c7"],["/tags/个人所得税/index.html","cdcbfd74354a9f73f15994fab2f4f7fd"],["/tags/五险一金/index.html","c5e9e078825476645749a940dbeafc86"],["/tags/亮剑/index.html","3730355f8ca18fb9c19eb03773bd09b1"],["/tags/仙剑奇侠传系列/index.html","e64a181489545c7c350c5d9ab87c6448"],["/tags/劣币驱逐良币/index.html","fa46227545e6767b4569086209298693"],["/tags/千与千寻/index.html","cb4b39c8d71eecc85b160e264ee8600a"],["/tags/宫崎骏/index.html","54757bd09c474c5c453bedad6cff654e"],["/tags/小王子/index.html","c0d5ef2e1baf6ec347093e2233ec9627"],["/tags/开心鬼系列/index.html","405f1a3ccb22028e11e9a61ff86476c7"],["/tags/微元素/index.html","6a5d77164aa64cff1fa1c83a66d27fab"],["/tags/思想政治/index.html","da9afba003abae5ea7369ebd49d5fb99"],["/tags/数据结构/index.html","d0c0f5a7ea07c2b9d0f6fb10131dc8e3"],["/tags/新型冠状病毒肺炎/index.html","09c75b6d1bc191788b1cb2fe56145256"],["/tags/游戏资源/index.html","322ca16fc4ef39eb1fff986748a37656"],["/tags/盗墓笔记/index.html","04dfa9377344e7194e2963ad943ca646"],["/tags/线性代数/index.html","afaeb2d66fc5803658816b3449718d99"],["/tags/网络用语/index.html","7cc684b613dab638830d6de9a0f8a46a"],["/tags/英语/index.html","3a4c293740f0c75f116ef7d49c9c894b"],["/tags/软件工程/index.html","5bbcefe9aa27a6ece876ebce4e996518"],["/tags/高等数学/index.html","ffe57411a21395070cf435be12f5a759"]];
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




