export const GET_EVENT_REQUEST = "GET_EVENT_REQUEST";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_FAIL = "GET_EVENT_FAIL";

export const getEventRequest = () => {
    return { 
        type: GET_EVENT_REQUEST
    }
}

export const getEventSuccess = (eventData) => {
    return {
        type: GET_EVENT_SUCCESS,
        payload: eventData
    }
}

export const getEventFail = (error) => {
    return {
        type: GET_EVENT_FAIL,
        payload: error
    }
}