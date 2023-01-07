import { getUserListActions, removeUserActions, updateUserActions } from "./userList.actions";
import { STATUS } from "../utils/statusDefault";
import { createReducer } from "@reduxjs/toolkit";


export const userListReducerPath = 'userList';

const initialState = {
    list: undefined,
    status: STATUS.LOADING,
}

export const userListReducer = createReducer(initialState, {
    [getUserListActions.startAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [getUserListActions.successAC]: (draft, action) => {
        draft.list = action.payload;
        draft.status = STATUS.SUCCESS;
    },
    [getUserListActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },

    [updateUserActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;

    },
    [updateUserActions.successAC]: (draft, action) => {
        draft.list = action.payload;
        draft.status = STATUS.SUCCESS;
    },
    [updateUserActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },

    [removeUserActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;

    },
    [removeUserActions.successAC]: (draft, action) => {
        draft.list = action.payload;
        draft.status = STATUS.SUCCESS;
    },
    [removeUserActions.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },
});
