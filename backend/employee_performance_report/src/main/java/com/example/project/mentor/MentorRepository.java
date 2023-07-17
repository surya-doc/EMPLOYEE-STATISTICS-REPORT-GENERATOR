package com.example.project.mentor;

import com.example.project.hr.Hr;
import com.example.project.mentor.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Integer> {

    @Query("Select men from mentor men where men.email=?1 and men.password=?2")
    public List<Mentor> getMentorByDetails(String email, String password);

    @Query("Select men from mentor men where men.teamid=?1")
    public List<Mentor> getMentorByTeam(int teamid);
}
