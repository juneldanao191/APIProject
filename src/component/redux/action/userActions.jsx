
import {
     FETCHING_USER_REQUEST,
     FETCHING_USER_SUCCESS,
     FETCHING_USER_FAILURE 
} from './actionTypes';

export const fetchingUserRequest = () => ({ 
    type: FETCHING_USER_REQUEST
 });

export const fetchingUserSuccess = (users) => ({
    type: FETCHING_USER_SUCCESS,
    payload: users,
});

export const fetchingUserFailure = (error) => ({
    type: FETCHING_USER_FAILURE,
    payload: error,
});


export const fetchUsers = () => {
    return async function (dispatch){
        dispatch(fetchingUserRequest());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/?_limit=50');
            const fetchData = await response.json();
            dispatch(fetchingUserSuccess(fetchData));
            console.log(fetchData)
        } catch(error) {
            dispatch(fetchingUserFailure(error))
        }
    };
}
