import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Linkify from 'react-linkify';
import ReactPlayer from 'react-player';
import Img from 'react-image';

import { getYoutubeDataFromMessage } from '../../helpers/youtube-link-parser';

import styles from './message.module.scss';

const getVideoLink = message => {
  const data = getYoutubeDataFromMessage(message);

  if (data && data.provider === 'youtube') {
    return `http://www.youtube.com/watch?v=${data.id}`;
  }

  return null;
};

const Message = ({ message }) => {
  const videoLink = getVideoLink(message.message);

  return (
    <li className={classnames({
      [styles.received]: message.type === 'MESSAGE_RECEIVED',
      [styles.sent]: message.type === 'MESSAGE_SENT'
    })}>
      <span>{message.username}</span>
      <span>{message.dateTime.toString()}</span>
      <span>
        <Linkify>
          <Img
            src={message.message} unloader={<div>{message.message}</div>}/>
          {videoLink && (
            <ReactPlayer url={videoLink} />
          )}
        </Linkify>
      </span>

    </li>
  );
};

Message.propTypes = {

};

export default Message;