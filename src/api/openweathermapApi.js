import axiosClient from './axiosClient';

const openweathermapApi = {
  getCityWeather(cityname) {
    const url = `/data/2.5/weather?q=${cityname}&appid=33ae0352e1a2e0091357afbe551241a7`;
    return axiosClient.get(url, { cityname });
  },

  // get(id) {
  //   const url = `/categories/${id}`;
  //   return axiosClient.get(url);
  // },

  // add(data) {
  //   const url = '/categories';
  //   return axiosClient.post(url, data);
  // },

  // update(data) {
  //   const url = `/categories/${data.id}`;
  //   return axiosClient.patch(url, data);
  // },

  // remove(id) {
  //   const url = `/categories/${id}`;
  //   return axiosClient.delete(url);
  // },
};

export default openweathermapApi;
