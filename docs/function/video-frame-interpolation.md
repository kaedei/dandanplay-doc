# 在弹弹play中启用插帧

弹弹play从10.2版开始，新增了插帧/补帧功能，可以将平时常见的24帧视频由算法补充至60fps，使视频观感得到非常大地提升。

弹弹play目前支持多种插帧方案，请点击下方链接查看配置教程：

[[toc]]


## 弹弹play + SVP 插帧教程

弹弹play 10.2新版本中增加了EVR内核对SVP插帧软件的支持。如果您已经安装了SVP软件，那么就可以方便地在弹弹play中一键开启并使用了。

* 请注意，SVP目前是付费软件，您可以在付费前免费试用30天。除此之外还有一些注意事项，请参考文章末尾处的说明。

下面将介绍弹弹play + SVP插帧的配置方法。

### 1. 安装必需的软件——SVP

首先，您需要正确安装 SVP才可以在弹弹play中使用它。从SVP官方网站 [https://www.svp-team.com/zh/get/](https://www.svp-team.com/zh/get/) 下载最新Windows版本。

现在SVP的安装过程已经简化了，在安装过程中选择默认的“DirectShow based (64-bit)”即可。

![](https://txc.gtimg.com/data/104929/2022/0522/5126858b9ee3aeefc4a25373ed999227.png)

安装完成后，可以从开始菜单启动 SVP 4 Pro Manager 程序，进行注册、登录和激活（30天试用）。首次启动时可能会提示您进行测试系统性能。

![](https://txc.gtimg.com/data/104929/2022/0522/fb7f08265971b130bf163bf5572b1efc.png)

### 2. 安装K-Lite Mega版（可选）

我们收到部分用户的反馈，在安装SVP后仍然无法开启插帧。经查发现是这部分用户的系统中部分组件未注册或者缺失导致的。**如果您在使用中也出现了类似的情况，可以按照此步骤所述安装K-Lite Mega版进行修复**。

* K-Lite是一个解码器包软件，其中包含了绝大多数系统必需的解码器软件，在它的Mega版本中，还包括了SVP所需的ffdshow软件。

* 若仍有问题，请看下方的”常见问题“3

在 K-Lite 官方网站下载 K-Lite Mega版： [https://codecguide.com/download_k-lite_codec_pack_mega.htm](https://codecguide.com/download_k-lite_codec_pack_mega.htm) 。备用链接：[https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg](https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg) 密码:zebk

### 3. 在弹弹play中开启SVP支持

在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR内核”，然后再开启下方的“SVP插帧”选项，即可完成设置。

![](https://txc.gtimg.com/data/104929/2022/0522/98e4674f51958d82ec1d9a8bcbadec8f.png)

![](https://txc.gtimg.com/data/104929/2022/0522/40131eef3cc62aec8a5151e11f59a19f.png)

### SVP插帧常见问题

#### 1. 相比较其他补帧方案，SVP的优缺点？

SVP软件的优点在于对于硬件要求比较低，普通的A/N/I卡都可使用。因为这些年不断更新，软件内设置和算法优化都较为成熟。

SVP的缺点在于默认设置下仍然依赖于古老的（已经不再更新的）ffdshow，所以目前不支持比较新的例如HEVC编码的高清视频。

从弹弹play 12.3版本开始，支持通过Avisynth调用SVP。

#### 2. 安装配置完成后没有成功调用SVP

可能是因为ffdshow等相关组件没有安装正确导致的，容易出现在手动更新K-Lite软件后（最新的K-Lite不再默认安装ffdshow了）。

步骤一，在SVP托盘菜单中选择【工具-高级功能】启动安装向导，确认下方图中三个选项已经安装了最新版本（也可以选择卸载后重新安装）

![](https://txc.gtimg.com/data/104929/2023/0924/fedea42ff07a9cdf0558dfeb9f74a736.png)

![](https://txc.gtimg.com/data/104929/2023/0924/aed0849594762b91b4a1b366633f8528.png)

步骤二，完全退出弹弹play和SVP，并重新启动。弹弹play设置中选择【EVR内核】、【启用SVP插帧】两个选项。


## 弹弹play + AMD Fluid Motion 插帧教程

弹弹play支持基于 AMD Fluid Motion 技术的插帧。首先，根据AMD官方对此技术的描述，您需要拥有一张采用 AMD Radeon 芯片+支持GCN1.1架构的显卡。

其次，您需要安装最新版本的 AMD显卡驱动程序，以及 Bluesky Frame Rate Converter （简称为BFRC）这款软件。

最后，由于弹弹play本身的渲染机制，对于CPU及GPU要求较高，如果硬件配置不够的话容易出现画面撕裂等问题。

下面将介绍如何在您的电脑上配置此功能。

在弹弹play中开启插帧是一件很容易的事情，我们已经做到了播放器内集成、无需配置的开启方法。不过还是需要您提前将系统必备的程序都安装好。

### 1. 安装 AMD 显卡最新驱动程序

您可以在AMD官方网站 [https://www.amd.com/zh-hans/support](https://www.amd.com/zh-hans/support) 下载安装适合您显卡型号的最新版 AMD 显卡驱动程序。

最新版的AMD显卡驱动已经默认开启了插帧功能，不需要您像以前一样做其他设置了。

### 2. 安装 Bluesky Frame Rate Converter （BFRC）

BFRC软件是使播放器和显卡进行沟通的桥梁，安装BFRC之后，播放器可以通过调用它提供的插件让显卡进行插帧工作。

从这个页面的最底部： [https://bluesky-soft.com/en/BlueskyFRC.html](https://bluesky-soft.com/en/BlueskyFRC.html) 下载并安装BFRC软件。备份链接：[https://www.aliyundrive.com/s/ByQPSTcziWw](https://www.aliyundrive.com/s/ByQPSTcziWw)

下载安装后打开BFRC软件。

首先需要勾选上界面上的“Enable AMD Fluid Mothion Video”开关，然后选择好正确的GPU。

如果出现**无法显示字幕**的问题，请把下方的“**Enable Zero-Copy Mode**”选项**取消**掉。

![b1b7dba2db8d7a3ab9dd4aa060d484b0.png](https://txc.gtimg.com/data/104929/2022/0213/b1b7dba2db8d7a3ab9dd4aa060d484b0.png)

### 3. 安装 K-Lite 解码器包

K-Lite是一款流行的解码器包软件。

弹弹play EVR内核需要多个外部组件才能够正常播放视频，其中包括：

- LAV分离器：用于解析视频文件格式
- LAV视频解码器：用于解码和播放视频
- LAV音频解码器：用于解码和播放音频
- DirectVobSub 和 DirectVobSub (auto-loading version)：用于加载和渲染字幕

幸运的是，K-Lite将这些必备的组件打包到一起，只要安装一次即可将他们全部安装至系统中。

从K-Lite官网：[https://codecguide.com/download_kl.htm](https://codecguide.com/download_kl.htm) 下载最新版本，按照默认设置安装即可。备用链接：[https://www.aliyundrive.com/s/XrZv4HzZYL8](https://www.aliyundrive.com/s/XrZv4HzZYL8)

### 4. 在弹弹play中进行设置

在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR”内核，再选中下方的“启用视频插帧”选项即可。

![f7948e298b9213edbf1e3cbc6700270d.png](https://txc.gtimg.com/data/104929/2019/1218/f7948e298b9213edbf1e3cbc6700270d.png)

### AMD插帧常见问题

1. 如何判断是AMD插帧是否已启用？

插帧启用后，肉眼应该能明显感觉到视频变化。

除此之外，在播放视频时打开 Bluesky Frame Rate Converter 应用，切换到最后一个“Status”选项卡，也可看到当前的插帧状态，如下图所示：

![afcbdb0268a5b5744ae54aa612e0769a.png](https://txc.gtimg.com/data/104929/2019/1218/afcbdb0268a5b5744ae54aa612e0769a.png)

如果这里显示了相应的信息（不是空的），并且 LastError 一行显示为“None”（如果出错则会显示一个数字），表示当前插帧已正常开启。


## 弹弹play + dmitriRender 插帧教程

弹弹play 10.2新版本中增加了EVR内核对 dmitriRender 插帧软件的支持。如果您已经安装了 dmitriRender，那么就可以方便地在弹弹play中一键开启并使用了。

* 请注意，dmitriRender目前是付费软件，您可以在付费前免费试用一段时间。

* dmitriRender 5.0版本后，只支持64位软件，所以您需要安装**64位弹弹play播放器**配合使用。

下面将介绍弹弹play + dmitriRender插帧的配置方法。

### 1. 下载安装 dmitriRender

首先，在 dmitriRender 的官方网站下载：[http://www.dmitrirender.ru/index/0-11](http://www.dmitrirender.ru/index/0-11) 最新版程序。

有一些必需的运行库需要提前装好，如VC++ 2015、DirectX等。

![](https://txc.gtimg.com/data/104929/2019/1220/ad33bb26f543b51727f20113eb171e5a.jpeg)

![](https://txc.gtimg.com/data/104929/2019/1220/a4b04520df1d0c0ced3ee7496256bf01.jpeg)

### 2. 激活并注册 dmitriRender 文件

安装完成后需要先激活试用，在开始菜单中找到【dmitriRender】-【License Manager】，点击试用按钮完成激活。

![](https://txc.gtimg.com/data/104929/2019/1220/421a8539ff1aa269eadb2fece678bc6a.jpeg)

然后需要向系统中注册 dmitriRender 的程序文件，以使弹弹play能够找到它。

在开始菜单中找到【dmitriRender】-【Register Filter】，右键点击它，选择【更多】-【打开文件位置】

![](https://txc.gtimg.com/data/104929/2019/1220/ec8c74c683dddde8363bdeec729ae50e.png)

在弹出的窗口中，选中 Register Filter 快捷方式，再次右键点击，选择【以管理员身份运行】。出现注册成功的提示即完成安装。

![](https://txc.gtimg.com/data/104929/2019/1220/fed4c58c0ca69787fbf94b273c6894da.png)

### 3. 安装 K-Lite 解码器包

弹弹play EVR内核需要多个外部组件才能够正常播放视频，其中包括：

- LAV分离器：用于解析视频文件格式
- LAV视频解码器：用于解码和播放视频
- LAV音频解码器：用于解码和播放音频
- DirectVobSub：用于加载和渲染字幕

幸运的是，K-Lite将这些必备的组件打包到一起，只要安装一次即可将他们全部安装至系统中。

从K-Lite官网：[https://codecguide.com/download_kl.htm](https://codecguide.com/download_kl.htm) 下载最新版本，按照默认设置安装即可。备用链接：[https://pan.baidu.com/s/1Ctw_gm3Wf43JPYmA0qxi2Q](https://pan.baidu.com/s/1Ctw_gm3Wf43JPYmA0qxi2Q)

### 4. 在弹弹play中开启 dmitriRender 支持

在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR内核”，然后再开启下方的“dmitriRender 插帧”选项，即可完成设置。

![](https://txc.gtimg.com/data/104929/2019/1220/af40db828cf7e6f4d6d3b70a3815bd30.png)

### dmitriRender插帧常见问题

1. 如何判断插帧是否已启用？

在播放视频时，右下角会出现 dmitriRender 的图标，如果图标为绿色，则表示插帧已经启用。

![](https://txc.gtimg.com/data/104929/2019/1220/70316e27c0571267ea607f0fd3f83c9c.jpeg)

如果出现红色，表示启用失败，或是当前显卡性能不足以启用 dmitriRender

![](https://txc.gtimg.com/data/104929/2019/1220/f80be39b80721ad3d701c73a820a1280.jpeg)



## 常见问题

1. 不同插帧方案的特点是什么？

我们制作了下面这份表格，能够带您快速了解这些不同插帧软件之间的区别

![](https://txc.gtimg.com/data/104929/2019/1220/270e8a57c64730a3f3c42393fa913146.png)

2. 是否支持提升到 >60 fps的帧率，例如144 fps？

支持提升到>60fps的视频帧率，但是默认情况下，弹弹play界面的刷新速率固定为60fps，无法显示更高帧率的画面，需要手动修改。

您可以在【设置】-【弹幕样式】页面-【弹幕帧率】设置，将滑块向右移动，即可提升画面刷新速率。

![](https://txc.gtimg.com/data/104929/2019/1218/e711b0e3ba85cb30af8b41ea29c72810.png)