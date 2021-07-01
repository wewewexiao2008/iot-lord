package com.example.demo.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
@Data
public class Historylog {
    private int logid;
    private String clientid;
    private String timestamp;
    private String info;
    private double lat;
    private double ing;
    private int devicevalue;
    private int alert;

//    @Override
//    public String toString() {
//        return getLogid() + "," + getClientid()+ "," +getTimestamp()+ "," +
//                getDatetime()+ "," +getLat()+ "," +getIng()+ "," +getDevicevalue()
//                + "," +getAlert();
//    }
}
//logid int primary key,
//clientid varchar(255),
//logtimestamp timestamp,
//logdatetime datetime,
//lat double,
//ing double,
//devicevalue int,
//alert bool