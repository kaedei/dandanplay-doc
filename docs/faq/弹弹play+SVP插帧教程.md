<h1>弹弹play + SVP 插帧教程</h1>

<p> 弹弹play 10.2新版本中增加了EVR内核对SVP插帧软件的支持。如果您已经安装了SVP软件，那么就可以方便地在弹弹play中一键开启并使用了。</p>

<p>* 请注意，SVP目前是付费软件，您可以在付费前免费试用30天。除此之外还有一些注意事项，请参考文章末尾处的说明。</p>

<p>下面将介绍弹弹play + SVP插帧的配置方法。</p>

<p> </p>

<p><strong>1. 安装必需的软件——SVP</strong></p>

<p>首先，您需要正确安装 SVP才可以在弹弹play中使用它。从SVP官方网站 <a href="https://www.svp-team.com/zh/get/" target="_blank" rel="noreferrer noopener">https://www.svp-team.com/zh/get/</a> 下载最新Windows版本。</p>

<p>现在SVP的安装过程已经简化了，在安装过程中选择默认的“DirectShow based (64-bit)”即可。</p>

<p style="text-align:center;"><img height="439" src="https://txc.gtimg.com/data/104929/2022/0522/5126858b9ee3aeefc4a25373ed999227.png" width="632" alt="5126858b9ee3aeefc4a25373ed999227.png" /></p>

<p>安装完成后，可以从开始菜单启动 SVP 4 Pro Manager 程序，进行注册、登录和激活（30天试用）。首次启动时可能会提示您进行测试系统性能。</p>

<p style="text-align:center;"><img height="408" src="https://txc.gtimg.com/data/104929/2022/0522/fb7f08265971b130bf163bf5572b1efc.png" width="627" alt="fb7f08265971b130bf163bf5572b1efc.png" /></p>

<p> </p>

<p><strong>2. 安装K-Lite Mega版（可选）</strong></p>

<p>我们收到部分用户的反馈，在安装SVP后仍然无法开启插帧。经查发现是这部分用户的系统中部分组件未注册或者缺失导致的。<strong>如果您在使用中也出现了类似的情况，可以按照此步骤所述安装K-Lite Mega版进行修复</strong>。</p>

<p>* K-Lite是一个解码器包软件，其中包含了绝大多数系统必需的解码器软件，在它的Mega版本中，还包括了SVP所需的ffdshow软件。</p>

<p>* 若仍有问题，请看下方的”常见问题“3</p>

<p>在 K-Lite 官方网站下载 K-Lite Mega版： <a href="https://codecguide.com/download_k-lite_codec_pack_mega.htm" target="_blank" rel="noreferrer noopener">https://codecguide.com/download_k-lite_codec_pack_mega.htm</a> 。备用链接：<a href="https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg" target="_blank" rel="noreferrer noopener">https://pan.baidu.com/s/1toBkh6OFVnlwiZChhYHCZg</a> 密码:zebk</p>

<p> </p>

<p><strong>3. 在弹弹play中开启SVP支持</strong></p>

<p>在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR内核”，然后再开启下方的“SVP插帧”选项，即可完成设置。</p>

<p style="text-align:center;"><img height="433" src="https://txc.gtimg.com/data/104929/2022/0522/98e4674f51958d82ec1d9a8bcbadec8f.png" width="1040" alt="98e4674f51958d82ec1d9a8bcbadec8f.png" /></p>

<p> </p>

<p style="text-align:center;"><img height="200" src="https://txc.gtimg.com/data/104929/2022/0522/40131eef3cc62aec8a5151e11f59a19f.png" width="699" alt="40131eef3cc62aec8a5151e11f59a19f.png" /></p>

<p> </p>

<p> </p>

<p><strong>常见问题</strong></p>

<p><strong>1. 相比较其他补帧方案，SVP的优缺点？</strong></p>

<p>SVP软件的优点在于对于硬件要求比较低，普通的A/N/I卡都可使用。因为这些年不断更新，软件内设置和算法优化都较为成熟。</p>

<p>SVP的缺点在于默认设置下仍然依赖于古老的（已经不再更新的）ffdshow，所以目前不支持比较新的例如HEVC编码的高清视频。</p>

<p>从弹弹play 12.3版本开始，支持通过Avisynth调用SVP。</p>

<p> </p>

<p><strong>2. 安装配置完成后没有成功调用SVP</strong></p>

<p>可能是因为ffdshow等相关组件没有安装正确导致的，容易出现在手动更新K-Lite软件后（最新的K-Lite不再默认安装ffdshow了）。</p>

<p>步骤一，在SVP托盘菜单中选择【工具-高级功能】启动安装向导，确认下方图中三个选项已经安装了最新版本（也可以选择卸载后重新安装）</p>

<p style="text-align:center;"><img height="384" src="https://txc.gtimg.com/data/104929/2023/0924/fedea42ff07a9cdf0558dfeb9f74a736.png" width="600" alt="fedea42ff07a9cdf0558dfeb9f74a736.png" /></p>

<p style="text-align:center;"><img height="484" src="https://txc.gtimg.com/data/104929/2023/0924/aed0849594762b91b4a1b366633f8528.png" width="800" alt="aed0849594762b91b4a1b366633f8528.png" /></p>

<p>步骤二，完全退出弹弹play和SVP，并重新启动。弹弹play设置中选择【EVR内核】、【启用SVP插帧】两个选项。</p>
