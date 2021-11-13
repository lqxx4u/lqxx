
github 网速慢问题解决：
https://gitee.com/inChoong/GitHub520

# 修改 hosts 文件

    Windows 系统：C:\Windows\System32\drivers\etc\hosts
    Linux 系统：/etc/hosts
    Mac（苹果电脑）系统：/etc/hosts
    Android（安卓）系统：/system/etc/hosts
    iPhone（iOS）系统：/etc/hosts
    
# 激活生效
    大部分情况下是直接生效，如未生效可尝试下面的办法，刷新 DNS：
    
    Windows：在 CMD 窗口输入：ipconfig /flushdns
    Linux 命令：sudo nscd restart，如报错则须安装：sudo apt install nscd
    Mac 命令：sudo killall -HUP mDNSResponder
    
# SwitchHosts 
工具管理 hosts

* Title: 随意

* Type: Remote

* URL: https://raw.fastgit.org/521xueweihan/GitHub520/main/hosts

* Auto Refresh: 最好选 1 hour