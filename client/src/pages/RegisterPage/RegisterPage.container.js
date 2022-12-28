import RegisterPage from "./RegisterPage";
import { getUserInfo, getUserStatus } from '../../store/user/user.selectors';
import { registerUserActions } from "../../store/user/user.actions";
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
        status: getUserStatus(state),
    }),
    {
        register: registerUserActions.triggerAC,
    }
)(RegisterPage);
