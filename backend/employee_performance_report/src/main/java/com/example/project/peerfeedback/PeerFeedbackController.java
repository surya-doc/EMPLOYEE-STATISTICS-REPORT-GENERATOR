package com.example.project.peerfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peerFeedback")
public class PeerFeedbackController {
  @Autowired
  private PeerFeedbackService peerFeedbackService;

  @GetMapping("/{empid}")
  private List<PeerFedback>getPeerFeedbackOfAnEmployee(@PathVariable Integer empid){
    return this.peerFeedbackService.getPeerFeedbackByID(empid);
  }

  @PostMapping("/create")
  public void addPeerFeedback(@RequestBody PeerFedback peerFedback){
    this.peerFeedbackService.addPeerFeedback(peerFedback);
  }

  @PutMapping("/update")
  public void updatePeerFeedback(@RequestBody PeerFedback peerFedback){
    this.peerFeedbackService.updatePeerFeedback(peerFedback);
  }
}
