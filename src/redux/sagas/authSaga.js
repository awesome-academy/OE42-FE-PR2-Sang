import { call, delay, join, put, takeLatest } from "redux-saga/effects";
import {
    LOG_IN_REQUEST,
    logInSuccess,
    logInFail,
    
    REGISTER_REQUEST,
    registerSuccess,
    registerFail,

    LOG_OUT_REQUEST
} from '../action/authAction';

import authApi from '../../apis/authApi'

function* handleLogIn() {
    localStorage.setItem("token", "secretToken");
    yield delay(1000);
    yield put(logInSuccess([]));
}

function* handleRegister(action) {
    try {
        const { register } = authApi;
        const { data, response } = yield call(register, action.payload);
        localStorage.setItem('token', response.accessToken)
        put(registerSuccess(data.user))
    } catch (error) {
        console.log("Saga fail", error)
        yield put(registerFail(error)) 
    }
}

function* handleLogOut() {
    yield delay(1000);
    yield localStorage.removeItem("token")
}

function* authSaga() {
    yield takeLatest(LOG_IN_REQUEST, handleLogIn);
    yield takeLatest(LOG_OUT_REQUEST, handleLogOut);
    yield takeLatest(REGISTER_REQUEST, handleRegister);
}

export default authSaga;