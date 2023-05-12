import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import employeeService from "../service/employee.service";
import './Home.css'

function Home() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        employeeService.getAll()
            .then(response => {
                console.log('Printing employees data', response.data);
                setEmployees(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:8080/employee/getallemployees');
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/employee/delete/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) await fetchEmployees();
            else throw new Error('Failed to delete employee');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Employees</h1>
            <div>
                {employees.length > 0 ? (
                <table border="1" cellPadding="10">
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </tbody>
                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='update'>Update</button>
                                    <button className='delete' onClick={() => handleDelete(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                ) : (
                    <p>There are no employees to display.</p>
                )}
            </div>
            <br/>
            <Link to="/add-employee">
                <button className="add">Add Employee</button>
            </Link>
        </div>
    );
}

export default Home;

