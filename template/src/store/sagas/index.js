import {all, fork} from 'redux-saga/effects';
import {watchExampleSagas} from './watchSagas/example';

export default function* rootSaga() {
  yield all([fork(watchExampleSagas)]);
}
