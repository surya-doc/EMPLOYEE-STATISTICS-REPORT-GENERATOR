package com.example.project.repository;

import com.example.project.model.MentorFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MentorFeedbackRepository extends JpaRepository<MentorFeedback, Integer> {
}
