# 播放器无法启动如何解决

如果出现了安装弹弹play Windows版后无法启动的问题，例如请依次尝试如下的步骤：

1. 可能是文件夹权限问题，如果你把它安装到了 "C:\Program Files" 之类的特殊文件夹，请试试换个文件夹安装。同时也不能安装到分区根目录下。

2. 重新安装 .NET 框架，官方下载页面：[https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer)

3. 某些杀毒软件或安全防护类软件可能会阻止弹弹play启动，请尝试暂时关闭这类安全软件

4. 如果启动后任务栏只出现了图标，而没有主界面，或者主界面只有一个边框没有内容，请在显卡设定中（一般是桌面右键->Intel或者Nvidia设置之类的），手动指定让弹弹play强制调用独立显卡或是集成显卡，即不要让系统自己决定。

5. 尝试升级显卡驱动程序。

6. 部分显卡附带的优化程序可能会干扰播放器运行。退出或者卸载这些程序即可。