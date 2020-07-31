import {
    HIDE_MODAL,
    REQUEST_USER_LIST,
    SEND_NEW_USER,
    SHOW_MODAL,
    SUCCESS_NEW_USER, SUCCESS_UPDATE_USER,
    SUCCESS_USER_LIST
} from "../actions/types";

const initialState = {
    isLoading: false,
    isLoadingCreate: false,
    isLoadingUpdate: false,
    users: [],
    isOpenCreateModal: false,
};


function usersReducer (state = initialState, action){
    switch(action.type){
        case REQUEST_USER_LIST:
        {
            return {
                ...state,
                isLoading: true,
            }
        }
        case SHOW_MODAL:
        {
            return {
                ...state,
                isOpenCreateModal: true,
            }
        }
        case HIDE_MODAL:
        {
            return {
                ...state,
                isOpenCreateModal: false,
            }
        }
        case SUCCESS_USER_LIST:
        {
            return {
                ...state,
                isLoading: false,
                users: action.payload.users,
            }
        }
        case SEND_NEW_USER: {
            return {
                ...state,
                isLoadingCreate: false,
            }
        }
        case SUCCESS_NEW_USER: {
            return {
                ...state,
                isLoadingCreate: false,
                users: [...state.users, action.payload.createUser],
            }
        }
        case SUCCESS_UPDATE_USER:{
            return {
                ...state,
                isLoadingUpdate: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default usersReducer;
