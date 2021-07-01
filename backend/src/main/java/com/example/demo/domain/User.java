package com.example.demo.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//package com.example.mybatissample;
//@Getter
//@Setter
@Data
public class User {

//    private int userid;
    private String username;
    private String passwd;
    private String email;

//    @Override
//    public String toString() {
//        return this.getUserid() + "," + getUsername() + "," + this.getPasswd() + "," + this.getEmail();
//    }

}
