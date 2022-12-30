import { ROLES } from '../../dictionaries/roles';
import PageTemplateContainer from "../PageTemplate/PageTemplate.container";
import { withRouter } from "../../utils/withRouter";
import { Component } from "react";
import { Button, Form, Input } from 'antd';
import './RegisterPage.sass';
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { PropTypes } from 'prop-types';
import { Navigate } from "react-router";


class RegisterPage extends Component {
    onFinish = (values) => {
        const { register, navigate } = this.props;

        register({ ...values, navigate });
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const { 
            status,
            errorMessage,
            userInfo,
         } = this.props;
         const isSuperAdmin = userInfo?.role === ROLES.SUPER_ADMIN;

         if (userInfo && !isSuperAdmin) {
            return <Navigate to="/" />
         }

        return (
            <PageTemplateContainer>
                <Form
                    className="registerPage"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
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
                        name="email"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input 
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="Email"
                        />
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
                    {isSuperAdmin && (
                        <Form.Item
                            name="role"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Role" />
                        </Form.Item>
                    )}
                    <Form.Item>
                    <Button 
                        className="registerButton"
                        type="primary" 
                        htmlType="submit"
                        loading={status.processing}
                    >
                        Register
                    </Button>
                    {!isSuperAdmin && (
                        <>
                            Or <a href="/login">log in</a>
                        </>
                    )}
                    </Form.Item>
                </Form>
            </PageTemplateContainer>
        )
    }
}

RegisterPage.propTypes = {
    userInfo: PropTypes.shape(),
    register: PropTypes.func.isRequired,
    status: PropTypes.shape().isRequired,
    errorMessage: PropTypes.string,
    navigate: PropTypes.func.isRequired,
}

RegisterPage.defaultProps = {
    userInfo: undefined,
    errorMessage: undefined,
};

export default withRouter(RegisterPage);
