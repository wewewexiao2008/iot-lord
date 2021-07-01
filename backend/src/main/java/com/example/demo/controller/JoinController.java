package com.example.demo.controller;


import com.example.demo.domain.Historylog;
import com.example.demo.domain.Join;
import com.example.demo.domain.ResultObject;
import com.example.demo.service.JoinService;
import com.example.demo.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/join")
@CrossOrigin
public class JoinController {
    @Autowired
    private JoinService joinService;

    @GetMapping("/list")
    public ResultObject getAllJoin(){
//        List<Historylog> logs = logService.getAllHistoryLog();
        List<Join> joins = joinService.findall();
        ResultObject resultObject = new ResultObject(0,"success", joins);
        return resultObject;
    }
    @GetMapping("/search")
    public ResultObject getSearch(@RequestParam String keyword){
//        List<Historylog> logs = logService.getAllHistoryLog();
        List<Join> joins = joinService.findSearch(keyword);
        ResultObject resultObject = new ResultObject(0,"success", joins);
        return resultObject;
    }


}
