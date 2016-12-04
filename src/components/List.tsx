import * as React from 'react';
import { ICard }  from '../../interfaces';

export interface ListProps { name: string; cards: ICard[] }

export class List extends React.Component<ListProps, {}> {
    render() {
        return (
            <h4>{ this.props.name }</h4>
        );
    }
}