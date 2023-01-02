import useNotification from "antd/es/notification/useNotification";


export const withNotification = (Component) => function withNotification(props) {
    const [api, contextHolder] = useNotification();

    return (
        <Component
            {...props}
            api={api}
            contextHolder={contextHolder}
        />
    )
}
