import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, userReducerPath } from './user/user.reducer';


export default combineReducers({
    [userReducerPath]: userReducer,
});
