package com.example.demo.controller;

import com.example.demo.domain.ResultObject;
import com.example.demo.domain.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public ResultObject getUserByName(@RequestParam String username){
        User user = userService.getUserByName(username);
        ResultObject resultObject = new ResultObject(0, "success", user);
        return resultObject;
    }

    @GetMapping("/add")
    public ResultObject insertUser(@RequestParam String username, @RequestParam String password, @RequestParam String email){
        User user =new User();
        user.setPasswd(password);
        user.setEmail(email);
        user.setUsername(username);
        System.out.println(user);
        int modifyid = userService.insertUser(user);
//        int modifyid =1;
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("modifyId", modifyid);
        ResultObject resultObject = new ResultObject(0, "success", map);
        return resultObject;

    }
}
