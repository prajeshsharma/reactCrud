import './App.css';
import AddEmployee from "./component/AddEmployee";
import Home from "./component/Home";
import { Route, Routes } from 'react-router-dom';
import UpdateEmployee from "./component/UpdateEmployee";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/add-employee" element={ <AddEmployee/> } />
                <Route path="/update-employee/:id" element={ <UpdateEmployee/> } />
            </Routes>
        </>
    );
}

export default App;
