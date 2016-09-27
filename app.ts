///<reference path="./typings/index.d.ts"/>

import * as express from 'express';
import * as bodyParser from 'body-parser';

let app: express.Express = express();
const port: number = process.env || 3000;

