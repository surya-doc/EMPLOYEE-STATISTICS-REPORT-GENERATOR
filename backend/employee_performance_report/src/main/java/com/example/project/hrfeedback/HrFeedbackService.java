package com.example.project.hrfeedback;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HrFeedbackService {
    @Autowired
    private HrFeedbackRepository hrFeedbackRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    public ResponseEntity<HrFeedback> getHrFeedbackById(int id) throws ResoruceNotFoundException
    {
        HrFeedback hr= this.hrFeedbackRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Hr doesnt exist with id :" +id));
        return ResponseEntity.ok(hr);
    }
    public ResponseEntity<String> createHrFeedback(HrFeedback hr) throws ResoruceNotFoundException {
        int id = hr.getHrid();
        Optional<HrFeedback> emp=this.hrFeedbackRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("HrFeedback Already Exists");
        }
        int empid=hr.getEmpid();
        Employee employeeDetails = employeeRepository.findById(empid).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        Employee hr1 = employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Hr doesnt exist with id :" +id));
        this.hrFeedbackRepository.save(hr);
        return ResponseEntity.ok("Created HrFeedback");
    }
    public ResponseEntity<String> updateHrFeedbackById(HrFeedback hr) throws ResoruceNotFoundException {
        int id=hr.getEmpid();
        HrFeedback data= this.hrFeedbackRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Feedback doesnt exist with id :" +id));
        int hrid=hr.getHrid();
        Employee employeeDetails = employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        Employee hr1 = employeeRepository.findById(hrid).orElseThrow(()->new ResoruceNotFoundException("Hr doesnt exist with id :" +hrid));
        this.hrFeedbackRepository.save(hr);
        return ResponseEntity.ok("Updated HrFeedback");
    }
    public ResponseEntity<String> deleteHrFeedbackById(int id) throws ResoruceNotFoundException {
        HrFeedback data= this.hrFeedbackRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.hrFeedbackRepository.deleteById(id);
        return ResponseEntity.ok("Deleted HrFeedback");
    }

    public ResponseEntity<HrFeedback> getFeedbackbydetails(int empid, int hrid) throws ResoruceNotFoundException {
        List<HrFeedback> hrFeedbacks = this.hrFeedbackRepository.getFeedbackByDetails(empid,hrid);
        if(hrFeedbacks.size()==0)
        {
            throw new ResoruceNotFoundException("Feedback Doesn't Exists");
        }
        return ResponseEntity.ok(hrFeedbacks.get(0));
    }

    public ResponseEntity<List<HrFeedback>> getFeedbackByEmployee(int empid) throws ResoruceNotFoundException
    {
        List<HrFeedback> hrFeedbacks = this.hrFeedbackRepository.getHrfeedbackByEmpId(empid);
        return ResponseEntity.ok(hrFeedbacks);
    }

}
