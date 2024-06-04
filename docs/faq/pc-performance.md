# 弹弹play PC版性能问题汇总

目录：
[[toc]]

## 1. G-Sync/FreeSync 兼容性问题

弹弹play PC版目前不兼容 G-Sync/FreeSync 技术，如果您的显示器支持 G-Sync/FreeSync 等可变刷新率（VRR）技术，且在显卡控制面板中开启了此类功能，可能会出现播放器帧率意外降低、画面撕裂等问题。

### 情况描述

以 G-Sync 为例，当您的显示器支持 G-Sync，且在 NVIDIA 显卡控制面板 -> 设置G-Sync中开启了 G-Sync 功能：

![](https://txc.gtimg.com/data/104929/2024/0411/f41405e031fdce3f7b9d9ca7a04798cb.webp)

之后，再打开弹弹play PC版，就会出现帧率被强制降低到 60FPS，画面卡顿等现象。

### 解决方法

1. 在显卡控制面板的 **管理 3D 设置** 页中，添加弹弹play播放器的配置，之后将“ **监视器技术** ”设置为“ **固定刷新率** ”，点击 **应用** 按钮后使其生效。
（英文版中此选项为 Monitor Technology，需要设置成 Fixed Refresh）

![](https://txc.gtimg.com/data/104929/2024/0411/35c8fb52e21e32885d5d561482270265.webp)

2. 也可以直接关闭显卡控制面板中的 G-Sync/FreeSync 功能。

这个问题已确认为框架问题，可以在 WPF 官方 Issue 中跟踪相关讨论：[Laggy user experience when using VRR display](https://github.com/dotnet/wpf/issues/2294)

## 2. 跨显示器性能问题

### 情况描述

弹弹play PC版在多显示器环境下，可能会出现跨显示器性能问题，即在非主显示器上播放视频时，可能会出现帧率下降、画面撕裂等现象。

此问题一般是由于系统中存在多张显卡（如独立显卡+核芯显卡），Windows 在默认情况下，会使用其中性能较差的显卡来渲染非主显示器上的桌面和应用程序。当您将弹弹play的窗口拖拽一部分到非主显示器上时，Windows 就会切换使用较差的显卡来渲染弹弹play，且无法恢复，从而导致性能问题。

### 解决方法

1. 在 Windows 设置中，找到 **系统** -> **屏幕** -> **显示卡**，将弹弹play 的应用程序设置为使用性能较好的显卡来渲染。
2. 在显卡的控制面板中，找到 **3D 设置**，将弹弹play 的应用程序设置为使用性能较好的显卡来渲染。
3. 将弹弹play 的窗口始终放在主显示器上，避免跨显示器使用。
4. 可以在BIOS中禁用系统中性能较差的显卡，只保留性能较好的显卡，但这样可能会影响笔记本电脑的续航时间。

修改后建议重启电脑，使设置生效。

## 3. 弹幕区域闪烁、变形、渲染异常的问题

### 情况描述

当您的弹弹play出现如下图所示的情况（图片来源于用户反馈），弹幕区域闪烁、变形、渲染异常时，很有可能和近期戴尔推送的驱动程序中某个模块有关：​​​​

![](https://txc.gtimg.com/data/104929/2021/1104/aa05088e9d076f402b79898269b7715e.jpeg)

### 问题解析

以下解决方法来自于 https://blog.walterlv.com/post/wpf-renders-wrong-because-of-nahimicosd.html

正常情况下造成 WPF 渲染炸掉的原因其实有很多，但大多数只破坏一台计算机。而真正让产品在全球大范围炸掉的，只有近期戴尔外星人推送的一枚新的更新。因此，本博客只说戴尔外星人造成的问题。至于其他原因，你可以从本原因中获得灵感自行查找。

请检查一下出问题的电脑上是否有 `NahimicOSD.dll` 这个文件，如果这是一台戴尔电脑，那么它最有可能出现在下面这个路径下：

`C:\ProgramData\A-Volute\DellInc.AlienwareSoundCenter\Modules\ScheduledModules\NahimicOSD.dll`

如果这是其他品牌的电脑，那么他很有可能出现在下面这个路径下（因为插上了外星人耳机，自动安装了驱动）：
`C:\ProgramData\AWHeadset\DellInc.AlienwareSoundCenter\Modules\ScheduledModules\NahimicOSD.dll`

当然，也有其他反馈说在别的路径下的：

`C:\ProgramData\A-Volute\A-Volute.28054DF1F58B4\Modules\ScheduledModules\NahimicOSD.dll`
`C:\ProgramData\A-Volute\A-Volute.Nahimic\Modules\Scheduled\NahimicOSD.dll`
`C:\ProgramData\A-Volute\Modules\ScheduledModules\NahimicOSD.dll`

同时也存在非戴尔设备的情况：
`C:\Program Files\Nahimic\Nahimic2\UserInterface\Nahimic2OSD.dll`

NahimicOSD 是一个用于在应用程序最终渲染结果上叠加另一个显示层的库，这个库会在应用程序运行时注入进程，并在目标进程调用 DirectX 渲染时将叠加层加入渲染。

### 解决方法

由于这个文件已经注入到了很多应用中，所以解决方法是将 `NahimicOSD.dll` 文件重命名（因为你直接删删不掉）。等重启电脑后，这个文件也就不会注入到任何程序里去了，这时你想怎么处置都可以。