import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://smartwatch-project.onrender.com/api'
});
