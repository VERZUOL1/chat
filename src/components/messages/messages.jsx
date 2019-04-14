import React from 'react';
import PropTypes from 'prop-types';

import Message from '../message';

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map((item, ind) => (
        <Message key={ind} message={item} />
      ))}
    </ul>
  );
};

Messages.propTypes = {

};

export default Messages;