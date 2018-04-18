import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { isObjectEmptyOrUndefined } from '../../helper/object';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const app = shallow(<App />);

  expect(app).toMatchSnapshot();
});

test('componentDidMount adds gifs to trending state', async () => {
  const app = shallow(<App />);

  await app.instance().componentDidMount();

  const trending = app.state().trending;

  expect(isObjectEmptyOrUndefined(trending)).toBe(false);
  expect(Object.keys(trending).length).toBe(10);
});

test('onChangeSearchValue adds gifs to trending state', async () => {
  const app = shallow(<App />);

  await app.instance().onChangeSearchValue('cat');

  const results = app.state().results;

  expect(isObjectEmptyOrUndefined(results)).toBe(false);
  expect(Object.keys(results).length).toBe(20);
});

test('addFavoriteFlagToGifs', () => {
  const app = shallow(<App />);
  let gifs = {
    '3ohc123V1Dr1nf8lcQ': {
      id: '3ohc123V1Dr1nf8lcQ',
      slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
      url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
    }
  }

  app.setState({ favorites: { '3ohc123V1Dr1nf8lcQ': gifs['3ohc123V1Dr1nf8lcQ'] } });

  gifs = app.instance().addFavoriteFlagToGifs(gifs)

  expect(gifs['3ohc123V1Dr1nf8lcQ'].isFavorite).toBe(true);
});

test('addGifToFavorites', async () => {
  const app = shallow(<App />);
  const gifs = {
    '3ohc123V1Dr1nf8lcQ': {
      id: '3ohc123V1Dr1nf8lcQ',
      slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
      url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
    }
  }
  const gif = gifs['3ohc123V1Dr1nf8lcQ'];

  app.instance().addGifToFavorites(gif)

  let favorites = app.state().favorites;

  expect(isObjectEmptyOrUndefined(favorites)).toBe(false);
  expect(Object.keys(favorites).length).toBe(1);
});

test('removeGifFromFavorites', async () => {
  const app = shallow(<App />);
  const gifs = {
    '3ohc123V1Dr1nf8lcQ': {
      id: '3ohc123V1Dr1nf8lcQ',
      slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
      url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
    }
  }
  const gif = gifs['3ohc123V1Dr1nf8lcQ'];

  app.setState({ favorites: { [gif.id]: gif } })
  app.instance().removeGifFromFavorites(gif);

  let favorites = app.state().favorites;

  expect(isObjectEmptyOrUndefined(favorites)).toBe(true);
  expect(Object.keys(favorites).length).toBe(0);
});

test('removeGifFromFavorites and deflag result', async () => {
  const app = shallow(<App />);
  const gifs = {
    '3ohc123V1Dr1nf8lcQ': {
      id: '3ohc123V1Dr1nf8lcQ',
      slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
      url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
    }
  }
  const gif = gifs['3ohc123V1Dr1nf8lcQ'];

  app.setState({ favorites: { [gif.id]: gif }, results: { [gif.id]: gif } })
  app.instance().removeGifFromFavorites(gif);

  let favorites = app.state().favorites;
  expect(isObjectEmptyOrUndefined(favorites)).toBe(true);
  expect(Object.keys(favorites).length).toBe(0);
});