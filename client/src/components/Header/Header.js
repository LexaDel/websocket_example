import { Avatar, Dropdown, Space } from 'antd';
import { Component } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './Header.sass';
import { PropTypes } from 'prop-types';


const cssPrefix = 'headerContainer';

class Header extends Component {
    logoutHandler = () => {
      const { logout } = this.props;

      logout();
    }

    render() {
      const { userInfo } = this.props;

      const items = [
        {
            key: '1',
            label: (
              <a rel="noopener noreferrer" href="/user">
                Edit profile
              </a>
            ),
          },
          {
            key: '2',
            label: (
              <a rel="noopener noreferrer" onClick={this.logoutHandler}>
                Logout
              </a>
            ),
          },
        ];

        return (
          <div className={cssPrefix}>
            <h1> App </h1>
            {userInfo && (
              <div className={`${cssPrefix}-dropdown`}>
                <Dropdown menu={{ items }}>
                <Space>
                    <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />} />
                    {userInfo?.username}
                    <DownOutlined />
                </Space>
                </Dropdown>
              </div>
            )}
          </div>
        )
    }
}

Header.propTypes = {
  userInfo: PropTypes.shape(),
  logout: PropTypes.func.isRequired,
}

export default Header;