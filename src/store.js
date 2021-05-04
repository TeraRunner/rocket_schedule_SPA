import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './router/reducers/reducer';
import spacexLaunchesSaga from './router/sagas';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(spacexLaunchesSaga);

export default store;