import * as React from 'react';
import { IList }  from '../../interfaces';

interface BoardProps { name: string; }
interface BoardState { lists: IList[] }

export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            lists: []
        };
    }

    /**
     * Renders component
     * @function render
     * @return {HTML} Board component
     */
    render() {
        return (
            <div className="board">
              <h1>{ this.props.name }</h1>
              <div className='lists'></div>
              <button onClick={ this._addList.bind(this) }> Add List </button>
            </div>
        );
    }

    /**
     * Executes contents prior to mounting component
     * @function componentWillMount
     * @see {@link _getLists}
     * @returns {Array} Array of lists
     */
    componentWillMount() {
        return this._getLists();
    }

    /**
     * Fetches lists from server
     * @function _getLists
     * @returns {Array} array of lists
     */
    _getLists() {
        const method: string       = 'GET';
        const url: string          = '/users/${userId}/boards/${boardId}/lists';
        const xhr: XMLHttpRequest  = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onerror = () => { alert('There was an error retrieving your lists.' ); }
        xhr.onload  = () => {
            const lists = JSON.parse(xhr.responseText);
            this.setState({ lists });
        }
        xhr.send();
    }

    /**
     * Adds a list to components lists
     * @function _addList
     * @returns nothing
     */
    _addList() {
        const list: IList = { name: "", cards: [], createdAt: new Date(), updatedAt: null };

        this.setState({
            lists: this.state.lists.concat([ list ])
        });

        /* Not DRY - extract to method */

        const method: string       = 'POST';
        const url: string          = '/users/${userId}/boards/${boardId}/lists';
        const xhr: XMLHttpRequest  = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(list);
    }
}