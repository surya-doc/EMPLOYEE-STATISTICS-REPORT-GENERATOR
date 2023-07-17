package com.example.project.hr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class HrService {
    @Autowired
    private HrRepository hrRepository;
    public List<Hr> getAllHr()
    {
        return this.hrRepository.findAll();
    }

    public Hr getHrById(int id)
    {
        return this.hrRepository.findById(id).orElseThrow(null);
    }

    public void createHr(Hr hr)
    {
        this.hrRepository.save(hr);
    }

    public void updateHrById(Hr hr)
    {
        this.hrRepository.save(hr);
    }

    public void deleteHrById(int id)
    {
        this.hrRepository.deleteById(id);
    }
}
