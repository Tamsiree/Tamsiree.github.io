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

var precacheConfig = [["/404.html","b8d738cbf073d2a0eeb6af445efa80da"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","414eaa31285512b230b64524d0893ba4"],["/Google/Chrome/Chrome上网助手/index.html","e137df7a10ef9d7e02eff257ec8a1d49"],["/Google/Chrome/Chrome使用技巧/index.html","eb8bbdf0192f3d2001b01a09d3895a0e"],["/Google/Chrome/Chrome插件/index.html","e03c97e146232c53bcbdf1bc93b57795"],["/Google/Chromium/Chromium/index.html","88cb3eec35039b4a1cb12662dbac084d"],["/Google/Google搜索技巧/index.html","a91fb714c8f8d805e04154f176c26c60"],["/Technical-Research/Android/RxTool/RxTool/index.html","75c07da419b3b1b78f7a450e92695e7b"],["/Technical-Research/Android/RxTool/Wiki/RxTool-Wiki/index.html","9c3defa462504d69480fc02f228cff25"],["/Technical-Research/Android/单元测试/Android单元测试/index.html","415e053443c2e36eea204ebcb521f892"],["/Technical-Research/CDN/CDN/index.html","fa2c5bf5388d27e3adaa5b36da248e89"],["/Technical-Research/Git/Git/index.html","d89d84f25a13758fcd06cec67c2b8d59"],["/Technical-Research/GitHub/GitHub提速方案/index.html","138a0f8194059addd8b52dcd993c2996"],["/Technical-Research/Hexo/Hexo博客绑定域名/index.html","2319cdddeb8d411068bc6d461dfda558"],["/Technical-Research/Hexo/Hexo博客美化/index.html","21807ffc22cb141f9965cec657d2b028"],["/Technical-Research/Hexo/Hexo插入Bilibili视频自适应/index.html","08aa9f7389118dba1810b8de9703759c"],["/Technical-Research/Hexo/Hexo自定义网页/index.html","5a55c754e3845478236d08e616ab3a5d"],["/Technical-Research/Hexo/Hexo重新部署/index.html","dcb0e0688d97190a0b034cd5013871db"],["/Technical-Research/Hexo/Hexo问题归纳/index.html","d43d2f26c96ce64bb6f53405a80ef095"],["/Technical-Research/Hexo/Hexo音乐/index.html","9df73deb1df8b662d57bb996abd829ad"],["/Technical-Research/Html/Html常用知识归纳/index.html","344bea490b5688d418bc1f374daea332"],["/Technical-Research/Java/Java基础快速入门/index.html","45a7e48f33bbdc492e5fa9433c203928"],["/Technical-Research/JavaScript/JavaScript判断是否在当前标签页/index.html","883320786ee3e1bb3fdbf8969af9fa9f"],["/Technical-Research/Markdown/Emoji/Markdown内使用Emoji表情/index.html","ff09ddb216a4612570c407ede12fe2ba"],["/Technical-Research/Markdown/GFM/GFM语法/index.html","71f3386ac8c9d3f5d857b4b5e9a845ee"],["/Technical-Research/Python/Pyhton-GUI网格列表控件/index.html","f092c83a614b66b6c55b35417bb2e8e6"],["/Technical-Research/Python/Python-Exercise/index.html","f43e7f301cf65dc9fa952a1c3f82e94f"],["/Technical-Research/Python/Python问题归纳/index.html","7157081f8e9c1bc7fd12b500b99ffbc0"],["/Technical-Research/响应式编程/响应式编程的理解/index.html","a1257aa60a7caef7953a46646affdc6d"],["/Technical-Research/正则表达式/正则表达式/index.html","c870d398afcc53e1987f356d4db6c21c"],["/Technical-Research/端口号/服务器常用端口/index.html","7533065813156a4f9003f5da6a77ec68"],["/Tool/Development-Tool/AndroidStudio/AndroidStudio插件集合/index.html","99e8710d28b06ed55c42e58b5b7ad719"],["/Tool/Development-Tool/AndroidStudio/AndroidStudio问题归纳/index.html","767a4f37fbabf656e3d16e58ecaf4799"],["/Tool/Development-Tool/Pycharm/Pycharm激活码/index.html","0a05cff1611b8f129ae3f0abcb458376"],["/Tool/Development-Tool/Unity3d/Unity3d许可证手动激活/index.html","26e709725b081631181e76ea28dfe51a"],["/Tool/Development-Tool/Unity3d/Unity3d问题归纳/index.html","5850c0d3b1705daa2e11e79bcfa7c618"],["/Tool/Development-Tool/Visual-Studio-Code/Visual-Studio-Code/index.html","9643937a2e80f547caf36ca9bd89a5ad"],["/Tool/Development-Tool/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","70de5520e3274e05d9284488ee239468"],["/Tool/Development-Tool/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","acac8ad27da0ace46484479a6019db36"],["/Tool/Music/网易云音乐/index.html","41fb9dccdd2580f1c581fed0e90aede5"],["/Tool/Windows/Software/UltraISO/UltraISO/index.html","79d0797d6deef76212d80b4b30e184b2"],["/Tool/Windows/Software/VMware/VMware/index.html","943823ea248f8c6616808c633441f70b"],["/Tool/百宝袋/index.html","4ee6951e9e89226c8e39ca00265320fd"],["/Windows/Software/Office-2019/Office2019激活/index.html","133a9dc091526197d9ab3dacf5707a03"],["/about/index.html","d0b99a3a2b79eaa322e883a8e8adf75f"],["/archives/2013/10/index.html","a96ca2e0730ef04a75a79fe21757a722"],["/archives/2013/index.html","61d78a8b8c7b23e6bae3d13483e6320d"],["/archives/2016/09/index.html","b816461761ea3778cde4d124059a6a5b"],["/archives/2016/10/index.html","8aa6c87bb0ad9844a4ceeea7838609ed"],["/archives/2016/11/index.html","493f6ebd7b6967f5b362ad22306f90d3"],["/archives/2016/12/index.html","ec458aa965243c90e7e7e6d7a8180cb8"],["/archives/2016/index.html","8329a7cbd4f2f264220201c8f44972a0"],["/archives/2017/03/index.html","d7fd53c49334f00e70787fffd4da956b"],["/archives/2017/06/index.html","f37d859adfc09fb97de923324f9041e6"],["/archives/2017/07/index.html","83b7598cc85a84c28f4d461dab039db7"],["/archives/2017/09/index.html","fc550de3069e7a33cbce6b6a891f7d34"],["/archives/2017/10/index.html","98b5abc06002a51b4143afef35309c5f"],["/archives/2017/11/index.html","26d2065660e1a8553e7e9d59ddd31721"],["/archives/2017/12/index.html","6dbd2ba06aa2182785bcfdd5542dbafd"],["/archives/2017/index.html","7d7f86cc63957ba586cc5d8662c783a4"],["/archives/2018/04/index.html","88bb03d36c8a69db4c7e5cd9a3f95114"],["/archives/2018/08/index.html","53d06187a6ef644b52a7f5dd45a0e10b"],["/archives/2018/09/index.html","d4c2b08d6173bbd1b65c0daaea5b58b6"],["/archives/2018/10/index.html","5fe114f15313d619740cad3adead0b89"],["/archives/2018/11/index.html","3e18bd8580e4d287d6ec7ff641fe7668"],["/archives/2018/12/index.html","fc37c51b0cdacc44b3f12d25e61f0b72"],["/archives/2018/index.html","5de6078e524af815318091de2a06c98e"],["/archives/2019/01/index.html","ca6166489910f2a56deec0ef3c25b903"],["/archives/2019/02/index.html","9137a75da3cd4bca9e6181b9560021a9"],["/archives/2019/03/index.html","072d66f848ddf743f2f79d6bb29f477c"],["/archives/2019/04/index.html","e9e60cea5edcfbee97e0775abeb2ef96"],["/archives/2019/07/index.html","72e35a5a05a74c98e429f489814f5244"],["/archives/2019/08/index.html","34a0bcdf088c4c9d49974f2221c2046c"],["/archives/2019/09/index.html","1834950f4474bb9fa3c15e32405c9b8d"],["/archives/2019/10/index.html","8a64e4ad6b7f02b0450d4e75491b4288"],["/archives/2019/11/index.html","3ff6730fb2bd4e32f060818c7aaa4411"],["/archives/2019/index.html","a07a85081b472e4c9fc9cc39562b3b7e"],["/archives/2019/page/2/index.html","4c4ce23d6b6fc36f8ca7d959c091799e"],["/archives/index.html","13de641fea5fe6a12304dc90d7407776"],["/archives/page/2/index.html","6a3a845f5a68066520dbb5bfba45fd6e"],["/archives/page/3/index.html","17c30163cfb80b56cedd5f0038b24c07"],["/archives/page/4/index.html","de290685f9daf9dfbb71b1d3aea776e1"],["/archives/page/5/index.html","55c2cef855fb631bde6493503a7eaea1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Game/GamePlatform/Origin/index.html","2039265f120b9a5544336d8edbd3e789"],["/categories/Game/GamePlatform/index.html","2b31dfa59eb9e07580b116bb51e748ed"],["/categories/Game/index.html","37e6dbe2c214bfa4c44e7ed0ee672513"],["/categories/Google/Chrome/index.html","8807e183a4da34919b996936225f0c20"],["/categories/Google/Chromium/index.html","c4c28bcd545c741e054eeb2ef52cf04f"],["/categories/Google/index.html","5ed4b258c40056516dbe1d9b1ecf33c2"],["/categories/Technical-Research/Android/RxTool/Wiki/index.html","82f603d7a5fe1d2666f8f4dcae3162a2"],["/categories/Technical-Research/Android/RxTool/index.html","ccfd7d068835d8ee1218da1a93b7922a"],["/categories/Technical-Research/Android/index.html","cf3ff40643d4540a0f56402029b70f0d"],["/categories/Technical-Research/Android/单元测试/index.html","698c1529cd1ad645d00565ebda510002"],["/categories/Technical-Research/CDN/index.html","8ec4a093a7ae22157548e00b659247ae"],["/categories/Technical-Research/Git/index.html","9b25d0fbc88e626c9154a6aec7730158"],["/categories/Technical-Research/GitHub/index.html","9f9d61d7863f5c502fcc4b9224c316cf"],["/categories/Technical-Research/Hexo/index.html","50245d4e961c847bcc1512c8db03b8ff"],["/categories/Technical-Research/Html/index.html","e82b773b2f53929e87e1940da7143468"],["/categories/Technical-Research/Java/index.html","0a5d7aca463701d3266a6a2b6c4c14b9"],["/categories/Technical-Research/JavaScript/index.html","393a9ff9422494614342fe7e51746e61"],["/categories/Technical-Research/Markdown/Emoji/index.html","f0d75e05bd695bbaadf9b8ef4ac857a7"],["/categories/Technical-Research/Markdown/GFM/index.html","a7631261d217ff0708eeb91465e733ed"],["/categories/Technical-Research/Markdown/index.html","1c2a78af47e0dbc8e927a3d4b437f7e6"],["/categories/Technical-Research/Python/index.html","a5d85856679b42fd4b0df51fd598a72e"],["/categories/Technical-Research/index.html","08e9b24a4a0036179db0cdf46b0b7453"],["/categories/Technical-Research/响应式编程/index.html","ee3fdc9c9c834533f8d74b860935a63b"],["/categories/Technical-Research/正则表达式/index.html","4e7d058775ccee2b94e70148d49c31bd"],["/categories/Technical-Research/端口号/index.html","57181266196459aa8201584c73544db1"],["/categories/Tool/Development-Tool/AndroidStudio/index.html","35dca14be146ffafaa2f348df2bcd1d2"],["/categories/Tool/Development-Tool/Pycharm/index.html","b7cd138e25f02ed1a526721a43d1c297"],["/categories/Tool/Development-Tool/Unity3d/index.html","2163d31c85108f2f0d6b3a2d6c1c1db9"],["/categories/Tool/Development-Tool/Visual-Studio-Code/index.html","d9acf8465015a5044ab440215d84527a"],["/categories/Tool/Development-Tool/VisualStudio/index.html","5d0d32bc818e7842acd72577f3af7dba"],["/categories/Tool/Development-Tool/index.html","efdd6a7fb84dda0315ef03dacd2caff5"],["/categories/Tool/Music/index.html","159050d383a6fcfc6a97ee5da99ea763"],["/categories/Tool/Windows/Software/UltraISO/index.html","a18bb4f96486eeb88b421ac333d7a1e9"],["/categories/Tool/Windows/Software/VMware/index.html","25ef7eb0ea53e2f18839f583b0b3c29e"],["/categories/Tool/Windows/Software/index.html","b33ae66e680d719028c9c46a2147f46f"],["/categories/Tool/Windows/index.html","6072077f045d69fc79a80f71275977ad"],["/categories/Tool/index.html","71c010059e5dce3f03cd03b73731f640"],["/categories/Windows/Software/Office-2019/index.html","09a1d6c67e73886babe5b18c3d5482c5"],["/categories/Windows/Software/index.html","b47c5763423250be1c4408d16bb8879c"],["/categories/Windows/index.html","916fcdf4f7e8ee58316e8a05c32124e6"],["/categories/index.html","852f945a202c827f4e1dcc2b23fe45f6"],["/categories/产品设计/index.html","fe96167a85c37d64cce26e8318e77352"],["/categories/兴趣爱好/Guitar/index.html","7262df75b9aa500b18e7950debd3beae"],["/categories/兴趣爱好/index.html","22a953e567babeedda7fcf18a776d9da"],["/categories/兴趣爱好/个人日志/index.html","8470a20a38f5592960f879ff8894a1a5"],["/categories/兴趣爱好/个人诗集/index.html","b510e091e8d91773f67e01573521875d"],["/categories/兴趣爱好/摄影/index.html","1a7479d27894c07df8c65bd38e571eec"],["/categories/动漫/index.html","f43112cdde2b1802ccb0633491299099"],["/categories/动漫/宫崎骏/index.html","5a06d1965454e097ca8dc6268294075d"],["/categories/学习/Math/MathJax/index.html","c9b55e67aa1ac8571ca8b8f406aacbe6"],["/categories/学习/Math/index.html","b3258595b145caa8816e684e376feeb9"],["/categories/学习/Math/线性代数/index.html","ffdac7132b56d76c32bfd37b16dcdeda"],["/categories/学习/Math/高等数学/index.html","ac86ccfb07492436bf2d17a6f1c7c07d"],["/categories/学习/index.html","dfae6f5caf2dda5d64e89cabf60ac757"],["/categories/学习/思想政治/index.html","e34725ccb3092a9ebef9083b94b8cef1"],["/categories/学习/英语/index.html","b923b20dc4f198e83d2c5ccb218df3d9"],["/categories/学习/记忆方法/index.html","e835c0ba37cbc9c5259e167b52a245db"],["/categories/学习/软件工程/index.html","815432ac90e758729ab7ad787f043354"],["/categories/学习/软件工程/伪代码/index.html","804093c7d0d3aaaab5fc47472e4d700a"],["/categories/操作系统/Linux/Manjaro/index.html","d42dfe0df60fae17882b4525397f76c7"],["/categories/操作系统/Linux/index.html","2d36d9e074bdbbffb0e1df358fe2029f"],["/categories/操作系统/Windows/Software/index.html","c44a730f5efdf0dd04b2ce19eec4fbe8"],["/categories/操作系统/Windows/index.html","0d958aa9752714a1631de359af389de2"],["/categories/操作系统/index.html","da6bf6c38160b2ce3cfc39c8c4cc7d7a"],["/categories/日常/index.html","06bfc8356f593568de33708c4ac2bfc3"],["/categories/电影/index.html","50f36615a7c0698ddc7acf42e950ed19"],["/categories/电影/香港电影/index.html","a77f38a5ed90a143f77907567eac830e"],["/categories/电视剧/index.html","b8a0ebb419ff1a0d5784f6bbc25eddcf"],["/categories/电视剧/亮剑/index.html","c3aefafd9c9b4b65b5fe87bbd12857ca"],["/categories/硬盘/index.html","74afcfc3ef8512c19a5783b983684c95"],["/categories/第九艺术/GamePlatform/Steam/index.html","7e3b4389fb5be99e132365ab095736ba"],["/categories/第九艺术/GamePlatform/index.html","29b2d0a5d8718912153c2ee604b44488"],["/categories/第九艺术/Steam/CSGO/index.html","be2aa3ccc5d1651fd004474bd8ff0289"],["/categories/第九艺术/Steam/index.html","e1dd5f5028f2e72e5438c9f6ba6da5db"],["/categories/第九艺术/index.html","909dfc761c1dd59d9f39e133ba7fee11"],["/categories/面试题/index.html","b2d180bbb7ef121ea752a56e7e986916"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","51f666a4763bf824099e8c9dee9bf38d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","66fd7aede676432b0d10983ef021a6db"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","b6154d6456ae7fd95a7db78356d12747"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","d0bb950e6d6483973f01ff1e622b61ee"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","326f33b6d923bb1a63daeb60b09b17d5"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","4e37c4c1c060d98c78359b3e156cf92c"],["/movie/index.html","c3f15d79e8e7d22af4d11a66ce225374"],["/music/index.html","14ec28ff22638f8fd7a02bc8f377d7ae"],["/night_sky/index.html","7cde1d7e4711b9b9995e22bf09f3651c"],["/page/2/index.html","e338b5a520e35b79cea751754da6236c"],["/page/3/index.html","60ac4e8807fe086d96f9f437c2c2cd4c"],["/page/4/index.html","1b87ae0d321f39993ea7fce878cfbb59"],["/page/5/index.html","6e73df33ef853cc14227cdace1890b0a"],["/page/6/index.html","f3ab25f5212cccabfec6a4ef31f8bfb9"],["/page/7/index.html","55514713b91d98287b5347be1930bddd"],["/page/8/index.html","1d325579ef30227cdb5b01851b602473"],["/page/9/index.html","3353b1bad2ed2379673e48c6a0eaae5a"],["/tags/Android/index.html","54fecd0d133f0e7d1bef51c2cf71eae5"],["/tags/AndroidStudio/index.html","71058acfdac304f073ff2e08fd72803a"],["/tags/CDN/index.html","3a71c03affd458f0e243605dd78f5f59"],["/tags/CSGO/index.html","135595e57deac5abb3bee1ca64c15d80"],["/tags/Chrome/index.html","38206fd117ad19691350229cd0b763cf"],["/tags/Chromium/index.html","0e7482d2fd979ae7d4492388c6100dad"],["/tags/Development-Tool/index.html","376524beb4aa500dead7b67bb89df5a4"],["/tags/Emoji/index.html","f05e6523e0b9ead970269bbb33f3b58c"],["/tags/GFM/index.html","2a2088a23a3ff95c76cfa8af554b3701"],["/tags/Git/index.html","c713cf4c2e8f471119ef6654ae033aa2"],["/tags/GitHub/index.html","58dae6b3713aeb22db522c10d235e059"],["/tags/Google/index.html","f22b2a1955b8751dc7c1369c253d1840"],["/tags/Guitar/index.html","90b1042f91223e0935958e633c531e96"],["/tags/Hexo/index.html","34f57a1ac8d027e6086f83c6141ea201"],["/tags/Html/index.html","c816c684f943b2428ae11586d5a914f8"],["/tags/Java/index.html","ce9ee30016ab77423afe844540b8a86e"],["/tags/JavaScript/index.html","b06c7f01b9539c7926d4cde4f5c6b918"],["/tags/Linux/index.html","977edddc806900e28e897b2e1418786d"],["/tags/Manjaro/index.html","525b1c473b453da3dd556190e3d0256c"],["/tags/Markdown/index.html","b3c4e17dff6c24b37f6f3b71e45da361"],["/tags/Math/index.html","2c9e3b3c121b8367ea2d5f2b54280195"],["/tags/MathJax/index.html","45bef7ebc83328fe85b7c5ab57fad9a7"],["/tags/Music/index.html","fc77081856f892d0c01b3c1bb96abacc"],["/tags/Origin/index.html","db4492e2d5d85b49b0f3a04a927fa1b7"],["/tags/PseudoCode/index.html","b3e170af7464beea575e8d93382145fb"],["/tags/Pycharm/index.html","ac3f5dd1bff3fa28a1a5b5bf2291b339"],["/tags/Python/index.html","4a78e0eb4703aa5ca808d65209326c63"],["/tags/RxTool/index.html","c343d824169babf3c7a71c6e9bf62729"],["/tags/Software/index.html","562a56053e764f1ba12990a552313dd8"],["/tags/Steam/index.html","7c27a1c19567a96ca2f9fa8163b2d71a"],["/tags/Tool/index.html","d4b97ff4ca41b02b756d1489ea6e6b8c"],["/tags/UI设计/index.html","ffb5ea90d67b5040ca990c31fa1da860"],["/tags/UltraISO/index.html","b229462a021a614183b786a42ed02f5b"],["/tags/Unity3d/index.html","221dc3e6dde0a07667bb5cfe4f236774"],["/tags/VMware/index.html","69cfc17e5d2512bb177fd604eacfdeb0"],["/tags/Visual-Studio-Code/index.html","ebc6397cef63177ee95f95fb7026b447"],["/tags/VisualStudio/index.html","93f644ece427be9b55f99d5b921aab74"],["/tags/Windows/index.html","87fb384a5d6cdde4de7e20cb460394dd"],["/tags/index.html","db07cd364bd324e19f1190a9d2eb866f"],["/tags/个人日志/index.html","7645d56a9495a5cce9dfd29d2d239623"],["/tags/个人诗集/index.html","bcc7baa12a9afcb451b70386e8569948"],["/tags/产品设计/index.html","43906f628a1d92a79207acdb4278a826"],["/tags/亮剑/index.html","e746c94eedfaeae02c24bb935fab27db"],["/tags/仙剑奇侠传系列/index.html","0796aa7db28d1b1cafa4eeb876d19a5b"],["/tags/伪代码/index.html","41881b8ea83300ecc5bd64b7ccdd8d76"],["/tags/兴趣爱好/index.html","1badc81201a4cb232441e1ea6fd03f25"],["/tags/动漫/index.html","5af26d63a28a14de88854a5f3c1580b2"],["/tags/千与千寻/index.html","77a0e9fdfe7eedb02db0f50ab3ad54ae"],["/tags/单元测试/index.html","d34e2b7235ecace7b507488e7f4a9bdd"],["/tags/响应式编程/index.html","f155147e36034131d0dceacee88fe994"],["/tags/学习/index.html","1ec5906b2179a70247ac736464081a69"],["/tags/宫崎骏/index.html","10a219bc5ae7147d3776de3ff60dc74c"],["/tags/小王子/index.html","8a2034c2c1e10b4b7f5908893b249a84"],["/tags/开心鬼系列/index.html","756840a56fc78182977443fadfadcd6c"],["/tags/思想政治/index.html","c44a2e91d5ae392d3576452596021784"],["/tags/捐赠名单/index.html","c32b05ac652c3d9bcbc7ee6408553cda"],["/tags/摄影/index.html","11d23cb3ef8c0958a3b6aa8c573d8433"],["/tags/操作系统/index.html","96e50317d2d087b60c70e6827fe3a4ec"],["/tags/日常/index.html","b43570363bd294e8a13b1ab747f6afb7"],["/tags/正则表达式/index.html","7eb935594e69febf7fdf38416acd16b2"],["/tags/用户界面设计/index.html","16c7ea882bb0d222974eb8dcd9c58fc2"],["/tags/电影/index.html","85cc3faf75b1c152552204cc030a8759"],["/tags/电视剧/index.html","bd8061e1b736755cdae860c2d5b84a50"],["/tags/硬盘/index.html","87b7218f55c3c97086ecdf09e62a8815"],["/tags/端口号/index.html","daa988a8e0f460b4cef100253fe144f2"],["/tags/第九艺术/index.html","0709c94f65d4612463ae91269ab4cb4a"],["/tags/线性代数/index.html","010fe0003b985133fd6b9ec257378d68"],["/tags/英语/index.html","4cb842b5a5966c33d73170ab71c53d78"],["/tags/记忆方法/index.html","72e9c5c7e7a9471bf0a8b27b28c10dfb"],["/tags/软件工程/index.html","1baa6a518a0e1ef7fe38fa5dc617dffa"],["/tags/香港电影/index.html","93525ed5089aaf7133a2ecdb4a2ab887"],["/tags/高等数学/index.html","3c69c74c6ee2a11fd4e63b8f1daa815d"],["/产品设计/设计用户界面的注意事项/index.html","128e13241deea99bae677908ede8b4f3"],["/兴趣爱好/Guitar/吉他入门/index.html","12881db5986f5070cfdb18d678695283"],["/兴趣爱好/个人日志/芦江曲/index.html","18c4223a9123142cf3323d9c161143e4"],["/兴趣爱好/个人诗集/闲情逸致/index.html","472866a3fd98d9658a6a7a4a1c4ebbe6"],["/兴趣爱好/摄影/摄影入门手册/index.html","6a83fa0e3d17e1dadd2b0d17016b3851"],["/动漫/关于《小王子》电影里的共鸣/index.html","a20f9d5c9f2ec0378eddacd8f804fb47"],["/动漫/宫崎骏/千与千寻/index.html","9e18cea67bbb40f1985a0920127da2c4"],["/学习/Math/MathJax/MathJax引擎数学符号说明/index.html","9ebaa084038c46ec2e0ed70e71df2a91"],["/学习/Math/线性代数/线性代数公式/index.html","02d4f15248ee2851b536a60c70af08cd"],["/学习/Math/线性代数/线性代数知识点总结/index.html","f850efd5d0c03dc4edbeadd41aecbe10"],["/学习/Math/高等数学/高等数学知识点/index.html","2f62e745c57c5b74187993bf3844b075"],["/学习/思想政治/考研思想政治理论知识/index.html","8e6769f2a5efc4de2ce1235f606b9aa8"],["/学习/英语/考研英语作文/index.html","a95e208cba0624e76b832d6bb4f4ff27"],["/学习/英语/考研英语词根/index.html","a129ce81e95c5779daa07cd04192bd12"],["/学习/记忆方法/费曼技巧/index.html","a90de5a58db17e0188fe78998a23af8c"],["/学习/软件工程/中南大学软件工程考研题型/index.html","45178593c7526b4e9b90823693255f73"],["/学习/软件工程/伪代码/伪代码/index.html","c6e66f766216208bdd6f10119efb67b1"],["/学习/软件工程/软件工程基础知识/index.html","33554e39138de1d35e4c29552ef78ba6"],["/操作系统/Linux/Linux分区管理工具/index.html","d26854648f2c3cd53947c4a1c603b280"],["/操作系统/Linux/Linux的首次邂逅/index.html","21340a0b171772aff4f4f10f5fd1d5b8"],["/操作系统/Linux/Manjaro/Manjaro/index.html","9dad15390c3ffbb79da3024527bb6dea"],["/操作系统/Linux/Manjaro/Manjaro使用技巧与问题归纳/index.html","0ff31b7a9fe504019b341d4cade8afc8"],["/操作系统/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","ce39334b9cc5cffa0d74de97ce1eef19"],["/操作系统/Linux/Manjaro/Manjaro常用软件/index.html","ea514bcec6fd220df4d7907a51679409"],["/操作系统/Linux/Manjaro/Manjaro美化/index.html","47c41564668170af27fe87d5033c4ec6"],["/操作系统/Windows/Software/Windows常用软件/index.html","2bb80fb4169d4166e4b3cdbadd6d9bbc"],["/日常/Contributor/index.html","70dd9ecde8ab4354d8077f36940c69b0"],["/日常/Memorandum/index.html","7b3ae7875100a548cc0564a2d47c42b7"],["/日常/生活小常识/index.html","d7e3497474ac08b4fb9c40caba79e7ad"],["/日常/网络用语/index.html","8247af7beb6adb9425697f628519eaac"],["/电影/香港电影/开心鬼系列/index.html","0cdce38d47e7f6bda2a0a36cd5fb5f91"],["/电视剧/亮剑/晋西北铁三角/index.html","28ac3279e216bcfc76d68c63b07df74b"],["/电视剧/仙剑奇侠传系列/index.html","5d3ce32bca163b0fc900f61f79115edf"],["/硬盘/硬盘分区结构/index.html","c7050df12ea255dede1f19a00065b407"],["/第九艺术/GamePlatform/Steam/Steam中文支持/index.html","d66c915d100c3e8e0db2b65e865ddd91"],["/第九艺术/GamePlatform/Steam/Steam问题归纳/index.html","5b67196f14482b2a649db44cae16e085"],["/第九艺术/Steam/CSGO/CSGO/index.html","ae874e42fee7f674174fb5931c581aa3"],["/第九艺术/如何独立开发一款游戏/index.html","7d176a2fdb0274255c076f0c6818de10"],["/面试题/2020年字节跳动面试题/index.html","6fc96097483f2cc4004e54031e37e5a3"]];
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




