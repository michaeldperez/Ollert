///<reference path="../typings/index.d.ts"/>

import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
// import { ICard }     from '../interfaces';

// interface ICardModel extends ICard, mongoose.Document { }

const cardSchema = new mongoose.Schema({
    text:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// const Card = mongoose.model<ICardModel>('Card', cardSchema);

export default cardSchema;