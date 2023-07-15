package com.example.project.peerfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeerFeedbackService {
    @Autowired
    private PeerFeedbackRepository peerFeedbackRepository;

    public List<PeerFedback> getPeerFeedbackByID(Integer empid){
        return peerFeedbackRepository.getPeerFeedbackOfAnEmployee(empid);
    }

    public void addPeerFeedback(PeerFedback peerFedback){
        this.peerFeedbackRepository.save(peerFedback);
    }

    public void updatePeerFeedback(PeerFedback peerFedback){
        this.peerFeedbackRepository.save(peerFedback);
    }
}
