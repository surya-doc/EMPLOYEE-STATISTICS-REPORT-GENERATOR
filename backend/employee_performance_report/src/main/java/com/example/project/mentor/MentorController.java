package com.example.project.mentor;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentors")
@CrossOrigin("*")
public class MentorController {
  @Autowired
  private MentorService mentorService;

  @GetMapping("/")
  public List<Mentor> getMentor(){
    return mentorService.getMentor();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Mentor> getMentorById(@PathVariable Integer id) throws ResoruceNotFoundException {
    return mentorService.getMentorById(id);
  }

  @PostMapping("/create")
  public ResponseEntity<String> addMentor(@RequestBody Mentor mentor) throws ResoruceNotFoundException {
    return this.mentorService.addMentor(mentor);
  }

  @PutMapping("/update")
  public ResponseEntity<String> updateMentor(@RequestBody Mentor mentor) throws ResoruceNotFoundException {
    return this.mentorService.updateMentor(mentor);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> deleteMentor(@PathVariable Integer id) throws ResoruceNotFoundException {
    return this.mentorService.deleteMentor(id);
  }

  @GetMapping("/byteam/{id}")
  public ResponseEntity<Mentor> getMentorByTeam(@PathVariable int id) throws ResoruceNotFoundException { return this.mentorService.getMentorByTeam(id);  }
}
