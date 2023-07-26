package com.example.project.calculation;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.employeedetails.EmployeeDetailsRepository;
import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/calculate")
@CrossOrigin("*")
public class CalculationController {
    @Autowired
    private CalculationService calculationService;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;

    @GetMapping("/{empid}")
    public Calculation calculateEmployeeStatistics(@PathVariable int empid) throws ResoruceNotFoundException {
        return this.calculationService.getCalculatedValues(empid).getBody();
    }

    @GetMapping("/byteam/{teamid}")
    public List<Calculation> getStatByTeam(@PathVariable int teamid) throws ResoruceNotFoundException{
        return this.calculationService.getStatByTeam(teamid);
    }

    @GetMapping("/sorted")
    public List<TopEmployees> getOrderedStats() throws ResoruceNotFoundException
    {
        List<TopEmployees> topEmployees = new ArrayList<>();
        List<Calculation> topEmployeeStats = this.calculationService.getOrderedStats();
        for(int i=0; i<topEmployeeStats.size(); i++){
            TopEmployees topEmployee = new TopEmployees();
            int id= topEmployeeStats.get(i).getEmpid();
            Employee emp = employeeRepository.findById(id).orElseThrow();
            EmployeeDetails empDetails = employeeDetailsRepository.findById(id).orElseThrow();
            topEmployee.setEmpid(id);
            topEmployee.setEmail(empDetails.getEmail());
            topEmployee.setAttendence(emp.getAttendance());
            topEmployee.setPercentile(topEmployeeStats.get(i).getPercentile());
            topEmployee.setName(emp.getName());
            topEmployee.setTeamid(empDetails.getTeamid());
            topEmployees.add(topEmployee);
        }
        return topEmployees;
    }
}
