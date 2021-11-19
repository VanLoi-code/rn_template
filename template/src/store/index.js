import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '@store/reducers';
import rootSagas from '@store/sagas';

const middleWares = [];
const sagaMiddleware = createSagaMiddleware();
middleWares.push(sagaMiddleware);

const store = createStore(rootReducers, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSagas);

export default store;
