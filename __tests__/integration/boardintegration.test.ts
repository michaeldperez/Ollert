import * as request  from 'supertest';
import * as mongoose from 'mongoose';
import * as should   from 'should';
import app           from '../../app';
import User          from '../../models/User';
import { IBoard }    from '../../interfaces';

process.env.NODE_ENV = 'test';

const agent = request.agent(app);

describe('Board CRUD test', () => {
    let user, testBoard1, testBoard2;
    beforeAll(() => {
        should({});
    });
    afterAll(done => {
        app.close(() => {
            done();
        });
    });
    beforeEach(() => {
        testBoard1 = { name: 'testBoard1', lists: [] } ;
        testBoard2 = { name: 'testBoard2', lists: [] };
        user = new User({username: 'testUser', password: 'mySecret', boards: [testBoard1, testBoard2]});
    });
    // afterEach((done) => {
    //     User.remove({}, err => {
    //         if (err) { throw err; }
    //         done();
    //     });
    // });
    describe('GET', () => {
        it('Returns a list of Boards for a given user', () => {
            user.save((err, user) => {
                agent.get(`/users/${user._id}`)
                     .expect(200)
                     .expect('Content-Type', /json/)
                     .end((err, result) => {
                         if (err) { throw err; }
                         console.log('BOARD results: ', result);
                         result.body.should.be.an.Object();
                     });
            });
        });

        it('Returns a user\'s board by id', () => {

        });
    });
});