import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/header.js';

it('render name', () => {
  const props = { name : 'Jon' };

  const component = shallow(
    <Header {...props} />
  );

  expect(component.find('h1').text()).toEqual('Hello Jon!');
});
