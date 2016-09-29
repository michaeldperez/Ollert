///<reference path="./typings/index.d.ts"/>

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import config from 'config';
import Database from './db/db';

const mongoURI: string = config.get('mongodb');
let Db: Database;

MongoClient.connect(mongoURI)
           .then(db => {
             Db = new Database(db);
           });


let app: express.Express = express();
const port: number = process.env || 3000;

