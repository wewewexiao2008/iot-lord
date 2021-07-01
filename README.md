# Iot-lord B/S体系软件设计大程

IDE：IDEA
OS：WINDOWS 10

[toc]

## 1	MySQL建表

因为后端spring中的application.properties配置如下,所以请按照这个来建立数据库，设置端口8080

```properties
server.port =8080
server.tomcat.uri-encoding=utf-8
spring.datasource.url=jdbc:mysql://localhost:3306/iot_db
spring.datasource.username=root
spring.datasource.password=1234
```

init.sql

```sql
drop database iot_db;
create database iot_db;

use iot_db;
drop table users;
create table users(
 username varchar(255) primary key,
 passwd varchar(255) not null,
 email varchar(255) unique);
 
drop table devices; 
 create table devices(
 clientid varchar(255) primary key, 
 devicename varchar(255) default null, 
 ownername varchar(255) default null,
 alert bool
 );
  
drop table history_log;
create table history_log(
logid int primary key auto_increment,
clientid varchar(255) ,
logtimestamp timestamp unique, 
info varchar(255),
lat double, 
ing double, 
devicevalue int, 
alert int,
FOREIGN KEY (clientid) references devices(clientid)
 );
```

## 2	启动spring后端

请使用IDEA打开文件夹，然后启动配置如下：

![image-20210630234249341](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630234249341.png)

右上角启动

![image-20210630234205867](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630234205867.png)

命令行：

mvn clean，打包然后jar启动

## 3	启动iotclient模拟器

请使用IDEA打开文件夹，然后右上角启动，配置如下：

![image-20210630234548938](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630234548938.png)

命令行：或者按照老师mvn install 然后打包启动



## 4	启动前端

依赖已经配置好

yarn install 

yarn start

然后local host:3000启动