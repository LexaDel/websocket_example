import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Component } from 'react'; 
import PageTemplate from '../PageTemplate/PageTemplate';
import './LoginPage.sass';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';
import { loginUserActions } from '../../store/user/user.actions';
import { PropTypes } from 'prop-types';
import { getUserInfo } from '../../store/user/user.selectors';

class LoginPage extends Component {
    onLogin = (values) => {
        const { login } = this.props;
        const { usernameOrEmail, password } = values;

        login({ usernameOrEmail, password });
    }

    onLoginFailed = () => {

    }

    render() {
        const { userInfo } = this.props;
        if (userInfo) {
            return <Navigate to="/" />;
        }

        return (
            <PageTemplate>
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
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                </Form>
            </PageTemplate>
        )
    }
}

LoginPage.propTypes = {
    userInfo: PropTypes.shape(),
    login: PropTypes.func.isRequired,
}

export default connect((state) => ({
    userInfo: getUserInfo(state),
}), {
    login: loginUserActions.triggerAC,
})(LoginPage);