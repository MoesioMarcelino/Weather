import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;

const apiWeather = axios.create({
  baseURL: `https://dataservice.accuweather.com`,
  params: {
    apikey,
  },
});

export default apiWeather;
