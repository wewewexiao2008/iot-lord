package com.example.demo.domain;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ValueByTimeClient {
    String clientid;
    String times;
    int value;
}
