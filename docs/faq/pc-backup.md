# 备份弹弹play的数据（PC版）

（以下内容适用于弹弹play PC版 v15.2.0 及以上版本）

## 概述

PC版弹弹play被设计为绿色软件，大部分运行时产生的数据（设置、缓存）都存储在安装文件夹中，不会在系统和注册表中留下垃圾文件。因此，备份弹弹play的数据非常简单，只需要备份少数几个文件即可。

当您需要重新安装弹弹play、重新安装系统或更换电脑时，您可以将已备份的文件夹复制到新的弹弹play文件夹中，即可恢复弹弹play备份前的运行状态。

## 存储位置

弹弹play的运行数据包括弹幕缓存、播放历史、番剧信息、图片缓存等，主要存储在：

- 桌面版：安装文件夹所在的目录下
- 应用商店(UWP)版：`C:\Users\用户名\AppData\Roaming\dandanplay` 目录下

## 备份数据

一般来说，备份弹弹play的数据只需要备份以下两个子目录：

- Config：存储弹弹play的配置信息
- Cache：存储弹弹play的运行数据和缓存

在重新安装弹弹play、重新安装系统或更换电脑时，您可以将这两个目录复制到新的弹弹play文件夹中，以恢复弹弹play的数据。

## 文件夹说明

### Config

`Config` 目录下存储了弹弹play的配置信息，均为xml格式的文件，包括播放器设置、弹幕设置、外观设置、网络连接设置等。建议您完整备份该目录。

### Cache

`Cache` 目录下存储了弹弹play的运行数据和缓存，包括弹幕缓存、播放历史、番剧信息、图片缓存等。如果条件允许，建议您完整备份该目录，将使您在新的电脑上能够快速恢复弹弹play的状态（如媒体库视频封面、番剧信息、播放进度等）。

如果您的备份空间有限，也可以只备份其中的部分文件。下面将对 `Cache` 目录中的每个文件和子文件夹进行说明。

#### dandanplay.litedb （需要备份）

`dandanplay.litedb` 是弹弹play的主数据库文件，存储了大部分关键数据，**强烈建议备份该文件**。

#### task.xml （需要备份）

`task.xml` 存储了弹弹play的下载任务信息，如果您有下载任务，请备份该文件。

#### tracker.txt （可以不备份）

`tracker.txt` 存储了弹弹play的tracker服务器列表，如果您使用了磁力链接下载功能，建议备份该文件。这个文件也会定期去服务器获取更新。

#### Image 和 LibraryImage（建议备份）

`Image` 和 `LibraryImage` 分别存储了弹弹play的网络图片缓存（如番剧封面）和本地图片缓存（如媒体库视频封面），如果您的媒体库中有大量视频文件，建议备份这两个文件夹。

#### Torrents（建议备份）

`Torrents` 存储了弹弹play下载的种子文件，如果您使用了弹弹play的下载器功能，请备份该文件夹。

如果不备份此文件夹，新的电脑上启动已有的下载任务时，可能会弹出错误提示。

#### SpeechRecognition（建议备份）

`SpeechRecognition` 存储了弹弹play的语音识别结果和翻译结果，如果您使用了弹弹play的语音识别功能，建议备份该文件夹。


#### CommentCacheEntity 和 ThirdPartyCommentCacheEntity （可以不备份）

`CommentCacheEntity` 和 `ThirdPartyCommentCacheEntity` 存储了弹弹play的弹幕缓存，如果您有大量的弹幕缓存，建议备份这两个文件夹。

#### ProgressThumb（可以不备份）

`ProgressThumb` 存储了弹弹play的视频进度缩略图，可以不备份此文件夹。

#### Subtitle（可以不备份）

`Subtitle` 存储了弹弹play从内封字幕视频（如mkv格式）中提取的字幕文件，可以不备份此文件夹。

#### Transcoding（可以不备份）

`Transcoding` 存储了弹弹play的语音识别文件转码时产生的临时文件，可以不备份此文件夹。



