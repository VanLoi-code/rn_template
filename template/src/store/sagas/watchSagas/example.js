import api from '@utils/api';
import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';

function* example(payload) {
  try {
    const res = yield api.get('example');
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
  }
}

export function* watchExampleSagas() {
  yield takeLatest(actions.EXAMPLE, example);
}
