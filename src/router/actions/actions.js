import { GET_LAUNCHES, GET_ERROR } from './types';

export const getLaunches = (allLaunches) => ({
  type: GET_LAUNCHES,
  payload: allLaunches,
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error
});