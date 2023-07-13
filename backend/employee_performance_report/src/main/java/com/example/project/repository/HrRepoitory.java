package com.example.project.repository;

import com.example.project.model.Hr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface HrRepoitory extends JpaRepository<Hr, Integer> {
}
