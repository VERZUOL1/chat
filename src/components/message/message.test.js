import React from 'react';
import { Message } from './message';
import { shallow } from 'enzyme';
import { MESSAGE_RECEIVED } from '../../constants/common';

const message = {
  username: 'Test',
  dateTime: 1,
  message: 'Test'
};

it('renders without crashing', () => {
  const wrapper = shallow(<Message message={message} />);

  expect(wrapper.find('li')).not.toBeUndefined();
});

it('renders username if message has RECEIVED type', () => {
  const wrapper = shallow(<Message message={{
    ...message,
    type: MESSAGE_RECEIVED
  }} />);

  expect(wrapper.find('div').at(0).find('span').at(0).text()).toEqual('Test, ');
});
