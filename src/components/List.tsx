import * as React from 'react';

export interface ListProps { name: string; }

export class List extends React.Component<ListProps, {}> {
    render() {
        return (
            <h4>{ this.props.name }</h4>
        );
    }
}