import React from 'react';
import ReactDOM from 'react-dom';
import TrendingSection from './TrendingSection';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrendingSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
