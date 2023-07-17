import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateEmployee.css'

const UpdateEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee, setImage] = useState({
        name: '', email: '', image: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            const result = await axios.get(`http://localhost:8080/employee/${id}`);
            setEmployee(result.data);
        };
        fetchEmployee()
            .then((result) => {
                console.log(`Success in getting employee of id: ${id}`, result)
            })
            .catch((error) => {
                console.log(`Error in getting employee of id: ${id}`, error)
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        if (!urlRegex.test(employee.image)) {
            alert('Please enter a valid image URL');
            setImage(employee.image);
            return;
        }

        await axios.put(`http://localhost:8080/employee/update/${id}`, employee);
        window.location = '/';
    };

    return (
        <div className='content'>
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" id="name" value={employee.name} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={employee.email} onChange={handleChange} required />

                <label htmlFor="image">Image Link</label>
                <input type="text" name="image" id="image" value={employee.image} onChange={handleChange} required />

                <br/>

                <button type="submit">Update Employee</button>
            </form>
            <br/>
            <button className='cancel' onClick={() => window.location.href = '/'}>
                Cancel
            </button>
        </div>
    );
};

export default UpdateEmployee;
