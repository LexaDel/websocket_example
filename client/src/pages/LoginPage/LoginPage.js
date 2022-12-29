import PageTemplateContainer from '../PageTemplate/PageTemplate.container';
import { loginUserActions } from '../../store/user/user.actions';
import { getErrorMessage, getUserInfo, getUserStatus } from '../../store/user/user.selectors';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Component } from 'react'; 
import './LoginPage.sass';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


class LoginPage extends Component {
    onLogin = (values) => {
        const { login } = this.props;
        const { username, password } = values;

        login({ username, password });
    }

    onLoginFailed = () => {

    }

    render() {
        const { userInfo, status, errorMessage } = this.props;
        if (userInfo) {
            return <Navigate to="/" />;
        }

        return (
            <PageTemplateContainer>
                <Form
                    className="login-form"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onLogin}
                    onFinishFailed={this.onLoginFailed}
                >
                    <Form.Item
                        name="username"
                        validateStatus={errorMessage && 'error'}
                        help={errorMessage}
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            loading={status.processing}
                            
                        >
                            Log in
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                </Form>
            </PageTemplateContainer>
        )
    }
}

LoginPage.propTypes = {
    userInfo: PropTypes.shape(),
    login: PropTypes.func.isRequired,
    status: PropTypes.shape().isRequired,
    errorMessage: PropTypes.string,
}

export default connect((state) => ({
    userInfo: getUserInfo(state),
    status: getUserStatus(state),
    errorMessage: getErrorMessage(state),
}), {
    login: loginUserActions.triggerAC,
})(LoginPage);
