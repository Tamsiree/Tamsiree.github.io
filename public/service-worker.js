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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","c8166e9f06bf144af12b351b0a000799"],["/Anime/小王子电影的共鸣/index.html","f2644a320321684877d713b8f8291be2"],["/Computer/Alienware更换电池/index.html","7030f0f35832783fbed2a076bfaa4b04"],["/Daily/Memorandum/index.html","dcf0eaeab30aa37d343665200b40a012"],["/Daily/生活小常识/index.html","4738edfd2e19500a3650b08569dd9567"],["/Daily/网络用语/index.html","b83b563317915ae0e21c7a40ce9ee49b"],["/Design/设计用户界面的注意事项/index.html","c484ae92e061c82eda1e7ef95e8eb8b9"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","2bd8e3947ddd144331b33280ecfec78b"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","2f52a2c999917f6dcc193ae94e8ea242"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","8e97feaa2bd52203d2b6430657a1087d"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","6cd94d1625e16159a02cb738812f734a"],["/Game/GamePlatform/Steam/Steam库共享/index.html","427eb7cb31fd5810261e38418ae9f6f6"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","a758094a4ae1597e978d55faa71f7c9c"],["/Game/如何独立开发一款游戏/index.html","d120f2426bf9770bcef7fb6e6036bec1"],["/Google/Chrome/Chrome上网助手/index.html","f16fa69774da826ac9063c5d7f2bbe19"],["/Google/Chrome/Chrome使用技巧/index.html","84e0820e9e87d06ab672855f833f30d4"],["/Google/Chrome/Chrome插件/index.html","6ae6242b97d0c0ee8bbb50030456467e"],["/Google/Chrome/Chromium/Chromium/index.html","d161d384fabbd893555aad786cc8cc02"],["/Google/Google搜索技巧/index.html","3a6c6f5f5b5290f19f25351803dcf949"],["/HardDisk/硬盘分区结构/index.html","aaf804cdcc5e95f163f028d6b59f2a1e"],["/Hobbies/Guitar/吉他入门/index.html","eb40ec42e8b11f3d411a53d7eb78e6ae"],["/Hobbies/PersonalDiary/芦江曲/index.html","b4b8bce4756ba3eacd5f59a7ac2129aa"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","9271311dd122e4c167aac10b8c5609b8"],["/Hobbies/Photography/摄影入门手册/index.html","9b139f4bf54ec70fa7cf92bf8f32b05e"],["/Interview/2020年字节跳动面试题/index.html","0d30d64ee5e1b01d024f8d97d716285d"],["/Movie/HongKongMovie/开心鬼系列/index.html","3a591a9649370b2e1dbfa45ef485a672"],["/OperationSystem/Linux/Linux分区管理工具/index.html","31a375ad65c04ce82f30bedcad04c272"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","d05e4593e843f8419c6191a1074f6cd0"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","152a171e361a6e14a992a789999c04c7"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","98e07130f4c201b3c3db9c1093f9209b"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","0e3496942a77b3becfd53a3f88d1ea26"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","8d25d59fba9d3bb03f1d4dd1c0d59a86"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","ce82f6bcdc331da81ab1ba501706cf97"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","df988827f152edecc3bb528968a29cfd"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","a090fdf04f04af09e73c23e29b2f2b11"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","65811c95bc51c3bdb4871c483752a13b"],["/Research/Math/线性代数/线性代数公式/index.html","39a71ac79f4281da3a586830712ea042"],["/Research/Math/线性代数/线性代数知识点总结/index.html","90bf93b86e5a6da1b6c1f50668b52b71"],["/Research/Math/高等数学/高等数学知识点/index.html","a2066087f7e7f204378bf3fd80ba3bd9"],["/Research/Memorizing/费曼技巧/index.html","0139d73f49c3d7a1eb3937a9fd5818cd"],["/Research/思想政治/考研思想政治理论知识/index.html","918d7a6e42cdbaf01f70ca93e767c08a"],["/Research/数据结构/数据结构/index.html","dcca816407b401b3dcc955f559a32762"],["/Research/英语/考研英语作文/index.html","35bd16c27aab6b2f93e60090cda5b769"],["/Research/英语/考研英语词根/index.html","ce6fa1fb47e5dc0aac15b21a1f57eec5"],["/Research/软件工程/PseudoCode/伪代码/index.html","c744bf5241c9a7eb0c746307b570d4cb"],["/Research/软件工程/中南大学软件工程考研题型/index.html","824d23273f6e09044ab5b114052e080e"],["/Research/软件工程/软件工程基础知识/index.html","dc994344402da62b22370502b7a24832"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","9820732f3c4095d54909ce46242f5255"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","dcc896d49e5c344f630a3922ad04c06f"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","0f6fcd9d92aaa36fca33c4debcb699fc"],["/TechnicalResearch/Base64加密原理/index.html","d841401e8cbdb68abd78a18ae2473d81"],["/TechnicalResearch/CDN/index.html","18a5b2738d92312d6553f7a2d97128d7"],["/TechnicalResearch/Git/Git/index.html","d76b1f4e49ce53225e17fc59325f7ed7"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","fc1997c2d883a35ba892784bd2c5e9b9"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","dc171f89deccf4fef3bf7a27a7c75cde"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","02755184c0a40b571423ff448d43202b"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","16c6375edf884edd7f03c7ba61024f92"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","10e2cd8fee127d0b448022b1292b16c0"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","42023f84f40ca8a4239d5e6593798691"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","11c9740e25ca673ead1ab25b3f93b068"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","a82820d262ba7188a17b9a93fad010a8"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","41bfc758739948ef6c2f1f19f70e6fb9"],["/TechnicalResearch/Java/Java基础快速入门/index.html","62321346838b0f1315432161c04b02cf"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","ab173c8c6ced8a84c21b6368358da512"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","5daee19b1790a0f048aa345f2b7327f0"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","61b6e2e5747c36470eb1020f54ee2f08"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","0a57f4e4f574a3a795e4f57fb98fcdfe"],["/TechnicalResearch/Python/PythonExercise/index.html","4a8530ba1ccab90857fac6cb24569040"],["/TechnicalResearch/Python/Python问题归纳/index.html","e71ec36fbb3a1b1979babe0899953d27"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","9ff486024a50d777a9f532ca91536c5d"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","9d57c02e6b7486f2fc43e40cd172f86a"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","4c86181128c2462dffd901fac727e88d"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","6113db4d72adefe32f990968af71567f"],["/TechnicalResearch/服务器常用端口/index.html","09b52b46610496d54836c670ec9a48cd"],["/TechnicalResearch/正则表达式/index.html","44b42c67edc03979fbdd91ecb5d173d0"],["/Teleplay/亮剑/晋西北铁三角/index.html","09d2a8aa66eee67cb86f513fb9e6aaf5"],["/Teleplay/仙剑奇侠传系列/index.html","2dcb31e9dd84ebfd4b91e3f115a12234"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","15a13e44a32df83ed78ad81153a915d9"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","6db7e4ce49fe4737f6d1c51c4246c4d7"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","2555ed5260e16ea00b3934abc559672b"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","4bdf59a8707479975ef8e1855ccdc842"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","5e85b6e5ec91483d7929d55de61c9750"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","e82a5c3d5f68de497e65c823a28b221f"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","ec53e25b71bbbc4998caae45ea2bfa5d"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","279a4de834936c879610c2fb0ee9f23e"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","1837d92be5109cd2288e5363937077d3"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","f61bfffd3fba45a9b7876aade27cc7ca"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","e9e58aefb272778ef0a17be7dcf72c28"],["/Tool/Music/网易云音乐/index.html","0a595f038ad87820ef0a910b90f94589"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","066dd1f0b74226262e6a636b691ea018"],["/Tool/Windows/Software/VLC/VLC使用技巧/index.html","02958d3e71647535c1cb72e8f837d931"],["/Tool/Windows/Software/VMware/VMware/index.html","5540ba636bb6fec31bbef7010bcfe4b8"],["/Tool/百宝袋/index.html","b33deb8bc08f59792107f010ca3d81c1"],["/Tool/随机获取在线壁纸/index.html","12ccf49365310f6ea7592673e5c97719"],["/Windows/Software/Office2019/Office2019激活/index.html","d4aa31c780206f9becb6979620533c1e"],["/about/index.html","bcd4a9c0132cb459a96f5d18ec50e250"],["/archives/2013/10/index.html","f534449851a153512b46ee3a12ddd7ce"],["/archives/2013/index.html","59b7297c6af99ebe8c5ecf52546640ac"],["/archives/2016/09/index.html","32fe2705a776378377ee1b5dd734af14"],["/archives/2016/10/index.html","babc6a5b0b7b9d3f9f2f0538797e936c"],["/archives/2016/11/index.html","6b3a9a54978bce0d7e78cfdbfc5872f8"],["/archives/2016/12/index.html","c1cae7b23ee451f66fb0e1598aed5f50"],["/archives/2016/index.html","a3c612869424fe21883c2faca9093095"],["/archives/2017/03/index.html","a6d781d7e698b70a267036b460df9771"],["/archives/2017/06/index.html","519d1dbdb1dc46776625517ad42aea65"],["/archives/2017/07/index.html","9d5340cd15ae6e0fd88626253b3d118c"],["/archives/2017/09/index.html","4013ee3275501cdd2e6c2b8422fa19da"],["/archives/2017/10/index.html","1a2980f73502bca22850e4659afa813f"],["/archives/2017/11/index.html","a647876e31320d0019c037a804d207d7"],["/archives/2017/12/index.html","c47dcc3460e3539586e749fb3e46be14"],["/archives/2017/index.html","ee0a9107e35a24fff15ff7e14f79948b"],["/archives/2018/04/index.html","f5daa207f2ecb7246dd2bac537b28c3c"],["/archives/2018/08/index.html","83b249e8258bf01bc906e1a4bb76a181"],["/archives/2018/09/index.html","54c83820d7e5b5c04a0e1eeac54797db"],["/archives/2018/10/index.html","96c360dd1b20dbd8af601ba88c2b5cbe"],["/archives/2018/11/index.html","4b96c1e3798d346e9c1e6c3f166229ed"],["/archives/2018/12/index.html","25bb6b2077832edaa361eebacc66bc61"],["/archives/2018/index.html","6f309a702309df4334277df3e9244460"],["/archives/2018/page/2/index.html","c99b70bf48b144dfa34cda360225720b"],["/archives/2019/01/index.html","d895dae224a3769d2f9dcd88d32feec5"],["/archives/2019/02/index.html","c1e1996828f3aac6888e572c4126866e"],["/archives/2019/03/index.html","6339d9223ccbde3db67650affdeacffe"],["/archives/2019/04/index.html","cef35b8fb49721f3b059243f3d065239"],["/archives/2019/07/index.html","ef19f3f1e21ff2ee9c11a4776fe57cac"],["/archives/2019/08/index.html","d99ecb9708c601db9e50a8c3e4eafffa"],["/archives/2019/09/index.html","7eda2e76fca62fca469790a4b9c604d2"],["/archives/2019/10/index.html","6cd925e46ac29797bbb563bd0bfe4ad5"],["/archives/2019/11/index.html","55e18afc646b77267b12761bc6309267"],["/archives/2019/12/index.html","d8503825a080b3f918b37d3b05bd65cf"],["/archives/2019/index.html","3824ffc1922c47e77f7d8f4f743e07cd"],["/archives/2019/page/2/index.html","0776092b6f9409b4428b439e6eabecd6"],["/archives/2019/page/3/index.html","9cfa3905cd17d71188939a3dd3fb412a"],["/archives/2020/01/index.html","ef4b89bc5e5761aaa6be88952fa0487c"],["/archives/2020/index.html","b8239c7deff77d56d4d574392f6671e9"],["/archives/index.html","cdb03a08565fa597daa4515618f1c8a4"],["/archives/page/2/index.html","db5f9a80117ffe66238607c5229ce79e"],["/archives/page/3/index.html","5904c45f059ea5ff95d9c85dc1b1cbba"],["/archives/page/4/index.html","f13ec7d42a10b334eac3714243a66502"],["/archives/page/5/index.html","c9af384d267603235f03eeffb141615b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","362beb932c9e4545f2b7ed72f3292d71"],["/categories/Anime/index.html","7057da7763c174bceeadfafc2836f509"],["/categories/Anime/宫崎骏/index.html","0695251bbb86592dc78e571b9461f60f"],["/categories/Computer/index.html","f5b8eaed762b084ec006631701929738"],["/categories/Daily/index.html","98a82605ff84aca670dc5ae1b5e2f873"],["/categories/Design/index.html","f001e91b7f3e714f604802517eab4ebf"],["/categories/Game/GamePlatform/Origin/index.html","dfab4ce4a678fdc3f3e52e3eac07fbc5"],["/categories/Game/GamePlatform/Steam/ARK/index.html","8c863ee7c2c9f0fae58131c2d485cd0f"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","aed8c8699fc32757fc4008286a7053be"],["/categories/Game/GamePlatform/Steam/index.html","fbbe305fff5b5371ff62bc51211d304e"],["/categories/Game/GamePlatform/index.html","8dd627eb9396fd9c81100534c5ff9dad"],["/categories/Game/index.html","f97d4f80c250013b95dd4b4b065469f2"],["/categories/Google/Chrome/Chromium/index.html","720807bbb453f0255123c5ea48bdd6ac"],["/categories/Google/Chrome/index.html","063e8df93c4ad337b42ae8ee4a461283"],["/categories/Google/index.html","996319f4326b2291310efb1a20968215"],["/categories/HardDisk/index.html","14cd8d7b48c8569304ab732fd38dcebf"],["/categories/Hobbies/Guitar/index.html","f9e1dae4a2546d6489ce9943ba055124"],["/categories/Hobbies/PersonalDiary/index.html","0c9cb0ae89a3bc297b82e3b0626cba50"],["/categories/Hobbies/PersonalPoetry/index.html","80728d924ec292467428083fc09a2fdd"],["/categories/Hobbies/Photography/index.html","4852f235db6a7b5778cafb2fe77c6e74"],["/categories/Hobbies/index.html","6e73759e81a2b330eaf510c92b115a67"],["/categories/Interview/index.html","ad4e2be726e290beb9d55712abac97aa"],["/categories/Movie/HongKongMovie/index.html","34f4571f91d494ea53c9a80efbcd37cd"],["/categories/Movie/index.html","99fe48fcf1a72a3bd4d16b621b1df265"],["/categories/OperationSystem/Linux/Manjaro/index.html","9cfd72ea0c5d0a2e1ac55735607149ed"],["/categories/OperationSystem/Linux/SteamOS/index.html","7049f25e7a1610c6ab2b4949e7ed8720"],["/categories/OperationSystem/Linux/index.html","55cb6d5dec2c1ae3f80303609fd46530"],["/categories/OperationSystem/Windows/Software/index.html","ae91b7f030a945f05b7ce24032f0d266"],["/categories/OperationSystem/Windows/index.html","9fa0f26218ef2cbe2550721e299fad6f"],["/categories/OperationSystem/index.html","4afda27df3ef07cc7550008475539388"],["/categories/Research/Math/MathJax/index.html","ce00da2c4ff7458b4264735e7a97d640"],["/categories/Research/Math/index.html","6e80b8988210c7b6f229331e327b9212"],["/categories/Research/Math/线性代数/index.html","d89be6a8cb49bc2a7a2e74c74bfdc5a7"],["/categories/Research/Math/高等数学/index.html","18475e5f3f98d7a670284f19104c9978"],["/categories/Research/Memorizing/index.html","e98d0e00c781b859de7bcbaa0bf3ce7c"],["/categories/Research/index.html","c9a4162533bab64de3744d2789c9254f"],["/categories/Research/思想政治/index.html","e304029889b21069f55babd8ee2ac2a8"],["/categories/Research/数据结构/index.html","9d0258ed93ac1d883f6fd9d25b84e8df"],["/categories/Research/英语/index.html","8c39269ba01bee27e4e28d9a9c01c5be"],["/categories/Research/软件工程/PseudoCode/index.html","a486d2d0b6ee852965742fbf72577f6e"],["/categories/Research/软件工程/index.html","ea1c74f7c663d77095f1c14790408607"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","a32fe4b70304531e2ffec41f1f79edb8"],["/categories/TechnicalResearch/Android/RxTool/index.html","f7ec55d9d5058826f7628e97aa16cbe6"],["/categories/TechnicalResearch/Android/index.html","1396a7a4ff310e127adeb773dcb8ec07"],["/categories/TechnicalResearch/Git/index.html","8353ac3e9875de7f074056b7541c2934"],["/categories/TechnicalResearch/GitHub/index.html","5be6e4b2aebf41908077859da04bf170"],["/categories/TechnicalResearch/Hexo/index.html","719350b86339261b04eb370b3c8cab04"],["/categories/TechnicalResearch/Html/index.html","7b6c50b0402afc897a533e1ac25c7607"],["/categories/TechnicalResearch/Java/index.html","1bf21c8d400808f026d498d55d1332cb"],["/categories/TechnicalResearch/JavaScript/index.html","13cf22fef5b1052f0df8c72844eee42d"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","c669d8f6975514d20fbe551ad063a71b"],["/categories/TechnicalResearch/Markdown/GFM/index.html","f95a43da52ab452a1ed6b20a2df7e751"],["/categories/TechnicalResearch/Markdown/index.html","240ac98c4fc4a6ea9ea0823150af8a6e"],["/categories/TechnicalResearch/Python/index.html","ba5a99c510bf31dc62a10fdd7e1bdd6f"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","f802d3249ddf8d2e64b600ca9abf8f3e"],["/categories/TechnicalResearch/Spider/index.html","030cf688c27193452564594cb1a65aa5"],["/categories/TechnicalResearch/TA/index.html","ddaeca47ccf963cd910c9ba569a4176a"],["/categories/TechnicalResearch/UnitTest/Android/index.html","0ff43dbe21111241e28857d7b4599aac"],["/categories/TechnicalResearch/UnitTest/index.html","61136208f759e8976a258f88e8354c94"],["/categories/TechnicalResearch/index.html","7afd2ccd09350b021f6fbba61fe5cebb"],["/categories/Teleplay/index.html","c739e6789700169be9d8ae7dd3404691"],["/categories/Teleplay/亮剑/index.html","14caeeee9ed6299e0f6a7b6afe96a739"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","ddb0008ad0c911bdc22aa6eef925b155"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","ab8bfb48df3714adbd44334a8074e8ba"],["/categories/Tool/DevelopmentTool/Unity/index.html","63672d08e9b50a110c177724e6e63fb4"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","127ad2e8939c32c33995ea16948de574"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","4e47f175d8dc9aa16d6c6cef684d5872"],["/categories/Tool/DevelopmentTool/index.html","a34de951cf97d548b252fd7cc741913a"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","63cc07888e5e57a1c30e8dd1f4011fa3"],["/categories/Tool/Linux/Manjaro/Software/index.html","815027ab9f02c11ac5db56325c6b2992"],["/categories/Tool/Linux/Manjaro/index.html","9ad95f44cf6e6d992e89bb727114b7bb"],["/categories/Tool/Linux/index.html","9477c4cbc72d94c51a637af579418f96"],["/categories/Tool/Music/index.html","f72ba7fe76bb5299ff30cd25f1c3a20f"],["/categories/Tool/Windows/Software/UltraISO/index.html","5e5474a595f42b43b40708ebf1eaec03"],["/categories/Tool/Windows/Software/VLC/index.html","9a5cb71b46552f325d5d737f8f3c3769"],["/categories/Tool/Windows/Software/VMware/index.html","64a80df0ab904c25109904797888ce41"],["/categories/Tool/Windows/Software/index.html","42a68171a16ccbf79f2a1d08f45e3c9b"],["/categories/Tool/Windows/index.html","e9d84e7214395eb6acd7abc7fc41193f"],["/categories/Tool/index.html","cb243c6de3e11b93be1685cc05b8f3b6"],["/categories/Windows/Software/Office2019/index.html","119ef5a621c384592d8a20d5c3a55fd8"],["/categories/Windows/Software/index.html","5a3c918d0778213f5effb0ab6d3b0c74"],["/categories/Windows/index.html","4b1cbaa3cb5dac0282308d0b798e7696"],["/categories/index.html","05b2a794118337e274932973abea8406"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","3f3a86c63cde8d23d36f7c550185c82c"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","417c0c48076febaa83e0462331ddbc39"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","58f70c30babe3ac031f71a0f5f1f4ef0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","34ede407fd39c634ffa1e16d839786b9"],["/movie/index.html","51c296875a65f52562b618f57635325e"],["/music/index.html","2d592169a4e0b48c395cb10362961538"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","e004ca94fbe186684733776e2e9467e2"],["/page/2/index.html","b455357700f13117802acc0171ea6942"],["/page/3/index.html","53861f2790ce58ff4e7e4f74fdee8f68"],["/page/4/index.html","4d02bbf4189f1c664c4e96d0b003acf9"],["/page/5/index.html","57652b3bcb5da00a304d70bf58ec915f"],["/page/6/index.html","2ee1fd86dde2bc07b591f9b0f5821594"],["/page/7/index.html","73ef3965dd814e051d66f0e261af0fe2"],["/page/8/index.html","d100ff6d2bfc685163593239f67bc5cc"],["/page/9/index.html","ce96a5aaa80451cd876108e2039f7d12"],["/tags/ARK/index.html","ff27f42e36ee18fb842a2ed09430141c"],["/tags/Android/index.html","e02b3105349dcdfe6a55936b7484dad6"],["/tags/AndroidStudio/index.html","2849090d921a095e1cdf5d30b5e6a0ff"],["/tags/Anime/index.html","f8df67ed7a285c8da1fccdeef62021c1"],["/tags/Base64/index.html","64fe52680837db465865b5302d7748dc"],["/tags/CDN/index.html","156b773a4689cbe51a85bcc1c8b1383d"],["/tags/CSGO/index.html","4b6868def5d332d8df09969f3395cb5c"],["/tags/Chrome/index.html","1933c41a59703fafb5ff61cb93cb67d7"],["/tags/Chromium/index.html","1f33f4771a22b3e6d88644d43121d97d"],["/tags/Computer/index.html","6e078abb4c880efef95b51beaf6d60ad"],["/tags/Contributor/index.html","e0ae8c56e3eae24ee5be6d59a9ed11ee"],["/tags/Daily/index.html","6829c11b84461509b4246d04bda670a2"],["/tags/Design/index.html","f25f917f1a0442365e6d456636d4db4d"],["/tags/DevelopmentTool/index.html","29e604e8d2507354b77c392deb86efc3"],["/tags/Emoji/index.html","88adb0efcad937391a13d32517643aaa"],["/tags/GFM/index.html","1c0189334d805ac33107c0e74061cd41"],["/tags/Game/index.html","7bb1a1f5f980ba656e80f2b5ff63830c"],["/tags/Git/index.html","9c598cd6bac2cde79cdf145c54add49f"],["/tags/GitHub/index.html","175f717d13aa86417540c3ca75b6cfa1"],["/tags/Google/index.html","57c684f95482ba8fe5d3885270d170c7"],["/tags/Guitar/index.html","a4046c8123e6d11e13cdf2c530995620"],["/tags/HardDisk/index.html","9ff4e77047773bf19b41daf30a942829"],["/tags/Hexo/index.html","5e7014cb7a1cf2ceba5fb6697b99a592"],["/tags/Hobbies/index.html","0d29d2ac4af78c6dd4e3f2e3c24756da"],["/tags/HongKongMovie/index.html","cb28d841c04472662eca3382c0784c1b"],["/tags/Html/index.html","af4a459fd0862ab7c8f2005f86f52ba9"],["/tags/Java/index.html","b43c0fee5ce88078333650a9f85ac27a"],["/tags/JavaScript/index.html","ac49e3c1d162c5876aab70699b7c4179"],["/tags/Linux/index.html","a921636dbd2a150ea8ac9803da219139"],["/tags/Manjaro/index.html","f6fac50133bcaf1267c3de1cc4026d92"],["/tags/Markdown/index.html","75a279c801cdef4e4c68c030211f0977"],["/tags/Math/index.html","ad47c5cb7bd259857f8f030027159a7c"],["/tags/MathJax/index.html","c2a03dceb8eca5a002f2963a1c2cb6ac"],["/tags/Memorizing/index.html","cdb932b4f269fa01ae7bedaeed1b1a41"],["/tags/Movie/index.html","e128b62ab99e2d2b21abf61f12920915"],["/tags/Music/index.html","945c5f46570fd732cccc1d0b20eb1241"],["/tags/OperationSystem/index.html","718281b3fe82beefaf5049e1884091db"],["/tags/Origin/index.html","918bec7433296f0e2c761a66ced4131a"],["/tags/PersonalDiary/index.html","6a1612280cb239f00f4ac84161d18c92"],["/tags/PersonalPoetry/index.html","c9a6f6535a74202bdad838132057f54d"],["/tags/Photography/index.html","4a5ada583188c842d684206246e44ea6"],["/tags/Port/index.html","ea43e226a44c27c056272846e70044ff"],["/tags/PseudoCode/index.html","4fd580f15da0d36f4e70decbd8cbd558"],["/tags/Pycharm/index.html","9f62f0388d24c2905861f8689b9532c7"],["/tags/Python/index.html","2da28012ff1dd4732b6b05b1cb7e4d62"],["/tags/ReactiveProgramming/index.html","586de21b6af596b4de1a5a9e06c275e7"],["/tags/RegularExpression/index.html","18daabfd1b489b5374d8a6b891e27ba7"],["/tags/Research/index.html","3f7e5ebd9f1fcd7bcf33ee1e8ba714ae"],["/tags/RxTool/index.html","273bba7d5932d803b6f0b7e96f17addd"],["/tags/Software/index.html","c959463f59ab151b30f0a81ed159ba03"],["/tags/Spider/index.html","ce8cdc6413076a32f0751eb76cbe2d44"],["/tags/Steam/index.html","8e445d3f1969895e5a48ba0079e855de"],["/tags/SteamOS/index.html","a098bb6f5b8dff5516fcf5f4b623af21"],["/tags/TA/index.html","ef22d9a4649f16e33202c46579251f96"],["/tags/Teleplay/index.html","c6e4c52d050724b6a6ca65b36fd023aa"],["/tags/Thunderbird/index.html","7546e0d94db9e02258a6e3628d9746bb"],["/tags/Tool/index.html","55c5619237bd6025338e8c8ed6dbae6e"],["/tags/UI-Design/index.html","ca1ded6c43891a9a5c6ba62193813682"],["/tags/UltraISO/index.html","7f91f3facf736294de0c723bc5c09d27"],["/tags/UnitTest/index.html","e2982d39420fc2ce78836e33f2d8cca4"],["/tags/Unity/index.html","92d7c2c72ea6895bb5b3686f4b407b43"],["/tags/VLC/index.html","0bd0bc78e6a0d7b5c45ede626f5ff584"],["/tags/VMware/index.html","0dca2434d509a22cd5e92e831a43ce13"],["/tags/VisualStudio/index.html","9aacc58861091903ad92e04b5a810797"],["/tags/VisualStudioCode/index.html","9fd2643d28b72af8f3367b36f12bb30a"],["/tags/Windows/index.html","93dedf04b91e77e166d5908fdec0cc1b"],["/tags/index.html","fe9b9705083047ce75939e9e17fd5f2a"],["/tags/亮剑/index.html","c8ab839f76f9a95fa19bb204e9a25844"],["/tags/仙剑奇侠传系列/index.html","76396584d56f3f0962d7a5c5763b8ff5"],["/tags/千与千寻/index.html","f604b29c6188d6c66e96b74f5781d56d"],["/tags/宫崎骏/index.html","cd5bb5418b9a6841a2fb5a347b7afea6"],["/tags/小王子/index.html","12d7a404c049bbb8d5cbb91225113986"],["/tags/开心鬼系列/index.html","9919e0dd88e2190d7f624c0ad5fa382e"],["/tags/思想政治/index.html","d48fd854ddd15dec0a12aafef10a73c7"],["/tags/数据结构/index.html","fc20700acebcae1ee04a836fe9af9410"],["/tags/线性代数/index.html","1aaf6cacbe63aa4ccae433fea47007db"],["/tags/英语/index.html","143e880562ea65edf328c5821872711a"],["/tags/软件工程/index.html","d7593893cc0c80d9996bb328e37f60f9"],["/tags/高等数学/index.html","7d41a702f7864fb993a50157fcedbf25"]];
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




