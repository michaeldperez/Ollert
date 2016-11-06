import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
import List          from './List';

const boardSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  lists:     { type: [List] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default boardSchema;