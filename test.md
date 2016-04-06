#centos找回MySQL密码
1. 停止mysqld服务

`/etc/init.d/mysqld stop`
2. 以不检查权限的方式启动
`cd /usr/local/mysql/bin`
`./mysqld_safe --skip-grant-tables &`或者`mysqld --skip-grant-tables &`
3. 用空密码方式使用root用户登录MySQL
`./mysql -uroot -p`
4. 修改root用户的密码
`update mysql.user set password=PASSWORD('newpass') where User='root';`
`flushprivileges;`
`quit`
5. 重新启动MySQL
`/etc/init.d/mysqld restart`
