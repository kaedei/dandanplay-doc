# 下载相关问题

**1. 弹弹play下载的原理**

与传统视频网站的运作原理不同，弹弹play是个本地视频播放器，没有架设服务器来为你储存视频资源，自然也没有“服务器连不上、速度慢”这些说法了。弹弹play各个平台客户端上的下载功能都是标准的**_BT协议下载_**，简单来说就是“你所获得的文件数据全部来自于BT网络内其他用户的上传”。

所以弹弹play的下载速度主要取决于两点，首先是你正在下载的资源是否有其他用户为你上传（称为“做种/供源”），其次就是你当前所处网络是否能连接上为你做种的其他用户。

**2. 为什么下载没有速度/速度很慢？**

了解了上面所说的两个要点，我们就能知道为什么会出现下载没有速度、或速度很慢的情况了。

首先就是你下载的资源并没有其他用户为你上传，这种情况一般出现在冷门资源、时间久远的资源上（也包括刚刚发布的资源）。举例来说，如果你正在下载一个热门剧集，一般会有很多人在同时下载和上传，那么这个资源的热度就会比较高，能够为你上传数据的用户也会有很多，获得高速度下载的概率也会提高。相反，如果你正在下载一个冷门剧集，或是发布时间比较久（并非最近）的资源，自然也不会有很多人在线为你上传数据。

其次就是你所在的网络条件并不好，例如处于非联通电信的小运营商网络、网络存在多层NAT和防火墙等，导致很难连接上其他用户，这样也会出现无速度的现象。

**3. 其他导致下载速度慢的原因**

除了以上所说两个最主要的原因外，还有其他因素可能导致下载速度慢：

- 下载客户端：不同的下载工具对于BT协议的优化不同，例如迅雷拥有最多的用户，µTorrent功能丰富且开源，等等。
- Tracker服务器：可以理解为BT网络中的“重要节点”，如果下载开始后，连接的tracker服务器比较少，那么就很难发现其他正在上传的用户。
- 运营商封锁：部分运营商和网络管理员会对BT协议进行封锁，一般出现在偏远地区和国外的宽带运营商、公司/教育网网络等。

**4. 如何解决下载速度慢的问题**

首先要明确的是，如果下载速度慢的原因出在“冷门资源”和“无人上传”，那么无论您对软件设置和算法做出多少优化，都无法对下载速度有实际性的改善。弹弹play已经内置了成熟的BT算法和设置，一般情况下无需做出额外的调整。

这里推荐使用【迅雷】或【百度云离线下载】下载弹弹play无速度的资源。

下面将介绍一些额外的优化措施：

- 弹弹play默认使用13323端口连接BT网络，13324端口连接NAT网络，在系统防火墙和路由器设置中放行这些端口可以获得更好的效果。
- 换用固定IP地址或公网IP地址
