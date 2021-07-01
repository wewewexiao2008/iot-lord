package com.example.demo.domain;

import lombok.Data;

@Data
public class Join {
    private String clientid;
    private String devicename;
    private String ownername;
    private String logtimestamp;
    private String info;
    private double lat;
    private double ing;
    private int devicevalue;
    private int alert;
}
