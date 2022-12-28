
import { call, put } from 'redux-saga/effects';
import { updateUserInfoActions } from '../user.actions';
import axios from 'axios';


export function* updateUserInfoSaga(action) {
    const { userId, firstName, secondName } = action.payload;
    // change pass userId to params

    yield put(updateUserInfoActions.startAC());

    try {
        const response = yield call(axios, {
            method: 'patch',
            url: 'api/v1/data/user',
            data: {
                userId,
                firstName,
                secondName,
            }
        });
        yield put(updateUserInfoActions.successAC(response.data));
    } catch (err) {
        yield put(updateUserInfoActions.failAC());
    }
}
