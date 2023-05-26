import Appointmets from "./Appointments";
import { getUserListActions } from "../../store/userList/userList.actions";
import { getStatus, getUserList } from "../../store/userList/userList.selectors";
import { connect } from "react-redux";


export default connect(
    (state) => ({
        status: getStatus(state),
        doctors: getUserList(state),
    }),
    {
        getUserList: getUserListActions.triggerAC,
    }
)(Appointmets);
