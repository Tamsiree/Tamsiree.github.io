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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","b8a14d8e3c7aeae239d7ec64e86907e1"],["/Google/Chrome/Chrome上网助手/index.html","ab3c52c2d80043881c87772bbc7b2147"],["/Google/Chrome/Chrome使用技巧/index.html","0260a6fe92ad5be804c36246d739242f"],["/Google/Chrome/Chrome插件/index.html","8c844c03bf4e923302ed0e4a8acb359e"],["/Google/Chromium/Chromium/index.html","8de9f6f68bf7c4dfd757a3fd9db772b7"],["/Google/Google搜索技巧/index.html","23beff414f28fe01d843ef3df1d0615f"],["/Technical-Research/Android/RxTool/RxTool/index.html","7c976f7bf0c8c0217a9122ea0f034889"],["/Technical-Research/Android/RxTool/Wiki/RxTool-Wiki/index.html","29a4e6d756b78569bd6c187f2f28394e"],["/Technical-Research/Android/单元测试/Android单元测试/index.html","d9103a2f5e9b1035ce5877ab9e1c441f"],["/Technical-Research/CDN/CDN/index.html","8b4999e132667180cad7d8dd31a14c88"],["/Technical-Research/Git/Git/index.html","02aeefdb91dc6c10534ccb72566e3be8"],["/Technical-Research/GitHub/GitHub提速方案/index.html","19445c072c7a81d8876e7c8bf5582eba"],["/Technical-Research/Hexo/Hexo博客绑定域名/index.html","1666e936277771d06f4eea344a54c316"],["/Technical-Research/Hexo/Hexo博客美化/index.html","ed05114c7a1e23930136d1dbcee3f557"],["/Technical-Research/Hexo/Hexo插入Bilibili视频自适应/index.html","a78d9bdb50917df6b9beb800d88e13b2"],["/Technical-Research/Hexo/Hexo自定义网页/index.html","5abb6ce25b4bf71301f0eccd1939da52"],["/Technical-Research/Hexo/Hexo重新部署/index.html","a8c2ff7dfad0439c6144c67958853d08"],["/Technical-Research/Hexo/Hexo问题归纳/index.html","2add9de34fbb598f93c5fe5f469a6d23"],["/Technical-Research/Hexo/Hexo音乐/index.html","c819f09910daab5f3dd100cd7e56f4cd"],["/Technical-Research/Html/Html常用知识归纳/index.html","82545eeca826482be3b12857c0b3dbbc"],["/Technical-Research/Java/Java基础快速入门/index.html","60981c9877f45fded5f451f38298fed6"],["/Technical-Research/JavaScript/JavaScript常用效果/index.html","ef7d21ef8dca04bd995d3ebeb74ea2b5"],["/Technical-Research/Markdown/Emoji/Markdown内使用Emoji表情/index.html","10113808260ec637c67527018a0ec2da"],["/Technical-Research/Markdown/GFM/GFM语法/index.html","37207e02f81421a965558e60b5334758"],["/Technical-Research/Python/Pyhton-GUI网格列表控件/index.html","183daea7545c3b66a495e705aff4fdb3"],["/Technical-Research/Python/Python-Exercise/index.html","6871779829ee0c798d80ca0094d8b973"],["/Technical-Research/Python/Python问题归纳/index.html","e210eaa5726d9a0ad9657fb3dd8ba050"],["/Technical-Research/响应式编程/响应式编程的理解/index.html","164ba746f466201b06b2a5c960b9aa83"],["/Technical-Research/正则表达式/正则表达式/index.html","c452c7d3e7ef7214f67e9b9757748d5b"],["/Technical-Research/端口号/服务器常用端口/index.html","756ab4e57ac1cfc8440ced30e52b8950"],["/Tool/Development-Tool/AndroidStudio/AndroidStudio插件集合/index.html","0a41a6ff7c5d0ec66c57b06f6d477717"],["/Tool/Development-Tool/AndroidStudio/AndroidStudio问题归纳/index.html","48f96d439421e3f6c88ce1cef4ee4858"],["/Tool/Development-Tool/Pycharm/Pycharm激活码/index.html","ea5791b945a352679ec97f9e04dc198c"],["/Tool/Development-Tool/Unity3d/Unity3d许可证手动激活/index.html","2dffdc3cf690fd571a492591d09686b5"],["/Tool/Development-Tool/Unity3d/Unity3d问题归纳/index.html","9d59a14ad5e42c35c41a4fc8720743ac"],["/Tool/Development-Tool/Visual-Studio-Code/VisualStudioCode/index.html","ee8e6d441df540dde40a448df47aca6a"],["/Tool/Development-Tool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","59489e61915c652765cb1f45e0c296fd"],["/Tool/Development-Tool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","c8691b7abc5b2bdca65c92200c8c4f42"],["/Tool/Music/网易云音乐/index.html","48d706381e269e6ff227c412e217d546"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","53fd11a8557bac741d970531ba2cec38"],["/Tool/Windows/Software/VMware/VMware/index.html","160d230b9c9583220863dfbb1a62f2ba"],["/Tool/百宝袋/index.html","c28f29c87de4db192f69e330f774a8ff"],["/Windows/Software/Office-2019/Office2019激活/index.html","c86329048ee0e9582a613f7edef7714a"],["/about/index.html","1d6e2e1b1c5082a8550a6078201d4dbc"],["/archives/2013/10/index.html","0655692347d1ba175dce4de35e815666"],["/archives/2013/index.html","cf8ffc2047fb61267df33ea097142088"],["/archives/2016/09/index.html","e026f317b58a01101c9ab27c982c024f"],["/archives/2016/10/index.html","98a82fedf165a110effb88a295a5ee87"],["/archives/2016/11/index.html","d0b90d4728d59e2492fd38f2c5aeda08"],["/archives/2016/12/index.html","ecfbdb80c93916fb4b804c25580b319c"],["/archives/2016/index.html","1e785e2b22cc9d5a9d42fd6c3f47ab19"],["/archives/2017/03/index.html","4276df2730e4c87302509b0d95cd72c6"],["/archives/2017/06/index.html","18c4a8a619985b38a8bd1544b63619bf"],["/archives/2017/07/index.html","8749bc3ad87efa26a7c950de42a0f483"],["/archives/2017/09/index.html","ccc96223cb3fc2ab8a3fcf7f37c1cf6d"],["/archives/2017/10/index.html","b3b7da5dbef9aea8a0949ecd9b524291"],["/archives/2017/11/index.html","c89acd84e92e62462e7d4311f65ad716"],["/archives/2017/12/index.html","a5b801cfc0f6e3c1d3ee3b29a7285ad1"],["/archives/2017/index.html","91871ab09bb01605908b8edbe5f168a2"],["/archives/2018/04/index.html","e9c2745e3226a829753f1e17d4f5908e"],["/archives/2018/08/index.html","7fda7237a7e5dec1cab4ec179e24bd6e"],["/archives/2018/09/index.html","420a6991ecfef38b4df87e61b69dac0c"],["/archives/2018/10/index.html","06e18969e413db24b02f7ec45c7f6458"],["/archives/2018/11/index.html","317fb25b3d4ef4d463bf3a8f312fabaf"],["/archives/2018/12/index.html","06b3b1350d2b708b416d5fa14bc53fa8"],["/archives/2018/index.html","a20d2145b1c6e26ece5bd008922229e0"],["/archives/2019/01/index.html","04c8b87a9eeb50cc68fe13fbcbe1d3d5"],["/archives/2019/02/index.html","4f21ca38fa7b7b977a85f3212dcb254c"],["/archives/2019/03/index.html","1c202b9764f9bef1ae6bce71209b10c7"],["/archives/2019/04/index.html","bce4b701b4cc3dbb36ed60705550340e"],["/archives/2019/07/index.html","6d17aa3abaaaf67f6657bad1cbc698cc"],["/archives/2019/08/index.html","d64105d3822c4cf1dcae50f14933ad5a"],["/archives/2019/09/index.html","31fdff541a3d136af7b46e4aa6f924c6"],["/archives/2019/10/index.html","0528844c29bb9fe040f9b320ceeac7c4"],["/archives/2019/11/index.html","e73edc862f60d0cb3fdd551d0d663781"],["/archives/2019/index.html","b905dda1cc052385007ec3006c139c84"],["/archives/2019/page/2/index.html","4ce47aa7594ec2779fe3fdc4cfd699af"],["/archives/index.html","436d6afae7bf2c348b22c573837461e4"],["/archives/page/2/index.html","09604409f22bdcdcda5c1b0a49ee04af"],["/archives/page/3/index.html","c36ad046a3b76165f65bf8a2db99b9c6"],["/archives/page/4/index.html","c77a39c4b30334bb59910fb8f81f9661"],["/archives/page/5/index.html","9f9a9e143e19e763da7c8b9c9e08e50a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Game/GamePlatform/Origin/index.html","1dd0cbfeb0c83815095c1fc7c6c9cfe9"],["/categories/Game/GamePlatform/index.html","7167f32498783bdd94ba33c2ac3da325"],["/categories/Game/index.html","551a5fcacb918549d8cf2aac4189dca4"],["/categories/Google/Chrome/index.html","769d874f13f76833b7d21a3d2e4a0d24"],["/categories/Google/Chromium/index.html","8f038d6f940d49a54b4a35da9be5da14"],["/categories/Google/index.html","32811e527bce3bc9261d67311eaf6e27"],["/categories/Technical-Research/Android/RxTool/Wiki/index.html","da844635ff096e2eab0c5ab3adad7e39"],["/categories/Technical-Research/Android/RxTool/index.html","eac241ec473f9e973c1397d46e5744e6"],["/categories/Technical-Research/Android/index.html","9e092af6f3e44e7fbc317317c9db9c0b"],["/categories/Technical-Research/Android/单元测试/index.html","06027ae2394c5876f6376a498890f083"],["/categories/Technical-Research/CDN/index.html","358fc2fde8b491c81fdc5b00dda026f7"],["/categories/Technical-Research/Git/index.html","7f6b68f21429216e909409ab57b738b1"],["/categories/Technical-Research/GitHub/index.html","4c760a9805123c8689ce0df681c4e241"],["/categories/Technical-Research/Hexo/index.html","9b82f0b7ba2a9b9a460ea14db51f76e5"],["/categories/Technical-Research/Html/index.html","3b83313484341e4dbc65c3d21c3e02db"],["/categories/Technical-Research/Java/index.html","5c82412813f27159a68609a3cbde42ac"],["/categories/Technical-Research/JavaScript/index.html","0b3a3b44d3928d05519f32873365143f"],["/categories/Technical-Research/Markdown/Emoji/index.html","137d4f2cb85b55a557abb23919a5ad03"],["/categories/Technical-Research/Markdown/GFM/index.html","10842893ea4f18f0b01f426b5d8d76ac"],["/categories/Technical-Research/Markdown/index.html","c6ab9302f7d1d85f9b9959c836e81ac2"],["/categories/Technical-Research/Python/index.html","93600f0e229d365898da7082a85495f6"],["/categories/Technical-Research/index.html","8e8f0102ab343a75de3cdf1f60784d14"],["/categories/Technical-Research/响应式编程/index.html","fc583da35fca32a7e24fdf5ddb9867ee"],["/categories/Technical-Research/正则表达式/index.html","b06610f344f902a1257cf956714ff999"],["/categories/Technical-Research/端口号/index.html","399eea04d4524ac766137d9007011e62"],["/categories/Tool/Development-Tool/AndroidStudio/index.html","60c023accae7d16d7366324c932bf8a6"],["/categories/Tool/Development-Tool/Pycharm/index.html","0715e9bf6ad2e3fedeeebe64a5ae6b91"],["/categories/Tool/Development-Tool/Unity3d/index.html","79f0b4e190f9ce96988bb01d930eb873"],["/categories/Tool/Development-Tool/Visual-Studio-Code/index.html","5746e432ee75c9b4596f3af713538e5b"],["/categories/Tool/Development-Tool/VisualStudio/index.html","a434437afa172cd9abf699fcfd4d891f"],["/categories/Tool/Development-Tool/index.html","4f4a50f0d27f4dcc905b16026d870438"],["/categories/Tool/Music/index.html","ada7c4ac7769a628fb5d2e77fce57525"],["/categories/Tool/Windows/Software/UltraISO/index.html","a9e6c94ecd1fa103f5990cd586e0940d"],["/categories/Tool/Windows/Software/VMware/index.html","38a463563c494916002ce5bb761716a5"],["/categories/Tool/Windows/Software/index.html","9cfb498d9e8c0610cf7bea1eea34efcf"],["/categories/Tool/Windows/index.html","fff84ee47138d604d9440a6018477be3"],["/categories/Tool/index.html","7c460f68582ff6d50975cf0ab95508e1"],["/categories/Windows/Software/Office-2019/index.html","88b0a7d355166facd727194591e10a9d"],["/categories/Windows/Software/index.html","78e84f2356a598dff2c0ad73990be75f"],["/categories/Windows/index.html","10bb8118166b6d2ca076d1865d89e051"],["/categories/index.html","23c4068913f9a44b43b1eb7dfb810fce"],["/categories/产品设计/index.html","55e6cbd6ebdcb36169a25ad325f8c848"],["/categories/兴趣爱好/Guitar/index.html","5bcbea3859c93f48c0cda247d9a84ef0"],["/categories/兴趣爱好/index.html","7371460c31d5ee4ad2e3fb013a088bf9"],["/categories/兴趣爱好/个人日志/index.html","b6de742db4da3131113a6ee3b61d09ff"],["/categories/兴趣爱好/个人诗集/index.html","59aca2aa115f84a2b7a0404440843a6f"],["/categories/兴趣爱好/摄影/index.html","57e0545c401961e3ca5d294a937f9d8a"],["/categories/动漫/index.html","6bbe587f2d0d0cd7326600fd2fb30b11"],["/categories/动漫/宫崎骏/index.html","e1ff19abf0027ea1320720dc326fd3c9"],["/categories/学习/Math/MathJax/index.html","775883046892279a56b9786ef387fb38"],["/categories/学习/Math/index.html","559bccd84ff9c8d1c9c56a9924f74915"],["/categories/学习/Math/线性代数/index.html","ac72f64709dd5f27c4b47b5e139ee2da"],["/categories/学习/Math/高等数学/index.html","b69f556edefdc5aac5ec16fa6e228c1c"],["/categories/学习/index.html","ee48cb884208baaed053b66442952440"],["/categories/学习/思想政治/index.html","9a1de18c8b1ad47b293b4e819aa76adb"],["/categories/学习/英语/index.html","65ab6adfce2f3294c0feced66c82c671"],["/categories/学习/记忆方法/index.html","5fe75a38c2044893c0434e9aeaed59ec"],["/categories/学习/软件工程/index.html","a4dc9174b138f61831c5eb080260e1db"],["/categories/学习/软件工程/伪代码/index.html","88678e693351b1d3a3cff2b0642a2bcf"],["/categories/操作系统/Linux/Manjaro/index.html","34ac1e2978e70fe76db6135ba312fe19"],["/categories/操作系统/Linux/index.html","4d0292d266ec27412fe6ff9d4008de77"],["/categories/操作系统/Windows/Software/index.html","73e2f9b8a0a3f5566129eb017aa0cd9d"],["/categories/操作系统/Windows/index.html","6053bb6963069024d7ba8856b5237185"],["/categories/操作系统/index.html","c0baccb039284dfc9735b771aa367056"],["/categories/日常/index.html","0bb186a338de40b78f21f883dceea18d"],["/categories/电影/index.html","3539a3a871b9a39dcd868efc0435f93e"],["/categories/电影/香港电影/index.html","72e9996517f6eaf2cd399822af7f3c70"],["/categories/电视剧/index.html","3174f868e99a9dbc6a72b09275861a28"],["/categories/电视剧/亮剑/index.html","afdc25b12f0b06a5a14af68310003b14"],["/categories/硬盘/index.html","7569efc26e58180b67188cc3db4c9bbb"],["/categories/第九艺术/GamePlatform/Steam/CSGO/index.html","b961d6041d50410bc8967586aac3b399"],["/categories/第九艺术/GamePlatform/Steam/index.html","dbcd45c827ae2eb4b7a9aed14e3dfc7a"],["/categories/第九艺术/GamePlatform/index.html","3a0a91d464e51f214acf45914bfeda2f"],["/categories/第九艺术/index.html","6b3bc29ebe05326f83d98d2fd139d2c2"],["/categories/面试题/index.html","695c427539e5eac4ae6f638d0c6754c2"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","49b72ee3de82eaa386eb6bbd3cd3d8e2"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","34d5b5a90b7179861cbad49adbf2bc32"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","3c7944557c9ae3159f80334db05b86a2"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","71fc78a822aa5990eaf83c8c250ccc50"],["/movie/index.html","ce015f3a77884c3595d098852b5391a5"],["/music/index.html","446dd3eec65c0c95383998a9e3f3608a"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","5e727ef949ab667af5ca4a1afdbf3b4f"],["/page/3/index.html","7df2625989a06afb8d6dfbb04f219c00"],["/page/4/index.html","6204990441a29d6ebb122b5ec7df40e2"],["/page/5/index.html","146f01ce39e636b0bd705727915de5c3"],["/page/6/index.html","801122305b544d85122d5c3dd76a61b2"],["/page/7/index.html","6260a37f7e94262a2bedc8829321a3b9"],["/page/8/index.html","6bcbd6ae56dd592a87c6b2f7ed6f2063"],["/page/9/index.html","dfc9f037cc94c17b939020ef9020ab26"],["/tags/Android/index.html","4bcaf688b766594fc6cd63dd46f7d565"],["/tags/AndroidStudio/index.html","10a2a79efc96358e551f6ad3077d887b"],["/tags/CDN/index.html","d293b1c6aa8bd91c34c4305c35d3de26"],["/tags/CSGO/index.html","df045117b7f4f043018dfa3352425c72"],["/tags/Chrome/index.html","0847c3619ab6d969d41c06693f2fcaf1"],["/tags/Chromium/index.html","6b204dbf3df0c78f382272ceab5b70f4"],["/tags/Development-Tool/index.html","a1303a57df1278aa20c51be21a7afbe1"],["/tags/Emoji/index.html","8fcb3f887498cc2e4e959699828218cb"],["/tags/GFM/index.html","5ad00551cded208a809774172d3d3711"],["/tags/Git/index.html","3e2f73569e5bae8071342ab12cd6d924"],["/tags/GitHub/index.html","d2baf136f939244b889a3652f234082d"],["/tags/Google/index.html","f09eb524a935edaa1d58896479cc9bb7"],["/tags/Guitar/index.html","690c93c68da902ec681e66bbf0ea42f8"],["/tags/Hexo/index.html","af1454ce0a40dc6d2cc620ba5f7bf562"],["/tags/Html/index.html","7efde845e77567ebdd2682ac78e2512f"],["/tags/Java/index.html","2a1f2631b609005dbc2f3c2ab755e6ff"],["/tags/JavaScript/index.html","dce86c463a92926bf9b8d6613bf42b19"],["/tags/Linux/index.html","552e0e600bdbb5cf63816af790018cd6"],["/tags/Manjaro/index.html","d687cf0d17f3e480f5da9450b9097c9b"],["/tags/Markdown/index.html","4d3d73c982b4a06823f1779d406db253"],["/tags/Math/index.html","02eb35f55743e4d3cf4f683b65758171"],["/tags/MathJax/index.html","e459fa9135158ed0637518f6cce8eaea"],["/tags/Music/index.html","481936e47c2c5b146123c6acf11d98d7"],["/tags/Origin/index.html","2fef97bc548a232fe8410a729b02875e"],["/tags/PseudoCode/index.html","116e6b72977b29d126b7a2d357eb1270"],["/tags/Pycharm/index.html","204e619cc4fe290f4c1fe62a8c391413"],["/tags/Python/index.html","ba73d3a4e35c524ac56d4b68e11d720e"],["/tags/RxTool/index.html","ace7e68d7c6b840e77f9efa91563cf58"],["/tags/Software/index.html","3627695fc9249321ade8f593e80d9426"],["/tags/Steam/index.html","0b1dc35728c13fb2b251ec29006ce37f"],["/tags/Tool/index.html","ec418d4cc0fc3dbdfce8c56c515643e8"],["/tags/UI设计/index.html","382234c4a75a09b4f93e3d3457360f06"],["/tags/UltraISO/index.html","20bccb848f06bc2eb9d5ed7906476cfc"],["/tags/Unity3d/index.html","491da5b5f14140fc3542b7c04251e282"],["/tags/VMware/index.html","7e73b253adfa35f954110b0e882a6b97"],["/tags/Visual-Studio-Code/index.html","0cbe87e9f1c21e93049397a23048d8d5"],["/tags/VisualStudio/index.html","bd8008069592f8ee8f8ae2a8a662aab9"],["/tags/Windows/index.html","dae9fbe7dc45245c8e67eda9a6211e95"],["/tags/index.html","11c96a8e1856769975a2d265bedbb8ad"],["/tags/个人日志/index.html","238927824c0ffb4dc85ddb396a081941"],["/tags/个人诗集/index.html","0ba51427c1dc81b840636bd331c6dcfe"],["/tags/产品设计/index.html","f9d6afb2a418a75f940520323fd0d3f4"],["/tags/亮剑/index.html","14a9aa62cc3c3af04eaa5dd11b8c3e4e"],["/tags/仙剑奇侠传系列/index.html","bbc4c49b8ed81a5a75784c6e7d9e6f6d"],["/tags/伪代码/index.html","e9ee81cf625ad7392bbb3f25bf0ace97"],["/tags/兴趣爱好/index.html","59ac24453a464059291054680f559732"],["/tags/动漫/index.html","7cfe1d6d00f0d1d6951d7ed682ca7f2a"],["/tags/千与千寻/index.html","a6bff73eb4c2ef1c61447d58ca09f706"],["/tags/单元测试/index.html","b7d62d877a8a53b776f2e4edbe00b6b6"],["/tags/响应式编程/index.html","f4aa943b2f6037f803e74c6657ec1968"],["/tags/学习/index.html","c1a5cb076aacca02a33380b12d041a87"],["/tags/宫崎骏/index.html","be483c66fb7e184869aaabfd68b434c4"],["/tags/小王子/index.html","dfbb35be28e25fd25a4cb955ad049a39"],["/tags/开心鬼系列/index.html","ecb3ca87a92f56925136dd9807b5e0a6"],["/tags/思想政治/index.html","7652e47564176f36310fc362777d1221"],["/tags/捐赠名单/index.html","3eb5321e601f7df61138be5dd10f3da4"],["/tags/摄影/index.html","7953bbc66089c8e4ca85356b661484c7"],["/tags/操作系统/index.html","345055e0224b3f1e4dca799c70b5ecee"],["/tags/日常/index.html","ad730228fb4471e3067ad7225fbd6264"],["/tags/正则表达式/index.html","033758d4111cecb8d0c554b9474e95b1"],["/tags/用户界面设计/index.html","0b5eb5eee1535c0f250ea8e345995626"],["/tags/电影/index.html","c705e7c7e1b8e748c4e908bdafc8c4c6"],["/tags/电视剧/index.html","cdd677f438af8b5fb6d8f061730c9f63"],["/tags/硬盘/index.html","a745d2951ac6d69984233767106c1781"],["/tags/端口号/index.html","b8514d8bca0d09fa5b0d27789f1a7030"],["/tags/第九艺术/index.html","2f92ed5938f14b9d46cfd3376443b785"],["/tags/线性代数/index.html","3bd4b728815f22924968f9c9396ee5f3"],["/tags/英语/index.html","72b1ebf840c180271414eef05fbbe9e4"],["/tags/记忆方法/index.html","80ee76646599f0e90345d47f98391d38"],["/tags/软件工程/index.html","23d56f8be8c6373b739f7b2ba4a3cf67"],["/tags/香港电影/index.html","99a0258d447996346e7839159cc938ee"],["/tags/高等数学/index.html","e809d7c3d3a7da25012661d439b062ff"],["/产品设计/设计用户界面的注意事项/index.html","934272f7383fc3a6a7760b89ed737146"],["/兴趣爱好/Guitar/吉他入门/index.html","8c4f53301e83a658a2f6a46e958903e5"],["/兴趣爱好/个人日志/芦江曲/index.html","65d8f6c78d9da366ae124b6390de11c7"],["/兴趣爱好/个人诗集/闲情逸致/index.html","fa8018c0369072b8ef3b563b3752da46"],["/兴趣爱好/摄影/摄影入门手册/index.html","02ea070bb5a8368896335dc64e515c96"],["/动漫/关于《小王子》电影里的共鸣/index.html","58cd040b168da364e3107245ba6a3edc"],["/动漫/宫崎骏/千与千寻/index.html","ae902c43728683e0817b6d9472a0010b"],["/学习/Math/MathJax/MathJax引擎数学符号说明/index.html","9f459cf1e51a95fecf9328f275d11aac"],["/学习/Math/线性代数/线性代数公式/index.html","1187d8e6a12c846d1bcbd66c1bb9b06f"],["/学习/Math/线性代数/线性代数知识点总结/index.html","3cb66367488193d4ef9742c63e47e262"],["/学习/Math/高等数学/高等数学知识点/index.html","a07329e716bfb7dade0855d9bc626538"],["/学习/思想政治/考研思想政治理论知识/index.html","ccd450653be7c1947e3285e7fdac3ad1"],["/学习/英语/考研英语作文/index.html","d3c8edde924836e822338657ea041d10"],["/学习/英语/考研英语词根/index.html","bd93af87863dba8cd597b9efc9cfc2cb"],["/学习/记忆方法/费曼技巧/index.html","d382f15f5f77f198039b9943fd90120f"],["/学习/软件工程/中南大学软件工程考研题型/index.html","9d8c7063d91c73f46a70eb6d8cac1b9b"],["/学习/软件工程/伪代码/伪代码/index.html","ea51335ea14f6ebbb49837a6e619a3d2"],["/学习/软件工程/软件工程基础知识/index.html","9e993b362208d293f33b0f294da7aa98"],["/操作系统/Linux/Linux分区管理工具/index.html","ef4de870ed17eaffc260e0f8dbbf678e"],["/操作系统/Linux/Linux的首次邂逅/index.html","2cb9d253dacec0b18573a153358e1278"],["/操作系统/Linux/Manjaro/Manjaro/index.html","7e5a2ccf9ec08bec2f4808f01e4b4ae7"],["/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","a139d5d8c71951373e5d46587933332d"],["/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","e9e4126b0f9eb3a69e6a000f790210ad"],["/操作系统/Linux/Manjaro/Manjaro常用软件/index.html","1cc170c21f08a2d3bf1ce343e1650099"],["/操作系统/Linux/Manjaro/Manjaro美化/index.html","7b15a634c133baef1a2ad18f150ff08a"],["/操作系统/Windows/Software/Windows常用软件/index.html","a81bdffa2a2b94951259218ad580de82"],["/日常/Contributor/index.html","d4d56373bca7b44c577f7bb09d9b6718"],["/日常/Memorandum/index.html","296c754600adf917edb0494c5f9528d5"],["/日常/生活小常识/index.html","b39a5a74ab1b2e9cfa27184c9245925d"],["/日常/网络用语/index.html","e5f3e6004e82571806d5ccb16f357054"],["/电影/香港电影/开心鬼系列/index.html","2d53811b3dea2f0461b4049b8d9db599"],["/电视剧/亮剑/晋西北铁三角/index.html","f77b29df2be73a20ffacd139bddc157b"],["/电视剧/仙剑奇侠传系列/index.html","d146a34280341bce8c55d4a6e2c3dac8"],["/硬盘/硬盘分区结构/index.html","5fb9aa8f63fa2db09a13418f505576b6"],["/第九艺术/GamePlatform/Steam/CSGO/CSGO/index.html","202a770ed90c9735c8530503532b0b1e"],["/第九艺术/GamePlatform/Steam/Steam中文支持/index.html","5fbb85180c06757e1e100be137141a8d"],["/第九艺术/GamePlatform/Steam/Steam问题归纳/index.html","ca8ad1cbc3e25b96d8988c3e45a7a023"],["/第九艺术/如何独立开发一款游戏/index.html","e026a17991e5d9680fa96cb54e1f772e"],["/面试题/2020年字节跳动面试题/index.html","90fcdac13287d7f470755be968ac71e0"]];
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




