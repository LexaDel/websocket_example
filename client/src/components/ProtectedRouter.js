import { Navigate, Outlet } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getUserStatus } from '../store/user/user.selectors';
import { PropTypes } from 'prop-types';

class ProtectedRoute extends Component {
    render() {
        const { userInfo, status } = this.props;
        if (status.loading) {
            return <Outlet />;
        }

        return userInfo ? <Outlet /> : <Navigate to='/login' />
    }
}

ProtectedRoute.propTypes = {
    userInfo: PropTypes.shape(),
    status: PropTypes.shape(),
}

export default connect((state) => ({
    userInfo: getUserInfo(state),
    status: getUserStatus(state),
}), {})(ProtectedRoute);