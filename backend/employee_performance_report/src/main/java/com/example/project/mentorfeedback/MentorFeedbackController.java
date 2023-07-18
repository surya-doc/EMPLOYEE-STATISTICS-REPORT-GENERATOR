package com.example.project.mentorfeedback;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentorFeedback")
@CrossOrigin("*")
public class MentorFeedbackController {
  @Autowired
  private MentorFeedbackService mentorFeedbackService;

  @GetMapping("/{empid}")
  public ResponseEntity<MentorFeedback> getMentorFeedbackOfAnEmployee(@PathVariable Integer empid) throws ResoruceNotFoundException {
    return mentorFeedbackService.getMentorFeedbackOfAnEmployee(empid);
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
