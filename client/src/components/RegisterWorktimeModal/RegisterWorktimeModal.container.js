import RegisterWorktimeModal from "./RegisterWorktimeModal";
import { getIntervals, getStatus } from '../../store/worktime/worktime.selectors';
import { getIntervalsActions, saveWorktimeActions } from "../../store/worktime/worktime.actions";
import { connect } from "react-redux";


export default connect(
    (state) => ({
        status: getStatus(state),
        intervals: getIntervals(state),
    }),
    {
        getIntervals: getIntervalsActions.triggerAC,
        saveWorktime: saveWorktimeActions.triggerAC,
    }
)(RegisterWorktimeModal);
