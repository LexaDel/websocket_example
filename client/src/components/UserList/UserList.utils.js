export const getDataSource = (store) => {
 return store.map((row, index) => {
    return {
        key: index,
        firstname: row.firstname,
        secondname: row.secondname,
        name: row.name,
        email: row.email,
    };
});
};

export const getColumns = () => {
    return [
        {
            title: 'Имя',
            dataIndex: 'firstname',
            width: '25%',
            editable: true,
        },
        {
            title: 'Фамилия',
            dataIndex: 'secondname',
            width: '25%',
            editable: true,
        },
        {
            title: 'Логин',
            dataIndex: 'name',
            width: '25%',
        },
        {
            title: 'email',
            dataIndex: 'email',
            width: '25%',
        },
    ]
}
