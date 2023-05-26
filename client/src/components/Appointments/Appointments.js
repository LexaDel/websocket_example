import { ROLES } from "../../dictionaries/roles";
import { Button, Calendar, Col, Modal, Row, Select, Spin } from "antd";
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
        };
    }
    
    handleMakeAppointment = () => {
        this.setState({ isModalOpen: true });
    }

    handleOk = () => {
        this.setState({ isModalOpen: false });
    }

    handleCancel = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { status, doctors } = this.props;
        const { isModalOpen } = this.state;

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
                </Modal>
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
