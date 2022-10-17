import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Origin': "http://etest.mn:5173",
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type': "application/json"},
    withCredentials: true
});

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });