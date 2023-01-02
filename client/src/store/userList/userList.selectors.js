import { userListReducerPath } from "./userList.reducer";


const selector = (state) => state[userListReducerPath];

export const getStatus = (state) => selector(state)?.status;
export const getUserList = (state) => selector(state)?.list;
