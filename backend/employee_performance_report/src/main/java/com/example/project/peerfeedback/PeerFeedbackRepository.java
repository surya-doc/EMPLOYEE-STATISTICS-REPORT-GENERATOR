package com.example.project.peerfeedback;

import com.example.project.peerfeedback.PeerFedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PeerFeedbackRepository extends JpaRepository<PeerFedback, Integer> {

    @Query("Select emp from employee emp where emp.empid = ?1")
    public List<PeerFedback> getPeerFeedbackOfAnEmployee(int id);
}
