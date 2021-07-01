package com.example.demo.mapper;

import com.example.demo.domain.CountByTime;
import com.example.demo.domain.Devices;
import com.example.demo.domain.Historylog;
import com.example.demo.domain.ValueByTimeClient;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface HistorylogMapper {

    @Insert("INSERT INTO history_log" +
            "clientid, logtimestamp,info,lat,ing,devicevalue,alert" +
            "VALUES(#{clientid},#{logtimestamp},#{info}," +
            "#{lat},#{ing},#{devicevalue},#{alert})")
    int insert(Historylog historylog);

    @Select("SELECT clientid, logtimestamp,info,lat,ing,devicevalue,alert" +
            " FROM history_log WHERE clientid = #{clientid} ORDER BY logtimestamp" )
    List<Historylog> findById(String clientid);

    @Select("SELECT clientid, logtimestamp,info,lat,ing,devicevalue,alert" +
            " FROM history_log ORDER BY clientid, logtimestamp desc")
    List<Historylog> findAll();

    @Select("SELECT * FROM (SELECT clientid,lat, ing, logtimestamp,\n" +
            "RANK() OVER (PARTITION BY clientid\n" +
            "ORDER BY logtimestamp DESC) AS NUM\n" +
            "FROM history_log) as tm\n" +
            "WHERE NUM < #{maxpath};")
    List<Historylog> findPathByNum(int maxpath);

    @Select(" SELECT COUNT(distinct clientid)as online_count," +
            " DATE_FORMAT(logtimestamp,'%M %d,%H:%i') " +
            "as times from history_log group by times  order by times")
    List<CountByTime> findCountByTime();

    @Select(" SELECT COUNT(clientid) as online_count," +
            " DATE_FORMAT(logtimestamp,'%M %d,%H:%i') " +
            "as times from history_log group by times  order by times")
    List<CountByTime> findValueByTimeClient();

}
