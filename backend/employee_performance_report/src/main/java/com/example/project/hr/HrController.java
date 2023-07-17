package com.example.project.hr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hr")
@CrossOrigin("*")
public class HrController {
	@Autowired
	private HrService hrService;
	
	@GetMapping("/")
	public List<Hr> getAllHr()
	{
		return this.hrService.getAllHr();
	}
	
	@GetMapping("/{id}")
	public Hr getHrById(@PathVariable int id)
	{
		return this.hrService.getHrById(id);
	}
	
	@PostMapping("/create")
	public void createHr(@RequestBody Hr hr)
	{
		this.hrService.createHr(hr);
	}
	
	@PutMapping("/update")
	public void updateHrById(@RequestBody Hr hr)
	{
		this.hrService.updateHrById(hr);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteHrById(@PathVariable int id)
	{
		this.hrService.deleteHrById(id);
	}
}
