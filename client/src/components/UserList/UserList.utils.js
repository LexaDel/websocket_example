export const getDataSource = (store) => {
 return store?.map((row, index) => {
    return {
        key: index,
        userId: row.id,
        firstName: row.firstname,
        secondName: row.secondname,
        name: row.name,
        email: row.email,
    };
});
};
