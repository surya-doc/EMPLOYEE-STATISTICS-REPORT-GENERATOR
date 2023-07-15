package com.example.project.hrfeedback;

import com.example.project.hrfeedback.HrFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HrFeedbackRepository extends JpaRepository<HrFeedback, Integer> {
}
