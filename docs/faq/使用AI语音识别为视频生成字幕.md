<h1>使用AI语音识别为视频生成字幕</h1>

<p><span style="font-size:16px;">从PC 13.3版本开始，弹弹play支持通过AI语音识别技术，为视频生成字幕文件。</span></p>

<p><span style="font-size:16px;"><strong>功能特点</strong></span></p>

<ul><li><span style="font-size:16px;">识别率高，普通（Small）模型即可达到&gt;90%的准确率</span></li>
	<li><span style="font-size:16px;">由 OpenAI Whisper 驱动，识别将完全在本地处理，无需联网</span></li>
	<li><span style="font-size:16px;">集成在弹弹play播放器中，即开即用，不需要安装 Python 等其他软件</span></li>
	<li><span style="font-size:16px;">使用 GPU 加速识别，支持 A/N/I 显卡</span></li>
	<li><span style="font-size:16px;">UI方便简洁，一看即会</span></li>
</ul><p> </p>

<p><span style="font-size:16px;"><strong>使用方法</strong></span></p>

<p><span style="font-size:16px;"><strong>1. 进入 "AI语音识别" 界面</strong></span></p>

<p><span style="font-size:16px;">您可以通过多种方式进入“AI语音识别”界面，例如：</span></p>

<ul><li><span style="font-size:16px;">在播放界面中，右键弹出菜单，选择“弹弹play AI - AI语音识别”即可对当前文件进行语音识别</span>

	<p style="text-align:center;"><img height="404" src="https://txc.gtimg.com/data/104929/2023/1130/38d6afbe5c2ec76664d352de800f1130.png" width="600" alt="38d6afbe5c2ec76664d352de800f1130.png" /></p>
	</li>
	<li><span style="font-size:16px;">视频播放时，在播放器的【调整】边栏中，点击【AI语音识别】按钮：</span>
	<p style="text-align:center;"><img height="249" src="https://txc.gtimg.com/data/104929/2023/1130/40251017c758e81cbe4317e152553b61.png" width="600" alt="40251017c758e81cbe4317e152553b61.png" /></p>
	</li>
	<li><span style="font-size:16px;">播放列表界面中，选中多个视频，点击工具栏上的【AI语音识别】按钮：</span>
	<p style="text-align:center;"><img height="272" src="https://txc.gtimg.com/data/104929/2023/1130/4c92d6fdfee9ae95494d58e6559ee124.png" width="600" alt="4c92d6fdfee9ae95494d58e6559ee124.png" /></p>
	</li>
	<li><span style="font-size:16px;">​媒体库中，右键点击视频，在出现的菜单中选择【AI语音识别】：</span>
	<p style="text-align:center;"><img height="412" src="https://txc.gtimg.com/data/104929/2023/1130/944c64298b82db2de5f6940cd140d24f.png" width="600" alt="944c64298b82db2de5f6940cd140d24f.png" /></p>
	</li>
</ul><p> </p>

<p><span style="font-size:16px;"><strong>2. 准备必要文件</strong></span></p>

<p><span style="font-size:16px;">在开始前，您需要提前下载两个必要的文件，将其放入指定的文件夹中：</span></p>

<ul><li><span style="font-size:16px;">FFmpeg：弹弹play已自带此文件，约110MB，用来处理音频。<br />
	您也可以选择下载最新版的 ffmpeg.exe 手动解压。如果您下载的是zip压缩包，请手动解压其中的 exe 文件到指定文件夹。</span></li>
	<li><span style="font-size:16px;">AI模型文件：用来识别音频内容。<br />
	请根据需求选择要使用的模型。我们推荐使用普通（Small）或中等（Medium）模型来识别动画，可以在识别率、识别速度中取得不错的平衡。如果对效果不满意可以再换成别的模型尝试。<br />
	模型文件需要自行下载。点击“<u>去下载</u>”链接打开浏览器下载文件，下载到的 .bin 文件请放到指定的文件夹中。</span></li>
