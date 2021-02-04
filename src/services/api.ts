import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: `http://dataservice.accuweather.com/locations/v1/cities/search`,
  params: {
    apikey,
    language: 'pt-br',
  },
});

export default api;
