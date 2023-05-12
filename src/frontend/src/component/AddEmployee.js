import React from 'react';
import './AddEmployee.css'

function AddEmployee() {
    return (
        <div>
            <h1>Add an Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} required/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required/>
                </label>
                <br/>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;