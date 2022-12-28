import watchUserSagas from "./user/sagas";
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        watchUserSagas(),
    ])
}

export default rootSaga;
