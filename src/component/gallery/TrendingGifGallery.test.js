import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrendingGifGallery from './TrendingGifGallery';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
    shallow(<TrendingGifGallery />);
});
