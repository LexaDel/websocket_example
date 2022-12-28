import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Component } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import { PropTypes } from 'prop-types';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.userInfo.username,
            email: props.userInfo.email,
            firstName: props.userInfo.firstName,
            secondName: props.userInfo.secondName,
        };
    }

    onFinish = (values) => {
        const { updateUserInfo, userInfo } = this.props;

        updateUserInfo({
            userId: userInfo.userId,
            firstName: values.firstName,
            secondName: values.secondName,
        })
    };


    render() {
        const { status } = this.props;
        const { username, email, firstName, secondName } = this.state;

        return (
            <PageTemplate>
                <Form
                    className="userInfoPage"
                    initialValues={{
                        remember: true,
                        username,
                        email,
                        firstName,
                        secondName
                    }}
                    onFinish={this.onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input 
                            disabled
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
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
                            disabled
                        />
                    </Form.Item>
                    <Form.Item
                        name="firstName"
                    >
                        <Input
                            placeholder="First Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="secondName"
                    >
                        <Input
                            placeholder="Second Name"
                        />
                    </Form.Item>
                    <Form.Item>
                    <Button 
                        className="registerButton"
                        type="primary" 
                        htmlType="submit"
                        loading={status.processing}
                    >
                        Save changes
                    </Button>
                    </Form.Item>
                </Form>
            </PageTemplate>
        );
    }
}

UserPage.propTypes = {
    userInfo: PropTypes.shape(),
    status: PropTypes.shape().isRequired,
    updateUserInfo: PropTypes.func.isRequired,
}

export default UserPage;
