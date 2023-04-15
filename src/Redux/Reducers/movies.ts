import {ACTION_TYPES} from '../constants/actionTypes';

const initialState = {
  movieList: [],
  error: null,
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case ACTION_TYPES.MOVIES.GET_MOVIES_START:
      return {...state};
    case ACTION_TYPES.MOVIES.GET_MOVIES_FAILED:
      return {...state, error: payload};
    case ACTION_TYPES.MOVIES.GET_MOVIES_SUCCESS:
      return {...state, error: null};
    default:
      return state;
  }
};
