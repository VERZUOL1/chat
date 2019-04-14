import urlParser from 'js-video-url-parser';

export const getYoutubeDataFromMessage = string =>{
  return urlParser.parse(string);
};
