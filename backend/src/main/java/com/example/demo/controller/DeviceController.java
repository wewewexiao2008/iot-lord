package com.example.demo.controller;

import com.example.demo.domain.Devices;
import com.example.demo.domain.ResultObject;
import com.example.demo.domain.User;
import com.example.demo.service.DeviceService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(value = "/api/device")
@CrossOrigin
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    @GetMapping("/update")
    public ResultObject updateDevices(@RequestParam String clientid,@RequestParam String devicename, @RequestParam String ownername){
        Devices devices = new Devices();
        devices.setClientid(clientid);
        devices.setDevicename(devicename);
        devices.setOwnername(ownername);
        System.out.println(clientid+devicename+ownername);
        int modifyid = deviceService.updateDevice(devices);
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("modifyId", modifyid);
        ResultObject resultObject = new ResultObject(0, "success", map);
        return resultObject;
    }

    @GetMapping("/get")
    public ResultObject getDevicesByOwner(@RequestParam String devicename){
        List<Devices> devices = deviceService.getDevicesByOwner(devicename);
        ResultObject resultObject = new ResultObject(0, "success", devices);
        return resultObject;
    }

    @GetMapping("/list")
    public ResultObject getAllDevices(){
        List<Devices> devices = deviceService.getAllDevices();
        ResultObject resultObject = new ResultObject(0, "success", devices);
        return resultObject;
    }

    @PostMapping("/add")
    public ResultObject insertDevice(Devices devices){
        int modifyid = deviceService.insertDevice(devices);
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("modifyId", modifyid);
        ResultObject resultObject = new ResultObject(0, "success", map);
        return resultObject;
    }
}
