# 弹弹play Windows版 v15.5 更新日志

2024年6月8日

[[TOC]]

## 媒体库网页版全新改版，同步PC版分类逻辑
1. 新增番剧海报墙，支持分组显示，右侧增加快速定位栏
2. 新增查看番剧剧集列表
3. 新增搜索功能
4. 新增文件浏览器
5. 重新设计了登录页
6. 改进了移动端访问时的网页排版
7. 修复登录失败时跳转地址错误的问题

## 媒体库支持连接到远程 Emby/Jellyfin 媒体服务器（弹弹play会员专属功能）
1. 支持浏览媒体库、在线播放 Emby/Jellyfin 中的视频
2. 支持自动读取并加载内嵌、外挂字幕
3. 支持计算文件特征码，自动匹配与加载弹幕
4. 列表中可以显示文件夹类型、文件大小、时长、已看状态、观看进度、emby刮削结果等额外信息
5. 显示视频缩略图，以及媒体库、番剧、电影的海报图片
6. 播放视频时将自动回传“标记为已看”状态到 Emby/Jellyfin 服务器

## 其他改进
- AI字幕翻译、AI视频总结服务升级为GPT-4o（额度不变）
- 串流播放网络视频时增加自动重连机制
- 优化文件匹配相关算法
- 媒体库中浏览远程文件时，支持刷新关联和为远程文件重新选择弹幕库
- 大幅提升了弹幕、字幕的简繁转换性能，升级简繁转换字库
- 优化了拼音、日语假名相关的性能
- 优化了番剧详情页加载，修复媒体库文件过多时界面卡顿的问题
- 优化了媒体库内查询效率
- 优化了媒体库文件浏览器中，“大图”模式的加载性能
- 优化了串流播放时的外挂字幕加载策略，支持根据字幕偏好自动选择字幕
- 优化了弹幕本地缓存的读取效率和内存占用
- 优化了远程访问设置页的布局
- 优化了主程序背景图加载性能

## 问题修复
- 修复了【AI视频总结】功能连接超时的问题
- 修复了联网识别文件时可能出错的问题
- 修复了禁用文件识别服务后，播放文件时仍然会弹出关联弹幕库窗口的问题
- 修复了媒体库网页版无法播放刚录入的新文件的问题
- 修复了自动更新相关问题
- 修复了媒体库初始化时可能报错的问题
- 修复了跨天后，刷新首页时新番列表日期标题未更新的问题
- 修复了媒体库切换设置后，左侧边栏错误选中本地文件夹的问题