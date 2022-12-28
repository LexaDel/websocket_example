import { loginUserActions } from '../user.actions';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';


export default function* loginUserSaga(action) {
    const { username, password } = action.payload;

    yield put(loginUserActions.startAC());

    try {
        const response = yield call(axios, {
            method: 'post',
            url: 'api/auth/login',
            data: {
                usernameOrEmail: username,
                password
            }
        });

        yield put(loginUserActions.successAC(response.data));
    } catch(err) {
        yield put(loginUserActions.failAC(err.response.data));
    }
}
