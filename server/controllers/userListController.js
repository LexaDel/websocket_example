import { USER_LIST } from "../routes/routes.js";


export default function userListController(app, dbClient) {
    app.get(USER_LIST, async (req, res) => {
        const { rows: users } = await dbClient.query('SELECT * from users');

        return res.send(users);
    });
}