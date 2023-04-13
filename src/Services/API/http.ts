import Axios from 'axios';
import {store} from 'src/Redux';
// import {setIsLogin} from '_actions/main';

import {BASE_URL} from '../BaseURL';
const {dispatch} = store;

const instance = Axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config: any) => {
    // TODO: update token and fcmToken generated from BE
    // const state = store.getState();
    // const token = state.auth.token;

    // const fcmToken = state.persisted.fcmToken;
    // config.headers.Authorization = `Bearer ${token}`;
    // config.headers['fcm-token'] = `${fcmToken}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    if (error?.response?.status === 401) {
      // NavigationServices.navigate('Login');
      //   dispatch(setIsLogin(false));
      throw error.response;
    }
    return Promise.reject(error);
  },
);

export const http = instance;
