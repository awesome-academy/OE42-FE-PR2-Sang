import {
    GET_EVENT_REQUEST,
    getEventSuccess,
    getEventFail,
} from '../action/eventAction'

import eventApi from '../../apis/eventApi'
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchEvent() {
    try {
        const { getAll } = eventApi;
        const { data } = yield call(getAll)

        yield put(getEventSuccess(data))
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