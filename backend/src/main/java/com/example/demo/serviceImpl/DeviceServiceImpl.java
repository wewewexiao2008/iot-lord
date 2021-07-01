package com.example.demo.serviceImpl;

import com.example.demo.domain.Devices;
import com.example.demo.domain.PageObject;
import com.example.demo.domain.User;
import com.example.demo.mapper.DevicesMapper;
import com.example.demo.service.DeviceService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService {

    @Autowired
    private DevicesMapper devicesMapper;
    @Override
    public int insertDevice(Devices devices) {
        return devicesMapper.insert(devices);
    }

    @Override
    public List<Devices> getBySearch(String keyword) {
        return devicesMapper.search(keyword);
    }

    @Override
    public Devices getDeviceById(String clientid) {
        return devicesMapper.findById(clientid);
    }

    @Override
    public int updateDevice(Devices devices) {
        return devicesMapper.updateDevice(devices);
    }

    @Override
    public List<Devices> getAllDevices() {
        return devicesMapper.findAllDevices();
    }

    @Override
    public List<Devices> getDevicesByOwner(String ownername) {
        return devicesMapper.findByOwner(ownername);
    }

    @Override
    public PageObject getDeviceByOwner(int page_num,int page_size, String ownername) {
        PageHelper.startPage(page_num, page_size);
        List<Devices> devices = devicesMapper.findByOwner(ownername);
        PageInfo<Devices> appsPageInfo = new PageInfo<Devices>(devices);
        long total = appsPageInfo.getTotal();
        PageObject pageObject = new PageObject(devices, page_num, page_size, total);
        return pageObject;
    }

    @Override
    public PageObject getAllDevices(int page_num,int page_size) {
        PageHelper.startPage(page_num, page_size);
        List<Devices> devices = devicesMapper.findAllDevices();
        PageInfo<Devices> appsPageInfo = new PageInfo<Devices>(devices);
        long total = appsPageInfo.getTotal();
        PageObject pageObject = new PageObject(devices, page_num, page_size, total);
        return pageObject;
    }
}
