import {
    GET_FILTER_MOVIES_REQUEST,
    getFilterMoviesSuccess,
    getFilterMoviesFail
} from '../action/moviesAction'

import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

import moviesApi from '../../apis/moviesApi'
import { takeEvery, put, fork, join, select, delay } from 'redux-saga/effects';

function* fetchFilterMovies() {
    try {
        yield put(showLoading())
        const { getAll } = moviesApi;
        const filterParams = yield select(state => state.filter);
        const forkTask = yield fork(getAll, filterParams);
        const { data } = yield join(forkTask);

        yield put(getFilterMoviesSuccess(data));
        yield delay(1000);
        yield put(hideLoading());
    } catch (error) {
        yield put(
            getFilterMoviesFail(error)
        );
    }
}

function* moviesSaga() {
    yield takeEvery(GET_FILTER_MOVIES_REQUEST, fetchFilterMovies);

}

export default moviesSaga;