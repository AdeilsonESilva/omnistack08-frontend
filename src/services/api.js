import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tindev-back.herokuapp.com'
});

export default api;
