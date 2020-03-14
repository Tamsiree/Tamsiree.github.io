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

var precacheConfig = [["/404.html","ff606921e966dae3c924f4c2902484e2"],["/Anime/宫崎骏/千与千寻/index.html","e2c6c9f60f1709a228accbf594f8a2f8"],["/Computer/Alienware/Alienware更换电池/index.html","69c940412640f261e83570aee26ac3a7"],["/Daily/Hobbies/Guitar/吉他入门/index.html","263031abd338cc2acd66011bfa859c6d"],["/Daily/Hobbies/PersonalDiary/芦江曲/index.html","218807a19945fc8e22cdb527707179c8"],["/Daily/Hobbies/PersonalPoetry/闲情逸致/index.html","5b197b82032b158cfc20a285e9cd8d48"],["/Daily/Hobbies/Photography/摄影入门手册/index.html","6b0b2c2c479901435bbc85f5ffc321c0"],["/Daily/Hobbies/拟音/index.html","d4436bae1cbbeb0af548e737fd8db5d2"],["/Daily/Memorandum/index.html","b76a49dc7b9f39b9fb8ab6b1589ef234"],["/Daily/专业术语/index.html","ab4e1f5d47074b413c4c54d88cb6945d"],["/Daily/个人所得税/个人所得税/index.html","b69017d3f9e56950ab7805d2100e2d95"],["/Daily/五险一金/五险一金/index.html","f8a29dd70992542651ef62ab411328cb"],["/Daily/劣币驱逐良币/index.html","09cb190696c1dbf0ea00a1df2b575bc4"],["/Daily/新型冠状病毒肺炎/新型冠状病毒肺炎/index.html","2f220ca72cbf6af9e00a941365ab6e21"],["/Daily/生活小常识/index.html","fc03af18fd9c794133e446d89c27facd"],["/Daily/网络用语/index.html","6baa628c6b4d6f9d18b4e18deb8837d5"],["/Design/设计用户界面的注意事项/index.html","a5f704b754a73e9d5f5469de3837f712"],["/Emoji/Emoji符号/index.html","8d0bd7dc383467411b68c08aa6569a16"],["/Game/GamePlatform/Lutris/Lutris使用技巧/index.html","95c0633c2d3f3d730aac9b461dab6f6a"],["/Game/GamePlatform/Origin/Origin问题归纳/index.html","1d66f6167c42e74b3cfefc9dc3afcf9f"],["/Game/GamePlatform/Steam/ARK/index.html","fd5a4ae8ca70c50814a8ee14532cedee"],["/Game/GamePlatform/Steam/CSGO/CSGO/index.html","c09fd7bf74ff9e143aab07534c823cbf"],["/Game/GamePlatform/Steam/Steam中文支持/index.html","c623e2ff76ad17055b2002ba317a1758"],["/Game/GamePlatform/Steam/Steam库共享/index.html","06761f5e0f13bbfb1ceb3d2c57b32417"],["/Game/GamePlatform/Steam/Steam问题归纳/index.html","3affff0aab8a6cc2aa0219cc0cfcf036"],["/Game/如何独立开发一款游戏/index.html","20471dc3b943562a32f25cc6d34979c8"],["/Google/Chrome/Chrome上网助手/index.html","d7ea9bd4dc91d443d91dd46ecb52a32d"],["/Google/Chrome/Chrome使用技巧/index.html","6e1898c20e64df1be32af2d1dfd93da6"],["/Google/Chrome/Chrome插件/index.html","b61a3345a3c9d2320a0e4e5830851506"],["/Google/Chrome/Chromium/Chromium/index.html","508c359659a120390d60fda5feac5e56"],["/Google/Google搜索/Google搜索技巧/index.html","1da5a2017a13fd8a918d8c54eed680ac"],["/Hardware/HardDisk/硬盘分区结构/index.html","13487afa2694b7293e0b478a17820ef1"],["/Hardware/Router/路由器固件/index.html","a1583bcfb7c2f15a6095a78424a91da9"],["/Hardware/电脑设备/index.html","0a82ea7ff702b860de212ce18ed776ba"],["/Interview/Python/2020年字节跳动面试题/index.html","f92de23dbb4865c27b124da9d590da77"],["/Movie/HongKongMovie/开心鬼系列/index.html","a91bcf3a769fd89840a86ee7ce37f455"],["/Movie/小王子/小王子电影的共鸣/index.html","05008cb117e49bd773c8da94bb627e6a"],["/Novel/盗墓笔记/盗墓笔记/index.html","6345fca9324b3459ae59634ffce961a3"],["/OperationSystem/Linux/Linux分区管理工具/index.html","c047ffcc0381dcc9659b1db4eaae500d"],["/OperationSystem/Linux/Linux的首次邂逅/index.html","5dda8e5d65e0be021e61e77d640f586d"],["/OperationSystem/Linux/Manjaro/Manjaro/index.html","4d776f53c921d7d55367df48617a0d02"],["/OperationSystem/Linux/Manjaro/Manjaro使用技巧/index.html","4340423003af3b2bf363288b0c46bdea"],["/OperationSystem/Linux/Manjaro/Manjaro卸载显卡驱动黑屏问题解决/index.html","d4bf6d46c4e70a117ee150a26388431e"],["/OperationSystem/Linux/Manjaro/Manjaro安装NVIDIA闭源驱动/index.html","258bc7b3c775d58fcd806ad001dc0245"],["/OperationSystem/Linux/Manjaro/Manjaro常用软件/index.html","515d0010935cdef52e65990a35be1448"],["/OperationSystem/Linux/Manjaro/Manjaro系统优化/index.html","161d405f1a2a711f49c4576e57ded333"],["/OperationSystem/Linux/Manjaro/Manjaro美化/index.html","d59c74786a297ab05d554a86532fddfc"],["/OperationSystem/Linux/Manjaro/Manjaro问题解决/index.html","92de2ecc428e1362c6cddc1ed69a8819"],["/OperationSystem/Linux/SteamOS/SteamOS/index.html","e87b3141677d2d7269ea540b9a4906d0"],["/Research/Math/MathJax/MathJax引擎数学符号说明/index.html","1f884ed4c94fc52c72699ce627f68588"],["/Research/Math/线性代数/线性代数公式/index.html","0260a4636b0d7517284c5521f0b241fa"],["/Research/Math/线性代数/线性代数知识点总结/index.html","8f9a577121458104c96fbca134b092e6"],["/Research/Math/高等数学/高等数学知识点/index.html","00e4caa5af0d314307cff17661bf666c"],["/Research/Memorizing/费曼技巧/index.html","652dd1587d2041f88b8545f0640ecbf4"],["/Research/思想政治/考研思想政治理论知识/index.html","98495d6576a03bb8af0d391aeda00f74"],["/Research/数据结构/数据结构/index.html","8255c7cd02e522f4987e9047f4622c95"],["/Research/英语/考研英语作文/index.html","9601dab1ef30950f1cb80ada823bb251"],["/Research/英语/考研英语词根/index.html","34de840e2722bdcf8b1a54df0f8c047b"],["/Research/软件工程/PseudoCode/伪代码/index.html","50379a50c1dd854744038b082becad79"],["/Research/软件工程/中南大学软件工程考研题型/index.html","0c8d4465a53e4554f6b3fa28e8f4b2cc"],["/Research/软件工程/软件工程基础知识/index.html","f97f84ee73d34d22b7d00ee4b1e4aaae"],["/Resources/游戏资源/微元素/微元素每日答题/index.html","0d873272335fd938048de561ca7e474e"],["/Software/Anbox/Anbox/index.html","f7c6cabb8c16d723d2ddd0d800e56776"],["/Software/AndroidStudio/AndroidStudio插件集合/index.html","099b569104cdfc9185e600920d9a8712"],["/Software/AndroidStudio/AndroidStudio问题归纳/index.html","814f8dbd951b305fde79e6ccfaa1c5ad"],["/Software/Office2019/Office2019激活/index.html","405ba3451e701cab5890f83505743cce"],["/Software/Pycharm/Pycharm激活码/index.html","874b9d3da2779c362f27c6057912ec7b"],["/Software/Thunderbird/Thunderbird问题归纳/index.html","d3fc2bfb77c4154865b4c24ed45e1f7b"],["/Software/UltraISO/UltraISO/index.html","17a050c6d12d4c9320df8cf34e4a4425"],["/Software/Unity/UnityHub许可证手动激活/index.html","e59abe7a091cde413ab46881541c9ae3"],["/Software/Unity/Unity使用技巧/index.html","743110ecdf20674df9cab569705ad5ef"],["/Software/Unity/Unity动态加载Prefab/index.html","640b0a8492c51dca0db731a7f89ce095"],["/Software/Unity/Unity合理导入模型/index.html","c7b860621bf0d594431653802135c9a1"],["/Software/Unity/Unity的Canvas组件/index.html","a6ff2a9bb18ac484b402c67d3ab5696f"],["/Software/Unity/Unity问题归纳/index.html","ecfaa5c92094fddc65c00f77ac6d91c1"],["/Software/VLC/VLC使用技巧/index.html","6baf8f2c8b1191ed9a8fc668f11e36d3"],["/Software/VMWare/VMWare/index.html","ee3213c447386bad55fc709ae51d23b0"],["/Software/VisualStudio/VisualStudio使用中文乱码解决方案/index.html","b6eaf7971f7b9d0735b84323ef8f1819"],["/Software/VisualStudio/VisualStudio高级保存选项不存在解决方案/index.html","52ff06c7792ad6ba327cd4d77626cf1e"],["/Software/VisualStudioCode/VisualStudioCode中Settings-Sync插件的基本用法/index.html","85e80a4e5105cc9e239bc0a01cef20c8"],["/Software/VisualStudioCode/VisualStudioCode开发Unity/index.html","0daa311a895b638fa6115a0f8565bb11"],["/Software/VisualStudioCode/VisualStudioCode插件/index.html","0c3c71369f345546860fc06d9af6bc5f"],["/Software/Windows常用软件/index.html","a86090b17a9198f37a9522b35e905821"],["/TechnicalResearch/Android/Android之JetPack库/index.html","b59d2812d9308fb84204bc83a81ddba0"],["/TechnicalResearch/Android/Android原生开发现状分析/index.html","c7e8b9e418be89ad87171123bad820c0"],["/TechnicalResearch/Android/Android唯一标识/index.html","bb2334167dd3c8c787f2b121cc4baf5e"],["/TechnicalResearch/Android/Android强制关闭软键盘输入法/index.html","9ed7467e3cd6e3bb4b6e7c159282a378"],["/TechnicalResearch/Android/EditText/Android研究EditText/index.html","c6b6c2b3d05b540f19e4977dd8638365"],["/TechnicalResearch/Android/Room/Android之Room库的使用/index.html","385dc08f252b75119249e96c22aa4b9c"],["/TechnicalResearch/Android/RxTool/Contributor/index.html","467e4492815e6fac99f42ab1455927fd"],["/TechnicalResearch/Android/RxTool/RxTool/index.html","1b7895a840c65e9f84cb8853d243daa2"],["/TechnicalResearch/Android/RxTool/Wiki/RxTool-Wiki/index.html","3d39935ff62f6a5ed9fc8904a554e331"],["/TechnicalResearch/Android/UnitTest/Android单元测试/index.html","f953946052a206670d65cef8e1d2d158"],["/TechnicalResearch/Base64加密原理/index.html","3e62d6fed479f47bb69a29b5513ba7e9"],["/TechnicalResearch/CDN/index.html","64026c6be4e770ceca4a4b7cd070e514"],["/TechnicalResearch/Git/Git/index.html","176833132da2e91e960b05ff253ff648"],["/TechnicalResearch/GitHub/GitHub提速方案/index.html","c887f1bf120586c339f9e0f86d6451f3"],["/TechnicalResearch/Hexo/Hexo博客绑定域名/index.html","dfc5ec18188ca84d3542a658a1aab5aa"],["/TechnicalResearch/Hexo/Hexo博客美化/index.html","512cac696eea7ca91928f8141a7105a4"],["/TechnicalResearch/Hexo/Hexo插入Bilibili视频自适应/index.html","e4ab5ffbaad610d4d7ffbf8b8d9f1f7f"],["/TechnicalResearch/Hexo/Hexo自定义网页/index.html","1b3c2c3348495caa7f2211539db3b7cc"],["/TechnicalResearch/Hexo/Hexo重新部署/index.html","752482e19462fbb3f440a2afece8abff"],["/TechnicalResearch/Hexo/Hexo问题归纳/index.html","f03a1212254f737617b2ef3d962a6774"],["/TechnicalResearch/Hexo/Hexo音乐/index.html","6c120e285c869698a2a8d1e6bcc9e842"],["/TechnicalResearch/Html/Html常用知识归纳/index.html","a9af926f262351d4872ba82fcf48c971"],["/TechnicalResearch/Java/Java基础快速入门/index.html","3219295f63cee01a861317f0edec7859"],["/TechnicalResearch/JavaScript/JavaScript常用效果/index.html","65b2fe80368805ecf7f8ade3779870fa"],["/TechnicalResearch/MachineLearning/DeepLearning/DeepLearning/index.html","3338ea2c7bbc34e7a2fe4d70ddba9025"],["/TechnicalResearch/Markdown/Emoji/Markdown内使用Emoji表情/index.html","211b34f08414ed05f43f4518d68a8e50"],["/TechnicalResearch/Markdown/GFM/GFM语法/index.html","569628d2e989d1102dc0c16d98de4f4d"],["/TechnicalResearch/PT站/NexusPhp/使用NexusPhp打造个性化的PT站/index.html","ea88447b7d09667fc77651f625298da9"],["/TechnicalResearch/PT站/PT站/index.html","23b0a22dded2e63018d337989177b23c"],["/TechnicalResearch/Python/PythonExercise/index.html","fc51aa278e8bf6c7c429a1a917576bbf"],["/TechnicalResearch/Python/Python开发GUI网格列表控件/index.html","f04c25f4df8e208a924c432e663a2a94"],["/TechnicalResearch/Python/Python问题归纳/index.html","738ca9718bd806b9f57c578b37b7c98e"],["/TechnicalResearch/ReactiveProgramming/响应式编程的理解/index.html","a8e009a75fbc961229f2809de08083ed"],["/TechnicalResearch/Regex/正则表达式/index.html","28b872a2bce54af94034dc429a595191"],["/TechnicalResearch/Shadowsocks/Shadowsocks对检测和封锁的探究/index.html","22c2dd7e21fbd20832ba57099fcf5615"],["/TechnicalResearch/Spider/爬虫涉及的法律问题/index.html","76f2dfa518e46932600a5818838c5f9f"],["/TechnicalResearch/TA/TA是怎样炼成的/index.html","3870e5ba28d3416ece325792d62734fd"],["/TechnicalResearch/服务器常用端口/index.html","1eb7030d6ff36748e158f59614e31d49"],["/Teleplay/亮剑/晋西北铁三角/index.html","893158619c3a57c9d24cdd287e5282bd"],["/Teleplay/仙剑奇侠传系列/index.html","3244aa216595c000520c2d06897d0bce"],["/Tool/Music/网易云音乐/index.html","e8649e20ecd098e0cca34eefad0dbc94"],["/Tool/Wallpaper/随机获取在线壁纸/index.html","32bb925462f4ba7f7c0abc161b6879c3"],["/Tool/百宝袋/index.html","1a38357c0e50681ceae3a28660e7c1e0"],["/about/index.html","75310e6eeef2e22f4f3efb5c01be075a"],["/archives/2013/10/index.html","931f8ac1c0cb09ef238cb354298c52b1"],["/archives/2013/index.html","f1a751e83fd4913174af1630a2e654b9"],["/archives/2016/02/index.html","771972c5ce83b0dab14c741c599d06c2"],["/archives/2016/09/index.html","f5098a6a0acd6fe4cc24d147cd5bbc70"],["/archives/2016/10/index.html","197eef48bc394762cbaf342d3ba448a9"],["/archives/2016/11/index.html","986686ec80b984478378d18a6672af03"],["/archives/2016/12/index.html","6919d6f28db9ea2a37cfad2b3df10af1"],["/archives/2016/index.html","71a9eb30fdaa772f3443245ff020e9f0"],["/archives/2017/03/index.html","54444ad4cd5abd33d247832027ec0bae"],["/archives/2017/06/index.html","ca40aa76fbde4adaf165ecf35290c9c4"],["/archives/2017/07/index.html","2905fa300df7f1f78a43fdce6cd7fd6c"],["/archives/2017/09/index.html","0c2ab00da9afdb88e5ff046b85055630"],["/archives/2017/10/index.html","65b0aa8ded0f074ccac5e74a8a254dcd"],["/archives/2017/11/index.html","8d884b1917dadb5d1f9e4c550fb50dae"],["/archives/2017/12/index.html","7249b9843fc2b85e1df829e61635d8b4"],["/archives/2017/index.html","182ca7549072adafd2bf9894178738fa"],["/archives/2018/04/index.html","8a559c8ba1b776ac41dd4f395b2e8c2d"],["/archives/2018/08/index.html","ee716a6d168057bf830f2692aaf35668"],["/archives/2018/09/index.html","daba2b1a47bea8e91947be85b00a33c2"],["/archives/2018/10/index.html","3d1e7de8a4075b63ea5d48fa9f849937"],["/archives/2018/11/index.html","029906468951aa196234cb3684c9e328"],["/archives/2018/12/index.html","0a03c6c9781cdb0b0721176c583ebb76"],["/archives/2018/index.html","e0e7edda273bd604c179fdfe1eebb870"],["/archives/2018/page/2/index.html","df8657ad7f2d117a27b5d92700c085ef"],["/archives/2019/01/index.html","e01205b2292c524d1c436387af15a69a"],["/archives/2019/02/index.html","64faf18c81cc0ab6b64bdbe1013b1971"],["/archives/2019/03/index.html","cad7a059d9a4245841fa0674f89c5d78"],["/archives/2019/04/index.html","06f8c0cc7bfca90206f5db79eeba5987"],["/archives/2019/07/index.html","bacbee18db7a941162b74bbb8f8e354c"],["/archives/2019/08/index.html","0e089111af9ff268381f9bcb83256c03"],["/archives/2019/09/index.html","3b93bcf781dbc8c9fbfba211e0dcb22d"],["/archives/2019/10/index.html","1a98f4d819f99297985cfcb704472b1b"],["/archives/2019/11/index.html","5c5b135bfcd40cb12411abf3870bd805"],["/archives/2019/12/index.html","d616a26a76b21402abdb24a9420d8663"],["/archives/2019/index.html","f786c837adf62f6c67aac61f35f037cc"],["/archives/2019/page/2/index.html","8dfb20bf27b037304f8aa48654c73c07"],["/archives/2019/page/3/index.html","6a3c933cd48824fd4827711121e7627e"],["/archives/2020/01/index.html","085b0693f9b9aa74ed5ad2c74b92f548"],["/archives/2020/02/index.html","d31ad4a623bf6c6ec5191fc9ad6e20ce"],["/archives/2020/03/index.html","842034cc92c7bf9ef5ad24b3cfa08ca2"],["/archives/2020/index.html","b44f2e8b40a80eed43b81a3e4dd52ab5"],["/archives/2020/page/2/index.html","455431d6a99754e25e401e939ea353e1"],["/archives/index.html","543bce2434dde95d97c0a6f995cd4556"],["/archives/page/2/index.html","3ea55ba7dac33dcd3d1b97f6698917d8"],["/archives/page/3/index.html","d7f34ffa484722955c8a9aa5843f2213"],["/archives/page/4/index.html","48283dd1ddbf08e5c2cfeb3c3a968c59"],["/archives/page/5/index.html","97ba15c437c27dbaed3f97dbcd451ff2"],["/archives/page/6/index.html","0deea54c79d7187c5dc2f24f7829dec3"],["/archives/page/7/index.html","e1037c370740062e7c50c945821752b9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/book/index.html","1cf262b58cb52a8b9f15c0c7bb09929d"],["/categories/Anime/index.html","6fa9167d06e0279fe389b81ebf9ecc51"],["/categories/Anime/宫崎骏/index.html","ec5ca155b77bb165c7b0e8eecea82e1d"],["/categories/Computer/Alienware/index.html","737ffff2ec171d1ae6d9e400ba4f5471"],["/categories/Computer/index.html","615c0fb446c32f096b487d2e349ff9ae"],["/categories/Daily/Hobbies/Guitar/index.html","6557d7114e2b2a731e205879261ce109"],["/categories/Daily/Hobbies/PersonalDiary/index.html","4133da3fe90b1ba65962d65ddb2c824b"],["/categories/Daily/Hobbies/PersonalPoetry/index.html","4c9ee24d9f6eedb630bdcc312820756c"],["/categories/Daily/Hobbies/Photography/index.html","a4c586c63dbe636927a8fada0b958810"],["/categories/Daily/Hobbies/index.html","cf193968cecec58c48edccf36d82275c"],["/categories/Daily/index.html","63fb287a2150283baabb1d274cd7eb1c"],["/categories/Daily/个人所得税/index.html","0eedeeddb25c0cc566b3a05baae37360"],["/categories/Daily/五险一金/index.html","2906a74a4f26ad1386e62ec30fbe21ce"],["/categories/Daily/新型冠状病毒肺炎/index.html","2401880637013e900b91ba7c1d31f388"],["/categories/Design/index.html","016ba2ff2c1ee39bf19b038e93e27d68"],["/categories/Emoji/index.html","7650bda933ff261b275e929bcbb0a2fc"],["/categories/Game/GamePlatform/Lutris/index.html","ca93fd30fcb952fec5a6f8dfb5db413f"],["/categories/Game/GamePlatform/Origin/index.html","fd429bc6057decc26278ab4b9b85ceea"],["/categories/Game/GamePlatform/Steam/CSGO/index.html","a11e05c4c46fd6c2833f953f8f5a5100"],["/categories/Game/GamePlatform/Steam/index.html","d88f0eb0db005d424944250e704d0dc4"],["/categories/Game/GamePlatform/index.html","2e5648e29d0caaec36667eedb4574f91"],["/categories/Game/index.html","4abbc246e4b49ec412f5282ace3d3c35"],["/categories/Google/Chrome/Chromium/index.html","37f6d92a0365f351b56e5784e4bade10"],["/categories/Google/Chrome/index.html","6d4fd9d0dc09258b91ef14392f30e4a6"],["/categories/Google/Google搜索/index.html","bd6e7a72c8efad5ddde18ed772524844"],["/categories/Google/index.html","35077cf966a3d08c4cd524ae3a4ffe06"],["/categories/Hardware/HardDisk/index.html","05b7f0551988f69c6e372661ca5cd319"],["/categories/Hardware/Router/index.html","0154e6a51d0f40a0c1ab36a516dd8196"],["/categories/Hardware/index.html","5493964617f0b56aceb2ff198f363bbd"],["/categories/Interview/Python/index.html","8f0d14e0c79a75ce23bfe8bab173d447"],["/categories/Interview/index.html","12cf5f8097b44a24fa0808baf04bcb1e"],["/categories/Movie/HongKongMovie/index.html","7722697c3cd5203fefa145d5217914fe"],["/categories/Movie/index.html","c73e26d723c20f94d62361cf99fb4f30"],["/categories/Movie/小王子/index.html","f1a9f0c65dad1cfc67ad48c1f4389e2a"],["/categories/Novel/index.html","f774923a3573945d80d44f994ff0e7f5"],["/categories/Novel/盗墓笔记/index.html","fe05b411c811f38195126c18f6da1696"],["/categories/OperationSystem/Linux/Manjaro/index.html","3c62031c3a10665b0d7454406bfcc621"],["/categories/OperationSystem/Linux/SteamOS/index.html","02b3521a1d648ff54c36ade695cb5a68"],["/categories/OperationSystem/Linux/index.html","87b1a5f27f2c69b9076b182c1fb180c6"],["/categories/OperationSystem/index.html","7f0dac60fd2394f9a3bb751d6b161394"],["/categories/Research/Math/MathJax/index.html","8eaaf4b7b053d29b6fac77656d9cecd2"],["/categories/Research/Math/index.html","087295e4d4ff2b2a3c03b63b09ae14c1"],["/categories/Research/Math/线性代数/index.html","61b5ccc74145faaace740ba4d7385ad6"],["/categories/Research/Math/高等数学/index.html","038c67596bf93ad00291514347dc7f0b"],["/categories/Research/Memorizing/index.html","41bed383c03e60cbd502e2c7c78292b1"],["/categories/Research/index.html","a9d67a552c24bc87c95be669c4a68ee6"],["/categories/Research/思想政治/index.html","70150aa09e33d7ec6ad2a54441968577"],["/categories/Research/数据结构/index.html","a79e9fccef7c9c2a0e2d95d814668642"],["/categories/Research/英语/index.html","2eab20807ae7eba9ca7af0422d341094"],["/categories/Research/软件工程/PseudoCode/index.html","398873086b0c2d9c2c4aea8bb97c5e6e"],["/categories/Research/软件工程/index.html","82e40cf5396ca361e223bfffa59736bc"],["/categories/Resources/index.html","1380a4cd979f1179e9e6237bec7dcfc5"],["/categories/Resources/游戏资源/index.html","150dab287ac5e51c53e5258873fd9c13"],["/categories/Resources/游戏资源/微元素/index.html","a74a25874b5d51209aa3eb77907a7757"],["/categories/Software/Anbox/index.html","935095fa0d98f48e5dbb8634af5dfa29"],["/categories/Software/AndroidStudio/index.html","81bcb6b00090075abb3d9c459cf55dfb"],["/categories/Software/Office2019/index.html","c7cf5e468cc8217d52f0b2815c722e38"],["/categories/Software/Pycharm/index.html","035f241ae3816cd65bb46db3fc49e805"],["/categories/Software/Thunderbird/index.html","306798d8dc8c31c26438a381090123cb"],["/categories/Software/UltraISO/index.html","79f6ad34ce99b55e59e7d6fd497a1240"],["/categories/Software/Unity/index.html","514e9f24b890dc4d5208c5148662e3c7"],["/categories/Software/VLC/index.html","cf7ef7ba2ed2b6b7ee8773931c37cba9"],["/categories/Software/VMWare/index.html","1ee2ab7474a8ee1068684e67780c104c"],["/categories/Software/VisualStudio/index.html","7227e4b766a485611f947ca1acd624c6"],["/categories/Software/VisualStudioCode/index.html","1830410933694408485d45f8da0b561e"],["/categories/Software/index.html","fdab8e5c0dc095d443a079b934ea29d1"],["/categories/TechnicalResearch/Android/EditText/index.html","1b7695b93f0db46795f77d776dbb04e1"],["/categories/TechnicalResearch/Android/Room/index.html","c987c06d31655ac6d02815f120b54db6"],["/categories/TechnicalResearch/Android/RxTool/Wiki/index.html","9205420b9d2b11b7cdb6f6c50e3c8ed4"],["/categories/TechnicalResearch/Android/RxTool/index.html","b017f243cbed152335760b0bd001918f"],["/categories/TechnicalResearch/Android/UnitTest/index.html","ca23980e7134871eaabcfff8e2efe886"],["/categories/TechnicalResearch/Android/index.html","8b7a90976316c771e16749e7d3de0d57"],["/categories/TechnicalResearch/Git/index.html","8225b2212654cd08f5314b52d637df6f"],["/categories/TechnicalResearch/GitHub/index.html","2fedddcef4d30e6f116de79c1a4d9b71"],["/categories/TechnicalResearch/Hexo/index.html","bbc1500e4c2174dc7be84f39289ab36e"],["/categories/TechnicalResearch/Html/index.html","bfb13a2cd72bb922e2326570bcf006fe"],["/categories/TechnicalResearch/Java/index.html","9a479f91725dc8c2d815044b1b3232f5"],["/categories/TechnicalResearch/JavaScript/index.html","76688fb1e9c8796745402e298673d94a"],["/categories/TechnicalResearch/MachineLearning/DeepLearning/index.html","74889126a861cab3550ddf137d95ff89"],["/categories/TechnicalResearch/MachineLearning/index.html","c7b802e68dddafa929a9a3914d5d5601"],["/categories/TechnicalResearch/Markdown/Emoji/index.html","0cb42898b69039b33232c943517cc774"],["/categories/TechnicalResearch/Markdown/GFM/index.html","684328867edf17f5b532338869e71a3d"],["/categories/TechnicalResearch/Markdown/index.html","2890d87d58cee2f9daa4f4a8932bf729"],["/categories/TechnicalResearch/PT站/NexusPhp/index.html","4772739fdf6729cfea6d70d54e0480c8"],["/categories/TechnicalResearch/PT站/index.html","30c39665c5d7808ff9c1546fff2f54ff"],["/categories/TechnicalResearch/Python/index.html","232f1118643a8e99c4bea5e932f6dda2"],["/categories/TechnicalResearch/ReactiveProgramming/index.html","0ca41feac0bb0db8b2d37ea7f0f5ce5f"],["/categories/TechnicalResearch/Regex/index.html","acced4e5a6e6093538434defe61d8221"],["/categories/TechnicalResearch/Shadowsocks/index.html","d75e6cd66ecd472a515ff95ec700c843"],["/categories/TechnicalResearch/Spider/index.html","d279be4a2bfc28ca08cf982f7c0a604e"],["/categories/TechnicalResearch/TA/index.html","84002e9399dacf740fc5920382ad87c5"],["/categories/TechnicalResearch/index.html","020de63192b66c7b27d3fca0da698ba1"],["/categories/Teleplay/index.html","a31a954586bfe5cbe612f118b5f315a5"],["/categories/Teleplay/亮剑/index.html","d785968d60501ddeed66fcaf7b27100a"],["/categories/Tool/Music/index.html","5c9b52494624d12384493ed225ba8724"],["/categories/Tool/Wallpaper/index.html","1f8661c3d7c4b8a9a5997551de8e6a42"],["/categories/Tool/index.html","e9a908dade81fafa9df6f83968e4ad4d"],["/categories/index.html","bd0ff7974ec53b918a888f0b3197a65e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3494fa2eea43b80d1ff1893b67604ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","bba964abc4c34ec1b83953bc717ba0cb"],["/images/favicon-handsome.png","0cfb2b2f22807cdd6a929fd6db3428a4"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","91f966c29be6fb2de4d60c3040533900"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/link/index.html","ea54fe398e576aaaaf11a528367c849a"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/messageboard/index.html","5450ad2cfad0219d92be203c3a8842ab"],["/movie/index.html","6ced514725b2121b26f70a66612f3786"],["/music/index.html","83705c955165e58ec1bf292eeafe6172"],["/night_sky/index.html","387d8d4e8b3346d3e011ad6d226e303e"],["/page/10/index.html","dd3fefeb30bd5ef73f09770f8b1ad3ea"],["/page/11/index.html","661b237f426b4685641091ded98960f8"],["/page/12/index.html","371d06e5bf636ae8519a462c22c40b7b"],["/page/13/index.html","392e638be859a402f8a60df40260a6cd"],["/page/2/index.html","89f5472b30ff6992ef53d8b3664c4e0d"],["/page/3/index.html","55d238509dd881af32caed06aeaa262d"],["/page/4/index.html","5f69f2e2a81f393c8a0abcf2039c4207"],["/page/5/index.html","970193e13ea86d807a0cfcfb575c1b47"],["/page/6/index.html","18a6a2a497fdd2f2ffab047ba293ddf8"],["/page/7/index.html","8f48ab8dc7160018bebaf8b45dead419"],["/page/8/index.html","d5ea32039c103409423e037c6285bfa0"],["/page/9/index.html","5d8353ea848c8e2b39d960eea929610f"],["/tags/ARK/index.html","934750c7f5f729fc32b95114fb63ee56"],["/tags/Alienware/index.html","9ffb6cebb9b1fc5439ff6ba8e928f750"],["/tags/Anbox/index.html","729781c8688de4c5fbacadc72f12e3b9"],["/tags/Android/index.html","3ef45ba5e2939dda3b78e9c90c07f572"],["/tags/AndroidStudio/index.html","5e822c4262a8f74e1a173a7cafbdf851"],["/tags/Anime/index.html","55619a77db463fc21e97ff3bb3bf2fb1"],["/tags/Base64/index.html","2ff9382a83ae8062e4d81f4851357e3d"],["/tags/CDN/index.html","5011a66926a65ae7e802404f1c9969d1"],["/tags/CSGO/index.html","21f0ecf5b208df60aea6e1de2e755429"],["/tags/Chrome/index.html","3830b522556b53dee5ac4f0233164fd6"],["/tags/Chromium/index.html","0a42e429ac952e790e57f7e5921b816e"],["/tags/Computer/index.html","af207e2ceb9a558873271fe5f53e6325"],["/tags/Contributor/index.html","10c7ec4be377085fba71598f85ca23ca"],["/tags/Daily/index.html","2ce1c29557e201455da533b6f3c22f8a"],["/tags/DeepLearning/index.html","27474b0a9828cd46d7eb7e335889ab7d"],["/tags/Design/index.html","fb563049963e68882b22fd21e55d4b2f"],["/tags/EditText/index.html","24e48a6d274b0ddc006bc40b7cda4b61"],["/tags/Emoji/index.html","061f2ff7b8c31e69de5e4681d8090e16"],["/tags/GFM/index.html","a08336ed964053a00cb39b83d8bf1165"],["/tags/Game/index.html","8615fae8a771f22114d0699b5066842b"],["/tags/GamePlatform/index.html","7e4e543c2bc347ec1a194626026b7bfb"],["/tags/Git/index.html","c5ac6993641cccd420a0d820bbb5d352"],["/tags/GitHub/index.html","3c9170107ea9e39c282c391fa6e0f7b6"],["/tags/Google/index.html","f76028b7b937f6d3e2458d13e87af2d2"],["/tags/Google搜索/index.html","d7e4478f809aff8c59aae8a2f7616268"],["/tags/Guitar/index.html","0d274f04f792e973f50c9e94b2f276e3"],["/tags/HardDisk/index.html","0f8f1d1cba9d6db873798f9a055822f7"],["/tags/Hardware/index.html","69a7d84ffc0a43da469d19a64b73f36d"],["/tags/Hexo/index.html","8c430e51e304ac57972052e6b9f7f1e6"],["/tags/Hobbies/index.html","975a0f196bdc00914c733207e4c77945"],["/tags/HongKongMovie/index.html","c5e670c3af7c1cb7d3ee2274e2ae97e3"],["/tags/Html/index.html","e84bfd2029583403d9387ae2af0b85e0"],["/tags/Interview/index.html","dc57ca10c583342befd7e182d07087cd"],["/tags/Java/index.html","291cbb701396003e18416d1904c4466f"],["/tags/JavaScript/index.html","7c9d9c63ec98923ea3ff5a08eaf5e975"],["/tags/JetPack/index.html","25582c8d29ea580e85b908213d5c885c"],["/tags/Linux/index.html","9aef5f180fcbd3293ed82fd33edbfc6b"],["/tags/Lutris/index.html","7140b7cbeb48808ad3b037c0825b8285"],["/tags/MachineLearning/index.html","4df4124f77ee645898f3b21530d0cd71"],["/tags/Manjaro/index.html","77324fc17a769750ddd83f1bca1232e2"],["/tags/Markdown/index.html","441ab344a41b24e9d04f05730f106a91"],["/tags/Math/index.html","f38e62f40fc34cc7db052c594180f108"],["/tags/MathJax/index.html","f8bf9e4d7e440af8c0b942dbe5349ae8"],["/tags/Memorizing/index.html","a55f64ed0ff4b9e2710a96e5b023735c"],["/tags/Movie/index.html","9d3f2f944f1aabadf96170103d599db4"],["/tags/Music/index.html","f92bb105747f3b4188ff5bc21c7dfb5f"],["/tags/NexusPhp/index.html","d4706844a060e3a3796620508db932dc"],["/tags/Novel/index.html","babe35a6df5ffa3725522f0978ff049e"],["/tags/Office2019/index.html","8d53b83913a59f7ab057d77bc16df38b"],["/tags/OperationSystem/index.html","bef77c944858b3567607a636c5b36391"],["/tags/Origin/index.html","36e0d06d2b7ed3fdf8344ac8d60960d5"],["/tags/PT站/index.html","e884af31a0eb54be13bc06069c13443c"],["/tags/PersonalDiary/index.html","ce6bebc7678a3a99159158f0373ff63f"],["/tags/PersonalPoetry/index.html","fa2bb8ed2b7197b1c4defacd08656d95"],["/tags/Photography/index.html","38734097641670254aa347c2cbcf2741"],["/tags/Port/index.html","1ec2e7148e5603dda5a95eba315d0007"],["/tags/PseudoCode/index.html","33f8e7d2162123c6b1fa7586990c7ee8"],["/tags/Pycharm/index.html","14f7aeb776b93349a5f1d48c4db750e9"],["/tags/Python/index.html","eb35bcd9d156d63140624af714241eea"],["/tags/ReactiveProgramming/index.html","20d76f715160b497190dd8edb278f056"],["/tags/Regex/index.html","4fdd3b4e22eff47a38b73f21d8e31e90"],["/tags/Research/index.html","9c34de7ee42579f735b1c09ac5b32b25"],["/tags/Resources/index.html","d0ce7d96bfb27f21c044f0818c2f7b07"],["/tags/Room/index.html","a7616470be2576ce1c586c46b55a0593"],["/tags/Router/index.html","ecb728bfdb07cde00f354fcaa8cb0b8c"],["/tags/RxTool/index.html","607274254f96c68bc355dac039079f38"],["/tags/Shadowsocks/index.html","8e9cb728cb9ef865f3f59189c995492d"],["/tags/Software/index.html","d8da749d8466b355c05e05797b8e50ec"],["/tags/Spider/index.html","527b48ed359b9ac092393712da4ee1de"],["/tags/Steam/index.html","11e8f5d78facf6b56753d7c7dc2360e0"],["/tags/SteamOS/index.html","0e23c0f3c47b9f2d67749fbdb7915492"],["/tags/TA/index.html","37f15e0ff297e53d20cf08ea76d655d0"],["/tags/TechnicalResearch/index.html","e1416ed9189266559eff5b585a6e46a7"],["/tags/Teleplay/index.html","c27f6758becaefae08bdf60701195e76"],["/tags/Thunderbird/index.html","e7996ffd25709ff259174aa97c309cfc"],["/tags/Tool/index.html","7a096775a5435ae66dbdf9113857367d"],["/tags/UltraISO/index.html","9878655ad1da3505501bbf03327bbdbd"],["/tags/UnitTest/index.html","a198a6b8b441d8899347ecec7035030e"],["/tags/Unity/index.html","9cc8ae1194db7b090422d02317d9fdc3"],["/tags/VLC/index.html","414eab540526400ba097764fb996ebb2"],["/tags/VMWare/index.html","b6a03d8898c0bd64b33b4229b2b0ae13"],["/tags/VisualStudio/index.html","20bf5fc61e1018c1595e55753f7834d2"],["/tags/VisualStudioCode/index.html","dd1f1a69db25ae6c9ab32046280dae24"],["/tags/Wallpaper/index.html","35d324d28ff425f98f5be4f53ae3d148"],["/tags/Windows/index.html","71003c623765240382f9bca80ac483b3"],["/tags/index.html","e388faa4beccd21e9640b0744f38ab90"],["/tags/专业术语/index.html","62d740d3c6dcad4ee1e086279da58d29"],["/tags/个人所得税/index.html","454799659e90d015348b179e7246fada"],["/tags/五险一金/index.html","211da819bc75729a6ee1364967c76288"],["/tags/亮剑/index.html","ae19c52632e0cb1cb503cd8a91799f10"],["/tags/仙剑奇侠传系列/index.html","d22dcd8a8225c502255d44107f966828"],["/tags/劣币驱逐良币/index.html","c6cc36828f6b1b1319ce862440798995"],["/tags/千与千寻/index.html","83799af1cbfde7eca97029b515ce7f1f"],["/tags/宫崎骏/index.html","6c246700b1d66b01186c2765d4043d8f"],["/tags/小王子/index.html","b930c338e57ff6a7f2d9e3bec570b8e7"],["/tags/开心鬼系列/index.html","d731dd04b9b20070f75d3c6a0dc7b99c"],["/tags/微元素/index.html","906007493cc8e15d57e627058657fd65"],["/tags/思想政治/index.html","47f2ba05d22614635ed8a1e3956488de"],["/tags/数据结构/index.html","8d2f283d646587ee8c1449b5e525543b"],["/tags/新型冠状病毒肺炎/index.html","2aca2fa26cd303aba58c440065573b23"],["/tags/游戏资源/index.html","4a063a186a0612ce7f456378ed109837"],["/tags/盗墓笔记/index.html","d615c243bfe349472cbc1d3726d71e69"],["/tags/线性代数/index.html","a7e246fb87572efb8178a9e43350d661"],["/tags/网络用语/index.html","4d14060640a37e13a27a4f6ca1fa9e7d"],["/tags/英语/index.html","4299e0f2a7c502a3c6ab0c13536639be"],["/tags/软件工程/index.html","2de442e8398993875be3db48c549d5a6"],["/tags/高等数学/index.html","43b53ba27376e42def0915e4c2c2362a"],["/随手记/AndroidX/index.html","86353e63a055946b31d14494f61ea6be"],["/随手记/Android研究Fragment/index.html","dc9e8f20880b1480c0db01fd4ee4c6cb"]];
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




