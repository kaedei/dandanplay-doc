# 弹弹play + SVP 插帧教程

弹弹play 10.2新版本中增加了EVR内核对SVP插帧软件的支持。如果您已经安装了SVP软件，那么就可以方便地在弹弹play中一键开启并使用了。

* 请注意，SVP目前是付费软件，您可以在付费前免费试用30天。除此之外还有一些注意事项，请参考文章末尾处的说明。

下面将介绍弹弹play + SVP插帧的配置方法。

## 1. 安装必需的软件——SVP

首先，您需要正确安装 SVP才可以在弹弹play中使用它。从SVP官方网站 [https://www.svp-team.com/zh/get/](https://www.svp-team.com/zh/get/) 下载最新Windows版本。

现在SVP的安装过程已经简化了，在安装过程中选择默认的“DirectShow based (64-bit)”即可。

![](https://txc.gtimg.com/data/104929/2022/0522/5126858b9ee3aeefc4a25373ed999227.png)

安装完成后，可以从开始菜单启动 SVP 4 Pro Manager 程序，进行注册、登录和激活（30天试用）。首次启动时可能会提示您进行测试系统性能。

![](https://txc.gtimg.com/data/104929/2022/0522/fb7f08265971b130bf163bf5572b1efc.png)

## 2. 安装K-Lite Mega版（可选）

我们收到部分用户的反馈，在安装SVP后仍然无法开启插帧。经查发现是这部分用户的系统中部分组件未注册或者缺失导致的。**如果您在使用中也出现了类似的情况，可以按照此步骤所述安装K-Lite Mega版进行修复**。

* K-Lite是一个解码器包软件，其中包含了绝大多数系统必需的解码器软件，在它的Mega版本中，还包括了SVP所需的ffdshow软件。

* 若仍有问题，请看下方的”常见问题“3

在 K-Lite 官方网站下载 K-Lite Mega版： [https://codecguide.com/download_k-lite_codec_pack_mega.htm](https://codecguide.com/download_k-lite_codec_pack_mega.htm) 。备用链接：[https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg](https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg) 密码:zebk

## 3. 在弹弹play中开启SVP支持

在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR内核”，然后再开启下方的“SVP插帧”选项，即可完成设置。

![](https://txc.gtimg.com/data/104929/2022/0522/98e4674f51958d82ec1d9a8bcbadec8f.png)

![](https://txc.gtimg.com/data/104929/2022/0522/40131eef3cc62aec8a5151e11f59a19f.png)

## 常见问题

### 1. 相比较其他补帧方案，SVP的优缺点？

SVP软件的优点在于对于硬件要求比较低，普通的A/N/I卡都可使用。因为这些年不断更新，软件内设置和算法优化都较为成熟。

SVP的缺点在于默认设置下仍然依赖于古老的（已经不再更新的）ffdshow，所以目前不支持比较新的例如HEVC编码的高清视频。

从弹弹play 12.3版本开始，支持通过Avisynth调用SVP。

### 2. 安装配置完成后没有成功调用SVP

可能是因为ffdshow等相关组件没有安装正确导致的，容易出现在手动更新K-Lite软件后（最新的K-Lite不再默认安装ffdshow了）。

步骤一，在SVP托盘菜单中选择【工具-高级功能】启动安装向导，确认下方图中三个选项已经安装了最新版本（也可以选择卸载后重新安装）

![](https://txc.gtimg.com/data/104929/2023/0924/fedea42ff07a9cdf0558dfeb9f74a736.png)

![](https://txc.gtimg.com/data/104929/2023/0924/aed0849594762b91b4a1b366633f8528.png)

步骤二，完全退出弹弹play和SVP，并重新启动。弹弹play设置中选择【EVR内核】、【启用SVP插帧】两个选项。