</ul><p style="text-align:center;"><img height="206" src="https://txc.gtimg.com/data/104929/2023/1130/43cf1e37af459a5992f9285ecc0c0304.png" width="600" alt="43cf1e37af459a5992f9285ecc0c0304.png" /></p>

<p><span style="font-size:16px;">​</span></p>

<p><span style="font-size:16px;"><strong>3. 选择语言并开始识别</strong></span></p>

<p><span style="font-size:16px;">点击最下方的【开始识别】按钮启动后台语音识别。弹弹play将首先处理视频中的音频轨道，然后加载 AI 模型，之后开始识别其中的内容。</span></p>

<p><span style="font-size:16px;">识别出的内容将不断更新在下方列表中，您可以随时查看。点击【中断】按钮可以提前结束识别任务。</span></p>

<p><span style="font-size:16px;">转换速度将由您的 GPU 速度、模型大小共同决定。举例来说，在使用 <em>NVIDIA GTX 2060</em> 的笔记本电脑上，选择普通（Small）模型识别一个时长24分钟的TV动画视频，将花费约 2~4 分钟时间。音频中的无人声/环境音部分可能会降低识别速度。</span></p>

<p style="text-align:center;"><img height="492" src="https://txc.gtimg.com/data/104929/2023/1130/4e83e493962d73162076495e2da07b42.png" width="800" alt="4e83e493962d73162076495e2da07b42.png" /></p>

<p><span style="font-size:16px;">​</span></p>

<p><span style="font-size:16px;"><strong>4. 生成字幕或导出数据</strong></span></p>

<p><span style="font-size:16px;">转换完成后，将根据设置（如果选择了生成字幕选项），自动生成 SRT 格式的字幕文件。</span></p>

<p><span style="font-size:16px;">您也可以在识别结果区域右键点击，进行更多高级操作：</span></p>

<p><span style="font-size:16px;">* 如果您正在批量处理视频，识别结果区域将显示选中文件的识别结果。</span><br />
 </p>

<p style="text-align:center;"><img height="340" src="https://txc.gtimg.com/data/104929/2023/1130/91f4e7acdd9ab7327aa613acf3fb41b3.png" width="600" alt="91f4e7acdd9ab7327aa613acf3fb41b3.png" /></p>

<p> </p>

<p><span style="font-size:16px;"><strong>关于 GPU 加速识别</strong>​</span></p>

<p><span style="font-size:16px;">弹弹play的 AI语音识别 功能强制使用 GPU 加速识别（此选项默认开启，无法关闭），相比旧版本的 CPU 识别，会获得至少 10 倍的速度提升。但开启 GPU 识别功能，对软硬件都有一些要求：</span></p>

<ul><li><span style="font-size:16px;">需要一个支持 DirectX 11 的显卡，不是非常旧的显卡一般都可以</span></li>
	<li><span style="font-size:16px;">操作系统至少为 Windows 10 版本 1803 (10.0.17134.0)</span></li>
	<li><span style="font-size:16px;">系统中有 VC++ 2022 x64 运行库。如果出现了相关的报错，可以 [<a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank" rel="noreferrer noopener">点击这里</a>] 下载安装</span></li>
</ul><p> </p>

<p><span style="font-size:16px;"><strong>已知问题</strong></span></p>

<ol><li><span style="font-size:16px;">UWP版本的用户，如需使用此功能，需要将 ffmpeg.exe 和 AI模型.bin 文件下载到：<br />
	C:\Users\<u>你的用户名</u>\AppData\Roaming\dandanplay\Extra<br />
	文件夹中</span></li>
	<li><span style="font-size:16px;">不支持最新的 Large v3 版本的模型文件（特定情况下识别结果较差），如需使用 大型（Large）模型，请下载文件名中带“v2”的版本。下载后仍将其命名为指定的文件名，如 ggml-large.bin 。</span></li>
</ol>