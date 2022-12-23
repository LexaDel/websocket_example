import createAsyncActions from "../utils/createAsyncActions";

export const checkUserActions = createAsyncActions('CHECK_USER');
export const loginUserActions = createAsyncActions('LOGIN_USER');
export const registerUserActions = createAsyncActions('REGISTER_USER');