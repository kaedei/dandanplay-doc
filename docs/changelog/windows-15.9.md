# 弹弹play 15.9 版本更新

2024年9月20日

[[TOC]]

弹弹play 15.9版本带来了大量新功能和优化，进一步提升了用户体验。下载器模块进行了显著改进，媒体库远程连接和串流功能得到了增强，此外还修复了多个已知问题。欢迎您下载体验。

## 一、下载器模块优化

新版本中，下载器模块进行了多项优化和功能增强，提升了下载效率和用户体验。

### 预热与DHT网络的连接

下载器模块启动时将提前预热与DHT网络的连接，而不是等到启动首个任务后才开始访问网络。这将显著缩短下载任务的启动时间。

### 通过DHT网络将磁力链解析为种子文件

新增通过DHT网络将磁力链解析为种子文件。在下载非动漫类型的资源，或运行自定义RSS地址的自动下载规则时，可以改善下载成功率。

### 自动下载预览结果显示

在“自动下载”页预览结果时，可以显示此资源是否已经在下载列表中（也支持显示远程qbittorrent、transmission、aria2上的任务），快速了解哪些任务已经被添加到下载列表。

![自动下载预览](https://txc.gtimg.com/data/104929/2024/0927/e5770ff5ae421d31bbb7e4a7a63b49d7.webp)


## 二、媒体库远程连接功能优化

1. 媒体库远程连接（SMB/WebDAV/OneDrive）支持播放时加载远程磁盘上同文件夹内的的同名弹幕文件

2. 媒体库网页版支持渲染ASS字幕

媒体库网页版现已支持渲染ASS格式的字幕，包括字幕特效和更准确的定位、更高的渲染帧率。非ASS格式（如SRT、VTT）将自动转换成ASS格式显示。

## 三、串流播放功能改进

新版本中，串流播放功能得到了多项改进，提升了播放稳定性和用户体验。

### 保存播放偏好

串流播放时支持保存音轨、字幕轨、本地弹幕的选择偏好，下次播放相同文件时将自动读取之前的选择。

### 播放按钮重新加载

当串流播放手动或自动停止时，可以点击播放器界面左下角的【播放】按钮立刻重新加载。

### 播放成功率提升

新版本中改善了串流播放和M3U8在线播放的成功率，减少了播放中断的情况。此外还有两个问题得到了修复：

- 修复了串流播放时，可能会残留连接未断开并占用网速的问题；
- 修复了串流播放时，长时间暂停后可能无法继续播放的问题；

## 四、分P投稿弹幕支持

加载包含分P投稿的弹幕时，支持自动检测分P并编辑时间，可以将多个分P拼接为一份完整的弹幕。

![分P](https://txc.gtimg.com/data/104929/2024/0928/3e3d5f7d404504ff8814484bf37f50df.webp)

这里填写的规则是：只需要填写每一P中有效的时段，例如从0:00~12:30（假设12:30后是不相关内容）。播放器会自动计算时间，将所有选中的分P按顺序拼接成一份完整弹幕。

## 五、简繁转换功能优化

新版本中升级了简繁转换功能，支持转换语句中的地方俗语。同时更新了词库，并修复了部分异体字收录错误的问题。

## 六、其他功能优化与问题修复

- 自动下载规则兼容Nyaa网站的RSS格式
- 嗅探功能添加了对WebView2的版本号检查和更新提示
- 修复了播放器长时间运行时，无法检测到DNS变化的问题
- 修复连接部分WebDAV服务器时无法开始播放的问题
- 修复了初始化WebView2时可能报错的问题
- 修复搜索弹幕库出错时会意外报错的问题