package com.example.project.employee;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;

    public List<Employee> getAllEmployees()
    {
        return this.employeeRepository.findAll();
    }

    public ResponseEntity<Employee> getEmployeeById(int id) throws ResoruceNotFoundException {
        Employee employee= this.employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<String> createEmployee(Employee employee) throws ResoruceNotFoundException
    {
        int id = employee.getEmpid();
        Optional<Employee> emp=this.employeeRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Employee Already Exists");
        }
        this.employeeRepository.save(employee);
        return ResponseEntity.ok("Created Employee");
    }

    public ResponseEntity<String> updateEmployeeById(Employee employee) throws ResoruceNotFoundException
    {
        int id=employee.getEmpid();
        Employee emp= this.employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeRepository.save(employee);
        return ResponseEntity.ok("Updated Employee");
    }

    public ResponseEntity<List<Employee>> getEmployeeByTeam(int teamid) throws ResoruceNotFoundException
    {
        Team team=teamRepository.findById(teamid).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +teamid));
        List<Employee> employeeList = this.employeeRepository.getemployeeBYTeam(teamid);
        return ResponseEntity.ok(employeeList);
    }

    public ResponseEntity<String> deleteEmployeeById(int id) throws ResoruceNotFoundException
    {
        Employee emp= this.employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeRepository.deleteById(id);
        return ResponseEntity.ok("Deleted Employee");
    }
}
