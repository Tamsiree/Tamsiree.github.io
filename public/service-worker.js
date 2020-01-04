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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","9d8913ba0c408c7479a8e512934e9059"],["/Anime/小王子电影的共鸣/index.html","0b484ee8a6a99a9ce46e0672c2dbe14d"],["/Daily/Memorandum/index.html","1d1a611cee9f9d5f629e83007cfca78b"],["/Daily/生活小常识/index.html","4abb53373bab5f361af8bac46e65a4a2"],["/Daily/网络用语/index.html","bca9ce0fd54e363a02b318278bf16e6e"],["/Design/设计用户界面的注意事项/index.html","a0676b84690dcd07204c156ab3d03ca8"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","15b2cca045a33b5f3fb50bc69c0aaa9a"],["/Game/GamePlatform/Steam/ARK/ARK/index.html","d68c2188a438d6314da7d3b842d364a2"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","2e218b2c4a1ed7d53835a31c55827c12"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","5d80996cf6350dda03d05dab480d134b"],["/Game/GamePlatform/Steam/Steam库共享/index.html","18acc667748fe38067633719781095b1"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","9b264f82aefb93bdd7c2c931f52cb24d"],["/Game/如何独立开发一款游戏/index.html","49b3b5594c8b1dae773d71469d57b9e0"],["/Google/Chrome/Chrome上网助手/index.html","3dfd4529ba6efcb696fb9d332c49b1c9"],["/Google/Chrome/Chrome使用技巧/index.html","d9495e9565c8131d0622468a363b46ad"],["/Google/Chrome/Chrome插件/index.html","5389f2fd252ac179cc180e69cbc0a80a"],["/Google/Chrome/Chromium/Chromium/index.html","e5217c6545c55dceaadde987af4821f3"],["/Google/Google搜索技巧/index.html","ce22ecebfc098c012f1b828f93b2ef9c"],["/HardDisk/硬盘分区结构/index.html","447be86947351f7819d2436a1bd12fac"],["/Hobbies/Guitar/吉他入门/index.html","39c758c2aac7c01e613b7ff330f4c4af"],["/Hobbies/PersonalDiary/芦江曲/index.html","60ddcd71c01d673d3f2fc5ba9a0694e9"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","09df0b1d9baf83963e2c4086d2cbbf0a"],["/Hobbies/Photography/摄影入门手册/index.html","c11b8819dd077858def74b85810d3a3f"],["/Interview/2020年字节跳动面试题/index.html","fa260390ebd5081ad8579c0be5c09a0b"],["/Movie/HongKongMovie/开心鬼系列/index.html","beda1f242f087e16cbc4ec41c96af2b4"],["/OperationSystem/Linux/Linux分区管理工具/index.html","5f8cf64b6d5520a265e0426a01366d1a"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","a4d269fcde9d967562c7a9a1e8bd4a76"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","e79f5c9f74e06041e87ef086da5e9c21"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","7ca129f009002fb066bb31992b167d87"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","f9a5e5a4eada692a1fb938dda2619db6"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","b96c433de128c8315d4a39ff051eb31a"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","72be8a2899c1ed5eb1b1f0d7ef056b69"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","bdb41d7ad9c963052a5c1bca9b7a32e9"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","c2c72421d1ced61bbcca12e5371a64c7"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","89bd2edef8029ff8a581ff8afd0e10a7"],["/Research/Math/线性代数/线性代数公式/index.html","3fa04f2da658a7143a345fb9b5044756"],["/Research/Math/线性代数/线性代数知识点总结/index.html","55e083b00f358af025b95e5452aee19a"],["/Research/Math/高等数学/高等数学知识点/index.html","514e546fecb3a02e09915f96a8311a1b"],["/Research/Memorizing/费曼技巧/index.html","dfeb6943ee0e7dbe45996abfbe8523b6"],["/Research/思想政治/考研思想政治理论知识/index.html","f75517c82ff99092e89a8505e1134d3a"],["/Research/数据结构/数据结构/index.html","221ab7e60d60c6670e1219aef45cbf51"],["/Research/英语/考研英语作文/index.html","d6d7f729243ee53291d6b642169c0673"],["/Research/英语/考研英语词根/index.html","271e3aef1e6ed315e42e622da58b988d"],["/Research/软件工程/PseudoCode/伪代码/index.html","eef8c7fef0a6625e4e6ea98cf3fc1c1b"],["/Research/软件工程/中南大学软件工程考研题型/index.html","b6b0b5b277f620a0a0faee920d069f65"],["/Research/软件工程/软件工程基础知识/index.html","e466527a149e3cd8f5e0b9240d3bbf69"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","b9fd79539154758f25fd23b4c2595b74"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","8aec3e3e98d1e20a6a8da56316877d8e"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","99a9b007c683671d73deadab8d15ceff"],["/TechnicalResearch/Base64加密原理/index.html","4093be8acf02233ab835aa66a347ec25"],["/TechnicalResearch/CDN/index.html","1a60a7791a4d7ec91e0a29ea4133db2a"],["/TechnicalResearch/Git/Git/index.html","b77ad3a6df25566bca90790e52180cad"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","8ecf1ccc0c43d92dfe977251840b4749"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","f0e3e499fccc2eeef70547237e96d52b"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","23f4d5f10dddffbb4fb9851407c1e286"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","a86c2a4cc7690e37d2f8ee621b9bf4ab"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","d958593abc6d426a24c7d712a1f846c4"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","cea0068fced820e3ebbf4b32bd98f8da"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","0872d9600a90dcef9aea913bb4d72ecb"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","a9905fefd2da6948efdd31b9280da744"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","2270f209fd8fbcb16073bf92bcf93cb5"],["/TechnicalResearch/Java/Java基础快速入门/index.html","d3ce7ef3c392b8b17c0cc61981ff87b7"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","7b3807cf1a3cb46e99f633e20e0ac1be"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","682da3a868ed6bf86580a7f98b3cbc18"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","fbb5f55a9a6befe0c1be77a33049c0dd"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","3307da08415933092de956b8b43a706e"],["/TechnicalResearch/Python/PythonExercise/index.html","db4b001a69825d8fc002c97ae1b3474f"],["/TechnicalResearch/Python/Python问题归纳/index.html","6ae54c17f2ee8426304fac69f08db616"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","1bb5c64743e591720e8b40064b7209de"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","f057819ce1c859b490af448e99c19a7a"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","c2132ea6142a35ccfc42f79456e9cc1f"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","abc567b08fb7d2a3c61569141fe6cdbf"],["/TechnicalResearch/服务器常用端口/index.html","949586ca3a2d6877b8f1c7b53f939103"],["/TechnicalResearch/正则表达式/index.html","0be94e4480167603a24e11c5f7f46dd6"],["/Teleplay/亮剑/晋西北铁三角/index.html","364279748b3f56c9c109e68fdfb7e6ec"],["/Teleplay/仙剑奇侠传系列/index.html","89b2297f53551bc126d95e9366b1701c"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","d2872d1060df8d6f123707c9778d98b4"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","13ac1629a20e281816796c5cb3b77b32"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","bd2e02d5d038d157d24cb9177082013a"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","b50595837658801d849ed4d5fe867929"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","7b5c5f3970a6b8c6923e71c3e97fcca8"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","18d0fbe57a3acb37b83642c2078fb96f"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","ff5bc57f62cb3ac9db6f48cc62685f13"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","ecf0deb69260e921887c9d15d5a79d69"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","89e5f4d188ad5698f31eefd5c6b9ad9d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","0489a5557dce0da853603607fefa0527"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","cdbe13b6c0f3b03d5fa2371f387196fe"],["/Tool/Music/网易云音乐/index.html","a129ab44e96fa7a82e1cf82edab395a0"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","2d6a748aeebaf3cd47de63bcfc11adca"],["/Tool/Windows/Software/VMware/VMware/index.html","25320fcafaa8f47e0545fd8948f2d0d3"],["/Tool/百宝袋/index.html","e7d4a7bd1e62e7e3f7dfb3a46a21a1d8"],["/Tool/随机获取在线壁纸/index.html","4c3da0d2272259a1a677ef0ab8f8e281"],["/Windows/Software/Office2019/Office2019激活/index.html","7a0fecedee7c15fbd9197dd0070a435b"],["/about/index.html","cfb43374a5c280217aabe56b20cc2f74"],["/archives/2013/10/index.html","017aa1a69f024a2fb3c7b931fde5b163"],["/archives/2013/index.html","aa4a67612ba4f938ae405cc38c9ffe1d"],["/archives/2016/09/index.html","e403628688e681c0c0fe523556186ca8"],["/archives/2016/10/index.html","3f997678ba70d68b91989339320d332c"],["/archives/2016/11/index.html","c393e1169a6200cc0cb7321ced19672d"],["/archives/2016/12/index.html","4493b283fc433dbc54025b7945764cd5"],["/archives/2016/index.html","55b62bf965e2cd70bed3eb65fb5218fd"],["/archives/2017/03/index.html","51dd07b2c780bcbb881464d9084eb6ee"],["/archives/2017/06/index.html","ca27970dbc7c9146b2ebfc0ff4a48f43"],["/archives/2017/07/index.html","741cf8b6fb1312dd2241a83260ce5ce2"],["/archives/2017/09/index.html","593e2e8e7144c1a2b489a3a9493d2b75"],["/archives/2017/10/index.html","490fd614509eefa01cb1c89710590e47"],["/archives/2017/11/index.html","a59df4355a3b96ceb7f4d36cb1daa977"],["/archives/2017/12/index.html","5781de58ae07601f926c21255d710810"],["/archives/2017/index.html","039dae99c1fa24131a722baf3e14e398"],["/archives/2018/04/index.html","579216016b9abc64bc6fc4e06265eb05"],["/archives/2018/08/index.html","f6b819d67e261b171dd4af3fd1b3a4b5"],["/archives/2018/09/index.html","2d8cab5e1342033a8c3186d231fe9f46"],["/archives/2018/10/index.html","c09fd42aa2bc9e9ed1363c324b56070b"],["/archives/2018/11/index.html","3c98321550a0b46f3d2547eb4230ac47"],["/archives/2018/12/index.html","88899b716fedca5501a7d09370b21561"],["/archives/2018/index.html","7bddf59c54f7e8dcae66626ae0498fbb"],["/archives/2019/01/index.html","edb4f7d250a0ea62d7c1269df25a38d4"],["/archives/2019/02/index.html","b34534a62e0bd09ad7ef804c9d22ae0d"],["/archives/2019/03/index.html","56d928337b6b3dda8041f6bb2c57042d"],["/archives/2019/04/index.html","11198baf61903a4efc665e889a3085c5"],["/archives/2019/07/index.html","84f81bd0f57f69978eba412bbaaacbc3"],["/archives/2019/08/index.html","c48fdf18da00f8bd89e553648765b36d"],["/archives/2019/09/index.html","331ef94503227fb89f1d848cdf8355aa"],["/archives/2019/10/index.html","1ee6169cca5521de11fae8a96e2c5539"],["/archives/2019/11/index.html","b598453a7596d23d157c10755304a574"],["/archives/2019/12/index.html","ac7dbc98608602aed955d262bd9df9a4"],["/archives/2019/index.html","2f44dea3a5633b1507eed3a18154a7e8"],["/archives/2019/page/2/index.html","538d7b8022d781a809a8646206fc314e"],["/archives/2019/page/3/index.html","8cfa617fbe334062cedda4e02a2e5be9"],["/archives/2020/01/index.html","5bbb38590635483a50e8152b4840bfce"],["/archives/2020/index.html","0cb38ab66f0b22670390a00887a164a4"],["/archives/index.html","47d3526e41054bfc2fa935de95dcd470"],["/archives/page/2/index.html","daa4f762844efad467bdb14c72174af3"],["/archives/page/3/index.html","e7577348f9a611aae87b42c72e039843"],["/archives/page/4/index.html","916fc30b9440daf18191ae21176f0a33"],["/archives/page/5/index.html","4f2266e5db479108952e8e31750121ea"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","dc2a904f7a519651f6fbeef61a76e731"],["/categories/Anime/index.html","2a721b4acc99345c3fbc0127bdd9da6b"],["/categories/Anime/宫崎骏/index.html","c61d55c0f93e086153565964ecd89b39"],["/categories/Daily/index.html","c770a1c46652f21eca9996212cdace67"],["/categories/Design/index.html","923fef4dcb49ea351847b98bbe988ac2"],["/categories/Game/GamePlatform/Origin/index.html","6645a80d212bb213ff4ac59749b27d98"],["/categories/Game/GamePlatform/Steam/ARK/index.html","9d84cabfc9300d2199a95cd3a5cf23b7"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","070820135041a875f26956e83af4b07b"],["/categories/Game/GamePlatform/Steam/index.html","7d5d5925373d62fe45865b9fa324bc72"],["/categories/Game/GamePlatform/index.html","dacc7ccf11d695132b7f967ed86ed6a9"],["/categories/Game/index.html","47c05995cac5b1f351b5a4d406d44087"],["/categories/Google/Chrome/Chromium/index.html","d14b99e983d24206f03b4a7ebd6d58f2"],["/categories/Google/Chrome/index.html","af6c4b9363ba40f78b9ca4c8e310765a"],["/categories/Google/index.html","43a98aeed43b4670a0df2df5be0bdf25"],["/categories/HardDisk/index.html","8d0c8364556bbc67cd32fa54dbd65223"],["/categories/Hobbies/Guitar/index.html","fd466bd361b084d6841f3e619eef484d"],["/categories/Hobbies/PersonalDiary/index.html","3b976dcd6062bca210968d3c2a390c22"],["/categories/Hobbies/PersonalPoetry/index.html","52a0b4a4b245246ea05dd7a8038e7c98"],["/categories/Hobbies/Photography/index.html","aa08c103092faefc7e848c55ac8bb17e"],["/categories/Hobbies/index.html","718153c696019310522a1584631ec37d"],["/categories/Interview/index.html","af6405f5ae258ef9cadeb72d4955bd98"],["/categories/Movie/HongKongMovie/index.html","335738bf8a21627406241a6b23df36ee"],["/categories/Movie/index.html","0fd9e0c1d42562d9c2d87acdbccf0d9d"],["/categories/OperationSystem/Linux/Manjaro/index.html","26eee43f122c0d9e1994a3ba37980c19"],["/categories/OperationSystem/Linux/SteamOS/index.html","9678fe86496a905bd8965242c61e07de"],["/categories/OperationSystem/Linux/index.html","bdc6a8ad2b5fbcf7b5cfbb497895402d"],["/categories/OperationSystem/Windows/Software/index.html","62242e97a9a57c6a30d89b52583017d0"],["/categories/OperationSystem/Windows/index.html","13a6005b848db478b20690abfecd7177"],["/categories/OperationSystem/index.html","ee9b54e0297760529e8a5d248138c565"],["/categories/Research/Math/MathJax/index.html","8bd8f5ce079e3393437ce202561d09ac"],["/categories/Research/Math/index.html","0b977504b9f6a8f7edf4df658cead05b"],["/categories/Research/Math/线性代数/index.html","483ef2e550e81ce76a739a217688572c"],["/categories/Research/Math/高等数学/index.html","b72d7efd8c4c2c86621beb457d052464"],["/categories/Research/Memorizing/index.html","90cb591270d6e259b71ddf2f8f5894e5"],["/categories/Research/index.html","6b2a32dbbae271c7b9dac25f4ef561b1"],["/categories/Research/思想政治/index.html","f75c1070e58709f3a9a616a8059673a2"],["/categories/Research/数据结构/index.html","d1f1f91f67493ec162c33203a7c8d876"],["/categories/Research/英语/index.html","6746406093028784909389a073654a64"],["/categories/Research/软件工程/PseudoCode/index.html","5b622afa967838a6972ca3aeccd82afb"],["/categories/Research/软件工程/index.html","fc3fde9b63f96f07da93c5c712df286c"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","9c044104ca78386292314bf4bffb6052"],["/categories/TechnicalResearch/Android/RxTool/index.html","ed882fc9de114b687a6c2b7532e50a82"],["/categories/TechnicalResearch/Android/index.html","117badcc5c372f92a648c892e45f0e63"],["/categories/TechnicalResearch/Git/index.html","aaf2c438eb86f040338ea065c7171e27"],["/categories/TechnicalResearch/GitHub/index.html","2e593e722253c5498f5f7f4ff23fe074"],["/categories/TechnicalResearch/Hexo/index.html","948c45fdec30d02f5244e66f3bdc6e3c"],["/categories/TechnicalResearch/Html/index.html","53f5c922f813709c19c716a9de05c12e"],["/categories/TechnicalResearch/Java/index.html","5658d418afb75ca0f9cf92610f99aac7"],["/categories/TechnicalResearch/JavaScript/index.html","d94c71f22a1d54c715014a92f9402e4b"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","8faa244504a1600758dcdf0f3e6c557e"],["/categories/TechnicalResearch/Markdown/GFM/index.html","84141aebae872e7c6cb493bb009a2d6f"],["/categories/TechnicalResearch/Markdown/index.html","557591f0dbea548d91236218f269df87"],["/categories/TechnicalResearch/Python/index.html","5614fab830b6fb7d79ff3d2dbc0ad8b6"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","82a6adc8da185102a5100e0c1dcb3e8f"],["/categories/TechnicalResearch/Spider/index.html","6415230b11281bb57b958b7f425e3951"],["/categories/TechnicalResearch/TA/index.html","510ffdfb0ec0193b7c59fa61adef476c"],["/categories/TechnicalResearch/UnitTest/Android/index.html","ef3352c67ba850293a3887bc2480c2d3"],["/categories/TechnicalResearch/UnitTest/index.html","e307ae4fdce14df4efc7cdabe99730a4"],["/categories/TechnicalResearch/index.html","08bdcd3092a56c22f0a4394e2e44e9df"],["/categories/Teleplay/index.html","22fb7e1813af9c5db6d244ec7d9c0d14"],["/categories/Teleplay/亮剑/index.html","cb99c0a89a2f575df9b6758c2c7bad07"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","597f472782d1f9a464ee56ebe55cb8b1"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","34f77a07b9749d42bb61997d57486f55"],["/categories/Tool/DevelopmentTool/Unity/index.html","461fa03a91758b46a70b51c925b7aa25"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","9b197f3978cf79bf26b456982f091cd7"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","03881123b7a326cc8f97a4bb0f5c5a47"],["/categories/Tool/DevelopmentTool/index.html","b33869467ddded157cc4438cd6d5153e"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","147cc04f32d6f658d163321cfe6a0894"],["/categories/Tool/Linux/Manjaro/Software/index.html","99f476d2592a315bad1f208bd982b807"],["/categories/Tool/Linux/Manjaro/index.html","d096af44c6e7c1ad5adee40c5c1db90c"],["/categories/Tool/Linux/index.html","759075006355d57a1d5b4f463bef56a3"],["/categories/Tool/Music/index.html","b009aca1a96b3fb8ae71ca8331a50b31"],["/categories/Tool/Windows/Software/UltraISO/index.html","d8c15255c0ee5ed362152c79a3953f83"],["/categories/Tool/Windows/Software/VMware/index.html","9be56e67462ddaad475d6ff2450d653a"],["/categories/Tool/Windows/Software/index.html","620444523b6fb7cb6b951513d86d12d7"],["/categories/Tool/Windows/index.html","1f1de5f48e84bb96efde2fd6443792f9"],["/categories/Tool/index.html","54e8453d5a959c639ce031706966af6d"],["/categories/Windows/Software/Office2019/index.html","dda2e6fa193019d29727b88432909da4"],["/categories/Windows/Software/index.html","65163a7d7127be2d0e39118af0d349f8"],["/categories/Windows/index.html","ffa86f9c163563fd0a58cf8fc190ae8c"],["/categories/index.html","9499cecad9e0f71dbb62188f8d9f9502"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","aa3c8401038d85a872458ba2e7cbbaaf"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","e5abc986ebb5f0ecaf9ff74373fb1ce3"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","f24a66c8df357edee0009078fced287f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","a41a857b02bf154900b328663e02dc08"],["/movie/index.html","cf3174b42df6e44c9fce366d3aa0585b"],["/music/index.html","edd61e2e3c9fcca803bc0c6ddb16e192"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","508f91f5666c9ca196ab48c673498ae7"],["/page/2/index.html","1c797a02b764a6af26b7bab43ec0e3fc"],["/page/3/index.html","a6db3dc21763f73abf98ad99f5c718fa"],["/page/4/index.html","d33a95324bde12617121a403214f5eef"],["/page/5/index.html","bd1139849b3209683308d303591ca5de"],["/page/6/index.html","4ab098f6b5749d342cef1f580277923f"],["/page/7/index.html","a321ba309aa811aa2d475054337c9b73"],["/page/8/index.html","febfdf5c0ab22e21ad3757234b492436"],["/page/9/index.html","05251560fc0641f5dd0bc298b2d5eaa2"],["/tags/ARK/index.html","1721e8ccae5ef96f1ca8137efafd591d"],["/tags/Android/index.html","ee28b5a024f74d9c84979ae2cd947ffd"],["/tags/AndroidStudio/index.html","4f82eb0fcab5c3e44cb2aa7cb58f6494"],["/tags/Anime/index.html","4e4401965b1e3a8eab2e669c1ff4b0e3"],["/tags/Base64/index.html","bc80c96d99d8c67bc0957115883b676d"],["/tags/CDN/index.html","c179123a16a2b0694e629efc768b82ce"],["/tags/CSGO/index.html","36c4fe29e22aa422e73f11282d7a3da1"],["/tags/Chrome/index.html","43b7def193faaea0b87726fe4ee36d93"],["/tags/Chromium/index.html","0bfe2be52988dfb9cce9306db1584edf"],["/tags/Contributor/index.html","a9250ef43df6624b001b732662dd6305"],["/tags/Daily/index.html","84b38485e08887ab250370916d90be94"],["/tags/Design/index.html","17f0a897753e8ea7a9601649b7f98a57"],["/tags/DevelopmentTool/index.html","985c197608e62a246626d7250528e297"],["/tags/Emoji/index.html","c23cc6803953bb4dbe9cd17e957c9254"],["/tags/GFM/index.html","2af03eb15fbdda6558d92323629ed0a8"],["/tags/Game/index.html","63713b8106398764a25098711e49226d"],["/tags/Git/index.html","53c79f7c8290a12ffdf36f7440952f3c"],["/tags/GitHub/index.html","2c1507ce8a3f1acf2621279319f4d80c"],["/tags/Google/index.html","1d7972bcdf0b45796efa4ea6a283e87c"],["/tags/Guitar/index.html","22be92472f9a9596b9ef42f4c0776c55"],["/tags/HardDisk/index.html","0ebfd995de4b53b912215d6d4ac25e5d"],["/tags/Hexo/index.html","79f875c5d8916aa2cb028a3ae51591fe"],["/tags/Hobbies/index.html","a0a2c154b827d2edf250beecb3508287"],["/tags/HongKongMovie/index.html","ac6d8d54f145070beab059a8bac9d8bb"],["/tags/Html/index.html","946aaf8561e544f18da334f85e591f87"],["/tags/Java/index.html","6739c6f89cbb89a0e024b282cbfc92c3"],["/tags/JavaScript/index.html","35efe13e536b00f2d0890ff0e39be03b"],["/tags/Linux/index.html","e3d62485f6b4dca4f0ffa501cf8c6223"],["/tags/Manjaro/index.html","46a812eabc16812da93d25a46aed4e06"],["/tags/Markdown/index.html","6e16f8506a5c061f2faf592842c6bbd4"],["/tags/Math/index.html","f2e0dbda6880b17844729f62ff2bacbf"],["/tags/MathJax/index.html","bfefe2473ced84e89dbe7f5d9f22cc3b"],["/tags/Memorizing/index.html","6b7d81f0527d2e09338193e4c7650e4d"],["/tags/Movie/index.html","0b4a03a50f4a7c21f66ccb1acb8d3bca"],["/tags/Music/index.html","52ba5ed53d3b185dd9bceff1c79bd941"],["/tags/OperationSystem/index.html","fc25d6215836607b0a86af2c0d0a4036"],["/tags/Origin/index.html","a1c68f491f5f9f1895cef5c230f50bf9"],["/tags/PersonalDiary/index.html","f317ffc819cc7aabec51509beaeb194d"],["/tags/PersonalPoetry/index.html","657dbb92812bbf70654fb9833650dd7d"],["/tags/Photography/index.html","291b4e42c4c420c22f22b1dbc8575dc7"],["/tags/Port/index.html","cc3f03a0ff09fd6f1282b9ca34c07a58"],["/tags/PseudoCode/index.html","da006b698301346ee7b19ec0f44a88b2"],["/tags/Pycharm/index.html","d932d6f416ff36b584162c236250d21e"],["/tags/Python/index.html","20280b9b191c3af1834713954fb2ceda"],["/tags/ReactiveProgramming/index.html","a4fd0633555af1abfc0e7fe22eb6773b"],["/tags/RegularExpression/index.html","d586f0bf01ef05367046e44a6f683a28"],["/tags/Research/index.html","7a4fe29b9b83243c2cce1105ae8e33c2"],["/tags/RxTool/index.html","3e49adc2ce5a3a4a74f668e127068684"],["/tags/Software/index.html","c9f5658a07b7cb561abe72b3e489f1c2"],["/tags/Spider/index.html","bc4b6c9dd303a257a99626f391b97322"],["/tags/Steam/index.html","c30c767db25fb107591f103eaa92b1fd"],["/tags/SteamOS/index.html","e986547ceabc98565180676ad8878e9e"],["/tags/TA/index.html","f6f4b12ed272acc3f64cd71afe002177"],["/tags/Teleplay/index.html","15c1a506de9c48e9e49c6d5b0b90eb5a"],["/tags/Thunderbird/index.html","8195e8875f143cb6d0a16b857fe132cc"],["/tags/Tool/index.html","383e7f415d3aa3ef4536b461a4d820ed"],["/tags/UI-Design/index.html","81ce12d5250ea4f6085fbfb5bae0425c"],["/tags/UltraISO/index.html","c64dcd74246bc543627232c05e279798"],["/tags/UnitTest/index.html","2d5702f355557098ba570b864113bb40"],["/tags/Unity/index.html","a7d3e51f8541342895955e17d966acf0"],["/tags/VMware/index.html","b2c7012de317b082fc9b6c120acda0fe"],["/tags/VisualStudio/index.html","433f70164f0ff7a82732ed542d390133"],["/tags/VisualStudioCode/index.html","4dd482b0360ccbfdfd5799989a0eada7"],["/tags/Windows/index.html","64e07254e6f6dd4c1109df9095071b62"],["/tags/index.html","db3da774cdf0bfb7bbe4b6e0fe81a189"],["/tags/亮剑/index.html","dc2d95defa2fa08e9ad533602b66ec97"],["/tags/仙剑奇侠传系列/index.html","f54fad7f4043f7f11230ef1edea36c7b"],["/tags/千与千寻/index.html","459ee529af1ecaeda1b1a0f12d34e95f"],["/tags/宫崎骏/index.html","e98f7a0e5a0b9bc8bfc10c5c088724e3"],["/tags/小王子/index.html","9cc2d0c1f322a22a8ba9e3b8b6b3a770"],["/tags/开心鬼系列/index.html","8ad4ad3329aab275029ae00e4aac580d"],["/tags/思想政治/index.html","5fc2dd22a0a7112a5c65be1a38cdb60c"],["/tags/数据结构/index.html","51512e23ee3305f57a17b4df7fc136ca"],["/tags/线性代数/index.html","1ece45519a358e7ec245cc8775897e53"],["/tags/英语/index.html","ab09cae6ca8ae4076efa0512271dab38"],["/tags/软件工程/index.html","10039919e9c62be70c7a4bf09afd39e4"],["/tags/高等数学/index.html","79d0927e77dbe880cec108343d6327cd"]];
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




