import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: { Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4Y' },
});
