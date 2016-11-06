import * as mongodb  from 'mongodb';
import * as mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    text:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default cardSchema;