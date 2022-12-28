import { getUserInfoSaga } from "./getUserInfoSaga";
import { checkUserActions } from '../user.actions';
import axios from "axios";
import { call, put } from "redux-saga/effects";


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
        const userInfo = yield call(getUserInfoSaga, { payload: { userId: response.data.user._id }});

        yield put(checkUserActions.successAC({ user: { ...response.data.user, ...userInfo }}));
    } catch (err) {
        yield put(checkUserActions.failAC());
    }
}
