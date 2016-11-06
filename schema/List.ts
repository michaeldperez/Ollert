import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';
import Card          from './Card';

const listSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    cards:     { type: [Card] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default listSchema;