package com.example.project.hrfeedback;

import com.example.project.hrfeedback.HrFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HrFeedbackRepository extends JpaRepository<HrFeedback, Integer> {

    @Query("Select feedback from hrFeedback feedback where feedback.empid=?1 and feedback.hrid=?2")
    public List<HrFeedback> getFeedbackByDetails(int empid, int hrid);


}
