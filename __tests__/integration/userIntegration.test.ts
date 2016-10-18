///<reference path="../../typings/index.d.ts"/>

import * as request  from 'supertest';
import * as mongoose from 'mongoose';
import * as should   from 'should';
import app           from '../../app';
import User          from '../../models/User';

const agent = request.agent(app);

describe('User CRUD test', () => {
    let userId;
    describe('GET', () => {
        beforeAll(() => {
            userId = '57ec6fc9fd253db3d155f543';
        });
        it('Returns a list of users', (done) => {
            agent.get('/users')
                 .expect(200)
                 .expect('Content-Type', /json/)
                 .end((err, results) => {
                     if (err) { throw err; }
                     should.equal(typeof results.body, "object");
                     done();
                 });
        });
        it('Returns a user by user id', (done) => {
            agent.get(`/users/${userId}`)
                 .expect(200)
                 .expect('Content-Type', /json/)
                 .end((err, result) => {
                     if (err) { throw err; }
                     should.equal(result.body.username, 'test');
                     done();
                 });
                 
        });
    });
});