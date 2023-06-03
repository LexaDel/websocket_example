import { getIntervalsSaga } from "./getIntervals.saga";
import { saveWorktimeSaga } from "./saveWorktime.saga";
import watchSaga from "../../utils/watchSaga";
import { getIntervalsActions, saveWorktimeActions } from "../worktime.actions";
import { all } from "redux-saga/effects";


function* watchWorktimeSagas() {
    yield all([
        watchSaga(
            getIntervalsActions,
            getIntervalsSaga,
        ),
        watchSaga(
            saveWorktimeActions,
            saveWorktimeSaga,
        ),
    ]);
}

export default watchWorktimeSagas;
