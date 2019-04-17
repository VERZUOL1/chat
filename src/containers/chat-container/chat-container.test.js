import React from 'react';
import { shallow } from 'enzyme';
import { ChatContainer } from './chat-container'
import { Messages } from '../../components/messages/messages';
import { MessageInput } from '../../components/message-input/message-input';

const callback = jest.fn();

it('renders without crashing', () => {
  const wrapper = shallow(<ChatContainer updateMessagesStatus={callback}/>);

  expect(wrapper.find(Messages)).not.toBeUndefined();
  expect(wrapper.find(MessageInput)).not.toBeUndefined();
});

it('calls callback function on mount', () => {
  const wrapper = shallow(<ChatContainer updateMessagesStatus={callback}/>);

  expect(callback).toHaveBeenCalled();
});
