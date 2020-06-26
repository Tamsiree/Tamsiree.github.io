---
title: 基于深度学习的ECG心律失常分类入门
author: Tamsiree
date: 2020-06-26 11:00:46
description: 随着“人工智能”的兴起，“深度医疗”这个概念也被提了出来，越来越多的基于机器/深度学习的医学研究项目已经展开，比如基于深度学习处理医学图像，对特定医学病变做诊断识别等。如果在未来这类研究真的大面积落地了，那真将是一件大快人心的事情，很大程度上解决了很多现实问题，比如节约了医疗资源等等。
tags:
  - TechnicalResearch
  - Python
  - DeepLearning
categories:
  - TechnicalResearch
  - Python
  - DeepLearning
  - ECG
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/bg-8c6afe1.jpg
---
# ECG分析:基于深度学习的ECG心律失常分类入门

> 本文主要用于备份保存。

## 写作动机

由于受突发疫情的影响，开学时间推迟了（在此特向奋斗在前线的各行各业的工作者们致以崇高的敬意！）。前天晚上刚好看到一篇新出的论文，跟自己之前做的方向类似，当时想着抽个时间复现一下，一方面是为了做一个备忘笔记，另一方面，考虑到有一部分后来者可能也是ECG算法研究相关的方向，所以做这个简单的入门探讨，也许会起到一丁点的作用。这个是从数据获取到最后的结果评估，还是比较完整的，主要特点是内容简单，写的代码也是没有经过封装的，还是比较容易上手的。特别强调，**只适合小白食用，大佬请绕行！！哈哈哈…**。

## 深度医疗
随着“人工智能”的兴起，“深度医疗”这个概念也被提了出来，越来越多的基于机器/深度学习的医学研究项目已经展开，比如基于深度学习处理医学图像，对特定医学病变做诊断识别等。如果在未来这类研究真的大面积落地了，那真将是一件大快人心的事情，很大程度上解决了很多现实问题，比如节约了医疗资源等等。

本篇主要是介绍基于深度学习进行心电图（ECG）疾病分类的应用，用的数据库是MIT-BIH Arrhythmia Database（MITAB)；MITAB后面会具体介绍的，通过复现一篇新出的论文 [https://doi.org/10.1007/s10916-019-1511-2](https://doi.org/10.1007/s10916-019-1511-2)，用卷积神经网络(CNN)做一个简单的心律失常分类。后面也会把代码上传到个人的github上。那现在开始吧。

**简单认识ECG**  
ECG(Electrocardiogram)就是我们常说的心电图，相信每一个人都在医院做过心电图检查。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306143936242.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
既然要做ECG分析，那么在这里我们来具体认识一下ECG：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306163317487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
如图，典型的心电图包含了一系列特征波和特征波段：  
特征波：P波，R波，T波，U波等；  
特征波段：P-R间期，QRS波群，S-T段，R-R间期，Q-T间隔等。  
这些波段都包含了非常多的病例信息。例如：RR间期可以反映心动周期的时限；相邻心动周期的 RR 间期的比值可以反映室性早搏；R 波和 S 波幅值的比值和 R 波和 S 波之间的时限可以反映房性早搏等异常情况，等等。医生分析心电图的时候也是结合这些典型的特征，进一步做医学诊断。  
因此，在用深度学习算法做心律失常分类之前，首先要做的一个工作是，对ECG信号特征波和特征段的提取，也就是前期的预处理工作，这个后面会具体讲到。  
所以接下来分别从**MITAB数据库的获取**，**数据预处理**，**ECG分类**等方面展开。开始也说了，这是一个入门的探讨，内容是基础的，这方面的博客也出来了很多，很多前辈的工作做的很详实，比如：https://blog.csdn.net/qq\_15746879 等， 关于这方面的文献也有很多，感兴趣的可以联系我或者自己去查。另外，前面有提到，算法设计是基于新出的一篇文章 https://doi.org/10.1007/s10916-019-1511-2 ，基本上是一个复现工作，部分操作是依赖个人经验，如果存在错误和疏漏，欢迎批评指正，毕竟水平有限。


# 正文
## ECG数据库的获取

**数据来源：MIT-BIH Arrhythmia Database 数据库介绍和获取**

前面已经对ECG信号有了简单的认识，那么现在来简单看看我们的研究主角——**MITAB心电数据**。本篇基本上是以图为主啦，哈哈，基本上是一步一步的操作过程展现。

获取网站：https://www.physionet.org/ ，Data是我们获取数据的入口：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306155338488.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
可以看到，侧栏不仅仅有ECG数据：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306155210434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
直接找到我们需要的ECG就好啦，  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306155713120.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)额，比较拖沓，其实直接从这里\*\*https://www.physionet.org/content/mitdb/1.0.0/\*\*进入就可；这里面有关于这个数据库的具体介绍，建议下载之前，仔细阅读一下，毕竟做饭之前要把厨房的柴米油盐都熟悉一下：  
可以看到：

