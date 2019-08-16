import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE
} from "../actions"

const initialState = {
    smurfs: [],
    error: "",
    isLoading: false
}

export const reducer = (state = initialState, action) =>{
    // console.log("action", action)
    switch(action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                error: "",
                isLoading: true
            }
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                smurfs: []
            }


        default:
            return state
    }
}