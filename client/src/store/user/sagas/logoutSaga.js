import { getAccessToken } from "../user.selectors";
import { logoutActions } from "../user.actions";
import { call, put, select } from "redux-saga/effects";
import axios from 'axios';


export default function* logoutSaga() {
    const token = yield select(getAccessToken);

    yield put(logoutActions.startAC());

    try {
        yield call(axios, {
            method: 'get',
            url: 'api/auth/logout',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        yield put(logoutActions.successAC());
    } catch (e) {
        yield put(logoutActions.failAC());
    }


}
