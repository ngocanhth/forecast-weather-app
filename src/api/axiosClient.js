import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Demo:

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=33ae0352e1a2e0091357afbe551241a7

// https://api.openweathermap.org/data/2.5/onecall?lat=20.952843312749252&lon=105.75646073790956&exclude=minutely&appid=33ae0352e1a2e0091357afbe551241a7

// Interceptor

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;