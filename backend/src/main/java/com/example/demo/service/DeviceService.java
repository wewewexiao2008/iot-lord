package com.example.demo.service;

import com.example.demo.domain.Devices;
import com.example.demo.domain.PageObject;

import java.util.List;

public interface DeviceService {
    public int insertDevice(Devices devices);

    public Devices getDeviceById(String clientid);

    public List<Devices> getBySearch(String keyword);

    public List<Devices> getAllDevices();

    public List<Devices> getDevicesByOwner(String ownername);

    public int updateDevice(Devices devices);

    public PageObject getDeviceByOwner(int page_num,int page_size,String ownername);

    public PageObject getAllDevices(int page_num,int page_size);
}
