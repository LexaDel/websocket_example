import { userReducer, userReducerPath } from './user/user.reducer';
import { userListReducer, userListReducerPath } from './userList/userList.reducer';
import { combineReducers } from "@reduxjs/toolkit";


export default combineReducers({
    [userReducerPath]: userReducer,
    [userListReducerPath]: userListReducer,
});
