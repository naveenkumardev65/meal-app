

import axios from "axios";


const api = axios.create({
    baseURL: `https://www.themealdb.com/api/json`,
    timeout: 40000,
    headers: {
        Accept: 'application/json'
    }
});

export default api;