import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Button onClick={() => {}} />)

  expect(wrapper.find('button')).not.toBeUndefined();
});

it('renders button with provided label', () => {
  const wrapper = shallow(<Button onClick={() => {}} label="Test" />)

  expect(wrapper.find('button > span')).not.toBeUndefined();
});
