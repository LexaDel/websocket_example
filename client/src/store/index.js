import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));


export default (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
        enhancer,
        preloadedState,
    });

    sagaMiddleware.run(rootSaga);

    return store;
}
