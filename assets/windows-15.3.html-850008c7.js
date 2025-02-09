import{_ as d,r as t,o as r,c as h,a as l,b as e,w as a,d as i,e as n}from"./app-a0d85ae6.js";const s={},c=l("h1",{id:"弹弹play-15-3-windows版",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#弹弹play-15-3-windows版","aria-hidden":"true"},"#"),i(" 弹弹play 15.3（Windows版）")],-1),u=l("p",null,"欢迎使用PC端弹弹play 15.3版。此次更新包含了大量内容，包括媒体库升级、新FFmpeg播放器内核、媒体嗅探功能、在线播放针对性优化等。",-1),_={class:"table-of-contents"},f=n('<h2 id="一-新版媒体库上线" tabindex="-1"><a class="header-anchor" href="#一-新版媒体库上线" aria-hidden="true">#</a> 一，新版媒体库上线</h2><p>15.0版本开始，弹弹play从底层重写了内置的媒体库模块，从原先的“作品列表+文件”的简单分栏形式升级为了完整的番剧、文件管理中心，新特性包括：</p><ol><li><p>整合了本地文件、播放数据与在线关注、播放历史数据，在一个界面中既可按文件维度查看和管理，也可以浏览全部已关注的番剧。（登录弹弹play账号后体验更佳）</p></li><li><p>支持显示番剧海报，浏览媒体库时，为排序和筛选增加了更多维度，例如“最近播放”、“最近更新”、“番剧季度”、“名称”、“分类”等等。</p></li><li><p>新增的番剧详情弹窗中，显示剧集的追番状态、上映信息，还有本地关联文件信息。用点格子的方式，更方便管理追番。</p></li><li><p>支持分组显示与多显示模板的切换：大图、小图、列表、仅文字、左右分栏等。（如果希望返回旧版本的体验，可以选择只显示本地文件相关的番剧）</p></li><li><p>查看番剧详情时，同时显示番剧相关的本地文件，还支持显示可能相关联的其他文件（例如可能关联错误的文件）</p></li><li><p>新增文件浏览器界面，可以按照媒体库文件夹浏览磁盘上的文件。或是按照其他排序方式（最近收录、未识别、独立文件等）浏览。</p></li><li><p>文件浏览界面拥有 排版切换、快捷搜索、播放历史状态显示、打开文件夹、返回上一级等功能：</p></li><li><p>新版媒体库使用了全新的底层存储机制：</p><ul><li>减少数据库文件损坏的概率</li><li>媒体库扫描与文件信息更新过程中，新数据实时保存不会丢失</li><li>存储性能和查询性能大幅提升</li><li>更新后首次启动时将自动为您迁移旧数据</li></ul></li><li><p>媒体库设置中新增“磁盘未就绪状态检测”功能，默认开启。当弹弹play扫描媒体库，发现磁盘处于“未就绪”状态时，例如smb连接断开、U盘/移动硬盘未插入等情况下，将暂时不移除此磁盘上的媒体库记录。</p></li></ol><p>后续版本还将会持续改进升级新版媒体库，敬请期待。</p><h2 id="二-新增-ffmpeg-播放器内核" tabindex="-1"><a class="header-anchor" href="#二-新增-ffmpeg-播放器内核" aria-hidden="true">#</a> 二，新增 FFmpeg 播放器内核</h2><p>FFmpeg内核是支持大多数常见文件格式、渲染效率较高的播放器内核，无需安装第三方软件即可使用。</p>',6),m=n('<h2 id="三、新增『媒体嗅探』功能" tabindex="-1"><a class="header-anchor" href="#三、新增『媒体嗅探』功能" aria-hidden="true">#</a> 三、新增『媒体嗅探』功能</h2><p>『媒体嗅探』是一种从网页中提取媒体文件并播放的技术。当您在弹弹play内置的网页浏览器中访问一个网址时，浏览器会自动检测页面中的所有可播放的媒体文件。点击【播放】按钮后，弹弹play会使用内置播放器（VLC、FFmpeg等内核）播放该网页内的视频。</p><p>此功能适合不愿意等待文件下载的用户，可以在弹弹play中直接播放来自某个网页的在线视频。</p><p>使用方式：</p><ol><li><p>打开浏览器：在弹弹play播放器首页，点击“嗅探”按钮，将为您打开一个内置的浏览器窗口。</p></li><li><p>访问网页：在地址栏输入网址（或是在搜索引擎中搜索），然后按下回车键，即可访问目标网页。可以在这里点击地址栏左边的“收藏”按钮，把网页加入收藏夹，方便下次访问。</p></li><li><p>提取媒体文件：随着网页的加载，浏览器会自动检测页面中的媒体文件，并显示在右边的【媒体】边栏中。您可以点击“播放”按钮，提取并播放目标网页中的媒体文件。识别到多个地址时，不一定都可以播放，请优先尝试列表最底部的那个地址。</p></li><li><p>播放媒体文件：播放开始后，会提示您选择弹幕库并加载弹幕，选择后即可开始播放。缓冲速度取决于您的网络环境，如果进入播放状态但迟迟不显示画面，请耐心等待。图片</p></li></ol><h2 id="四、在线播放相关功能优化" tabindex="-1"><a class="header-anchor" href="#四、在线播放相关功能优化" aria-hidden="true">#</a> 四、在线播放相关功能优化</h2><p>新版本设置中，可以选择网络串流时使用的内核了，之前版本固定为VLC内核。当前可以使用的内核包括：VLC、FFmpeg以及弹幕外挂播放器（PotPlayer、mpv、MPC）。</p><h2 id="五-弹幕库选择窗口优化" tabindex="-1"><a class="header-anchor" href="#五-弹幕库选择窗口优化" aria-hidden="true">#</a> 五，弹幕库选择窗口优化</h2><p>在文件识别过程中，弹幕库选择窗口新增了“查看其他剧集”的按钮，点击之后就可以浏览到此番剧、此番剧关联番剧（其他季度）的所有剧集了，方便选择。剧集列表还增加了筛选功能，方便从列表中快速定位到某一集。</p><h2 id="六-其他新功能与优化" tabindex="-1"><a class="header-anchor" href="#六-其他新功能与优化" aria-hidden="true">#</a> 六，其他新功能与优化</h2><ul><li><p>设置-在线服务页新增“弹幕功能”总开关。关闭后，加载视频时将不再读取弹幕，但仍可以手动加载在线或本地弹幕。</p></li><li><p>支持安卓概念版新版投屏协议</p></li><li><p>向安卓版投屏时，支持按照PC版进度续播，投屏退出后支持记录当前视频的播放进度</p></li><li><p>自动下载页面新增快速搜索框</p></li><li><p>新增部分后台运行与交互参数</p></li><li><p>动画疯插件支持显示顶部/底部弹幕</p></li><li><p>由于新文档站上线，更新了软件内各处帮助链接</p></li></ul><h2 id="七-问题修复" tabindex="-1"><a class="header-anchor" href="#七-问题修复" aria-hidden="true">#</a> 七，问题修复</h2><ul><li>修复媒体库添加文件夹时路径检查的问题</li><li>修复下载器调整限速导致崩溃的问题</li><li>修复部分情况下播放器可能无法启动的问题</li><li>修复按 Ctrl+Enter 后弹幕发送框未自动获得焦点的问题</li><li>修复在使用 Windows 10 新版输入法时无法响应快捷键的问题</li><li>修复输入法候选框出现时弹幕发送框被隐藏的问题</li><li>修复 AI 语音识别功能中识别 FFmpeg 文件夹错误的问题</li><li>修复“添加更多弹幕”窗口不能添加特定格式网址的问题</li><li>修复 VLC 内核跳转进度时，可能导致界面卡死的问题</li><li>修复向远程服务器添加下载时无法填写 Linux 路径的问题</li><li>修复加载视频失败后可能导致后续无法继续正常播放的问题</li><li>修复吐槽插件解析问题</li><li>修复异世界动漫和吐槽插件</li></ul>',13);function x(F,w){const p=t("router-link"),o=t("RouterLink");return r(),h("div",null,[c,u,l("nav",_,[l("ul",null,[l("li",null,[e(p,{to:"#一-新版媒体库上线"},{default:a(()=>[i("一，新版媒体库上线")]),_:1})]),l("li",null,[e(p,{to:"#二-新增-ffmpeg-播放器内核"},{default:a(()=>[i("二，新增 FFmpeg 播放器内核")]),_:1})]),l("li",null,[e(p,{to:"#三、新增『媒体嗅探』功能"},{default:a(()=>[i("三、新增『媒体嗅探』功能")]),_:1})]),l("li",null,[e(p,{to:"#四、在线播放相关功能优化"},{default:a(()=>[i("四、在线播放相关功能优化")]),_:1})]),l("li",null,[e(p,{to:"#五-弹幕库选择窗口优化"},{default:a(()=>[i("五，弹幕库选择窗口优化")]),_:1})]),l("li",null,[e(p,{to:"#六-其他新功能与优化"},{default:a(()=>[i("六，其他新功能与优化")]),_:1})]),l("li",null,[e(p,{to:"#七-问题修复"},{default:a(()=>[i("七，问题修复")]),_:1})])])]),f,l("p",null,[i("我们上线了PC版播放器内核功能对比的文档，您可以从 "),e(o,{to:"/function/kernel-compare.html"},{default:a(()=>[i("这里")]),_:1}),i(" 查看更详细的信息。")]),m])}const b=d(s,[["render",x],["__file","windows-15.3.html.vue"]]);export{b as default};
