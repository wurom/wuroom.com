重装TCP/IP协议

1."开始->运行->输入regedit->确定->打开注册表;

2.删除以下两个键:

HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Winsock 

HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Winsock2

3.用记事本打开%winroot%\inf\nettcpip.inf文件(C:\WINDOWS\inf\nettcpip.inf)，找到Characteristics = 0xA0 ;改为Characteristics = 0x80 ;保存退出(此步的作用是为了使TCP/IP协议的卸载按钮生效);

4.网上邻居->右击属性->打开网络连接->本地连接->右击属性->安装->协议->安装->从磁盘安装->浏览刚保存的nettcpip.inf(%winroot%\inf\nettcpip.inf)文件->选择"TCP/IP协议"(不要选那个TCP/IP版本6);

5.返回网络连接属性->选择"Internet 协议(TCP/IP)"->点"卸载"按钮把TCP/IP协议删除，然后关闭重启电脑;

6.重启后再按第4步，重新安装一次TCP/IP协议便可。

