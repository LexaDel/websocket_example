import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = () => (
      sessionStorage.getItem("token")
        ? <Outlet />
        : <Navigate to='/register' />
);

ProtectedRoute.propTypes = {
    component: PropTypes.node,
}

export default ProtectedRoute;