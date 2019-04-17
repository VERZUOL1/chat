import React from 'react';
import TextInput from './index';
import { shallow } from 'enzyme';
import EmojiSelector from '../emoji-selector';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<TextInput
    onChange={callback}
    value={'Test'} />);

  expect(wrapper.find('input')).not.toBeUndefined();
});

it('calls callback function on change', () => {
  const wrapper = shallow(<TextInput
    onChange={callback}
    value={'Test'} />);

  wrapper.find('input').simulate('change', { target: { value: 'test' } });

  expect(callback).toHaveBeenCalled();
});

it('renders emoji selector if enabled', () => {
  const wrapper = shallow(<TextInput
    showEmojiSelector
    onChange={callback}
    value={'Test'} />);

  expect(wrapper.find(EmojiSelector)).not.toBeUndefined();
});
