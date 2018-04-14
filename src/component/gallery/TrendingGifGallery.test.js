import React from 'react';
import ReactDOM from 'react-dom';
import TrendingGifGallery from './TrendingGifGallery';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrendingGifGallery />, div);
    ReactDOM.unmountComponentAtNode(div);
});
