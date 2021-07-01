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

 select * from devices;
 select * from history_log;

 insert into users (username,passwd,email) values ("13163230059","2342344","2323@123.com");

 update devices set devicename='233', ownername ='233' where clientid = 'device00201';
 
 -- "alert":0,"clientId":"device0001","info":"Device Data 2021/06/27 10:13:28","lat":30.473494601249698,"lng":120.41357114315034,"timestamp":1624760008315,"value":54}
 insert into history_log  (clientid, logtimestamp,info,lat,ing,devicevalue,alert) values  ("device0003",1624760008322,"Device Data 2021/06/27 10:13:29",32, 122,52,0);
 
 SELECT * FROM (SELECT devices.clientid,devicename,ownername,logtimestamp,info,lat,ing,devicevalue, devices.alert,
 RANK() OVER (partition by devices.clientid ORDER BY logtimestamp DESC) as NUM
 from (devices left join history_log on devices.clientid = history_log.clientid)) as tm
 WHERE NUM < 2;
 SELECT COUNT(distinct clientid)as online_count, DATE_FORMAT(logtimestamp,'%M %d,%k:%m') as times from history_log group by times  order by times;
 
 SELECT devices.clientid FROM devices left join history_log on devices.clientid = history_log.clientid;
INSERT INTO history_log (clientid,info,devicevalue,alert,ing,lat,logtimestamp)VALUES("device0005","Device Data 2021/06/29 13:43:42",90,1,120.12541234493256,30.189185619354248,'2021-06-29 13:43:42.537');

SELECT DATE_FORMAT(logtimestamp,"%M %d,%k") as times FROM history_log GROUP by times order by times;
SELECT COUNT(clientid) as online_count, DATE_FORMAT(logtimestamp,'%M %d,%H:%i')  as times from history_log group by times  order by times;
SELECT *  from history_log ;
SELECT * FROM (SELECT clientid,lat, ing, logtimestamp,
RANK() OVER (PARTITION BY clientid
ORDER BY logtimestamp DESC) AS NUM
FROM history_log) as tm
WHERE NUM < 2 and (clientid like '%2%' OR clientid like '%4%');
SELECT dd.clientid,devicename, ownername,lat, ing, logtimestamp, tm.NUM FROM (SELECT clientid,lat, ing, logtimestamp,
RANK() OVER (PARTITION BY clientid
ORDER BY logtimestamp DESC) AS NUM
FROM history_log) as tm right join devices as dd on dd.clientid = tm.clientid 
WHERE NUM < 2;
select * from devices;

 insert into devices (clientid,devicename) values("device0002","dsaf");
 
 select COUNT(info) from history_log where clientid = 'device0004' GROUP by clientid;
 
 select* from history_log order by clientid,logtimestamp desc;
 
 INSERT INTO devices (clientid) VALUES ('device0015');
 
SELECT * FROM (SELECT clientid,lat, ing, logtimestamp,
RANK() OVER (PARTITION BY clientid
ORDER BY logtimestamp DESC) AS NUM
FROM history_log) as tm
WHERE NUM < 7;

 delete from history_log where logid>0;
  
select log.clientid, lat,ing, logtimestamp  from history_log as log left join devices on log.clientid = devices.clientid;