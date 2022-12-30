import DashboardPage from './DashboardPage';
import { getUserInfo } from '../../store/user/user.selectors';
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        userInfo: getUserInfo(state),
    }),
    undefined
)(DashboardPage);
