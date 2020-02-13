import {
    FETCHING_USER_REQUEST,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE,
} from '../action/actionTypes';

const initialState = {
    errorMessage:"",
    users: [],
    isLoading: false

}

const UserReducer = (state = initialState, action ) => {
        switch (action.type) {
            case FETCHING_USER_REQUEST:
                return { ...state , isLoading: true};
            
            case FETCHING_USER_FAILURE:
                return { ...state, isLoading: false, errorMessage: action.payload};
            
            case FETCHING_USER_SUCCESS:
                return { ...state, isLoading: false, users: action.payload};
                default:
                    return state;
    };
};

export default UserReducer;
