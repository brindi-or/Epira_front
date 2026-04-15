import axios from 'axios';

const apiUrl = import.meta.env.PROD ? 'https://backend.afrihub.innovsi.org' : 'http://localhost:8000';
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials:true,
});

export default api;

