import { spawn } from 'redux-saga/effects';
import bannerSaga from './bannerSaga';
import eventSaga from './event.saga';
import moviesSaga from './moviesSaga';
import authSaga from './authSaga'

function* rootSaga() {
    yield spawn(bannerSaga);
    yield spawn(moviesSaga);
    yield spawn(eventSaga);
    yield spawn(authSaga);
}

export default rootSaga;