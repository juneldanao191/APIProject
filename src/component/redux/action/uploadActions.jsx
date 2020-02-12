import {
     FETCHING_UPLOAD_REQUEST,
     FETCHING_UPLOAD_SUCCESS,
     FETCHING_UPLOAD_FAILURE 
} from './actionTypes';

export const fetchingUploadRequest = () => ({ 
    type: FETCHING_UPLOAD_REQUEST
 });

export const fetchingUploadSuccess = (uploads) => ({
    type: FETCHING_UPLOAD_SUCCESS,
    payload: uploads,
});

export const fetchingUploadFailure = (error) => ({
    type: FETCHING_UPLOAD_FAILURE,
    payload: error,
});


export const fetchUploads = () => {
    return async function (dispatch){
        dispatch(fetchingUploadRequest());
        try {
            const response = await fetch('https://api.mixcloud.com/junel-danao/cloudcasts/');
            const fetchData = await response.json();
            dispatch(fetchingUploadSuccess(fetchData.data));
            console.log(fetchData.data)
        } catch(error) {
            dispatch(fetchingUploadFailure(error))
        }
    };
}
