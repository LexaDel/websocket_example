import { Form, Input, Button } from 'antd';
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
                    className='loginPage'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onLogin}
                    onFinishFailed={this.onLoginFailed}
                >
                    <Form.Item
                        label="Username Or Email"
                        name="usernameOrEmail"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username or email!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
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