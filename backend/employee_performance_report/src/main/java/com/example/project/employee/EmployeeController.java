package com.example.project.employee;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/")
	public List<Employee> getAllEmployees()
	{
		return this.employeeService.getAllEmployees();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) throws ResoruceNotFoundException {	return this.employeeService.getEmployeeById(id);	}


	@PostMapping("/create")
	public ResponseEntity<String> createEmployee(@RequestBody Employee employee) throws ResoruceNotFoundException {
		return this.employeeService.createEmployee(employee);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateEmployeeById(@RequestBody Employee employee) throws ResoruceNotFoundException {
		return this.employeeService.updateEmployeeById(employee);
	}

	@GetMapping("/byteam/{teamid}")
	public ResponseEntity<List<Employee>> getEmployeeByTeam(@PathVariable int teamid) throws ResoruceNotFoundException {	return this.employeeService.getEmployeeByTeam(teamid);	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.employeeService.deleteEmployeeById(id);
	}
}
