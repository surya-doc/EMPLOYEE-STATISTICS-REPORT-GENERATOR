package com.example.project.calculation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopEmployees {
    private Integer empid;
    private Integer teamid;
    private String email;
    private Integer attendence;
    private Double percentile;
    private String name;
}
