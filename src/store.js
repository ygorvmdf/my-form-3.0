import { createStore, combineReducers } from 'redux';
import warningReducer from './warningReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({ infoReducer, warningReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
