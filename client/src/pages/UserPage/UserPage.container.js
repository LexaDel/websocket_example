import { getUserInfo, getUserStatus } from '../../store/user/user.selectors';
import { connect } from 'react-redux';
import { updateUserInfoActions } from "../../store/user/user.actions";
import UserPage from "./UserPage";

export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
        status: getUserStatus(state),
    }),
    {
        updateUserInfo: updateUserInfoActions.triggerAC,
    }
)(UserPage);