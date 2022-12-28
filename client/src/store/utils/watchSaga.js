import {
    takeLeading,
    takeEvery,
    takeLatest,
    call,
} from 'redux-saga/effects';

export const WATCHER_SAGA_TYPE = {
    LEADING: 'LEADING',
    LATEST: 'LATEST',
    EVERY: 'EVERY',
};

function getStrategy(type) {
    switch(type) {
        case WATCHER_SAGA_TYPE.LEADING:
            return takeLeading;
        case WATCHER_SAGA_TYPE.LATEST:
            return takeLatest;
        case WATCHER_SAGA_TYPE.EVERY:
            return takeEvery;
        default:
            return takeLatest;
    }
}

function* watchSaga(
    listen,
    handlerSaga,
    options = {},
) {
    
    const trigger = listen.triggerAC || listen;
    const strategy = getStrategy(options.type);
    function* watcherSaga() {
        
        yield strategy(
            trigger.toString(),
            (...args) => safeCallSaga(() => call(handlerSaga, ...args))
        )
    }

    yield call(watcherSaga);
}

function* safeCallSaga(callFactory) {
    try {
        yield callFactory();
    } catch (err) {
        console.log(err);
    }
}

export default watchSaga;
