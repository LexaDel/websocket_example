import { getUserListActions } from "./userList.actions";
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
});
