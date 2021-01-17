import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authreducer';

const reducers = combineReducers({

    // Reducers List
    auth: authReducer,
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);