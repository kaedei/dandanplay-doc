# 弹弹play 14.5（Windows版、UWP版）

弹弹play 14.5版本支持使用TMDB作为数据源，在文件关联、搜索、关注、记录播放历史等场景中使用来自TMDB的电视剧、电影数据。推荐您进行更新。

[[TOC]]

## 新增支持TMDB数据库

The Movie Database（简称TMDB）是一个由社群构建的在线数据库。TMDB资源内容非常丰富，拥有完整的电影、电视节目、演员和剧组数据。

在弹弹play新版本中，我们引入了TMDB作为备选数据库，用来补充弹弹play自带数据库（大部分为动画）中不足的电视剧、电影数据。您可以将视频文件关联到TMDB数据源，或是直接搜索、关注某个作品，之后便可以像之前一样去记录播放历史，或是整理媒体库了。

例如，您可以在文件识别与关联对话框中，搜索来自TMDB的影视剧作品：

也可以在高级搜索界面搜索关注某个连续剧，后续可以在“个人中心”中查看更新情况（支持在多个季度中切换）：

“弹弹play的TMDB数据库功能”被设计用来补充自带数据库缺少的类型的数据，如果您想深入了解此功能，可以查看说明文档：
https://support.qq.com/products/104929/faqs-more/?id=150880



## 自动保存视频偏好

新版本中，弹弹play将会记住视频相关的偏好，如已加载的本地弹幕文件、外挂字幕文件、已选择的音频轨道、已加载的外挂音频等，下次播放此视频时可以自动重新为您加载。

原先的“字幕偏好”等设置输入框改为了手动配置，如果您希望在全局生效某个优先级配置，请手动编辑它们。



## 从网页中搜索添加弹幕

由于大部分网站都不再支持通过接口进行站内搜索，新版本中增加了内置浏览器搜索的功能。在搜索添加第三方弹幕时，如果系统中已安装Edge浏览器或WebView2组件，将使用它打开网页进行选取并添加弹幕源。

如果您的系统支持此功能，在搜索时将会看到如下的提示：


之后便会打开浏览器窗口，供您搜索视频播放页。当浏览到支持的页面时，将会弹窗提示是否选取此页面：




## 新增ニコニコ動画的搜索与弹幕在线解析

新版本中新增支持nicovideo网站的搜索与弹幕解析功能，支持解析sm/so网址。

需要注意的是，访问nicovideo网站可能需要特定的网络环境。部分付费/番剧页面需要使用能够支持流媒体播放的IP地址访问才能正常解析。


## 其他功能改进

- 使用「弹幕外挂」时支持保存视频播放进度（自动续播则需要外部播放器开启对应功能）
- 番剧详情页新增季度信息切换与显示（仅TMDB数据源）
- 升级手动关联弹幕库界面，取消剧集显示上限，增加显示缩略图、上映时间等信息
- 番剧详情页在联网读取失败时将显示缓存数据
- 媒体库扫描文件识别信息新增快速和完整模式
- 媒体库设置新增首次启动扫描设置
- 为腾讯视频、优酷插件增加搜索功能



## 问题修复

- 修复了进度条预览图可能出现在相邻显示器上的问题
- 修复媒体库中重置缩略图后在下次扫描漏掉的问题
- 修复「弹幕外挂」控制台弹出新窗口时覆盖顺序错误的问题