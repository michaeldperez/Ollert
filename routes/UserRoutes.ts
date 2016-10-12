///<reference path="../typings/index.d.ts"/>

import * as express from 'express';
import UserController from '../controllers/UserController';

/**
 * Router for User collection in database requests
 * @function UserRouter 
 * @params { UserController } UserCtrl - UserController instance
 * @returns express Router
 */
export default function UserRouter(UserCtrl: UserController): express.Router {
    const Router: express.Router = express.Router();

    Router.route('/')
          .get(UserCtrl.getUsers)
          .post(UserCtrl.createUser);
    
    Router.use('/:userId', UserCtrl.getUserById);

    Router.route('/:userId')
          .get(UserCtrl.getUser)
          .put(UserCtrl.updateUser)
          .delete(UserCtrl.deleteUser);

    return Router;
}