import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getallemployees');
}

export default { getAll };