import { Form, Input } from "antd";
import { Component } from "react";
import PropTypes from 'prop-types';


class EditableCell extends Component {
    render() {
        const {
            editing,
            dataIndex,
            title,
            children,
            ...restProps
        } = this.props;

        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                        required: true,
                        message: `Please Input ${title}!`,
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    }
}

EditableCell.propTypes = {
    editing: PropTypes.bool,
    dataIndex: PropTypes.string,
    title: PropTypes.string,
    record: PropTypes.shape(),
    index: PropTypes.number,
    children: PropTypes.node,
}

export default EditableCell;
