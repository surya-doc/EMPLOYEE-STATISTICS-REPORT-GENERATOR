package com.example.project.hr;

import com.example.project.employee.Employee;
import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class HrService {
    @Autowired
    private HrRepository hrRepository;
    public List<Hr> getAllHr()
    {
        return this.hrRepository.findAll();
    }

    public ResponseEntity<Hr> getHrById(int id) throws ResoruceNotFoundException {
        Hr hr= this.hrRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Hr doesnt exist with id :" +id));
        return ResponseEntity.ok(hr);
    }

    public ResponseEntity<String> createHr(Hr hr) throws ResoruceNotFoundException
    {
        int id = hr.getHrid();
        Optional<Hr> emp=this.hrRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Hr Already Exists");
        }
        this.hrRepository.save(hr);
        return ResponseEntity.ok("Created Hr");
    }

    public ResponseEntity<String> updateHrById(Hr hr) throws ResoruceNotFoundException
    {
        int id=hr.getHrid();
        Hr emp= this.hrRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.hrRepository.save(hr);
        return ResponseEntity.ok("Updated Employee");
    }

    public ResponseEntity<String> deleteHrById(int id) throws ResoruceNotFoundException {
        Hr emp= this.hrRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.hrRepository.deleteById(id);
        return ResponseEntity.ok("Deleted Employee");
    }
}