> **这个MITAB包含48条双导联的ECG记录，除少数记录外，每条记录的第一个导联都是II导联，每条记录长度为30分钟，采样率360 Hz，算起来有30_60_360=648000个采样点，但其实每条记录都有650000个点，也就是并非严格等于30分钟。（引用别人介绍的，讲得很清晰了）**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306160237912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
如下位置下载数据：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030616154541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
下面就那100信号做一个展示的一个小例子吧：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306162136605.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306162313842.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)view一下：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306162510970.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)Table选项是关于该信号的相关信息：标签数目，疾病类型，导联号等等。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306162537107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)点击上面选项自行查看，也可以切换其他记录感受一下。关于数据的获取就介绍到这里。

最后，还需要介绍一下标签，这个数据库的标签有两种，一种是基于心拍的；还有一种是基于片段的，考虑的是信号在某一时段的节律变化。因此，我们要根据问题的需要，使用相应的标签文件。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030616361430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)具体如下：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306164721310.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)还可以点开每一条记录查看标签信息：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306164816113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
下面是一个所有涉及到的类型的标签汇总，我们用到的也就是上半部分的心拍标签：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030616505596.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)

## python读取数据和预处理操作

**数据库的Python读取**  
本次读取数据，用的是一款专门读取MITAB数据的工具——**WFDB-python**，[WFDB包下载](https://pypi.org/project/wfdb/) ，全称是 Python waveform-database ，这是一个用于读取、写入以及处理WFDB信号和注释的工具库，重点是还加了关于生理信号处理等功能。不得不说在处理ECG方面，包含的API真的是太友好啦。安装的话，直接：

```bash
    pip install wfdb
```

下面结合读取一条记录的例子，做一个简单的示范：

1).  关于用wfdb对119记录的相关操作

```python
    import wfdb
    import matplotlib.pyplot as plt
    #所有这上面贴出的地址要换成自己的地址，这里我打码了
    annotation= wfdb.rdann('E:/...data/MITDB_CNN_Classification/MIT_BIH/119','atr')#有很多基于annotation的操作；
    record_name=annotation.record_name     #读取记录名称
    label1=annotation.symbol #心拍的标签
    label2=annotation.aux_note  #节律片段的标签
    label_index=annotation.sample   #标签索引
    record=wfdb.rdsamp('E:/...data/MITDB_CNN_Classification/MIT_BIH/119')#读取119记录
```

可以看到，record 元组里面包含了一个array，里面就是ECG信号幅值，也就是我们需要的数据，前面说过，这个数据库采集的都是两个导联的数据；另外一个是字典，包含了该条记录的相关信息：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030618390731.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)plot一段：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306184903342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)最后贴上一个包含数据和标签的展示图：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306185230225.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)这里说一下，关于R峰定位算法有很多，有一个经典的就是Pan-Tompkins algorithm： Pan, J., and Tompkins, W. J., A real-time QRS detection algorithm.IEEE transactions on biomedical engineering 3:230–236, 1985.由于R峰定位等基准点检测不是本次研究的重点，所以这里直接采用给定的R峰的索引，也就是标签索引。  

2). 数据预处理  
（1）滤波：  
这里采用文章里面提到的小波去噪的方法，原因解释得也很清楚：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306190054508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
（2）心拍截取：  
因为我们的是基于心拍做心律失常分类的，那么我们需要做的一个工作是心拍截取，文章种提到，以R峰位基准点，取前面0.4s后面0.5s作为一个心拍，也就是：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306190412157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
采样率=360Hz，也就是心拍长度是 0.4_360+0.5_360=324.

`这里只给出这一操作步骤，这里还需要考虑边界值，哈哈哈，这是刷题习惯啦`

```python
beat=record[label_index[j]-144:label_index[j]+180]
```    

