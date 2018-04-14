import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteSection from './FavoriteSection';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavoriteSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
