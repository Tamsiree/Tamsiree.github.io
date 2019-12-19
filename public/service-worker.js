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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Google/Chrome/Chrome上网助手/index.html","c9792b944c158a11f2c6023b3db955a1"],["/Google/Chrome/Chrome使用技巧/index.html","64f7301fb10061fc4fb15ff7f5ffe1d0"],["/Google/Chrome/Chrome插件/index.html","8e0647373c1ba2fdbad82bb04a0ba481"],["/Google/Chromium/Chromium/index.html","f03a5ee164bc13d8cc02ef981cf2192d"],["/Google/Google搜索技巧/index.html","86ed653281558afb4602e6cd1ed60a53"],["/Study/Math/MathJax/MathJax引擎数学符号说明/index.html","19e4f838c7e3b30369809b91bac0ed3b"],["/Study/Math/线性代数/线性代数公式/index.html","9bc4329847556991f317708415b8e001"],["/Study/Math/线性代数/线性代数知识点总结/index.html","f73d8f3387966cad0e24f0c5bfad1225"],["/Study/Math/高等数学/高等数学知识点/index.html","845dcedcb34929482984c6513364e5e6"],["/Study/Memorizing/费曼技巧/index.html","82ed7a7c94cf1d3d158bbb9d2b0d8a62"],["/Study/思想政治/考研思想政治理论知识/index.html","6b709343caa6577083d4ff6fd0db4d98"],["/Study/英语/考研英语作文/index.html","475d180f1c2eb1446f1f392476b65004"],["/Study/英语/考研英语词根/index.html","005aa76b479f7d6ab462573b9b48490f"],["/Study/软件工程/中南大学软件工程考研题型/index.html","b46e3b15e580194a7ee941b18a2d8ba9"],["/Study/软件工程/伪代码/伪代码/index.html","95d4ecb6768ac05c1a3a7f2cc2de5250"],["/Study/软件工程/软件工程基础知识/index.html","7f7fc5514c6fed9b040a608becfec0ad"],["/Technical-Research/Android/RxTool/RxTool/index.html","9e92383436be9b921d721e16c9d3eb32"],["/Technical-Research/Android/RxTool/Wiki/RxTool-Wiki/index.html","eab64311f962a992167b2fe01e2d474c"],["/Technical-Research/Android/单元测试/Android单元测试/index.html","de4cb70407d1a1834595da0916df51d9"],["/Technical-Research/CDN/CDN/index.html","646edbc374066904be88aa1e03fdff00"],["/Technical-Research/Git/Git/index.html","792e189fc48556ed4798a1461fe5396b"],["/Technical-Research/GitHub/GitHub提速方案/index.html","3de2e48cd671f61f656fa5e75e52344f"],["/Technical-Research/Hexo/Hexo博客绑定域名/index.html","b9e05b6c87f25d8d783dcf9a09ffbee6"],["/Technical-Research/Hexo/Hexo博客美化/index.html","47b917afb1a181fc76460557d4307c8c"],["/Technical-Research/Hexo/Hexo插入Bilibili视频自适应/index.html","7d039074ca2b87f21103dc3383d48b8e"],["/Technical-Research/Hexo/Hexo自定义网页/index.html","d79e89810a6475c68458eb11f1042f39"],["/Technical-Research/Hexo/Hexo重新部署/index.html","d25e15ff21eae0bf36bd648c9e8ea9f2"],["/Technical-Research/Hexo/Hexo问题归纳/index.html","ad5fbb6c0a806e31109bfe889d06c323"],["/Technical-Research/Hexo/Hexo音乐/index.html","0015cbfe1f8f995a2dff4f0e981bbea7"],["/Technical-Research/Html/Html常用知识归纳/index.html","6a0129f9c9bec05c4292610bebc2c5d3"],["/Technical-Research/Java/Java基础快速入门/index.html","2599d65b38344c15dfc91095ab2503a2"],["/Technical-Research/JavaScript/JavaScript常用效果/index.html","2b5ef0e86f7b4ad80fcd22fc027b8a37"],["/Technical-Research/Markdown/Emoji/Markdown内使用Emoji表情/index.html","b9ead5a86d9322db1a954bd1de25c646"],["/Technical-Research/Markdown/GFM/GFM语法/index.html","b432a91bdd35806442e9d20ef230623c"],["/Technical-Research/Python/Pyhton-GUI网格列表控件/index.html","ff377e72384006769e3de997eff07a77"],["/Technical-Research/Python/Python-Exercise/index.html","adb2eb7962421643d601fdf1627d27ef"],["/Technical-Research/Python/Python问题归纳/index.html","74ce000fda805e4fe969a4b6dea65701"],["/Technical-Research/响应式编程/响应式编程的理解/index.html","3640a1fb495b5c41ef7807366c1e1576"],["/Technical-Research/正则表达式/正则表达式/index.html","f94eeb97b1eec3d35ab6840b9a11145a"],["/Technical-Research/端口号/服务器常用端口/index.html","453ce6886e9cf8eb6271d71dd982736e"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","7120cb3e1a3dd00dac4de688f76e3afa"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","2803ed37a6bed1ff5a003addd32dac46"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","fdbff2e996dd29de28258d2378827982"],["/Tool/DevelopmentTool/Unity3d/Unity3d许可证手动激活/index.html","ad43840053a100e98a6bdf883140e24c"],["/Tool/DevelopmentTool/Unity3d/Unity3d问题归纳/index.html","5d9c58e9389891fa808fbddfecd3c9ad"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","b5ef1f81ce84c5f68c0f60943c980faf"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","432d56601b8424e33b7db6bc268cca0d"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","7c48746485127d2537747428466b9893"],["/Tool/Music/网易云音乐/index.html","180a8e68d75093717902b48a28775b16"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","6243adb711cbc08bb7cedb144813e9c2"],["/Tool/Windows/Software/VMware/VMware/index.html","7ac13d5bae05f604a6ced63f9e710574"],["/Tool/百宝袋/index.html","c06d03bd9974653841619d62dae7c3c9"],["/Windows/Software/Office-2019/Office2019激活/index.html","83f76069de64636668c3b2882e41cdd5"],["/about/index.html","428bac0a8ae4380567974b6ada4e99c2"],["/archives/2013/10/index.html","ee9886f0263d58e30638f8883c62072d"],["/archives/2013/index.html","6baf56047e2812fc18d0efe1f98e823c"],["/archives/2016/09/index.html","3a46e25e9453a6efe32fabf1c3a9b06d"],["/archives/2016/10/index.html","4e099c8d514c723139d71930a160484e"],["/archives/2016/11/index.html","9011359cb4593ed10ae7067c54dc3a65"],["/archives/2016/12/index.html","cb4240e99d92ad5da0d1cdf81966edde"],["/archives/2016/index.html","532c652cc5a9a08aab282582e476f934"],["/archives/2017/03/index.html","da6b9baa6c22bf828092457e3697c4a1"],["/archives/2017/06/index.html","470a6e79d3de4185a2d48991a754d07e"],["/archives/2017/07/index.html","badbf71e30f9afdb3e5703bed0f6a69f"],["/archives/2017/09/index.html","f9b23f6f33c286961d5b4b7a84ff6438"],["/archives/2017/10/index.html","9448c8c81288721a5205598d5dfbd1e7"],["/archives/2017/11/index.html","e3d35226a9251c7694845c1165c9929c"],["/archives/2017/12/index.html","3bcedccb29baf95ff40b5d87f15480fa"],["/archives/2017/index.html","7cd1ba664dc4acd0447be1aaf62e6182"],["/archives/2018/04/index.html","6533e984e96fe79500b5dce963768ff9"],["/archives/2018/08/index.html","697fdc794c7a4101a5b982d36c6afaa4"],["/archives/2018/09/index.html","e2d17b4dcf442313c5b3e2c8e8e4b7ce"],["/archives/2018/10/index.html","d5d06460dd0eb139c55e0532a3c27c33"],["/archives/2018/11/index.html","018923adddad90dc702b4c5c9f963c49"],["/archives/2018/12/index.html","2a03897684dc052d7080fd2fdfcaa45c"],["/archives/2018/index.html","164e893e40d502c9fd21ef0dfb9705e8"],["/archives/2019/01/index.html","97ba3c6a49f2050b2b9401cc1b2c1d2d"],["/archives/2019/02/index.html","16cbad0975a85fef9ae664dec18cfbab"],["/archives/2019/03/index.html","d3c5fcaef14efc85820c3f96c1ae1e1c"],["/archives/2019/04/index.html","16243fd47a19e6f6dea74a85f38884f0"],["/archives/2019/07/index.html","6e351ed5818cefab2a2278ab5baed806"],["/archives/2019/08/index.html","c3df857be1c24038ab898b1c0e9bdb86"],["/archives/2019/09/index.html","72a5f6e5463b271ed43e07b1e0274624"],["/archives/2019/10/index.html","7ebe9850c6009acb6e35134af87bb890"],["/archives/2019/11/index.html","fd1e5d1762805e782136c3d68caf2048"],["/archives/2019/index.html","7354338fb831c1eb4bc92b58916370e7"],["/archives/2019/page/2/index.html","132a8c6084e7cf87110f71d304af93ed"],["/archives/index.html","2fc22925e2d142b8f06d8579de91f074"],["/archives/page/2/index.html","479ced77bfd2704359bcc4da260bc7c7"],["/archives/page/3/index.html","095f41f2a91ae629b42e97aeaa3d6be3"],["/archives/page/4/index.html","41b0f0ebdb66698eb9e063c058015e72"],["/archives/page/5/index.html","7f7f715c3ed072f9421b4d6f3e514eb9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Google/Chrome/index.html","6c5612758ae614832ccd578eaad89fc6"],["/categories/Google/Chromium/index.html","7c579fc3e0a1214eab22f2e00eee33e7"],["/categories/Google/index.html","c79403f655e530bf1f9766fdb5bd7271"],["/categories/Study/Math/MathJax/index.html","7e5b0f25570ee120b0ed5260e1f4fd76"],["/categories/Study/Math/index.html","1a717cd408fdbb41c19d0b7d0193007d"],["/categories/Study/Math/线性代数/index.html","1af9156f9ed62897b59e9380ca588e18"],["/categories/Study/Math/高等数学/index.html","d49e5a4bd77f4b0bc82d7f75f28a922c"],["/categories/Study/Memorizing/index.html","b8da70ec5377ed272f1a0dd500a7a51b"],["/categories/Study/index.html","a44dbdfe5dde2ed1e325df170909e19f"],["/categories/Study/思想政治/index.html","800a44d1446867fdd651cfef77ec278d"],["/categories/Study/英语/index.html","fe184590313dd5e3db2db56fb42c3a63"],["/categories/Study/软件工程/index.html","c14823aef605a938992d45816f93f309"],["/categories/Study/软件工程/伪代码/index.html","06778f5d082f7f62a61b85609feb56af"],["/categories/Technical-Research/Android/RxTool/Wiki/index.html","4c48f59b191a024624e24335d9c8377a"],["/categories/Technical-Research/Android/RxTool/index.html","21631782bc8d60a1040dc12855b10d2b"],["/categories/Technical-Research/Android/index.html","7801048d9c9f8ad4fd84760122791af0"],["/categories/Technical-Research/Android/单元测试/index.html","80f4f66119f068403dbad7a3037304de"],["/categories/Technical-Research/CDN/index.html","6562cbb9e9605dfe8ad83d5582948e46"],["/categories/Technical-Research/Git/index.html","316b6bc43fddcd0344de161d38298d36"],["/categories/Technical-Research/GitHub/index.html","03c3ea5256c78f38fc083f57870df103"],["/categories/Technical-Research/Hexo/index.html","995439d1bb763270021da8d24987fa77"],["/categories/Technical-Research/Html/index.html","7c9bb536d561eb8aaaf26464069bc24d"],["/categories/Technical-Research/Java/index.html","a89465a748432aac6d93e53e3885d8f7"],["/categories/Technical-Research/JavaScript/index.html","4eb953aff5e91e5ee1876647e386ad47"],["/categories/Technical-Research/Markdown/Emoji/index.html","4a8e93770cdd96df58002edf0b56004f"],["/categories/Technical-Research/Markdown/GFM/index.html","2c1f7c7247fab188c59e7a34c3abda8c"],["/categories/Technical-Research/Markdown/index.html","412a52a8e7f3a01bb4543887bbf31845"],["/categories/Technical-Research/Python/index.html","8ded18df6d804e5977ecf8bb9b06b0ed"],["/categories/Technical-Research/index.html","dcdc3498a99fe75dd05ff85419ab817a"],["/categories/Technical-Research/响应式编程/index.html","c59dff61c2de5bcbe6d703b99def08a2"],["/categories/Technical-Research/正则表达式/index.html","dbd13e6bfdd12bc8b48dfe07752d989e"],["/categories/Technical-Research/端口号/index.html","4c513cfa1d4698d6ce72a9180b8ed40a"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","6a0b1b9075ffaf60b80fc5ff14df1062"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","b60e9dab9ea2e714da5220391622ea38"],["/categories/Tool/DevelopmentTool/Unity3d/index.html","f7a4839e80b327b5fc19e099dc2d272d"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","deb68692074cc1fcefdb578c3d22bd27"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","6113f38844981c236eac3b185acffd1f"],["/categories/Tool/DevelopmentTool/index.html","ed07b835c428cca064ece7207bccbd7d"],["/categories/Tool/Music/index.html","f7899ebb7cacdf347354ef27caaa4246"],["/categories/Tool/Windows/Software/UltraISO/index.html","96048aa1072b3fb7b4ce68702183c3d2"],["/categories/Tool/Windows/Software/VMware/index.html","a068f7c0d26016e46f7708f9ffc74d68"],["/categories/Tool/Windows/Software/index.html","36b2a63fbde7957d5ebb70345b87300c"],["/categories/Tool/Windows/index.html","be6e837c3650a38dddb6989dd42a4166"],["/categories/Tool/index.html","cb58f2908eb9369213cc58d73b3c33ff"],["/categories/Windows/Software/Office-2019/index.html","c067d0ffbecd23a4c78a19c7a982ea2d"],["/categories/Windows/Software/index.html","a3a47601c5b7faf6184f83cd07e5c36d"],["/categories/Windows/index.html","965cfd8889c935553e12d4897a7eba00"],["/categories/index.html","99c264de61082f60854405e8496e5c5e"],["/categories/产品设计/index.html","d319a6851cd504ac6117ce03078f93c3"],["/categories/兴趣爱好/Guitar/index.html","05be05b5ed111ba278269eccb6af295c"],["/categories/兴趣爱好/index.html","a2aa2e046153fe753c3057c073068791"],["/categories/兴趣爱好/个人日志/index.html","f2a354654f1cdfbc75d7b6ffb145a2f1"],["/categories/兴趣爱好/个人诗集/index.html","2cea647c2ab3dde468153dd37c624b08"],["/categories/兴趣爱好/摄影/index.html","a37c5e5eba21b0370d0409a1323418bf"],["/categories/动漫/index.html","0b4c52e7042d7177402f1341d63eaf57"],["/categories/动漫/宫崎骏/index.html","0bbc5c3129ad0d316fa08b9f8d7a9f6f"],["/categories/操作系统/Linux/Manjaro/index.html","a247b6429f7c88ae2632b82ea5302979"],["/categories/操作系统/Linux/index.html","f5ff2d9828d705785e1309ee9f59b6c3"],["/categories/操作系统/Windows/Software/index.html","ee677d5896b48f04b57f25aabbea4194"],["/categories/操作系统/Windows/index.html","2ac5ded89a7b861b67bd5964569b34e1"],["/categories/操作系统/index.html","d56a3f0c86cab723d3f2766aed20a21a"],["/categories/日常/index.html","6c4333a8a4903c61de4f55da87e442c6"],["/categories/电影/index.html","6ff8ebc52f8aa397dfe311ae759e00cf"],["/categories/电影/香港电影/index.html","4bb4bb67faf8149cecfa4345bf6298b9"],["/categories/电视剧/index.html","a88e203c331a79d8793def84a0f6472e"],["/categories/电视剧/亮剑/index.html","9cd54a911f372f35e618504ef4b7bb9a"],["/categories/硬盘/index.html","d8a4237d130a6846dfd4cc9a65d885ff"],["/categories/第九艺术/GamePlatform/Origin/index.html","6ed7b5b103d44c93ae6a16b92bed17cd"],["/categories/第九艺术/GamePlatform/Steam/CSGO/index.html","ffc38e0bc24dd2a10bf5b5c2243cea22"],["/categories/第九艺术/GamePlatform/Steam/index.html","babb77d3b4e733be6073b8e1d84d07a9"],["/categories/第九艺术/GamePlatform/index.html","6a839b20b3794a71f3447a338558d33a"],["/categories/第九艺术/index.html","8d447373ab2b435f1b04f3c67a6b5307"],["/categories/面试题/index.html","d4c581c6164be095b58a84c681411b8e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e4354ed0667fec6649e86240363a87da"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","7b49ec6cd3e6425488a5feae2f7e9be1"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","28871d23fa93d7043836b820b85bf78f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","7fe0f2c751043a5e6f938af97436576b"],["/movie/index.html","8796f1e5bb9be244cde6f21e952df2ff"],["/music/index.html","d66496d392168fb5ef94b90d923118ee"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","fd980dcc5cfcb14c43896e6e86d1bf0b"],["/page/3/index.html","81cda8848807eb12f906818a4d17f0bc"],["/page/4/index.html","f99f8ec4a30de24c015f9c772d699cc6"],["/page/5/index.html","1bc07a865de828a5d8e06f8513be6aab"],["/page/6/index.html","fd4d195d3c51edbf891c223034ef2e80"],["/page/7/index.html","a11fb6d6fc9ec6b5fce753bfb4a8c041"],["/page/8/index.html","62d5a7a8b4bc21bdf9b6413db7d3bd0e"],["/page/9/index.html","e69419fb2b823a3dde43d1a6b6fb9ca2"],["/tags/Android/index.html","4390016b98d33191fba5787259232c28"],["/tags/AndroidStudio/index.html","5ee5fceeb2160283c5a15715e2d5a8dd"],["/tags/CDN/index.html","955084526bb799f626c71063a6837d4a"],["/tags/CSGO/index.html","bbf8ad133348a946b72e01e9be6b28ff"],["/tags/Chrome/index.html","b714e51a62b9c302f6a02038d09ef68c"],["/tags/Chromium/index.html","bad1deb8c7feeaa24b96ebe93fe9c5d5"],["/tags/DevelopmentTool/index.html","731d1868b7561e1ae65886290eec0116"],["/tags/Emoji/index.html","019c0a9a1ca8ad279e9764dd50b66daf"],["/tags/GFM/index.html","7ecaf3c669223a635b98ba5b7d4a1c2b"],["/tags/Git/index.html","e4471132b73780719341a764d5234fcf"],["/tags/GitHub/index.html","2f01feddde6b7e32e5997b057c98f067"],["/tags/Google/index.html","de9e51ea813b85588ddaf0bd86a7cb7b"],["/tags/Guitar/index.html","9da0b2e8e9b9d2b68d47b73141e96333"],["/tags/Hexo/index.html","f4746e08c5aee9f8084ffb62bf7d079a"],["/tags/Html/index.html","c50e75e15a681fa6546e0bc46820bd10"],["/tags/Java/index.html","14cef471f0008f5efe8cdfca2a49f7cf"],["/tags/JavaScript/index.html","034ec434acedfdfe83684b06b3eeab49"],["/tags/Linux/index.html","8642bd458431d940e25a1e59ff85ccbc"],["/tags/Manjaro/index.html","519ba0609a3003264dfcdcc8bc0313d2"],["/tags/Markdown/index.html","0a25664e490b6d06725818e13b90c228"],["/tags/Math/index.html","13d75cb67d73b4b1b4b5ae8dcb7a1849"],["/tags/MathJax/index.html","ad1a19bc16d6b658d8e5762797a1a438"],["/tags/Memorizing/index.html","0e48f134065f8a74e01de2b9dfbd5dd6"],["/tags/Music/index.html","74cfa3e083d12c57f202f221de7dabda"],["/tags/Origin/index.html","44820d2ca7cb6511735ac913cf56fa37"],["/tags/PseudoCode/index.html","bc3950f0a11b8e64e26846b2eda4eb2b"],["/tags/Pycharm/index.html","b9b6e1556f00f98ee4a68c7a121d832f"],["/tags/Python/index.html","2a2440a12e19835595a1a788eb961cba"],["/tags/RxTool/index.html","9ad2b5a955d7f2422f129fc0539e0014"],["/tags/Software/index.html","f7a5e23926c8fee42cf295da97764751"],["/tags/Steam/index.html","2fe12ea24cde170606d5a5d13b1b1e34"],["/tags/Study/index.html","8d03bdaf3dbc773a7044daad53c703b6"],["/tags/Tool/index.html","279b5f84dd6eed42945fda1440abd1b7"],["/tags/UI设计/index.html","61d1ae2eebceb1a5f5b661d8117bff3e"],["/tags/UltraISO/index.html","02d6281638f2ef40a49430ab2b1b04ac"],["/tags/Unity3d/index.html","6daf7ddc254d95c83ef987b5da5ad24e"],["/tags/VMware/index.html","898d11620a6bc5b72073b3e18101c68f"],["/tags/VisualStudio/index.html","879f64b87d2b0f71a9ea946af7ee81d6"],["/tags/VisualStudioCode/index.html","1a40c26981f847027d98c8b7a3199674"],["/tags/Windows/index.html","b154e3b35c192d84788bb9f10909225e"],["/tags/index.html","ac7a8d57dd6de330a5e4b5a8be31b520"],["/tags/个人日志/index.html","dd88d5adbd951852c0e404004f4a491e"],["/tags/个人诗集/index.html","0d9ba3ee3d5f4b872cbcd8eaa288e172"],["/tags/产品设计/index.html","c2db8649fa8f817d9cfba4cfd6cf2c33"],["/tags/亮剑/index.html","45e4e72fa8fa4642b4c37e142924f796"],["/tags/仙剑奇侠传系列/index.html","9f8231ef377d8089716eead2733b5a34"],["/tags/伪代码/index.html","855e99732bd4a3ec282b83e555e7bec7"],["/tags/兴趣爱好/index.html","10172fd99aec47f49fb28e12fd0c9b5a"],["/tags/动漫/index.html","7093475f0674697b74c730782bcd689d"],["/tags/千与千寻/index.html","630a88c5fbd5f71029eaed4c2048e37b"],["/tags/单元测试/index.html","ad95fc99018ddd5b31cb964b40eb886a"],["/tags/响应式编程/index.html","44243d59c170c3f6b6e30f4687d6d33b"],["/tags/宫崎骏/index.html","dce49b4a00ba642a8a8e305b102adb40"],["/tags/小王子/index.html","2c1e5799a005d3cc05dd544c3a413cf2"],["/tags/开心鬼系列/index.html","e79287f94a6f32b881bd976a836a2587"],["/tags/思想政治/index.html","fe97bca98d60545db672d226c1018649"],["/tags/捐赠名单/index.html","92030a22c52f1e0d24a47f40057031df"],["/tags/摄影/index.html","f8477a92b7ba2f64384cf354d2eb44c0"],["/tags/操作系统/index.html","17b8ddf611b4d300950b3baaf875c10e"],["/tags/日常/index.html","ece315c4bc988464d504eb1867fbe2f3"],["/tags/正则表达式/index.html","2d31152c077aa3b7df784a92f59f818a"],["/tags/用户界面设计/index.html","1799512ab17d31e3116eca1459d52122"],["/tags/电影/index.html","a134d7da1b0f1a7d73759992ca472959"],["/tags/电视剧/index.html","a4531e103e30f7ba1f2d3e6c9f88133b"],["/tags/硬盘/index.html","04c0fb33d777977ee7c55fd4d51031e3"],["/tags/端口号/index.html","93003e0045d62b6753340fe88d00141d"],["/tags/第九艺术/index.html","ef8b007b9c0a3ba23b65992700730b94"],["/tags/线性代数/index.html","95d1a03fcc692e2a81170e11c0b00b45"],["/tags/英语/index.html","b922886d9722678182fea52d89ca2782"],["/tags/软件工程/index.html","af9a298fe3ffd7ceb6cab4db662355b0"],["/tags/香港电影/index.html","3457cf3a5d452a2ab274ff06a6050a46"],["/tags/高等数学/index.html","c08448449f555562a8277c7b419e762a"],["/产品设计/设计用户界面的注意事项/index.html","fe43dfe3d2104d8b940d47cdadc6de24"],["/兴趣爱好/Guitar/吉他入门/index.html","c9a8767f10bfeeb70de4d5e1df49c4d2"],["/兴趣爱好/个人日志/芦江曲/index.html","3442a630867ddd82cb89a758d8dd6397"],["/兴趣爱好/个人诗集/闲情逸致/index.html","28731b15e0823ae59e2b1b260dd6c9c8"],["/兴趣爱好/摄影/摄影入门手册/index.html","19faa334c9c035aa71eb78fe129c25ae"],["/动漫/关于《小王子》电影里的共鸣/index.html","fe038e74969958f5460a936b0200f48b"],["/动漫/宫崎骏/千与千寻/index.html","f581ce5c1fa5b44e4c0b65787a1e5f55"],["/操作系统/Linux/Linux分区管理工具/index.html","e6db98f4d671ec27d7fff85de5e8916b"],["/操作系统/Linux/Linux的首次邂逅/index.html","3fd2e3a722f4e8cbb28959701083bb1e"],["/操作系统/Linux/Manjaro/Manjaro/index.html","165b4f50d12fd0e66f5c6a958a3e7eff"],["/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","923d9dda3c63ca81eceeaa899be3951d"],["/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","3d2def8118cef5ff778b0247a2c5b6e3"],["/操作系统/Linux/Manjaro/Manjaro常用软件/index.html","336ea3464ffc6eb2ea2b6ab48210ab94"],["/操作系统/Linux/Manjaro/Manjaro美化/index.html","e6bac147aff277e57162b333d24580cf"],["/操作系统/Windows/Software/Windows常用软件/index.html","b595cd109f3fba101fae08e1a7d7366e"],["/日常/Contributor/index.html","1897871e60b6e552f135e8da3ef8149d"],["/日常/Memorandum/index.html","a176c419be293312da1c3c8415ba3411"],["/日常/生活小常识/index.html","d0414ff4bb2233d201d18233d67a0a97"],["/日常/网络用语/index.html","58f10c40c840135b8a2cc1c48f00713f"],["/电影/香港电影/开心鬼系列/index.html","cc8872dedaaf3ff4d9e7851dfd8d623e"],["/电视剧/亮剑/晋西北铁三角/index.html","2d43740199d8f2fa5f7eae606e3cfff7"],["/电视剧/仙剑奇侠传系列/index.html","f125f83a5fdb28b8790f2f04976da342"],["/硬盘/硬盘分区结构/index.html","7f6c4140e8d345b984e05934c13cbfc4"],["/第九艺术/GamePlatform/Origin/Origin问题归纳/index.html","f40e49fd85f57ad2f789fa92d5f8f382"],["/第九艺术/GamePlatform/Steam/CSGO/CSGO/index.html","67de4fe4d94c14b45b2e9e1c7352b344"],["/第九艺术/GamePlatform/Steam/Steam中文支持/index.html","a9ab6460b94b666367c61f89ba531ce8"],["/第九艺术/GamePlatform/Steam/Steam问题归纳/index.html","95d7d610c644db0013607b33af2c73f9"],["/第九艺术/如何独立开发一款游戏/index.html","d94d5e05be2f7efb4ac13a281729053f"],["/面试题/2020年字节跳动面试题/index.html","56a30750fb2ef82e044250554a38fee8"]];
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




