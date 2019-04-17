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
import stylesLight from './message.module.scss';
import stylesDark from './message-dark.module.scss';
import { composeTheme } from '@css-modules-theme/core';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

/**
 * Renders chat message
 * @param message
 * @param timeFormat
 * @param theme
 * @returns {*}
 * @constructor
 */
const Message = ({ message, timeFormat, theme }) => {
  const videoLink = getVideoLink(message.message);
  const styles = composeTheme([themes.light, themes[theme]]);

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
              src={message.message} unloader={<span className={styles.textContent}>{message.message}</span>}/>
            {videoLink && (
              <VideoPlayer url={videoLink} />
            )}
          </Linkify>
        </div>
    </li>
  );
};

Message.defaultProps = {
  theme: 'light'
};

Message.propTypes = {
  /**
   * Message object
   */
  message: PropTypes.object,
  /**
   * Selected time format
   */
  timeFormat: PropTypes.object,
  /**
   * Selected theme
   */
  theme: PropTypes.string
};

export { Message };
export default React.memo(Message);