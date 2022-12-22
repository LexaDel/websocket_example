import { createReducer } from "@reduxjs/toolkit";
import { checkUserActions, loginUserActions } from "./user.actions";
import { STATUS, STATUS_DEFAULT } from '../utils/statusDefault';

export const userReducerPath = 'user';

const initialState = {
    info: undefined,
    status: STATUS_DEFAULT,
}

export const userReducer = createReducer(initialState, {
    [checkUserActions.startAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [checkUserActions.successAC]: (draft, action) => {
        console.log(action.payload.user);
        draft.info = action.payload.user;
        draft.status = STATUS.SUCCESS;
    },
    [checkUserActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },
    [loginUserActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;
    },
    [loginUserActions.successAC]: (draft, action) => {
        draft.info = action.payload.user;
        draft.status = STATUS.SUCCESS;
    },
    [loginUserActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    }
})