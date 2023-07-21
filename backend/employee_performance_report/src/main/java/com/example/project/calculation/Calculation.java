package com.example.project.calculation;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "calculation")
@Table(name = "calculation")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Calculation {
    @Id
    private Integer empid;
    private Integer behaviour;
    private Integer communication;
    private Integer extrawork;
    private Integer responsibility;
    private Integer deadline;
    private Integer workload;
    private Integer extraactivity;
    private Double percentile;
}
