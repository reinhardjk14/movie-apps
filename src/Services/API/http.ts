import Axios from 'axios';
import {store} from 'src/Redux';

const {dispatch} = store;

const instance = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
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
