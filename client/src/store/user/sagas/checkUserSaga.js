import { getUserInfoSaga } from "./getUserInfoSaga";
import { checkUserActions } from '../user.actions';
import requestSaga from "../../utils/requestSaga";
import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import { API_ROUTES } from "../../../../../endpoints/api.routes";
import { call, put } from "redux-saga/effects";


export function* checkUserSaga() {
    yield put(checkUserActions.startAC());
    try {
        const { user, accessToken } = yield call(requestSaga, {
            method: HTTP_METHOD.GET,
            url: API_ROUTES.CHECK_AUTH,
            headers: {
                "X-Verification-Code": 'verification_code'
            },
        });
        const userInfo = yield call(getUserInfoSaga, { payload: { userId: user._id }});

        yield put(checkUserActions.successAC({ 
            user: { ...user, ...userInfo }, 
            accessToken,
        }));
    } catch (err) {
        yield put(checkUserActions.failAC());
    }
}
