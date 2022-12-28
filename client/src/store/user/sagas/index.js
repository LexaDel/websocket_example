import { checkUserSaga } from "./checkUserSaga";
import loginUserSaga from "./loginUserSaga";
import registerUserSaga from "./registerUserSaga";
import { updateUserInfoSaga } from "./updateUserInfoSaga";
import { checkUserActions, loginUserActions, registerUserActions, updateUserInfoActions } from '../user.actions';
import watchSaga from "../../utils/watchSaga";
import { all } from "redux-saga/effects";


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
