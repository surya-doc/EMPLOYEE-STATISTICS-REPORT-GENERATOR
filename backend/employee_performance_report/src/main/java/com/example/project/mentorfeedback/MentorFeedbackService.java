package com.example.project.mentorfeedback;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.mentor.Mentor;
import com.example.project.mentor.MentorRepository;
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
    private MentorRepository mentorRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<MentorFeedback> getAllFeedbackOfMentor(){
        return mentorFeedbackRepository.findAll();
    }

    public ResponseEntity<MentorFeedback> getMentorFeedbackOfAnEmployee(Integer empid) throws ResoruceNotFoundException {
        MentorFeedback feedback= this.mentorFeedbackRepository.findById(empid).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +empid));
        return ResponseEntity.ok(feedback);
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
        Mentor mentor = mentorRepository.findById(mentorFeedback.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +mentorFeedback.getMentorid()));
        this.mentorFeedbackRepository.save(mentorFeedback);
        return ResponseEntity.ok("Created Feedback");
    }

    public ResponseEntity<String> updateMentorFeedback(MentorFeedback mentorFeedback) throws ResoruceNotFoundException {
        int id=mentorFeedback.getEmpid();
        MentorFeedback emp= this.mentorFeedbackRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        Employee employee = employeeRepository.findById(mentorFeedback.getEmpid()).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +mentorFeedback.getEmpid()));
        Team team1 = teamRepository.findById(mentorFeedback.getMentorteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getMentorteamid()));
        Team team2 = teamRepository.findById(mentorFeedback.getEmpteamid()).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +mentorFeedback.getEmpteamid()));
        Mentor mentor = mentorRepository.findById(mentorFeedback.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +mentorFeedback.getMentorid()));
        this.mentorFeedbackRepository.save(mentorFeedback);
        return ResponseEntity.ok("Updated Feedback");
    }
}
