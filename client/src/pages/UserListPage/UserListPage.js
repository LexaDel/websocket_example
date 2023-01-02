import UserListContainer from '../../components/UserList/UserList.container';
import PageTemplateContainer from '../../pages/PageTemplate/PageTemplate.container';
import { Component } from 'react';


class UserListPage extends Component {
    render() {
        return (
            <PageTemplateContainer>
                <UserListContainer />
            </PageTemplateContainer>
        )
    }
}

export default UserListPage;
