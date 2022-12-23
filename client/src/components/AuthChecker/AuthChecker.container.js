import { connect } from "react-redux";
import AuthChecker from "./AuthChecker";
import { checkUserActions } from '../../store/user/user.actions';
import { getStatusChecking } from '../../store/user/user.selectors';

export default connect(
    (state) => ({
        status: getStatusChecking(state),
    }),
    {
        checkUser: checkUserActions.triggerAC,
    }
)(AuthChecker);