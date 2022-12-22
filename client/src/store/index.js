import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga);

/*
export default (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
        enhancers,
        preloadedState,
    });

    sagaMiddleware.run(rootSaga);

    return store;
}
*/