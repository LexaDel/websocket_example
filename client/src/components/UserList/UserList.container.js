import UserList from './UserList';
import { getStatus, getUserList } from '../../store/userList/userList.selectors';
import { getUserListActions, updateUserActions, removeUserActions } from '../../store/userList/userList.actions';
import { connect } from 'react-redux';


export default connect(
    (state) => ({
        status: getStatus(state),
        list: getUserList(state),
    }),
    {
        getUserList: getUserListActions.triggerAC,
        save: updateUserActions.triggerAC,
        remove: removeUserActions.triggerAC,
    }
)(UserList);
