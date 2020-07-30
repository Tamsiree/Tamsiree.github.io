---
title: AssetBundle
author: Tamsiree
date: 2020-06-19 10:13:02
description:
tags:
  - Software
  - Unity
categories:
  - Software
  - Unity
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/jiguangbo.png
---
# 前言
这里是前言介绍。

# 正文
## AssetBundle的定义和作用 

1，AssetBundle是一个压缩包包含模型、贴图、预制体、声音、甚至整个场景，可以在游戏运行的时候被加载；  
2，AssetBundle自身保存着互相的依赖关系；  
3，压缩包可以使用LZMA和LZ4压缩算法，减少包大小，更快的进行网络传输；  
4，把一些可以下载内容放在AssetBundle里面，可以减少安装包的大小；  

## 什么是AssetBundle

可以归为两点：  
1，它是一个存在于硬盘上的文件。可以称之为压缩包。这个压缩包可以认为是一个文件夹，里面包含了多个文件。这些文件可以分为两类：serialized file 和 resource files。（序列化文件和源文件）
serialized file：资源被打碎放在一个对象中，最后统一被写进一个单独的文件（只有一个）
resource files：某些二进制资源（图片、声音）被单独保存，方便快速加载

2，它是一个AssetBundle对象，我们可以通过代码从一个特定的压缩包加载出来的对象。这个对象包含了所有我们当初添加到这个压缩包里面的内容，我们可以通过这个对象加载出来使用。

## AssetBundle使用流程

1，指定资源的AssetBundle属性  
	（xxxa/xxx）这里xxxa会生成目录，名字为xxx  
2，构建AssetBundle包  
3，上传AB包  
4，加载AB包和包里面的资源  

## AssetBundle使用相关API

```c#
BuildPipeline.BuildAssetBundles(dir, BuildAssetBundleOptions.None, BuildTarget.StandaloneWindows64);

AssetBundle ab = AssetBundle.LoadFromFile("AssetBundles/scene/wall.unity3d");
GameObject wallPrefab = ab.LoadAsset<GameObject>("CubeWall");
Instantiate(wallPrefab);
```

## AssetBundle分组策略（仅供参考）

1，逻辑实体分组  
a,一个UI界面或者所有UI界面一个包（这个界面里面的贴图和布局信息一个包）  
b,一个角色或者所有角色一个包（这个角色里面的模型和动画一个包）  
c,所有的场景所共享的部分一个包（包括贴图和模型）  
2，按照类型分组  
所有声音资源打成一个包，所有shader打成一个包，所有模型打成一个包，所有材质打成一个包  
3，按照使用分组  
把在某一时间内使用的所有资源打成一个包。可以按照关卡分，一个关卡所需要的所有资源包括角色、贴图、声音等打成一个包。也可以按照场景分，一个场景所需要的资源一个包  

总结  

1，把经常更新的资源放在一个单独的包里面，跟不经常更新的包分离  
2，把需要同时加载的资源放在一个包里面  
3，可以把其他包共享的资源放在一个单独的包里面  
4，把一些需要同时加载的小资源打包成一个包  
5，如果对于一个同一个资源有两个版本，可以考虑通过后缀来区分  v1  v2  v3  unity3dv1 unity3dv2  

## Build AssetBundles 

1,Build的路径（随意只要是在硬盘上都可以的）  
2,BuildAssetBundleOptions  
BuildAssetBundleOptions.None：使用LZMA算法压缩，压缩的包更小，但是加载时间更长。使用之前需要整体解压。一旦被解压，这个包会使用LZ4重新压缩。使用资源的时候不需要整体解压。在下载的时候可以使用LZMA算法，一旦它被下载了之后，它会使用LZ4算法保存到本地上。  
BuildAssetBundleOptions.UncompressedAssetBundle：不压缩，包大，加载快  
BuildAssetBundleOptions.ChunkBasedCompression：使用LZ4压缩，压缩率没有LZMA高，但是我们可以加载指定资源而不用解压全部。  

注意使用LZ4压缩，可以获得可以跟不压缩想媲美的加载速度，而且比不压缩文件要小。  


## AssetBundles的使用

1，AssetBundle.LoadFromMemoryAsync  
2，AssetBundle.LoadFromFile  
3，WWW.LoadFromCacheOrDownload  
4，UnityWebRequest  

## Loading Assets from AssetBundles

```c#
//一般
T objectFromBundle = bundleObject.LoadAsset<T>(assetName);
//GameObject
GameObject gameObject = loadedAssetBundle.LoadAsset<GameObject>(assetName);
//所有资源
Unity.Object[] objectArray = loadedAssetBundle.LoadAllAssets();
```

## 加载Manifests

```c#
//加载Manifests文件可以处理资源的依赖
AssetBundle assetBundle = AssetBundle.LoadFromFile(manifestFilePath);
AssetBundleManifest manifest = 
assetBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");
string[] dependencies = manifest.GetAllDependencies("assetBundle"); //Pass the name of the bundle you want the dependencies for.
foreach(string dependency in dependencies)
{
    AssetBundle.LoadFromFile(Path.Combine(assetBundlePath, dependency));
}
```

## AssetBundle的卸载

卸载有两个方面  
1，减少内存使用  
2，有可能导致丢失  
所以什么时候去卸载资源  
AssetBundle.Unload(true)卸载所有资源，即使有资源被使用着  
	（1，在关切切换、场景切换2，资源没被用的时候 调用）  
AssetBundle.Unload(false)卸载所有没用被使用的资源  
	个别资源怎么卸载1，通过 Resources.UnloadUnusedAssets.	2，场景切换的时候	  


## 关于文件校验

CRC MD5 SHA1  
相同点：  
CRC、MD5、SHA1都是通过对数据进行计算，来生成一个校验值，该校验值用来校验数据的完整性。  
不同点：  
1. 算法不同。CRC采用多项式除法，MD5和SHA1使用的是替换、轮转等方法；  
2. 校验值的长度不同。CRC校验位的长度跟其多项式有关系，一般为16位或32位；MD5是16个字节（128位）；SHA1是20个字节（160位）；  
3. 校验值的称呼不同。CRC一般叫做CRC值；MD5和SHA1一般叫做哈希值（Hash）或散列值；  
4. 安全性不同。这里的安全性是指检错的能力，即数据的错误能通过校验位检测出来。CRC的安全性跟多项式有很大关系，相对于MD5和SHA1要弱很多；MD5的安全性很高，不过大概在04年的时候被山东大学的王小云破解了；SHA1的安全性最高。  
5. 效率不同，CRC的计算效率很高；MD5和SHA1比较慢。  
6. 用途不同。CRC一般用作通信数据的校验；MD5和SHA1用于安全（Security）领域，比如文件校验、数字签名等。  


## 其他问题

1，依赖包重复问题  
a，把需要共享的资源打包到一起  
b，分割包，这些包不是在同一时间使用的  
c，把共享部分打包成一个单独的包  
2，图集重复问题  

3，Android贴图问题  
4，iOS文件处理重复fixed in Unity 5.3.2p2.  


> Unity Asset Bundle Browser tool




---
> to be continued...
