import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Linkify from 'react-linkify';
import Img from 'react-image';
import { DateTime } from 'luxon';
import VideoPlayer from '../video-player';

import { getYoutubeDataFromMessage } from '../../helpers/youtube-link-parser';

import styles from './message.module.scss';

const getVideoLink = message => {
  const data = getYoutubeDataFromMessage(message);

  if (data && data.provider === 'youtube') {
    return `http://www.youtube.com/watch?v=${data.id}`;
  }

  return null;
};

const Message = ({ message, timeFormat, theme }) => {
  const videoLink = getVideoLink(message.message);

  return (
    <li className={classnames(styles.messageWrapper, {
      [styles.received]: message.type === 'MESSAGE_RECEIVED',
      [styles.sent]: message.type === 'MESSAGE_SENT'
    })}>
      <div className={styles.messageHeader}>
        {message.type === 'MESSAGE_RECEIVED' && <span>{message.username}, </span>}
        <span>{message.dateTime.toLocaleString(timeFormat)}</span>
      </div>
      <div className={styles.messageBody}>
          <Linkify>
            <Img
              src={message.message} unloader={<div className={styles.textContent}>{message.message}</div>}/>
            {videoLink && (
              <VideoPlayer url={videoLink} />
            )}
          </Linkify>
        </div>
    </li>
  );
};

Message.propTypes = {

};

export default Message;