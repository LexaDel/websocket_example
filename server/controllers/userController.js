import { USER_INFO } from '../routes/routes.js';

export default function userController(app, dbClient) {
    app.get(USER_INFO, async (req, res) => {
        const { userId } = req.params;

        const result = await dbClient.query('SELECT * from users where id = $1', [userId]);
        
        if (result.rows.length > 0) {
            const { 
                id: userId, 
                email,
                name: username,
                firstname: firstName,
                secondname: secondName,
            } = result.rows[0];

            return res.send({ userId, email, username, firstName, secondName });
        }
    });

    app.post(USER_INFO, async (req, res) => {
        const { userId } = req.params;
        const { username, email } = req.body;
        const result = await dbClient.query(
            'INSERT INTO users(id,name,email) VALUES($1,$2,$3)', 
            [userId, username, email],
        );

        res.sendStatus(200);
    });

    app.patch(USER_INFO, async (req, res) => {
        const { userId } = req.params;
        const { firstName, secondName } = req.body;
        const result = await dbClient.query(
            `UPDATE "users" 
            SET "firstname" = $1, "secondname" = $2 
            WHERE "id" = $3`, 
            [firstName, secondName, userId]
        );

        if (result.rowCount > 0) {
            return res.sendStatus(200);
        } else {
            return res.sendStatus(409);
        }
    });
}