import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
import { IUser }     from '../interfaces';
import Board         from '../schema/Board';

interface IUserModel extends IUser, mongoose.Document { }

const UserSchema = new mongoose.Schema({
    _id:       { type: mongodb.ObjectID, required: true },
    username:  { type: String, required: true },
    password:  { type: String, required: true },
    boards:    { type: [Board] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model<IUserModel>("User", UserSchema);

export default User;