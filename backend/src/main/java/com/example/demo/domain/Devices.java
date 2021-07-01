package com.example.demo.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
@Data
public class Devices {
    private String clientid;
    private String devicename;
    private String ownername;
    private Boolean alert;

//    @Override
//    public String toString() {
//        return getClientid()+","+getDevicename()+","+getOwnername();
//    }
}

//create table devices(
//clientid varchar(255) primary key,
//devicename varchar(255),
//ownerid varchar(255));