import * as React from 'react';
import { List } from '../src/components/List';
import { Card } from '../src/components/Card';
import { shallow, mount, render } from 'enzyme';

describe('List component', () => {
    it('Contains a title prop', () => {
        const list = mount(<List name='MyList'/>);
        expect(list.prop('name')).toEqual('MyList');
    });
});