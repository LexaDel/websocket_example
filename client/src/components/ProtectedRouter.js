import { Navigate, Outlet } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import { Spin } from 'antd';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isAuth: false,
            status: {
                loading: true,
            }
        }
    }

    componentDidMount() {
        axios.get('api/auth', {
            headers:{
                "X-Verification-Code": 'verification_code'
            }
        }).then((response) => {
            if (response.status === 200) {
                this.setState({
                    isAuth: true,
                    status: {
                        loading: false,
                    }
                });
            }
        }).catch(() => {
            this.setState({
                status: {
                    loading: false,
                }
            });
        });
    }

    render() {
        const { isAuth, status } = this.state;
        if (status.loading) {
            return <Spin />;
        }

        return isAuth ? <Outlet /> : <Navigate to='/login' />
    }
}

export default ProtectedRoute;