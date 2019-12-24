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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Anime/关于《小王子》电影里的共鸣/index.html","9d2890ac97729a27fe466fc47635ad5c"],["/Anime/宫崎骏/千与千寻/index.html","02e5c956a96ea796f334b2fca440ee4e"],["/Daily/Memorandum/index.html","ecf53526c69e0a62340fb73a4721331a"],["/Daily/生活小常识/index.html","dcfe8743c05bf375aa337dd171e4484b"],["/Daily/网络用语/index.html","ae7a509fe7d8a25d61b1b6c15f6d4a6c"],["/Design/设计用户界面的注意事项/index.html","08d99a33003fdcab11157a20a9a358c7"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","dece823bdcd8c3b4a685e93f8e85eb82"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","989d21302a7d40f36465de94af7d5712"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","7e1b11f3356bdf05b381040a4609c9da"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","c2e7e1d90e80e2be182be17823f42daf"],["/Game/如何独立开发一款游戏/index.html","606beec37664712c933d88de939f237d"],["/Google/Chrome/Chrome上网助手/index.html","89727e34fb63c95525f93a8749343a75"],["/Google/Chrome/Chrome使用技巧/index.html","ff8054441aa025291ca1cebf7c3346ba"],["/Google/Chrome/Chrome插件/index.html","7251e132050f2f4a9a643e0e0081f9ce"],["/Google/Chromium/Chromium/index.html","47868410254fae5f39207b4b6d334b13"],["/Google/Google搜索技巧/index.html","5c36b5d78c21b8bca8d96a00e61dab55"],["/HardDisk/硬盘分区结构/index.html","2c468002a91999f73f4c125b2e99190c"],["/Hobbies/Guitar/吉他入门/index.html","a01649f26a2da1e633df8acbdf5fe317"],["/Hobbies/Photography/摄影入门手册/index.html","d8c4317149633ffd12fc7632ac2494d4"],["/Hobbies/个人日志/芦江曲/index.html","2f41077aa279fe42d2d3a7a115a0bfee"],["/Hobbies/个人诗集/闲情逸致/index.html","bc0d2a822d81985e0d3c5046e81a6ce1"],["/Interview/2020年字节跳动面试题/index.html","5c255c2cfd6ec217c4e293601136da15"],["/Movie/HongKongMovie/开心鬼系列/index.html","f8d10ded1537f35788813527051af74b"],["/OperationSystem/Linux/Linux分区管理工具/index.html","4968e28431b737547ec11c5d8d935c40"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a880eedaae09197493e253b0c04599ea"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","83f744b46a36a630816ab86bbf7328db"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","353c3821f3899f9fc5c5d5c0517d0438"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aa7e71904456862bf42aa2f84199d535"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","88390ae2fd1eeb600615ad2a822107c2"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","ba8bf0b25b1649108a93dfcf96356e84"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","e4e59bc9fe0ce47879f6cca63a1e80dd"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","f2a50663e5253454efaf4ecb9b6bfdfe"],["/Research/Math/线性代数/线性代数公式/index.html","8903bb9cbf76ff49fc7e7b8d3efd701e"],["/Research/Math/线性代数/线性代数知识点总结/index.html","ca2cc3a306e3113a583f041814556562"],["/Research/Math/高等数学/高等数学知识点/index.html","58948edb0c9f869e8553c3f753123579"],["/Research/Memorizing/费曼技巧/index.html","95edb19198c5a4c52e93e9368a3c9909"],["/Research/思想政治/考研思想政治理论知识/index.html","635dd830e0adde9d27297206cbd4e367"],["/Research/英语/考研英语作文/index.html","e78d14ad5451cec3486adff04f90741f"],["/Research/英语/考研英语词根/index.html","9a70dac475d10bf072be61c1ea26166f"],["/Research/软件工程/PseudoCode/伪代码/index.html","4bec5c53d6cda72020929b417325cbd1"],["/Research/软件工程/中南大学软件工程考研题型/index.html","779aba14d916577beddef849dd44dd91"],["/Research/软件工程/软件工程基础知识/index.html","f8d227c17b955a7806828d245e5bf6d7"],["/RxTool/Contributor/index.html","9ff1201a7f9fb7ce9c8a1eef83c4f6b2"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","23915902063c54ede8bc09f91d70c879"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c30ace51f35b4fde667c6848ba96ccaa"],["/TechnicalResearch/Android/单元测试/Android单元测试/index.html","96bf7d976a219ed374e84c8439b7e009"],["/TechnicalResearch/CDN/CDN/index.html","39a75486e8e7d2e59a9aabb8937bef16"],["/TechnicalResearch/Git/Git/index.html","f4115cc8d270ff153dcc3429510993df"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","18ae0d40ea28fc2be0659565cc9e7386"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","2fde39774eab40701a775f9de69aa346"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","b6ac73329e3c5e672bdd29aca56da8b7"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","22226c85849a771cc6b3715c16cce920"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","43e52ba884870882d0be3691fc7082f0"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","8df372376d1fddf03c613b969cb40c72"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","10a0d2c2dd0b5c592d72b98625893d92"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","0c68a3e75d3fcbf48230d8c127bf6f77"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","2eacbe7abb208d2a46a6fbd87063ddda"],["/TechnicalResearch/Java/Java基础快速入门/index.html","253a3e1ab72000d28f5730f80b0902c8"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","4dfd91767e7feffff357f48e70f743a8"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","1166a1d4d2137fa76734404214b89a3a"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","f5d4ead5387d84bfccad2f3517862962"],["/TechnicalResearch/Port/服务器常用端口/index.html","220ed65a5ad9340fd034bb338e4eda4e"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","364dcf884e8342f87057f1b7ab8c3d7a"],["/TechnicalResearch/Python/Python-Exercise/index.html","e3ed4e0a4f814c3e0c6cb819eb329514"],["/TechnicalResearch/Python/Python问题归纳/index.html","e375fe0f18138d7c39fac9ce7bf54165"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","fbfc54b4871d711752e684099fec6334"],["/TechnicalResearch/响应式编程/响应式编程的理解/index.html","888300cc87427986caf27339dc2fca25"],["/TechnicalResearch/正则表达式/正则表达式/index.html","a12284277e46d013f1fab5d871a5bc86"],["/Teleplay/亮剑/晋西北铁三角/index.html","6f39c6b02170a3d5446129301fd8350c"],["/Teleplay/仙剑奇侠传系列/index.html","893be16d54d822f798ac1c207b05470f"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","c254aefb90dfbac66060de248032b851"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","e2a57ac1ad32352bd08308841d85aefa"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","b1264f8a2f0e7a1a893658d8ad9e92a8"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","e2bf85b55f2c75eff0ba8be356bca703"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","014bff359bf9bb6f633384afeca1cba4"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","7588d2ed72bd59b7dfe185cb8c5dd462"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","ecffe80ce1697bdbd8893c9ce0638ae6"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","e56cdf488691293f0e371dd16ad33975"],["/Tool/Music/网易云音乐/index.html","ab744c4e4d01d3109d7b8a43a6e00aa0"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","3511a9ae9e273368733428a78b0ed9ae"],["/Tool/Windows/Software/VMware/VMware/index.html","280868d20d7ee92301ec257a08915d87"],["/Tool/百宝袋/index.html","03d68c0c54dae545d21cb27d9f25eeff"],["/Windows/Software/Office2019/Office2019激活/index.html","f58e3d818a9b951569231ad928d09729"],["/about/index.html","1365ae95fbee600a479f48f9dee09821"],["/archives/2013/10/index.html","0a031783c4421fd532233cab08756b07"],["/archives/2013/index.html","c643f9854a08b7aa76b356b163e63638"],["/archives/2016/09/index.html","fcde030ffd267bae311cab47ee2c3607"],["/archives/2016/10/index.html","1a1270ce128c0eaa52017b3e595db1a4"],["/archives/2016/11/index.html","e832979ec97f03cf59596d77aadb6032"],["/archives/2016/12/index.html","10182fa90f89db5fd3d6e930fc327a5b"],["/archives/2016/index.html","3aa68898dfdab49f46bdcc2ddc875abf"],["/archives/2017/03/index.html","1f98823bf9d979dce20f9fb2d09ee3f7"],["/archives/2017/06/index.html","ccd2fbcfca4bbc74e723a0e89f659019"],["/archives/2017/07/index.html","dbcad1821a1bcf46c5898f2ab8793023"],["/archives/2017/09/index.html","3fab915ac51c1c9d56deeb52627d9466"],["/archives/2017/10/index.html","beb4e6a82b80e30194995660bf19b9d4"],["/archives/2017/11/index.html","cfb5429761a5671d0c70cbd2706985c3"],["/archives/2017/12/index.html","19df712f19a64f9b8de9024e03eafecc"],["/archives/2017/index.html","1eaa163d2b35a8e9c1d5d1346a072693"],["/archives/2018/04/index.html","30204db6c8c4d56441a07013fd1b17a2"],["/archives/2018/08/index.html","aa0a725472dc666326d7bb6923e357a2"],["/archives/2018/09/index.html","bd9e269909ad0d139a2cecd76cf898ac"],["/archives/2018/10/index.html","d7cc8d2fc923870d90b503a9145654bb"],["/archives/2018/11/index.html","cd24ea5e4126314d823debcf49024000"],["/archives/2018/12/index.html","3bca1d7d60add728d3aff160009fef4d"],["/archives/2018/index.html","85f9dbbbddcb740f366b3a21914cdf91"],["/archives/2019/01/index.html","98bac4e502cfd2707d68813ad80e8f18"],["/archives/2019/02/index.html","054816b4ed1e753a9729e3f8b64fafc1"],["/archives/2019/03/index.html","be7184746385ce3f3a0d41d902280a5d"],["/archives/2019/04/index.html","6ec51192a889fac1b9b22f17935c670c"],["/archives/2019/07/index.html","6a69b53a131e4aa7ffec257b4725cee2"],["/archives/2019/08/index.html","d32f82da1a19395c2b5d158bd7b8de08"],["/archives/2019/09/index.html","092c9c55ae2ada0677ad983f51fa6939"],["/archives/2019/10/index.html","b54e59faeaf8058c0ec542a3960deb24"],["/archives/2019/11/index.html","0a28b9f64c40af2b511e997ac4c40d09"],["/archives/2019/index.html","f0d35f68a160755b53d3313aa740ae5e"],["/archives/2019/page/2/index.html","622371bb36d50706c2e8b6160160ddcc"],["/archives/index.html","0bb42f24e7485fd5f10eb62c63e6f2e1"],["/archives/page/2/index.html","805500eb57b358aafa796e27c01c86ce"],["/archives/page/3/index.html","877ac0ff85cca8fcc346e934b37b6448"],["/archives/page/4/index.html","a4b47c6aa1d6fc8282368f5e1d2e96cb"],["/archives/page/5/index.html","3cfc79daffe52e4798a57669a7035d5d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Anime/index.html","b249317cb7e44c08bfa0e7315e58ed35"],["/categories/Anime/宫崎骏/index.html","6397625a1ddde639baf48e79b69e06fa"],["/categories/Daily/index.html","99c588a2f627d4aa1df4e42c1917fb93"],["/categories/Design/index.html","0923370adcaddf61d268632b3c568818"],["/categories/Game/GamePlatform/Origin/index.html","e88d06eec9181a37826a66ecfc5d6ece"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","515ef6d51136d4712c3e220e412fe068"],["/categories/Game/GamePlatform/Steam/index.html","fd31011dfd597785697d371c9b36d595"],["/categories/Game/GamePlatform/index.html","419be7c2deca9d56f8106c23ed836fa2"],["/categories/Game/index.html","ce6e4925a262237d5229fd2d8ea2d605"],["/categories/Google/Chrome/index.html","7f79d579f18785b613f68b8c1048479a"],["/categories/Google/Chromium/index.html","cecaa830c469dc7d2874a2282ab0a5c6"],["/categories/Google/index.html","bde83e0ace613445b49cd92c3e7c2ff7"],["/categories/HardDisk/index.html","c973d26cfb5257b70162f230da577897"],["/categories/Hobbies/Guitar/index.html","d9db6975436d1a5acbd2e30469f5fd69"],["/categories/Hobbies/Photography/index.html","826a1e7fd1b75a71b14a2bf9183d4345"],["/categories/Hobbies/index.html","2b811737f45d3075e9d34a66924bb9e4"],["/categories/Hobbies/个人日志/index.html","b91b327c0bb3b0d1cb613e9516c41803"],["/categories/Hobbies/个人诗集/index.html","d8efcc309a859155a57d513d281ccff2"],["/categories/Interview/index.html","bb5b20d51dde1307a7b1cbeae8509965"],["/categories/Movie/HongKongMovie/index.html","c0d74599eb0dbe6d0e8cde5abf18dc37"],["/categories/Movie/index.html","f29e6306a4b137e9822c6719bbb68150"],["/categories/OperationSystem/Linux/Manjaro/index.html","a312b7b2d466add759c0ad1a4d95923b"],["/categories/OperationSystem/Linux/index.html","0d690e32f901111670547a7a789cbc12"],["/categories/OperationSystem/Windows/Software/index.html","c76e849dc367e58b790ad23eab7eb1dd"],["/categories/OperationSystem/Windows/index.html","cd419936f7d103c6c84bf2413dcd367d"],["/categories/OperationSystem/index.html","8bd931727c9ad9204af8cf3cef07a0a3"],["/categories/Research/Math/MathJax/index.html","d6cc3b81c070aaf3b64b1f21429a1b16"],["/categories/Research/Math/index.html","c6e6f43424fd438a6659d6553a4d269e"],["/categories/Research/Math/线性代数/index.html","1ab59451fbe40fb08f16c7029f6edbbf"],["/categories/Research/Math/高等数学/index.html","93c2b819b38b25f55c52443e0cbb8717"],["/categories/Research/Memorizing/index.html","cd633af6b4a879deecfe24ac23a64a73"],["/categories/Research/index.html","05e6cf0f767d725965866c06b3e9c9e4"],["/categories/Research/思想政治/index.html","53e444a261708ffe6741e429ef049d9d"],["/categories/Research/英语/index.html","ba665c719beae9bde9b0850b010878eb"],["/categories/Research/软件工程/PseudoCode/index.html","f394cb68ff552c82ed542169a835b8bf"],["/categories/Research/软件工程/index.html","506bc8ff34a989b5d8be5c76a76eb52b"],["/categories/RxTool/index.html","faece470ba413fefa8802848a279c4c4"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","d7d8daef794ac511884dacf751cd83c5"],["/categories/TechnicalResearch/Android/RxTool/index.html","85f6742e9afa51c1c2d74dd546b22b66"],["/categories/TechnicalResearch/Android/index.html","5107bb6fb5ada188b2cf14cc31067b8c"],["/categories/TechnicalResearch/Android/单元测试/index.html","5a8dcc7fe9e3a2ef7ad492c91c6ca1d7"],["/categories/TechnicalResearch/CDN/index.html","8b62cc835cb841f6343518ed90a47ea2"],["/categories/TechnicalResearch/Git/index.html","dadb0f8f619add07719d501f3a52cba0"],["/categories/TechnicalResearch/GitHub/index.html","82993c0e5c4f725f13daa930d9c49f72"],["/categories/TechnicalResearch/Hexo/index.html","dcbf2310c2e80906e75660e17a70a741"],["/categories/TechnicalResearch/Html/index.html","8272b769a762b2702e9da0ab8edff63e"],["/categories/TechnicalResearch/Java/index.html","8977aa16ae04bec2f46d7a7ad065d57c"],["/categories/TechnicalResearch/JavaScript/index.html","725213aea3f1134d5aba178ecb5afdee"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","7c791ad8befbd09517a2fe36e3197561"],["/categories/TechnicalResearch/Markdown/GFM/index.html","b27c4312ddb438ceb3bd182cda7597ae"],["/categories/TechnicalResearch/Markdown/index.html","1e76fd9e3a1ab30fb7c0d1aeb226c726"],["/categories/TechnicalResearch/Port/index.html","c357beb318de1186d4995ecd29e07af9"],["/categories/TechnicalResearch/Python/index.html","9f0dbd6de1f77fc8052743fcf627724f"],["/categories/TechnicalResearch/Spider/index.html","bc67a3c9500cc078fe256ea4b22497b4"],["/categories/TechnicalResearch/index.html","2d8c093846aacd4cdd430399f8ac9786"],["/categories/TechnicalResearch/响应式编程/index.html","0df0ced830c07b22191c3ff02e3de9ff"],["/categories/TechnicalResearch/正则表达式/index.html","d04ee38fcd532bb4989150ffdb9a9be1"],["/categories/Teleplay/index.html","c46eb658e41cdede525a318f55a9a099"],["/categories/Teleplay/亮剑/index.html","62e8809fcb698dff4ccafcbcc4415846"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","caa7b72be3ddb5b8a69cb9e86bdc9baf"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","8b7cee319c28272e3fe6bc701074738e"],["/categories/Tool/DevelopmentTool/Unity/index.html","af36c43fba8f20921a9c9f9a422aa52c"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","6318cec12ec6ea65edbabad5ba0094a7"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","7824dd7b6d4e37d5e25ba6ef94bc9792"],["/categories/Tool/DevelopmentTool/index.html","2074b690105c9c0aa327b3a95797daf6"],["/categories/Tool/Music/index.html","f5a2a2f44867c732eb4472e6b3417d4d"],["/categories/Tool/Windows/Software/UltraISO/index.html","541b11c89dbc7a65cbcda546916ce2ea"],["/categories/Tool/Windows/Software/VMware/index.html","79cbe87de72839d2db692b29f6a309e9"],["/categories/Tool/Windows/Software/index.html","360e91073026105786cdc6065816c8a2"],["/categories/Tool/Windows/index.html","a5858372e48524896722c0037c507fac"],["/categories/Tool/index.html","6a037629927e094d7d61b80feaaa7323"],["/categories/Windows/Software/Office2019/index.html","e25855172ca673114ad046b858ec9220"],["/categories/Windows/Software/index.html","bccdff74360096aee843e284464a3239"],["/categories/Windows/index.html","ab183dc8de15063bcc9ad45e1be03d1c"],["/categories/index.html","6bc075367bccc9356c6dbace91c4bde5"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a30b809783590a2febf5bbc9e60e70bd"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","1e3e045de3cf0e9a6540ab9ab9e144a1"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","1ddc05d8a8e1d4a2a8560a55dc292068"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","fd6a6621088851526578e6781d0a0634"],["/movie/index.html","1e1b8c77060460302263f0583b31f87f"],["/music/index.html","78297731ee2715f9209bc70a56fcc9f5"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","7f03c18b4bab2f7950e82ac60641ed03"],["/page/3/index.html","0305c3165160311aff6d1b66622af593"],["/page/4/index.html","37bf48aba3d3b8bfce7a36d737306746"],["/page/5/index.html","c65ad9a7aa9ec87c2ba90d395aa51a72"],["/page/6/index.html","32110a2f15df7f3c43c3ec9d5ce74845"],["/page/7/index.html","11acc0eefa8ed8e07acdb31002024a7d"],["/page/8/index.html","dae80d7586e2747a216d091387c3fca1"],["/page/9/index.html","5a7ca7feef3437a336bf3b5942abd58e"],["/tags/Android/index.html","24d0349b3c023b60026d159c0b485fef"],["/tags/AndroidStudio/index.html","72631116b7419b2f9b81c7c009e16f5d"],["/tags/Anime/index.html","ce4c1485818b8ce1221d17f515b5c696"],["/tags/CDN/index.html","c038757b9e6796c06e025a3bf5a5778d"],["/tags/CSGO/index.html","54b8de025bad3fea3c67c6ca2207acb2"],["/tags/Chrome/index.html","738743969d566bf0bb625925978001da"],["/tags/Chromium/index.html","e8a986881a90ef00421a5fd17aae4d0d"],["/tags/Contributor/index.html","ad32a2cf383acdf107a14a036d8e45e2"],["/tags/Daily/index.html","84a48c802c581823febf8a353ca26cf2"],["/tags/Design/index.html","a7658d1877d87ec2037c95642d833e0a"],["/tags/DevelopmentTool/index.html","071ce1f250c48683d8acc42e0fed37a3"],["/tags/Emoji/index.html","93b949d25247df1aee98c0f251015687"],["/tags/GFM/index.html","7b49a88ec1222e295b8ae4445df1b6ba"],["/tags/Game/index.html","8835a95fd94fe53b7a9f6e51e4b7e87f"],["/tags/Git/index.html","490343634d293f6c6d27701ab0cdf759"],["/tags/GitHub/index.html","928f8c18943c55075bc66e50ed21b759"],["/tags/Google/index.html","7f5bfa1906274c292d3e98e9b5445700"],["/tags/Guitar/index.html","17f3b44e33f01aef3179027cfba63436"],["/tags/HardDisk/index.html","861f2b99a8c3cc7159986ce57dc73fb9"],["/tags/Hexo/index.html","d06c7dfa5f79ccf3c125d8e69dabb666"],["/tags/Hobbies/index.html","7408ffcdaf88a53e777dae0aa8cafeca"],["/tags/HongKongMovie/index.html","7a7340a510645481e9bca0203e049ad9"],["/tags/Html/index.html","adf70a3c1385ece2b1ac5170c47cd9e1"],["/tags/Java/index.html","686c85b372422e705fe577ca6ad4c9a6"],["/tags/JavaScript/index.html","256ea8e9e56400591a529c016bed6521"],["/tags/Linux/index.html","db48949b1225f45be36334bbdcf1f7db"],["/tags/Manjaro/index.html","3d8fcf0998539989b2ce8557238a11ed"],["/tags/Markdown/index.html","f51f657c3ee95276ac30c760a19b2c61"],["/tags/Math/index.html","64b96e18053e6e826096c3fa36332683"],["/tags/MathJax/index.html","ef7a3d071e45623e50a0838282905490"],["/tags/Memorizing/index.html","e5a24a0051e5d66aba2c13a79a6f1213"],["/tags/Movie/index.html","9315d12cfa6690d9b034af61ee139236"],["/tags/Music/index.html","17ffa5f2dce279f286b2c21cdfeee584"],["/tags/OperationSystem/index.html","3e499403dce860bda48d4e83e1f0c32e"],["/tags/Origin/index.html","6822d1d121da26d527bdb60b28ed1848"],["/tags/Photography/index.html","6409e51d9e179fd0df7d37f58ba05d2f"],["/tags/Port/index.html","18cfd6dc205eb47cad7b0474de8305c1"],["/tags/PseudoCode/index.html","d7368f4c667a955d0705cf63ee2b362f"],["/tags/Pycharm/index.html","9a0f7992c3a4555bdf9a7b18085507a7"],["/tags/Python/index.html","8320637abbcfabbd40fdcd43e5e2cb0b"],["/tags/Research/index.html","e34c7efafa19aa23b7a5fd4f28a7bcb8"],["/tags/RxTool/index.html","7008c3524387b2294cbb9055983f5f20"],["/tags/Software/index.html","9d3d6450fc63849ce36cbbf7169a7b92"],["/tags/Spider/index.html","334e768a508e2f6f5a1da785ef9cb8ca"],["/tags/Steam/index.html","268471a87077e154459004ccf32c7366"],["/tags/Teleplay/index.html","938f84cae60c45460c99bc36ecf4c02e"],["/tags/Tool/index.html","fb51ffdf7d57436c532a8e5c17e614fa"],["/tags/UI-Design/index.html","1e14b20b30bc2591c82ed7a4aa825622"],["/tags/UltraISO/index.html","9f40d122cac890669989a15dea0b6530"],["/tags/Unity/index.html","e9034fce8389e883081be5da7a35fa76"],["/tags/VMware/index.html","6bae5799f71152dcc78a1cb9f4dafabb"],["/tags/VisualStudio/index.html","e5bafbd1f9e8db228c6dd106227fe067"],["/tags/VisualStudioCode/index.html","b1e3875682f0c5ca0e42f91e64c21d13"],["/tags/Windows/index.html","6983a4e79631a21721bf24e876b24c63"],["/tags/index.html","21f4f9882a0e0712add5e3cff2cca091"],["/tags/个人日志/index.html","d0cca6aadd08a1995489ed3b9d771481"],["/tags/个人诗集/index.html","35d5210e74544da4d808b4bb4c531ccd"],["/tags/亮剑/index.html","4de82dd9fb3cf8be9da8c356b31ce053"],["/tags/仙剑奇侠传系列/index.html","e94c1885ab500785db6d819563f15b66"],["/tags/千与千寻/index.html","0b1707466fd728de04fefce5ccacc7cc"],["/tags/单元测试/index.html","e94d0c87f30459beb379cbfc8439497d"],["/tags/响应式编程/index.html","21e2528c4b825b0d1a0a367ada425b3b"],["/tags/宫崎骏/index.html","e9918f76313b8a6774d076ae809f2e71"],["/tags/小王子/index.html","5c97fd109643cb5525b51446e428baf2"],["/tags/开心鬼系列/index.html","a330d45b8be614b20c590f6f3ac36a06"],["/tags/思想政治/index.html","01ed827910fe69b69be845895c16df29"],["/tags/正则表达式/index.html","6cc4969495bf0d2119234807af6d3575"],["/tags/线性代数/index.html","1abe63d47b62ea721fb942c74d32d3ac"],["/tags/英语/index.html","31afee17e68903bd5b2c41d03c01901a"],["/tags/软件工程/index.html","993a7508c3f981391bbcff2e5015d3ac"],["/tags/高等数学/index.html","653cfeb27ce0e5452071cf9ce904217d"]];
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




