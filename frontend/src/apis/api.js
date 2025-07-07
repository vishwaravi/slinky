import axios from 'axios';

const baseURL = import.meta.VITE_API_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 1000
})

export default api;