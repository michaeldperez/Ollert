import * as React                 from 'react';
import { Hello }                  from '../src/components/Hello';
import { shallow, mount, render } from 'enzyme';

describe("Hello Component", function() {
  it("Renders the correct compiler and framework", function() {
    const wrapper = mount(<Hello compiler="TypeScript" framework="React" />);
    expect(wrapper.prop('compiler')).toEqual('TypeScript');
    expect(wrapper.prop('framework')).toEqual('React');
  });
});