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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","54d4ac81783b659c7ee99fc55ebbdce3"],["/Computer/Alienware/Alienware更换电池/index.html","29e265d824f9bb741b3f8821a96a4cbf"],["/Daily/Hobbies/Guitar/吉他入门/index.html","700264f8684e137cb6d57140dbe22002"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","c39d89868df36ffba597b4bdc078941e"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","da170781d04cb2ac3b45d2fc2967d5d3"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","5d4824b56dd3533512f3bc267b3761dc"],["/Daily/Hobbies/拟音/index.html","ac4f965faa2b7712970c175e551b072b"],["/Daily/Memorandum/index.html","d3ef8f12c7c216f046462a8eb3131d23"],["/Daily/专业术语/index.html","6655f0e2856c4ec95c4c82a1fdcc34c1"],["/Daily/个人所得税/个人所得税/index.html","5b41e3ba5decdb088e2b1fa71d0c5ab8"],["/Daily/五险一金/五险一金/index.html","13e44e2bb420e0b9c63cb7c9f0d2517a"],["/Daily/劣币驱逐良币/index.html","dd0063be1e027f27129d988e5c28cd2b"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","a0eaf40ad4215a75dcd27bd569501552"],["/Daily/生活小常识/index.html","76b4eb9dd1aa7e0a8003d4bfc92f62bc"],["/Daily/网络用语/index.html","ba018c9d1f83283265c95210cc62996e"],["/Design/设计用户界面的注意事项/index.html","1cd1dca9dcb2385128a38455d0e7b3ea"],["/Emoji/Emoji符号/index.html","25668b72abfb2f668146e5ea8cd5dfde"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","4ab583a25ab19a80a95fb4615880811a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","ac105d5e7f390caf648a0e89f702f529"],["/Game/GamePlatform/Steam/ARK/index.html","5cd7fc796cc360d24a926c0ef0c7f89f"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","d11792ae14ae509cff8d12f79df6de85"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","4fd685cdc8247323f00cae812c09be47"],["/Game/GamePlatform/Steam/Steam库共享/index.html","524e7e3c2b0d814f8bd106a9cd56efa1"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","d5dcab8129e22949174a8d6db7fd7ba8"],["/Game/如何独立开发一款游戏/index.html","a1d4671c39fec5f4c43ebd7eed51a317"],["/Google/Chrome/Chrome上网助手/index.html","e6bf0ecf852fca0281a1877af6673ae2"],["/Google/Chrome/Chrome使用技巧/index.html","1504d49a222f80c30144db590588374f"],["/Google/Chrome/Chrome插件/index.html","11f4090626486e47fcc832dff0a43176"],["/Google/Chrome/Chromium/Chromium/index.html","77171a3dadf3094d41970457cbaab9bf"],["/Google/Google搜索/Google搜索技巧/index.html","da30d3ff46a8e085c6b77f11fcda7100"],["/Hardware/HardDisk/硬盘分区结构/index.html","0a30c29445a9520955cbd1f08c59d865"],["/Hardware/Router/路由器固件/index.html","05b45a5403c0a0e878e53d3239f9cad4"],["/Hardware/电脑设备/index.html","a3554cfb61fe66c90b7aa0ea48a668e5"],["/Interview/Python/2020年字节跳动面试题/index.html","e857a224d26e636431e66eecfded3e51"],["/Movie/HongKongMovie/开心鬼系列/index.html","3c50aa0e357c690e0f214490669c6b49"],["/Movie/小王子/小王子电影的共鸣/index.html","d16282702877e509fabc34a444bbfc49"],["/Novel/盗墓笔记/盗墓笔记/index.html","125946c2f0fe8d46186e7eb4cb7ea910"],["/OperationSystem/Linux/Linux分区管理工具/index.html","8e54864be2a6c157484de5240c5b5259"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","558b2f4e0bac2e2d88a392b7dce41600"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","1b7c51865d9a529c7703c283abff691f"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","8280a79357ae8298691e53ab21f92781"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","249eb926d71eeaf7c477aba83a106280"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","f277a799966394ae84cc0329f6504ec5"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","9d95ffb89cac96416fbc32adc96d14eb"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","08b70823dc449a681e7fb4ba9030711d"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","b8d39c390c2eac8298526f1aec4b55f1"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","23faa83cedff1f189b5ae39b399f7644"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","56f2b23e81a38ed18303cc8ca3180e4b"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","94bfcaf9f376da44c7a5b69adc292e82"],["/Research/Math/线性代数/线性代数公式/index.html","84e9145773a59594e87852cbb8989b1d"],["/Research/Math/线性代数/线性代数知识点总结/index.html","2ba8e62d879217f5d51180ee87608deb"],["/Research/Math/高等数学/高等数学知识点/index.html","f08b5c6b00961bda4f7b8f0421346670"],["/Research/Memorizing/费曼技巧/index.html","af70d7e38a042fb00489dd513bc96256"],["/Research/思想政治/考研思想政治理论知识/index.html","b4553c413943cbf65c4492b1ad6b3cc9"],["/Research/数据结构/数据结构/index.html","fed5ee9f091faf6f14fab888b9885e3f"],["/Research/英语/考研英语作文/index.html","9c454d93035300d7432efa39e903d592"],["/Research/英语/考研英语词根/index.html","3c1217cdeefd211914821242b8495209"],["/Research/软件工程/PseudoCode/伪代码/index.html","6e88905e0d6fcc4eeb85144d34fce168"],["/Research/软件工程/中南大学软件工程考研题型/index.html","154148e9e91318bb8a9b3b8c8aa39d91"],["/Research/软件工程/软件工程基础知识/index.html","830df77743eb1c1f6db50a601226bff8"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","4d3682ce1c8fbe19a0808b90cf076752"],["/Software/Anbox/Anbox/index.html","952e9dcc4ceb29420b4815f3bdc6d081"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","eed33fbf462733147dc92a36e461f162"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","b684cf2ee9201a1f0d895ed298542d4f"],["/Software/Office2019/Office2019激活/index.html","05a12a98e25689ee56d0bd97c99728a7"],["/Software/Pycharm/Pycharm激活码/index.html","0d1e9f2795bdb2dd7d442e1a9e20a5b5"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","3a59ee1dbda242ee1f356b28c6328620"],["/Software/UltraISO/UltraISO/index.html","7e525c71be94266b6152e2d5b9d53fd6"],["/Software/Unity/UnityHub许可证手动激活/index.html","59f91b850dade93e2151bd32391d9000"],["/Software/Unity/Unity使用技巧/index.html","d91b132525ba4dead03add54562c2116"],["/Software/Unity/Unity动态加载Prefab/index.html","b81721df4e612c35af12bfffebae8e81"],["/Software/Unity/Unity合理导入模型/index.html","cab1d4f20695e106f8e1f0da4d2131b9"],["/Software/Unity/Unity的Canvas组件/index.html","d71f16c10f29fed448740ea3295440db"],["/Software/Unity/Unity问题归纳/index.html","5875266741594eab342c05ea2d21b487"],["/Software/VLC/VLC使用技巧/index.html","3761dfef1fad2f682b10064462fe44fa"],["/Software/VMWare/VMWare/index.html","0bbf5630df8289e0a12cc28604a34ad7"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","0e9a13df6127ae64e7d1981b4143ccc3"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","71b8b70e2e636bc2fcfd11c91679ea64"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","146f9673309793a6b5c5eece28492949"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","e96436c15460efd643fa9bdfbafb848b"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","86625b71a1ebd5eda27ee790e5ca234d"],["/Software/Windows常用软件/index.html","d8a02cc1ba8f5850141db22eb5b20435"],["/TechnicalResearch/Android/Android强制关闭软键盘输入法/index.html","06214db13f4179805c00cded4ef71d51"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","9f4c4c8f06d2ea5156395bed2f311c5d"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","6a5228aa923d368ac154970aba0ac1ae"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","b56633d75c39722fad30ec9783469c33"],["/TechnicalResearch/Android/UnitTest/Android单元测试/index.html","f695da93409a577274d1c4d657bd250b"],["/TechnicalResearch/Base64加密原理/index.html","16415a660bf19f9d0044456925f7646b"],["/TechnicalResearch/CDN/index.html","6323b78b6faec1bb67ff327d78295243"],["/TechnicalResearch/Git/Git/index.html","16b5e86e97239ae8feecdd7a3dff7350"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","2ba8d85cfdc769362878beb9af3dfac1"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","f2281a55b8f994d78ce41aea6f2b6714"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","31d55d7334ccc3d4f2a33ebe6c87366f"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","775db1b0a60bb1ee77996ce8475bbbce"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","4aa8324ba61cde1910dc9f5c50bdcf4f"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","1b0f64c24c87db2e51f43b1dc8cc9d64"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","7bc7d7593a60d30544100c00ed5a3db4"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","a882cc5f410aa59278175cbac4b25165"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","5a653376714ed55801221a7312dc1274"],["/TechnicalResearch/Java/Java基础快速入门/index.html","af0823f5f37e7053ba6896e1662cc355"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","931b7c93c9f63ffeaf0d027631b24766"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","11a5e680116c196117a72d8eb10e2ebd"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","71c7f25a3216cf17b00783084a768a1d"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","d260dfa98d1527157e6b17f14095ba25"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","59ea6da77fde4b31a13b587fbbcf3e21"],["/TechnicalResearch/PT站/PT站/index.html","a2a691767f96d20418316e16953ca756"],["/TechnicalResearch/Python/PythonExercise/index.html","b98d4619d0f3f6af153654f4617bfbed"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","0fcb99e77767c02209df1fc7919bccb8"],["/TechnicalResearch/Python/Python问题归纳/index.html","492763be264a8c4802a08aaa1ceaaba6"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","fa004e80e54eb11e9cf6ea9e33d7c1bb"],["/TechnicalResearch/Regex/正则表达式/index.html","a79ae0d05c2ae936db068edd3afb2e88"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","42d332017a38495a60c46ca587893feb"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","433551d1e7d749173488396771b81379"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","8b95d05ba035f0945dd835a9dbca7147"],["/TechnicalResearch/服务器常用端口/index.html","5606d8e4b53a2043119bed6c93e1eae0"],["/Teleplay/亮剑/晋西北铁三角/index.html","0db8511b5e1ba9ddab79b17dd2f89175"],["/Teleplay/仙剑奇侠传系列/index.html","752c5fd4e3a53b1a60e4728353190801"],["/Tool/Music/网易云音乐/index.html","cbe1d00d643d48b0c6293d6f5a3d78a4"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","053e91560d146d80bda81dfdde088598"],["/Tool/百宝袋/index.html","f7887e1a737bfab0aeafc3ebb411d58e"],["/about/index.html","c42abfec853d927c316da5d786897cd8"],["/archives/2013/10/index.html","7323a98cd12b79c81e26c9ad96b8c8f2"],["/archives/2013/index.html","0c4640bcd1e5568cdd01e3a30524da44"],["/archives/2016/09/index.html","ea2c36fbadd04e7f198fef1ea7bb4f76"],["/archives/2016/10/index.html","cda74c3ded9601485fd27212b0e46870"],["/archives/2016/11/index.html","2881ed764c5b428fd15af7d75bc59c75"],["/archives/2016/12/index.html","18508d846d51a88315078770b3b74bd5"],["/archives/2016/index.html","d80599b27398a3abc441abdddc24b908"],["/archives/2017/03/index.html","631397e55fa357eca6381d3555bb3bf9"],["/archives/2017/06/index.html","f49c21a9f8c1d8d9725ad5425894a470"],["/archives/2017/07/index.html","8db314b4cbbb76361146e43bc7be73f5"],["/archives/2017/09/index.html","e5f65684e5a5fbee54e8b8d123a2afd0"],["/archives/2017/10/index.html","ffb34038064c335772b0bbd4f4778d42"],["/archives/2017/11/index.html","a67e168b73d0531f2568b43592d61bfc"],["/archives/2017/12/index.html","2432ecc7c9af9c832b41f9b070335194"],["/archives/2017/index.html","fde30cf160d6e73bbda977b5bc32ffe0"],["/archives/2018/04/index.html","6395e0a6322b7609253b9707650ca118"],["/archives/2018/08/index.html","b2b441e90be2b277bf948683ecc25d08"],["/archives/2018/09/index.html","07e7bfa0b68a80826d8ca1a8cf7c2151"],["/archives/2018/10/index.html","8ede63ad3d47067474560913352af0a3"],["/archives/2018/11/index.html","90166f852c90cf01bcafcbe44829b9cc"],["/archives/2018/12/index.html","b9d2e0fbeecd82da7919d6078fd8d289"],["/archives/2018/index.html","016a2115f93fb7c586bbed8b74731dcb"],["/archives/2018/page/2/index.html","03ea67601d172784c7783bba4abe517c"],["/archives/2019/01/index.html","7a2502ba70e237385dbb8f142bc11df7"],["/archives/2019/02/index.html","c1904609629d334bd894260994bd7170"],["/archives/2019/03/index.html","5fd48f4f4197fafc8d9663415e2dcf05"],["/archives/2019/04/index.html","10013e84e2a91e5727658a7cc08b6fd6"],["/archives/2019/07/index.html","00394aaec74e4e26de8ad860f214a79a"],["/archives/2019/08/index.html","0ca13fe0a6b0e4725fcdf16fccbce102"],["/archives/2019/09/index.html","bb28628e7c11d9e6be9eeead92348bc6"],["/archives/2019/10/index.html","85388e68a6c67b6febfa31151fcb496b"],["/archives/2019/11/index.html","a2115fe696f0d28bf17feabb2c62131b"],["/archives/2019/12/index.html","b2ead13290e945a8150c582621b67e7f"],["/archives/2019/index.html","502809d573a4fea9afcbcd806f47df46"],["/archives/2019/page/2/index.html","9ddc453c867179b57e7b180ade24590f"],["/archives/2019/page/3/index.html","99afcd495f8ed3e8715c203397560930"],["/archives/2020/01/index.html","0b694ae371671f0fb26380e7d6f9e8c6"],["/archives/2020/02/index.html","b0568b2112e6e70c340d2f708d2fa4ea"],["/archives/2020/index.html","c31d1d1499fa5a79cae77d0d3adbfa26"],["/archives/2020/page/2/index.html","1ec83cd88c66ceb98e0deaec623bdd8b"],["/archives/index.html","4224c831f789300615337f46f185da58"],["/archives/page/2/index.html","a5da118d12882ca57e3a4de149bd72c2"],["/archives/page/3/index.html","9fa0a98cccc6f3341887aeb6ec03c150"],["/archives/page/4/index.html","051a441abe17a72971618a984ed4458c"],["/archives/page/5/index.html","37d8ae15718ac91368bddf7a669b0c44"],["/archives/page/6/index.html","da6e28850342eb57ad4e2d84cea97475"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","0fc48a192f05533310c19b68ec30c0ae"],["/categories/Anime/index.html","0f4d540504c166fe22f6d065dfc8156d"],["/categories/Anime/宫崎骏/index.html","1916498689d64c8949a8f314ab369aca"],["/categories/Computer/Alienware/index.html","8fb33e9f82e3edd6b027a289f6686994"],["/categories/Computer/index.html","38797bb299bf75b27994a2343f522936"],["/categories/Daily/Hobbies/Guitar/index.html","d951fbdb5380d97ce3d7c53a60114cb4"],["/categories/Daily/Hobbies/PersonalDiary/index.html","30205316fc1eb5ba5131746ea5661c17"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","d7a3a1e478e2175a76efc7ca21855f03"],["/categories/Daily/Hobbies/Photography/index.html","4b5ecdb6677201a8b4b5eee77f498d2a"],["/categories/Daily/Hobbies/index.html","bf38bb316ea35a6639ee959cf539c2ee"],["/categories/Daily/index.html","9b45be29ed0b785837865229eefe8d0c"],["/categories/Daily/个人所得税/index.html","330571e03544c2a998d65189cf9ae43b"],["/categories/Daily/五险一金/index.html","226b85288e3beb1230df44cd92a87d61"],["/categories/Daily/新型冠状病毒肺炎/index.html","715c035c3ea6da4848e020ec9147a5e2"],["/categories/Design/index.html","49d481523a78ad0e1d9ec80eb147d567"],["/categories/Emoji/index.html","ca17deacf630408726414e175c1763b2"],["/categories/Game/GamePlatform/Lutris/index.html","9899cd3c37c7eef5fb4045f7cede3191"],["/categories/Game/GamePlatform/Origin/index.html","e26e9ad849b1acdcbcf222c4597b5dbb"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","d7ea033d803fb14a52d7ab70c1d01e3e"],["/categories/Game/GamePlatform/Steam/index.html","a37d66906485d55ea5f1a9fac049242e"],["/categories/Game/GamePlatform/index.html","7290ce44b8c4c58c39fd5d98abbae7dd"],["/categories/Game/index.html","d091e36c8757a426fc2e7229e9db62cd"],["/categories/Google/Chrome/Chromium/index.html","949ef75773d7640791744948aa6f3c9f"],["/categories/Google/Chrome/index.html","3c7142c19f824dfca4b0385e59624d30"],["/categories/Google/Google搜索/index.html","e5be636ff3deb256e308ea9577a15aba"],["/categories/Google/index.html","6fbb03f6f78bfd50f644f7678366d20a"],["/categories/Hardware/HardDisk/index.html","9a28771c220419494f5b607f4067daf8"],["/categories/Hardware/Router/index.html","1e1a6e58b9d91a9d9567330a75641c39"],["/categories/Hardware/index.html","02acca365241c62e63bcfd6b780ecf93"],["/categories/Interview/Python/index.html","7b6194c413ba8fe5341cc19c288ee93b"],["/categories/Interview/index.html","96521840906c13d012412ca11dfdff65"],["/categories/Movie/HongKongMovie/index.html","df893eb7d2edc0e4b46fadc983cd13cb"],["/categories/Movie/index.html","450bca1616ee0503653ce46dfb6a2954"],["/categories/Movie/小王子/index.html","6e0c1c0a012f3637ba0909f0800c3d26"],["/categories/Novel/index.html","6c78d14fcd9ccb66960b14d6376f8f1d"],["/categories/Novel/盗墓笔记/index.html","556066fd6064b78c70e2055b11d1efbb"],["/categories/OperationSystem/Linux/Manjaro/index.html","2054dfc629d432920614785d943b5e26"],["/categories/OperationSystem/Linux/SteamOS/index.html","f144b8d6ad16382a947ef0cff50bf8a5"],["/categories/OperationSystem/Linux/index.html","63fe310a58f171a95c55370bdb2b7446"],["/categories/OperationSystem/index.html","5ba4d741de6cc3ca70a007222d6aa9db"],["/categories/Research/Math/MathJax/index.html","029a978d46c5dcbc436f7405daec67a3"],["/categories/Research/Math/index.html","7fe843a1967214e6c577f0a488caebb5"],["/categories/Research/Math/线性代数/index.html","c68c149fd661c372b409f054606c0fdb"],["/categories/Research/Math/高等数学/index.html","ead6da51d902143a148cd2af2f8567c9"],["/categories/Research/Memorizing/index.html","1cfac119a4e9eebcabc7b49fabd37b2b"],["/categories/Research/index.html","38db366979708fbdd04280a716816039"],["/categories/Research/思想政治/index.html","9dfa414054c91b911ed6bd3f36c2f4c1"],["/categories/Research/数据结构/index.html","29624ee2f239a7c2ac3ecafcaf1b14ea"],["/categories/Research/英语/index.html","c1ccab1013feb7a1d670d050750f15b0"],["/categories/Research/软件工程/PseudoCode/index.html","4fcde09947d0eccc2d05d1b132a6d86d"],["/categories/Research/软件工程/index.html","f7a63b6a3b353c3efc86b76bfade17e0"],["/categories/Resources/index.html","e32ace43621dc860f4d6e3fc7438daaa"],["/categories/Resources/游戏资源/index.html","4476d8492c5738e6089f9626416766df"],["/categories/Resources/游戏资源/微元素/index.html","cd029d3a36ebe6cdb38548d0ca95b335"],["/categories/Software/Anbox/index.html","de0d2fda442065997c046b84078c44f1"],["/categories/Software/AndroidStudio/index.html","e34f8b6f562f69e28bc15b3d1c17a5b9"],["/categories/Software/Office2019/index.html","96b39ddcf41af0c3c33179127dd54093"],["/categories/Software/Pycharm/index.html","e588b83b2627aac96edbfa9f37475d9e"],["/categories/Software/Thunderbird/index.html","04a1404621272baf4f3ebbccd9fe4306"],["/categories/Software/UltraISO/index.html","975122cf6dd2ac15470808be1392d2ce"],["/categories/Software/Unity/index.html","68e621769bd509681baa63511494fd6b"],["/categories/Software/VLC/index.html","3236c654456add046fd40411c97b0a68"],["/categories/Software/VMWare/index.html","f41783f45f1ce67df2a14029faef0b77"],["/categories/Software/VisualStudio/index.html","847f7fcf53f967767d4a62ccd87507b5"],["/categories/Software/VisualStudioCode/index.html","9302f6b5b653132d83fa73c2ec7a3e48"],["/categories/Software/index.html","676d4dcc9428a8fda158d5e06e066b5c"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","d377c7ab20903052ff91731c2e047709"],["/categories/TechnicalResearch/Android/RxTool/index.html","8bee9c9984ead8f1ff5007e2aec1ef90"],["/categories/TechnicalResearch/Android/UnitTest/index.html","bc9bcf3e7982e9753883fa5fc1d266a4"],["/categories/TechnicalResearch/Android/index.html","4d551b7e561db42323532f37642946b7"],["/categories/TechnicalResearch/Git/index.html","67560ac50c6ac5c5123685e5af2daf71"],["/categories/TechnicalResearch/GitHub/index.html","a54e03bf88469f31bd47c7093df3722a"],["/categories/TechnicalResearch/Hexo/index.html","c98a1e29d684df6a1efa18d183e70487"],["/categories/TechnicalResearch/Html/index.html","9695217ec6508b44dbbb51981c2534c9"],["/categories/TechnicalResearch/Java/index.html","e8857e53c303caf692bacea8e2ee2550"],["/categories/TechnicalResearch/JavaScript/index.html","e83e5ec7bf3292b2469395c8f991ec87"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","6672f9779f9bfa8c50c0a397c013bdc7"],["/categories/TechnicalResearch/MachineLearning/index.html","b8f56b9f0e8712121a1ea09b7c049f9d"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","6a9bfcbfeb0e3b2f383afe4d5cd4ba54"],["/categories/TechnicalResearch/Markdown/GFM/index.html","3d229a8c0e9b71fba79671f6f3cf7b3e"],["/categories/TechnicalResearch/Markdown/index.html","c8b103fdd709acba612abd80a1dc4617"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","a368c19a0ab57c4b66196af4fb14f792"],["/categories/TechnicalResearch/PT站/index.html","168f667ab1767a6318651909db064e55"],["/categories/TechnicalResearch/Python/index.html","002ec20043898076060fb6275b61468d"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","adc6955cda9249d160ec33a090ab550a"],["/categories/TechnicalResearch/Regex/index.html","65cd3e7ebd4fe239cab7ca91326419ee"],["/categories/TechnicalResearch/Shadowsocks/index.html","ef3fa2f26d1d85331f5ebe84136a6285"],["/categories/TechnicalResearch/Spider/index.html","4444c2c22793328c5a5bb6062a4e0d50"],["/categories/TechnicalResearch/TA/index.html","b0738fe13c6ba4cd72c99dec0872aee7"],["/categories/TechnicalResearch/index.html","0d2eea9d120a5dae23e15ea830e9087a"],["/categories/Teleplay/index.html","16a4b1e2905244f333f71d63c82dc1a4"],["/categories/Teleplay/亮剑/index.html","81e2092b79383dfd96016a2dea976392"],["/categories/Tool/Music/index.html","4afb42c8a1a19a180b61dc5f3e1fd493"],["/categories/Tool/Wallpaper/index.html","1bcdb1a66abd50bf047327b0b229ef07"],["/categories/Tool/index.html","0a2aee70fc977fbbe16fccc9c77fde4a"],["/categories/index.html","299cf8d1a6ee2ccfab9ce6152517ec72"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c3ff8a92059df40acce48dbfe750dcd5"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","f334ea9d149fa9af75ec6270c25db3fb"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","6ce0ae995ddbbc253c73709abaebef66"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","601e5954659c4b5a0c1172cf6302e57d"],["/movie/index.html","43fb3e2e817221e69138202e99780ad7"],["/music/index.html","9c03a516d7aeab88daa1f438d5d2e3f6"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","75522e7aba4a05eadc7dfebd0951d3d3"],["/page/11/index.html","76bec868ffaea78ada32d4935346fac9"],["/page/12/index.html","bccf8b0c33a13cfa039b5ef04e21bd4f"],["/page/2/index.html","0ec105bce64e5c7da1e4af672c3dff7f"],["/page/3/index.html","d2fd035bc45d6c2d72f729cafcc1331e"],["/page/4/index.html","9951acd66e7379d33436bb3966ffe91c"],["/page/5/index.html","da7ad7429c7057efdcd95d603f936af5"],["/page/6/index.html","b4d3b151b40b2d4b97890775eebe1389"],["/page/7/index.html","d401dfd22249e23d6830ae7e0bab52b6"],["/page/8/index.html","f342c2a2e289b728bbe074a1dcc5dd80"],["/page/9/index.html","1d592228aed246a78b97f20d0d097002"],["/tags/ARK/index.html","6c53131b2db5e24dee9646754c2004bc"],["/tags/Alienware/index.html","27635d4d0d8a7de6f90effdbcacd509e"],["/tags/Anbox/index.html","9368dba44a9416df9590db011b7f957a"],["/tags/Android/index.html","19006d9a6e6254ad623bacce29def1b5"],["/tags/AndroidStudio/index.html","cfcada4033384dfb00683f6f44f61893"],["/tags/Anime/index.html","31f837619bdb833e70610aa80bcc692c"],["/tags/Base64/index.html","4c065b504eaf47e95a33c13bcfb184e7"],["/tags/CDN/index.html","9ba7cbc359119954070106cb452510cb"],["/tags/CSGO/index.html","e1bde547437a247d9d9e030008451bf1"],["/tags/Chrome/index.html","965de4287aaf748dd1ea1e35443c51f5"],["/tags/Chromium/index.html","b9a338675af2fea445625c04ca9d9d53"],["/tags/Computer/index.html","afb4a030b1f0523ca43f053b3334c5eb"],["/tags/Contributor/index.html","d498283ac75a05488370648aacbf3278"],["/tags/Daily/index.html","68dd5b9fc4aec1fdcb563f09432bc2fe"],["/tags/DeepLearning/index.html","93e7f969806985e889560caf20d9fad7"],["/tags/Design/index.html","1f545ebe17f0f269991122e88d9036d2"],["/tags/Emoji/index.html","182bc14f86da2d9fc1ed4b8ccff4fd89"],["/tags/GFM/index.html","49c7f14dce7f6c5e807fb42069728b1e"],["/tags/Game/index.html","b35abfe208bdc066c36737e045b07c01"],["/tags/GamePlatform/index.html","27e33f5d52aa6c74f6cbc32050cfdadd"],["/tags/Git/index.html","f59a5f6d2da57d969f019bc7d67e3b65"],["/tags/GitHub/index.html","2d9cc6551cb3fbd05c4f5f4f448ef110"],["/tags/Google/index.html","45f6a8ec44eb0a8b3e754f0ccccd100d"],["/tags/Google搜索/index.html","60e9bbbc221b71fdc1a0948eeb8e5e19"],["/tags/Guitar/index.html","9ce5a421d8d45df42c1ee844e6cb1d38"],["/tags/HardDisk/index.html","6abca945a0234db8d72c5aa0f9f2303f"],["/tags/Hardware/index.html","68edb6db94fa49650e5f3105b666b088"],["/tags/Hexo/index.html","23f903893d14c17e88634985141c090c"],["/tags/Hobbies/index.html","cace3c03092c756f61f6377db06aa0aa"],["/tags/HongKongMovie/index.html","19612a7ff462c69bd493a2e1af995425"],["/tags/Html/index.html","4284530a6ed15e86d386d01da48e579f"],["/tags/Interview/index.html","4f833a6d1d12fcd18e3daacb4a4989cb"],["/tags/Java/index.html","43c7b586dfd2fe9bb319bd4933c261d6"],["/tags/JavaScript/index.html","270880787dfee57fca78fdd60fe84057"],["/tags/Linux/index.html","12f6b049722b2818a314e6803049b357"],["/tags/Lutris/index.html","823f4e245cf36ae4c2c64faa98c4d9ae"],["/tags/MachineLearning/index.html","6121ec15f6c4d86f6963fde4fa380378"],["/tags/Manjaro/index.html","52819532eb35f84bbf22a44937d4df7d"],["/tags/Markdown/index.html","38a04cf7aa5ad82207e81d189d5cd47c"],["/tags/Math/index.html","37453105ebb4fb13c1256b47e9b26c2a"],["/tags/MathJax/index.html","b0651ceab9358292a186af326a2b4cfc"],["/tags/Memorizing/index.html","6919c0f5cad9dca1e631be95d6ea300e"],["/tags/Movie/index.html","5777c231d30be466f6e71ab9548c7008"],["/tags/Music/index.html","a25c96d49a088b0d2c15923ca46e491d"],["/tags/NexusPhp/index.html","fba83af37e69783a872ab9ba09c77b68"],["/tags/Novel/index.html","e505d8ece75ccf0714787854e7a9d7ea"],["/tags/Office2019/index.html","f1875cd89b3f33f8382e7cf42b482d08"],["/tags/OperationSystem/index.html","0352d23bba296684b570b2743d711402"],["/tags/Origin/index.html","b670ed8a5110146cabf23e4a01782a77"],["/tags/PT站/index.html","1b2d848fb61660f1f15fea8361f2d3d0"],["/tags/PersonalDiary/index.html","c3dcbec6fbb933b6750772085ae22d35"],["/tags/PersonalPoetry/index.html","2851d2fb4cd0eead811d5fc6f606ad6b"],["/tags/Photography/index.html","1ba2a39009c8a96aff56d25548d30a9b"],["/tags/Port/index.html","cb20a3e527a91736efaa3a9f7bdd6381"],["/tags/PseudoCode/index.html","dc8af3defe7f4c8a32fc299f68ee4e26"],["/tags/Pycharm/index.html","c1716a5598581e1dd8b9f014539d6f05"],["/tags/Python/index.html","1387ac89b6307456bdd32045162df200"],["/tags/ReactiveProgramming/index.html","e3597a5bba105e26a93d7797756c386d"],["/tags/Regex/index.html","f177f57204e648418f31de5569a94b12"],["/tags/Research/index.html","f0c4aeaa61b60d2c7c725ae5c7046e9c"],["/tags/Resources/index.html","8fb51a57d3b233b2e0db098b4a316d64"],["/tags/Router/index.html","9aec6e5f2a0bb713f8d8fc48e8e17424"],["/tags/RxTool/index.html","372cde836378d4e3c99072b7ee87c847"],["/tags/Shadowsocks/index.html","0de7f9f0c1d5b9daeac17d4616ce55ad"],["/tags/Software/index.html","5503bced9e8a2ddbbfcec9181bd28751"],["/tags/Spider/index.html","561dafc2a8cb795937f72a54311a9b06"],["/tags/Steam/index.html","bedd24788e5bc8c4541db4d0638a468e"],["/tags/SteamOS/index.html","0c000651614f63d4577a4cf8bfec15f2"],["/tags/TA/index.html","37281fb3175ce760ac721bd47d5e825c"],["/tags/TechnicalResearch/index.html","a8e346d4e2614d5e934d3a58cfead047"],["/tags/Teleplay/index.html","462a99b394d7bfd6a271bf764571a2dc"],["/tags/Thunderbird/index.html","4dec03dede497ce7b6c6ae7f77564405"],["/tags/Tool/index.html","006553dbde311320de6cb1dc2ecbc597"],["/tags/UltraISO/index.html","0e237c7badfd772760f070077a87d653"],["/tags/UnitTest/index.html","82f7b43fdb06fabdb8276c2e428c094a"],["/tags/Unity/index.html","db6d23ef5ea8536037f9e8e9bb000499"],["/tags/VLC/index.html","22d3d2acab5075bf435254c115255c68"],["/tags/VMWare/index.html","255e0b50d09719704f6d2b09828b1ee5"],["/tags/VisualStudio/index.html","f369b74e515ab3d396257e4fd536dfaf"],["/tags/VisualStudioCode/index.html","b6da0d60dd4f13dd87a516447852a064"],["/tags/Wallpaper/index.html","efc8c663d5a1581560d140448b07ceed"],["/tags/Windows/index.html","58ab5691f3f12e55dcee0a2a972885f0"],["/tags/index.html","62a5213fdad49702c2b678955f5d34c3"],["/tags/专业术语/index.html","fe9f43059145352989db8d8c3f410207"],["/tags/个人所得税/index.html","03b4b034c21457e1a752992821efb9d0"],["/tags/五险一金/index.html","a96b02631a8054746c88899115da0eb4"],["/tags/亮剑/index.html","2bff7344ebe0cce12e3f0feef87473ce"],["/tags/仙剑奇侠传系列/index.html","d620a50c3dac7c140a2c319961372524"],["/tags/劣币驱逐良币/index.html","18c8e3da9457cc968425f89efe2dec09"],["/tags/千与千寻/index.html","ed2095bcd871b6b2ea43b1032cb16748"],["/tags/宫崎骏/index.html","de11f202a214a6f011a095ccd55570f1"],["/tags/小王子/index.html","6a5b4d71b4c15f86003f234cc116b8c1"],["/tags/开心鬼系列/index.html","c4009362f5961f91fbce9ac977707a64"],["/tags/微元素/index.html","b06edc1c0c30633f1c569075dba42aed"],["/tags/思想政治/index.html","08d7be385c9540df3c20a96e4e696f17"],["/tags/数据结构/index.html","f1a0300e0ba7bc129bd57ded66738c4f"],["/tags/新型冠状病毒肺炎/index.html","fb1a390acf773dcf957a83190213f231"],["/tags/游戏资源/index.html","3167bf29739584b578db66219b8a884f"],["/tags/盗墓笔记/index.html","24438aef697779cd24ca8a96e82e96c8"],["/tags/线性代数/index.html","62c10598d2a1d40bbc6138ab7f4c2f22"],["/tags/网络用语/index.html","3db99a495818fb32aea2a9c470247dec"],["/tags/英语/index.html","96a05cb93cb8f82ca5d73379c8f737b9"],["/tags/软件工程/index.html","32bb16000d8d3ec4337f9dcdfc047264"],["/tags/高等数学/index.html","929dae97ae01c626e62ee70c7d0cbda7"]];
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




