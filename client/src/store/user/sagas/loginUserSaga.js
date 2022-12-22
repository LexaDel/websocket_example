import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { loginUserActions } from '../user.actions';

export default function* loginUserSaga(action) {
    const { usernameOrEmail, password } = action.payload;

    yield put(loginUserActions.startAC());

    try {
        const response = yield call(axios, {
            method: 'post',
            url: 'api/auth/login',
            data: {
                usernameOrEmail,
                password
            }
        });

        yield put(loginUserActions.successAC(response.data));
    } catch(err) {
        yield put(loginUserActions.failAC());
    }
}