import { getDataSource } from './UserList.utils';
import EditableCell from './EditableCell/EditableCell';
import { withForm } from '../../utils/withForm';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Table, Typography } from 'antd';
import './UserList.sass';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


export const cssPrefix = 'userList';
class UserList extends Component {
    constructor(props) {
        super(props);

        props.getUserList();

        this.state = {
            editableKey: '',
        };
    }

    onEdit = (record) => {
        const { form } = this.props;

        form.setFieldsValue({ firstName: '', secondName: '', ...record });
        this.setState({ editableKey: record.key });
    }

    onSave = async (record) => {
        const { form, save } = this.props;
        try {
            const row = (await form.validateFields());
            if (
                record.firstName !== row.firstName 
                || record.secondName !== row.secondName
            ) {
                save({
                    ...record,
                    ...row,
                });
            }
            this.setState({ editableKey: '' });
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    }

    onCancel = () => {
        this.setState({ editableKey: '' });
    }

    showModalDelete = (record) => {
        Modal.confirm({
            title: 'Delete user',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure delete?',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => {this.onDelete(record.userId)},
            onCancel: this.onCancel,
          });
    }

    showModalCancelEdit = () => {
        Modal.confirm({
            title: 'Cancel edit',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure cancel editing?',
            okText: 'Ok',
            cancelText: 'Cancel',
            onOk: this.onCancel,
          });
    }

    onDelete = (userId) => {
        const { remove } = this.props;

        remove({ userId });
    }

    getColumns = () => {
        const { editableKey } = this.state;
        return [
            {
                title: 'Имя',
                dataIndex: 'firstName',
                width: '23%',
                editable: true,
            },
            {
                title: 'Фамилия',
                dataIndex: 'secondName',
                width: '23%',
                editable: true,
            },
            {
                title: 'Логин',
                dataIndex: 'name',
                width: '20%',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '25%',
            },
            {
                title: 'Действия',
                width: '100px',
                render: (record) => {
                    const editable = record.key === editableKey;
                    return editable ? (
                        <span>
                            <Typography.Link onClick={() => this.onSave(record)} style={{ marginRight: 8 }}>
                                Save
                            </Typography.Link>
                            <Typography.Link onClick={this.showModalCancelEdit}>
                                Cancel
                            </Typography.Link>
                        </span>
                    )
                    : (
                        <>
                            <span className={`${cssPrefix}-action`} onClick={() => this.onEdit(record)}>
                                <Typography.Link disabled={editableKey !== ''}>
                                    <EditOutlined />
                                </Typography.Link>
                            </span>
                            <span className={`${cssPrefix}-action`} onClick={() => this.showModalDelete(record)}>
                                <Typography.Link disabled={editableKey !== ''}>
                                    <DeleteOutlined style={{color: editableKey === '' && 'red' }}/>
                                </Typography.Link>
                            </span>
                        </>
                    )
                },
            },
        ]
    }

    render() {
        const { status, list, form } = this.props;
        const { editableKey } = this.state;
        const store = getDataSource(list);
        const columns = this.getColumns();
        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record) => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: record.key === editableKey,
                }),
            };
        });

        return (
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    loading={status.loading || status.processing}
                    dataSource={store}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.onCancel,
                    }}
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
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

UserList.defaultProps = {
    list: undefined,
};

export default withForm(UserList);
