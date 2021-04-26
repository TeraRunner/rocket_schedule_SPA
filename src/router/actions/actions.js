import { GET_LAUNCHES, GET_ERROR } from './types';

export const getLaunches = (payload) => ({
  type: GET_LAUNCHES,
  payload,
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error
});