# 下载器黑名单

[[TOC]]

## 功能介绍

从弹弹play v15.8版本开始，新增下载器黑名单功能。您可以通过设定黑名单规则，封禁吸血和行为异常的其他 BT 客户端。

## 主要功能

- 通过 PeerID 封禁不受欢迎的客户端，支持部分匹配。
- 通过 IP 地址封禁，支持 [CIDR 表示法](#cidr-表示法简介) 和 IPv6。
- 通过启发式算法，在下载过程中自动检测并封禁吸血客户端，不需要手动操作。
- 检测到吸血客户端后，支持自动封禁其 IP 地址的整个网段。
- 通过能够自动更新的共享黑名单，为您自动封禁近期威胁度较高的 IP 地址和网段。
- 在下载器主界面中显示实时的计数器，展示您已被此功能保护的次数。

## 使用方法

### 1. 通过 PeerID 封禁

1. 在“设置”-“下载”-“黑名单”-“Peer黑名单”中，可以添加 PeerID 规则到列表。

![](/images/upload/download-banlist-20250625-123422.png)

2. 点击“保存列表”按钮，使其生效。

您可以填入完整的 PeerID，也可以只输入 PeerID 的前缀或一部分。例如，`-DE13` 将封禁所有包含 `-DE13` 的 PeerID，这里不区分大小写。

### 2. 通过 IP 地址封禁

1. 在“设置”-“下载”-“黑名单”-“IP黑名单”中，可以添加 IP 地址规则到列表。

![](/images/upload/download-banlist-20250625-123446.png)

2. 点击“保存列表”按钮，使其生效。

您可以填入单个 IP 地址，也可以填入 [CIDR 表示法](#cidr-表示法简介)。例如，`112.45.16.0/24`。

此外，此处也支持填入 IPv6 地址和 IPv6 [CIDR 表示法](#cidr-表示法简介)，例如 `2409:8a15:8a6c:2500::/56`。

### 3. 通过启发式算法自动封禁

a) 在“设置”-“下载”-“黑名单”中，您可以启用“**自动封禁吸血客户端**”功能。此功能会在下载过程中自动检测并封禁吸血客户端。

![](/images/upload/download-banlist-20250625-123500.png)

启发式算法支持检测如下的异常行为：

- **过量上传**：本机上传至对方的数据量超过了资源总大小的一定倍数。
- **虚假进度**：本机上传至对方的数据量超过了资源总大小的一定比例，但对方的下载进度在此期间却没有相应增加。

b) 当启用“**发现有问题的IP时，封禁其所属网段**”选项时，检测到吸血客户端后，会封禁其 IP 地址的整个网段：

- 对于 IPv4 地址，封禁其所属的 `/24` 网段。
- 对于 IPv6 地址，封禁其所属的 `/64` 网段。

### 4. 共享黑名单

1. 在“设置”-“下载”-“黑名单”-“共享黑名单”中，您可以开启“**启用共享黑名单列表**”选项。此功能会从网络上获取共享黑名单，为您自动封禁近期威胁度较高的 IP 地址和网段。

2. 自动更新：共享黑名单会在后台定期更新，保证您免受最新的威胁。

![](/images/upload/download-banlist-20250625-123516.png)

在设置了黑名单功能后，下载器界面底部的计数器将会实时显示此功能为您拦截恶意连接的次数：

![](/images/upload/download-banlist-20250625-123541.png)

## CIDR 表示法简介

CIDR（无类别域间路由，Classless Inter-Domain Routing）是一种用于分配IP地址和路由的方式。它通过在IP地址后面加上一个斜杠和一个数字（例如，192.168.1.0/24 或 2001:db8::/32）来表示一个IP地址范围。斜杠后的数字称为前缀长度，表示网络部分占据的位数。比如，/24代表前24位是网络部分，剩下的8位是主机部分。这样可以更灵活地划分子网和管理IP地址资源。

### 示例

1. **192.168.1.0/24**
   - 解释：前24位是网络部分，剩下的8位是主机部分。
   - IP范围：192.168.1.0 到 192.168.1.255
   - 总共地址数量：256个地址

2. **172.16.0.0/16**
   - 解释：前16位是网络部分，剩下的16位是主机部分。
   - IP范围：172.16.0.0 到 172.16.255.255
   - 总共地址数量：65,536个地址

3. **2001:db8::/32**
   - 解释：前32位是网络部分，剩下的96位是主机部分。
   - IP范围：2001:db8:0:0:0:0:0:0 到 2001:db8:ffff:ffff:ffff:ffff:ffff:ffff
   - 总共地址数量：约 79 亿亿个地址

4. **fe80::/10**
   - 解释：前10位是网络部分，剩下的118位是主机部分。
   - IP范围：fe80:0:0:0:0:0:0:0 到 fe80:3ff:ffff:ffff:ffff:ffff:ffff:ffff
   - 总共地址数量：约 1.2 万亿亿个地址


通过这些示例，你可以看到CIDR表示法如何灵活地划分网络和主机部分，从而有效管理IP地址资源。
