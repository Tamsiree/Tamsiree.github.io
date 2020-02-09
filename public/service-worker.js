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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","a9a4162c5823c57d1634b6ea228e761f"],["/Computer/Alienware/Alienware更换电池/index.html","fa3ce8d05bba6be22d421504a7751d9b"],["/Daily/Hobbies/Guitar/吉他入门/index.html","b6ba3a6d40469e3501fd81e60e1c72b1"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","a5c3e26514aba88ad89cf1526a8bbb66"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","a76ea122b46be783d8ce12df8cc11823"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","d22107bfd774beceea47634d9cfead46"],["/Daily/Hobbies/拟音/index.html","fc7d7d912ca4080b9b598ab1bee954fd"],["/Daily/Memorandum/index.html","433dcbf18275dc27ad5e8bad095d1fc9"],["/Daily/专业术语/index.html","6d852828f6617254eda3684be9fdad12"],["/Daily/个人所得税/个人所得税/index.html","36c87ec373d21fb2fa0b6cc1046073aa"],["/Daily/五险一金/五险一金/index.html","99f986a21dc6295621f4ce79047f105d"],["/Daily/劣币驱逐良币/index.html","0b62268ca93621559a6958d3176704ec"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","95b7393ec7a07ee3ce2dfd96eaaec63a"],["/Daily/生活小常识/index.html","5b12a59494d37a8b1578510a2f96d5c5"],["/Daily/网络用语/index.html","fb438b26b5921740d36e01dcf3d65ca0"],["/Design/设计用户界面的注意事项/index.html","b371884c9859854fad41c6ffface0360"],["/Emoji/Emoji符号/index.html","a7dc04a93abce01e8027131242fa7eeb"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","bfb0e82b9010798117cf6bfccb1d9974"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","77848e2446f25e0e154f5fccf243bede"],["/Game/GamePlatform/Steam/ARK/index.html","961cda036841ad542ecdcf52dac0b7bd"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","c93f9a46d4484f916a3631b2a4249f48"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","188aefbdb2ca34dc65ca88550feec65f"],["/Game/GamePlatform/Steam/Steam库共享/index.html","dc208478a679d71eb3c73d9c9cd56f8e"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","ef5e40aef4433712752d35c32b124462"],["/Game/如何独立开发一款游戏/index.html","9626ede8e32905a1e9c364956c21d6da"],["/Google/Chrome/Chrome上网助手/index.html","57e0eac7c05e9655ddfc2eeb3fc75b06"],["/Google/Chrome/Chrome使用技巧/index.html","5619ddafad174315198df1d8e98f1f78"],["/Google/Chrome/Chrome插件/index.html","8a6d181a3022e20abae563d301e0d058"],["/Google/Chrome/Chromium/Chromium/index.html","0aab406104308f5acf2024a46e03d25a"],["/Google/Google搜索/Google搜索技巧/index.html","292d609b24d165dd90138584c1ad3c0b"],["/Hardware/HardDisk/硬盘分区结构/index.html","f347edaaa864a5ad7e6659e67652d083"],["/Hardware/Router/路由器固件/index.html","b780daacc2a5acad509defc87e346254"],["/Hardware/电脑设备/index.html","948740d85d4c0e19baceb4de9a1dc0cc"],["/Interview/Python/2020年字节跳动面试题/index.html","54bb8332eb926fe70ca29104f0e87e9b"],["/Movie/HongKongMovie/开心鬼系列/index.html","2bc7413caa7f354056f1385db55be4ff"],["/Movie/小王子/小王子电影的共鸣/index.html","749401e6051e223883d67fcccae29425"],["/Novel/盗墓笔记/盗墓笔记/index.html","cb48a9d1c6a2180a18320751fddedae2"],["/OperationSystem/Linux/Linux分区管理工具/index.html","0834d65cc1d1cf3595a5bf56bd604c63"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","e36a363066b3a5907438bb711b68390c"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","001145cddd43d034d7b76c10d7dd4ab1"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","05c96cdfd5759cb745ea92196f89b0f2"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","8796f144ab35f385d97e0805f52660f8"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","b66dd71e881ad81ba1f087cff4c26ed1"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","55cdb21a0a3aa58a765e0c1612837e90"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","a8126843055892ca6f0f14d214ea2998"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","4b6fe845d5c488477d2cdf199401926f"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","cc1825932950afa407108ec16607618c"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","46f5823d476788503198833631451208"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","abde5e0e1010246f75d7a4d9e29bd852"],["/Research/Math/线性代数/线性代数公式/index.html","6c9b82052966e6268941ec58daae6da4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","0a13157f1a0f78ca4bad273612ad219c"],["/Research/Math/高等数学/高等数学知识点/index.html","04fe9ebc89990aeb3dd277ac4d6507b1"],["/Research/Memorizing/费曼技巧/index.html","46dedc2048013aa0cb6417af83db756b"],["/Research/思想政治/考研思想政治理论知识/index.html","d57c0893da704c7264d744c3edf70427"],["/Research/数据结构/数据结构/index.html","af14d98f3dccdffeabe6d4e512b596a8"],["/Research/英语/考研英语作文/index.html","3ec8383b781923bc6f75b2ceae51870a"],["/Research/英语/考研英语词根/index.html","e404f29ead60e04bbef474151a3bb262"],["/Research/软件工程/PseudoCode/伪代码/index.html","f6f0039543a41e2e1a66c9a6c174d781"],["/Research/软件工程/中南大学软件工程考研题型/index.html","40236f47611c700df1fdc428d73dc63d"],["/Research/软件工程/软件工程基础知识/index.html","7dd65059b635f3b9d5c4ddcad3f2b728"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","be2e4d1ce813def2969de9b0f4e981d0"],["/Software/Anbox/Anbox/index.html","0e981f1acfba843ab371bd594bf58282"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","acb58b0a29c543cad817c3a5ed35e4f8"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","85964ee63061c9d323b37c84e1b65821"],["/Software/Office2019/Office2019激活/index.html","0d1ad4eadfda1a73b03a9a2809925a6e"],["/Software/Pycharm/Pycharm激活码/index.html","73eb65f0849e630bda333cad5edfd4df"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","d0447bd1d90830d646c402ded1134c4f"],["/Software/UltraISO/UltraISO/index.html","b36a9f350ccc9ba59e4bf2f45d1eef80"],["/Software/Unity/UnityHub许可证手动激活/index.html","00562bc6c31ffcf1df69db4824b37c28"],["/Software/Unity/Unity使用技巧/index.html","19b71eb06ef92994637ab67dedcee7f2"],["/Software/Unity/Unity动态加载Prefab/index.html","8d8b4151e21648ebac23e99b2acf84ae"],["/Software/Unity/Unity的Canvas组件/index.html","2e8e3129238b029bb624cb26865eaf5c"],["/Software/Unity/Unity问题归纳/index.html","4cecebe5028eff0d7994fa0893c8b747"],["/Software/VLC/VLC使用技巧/index.html","c954bbad2d501b3572b68c7f0f73fc76"],["/Software/VMWare/VMWare/index.html","609ac0f9fbcc2f414e7daaac9e10f841"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","066bb423967415638fd1ac3ed4c75562"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","d683f67d37403301144356a595b3ae0b"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","599e8ae72216e3732da36d4d14716560"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","499cf101522a9771ef6c4a031110b9bd"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","6ef72ee44f489e9806b7a001271ab232"],["/Software/Windows常用软件/index.html","73c4e83e93f607d4aeb29209f547a87a"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","6e4a78d302c8aea99fb2eb231400aac5"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","0b1a55e303601acc911bfc8f76647dc1"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","78c45f17fdef0dde416905c1fb12979d"],["/TechnicalResearch/Base64加密原理/index.html","e7c5c9c1e1d60b0caf4047a94ba03d74"],["/TechnicalResearch/CDN/index.html","040aa0828eea1119857e7a99880cfd1d"],["/TechnicalResearch/Git/Git/index.html","52cb1ff72fa42e3f6bea9bdb59f5cff5"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","3a995287f285384ee7bda4b06651b1dd"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","271b8f10755d5927134946e0b6ee2db9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","93b518895fd35439a15a8790fea7dfaa"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","91784716658c26679a2d2a0c1d221160"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","e9054573188b2987182c3a6d83b7da88"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","7d2c0df91951e429997f51ee23beb950"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","23f2fd7895b16d5ecb10df0cd7a64d2d"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","6f1ded02a7ca1b66bfece679fd21a55e"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","0df77b994b01f3edda884c355e69bd14"],["/TechnicalResearch/Java/Java基础快速入门/index.html","58833847f44e071f2b3589f9ec4b7939"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d59b3486ecee23d9cf9fd7ccb17e66f5"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","090f2b4b4459667caf534154fd235c72"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0d6670d3cfb5fc529fe9d75a3a617a35"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0deadf75de4735eee812974a22271bca"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","fce6ba35f401feff69f4c10c402c4870"],["/TechnicalResearch/PT站/PT站/index.html","22e7c441a1719e005a5a415d18522053"],["/TechnicalResearch/Python/PythonExercise/index.html","d5eafff5769204008ceeec250615fe32"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","584739e0141888f68c7b2d8a70eaebfa"],["/TechnicalResearch/Python/Python问题归纳/index.html","29be0a555e6d8a6bd751d48b1662bb1a"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a90100415ff0f62d29e3079bc44932ed"],["/TechnicalResearch/Regex/正则表达式/index.html","8be46458f6535e94bfe214c2d0042f8c"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","5acaf084322a83f8c5d45c69fb0bc563"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","6d3803ccf2e50674cec62da0017a5a83"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","804a9de747cf8a419b44b441a35f5f70"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","1b445a0f27e67c2ff037465dc5f230df"],["/TechnicalResearch/服务器常用端口/index.html","6ab67bb0f974a12291d55f8e9eee42a0"],["/Teleplay/亮剑/晋西北铁三角/index.html","171fa577ac2a9ecaf93fd034c67e9920"],["/Teleplay/仙剑奇侠传系列/index.html","dc07e4b2cfac6d49bfe06d9d1b9e5591"],["/Tool/Music/网易云音乐/index.html","2f7d6f6f9e36368441d7c15b5ee3d2f3"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","232934ef388e0311b502e898f8d7c2e2"],["/Tool/百宝袋/index.html","e173644e7924ce311ae023699179e984"],["/about/index.html","f66bd7a92b5dea2a1adb24bef15712e1"],["/archives/2013/10/index.html","1ac9a171ce8fc97a643697f16262d9bc"],["/archives/2013/index.html","566e02309f4bbc4fa6593aca7896c1eb"],["/archives/2016/09/index.html","c99c5e29d6c3bf9e66906536a52c7a2b"],["/archives/2016/10/index.html","c6f3a167bbc883dc6132a7ef99aa8ac6"],["/archives/2016/11/index.html","b1fbb7ea88c19b893405fe6161e00fe4"],["/archives/2016/12/index.html","5670bed49e348b43fc9c51e01a12d41a"],["/archives/2016/index.html","b4e5b811ddb9a889e8d5605f9ae52e74"],["/archives/2017/03/index.html","846521eea50c8b7b42ecc48f43051ca2"],["/archives/2017/06/index.html","82907b663ee70768a55f50a4a1bc8189"],["/archives/2017/07/index.html","de9d5bf9b90bfa28d0761b85fac80c1d"],["/archives/2017/09/index.html","ee6c7580cc00b34932f805e44147a3e6"],["/archives/2017/10/index.html","ef207d9accd4586a4bb2af4957993a02"],["/archives/2017/11/index.html","a0dcfd292b1fe2637f58e54b89286342"],["/archives/2017/12/index.html","fdb183eba1abc5866c0fefd5039d3b92"],["/archives/2017/index.html","4ed7769530f873471eeba11c4cbd9b29"],["/archives/2018/04/index.html","d8b6bd9e162235d84b7396cb66e4f84c"],["/archives/2018/08/index.html","ca11df6b8a9aba3b12917eb16821393d"],["/archives/2018/09/index.html","2ecfb8a05d9c0ce32167941ff4baccda"],["/archives/2018/10/index.html","b8bed478815834afa699616c2ac63d47"],["/archives/2018/11/index.html","201f2e143a116f4213a4ca3af3d140bb"],["/archives/2018/12/index.html","3eeb4ff161ef100235a35581c1a063d7"],["/archives/2018/index.html","049b92809c6db1e1d795fd153731e850"],["/archives/2018/page/2/index.html","1c8806b75dc094fa75170e5b42c92b3f"],["/archives/2019/01/index.html","74cbd340ce504ce7b782a9f227901c29"],["/archives/2019/02/index.html","46f7bf61859d1729b10dc53ee62e2567"],["/archives/2019/03/index.html","6e97193d6348bce6e75ddf567799b2e0"],["/archives/2019/04/index.html","9989527341195497a28702b7e40a1b52"],["/archives/2019/07/index.html","8b66252371f1c345a64db5e84fa4f404"],["/archives/2019/08/index.html","c91e4dce58740c982ea8d37d463c7b1b"],["/archives/2019/09/index.html","cbef15e30bdb936d70e0b706c2dc7a1c"],["/archives/2019/10/index.html","724ef224c090cca6af545b07ec69a317"],["/archives/2019/11/index.html","c128197bde1f3d606b0259e1ab4a736f"],["/archives/2019/12/index.html","a6bce1e5477ebbfcd5a06eec7f8957b4"],["/archives/2019/index.html","586c3d9b702a44247326ff127fbe4fde"],["/archives/2019/page/2/index.html","3fd4d7abd1313c6e19b27ed28f7662a3"],["/archives/2019/page/3/index.html","d5b373e37e701b9a52ca64dfc2324c77"],["/archives/2020/01/index.html","25146b9f396da1f41a8829154aba2abc"],["/archives/2020/02/index.html","5f356e35a34edbd348a3775b61912dcf"],["/archives/2020/index.html","7ab9560597b8116c545d24e1d7d87d33"],["/archives/2020/page/2/index.html","e769ed9b30299a09516a22c8bb5a711c"],["/archives/index.html","b80a647f58e6227265ef93ab6bc1ec1b"],["/archives/page/2/index.html","d913c23c8bd0614d7c9e4f9ea26bf4cf"],["/archives/page/3/index.html","643baeda11d43c3cfd43aacafec5a88e"],["/archives/page/4/index.html","a07f8ed5fff3ca5942458f33abc669d0"],["/archives/page/5/index.html","1428fcf2505ab73cd7f71c4c7936f080"],["/archives/page/6/index.html","318369b146bbec0b1efbe1dcfbb2f17c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","b911e5a8690df41cfbe230a638b87355"],["/categories/Anime/index.html","a592c3c079e5bf42fa26d6a1b5d5ea5f"],["/categories/Anime/宫崎骏/index.html","198b78bf50ce5f463309527a305867de"],["/categories/Computer/Alienware/index.html","d7754d091e86ab1b7c995ce691af7eb1"],["/categories/Computer/index.html","0ff874625c364fc05344c973d019eb7e"],["/categories/Daily/Hobbies/Guitar/index.html","c6b77bb3ba5dcc4571ccbfb1b25d752a"],["/categories/Daily/Hobbies/PersonalDiary/index.html","7fad63540aba99f817b07e96307f07b1"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","930915c8a61673d716535e80d4b5db6e"],["/categories/Daily/Hobbies/Photography/index.html","ceb86bf64e70efed8b0f786caec790f0"],["/categories/Daily/Hobbies/index.html","c6b259c2c24a4d9db2d50248a344cb14"],["/categories/Daily/index.html","0c20f232d733e9200f7c059ba4e81843"],["/categories/Daily/个人所得税/index.html","06f4a7f9e84224039bec6d2fa8b75e0f"],["/categories/Daily/五险一金/index.html","7d16d95d5597f343f53e25b278fde10b"],["/categories/Daily/新型冠状病毒肺炎/index.html","fb6567c9112c4e3e033ea6a227dab81c"],["/categories/Design/index.html","3f337a9a42c3c61ca7693a695e1539aa"],["/categories/Emoji/index.html","5cf51a6bd47012a519f567fcdc48f1a4"],["/categories/Game/GamePlatform/Lutris/index.html","1897e0139fbe4e1aa80de7fdd3dc079b"],["/categories/Game/GamePlatform/Origin/index.html","fc9ffac7886c8e1cfaa939dc2c2ccfed"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","0bfc7999261fad1b099f3f2de58bdbd2"],["/categories/Game/GamePlatform/Steam/index.html","5e24c52ac890a0df86595eb03b745db1"],["/categories/Game/GamePlatform/index.html","1884b3cc4add1d29e97f6987a24eda59"],["/categories/Game/index.html","0baa132c6b59583b7a4c3484f2ba5640"],["/categories/Google/Chrome/Chromium/index.html","f671df72ce6babbc8174855c8226e83f"],["/categories/Google/Chrome/index.html","700e1441aa5fd8b9d1a2f151ee95c66c"],["/categories/Google/Google搜索/index.html","e52952e3c69e0f64d583ad7b831e0102"],["/categories/Google/index.html","de8c0d9266171dd3f0bd9465031fde87"],["/categories/Hardware/HardDisk/index.html","95f53630483c1f940c63faebcf18a284"],["/categories/Hardware/Router/index.html","bfd9c54d3ec1c5b3f39ee00c51a52d10"],["/categories/Hardware/index.html","ef3715e9958dac643e0c273738b49904"],["/categories/Interview/Python/index.html","fbc0f7e2749949a3bc5c7fbb921c567e"],["/categories/Interview/index.html","5d36c46e0ba998568e8aa64162b102f6"],["/categories/Movie/HongKongMovie/index.html","0dc17475fa360ac8f267b21fa5b0e6c7"],["/categories/Movie/index.html","ef3b67fd3f6de83ca0a58d9d93ce41ce"],["/categories/Movie/小王子/index.html","2706ba2b14c9b48d0eb79adaa54fe8b3"],["/categories/Novel/index.html","1772cdffc1fd1b62a721e91bf2efb12e"],["/categories/Novel/盗墓笔记/index.html","c20d71e9ab95eea4cf1dc7f4f6342cfc"],["/categories/OperationSystem/Linux/Manjaro/index.html","c7dffc1d4ab12e018be0836ce50b578b"],["/categories/OperationSystem/Linux/SteamOS/index.html","e8d685f6af62a16a0dd517e44ccdbed0"],["/categories/OperationSystem/Linux/index.html","368d99645457d9ec6fd644d9f1f74068"],["/categories/OperationSystem/index.html","f8da1bbdbcc79b913c7a14675f650576"],["/categories/Research/Math/MathJax/index.html","5a83066ce27c5b29423e4c6076239926"],["/categories/Research/Math/index.html","b6b17432980bd05a4443f40fbc4adad8"],["/categories/Research/Math/线性代数/index.html","72aefd21341c0deb2019d55498395be0"],["/categories/Research/Math/高等数学/index.html","724ba94ff512da4ba6e1338d7f086603"],["/categories/Research/Memorizing/index.html","0b0fbbf0d66bb454c11b5874d23c7e98"],["/categories/Research/index.html","33cfd3bf3d84b47e5fea718e77746aa0"],["/categories/Research/思想政治/index.html","74d105ab9c43698b6dced384737b3dae"],["/categories/Research/数据结构/index.html","a93a58bcf796c496268e179df446a45f"],["/categories/Research/英语/index.html","2a9c3815f18375e3ece0fe98faa03a02"],["/categories/Research/软件工程/PseudoCode/index.html","590c6bd3cc6527a569360071a1ea70ea"],["/categories/Research/软件工程/index.html","58b0024540c4223ed17cbad148228358"],["/categories/Resources/index.html","9bcd0b276c219b7afd1f03de19eb7daa"],["/categories/Resources/游戏资源/index.html","101c65bf4f7465f4b7f6845fac6d9345"],["/categories/Resources/游戏资源/微元素/index.html","d387eb99ea10adc0dccbf3472eecf574"],["/categories/Software/Anbox/index.html","bbc4b0961b9be68eff1140f1b8951d58"],["/categories/Software/AndroidStudio/index.html","2f8f35a6c6ff2316333fa425b8b4201a"],["/categories/Software/Office2019/index.html","5d09c327d3490fd14d0229b544c3790d"],["/categories/Software/Pycharm/index.html","dcf7fcd5c4391b7f5e8920f3cfe94e89"],["/categories/Software/Thunderbird/index.html","8c5ad7428ac5e5e348b0ec2bc211375d"],["/categories/Software/UltraISO/index.html","4d0b218d7e0b25fcaadebb57053ae77e"],["/categories/Software/Unity/index.html","a7f1b2bea49ded4836b7ccc78bfd5f2e"],["/categories/Software/VLC/index.html","938ee67426c5d9b905499b35932d9d90"],["/categories/Software/VMWare/index.html","02cd20867f1837ea2d738502827e68ab"],["/categories/Software/VisualStudio/index.html","263fdea5e2ae242bc4f8f3725c7ffca3"],["/categories/Software/VisualStudioCode/index.html","55e74531d1eab218b5c649269f14f5d1"],["/categories/Software/index.html","a07aa52006f10d40f2bd296ada70a670"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","8199a6b60c3077a09bf405890939ae48"],["/categories/TechnicalResearch/Android/RxTool/index.html","528cc0adb9f1db7b8bc383850b02223e"],["/categories/TechnicalResearch/Android/index.html","44b068c5b52712e638bcce16a483b670"],["/categories/TechnicalResearch/Git/index.html","0e5c54c1123849e94a06872f9b213ffb"],["/categories/TechnicalResearch/GitHub/index.html","f721173dae02d12ea5deb326994c0fff"],["/categories/TechnicalResearch/Hexo/index.html","904dc59ca2e0416f3104b3c5208457dd"],["/categories/TechnicalResearch/Html/index.html","724124344fcc83ee7f0c2fade1c66518"],["/categories/TechnicalResearch/Java/index.html","9653762a7305532f13ecaabdca6eb543"],["/categories/TechnicalResearch/JavaScript/index.html","c83bd12109addfdfbef29f2d21a7c9f0"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","d7a6725353130ccef591f5c7455cb73c"],["/categories/TechnicalResearch/MachineLearning/index.html","a20dc9d7c3eac6c2810094102a563f02"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","ef61a44e4c48099747ade1ed62f57b05"],["/categories/TechnicalResearch/Markdown/GFM/index.html","5b14c8ca681b265f4006f947cd51ccfc"],["/categories/TechnicalResearch/Markdown/index.html","cc6e259067037820c5ca9f08a1fe1f22"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","b3feffa7cc13e1db65e4b8d2e29c8751"],["/categories/TechnicalResearch/PT站/index.html","a9cb0debd94e80584fd20310abbd9a9e"],["/categories/TechnicalResearch/Python/index.html","1a9c69b8ed89fe7a3bc29ff11a9df907"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","d4d5d835570b5a1bcf09e8525bf1f2e0"],["/categories/TechnicalResearch/Regex/index.html","56bec85f2a877d1103fb046f9eeabbf3"],["/categories/TechnicalResearch/Shadowsocks/index.html","4cabcd336f7fa6069c3becbc53b9169d"],["/categories/TechnicalResearch/Spider/index.html","868384fe676d90ea3a42978b236dc98a"],["/categories/TechnicalResearch/TA/index.html","c002fa97980fc5fa515d8996dc1ff912"],["/categories/TechnicalResearch/UnitTest/Android/index.html","987dcce87ace0e99b2b6b515f8f07e79"],["/categories/TechnicalResearch/UnitTest/index.html","cb9dc9d375a79c971742c034b995faa3"],["/categories/TechnicalResearch/index.html","2b013e80700c9b83da020e1d7673505f"],["/categories/Teleplay/index.html","28bc3ee367b722584acf4c8de04aa1fa"],["/categories/Teleplay/亮剑/index.html","46b63347d80a143b5619676d568364c7"],["/categories/Tool/Music/index.html","295f96e8ce7510d3dde29fb49f7a63b5"],["/categories/Tool/Wallpaper/index.html","5d04395d57e3f56debacda0d1ceb6ff1"],["/categories/Tool/index.html","996dde5a5995eda777b58612e0e8d04b"],["/categories/index.html","0d3bf38df464d480b4fa1ab0cffb4c16"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d6d9d6d3e4e195aca4fe4aee96658508"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","9ab8f49b8a2cb7c513a20a724a11096b"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","0913f2972b2a98130bc6e6399d9f2758"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","6d169e92d706c7d6b40c205394c61c16"],["/movie/index.html","fe3a5d27ba3333675c35dc628e33d1e3"],["/music/index.html","cf5d05c3315940d11f79d0979e4292a8"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","c30271b1ae11213012bda4b0e44d4799"],["/page/11/index.html","d3ff438a8a731fa1b76a19a12b80331c"],["/page/12/index.html","321d8b950caf8fc98416d75522c8ebf8"],["/page/2/index.html","d771e9ebca84b0d72304ee0599ea0216"],["/page/3/index.html","a9f4de2a29081b7eebdd9d26208aebee"],["/page/4/index.html","ba02b994544717026aabe6e16eaba5d3"],["/page/5/index.html","7d0bcfe7ed974497a778bd485ef2f2f7"],["/page/6/index.html","c9eb41a450032d474b0c3e93aad0c74e"],["/page/7/index.html","91c7320f674b36a2e0c058ae22d1ec84"],["/page/8/index.html","c70aff89b4d1da89785e522edacafd91"],["/page/9/index.html","0b2faaa832d39a98537888d1cde9e936"],["/tags/ARK/index.html","05e1b50097cd869e044b987245b12560"],["/tags/Alienware/index.html","2d344f898f824995f9c4eb3bbeec0a31"],["/tags/Anbox/index.html","b3921fc71cf1913634b80028cff83f12"],["/tags/Android/index.html","e6971ac5e604160b66e8b44cb482c538"],["/tags/AndroidStudio/index.html","f664b629aa7e5372f1d95bc5f04f2259"],["/tags/Anime/index.html","c8cde5e49e79fd3ade04169eb048e8b9"],["/tags/Base64/index.html","94345a441db313552a965a740a8d8493"],["/tags/CDN/index.html","d6b4478c2d550505746d12a7605ab923"],["/tags/CSGO/index.html","356b31dcb1f4d4ae3fa144eef8c81094"],["/tags/Chrome/index.html","c5b4cbd5764b673a27688cd78b11c1a8"],["/tags/Chromium/index.html","9d0e7030de5ea4b842248aac45ef6a21"],["/tags/Computer/index.html","c80112621b7fa31c0dd77d10e1bc72fd"],["/tags/Contributor/index.html","d610c7fbb5b9ef3e4c5783a1f85067a2"],["/tags/Daily/index.html","43cb20b8d0bb21587d70c6dcd94e1da2"],["/tags/DeepLearning/index.html","bd235664c17c1026744061c9c7fb9716"],["/tags/Design/index.html","95ca64379eec8c2f8c85118674e5cc94"],["/tags/Emoji/index.html","decad9eb6eff30e02417a80196803f02"],["/tags/GFM/index.html","f968f370752c44c7d37a1df2ae8babc0"],["/tags/Game/index.html","2b61821ed2ea92b9b5b87e01f71dee41"],["/tags/GamePlatform/index.html","c5aa7a8e735415a45c48fbe260ae9ebb"],["/tags/Git/index.html","4b3dfb842febc19d231e2740b83a9a91"],["/tags/GitHub/index.html","564d62014e45ca6f656b912bd6d9b334"],["/tags/Google/index.html","28ab62fb1e99305ce976c3fb92fc6b57"],["/tags/Google搜索/index.html","5b77050a7bffb597fafd3836a1062172"],["/tags/Guitar/index.html","6c981154a40c015fed42ecd0969b02e5"],["/tags/HardDisk/index.html","75e3b1daef2ee9f73fb77b091c2c9af7"],["/tags/Hardware/index.html","5cae2dca8f3dc790c2a468a5f4411f56"],["/tags/Hexo/index.html","b3645887670cb3938f826209f42ec31c"],["/tags/Hobbies/index.html","327a8d6c5dae8b404abeb8dfdc1b417f"],["/tags/HongKongMovie/index.html","1dd6d50d0fbfe27d0168b7681fd34c26"],["/tags/Html/index.html","6878e04fbbacf0f936a40e9f0dcd61d2"],["/tags/Interview/index.html","d1b336694d2a97ba6380eb341759d505"],["/tags/Java/index.html","e2daaf5955f1ba7e85a182b8a7f87b9e"],["/tags/JavaScript/index.html","dbc8b7071776ca87c7eacd6d64e816ca"],["/tags/Linux/index.html","e73e808e2623e6916761661c27bd61d7"],["/tags/Lutris/index.html","ddef3fea0162b5884f1ac6e4c34f902f"],["/tags/MachineLearning/index.html","70139c0d4302ac04ce4beeb982bf4941"],["/tags/Manjaro/index.html","bf432b65bc5d0dde8a7289f5178383e4"],["/tags/Markdown/index.html","54ffc9f0ed294ad9ff306896368b8be3"],["/tags/Math/index.html","eac166ebc8b6922e6ec434f5219d7945"],["/tags/MathJax/index.html","f7f0d1f6a9bf3e443a74c6732a0580ac"],["/tags/Memorizing/index.html","bcb6dc8d34374a1194952f8fde918d3a"],["/tags/Movie/index.html","fa2d560bf7645d891077f5368f1072ad"],["/tags/Music/index.html","53dab5097777e3e75416182ba4da91cb"],["/tags/NexusPhp/index.html","7719599648346a40aed86e4c9acd0d12"],["/tags/Novel/index.html","b33eda6746626f00a54c0dc6a84be0ed"],["/tags/Office2019/index.html","d8c541bbe8d4dfcf288057ce020da988"],["/tags/OperationSystem/index.html","91b69ffb82b354d862fe5ff5f5024669"],["/tags/Origin/index.html","43866766e01146b74beaec3fe364522f"],["/tags/PT站/index.html","89814febd8608114ccfefc04ce2ac4d1"],["/tags/PersonalDiary/index.html","2db04e5628f8504931e62647b2134307"],["/tags/PersonalPoetry/index.html","03cb162a6ab2366bf2a7b90ff2af0209"],["/tags/Photography/index.html","1af0c48c3daa3fe95a2f9608401422cf"],["/tags/Port/index.html","a47c41980483f23e571dd0438b07b74e"],["/tags/PseudoCode/index.html","5d324a4a4e6c8c308408c8bfbed540a2"],["/tags/Pycharm/index.html","caaecd9a9fa0bda681ae8eff945d5b62"],["/tags/Python/index.html","d5fde06b9994104ce261d912b32f9a30"],["/tags/ReactiveProgramming/index.html","5ee60ed26b7361cb5c0dcb5be393a8b2"],["/tags/Regex/index.html","5658d499a7c1e62f4a381f8c2064760f"],["/tags/Research/index.html","06ca48ff2d63eadfd4ca81b4b21d8cfc"],["/tags/Resources/index.html","1c907169579bc1e2011cdee1ff188a01"],["/tags/Router/index.html","0df61457d115e1a017c87dcd7d8e41d2"],["/tags/RxTool/index.html","2cb9c2497116a177dad1060e2be0c373"],["/tags/Shadowsocks/index.html","0ac47dd24bfa06376070cc7135615c47"],["/tags/Software/index.html","212510f64f0e9386e5c3b6b8b9b9f915"],["/tags/Spider/index.html","f6913234b83368e31e9feb2d22db8256"],["/tags/Steam/index.html","28a017ac4a34c8e27f35bf39e89d40a5"],["/tags/SteamOS/index.html","85079930dcd57bfc2c0aad8622c92afb"],["/tags/TA/index.html","ee37e488fd1d65a2516aac2b82513c8e"],["/tags/TechnicalResearch/index.html","939f86815619f54263db18e8775b6a46"],["/tags/Teleplay/index.html","ef7b7432a4a9eb6a0a27a787fbe90ab6"],["/tags/Thunderbird/index.html","2c0c19369890229ca82f7d48b1c4bc5a"],["/tags/Tool/index.html","04cb157b86dbcd44c1d0bca2080f9d1b"],["/tags/UltraISO/index.html","f81a62db8caa5a41bb8c44bedc18e29c"],["/tags/UnitTest/index.html","347d69864e21901bba3a0507b0feae33"],["/tags/Unity/index.html","b2926b4de6c8006ddb87f5f5ffa85ea6"],["/tags/VLC/index.html","067e0ffa17baa39e83f8cc4aac1ac263"],["/tags/VMWare/index.html","34ab502c44345bc8d169bdeb256e9c59"],["/tags/VisualStudio/index.html","b160fc69b4a965d8e36f16a8be4f8d84"],["/tags/VisualStudioCode/index.html","688d4de5bd49dfdc2ede9f3b4e74c794"],["/tags/Wallpaper/index.html","eb22edcc7bd535faeb459ac001cdd4cf"],["/tags/Windows/index.html","bee47c126c3173d188b1c94fe962d72b"],["/tags/index.html","d5d31287882737f3d131189ea4d1111e"],["/tags/专业术语/index.html","c202212f141a1596027fafc87fddebd2"],["/tags/个人所得税/index.html","893d57fdb719036353a2e4ea9a955d9c"],["/tags/五险一金/index.html","b4a6fd0eb741c042f75f2b3d4fd21cd3"],["/tags/亮剑/index.html","a05df3d222232e7ef6565b2d2063b7ce"],["/tags/仙剑奇侠传系列/index.html","118bae9e91584e91930111710a857e25"],["/tags/劣币驱逐良币/index.html","2a4b3a5e91d37c99a7442be68d504e13"],["/tags/千与千寻/index.html","5f3afbfedb77f1572fec2b1bcaa46f5f"],["/tags/宫崎骏/index.html","d8c5e2706bc0696ef8ef313e1c3dd7b5"],["/tags/小王子/index.html","7f740b8623411a939a1d7a81cf3d89f4"],["/tags/开心鬼系列/index.html","5db2c8e0d3e6ca91c551523e13ffbafb"],["/tags/微元素/index.html","dbaf2820e59555999123ebdffb08c76a"],["/tags/思想政治/index.html","20cae9ea210258054c4498f79ecb0f2f"],["/tags/数据结构/index.html","b2327953917a0ddfbb8c213ac6c8ede2"],["/tags/新型冠状病毒肺炎/index.html","f259339f8043b1d98f4ceaa4ec590390"],["/tags/游戏资源/index.html","b5e6e22a0b73cd6e598b55b9082f2742"],["/tags/盗墓笔记/index.html","5018a2519a9b8220ecf2b73c00232cce"],["/tags/线性代数/index.html","beb327577a993a41769fc73d4ba5c585"],["/tags/网络用语/index.html","e81b94272e2fda6b8e4e10ab1a9beb69"],["/tags/英语/index.html","629b9732d767caa90e91d2e10c8068dc"],["/tags/软件工程/index.html","cbd97f9cedc97c3db4a88475f43138b6"],["/tags/高等数学/index.html","b5a5fa8defa819942b6b35b20b09d88c"],["/随手记/Unity合理导入模型/index.html","3d7a4855d62510ed0ac686292ab90554"]];
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




