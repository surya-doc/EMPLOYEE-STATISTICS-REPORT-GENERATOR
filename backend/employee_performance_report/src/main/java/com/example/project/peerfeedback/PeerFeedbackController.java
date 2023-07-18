package com.example.project.peerfeedback;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peerFeedback")
@CrossOrigin("*")
public class PeerFeedbackController {
  @Autowired
  private PeerFeedbackService peerFeedbackService;

  @GetMapping("/{empid}")
  private ResponseEntity<List<PeerFedback>> getPeerFeedbackOfAnEmployee(@PathVariable Integer empid) throws ResoruceNotFoundException {
    return this.peerFeedbackService.getPeerFeedbackByID(empid);
  }

  @PostMapping("/create")
  public ResponseEntity<String> addPeerFeedback(@RequestBody PeerFedback peerFedback) throws ResoruceNotFoundException {
    return this.peerFeedbackService.addPeerFeedback(peerFedback);
  }

  @PutMapping("/update")
  public ResponseEntity<String> updatePeerFeedback(@RequestBody PeerFedback peerFedback) throws ResoruceNotFoundException {
    return this.peerFeedbackService.updatePeerFeedback(peerFedback);
  }
}
