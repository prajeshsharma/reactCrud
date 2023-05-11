package com.employee;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class EmployeeApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(EmployeeApplication.class, args);
		EmployeeService employeeService = ctx.getBean(EmployeeService.class);
		employeeService.addNewEmployee(new Employee("Gyanendra", "gyanendra@gmail.com"));
		employeeService.addNewEmployee(new Employee("Timmy", "timmy@yahoo.com"));
		employeeService.addNewEmployee(new Employee("Yolo", "yolo@yolo.yolo"));
	}

}
