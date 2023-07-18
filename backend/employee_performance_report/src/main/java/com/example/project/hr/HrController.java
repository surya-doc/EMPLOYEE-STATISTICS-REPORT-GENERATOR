package com.example.project.hr;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<Hr> getHrById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.hrService.getHrById(id);
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> createHr(@RequestBody Hr hr) throws ResoruceNotFoundException {
		return this.hrService.createHr(hr);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateHrById(@RequestBody Hr hr) throws ResoruceNotFoundException {
		return this.hrService.updateHrById(hr);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteHrById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.hrService.deleteHrById(id);
	}
}
