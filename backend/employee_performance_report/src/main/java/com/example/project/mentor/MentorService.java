package com.example.project.mentor;

import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorService {
    @Autowired
    private MentorRepository mentorRepository;
    @Autowired
    private TeamRepository teamRepository;

    public List<Mentor> getMentor(){
        return mentorRepository.findAll();
    }

    public ResponseEntity<Mentor> getMentorById(Integer id) throws ResoruceNotFoundException {
        Mentor employee= this.mentorRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<String> addMentor(Mentor mentor) throws ResoruceNotFoundException {
        int id = mentor.getMentorid();
        Optional<Mentor> emp=this.mentorRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Mentor Already Exists");
        }
        this.mentorRepository.save(mentor);
        return ResponseEntity.ok("Created Mentor");
    }

    public ResponseEntity<String> updateMentor(Mentor mentor) throws ResoruceNotFoundException {
        int id=mentor.getMentorid();
        Mentor emp= this.mentorRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.mentorRepository.save(mentor);
        return ResponseEntity.ok("Updated Mentor");
    }

    public ResponseEntity<String> deleteMentor(Integer id) throws ResoruceNotFoundException {
        Mentor emp= this.mentorRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.mentorRepository.deleteById(id);
        return ResponseEntity.ok("Deleted Mentor");
    }

    public ResponseEntity<Mentor> getMentorByTeam(int id) throws ResoruceNotFoundException {
        Team team=teamRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +id));
        Mentor mentor=mentorRepository.findById(team.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +team.getMentorid()));
        return ResponseEntity.ok(mentor);
    }
}
