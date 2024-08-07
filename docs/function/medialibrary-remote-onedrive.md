# 连接到 OneDrive 个人版网盘

目录：
[[TOC]]

弹弹play PC版 v15.8 后，媒体库「远程连接」处新增了连接到 OneDrive 个人版网盘的功能。

通过此功能，您可以在弹弹play中登录微软账号，直接访问 OneDrive 上的媒体资源，无需下载到本地即可播放。

请注意，SharePoint Online 与 Microsoft 365 E5 等企业版服务中，会提供名为 OneDrive 商业版（OneDrive For Business）的在线存储服务。OneDrive 个人版与 OneDrive 商业版是不同的服务，架构有差异，数据也无法互通。当前版本的弹弹play仅支持连接到 OneDrive 个人版。

## 适用场景

- 您在 OneDrive 上保存了一些媒体资源，想要在弹弹play中直接观看这些资源而无需下载到本地。

## 功能特点

- 通过 Microsoft Graph API 连接到 OneDrive 个人版网盘，浏览网盘上的文件夹和媒体资源
- 不仅支持查看个人网盘中的文件，还可以查看其他人共享给您的文件/文件夹
- 以文件浏览器的形式，显示 OneDrive 网盘中的文件夹和视频文件
- 串流播放服务器上的原始视频文件，无需下载到本地即可观看
- 支持自动读取并加载视频的内封字幕和外挂字幕
- 支持在播放时计算文件特征值，自动为您匹配与加载弹幕
- 文件列表中可以显示文件夹缩略图、视频缩略图、视频长度、刮削结果等额外信息

## 功能截图

![](https://txc.gtimg.com/data/104929/2024/0604/83478fdca3a005070a570f5bce297094.webp)

## 使用方法

1. **打开媒体库**：在弹弹play播放器中，点击顶部导航栏的【媒体库】按钮，进入媒体库界面。

2. **添加服务器**：在左侧边栏找到【远程媒体库】区域，点击旁边的【+】按钮，选择【OneDrive网盘】。

3. **配置服务器信息**：点击登录 OneDrive，在弹出的浏览器窗口中登录您的微软账号。登录完成后会自动关闭窗口并刷新状态。您还可以选择特定的文档库：“我的文件”（个人网盘）或是“与我共享”的共享文件夹。

3. **浏览媒体库**：添加服务器后，您可以在左侧边栏中看到新添加的 OneDrive 网盘名称，点击即可进入媒体库浏览界面。

4. **播放媒体文件**：在媒体库中找到目标资源，鼠标双击即可开始播放。


## 问题说明

1. 为了提供最佳播放和弹幕匹配体验，弹弹play将始终播放网盘上的原始视频文件。

2. 支持读取当前文件夹中（当前路径下，不包括子文件夹）最多 500 个视频文件，如果本层文件夹中的文件数量超过 500 个，将无法全部显示。

3. OneDrive 网盘的登录、浏览文件功能在国内访问速度可能受限，建议使用代理或加速服务以获得更好的播放体验。