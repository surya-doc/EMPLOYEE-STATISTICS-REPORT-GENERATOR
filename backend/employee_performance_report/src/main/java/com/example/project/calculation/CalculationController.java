package com.example.project.calculation;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calculate")
@CrossOrigin("*")
public class CalculationController {
    @Autowired
    private CalculationService calculationService;

    @GetMapping("/{empid}")
    public Calculation calculateEmployeeStatistics(@PathVariable int empid) throws ResoruceNotFoundException {
        return this.calculationService.getCalculatedValues(empid).getBody();
    }
}
