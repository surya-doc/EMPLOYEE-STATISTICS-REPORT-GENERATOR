package com.example.project.hrfeedback;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hrFeedback")
@CrossOrigin("*")
public class HrFeedbackController {
	@Autowired
	private HrFeedbackService hrFeedbackService;

	@GetMapping("/byempid/{empid}")
	public ResponseEntity<List<HrFeedback>> getFeedbackofEmployee(@PathVariable int empid) throws ResoruceNotFoundException
	{
		return this.hrFeedbackService.getFeedbackByEmployee(empid);
	}
	@GetMapping("/{empid}/{hrid}")
	public ResponseEntity<HrFeedback> getFeedbackDetails(@PathVariable int empid, @PathVariable int hrid) throws ResoruceNotFoundException {
		return this.hrFeedbackService.getFeedbackbydetails(empid,hrid);
	}

	@PostMapping("/create")
	public ResponseEntity<String> createHrFeedback(@RequestBody HrFeedback hr) throws ResoruceNotFoundException {
		return this.hrFeedbackService.createHrFeedback(hr);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateHrFeedbackById(@RequestBody HrFeedback hr) throws ResoruceNotFoundException {
		return this.hrFeedbackService.updateHrFeedbackById(hr);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteHrFeedbackById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.hrFeedbackService.deleteHrFeedbackById(id);
	}
}
