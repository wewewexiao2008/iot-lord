package cn.edu.zju.cs.bs;

import javafx.util.converter.TimeStringConverter;
import lombok.Data;

import java.sql.PreparedStatement;
import java.sql.Timestamp;


@Data
public class DBService {

    public static void insertLogInfo(IOTMessage msg) {
//        String deleteSql = "delete from 表名";
        Timestamp timestamp = new Timestamp(msg.getTimestamp());
        String Sql = "INSERT INTO history_log (clientid,info,devicevalue,alert,ing,lat,logtimestamp)" +
                "VALUES" +
                "(\"" +msg.getClientId() +
                "\",\""+msg.getInfo() +
                "\"," +msg.getValue()+
                "," +msg.getAlert()+
                "," +msg.getLng()+
                ","+msg.getLat()+
                ",\'"+timestamp+
//                ","+msg.getTimestamp()+
                "\');";
//        System.out.println(Sql);
        DBHelper dbHelper = new DBHelper(Sql);
        PreparedStatement mPreparedStatement = dbHelper.mPreparedStatement;
        try {
        //执行
            mPreparedStatement.execute();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        dbHelper.close();
        String Sql2 = "UPDATE devices SET alert = "
                +msg.getAlert()
                +" WHERE clientid = '"
                +msg.getClientId() +"'";
//        System.out.println(Sql);
        DBHelper dbHelper2 = new DBHelper(Sql2);
        PreparedStatement mPreparedStatement2 = dbHelper2.mPreparedStatement;
        try {
            //执行
            mPreparedStatement2.execute();
            System.out.println("告警信息"+msg.getAlert());
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        String Sql3 = "INSERT INTO devices (clientid) VALUES ('" + msg.getClientId() +"')";
        DBHelper dbHelper3 = new DBHelper(Sql3);
        PreparedStatement mpreparedStatement3 = dbHelper3.mPreparedStatement;
        try{
            mpreparedStatement3.execute();
            System.out.println("插入了新设备"+ msg.getClientId());
        }catch (Exception e){
            e.printStackTrace();
        }

        dbHelper2.close();
    }
}