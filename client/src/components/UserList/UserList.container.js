import UserList from './UserList';
import { getStatus, getUserList } from '../../store/userList/userList.selectors';
import { getUserListActions } from '../../store/userList/userList.actions';
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        status: getStatus(state),
        list: getUserList(state),
    }),
    {
        getUserList: getUserListActions.triggerAC,
    }
)(UserList);
