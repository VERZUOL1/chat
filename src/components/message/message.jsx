import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Linkify from 'react-linkify';
import Img from 'react-image';

// Components
import VideoPlayer from '../video-player';

// Helpers
import { getVideoLink } from '../../helpers/youtube-link-parser';

// Constants
import { MESSAGE_RECEIVED, MESSAGE_SENT } from '../../constants/common.js'

// Styles
import styles from './message.module.scss';

/**
 * Renders chat message
 * @param message
 * @param timeFormat
 * @param theme
 * @returns {*}
 * @constructor
 */
const Message = ({ message, timeFormat }) => {
  const videoLink = getVideoLink(message.message);

  return (
    <li className={classnames(styles.messageWrapper, {
      [styles.received]: message.type === MESSAGE_RECEIVED,
      [styles.sent]: message.type === MESSAGE_SENT
    })}>
      <div className={styles.messageHeader}>
        {message.type === MESSAGE_RECEIVED && <span>{message.username}, </span>}
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
  /**
   * Message object
   */
  message: PropTypes.object,
  /**
   * Selected time format
   */
  timeFormat: PropTypes.object
};

export default Message;