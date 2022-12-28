import RegisterPage from "./RegisterPage";
import { getUserInfo, getUserStatus } from '../../store/user/user.selectors';
import { connect } from 'react-redux';
import { registerUserActions } from "../../store/user/user.actions";

export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
        status: getUserStatus(state),
    }),
    {
        register: registerUserActions.triggerAC,
    }
)(RegisterPage);
