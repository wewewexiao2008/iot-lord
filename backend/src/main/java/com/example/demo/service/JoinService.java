package com.example.demo.service;


import com.example.demo.domain.Join;

import java.util.List;

public interface JoinService {
    public List<Join>  findall();

    public List<Join> findSearch(String keyword);
}
