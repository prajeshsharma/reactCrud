import React, { useState } from 'react';
import './AddEmployee.css'

function AddEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, email, image };
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        if (!urlRegex.test(image)) {
            alert('Please enter a valid image URL');
            setImage('');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/employee/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            console.log(response.ok ? 'Employee added successfully!' : 'Failed to add employee')
        } catch (error) {
            console.log('Error:', error);
        }

        alert('Employee has been added');
        // Clear the form fields
        setName('');
        setEmail('');
        setImage('');
    };

    return (
        <div className='content'>
            <h1>Add an Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required/>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>

                <label htmlFor="image">Image Link:</label>
                <input id="image" type="text" value={image} onChange={(event) => setImage(event.target.value)} required/>
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