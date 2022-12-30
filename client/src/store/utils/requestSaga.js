import { call, put } from "redux-saga/effects";
import axios from 'axios';
import { generatePath } from "react-router";


function defaultPayloadHandler(payload) {
    return payload;
}

export default function* requestSaga(options = {}) {
    const {
        method,
        url,
        query,
        params = {},
        payload,
        headers,
        actions,
        payloadHandler = defaultPayloadHandler,
        startPayloadHandler = payloadHandler,
        failPayloadHandler = payloadHandler,
        successPayloadHandler = payloadHandler,
        responseProcessor,
    } = options;

    try {
        if (actions) {
            yield put(actions.startAC(startPayloadHandler()))
        }
        const response = yield call(axios, {
            method,
            url: generatePath(url, params),
            params: query,
            data: payload,
            headers,
        })
        
        const responseData = responseProcessor ? responseProcessor(response) : response.data;

        if (actions) {
            yield put(actions.successAC(successPayloadHandler(responseData)))
        }

        return responseData;
    } catch (e) {
        if (actions) {
            yield put(actions.failAC(failPayloadHandler()))
        }
    }

}
