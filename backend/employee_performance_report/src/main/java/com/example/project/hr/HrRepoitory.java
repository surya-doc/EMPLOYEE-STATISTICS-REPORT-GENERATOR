package com.example.project.hr;

import com.example.project.hr.Hr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HrRepoitory extends JpaRepository<Hr, Integer> {
}
