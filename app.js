import express from 'express';
import * as db from './db';
import { port } from './config/config';
import { router } from './routes/thingsRoute';

const app = express();

(async () => { await db.initMongo() })();

app.use('/api/v1', router);

app.listen(port, function () {
    console.log(`Things running on port ${port}!`);
});