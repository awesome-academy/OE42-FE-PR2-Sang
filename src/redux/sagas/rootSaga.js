import { spawn } from 'redux-saga/effects';
import bannerSaga from './bannerSaga';
import eventSaga from './event.saga';
import moviesSaga from './moviesSaga';

function* rootSaga() {
    yield spawn(bannerSaga);
    yield spawn(moviesSaga);
    yield spawn(eventSaga);
}

export default rootSaga;