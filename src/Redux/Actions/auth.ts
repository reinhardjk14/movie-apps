import {ACTION_TYPES} from '../constants/actionTypes';

export const setIsLogin = (payload: any) => ({
  type: ACTION_TYPES.AUTH.SET_IS_LOGIN,
  payload,
});
