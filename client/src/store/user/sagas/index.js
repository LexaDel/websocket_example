import { all } from "redux-saga/effects";
import watchSaga from "../../utils/watchSaga";
import { checkUserActions, loginUserActions, registerUserActions } from '../user.actions';
import { checkUserSaga } from "./checkUserSaga";
import loginUserSaga from "./loginUserSaga";
import registerUserSaga from "./registerUserSaga";

function* watchUserSagas() {
    yield all([
        watchSaga(
            checkUserActions,
            checkUserSaga,
        ),
        watchSaga(
            loginUserActions,
            loginUserSaga,
        ),
        watchSaga(
            registerUserActions,
            registerUserSaga,
        )
    ]);
}

export default watchUserSagas;