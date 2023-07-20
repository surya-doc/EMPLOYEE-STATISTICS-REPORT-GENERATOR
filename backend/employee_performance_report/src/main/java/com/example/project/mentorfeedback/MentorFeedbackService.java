package com.example.project.mentorfeedback;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.hrfeedback.HrFeedback;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorFeedbackService {
    @Autowired
    private MentorFeedbackRepository mentorFeedbackRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<MentorFeedback> getAllFeedbackOfMentor(){
        return mentorFeedbackRepository.findAll();
    }


    public ResponseEntity<String> addMentorFeedbackForEmployee(MentorFeedback mentorFeedback) throws ResoruceNotFoundException {
        int id = mentorFeedback.getEmpid();
        Optional<MentorFeedback> emp=this.mentorFeedbackRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Feedback Already Exists");
        }
        Employee employee = employeeRepository.findById(mentorFeedback.getEmpid()).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +mentorFeedback.getEmpid()));
        Team team1 = teamRepository.findById(mentorFeedback.getMentorteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getMentorteamid()));
        Team team2 = teamRepository.findById(mentorFeedback.getEmpteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getEmpteamid()));
        Employee mentor = employeeRepository.findById(mentorFeedback.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +mentorFeedback.getMentorid()));
        this.mentorFeedbackRepository.save(mentorFeedback);
        return ResponseEntity.ok("Created Feedback");
    }

    public ResponseEntity<String> updateMentorFeedback(MentorFeedback mentorFeedback) throws ResoruceNotFoundException {
        int id=mentorFeedback.getEmpid();
        MentorFeedback emp= this.mentorFeedbackRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        Employee employee = employeeRepository.findById(mentorFeedback.getEmpid()).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +mentorFeedback.getEmpid()));
        Team team1 = teamRepository.findById(mentorFeedback.getMentorteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getMentorteamid()));
        Team team2 = teamRepository.findById(mentorFeedback.getEmpteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getEmpteamid()));
        Employee mentor = employeeRepository.findById(mentorFeedback.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +mentorFeedback.getMentorid()));
        this.mentorFeedbackRepository.save(mentorFeedback);
        return ResponseEntity.ok("Updated Feedback");
    }

    public ResponseEntity<MentorFeedback> getFeedbackbydetails(int empid, int hrid) throws ResoruceNotFoundException {
        List<MentorFeedback> hrFeedbacks = this.mentorFeedbackRepository.getFeedbackByDetails(empid,hrid);
        if(hrFeedbacks.size()==0)
        {
            throw new ResoruceNotFoundException("Feedback Doesn't Exists");
        }
        return ResponseEntity.ok(hrFeedbacks.get(0));
    }

    public ResponseEntity<List<MentorFeedback>> getFeedbackByEmployee(int empid) throws ResoruceNotFoundException
    {
        List<MentorFeedback> hrFeedbacks = this.mentorFeedbackRepository.getHrfeedbackByEmpId(empid);
        return ResponseEntity.ok(hrFeedbacks);
    }

}
