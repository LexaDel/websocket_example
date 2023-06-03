import { INTERVALS } from "../config/index.js";
import { 
    ADD_WORKTIME, 
    GET_INTERVALS, 
    REMOVE_WORKTIME, 
} from "../routes/routes.js";


export default function worktimeController(app, dbClient) {
    app.get(GET_INTERVALS, async(req, res) => {
        return res.send({
            intervals: INTERVALS
        });
    });

    app.post(ADD_WORKTIME, async(req, res) => {
        const { worktimes, userId } = req.body;
        worktimes.forEach(async (worktime) => {
            const { id, startTime, endTime, interval } = worktime;

            await dbClient.query(`
                INSERT INTO "worktime" ("id", "userid", "starttime", "endtime", "interval")
                VALUES ($1, $2, $3, $4, $5)`,
                [id, userId, new Date(new Date(startTime).toISOString()), new Date(new Date(endTime).toISOString()), interval]
            );
        });

        res.sendStatus(200);
    });

    app.delete(REMOVE_WORKTIME, async(req, res) => {

    });
}