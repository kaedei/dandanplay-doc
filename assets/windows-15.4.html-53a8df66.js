import{_ as o,r as n,o as d,c as r,a as e,b as i,w as t,d as a,e as s}from"./app-5701e843.js";const h={},c=e("h1",{id:"弹弹play-windows版-v15-4-更新日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#弹弹play-windows版-v15-4-更新日志","aria-hidden":"true"},"#"),a(" 弹弹play Windows版 v15.4 更新日志")],-1),u=e("p",null,"2024年6月5日",-1),_={class:"table-of-contents"},p=s('<p>弹弹play 15.4版中，可以在媒体库中连接远程 smb 和 WebDAV 设备，浏览并播放远程设备上的视频文件。 同时，新版还对串流播放场景进行了优化。</p><h2 id="媒体库新增-远程连接-功能" tabindex="-1"><a class="header-anchor" href="#媒体库新增-远程连接-功能" aria-hidden="true">#</a> 媒体库新增“远程连接”功能</h2><p>在新版本的媒体库中，可以在左侧边栏中找到“远程媒体库”入口，点击+按钮后可以添加远程设备的连接。 当前支持的协议：SMB (v2、v3版本）和 WebDAV。</p><p>之后便可像浏览本地文件一样，浏览远程设备上的视频文件，双击视频即可开始播放。</p><h2 id="ai服务升级为gpt-4o" tabindex="-1"><a class="header-anchor" href="#ai服务升级为gpt-4o" aria-hidden="true">#</a> AI服务升级为GPT-4o</h2><p>新版本中，AI 字幕翻译服务新增了 GPT-4o 模型，将提供更加准确的翻译效果。GPT-4o 模型的用量将额外提供，不影响已有的 Azure/ChatGPT 服务。</p><p>AI 视频总结功能也升级为 GPT-4o 模型，提高了视频总结的输入长度、总结效果与响应速度。</p><h2 id="串流播放优化" tabindex="-1"><a class="header-anchor" href="#串流播放优化" aria-hidden="true">#</a> 串流播放优化</h2><p>新版本中，我们改善了 VLC 和 FFmpeg 内核串流播放 SMB 协议的成功率。 在调用「弹幕外挂」串流播放网络视频时，将通过内置代理获得更稳定的加载体验，甚至能让外部播放器播放本身不支持的协议。</p><h2 id="其他改进" tabindex="-1"><a class="header-anchor" href="#其他改进" aria-hidden="true">#</a> 其他改进</h2><ul><li>优化了自动更新服务</li><li>爱奇艺、腾讯视频、优酷等插件支持加载彩色弹幕</li><li>优化了媒体库扫描速度</li><li>优化了媒体库图片展示</li><li>优化了进度条缩略图的展示效果</li></ul><h2 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h2><ul><li>修复了特定情况下自动更新可能会打包错误的文件版本的问题</li><li>修复了 VLC 内核默认宽高比问题</li><li>修复了通过弹幕外挂调用外部播放器串流视频时，弹幕层无法自动附加的问题</li><li>修复了切换到媒体库界面时无法直接按ESC关闭弹出层的问题</li></ul>',13);function f(b,w){const l=n("router-link");return d(),r("div",null,[c,u,e("nav",_,[e("ul",null,[e("li",null,[i(l,{to:"#媒体库新增-远程连接-功能"},{default:t(()=>[a("媒体库新增“远程连接”功能")]),_:1})]),e("li",null,[i(l,{to:"#ai服务升级为gpt-4o"},{default:t(()=>[a("AI服务升级为GPT-4o")]),_:1})]),e("li",null,[i(l,{to:"#串流播放优化"},{default:t(()=>[a("串流播放优化")]),_:1})]),e("li",null,[i(l,{to:"#其他改进"},{default:t(()=>[a("其他改进")]),_:1})]),e("li",null,[i(l,{to:"#问题修复"},{default:t(()=>[a("问题修复")]),_:1})])])]),p])}const m=o(h,[["render",f],["__file","windows-15.4.html.vue"]]);export{m as default};