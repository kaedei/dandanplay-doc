import{_ as r,r as p,o as s,c as i,a as l,b as t,w as o,d as e,e as c}from"./app-a0d85ae6.js";const d={},u=l("h1",{id:"『弹幕外挂』功能说明",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#『弹幕外挂』功能说明","aria-hidden":"true"},"#"),e(" 『弹幕外挂』功能说明")],-1),h=l("p",null,"目录：",-1),_={class:"table-of-contents"},m=c('<h2 id="『弹幕外挂』介绍" tabindex="-1"><a class="header-anchor" href="#『弹幕外挂』介绍" aria-hidden="true">#</a> 『弹幕外挂』介绍</h2><p>弹弹play PC版从 14.0 版本开始新增『弹幕外挂』功能，可以让您在使用熟悉的播放器播放视频时（如 PotPlayer、mpv、MPC-HC、MPC-BE 等），在其画面上方覆盖来自弹弹play的弹幕渲染层，并根据播放进度实时播放弹幕。</p><p>使用 PotPlayer 播放时的效果如下：</p><p><img src="https://txc.gtimg.com/data/104929/2023/0702/d78c77c19f708c4922f41e235fb7ebcf.png" alt="d78c77c19f708c4922f41e235fb7ebcf.png"></p><p>本文将讲解如何正确配置使用此功能。</p><h2 id="配置使用-potplayer-播放器-32位、64位版本" tabindex="-1"><a class="header-anchor" href="#配置使用-potplayer-播放器-32位、64位版本" aria-hidden="true">#</a> 配置使用 PotPlayer 播放器（32位、64位版本）</h2>',6),P={href:"https://potplayer.daum.net/?lang=zh_CN",target:"_blank",rel:"noopener noreferrer"},f=l("li",null,[l("p",null,[l("strong",null,"（从 14.2 版开始，弹弹play将自动为您修改 PotPlayer 设置，您不必再手动进行这一步的操作）")]),l("p",null,"打开 PotPlayer，进入选项设置窗口（默认F5）。在【辅助】页面中选中【将程序的消息输出到系统标题栏用于朗读输出】选项后点【确定】保存。(见下图）"),l("p",null,[l("img",{src:"https://txc.gtimg.com/data/104929/2023/0701/d8048b76eb63ede744ecf80bfe9156bf.png",alt:"d8048b76eb63ede744ecf80bfe9156bf.png"})])],-1),b=l("li",null,[l("p",null,"在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - PotPlayer】。请按您实际安装的 PotPlayer 版本选择使用32位或64位。"),l("p",null,[l("img",{src:"https://txc.gtimg.com/data/104929/2023/1014/39ddb66ccfb8c0f83640ee85a6ac2c8c.png",alt:"39ddb66ccfb8c0f83640ee85a6ac2c8c.png"})])],-1),g=l("li",null,[l("p",null,"如果您没有将 PotPlayer 安装在默认位置，请点击【浏览 PotPlayer 可执行文件】按钮进行选择")],-1),y=l("li",null,[l("p",null,"从弹弹play中选择一个视频开始播放，弹弹play将自动启动 PotPlayer，并覆盖弹幕层。")],-1),C=l("p",null,[l("strong",null,"其他注意事项：")],-1),v=l("ul",null,[l("li",null,"部分特殊情况下，PotPlayer 可能会抢占渲染优先级，使视频覆盖在弹幕层上方，导致弹幕无法正常显示出来。此时请拖拽或晃动 PotPlayer 窗口一下（只要更改了窗口大小位置就可以），让弹弹play重新把弹幕层覆盖回视频上方。"),l("li",null,"如果弹幕仍在主窗口内显示，说明弹弹play没有找到 PotPlayer 播放器。请将所有打开的 PotPlayer 窗口关闭后重新尝试播放。"),l("li",null,"播放结束后，如果 PotPlayer 窗口没有自动关闭，请手动关闭它，以免影响下次播放。"),l("li",null,"因为弹弹play目前无法检测到 PotPlayer 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 PotPlayer 内切换视频。"),l("li",null,"您的 PotPlayer 界面需要选择 简体中文、繁体中文、日语、英语 其中的一种，其他语言版本不受支持")],-1),M=l("h2",{id:"配置使用-mpv-播放器",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#配置使用-mpv-播放器","aria-hidden":"true"},"#"),e(" 配置使用 mpv 播放器")],-1),x={href:"https://github.com/hooke007/MPV_lazy",target:"_blank",rel:"noopener noreferrer"},k=c('<li><p><strong>（从 14.2 版开始，弹弹play将自动为您修改 mpv 设置，您不必再手动进行这一步的操作）</strong></p><p>使用记事本编辑 mpv.config 配置文件。在 mpv_lazy 中，可以在【右键-工具-打开设置目录】定位到此文件</p><p><img src="https://txc.gtimg.com/data/104929/2023/0702/f307eb38bb610ee27ce42516f84bc0d8.png" alt="f307eb38bb610ee27ce42516f84bc0d8.png"></p><p>在 mpv.config 文件的一开始添加下面一行的内容：</p><p><strong>title=[mpv] ${filename} ${time-pos} ${speed}x</strong></p><p>这行配置的意思是修改mpv的窗口标题，让mpv在标题栏中显示当前视频的文件名、播放时间点和播放速度。修改后请关闭 mpv 播放器使其生效。</p><p><img src="https://txc.gtimg.com/data/104929/2023/0915/8ee5b64ba47f370822ade7e56b41cbb5.png" alt="8ee5b64ba47f370822ade7e56b41cbb5.png"></p></li><li><p>在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - mpv播放器】。点击【浏览 mpv 可执行文件】按钮选择您电脑中 mpv.exe 所在的位置。</p><p><img src="https://txc.gtimg.com/data/104929/2023/0702/9baf742235db8660155adc7d07e2104d.png" alt="9baf742235db8660155adc7d07e2104d.png"></p></li><li><p>从弹弹play中选择一个视频开始播放，弹弹play将自动启动 mpv 播放器，并覆盖弹幕层。</p></li>',3),B=l("p",null,[l("strong",null,"其他注意事项：")],-1),E=l("ul",null,[l("li",null,"播放结束后，如果 mpv 窗口没有自动关闭，请手动关闭它。"),l("li",null,"因为弹弹play目前无法检测到 mpv 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 mpv 内切换视频。"),l("li",null,"mpv 播放器内不显示当前播放状态，弹弹play将通过当前时间的变化情况来判断播放状态，所以一些操作（播放、暂停等）同步到弹幕层可能会有几秒钟的延迟")],-1),H=l("h2",{id:"配置使用-mpc-hc-和-mpc-be-播放器",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#配置使用-mpc-hc-和-mpc-be-播放器","aria-hidden":"true"},"#"),e(" 配置使用 MPC-HC 和 MPC-BE 播放器")],-1),z=l("p",null,"下载 Media Player Classic 播放器：",-1),N={href:"https://github.com/clsid2/mpc-hc",target:"_blank",rel:"noopener noreferrer"},V={href:"https://sourceforge.net/projects/mpcbe/",target:"_blank",rel:"noopener noreferrer"},$=l("li",null,[l("p",null,"在弹弹play 【设置-播放器内核与字幕】 页面中选中【弹幕外挂 - MPC-HC/MPC-BE 播放器】。点击【浏览 MPC 可执行文件】按钮选择您电脑中 mpc-hc64.exe 或 mpc-be64.exe 所在的位置。"),l("p",null,[l("img",{src:"https://txc.gtimg.com/data/104929/2023/1014/c464a847da1e96acd47d21f348238d2f.png",alt:"c464a847da1e96acd47d21f348238d2f.png"})])],-1),j=l("li",null,[l("p",null,"从弹弹play中选择一个视频开始播放，弹弹play将自动启动对应的 MPC 播放器，并覆盖弹幕层。")],-1),w=l("p",null,[l("strong",null,"其他注意事项：")],-1),I=l("ul",null,[l("li",null,"播放结束后，如果 MPC 窗口没有自动关闭，请手动关闭它。"),l("li",null,"因为弹弹play目前无法检测到 MPC 更换视频的动作，如果需要观看下一集，请在弹弹play中选择新一集进行播放，而不要在 MPC 内切换视频。"),l("li",null,[e("MPC 系列播放器在全屏状态下会自动隐藏进度条界面，也不会再主动更新界面上的播放状态和播放进度，除非鼠标移动到下方让状态栏重新显示。所以"),l("strong",null,"当您发现视频播放和弹幕层的状态不同步时，请移动鼠标使底部进度条显示一次"),e("，弹弹play将自动同步最新的播放状态。")]),l("li",null,"弹弹play无法检测到 MPC-HC 播放器的加速/降速状态，如果您用 MPC-HC 倍速观看视频，弹幕将逐渐与视频不同步。（MPC-BE 不受影响）"),l("li",null,"使用 MPC 时，请保证底部“状态栏”显示。如果状态栏已经隐藏了请点击【菜单-查看-[√]状态栏】使其重新显示。"),l("li",null,"您的 MPC 界面需要选择 简体中文、繁体中文、日语、英语 其中的一种，其他语言不受支持。")],-1);function L(F,O){const a=p("router-link"),n=p("ExternalLinkIcon");return s(),i("div",null,[u,h,l("nav",_,[l("ul",null,[l("li",null,[t(a,{to:"#『弹幕外挂』介绍"},{default:o(()=>[e("『弹幕外挂』介绍")]),_:1})]),l("li",null,[t(a,{to:"#配置使用-potplayer-播放器-32位、64位版本"},{default:o(()=>[e("配置使用 PotPlayer 播放器（32位、64位版本）")]),_:1})]),l("li",null,[t(a,{to:"#配置使用-mpv-播放器"},{default:o(()=>[e("配置使用 mpv 播放器")]),_:1})]),l("li",null,[t(a,{to:"#配置使用-mpc-hc-和-mpc-be-播放器"},{default:o(()=>[e("配置使用 MPC-HC 和 MPC-BE 播放器")]),_:1})])])]),m,l("ol",null,[l("li",null,[l("p",null,[e("下载安装 PotPlayer 播放器："),l("a",P,[e("https://potplayer.daum.net/?lang=zh_CN"),t(n)]),e(" 推荐使用64位版本")])]),f,b,g,y]),C,v,M,l("ol",null,[l("li",null,[l("p",null,[e("下载 mpv 播放器，因为 mpv 播放器配置比较复杂，这里推荐使用 mpv_lazy 懒人包："),l("a",x,[e("https://github.com/hooke007/MPV_lazy"),t(n)])])]),k]),B,E,H,l("ol",null,[l("li",null,[z,l("ul",null,[l("li",null,[e("MPC-HC："),l("a",N,[e("https://github.com/clsid2/mpc-hc"),t(n)])]),l("li",null,[e("MPC-BE："),l("a",V,[e("https://sourceforge.net/projects/mpcbe/"),t(n)])])])]),$,j]),w,I])}const T=r(d,[["render",L],["__file","danmaku-overlay.html.vue"]]);export{T as default};
