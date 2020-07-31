import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import createReducer from '../reducers'

// sagas
import {createUser, getUsers, showCreateModal, updateUser} from '../sagas/users'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(createReducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(getUsers);
sagaMiddleware.run(showCreateModal);
sagaMiddleware.run(createUser);
sagaMiddleware.run(updateUser);

export default store;
