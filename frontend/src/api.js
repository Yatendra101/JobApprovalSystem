import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust this if your endpoint is different

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Add the signup function
export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};
