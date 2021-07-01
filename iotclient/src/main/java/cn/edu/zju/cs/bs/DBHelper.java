package cn.edu.zju.cs.bs;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;


public class DBHelper {
     private static String DRIVER_NAME = "com.mysql.cj.jdbc.Driver";
     private static String URL = "jdbc:mysql://localhost:3306/iot_db";
     private static String USER = "root";
     private static String PASSWORD = "1234";

     public Connection mConnection = null;
     public PreparedStatement mPreparedStatement = null;

     // 连接数据库
     public DBHelper(String sql) {
//          getInfo();
          System.out.print(sql);
          try {
               Class.forName(DRIVER_NAME);
               mConnection = DriverManager.getConnection(URL, USER, PASSWORD);
               mPreparedStatement = mConnection.prepareStatement(sql);
               System.out.print("连接了");
          } catch (Exception e) {
           e.printStackTrace();
          }
 }

 public static void getInfo() {
    String path = System.getProperty("user.dir") + "\\MqttConnect.properties";
    try {
        FileInputStream fis = new FileInputStream(path);
        Properties prop = new Properties();
        prop.load(fis);
        URL = prop.getProperty("Url");
        USER = prop.getProperty("User");
        PASSWORD = prop.getProperty("Password");
        System.out.print("url:" + URL + "user:" + USER + "pwd:" + PASSWORD);
    } catch (Exception e) {
        e.printStackTrace();
    }

 }

 // 关闭数据库连接
public void close() {
        try {
                if (!(null == mConnection && mConnection.isClosed())) {
                    this.mConnection.close();
                }
                if (!(null == mPreparedStatement && mPreparedStatement.isClosed())) {
                    this.mPreparedStatement.close();
                }
            }
        catch (SQLException e) {
                e.printStackTrace();
        }
    }
}


