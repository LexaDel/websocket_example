import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { call } from "redux-saga/effects";


export function* getUserInfoSaga(action) {
    const { userId } = action.payload;
    
    return yield call(requestSaga, {
        method: HTTP_METHOD.GET,
        url: 'api/v1/data/user',
        query: {
            userId,
        }
    });
}
