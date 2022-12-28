import axios from "axios";
import { call } from "redux-saga/effects";

export function* getUserInfoSaga(action) {
    const { userId } = action.payload;
    try {
        const response = yield call(axios, {
            method: 'get',
            url: 'api/v1/data/user',
            params: {
                userId,
            }
        });

        return response.data;
    } catch (err) {
        ///
    }
}