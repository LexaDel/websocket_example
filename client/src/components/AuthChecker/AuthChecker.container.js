import { connect } from "react-redux";
import AuthChecker from "./AuthChecker";
import { checkUserActions } from '../../store/user/user.actions';
import { getUserStatus } from '../../store/user/user.selectors';

export default connect(
    (state) => ({
        status: getUserStatus(state),
    }),
    {
        checkUser: checkUserActions.triggerAC,
    }
)(AuthChecker);