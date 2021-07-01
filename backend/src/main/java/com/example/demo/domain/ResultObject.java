package com.example.demo.domain;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultObject {

    private int code;
    private String msg;
    private Object result;
}
