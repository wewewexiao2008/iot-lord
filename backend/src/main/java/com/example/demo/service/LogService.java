package com.example.demo.service;

import com.example.demo.domain.CountByTime;
import com.example.demo.domain.Historylog;
import com.example.demo.domain.ValueByTimeClient;

import java.util.List;

public interface LogService {
    public int insert(Historylog historylog);

    public List<Historylog> getAllHistoryLog();

    public List<Historylog> getHistoryLogById(String clientid);

    public List<Historylog> getPathByNum(int maxpath);

    public List<CountByTime> getCountByTime();

    public List<CountByTime> getValueByTimeClient();

}
