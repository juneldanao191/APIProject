
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


export const fetchUsers = (search) => {
    return async function (dispatch){
        dispatch(fetchingUserRequest());
        try {
            let url = 'http://localhost:3000/users';
            if(search) {
                // url = url + 'q=' + search
                url += `?q=${search}`;
            }
            const response = await fetch(url);
            const fetchData = await response.json();
            dispatch(fetchingUserSuccess(fetchData));
            console.log(fetchData)
            
        } catch(error) {
            dispatch(fetchingUserFailure(error))
        }
    };
}
