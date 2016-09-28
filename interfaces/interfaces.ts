export interface Card {
    text: string,
    createdAt: Date,
    updatedAt: Date
}

export interface List {
    name: string,
    cards: Array<Card>,
    createdAt: Date,
    updatedAt: Date,
}