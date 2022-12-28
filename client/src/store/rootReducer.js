import { userReducer, userReducerPath } from './user/user.reducer';
import { combineReducers } from "@reduxjs/toolkit";


export default combineReducers({
    [userReducerPath]: userReducer,
});
