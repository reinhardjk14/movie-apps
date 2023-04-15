import Endpoints from '@Services/API/endpoint';
import {http} from '@Services/API/http';
import {Dispatch, AnyAction} from 'redux';
import {ACTION_TYPES} from '../constants/actionTypes';
const {MOVIES} = ACTION_TYPES;

export const getMovies = () => (dispatch: Dispatch<AnyAction>) => {
  const path = Endpoints.list.all;
  dispatch({type: MOVIES.GET_MOVIES_START});
  return new Promise((resolve, reject) => {
    http
      .get(path)
      .then(res => {
        dispatch({type: MOVIES.GET_MOVIES_SUCCESS, payload: res.data});
        resolve(res.data);
        return res.data;
      })
      .catch(err => {
        console.log('error', err);
        dispatch({type: MOVIES.GET_MOVIES_FAILED});
      });
  });
};
