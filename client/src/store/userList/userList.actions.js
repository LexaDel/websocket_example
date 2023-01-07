import createAsyncActions from "../utils/createAsyncActions";


export const getUserListActions = createAsyncActions('GET_USER_LIST');
export const updateUserActions = createAsyncActions('UPDATE_USER_INFO');
export const removeUserActions = createAsyncActions('REMOVE_USER');
