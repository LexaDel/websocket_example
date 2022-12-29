import { getAccessToken } from "../user.selectors";
import { logoutActions } from "../user.actions";
import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { call, select } from "redux-saga/effects";


export default function* logoutSaga() {
    const token = yield select(getAccessToken);

    yield call(requestSaga, {
        method: HTTP_METHOD.GET,
        url: 'api/auth/logout',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        actions: logoutActions,
    });
}
