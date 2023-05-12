import React, { useState } from 'react';
import './AddEmployee.css'

function AddEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { name, email };

        try {
            const response = await fetch('http://localhost:8080/employee/addemployee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            console.log(response.ok ? 'Employee added successfully!' : 'Failed to add employee')
        } catch (error) {
            console.log('Error:', error);
        }

        // Clear the form fields
        setName('');
        setEmail('');
    };



    return (
        <div className='content'>
            <h1>Add an Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required/>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <button type="home" onClick={() => window.location.href = '/'}>
                <i className="fas fa-home"/>Home
            </button>
        </div>
    );
}

export default AddEmployee;