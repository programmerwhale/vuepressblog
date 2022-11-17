# MySql踩坑问题

## mac 环境下 登陆失败问题Access denied for user ‘root‘@‘localhost‘ (using password: YES)

__参考链接：__[https://blog.csdn.net/owenzhang24/article/details/122234036][1]


#### 第一步：关闭mysql

苹果->系统偏好设置->最下面点MySQL，关闭mysql服务

#### 第二步：进入终端设置

1. 进入终端输入(cd /usr/local/mysql/bin/)回车

```
cd /usr/local/mysql/bin/
```
2. 输入(sudo su)回车以获取管理员权限
```
sudo su
```

>这里要注意，输入sudo su时，你需要输入的你自己电脑的管理员密码(允许安装软件的那个密码)

3. 输入(./mysqld_safe --skip-grant-tables &)回车以禁止mysql验证功能，mysql会自动重启，偏好设置中的mysql状态会变成running。
```
./mysqld_safe --skip-grant-tables &
```

4. 输入命令`./mysql`回车
5. 输入命令`flush privileges;`(分号别忘记输了)
6. 重置密码：`ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码';`
7. 执行 `quit`；退出mysql
8. 执行 `exit`；退出sudo
9. 密码重置已完毕，可以试试登陆mysql。`mysql -uroot -p`

***
执行过程如下：
![1](./screenshot/bug_Accessdeniedforuser.jpg)








[1]:https://blog.csdn.net/owenzhang24/article/details/122234036