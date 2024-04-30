/* eslint-disable no-unused-vars */
import axios from 'axios';
import { DevelopmentUrl, ProductionUrl } from './constants';
let ApiUrl = '';
let access_token = '';

if (typeof window != 'undefined') {
  access_token = localStorage.getItem('access_token') || '';
  if (window.location.origin.includes('localhost')) {
    // ApiUrl = DevelopmentUrl;
    console.log(DevelopmentUrl);
    ApiUrl = ProductionUrl;
  } else {
    // ApiUrl = DevelopmentUrl;
    ApiUrl = ProductionUrl;
  }
}
const instance = axios.create({
  baseURL: ApiUrl,
  // headers: {
  //   Authorization: `Bearer ${access_token}`,
  // },
});

instance.interceptors.request.use(async (request) => {
  var access_token = '';
  if (typeof window !== 'undefined') {
    access_token = localStorage.getItem('access_token') || '';
    if (access_token) {
      request.headers.Authorization = `Bearer ${access_token}`;
    }
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('active_shop');
    }
    return;
  }
);

export default instance;
