import{_ as d,r as t,o,c as n,a as l,b as a,w as r,d as e,e as f}from"./app-5701e843.js";const s={},h=l("h1",{id:"下载器黑名单",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#下载器黑名单","aria-hidden":"true"},"#"),e(" 下载器黑名单")],-1),c={class:"table-of-contents"},u=f('<h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2><p>从弹弹play v15.8版本开始，新增下载器黑名单功能。您可以通过设定黑名单规则，封禁吸血和行为异常的其他 BT 客户端。</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><ul><li>通过 PeerID 封禁不受欢迎的客户端，支持部分匹配。</li><li>通过 IP 地址封禁，支持 <a href="#cidr-%E8%A1%A8%E7%A4%BA%E6%B3%95%E7%AE%80%E4%BB%8B">CIDR 表示法</a> 和 IPv6。</li><li>通过启发式算法，在下载过程中自动检测并封禁吸血客户端，不需要手动操作。</li><li>检测到吸血客户端后，支持自动封禁其 IP 地址的整个网段。</li><li>通过能够自动更新的共享黑名单，为您自动封禁近期威胁度较高的 IP 地址和网段。</li><li>在下载器主界面中显示实时的计数器，展示您已被此功能保护的次数。</li></ul><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="_1-通过-peerid-封禁" tabindex="-1"><a class="header-anchor" href="#_1-通过-peerid-封禁" aria-hidden="true">#</a> 1. 通过 PeerID 封禁</h3><ol><li>在“设置”-“下载”-“黑名单”-“Peer黑名单”中，可以添加 PeerID 规则到列表。</li><li>点击“保存列表”按钮，使其生效。</li></ol><p>您可以填入完整的 PeerID，也可以只输入 PeerID 的前缀或一部分。例如，<code>-DE13</code> 将封禁所有包含 <code>-DE13</code> 的 PeerID，这里不区分大小写。</p><h3 id="_2-通过-ip-地址封禁" tabindex="-1"><a class="header-anchor" href="#_2-通过-ip-地址封禁" aria-hidden="true">#</a> 2. 通过 IP 地址封禁</h3><ol><li>在“设置”-“下载”-“黑名单”-“IP黑名单”中，可以添加 IP 地址规则到列表。</li><li>点击“保存列表”按钮，使其生效。</li></ol><p>您可以填入单个 IP 地址，也可以填入 <a href="#cidr-%E8%A1%A8%E7%A4%BA%E6%B3%95%E7%AE%80%E4%BB%8B">CIDR 表示法</a>。例如，<code>112.45.16.0/24</code>。</p><p>此外，此处也支持填入 IPv6 地址和 IPv6 <a href="#cidr-%E8%A1%A8%E7%A4%BA%E6%B3%95%E7%AE%80%E4%BB%8B">CIDR 表示法</a>，例如 <code>2409:8a15:8a6c:2500::/56</code>。</p><h3 id="_3-通过启发式算法自动封禁" tabindex="-1"><a class="header-anchor" href="#_3-通过启发式算法自动封禁" aria-hidden="true">#</a> 3. 通过启发式算法自动封禁</h3><p>a) 在“设置”-“下载”-“黑名单”中，您可以启用“<strong>自动封禁吸血客户端</strong>”功能。此功能会在下载过程中自动检测并封禁吸血客户端。</p><p>启发式算法支持检测如下的异常行为：</p><ul><li><strong>过量上传</strong>：本机上传至对方的数据量超过了资源总大小的一定倍数。</li><li><strong>虚假进度</strong>：本机上传至对方的数据量超过了资源总大小的一定比例，但对方的下载进度在此期间却没有相应增加。</li></ul><p>b) 当启用“<strong>发现有问题的IP时，封禁其所属网段</strong>”选项时，检测到吸血客户端后，会封禁其 IP 地址的整个网段：</p><ul><li>对于 IPv4 地址，封禁其所属的 <code>/24</code> 网段。</li><li>对于 IPv6 地址，封禁其所属的 <code>/64</code> 网段。</li></ul><h3 id="_4-共享黑名单" tabindex="-1"><a class="header-anchor" href="#_4-共享黑名单" aria-hidden="true">#</a> 4. 共享黑名单</h3><ol><li><p>在“设置”-“下载”-“黑名单”-“共享黑名单”中，您可以开启“<strong>启用共享黑名单列表</strong>”选项。此功能会从网络上获取共享黑名单，为您自动封禁近期威胁度较高的 IP 地址和网段。</p></li><li><p>自动更新：共享黑名单会在后台定期更新，保证您免受最新的威胁。</p></li></ol><h2 id="cidr-表示法简介" tabindex="-1"><a class="header-anchor" href="#cidr-表示法简介" aria-hidden="true">#</a> CIDR 表示法简介</h2><p>CIDR（无类别域间路由，Classless Inter-Domain Routing）是一种用于分配IP地址和路由的方式。它通过在IP地址后面加上一个斜杠和一个数字（例如，192.168.1.0/24 或 2001:db8::/32）来表示一个IP地址范围。斜杠后的数字称为前缀长度，表示网络部分占据的位数。比如，/24代表前24位是网络部分，剩下的8位是主机部分。这样可以更灵活地划分子网和管理IP地址资源。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ol><li><p><strong>192.168.1.0/24</strong></p><ul><li>解释：前24位是网络部分，剩下的8位是主机部分。</li><li>IP范围：192.168.1.0 到 192.168.1.255</li><li>总共地址数量：256个地址</li></ul></li><li><p><strong>172.16.0.0/16</strong></p><ul><li>解释：前16位是网络部分，剩下的16位是主机部分。</li><li>IP范围：172.16.0.0 到 172.16.255.255</li><li>总共地址数量：65,536个地址</li></ul></li><li><p><strong>2001:db8::/32</strong></p><ul><li>解释：前32位是网络部分，剩下的96位是主机部分。</li><li>IP范围：2001:db8:0:0:0:0:0:0 到 2001:db8:ffff:ffff:ffff:ffff:ffff:ffff</li><li>总共地址数量：约 79 亿亿个地址</li></ul></li><li><p><strong>fe80::/10</strong></p><ul><li>解释：前10位是网络部分，剩下的118位是主机部分。</li><li>IP范围：fe80:0:0:0:0:0:0:0 到 fe80:3ff:ffff:ffff:ffff:ffff:ffff:ffff</li><li>总共地址数量：约 1.2 万亿亿个地址</li></ul></li></ol><p>通过这些示例，你可以看到CIDR表示法如何灵活地划分网络和主机部分，从而有效管理IP地址资源。</p>',25);function p(_,I){const i=t("router-link");return o(),n("div",null,[h,l("nav",c,[l("ul",null,[l("li",null,[a(i,{to:"#功能介绍"},{default:r(()=>[e("功能介绍")]),_:1})]),l("li",null,[a(i,{to:"#主要功能"},{default:r(()=>[e("主要功能")]),_:1})]),l("li",null,[a(i,{to:"#使用方法"},{default:r(()=>[e("使用方法")]),_:1}),l("ul",null,[l("li",null,[a(i,{to:"#_1-通过-peerid-封禁"},{default:r(()=>[e("1. 通过 PeerID 封禁")]),_:1})]),l("li",null,[a(i,{to:"#_2-通过-ip-地址封禁"},{default:r(()=>[e("2. 通过 IP 地址封禁")]),_:1})]),l("li",null,[a(i,{to:"#_3-通过启发式算法自动封禁"},{default:r(()=>[e("3. 通过启发式算法自动封禁")]),_:1})]),l("li",null,[a(i,{to:"#_4-共享黑名单"},{default:r(()=>[e("4. 共享黑名单")]),_:1})])])]),l("li",null,[a(i,{to:"#cidr-表示法简介"},{default:r(()=>[e("CIDR 表示法简介")]),_:1}),l("ul",null,[l("li",null,[a(i,{to:"#示例"},{default:r(()=>[e("示例")]),_:1})])])])])]),u])}const E=d(s,[["render",p],["__file","download-banlist.html.vue"]]);export{E as default};