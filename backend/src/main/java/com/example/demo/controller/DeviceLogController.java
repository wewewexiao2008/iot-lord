package com.example.demo.controller;


import com.example.demo.domain.CountByTime;
import com.example.demo.domain.Historylog;
import com.example.demo.domain.ResultObject;
import com.example.demo.domain.ValueByTimeClient;
import com.example.demo.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/log")
@CrossOrigin
public class DeviceLogController {
    @Autowired
    private LogService logService;

    @GetMapping("/list")
    public ResultObject getAllHistoryLog(){
        List<Historylog> logs = logService.getAllHistoryLog();
        ResultObject resultObject = new ResultObject(0,"success", logs);
        return resultObject;
    }

    @GetMapping("/get")
    public ResultObject getHistoryLogById(@RequestParam String clientid){
        List<Historylog> logs = logService.getHistoryLogById(clientid);
        ResultObject resultObject = new ResultObject(0,"success", logs);
        return resultObject;
    }

    @GetMapping("/getpath")
    public ResultObject getPathById(@RequestParam int maxpath){
        List<Historylog> logs = logService.getPathByNum(maxpath);
        ResultObject resultObject = new ResultObject(0,"success", logs);
        return resultObject;
    }

    @GetMapping("/countbytime")
    public ResultObject getCountByTime(){
        List<CountByTime> logs = logService.getCountByTime();
        ResultObject resultObject = new ResultObject(0,"success",logs);
        return  resultObject;
    }

    @GetMapping("/flowbytime")
    public ResultObject getValueByTimeClient(){
        List<CountByTime> logs = logService.getValueByTimeClient();
        ResultObject resultObject = new ResultObject(0,"success",logs);
        return  resultObject;
    }

}
