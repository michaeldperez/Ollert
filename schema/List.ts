///<reference path="../typings/index.d.ts"/>

import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
// import { IList }     from '../interfaces';
import Card          from './Card';

// interface IListModel extends IList, mongoose.Document { }

const listSchema = new mongoose.Schema({
    _id:       { type: mongodb.ObjectID, required: true },
    name:      { type: String, required: true },
    cards:     { type: [Card] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// const List = mongoose.model<IListModel>('List', listSchema);

export default listSchema;