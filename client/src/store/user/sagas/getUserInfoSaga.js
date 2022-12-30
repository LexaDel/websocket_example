import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { call } from "redux-saga/effects";


export function* getUserInfoSaga(action) {
    const { userId } = action.payload;
    
    return yield call(requestSaga, {
        method: HTTP_METHOD.GET,
        url: API_ROUTES.USER_INFO,
        params: {
            userId,
        }
    });
}
