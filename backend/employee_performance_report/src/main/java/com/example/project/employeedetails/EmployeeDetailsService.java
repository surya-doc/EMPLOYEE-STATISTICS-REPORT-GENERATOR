package com.example.project.employeedetails;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.mailsender.EmailService;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeDetailsService {

    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseEntity<EmployeeDetails> getEmployeeDetailsById(int id) throws ResoruceNotFoundException
    {
        EmployeeDetails employee= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<String> createEmployeeDetails(EmployeeDetails employeeDetails) throws ResoruceNotFoundException
    {
        int id = employeeDetails.getEmpid();
        Employee employee = this.employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        Optional<EmployeeDetails> emp=this.employeeDetailsRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Employee Already Exists");
        }
        int teamid=employeeDetails.getTeamid();
        Team team = this.teamRepository.findById(teamid).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +teamid));
        String password = passwordEncoder.encode(employeeDetails.getPassword());
        String to = employeeDetails.getEmail();
        String subject = "Welcome to Argusoft, " + employee.getName() + "!!";
        String body = "Dear " + employee.getName() +
                "\n" +
                "We are delighted to welcome you to the Argusoft team! As you begin your journey with us, we want to extend our warmest greetings and support.\n" +
                "\n" +
                "Below are some essential details regarding your employment:\n" +
                "\n" +
                "Employee ID: " + employeeDetails.getEmpid() + "\n" +
                "Email: " + employeeDetails.getEmail() + "\n" +
                "Password: " + password + "\n" +
                "Team ID: " + employeeDetails.getTeamid() + "\n" +
                "Role: " + employeeDetails.getRole() + "\n" +
                "Address: " + employeeDetails.getAddress() + "\n" +
                "Please make sure to keep your Employee ID and Password confidential. \n" +
                "\n" +
                "In case you have any questions, need assistance, or require any further information, please feel free to reach out to your supervisor or the HR department.\n" +
                "\n" +
                "Once again, welcome aboard, and we wish you all the best in your new role!\n" +
                "\n" +
                "Best regards, \n" +
                "Team Argusoft.";

        emailService.sendEmail(to, subject, body);
        employeeDetails.setPassword(passwordEncoder.encode(employeeDetails.getPassword()));
        this.employeeDetailsRepository.save(employeeDetails);
        return ResponseEntity.ok("Created Employee");
    }

    public ResponseEntity<String> updateEmployeeDetailsById(EmployeeDetails employeeDetails) throws ResoruceNotFoundException
    {
        int id=employeeDetails.getEmpid();
        Employee employee = this.employeeRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        EmployeeDetails emp= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeDetailsRepository.save(employeeDetails);
        return ResponseEntity.ok("Updated Employee");
    }

    public ResponseEntity<String> deleteEmployeeDetailsById(int id) throws ResoruceNotFoundException
    {
        EmployeeDetails emp= this.employeeDetailsRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.employeeDetailsRepository.deleteById(id);
        this.employeeRepository.deleteById(id);
        return ResponseEntity.ok("Deleted Employee");
    }

    public ResponseEntity<List<EmployeeDetails>> getEmployeeByTeam(int teamid,String role)  throws ResoruceNotFoundException
    {
        Team team=teamRepository.findById(teamid).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +teamid));
        List<EmployeeDetails> employeeDetails = this.employeeDetailsRepository.getemployeeBYTeam(teamid,role);
        return ResponseEntity.ok(employeeDetails);
    }

    public ResponseEntity<List<Employee>> getEmployeeByRole(String role) throws ResoruceNotFoundException
    {
        List<EmployeeDetails> employeeDetailsList = employeeDetailsRepository.getListByRole(role);
        List<Employee> employeeList = new ArrayList<>();
        for (EmployeeDetails employeeDetails : employeeDetailsList) {
            int empid = employeeDetails.getEmpid();
            employeeList.add(employeeRepository.findById(empid).orElseThrow());
        }
        return ResponseEntity.ok(employeeList);
    }

}
