package com.example.demo.serviceImpl;

import com.example.demo.domain.CountByTime;
import com.example.demo.domain.Historylog;
import com.example.demo.domain.ValueByTimeClient;
import com.example.demo.mapper.HistorylogMapper;
import com.example.demo.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogServiceImpl implements LogService {
    @Autowired
    private HistorylogMapper historylogMapper;

    @Override
    public int insert(Historylog historylog) {
        return historylogMapper.insert(historylog);
    }

    @Override
    public List<Historylog> getAllHistoryLog() {
        return historylogMapper.findAll();
    }

    @Override
    public List<Historylog> getHistoryLogById(String clientid) {
        return historylogMapper.findById(clientid);
    }


    @Override
    public List<CountByTime> getCountByTime() {
        return historylogMapper.findCountByTime();
    }

    @Override
    public List<Historylog> getPathByNum(int maxpath) {
        return historylogMapper.findPathByNum(maxpath);
    }

    @Override
    public List<CountByTime> getValueByTimeClient() {
        return historylogMapper.findValueByTimeClient();
    }


}
