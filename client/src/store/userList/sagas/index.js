import { getUsersSaga } from "./getUsersSaga";
import { removeUserSaga } from "./removeUserSaga";
import { updateUserSaga } from "./updateUserSaga";
import watchSaga from "../../utils/watchSaga";
import { getUserListActions, updateUserActions, removeUserActions } from '../userList.actions';
import { all } from "redux-saga/effects";


function* watchUserListSagas() {
    yield all([
        watchSaga(
            getUserListActions,
            getUsersSaga,
        ),
        watchSaga(
            updateUserActions,
            updateUserSaga,
        ),
        watchSaga(
            removeUserActions,
            removeUserSaga,
        ),
    ]);
}

export default watchUserListSagas;
