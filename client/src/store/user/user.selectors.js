import { userReducerPath } from "./user.reducer";

const selector = (state) => state[userReducerPath];

export const getUserStatus = (state) => selector(state)?.status;
export const getUserInfo = (state) => selector(state)?.info;