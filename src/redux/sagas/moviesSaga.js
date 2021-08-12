import {
    GET_FILTER_MOVIES_REQUEST,
    getFilterMoviesSuccess,
    getFilterMoviesFail
} from '../action/moviesAction'

import moviesApi from '../../apis/moviesApi'
import { takeEvery, put, fork, join, select } from 'redux-saga/effects';

function* fetchFilterMovies() {
    try {
        const { getAll } = moviesApi;
        const filterParams = yield select(state => state.filter);
        const forkTask = yield fork(getAll, filterParams);
        const { data } = yield join(forkTask);

        yield put(getFilterMoviesSuccess(data));
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getFilterMoviesFail(error)
        );
    }
}

function* moviesSaga() {
    yield takeEvery(GET_FILTER_MOVIES_REQUEST, fetchFilterMovies);

}

export default moviesSaga;