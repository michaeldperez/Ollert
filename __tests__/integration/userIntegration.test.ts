
import * as request  from 'supertest';
import * as mongoose from 'mongoose';
import * as should   from 'should';
import app           from '../../app';
import User          from '../../models/User';

process.env.NODE_ENV = 'test';

const agent = request.agent(app);

describe('User CRUD test', () => {
    let user;
    beforeAll(() => {
        should({});
    });
    afterAll(done => {
        app.close(() => {
            done();
        });
    });
    beforeEach(() => {
        user = new User({username: 'integrationTestUser', password: 'mySecret', boards: []});
    });
    afterEach((done) => {
        User.remove({}, err => {
            if (err) { throw err; }
            done();
        });
    });
    describe('GET', () => {
        it('Returns a list of users', (done) => {
            agent.get('/users')
                 .expect(200)
                 .expect('Content-Type', /json/)
                 .end((err, results) => {
                     if (err) { throw err; }
                     results.body.should.be.an.Object();
                     done();
                 });
        });
        it('Returns a user by user id', (done) => {
            user.save((err, user) => {
                agent.get(`/users/${user._id}`)
                     .expect(200)
                     .expect('Content-Type', /json/)
                     .end((err, result) => {
                        if (err) { throw err; }
                        result.body.should.have.property('username', 'integrationTestUser');
                        done();
                     });                
            });  
        });
    });
    describe('POST', () => {
        it('Does not allow a User to be created without a username', (done) => {
            const user = {
                password: 'mySecret',
                boards: []
            };
            agent.post('/users')
                 .send(user)
                 .expect(409)
                 .end((err, result) => {
                     if (err) { throw err; }
                     result.body.should.be.an.Object();
                     result.body.should.have.property('errors');
                     result.body.errors.should.have.property('username');
                     result.body.errors.username.should.have.property('kind').eql('required');
                     done();
                 });
        });
        it('Allows a User to be created', (done) => {
            agent.post('/users')
                 .send(user)
                 .expect(201)
                 .end((err, result) => {
                     if (err) { throw err; }
                     result.body.should.have.property('message');
                     result.body.message.should.equal('User successfully added.');
                     done();
                 });
        });
    });
    describe('PUT', () => {
        it('Updates a user given an id', (done) => {
            user.save((err, user) => {
                agent.put(`/users/${user._id}`)
                     .send({ username: 'integrationTestUserUpdated', password: 'mySecretUpdated' })
                     .expect(200)
                     .end((err, result) => {
                         if (err) { throw err; }
                         result.body.should.be.an.Object();
                         result.body.should.have.property('username', 'integrationTestUserUpdated');
                         result.body.should.have.property('password', 'mySecretUpdated');
                         done();
                     });
            });
        });
    });
    describe('DELETE', () => {
        it('Removes a user given an id', (done) => {
            user.save((err, user) => {
                agent.delete(`/users/${user._id}`)
                     .expect(200)
                     .end((err, result) => {
                         if (err) { throw err; }
                         result.body.should.have.property('message', 'User removed.');
                         done();
                     });
            });
        });
    });
});