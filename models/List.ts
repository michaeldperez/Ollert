///<reference path="../typings/index.d.ts"/>

import * as mongoose from 'mongoose';
import { IList } from '../interfaces';
import Card from './Card';

interface IListModel extends IList, mongoose.Document { }

let listSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    cards:     { type: [Card] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const List = mongoose.model<IListModel>("List", listSchema);

export default List;