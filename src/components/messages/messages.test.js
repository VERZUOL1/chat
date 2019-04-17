import React from 'react';
import { Messages } from './messages';
import { shallow } from 'enzyme';
import { UNREAD } from '../../constants/common';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<Messages />);

  expect(wrapper.find('ul')).not.toBeUndefined();
});

it('renders messages corresponding to provided props', () => {
  const wrapper = shallow(<Messages messages={[
    {
      id: 1,
      dateTime: 1,
      status: UNREAD,
      message: 'test'
    },
    {
      id: 2,
      dateTime: 1,
      status: UNREAD,
      message: 'test'
    }
  ]}/>);

  expect(wrapper.find('ul').children().length).toEqual(3);
});
