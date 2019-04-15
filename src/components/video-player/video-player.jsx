import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styles from './video-player.module.scss';

/**
 * Renders customized video player
 * @param url
 * @returns {*}
 * @constructor
 */
const VideoPlayer = ({ url }) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        width='100%'
        height='100%' />
    </div>
  );
};

VideoPlayer.propTypes = {
  /**
   * Video url
   */
  url: PropTypes.string
};

export default VideoPlayer;