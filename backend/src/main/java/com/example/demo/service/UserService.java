package com.example.demo.service;

import com.example.demo.domain.PageObject;
import com.example.demo.domain.User;

import java.util.List;

public interface UserService {

    public PageObject getAllUsers(int page_num,int page_size);

    public int insertUser(User user);

//    public void updateUser(User user);

//    public User getUserById(int id);

    public User getUserByName(String username);

}
