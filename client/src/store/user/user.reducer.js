import { 
    checkUserActions,
    loginUserActions,
    logoutActions,
    registerUserActions,
    updateUserInfoActions,
} from "./user.actions";
import { STATUS, STATUS_DEFAULT } from '../utils/statusDefault';
import { createReducer } from "@reduxjs/toolkit";


export const userReducerPath = 'user';

const initialState = {
    info: undefined,
    status: STATUS_DEFAULT,
    statusChecking: STATUS_DEFAULT,
    errorMessage: undefined,
    accessToken: undefined,
}

export const userReducer = createReducer(initialState, {
    [logoutActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;
    },
    [logoutActions.successAC]: () => initialState,
    [logoutActions.startAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },

    [checkUserActions.startAC]: (draft) => {
        draft.statusChecking = STATUS.LOADING;
    },
    [checkUserActions.successAC]: (draft, action) => {
        draft.info = action.payload.user;
        draft.accessToken = action.payload.accessToken;
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
        draft.accessToken = action.payload.accessToken;
        draft.status = STATUS.SUCCESS;
    },
    [loginUserActions.failAC]: (draft, action) => {
        draft.status = STATUS.FAIL;
        draft.errorMessage = action.payload.message;
    },
    
    [registerUserActions.startAC]: (draft) => {
        draft.errorMessage = undefined;
        draft.status = STATUS.PROCESSING;
    },
    [registerUserActions.successAC]: (draft, action) => {
        draft.info = action.payload.user;
        draft.accessToken = action.payload.accessToken;
        draft.status = STATUS.SUCCESS;
    },
    [registerUserActions.failAC]: (draft, action) => {
        draft.status = STATUS.FAIL;
        draft.errorMessage = action.payload.message;
    },

    [updateUserInfoActions.startAC]: (draft) => {
        draft.status = STATUS.PROCESSING;
    },
    [updateUserInfoActions.successAC]: (draft, action) => {
        draft.info = action.payload;
        draft.status = STATUS.SUCCESS;
    },
    [updateUserInfoActions.failAC]: (draft, action) => {
        draft.status = STATUS.FAIL;
        draft.errorMessage = action.payload.message;
    },
});
