import { Form, Input, Button } from 'antd';
import { Component } from 'react';
import axios from 'axios';
import PageTemplate from '../PageTemplate/PageTemplate';
import './LoginPage.sass';
import { Navigate } from 'react-router';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth: false
        }
    }

    onLogin = (values) => {
        const { usernameOrEmail, password } = values;

        axios.post('api/auth/login', {
              usernameOrEmail,
              password
          })
          .then((response) => {
            if (response.status === 200) {
                this.setState({
                    isAuth: true,
                });
            }
          }).catch((error) => {
            console.log(error.toJSON());
          });
    }

    onLoginFailed = () => {

    }

    render() {
        const { isAuth } = this.state;
        if (isAuth) {
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

export default LoginPage;