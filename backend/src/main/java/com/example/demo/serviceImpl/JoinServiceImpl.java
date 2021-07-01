package com.example.demo.serviceImpl;

import com.example.demo.domain.Join;
import com.example.demo.mapper.JoinMapper;
import com.example.demo.service.JoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JoinServiceImpl implements JoinService {
    @Autowired
    private JoinMapper joinMapper;

    @Override
    public List<Join> findall() {
        return joinMapper.findAll();
    }

    @Override
    public List<Join> findSearch(String keyword) {
        return joinMapper.findSearch(keyword);
    }
}
