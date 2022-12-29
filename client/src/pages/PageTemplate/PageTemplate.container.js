import PageTemplate from './PageTemplate';
import { getUserInfo } from '../../store/user/user.selectors';
import { logoutActions } from "../../store/user/user.actions";
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
    }),
    {
        logout: logoutActions.triggerAC,
    }
)(PageTemplate);
