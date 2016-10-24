///<reference path="../../typings/index.d.ts"/>

import * as request  from 'supertest';
import * as mongoose from 'mongoose';
import * as should   from 'should';
import app           from '../../app';
import User          from '../../models/User';

const agent = request.agent(app);

process.env.NODE_ENV = 'test';

describe('User CRUD test', () => {
    describe('GET', () => {
        let userId: string;
        beforeAll(() => {
            userId = '57ec6fc9fd253db3d155f543';
        });
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
            agent.get(`/users/${userId}`)
                 .expect(200)
                 .expect('Content-Type', /json/)
                 .end((err, result) => {
                     if (err) { throw err; }
                     result.body.should.have.property('username', 'test');
                     done();
                 });
                 
        });
    });
    describe('POST', () => {
        it('Allows a User to be created', (done) => {
            const user = {
                username: 'integrationTestUser',
                password: 'mySecret',
                boards: []
            };
            agent.post('/users')
                 .send(user)
                 .expect(201)
                 .end((err, result) => {
                     if (err) { throw err; }
                     console.log('Result of POST: ', result.body);
                     done();
                 });
        });
    });
    describe('PUT', () => {
        it('Updates a user given an id', (done) => {
            let user = new User({ username: 'putTestUser', password: 'putTestSecret', boards: [] });
            user.save((err, user) => {
                agent.put(`/users/${user._id}`)
                     .send({ username: 'putTestUserUpdated', password: 'putTestSecretUpdated' })
                     .expect(200)
                     .end((err, result) => {
                         if (err) { throw err; }
                         result.body.should.be.an.Object();
                         result.body.should.have.property('username', 'putTestUserUpdated');
                         result.body.should.have.property('password', 'putTestSecretUpdated');
                         done();
                     });
            });
        });
    });
    describe('DELETE', () => {
        it('Removes a user given an id', (done) => {
            let user = new User({ username: 'deleteTestUser', password: 'deleteTestSecret', boards: [] });
            user.save((err, user) => {
                agent.delete(`/users/${user._id}`)
                     .expect(204)
                     .end((err, result) => {
                         if (err) { throw err; }
                         done();
                     });
            });
        });
    });
});