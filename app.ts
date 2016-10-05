// ///<reference path="./typings/globals/node/index.d.ts"/>

// import * as path       from 'path';
// import * as config     from 'config';
// import * as express    from 'express';
// import * as bodyParser from 'body-parser';

// const app: express.Express = express();
// const port: number         = process.env || 3000;

import path       from 'path';
import config     from 'config';
import express    from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = config.get('server.port');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..')));

app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Hello from Ollert!' });
});

const server  = app.listen(port, () => {
    const { address, port } = server.address();
    console.log(`Application listening at http://${address}:${port}`);
});