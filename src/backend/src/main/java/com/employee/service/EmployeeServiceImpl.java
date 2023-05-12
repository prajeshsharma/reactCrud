package com.employee.service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    /**
     *
     * @return List of all Employee objects in table
     */
    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    /**
     *
     * @param employee employee to be added
     * @return employee that was added
     */
    @Override
    public Employee addNewEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    /**
     *
     * @param id ID of employee to get
     * @return employee that was gotten
     */
    @Override
    public Optional<Employee> getEmployeeById(long id) {
        return employeeRepository.findById(id);
    }

    /**
     *
     * @param employee employee to be updated
     * @return employee that was updated
     */
    @Override
    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    /**
     *
     * @param id IF of employee to be deleted
     */
    @Override
    public void deleteEmployeeById(long id) {
        employeeRepository.deleteById(id);
    }
}
