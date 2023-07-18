package com.example.project.employeedetails;

import com.example.project.employee.Employee;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeDetailsService {
    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;
    @Autowired
    private TeamRepository teamRepository;

    public ResponseEntity<EmployeeDetails> getEmployeeDetailsById(int id) throws ResoruceNotFoundException
    {
        EmployeeDetails employee= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<String> createEmployeeDetails(EmployeeDetails employeeDetails) throws ResoruceNotFoundException
    {
        int id = employeeDetails.getEmpid();
        Optional<EmployeeDetails> emp=this.employeeDetailsRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Employee Already Exists");
        }
        int teamid=employeeDetails.getTeamid();
        Team team = this.teamRepository.findById(teamid).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +id));
        this.employeeDetailsRepository.save(employeeDetails);
        return ResponseEntity.ok("Created Employee");
    }

    public ResponseEntity<String> updateEmployeeDetailsById(EmployeeDetails employeeDetails) throws ResoruceNotFoundException
    {
        int id=employeeDetails.getEmpid();
        EmployeeDetails emp= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeDetailsRepository.save(employeeDetails);
        return ResponseEntity.ok("Updated Employee");
    }

    public ResponseEntity<String> deleteEmployeeDetailsById(int id) throws ResoruceNotFoundException
    {
        EmployeeDetails emp= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeDetailsRepository.deleteById(id);
        return ResponseEntity.ok("Deleted Employee");
    }

    public ResponseEntity<List<EmployeeDetails>> getEmployeeByTeam(int teamid)  throws ResoruceNotFoundException
    {
        Team team=teamRepository.findById(teamid).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +teamid));
        List<EmployeeDetails> employeeDetails = this.employeeDetailsRepository.getemployeeBYTeam(teamid);
        return ResponseEntity.ok(employeeDetails);
    }

}
