import{_ as d,r as h,o as r,c as n,a,b as i,w as t,d as e,e as o}from"./app-5701e843.js";const s={},c=a("h1",{id:"弹弹play-15-9-版本更新",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#弹弹play-15-9-版本更新","aria-hidden":"true"},"#"),e(" 弹弹play 15.9 版本更新")],-1),u=a("p",null,"2024年9月20日",-1),p={class:"table-of-contents"},f=o('<p>弹弹play 15.9版本带来了大量新功能和优化，进一步提升了用户体验。下载器模块进行了显著改进，媒体库远程连接和串流功能得到了增强，此外还修复了多个已知问题。欢迎您下载体验。</p><h2 id="一、下载器模块优化" tabindex="-1"><a class="header-anchor" href="#一、下载器模块优化" aria-hidden="true">#</a> 一、下载器模块优化</h2><p>新版本中，下载器模块进行了多项优化和功能增强，提升了下载效率和用户体验。</p><h3 id="预热与dht网络的连接" tabindex="-1"><a class="header-anchor" href="#预热与dht网络的连接" aria-hidden="true">#</a> 预热与DHT网络的连接</h3><p>下载器模块启动时将提前预热与DHT网络的连接，而不是等到启动首个任务后才开始访问网络。这将显著缩短下载任务的启动时间。</p><h3 id="通过dht网络将磁力链解析为种子文件" tabindex="-1"><a class="header-anchor" href="#通过dht网络将磁力链解析为种子文件" aria-hidden="true">#</a> 通过DHT网络将磁力链解析为种子文件</h3><p>新增通过DHT网络将磁力链解析为种子文件。在下载非动漫类型的资源，或运行自定义RSS地址的自动下载规则时，可以改善下载成功率。</p><h3 id="自动下载预览结果显示" tabindex="-1"><a class="header-anchor" href="#自动下载预览结果显示" aria-hidden="true">#</a> 自动下载预览结果显示</h3><p>在“自动下载”页预览结果时，可以显示此资源是否已经在下载列表中（也支持显示远程qbittorrent、transmission、aria2上的任务），快速了解哪些任务已经被添加到下载列表。</p><p><img src="https://txc.gtimg.com/data/104929/2024/0927/e5770ff5ae421d31bbb7e4a7a63b49d7.webp" alt="自动下载预览"></p><h2 id="二、媒体库远程连接功能优化" tabindex="-1"><a class="header-anchor" href="#二、媒体库远程连接功能优化" aria-hidden="true">#</a> 二、媒体库远程连接功能优化</h2><ol><li><p>媒体库远程连接（SMB/WebDAV/OneDrive）支持播放时加载远程磁盘上同文件夹内的的同名弹幕文件</p></li><li><p>媒体库网页版支持渲染ASS字幕</p></li></ol><p>媒体库网页版现已支持渲染ASS格式的字幕，包括字幕特效和更准确的定位、更高的渲染帧率。非ASS格式（如SRT、VTT）将自动转换成ASS格式显示。</p><h2 id="三、串流播放功能改进" tabindex="-1"><a class="header-anchor" href="#三、串流播放功能改进" aria-hidden="true">#</a> 三、串流播放功能改进</h2><p>新版本中，串流播放功能得到了多项改进，提升了播放稳定性和用户体验。</p><h3 id="保存播放偏好" tabindex="-1"><a class="header-anchor" href="#保存播放偏好" aria-hidden="true">#</a> 保存播放偏好</h3><p>串流播放时支持保存音轨、字幕轨、本地弹幕的选择偏好，下次播放相同文件时将自动读取之前的选择。</p><h3 id="播放按钮重新加载" tabindex="-1"><a class="header-anchor" href="#播放按钮重新加载" aria-hidden="true">#</a> 播放按钮重新加载</h3><p>当串流播放手动或自动停止时，可以点击播放器界面左下角的【播放】按钮立刻重新加载。</p><h3 id="播放成功率提升" tabindex="-1"><a class="header-anchor" href="#播放成功率提升" aria-hidden="true">#</a> 播放成功率提升</h3><p>新版本中改善了串流播放和M3U8在线播放的成功率，减少了播放中断的情况。此外还有两个问题得到了修复：</p><ul><li>修复了串流播放时，可能会残留连接未断开并占用网速的问题；</li><li>修复了串流播放时，长时间暂停后可能无法继续播放的问题；</li></ul><h2 id="四、分p投稿弹幕支持" tabindex="-1"><a class="header-anchor" href="#四、分p投稿弹幕支持" aria-hidden="true">#</a> 四、分P投稿弹幕支持</h2><p>加载包含分P投稿的弹幕时，支持自动检测分P并编辑时间，可以将多个分P拼接为一份完整的弹幕。</p><p><img src="https://txc.gtimg.com/data/104929/2024/0928/3e3d5f7d404504ff8814484bf37f50df.webp" alt="分P"></p><p>这里填写的规则是：只需要填写每一P中有效的时段，例如从0:00~12:30（假设12:30后是不相关内容）。播放器会自动计算时间，将所有选中的分P按顺序拼接成一份完整弹幕。</p><h2 id="五、简繁转换功能优化" tabindex="-1"><a class="header-anchor" href="#五、简繁转换功能优化" aria-hidden="true">#</a> 五、简繁转换功能优化</h2><p>新版本中升级了简繁转换功能，支持转换语句中的地方俗语。同时更新了词库，并修复了部分异体字收录错误的问题。</p><h2 id="六、其他功能优化与问题修复" tabindex="-1"><a class="header-anchor" href="#六、其他功能优化与问题修复" aria-hidden="true">#</a> 六、其他功能优化与问题修复</h2><ul><li>自动下载规则兼容Nyaa网站的RSS格式</li><li>嗅探功能添加了对WebView2的版本号检查和更新提示</li><li>修复了播放器长时间运行时，无法检测到DNS变化的问题</li><li>修复连接部分WebDAV服务器时无法开始播放的问题</li><li>修复了初始化WebView2时可能报错的问题</li><li>修复搜索弹幕库出错时会意外报错的问题</li></ul>',30);function _(b,x){const l=h("router-link");return r(),n("div",null,[c,u,a("nav",p,[a("ul",null,[a("li",null,[i(l,{to:"#一、下载器模块优化"},{default:t(()=>[e("一、下载器模块优化")]),_:1}),a("ul",null,[a("li",null,[i(l,{to:"#预热与dht网络的连接"},{default:t(()=>[e("预热与DHT网络的连接")]),_:1})]),a("li",null,[i(l,{to:"#通过dht网络将磁力链解析为种子文件"},{default:t(()=>[e("通过DHT网络将磁力链解析为种子文件")]),_:1})]),a("li",null,[i(l,{to:"#自动下载预览结果显示"},{default:t(()=>[e("自动下载预览结果显示")]),_:1})])])]),a("li",null,[i(l,{to:"#二、媒体库远程连接功能优化"},{default:t(()=>[e("二、媒体库远程连接功能优化")]),_:1})]),a("li",null,[i(l,{to:"#三、串流播放功能改进"},{default:t(()=>[e("三、串流播放功能改进")]),_:1}),a("ul",null,[a("li",null,[i(l,{to:"#保存播放偏好"},{default:t(()=>[e("保存播放偏好")]),_:1})]),a("li",null,[i(l,{to:"#播放按钮重新加载"},{default:t(()=>[e("播放按钮重新加载")]),_:1})]),a("li",null,[i(l,{to:"#播放成功率提升"},{default:t(()=>[e("播放成功率提升")]),_:1})])])]),a("li",null,[i(l,{to:"#四、分p投稿弹幕支持"},{default:t(()=>[e("四、分P投稿弹幕支持")]),_:1})]),a("li",null,[i(l,{to:"#五、简繁转换功能优化"},{default:t(()=>[e("五、简繁转换功能优化")]),_:1})]),a("li",null,[i(l,{to:"#六、其他功能优化与问题修复"},{default:t(()=>[e("六、其他功能优化与问题修复")]),_:1})])])]),f])}const m=d(s,[["render",_],["__file","windows-15.9.html.vue"]]);export{m as default};