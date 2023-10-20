// Axios-based HTTP service for making API requests
// sets up interceptors to handle errors and includes functions for setting a JWT

import axios from 'axios'; // library for making HTTP requests
import { toast } from 'react-toastify'; // toast notifications for error handling

// base URL for API requests. Change this later
axios.defaults.baseURL = "http://3.85.226.202:5000/api";

// interceptor to handle responses
axios.interceptors.response.use(null, error => {
    // check if the error is expected (HTTP status code between 400 and 499).
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    
    if (!expectedError) {
        // log unexpected error
        console.error(error);
        // show toast notification for unexpected error
        toast.error("An unexpected error occurred.");
    }
    // reject promise with the error
    return Promise.reject(error);
});

// set JWT in Axios headers
function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

// Export Axios HTTP service and setJwt function
export default{
    get: axios.get,           // GET requests to retrieve data
    post: axios.post,         // POST requests to create data
    put: axios.put,           // PUT requests to update data (patch for partial updates)
    delete: axios.delete,     // DELETE requests to delete data
    setJwt                   
};
