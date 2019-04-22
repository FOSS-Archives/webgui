import axios from 'axios';

let headers = {
    "Accept": "application/json",
    "Access-Control-Allow-Credentials": true
};

export default axios.create({
   baseURL: `${process.env.REACT_APP_endpoint}`,
   headers:  headers,
   withCredentials: true // Make sure we send the cookies back with the request
})
