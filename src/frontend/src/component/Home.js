import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/employee/getallemployees');
        setData(response.data);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
    ];

    return (
        <div>
            <h1>Employee Table</h1>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
            />
        </div>
    );
}

export default Home;
