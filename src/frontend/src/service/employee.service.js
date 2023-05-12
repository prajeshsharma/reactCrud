import httpClient from "../http-common";

const employeeService = {
    getAll: () => {
        return httpClient.get('/getallemployees');
    }
};

export default employeeService;