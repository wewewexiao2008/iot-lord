package com.example.demo.mapper;

import com.example.demo.domain.Devices;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface DevicesMapper {
    @Insert("INSERT INTO devices" +
            "clientid, devicename,ownername " +
            "VALUES" +
            "(#{clientid},#{devicename},#{ownername})")
    int insert(Devices device);

    @Update("UPDATE devices SET devicename = #{devicename}, ownername =#{ownername} " +
            "WHERE " +
            "clientid = #{clientid}")
    int updateDevice(Devices devices);

    @Select("SELECT clientid,devicename,ownername,alert " +
            "FROM devices " +
            "WHERE clientid = #{clientid}" )
    Devices findById(String clientid);

    @Select("SELECT clientid,devicename,ownername,alert" +
            " FROM devices " +
            "WHERE ownername = #{ownername}")
    List<Devices> findByOwner(String ownername);

    @Select("SELECT clientid,devicename,ownername,alert FROM devices")
    List<Devices> findAllDevices();

    @Select("")
    List<Devices> search(String keyword);
}
