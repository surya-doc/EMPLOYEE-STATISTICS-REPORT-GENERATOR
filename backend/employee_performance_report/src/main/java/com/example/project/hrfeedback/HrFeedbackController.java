package com.example.project.hrfeedback;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hrFeedback")
@CrossOrigin("*")
public class HrFeedbackController {
	@Autowired
	private HrFeedbackService hrFeedbackService;

	@GetMapping("/exists/{empid}/{hrid}")
	public ResponseEntity<String> getFeedbackDetails(@PathVariable int empid, @PathVariable int hrid) throws ResoruceNotFoundException {
		return this.hrFeedbackService.feedbackexists(empid,hrid);
	}

	@GetMapping("/{id}")
	public ResponseEntity<HrFeedback> getHrFeedbackById(@PathVariable int id) throws ResoruceNotFoundException {
		return this.hrFeedbackService.getHrFeedbackById(id);
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
