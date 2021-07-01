package cn.edu.zju.cs.bs;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

import java.sql.Timestamp;

public class IOTListener {
    private static MqttClient client;

    public void start_listen() throws MqttException,  InterruptedException{
        MemoryPersistence memoryPersistence = new MemoryPersistence();

        MqttConnectOptions options = new MqttConnectOptions();
        options.setUserName("listener");
        options.setPassword("12345".toCharArray());
        options.setConnectionTimeout(10);
        options.setKeepAliveInterval(20);

        client = new MqttClient("tcp://localhost:1883", "123", memoryPersistence);

        client.setCallback(mqttCallbackExtended);
        client.connect(options);
    }

    private static MqttCallbackExtended mqttCallbackExtended = new MqttCallbackExtended() {
        @Override
        public void connectionLost(Throwable throwable) {
            System.out.println("connectionLost:" + throwable.getMessage());
        }

        @Override
        public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {
            System.out.println("receive 收到消息");

            String str = new String(mqttMessage.getPayload(), "UTF-8");
            System.out.println(str);

            IOTMessage msg = JSON.parseObject(str, IOTMessage.class);
            DBService dbService = new DBService();
            dbService.insertLogInfo(msg);
        }

        @Override
        public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {
            System.out.println("[isComplete]:" + iMqttDeliveryToken.isComplete() + "       " + iMqttDeliveryToken.getTopics());
        }

        @Override
        public void connectComplete(boolean b, String s) {
            System.out.println("connectComplete:"+s);
            int[] Qos = { 1 };
            String[] topic1 = { "testapp" };
            try {
                client.subscribe(topic1, Qos);
                System.out.println("订阅了");
            } catch (MqttException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }


    };
//    public void msgToJSON(String message) throws JSONException {
//        JSONObject jb = new JSONObject(message);
//        System.out.println("收到mqtt消息：" + message);
//    }


}
