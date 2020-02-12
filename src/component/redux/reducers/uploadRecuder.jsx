import {
    FETCHING_UPLOAD_REQUEST,
    FETCHING_UPLOAD_SUCCESS,
    FETCHING_UPLOAD_FAILURE 
} from '../action/actionTypes';

const initialState = {
    errorMessage:"",
    uploads: []

}

const UploadReducer = (state = initialState, action ) => {
        switch (action.type) {
            case FETCHING_UPLOAD_REQUEST:
                return { ...state };
            
            case FETCHING_UPLOAD_FAILURE:
                return { ...state, errorMessage: action.payload};
            
            case FETCHING_UPLOAD_SUCCESS:
                return { ...state, uploads: action.payload};
                default:
                    return state;
    };
};

export default UploadReducer;
