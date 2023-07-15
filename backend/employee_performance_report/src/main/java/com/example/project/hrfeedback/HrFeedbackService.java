package com.example.project.hrfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@Service
public class HrFeedbackService {
    @Autowired
    private HrFeedbackRepository hrFeedbackRepository;
    public HrFeedback getHrFeedbackById(int id) { return this.hrFeedbackRepository.findById(id).orElseThrow(null);    }
    public void createHrFeedback(HrFeedback hr)
    {
        this.hrFeedbackRepository.save(hr);
    }
    public void updateHrFeedbackById(HrFeedback hr)
    {
        this.hrFeedbackRepository.save(hr);
    }
    public void deleteHrFeedbackById(int id)
    {
        this.hrFeedbackRepository.deleteById(id);
    }
}
