import * as path         from 'path';
import * as config       from 'config';
import * as bodyParser   from 'body-parser';
import * as mongoose     from 'mongoose';
import mongodbUri        from 'mongodb-uri';
import UserController    from './controllers/UserController';
import UserRouter        from './routes/UserRoutes';
import dbConfig          from './config';
import { IDbConnection } from './interfaces';

const express                  = require('express');
const app                      = express();
const port                     = config.get('server.port');
const dbAddress: IDbConnection = <IDbConnection>config.get('mongodb');
const connection: string       = process.env.NODE_ENV === 'test' ? dbConfig.testDB : mongodbUri.format(dbAddress);

mongoose.connect(connection);

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..')));
app.use('/users', UserRouter(new UserController()));

const server = app.listen(port, () => {
    const { address, port: number } = server.address();
    console.log(`Application listening at http://${address}:${port}`);
});

export default server;