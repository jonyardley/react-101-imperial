import React from 'react';
import { mount } from 'enzyme';

import TodoList from '../components/todo-list.js';

it('add an item to the list', () => {
  const props = { items: [] };

  const component = mount(
    <TodoList {...props} />
  );

  const input = component.find('input');
  const button = component.find('button');

  input.simulate('change', { target: { value: 'My first test item' } });
  button.simulate('click');

  expect(input.text()).toEqual('');

  input.simulate('change', { target: { value: 'My second test item' } });
  button.simulate('click');

  const itemList = component.find('li');

  expect(itemList.length).toEqual(2);
  expect(itemList.at(0).text()).toEqual('My first test item');
  expect(itemList.at(1).text()).toEqual('My second test item');
});
