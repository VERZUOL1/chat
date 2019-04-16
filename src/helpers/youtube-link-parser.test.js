import { getVideoLink } from './youtube-link-parser';

it('returns video link from message', () => {
  const message = 'please watch https://www.youtube.com/watch?v=FyJ0_Ds7F0s';
  expect(getVideoLink(message)).toEqual('http://www.youtube.com/watch?v=FyJ0_Ds7F0s');
});

it('returns video link from partial video link', () => {
  const message = 'www.youtube.com/watch?v=FyJ0_Ds7F0s';
  expect(getVideoLink(message)).toEqual('http://www.youtube.com/watch?v=FyJ0_Ds7F0s');
});

it('returns null if message doesn\'t include valid link', () => {
  const message = 'please watch https://watch?v=FyJ0_Ds7F0s';
  expect(getVideoLink(message)).toEqual(null);
});