///<reference path="../typings/index.d.ts"/>

import { List, Card } from '../interfaces/interfaces';

import * as mongodb from 'mongodb';

export default class Database {
    db: mongodb.Db;

    constructor(db: mongodb.Db) {
        this.db = db;
    }

    getLists(): Array<List> {
        return this.db
                   .collection('lists')
                   .find({})
                   .toArray();
    }

    addList(list: List): void {
        return this.db
                   .collection('lists')
                   .insertOne(list)
    }

    updateList() {

    }

    deleteList() {

    }

    getCards(list: List): Array<Card> {
        return this.db
                   .collection('list')
                   .findOne({'name': list.name}, {fields: {cards: 1}});
    }

    addCard(list: List, card: Card) {
        
    }
}