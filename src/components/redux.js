const FETCH_POST_REQUESTED = 'users/FETCH_POST_REQUESTED';
const FETCH_POSTS_SUCCEDED = "users/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "users/FETCH_POSTS_FAILED";

const fetchRequested = () => ({ type: FETCH_POST_REQUESTED });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });
const fetchSucced = data => ({ type: FETCH_POSTS_SUCCEDED, payload: data })

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    isError: false
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchRequested());
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => { 
                dispatch(fetchSucced(data.results.slice(0,10)))
            })
            .catch(error => {
                dispatch(fetchFailed());
            })
    }
}


export default function reducer( state = INITIAL_STATE, action ){
    switch(action.type){
        case FETCH_POST_REQUESTED:
            return {
                ...state, isLoading: true, isError: false
            };
        case FETCH_POSTS_SUCCEDED:
            return {
                ...state, isLoading: false, isError: false,
                users: action.payload
            };
        case FETCH_POSTS_FAILED:
            return {
                ...state, isLoading: false, isError: true
            };
        default:
            return state;
    }
}
//funkcja fetch
//akcje zmiany stanu