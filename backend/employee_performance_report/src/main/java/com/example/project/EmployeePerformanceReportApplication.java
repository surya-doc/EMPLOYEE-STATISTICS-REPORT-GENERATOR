package com.example.project;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableEncryptableProperties
@SpringBootApplication
public class EmployeePerformanceReportApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeePerformanceReportApplication.class, args);
	}

}
