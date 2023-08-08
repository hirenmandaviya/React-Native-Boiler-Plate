import { put, call, takeEvery, take } from "redux-saga/effects";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/types";
import * as Api from "../../common/Api";

export function* LoginAsyn({ params }) {
  try {
    const response = yield call(Api.Login, params);
    yield put({
      type: LOGIN_SUCCESS,
      payload: response,
    });
  } catch (e) {
    yield put({ type: LOGIN_FAILED, payload: e });
  }
}

export function* LoginSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginAsyn);
}
export default LoginSaga;