相关的代码文件后期会上传个人[GitHub](https://github.com/cay846545867) https://github.com/cay846545867

## CNN模型的搭建 \ 数据训练和测试

在搭建模型之前，讲一下本次任务需要区分的类别，MITAB根据心拍类型划分了14个小类：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030700412644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
也可以用wfdb查看：
```python
    wfdb.show_ann_labels()
```

```python
    label_store symbol                                    description
    0             0                              Not an actual annotation
    1             1      N                                    Normal beat
    2             2      L                  Left bundle branch block beat
    3             3      R                 Right bundle branch block beat
    4             4      a                Aberrated atrial premature beat
    5             5      V              Premature ventricular contraction
    6             6      F          Fusion of ventricular and normal beat
    7             7      J              Nodal (junctional) premature beat
    8             8      A                   Atrial premature contraction
    9             9      S     Premature or ectopic supraventricular beat
    10           10      E                        Ventricular escape beat
    11           11      j                 Nodal (junctional) escape beat
    12           12      /                                     Paced beat
    13           13      Q                            Unclassifiable beat
    14           14      ~                          Signal quality change
    16           16      |                     Isolated QRS-like artifact
    18           18      s                                      ST change
    19           19      T                                  T-wave change
    20           20      *                                        Systole
    21           21      D                                       Diastole
    22           22      "                             Comment annotation
    23           23      =                         Measurement annotation
    24           24      p                                    P-wave peak
    25           25      B              Left or right bundle branch block
    26           26      ^                      Non-conducted pacer spike
    27           27      t                                    T-wave peak
    28           28      +                                  Rhythm change
    29           29      u                                    U-wave peak
    30           30      ?                                       Learning
    31           31      !                       Ventricular flutter wave
    32           32      [      Start of ventricular flutter/fibrillation
    33           33      ]        End of ventricular flutter/fibrillation
    34           34      e                             Atrial escape beat
    35           35      n                   Supraventricular escape beat
    36           36      @  Link to external data (aux_note contains URL)
    37           37      x             Non-conducted P-wave (blocked APB)
    38           38      f                Fusion of paced and normal beat
    39           39      (                                 Waveform onset
    40           40      )                                   Waveform end
    41           41      r       R-on-T premature ventricular contraction
```

根据AAMI标准，这14个小类集成为5个大类(N, SVEB, VEB, F, Q):  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020030619365077.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)我们的任务也是基于对这5个大类开展的，所以在截取心拍的时候，就要根据标签类型，将样本归类：

```python
    #这是截取中间步骤的代码块
    if label[j]=='A' or label[j]=='a' or label[j]=='J' or label[j]=='S':
        Seg=record[label_index[j]-144:label_index[j]+180]
        segment=resample(Seg,251, axis=0) #根据文章要求，重采样到251个点
        SVEB_Seg.append(segment)           
```

到这里，心拍截取好了，也归类了。下面就是模型的搭建（这里就不再专门介绍卷积神经网络了，需要很长篇幅）直接开始模型搭建吧：

**模型搭建**  
这个模型其实没什么新意的，2层卷积2层池化和3个全连接层，算是最入门的了，不过这里作者用了一个“多头”输入（笑cry…）3个输入都是同一条数据，只不过每一个分支设置的卷积核参数不一样，例如第一层的三个通道的卷积核尺寸分别是4，6，8，个人觉得这里没有使用图像处理中的3x3，1x1等更小卷积核，是因为我们的ECG是一个基于幅值的低频数据，小的感受野不一定能够包含一个较大范围的幅值变化，也就是较小的局部区域，很难构成特征性较强的波形。而为什么没有使用诸如16，32之类的大卷积核呢？因为我们的心拍本身就是一个短时间数据，过度关注整体上的变化而忽略了局部，所谓“过犹不及”，所以选择了三个中等大小的卷积核。总的来说，调参是一部分，还有一部分是要基于问题本身，从数据层面的分析，再到模型层面的分析。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306201503289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)原本是324的心拍长度，看到这里的时候，输入是251，作者好像是没提，为了尽可能复现，在这里我就重采样到了251。  
**交叉验证**  
拿到文章的第一眼先看看作者做的是关于inter-patient，还是intra-patinet，（关于两种分类模式，推荐看我有一个师兄的博客[inter-patient和intra-patient](https://blog.csdn.net/qq_15746879/article/details/80487543)https://blog.csdn.net/qq\_15746879/article/details/80487543，介绍得很清楚）  
读到下面的流程图，一眼就看出来了(其实看最后的结果展示，也看得出来)：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306202554411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
这里，作者是先截取心拍，然后数据集划分，采用了三个不同折的交叉验证：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306202652846.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
基于intra-patient的分类，完全不考虑个体差异性问题，训练集和测试集可以来自同一个病人，个体差异性带来的消极影响最小，实现难度很小，  
很容易就可以达到很高的性能。所以，这里我只采用了5折交叉验证的例子（即Experiment3）

## 实验结果的评估和分析

数据和模型完成了之后，就是训练和测试了，这里顺带提一下，MITAB的数据是48条记录的，而我们在做ECG分析的时候，都是去掉了四条记录（102，104，107，217）所以最后的数据是44条记录的。  
所有各类心拍样本数如下：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307005010670.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
五折交叉验证，分别做了4分类和5分类。另外，论文中采用敏感度(Se)和正预测率（+P）作为评估指标。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307010943123.png)  
下面展示一下结果：  
**实验结果评估和分析**  
1.实验结果  
由于网络本身的随机性，每次的结果可能有一些偏差，5折交叉验证之后，也分别计算了平均Acc和F1。最后给出了相对好一点的混淆矩阵和具体的指标。  
(1) 五分类（N,SVBE,VEB,F,Q）结果：  
平均Acc=99.07%, 平均F1=0.77  
归一化的混淆矩阵：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307105803894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
**N:**  
Se=0.996061  
+P=0.992263  
**SVEB:**  
Se=0.814607  
+P=0.979577  
**VEB:**  
Se=0.970014  
+P=0.979577  
**F:**  
Se=1.0  
+P=0.979072  
**Q:**  
Se=0.0  
+P=nan

