import './App.css';
import Home from "./component/Home";
import employeeService from './service/employee.service';
import {useEffect, useState} from "react";

const App = () => {
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
    return (
        <div>
            <h1>Employees</h1>
            <div>
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
                                    <td><button>placeholder1</button><button>placeholder2</button></td>
                                </tr>
                            ))
                        }
                </table>
            </div>
        </div>
    );
}

export default App;
