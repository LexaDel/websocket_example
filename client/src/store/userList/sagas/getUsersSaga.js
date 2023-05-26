import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { getUserListActions } from "../userList.actions";
import { call } from "redux-saga/effects";


export function* getUsersSaga(action) {
    const { 
        payload: {
            role = undefined,   
        } = {},
    } = action;

    yield call(requestSaga, {
        method: HTTP_METHOD.GET,
        url: API_ROUTES.GET_USER_LIST,
        query: {
            role: role || 'all',
        },
        actions: getUserListActions,
    });
}
