import { getUsersSaga } from "./getUsersSagas";
import watchSaga from "../../utils/watchSaga";
import { getUserListActions } from '../userList.actions';
import { all } from "redux-saga/effects";


function* watchUserListSagas() {
    yield all([
        watchSaga(
            getUserListActions,
            getUsersSaga,
        ),
    ]);
}

export default watchUserListSagas;
