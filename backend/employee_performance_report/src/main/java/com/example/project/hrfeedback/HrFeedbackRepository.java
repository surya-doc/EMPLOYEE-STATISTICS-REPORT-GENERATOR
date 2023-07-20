package com.example.project.hrfeedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface HrFeedbackRepository extends JpaRepository<HrFeedback, Integer> {

    @Query("Select feedback from hrFeedback feedback where feedback.empid=?1 and feedback.hrid=?2")
    public List<HrFeedback> getFeedbackByDetails(int empid, int hrid);

    @Modifying
    @Transactional
    @Query("Delete from hrFeedback peer where peer.empid=?1")
    public void deletefeedback(int empid);

    @Query("Select feedback from hrFeedback feedback where feedback.empid=?1")
    public List<HrFeedback> getHrfeedbackByEmpId(int empid);
}
