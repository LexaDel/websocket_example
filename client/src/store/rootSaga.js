import watchUserSagas from "./user/sagas";
import watchUserListSagas from './userList/sagas/index';
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        watchUserSagas(),
        watchUserListSagas(),
    ])
}

export default rootSaga;
