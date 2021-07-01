package com.example.demo.serviceImpl;

import com.example.demo.domain.PageObject;
import com.example.demo.domain.User;
import com.example.demo.mapper.UserMapper;
import com.example.demo.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public PageObject getAllUsers(int page_num,int page_size) {
        PageHelper.startPage(page_num, page_size);
        List<User> users = userMapper.findAllUsers();
        PageInfo<User> appsPageInfo = new PageInfo<User>(users);
        long total = appsPageInfo.getTotal();
        PageObject pageObject = new PageObject(users, page_num, page_size, total);
        return pageObject;
    }

    @Override
    public int insertUser(User user) {
        return userMapper.insert(user);
    }

//    @Override
//    public void updateUser(User user) {
//        userMapper.update(user);
//    }

//    @Override
//    public User getUserById(int id) {
//        return userMapper.findById(id);
//    }

    @Override
    public User getUserByName(String username) {
        return userMapper.findByName(username);
    }
}
