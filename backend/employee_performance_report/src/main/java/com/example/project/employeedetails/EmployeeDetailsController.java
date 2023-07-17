package com.example.project.employeedetails;


import com.example.project.employee.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetail")
@CrossOrigin("*")
public class EmployeeDetailsController {
	@Autowired
	private EmployeeDetailsService employeeDetailsService;
	
	
	@GetMapping("/{id}")
	public EmployeeDetails getEmployeeDetailById(@PathVariable int id)
	{
		return this.employeeDetailsService.getEmployeeDetailsById(id);
	}
	
	@PostMapping("/create")
	public void createEmployeeDetail(@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsService.createEmployeeDetails(employeeDetails);
	}
	
	@PutMapping("/update")
	public void updateEmployeeDetailsById(@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsService.updateEmployeeDetailsById(employeeDetails);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteEmployeeDetailsById(@PathVariable int id)
	{
		this.employeeDetailsService.deleteEmployeeDetailsById(id);
	}

	@GetMapping("/byteam/{teamid}")
	public List<EmployeeDetails> getEmployeeByTeam(@PathVariable int teamid) {	return this.employeeDetailsService.getEmployeeByTeam(teamid);	}

}
