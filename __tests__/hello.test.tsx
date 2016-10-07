///<reference path="../typings/index.d.ts"/>

import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Hello } from '../src/components/Hello';

describe("Hello Component", function() {
  it("Renders the correct compiler and framework", function() {
    const wrapper = mount(<Hello compiler="TypeScript" framework="React" />);
    expect(wrapper.prop('compiler')).toEqual('TypeScript');
    expect(wrapper.prop('framework')).toEqual('React');
  });
});