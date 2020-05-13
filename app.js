import express from 'express';
import * as db from './db';
import { Thing } from './models/Thing';
import { port } from './config/config'

const app = express();

(async () => { await db.initMongo() })();

app.get('/', (req, res) => { res.send('Hello world!') })

app.get('/getThing', async (req, res) => {
    try {
        let result = await Thing.find({});
        console.log(JSON.stringify(result));

        res.send(result);

    } catch (error) {
        console.log(error);
    }
});

app.listen(port, function () {
    console.log(`Things running on port ${port}!`);
});