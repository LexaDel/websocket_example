import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import requestSaga from "../../utils/requestSaga";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { getIntervalsActions } from "../worktime.actions";
import { call } from "redux-saga/effects";


export function* getIntervalsSaga() {
    yield call(requestSaga, {
        method: HTTP_METHOD.GET,
        url: API_ROUTES.GET_INTERVALS,
        actions: getIntervalsActions,
    });
}
