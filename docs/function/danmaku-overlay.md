# 『弹幕外挂』功能说明

目录：

[[toc]]

## 『弹幕外挂』介绍

弹弹play PC版从 14.0 版本开始新增『弹幕外挂』功能，可以让您在使用熟悉的播放器播放视频时（如 PotPlayer、mpv、MPC-HC、MPC-BE 等），在其画面上方覆盖来自弹弹play的弹幕渲染层，并根据播放进度实时播放弹幕。

使用 PotPlayer 播放时的效果如下：

![d78c77c19f708c4922f41e235fb7ebcf.png](https://txc.gtimg.com/data/104929/2023/0702/d78c77c19f708c4922f41e235fb7ebcf.png)

本文将讲解如何正确配置使用此功能。

## 配置使用 PotPlayer 播放器（32位、64位版本）

1. 下载安装 PotPlayer 播放器：[https://potplayer.daum.net/?lang=zh_CN](https://potplayer.daum.net/?lang=zh_CN) 推荐使用64位版本

2. **（从 14.2 版开始，弹弹play将自动为您修改 PotPlayer 设置，您不必再手动进行这一步的操作）**

   打开 PotPlayer，进入选项设置窗口（默认F5）。在【辅助】页面中选中【将程序的消息输出到系统标题栏用于朗读输出】选项后点【确定】保存。(见下图）

   ![d8048b76eb63ede744ecf80bfe9156bf.png](https://txc.gtimg.com/data/104929/2023/0701/d8048b76eb63ede744ecf80bfe9156bf.png)

3. 在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - PotPlayer】。请按您实际安装的 PotPlayer 版本选择使用32位或64位。

   ![39ddb66ccfb8c0f83640ee85a6ac2c8c.png](https://txc.gtimg.com/data/104929/2023/1014/39ddb66ccfb8c0f83640ee85a6ac2c8c.png)

4. 如果您没有将 PotPlayer 安装在默认位置，请点击【浏览 PotPlayer 可执行文件】按钮进行选择

5. 从弹弹play中选择一个视频开始播放，弹弹play将自动启动 PotPlayer，并覆盖弹幕层。

**其他注意事项：**

- 部分特殊情况下，PotPlayer 可能会抢占渲染优先级，使视频覆盖在弹幕层上方，导致弹幕无法正常显示出来。此时请拖拽或晃动 PotPlayer 窗口一下（只要更改了窗口大小位置就可以），让弹弹play重新把弹幕层覆盖回视频上方。
- 如果弹幕仍在主窗口内显示，说明弹弹play没有找到 PotPlayer 播放器。请将所有打开的 PotPlayer 窗口关闭后重新尝试播放。
- 播放结束后，如果 PotPlayer 窗口没有自动关闭，请手动关闭它，以免影响下次播放。
- 因为弹弹play目前无法检测到 PotPlayer 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 PotPlayer 内切换视频。
- 您的 PotPlayer 界面需要选择 简体中文、繁体中文、日语、英语 其中的一种，其他语言版本不受支持

## 配置使用 mpv 播放器

1. 下载 mpv 播放器，因为 mpv 播放器配置比较复杂，这里推荐使用 mpv_lazy 懒人包：[https://github.com/hooke007/MPV_lazy](https://github.com/hooke007/MPV_lazy)

2. **（从 14.2 版开始，弹弹play将自动为您修改 mpv 设置，您不必再手动进行这一步的操作）**

   使用记事本编辑 mpv.config 配置文件。在 mpv_lazy 中，可以在【右键-工具-打开设置目录】定位到此文件

   ![f307eb38bb610ee27ce42516f84bc0d8.png](https://txc.gtimg.com/data/104929/2023/0702/f307eb38bb610ee27ce42516f84bc0d8.png)

   在 mpv.config 文件的一开始添加下面一行的内容：

   **title=[mpv] ${filename} ${time-pos} ${speed}x**

   这行配置的意思是修改mpv的窗口标题，让mpv在标题栏中显示当前视频的文件名、播放时间点和播放速度。修改后请关闭 mpv 播放器使其生效。

   ![8ee5b64ba47f370822ade7e56b41cbb5.png](https://txc.gtimg.com/data/104929/2023/0915/8ee5b64ba47f370822ade7e56b41cbb5.png)

3. 在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - mpv播放器】。点击【浏览 mpv 可执行文件】按钮选择您电脑中 mpv.exe 所在的位置。

   ![9baf742235db8660155adc7d07e2104d.png](https://txc.gtimg.com/data/104929/2023/0702/9baf742235db8660155adc7d07e2104d.png)

4. 从弹弹play中选择一个视频开始播放，弹弹play将自动启动 mpv 播放器，并覆盖弹幕层。

**其他注意事项：**

- 播放结束后，如果 mpv 窗口没有自动关闭，请手动关闭它。
- 因为弹弹play目前无法检测到 mpv 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 mpv 内切换视频。
- mpv 播放器内不显示当前播放状态，弹弹play将通过当前时间的变化情况来判断播放状态，所以一些操作（播放、暂停等）同步到弹幕层可能会有几秒钟的延迟

## 配置使用 MPC-HC 和 MPC-BE 播放器

1. 下载 Media Player Classic 播放器：
   - MPC-HC：[https://github.com/clsid2/mpc-hc](https://github.com/clsid2/mpc-hc)
   - MPC-BE：[https://sourceforge.net/projects/mpcbe/](https://sourceforge.net/projects/mpcbe/)

2. 在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - MPC-HC/MPC-BE 播放器】。点击【浏览 MPC 可执行文件】按钮选择您电脑中 mpc-hc64.exe 或 mpc-be64.exe 所在的位置。

   ![c464a847da1e96acd47d21f348238d2f.png](https://txc.gtimg.com/data/104929/2023/1014/c464a847da1e96acd47d21f348238d2f.png)

3. 从弹弹play中选择一个视频开始播放，弹弹play将自动启动对应的 MPC 播放器，并覆盖弹幕层。

**其他注意事项：**

- 播放结束后，如果 MPC 窗口没有自动关闭，请手动关闭它。
- 因为弹弹play目前无法检测到 MPC 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 MPC 内切换视频。
- MPC 系列播放器在全屏状态下会自动隐藏进度条界面，也不会再主动更新界面上的播放状态和播放进度，除非鼠标移动到下方让状态栏重新显示。所以**当您发现视频播放和弹幕层的状态不同步时，请移动鼠标使底部进度条显示一次**，弹弹play将自动同步最新的播放状态。
- 弹弹play无法检测到 MPC-HC 播放器的加速/降速状态，如果您用 MPC-HC 倍速观看视频，弹幕将逐渐与视频不同步。（MPC-BE 不受影响）
- 使用 MPC 时，请保证底部“状态栏”显示。如果状态栏已经隐藏了请点击【菜单-查看-[√]状态栏】使其重新显示。
- 您的 MPC 界面需要选择 简体中文、繁体中文、日语、英语 其中的一种，其他语言不受支持。
