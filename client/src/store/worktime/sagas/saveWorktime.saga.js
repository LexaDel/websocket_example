import requestSaga from "../../utils/requestSaga";
import { HTTP_METHOD } from "../../../dictionaries/httpMethods";
import { API_ROUTES } from "../../../endpoints/api.routes";
import { saveWorktimeActions } from "../worktime.actions";
import { getUserInfo } from '../../user/user.selectors';
import { call, select } from "redux-saga/effects";


export function* saveWorktimeSaga(action) {
    const { worktimes } = action.payload;
    const { _id: userId } = yield select(getUserInfo);
    console.log(worktimes);

    yield call(requestSaga, {
        method: HTTP_METHOD.POST,
        url: API_ROUTES.SAVE_WORKTIMES,
        payload: {
            worktimes,
            userId,
        },
        actions: saveWorktimeActions,
    });
}
