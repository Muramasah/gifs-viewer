import React from 'react';
import ReactDOM from 'react-dom';
import GifGalleryImageItem from './GifGalleryImageItem';

test('PageHeader renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GifGalleryImageItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});