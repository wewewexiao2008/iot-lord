package com.example.demo.mybatis;

import org.junit.ClassRule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.system.OutputCaptureRule;
import org.springframework.test.context.junit4.SpringRunner;

import  static org.hamcrest.Matchers.containsString;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MybatisApplicationTest {

    @ClassRule
    public static OutputCaptureRule out = new OutputCaptureRule();

    @Test
    public void contextLoads(){
        out.expect(containsString("user2,CA,123123@163.com"));
    }

}
