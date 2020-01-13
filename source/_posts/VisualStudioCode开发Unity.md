---
title: VisualStudioCode开发Unity
date: 2020-01-08 23:22:15
description: 因为我的Alienware更换成了Manjaro系统，想要在Manjaro下开发是Unity,但是运行环境还是需要折腾一番。
tags:
  - Software
  - VisualStudioCode
  - Unity
categories:
  - Software
  - VisualStudioCode
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bgf7b2a19.jpg
---
# 前言
因为我的Alienware更换成了Manjaro系统，想要在Manjaro下开发是Unity,但是运行环境还是需要折腾一番。

# 安装Unity
在 AUR 市场搜索下载 UnityHub 程序，然后通过UnityHub安装最新版本的Unity编辑器。

# 配置VSCode

VsCode安装完成后，我们就可以在我们在unity3d中配置我们编写代码的工具了。  
> 打开unity3d软件，在edit菜单栏中点击Preferences,弹出Unity Preferences面板，  
> 在Unity Preferences面板中选择第二项External Tools，  
> 在右侧第一项External Script Editor 中选择Browser,  
> 然后选择桌面的VsCode快捷方式即可，  
> 此时我们再在列表中选择我们需要的 Visual Studio Code 即可完成编辑器的配置。

![](https://i0.hdslb.com/bfs/article/3073f913268b5c652ae2c5a40efa328340f035a2.png@1320w_716h.webp)

# 测试VSCode打开代码的响应速度

下面我们测试一下，我们在unity3d中创建一个脚本，然后第一次双击打开，VsCode从软件响应到打开我们要编辑的代码文件，在我的机器上仅仅用了5秒钟，比之前vs打开响应速度提升了好几个量级。虽然还谈不上绝对秒开，却也是拖拖的爽了一把。

![](https://i0.hdslb.com/bfs/article/ab84a73fb58b489119d9b2adb2ca46055c773be6.png@1320w_698h.webp)

# VSCode开发Unity必备插件
前面提到，VsCode本身只提供一个最基本的框架和最基本功能，把所有需要的功能插件化，按需索取，由插件来丰富和扩展它的功能。增加的软件的灵活性和可持续扩展性，为软件的高效开发奠定的良好的基础，VSCode很像一个根据现实需要随时更换铠甲装备去迎接战斗的战士，活脱脱的现在装甲兵，机动性超强。

## Chinese (Simplified) Language Pack  
此中文（简体）语言包为 VS Code 提供本地化界面。针对刚刚上手的英文不是很好的同学们，应该是一个不错的选择

## C# (powered by OmniSharp)  
大家都知道最新版的Unity取消了JS(Unityscript)、Boo语言。未来将仅支持C#，所以必需安装安装C# 扩展以便让 VS Code 支持C#的开发,此款插件还附加很多其它功能的加持，效果杠杠的。亮点功能有智能感知、C＃的片段、搜索符号、引用参考。

## Debugger for Unity
在实际的项目中，我们会频繁的调试程序来排查程序的错误点，安装Debugger for Unity扩展可以让我们使用VsCode代码调试Unity C＃项目。

通过在脚本中设置断点，切换到调试视图并单击绿色三角形按钮以附加到Unity，在VS Code中调试C＃脚本。在Unity中进入播放模式，断点应该在VS代码中停止。如果想修改代码，无须停止调试，直接在编辑器中修改即可。

![](https://i0.hdslb.com/bfs/article/b27d3e8fbec666d351c13592d9a854718e39a670.png@1320w_688h.webp)

[安装地址](https://links.jianshu.com/go?to=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DUnity.unity-debug)


## Unity Tools

[安装地址](https://links.jianshu.com/go?to=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DTobiah.unity-tools)

## Unity Snippets

[安装地址](https://links.jianshu.com/go?to=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DYclepticStudios.unity-snippets)

## Unity Code Snippets

此款插件扩展为VS Code创建了Unity里的代码集合，它利用最新的代码段功能为你轻松创建Unity类和方法。特别是我们常用的MonoBehaviour类中所有方法，都可以快速创建，极大提高了程序猿写代码的速度。

[安装地址](https://links.jianshu.com/go?to=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dkleber-swf.unity-code-snippets)

## C# XML Documentation Comments
快速生成代码注释头



# 安装SDK环境

安装 `.Net SDK`
```bash
sudo pacman -S dotnet-sdk
```

安装 `.Net Runtime`
```bash
sudo pacman -S dotnet-runtime
```

安装 `msbuild`
```bash
sudo pacman -S msbuild
```

---

> 参考链接：  
> https://code.visualstudio.com/docs/other/unity  
> https://www.bilibili.com/read/cv3620568/  
> https://github.com/OmniSharp/omnisharp-vscode/issues/2011


---
> to be continued...