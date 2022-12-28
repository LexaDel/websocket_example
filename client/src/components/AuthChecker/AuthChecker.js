import { Component } from "react";
import { PropTypes } from 'prop-types';
import { Spin } from "antd";

class AuthChecker extends Component {
    constructor(props) {
        super(props);

        if (!props.status.success) {
            props.checkUser();
        }
    }

    render() {
        const { status, children } = this.props;
        if (status.loading) {
            return <Spin size="large" />
        }

        return children;
    }
}

AuthChecker.propTypes = {
    children: PropTypes.node.isRequired,
    status: PropTypes.shape().isRequired,
    checkUser: PropTypes.func.isRequired
};

export default AuthChecker;
