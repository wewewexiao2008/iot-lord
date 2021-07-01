package com.example.demo.mapper;

import com.example.demo.domain.Join;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface JoinMapper {

    @Select(" SELECT * FROM (SELECT devices.clientid,devicename,ownername,logtimestamp,info,lat,ing,devicevalue, devices.alert,\n" +
            " RANK() OVER (partition by devices.clientid ORDER BY logtimestamp DESC) as NUM\n" +
            " from (devices left join history_log on devices.clientid = history_log.clientid)) as tm WHERE NUM < 2")
    List<Join> findAll();

    @Select("SELECT * FROM (SELECT devices.clientid,devicename,ownername,logtimestamp,info,lat,ing,devicevalue, devices.alert, RANK() OVER (partition by devices.clientid ORDER BY logtimestamp DESC) as NUM" +
            "from (devices left join history_log on devices.clientid = history_log.clientid)) as tm" +
            " WHERE NUM < 2 AND (history_log.clientid like '%#{keyword}%' OR" +
            "devicename like '%#{keyword}% OR ownername like '%#{keyword}%')")
    List<Join> findSearch(String keyword);

}
//clientid;
//private String devicename;
//private String ownername;
//private String timestamp;
//private String info;
//private double lat;
//private double ing;
//private int devicevalue;
//private int alert;