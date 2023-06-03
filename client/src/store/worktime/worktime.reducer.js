import { getIntervalsActions, saveWorktimeActions } from "./worktime.actions";
import { STATUS, STATUS_DEFAULT } from "../utils/statusDefault";
import { createReducer } from "@reduxjs/toolkit";


export const worktimeReducerPath = 'worktime';

const initialState = {
    intervals: [],
    status: STATUS_DEFAULT,
}

export const worktimeReducer = createReducer(initialState, {
    [getIntervalsActions.startAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [getIntervalsActions.successAC]: (draft, action) => {
        draft.intervals = action.payload.intervals;
        draft.status = STATUS.SUCCESS;
    },
    [getIntervalsActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },

    [saveWorktimeActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;
    },
    [saveWorktimeActions.successAC]: (draft) => {
        draft.status = STATUS.SUCCESS;
    },
    [saveWorktimeActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    }
});
