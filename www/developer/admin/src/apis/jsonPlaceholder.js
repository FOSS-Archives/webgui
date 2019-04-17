import axios from 'axios';

export default axios.create({
   baseURL: `${process.env.REACT_APP_endpoint}`,
   headers: { 'Accept': 'application/json' },
   withCredentials: true // Make sure we send the cookies back with the request
})