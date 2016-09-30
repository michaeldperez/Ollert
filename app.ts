///<reference path="./typings/index.d.ts"/>

import * as config from 'config';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


let app: express.Express = express();
const port: number = process.env || 3000;

