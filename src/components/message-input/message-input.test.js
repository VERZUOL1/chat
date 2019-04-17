import React from 'react';
import { MessageInput } from './message-input';
import TextInput from '../text-input';
import Button from '../button';
import { shallow } from 'enzyme';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<MessageInput />);

  expect(wrapper.find(TextInput)).not.toBeUndefined();
  expect(wrapper.find(Button)).not.toBeUndefined();
});

it('calls sendMessage action on submit', () => {
  const wrapper = shallow(<MessageInput sendMessage={callback} />);

  wrapper.find(TextInput).simulate('change', 'test');
  wrapper.find(Button).simulate('click');

  expect(callback).toHaveBeenCalled();
});
