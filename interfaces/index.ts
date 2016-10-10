
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

export interface IBoard {
    name: string,
    lists: Array<IList>,
    createdAt: Date,
    updatedAt: Date
}

export interface IUser {
    username: string,
    pasword: string,
    boards: Array<IBoard>,
    createdAt: Date,
    updatedAt: Date
}