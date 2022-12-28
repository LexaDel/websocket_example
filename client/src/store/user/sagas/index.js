import { all } from "redux-saga/effects";
import watchSaga from "../../utils/watchSaga";
import { checkUserActions, loginUserActions, registerUserActions, updateUserInfoActions } from '../user.actions';
import { checkUserSaga } from "./checkUserSaga";
import loginUserSaga from "./loginUserSaga";
import registerUserSaga from "./registerUserSaga";
import { updateUserInfoSaga } from "./updateUserInfoSaga";

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
        ),
        watchSaga(
            updateUserInfoActions,
            updateUserInfoSaga,
        )
    ]);
}

export default watchUserSagas;
