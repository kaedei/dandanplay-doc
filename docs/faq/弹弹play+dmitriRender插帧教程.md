<h1>弹弹play + dmitriRender 插帧教程</h1>

<p> 弹弹play 10.2新版本中增加了EVR内核对 dmitriRender 插帧软件的支持。如果您已经安装了 dmitriRender，那么就可以方便地在弹弹play中一键开启并使用了。</p>

<p>* 请注意，dmitriRender目前是付费软件，您可以在付费前免费试用一段时间。</p>

<p>* dmitriRender 5.0版本后，只支持64位软件，所以您需要安装<strong>64位弹弹play播放器</strong>配合使用。</p>

<p>下面将介绍弹弹play + dmitriRender插帧的配置方法。</p>

<p> </p>

<p><strong>1. 下载安装 dmitriRender</strong></p>

<p>首先，在 dmitriRender 的官方网站下载：<a href="http://www.dmitrirender.ru/index/0-11" target="_blank" rel="noreferrer noopener">http://www.dmitrirender.ru/index/0-11</a> 最新版程序。</p>

<p>有一些必需的运行库需要提前装好，如VC++ 2015、DirectX等。</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/ad33bb26f543b51727f20113eb171e5a.jpeg" alt="ad33bb26f543b51727f20113eb171e5a.jpeg" />​</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/a4b04520df1d0c0ced3ee7496256bf01.jpeg" alt="a4b04520df1d0c0ced3ee7496256bf01.jpeg" />​</p>

<p> </p>

<p><strong>2. 激活并注册 dmitriRender 文件</strong></p>

<p>安装完成后需要先激活试用，在开始菜单中找到【dmitriRender】-【License Manager】，点击试用按钮完成激活。</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/421a8539ff1aa269eadb2fece678bc6a.jpeg" alt="421a8539ff1aa269eadb2fece678bc6a.jpeg" />​</p>

<p> </p>

<p>然后需要向系统中注册 dmitriRender 的程序文件，以使弹弹play能够找到它。</p>

<p>在开始菜单中找到【dmitriRender】-【Register Filter】，右键点击它，选择【更多】-【打开文件位置】</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/ec8c74c683dddde8363bdeec729ae50e.png" alt="ec8c74c683dddde8363bdeec729ae50e.png" />​</p>

<p>在弹出的窗口中，选中 Register Filter 快捷方式，再次右键点击，选择【以管理员身份运行】。出现注册成功的提示即完成安装。</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/fed4c58c0ca69787fbf94b273c6894da.png" alt="fed4c58c0ca69787fbf94b273c6894da.png" />​</p>

<p> </p>

<p><strong>3. 安装 K-Lite 解码器包</strong></p>

<p>弹弹play EVR内核需要多个外部组件才能够正常播放视频，其中包括：</p>

<ul><li>LAV分离器：用于解析视频文件格式</li>
	<li>LAV视频解码器：用于解码和播放视频</li>
	<li>LAV音频解码器：用于解码和播放音频</li>
	<li>DirectVobSub：用于加载和渲染字幕</li>
</ul><p>幸运的是，K-Lite将这些必备的组件打包到一起，只要安装一次即可将他们全部安装至系统中。</p>

<p>从K-Lite官网：<a href="https://codecguide.com/download_kl.htm" target="_blank" rel="noreferrer noopener">https://codecguide.com/download_kl.htm</a> 下载最新版本，按照默认设置安装即可。备用链接：<a href="https://pan.baidu.com/s/1Ctw_gm3Wf43JPYmA0qxi2Q" target="_blank" rel="noreferrer noopener">https://pan.baidu.com/s/1Ctw_gm3Wf43JPYmA0qxi2Q</a></p>

<p> </p>

<p><strong>4. 在弹弹play中开启 dmitriRender 支持</strong></p>

<p>在弹弹play右上角【设置】-【播放核心与字幕】页面中，选中“EVR内核”，然后再开启下方的“dmitriRender 插帧”选项，即可完成设置。</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/af40db828cf7e6f4d6d3b70a3815bd30.png" alt="af40db828cf7e6f4d6d3b70a3815bd30.png" />​</p>

<p><strong>常见问题</strong></p>

<p>1. 如何判断插帧是否已启用？</p>

<p>在播放视频时，右下角会出现 dmitriRender 的图标，如果图标为绿色，则表示插帧已经启用。</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/70316e27c0571267ea607f0fd3f83c9c.jpeg" alt="70316e27c0571267ea607f0fd3f83c9c.jpeg" />​</p>

<p>如果出现红色，表示启用失败，或是当前显卡性能不足以启用 dmitriRender</p>

<p><img src="https://txc.gtimg.com/data/104929/2019/1220/f80be39b80721ad3d701c73a820a1280.jpeg" alt="f80be39b80721ad3d701c73a820a1280.jpeg" />​</p>
