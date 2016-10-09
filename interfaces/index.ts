
export interface ICard {
    text: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IList {
    name: string,
    cards: Array<ICard>,
    createdAt: Date,
    updatedAt: Date
}

export interface IUser {
    name: string,
    pasword: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IBoard {
    name: string,
    createdAt: Date,
    updatedAt: Date
}