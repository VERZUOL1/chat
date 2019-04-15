import urlParser from 'js-video-url-parser';

/**
 * Parse incoming string to produce youtube data object with video id
 * @param string
 * @returns {*|*|*}
 */
export const getYoutubeDataFromMessage = string =>{
  return urlParser.parse(string);
};

/**
 * Prepares youtube video link
 * @param message
 * @returns {*}
 */
export const getVideoLink = message => {
  const data = getYoutubeDataFromMessage(message);

  if (data && data.provider === 'youtube') {
    return `http://www.youtube.com/watch?v=${data.id}`;
  }

  return null;
};
