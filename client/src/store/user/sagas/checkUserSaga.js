import axios from "axios";
import { call, put } from "redux-saga/effects";
import { checkUserActions } from '../user.actions';

export function* checkUserSaga() {
    yield put(checkUserActions.startAC());

    try {
        const response = yield call(axios, {
            method: 'get',
            url: 'api/auth',
            headers: {
                "X-Verification-Code": 'verification_code'
            }
        });

        yield put(checkUserActions.successAC(response.data));
    } catch (err) {
        yield put(checkUserActions.failAC());
    }
}