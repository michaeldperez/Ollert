import * as express from 'express';
import * as User    from '../models/User';

export default class UserController {
  /**
   * Creates and stores a user in the database
   * @function createUser 
   * @params { object } req - express request object
   * @params { object } res - express response object
   * @returns nothing 
   */
  createUser(req: express.Request, res: express.Response): void {
    const user = new User(req.body);
    user.save();
    res.status(201).end();
  }

  /**
   * Retrieves all users from the database
   * @function getUsers
   * @param   { object } req   - express request object
   * @param   { object } res   - express response object
   * @returns { array }  users - an array of users 
   */
  getUsers(req: express.Request, res: express.Response): void {
    User.find((err, docs) => {
        if (err) {}
        res.json(docs);
    });
  }

  /**
   * Retrieves a user from the database
   * @function getUserById
   * @param   { object } req  - express request object
   * @param   { object } res  - express response object
   * @returns nothing
   */
  getUserById(req: express.Request, res: express.Response, next: express.NextFunction): void {
      const id = req.params.id;
      User.findById(id, (err, user) => {
          if (err) {
              res.status(500)
                 .send(err);
          } else if (user) {
              req.user = user;
              next();
          } else {
              res.status(404)
                 .send('User not found');
          }
          
      });
  }

  /**
   * Removes a user from the database
   * @function deleteUser
   * @param { object } req - express request object
   * @param { object } res - express response object
   * @returns nothing
   */
  deleteUser(req: express.Request, res: express.Response): void {
      req.user.remove(err => {
          if (err) {
              res.status(500)
                 .send(err);
          } else {
              res.status(204)
                 .send('User removed');
          }
      });
  }

  /**
   * Updates a users information
   * @function updateUser
   * @param { object } req - express request object
   * @param { object } res - express response object
   * @returns nothing
   */
  updateUser(req: express.Request, res: express.Response): void {
      if (req.body._id) {
          delete req.body._id;
      }

      for (let property in req.body) {
         req.user[property] = req.body[property];
      }

      req.user.save(err => {
          if (err) {
              res.status(500)
                 .send(err);
          } else {
              res.json(req.user);
          }
      })
  }
}