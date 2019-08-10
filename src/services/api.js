import axios from 'axios';
import { ENDPOINT } from '../utils/constants';

const api = axios.create({
  baseURL: ENDPOINT
});

export default api;
