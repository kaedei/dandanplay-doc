# 弹弹play + AMD Fluid Motion 插帧教程

弹弹play支持基于 AMD Fluid Motion 技术的插帧。首先，根据AMD官方对此技术的描述，您需要拥有一张采用 AMD Radeon 芯片+支持GCN1.1架构的显卡。

其次，您需要安装最新版本的 AMD显卡驱动程序，以及 Bluesky Frame Rate Converter （简称为BFRC）这款软件。

最后，由于弹弹play本身的渲染机制，对于CPU及GPU要求较高，如果硬件配置不够的话容易出现画面撕裂等问题。

下面将介绍如何在您的电脑上配置此功能。

在弹弹play中开启插帧是一件很容易的事情，我们已经做到了播放器内集成、无需配置的开启方法。不过还是需要您提前将系统必备的程序都安装好。

**1. 安装 AMD 显卡最新驱动程序**

您可以在AMD官方网站 [https://www.amd.com/zh-hans/support](https://www.amd.com/zh-hans/support) 下载安装适合您显卡型号的最新版 AMD 显卡驱动程序。

最新版的AMD显卡驱动已经默认开启了插帧功能，不需要您像以前一样做其他设置了。

**2. 安装 Bluesky Frame Rate Converter （BFRC）**

BFRC软件是使播放器和显卡进行沟通的桥梁，安装BFRC之后，播放器可以通过调用它提供的插件让显卡进行插帧工作。

从这个页面的最底部： [https://bluesky-soft.com/en/BlueskyFRC.html](https://bluesky-soft.com/en/BlueskyFRC.html) 下载并安装BFRC软件。备份链接：[https://www.aliyundrive.com/s/ByQPSTcziWw](https://www.aliyundrive.com/s/ByQPSTcziWw)

下载安装后打开BFRC软件。

首先需要勾选上界面上的“Enable AMD Fluid Mothion Video”开关，然后选择好正确的GPU。

如果出现**无法显示字幕**的问题，请把下方的“**Enable Zero-Copy Mode**”选项**取消**掉。

![b1b7dba2db8d7a3ab9dd4aa060d484b0.png](https://txc.gtimg.com/data/104929/2022/0213/b1b7dba2db8d7a3ab9dd4aa060d484b0.png)

**3. 安装 K-Lite 解码器包**

K-Lite是一款流行的解码器包软件。

弹弹play EVR内核需要多个外部组件才能够正常播放视频，其中包括：

- LAV分离器：用于解析视频文件格式
- LAV视频解码器：用于解码和播放视频
- LAV音频解码器：用于解码和播放音频
- DirectVobSub 和 DirectVobSub (auto-loading version)：用于加载和渲染字幕

幸运的是，K-Lite将这些必备的组件打包到一起，只要安装一次即可将他们全部安装至系统中。

从K-Lite官网：[https://codecguide.com/download_kl.htm](https://codecguide.com/download_kl.htm) 下载最新版本，按照默认设置安装即可。备用链接：[https://www.aliyundrive.com/s/XrZv4HzZYL8](https://www.aliyundrive.com/s/XrZv4HzZYL8)

4. 在弹弹play中进行设置

在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR”内核，再选中下方的“启用视频插帧”选项即可。

![f7948e298b9213edbf1e3cbc6700270d.png](https://txc.gtimg.com/data/104929/2019/1218/f7948e298b9213edbf1e3cbc6700270d.png)

**常见问题**

1. 如何判断是AMD插帧是否已启用？

插帧启用后，肉眼应该能明显感觉到视频变化。

除此之外，在播放视频时打开 Bluesky Frame Rate Converter 应用，切换到最后一个“Status”选项卡，也可看到当前的插帧状态，如下图所示：

![afcbdb0268a5b5744ae54aa612e0769a.png](https://txc.gtimg.com/data/104929/2019/1218/afcbdb0268a5b5744ae54aa612e0769a.png)

如果这里显示了相应的信息（不是空的），并且 LastError 一行显示为“None”（如果出错则会显示一个数字），表示当前插帧已正常开启。
