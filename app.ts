///<reference path="./typings/index.d.ts"/>
import * as path       from 'path';
import * as config     from 'config';
import * as express    from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

let app: express.Express = express();
const port: number         = process.env || 3000;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..')));

const server  = app.listen(port, () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log(`Application listening at http://${address}:${port}`);
});