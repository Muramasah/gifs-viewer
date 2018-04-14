import React from 'react';
import ReactDOM from 'react-dom';
import SearchSection from './SearchSection';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
