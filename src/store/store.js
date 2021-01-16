import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authreducer';

const reducers = combineReducers({

    // Reducers List
    auth: authReducer,
});

export const store = createStore(reducers);