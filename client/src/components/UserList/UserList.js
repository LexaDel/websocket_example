import { getColumns, getDataSource } from './UserList.utils';
import { withForm } from '../../utils/withForm';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Spin, Table } from 'antd';


class UserList extends Component {
    constructor(props) {
        super(props);

        props.getUserList();
    }

    render() {
        const { status, list, form } = this.props;
        console.log(status);

        if (status.loading) {
            return <Spin size="large" />
        }
        const store = getDataSource(list);
        const columns = getColumns();
        
        return (
            <Form form={form} component={false}>
            <Table
              bordered
              dataSource={store}
              columns={columns}
              rowClassName="editable-row"
            />
          </Form>
        );
    }
}

UserList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()),
    status: PropTypes.shape().isRequired,
    getUserList: PropTypes.func.isRequired,
    form: PropTypes.shape().isRequired,
};

UserList.defaultProps = {
    list: undefined,
};

export default withForm(UserList);
