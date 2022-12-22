import { all } from "redux-saga/effects";
import watchSaga from "../../utils/watchSaga";
import { checkUserActions, loginUserActions } from '../user.actions';
import { checkUserSaga } from "./checkUserSaga";
import loginUserSaga from "./loginUserSaga";

function* watchUserSagas() {
    yield all([
        watchSaga(
            checkUserActions,
            checkUserSaga,
        ),
        watchSaga(
            loginUserActions,
            loginUserSaga,
        )
    ]);
}

export default watchUserSagas;