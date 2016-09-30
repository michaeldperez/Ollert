export interface ICard {
    text: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IList {
    name: string,
    cards: Array<ICard>,
    createdAt: Date,
    updatedAt: Date,
}