import WorktimeItem from './_WorktimeItem/WorktimeItem';
import { Modal } from "antd";
import { PureComponent } from "react";
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';


class RegisterWorktimeModal extends PureComponent {
    constructor(props) {
        super(props);

        if (!props.intervals.length) {
            props.getIntervals();
        }

        this.state = {
            worktimeList: [{
                id: uuidv4(),
                startTime: dayjs(),
                endTime: dayjs(),
                interval: undefined,
            }],
        }
    }

    handleAddNewWorktime = () => {
        const { worktimeList } = this.state;

        this.setState({ worktimeList: [
            ...worktimeList,
            {
                id: uuidv4(),
                startTime: dayjs(),
                endTime: dayjs(),
                interval: undefined,
            }
        ] });
    }

    handleRemoveWorktime = (id) => {
        const { worktimeList } = this.state;

        this.setState({
            worktimeList: worktimeList.filter((item) => item.id !== id),
        })
    }

    handleSaveWorktime = () => {
        const { saveWorktime, handleOk } = this.props;
        const { worktimeList } = this.state;
        const worktimes = worktimeList.map((worktime) => {
            return {
                ...worktime,
                startTime: worktime.startTime.toISOString(),
                endTime: worktime.endTime.toISOString(),
            }
        });

        saveWorktime({ worktimes});
        handleOk();
    }

    handleChange = (id, data) => {
        const { worktimeList } = this.state;
        const newWorktimeList = worktimeList.map((worktime) => {
            if (worktime.id === id) {
                return {
                    ...worktime,
                    ...data,
                }
            }
            return worktime;
        });

        this.setState({ worktimeList: newWorktimeList });
    }

    render() {
        const { 
            isModalOpen,
            handleCancel,
            intervals,
        } = this.props;
        const { worktimeList } = this.state;

        return (
            <Modal
                title="Register worktime"
                open={isModalOpen} 
                onOk={this.handleSaveWorktime} 
                onCancel={handleCancel}
            >
                {worktimeList.map((item, index) => {
                    return (
                        <WorktimeItem 
                            key={item.id}
                            item={item}
                            isLastItem={index === worktimeList.length - 1}
                            handleAdd={this.handleAddNewWorktime}
                            handleRemove={this.handleRemoveWorktime}
                            handleChange={this.handleChange}
                            intervals={intervals}
                        />
                    )
                })}
                
            </Modal>
        );
    }
}

RegisterWorktimeModal.propTypes = {
    isModalOpen: PropTypes.bool,
    intervals: PropTypes.arrayOf(PropTypes.number),
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    getIntervals: PropTypes.func.isRequired,
    saveWorktime: PropTypes.func.isRequired,
    status: PropTypes.shape().isRequired,
};

RegisterWorktimeModal.defaultProps = {
    isModalOpen: false,
    intervals: [],
};

export default RegisterWorktimeModal;
