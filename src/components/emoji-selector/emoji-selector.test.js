import React from 'react';
import EmojiSelector from './index';
import { shallow } from 'enzyme';
import { Picker } from 'emoji-mart';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<EmojiSelector onSelect={callback} />);

  expect(wrapper.find('.fa-smile-wink')).not.toBeUndefined();
});

it('calls onSelect callback once', () => {
  const wrapper = shallow(<EmojiSelector onSelect={callback} />);
  wrapper.simulate('click');
  wrapper.shallow()
    .find(Picker)
    .simulate('select', { unified: '123' });
  expect(callback).toHaveBeenCalledTimes(1);
});
