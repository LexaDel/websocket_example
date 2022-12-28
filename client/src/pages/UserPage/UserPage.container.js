import UserPage from "./UserPage";
import { getUserInfo, getUserStatus } from '../../store/user/user.selectors';
import { updateUserInfoActions } from "../../store/user/user.actions";
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
        status: getUserStatus(state),
    }),
    {
        updateUserInfo: updateUserInfoActions.triggerAC,
    }
)(UserPage);
