import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = () => (
    createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    )
);

const store = configureStore();

export default store;