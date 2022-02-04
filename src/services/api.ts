import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://calendar-node-api.herokuapp.com/'
});
