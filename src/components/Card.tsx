import * as React from 'react';

export interface CardProps { text: string; }

export class Card extends React.Component<CardProps, {}> {
    render() {
       return <p>{ this.props.text }</p>;
    }
}