import React from 'react';
import ReactDOM from 'react-dom';
import GifGallery from './GifGallery';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GifGallery />, div);
    ReactDOM.unmountComponentAtNode(div);
});
