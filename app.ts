import * as path       from 'path';
import * as config     from 'config';
// import * as express    from 'express';
const express = require('express');
import * as bodyParser from 'body-parser';

// const app: express.Express = express();
// const port: number         = process.env || 3000;

// import path       from 'path';
// import config     from 'config';
// import express    from 'express';
// import bodyParser from 'body-parser';

// import mongoose    from 'mongoose';
import * as mongoose from 'mongoose';
import { }   from 'mongodb-uri';

import { IDbConnection } from './interfaces';
import UserController    from './controllers/UserController';
import UserRouter        from './routes/UserRoutes';
import dbConfig          from './config';

const dbAddress: IDbConnection = <IDbConnection>config.get('mongodb');
let connection: string;
if (process.env.NODE_ENV === 'test') {
    connection = dbConfig.testDB;
} else {
    connection = mongodbUri.format(dbAddress);
}
mongoose.connect(connection);

const app = express();
const port = config.get('server.port');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..')));
app.use('/users', UserRouter(new UserController()));

app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Hello from Ollert!' });
});

const server  = app.listen(port, () => {
    const { address, port } = server.address();
    console.log(`Application listening at http://${address}:${port}`);
});

export default app;