import axiox from 'axios';

const initState = {

}

const PLACE_CHANGE = "PLACE_CHANGE"


export const HeaderReducer = (state = initState, action) => {
    switch (action.type) {
        case PLACE_CHANGE:
            return {
                ...state,
                ...action.data
            }
        default:
            return {
                ...state
            }
            break;
    }
}


export const placeChange = (buildingId) => {
    return dispatch => {
        dispatch({
            type: PLACE_CHANGE,
            data: {}
        })
    }
}