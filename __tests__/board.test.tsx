import * as React                 from 'react';
import { Board }                  from '../src/components/Board';
import { List }                   from '../src/components/List';
import { Card }                   from '../src/components/Card';
import { mount, shallow, render } from 'enzyme';

describe('Board component', () => {
    it('Contains a name prop', () => {
        const board = mount(<Board name='MyBoard'/>);
        expect(board.prop('name')).toEqual('MyBoard');
    });

    xit('Creates a list', () => {
        const board = mount(<Board name="MyBoard" />);
        board.find('button').simulate('click');
        expect().toEqual(1);
    });
});
