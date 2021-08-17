import {combineReducers} from 'redux'
import bannerReducer from './bannerReducer';
import moviesReducer from './moviesReducer';
import eventReducer from './eventReducer';
import filterReducer from './filterReducer';
import authReducer from '../reducer/authReducer'

export default combineReducers({
    banner: bannerReducer,
    movies: moviesReducer,
    event: eventReducer,
    filter: filterReducer,
    auth: authReducer
})