import { ROLES } from '../../dictionaries/roles';
import { Avatar, Dropdown, Space, Typography } from 'antd';
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
      const isSuperAdmin = userInfo.role === ROLES.SUPER_ADMIN;

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

        if (userInfo?.role === ROLES.SUPER_ADMIN) {
          items.unshift({
            key: '3',
            label: (
              <a rel="noopener noreferrer" href='/register'>
                Register
              </a>
            ),
          });
        }

        return (
          <div className={cssPrefix}>
            <h1> App </h1>
            {userInfo && (
              <div className={`${cssPrefix}-userInfo`}>
                {isSuperAdmin && <Typography.Link href='/users'>Users</Typography.Link>}
                <div className={`${cssPrefix}-dropdown`}>
                  <Dropdown menu={{ items }}>
                  <Space>
                      <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />} />
                      {userInfo?.username}
                      <DownOutlined />
                  </Space>
                  </Dropdown>
                </div>
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
