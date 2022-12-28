import { registerUserActions } from '../user.actions';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';


export default function* registerUserSaga(action) {
    const { username, email, password } = action.payload;

    yield put(registerUserActions.startAC());

    try {
        const response = yield call(axios, {
            method: 'post',
            url: 'api/auth/register',
            data: {
                username,
                email,
                password
            }
        });

        yield put(registerUserActions.successAC(response.data));
    } catch (err) {
        yield put(registerUserActions.failAC(err.response.data));
    }
}
