package com.example.project.mentorfeedback;

import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.hrfeedback.HrFeedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentorFeedback")
@CrossOrigin("*")
public class MentorFeedbackController {
  @Autowired
  private MentorFeedbackService mentorFeedbackService;


  @GetMapping("/byempid/{empid}")
  public ResponseEntity<List<MentorFeedback>> getFeedbackofEmployee(@PathVariable int empid) throws ResoruceNotFoundException
  {
    return this.mentorFeedbackService.getFeedbackByEmployee(empid);
  }
  @GetMapping("/{empid}/{mentorid}")
  public ResponseEntity<MentorFeedback> getFeedbackDetails(@PathVariable int empid, @PathVariable int mentorid) throws ResoruceNotFoundException {
    return this.mentorFeedbackService.getFeedbackbydetails(empid,mentorid);
  }

  @PostMapping("/create")
  public ResponseEntity<String> addMentorFeedbackForEmployee(@RequestBody MentorFeedback mentorFeedback) throws ResoruceNotFoundException {

    return this.mentorFeedbackService.addMentorFeedbackForEmployee(mentorFeedback);
  }

  @PutMapping("/update")
  public ResponseEntity<String> updateMentorFeedback(@RequestBody MentorFeedback mentorFeedback) throws ResoruceNotFoundException {
    return this.mentorFeedbackService.updateMentorFeedback(mentorFeedback);
  }
}
