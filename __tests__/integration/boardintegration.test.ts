import * as request  from 'supertest';
import * as mongoose from 'mongoose';
import * as should   from 'should';
import app           from '../../app';
import User          from '../../models/User';
import { IBoard }    from '../../interfaces';

const agent = request.agent(app);

process.env.NODE_ENV = 'test';

describe('Board CRUD test', () => {
    it('', () => {

    });
});