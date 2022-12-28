import { all } from "redux-saga/effects";
import watchUserSagas from "./user/sagas";

function* rootSaga() {
    yield all([
        watchUserSagas(),
    ])
}

export default rootSaga;
