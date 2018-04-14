import React from 'react';
import ReactDOM from 'react-dom';
import SearchFieldButton from './SearchFieldButton';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchFieldButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
