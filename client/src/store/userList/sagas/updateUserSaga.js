import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { updateUserActions } from "../userList.actions";
import { call } from "redux-saga/effects";


export function* updateUserSaga(action) {
    const { userId, firstName, secondName } = action.payload;

    yield call(requestSaga, {
        method: HTTP_METHOD.PATCH,
        url: API_ROUTES.PATCH_USER_INFO,
        actions: updateUserActions,
        params: {
            userId,
        },
        payload: {
            firstName,
            secondName,
        },
    });
}
