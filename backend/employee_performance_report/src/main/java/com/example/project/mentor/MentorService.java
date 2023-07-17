package com.example.project.mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorService {
    @Autowired
    private MentorRepository mentorRepository;

    public List<Mentor> getMentor(){
        return mentorRepository.findAll();
    }

    public Mentor getMentorById(Integer id){
        return mentorRepository.findById(id).orElseThrow();
    }

    public void addMentor(Mentor mentor){
        mentorRepository.save(mentor);
    }

    public void updateMentor(Mentor mentor){
        mentorRepository.save(mentor);
    }

    public void deleteMentor(Integer id){
        mentorRepository.deleteById(id);
    }

    public Mentor getMentorByTeam(int id) {
        List<Mentor> mentor=this.mentorRepository.getMentorByTeam(id);
        return mentor.get(0);
    }
}
