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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","b8a14d8e3c7aeae239d7ec64e86907e1"],["/Google/Chrome/Chrome上网助手/index.html","ab3c52c2d80043881c87772bbc7b2147"],["/Google/Chrome/Chrome使用技巧/index.html","0260a6fe92ad5be804c36246d739242f"],["/Google/Chrome/Chrome插件/index.html","8c844c03bf4e923302ed0e4a8acb359e"],["/Google/Chromium/Chromium/index.html","8de9f6f68bf7c4dfd757a3fd9db772b7"],["/Google/Google搜索技巧/index.html","23beff414f28fe01d843ef3df1d0615f"],["/Study/Math/MathJax/MathJax引擎数学符号说明/index.html","a9262dcc40a327fcfde0617e567e9176"],["/Study/Math/线性代数/线性代数公式/index.html","5a36ef87b406114d92e151ad87d682b7"],["/Study/Math/线性代数/线性代数知识点总结/index.html","86fc31244a2d4c50dd32f3d2df2b4ac4"],["/Study/Math/高等数学/高等数学知识点/index.html","593e10f5e8c9b43ed791f45e2da84ce5"],["/Study/Memorizing/费曼技巧/index.html","310e873cbdbd3f5abc5a4a33a8bb6902"],["/Study/思想政治/考研思想政治理论知识/index.html","aac1b1ed72854b1ecb1b5d86c9be94c3"],["/Study/英语/考研英语作文/index.html","cee5f0e46e7a578154c0ef99b8e1fd32"],["/Study/英语/考研英语词根/index.html","8e1f478817f8fe673347b35d823ae6c7"],["/Study/软件工程/中南大学软件工程考研题型/index.html","9687248426148da187860d96440d7418"],["/Study/软件工程/伪代码/伪代码/index.html","0cb48740cc33c2745eef1bd6e18f5608"],["/Study/软件工程/软件工程基础知识/index.html","d1ac9fa771a494cff2c83d8950c71414"],["/Technical-Research/Android/RxTool/RxTool/index.html","3fdfb0f2a9650f181a11eb6d21d92bd1"],["/Technical-Research/Android/RxTool/Wiki/RxTool-Wiki/index.html","361143f38cc0bca8c70cee40cea47358"],["/Technical-Research/Android/单元测试/Android单元测试/index.html","668ea24bc96bd4e2d874b16d7d633544"],["/Technical-Research/CDN/CDN/index.html","8b4999e132667180cad7d8dd31a14c88"],["/Technical-Research/Git/Git/index.html","7f09c578e9f1714a1aaa2f67fb642bab"],["/Technical-Research/GitHub/GitHub提速方案/index.html","046060a644b47c2109ccda5ceaad41bc"],["/Technical-Research/Hexo/Hexo博客绑定域名/index.html","a481202b9e148aa1bf6ef30ea41125e1"],["/Technical-Research/Hexo/Hexo博客美化/index.html","31c5e3e330363ebc4a96b5d2505009ce"],["/Technical-Research/Hexo/Hexo插入Bilibili视频自适应/index.html","a78d9bdb50917df6b9beb800d88e13b2"],["/Technical-Research/Hexo/Hexo自定义网页/index.html","5abb6ce25b4bf71301f0eccd1939da52"],["/Technical-Research/Hexo/Hexo重新部署/index.html","fd05a0f27489a9925b0eb4ef754df980"],["/Technical-Research/Hexo/Hexo问题归纳/index.html","2add9de34fbb598f93c5fe5f469a6d23"],["/Technical-Research/Hexo/Hexo音乐/index.html","045395095d2fe465ccbaa6a9c50be03e"],["/Technical-Research/Html/Html常用知识归纳/index.html","82545eeca826482be3b12857c0b3dbbc"],["/Technical-Research/Java/Java基础快速入门/index.html","004e1f67d13842e432beaa09f542b851"],["/Technical-Research/JavaScript/JavaScript常用效果/index.html","ef7d21ef8dca04bd995d3ebeb74ea2b5"],["/Technical-Research/Markdown/Emoji/Markdown内使用Emoji表情/index.html","10113808260ec637c67527018a0ec2da"],["/Technical-Research/Markdown/GFM/GFM语法/index.html","37207e02f81421a965558e60b5334758"],["/Technical-Research/Python/Pyhton-GUI网格列表控件/index.html","143d7e6e569d07d261c708e998a5f418"],["/Technical-Research/Python/Python-Exercise/index.html","82aea2469a7955662e77dd496cec642e"],["/Technical-Research/Python/Python问题归纳/index.html","574bc2924173b55f00f3efbeb9b5dc2c"],["/Technical-Research/响应式编程/响应式编程的理解/index.html","164ba746f466201b06b2a5c960b9aa83"],["/Technical-Research/正则表达式/正则表达式/index.html","c452c7d3e7ef7214f67e9b9757748d5b"],["/Technical-Research/端口号/服务器常用端口/index.html","756ab4e57ac1cfc8440ced30e52b8950"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","b5884498a9c994dc2cc908113a5870aa"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","abb49a5520ad1703a92d93f45ebe5ec1"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","b9f3d4fc0dacc2203872c036f0338605"],["/Tool/DevelopmentTool/Unity3d/Unity3d许可证手动激活/index.html","87b8ea48b282ef3d4c50815c5ae6bda6"],["/Tool/DevelopmentTool/Unity3d/Unity3d问题归纳/index.html","9f31054e5167ce11a1d67c2a19285f11"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","156b26f7745de3331245dbffdf88ff04"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","a46c77b17c75475e0a6880d28928f712"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","cf53ad03e70691b86588b082eabed04f"],["/Tool/Music/网易云音乐/index.html","1f0fe98002f60106dfb3f1ac59a5693a"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","2ecabc4c4b654b1ec4b906eeb6b50819"],["/Tool/Windows/Software/VMware/VMware/index.html","37473f77fd8cfb98cf065d142c1b970e"],["/Tool/百宝袋/index.html","f17610c0b8fa3ee97d76faac0c198022"],["/Windows/Software/Office-2019/Office2019激活/index.html","c86329048ee0e9582a613f7edef7714a"],["/about/index.html","45a1b7889e0ad53becebc84885f0a203"],["/archives/2013/10/index.html","2c76837948ba2fd3e3ffdeeb2a1dc360"],["/archives/2013/index.html","335f706f9648a02bf22bb58cba383de5"],["/archives/2016/09/index.html","791f31427cf6773a60be1545e096edd4"],["/archives/2016/10/index.html","f3b42bf990af1802b09cfcf958bc8385"],["/archives/2016/11/index.html","e4ba3019d6245982061090c47ede8059"],["/archives/2016/12/index.html","edd95dc3e5e5fa654334cde39aec4cec"],["/archives/2016/index.html","6cf19a207ec72425d37666ecd74ab773"],["/archives/2017/03/index.html","b31bbf14e3b47d00a3bbc8b64542f2f8"],["/archives/2017/06/index.html","734fc9a9ba74a11cfb4f8da7c3f476c4"],["/archives/2017/07/index.html","30155e9dceb0062571ceee0652c1aec8"],["/archives/2017/09/index.html","ba1cf0c9c58bd27001fea08e710485a4"],["/archives/2017/10/index.html","a7b58e77dec690f4d8853b194a6a7400"],["/archives/2017/11/index.html","26fad96365b6e5790cdc59b20579f1ab"],["/archives/2017/12/index.html","6c36275b955aa7b287ec537dfc82dbc4"],["/archives/2017/index.html","eae635497e9ab2e6403d70111a01f8c9"],["/archives/2018/04/index.html","d11948d2e9cf7a084c573f71466fd1c1"],["/archives/2018/08/index.html","3dae95d97a47ca7dae49b71d6fbfa020"],["/archives/2018/09/index.html","21992ffb1eead1703c371a72ec7c5a5c"],["/archives/2018/10/index.html","02e49f4d23cf839d73b492c53968ae3c"],["/archives/2018/11/index.html","5fc2d50c217ad674b33dd8b0845b87f8"],["/archives/2018/12/index.html","700e8f6428254725a61ea96bbbc42c30"],["/archives/2018/index.html","4e46777d943472304b84bba903a688b7"],["/archives/2019/01/index.html","a630e7ac2d6d9ed8c42e8de566f5b154"],["/archives/2019/02/index.html","c346898af3ae2882807a0b432f183425"],["/archives/2019/03/index.html","2c8e4dd96362bd7303313be5669ac9c2"],["/archives/2019/04/index.html","ef5dc60a09f682b354a079abd9952067"],["/archives/2019/07/index.html","f0053c081e42ffd7f0d42e15ae42ddff"],["/archives/2019/08/index.html","b7e5d65069f8e1012a124ec41f2909e8"],["/archives/2019/09/index.html","f54cd01066131b968576818ee2e5140c"],["/archives/2019/10/index.html","cd4dae6b7b250748bbd4a942d5d777cb"],["/archives/2019/11/index.html","a4995dc13bd6bf2439fe18175923de2a"],["/archives/2019/index.html","fc6cb6e4e57286040645dde3154fce04"],["/archives/2019/page/2/index.html","99a2bbdbaabff5545cb3123829f9202a"],["/archives/index.html","27050190f9e1d4e2cb76bd8f33c1b50e"],["/archives/page/2/index.html","9f34964a1339e9ceca6c50689155fbcc"],["/archives/page/3/index.html","f4ef394a670de99f3c080e32dcf42b38"],["/archives/page/4/index.html","936f7bef563d7747e729265d4b7f1b50"],["/archives/page/5/index.html","752b25e048d8daf80f7fa9f1c25a1b51"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Game/GamePlatform/Origin/index.html","1acf467a7f76aacfe88d2da934874a43"],["/categories/Game/GamePlatform/index.html","a620647962d65614fd1e2ed666a2cdb2"],["/categories/Game/index.html","8eeac080fcb94dd0f352de6d4ef52250"],["/categories/Google/Chrome/index.html","c4465db16245cce34d7a6ee442f26867"],["/categories/Google/Chromium/index.html","c5b1c73234fecb91fd01a46ad046abd9"],["/categories/Google/index.html","fda41c33c78d16a1bfe1e9836f908e3c"],["/categories/Study/Math/MathJax/index.html","ef3b635013ff2a8f5b5f6984b0346f7f"],["/categories/Study/Math/index.html","e69f836c5bd863bda0aafbd1646ee63a"],["/categories/Study/Math/线性代数/index.html","c73bedfd09fc3ad35e056c1fde149db5"],["/categories/Study/Math/高等数学/index.html","13c9ac6e33ab365e3af7ba9269acdd0d"],["/categories/Study/Memorizing/index.html","1d00ac3310640f1fd35a4a543a2e5bd5"],["/categories/Study/index.html","a92bbae1bb2987b647d6211350fc77a4"],["/categories/Study/思想政治/index.html","d8d98e714196057bca53d100fa8a73d7"],["/categories/Study/英语/index.html","2a18e20e357fbb612e500fdf882e3474"],["/categories/Study/软件工程/index.html","07f4d14bfd7f6742f8ac186eb97e2c92"],["/categories/Study/软件工程/伪代码/index.html","6ba672e559418a5e0c321cdf4b15aa26"],["/categories/Technical-Research/Android/RxTool/Wiki/index.html","47be47be550d6f073550763ba6dfa0b3"],["/categories/Technical-Research/Android/RxTool/index.html","3d4cf189efc9e4bb8d78b82ee6876fe8"],["/categories/Technical-Research/Android/index.html","b1a0562fb82999fcb70f079308382c9e"],["/categories/Technical-Research/Android/单元测试/index.html","dac8b77fcc91c77cbb46827e17a74704"],["/categories/Technical-Research/CDN/index.html","9b7dafe8c0bc948fc4a945bbfe40bb11"],["/categories/Technical-Research/Git/index.html","d674edee5f65818e8cbea6dfe934e31f"],["/categories/Technical-Research/GitHub/index.html","ed5fa2d246a9efe0a91a7deca6cb936c"],["/categories/Technical-Research/Hexo/index.html","40bb77d4d8c6dcac5b17a3ca77227df0"],["/categories/Technical-Research/Html/index.html","a84c8b79a309c644e87b0130e72e3cd6"],["/categories/Technical-Research/Java/index.html","2d2c6d274cbcdfd4af96b4360d63e96d"],["/categories/Technical-Research/JavaScript/index.html","ffa916609d72cc5dd535d37342e82eff"],["/categories/Technical-Research/Markdown/Emoji/index.html","bc690ec67d0cfec56d1e2ea9a38da6c9"],["/categories/Technical-Research/Markdown/GFM/index.html","4daf78adda445ea29cd8d0ec1bf2bb25"],["/categories/Technical-Research/Markdown/index.html","4a5e31a4631e2afdaa9ce44c9b49e578"],["/categories/Technical-Research/Python/index.html","8ca2bda13dda0312e25145a3cb480e4c"],["/categories/Technical-Research/index.html","18fee2b0e4e49828affb0bf6e9c65c8c"],["/categories/Technical-Research/响应式编程/index.html","767363e7e0a09e6e1474535aab89ed9e"],["/categories/Technical-Research/正则表达式/index.html","243b0f9e58ff8e89ecd9ee94ea1a4c11"],["/categories/Technical-Research/端口号/index.html","a0da414190d37217ee6c3e170ad0ddc3"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","2870d930f315805f025c3e072531b7ee"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","6171fcab8cd880903f66535ac5b5073f"],["/categories/Tool/DevelopmentTool/Unity3d/index.html","440e8daa60b50aa9723f2c6460d2f46f"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","1ce13acf79d7c6bfa97eaabd4e1a1e54"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","934883888bbbe123c425eee35d884b95"],["/categories/Tool/DevelopmentTool/index.html","b7589dcae35c7d9996a7e4d3c78b89e1"],["/categories/Tool/Music/index.html","adc75668008add0190ea49be31341694"],["/categories/Tool/Windows/Software/UltraISO/index.html","40b8dd634029f723e1b31f60eeee24f5"],["/categories/Tool/Windows/Software/VMware/index.html","fb7483792d29931626eb76137d13d4d1"],["/categories/Tool/Windows/Software/index.html","5debd931f04492f3cec70da5a4c67100"],["/categories/Tool/Windows/index.html","ebc093d4063cc67ea752989445d61a6b"],["/categories/Tool/index.html","b9b2a06eb0c45cbf19c15d01b27d64b9"],["/categories/Windows/Software/Office-2019/index.html","dd3c8f0f477a98f37d42e868ddd498df"],["/categories/Windows/Software/index.html","de8e7d3d2101a2f6d8dc10ecdb3e1030"],["/categories/Windows/index.html","fe1eadb7f46bf9e2175e1412aa578780"],["/categories/index.html","b525cff18ad6a048f19916c045b4b089"],["/categories/产品设计/index.html","7d4c16488a921906cfcda8529f859a12"],["/categories/兴趣爱好/Guitar/index.html","d36db808a33be2f6867f5c783d6d02d6"],["/categories/兴趣爱好/index.html","d03cad40556e55064ceade3c7d600e36"],["/categories/兴趣爱好/个人日志/index.html","82f517a32c4b9c691f2c3280c0d08248"],["/categories/兴趣爱好/个人诗集/index.html","338a22f5527f992ca680deb611633f90"],["/categories/兴趣爱好/摄影/index.html","547a176bf4656fbb73f19ed184b72ec0"],["/categories/动漫/index.html","813f3b822443145211136923a494e7e8"],["/categories/动漫/宫崎骏/index.html","0d62a5e3300dc7da73f3713c30545f1b"],["/categories/操作系统/Linux/Manjaro/index.html","74664e75e9320fce9167f9c4045538d4"],["/categories/操作系统/Linux/index.html","556b69d5b0f021a0b86801278104edca"],["/categories/操作系统/Windows/Software/index.html","aa96afb1d7a55d0dbc2b0ba616656f99"],["/categories/操作系统/Windows/index.html","d2f023c2fefbb4ef1cf2c5a056af85b3"],["/categories/操作系统/index.html","a21f4f32516149b37c58f78f832043b4"],["/categories/日常/index.html","b4499a9f3606e5a619379e49612651e9"],["/categories/电影/index.html","df7b4e6e561593bdc5647e696b84423a"],["/categories/电影/香港电影/index.html","4dc295e002f4756c3fadc919a02638b6"],["/categories/电视剧/index.html","c60d497ef6b2ba0d0ee6329d39c66883"],["/categories/电视剧/亮剑/index.html","eda0e69a99dc8167217e736326b99b48"],["/categories/硬盘/index.html","6b92a15800e119839ac6bac04e6770e0"],["/categories/第九艺术/GamePlatform/Steam/CSGO/index.html","71fc5dd9b29a30befabe6dea6a9182a8"],["/categories/第九艺术/GamePlatform/Steam/index.html","79fe9d18389fd733f6437e499e0d9daf"],["/categories/第九艺术/GamePlatform/index.html","0aed7180e9323e5b3ad240b88594ef76"],["/categories/第九艺术/index.html","bdefe30ecbfeef1d3a81d291e446e0e3"],["/categories/面试题/index.html","3a6da7f74e886d5ad49ef1076e85d76b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0ece755e37a1dbca4118b5eb20c680ec"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","2641813ff40d7ca97e8905381aacffae"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","b6b43eae8e51a32e11d0240e62bee97f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","0cdffa0ea2b6671b5b7d40ab4d9e2dc2"],["/movie/index.html","a2c2d4ce0acd6bfb820af0812a3b4424"],["/music/index.html","8afb65b64007e0b727067b2882ce78ed"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","a606ec3692b17ed51d163432d82af244"],["/page/3/index.html","403d970a3fae349da295bc3792379008"],["/page/4/index.html","c80c07b71c092b7b9be832718850f1be"],["/page/5/index.html","5f50bbc408ab58cade88c06a440f9d9a"],["/page/6/index.html","47efb87579f99e5f088fb4d2e7a13dc9"],["/page/7/index.html","f00db15605e6ab3f71671f9b8fc395c3"],["/page/8/index.html","0c2cd0318e0a68f584acbeec5c953e5d"],["/page/9/index.html","c78be9ca34f722b8a672e139193b2dcb"],["/tags/Android/index.html","80f74bdc8e1b2be484241155fb02fd3e"],["/tags/AndroidStudio/index.html","10ca26cba5d62932d5e07dbb5ad6a804"],["/tags/CDN/index.html","225a3d58874347cb7cc7983d14a6b38b"],["/tags/CSGO/index.html","c0a048b40d8646f0fa969f830ba7e1fa"],["/tags/Chrome/index.html","0338bbb61a7d8c5a384dbe998f986ebb"],["/tags/Chromium/index.html","84c0d8080a452763ee0c3f69d306d6a4"],["/tags/DevelopmentTool/index.html","3e8e6f187ba28424f0fea219240817fc"],["/tags/Emoji/index.html","d6f8f1c0e99055d87faf05055b0fc700"],["/tags/GFM/index.html","b3f2e2d2ed0c4bdf87ca3c023cdf526b"],["/tags/Git/index.html","e5dab59f201275c766ddc9f1a9a6ef58"],["/tags/GitHub/index.html","cc05fb06eda18cd889859fe603c29894"],["/tags/Google/index.html","f0df8ea62c426505605b2050db631a2a"],["/tags/Guitar/index.html","4375858bfa1576a5da46d6f99547919f"],["/tags/Hexo/index.html","ae57bdf7b6f990b446b942efb769abf0"],["/tags/Html/index.html","e58a05bd478dbfb64f0a1bb2c79eb572"],["/tags/Java/index.html","cace1142ec8d7f326a9e465650367761"],["/tags/JavaScript/index.html","09669aed17b119ce7fc0369d3d9eadc2"],["/tags/Linux/index.html","9d6a492b9a7693a2ad818ad5be4456c0"],["/tags/Manjaro/index.html","b9ac9b7d33c45550fcb00469dfe84892"],["/tags/Markdown/index.html","a1844fe6974d0dfa1ce9714e4d72c315"],["/tags/Math/index.html","342b7d414dcce594aea72c1bd10cc1d8"],["/tags/MathJax/index.html","da29e741371297efd4a210f29a264dc5"],["/tags/Memorizing/index.html","9d7d621ab9bf8eda1ac2b5aa55515368"],["/tags/Music/index.html","980970cc3f2273226e02ae7705b57b85"],["/tags/Origin/index.html","5a4e7e4301a140adf1684bafd148bd40"],["/tags/PseudoCode/index.html","91196b2bda40852bb76e2d9b5f728d69"],["/tags/Pycharm/index.html","ad15045aa73c4fae7b1818ad16cbe295"],["/tags/Python/index.html","ea88c795328918071517c7554cee947e"],["/tags/RxTool/index.html","bdb473a930d8df8a1c4acede687d070f"],["/tags/Software/index.html","bf7ec75ccbc9f0baaece2879ea9f312f"],["/tags/Steam/index.html","8fd4a2046f49920e38cb7d67ddeef906"],["/tags/Study/index.html","c435f0c32308ebcc1a83738020d98a13"],["/tags/Tool/index.html","5b744a8a0f0371f135751839fab3389e"],["/tags/UI设计/index.html","d328c535f98a36c1f51f0f694ae18035"],["/tags/UltraISO/index.html","541b60605685694da714848a94a07574"],["/tags/Unity3d/index.html","b89b263f36e85407e6371ef995bf1312"],["/tags/VMware/index.html","6ba8d44af651a1536cf8c0ec19473c8c"],["/tags/VisualStudio/index.html","4d94c41caf1809b8fb7177c454c83058"],["/tags/VisualStudioCode/index.html","af3fa26b454fdc4932cde85df1417b80"],["/tags/Windows/index.html","095f8a29832ea57522130624005bb478"],["/tags/index.html","9e2175cb243b3f92ca9f65369ea447a5"],["/tags/个人日志/index.html","3e504b4e9a548c368ff9e0dc27dbb532"],["/tags/个人诗集/index.html","3954556c6ef7b0f36349d299951d256c"],["/tags/产品设计/index.html","e4cc5db447544aa712b47aaeb8290923"],["/tags/亮剑/index.html","e5a022354b316b5405e1fe8e6506d133"],["/tags/仙剑奇侠传系列/index.html","209df6c99fe9dfdee24fcf4aceddb769"],["/tags/伪代码/index.html","d3429214fd423cc4134b34e91e98e45a"],["/tags/兴趣爱好/index.html","71f8e1c702cc7f248fd8b10c92586df5"],["/tags/动漫/index.html","4da5ffca981e1a3c7e3257ca8f6103ca"],["/tags/千与千寻/index.html","2b22ba5cd81c1a9b5c2630e7b356679c"],["/tags/单元测试/index.html","2e3eee1049bbc585232a26efd062cbb8"],["/tags/响应式编程/index.html","db5c4e477b7ec64156026b4b1884c036"],["/tags/宫崎骏/index.html","971a11539231ad490732dae0c0b03c67"],["/tags/小王子/index.html","0995a701f7829c2edfe89ea35ea9a425"],["/tags/开心鬼系列/index.html","56f997a5d5ff29f400b1821a303dfb1f"],["/tags/思想政治/index.html","bca67b957d5b40e07f9c350c8ae463bb"],["/tags/捐赠名单/index.html","3a6e24c159315527a3035debf920e7c9"],["/tags/摄影/index.html","1622cbabc50100262fcef61f93fe50b7"],["/tags/操作系统/index.html","f074a7cff4d4b8c880282881ae8a8a8a"],["/tags/日常/index.html","a33e63552fb2bf66e1c9ce7b91156d2c"],["/tags/正则表达式/index.html","cd3238a7c30a55103f203a541fbf48aa"],["/tags/用户界面设计/index.html","a5a6aa73fa839efa12f5e06bf75232f0"],["/tags/电影/index.html","4663f00cd5ffa6012e727aaab1d14bb5"],["/tags/电视剧/index.html","2911a1512d776a1bc2245252a76cac8a"],["/tags/硬盘/index.html","2f5a587feff64259d8d4cab6e2d4e24d"],["/tags/端口号/index.html","24007aa516b9b6293b02327f59c10dd8"],["/tags/第九艺术/index.html","f6f425b7f7cc9355c554b4c3d404e3fd"],["/tags/线性代数/index.html","df512a0d6e23f7dc93d9825459c6b99b"],["/tags/英语/index.html","1059b15c097f1a03f3746e992b390275"],["/tags/软件工程/index.html","07c9dc5e6987e26eab83c9a8b2818ca9"],["/tags/香港电影/index.html","697f679169c0249b1460bd7a0ac9d4df"],["/tags/高等数学/index.html","e22e018267d76c584814e70abc34ef02"],["/产品设计/设计用户界面的注意事项/index.html","14dc9d703a494b1636682d925c8f4410"],["/兴趣爱好/Guitar/吉他入门/index.html","8c4f53301e83a658a2f6a46e958903e5"],["/兴趣爱好/个人日志/芦江曲/index.html","65d8f6c78d9da366ae124b6390de11c7"],["/兴趣爱好/个人诗集/闲情逸致/index.html","fa8018c0369072b8ef3b563b3752da46"],["/兴趣爱好/摄影/摄影入门手册/index.html","02ea070bb5a8368896335dc64e515c96"],["/动漫/关于《小王子》电影里的共鸣/index.html","62ea734600a012e8fcf83f2285be0fda"],["/动漫/宫崎骏/千与千寻/index.html","228ad007cbd17477cf18089c976244fe"],["/操作系统/Linux/Linux分区管理工具/index.html","ced3f434416565a0771ce2d05dc1196e"],["/操作系统/Linux/Linux的首次邂逅/index.html","2cb9d253dacec0b18573a153358e1278"],["/操作系统/Linux/Manjaro/Manjaro/index.html","7e5a2ccf9ec08bec2f4808f01e4b4ae7"],["/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","2a04f0ceca5811f95d0efa62afc6c71c"],["/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","1778ad7301e6cba7cadedeb364c155c5"],["/操作系统/Linux/Manjaro/Manjaro常用软件/index.html","1cc170c21f08a2d3bf1ce343e1650099"],["/操作系统/Linux/Manjaro/Manjaro美化/index.html","40fbb4d266e3638ee82d82957f2034a4"],["/操作系统/Windows/Software/Windows常用软件/index.html","a81bdffa2a2b94951259218ad580de82"],["/日常/Contributor/index.html","d4d56373bca7b44c577f7bb09d9b6718"],["/日常/Memorandum/index.html","e957e1c77529fc5a75b0736f0668e0fe"],["/日常/生活小常识/index.html","69513697e3755f9fd9fc66e765ef36f7"],["/日常/网络用语/index.html","ef59cac195e2fe321dfe881b62af7d59"],["/电影/香港电影/开心鬼系列/index.html","2d53811b3dea2f0461b4049b8d9db599"],["/电视剧/亮剑/晋西北铁三角/index.html","f77b29df2be73a20ffacd139bddc157b"],["/电视剧/仙剑奇侠传系列/index.html","c6e0e607f947c2452e5ecd8aebdabc99"],["/硬盘/硬盘分区结构/index.html","5fb9aa8f63fa2db09a13418f505576b6"],["/第九艺术/GamePlatform/Steam/CSGO/CSGO/index.html","b3400b004208ee2e0eba33061a43b795"],["/第九艺术/GamePlatform/Steam/Steam中文支持/index.html","01b6362a73db1bd069e57ed5a7060c79"],["/第九艺术/GamePlatform/Steam/Steam问题归纳/index.html","3393c964882f70e2744b37a5ec1be46c"],["/第九艺术/如何独立开发一款游戏/index.html","e026a17991e5d9680fa96cb54e1f772e"],["/面试题/2020年字节跳动面试题/index.html","8a45b1bbfa3c23e50bccf78e9fc0639d"]];
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




