import * as React from 'react';

export interface BoardProps { name: string; }

export class Board extends React.Component<BoardProps, {}> {
    render() {
        return (<h1>{ this.props.name }</h1>);
    }
}