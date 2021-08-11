import {
    GET_EVENT_REQUEST,
    GET_EVENT_SUCCESS,
    GET_EVENT_FAIL
} from '../action/eventAction'

const initialState = {
    event: [],
    error: null
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT_REQUEST: {
            return {
                ...state,
                event: [],
                error: null
            }
        }

        case GET_EVENT_SUCCESS: {
            return {
                ...state,
                event: action.payload,
                error: null
            }
        }

        case GET_EVENT_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }
}

export default eventReducer;