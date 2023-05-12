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
		String gyanendraImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Gyanendra_Shah.jpg";
		employeeService.addNewEmployee(new Employee(gyanendraImage, "Gyanendra", "gyanendra@gmail.com"));
		employeeService.addNewEmployee(new Employee("https://img2.wikia.nocookie.net/__cb20120808065653/fantendo/images/c/c0/TIMMY_TURNER.png", "Timmy", "timmy@yahoo.com"));
		employeeService.addNewEmployee(new Employee("https://www.stateofdigitalpublishing.com/wp-content/uploads/2019/06/Yolo-App.png", "Yolo", "yolo@yolo.yolo"));
	}

}
