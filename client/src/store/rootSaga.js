import watchUserSagas from "./user/sagas";
import watchUserListSagas from './userList/sagas/index';
import watchWorktimeSagas from "./worktime/sagas";
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        watchUserSagas(),
        watchUserListSagas(),
        watchWorktimeSagas(),
    ])
}

export default rootSaga;
