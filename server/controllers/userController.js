import { USER_INFO } from '../routes/routes.js';

export default function userController(app, dbClient) {
    app.get(USER_INFO, async (req, res) => {
        const { userId } = req.query;

        const result = await dbClient.query('SELECT * from users where id = $1', [userId]);
        
        if (result.rows.length > 0) {
            const { id: userId, email, name: username } = result.rows[0];
            return res.send({ userId, email, username });
        }
    });

    app.post(USER_INFO, async (req, res) => {
        const { userId, username, email } = req.body;
        const result = await dbClient.query(
            'INSERT INTO users(id,name,email) VALUES($1,$2,$3)', 
            [userId, username, email],
        );

        res.sendStatus(200);
    });

    app.patch(USER_INFO, async (req, res) => {
        const { userid, username, email } = req.body;
        const result = await dbClient.query(
            `UPDATE "users" 
            SET "name" = $1, "email" = $2 
            WHERE "id" = $3`, 
            [username, email, userid]
        );
        console.log(result.rows)

        res.send({ result });
    });
}