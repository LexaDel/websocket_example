import { createReducer } from "@reduxjs/toolkit";
import { checkUserActions, loginUserActions } from "./user.actions";
import { STATUS, STATUS_DEFAULT } from '../utils/statusDefault';

export const userReducerPath = 'user';

const initialState = {
    info: undefined,
    status: STATUS_DEFAULT,
    statusChecking: STATUS_DEFAULT,
    errorMessage: undefined,
}

export const userReducer = createReducer(initialState, {
    [checkUserActions.startAC]: (draft) => {
        draft.statusChecking = STATUS.LOADING;
    },
    [checkUserActions.successAC]: (draft, action) => {
        draft.info = action.payload.user;
        draft.statusChecking = STATUS.SUCCESS;
    },
    [checkUserActions.failAC]: (draft) => {
        draft.statusChecking = STATUS.FAIL;
    },
    [loginUserActions.startAC]: (draft) => {
        draft.errorMessage = undefined;
        draft.status = STATUS.PROCESSING;
    },
    [loginUserActions.successAC]: (draft, action) => {
        draft.info = action.payload.user;
        draft.status = STATUS.SUCCESS;
    },
    [loginUserActions.failAC]: (draft, action) => {
        draft.status = STATUS.FAIL;
        draft.errorMessage = action.payload.message;
    }
})