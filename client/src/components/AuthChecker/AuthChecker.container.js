import AuthChecker from "./AuthChecker";
import { checkUserActions } from '../../store/user/user.actions';
import { getStatusChecking } from '../../store/user/user.selectors';
import { connect } from "react-redux";


export default connect(
    (state) => ({
        status: getStatusChecking(state),
    }),
    {
        checkUser: checkUserActions.triggerAC,
    }
)(AuthChecker);
