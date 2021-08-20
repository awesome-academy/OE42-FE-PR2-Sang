import {
    GET_EVENT_REQUEST,
    getEventSuccess,
    getEventFail,
} from '../action/eventAction'

import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

import eventApi from '../../apis/eventApi'
import { call, delay, put, takeEvery } from 'redux-saga/effects';

function* fetchEvent() {
    try {
        yield put(showLoading());
        const { getAll } = eventApi;
        const { data } = yield call(getAll)
        yield put(getEventSuccess(data));
        yield delay(800);
        yield put(hideLoading());
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getEventFail(error)
        );
    }
}

function* eventSaga() {
    yield takeEvery(GET_EVENT_REQUEST, fetchEvent)
}

export default eventSaga;