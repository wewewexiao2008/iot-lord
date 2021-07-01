drop database iot_db;
create database iot_db;

use iot_db;
drop table users;
create table users(
-- userid int primary key auto_increment,
 username varchar(255) primary key,
 -- unique,
 passwd varchar(255),
 email varchar(255));

drop table history_log;
create table history_log(
logid int primary key auto_increment,
clientid varchar(255),
logtimestamp timestamp,
logdatetime datetime,
lat double,
ing double,
devicevalue int,
alert int
 );
 drop table devices;
 create table devices(
 clientid varchar(255) primary key,
 devicename varchar(255),
 ownername varchar(255) default null
 );

select* from users;