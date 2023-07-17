package com.example.project.hr;

import com.example.project.employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HrRepository extends JpaRepository<Hr, Integer> {
    @Query("Select h from hr h where h.email=?1 and h.password=?2")
    public List<Hr> getHrByDetails(String email,String password);
}
