import {ACTION_TYPES} from '../constants/actionTypes';

const initialState = {
  isLogin: false,
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case ACTION_TYPES.AUTH.SET_IS_LOGIN:
      return {...state, isLogin: payload};

    default:
      return state;
  }
};
