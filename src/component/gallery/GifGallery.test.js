import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GifGallery from './GifGallery';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<GifGallery getGifs={async () => { return { payload: { data: [] } } }} />, div);
});
