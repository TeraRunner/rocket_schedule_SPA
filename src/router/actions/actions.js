import { GET_LAUNCHES, GET_ERROR, GET_FILTERED_YEAR } from './types';

export const getLaunches = allLaunches => ({
  type: GET_LAUNCHES,
  payload: allLaunches,
});

export const getError = error => ({
  type: GET_ERROR,
  payload: error
});

export const getFilteredYear = year => ({
  type: GET_FILTERED_YEAR,
  payload: year,
})