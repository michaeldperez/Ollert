import * as React                 from 'react';
import { Card }                   from '../src/components/Card';
import { shallow, mount, render } from 'enzyme';

describe('Card component', () => {
    it('Contains a text prop', () => {
        const card = mount(<Card text='some task to complete'/>);
        expect(card.prop('text')).toEqual('some task to complete');
    });
});

