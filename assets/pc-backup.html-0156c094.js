import{_ as a,o as e,c as r,e as d}from"./app-5701e843.js";const h={},c=d('<h1 id="备份弹弹play的数据-pc版" tabindex="-1"><a class="header-anchor" href="#备份弹弹play的数据-pc版" aria-hidden="true">#</a> 备份弹弹play的数据（PC版）</h1><p>（以下内容适用于弹弹play PC版 v15.2.0 及以上版本）</p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>PC版弹弹play被设计为绿色软件，大部分运行时产生的数据（设置、缓存）都存储在安装文件夹中，不会在系统和注册表中留下垃圾文件。因此，备份弹弹play的数据非常简单，只需要备份少数几个文件即可。</p><p>当您需要重新安装弹弹play、重新安装系统或更换电脑时，您可以将已备份的文件夹复制到新的弹弹play文件夹中，即可恢复弹弹play备份前的运行状态。</p><h2 id="存储位置" tabindex="-1"><a class="header-anchor" href="#存储位置" aria-hidden="true">#</a> 存储位置</h2><p>弹弹play的运行数据包括弹幕缓存、播放历史、番剧信息、图片缓存等，主要存储在：</p><ul><li>桌面版：安装文件夹所在的目录下</li><li>应用商店(UWP)版：<code>C:\\Users\\用户名\\AppData\\Roaming\\dandanplay</code> 目录下</li></ul><h2 id="备份数据" tabindex="-1"><a class="header-anchor" href="#备份数据" aria-hidden="true">#</a> 备份数据</h2><p>一般来说，备份弹弹play的数据只需要备份以下两个子目录：</p><ul><li>Config：存储弹弹play的配置信息</li><li>Cache：存储弹弹play的运行数据和缓存</li></ul><p>在重新安装弹弹play、重新安装系统或更换电脑时，您可以将这两个目录复制到新的弹弹play文件夹中，以恢复弹弹play的数据。</p><h2 id="文件夹说明" tabindex="-1"><a class="header-anchor" href="#文件夹说明" aria-hidden="true">#</a> 文件夹说明</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3><p><code>Config</code> 目录下存储了弹弹play的配置信息，均为xml格式的文件，包括播放器设置、弹幕设置、外观设置、网络连接设置等。建议您完整备份该目录。</p><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> Cache</h3><p><code>Cache</code> 目录下存储了弹弹play的运行数据和缓存，包括弹幕缓存、播放历史、番剧信息、图片缓存等。如果条件允许，建议您完整备份该目录，将使您在新的电脑上能够快速恢复弹弹play的状态（如媒体库视频封面、番剧信息、播放进度等）。</p><p>如果您的备份空间有限，也可以只备份其中的部分文件。下面将对 <code>Cache</code> 目录中的每个文件和子文件夹进行说明。</p><h4 id="dandanplay-litedb-需要备份" tabindex="-1"><a class="header-anchor" href="#dandanplay-litedb-需要备份" aria-hidden="true">#</a> dandanplay.litedb （需要备份）</h4><p><code>dandanplay.litedb</code> 是弹弹play的主数据库文件，存储了大部分关键数据，<strong>强烈建议备份该文件</strong>。</p><h4 id="task-xml-需要备份" tabindex="-1"><a class="header-anchor" href="#task-xml-需要备份" aria-hidden="true">#</a> task.xml （需要备份）</h4><p><code>task.xml</code> 存储了弹弹play的下载任务信息，如果您有下载任务，请备份该文件。</p><h4 id="tracker-txt-可以不备份" tabindex="-1"><a class="header-anchor" href="#tracker-txt-可以不备份" aria-hidden="true">#</a> tracker.txt （可以不备份）</h4><p><code>tracker.txt</code> 存储了弹弹play的tracker服务器列表，如果您使用了磁力链接下载功能，建议备份该文件。这个文件也会定期去服务器获取更新。</p><h4 id="image-和-libraryimage-建议备份" tabindex="-1"><a class="header-anchor" href="#image-和-libraryimage-建议备份" aria-hidden="true">#</a> Image 和 LibraryImage（建议备份）</h4><p><code>Image</code> 和 <code>LibraryImage</code> 分别存储了弹弹play的网络图片缓存（如番剧封面）和本地图片缓存（如媒体库视频封面），如果您的媒体库中有大量视频文件，建议备份这两个文件夹。</p><h4 id="torrents-建议备份" tabindex="-1"><a class="header-anchor" href="#torrents-建议备份" aria-hidden="true">#</a> Torrents（建议备份）</h4><p><code>Torrents</code> 存储了弹弹play下载的种子文件，如果您使用了弹弹play的下载器功能，请备份该文件夹。</p><p>如果不备份此文件夹，新的电脑上启动已有的下载任务时，可能会弹出错误提示。</p><h4 id="speechrecognition-建议备份" tabindex="-1"><a class="header-anchor" href="#speechrecognition-建议备份" aria-hidden="true">#</a> SpeechRecognition（建议备份）</h4><p><code>SpeechRecognition</code> 存储了弹弹play的语音识别结果和翻译结果，如果您使用了弹弹play的语音识别功能，建议备份该文件夹。</p><h4 id="commentcacheentity-和-thirdpartycommentcacheentity-可以不备份" tabindex="-1"><a class="header-anchor" href="#commentcacheentity-和-thirdpartycommentcacheentity-可以不备份" aria-hidden="true">#</a> CommentCacheEntity 和 ThirdPartyCommentCacheEntity （可以不备份）</h4><p><code>CommentCacheEntity</code> 和 <code>ThirdPartyCommentCacheEntity</code> 存储了弹弹play的弹幕缓存，如果您有大量的弹幕缓存，建议备份这两个文件夹。</p><h4 id="progressthumb-可以不备份" tabindex="-1"><a class="header-anchor" href="#progressthumb-可以不备份" aria-hidden="true">#</a> ProgressThumb（可以不备份）</h4><p><code>ProgressThumb</code> 存储了弹弹play的视频进度缩略图，可以不备份此文件夹。</p><h4 id="subtitle-可以不备份" tabindex="-1"><a class="header-anchor" href="#subtitle-可以不备份" aria-hidden="true">#</a> Subtitle（可以不备份）</h4><p><code>Subtitle</code> 存储了弹弹play从内封字幕视频（如mkv格式）中提取的字幕文件，可以不备份此文件夹。</p><h4 id="transcoding-可以不备份" tabindex="-1"><a class="header-anchor" href="#transcoding-可以不备份" aria-hidden="true">#</a> Transcoding（可以不备份）</h4><p><code>Transcoding</code> 存储了弹弹play的语音识别文件转码时产生的临时文件，可以不备份此文件夹。</p>',39),i=[c];function t(n,o){return e(),r("div",null,i)}const l=a(h,[["render",t],["__file","pc-backup.html.vue"]]);export{l as default};