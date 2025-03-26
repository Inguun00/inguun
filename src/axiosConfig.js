import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/api',  // Backend серверийн URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Token хадгалагдсан байх ёстой
  },
});

export default axiosInstance;