import { put, takeLatest, all } from 'redux-saga/effects';

export function* getLaunches(action) {
  yield put({
    type: 'LAUNCHES_RECEIVED',
    payload: action.payload
  });
};

function* watchGetLaunches() {
  yield takeLatest('GET_LAUNCHES', getLaunches)
};

export default function* spacexLaunchesSaga() {
  yield all([
    watchGetLaunches()
  ]);
};