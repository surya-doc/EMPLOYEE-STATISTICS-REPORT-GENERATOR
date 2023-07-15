package com.example.project.mentorfeedback;

import com.example.project.mentorfeedback.MentorFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorFeedbackRepository extends JpaRepository<MentorFeedback, Integer> {
}
