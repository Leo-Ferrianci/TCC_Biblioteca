import axios from 'axios';

const urlLocal = 'localhost';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: `http://${urlLocal}:3333`,
  headers: { Authorization: `Bearer ${token}` }
})

export default api
