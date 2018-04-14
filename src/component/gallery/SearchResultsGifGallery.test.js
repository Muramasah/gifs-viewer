import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsGifGallery from './SearchResultsGifGallery';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultsGifGallery />, div);
    ReactDOM.unmountComponentAtNode(div);
});
