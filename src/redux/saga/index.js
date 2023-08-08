import { put, call, takeEvery, take, all } from "redux-saga/effects";

import RegistrationSaga from "./RegistrationSaga";
import LoginSaga from "./LoginSaga";

export default function* rootSaga() {
  yield all([
    LoginSaga(),
  ]);
}
