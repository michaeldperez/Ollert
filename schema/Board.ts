import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
import List from './List';

// import { IBoard }    from '../interfaces';

// interface IBoardModel extends IBoard, mongoose.Document {};

const boardSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  lists:     { type: [List] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// const Board = mongoose.model<IBoardModel>('Board', BoardSchema);

export default boardSchema;