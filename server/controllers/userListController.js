import { 
    DELETE_USER,
    GET_USER_LIST,
    PATCH_USER_DATA,
} from "../routes/routes.js";
import axios from 'axios';


export default function userListController(app, dbClient) {
    app.get(GET_USER_LIST, async (req, res) => {
        const { role } = req.query;
        console.log(req);
        let responseQuery;
        if (role === 'all') {
            responseQuery = await dbClient.query("SELECT * from users where role <> 'SUPER_ADMIN' order by name");
        } else {
            responseQuery = await dbClient.query(
                "SELECT * from users where role <> 'SUPER_ADMIN' and role = $1 order by name",
                [role]
            );
        }
        return res.send(responseQuery.rows);
    });

    app.patch(PATCH_USER_DATA, async (req, res) => {
        const { userId } = req.params;
        const { firstName, secondName } = req.body;
        const result = await dbClient.query(
            `UPDATE "users" 
            SET "firstname" = $1, "secondname" = $2 
            WHERE "id" = $3`, 
            [firstName, secondName, userId]
        );
        if (result.rowCount > 0) {
            const { rows: users } = await dbClient.query("SELECT * from users where role <> 'SUPER_ADMIN' order by name");

            return res.send(users);
        }
    });

    app.delete(DELETE_USER, async (req, res) => {
        const { userId } = req.params;
        const authorization = req.headers.authorization;
        const { rows: users } = await dbClient.query(
            `SELECT * from users WHERE "id" = $1`, 
            [userId],
        );

        const result = await axios.delete(`http://auth.dev:3000/api/auth/remove`, {
            headers: {
                "X-Verification-Code": 'verification_code',
                "Authorization": authorization
            },
            data: {
                usernameOrEmail: users[0].email,
            },
        });
        if (result.status === 200) {
            const resultDeleting = await dbClient.query(
                `DELETE FROM users
                WHERE "id" = $1`, 
                [userId]
            );
            const { rows: users } = await dbClient.query("SELECT * from users where role <> 'SUPER_ADMIN' order by name");

            return res.send(users);
        }

        

        return res
            .sendStatus(400)
            .json({ message: 'Something wrong' });
    });
}