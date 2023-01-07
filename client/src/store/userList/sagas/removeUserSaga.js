import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { removeUserActions } from "../userList.actions";
import { getAccessToken } from "../../user/user.selectors";
import { call, select } from "redux-saga/effects";


export function* removeUserSaga(action) {
    const { userId } = action.payload;
    const token = yield select(getAccessToken);

    yield call(requestSaga, {
        method: HTTP_METHOD.DELETE,
        url: API_ROUTES.DELETE_USER,
        actions: removeUserActions,
        params: {
            userId,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
