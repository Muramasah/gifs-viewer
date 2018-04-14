import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteGifGallery from './FavoriteGifGallery';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavoriteGifGallery />, div);
    ReactDOM.unmountComponentAtNode(div);
});
