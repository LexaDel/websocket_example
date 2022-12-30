import { Component } from "react";
import { PropTypes } from 'prop-types';


class AdminPage extends Component {
    render() {
        const { userInfo } = this.props;

        return (
            <div>
                Hello {userInfo.role}
            </div>
        )
    }
}

AdminPage.propTypes = {
    userInfo: PropTypes.shape(),
};

export default AdminPage;
