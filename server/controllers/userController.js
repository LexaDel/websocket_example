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
        const { username, email, role } = req.body;
        const result = await dbClient.query(
            'INSERT INTO users(id,name,email,role) VALUES($1,$2,$3,$4)', 
            [userId, username, email, role],
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
            const userInfo = await dbClient.query('SELECT * from users where id = $1', [userId]);
            const { 
                id, 
                email,
                name: username,
                firstname,
                secondname,
            } = userInfo.rows[0];

            return res.send({ 
                userId: userId,
                email,
                username,
                firstName: firstname,
                secondName: secondname,
            });
        } else {
            return res.sendStatus(409);
        }
    });
}