(2) 四分类（N,SVBE,VEB,F）结果：  
平均Acc=99.0%, 平均F1=0.95  
归一化的混淆矩阵：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307105831940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  

**N:**  
Se=0.995605  
+P=0.992019  
**SVEB:**  
Se=0.802792  
+P=0.886320  
**VEB:**  
Se=0.974252  
+P=0.982456  
**F:**  
Se=1.0  
+P=0.993243  

（3）文章中的四分类结果：  
混淆矩阵：  
![![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307021630639.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70](https://img-blog.csdnimg.cn/20200307021642104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
性能指标：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307032738635.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjU1OTQ3OQ==,size_16,color_FFFFFF,t_70)  
2.结果分析  
(1) 从数据和分类结果上看，**样本类别不平衡问题**严重，这也是面临疾病分类问题的常有的情况，毕竟异常的是占少数的，所以大部分工作也是去掉了对Q类心拍的四分类问题。这类问题一方面是从数据层面入手，比如过采样和欠采样，同时带来的问题是可能会出现过拟合；另一方面是从算法层面入射，比如修改损失函数，如：Sellami A, Hwang H. A robust deep convolutional neural network with batch-weighted loss for heartbeat classification\[J\]. Expert Systems with Applications, 2019, 122: 75-84.这篇文章作者是还是在inter-patient的情况下做的，通过设计一个动态的基于Batch 的加权损失，得到了良好结果，这里就不展示了，感兴趣的可以自行查看。  
(2) 本次探讨是基于**intra-patient**的例子，前面已经说了，intra-patient的模式忽略了个体差异性，带来的直接影响就是训练和测试的数据不一定存在分布不一致的情况。也就是说，难度大大降低了，其次，基于这种模式的研究是没有太多现实价值的。毕竟在临床研究中，一般是通过以往的诊断经验去分析新的别人数据，这个个体差异性就特别明显了。所以，做此类研究还是着眼于**inter-patient**模式下进行，或者patient-specific，后者难度稍微低一点。所以说，一开始就有提到，这是一个入门的小例子。  
(3) 还有一点，本次实验是基于基准点检测的心拍分类，如果使用任意节拍，或者一个长序列段，难度会有所上升，而且也要尽量摆脱基准点检测，因为准确率不可能百分之百，鲁棒性也有要求，其次是在操作过程上尽可能简单和稳定，这也是做所谓“深度医疗”的初心所在。  

**总结**  
总的说来，关于这方面的研究还是很有提升空间的，也相信会有越来越多优秀的方法被提出来。  

技术有限，如果存在表述和方法错误等问题，敬请指导。  
本次操作的所有代码将会整理上传至个人GitHub [https://github.com/cay846545867](https://github.com/cay846545867)，代码极其简单易懂。

> 来源：[惊鸿cloud](https://blog.csdn.net/weixin_42559479)

---
> to be continued...
