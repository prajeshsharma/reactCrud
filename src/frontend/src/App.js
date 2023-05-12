import './App.css';
import AddEmployee from "./component/AddEmployee";
import Home from "./component/Home";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/add-employee" element={ <AddEmployee/> } />
            </Routes>
        </>
    );
}

export default App;
