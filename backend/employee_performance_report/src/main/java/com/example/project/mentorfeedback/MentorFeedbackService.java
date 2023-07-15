package com.example.project.mentorfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorFeedbackService {
    @Autowired
    private MentorFeedbackRepository mentorFeedbackRepository;

    public List<MentorFeedback> getAllFeedbackOfMentor(){
        return mentorFeedbackRepository.findAll();
    }

    public MentorFeedback getMentorFeedbackOfAnEmployee(Integer empid){
        return mentorFeedbackRepository.findById(empid).orElseThrow();
    }

    public void addMentorFeedbackForEmployee(MentorFeedback mentorFeedback){
        mentorFeedbackRepository.save(mentorFeedback);
    }

    public void updateMentorFeedback(MentorFeedback mentorFeedback){
        mentorFeedbackRepository.save(mentorFeedback);
    }
}
