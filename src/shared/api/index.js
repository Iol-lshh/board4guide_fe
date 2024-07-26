import axios from 'axios';

const defaultOptions = {
    // baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
};

export const client = axios.create(defaultOptions);
