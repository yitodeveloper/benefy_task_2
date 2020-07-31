import {combineReducers} from 'redux';

import users from './users.reducer'

const createReducer = () => {

    return combineReducers({
        users,
    })
};

export default createReducer;
