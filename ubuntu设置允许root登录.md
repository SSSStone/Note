# ubuntu设置允许root登录

1. 修改root密码

    `sudo passwd root`

    输入密码

2. 修改SSH配置

    `sudo vi /etc/ssh/sshd_config`
    
    找到 `PermitRootLogin` 这项，将其改为 `yes`。
    
    保存退出。
    
3. 重启SSH服务

    `sudo service ssh  restart`