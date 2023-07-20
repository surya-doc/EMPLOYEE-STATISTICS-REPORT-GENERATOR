package com.example.project.employeedetails;


import com.example.project.employee.Employee;
import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetail")
@CrossOrigin("*")
public class EmployeeDetailsController {
	@Autowired
	private EmployeeDetailsService employeeDetailsService;

	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeDetails> getEmployeeDetailById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.employeeDetailsService.getEmployeeDetailsById(id);
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> createEmployeeDetail(@RequestBody EmployeeDetails employeeDetails) throws ResoruceNotFoundException {
		return this.employeeDetailsService.createEmployeeDetails(employeeDetails);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateEmployeeDetailsById(@RequestBody EmployeeDetails employeeDetails) throws ResoruceNotFoundException {
		return this.employeeDetailsService.updateEmployeeDetailsById(employeeDetails);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String>  deleteEmployeeDetailsById(@PathVariable int id) throws ResoruceNotFoundException
	{
		return this.employeeDetailsService.deleteEmployeeDetailsById(id);
	}

	@GetMapping("/byteam/{teamid}/{role}")
	public ResponseEntity<List<EmployeeDetails>> getEmployeeByTeam(@PathVariable int teamid,@PathVariable String role) throws ResoruceNotFoundException
	{
		return this.employeeDetailsService.getEmployeeByTeam(teamid,role);
	}

	@GetMapping("/byrole/{role}")
	public ResponseEntity<List<Employee>> getemployeebyrole(@PathVariable String role) throws ResoruceNotFoundException {
		return this.employeeDetailsService.getEmployeeByRole(role);
	}

}
