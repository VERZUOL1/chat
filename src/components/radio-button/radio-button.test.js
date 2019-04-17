import React from 'react';
import RadioButton from './index';
import { shallow } from 'enzyme';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<RadioButton
    checked
    onChange={callback}
    label='Test'
    name='test'
    value={1} />);

  expect(wrapper.find('input')).not.toBeUndefined();
});

it('renders label as provided in props', () => {
  const wrapper = shallow(<RadioButton
    checked
    onChange={callback}
    label='Test'
    name='test'
    value={1} />);

  expect(wrapper.find('label').text()).toEqual('Test');
});

it('calls callback function on change', () => {
  const wrapper = shallow(<RadioButton
    checked
    onChange={callback}
    label='Test'
    name='test'
    value={1} />);

  wrapper.find('input').simulate('change');

  expect(callback).toHaveBeenCalled();
});
