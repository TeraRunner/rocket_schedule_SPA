import { GET_ERROR, GET_LAUNCHES } from '../actions/types';

const initialState = {
  allLaunches: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LAUNCHES:
      return {
        ...state,
        allLaunches: action.payload,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};