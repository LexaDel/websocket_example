import createAsyncActions from "../utils/createAsyncActions";

export const checkUserActions = createAsyncActions('CHECK_USER');
export const loginUserActions = createAsyncActions('LOGIN_USER');
export const registerUserActions = createAsyncActions('REGISTER_USER');
export const getUserInfoActions = createAsyncActions('GET_USER_INFO');
export const updateUserInfoActions = createAsyncActions('PATCH_USER_INFO');
