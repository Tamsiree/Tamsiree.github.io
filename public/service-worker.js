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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","b93bd98728678f9224ad81dfdf75b8d1"],["/Anime/小王子电影的共鸣/index.html","a90e37a02de4dfd7c6e2677c1b672b89"],["/Daily/Memorandum/index.html","a41a04aa67720765755e9b61951d6122"],["/Daily/生活小常识/index.html","09c8c350bb5cf6e58ca1f0005e018269"],["/Daily/网络用语/index.html","455ef9d5713009139b474f3294933008"],["/Design/设计用户界面的注意事项/index.html","9271c12b34eba9db909ae2a48700cb8d"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","e3141ff8291624b979ea308c7aa2ba93"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","0acebe2b8c1531f09753eadbf85c920f"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","f7ba98224b5a94b2f01cad12cc3068f0"],["/Game/GamePlatform/Steam/Steam库共享/index.html","e681fdccd536e0173411b407dfeb326a"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","0dbd9428f6924bb549852a3c55e512ff"],["/Game/如何独立开发一款游戏/index.html","b5df7800c3970a3761c5eb8343bf2b10"],["/Google/Chrome/Chrome上网助手/index.html","e28836b25c3a198f6d632bfdf4951c93"],["/Google/Chrome/Chrome使用技巧/index.html","5d63c2284d9f2bcfcab805a3e588a77d"],["/Google/Chrome/Chrome插件/index.html","15de7b79dace2f12f79738d45f2622b0"],["/Google/Chrome/Chromium/Chromium/index.html","a400de7a90a9fcea301c8fc8ea0be1a0"],["/Google/Google搜索技巧/index.html","545815b43b805acf47d0ee987dc7cf85"],["/HardDisk/硬盘分区结构/index.html","93bd695f7a455b42f8ec215f2eb1bb6a"],["/Hobbies/Guitar/吉他入门/index.html","aed5d7ec0086e7c79849af20e53184fa"],["/Hobbies/PersonalDiary/芦江曲/index.html","f21233f51e2a368543b011bef81def1a"],["/Hobbies/PersonalPoetry/闲情逸致/index.html","1826f31b366e9761aecfdc0e3707bf59"],["/Hobbies/Photography/摄影入门手册/index.html","89e883ab0d1e813e85c706ed9692db8a"],["/Interview/2020年字节跳动面试题/index.html","02895d775f7a2071e3cdd8d7832287ee"],["/Movie/HongKongMovie/开心鬼系列/index.html","f5f40dfb6dff09a08327e25255b12f3f"],["/OperationSystem/Linux/Linux分区管理工具/index.html","dc25494eee64a49ee1679ce573fcd0b0"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","bdaf503613f23090438cba5165a0fd34"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","9efbe2d5be7b6911061f9601e139ed3f"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","541611c19af84a328f5d22c27919a756"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","aff9ccbfcdeee8cf148a4a5fd46af1e9"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","5c9786ae265bdf123e27c4c5363fdafc"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","c54c0a9a29321dd36ea1270cc9064da9"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","a814eec9d36b051bd0ec504483e9daec"],["/OperationSystem/Windows/Software/Windows常用软件/index.html","3f831ef3c356fba1dba1dab9a9a35207"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","004b9877dddc1d136fb1075fcc301e16"],["/Research/Math/线性代数/线性代数公式/index.html","f643cfa104d9488de780b37126ed75f4"],["/Research/Math/线性代数/线性代数知识点总结/index.html","64a4fd732f65bc255bb118bbd2673c1b"],["/Research/Math/高等数学/高等数学知识点/index.html","cf34b1cfc55eb0e2d22d132522cd6440"],["/Research/Memorizing/费曼技巧/index.html","9a208f8e3528fc2d878f3dd740f5ffb4"],["/Research/思想政治/考研思想政治理论知识/index.html","2209961c8e1cb191f42d2469044a880a"],["/Research/英语/考研英语作文/index.html","f53513f68e27047be588cee3ce2651d0"],["/Research/英语/考研英语词根/index.html","74154e91440d567ecc2d780530c7e57e"],["/Research/软件工程/PseudoCode/伪代码/index.html","8b4b36b553b52b4e61ebcb5ad8b145c3"],["/Research/软件工程/中南大学软件工程考研题型/index.html","708460abf6efaa21a23d846eb835cadb"],["/Research/软件工程/软件工程基础知识/index.html","65ac58763b4b4ea5e79a97b8933856fd"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","b123c14588b68e90f03d91abe24e0890"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","060cc9314c14f2979f88eb5e1661b244"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","c40c2fe319414d4ebe0543ae31e6ec2a"],["/TechnicalResearch/Base64加密原理/index.html","c97e6d1cd4308a83812764fc0d25f648"],["/TechnicalResearch/CDN/index.html","94c2ef2541839bff8eabe89784915189"],["/TechnicalResearch/Git/Git/index.html","fc23b54df9686efbf8c72a4468240f4d"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","042cedbffd729025a09b93aa0ca11cb3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","ce9b06b0664a6272fc70d79b7a9dd2d9"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","8f745327ed00826ecd2668cc599e0fa8"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","a8bd216eb710f6320ee6c55206bac9d2"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","24a3d17d86d9ba9f705b25a4055fe88f"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","9a011cdc145192ac29c5ff226b6c2ec7"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","93723c3a5c884bcb49d9c0b1cc9c4999"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","06cb3183cdf34e53c128704485bdda0d"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","9e5c8b702964abcd2cde40301a51d685"],["/TechnicalResearch/Java/Java基础快速入门/index.html","b6c9c774efa5c782efe36aba19b58bd2"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","5c688cc3532eedc0edfa3733dbc62f37"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","9cf9fe50b21917943e57e4116d9dee9e"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","0e60d9a50178b94ea4e191a5f926d01e"],["/TechnicalResearch/Python/Pyhton-GUI网格列表控件/index.html","24b5c03324cac874f598a1450226c080"],["/TechnicalResearch/Python/PythonExercise/index.html","7ad69aab1d43f958c8452e80caedcaad"],["/TechnicalResearch/Python/Python问题归纳/index.html","a22f96f6b0b5d030cc76c21f86b27668"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","ff7b57125b5397962bad302b02c020fd"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","28355ca46f6927d785e2aab0235b7b5b"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","0545f2357b934b082e3c9ad57d6bffc6"],["/TechnicalResearch/UnitTest/Android/Android单元测试/index.html","abcb6d67dcf3dc640142c1cd53d1f89d"],["/TechnicalResearch/服务器常用端口/index.html","cc9f6893d892882546e96d2e9cb656d1"],["/TechnicalResearch/正则表达式/index.html","ec8b903e02d72beebaf3b50249aeca88"],["/Teleplay/亮剑/晋西北铁三角/index.html","123654baa12845d90931801f5985e340"],["/Teleplay/仙剑奇侠传系列/index.html","806c2e184d658cd8c6ef5793cd8bb8b5"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","082cc3b396210bd729f1f9c91b5b53db"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","560667aa92b8bb52030c318aeef33612"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","c1b51bf4b8195550a88f98724aaf33d7"],["/Tool/DevelopmentTool/Unity/UnityHub许可证手动激活/index.html","8616259422d2a7fb8fd42aadec68fbb6"],["/Tool/DevelopmentTool/Unity/Unity使用技巧/index.html","e8a77eaaa26030136a564210533aba6d"],["/Tool/DevelopmentTool/Unity/Unity问题归纳/index.html","391b7787f44b11490f3061dd5c5b157c"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","87917ac0f9a19947fa6b70c680247699"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","6fe3035a51fa6252b1bd44df5782ff76"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","4b291c11ee91dad23646801dc563d909"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode插件/index.html","b4934ace7dfc2dd909dc1cd1f1397832"],["/Tool/Linux/Manjaro/Software/Thunderbird/Thunderbird问题归纳/index.html","f6f85ca5a857d2490d6a40452ef6c998"],["/Tool/Music/网易云音乐/index.html","4532c9f55ac7e44fa8bc4f36da849875"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","ad5e0e7b3b4c3fd7ba183b2c1c92864a"],["/Tool/Windows/Software/VMware/VMware/index.html","3fa15c9123c0603468053519602adff3"],["/Tool/百宝袋/index.html","f90f7d82e67e378a6af06f0e7c844112"],["/Windows/Software/Office2019/Office2019激活/index.html","3a8da1b12241f87eafc21d8b714070a1"],["/about/index.html","4ea4770903adc7545334c7b01a78766b"],["/archives/2013/10/index.html","17e6ce79d74333c06cba95733b24f070"],["/archives/2013/index.html","c55ae00f34c7c93d2461bcd86d33a02d"],["/archives/2016/09/index.html","8667dfd5fb7942467cb6e9b961c78ded"],["/archives/2016/10/index.html","973feb20aeaa3397618a16e89bf01de6"],["/archives/2016/11/index.html","9fb69f824f6479a01af9755ff635365c"],["/archives/2016/12/index.html","3e002c895478ff9c5d25dfeee90cc9a9"],["/archives/2016/index.html","50807f68808434adec0ee92902b514e3"],["/archives/2017/03/index.html","b496ad0d61543300b9d96e97c8951fb5"],["/archives/2017/06/index.html","13dcd8a022d4e643b872390d3277de6d"],["/archives/2017/07/index.html","fb97716e7a99dc5e275ed0ffe2beafb0"],["/archives/2017/09/index.html","6b31d7bf74d24f7fce6fdfbdb9c5ffbf"],["/archives/2017/10/index.html","74f30f049c46fb507f64b3103fac6b58"],["/archives/2017/11/index.html","8db43aa17808b42ae9ba53839922c24e"],["/archives/2017/12/index.html","68082c353435c69b6e029f9088c7a99f"],["/archives/2017/index.html","4e5877a301138c14277717dcf9db7896"],["/archives/2018/04/index.html","d66f83febb969739641beb5076bcb0db"],["/archives/2018/08/index.html","ee601dc7f213ef2eefc5038cca2e0457"],["/archives/2018/09/index.html","652b37e7315f6f9c1d5bda4b570f9560"],["/archives/2018/10/index.html","f4daa14b441076f53c6119f0a9c2f4f4"],["/archives/2018/11/index.html","ed4211be1ad9a483f31e1acb3c404d20"],["/archives/2018/12/index.html","29bbb46803d8c1a7a082d9a2a00090b8"],["/archives/2018/index.html","d5ba54d3c5fdb3816d300ba4e97afa53"],["/archives/2019/01/index.html","a6bf39de6c120b73923178f52fd8e4d5"],["/archives/2019/02/index.html","c951af1c4c458a2cb4aadebd88cff978"],["/archives/2019/03/index.html","5c796f8ce62b3e1fcb15aedc8c31a2e0"],["/archives/2019/04/index.html","86ba34968597ffe18c5ca9f0453e1182"],["/archives/2019/07/index.html","b129eb713dca701524fc8ad11475c5fa"],["/archives/2019/08/index.html","cc700bdf13b9a3765f6b6725c2e4acf2"],["/archives/2019/09/index.html","da4050fe096abc7f922de7b1dfb0b64e"],["/archives/2019/10/index.html","13f11388f5e14487a9183c0e7fba95b1"],["/archives/2019/11/index.html","064eb53613e2f5b019e33a06e4f7a21c"],["/archives/2019/12/index.html","8a137773b0fc868994314dce3e041641"],["/archives/2019/index.html","2ebac7b117a3cf0535bc4385e4663351"],["/archives/2019/page/2/index.html","5d59836a67bed5839b90081e512e2395"],["/archives/2019/page/3/index.html","50b4ba398817eb15714c43fb58ea7093"],["/archives/index.html","3a3cf8d5775f83afe97ab8c71ef27b7b"],["/archives/page/2/index.html","6a980bfa8d83de1f058697197e5a5091"],["/archives/page/3/index.html","b21575932aca7e2071ac6d7a7832bcb9"],["/archives/page/4/index.html","84ac34979ba1153aa6465ebd058c2210"],["/archives/page/5/index.html","6e28a3077a749e8040e52af7033340b2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","5f3903d524d8986135f9abd653b35260"],["/categories/Anime/index.html","af768ae9fc320d46d67f6b0b3ef216b7"],["/categories/Anime/宫崎骏/index.html","c09b8a2f64646b046be63fded9f5a87a"],["/categories/Daily/index.html","5e6b7fe3ecba3a4445678b6581d554ad"],["/categories/Design/index.html","8782f23e75af99c6a2b4d2e7c753211b"],["/categories/Game/GamePlatform/Origin/index.html","d28aab921125eb0fc2866e2f3da246af"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","19b665f67ceef08c0473cc7653c5a201"],["/categories/Game/GamePlatform/Steam/index.html","2c31351c1c81e8624971dcc4c6a3b4ef"],["/categories/Game/GamePlatform/index.html","7995a2db6861d1d39ff7c8e0a06e1155"],["/categories/Game/index.html","7cf4e5cd82e9fb84a348ef66b6baff07"],["/categories/Google/Chrome/Chromium/index.html","17577060c883838a63230a96c208b37a"],["/categories/Google/Chrome/index.html","e366bca82d6381c03e15ba9e9a2c04a1"],["/categories/Google/index.html","6106fa81ac443d8edeb8bc2d55f19c4d"],["/categories/HardDisk/index.html","25da19f31821e278794210f21f68ac9c"],["/categories/Hobbies/Guitar/index.html","95498b3cc392fae90ae2abe160b32aa6"],["/categories/Hobbies/PersonalDiary/index.html","4635f75c118adca6d508108ebdcca589"],["/categories/Hobbies/PersonalPoetry/index.html","ece55ed63dc6cf36cb893aef2acede2e"],["/categories/Hobbies/Photography/index.html","0a229fd7a37bcf9d046b9587b89767c5"],["/categories/Hobbies/index.html","d3b97aafbb92ce063e30ba1d584c470b"],["/categories/Interview/index.html","6f9a7693c9fd0e42864ef66458cb3d16"],["/categories/Movie/HongKongMovie/index.html","65c5c5cc20fa05c2eb1cd319b02567f9"],["/categories/Movie/index.html","b7ae1470fb756f9de16f06099f2f6b98"],["/categories/OperationSystem/Linux/Manjaro/index.html","03fff6ef5b8b725d114a0e14d0404967"],["/categories/OperationSystem/Linux/SteamOS/index.html","30b4e6b760fadc4ab72fb0007d13feab"],["/categories/OperationSystem/Linux/index.html","815fcfe6a6bb12ad3ab8e477968006b2"],["/categories/OperationSystem/Windows/Software/index.html","2f33e418450432038b3c153f3baf848c"],["/categories/OperationSystem/Windows/index.html","f0e25df5ee2ac5ebb4feef87de2b0d16"],["/categories/OperationSystem/index.html","f6f56ec51b05f15556c3c941ff92883d"],["/categories/Research/Math/MathJax/index.html","8781c7a30763cdba7d028b1b5507bdf2"],["/categories/Research/Math/index.html","a8e4c62ba8a96ab2e484dad3c2c00cf7"],["/categories/Research/Math/线性代数/index.html","9c8707e32ceb146e374b105c8daf210b"],["/categories/Research/Math/高等数学/index.html","206f631595dabd8fbe8f68c116858a86"],["/categories/Research/Memorizing/index.html","98a640bf1e17c8f0f3feb58da2315ab1"],["/categories/Research/index.html","18a50ee0d28a3c5f8de685b41471c9a5"],["/categories/Research/思想政治/index.html","cfb7e4a5a9ca722b45e9c23195b87399"],["/categories/Research/英语/index.html","446cb8008b5eb10bb3480f26705ade69"],["/categories/Research/软件工程/PseudoCode/index.html","94d481c04b8bbdcbed37c525d27ee42b"],["/categories/Research/软件工程/index.html","db361f72ecd567c59cdcfc5a19767426"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","d8a64720776ae85ecde570f218ad9ed5"],["/categories/TechnicalResearch/Android/RxTool/index.html","2ceea867b18edbda58d0ef5a25c3c1b8"],["/categories/TechnicalResearch/Android/index.html","03d06973fca5dc5a70e80ecf5790558d"],["/categories/TechnicalResearch/Git/index.html","ccf14c0633d41320cdc2d9fc5ea6468b"],["/categories/TechnicalResearch/GitHub/index.html","e3d64cd2ffb35d0334361ad6035e2d00"],["/categories/TechnicalResearch/Hexo/index.html","0280410d1cf8643beb407835f3e38f8a"],["/categories/TechnicalResearch/Html/index.html","74be13bd5c7713bc42bcaca645b448ca"],["/categories/TechnicalResearch/Java/index.html","044d5a0cd6f761e086d4d9ac6cc1518e"],["/categories/TechnicalResearch/JavaScript/index.html","6604131481234a62e106af401312fe79"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","3c647e0864b3296cdc3b2a4d7c560f67"],["/categories/TechnicalResearch/Markdown/GFM/index.html","726fc240ff4804a105e1e75f8c77ea61"],["/categories/TechnicalResearch/Markdown/index.html","7553f782f6c682eed96adf6c9e22dc4f"],["/categories/TechnicalResearch/Python/index.html","a47e640ab2ed1d63e693dc5e352fe579"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","d86072160a774ba3216c427c34f49b06"],["/categories/TechnicalResearch/Spider/index.html","58b0374eebe7840d426b7d071083e5ad"],["/categories/TechnicalResearch/TA/index.html","0bb687a182442d889c591fd4320f7b8d"],["/categories/TechnicalResearch/UnitTest/Android/index.html","1a8a504969336077fb9b3040be075fea"],["/categories/TechnicalResearch/UnitTest/index.html","65b4e2617ded4a63c51a53fa256325a2"],["/categories/TechnicalResearch/index.html","5e7b80f9377eeb942afa8e5a8bd694b2"],["/categories/Teleplay/index.html","fc298315144ad32f9690de783946539f"],["/categories/Teleplay/亮剑/index.html","8eb2f5c2a168abc1c9b4ce0a4e167205"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","966f293143a432210e35a13b30c0862d"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","7cd49111b3aea4d4404520c547fa80da"],["/categories/Tool/DevelopmentTool/Unity/index.html","b4eb31c8404edd138943d575725bcfdf"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","499f80ce6bb6ac01488ed497b00147d0"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","b0eab44b45274bdffc3291fc48c10312"],["/categories/Tool/DevelopmentTool/index.html","582056b1a54f2530535ad2d5cb88faf1"],["/categories/Tool/Linux/Manjaro/Software/Thunderbird/index.html","f0f665f12f4dbcfccc891bb27efe9f6d"],["/categories/Tool/Linux/Manjaro/Software/index.html","83dd189de04acea785272b4f66a0d38d"],["/categories/Tool/Linux/Manjaro/index.html","ac5869d4b90c070d5f3ecdb3194ac1cf"],["/categories/Tool/Linux/index.html","3ab7721ac4914fd1124cfae02191f3f3"],["/categories/Tool/Music/index.html","e862a1d5709092d1df2f792f3381504d"],["/categories/Tool/Windows/Software/UltraISO/index.html","f4d02f8c4d1d3d946d2ca8c946ea3e97"],["/categories/Tool/Windows/Software/VMware/index.html","5c29dd2aa3ead653d54bd949662f9863"],["/categories/Tool/Windows/Software/index.html","962fe498fba043a37c86c37f65a9722a"],["/categories/Tool/Windows/index.html","fff020b8cf46f2b258bec96adabccf4e"],["/categories/Tool/index.html","7ab539f633110886d62df5761eaf55fc"],["/categories/Windows/Software/Office2019/index.html","142872cedb37cd6aa8206a0cca31be0e"],["/categories/Windows/Software/index.html","db8d0c27fd88de053da69656a902035a"],["/categories/Windows/index.html","dca2878bbd750c3db255ddae8b52a406"],["/categories/index.html","0d8afebafc5bf657324d91da97acaa43"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","b33b351695921d48bf6e8c8aa0350b07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","fe102d4a58efad6809fcbbcd31002187"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","697e4b68afd80568ce679f9ceaafebdf"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","d5c56f01f006f7469c74bbb86ec70ecf"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","ac84f582f815c6e70fcb2c3a5c9542b3"],["/movie/index.html","4c98a9d92e4f3d0dd22bc5d5785f5908"],["/music/index.html","df5517f8df57927bcb6b53b09fd91207"],["/night_sky/index.html","64b060fcd64785f45d34b664141bea33"],["/page/2/index.html","e3a9863ddd6793b606a5e1e9f64f9b07"],["/page/3/index.html","1f10985bb13560f3ac0bfdb886c6f9df"],["/page/4/index.html","1191a6753ec045b8b8daf907e495bef1"],["/page/5/index.html","819b27c9124f818bc9d44db3cd807f98"],["/page/6/index.html","0b0ac1fe1f4fb5839d82eb5321759ca6"],["/page/7/index.html","b1fe1847b4d0fac79b1f56c2d75e9500"],["/page/8/index.html","138f674a597b995a8a986a2b91deef66"],["/page/9/index.html","b5a758e21599505dbe217b7a7d616034"],["/tags/Android/index.html","738d1fd446193967d40ede0552f8039a"],["/tags/AndroidStudio/index.html","b4fc1caa14cde0377ccf2b99e95df57e"],["/tags/Anime/index.html","e06bd0c3fbea9c57a0bd61a8f900e51e"],["/tags/Base64/index.html","5ef55382159cf8bd90cc01b1c4b92766"],["/tags/CDN/index.html","917434b2be08780d222ac46a31b5d00d"],["/tags/CSGO/index.html","21f71efc1a38a03d78d17852bc5a0351"],["/tags/Chrome/index.html","fb526dc8fe0be847260db027933f9331"],["/tags/Chromium/index.html","e1597a1c45e55aeb883da3208f42258b"],["/tags/Contributor/index.html","5c16ab87cd8b414f0433fd85b2d5f6bb"],["/tags/Daily/index.html","4a65592d75fc2bafa3e118213a2d1444"],["/tags/Design/index.html","7cec9ea347ec36cb4f177a245a82694d"],["/tags/DevelopmentTool/index.html","bca8d110d30b1eb030112f28a56d952c"],["/tags/Emoji/index.html","4741ba1400fcedc167d53f92d6140b2d"],["/tags/GFM/index.html","248a681bcd632b6761a0a429bf04b47c"],["/tags/Game/index.html","5cf7fa5fd5a215d214b2c70db450a11f"],["/tags/Git/index.html","7f1e1a9bbcbe78f6c3db3ec8e16e0012"],["/tags/GitHub/index.html","d10a4aaa3e916611c3eed179b7c14580"],["/tags/Google/index.html","6cac2d728efd46f7dcc8d6e71b9d335d"],["/tags/Guitar/index.html","1c89987cc07266d0aeef4dddf3f2ac4f"],["/tags/HardDisk/index.html","17061c49018266e4975595ca7c8119e7"],["/tags/Hexo/index.html","c6b9e27bfde4fbfca4a810f3a2dbedaf"],["/tags/Hobbies/index.html","34274e7b97ef5cea6f696dff329c5848"],["/tags/HongKongMovie/index.html","50844e36bbab1dea28e3514a39ebc810"],["/tags/Html/index.html","b8dfa1fb5315bb5aabe4b9a2cd424b7d"],["/tags/Java/index.html","5f9c31c002c87f22c90ed9e38e32faa3"],["/tags/JavaScript/index.html","e983d9e6cfc343368cd329268af4e834"],["/tags/Linux/index.html","1499f3686fd592527b843c83fe58ebd4"],["/tags/Manjaro/index.html","3ca7979bafb81d60a494e314f143eb88"],["/tags/Markdown/index.html","4ea04c5e82442ab63eb6a8c78efa7dc6"],["/tags/Math/index.html","101764bbf6b0b51cabf6bb60557882ec"],["/tags/MathJax/index.html","fb96ef15a08022a11f79eb03cb4ee7cd"],["/tags/Memorizing/index.html","b849f2e5648d3ad0f00c28c64d308825"],["/tags/Movie/index.html","d20cbbe75d07f9a5570670d4daeb5cbd"],["/tags/Music/index.html","393f87f434a5bfb17985095768a7ef18"],["/tags/OperationSystem/index.html","c8aa6a7aa6c26ed53f80a735ca85e0a5"],["/tags/Origin/index.html","87983ebe59110116befac197b85b3b52"],["/tags/PersonalDiary/index.html","0b1330f9e1adeebc8e09455a59ab83fc"],["/tags/PersonalPoetry/index.html","1a0249dc5bd6d317497472f5485e38c3"],["/tags/Photography/index.html","17a1fa9e1b37a2300a01694ade95d1a4"],["/tags/Port/index.html","459a2aa1c643a703ee568e299161fba6"],["/tags/PseudoCode/index.html","5351976db2436bbaaf8701080c45a587"],["/tags/Pycharm/index.html","f46180baaaec85e793054f1c00691cab"],["/tags/Python/index.html","bb70ea680faf9b62068ee0e83baa134b"],["/tags/ReactiveProgramming/index.html","6fe2f6a07c7836ec5a492f7eee2597db"],["/tags/RegularExpression/index.html","b60c723087cc125a66a4e9f48951b9c2"],["/tags/Research/index.html","f3add3468ff1951675185826019ccbdc"],["/tags/RxTool/index.html","283b2086101689ea815479468642f9da"],["/tags/Software/index.html","55c3da8b282d85fe5cdd55f656115817"],["/tags/Spider/index.html","6acfdf7954294fd5d675598c4a70d6d2"],["/tags/Steam/index.html","1b1d007d4cc89fca8425f0402e84a7f1"],["/tags/SteamOS/index.html","2017941158d952ee2bd8d6a4960122fa"],["/tags/TA/index.html","7934006c1bd0ef2eeeadcf81444db467"],["/tags/Teleplay/index.html","59e6edd3cce71ea4c90db664c3718599"],["/tags/Thunderbird/index.html","a4a3d6fdcc312c153fdb2f36199e28fa"],["/tags/Tool/index.html","42b9c41e9375f66924614d58c796fba4"],["/tags/UI-Design/index.html","7c9386e5efbb1e5133e97a488391cd20"],["/tags/UltraISO/index.html","9a814c3243d918cedbc497cdbecbf9a5"],["/tags/UnitTest/index.html","913a97a9751b9df9dd16d1d2a26b83ba"],["/tags/Unity/index.html","90cd75e1db605b796d5430b3ad2609b5"],["/tags/VMware/index.html","d34f5eff90cd42784e40b3c6c49582a3"],["/tags/VisualStudio/index.html","bf4950d4006eb1ea32844ef203dec8fc"],["/tags/VisualStudioCode/index.html","cb8084efa1f894b02bdbc67e30349d34"],["/tags/Windows/index.html","85c5aa51e62a6725f169cd8710fc19ce"],["/tags/index.html","b320675363493a4f0379925d8b29da06"],["/tags/亮剑/index.html","2c22bc873e860cda923a65514eb543cc"],["/tags/仙剑奇侠传系列/index.html","45aa257edf358ecb498ec809e55d0fa0"],["/tags/千与千寻/index.html","f4d52e0bb50c58d14e776181484f4006"],["/tags/宫崎骏/index.html","49ffd0de71f0230e682859967b90a3d6"],["/tags/小王子/index.html","e010fce620a2ebd81033c7ee247f07bb"],["/tags/开心鬼系列/index.html","2f804b2a5a5263ad97db2b7827dc3d0a"],["/tags/思想政治/index.html","c13a6ea2feee794676baf7b7ba6092d6"],["/tags/线性代数/index.html","8051dd3ad4c7eb9788355bf2506e09ba"],["/tags/英语/index.html","62cbb89a9d01f8db13e0978df96f347f"],["/tags/软件工程/index.html","6cabada4faa7f6d72ef0bce5f3cd2676"],["/tags/高等数学/index.html","8d0be0de01a426a44c8a3f91224f93d0"]];
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




