import { ROLES } from "../../dictionaries/roles";
import { getExcludedTime } from "../../utils/dates";
import RegisterWorktimeModalContainer from "../RegisterWorktimeModal/RegisterWorktimeModal.container";
import { 
    Button, 
    Calendar, 
    Col, 
    DatePicker, 
    Modal, 
    Row, 
    Select, 
    Spin
 } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { Component } from "react";
import { PropTypes } from 'prop-types';


const cssPrefix = 'appointmets';

class Appointmets extends Component {
    constructor(props) {
        super(props);

        props.getUserList({ role: ROLES.DOCTOR });

        this.state = {
            isModalOpen: false,
            isModalRegisterWorktimeOpen: false,
        };
    }
    
    handleMakeAppointment = () => {
        this.setState({ isModalOpen: true });
    }

    handleRegisterWorktime = () => {
        this.setState({ isModalRegisterWorktimeOpen: true });
    }
 
    handleOk = () => {
        this.setState({ 
            isModalOpen: false,
            isModalRegisterWorktimeOpen: false,
        });
    }

    handleCancel = () => {
        this.setState({ 
            isModalOpen: false,
            isModalRegisterWorktimeOpen: false,
        });
    }

    disableTime = () => {
        // с бека придет время работы врача
        // так же придут записи
        // надо сначала оставить только рабочее время 
        // далее надо исключить время на которое стоят записи

        // придет в формате range[begin,end]
        const workTime = [10,13];
        console.log(getExcludedTime(workTime));
        return getExcludedTime(workTime);
    }

    render() {
        const { status, doctors } = this.props;
        const { isModalOpen, isModalRegisterWorktimeOpen } = this.state;

        if(!status.success) {
            return <Spin size="large" />;
        }

        const options = doctors?.map((doctor) => ({ 
            value: doctor.id,
            label: `${doctor.firstname} ${doctor.secondname}` || doctor.name,
        }));

        return (
            <div className={cssPrefix}>
                <Row>
                    <Col>
                        <ButtonGroup>
                            <Button onClick={this.handleMakeAppointment}>Make an appointment</Button>
                            <Button>Remove appointment</Button>
                            <Button onClick={this.handleRegisterWorktime}>Register worktime</Button>
                        </ButtonGroup>
                    </Col> 
                    <Col flex="auto">
                        <Calendar />
                    </Col> 
                </Row>
                <Modal
                    title="Make an appointment"
                    open={isModalOpen} 
                    onOk={this.handleOk} 
                    onCancel={this.handleCancel}
                >
                    <Select 
                        showSearch
                        style={{
                            width: 150,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        options={options}
                    />
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        disabledTime={() => ({
                            disabledHours: this.disableTime,
                            disabledMinutes: () => {
                                return [0,1,30, 31]
                            }
                        })}
                        showTime={{
                            hideDisabledOptions: true,
                        }}
                    />
                </Modal>
                <RegisterWorktimeModalContainer
                    isModalOpen={isModalRegisterWorktimeOpen}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                />
            </div>     
        );
    }
}

Appointmets.propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.shape()),
    status: PropTypes.shape().isRequired,
    getUserList: PropTypes.func.isRequired,
};

Appointmets.defaultProps = {
    doctors: undefined,
};

export default Appointmets;
