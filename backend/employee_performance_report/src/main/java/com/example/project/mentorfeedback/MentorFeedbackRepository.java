package com.example.project.mentorfeedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface MentorFeedbackRepository extends JpaRepository<MentorFeedback, Integer> {
    @Query("Select feedback from mentorFeedback feedback where feedback.empid=?1 and feedback.mentorid=?2")
    public List<MentorFeedback> getFeedbackByDetails(int empid, int mentorid);

    @Modifying
    @Transactional
    @Query("Delete from mentorFeedback peer where peer.empid=?1")
    public void deletefeedback(int empid);

    @Query("Select feedback from mentorFeedback feedback where feedback.empid=?1")
    public List<MentorFeedback> getHrfeedbackByEmpId(int empid);
}
