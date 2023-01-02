import { useForm } from "antd/es/form/Form"


export const withForm = (Component) => function withForm(props) {
    const [form] = useForm();

    return (
        <Component
            {...props}
            form={form}
        />
    )
}
