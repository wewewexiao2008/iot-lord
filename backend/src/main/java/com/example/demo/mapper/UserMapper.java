package com.example.demo.mapper;

import com.example.demo.domain.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {


    @Insert("INSERT INTO users (username, passwd, email) VALUES(#{username}, #{passwd}, #{email})")
//    @Options(useGeneratedKeys = true, keyProperty = "userid")
    int insert(User user);

//    @Select("SELECT userid,username, passwd, email FROM users WHERE userid = #{userid}")
//    User findById(int userid);

    @Select("SELECT username, passwd, email FROM users WHERE username = #{username}")
    User findByName(String username);

    @Select("SELECT username, passwd, email FROM users")
    List<User> findAllUsers();

//    @Update("UPDATE users SET " +
//            "IF" +
//            "WHERE userid = #{userid}")
//    void update(User user)
}
