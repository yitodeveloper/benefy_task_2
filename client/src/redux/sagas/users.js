import {put, call, takeLatest} from 'redux-saga/effects'
import {
    ERROR_NEW_USER, ERROR_UPDATE_USER,
    ERROR_USER_LIST,
    REQUEST_USER_LIST,
    SEND_NEW_USER, SEND_UPDATE_USER,
    SHOW_MODAL,
    SUCCESS_NEW_USER, SUCCESS_UPDATE_USER,
    SUCCESS_USER_LIST
} from "../actions/types";
import {fetchUsers, postUser, putUser} from '../../graphql';



export const getUsers = function* (){
    yield takeLatest(REQUEST_USER_LIST, function* () {

        try{
            const response = yield call(fetchUsers);
            yield put({ type: SUCCESS_USER_LIST, payload: response.data.data});
        }catch (e) {
            yield put({ type: ERROR_USER_LIST});
        }

    })
};

export const createUser = function* (){
    yield takeLatest(SEND_NEW_USER, function* (action) {
        try{
            const response = yield call(postUser, action.payload);
            yield put({ type: SUCCESS_NEW_USER, payload: response.data.data});
        }catch (e) {
            yield put({ type: ERROR_NEW_USER});
        }

    })
};

export const updateUser = function* (){
    yield takeLatest(SEND_UPDATE_USER, function* (action) {
        try{
            const response = yield call(putUser, action.payload);
            yield put({ type: SUCCESS_UPDATE_USER, payload: response.data.data});
            yield put({type: REQUEST_USER_LIST})
        }catch (e) {
            yield put({ type: ERROR_UPDATE_USER});
        }

    })
};

export const showCreateModal = function* showCreateModal(){
    yield takeLatest(SHOW_MODAL, () => {})
};
