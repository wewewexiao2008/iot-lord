package com.example.demo.mybatis;

//import org.springframework.boot.SpringApplication;
import com.example.demo.domain.Devices;
import com.example.demo.domain.User;
import com.example.demo.mapper.DevicesMapper;
import com.example.demo.mapper.UserMapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@MapperScan("com.example.demo.mapper")
public class MybatisApplication {

    public static void main(String[] args) {
        SpringApplication.run(MybatisApplication.class, args);
    }

    private final UserMapper userMapper;
    private final DevicesMapper devicesMapper;

    public MybatisApplication(UserMapper userMapper, DevicesMapper devicesMapper) {
        this.userMapper = userMapper;
        this.devicesMapper = devicesMapper;
    }

    @Bean
    CommandLineRunner sampleCommandLineRunner() {
        return args -> {
            User user= new User();
            Devices devices = new Devices();
            devices.setClientid("device0002");
            devices.setDevicename("myandroid");
            devices.setOwnername("");
//            devicesMapper.insert(devices);

            user.setUsername("user2");
            user.setPasswd("CA");
            user.setEmail("123123@163.com");
//            userMapper.insert(user);
            System.out.println(this.userMapper.findByName(user.getUsername()));
            System.out.println(this.userMapper.findAllUsers());
            System.out.println(this.devicesMapper.findAllDevices());
        };
    }


}
