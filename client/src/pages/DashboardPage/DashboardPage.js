import { ROLES } from '../../dictionaries/roles';
import PageTemplateContainer from '../PageTemplate/PageTemplate.container';
import AdminPage from '../AdminPage/AdminPage';
import DoctorPage from '../DoctorPage/DoctorPage';
import { Component } from 'react';
import { PropTypes } from 'prop-types';


class DashboardPage extends Component {
    render() {
        const { userInfo } = this.props;
        console.log(userInfo);

        return (
            <PageTemplateContainer>
                {[ROLES.ADMIN, ROLES.SUPER_ADMIN].includes(userInfo.role) 
                    ? <AdminPage userInfo={userInfo}/>
                    : <DoctorPage />
                }
            </PageTemplateContainer>
        )
    }
}

DashboardPage.propTypes = {
    userInfo: PropTypes.shape(),
};

export default DashboardPage;
