import { userReducerPath } from "./user.reducer";

const selector = (state) => state[userReducerPath];

export const getUserStatus = (state) => selector(state)?.status;
export const getStatusChecking = (state) => selector(state)?.statusChecking;
export const getUserInfo = (state) => selector(state)?.info;
export const getErrorMessage = (state) => selector(state)?.errorMessage;