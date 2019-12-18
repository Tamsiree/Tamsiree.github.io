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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","b8a14d8e3c7aeae239d7ec64e86907e1"],["/Google/Chrome/Chrome上网助手/index.html","ab3c52c2d80043881c87772bbc7b2147"],["/Google/Chrome/Chrome使用技巧/index.html","0260a6fe92ad5be804c36246d739242f"],["/Google/Chrome/Chrome插件/index.html","8c844c03bf4e923302ed0e4a8acb359e"],["/Google/Chromium/Chromium/index.html","8de9f6f68bf7c4dfd757a3fd9db772b7"],["/Google/Google搜索技巧/index.html","23beff414f28fe01d843ef3df1d0615f"],["/Technical-Research/Android/RxTool/RxTool/index.html","3fdfb0f2a9650f181a11eb6d21d92bd1"],["/Technical-Research/Android/RxTool/Wiki/RxTool-Wiki/index.html","361143f38cc0bca8c70cee40cea47358"],["/Technical-Research/Android/单元测试/Android单元测试/index.html","668ea24bc96bd4e2d874b16d7d633544"],["/Technical-Research/CDN/CDN/index.html","8b4999e132667180cad7d8dd31a14c88"],["/Technical-Research/Git/Git/index.html","7f09c578e9f1714a1aaa2f67fb642bab"],["/Technical-Research/GitHub/GitHub提速方案/index.html","19445c072c7a81d8876e7c8bf5582eba"],["/Technical-Research/Hexo/Hexo博客绑定域名/index.html","a481202b9e148aa1bf6ef30ea41125e1"],["/Technical-Research/Hexo/Hexo博客美化/index.html","31c5e3e330363ebc4a96b5d2505009ce"],["/Technical-Research/Hexo/Hexo插入Bilibili视频自适应/index.html","a78d9bdb50917df6b9beb800d88e13b2"],["/Technical-Research/Hexo/Hexo自定义网页/index.html","5abb6ce25b4bf71301f0eccd1939da52"],["/Technical-Research/Hexo/Hexo重新部署/index.html","a8c2ff7dfad0439c6144c67958853d08"],["/Technical-Research/Hexo/Hexo问题归纳/index.html","2add9de34fbb598f93c5fe5f469a6d23"],["/Technical-Research/Hexo/Hexo音乐/index.html","c819f09910daab5f3dd100cd7e56f4cd"],["/Technical-Research/Html/Html常用知识归纳/index.html","82545eeca826482be3b12857c0b3dbbc"],["/Technical-Research/Java/Java基础快速入门/index.html","004e1f67d13842e432beaa09f542b851"],["/Technical-Research/JavaScript/JavaScript常用效果/index.html","ef7d21ef8dca04bd995d3ebeb74ea2b5"],["/Technical-Research/Markdown/Emoji/Markdown内使用Emoji表情/index.html","10113808260ec637c67527018a0ec2da"],["/Technical-Research/Markdown/GFM/GFM语法/index.html","37207e02f81421a965558e60b5334758"],["/Technical-Research/Python/Pyhton-GUI网格列表控件/index.html","143d7e6e569d07d261c708e998a5f418"],["/Technical-Research/Python/Python-Exercise/index.html","a15b486863dc813ff02463a1d99bd26a"],["/Technical-Research/Python/Python问题归纳/index.html","574bc2924173b55f00f3efbeb9b5dc2c"],["/Technical-Research/响应式编程/响应式编程的理解/index.html","164ba746f466201b06b2a5c960b9aa83"],["/Technical-Research/正则表达式/正则表达式/index.html","c452c7d3e7ef7214f67e9b9757748d5b"],["/Technical-Research/端口号/服务器常用端口/index.html","756ab4e57ac1cfc8440ced30e52b8950"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio插件集合/index.html","b5884498a9c994dc2cc908113a5870aa"],["/Tool/DevelopmentTool/AndroidStudio/AndroidStudio问题归纳/index.html","abb49a5520ad1703a92d93f45ebe5ec1"],["/Tool/DevelopmentTool/Pycharm/Pycharm激活码/index.html","b9f3d4fc0dacc2203872c036f0338605"],["/Tool/DevelopmentTool/Unity3d/Unity3d许可证手动激活/index.html","87b8ea48b282ef3d4c50815c5ae6bda6"],["/Tool/DevelopmentTool/Unity3d/Unity3d问题归纳/index.html","e406bf3986d4af5c7b03334e26d59c07"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","156b26f7745de3331245dbffdf88ff04"],["/Tool/DevelopmentTool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","a46c77b17c75475e0a6880d28928f712"],["/Tool/DevelopmentTool/VisualStudioCode/VisualStudioCode/index.html","cf53ad03e70691b86588b082eabed04f"],["/Tool/Music/网易云音乐/index.html","1f0fe98002f60106dfb3f1ac59a5693a"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","2ecabc4c4b654b1ec4b906eeb6b50819"],["/Tool/Windows/Software/VMware/VMware/index.html","37473f77fd8cfb98cf065d142c1b970e"],["/Tool/百宝袋/index.html","b5bf5c37a083a113f6216b45c22cfb97"],["/Windows/Software/Office-2019/Office2019激活/index.html","c86329048ee0e9582a613f7edef7714a"],["/about/index.html","ad15234e47097307676737bfcc394b3f"],["/archives/2013/10/index.html","962ba9598c2325b9340133b3286e89f7"],["/archives/2013/index.html","f362275761e69562fb4142fbf314c4a2"],["/archives/2016/09/index.html","6e4d08c0798ea773d467e3e8b9d54487"],["/archives/2016/10/index.html","ae6d3e40042a503fd8f077b19a6cab70"],["/archives/2016/11/index.html","77f8fd2056800656f9644ac0fda5512b"],["/archives/2016/12/index.html","c951c4b7d99235c7eed237a0d3166845"],["/archives/2016/index.html","b6bd695beab12fde95e291f694f26ba6"],["/archives/2017/03/index.html","2e2a9e5688763b60078c5f3536792c23"],["/archives/2017/06/index.html","5d6ad2646d9233cd747574c6574564ab"],["/archives/2017/07/index.html","5a3093dbd981184b431c7763f29e9181"],["/archives/2017/09/index.html","3923553a8b266d2ee3368594bc75aa0c"],["/archives/2017/10/index.html","6eddf317f8e4ee0551a699d54a241fc5"],["/archives/2017/11/index.html","aff8804635544f40606d34a5bed057b2"],["/archives/2017/12/index.html","e3a3f2f5a4310fa48d21dad04f416882"],["/archives/2017/index.html","de07d2a70fa5682113619bcb5d768bd0"],["/archives/2018/04/index.html","db45b23cb72e44dcca5394f1f202f5b0"],["/archives/2018/08/index.html","7a7060cf7437382eef6e444ed990872d"],["/archives/2018/09/index.html","0b2d5fa0732b00ea9755e3a83ff609ec"],["/archives/2018/10/index.html","b0458423c3af565371d217bb9f943948"],["/archives/2018/11/index.html","0daf5a03968392ef87787b6cb8e5e52a"],["/archives/2018/12/index.html","099da027f2d4f70560d6eeb0657a10cf"],["/archives/2018/index.html","2c3d4ebe837842fd5e5e3d12ba518895"],["/archives/2019/01/index.html","e0c867ccaf322bb65418323b48c4fba5"],["/archives/2019/02/index.html","44505ab6853ba9c7e0a8baa99fcd308e"],["/archives/2019/03/index.html","e210f7fa22fd78c2674b0400a6ce9098"],["/archives/2019/04/index.html","aa91118a7b5e143df8f3cbe78105bc2b"],["/archives/2019/07/index.html","52abf63d35b3207489b46c893080e789"],["/archives/2019/08/index.html","ae39ee1d6497ba2efd35f96058da5311"],["/archives/2019/09/index.html","7b427f7b3f992e6180dc32d059f557f9"],["/archives/2019/10/index.html","0dfeacaa9a697f740ba888b9d36caa51"],["/archives/2019/11/index.html","fe6e1a732f046067c5a8f2384071e183"],["/archives/2019/index.html","b7e3398dd1d07827543f87142ec2230f"],["/archives/2019/page/2/index.html","ef73d2ce5b03d188d9f6a2295953ce60"],["/archives/index.html","e470aed64c5b15e2aee3b420e17a3811"],["/archives/page/2/index.html","3650681dce7d0afb00a0ecb0f8f72e82"],["/archives/page/3/index.html","2892263bf79af0994aefa49fe2b9f0b3"],["/archives/page/4/index.html","6e4391c8f1953c82a6bdabdee49c96b6"],["/archives/page/5/index.html","4cae79c5062130debdf07a043b08fa11"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Game/GamePlatform/Origin/index.html","9e75212184ed9211fa0cd3bcc52dc67d"],["/categories/Game/GamePlatform/index.html","12ed74bbb13c6d9c07dbb1462828d1ac"],["/categories/Game/index.html","5fa4833fbf8895d5ce0b6920431c33ed"],["/categories/Google/Chrome/index.html","370513993d619f7bfbe923b3a8f1742a"],["/categories/Google/Chromium/index.html","f10cea331728ac7cace3368118cff232"],["/categories/Google/index.html","65e0f2fb6926989457a865ebf60c726c"],["/categories/Technical-Research/Android/RxTool/Wiki/index.html","ec6a4d3a1dfb03bfb088d2325bff553d"],["/categories/Technical-Research/Android/RxTool/index.html","3f6a1c48c4e3a97b4a2b11e31119dfe6"],["/categories/Technical-Research/Android/index.html","859b52007158fc70e1fab814d29b5007"],["/categories/Technical-Research/Android/单元测试/index.html","842158206208ff38ed98d46486ffdb5b"],["/categories/Technical-Research/CDN/index.html","1611c88dfe13356e70a34025f2fc7616"],["/categories/Technical-Research/Git/index.html","7cb4553e19a2a3c1421bfe679907c001"],["/categories/Technical-Research/GitHub/index.html","e4857bc324ddde15e1f7cd535fbd2b3f"],["/categories/Technical-Research/Hexo/index.html","f3c8b558294d605d0b59779f61ba4126"],["/categories/Technical-Research/Html/index.html","e46081c46d00ad24bd17023e9dd90008"],["/categories/Technical-Research/Java/index.html","8049f958fea54783a0d994e2bbe94f78"],["/categories/Technical-Research/JavaScript/index.html","424a79d28e2afad0d5e6b8d76beff04e"],["/categories/Technical-Research/Markdown/Emoji/index.html","89930aad3f9df6b831ef01fd7250f961"],["/categories/Technical-Research/Markdown/GFM/index.html","8e0c2a60ac88914c815a38866062d695"],["/categories/Technical-Research/Markdown/index.html","c68e04708bf4091958251a042cebb33c"],["/categories/Technical-Research/Python/index.html","b535ff510ef7a38ef93a77b5ce88167a"],["/categories/Technical-Research/index.html","f58b4793cc708b3c8be249d50d55f044"],["/categories/Technical-Research/响应式编程/index.html","c9d55f5ebeae5a4a954df7f807992138"],["/categories/Technical-Research/正则表达式/index.html","85a42d8652fa6f6c44421bee38e8f564"],["/categories/Technical-Research/端口号/index.html","933c1909e6ec0b7496ae37cec709307a"],["/categories/Tool/DevelopmentTool/AndroidStudio/index.html","508d3629300184da8ba9da5395f7dd6b"],["/categories/Tool/DevelopmentTool/Pycharm/index.html","f175ad8be0a72acd6c97ffc1175d6f10"],["/categories/Tool/DevelopmentTool/Unity3d/index.html","14742649250ddb8da48bc94baa352a3f"],["/categories/Tool/DevelopmentTool/VisualStudio/index.html","be75b58feed79efd7bdad2a47ea1ac7c"],["/categories/Tool/DevelopmentTool/VisualStudioCode/index.html","794ab5acb7e7626bd840627e70f25d54"],["/categories/Tool/DevelopmentTool/index.html","ff82c71454f78bb85143c91d27092b4d"],["/categories/Tool/Music/index.html","73aaac8a8ac1b78ca52559d4b550e779"],["/categories/Tool/Windows/Software/UltraISO/index.html","2903dfdcec6db4ffb58b010ac4206e6a"],["/categories/Tool/Windows/Software/VMware/index.html","e004d84771befe96a3a1649af43c2131"],["/categories/Tool/Windows/Software/index.html","cf932a0d7d2c8d931960a0806f748c04"],["/categories/Tool/Windows/index.html","bffd112a509eb48a34048de2eda6c051"],["/categories/Tool/index.html","85ed78272ce8c560bbdc043ff68ae3f7"],["/categories/Windows/Software/Office-2019/index.html","d448e40fea90c9ccd36d9a57f2c30bc1"],["/categories/Windows/Software/index.html","fd2228150ff217614de9c669f437af3a"],["/categories/Windows/index.html","5c5fedaf72f8f643b1df1f9764420d9b"],["/categories/index.html","29745d9b77de4094a416de0b5968d575"],["/categories/产品设计/index.html","05f475556309f4453504e860e73f6e47"],["/categories/兴趣爱好/Guitar/index.html","60d65cde4be54bf12ad81349f142ea36"],["/categories/兴趣爱好/index.html","171e7bdd608f1b0e70708fa92c2dab5a"],["/categories/兴趣爱好/个人日志/index.html","a4ab1d4b7d45d0648f93e8437ba46598"],["/categories/兴趣爱好/个人诗集/index.html","388c56dbb2f670b97b9b32edd26ac2e4"],["/categories/兴趣爱好/摄影/index.html","e8c0ecd1f9b2413594d148706850a7fd"],["/categories/动漫/index.html","a752c136790b7bd7b335f069352b13f7"],["/categories/动漫/宫崎骏/index.html","0e28afefe2ccec21b0d102aa5ea891c3"],["/categories/学习/Math/MathJax/index.html","afd7f22432494dc933e5c0e5e3d1a795"],["/categories/学习/Math/index.html","3df3b1befc70abea3cc409de95d6bd3e"],["/categories/学习/Math/线性代数/index.html","ce1af03627cbd63590b9488295bf5f9f"],["/categories/学习/Math/高等数学/index.html","c892c9c5e96cb7cf9d16c9d39cbfa8b3"],["/categories/学习/index.html","f3cdf4cfda595e9080959178d8d419d8"],["/categories/学习/思想政治/index.html","e597996be03f5e3081a0991f870cd7b9"],["/categories/学习/英语/index.html","ba0ed18328f1608b65b6d6f5ca94c23a"],["/categories/学习/记忆方法/index.html","cac6073ac73532a044caf50cdf9f59d4"],["/categories/学习/软件工程/index.html","d1fbaa38bfcdeea1d8a253714a938104"],["/categories/学习/软件工程/伪代码/index.html","9e9f7f400b0016965bfa33daaeae609a"],["/categories/操作系统/Linux/Manjaro/index.html","ac0641139f0e19a2b2818709fe289e57"],["/categories/操作系统/Linux/index.html","7116e19a45a64b4ce6734be761a70ec8"],["/categories/操作系统/Windows/Software/index.html","9429d62129ff800e9b82c30e884ee0dc"],["/categories/操作系统/Windows/index.html","e2b7b3f79dbeb09e4250005a65682846"],["/categories/操作系统/index.html","aa21db9ebf41d46c1250b217926da514"],["/categories/日常/index.html","de7c8fedfd70799c14016ff60393c266"],["/categories/电影/index.html","41c25a336dcf9fe2fa93fcd4e61e84af"],["/categories/电影/香港电影/index.html","3285be68e42f5f874e57473cf5a49c7e"],["/categories/电视剧/index.html","c16d45d8a5a06daac30a92082d71660e"],["/categories/电视剧/亮剑/index.html","cbd3ace3135a7d34ade8fc82becdb35b"],["/categories/硬盘/index.html","dfa7cef7a75962f6ac7faea56c90e6bd"],["/categories/第九艺术/GamePlatform/Steam/CSGO/index.html","b1680c3c784082634734c5cec39f76aa"],["/categories/第九艺术/GamePlatform/Steam/index.html","310c376340996975c9d11f585922c6a2"],["/categories/第九艺术/GamePlatform/index.html","088a82a26cb1b889f2c52bfce03c2613"],["/categories/第九艺术/index.html","af48690a90eb28fc2181d84cf7531b24"],["/categories/面试题/index.html","1a8310c4961b489b53495b00be98d71e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d54b4a95c3d13e7db168d74d128866d9"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","37231b18eaf1f6488e6da20d722d0ba9"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","49239c826b23b34678a6dcaa7081d189"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","11afb4ba6ce6dd26423de58fee21202f"],["/movie/index.html","305b915104b0e9982de1d2dce6593017"],["/music/index.html","bb88654dfbc9b208179dfe627cbd2b9c"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","66695cffbba1dc0e55a2973d938606ce"],["/page/3/index.html","75d6246b366d34f919741ffe8e4f515a"],["/page/4/index.html","d97d070824a392fdf6f031b867451be6"],["/page/5/index.html","5eaf9d63829fad425316e8d38361bc31"],["/page/6/index.html","fca94c17139e87819355288d51fd2d36"],["/page/7/index.html","08203561c86850e13b1d6c9e75979905"],["/page/8/index.html","6bc67a39c60007c6adffe2192e5001d5"],["/page/9/index.html","274d5e2047072996b4778548ed8e1949"],["/tags/Android/index.html","64199381758a9d635fb952302c99d160"],["/tags/AndroidStudio/index.html","76cc5dbd0323b10d3270031a80969af8"],["/tags/CDN/index.html","9274e721d539e4b540e79206df7062b2"],["/tags/CSGO/index.html","a789d3b4747c2189661efb605fb98567"],["/tags/Chrome/index.html","4e18778f8dab113271dc515687444dff"],["/tags/Chromium/index.html","a342ef5c2f51704a78570f272a349d72"],["/tags/DevelopmentTool/index.html","1811b82906cf47c7793f0978fc490983"],["/tags/Emoji/index.html","f4edc90789d269a7a5a818a3cae60526"],["/tags/GFM/index.html","e27c721b3980f54d9a525f8e1f149c7f"],["/tags/Git/index.html","e2697774ca372112e06f8e869fb8f6be"],["/tags/GitHub/index.html","93fe9c3e352bc49535e6bdf0bf1a12b0"],["/tags/Google/index.html","14dd8bcc65dea0207ba565aeed3cb83d"],["/tags/Guitar/index.html","79a0037cd667d0f6cbef576282547e6b"],["/tags/Hexo/index.html","c60daff9ce37c5a0adde76ea9de1057a"],["/tags/Html/index.html","2274c99a0108f04f80ab7cf5704aa5d7"],["/tags/Java/index.html","1b8a8c7529a478b942249a1cc60390a3"],["/tags/JavaScript/index.html","b06715ec08a978f397a6fa4c5dcf16e9"],["/tags/Linux/index.html","5169b6a303213d324acc93f6868c8b1a"],["/tags/Manjaro/index.html","54f55083ba997412e5f67a20d55a8f08"],["/tags/Markdown/index.html","9c4c4600e52b42488ab29b2c3881bd2f"],["/tags/Math/index.html","53b23c24ba955a0bdca855d3090a3abe"],["/tags/MathJax/index.html","3045b898bfc6363673331a09e32c52e5"],["/tags/Music/index.html","8815e60c8ec9be7e882436387304e751"],["/tags/Origin/index.html","bafad9179a1ae0f252b34b369662757f"],["/tags/PseudoCode/index.html","aef8a715c21ecaf7cac92c6ffce38ad9"],["/tags/Pycharm/index.html","27844b58bc2cad2974dc15484e700223"],["/tags/Python/index.html","cd15dfac643f0530f14495fa5c36d173"],["/tags/RxTool/index.html","a7acf63ef2e3f39820fe7288e0eff3ed"],["/tags/Software/index.html","7d9fbdb7a85465917e469d71092d900e"],["/tags/Steam/index.html","bc2bc0026aa5d4d9961e29e3c65c21b3"],["/tags/Tool/index.html","ef01f81519ba69bec798d7407cefb3ff"],["/tags/UI设计/index.html","275012dfaa950c0c155f0a3bf19e79b6"],["/tags/UltraISO/index.html","cfc991ea5bd4059b69ab121f8bd7ec97"],["/tags/Unity3d/index.html","13cf590386564291b2b93667c44ef684"],["/tags/VMware/index.html","26c342d39d550139beddc878f7434d73"],["/tags/VisualStudio/index.html","481270c08a50f8d58fc91229b68555c4"],["/tags/VisualStudioCode/index.html","7b009a6b6603b5ef00b4ba433a8c1401"],["/tags/Windows/index.html","7d254fe4b78351af21f97b792b40f6b2"],["/tags/index.html","c4c3a1dffa085d64bc3083ececa5204f"],["/tags/个人日志/index.html","99175a2f320651031375542608ab0d9b"],["/tags/个人诗集/index.html","0dfdfa55fd118b8f4cd5494e712f750c"],["/tags/产品设计/index.html","7220063264d74c4271d8d7469aa1ee09"],["/tags/亮剑/index.html","541f6a345dd1b8d0645dd94cbe92deb0"],["/tags/仙剑奇侠传系列/index.html","7c8cf2017475695f1a9fce296548d380"],["/tags/伪代码/index.html","f9b095733a7196a97fed8a4dc412e220"],["/tags/兴趣爱好/index.html","f61cdff7dbd658b083e87848a423d96b"],["/tags/动漫/index.html","7d76037612dfc143e9c22fdd0a145430"],["/tags/千与千寻/index.html","baebe0ddda4fd0e9a7b815143d49fe60"],["/tags/单元测试/index.html","638246b183aebefd197a978847e8036a"],["/tags/响应式编程/index.html","a633f1d91847a9c5892268b53c712229"],["/tags/学习/index.html","71be65be6e1e27259a5138e49be6a65a"],["/tags/宫崎骏/index.html","6828f2de8366483618da742a7e16ae34"],["/tags/小王子/index.html","0bae0d66e5d86c295f8431771192dec7"],["/tags/开心鬼系列/index.html","3f17368c3f55c1433aa46a55a208085c"],["/tags/思想政治/index.html","0727f8e3b8d5ca516c1851cdf7111b17"],["/tags/捐赠名单/index.html","3aeb4a4612808afabc5a35261bfafd2c"],["/tags/摄影/index.html","65904ab29148ab46472f4f00d703038e"],["/tags/操作系统/index.html","976193d5f0623d4ff003faecbbcc5bb0"],["/tags/日常/index.html","4ce3954727db17c29f6008a55145d9cd"],["/tags/正则表达式/index.html","5b70b82e25a093754e8adb565b5179ff"],["/tags/用户界面设计/index.html","1fe9162868208bdc29fd68e7a3839645"],["/tags/电影/index.html","26b5624ff01b07249e57ad4618c27f86"],["/tags/电视剧/index.html","49a0d92fd8d70135f2e7c90bdd9b85f4"],["/tags/硬盘/index.html","10df7cdb037bbe583679bf733c4db394"],["/tags/端口号/index.html","1365589a54f7a5348176d75faf26e6b7"],["/tags/第九艺术/index.html","a0fd14043d78e756d865ace7181f2261"],["/tags/线性代数/index.html","c7e944a05192dd2c1b31ae360ec04616"],["/tags/英语/index.html","f686aedc893c8dca3230b82f5de1c666"],["/tags/记忆方法/index.html","a9a43e2500b30f2ccb51400513941ab1"],["/tags/软件工程/index.html","240dcb896d319626f9932f7576d99148"],["/tags/香港电影/index.html","279d63268f7659a2a9dc4dd29bbb924c"],["/tags/高等数学/index.html","db56cbfe9d31b62de0e9b1a51da0ea2e"],["/产品设计/设计用户界面的注意事项/index.html","14dc9d703a494b1636682d925c8f4410"],["/兴趣爱好/Guitar/吉他入门/index.html","8c4f53301e83a658a2f6a46e958903e5"],["/兴趣爱好/个人日志/芦江曲/index.html","65d8f6c78d9da366ae124b6390de11c7"],["/兴趣爱好/个人诗集/闲情逸致/index.html","fa8018c0369072b8ef3b563b3752da46"],["/兴趣爱好/摄影/摄影入门手册/index.html","02ea070bb5a8368896335dc64e515c96"],["/动漫/关于《小王子》电影里的共鸣/index.html","58cd040b168da364e3107245ba6a3edc"],["/动漫/宫崎骏/千与千寻/index.html","228ad007cbd17477cf18089c976244fe"],["/学习/Math/MathJax/MathJax引擎数学符号说明/index.html","9f459cf1e51a95fecf9328f275d11aac"],["/学习/Math/线性代数/线性代数公式/index.html","bec21835f1ab98b816b5f39868e6e8b9"],["/学习/Math/线性代数/线性代数知识点总结/index.html","3cb66367488193d4ef9742c63e47e262"],["/学习/Math/高等数学/高等数学知识点/index.html","a07329e716bfb7dade0855d9bc626538"],["/学习/思想政治/考研思想政治理论知识/index.html","ccd450653be7c1947e3285e7fdac3ad1"],["/学习/英语/考研英语作文/index.html","d3c8edde924836e822338657ea041d10"],["/学习/英语/考研英语词根/index.html","bd93af87863dba8cd597b9efc9cfc2cb"],["/学习/记忆方法/费曼技巧/index.html","d382f15f5f77f198039b9943fd90120f"],["/学习/软件工程/中南大学软件工程考研题型/index.html","9d8c7063d91c73f46a70eb6d8cac1b9b"],["/学习/软件工程/伪代码/伪代码/index.html","ea51335ea14f6ebbb49837a6e619a3d2"],["/学习/软件工程/软件工程基础知识/index.html","9e993b362208d293f33b0f294da7aa98"],["/操作系统/Linux/Linux分区管理工具/index.html","ef4de870ed17eaffc260e0f8dbbf678e"],["/操作系统/Linux/Linux的首次邂逅/index.html","2cb9d253dacec0b18573a153358e1278"],["/操作系统/Linux/Manjaro/Manjaro/index.html","7e5a2ccf9ec08bec2f4808f01e4b4ae7"],["/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","2a04f0ceca5811f95d0efa62afc6c71c"],["/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","e9e4126b0f9eb3a69e6a000f790210ad"],["/操作系统/Linux/Manjaro/Manjaro常用软件/index.html","1cc170c21f08a2d3bf1ce343e1650099"],["/操作系统/Linux/Manjaro/Manjaro美化/index.html","7b15a634c133baef1a2ad18f150ff08a"],["/操作系统/Windows/Software/Windows常用软件/index.html","a81bdffa2a2b94951259218ad580de82"],["/日常/Contributor/index.html","d4d56373bca7b44c577f7bb09d9b6718"],["/日常/Memorandum/index.html","296c754600adf917edb0494c5f9528d5"],["/日常/生活小常识/index.html","b39a5a74ab1b2e9cfa27184c9245925d"],["/日常/网络用语/index.html","ef59cac195e2fe321dfe881b62af7d59"],["/电影/香港电影/开心鬼系列/index.html","2d53811b3dea2f0461b4049b8d9db599"],["/电视剧/亮剑/晋西北铁三角/index.html","f77b29df2be73a20ffacd139bddc157b"],["/电视剧/仙剑奇侠传系列/index.html","c6e0e607f947c2452e5ecd8aebdabc99"],["/硬盘/硬盘分区结构/index.html","5fb9aa8f63fa2db09a13418f505576b6"],["/第九艺术/GamePlatform/Steam/CSGO/CSGO/index.html","202a770ed90c9735c8530503532b0b1e"],["/第九艺术/GamePlatform/Steam/Steam中文支持/index.html","5fbb85180c06757e1e100be137141a8d"],["/第九艺术/GamePlatform/Steam/Steam问题归纳/index.html","ca8ad1cbc3e25b96d8988c3e45a7a023"],["/第九艺术/如何独立开发一款游戏/index.html","e026a17991e5d9680fa96cb54e1f772e"],["/面试题/2020年字节跳动面试题/index.html","8a45b1bbfa3c23e50bccf78e9fc0639d"]];
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




