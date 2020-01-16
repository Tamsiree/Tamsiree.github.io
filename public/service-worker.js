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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","2a77136e7e1dcfbdb890f1d42767c031"],["/Computer/Alienware/Alienware更换电池/index.html","c7ad39d91b2c2995860dd3c356690f36"],["/Daily/Hobbies/Guitar/吉他入门/index.html","bdeaee4751e26acda704ae86ba91ba84"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","0be4313c1b94e089c19ac1d1205c3a65"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","e3437ad74068fafe36a5d53e14a8b1c7"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","4098613f1293b2d678ff05cbc3e9dd3f"],["/Daily/Memorandum/index.html","3ef16f9ca7d8bc0e45d6fcc48ff112dd"],["/Daily/个人所得税/个人所得税/index.html","2bb491b0e83a60bdd71c83305a3e5c9c"],["/Daily/五险一金/五险一金/index.html","a0e0599f34ad7035933f9381fecdae72"],["/Daily/生活小常识/index.html","782052f01dc659430dc2ccba64b40156"],["/Daily/网络用语/index.html","d9825d9f7e35adcb7591c50966f98505"],["/Design/设计用户界面的注意事项/index.html","3f52b427b95762ab85efe210113f558c"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","b90488610d20d22d005e3d74bc5f2de0"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","e5098f2630ec712749ac60cea9c8f0bf"],["/Game/GamePlatform/Steam/ARK/index.html","96b2df0a39aa37481fce0984b87fb9fa"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","bba22621c3dd2f0024ec04c8844d6537"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","2b7ebb6f443ef11c41f284cb5cf6fa2d"],["/Game/GamePlatform/Steam/Steam库共享/index.html","86edd0d26195c575bc0247516c97aa96"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","81a9843fa755cb16e867a08bda10055e"],["/Game/如何独立开发一款游戏/index.html","abec3c14fdc9bf6c0e28ebf2fcad5481"],["/Google/Chrome/Chrome上网助手/index.html","ebcfed3421cbfb8b6cd06ca573c6e554"],["/Google/Chrome/Chrome使用技巧/index.html","6052ef3da2056e74f815c84f7bd0a7f4"],["/Google/Chrome/Chrome插件/index.html","a2ed25fc444991a65a12728d1e8519ce"],["/Google/Chrome/Chromium/Chromium/index.html","10e770ec03f5d7112dd833601a858cce"],["/Google/Google搜索/Google搜索技巧/index.html","0e884b493bf9c7956bf274ffc84c2cce"],["/Hardware/HardDisk/硬盘分区结构/index.html","e78f67cb2c258d90ca9d5afc077268f4"],["/Hardware/Router/路由器固件/index.html","8d1d24025396ef17cb7cb74bdcbd3d3e"],["/Interview/Python/2020年字节跳动面试题/index.html","fc2f1b27f93afa6f7c200e6de2b1ade7"],["/Movie/HongKongMovie/开心鬼系列/index.html","c1b94b7094031323993e92b410d6d460"],["/Movie/小王子/小王子电影的共鸣/index.html","5a46374627191a36849636667cc1f50c"],["/OperationSystem/Linux/Linux分区管理工具/index.html","498a7c79e52f55af03c83ea86c069591"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a59a0d23ae697f11aeadb6780a098b6a"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","ae45ad0aca994a4e66fe80b79605fbc7"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","2d33ef2e47c4d4fa94d52f0dccbc9574"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","56e476e06c9c5a47de4ec3fe8b5b35f0"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","1e76762e7c20dc049f40b4b18c7c5180"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","5f855e6abac31dd0908c27751dc5b648"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","9c7ce1eb5fc6e732e54ff25f09321891"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","c9a3fcad2ee8950590b9a056bb36055a"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","d7f1f4fb014f4634346e7a03504944c8"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","e2031b35819977da96f6e8e1e6a55661"],["/Research/Math/线性代数/线性代数公式/index.html","4dc04c49412e5548b352b65af16a5c31"],["/Research/Math/线性代数/线性代数知识点总结/index.html","05363e8440c761f1994f833f25ec89d1"],["/Research/Math/高等数学/高等数学知识点/index.html","cac03972ebbb5c3f281723d2ce078094"],["/Research/Memorizing/费曼技巧/index.html","106a32b10ba990fc474969928cfd9b0b"],["/Research/思想政治/考研思想政治理论知识/index.html","8557fd104f2a5f6a1277c7752f47a8ff"],["/Research/数据结构/数据结构/index.html","8f8498d0d5fd589102725a64a82e9d52"],["/Research/英语/考研英语作文/index.html","c8d6624c72dc9fbc8754706573f96c0b"],["/Research/英语/考研英语词根/index.html","47a6a68447f39162f8bcb08ecd2e7fd3"],["/Research/软件工程/PseudoCode/伪代码/index.html","d93d4adc6a7fdc9c78680d14699d9ee1"],["/Research/软件工程/中南大学软件工程考研题型/index.html","c61d14376be7fafcdeef7a14b40506a2"],["/Research/软件工程/软件工程基础知识/index.html","257dd715e3e98cc85d4c92129371fe16"],["/Software/Anbox/Anbox/index.html","ceca42cfb287b6f88a6d8cc9756a96b1"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","648cff7fc599e122324b3754b2be7c8b"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","dbfc08015c39e5fb2fe632ee0a17dccc"],["/Software/Office2019/Office2019激活/index.html","d8a34e3c08becbd8fd011bedb2410470"],["/Software/Pycharm/Pycharm激活码/index.html","b926f8b4fbedda1a88aa9064d439a8e3"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","0558806690ac1479c1bf06e20ac0e4c6"],["/Software/UltraISO/UltraISO/index.html","8f16586e74de453a1e95257db1d7423a"],["/Software/Unity/UnityHub许可证手动激活/index.html","5842de41bd2116501ac1eeae049d2f20"],["/Software/Unity/Unity使用技巧/index.html","0ab6e3502b5f075365abcfd35a6fade7"],["/Software/Unity/Unity动态加载Prefab/index.html","5a4828a6a44250cab2cbb70d8ec22d4a"],["/Software/Unity/Unity的Canvas组件/index.html","e0589f95f6ea69383d72292d1abd7108"],["/Software/Unity/Unity问题归纳/index.html","d399291e87fee31690186c9f93e23409"],["/Software/VLC/VLC使用技巧/index.html","d4ba367f13a01b97955d97be74a2646c"],["/Software/VMWare/VMWare/index.html","760810bdacbb934fb1bc603b83a8080c"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","59447b16ccd1285431a69eb6d72a4be2"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","146ac2a68a3bbd79ced209b6dc9013a5"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","2e7329e9cfe610c1229a98f43ec70559"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","bce411ecd79c02b1f994d839200cb203"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","420e721fe2353dd7b7e8dee0f7d8a094"],["/Software/Windows常用软件/index.html","1cb12e8ca1685569a7322c14d17735a5"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","d037466fa0ef9730856be66be2a87aba"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","b1108e8afad20cef721130e6d973da58"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","cc1e76fd26054c1985db156e11a078fa"],["/TechnicalResearch/Base64加密原理/index.html","b3b325b0777081f83cb3f39f9e54dbab"],["/TechnicalResearch/CDN/index.html","3e4a6625fec3314bcacc7064d2c59cce"],["/TechnicalResearch/Git/Git/index.html","fe6e1b53fb207b1749cecbdfc6a4caf1"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","bf96b8f94ba2032f5c340b2520a863b8"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","cd7db7ef61a007a72acb3f03f9db1d40"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","ffb08c7caa1fb5308c1e1a752f1670ec"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","b6424aa469bb6b2d0b108913157a0f8b"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","1bfce50d5c22d15b0e59cb2a8f87cfde"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","01697f258688e777d99350806d48e1ec"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","48bd8db586033f5cf9520c954dd6f193"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","4aa8fa0b97533faa282a2ffd388fd092"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","f1b1791f63c17a16bc4afe587b99250d"],["/TechnicalResearch/Java/Java基础快速入门/index.html","5c076fe31cc99c48e1fba9bbf52011ef"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","d78b547cd5524e0406ca2dfa952db874"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","072c55c846674e25a9fc1ed08eef3156"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","0b7cae8150044e6cd932fa94964d263c"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","a30cc906ec64cd14c3182c4f2cab3bf6"],["/TechnicalResearch/Python/PythonExercise/index.html","0110392640b29384cd7762237b273f2b"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","1ccda3862a2e426ed46489540c10a3fa"],["/TechnicalResearch/Python/Python问题归纳/index.html","a6cbc638c0ed3b7522cf82416fa40d83"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a658c278f81cfb7459c56dc5fcc7d028"],["/TechnicalResearch/Regex/正则表达式/index.html","3f24e4afb8d1ffbd015d949657510c0e"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","1cb68827cc77648002ea5916cbc0169f"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","c19743242e28e8ac06b005924ce46bc9"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","bc142982b5d16a25fb570be534f7566c"],["/TechnicalResearch/服务器常用端口/index.html","6c5a425bc3be4b321ed84768b2bc9594"],["/Teleplay/亮剑/晋西北铁三角/index.html","948c26871dd10a71a20a0738ca816eb7"],["/Teleplay/仙剑奇侠传系列/index.html","13eaefd6fbec990ef73be321e19c67b1"],["/Tool/Music/网易云音乐/index.html","ef7808a1c7273a2693a7b483e99b0eda"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","b31f65826f38e2c0d721db2972b716e5"],["/Tool/百宝袋/index.html","16fde22935f6a575fb5517a19e599f4a"],["/about/index.html","a43c351d811e0c7a0389635db3693269"],["/archives/2013/10/index.html","3baca181e80053914ed991103db4b166"],["/archives/2013/index.html","3a609aa1bf982516af9222b1063b4efb"],["/archives/2016/09/index.html","b7e92efcfa1f58664384ea640f6b7b31"],["/archives/2016/10/index.html","86e07c1ef90aea98a6dfb0657a9db482"],["/archives/2016/11/index.html","b5edf1a2a342863e9fd502805c1e95b0"],["/archives/2016/12/index.html","0c1ec2746f2e27d05e493ef8cb2c976c"],["/archives/2016/index.html","dbb1355075416b566874f97419ec9d67"],["/archives/2017/03/index.html","ec0ff0bacfc40f82295d1b375766555f"],["/archives/2017/06/index.html","3126ddbebbfd08ed0f23fa445c41105c"],["/archives/2017/07/index.html","4467dbf9f8074fdbf9e6d574efb86ee1"],["/archives/2017/09/index.html","17e58da858d4739f1a6c806842f0c55e"],["/archives/2017/10/index.html","381737cf83178055c94217f81fbe4dfc"],["/archives/2017/11/index.html","5fe9a036f6ed9a86d04614fa0f402f47"],["/archives/2017/12/index.html","0fbafd5e6935e11625530e6f70ea2767"],["/archives/2017/index.html","0988d67700a5bea29a4f010ac3847421"],["/archives/2018/04/index.html","fbaf4ad8529a5f01ebc1fa04f3ceffe6"],["/archives/2018/08/index.html","927cc3d23ae9cfa3d2c273e5f874ecd3"],["/archives/2018/09/index.html","492c5d309a9b558d1a008b13b1f9e592"],["/archives/2018/10/index.html","9f24ada5db58359dca1c4fc6b25d48da"],["/archives/2018/11/index.html","1a0dd3edbb9ab21089636e908638b858"],["/archives/2018/12/index.html","2af23b5acd325a1cddcea89054a6430c"],["/archives/2018/index.html","3f7f49482f2235f021208787b1e1b129"],["/archives/2018/page/2/index.html","87d1f6470b5c85a89dfa85487402b015"],["/archives/2019/01/index.html","88a144292060fbff3c2e05d0aa66dac2"],["/archives/2019/02/index.html","e338c980495f4a457950f6367f9f8eee"],["/archives/2019/03/index.html","d2d3b7139799137d0a290318a9817a26"],["/archives/2019/04/index.html","a54eac05ad3a7218a7e6878b2472431b"],["/archives/2019/07/index.html","8f4115d40dfe3c11365980605e725294"],["/archives/2019/08/index.html","f284a11727594bac41e178f88c760c57"],["/archives/2019/09/index.html","9a32288117cd70f610bcd35eada8a305"],["/archives/2019/10/index.html","b1977cb63c3548156e4d5aa4e70d89f2"],["/archives/2019/11/index.html","1a66e2b5352e623d12963166560b9a36"],["/archives/2019/12/index.html","7380cb7531024aead0be3eb5e6aeecfa"],["/archives/2019/index.html","ee4498a06f84b62f266dcd0b5276ece4"],["/archives/2019/page/2/index.html","68ba21c23835490787ff43ec48b0580a"],["/archives/2019/page/3/index.html","508fec1547c3ab0981ccb56514fa5321"],["/archives/2020/01/index.html","f15ee6c466a64c744f9cb13f3cc8cb40"],["/archives/2020/index.html","f89aba8c39cf2e9b2b5154f1933fc8fd"],["/archives/index.html","847a727d1cebdc7f6731e63dfffc84c6"],["/archives/page/2/index.html","104670d176e8ae73098fad522553bb3b"],["/archives/page/3/index.html","45f1e69c0296793ab80a2235b287d3ad"],["/archives/page/4/index.html","f0cc6185be6fa8fc53fd168a6598e453"],["/archives/page/5/index.html","b7a4a05f3e71440b04320ce22cc71f4e"],["/archives/page/6/index.html","5543362489eb5ecdcbea2a049ac95fc7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","25bcaf3869d9b6bb41af3cc339810ee3"],["/categories/Anime/index.html","456ba866b674d423362e88c85203e1f7"],["/categories/Anime/宫崎骏/index.html","c1d4e204d2e3724a17d9d9fe17dba64e"],["/categories/Computer/Alienware/index.html","cf522be472c5f3f114d20ff2167779ff"],["/categories/Computer/index.html","fc20a4825a78d9b29075607affefe0d7"],["/categories/Daily/Hobbies/Guitar/index.html","679f5b4714a682a35a984640f9974805"],["/categories/Daily/Hobbies/PersonalDiary/index.html","ccf331412b7c3988c298da952f271807"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","1764aac968c6d65e8fc4c5a7e084a242"],["/categories/Daily/Hobbies/Photography/index.html","878b520c79c96dc06efb5a7502c2f79c"],["/categories/Daily/Hobbies/index.html","26332100888bc1bc93546d58e690a42d"],["/categories/Daily/index.html","5b2d86f49e772ad2dea3c29fd0c7acd1"],["/categories/Daily/个人所得税/index.html","df47afb79310e619572077b29c7effac"],["/categories/Daily/五险一金/index.html","023ab31145893cc86e1ee73c8fec2654"],["/categories/Design/index.html","ea2a276e9dfa1ba68d81782c9f770806"],["/categories/Game/GamePlatform/Lutris/index.html","c8f8522c16d5341a037140dfa06e06dd"],["/categories/Game/GamePlatform/Origin/index.html","e01a6f6c30ece24b2cda9cda6d3702b4"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","3f103a60dd2b3003e2eb2f038ff90422"],["/categories/Game/GamePlatform/Steam/index.html","3d446a483d317b82986a202520abcab5"],["/categories/Game/GamePlatform/index.html","a39d2854053b0b8ae4f5f0ce1c02637a"],["/categories/Game/index.html","1aa5e1ab2e46c6bee1a507bfd14d98a3"],["/categories/Google/Chrome/Chromium/index.html","f4530c4da01f0acd1c7a53ce4d5e2b5b"],["/categories/Google/Chrome/index.html","b721da8f826d5e6a9d9edea0b8b11776"],["/categories/Google/Google搜索/index.html","195232dc4127cef5630478145b9f15c8"],["/categories/Google/index.html","02bb99e6c60fe5537324f5b3bbb35ed7"],["/categories/Hardware/HardDisk/index.html","c1a8b0e98a6163af3d434873ef235e99"],["/categories/Hardware/Router/index.html","ddd12a747a4a09f57170d81d57d96ce9"],["/categories/Hardware/index.html","810ed3972fb8e7dfe2ed46525cfadd5d"],["/categories/Interview/Python/index.html","3504e693ab1069dfb5a1d2c6be67f45d"],["/categories/Interview/index.html","ff0ec1cfe0c3d9d2da07bc68880da79e"],["/categories/Movie/HongKongMovie/index.html","32ad32f002cf855d45bf20b82d07b360"],["/categories/Movie/index.html","4cc1aa86e60df5e1880e4c8a645ea569"],["/categories/Movie/小王子/index.html","3e39d59799c33d852bbfa7d67d2351f6"],["/categories/OperationSystem/Linux/Manjaro/index.html","180ba88d398d08cdd4a2cdb5621a1fb9"],["/categories/OperationSystem/Linux/SteamOS/index.html","46c214f806ad6bd022ac601f3290d00e"],["/categories/OperationSystem/Linux/index.html","dd1f6dd8d481e4212d54980cb2615947"],["/categories/OperationSystem/index.html","4c7dfea2b49e5ba2662347cfc9372bd5"],["/categories/Research/Math/MathJax/index.html","f4bf07871a891467bd67f432760ec1be"],["/categories/Research/Math/index.html","72cf3c6127afcdb05d13d21b8ceb2539"],["/categories/Research/Math/线性代数/index.html","d1e155cb3444b1f2ddcfef2da385f897"],["/categories/Research/Math/高等数学/index.html","e4b84d5e0430e24cfb5a37afe4119ac1"],["/categories/Research/Memorizing/index.html","41d554292dba1f9ad1c8bfcb8777c8ba"],["/categories/Research/index.html","23d3d98a28dffe37ff805b765f0cf1d8"],["/categories/Research/思想政治/index.html","0552facc7afbb3cbff454276fdd34953"],["/categories/Research/数据结构/index.html","cfc1a4ad97bf3903b2f8788cc3424db7"],["/categories/Research/英语/index.html","3771a78eaf3603f6d021dccb6fff09f8"],["/categories/Research/软件工程/PseudoCode/index.html","265405425af00da209b3f7a9b00e125b"],["/categories/Research/软件工程/index.html","a4f9a5c3f65dfd1baa52a9de65f70512"],["/categories/Software/Anbox/index.html","a64febd972d12ab294c6cbcca9dd528f"],["/categories/Software/AndroidStudio/index.html","c09ef3bdb67c895e9d36fcd3a1c73ab2"],["/categories/Software/Office2019/index.html","6ee48ca6b1b323f8211d0e85a241d638"],["/categories/Software/Pycharm/index.html","d3157d9f688180242875d0ebab65570e"],["/categories/Software/Thunderbird/index.html","b2d5de426f24d2e8a6a290a4310e4bdb"],["/categories/Software/UltraISO/index.html","02181ea17bfee7f75e98a4ebfd5c7446"],["/categories/Software/Unity/index.html","cfef2dd62401781c3b4a68a97a848e39"],["/categories/Software/VLC/index.html","862e586b29ba155d8ee310dea1c33c29"],["/categories/Software/VMWare/index.html","16019fc8fbd94d592856a8b555ee865e"],["/categories/Software/VisualStudio/index.html","2b52c623de89639929d47a078ee689d7"],["/categories/Software/VisualStudioCode/index.html","b73f331bf8ae82a40c0d06bc3048a491"],["/categories/Software/index.html","7409b225b5eb14c6cd46a4488724d8c8"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","b179903ce8e59aa3611081e32bf22e4b"],["/categories/TechnicalResearch/Android/RxTool/index.html","42db0dde5f3cae3774bc619ad4976039"],["/categories/TechnicalResearch/Android/index.html","395c8b942805f3fabbf14fbc5d61c22b"],["/categories/TechnicalResearch/Git/index.html","7f10855222521646abac2159750d8bde"],["/categories/TechnicalResearch/GitHub/index.html","24c5e475a1835be78e1d2077f886da2e"],["/categories/TechnicalResearch/Hexo/index.html","aa14608ea6aca9167ba332e38a3eb9e2"],["/categories/TechnicalResearch/Html/index.html","4621277e80329b6eac3b9e32e7223fe2"],["/categories/TechnicalResearch/Java/index.html","6ba437bfa8efcb196a234e96d5e79311"],["/categories/TechnicalResearch/JavaScript/index.html","ba3f05acc00b7618b6f017ac6bc67769"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","96dd9835ad3ebd47bc3e1d1483f6622d"],["/categories/TechnicalResearch/MachineLearning/index.html","946782714770bb1e8260c6e616e73a9b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","a70e4abd6cf32e49e41bac27c9047d98"],["/categories/TechnicalResearch/Markdown/GFM/index.html","13702827e0d9e48dd1d5d163b3e75b82"],["/categories/TechnicalResearch/Markdown/index.html","2566d57bc47020153a4bb391e5e463a1"],["/categories/TechnicalResearch/Python/index.html","baf6b6621493f2824a96c8644d1d03ca"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","4005ceb802ba09e63ffe9baa253f4975"],["/categories/TechnicalResearch/Regex/index.html","6c864aaf175db3ec9a46ce1c56f51c08"],["/categories/TechnicalResearch/Spider/index.html","236e402452b130a6bb56205fa875c4c4"],["/categories/TechnicalResearch/TA/index.html","30a9fefda120a2e63c4b811a77b48ba4"],["/categories/TechnicalResearch/UnitTest/Android/index.html","96fdafd4e2e8e727a5993cbd26d43220"],["/categories/TechnicalResearch/UnitTest/index.html","11200bfffb92aa74f1a7f43e6e94c7ad"],["/categories/TechnicalResearch/index.html","445fdadc95d85ac6f4ddfd14d0b24b2a"],["/categories/Teleplay/index.html","0d28f36da0fb874ed389b8af92d05d0f"],["/categories/Teleplay/亮剑/index.html","88567f481e8113718d63ebddbc45a2f0"],["/categories/Tool/Music/index.html","bcbdf3bcb461d40e4a39a09938028c57"],["/categories/Tool/Wallpaper/index.html","905532b80136f156d0385dfa7d0714f2"],["/categories/Tool/index.html","2db62b8717207b7e4c1dd96a11a15f24"],["/categories/index.html","d0810c4398c36e9c23f8c865395c1e5c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4613c505b89cef5fe6348859b2463921"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","7a5bc4503f7ea641a81cd83a4cdd1245"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","291b58c36b59297fd8796a816a470df1"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","f497e8903d397058f4f6204a317b5358"],["/movie/index.html","154eaea5fad51d8c4a7dd4979ab27982"],["/music/index.html","8d0a00500535b79981be55e30d7e0d11"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","574229357fea935440df41dcb2db8d24"],["/page/11/index.html","17153537bc51dbd6f6800efa6e9fbf11"],["/page/2/index.html","990a537f797fdafb3f716ea369b589cd"],["/page/3/index.html","d80c8997cfc6073caa5339b02de7def9"],["/page/4/index.html","a982caac7622544c27f2a4b2548d0b44"],["/page/5/index.html","f05d9007d3a040840f4d9267f151da8f"],["/page/6/index.html","6ce960a9dec4599427241c6ce25773e4"],["/page/7/index.html","6c90e3f8d8eb11bdfea18afaac8f269d"],["/page/8/index.html","c05c01cd8ea8159ab2b2fc472a6492da"],["/page/9/index.html","339f848a6fd0d904d80be46b4818ecdb"],["/tags/ARK/index.html","26273ad0d24fb51d29fdcfbdc34671ef"],["/tags/Alienware/index.html","a0ed5327403524b9b347c44b9d979706"],["/tags/Anbox/index.html","6bcb39681a1bb76567b8a7d3d672229e"],["/tags/Android/index.html","85c16beaa8c6651b1ff884e6936888ff"],["/tags/AndroidStudio/index.html","4e66984657c6d3465cc7ba22a2ae4b50"],["/tags/Anime/index.html","33a8b5215225783381773684acb7b744"],["/tags/Base64/index.html","590bae7af1c798f954b781ff7cd9efda"],["/tags/CDN/index.html","6e28e562ea70fb7bdf446ec3b52c0cf7"],["/tags/CSGO/index.html","068a83a6dbf2d5abe512a43b5b35bb56"],["/tags/Chrome/index.html","1d7fc066d2f53634808c5b3675cdf6de"],["/tags/Chromium/index.html","b4b0664188ea8f8fd5bbe89819f9bb79"],["/tags/Computer/index.html","c50a7d9ae931e74e27739d71d39210db"],["/tags/Contributor/index.html","276c38251e3277eab498015eacf17475"],["/tags/Daily/index.html","494e52e6c968d76531dd73cfa14aaeec"],["/tags/DeepLearning/index.html","0d824c351a29dc3619cfb04206bb113f"],["/tags/Design/index.html","49b9e59c57f890a3f146675b80f9a536"],["/tags/Emoji/index.html","36effb41c341702ad85f34b7826a36ec"],["/tags/GFM/index.html","d58b90cea4040db3df41c322546d82d6"],["/tags/Game/index.html","482364e723a38a378b99a19c8912c13b"],["/tags/GamePlatform/index.html","da45a14f47b61899822a3d5418e1cd4c"],["/tags/Git/index.html","f608f1ae61764a7d07a3a3ef697cb3a3"],["/tags/GitHub/index.html","c693132c4facd4a160c58ed466d1d57d"],["/tags/Google/index.html","be7ec4c7e278e872e3e12e96a1d99b65"],["/tags/Google搜索/index.html","318544e54570559f7a2359edff0bf093"],["/tags/Guitar/index.html","920e968a550258f23446a38d281fbf90"],["/tags/HardDisk/index.html","5e496e3b879250f97d4c0c4393215412"],["/tags/Hardware/index.html","58ed8051819852d1713fa2d18d79d6ec"],["/tags/Hexo/index.html","6b52c1030db3142d8b2cb350deb9ca7e"],["/tags/Hobbies/index.html","e43c29c1e4607205816accb33541e777"],["/tags/HongKongMovie/index.html","b8089e83449b1c74fbf261795f0bdf61"],["/tags/Html/index.html","b84540ae0260ef3569d439775b903f1d"],["/tags/Interview/index.html","5d39a454ceb56ca28c041b5b37853c48"],["/tags/Java/index.html","e4aaa4027dada89b5d412e47933d6255"],["/tags/JavaScript/index.html","831a84ab13d7928bb01e7eca1f33e592"],["/tags/Linux/index.html","5018c33ca18b4c4bf145d94f1b757cf0"],["/tags/Lutris/index.html","2191e54d170cf3acf86d816d8909614c"],["/tags/MachineLearning/index.html","46e10f1e29db7b512847030a47c50fb7"],["/tags/Manjaro/index.html","9e3942c63f8f4c35c5ef264d6beb99c2"],["/tags/Markdown/index.html","5b8a3fbb5c98fa6ff5c9601ae4dde2ed"],["/tags/Math/index.html","c07137350855ef38bbf99c6968a5c061"],["/tags/MathJax/index.html","ba12761d9f86e3e01da902582d723e56"],["/tags/Memorizing/index.html","de60db9edda8d7f81f6062f9ad228dca"],["/tags/Movie/index.html","fd4ed4ee8122c36e8f7e39f4eb8db191"],["/tags/Music/index.html","45254cc5b37d085675f1c9b27ae36085"],["/tags/Office2019/index.html","6d41f3ad66c46468e4a49595a9c24280"],["/tags/OperationSystem/index.html","7f1d0646f6abf75b25a76c2b93eb169c"],["/tags/Origin/index.html","71363303e6adbd07ac0b855e94dd6879"],["/tags/PersonalDiary/index.html","f6c1746b4ffc81be171487f03b473b53"],["/tags/PersonalPoetry/index.html","ba9cf70cfb7badd6e1bc8897ea1ee47c"],["/tags/Photography/index.html","627aff5a56e3f3c05e3532612098022a"],["/tags/Port/index.html","b8aa3ee0131d26958435143c1fe701c2"],["/tags/PseudoCode/index.html","d21ecc98b906d9cf440000c675667bf3"],["/tags/Pycharm/index.html","a89091eca0afc600e8087e0d4461f051"],["/tags/Python/index.html","e67a47d2c965b4917312662831535366"],["/tags/ReactiveProgramming/index.html","220131e2689e326e999231df443cd345"],["/tags/Regex/index.html","9ceb322cca222d6714c533f620aaa27a"],["/tags/Research/index.html","dd3620b67e79e53853fbf7a1063a15a1"],["/tags/Router/index.html","a38baa1a31d5c5222e1eedd87ed8abbf"],["/tags/RxTool/index.html","3f80fdf262f094c3afd374e9603e1432"],["/tags/Software/index.html","c55f69ecc2ee1159868746c542be738c"],["/tags/Spider/index.html","57032fdfae02c86b96448491b16dc34a"],["/tags/Steam/index.html","738c258d14d2339acb53a56961202502"],["/tags/SteamOS/index.html","b32f90e66bbcff5f155622b3c3d7b9af"],["/tags/TA/index.html","f96b2eac68cba743cc8fa68315f91650"],["/tags/TechnicalResearch/index.html","50aac41f2fc4e92216ee099a5b4a36eb"],["/tags/Teleplay/index.html","01aff29644491c95fce7b2dac3208258"],["/tags/Thunderbird/index.html","20b82a1be1f7d6edc5e5b3e13c778023"],["/tags/Tool/index.html","a0599bcee1cd305ec0122db642a25e0a"],["/tags/UltraISO/index.html","699c1bb15b3e326abf4d1655ac3544e2"],["/tags/UnitTest/index.html","9865c050aef969115b036175f77f2a48"],["/tags/Unity/index.html","03699b3da3eea66e809a6ae3b25380e2"],["/tags/VLC/index.html","e9e008bc4f8825d7cf4c95ef95accf0c"],["/tags/VMWare/index.html","f384f9b7553b428ae89df1b90c1ae730"],["/tags/VisualStudio/index.html","5631fac213a02b6e6a98201b6d75b9d3"],["/tags/VisualStudioCode/index.html","2abe5b8c97dba3947586de60b2377f14"],["/tags/Wallpaper/index.html","a85a163a141a2c53abb5bb6e74c871d6"],["/tags/Windows/index.html","3de989d067f93b08adb836d52a881e77"],["/tags/index.html","60a9ddc7a80534cb9d927a39c1f2d384"],["/tags/个人所得税/index.html","8315b0c6a40e3b0bbf20feb1b8a0785b"],["/tags/五险一金/index.html","ff8fedad1d2d6fa36d67ab597b4dc2cd"],["/tags/亮剑/index.html","802da50877fb3e2e9c04d2b82688ddc7"],["/tags/仙剑奇侠传系列/index.html","b4b510595691c2446068aa7240cc9bd3"],["/tags/千与千寻/index.html","778b79b5851482b002c1897cc14eac09"],["/tags/宫崎骏/index.html","b8a7c51d2743ef18bc191de923663c41"],["/tags/小王子/index.html","4bb79418722f9087681f41bdf2f32536"],["/tags/开心鬼系列/index.html","5dc7419534e8d3f9ceb82c3226b0f270"],["/tags/思想政治/index.html","2e9e80d3a50344bb659c78ecc09d9b75"],["/tags/数据结构/index.html","7932cf15f7c39288c76989d311ea4ef6"],["/tags/线性代数/index.html","8a8d622e4045be9f6cdc1630b1a9bafb"],["/tags/英语/index.html","48b1f37388655e967fdd5aa6921c5962"],["/tags/软件工程/index.html","c5667f00fcb08695b4deea56a2b6cbe2"],["/tags/高等数学/index.html","8c5e400e1189c9c42b0b1c6215d8fe71"]];
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




